using System;
using DPO.Common;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Domain
{
    public partial class MaintenancePageService : BaseServices
    {
        public ServiceResponse GetMainenancePageInfo()
        {
            var endTime = DateTime.Now.AddHours(5);

            var query = from config in this.Context.DCMaintenanceConfigs?.OrderByDescending(x=>x.StartTime)
                        select new MaintenancePageModel
                        {
                            MaintenanceId = config.MaintenanceId, 
                            MaintenanceText = config.MaintenanceText, 
                            StartTime = config.StartTime, 
                            EndTime = config.EndTime, 
                            ModifyBy = config.ModifyBy,
                            ModifyOn = config.ModifyOn
                        };

            if (query.ToList().Count == 0)
            {
                this.Response.Model = new MaintenancePageModel
                {
                    MaintenanceText = "Empty",
                    StartTime = DateTime.MinValue,
                    EndTime = DateTime.MinValue,
                };
            }
            else
            {
                this.Response.Model = query.ToList().FirstOrDefault();
            }

            return this.Response;
        }
    }
}
