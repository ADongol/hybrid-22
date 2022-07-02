
using DPO.Domain.Services;
using System.Web.Mvc;
using log4net;

namespace DPO.Web.Controllers
{
    [Authorise(NoSecurityRequired = true)]
    public class HomeController : BaseController
    {
        public ILog log;

        public HomeController()
        {
            if (Log != null)
            {
                this.log = Log;
            }
            else
            {
                this.log = log4net.LogManager.GetLogger(typeof(HomeController));
            }
        }

        public ActionResult Index()
        {
            this.log = Log;
            return View("Index", "_DaikinCityLayout");
        }

        public ActionResult DaikinCityIndex()
        {
            DaikinCityWebHandler.StreamIndexBodySection();
            return new EmptyResult();
        }

        [HttpGet]
        public ActionResult PrivacyPolicy()
        {
            return View("PrivacyPolicy", "_ContactFormLayout", new DaikinCityServices().GetPrivacyPolicy());
        }


        public ActionResult DeepLinks()
        {
            return View("DeepLinks","");
        }

        public ActionResult TermsAndConditions()
        {
            return View("TermsAndConditions","");
        }

    }
}
