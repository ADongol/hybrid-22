using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public class LmsCourseSessionViewModel
    {
        public long LmsCourseSessionId { get; set; }

        public long LmsCourseId { get; set; }

        public string LmsCourseObjectId { get; set; }

        public string CourseTitle { get; set; }

        public string CourseDescription { get; set; }

        public string CourseLocation { get; set; }

        public DateTime? LmsCreateDate { get; set; }

        public DateTime? LmsUpdateDate { get; set; }

        public string LmsSessionObjectId { get; set; }

        public string LocatorNumber { get; set; }

        public int? AvailableSeats { get; set; }

        public bool Waitlist { get; set; }

        public int? DurationInMinutes { get; set; }

        public string SessionLocation { get; set; }

        public DateTime? StartDateTime { get; set; }

        public DateTime? EndDateTime { get; set; }

        public string Timezone { get; set; }

        public string TimezoneDescription { get; set; }


    }
}
