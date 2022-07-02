using DPO.Common;
using DPO.Domain;
using System;
using System.Collections.Generic;
using DPO.Services.Light;
using DPO.Model.Light;
using System.Data.Odbc;
using System.Data;
using System.Net.Http;
using System.Web;
using System.Net;
using System.Web.Http;
using System.IO;
using System.Net.Http.Headers;
using System.IO.Compression;
//using Ionic.Zip;
//using ICSharpCode.SharpZipLib.Zip;

namespace DPO.Web.Controllers
{
    public class OrderController : BaseApiController
    { 
        public readonly ERPServiceProvider _erpSvcProvider;
        public readonly OrderServiceLight _orderServiceLight;
        public readonly OrderServices _orderServices;
        public readonly QuoteServices _quoteServices;

        public OrderController()
        {
            _erpSvcProvider = new ERPServiceProvider();
            _orderServiceLight = new OrderServiceLight();
            _orderServices = new OrderServices();
            _quoteServices = new QuoteServices();
        }

        #region GetOrders 

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetNewOrder(long quoteId)
        {
            return _orderServiceLight.GetNewOrder(this.CurrentUser, quoteId);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetSubmittedOrder(long quoteId)
        {
            return _orderServiceLight.GetSubmittedOrder(this.CurrentUser, quoteId);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.SubmitOrder })]
        public ServiceResponse OrderForm(long projectId, long quoteId)
        {
            var serviceResponse = new ServiceResponse();
            serviceResponse = _quoteServices.CheckProductWithNoClassCode(this.CurrentUser, quoteId);
            if (serviceResponse.IsOK)
            {
                serviceResponse = GetNewOrder(quoteId);
                var model = serviceResponse.Model as OrderViewModelLight;
                _orderServiceLight.InsertProjectInfoToMapics(model);  //Web api call to Mapics to insert/update Projects info
            }

            return serviceResponse;
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetOrderInQuote(long quoteId)
        {
            return _orderServiceLight.GetOrderInQuote(this.CurrentUser, quoteId);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetOrderStatusTypes()
        {
            return _orderServiceLight.GetOrderStatusTypes(this.CurrentUser);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetOrderOptions(long projectId, long quoteId)
        {
            return _orderServiceLight.GetOrderOptions(this.CurrentUser, projectId, quoteId);
        }

        /* HTTP POSTS */
        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetOrdersBasedOnSearchParams(SearchOrders searchParams)
        {
            if (this.CurrentUser == null)
            {
                this.ServiceResponse.Messages.AddError("Current User is null");
                return this.ServiceResponse;
            }
            return _orderServices.GetOrdersForGrid(this.CurrentUser, searchParams);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetOrdersForGrid()
        {
            var searchOrders = new SearchOrders();

            if (this.CurrentUser == null)
            {
                this.ServiceResponse.Messages.AddError("Current User is null");
                return this.ServiceResponse;
            }
            return _orderServices.GetOrdersForGrid(this.CurrentUser, searchOrders);
        }

        #endregion GetOrders

        #region POAttachment

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.SubmitOrder })]
        public HttpResponseMessage UploadPOAttachment()
        {
            var response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest != null && httpRequest.Files.Count > 0)
            {
                var file = httpRequest.Files[0];

                var poFile = new HttpPostedFileWrapper(file);

                if (poFile != null && poFile.ContentLength > 0)
                {
                    var quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);

                    //Check if this is the first and only upload for PO Attachment.
                    //If this is beyond 1st upload, delete the previous saved ones, as user would be 
                    //prefering the last upload as a correct po attachment.
                    var poAttachmentDirPath = Utilities.GetPOAttachmentDirectory(quoteId);
                    var poAttachmentFiles = Utilities.GetAllFilesFromDirectory(poAttachmentDirPath);

                    if (poAttachmentFiles != null && poAttachmentFiles.Length > 0)
                    {
                        foreach(var f in poAttachmentFiles)
                        {
                            var poFileToDelete = Path.Combine(poAttachmentDirPath, f.Name);

                            if (poFileToDelete != null)
                            { 
                                if (File.Exists(poFileToDelete))
                                {
                                    File.Delete(poFileToDelete);
                                }
                            }
                        }
                    }

                    //before saving this file as a only poAttachment, make sure to delete any previous uploads user might 
                    //have attempted to upload by mistake
                    var message = Utilities.SavePostedFile(poFile, Utilities.GetPOAttachmentDirectory(quoteId), 25000);
                    if (message != null)
                    {
                        response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                        response.ReasonPhrase = OrderFormMessages.FileTypeErrorMsg;
                    }
                }
            }
            else
            {
                response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                response.ReasonPhrase = OrderFormMessages.ImportFileMissingMsg;
            }

            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.SubmitOrder })]
        public HttpResponseMessage UploadAdditionalOrderDocs()
        {
            var response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest == null || httpRequest.Files.Count == 0)
            {
                response = Request.CreateResponse(HttpStatusCode.InternalServerError);
                response.ReasonPhrase = OrderFormMessages.InternalServerErrorMsg;

                return response;
            }

            var quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);
            long totalFileSize = httpRequest.ContentLength;

            var additionalDocsDirPath = Utilities.GetAdditionalOrderDocsDirectory(quoteId);
            var additionalDocsList = Utilities.GetAllFilesFromDirectory(additionalDocsDirPath);

            if (additionalDocsList != null && additionalDocsList.Length > 0)
            {
                foreach (var file in additionalDocsList)
                {
                    totalFileSize = totalFileSize + file.Length;
                }
            };

            if (totalFileSize > 3000000)
            {
                response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                response.ReasonPhrase = OrderFormMessages.MaxFileSizeMsg;

                return response;
            }
             
            foreach (var file in httpRequest.Files)
            {
                var poFile = new HttpPostedFileWrapper(httpRequest.Files[file.ToString()]);

                if (poFile != null && poFile.ContentLength > 0 && quoteId != 0)
                {
                    var message = Utilities.SavePostedFile(poFile, 
                                        Utilities.GetAdditionalOrderDocsDirectory(quoteId), 25000);
                    if (message != null)
                    {
                        response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                        response.ReasonPhrase = OrderFormMessages.FileTypeErrorMsg;
                    }
                }
            }

            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.SubmitOrder })]
        public HttpResponseMessage RemoveUploadedDocsUrl()
        {
            var response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest != null && httpRequest.Params.Count > 0)
            {
                var fileName = httpRequest.Params[1];

                if (!string.IsNullOrEmpty(fileName))
                {
                    var quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);
                    var result = Utilities.RemoveUploadedFile(fileName, quoteId);

                    if (!result)
                    {
                        response = Request.CreateResponse(HttpStatusCode.InternalServerError);
                        response.ReasonPhrase = OrderFormMessages.InternalServerErrorMsg;
                    }
                }
            }

            return response;
        }

        [HttpGet]
        public ServiceResponse DeleteUploadedDocsOnCancel(long quoteId)
        {
            var serviceResponse = new ServiceResponse();

            var poAttachmentDirPath = Utilities.GetPOAttachmentDirectory(quoteId);
            var poAttachmentList = Utilities.GetAllFilesFromDirectory(poAttachmentDirPath);

            var additionalDocsDirPath = Utilities.GetAdditionalOrderDocsDirectory(quoteId);
            var additionalDocsList = Utilities.GetAllFilesFromDirectory(additionalDocsDirPath);

            if (poAttachmentList != null && poAttachmentList.Length > 0)
            {
                foreach (var file in poAttachmentList)
                {
                    File.Delete(Path.Combine(poAttachmentDirPath, file.Name));
                }
            }

            if (additionalDocsList != null && additionalDocsList.Length > 0)
            {
                foreach (var file in additionalDocsList)
                {
                    File.Delete(Path.Combine(additionalDocsDirPath, file.Name));
                }
            }

            return serviceResponse;
        }

        [HttpGet]
        public HttpResponseMessage UploadAdditionalDocsZip(string quoteId)
        {
            try
            {
                var result = new HttpResponseMessage(HttpStatusCode.OK);
                var directoryPath = Utilities.GetAdditionalOrderDocsDirectory(Convert.ToInt64(quoteId));
                var additionalDocsFilename = directoryPath + Utilities.GetAdditionalDocsFileName(quoteId);

                if (File.Exists(additionalDocsFilename)) File.Delete(additionalDocsFilename);

                var documents = new List<string>();
                var files = Utilities.GetAllFilesFromDirectory(directoryPath);

                foreach (var file in files)
                {
                    var fileName = Path.Combine(directoryPath, file.Name);

                    documents.Add(fileName);
                }

                using (var zip = ZipFile.Open(additionalDocsFilename, ZipArchiveMode.Create))
                {
                    foreach (var doc in documents)
                    {
                        if (File.Exists(doc))
                        {
                            var filename = Path.GetFileName(doc);

                            zip.CreateEntryFromFile(doc, "AdditionalDocs\\" + filename, CompressionLevel.Optimal);
                        }
                    }
                }

                var stream = new FileStream(additionalDocsFilename, FileMode.Open, FileAccess.Read);

                result.Content = new StreamContent(stream);

                result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
                {
                    FileName = "AdditionalDocs-" + quoteId.ToString() + ".zip"
                };

                //result.Content.Headers.ContentLength = stream.Length;
                result.Content.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");

                return result;
            }
            catch (Exception ex)
            {
                throw new HttpResponseException(Request.CreateResponse(HttpStatusCode.InternalServerError, ex.ToString()));
            }
        }

        #endregion POAttachment

        #region PostApproveRejectOrders

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse PostOrder(OrderViewModelLight model)
        {
            if (model.CurrentUser == null)
               model.CurrentUser = this.CurrentUser;            

            if (model.CreatedByUserId == 0)            
               model.CreatedByUserId = model.CurrentUser.UserId;            

            if (model.UpdatedByUserId == 0)            
               model.UpdatedByUserId = model.CurrentUser.UserId;            

            var discountRequestVM = new DiscountRequestModel();
            using (var discountRequestService = new DiscountRequestServices())
            {
                this.ServiceResponse = discountRequestService.GetDiscountRequestModel(this.CurrentUser, model.ProjectId, model.QuoteId);
                discountRequestVM = ServiceResponse.Model as DiscountRequestModel;
            }

            if (model.ERPAccountId != null)
                ServiceResponse = _erpSvcProvider.CheckPONumberExist(model.ERPAccountId, model.PONumber);
            else
                ServiceResponse.Messages.AddError(Resources.ResourceModelBusiness.BM010);

            if (ServiceResponse.IsOK)
                ServiceResponse = _orderServices.PostModel(this.CurrentUser, model);

            return ServiceResponse;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.ApproveDiscounts })]
        public ServiceResponse ApproveOrder(OrderViewModelLight orderVMLight)
        {
            this.ServiceResponse = _orderServices.Approve(this.CurrentUser, orderVMLight);
            if (this.ServiceResponse.IsOK)
            {
                var OrderForEmail = this.ServiceResponse.Model as OrderViewModelLight;
            }

            return this.ServiceResponse;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.ApproveDiscounts })]
        public ServiceResponse RejectOrder(OrderViewModelLight orderVMLight)
        {
            this.ServiceResponse = _orderServices.Reject(this.CurrentUser, orderVMLight);
            if (this.ServiceResponse.IsOK)
            {

            }
            return this.ServiceResponse;
        }

        [ActionName("UpdateOrderStatus")]
        [HttpPost]
        public ServiceResponse UpdateOrderStatus(OrderViewModelLight orderVMLight)
        {
            if (orderVMLight.OrderId == 0)
            {
                this.ServiceResponse.Messages.AddError("OrderId is Invalid");
            }
            if (orderVMLight.OrderStatusTypeId == 0)
            {
                this.ServiceResponse.Messages.AddError("OrderStatus is Invalid");
            }

            if (this.ServiceResponse.HasError)
            {
                return this.ServiceResponse;
            }
            else
            {
                var order = _orderServices.GetOrderModel(orderVMLight.OrderId).Model as OrderViewModelLight;
                using (var accountService = new AccountServices())
                {
                    var user = accountService.GetUserSessionModel(206016535569891328).Model as UserSessionModel;

                    if (user != null)
                    {
                        try
                        {
                            this.ServiceResponse = _orderServices.ChangeOrderStatus(user, order, (OrderStatusTypeEnum)orderVMLight.OrderStatusTypeId);
                        }
                        catch (Exception ex)
                        {
                            this.ServiceResponse.Messages.AddError(ex.Message);
                        }
                    }
                }
            }

            return this.ServiceResponse;
        }

        #endregion PostApproveRejectOrders

        #region HelperFunctions
        [HttpGet]
        public ServiceResponse CheckIfOrderIsSubmitted(long quoteId)
        {
            this.ServiceResponse = new ServiceResponse();
            var result = _orderServices.CheckOrderStatus(quoteId);

            if (result)
                this.ServiceResponse.IsOK.Equals(true);
            else
                this.ServiceResponse.IsOK.Equals(false);

            return this.ServiceResponse;
        }

        #endregion

        #region ODBC connection to oracle - will be debrecated later after moving to AWS.
        [ActionName("CheckAccountOnMapics")]
        [HttpGet]
        public ServiceResponse CheckAccountOnMapics(string AccountId)
        {
            var conString = System.Configuration.ConfigurationManager.ConnectionStrings["Mapics"].ConnectionString;

            var responseMessages = new List<string>();

            using (OdbcConnection con = new OdbcConnection(conString))
            {
                    OdbcCommand cmd = new OdbcCommand();
                    string comText = "{CALL VAL_CUST(?, ?, ?)}";
                    cmd.Connection = con;
                    cmd.CommandText = comText;
                    cmd.CommandType = CommandType.StoredProcedure;
                    
                    OdbcParameter param1 = new OdbcParameter();
                    param1.OdbcType = OdbcType.VarChar;
                    param1.Size = 4;
                    param1.ParameterName = "P1aenb";
                    param1.Value = "01";
                    cmd.Parameters.Add(param1);

                    OdbcParameter param2 = new OdbcParameter();
                    param2.OdbcType = OdbcType.VarChar;
                    param2.Size = 10;
                    param2.ParameterName = "P1canb";
                    param2.Value = AccountId;
                    cmd.Parameters.Add(param2);

                    OdbcParameter param3 = new OdbcParameter();
                    param3.OdbcType = OdbcType.VarChar;
                    param3.Size = 10;
                    param3.ParameterName = "P1retn";
                    param3.Direction = ParameterDirection.Output;
                    param3.Value = string.Empty;
                    cmd.Parameters.Add(param3);
                    
                    Message result = new Message();
                    result.Text = string.Empty;
                    int rows = 0;

                    try
                    {
                        con.Open();

                        rows = cmd.ExecuteNonQuery();

                        result.Text = cmd.Parameters["P1retn"].Value.ToString();
                        
                        if (result.Text.Contains("Invalid"))
                        {
                            this.ServiceResponse.Messages.AddError("InvalidERPAccount", "ERPAccount is invalid");
                            cmd.Parameters["P1retn"].Value = string.Empty;
                        }
                        if(result.Text.Contains("Suspended"))
                        {
                            this.ServiceResponse.Messages.AddError("ERPAccountSuspended","ERPAccount has been suspended");
                            cmd.Parameters["P1retn"].Value = string.Empty;
                        }
                    }
                    catch (Exception ex)
                    {
                        this.ServiceResponse.Messages.AddError(ex.Message);
                        cmd.Parameters["P1retn"].Value = string.Empty;
                    }
                    finally
                    {
                        cmd.Parameters["P1retn"].Value = string.Empty;
                        con.Close();
                        result.Text = "";   
                    }
            }
           
            return this.ServiceResponse;
        }

        [ActionName("CheckPONumberOnMapics")]
        [HttpGet]
        public ServiceResponse CheckPONumberMapics(string ERPAccountId, string PONumber)
        {
            var conString = System.Configuration.ConfigurationManager.ConnectionStrings["Mapics"].ConnectionString;

            var responseMessages = new List<string>();

            using (OdbcConnection con = new OdbcConnection(conString))
            {
                string comText = "{CALL VAL_PONO(?, ?, ?, ?)}";
                OdbcCommand cmd = new OdbcCommand(comText, con);
                cmd.CommandType = CommandType.StoredProcedure;

                OdbcParameter param1 = new OdbcParameter();
                param1.OdbcType = OdbcType.VarChar;
                param1.Size = 2;
                param1.ParameterName = "P1aenb";
                param1.Value = "01";
                param1.Direction = ParameterDirection.Input;
                cmd.Parameters.Add(param1);

                OdbcParameter param2 = new OdbcParameter();
                param2.OdbcType = OdbcType.VarChar;
                param2.Size = 8;
                param2.ParameterName = "P1canb";
                param2.Value = ERPAccountId;
                param2.Direction = ParameterDirection.Input;
                cmd.Parameters.Add(param2);

                OdbcParameter param3 = new OdbcParameter();
                param3.OdbcType = OdbcType.VarChar;
                param3.Size = 22;
                param3.ParameterName = "P1cbtx";

                // add more space to the PONumber to match the 22 length of character 
                int length = 22 - PONumber.Length;
                param3.Value = PONumber + new string(' ', length);

                param3.Direction = ParameterDirection.Input;
                cmd.Parameters.Add(param3);

                OdbcParameter param4 = new OdbcParameter();
                param4.OdbcType = OdbcType.VarChar;
                param4.Size = 10;
                param4.ParameterName = "P1retn";
                param4.Direction = ParameterDirection.Output;
                param4.Value = string.Empty;
                cmd.Parameters.Add(param4);

                Message result = new Message();
                result.Text = string.Empty;
               
                    try
                    {
                        cmd.Connection.Open();
                        cmd.ExecuteNonQuery();

                        result.Text = cmd.Parameters["P1retn"].Value.ToString();

                        if (result.Text.Contains("Duplicate"))
                        {
                            this.ServiceResponse.Messages.AddError("PONumber", "PONumber already exists.");
                            cmd.Parameters["P1retn"].Value = string.Empty;
                        }

                        this.ServiceResponse.Messages.Add(result);
                    }
                    catch (Exception ex)
                    {
                        this.ServiceResponse.Messages.AddError(ex.Message);
                        cmd.Parameters["P1retn"].Value = string.Empty;
                    }
                    finally
                    {
                        cmd.Connection.Close();
                    }
            }

            return this.ServiceResponse;
        }
        #endregion

        #region TEST
        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.SubmitOrder})]
        public ServiceResponse GetSubmittalOrder()
        {
            using (var quoteService = new QuoteServices())
            {
                if (quoteService.HasConfiguredModel(683220433364942848))
                {
                    var temp = 0;
                    //return orderService.BuildSubmittalOrder(683222334861049856);
                }

                var xmlResponse = "<Order_Response><CustomerNumber>20033700</CustomerNumber><Config_Order>9</Config_Order><Order_Type>Customer</Order_Type><MapicsModel><Site>002</Site><Model_Number>DTC060XXX3DXXD</Model_Number><Revision>AA</Revision><BomCreation><Status>Successful</Status></BomCreation></MapicsModel></Order_Response>";
                // string xmlResponse = "<Order_Response><Exception>Duplicate Order# received.</Exception></Order_Response>";
                var serviceResponse = _erpSvcProvider.ProcessMapicsOrderSeriveResponse(xmlResponse);
                return null;
            }
        }

        //Test
        //[HttpGet]
        //public ServiceResponse getPOAttachment(long id) {
        //    ServiceResponse reps = new ServiceResponse();
        //    string fileName = "test PO.txt";
        //    //reps.Model = orderService.GetEncodedPOAttachment(id, fileName);
        //    orderService.UploadPOAttachmentToFTPServer(id, 1 , fileName);
        //    return reps;
        //}
        #endregion TEST
    }
}