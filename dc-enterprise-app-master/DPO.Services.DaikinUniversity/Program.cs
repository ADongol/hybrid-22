using DPO.Common;
using DPO.Common.DaikinUniversity;
using DPO.Domain.DaikinUniversity;
using DPO.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Services.DaikinUniversity
{
    class Program
    {
        static void Main(string[] args)
        {
            // Configure logging
            log4net.Config.XmlConfigurator.Configure();

            bool parmsPassed = true;

            if (args.Length > 0 && !String.IsNullOrWhiteSpace(args[0]))
            {
                switch (args[0].ToLower())
                {
                    case "importlmsdata":
                        ImportLmsData();
                        break;
                    default:
                        parmsPassed = false;
                        break;
                }
            }
            else
            {
                parmsPassed = false;
            }

            if (!parmsPassed)
            {
                Console.WriteLine("No arguments used");
            }
        }

        private static void ImportLmsData()
        {
            //var facilities = GetAllLmsFacilities();

            ImportLmsCourses();
        }

        public static void ImportLmsCourses()
        {
            var courses = GetAllLmsCoursesViaApi();

            var services = new DaikinCityLmsServices();

            services.ImportLmsCourses(courses);
        }

        #region Facilities

        public static List<LmsFacilityModel> GetAllLmsFacilities()
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            int pageNum = 0;
            int totalRecords = 0;
            int totalPages = 1;
            int recordsPerPage = 10;

            var duServices = new DaikinUniversityApiServices();
            List<LmsFacilityModel> facilities = new List<LmsFacilityModel>();

            while (pageNum < totalPages)
            {
                pageNum++;

                //var search = new SearchOu()
                //{
                //    //OuType = (int)OuTypeEnum.PhysicalLocation
                //};

                var ouResp = duServices.GetOus(null);
                var ouModel = ouResp.Model as DaikinUniversityApiResponse<Ou>;

                totalRecords = ouModel.TotalRecords.HasValue ? ouModel.TotalRecords.Value : 0;
                totalPages = (int)Math.Round((decimal)totalRecords / recordsPerPage, 0);

                if (!ouResp.IsOK || ouModel.Data == null)
                {
                    Console.WriteLine("Catalog response returned a not okay");
                    continue;
                }

                foreach (var ou in ouModel.Data)
                {
                    var newFacility = BuildLmsFacility(ou);
                    if (newFacility != null)
                    {
                        facilities.Add(newFacility);
                    }
                }
            }

            return facilities;
        }

        private static LmsFacilityModel BuildLmsFacility(Ou ou)
        {
            if (ou == null)
            {
                return null;
            }

            // TODO:  States
            var newFacility = new LmsFacilityModel()
            {
                Name = ou.Name,
                LmOuId = ou.OuId,
                Address = new AddressModel()
                {
                    AddressLine1 = ou.Location != null ? ou.Location.Line1 : String.Empty,
                    AddressLine2 = ou.Location != null ? ou.Location.Line2 : String.Empty,
                    PostalCode = ou.Location != null ? ou.Location.PostalCode : String.Empty
                }
            };

            return newFacility;
        }

        #endregion Facilities

        #region Courses

        private static List<LmsCourseModel> GetAllLmsCoursesViaApi()
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            int pageNum = 0;
            int totalRecords = 0;
            int totalPages = 1;
            int recordsPerPage = 25;

            var duServices = new DaikinUniversityApiServices();
            List<LmsCourseModel> courses = new List<LmsCourseModel>();

            while (pageNum < totalPages)
            {
                pageNum++;

                var search = new SearchGlobalCatalog()
                {
                    Provider = "Daikin (DKN) Technical Training (ILT)",
                    PageNumber = pageNum,
                    Format = "json"
                };

                var catalogResp = duServices.SearchCatalog(search);
                var catalogModel = catalogResp.Model as DaikinUniversityApiResponse<GlobalSearchTrainingItem>;

                if (catalogModel == null)
                {
                    throw new Exception("Catalog model is null");
                    return courses;
                }

                totalRecords = catalogModel.TotalRecords.HasValue ? catalogModel.TotalRecords.Value : 0;
                totalPages = (int)Math.Round((decimal)totalRecords / recordsPerPage, 0);

                if (!catalogResp.IsOK || catalogModel.Data == null)
                {
                    Console.WriteLine("Catalog response returned a not okay");
                    continue;
                }

                foreach (var duCourse in catalogModel.Data)
                {
                    var newCourse = BuildLmsCourse(duServices, duCourse);
                    if (newCourse != null)
                    {
                        courses.Add(newCourse);
                    }
                }

            }

            return courses;
        }

        private static LmsCourseModel BuildLmsCourse(DaikinUniversityApiServices services, GlobalSearchTrainingItem duCourse)
        {
            if (duCourse == null)
            {
                return null;
            }

            var newCourse = new LmsCourseModel()
            {
                LmsCourseSessions = new List<LmsCourseSessionModel>(),
                LmsCreateDate = duCourse.CreateDate,
                LmsObjectId = duCourse.ObjectId,
                LmsUpdateDate = duCourse.ModifyDate,
                Location = duCourse.Location,
                Title = duCourse.Title,
                Description = duCourse.Description
            };

            SearchLearningObject search3 = new SearchLearningObject()
            {
                ObjectID = duCourse.ObjectId
            };

            var loResponse = services.GetLearningObject(search3);
            var loModel = loResponse.Model as DaikinUniversityApiResponse<LearningObjectResponse>;

            if (!loResponse.IsOK || loModel == null || loModel.Data.Count == 0)
            {
                Console.WriteLine(String.Format("Unable to load learning object {0} - {1}: {2}", 
                    duCourse.ObjectId,
                    duCourse.Title,
                    GetErrorMessages(loResponse.Messages)));

                return newCourse;
            }

            newCourse.LmsCourseSessions = BuildLmsCourseSessions(loModel.Data.FirstOrDefault());

            return newCourse;
        }

        private static string GetErrorMessages(Messages messages)
        {
            if (messages == null)
            {
                return String.Empty;
            }

            StringBuilder sb = new StringBuilder();

            foreach (var msg in messages.Items)
            {
                sb.Append(msg.Type).Append(": ").Append(msg.Text).Append(";;");
            }

            return sb.ToString();
        }
     
        private static List<LmsCourseSessionModel> BuildLmsCourseSessions(LearningObjectResponse learningObject)
        {
            var sessions = new List<LmsCourseSessionModel>();

            if (learningObject == null || learningObject.Object == null || learningObject.Object.Sessions == null)
            {
                return sessions;
            }

            foreach (var duSess in learningObject.Object.Sessions)
            {
                var session = BuildLmsCourseSession(duSess);
                if (session != null) {
                    sessions.Add(session);
                }
            }

            return sessions;
        }

        private static LmsCourseSessionModel BuildLmsCourseSession(SessionDetail session)
        {
            if (session == null)
            {
                return null; 
            }

            var newSession = new LmsCourseSessionModel()
            {
                AvailableSeats = session.SessionSeats,
                DurationInMinutes = ParseSessionDuration(session.SessionDuration),
                EndDateTime = ParseSessionDate(session.SessionEndDate, session.SessionEndTime),
                LmsFacility = new LmsFacilityModel() { Name = "Test" },
                LmsObjectId = session.SessionLOID,
                Location = session.SessionLocation,
                LocatorNumber = session.SessionLocatorNumber.ToString(),
                StartDateTime = ParseSessionDate(session.SessionStartDate, session.SessionStartTime),
                Timezone = session.SessionTimeZone,
                TimezoneDescription = session.TimezoneDescription,
                Waitlist = session.SessionWaitlist
            };

            return newSession;
        }

        private static int? ParseSessionDuration(string durationText)
        {
            if (String.IsNullOrWhiteSpace(durationText))
            {
                return null;
            }

            int durationMinutes = 0;

            if (!Int32.TryParse(durationText, out durationMinutes))
            {
                return null;
            }

            return durationMinutes;
        }

        private static DateTime? ParseSessionDate(string date, string time)
        {
            DateTime? parsedDate = null;

            if (String.IsNullOrWhiteSpace(date)
                || String.IsNullOrWhiteSpace(time))
            {
                return parsedDate;
            }

            var dateTimeToParse = date + " " + time;

            DateTime outDate = DateTime.MinValue;
            if (DateTime.TryParse(dateTimeToParse, out outDate))
            {
                parsedDate = outDate;
            }

            return parsedDate;
        }

        #endregion Courses


    }
}
