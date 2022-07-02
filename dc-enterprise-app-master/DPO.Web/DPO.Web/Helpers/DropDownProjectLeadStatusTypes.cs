using DPO.Common;
using System;
using System.Linq.Expressions;
using System.Web.Mvc;

namespace DPO.Web.Helpers
{
    public static partial class Extensions
    {
        public static MvcHtmlString DropDownProjectLeadStatusTypeListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, DropDownModel model)
        {
            return DropDownProjectTypeListFor(htmlHelper, expression, model, null);
        }

        public static MvcHtmlString DropDownProjectLeadStatusTypeListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper,
            Expression<Func<TModel, TProperty>> expression, DropDownModel model, object htmlAttributes)
        {
            TProperty propVal = expression.Compile()(htmlHelper.ViewData.Model);

            return htmlHelper.DropDownListFor(expression, model , "Choose....", "No project lead statuses found", htmlAttributes, true);
        }
    }
}