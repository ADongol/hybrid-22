using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Model.Light
{
    public class ProductNumberQueryList
    {
        public ProductNumberQueryList()
        {
            ProductNumbers = new List<string>();
        }

        public List<string> ProductNumbers { get; set; }
    }
}
