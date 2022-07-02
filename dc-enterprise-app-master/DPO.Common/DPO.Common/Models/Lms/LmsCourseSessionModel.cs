using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public class LmsCourseSessionModel
    {
        public long LmsCourseSessionId { get; set; }

        public long? LmsCourseId { get; set; }

        public string LmsObjectId { get; set; }

        public string LocatorNumber { get; set; }

        public int? AvailableSeats { get; set; }

        public bool Waitlist { get; set; }

        public int? DurationInMinutes { get; set; }

        public string Location { get; set; }

        public DateTime? StartDateTime { get; set; }

        public DateTime? EndDateTime { get; set; }

        public string Timezone { get; set; }

        public string TimezoneDescription { get; set; }

        public virtual LmsFacilityModel LmsFacility { get; set; }
    }
}
