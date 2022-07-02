 
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
    public class CommissionRequestController : BaseApiController
    {
        public CommissionRequestServices commissionRequestService = new CommissionRequestServices();

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewRequestedCommission, SystemAccessEnum.RequestCommission })]
        public ServiceResponse GetCommissionRequestModel(long? projectId, long? quoteId, long? commissionRequestId, int? commissionRequestStatusTypeId)
        {
            ServiceResponse response = new ServiceResponse();

            int commissionRequestStatus = 0;
            if (commissionRequestStatusTypeId != null)
            {
                commissionRequestStatus = commissionRequestStatusTypeId.Value;
            }

            if (commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.Approved ||
               commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.Pending ||
               commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.NewRecord)
            {
                response = commissionRequestService.GetCommissionRequestModel(this.CurrentUser, new CommissionRequestModel { ProjectId = projectId, QuoteId = quoteId, CommissionRequestId = commissionRequestId });
            }
            else
            {
                response = commissionRequestService.GetCommissionRequestModel(this.CurrentUser, new CommissionRequestModel { ProjectId = projectId, QuoteId = quoteId });
            }

            return response;
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestDiscounts })]
        public ServiceResponse GetMostRecentCommissionRequestModel(long projectId, long quoteId)
        {
            return commissionRequestService.GetMostRecentCommissionRequestModel(this.CurrentUser, projectId, quoteId);
        }

        [HttpGet]
        [Authorise(Accesses = new[] { SystemAccessEnum.ViewRequestedCommission, SystemAccessEnum.RequestCommission })]
        public ServiceResponse GetCommissionCalculationModel(long? projectId, long? quoteId, long? commissionRequestId, int? commissionRequestStatusTypeId)
        {
            ServiceResponse response = new ServiceResponse();

            int commissionRequestStatus = 0;
            if (commissionRequestStatusTypeId != null)
            {
                commissionRequestStatus = commissionRequestStatusTypeId.Value;
            }

            if (commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.Approved ||
               commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.Pending ||
               commissionRequestStatus == (int)CommissionRequestStatusTypeEnum.NewRecord)
            {
                response = commissionRequestService.GetCommissionRequestModel(this.CurrentUser, new CommissionRequestModel { ProjectId = projectId, QuoteId = quoteId, CommissionRequestId = commissionRequestId }, new CommissionCalculationModel());
            }
            else
            {
                response = commissionRequestService.GetCommissionRequestModel(this.CurrentUser, new CommissionRequestModel { ProjectId = projectId, QuoteId = quoteId }, new CommissionCalculationModel());
            }

            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse PostCommissionCalculation(CommissionRequestModel model) {
            ServiceResponse response = new ServiceResponse();
            response = commissionRequestService.CalculateCommission(this.CurrentUser, model);
            if (response.IsOK == true) {
                response.AddSuccess("Calculation saved successfully!");
            }
            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse PostCommissionRequest(CommissionRequestModel model)
        {
            ServiceResponse response = new ServiceResponse();
            response = commissionRequestService.PostModel(this.CurrentUser, model);
            
            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse ApproveCommissionRequest(CommissionRequestModel model)
        {
            ServiceResponse response = new ServiceResponse();
            response = commissionRequestService.Approve(this.CurrentUser, model);
            //if (response.IsOK == true)
            //{
            //    response.AddSuccess("Commission Request Apporved.");
            //}
            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse RejectCommissionRequest(CommissionRequestModel model)
        {
            ServiceResponse response = new ServiceResponse();
            response = commissionRequestService.Reject(this.CurrentUser, model);
            //if (response.IsOK == true)
            //{
            //    response.AddSuccess("Commission Request Rejected.");
            //}
            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse DeleteCommissionRequest(CommissionRequestModel model)
        {
            ServiceResponse response = new ServiceResponse();
            response = commissionRequestService.Delete(this.CurrentUser, model);
            //if (response.IsOK == true)
            //{
            //    response.AddSuccess("Commission Request Deleted.");
            //}
            return response;
        }

        [HttpPost]
        [Authorise(Accesses = new[] { SystemAccessEnum.RequestCommission, SystemAccessEnum.ApproveCommissionRequests })]
        public ServiceResponse GetCommissionPercentage(CommissionMultiplierModelV2 model)
        {
            return commissionRequestService.GetCommissionPercentage(this.CurrentUser, model);
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
                    var message = Utilities.SavePostedFile(competitorQuoteFile, Utilities.GetDARDirectory(quoteId), 512000);//TODO: Save to DAR Directory?
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
    }
}