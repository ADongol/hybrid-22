using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity.Models
{
   public class EmployeeData
    {



        public string UserId { get; set; }
        public string UserName { get; set; }
        //public string Guid { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
      
        public string PrimaryEmail { get; set; }
       
        public List<OU> Ous { get; set; }

    }
}
