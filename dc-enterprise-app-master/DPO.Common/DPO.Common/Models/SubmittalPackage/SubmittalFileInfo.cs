using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace DPO.Common 
{
    public class SubmittalFileInfo
    {
        Stream stream;

        public string Extension { get; set; }
        public string Name { get; set; }
        public int Size { get; set; }
        public int State { get; set; }
        public string Uid { get; set; }
        public string QuoteId { get; set; }

        public void SaveAs(string filename)
        {
            using (var file = File.Open(filename, FileMode.CreateNew))
                stream.CopyTo(file);
        }
    }
}
