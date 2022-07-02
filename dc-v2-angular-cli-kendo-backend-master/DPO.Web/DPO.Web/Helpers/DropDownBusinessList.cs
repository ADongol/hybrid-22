﻿using DPO.Common;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Dynamic;
using System.Globalization;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Web.Mvc.Html;
using System.Web.Routing;

namespace DPO.Web.Helpers
{
    public static partial class Extensions
    {
        public static MvcHtmlString DropDownBusinessListFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, DropDownModel model)
        {
            return DropDownBusinessFor(htmlHelper, expression, model, null);
        }
        public static MvcHtmlString DropDownBusinessFor<TModel, TProperty>(this HtmlHelper<TModel> htmlHelper, Expression<Func<TModel, TProperty>> expression, DropDownModel model, object htmlAttributes)
        {
            return htmlHelper.DropDownListFor(expression, model, "Choose....", "No business found", htmlAttributes);
        }

    }


	
}