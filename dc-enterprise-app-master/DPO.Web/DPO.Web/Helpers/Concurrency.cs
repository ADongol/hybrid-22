using DPO.Common;
using System;
using System.Web;
using System.Web.Mvc;

namespace DPO.Web.Helpers
{
    public partial class Extensions
    {        
        public static IHtmlString Concurrency(this HtmlHelper htmlHelper)
        {
            var concurrency = htmlHelper.ViewData.Model as IConcurrency;

            if (concurrency != null)
            {
                return new HtmlString(String.Format("<input type='hidden' id='Concurrency' name='Concurrency' value='{0}' />",
                                   concurrency.Timestamp.Ticks));
            }
            return null;
        }
    }
}