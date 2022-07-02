 
using System.Web.Mvc;
using DPO.Domain;
using DPO.Common;

namespace DPO.Web.Controllers
{
    [Authorise(NoSecurityRequired = true)]
    public class SharedController : BaseController
    {
        private UserServices userService = new UserServices();

        #region Drop Downs

        /// <summary>
        /// Call via ajax to repopulate the Regions dropdown box when a country is selected
        /// </summary>
        /// <param name="regionId"></param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult AjaxDropDownRegions(string stateElementId, string countryCode)
        {
            var regions = new HtmlServices().DropDownModelStates(new AddressModel { CountryCode = countryCode });
            regions.AjaxElementId = stateElementId;
            return PartialView(regions);

        }

        [HttpGet]
        public ActionResult Errors()
        {
            return View("Error");
        }

        [HttpGet]
        public ActionResult Error()
        {
            return View();
        }

        #endregion

    }
}
