using DPO.Common;
using DPO.Common.DaikinUniversity;
using DPO.Common.DaikinUniversity.Models;
using DPO.Common.DaikinUniversity.Searches;
using DPO.Domain;
using DPO.Domain.DaikinUniversity;
using DPO.Domain.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace DPO.Web.Controllers.Api
{
    public class DaikinUniversityController : BaseApiController
    {
        public static int HttpGet { get; private set; }

        public DaikinUniversityApiServices daikinUniversityServices = new DaikinUniversityApiServices();
        public DaikinCityLmsServices daikinCityLmsServices = new DaikinCityLmsServices();

        /// <summary>
        /// Will only search the public LMS Catalog items.  Goes to Daikin City copy of Lms System.
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpPost]
        public ServiceResponse SearchDaikinCityLmsCourseSessions(LmsCourseListModel search)
        {
            var resp = daikinCityLmsServices.GetAllLmsCourseSessionViewModels(search);

            return resp;
        }



        [HttpPost]
        public ServiceResponse UserRegistration( UserModel user)
        {
            var resp = daikinUniversityServices.UserRegistration(user);

            return resp;
        }

        /// <summary>
        /// Will only search the public LMS Catalog items.  Goes direct to the LMS System
        /// </summary>
        /// <param name="search"></param>
        /// <returns></returns>
        [HttpPost]
        public ServiceResponse SearchPublicLmsCatalog(SearchGlobalCatalog search)
        {

            if (search == null)
            {
                search = new SearchGlobalCatalog();
                search.PageNumber = 1;
            }

            search.Provider = "Daikin (DKN) Technical Training (ILT)";
            var duResp = daikinUniversityServices.SearchCatalog(search);

            var serviceResp = new ServiceResponse();
            if (duResp.HasError || duResp.Model == null)
            {
                serviceResp.Messages.Add(duResp.Messages);

                return serviceResp;
            }

            var courseResp = duResp.Model as DaikinUniversityApiResponse<GlobalSearchTrainingItem>;

            List<CourseSessionViewModel> courseSessions = new List<CourseSessionViewModel>();
            serviceResp.Model = courseSessions;

            int count = 0;

            foreach (var course in courseResp.Data)
            {
                //if (count > 2)
                //{
                //    break;
                //}

                SearchLearningObject loSearch = new SearchLearningObject()
                {
                    ObjectID = course.ObjectId
                };

                var loResp = daikinUniversityServices.GetLearningObject(loSearch);
                if (loResp == null || loResp.HasError)
                {
                    serviceResp.Messages.Add(loResp.Messages);
                    continue;
                }

                var loModel = loResp.Model as DaikinUniversityApiResponse<LearningObjectResponse>;

                foreach (var learningObj in loModel.Data)
                {
                    if (learningObj.Object == null
                        || learningObj.Object.Sessions == null)
                    {
                        continue;
                    }

                    foreach (var sess in learningObj.Object.Sessions)
                    {
                        var courseSess = new CourseSessionViewModel()
                        {
                            Title = course.Title,
                            SessionSeats = sess.SessionSeats,
                            Timezone = sess.TimezoneDescription
                        };

                        DateTime? parsedDate = ParseSessionDate(sess.SessionStartDate, sess.SessionStartTime);
                        if (parsedDate.HasValue)
                        {
                            courseSess.StartDate = parsedDate.Value;
                        }

                        parsedDate = ParseSessionDate(sess.SessionEndDate, sess.SessionEndTime);
                        if (parsedDate.HasValue)
                        {
                            courseSess.EndDate = parsedDate.Value;
                        }

                        courseSessions.Add(courseSess);
                    }

                }

                count++;
            }

            return serviceResp;
        }

        private DateTime? ParseSessionDate(string date, string time)
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
    }
}