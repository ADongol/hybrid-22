using DPO.Common;
using DPO.Domain;
using System;
using System.Net.Http;
using System.Web.Http;
using System.Net;
using System.IO;
using System.Web.Routing;
using System.Web.Mvc;
using System.Web; 

namespace DPO.Web.Controllers
{
    public class BaseApiController : ApiController
    {
        public ServiceResponse ServiceResponse = null;

        private AccountServices accountService = null;

        private UserSessionModel currentUser = null; 

        public UserSessionModel CurrentUser
        {
            get
            {
                return accountService.LoadUserSessionModel();
            }
            set
            {
                this.currentUser = value;
            }
        }

        public bool IsPostRequest { get { return (Request.Method == HttpMethod.Post); } }

        public BaseApiController()
            : base()
        {
            accountService = new AccountServices();
        }
        
        public HttpResponseMessage RedirectToLogin()
        {
            var response = Request.CreateResponse(HttpStatusCode.Found);
            var baseUrl = Request.RequestUri.GetLeftPart(UriPartial.Authority);
            response.Headers.Location = new Uri(baseUrl + "/v3/#/account/login");
            return response;
        }

        public string RenderViewToString(string controllerName, string viewName, object viewData)
        {
            using (var writer = new StringWriter())
            {
                var context = HttpContext.Current;
                var contextBase = new HttpContextWrapper(context);
                var routeData = new RouteData();
                routeData.Values.Add("controller", controllerName);
                
                var controllerContext = new ControllerContext(contextBase,
                                                     routeData,    
                                                  new EmptyController());
   
                var razorViewEngine = new RazorViewEngine();
                var razorViewResult = razorViewEngine.FindView(controllerContext, viewName,                                                       "",   
                                                  false);

                //var routeData = new RouteData();
                //routeData.Values.Add("controller", controllerName);
                //var fakeControllerContext = new ControllerContext(new HttpContextWrapper(new HttpContext(new HttpRequest(null, "http://google.com", null), 
                //                                new HttpResponse(null))), routeData, new FakeController());

                //var viewEngine = ViewEngines.Engines.OfType<PrecompiledMvcEngine>().FirstOrDefault();
                //if (viewEngine == null)
                //{
                //    throw new InvalidOperationException("PrecompiledMvcEngine is not registered");
                //}
                ////var razorViewEngine = new RazorViewEngine();
                //var razorViewResult = viewEngine.FindView(fakeControllerContext, viewName, "", false);
 
                //var view = razorViewResult.SearchedLocations?.Where(x => x.Contains("QuotePackageCoverPage.cshtml")).FirstOrDefault().ToString();
                //razorViewResult.View = "~/Views/Shared/QuotePackageCoverPage.cshtml";

                var viewContext = new ViewContext(controllerContext, razorViewResult.View, 
                                        new ViewDataDictionary(viewData), new TempDataDictionary(), writer);
                razorViewResult.View.Render(viewContext, writer);
                return writer.ToString();
            }
        }

        public class FakeController : ControllerBase { protected override void ExecuteCore() { } }

    }
}