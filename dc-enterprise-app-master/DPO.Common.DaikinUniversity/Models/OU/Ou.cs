using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity
{
    public class Ou
    {
        public string Name { get; set; }
        public string OuId { get; set; }
        public string Description { get; set; }
        public string Parent { get; set; }
        public string Owner { get; set; }
        public string Active { get; set; }
        public string AllowReconcile { get; set; }
        public string MailStop { get; set; }
        public string Occupancy { get; set; }
        public string ApprovalRequired { get; set; }
        public string OnSite { get; set; }
        public string ExpirationDate { get; set; }
        public string EffectiveDate { get; set; }
        public string UserInactivationDate { get; set; }
        public string Type { get; set; }
        public string DefaultLanguage { get; set; }
        public string ParentId { get; set; }
        public OuLocation Location { get; set; }
    }
}
