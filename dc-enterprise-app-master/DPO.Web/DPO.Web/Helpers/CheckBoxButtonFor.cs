
using System;
using System.Linq.Expressions;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html; 

namespace DPO.Web.Helpers
{
    public partial class Extensions
    {
        public static IHtmlString CheckBoxButtonFor<TModel>(this HtmlHelper<TModel> htmlHelper,
                                                    Expression<Func<TModel, bool>> expression,
                                                    object value = null,
                                                    bool withValidation = false)
        {
            var input = htmlHelper.CheckBoxFor(expression, new { @class = "cb-switch" });
            var label = String.Format("<label for='{0}' class='cb-switch-label'></label>",htmlHelper.NameFor(expression));

            return new HtmlString(input.ToString() + label.ToString());
        }
    }
}