using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DPO.Common 
{
    public class MaintenancePageModel
    {
        public byte MaintenanceId { get; set; }
        public string MaintenanceText { get; set; }
        [DisplayFormat(DataFormatString = "{0:mm/dd/yyyy}")]
        public DateTime? StartTime { get; set; }
        [DisplayFormat(DataFormatString = "{0:mm/dd/yyyy}")]
        public DateTime? EndTime { get; set; }
        public long? ModifyBy { get; set; }
        public DateTime? ModifyOn { get; set; }
        public bool showMaintenanceIcon { get; set; }        
    }
}
