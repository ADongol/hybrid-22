using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity.Models
{
    public  class WorkerStatus
    {
        public string LastHireDate { get; set; }

        public string OriginalHireDate { get; set; }

        public bool Active { get; set; }

        public bool Absent { get; set; }
    }
}
