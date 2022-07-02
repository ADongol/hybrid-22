using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public class LmsCourseModel
    {
        public long LmsCourseId { get; set; }

        public string LmsObjectId { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public DateTime? LmsCreateDate { get; set; }

        public DateTime? LmsUpdateDate { get; set; }


        public virtual ICollection<LmsCourseSessionModel> LmsCourseSessions { get; set; }
    }
}
