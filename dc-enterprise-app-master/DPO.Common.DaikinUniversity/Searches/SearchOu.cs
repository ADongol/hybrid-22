using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity
{
    /// <summary>
    /// Search organization units in the Cornerstone System
    /// </summary>
    public class SearchOu
    {
        public string Title { get; set; }

        public string OuId { get; set; }

        //public int OuType { get; set; }

        public bool IncludeInactive { get; set; }

        public int PageNumber { get; set; }

        public readonly int RecordsPerPage = 10;

        public SearchOu()
        {
            this.IncludeInactive = false;
            this.PageNumber = 1;
        }
    }
}
