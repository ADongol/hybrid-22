using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity.Models
{
    public class CourseSessionViewModel
    {
        public string Title { get; set; }

        public OUViewModel Facility { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public string Timezone { get; set; }

        public int SessionSeats { get; set; }
    }
}
