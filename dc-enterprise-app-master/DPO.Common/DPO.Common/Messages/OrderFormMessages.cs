using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common
{
    public static class OrderFormMessages
    {
        public static string MaxFileSizeMsg { get { return "File size has exceeded max allowed!"; } }
        public static string InternalServerErrorMsg { get { return "Something went wrong, please refresh the page and try again!"; } }
        public static string FileTypeErrorMsg { get { return "Please select difference file type"; } }
        public static string ImportFileMissingMsg { get { return "Import file is missing."; } }
    }
}
