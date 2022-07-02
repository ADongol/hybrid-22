using DPO.Data;

namespace DPO.Domain.Services
{
    public class DaikinCityServices : BaseServices
    {
        public DaikinCityServices() : base() { }
        public DaikinCityServices(DPOContext context) : base(context) { }

        public string GetPrivacyPolicy()
        {
            return Db.QueryHomeScreen().PrivacyPolicy;
        }
    }
}
