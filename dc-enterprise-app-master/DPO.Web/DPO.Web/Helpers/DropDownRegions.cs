using DPO.Common;
using System;
using System.Linq.Expressions;
using System.Web.Mvc;

namespace DPO.Web.Helpers
{
    public static partial class Extensions
    {
        public static MvcHtmlString DropDownRegionListFor(this HtmlHelper htmlHelper, DropDownModel model, 
            object htmlAttributes)
        {
            return htmlHelper.DropDownListFor(model.AjaxElementId, model, "Choose....", "No regions found", htmlAttributes);
        }
        public static MvcHtmlString DropDownRegionListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, DropDownModel model)
        {
            return DropDownRegionListFor(htmlHelper, expression, model, null);
        }
        public static MvcHtmlString DropDownRegionListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, DropDownModel model, object htmlAttributes)
        {
            return htmlHelper.DropDownListFor(expression, model , "Choose....", "No regions found", htmlAttributes);
        }
    }	
}