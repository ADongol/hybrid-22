namespace DPO.Common
{
    public class CommissionRequestSendEmailModel : SendEmailModel
    {
        public CommissionRequestSendEmailModel()
            : base()
        {

        }

        public CommissionRequestModel commissionRequest;
        public string AccountManagerEmail { get; set; }
        public string AccountOwnerEmail { get; set; }
        public string DVPEmail { get; set; }
        public string TSMEmail { get; set; }
        public string ASMEmail { get; set; }
        public string RSMEmail { get; set; }
        public string CSMEmail { get; set; }
    }
}

