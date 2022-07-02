using DPO.Common;
using DPO.Common.DaikinUniversity;
using DPO.Data;
using log4net;
using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Security.Cryptography;
using System.Text;
using DPO.Common.DaikinUniversity.Models;
using System.Net.Http.Formatting;
using System.Collections.Generic;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using Ou = DPO.Common.DaikinUniversity;
//using Newtonsoft.Json.Linq;
using System.Collections.Specialized;
using System.IO;
using System.Xml.Linq;

namespace DPO.Domain.DaikinUniversity
{
    public class DaikinUniversityApiServices : BaseDaikinUniveristyServices
    {
        protected UserSessionModel daikinSuperUser;
        private static ILog _log = LogManager.GetLogger(typeof(DaikinUniversityApiServices));

        public DaikinUniversityApiServices()
             : base()
        {
        }

        public DaikinUniversityApiServices(DPOContext context)
            : base(context)
        {
            daikinSuperUser = new AccountServices().GetSuperUserSessionModel().Model as UserSessionModel;
        }

        protected string ConfigApiKey { get; set; }
        protected string ConfigApiRelativeUrl { get; set; }
        protected string ConfigApiSecret { get; set; }
        protected string ConfigApiUser { get; set; }
        protected string ConfigStsRelativeUrl { get; set; }

        public ServiceResponse AuthenticateApi()
        {
            Uri uri = GetApiUri(ConfigStsRelativeUrl);

            Guid uniqueId = Guid.NewGuid();
            string queryString = String.Format("userName={0}&alias=DC-{1}", ConfigApiUser, uniqueId.ToString("N"));
            string jsonContent = null; // String.Format(@"{{ userName: '{0}', alias: 'DC1' }}", ConfigApiUser);

            var resp = ExecuteApiRequest<DaikinUniversityApiResponse<ApiSessionToken>>(HttpMethod.Post, uri, queryString, jsonContent);

            if (resp.IsOK)
            {
                var model = resp.Model as DaikinUniversityApiResponse<ApiSessionToken>;
                if (model != null && model.Data.Count > 0)
                {
                    this.SessionToken = model.Data[0];
                }
            }

            return resp;
        }
        public override void LoadConfig()
        {
            base.LoadConfig();

            ConfigApiKey = Utilities.Config("dpo.daikinuniversity.api.key");
            ConfigApiRelativeUrl = Utilities.Config("dpo.daikinuniversity.api.relativeurl");
            ConfigApiSecret = Utilities.Config("dpo.daikinuniversity.api.secret");
            ConfigApiUser = Utilities.Config("dpo.daikinuniversity.api.user");
            ConfigStsRelativeUrl = Utilities.Config("dpo.daikinuniversity.api.sts.relativeurl");
        }

        public ServiceResponse SearchCatalog(SearchGlobalCatalog search)
        {
            EnsureAuthenticated();

            if (String.IsNullOrWhiteSpace(search.Format))
            {
                search.Format = "json";
            }

            string queryString = DaikinUniversityUtilities.ConvertObjectToQueryString(search);
            var uri = GetApiUri("Catalog/GlobalSearch");

            var resp = ExecuteApiRequest<DaikinUniversityApiResponse<GlobalSearchTrainingItem>>(HttpMethod.Get, uri, queryString, null);

            return resp;
        }

        public ServiceResponse GetLearningObject(SearchLearningObject search)
        {
            //EnsureAuthenticated();
            string queryString = DaikinUniversityUtilities.ConvertObjectToQueryString(search);
            var uri = GetApiUri("LO/GetDetails");

            var resp = ExecuteApiRequest<DaikinUniversityApiResponse<LearningObjectResponse>>(HttpMethod.Get, uri, queryString, null);

            return resp;
        }

        public ServiceResponse UserRegistration(UserModel cityUser)
        {

            //  EnsureAuthenticated();
            //todo map the city user to University user
            var user = new EmployeeData()
            {
                UserId = cityUser.Email,
                UserName = "DKNDCY_" + cityUser.UserId,
                FirstName = cityUser.FirstName,
                LastName = cityUser.LastName,
                PrimaryEmail = cityUser.Email,
                Ous = new List<OU>() { new OU() { OuId = "DKN_EXT_DKN_DCY", Type = "Division" } }

            };

            //string queryString = DaikinUniversityUtilities.ConvertObjectToQueryString(user);
            var uri = GetApiUri("x/users/v1/employees");
           
            JsonSerializer ser = new JsonSerializer();

            string reqContent = JsonConvert.SerializeObject(user, new JsonSerializerSettings()
            {
                ContractResolver = new CamelCasePropertyNamesContractResolver(),
                NullValueHandling = NullValueHandling.Ignore,
            });

            FetchSecretToken();
            var employeeActivation = GetDaikinUniversityEmployeeByUserId(uri, System.Web.HttpUtility.UrlEncode( user.UserId));
            if (employeeActivation.Id > 0 )
            {
                if (!employeeActivation.WorkerStatus.Active)
                {
                    employeeActivation.WorkerStatus.Active = true;
                    employeeActivation.ReasonForChange = "Rehired";
                    string reqContentPatch = JsonConvert.SerializeObject(employeeActivation, new JsonSerializerSettings()
                    {
                        ContractResolver = new CamelCasePropertyNamesContractResolver(),
                        NullValueHandling = NullValueHandling.Include
                    });
                    ActivateDaikinUniversityEmployee(uri, employeeActivation.Id, reqContentPatch);
                }
            }
            else
            {
                CreateDaikinUniversityEmployee(uri, reqContent);
            }
            return null;
        }



        public ServiceResponse GetOus(SearchOu search)
        {
            string queryString = DaikinUniversityUtilities.ConvertObjectToQueryString(search);
            var uri = GetApiUri("OrgUnits/OU");

            var resp = ExecuteApiRequest<DaikinUniversityApiResponse<Ou.Ou>>(HttpMethod.Get, uri, queryString, null);

            return resp;
        }

        private void ConvertToServiceResponse(IDaikinUniversityApiResponse apiResp)
        {
            //var resp = 
            //if (apiResp.Error != null)
            //{
            //    apiResp.
            //}
        }

        private void EnsureAuthenticated()
        {
            if (SessionToken == null
                || String.IsNullOrWhiteSpace(SessionToken.Token)
                || SessionToken.ExpiresOn <= DateTime.Now) // Question: Isn't this supposed to be UTC?
            {
                var resp = AuthenticateApi();

                if (!resp.IsOK)
                {
                    string msg = "Unknown error in ensure authenticate";
                    if (resp.Messages != null
                        && resp.Messages.Items != null
                        && resp.Messages.Items.Count > 0)
                    {
                        resp.Messages.Items.Aggregate(String.Empty, (a, l) => a.Trim() + " | " + l.Key + ":" + l.Text);
                    }

                    throw new Exception(String.Format("Unable to authenticate: {0}: {1}",
                        resp.Status, msg));
                }
            }
        }

        private ServiceResponse ExecuteApiRequest<T>(HttpMethod method, Uri apiRequestUri, string queryString, string reqContent, string reqContentType = "application/json")
            where T : IDaikinUniversityApiResponse
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            var client = GetHttpClient();
            var resp = new ServiceResponse();

            Uri reqUri = apiRequestUri;

            if (!string.IsNullOrEmpty(queryString))
            {
                reqUri = new Uri(apiRequestUri + FormatQueryString(queryString));
            }

            HttpRequestMessage reqMsg = GenerateRequest(method, reqUri, reqContent, reqContentType);
            var sessSign = GenerateRequestAPISessionSignature(method, reqUri.AbsolutePath, reqMsg.Headers);
            reqMsg = GenerateRequestApplyAPISignature(reqMsg, sessSign);

            //  var x=   client.SendAsync(reqMsg).Result;

            HttpResponseMessage resMsg = client.SendAsync(reqMsg).Result;

            string resContent = resMsg.Content.ReadAsStringAsync().Result;

            T respModel = resMsg.Content.ReadAsAsync<T>().Result;
            resp.Model = respModel;

            if (resp.Model == null)
            {
                // TODO:  Add resp content
                resp.AddError("Unable to parse response: " + resContent);
            }

            if (respModel.Error != null)
            {
                resp.AddError(respModel.Error.Message);
            }

            if (!resMsg.IsSuccessStatusCode)
            {
                resp.AddError("Failed to call API: " + resMsg.StatusCode + " - " + resContent);
            }

            return resp;
        }

        private HttpRequestMessage GenerateRequest(HttpMethod method, Uri reqUri, string content, string contentType)
        {
            var reqMsg = new HttpRequestMessage(method, reqUri);

            reqMsg.Headers.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            reqMsg.Headers.AcceptEncoding.Add(new StringWithQualityHeaderValue("utf-8"));

            // Order of these matters, must be in alpha order
            if (SessionToken == null
                || String.IsNullOrWhiteSpace(SessionToken.Token))
                reqMsg.Headers.Add("x-csod-api-key", ConfigApiKey);

            reqMsg.Headers.Add("x-csod-date", GetCurrentCsodDate());

            if (SessionToken != null
                && !String.IsNullOrWhiteSpace(SessionToken.Token))
                reqMsg.Headers.Add("x-csod-session-token", SessionToken.Token);

            if (!String.IsNullOrWhiteSpace(content))
                reqMsg.Content = new StringContent(content, Encoding.UTF8, contentType);

            return reqMsg;
        }

        private DaikinUniversityApiSignature GenerateRequestAPISessionSignature(HttpMethod method, string apiRelativeUrl, HttpRequestHeaders headers)
        {
            StringBuilder sbToSign = new StringBuilder();

            // Get all the x-csod headers that we must include in signature except the signature itself
            var csodHeaders = headers.Where(w => w.Key.StartsWith("x-csod-")
                                    && w.Key != "x-csod-signature")
                                 .Select(sm => new
                                 {
                                     Key = sm.Key,
                                     Value = sm.Value.Aggregate(string.Empty, (a, l) => a.Trim() + l.Trim())
                                 })
                                 .Distinct()
                                 .OrderBy(o => o.Key);

            sbToSign.Append(method);

            foreach (var csodHeader in csodHeaders)
            {
                sbToSign.AppendFormat("\n{0}:{1}", csodHeader.Key, csodHeader.Value);
            }

            sbToSign.Append("\n").Append(apiRelativeUrl);

            var signature = new DaikinUniversityApiSignature()
            {
                ApiSecret = SessionToken != null ? SessionToken.Secret : ConfigApiSecret,
                RequestedSignature = sbToSign.ToString()
            };

            byte[] secretKeyBytes = Convert.FromBase64String(signature.ApiSecret);
            byte[] inputBytes = Encoding.UTF8.GetBytes(sbToSign.ToString());

            using (var hmac = new HMACSHA512(secretKeyBytes))
            {
                byte[] hashValue = hmac.ComputeHash(inputBytes);

                signature.Signature = Convert.ToBase64String(hashValue);
            }

            return signature;
        }

        private HttpRequestMessage GenerateRequestApplyAPISignature(HttpRequestMessage reqMsg, DaikinUniversityApiSignature signature)
        {
            reqMsg.Headers.Add("x-csod-signature", signature.Signature);

            return reqMsg;
        }

        private Uri GetApiUri(string apiRequestUri)
        {
            return CombineUri(CombineUri(ConfigDaikinUniversityBaseUrl, ConfigApiRelativeUrl), apiRequestUri);
        }

        #region Daikin University
        private string CreateDaikinUniversityEmployee(Uri uri,   string reqContent)

        {
            var request = (HttpWebRequest)WebRequest.Create(uri);
            var sessionToken = this.SessionToken.Token;
            var sessionTokenSecret = this.SessionToken.Secret;
            request.Headers.Add("x-csod-date", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.000"));
            request.Headers.Add("x-csod-session-token", sessionToken);
            request.Method = "POST";
            var stringToSign = ConstructStringToSign(request.Method, request.Headers, uri.AbsolutePath);
            var sig = SignString512(stringToSign, sessionTokenSecret);
            request.Headers.Add("x-csod-signature", sig);
            request.ContentType = "application/json";
            request.Timeout = 999999;

            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            // Skip validation of SSL/TLS certificate
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };
            try
            {
                using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                {
                    string json = reqContent;
                    streamWriter.Write(json);
                    streamWriter.Flush();
                    streamWriter.Close();

                    var httpResponse = (HttpWebResponse)request.GetResponse();
                    using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                    {
                        var xx = streamReader.ReadToEnd();
                    }
                }

            }

            catch (WebException wx)
            {
                StreamReader reader = new StreamReader(wx.Response.GetResponseStream());
                string error = reader.ReadToEnd();
                return error;
            }

            return "Succeeded";

        }

        public EmployeeActivation GetDaikinUniversityEmployeeByUserId(Uri uri, string userId)

        {
            var getUri = new Uri(uri, String.Format("?includeInactive=true&userId={0}", userId ));

            var empployeeActivation = new EmployeeActivation {WorkerStatus = new WorkerStatus () };

            var request = (HttpWebRequest)WebRequest.Create(getUri);
            var sessionToken = this.SessionToken.Token;
            var sessionTokenSecret = this.SessionToken.Secret;
            request.Headers.Add("x-csod-date", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.000"));
            request.Headers.Add("x-csod-session-token", sessionToken);
            request.Headers.Add("Content-Encoding", "utf-8");
            request.Headers.Add("Accept-Encoding", "utf-8");
            request.Method = "GET";

            var stringToSign = ConstructStringToSign(request.Method, request.Headers, getUri.AbsolutePath);
            var sig = SignString512(stringToSign, sessionTokenSecret);
            request.Headers.Add("x-csod-signature", sig);

            request.ContentType = "application/json";
            request.Timeout = 999999;

            string responseFromServer = string.Empty;
            try
            {
                using (var response = request.GetResponse())
                {
                    using (StreamReader reader = new StreamReader(response.GetResponseStream(), Encoding.UTF8))
                    {
                        responseFromServer = reader.ReadToEnd();
                        Newtonsoft.Json.Linq.JObject jObject = Newtonsoft.Json.Linq.JObject.Parse(responseFromServer);
                        Newtonsoft.Json.Linq.JToken data = jObject["data"];
                        var employees = data["employees"].ToArray();
                        var emp = employees[0];

                        //   var id = emp["id"].ToString();
                        empployeeActivation.Id = Convert.ToInt32( emp["id"].ToString());
                        var workerStatus = emp["workerStatus"];
                        empployeeActivation.WorkerStatus.Active = workerStatus["active"].ToString() == "True" ? true : false;
                        empployeeActivation.WorkerStatus.LastHireDate = workerStatus["lastHireDate"].ToString() == "" ? null : workerStatus["lastHireDate"].ToString();
                        empployeeActivation.WorkerStatus .OriginalHireDate= workerStatus["originalHireDate"].ToString() == "" ? null : workerStatus["originalHireDate"].ToString();
                        empployeeActivation.WorkerStatus.Absent = workerStatus["absent"].ToString() == "True" ? true : false;



                    }
                }
            }

            catch (WebException wx)
            {
                StreamReader reader = new StreamReader(wx.Response.GetResponseStream());
                string error = reader.ReadToEnd();
            }

            return empployeeActivation;
        }

        public string ActivateDaikinUniversityEmployee(Uri uri, int id,string reqContent)

        {
            var patchUri = new Uri(uri, string.Format("/services/api/x/users/v1/employees/{0}", id));

            var request = (HttpWebRequest)WebRequest.Create(patchUri);
            var sessionToken = this.SessionToken.Token;
            var sessionTokenSecret = this.SessionToken.Secret;
            request.Headers.Add("x-csod-date", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.000"));
            request.Headers.Add("x-csod-session-token", sessionToken);
            request.Method = "PATCH";

            var stringToSign = ConstructStringToSign(request.Method, request.Headers, patchUri.AbsolutePath);
            var sig = SignString512(stringToSign, sessionTokenSecret);
            request.Headers.Add("x-csod-signature", sig);

            request.ContentType = "application/json";
            request.Timeout = 999999;
            try
            {
                using (var streamWriter = new StreamWriter(request.GetRequestStream()))
                {
                    string json = reqContent; 

                    streamWriter.Write(json);
                    streamWriter.Flush();
                    streamWriter.Close();

                    var httpResponse = (HttpWebResponse)request.GetResponse();
                    using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
                    {
                        var result = streamReader.ReadToEnd();
                  
                    }
                }

            }

            catch (WebException wx)
            {
                StreamReader reader = new StreamReader(wx.Response.GetResponseStream());
                string error = reader.ReadToEnd();
            }

            return null;

        }

        private void FetchSecretToken()
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            // Skip validation of SSL/TLS certificate
            ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            string Alias = ConfigApiUser + Guid.NewGuid().ToString().Replace("-", "");
            var uri = GetApiUri(string.Format("/services/api/sts/Session?userName={0}&alias={1}", ConfigApiUser, Alias));
            var request = WebRequest.Create(uri);
            request.Method = "POST";

            //create request Header

            request.Headers.Add("x-csod-api-key", ConfigApiKey);
            request.Headers.Add("x-csod-date", DateTime.UtcNow.ToString("yyyy-MM-ddTHH:mm:ss.000"));

            request.ContentType = "text/xml";
            var stringToSign = ConstructStringToSign(request.Method, request.Headers, uri.AbsolutePath);
            var sig = SignString512(stringToSign, ConfigApiSecret);
            request.Headers.Add("x-csod-signature", sig);
            request.Timeout = 999999;
            request.ContentLength = 0;


            //ServicePointManager.Expect100Continue = true;
            //ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            //// Skip validation of SSL/TLS certificate
            //ServicePointManager.ServerCertificateValidationCallback = delegate { return true; };

            var headers = request.Headers.ToString();
            // If you want it formated in some other way.

            string token = "";
            string secret = "";

            using (var response = request.GetResponse())
            {
                using (StreamReader reader = new StreamReader(response.GetResponseStream()))

                {
                    string responseFromServer = reader.ReadToEnd();
                    Console.WriteLine(responseFromServer);
                    var xdoc = XDocument.Parse(responseFromServer);

                    var result = from e in xdoc.Root.Descendants().Where(n => n.Name.LocalName == "data")
                                  .Descendants().Where(n => n.Name.LocalName == "Session")  //.Where(n => n.Name.LocalName == "Token")
                                 select new
                                 {
                                     sessionToken = e.Elements().Where(f => f.Name.LocalName == "Token").FirstOrDefault().Value,
                                     Secret = e.Elements().Where(f => f.Name.LocalName == "Secret").FirstOrDefault().Value

                                 };

                    token = result.Select(x => x.sessionToken).FirstOrDefault();
                    secret = result.Select(x => x.Secret).FirstOrDefault();
                }
            }
            this.SessionToken = new ApiSessionToken { Token = token, Secret = secret };

        }
        //Method for creating header
        private string ConstructStringToSign(string httpMethod, NameValueCollection headers, string pathAndQuery)

        {
            StringBuilder stringToSign = new StringBuilder();
            var httpVerb = httpMethod.Trim() + "\n";
            var csodHeaders = headers.Cast<string>().Where(w => w.StartsWith("x-csod-"))
                                                    .Where(w => w != "x-csod-signature")
                                                    .Distinct()
                                                    .OrderBy(s => s)
                                                    .Aggregate(string.Empty, (a, l) => a + l.ToLower().Trim() + ":" + headers[l].Trim() + "\n");

            stringToSign.Append(httpVerb);
            stringToSign.Append(csodHeaders);
            stringToSign.Append(pathAndQuery);
            return stringToSign.ToString();

        }

        //Method for encryption

        private string SignString512(string stringToSign, string secretKey)

        {
            byte[] secretkeyBytes = Convert.FromBase64String(secretKey);
            byte[] inputBytes = Encoding.UTF8.GetBytes(stringToSign);
            using (var hmac = new HMACSHA512(secretkeyBytes))
            {
                byte[] hashValue = hmac.ComputeHash(inputBytes);
                return System.Convert.ToBase64String(hashValue);
            }
        }

       
        #endregion


    }
}