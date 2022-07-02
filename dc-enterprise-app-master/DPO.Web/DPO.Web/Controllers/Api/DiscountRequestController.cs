using DPO.Common;
using DPO.Domain;
using System;
using System.Web;
using System.Web.Http;
using System.Net.Http;
using System.Net;

namespace DPO.Web.Controllers
{
    [Authorize]
    public class DiscountRequestController : BaseApiController
    {
        public DiscountRequestServices DiscountRequestService = new DiscountRequestServices();
        public ProjectServices ProjectServices = new ProjectServices();
        public QuoteServices QuoteServices = new QuoteServices();

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public ServiceResponse GetDiscountRequest(long? discountRequestId, long? projectId, long? quoteId) {
            //return DiscountRequestService.GetDiscountRequestModel(this.CurrentUser, new DiscountRequestModel { DiscountRequestId = discountRequestId, ProjectId = projectId, QuoteId = quoteId });
            return DiscountRequestService.GetDiscountRequest(this.CurrentUser, new DiscountRequestModel { DiscountRequestId = discountRequestId, ProjectId = projectId, QuoteId = quoteId });
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public ServiceResponse GetMostRecentDiscountRequestModel(long projectId, long quoteId)
        {
            return DiscountRequestService.GetMostRecentDiscountRequestModel(this.CurrentUser, projectId, quoteId);
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public HttpResponseMessage UploadCompetitorQuoteFile()
        {
            var response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                var file = httpRequest.Files[0];

                var competitorQuoteFile = new HttpPostedFileWrapper(file);

                if (competitorQuoteFile != null && competitorQuoteFile.ContentLength > 0)
                {
                    long quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);
                    var message = Utilities.SavePostedFile(competitorQuoteFile, Utilities.GetDARDirectory(quoteId), 512000);
                    if (message != null)
                    {
                        message += "Please select difference file type";
                        response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                        response.ReasonPhrase = message;
                    }
                }
            }
            else
            {
                response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                response.ReasonPhrase = "Import file is missing!";
            }

            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public HttpResponseMessage UploadCompetitorLineComparsionFile()
        {
            var response = new HttpResponseMessage();
            var httpRequest = HttpContext.Current.Request;
            if (httpRequest.Files.Count > 0)
            {
                var file = httpRequest.Files[0];

                var competitorLineComparsionFile = new HttpPostedFileWrapper(file);

                if (competitorLineComparsionFile != null && competitorLineComparsionFile.ContentLength > 0)
                {
                    long quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);
                    var message = Utilities.SavePostedFile(competitorLineComparsionFile, Utilities.GetDARDirectory(quoteId), 512000);
                    if (message != null)
                    {
                        message += "Please select difference file type";
                        response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                        response.ReasonPhrase = message;
                    }
                }
            }
            else
            {
                response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                response.ReasonPhrase = "Import file is missing!";
            }

            return response;
        }

        //TODO: Cannot render MVC view for email
        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public ServiceResponse PostDiscountRequest(DiscountRequestModel model)
        {
            model.OrderDeliveryDate = model.Project.EstimatedDelivery;


            this.ServiceResponse = DiscountRequestService.PostDiscountRequest(this.CurrentUser, model);

            if (this.ServiceResponse.IsOK)
            {
                //model.Project.EstimatedDelivery = model.OrderDeliveryDate;//????
                var response = ProjectServices.PostModel(this.CurrentUser, model.Project);
            }

            if (this.ServiceResponse.IsOK)
            {
                var quoteModel = QuoteServices.GetQuoteModel(this.CurrentUser, model.ProjectId, model.QuoteId).Model as QuoteModel;
                quoteModel.GrossMarginMarkUp = model.GrossMarginMarkUp;
                var response = QuoteServices.PostModel(this.CurrentUser, quoteModel);
            }

            return this.ServiceResponse;
        }
    }
}