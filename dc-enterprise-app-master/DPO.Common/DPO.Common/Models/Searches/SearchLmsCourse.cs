using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public class SearchLmsCourse : Search
    {
        public DateTime? SessionStartDate { get; set; }
        
        public DateTime? SessionEndDate { get; set; }

        public string Location { get; set; }

        public AddressModel Address { get; set; }
    }
}
