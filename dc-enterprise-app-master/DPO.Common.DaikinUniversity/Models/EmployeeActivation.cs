using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity.Models
{
    public class EmployeeActivation
    {
        public int Id { get; set; }
        public WorkerStatus WorkerStatus { get; set; }

        public string ReasonForChange { get; set; }

    }
}
