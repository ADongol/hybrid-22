using DPO.Common;
using System;
using System.Linq.Expressions;
using System.Web.Mvc;

namespace DPO.Web.Helpers
{
    public static partial class Extensions
    {
        public static MvcHtmlString DropDownProductSortByFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, DropDownModel model)
        {
            return DropDownProductSortByFor(htmlHelper, expression, model, null);
        }

        public static MvcHtmlString DropDownProductSortByFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, DropDownModel model, object htmlAttributes)
        {
            return htmlHelper.DropDownListFor(expression, model, "Choose....", "", htmlAttributes);
        }
    }	
}