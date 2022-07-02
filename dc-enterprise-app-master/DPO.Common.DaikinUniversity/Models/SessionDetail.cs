
namespace DPO.Common.DaikinUniversity
{
    public class SessionDetail
    {
        //LO ID’s of the sessions associated to the Event.
        public string SessionLOID { get; set; }

        //Locator number of the session.
        public int SessionLocatorNumber { get; set; }

        //Available seats in the session.
        public int SessionSeats { get; set; }

        //Wait list value of the session.
        public bool SessionWaitlist { get; set; }

        //Duration, in minutes, of the session.
        public string SessionDuration { get; set; }

        //Hierarchy of the Session’s Location.
        public string SessionLocation { get; set; }

        //Session start date. Outputted in YYYYMM-DD format.
        public string SessionStartDate { get; set; }

        //Session start time. Outputted in hh:mm:ss am/pm format.
        public string SessionStartTime { get; set; }

        //Session end date. Outputted in YYYY-MMDD format.
        public string SessionEndDate { get; set; }

        //Session end time. Outputted in hh:mm:ss am/pm format
        public string SessionEndTime { get; set; }

        //Time zone of the session (i.e.PST)
        public string SessionTimeZone { get; set; }

        //Timezone Description
        public string TimezoneDescription { get; set; }
    }
}
