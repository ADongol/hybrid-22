using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public class LmsFacilityModel
    {
        public long LmsFacilityId { get; set; }

        public string LmOuId { get; set; }

        public string Name { get; set; }

        public AddressModel Address { get; set; }
    }
}
