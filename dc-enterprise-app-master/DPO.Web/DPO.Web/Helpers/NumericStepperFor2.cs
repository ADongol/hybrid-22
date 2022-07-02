
using System;
using System.Linq.Expressions;
using System.Web.Mvc;

namespace DPO.Web.Helpers
{
    public static partial class Extensions
    {

        public static MvcHtmlString NumericStepperFor2<TModel, TProperty>(this HtmlHelper htmlHelper, 
            Expression<Func<TModel, TProperty>> expression, TModel source, int i, object htmlAttributes = null)
        {
            TagBuilder stepper = new TagBuilder("div");

            var quantity = ((LambdaExpression)expression).Compile().DynamicInvoke(source);

            stepper.InnerHtml = String.Format("<button type='button' class='minus'><img src='/Images/numeric-stepper-minus-icon.png'/></button>" +
                                              "<input type='text' class='numbers' id='Products[" + i + "].Product.Quantity" + "'" + 
                                              " name='Products[" + i + "].Product.Quantity" + "'" + " value='{0}'"  + " />" +
                                              "<button type='button' class='plus'><img src='/Images/numeric-stepper-plus-icon.png' /></button>", quantity);

            if (htmlAttributes != null)
            {
                var attributes = HtmlHelper.AnonymousObjectToHtmlAttributes(htmlAttributes);
                stepper.MergeAttributes(attributes, true);
            }

            stepper.AddCssClass("numeric-stepper");

            return new MvcHtmlString(stepper.ToString());
        }
    }
}