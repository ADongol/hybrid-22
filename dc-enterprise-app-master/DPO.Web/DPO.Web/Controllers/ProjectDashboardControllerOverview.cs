  
using System.Web.Mvc;
using DPO.Common; 

namespace DPO.Web.Controllers
{
    public partial class ProjectDashboardController
    {
        public ActionResult Daikinheader()
        {
            return View();
        }

        public ActionResult Index()
        {
            return RedirectToAction("Overview");
        }

        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ActionResult Overview(WidgetContainerModel model)
        {
            model.AvailableWidgetTypes = overviewService.GetAvailableWidgetTypes();

            this.ServiceResponse = overviewService.GetOverviewSearchModel(this.CurrentUser, model);

            ProcessServiceResponse(this.ServiceResponse);

            return View("Overview", this.ServiceResponse.Model);
        }
    }
}