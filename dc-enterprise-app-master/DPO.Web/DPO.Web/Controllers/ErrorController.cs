 
using System.Web.Mvc; 
using DPO.Common; 
using Elmah.Mvc;

namespace DPO.Web.Controllers
{
    [Authorise(UserTypeAllowed = UserTypeEnum.Systems)]
    public class ErrorController : ElmahController
    {
        public ActionResult ViewDetail(string resource)
        {
            return base.Detail(resource);
        }

        public new ActionResult View(string resource)
        {
            return base.Index(resource);
        }
    }    
}
