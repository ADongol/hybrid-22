
using DPO.Common;
using DPO.Domain;
using System.Linq;
using System.Web.Http;
using DPO.Domain.DataQualityService;
using System.Collections.Generic;
using System;

namespace DPO.Web.Controllers
{

    public class EmailController : BaseApiController
    {
        public EmailServices emailService = new EmailServices();

        [HttpGet]
        public ServiceResponse ValidateEmailList(string EmailList)
        {
            var serviceResp = new ServiceResponse();
            List<string> emailsList = new List<string>();

            if (EmailList != null && EmailList.Length > 0)
            {
                emailsList = EmailList.ToString().Split(',', ';').ToList();
            }

            foreach (string email in emailsList)
            {
                if (String.IsNullOrWhiteSpace(email) || email == "null")
                {
                    continue;
                }
                else {
                    serviceResp = emailService.ValidateEmail(email.Trim());
                }
            }

            return serviceResp;
        }

        [HttpPost]
        public ServiceResponse ValidateEmails(Emails EmailList)
        {
            ServiceResponse = emailService.ValidateEmails(EmailList.emails);
            return ServiceResponse;
        }

    }
}