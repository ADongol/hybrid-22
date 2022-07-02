 
using System.Web.Mvc; 

namespace DPO.Web.Helpers
{
    //comment
    public static partial class Extensions
    {
        public static bool IsPage(this HtmlHelper htmlHelper, string page) 
        {
            return (string.Compare(htmlHelper.ViewContext.RouteData.Values["action"].ToString(), page, true) == 0);
        }
    }
}