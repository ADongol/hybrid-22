using DPO.Common;
using DPO.Domain;
using System.Web.Http;

namespace DPO.Web.Controllers
{
    [Authorize]
    public class BusinessController : BaseApiController
    {
        BusinessServices businessService = new BusinessServices();

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewProject })]
        public ServiceResponse GetBusinessList()
        {
            //modified pagesize when called from order list.
            //paging done by client side in order to show all businesses in the dropdown BusinessName
            //Anand 11.18.2018
            var searchBusiness = new SearchBusiness
            {
                PageSize = null
            };

            return businessService.GetBusinessListModel(this.CurrentUser, searchBusiness);
        }
    }
}