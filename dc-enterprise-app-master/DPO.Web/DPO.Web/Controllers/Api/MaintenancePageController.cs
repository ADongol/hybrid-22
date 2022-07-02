using DPO.Common;
using DPO.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace DPO.Web.Controllers 
{
    public class MaintenancePageController : ApiController
    {
        public readonly MaintenancePageService _maintenancePageService;

        public MaintenancePageController()
        {
            _maintenancePageService = new MaintenancePageService();
        }

        [HttpGet]
        public ServiceResponse GetMaintenancePageInfo()
        {
            var result = _maintenancePageService.GetMainenancePageInfo();
            var model = result.Model as MaintenancePageModel;
             
            if (model.MaintenanceText == "Empty")
                model.showMaintenanceIcon = false;
            else
            {
                if ((model.StartTime < DateTime.Now) && (model.EndTime > DateTime.Now))
                    model.showMaintenanceIcon = true;
                else
                    model.showMaintenanceIcon = false;
            }

            return result;
        }
    }
}