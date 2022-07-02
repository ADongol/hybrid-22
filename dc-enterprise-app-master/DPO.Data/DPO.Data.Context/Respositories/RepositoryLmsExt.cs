using DPO.Common;
using EntityFramework.Extensions;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Data
{
    public partial class Repository
    {
        public IQueryable<LmsCourse> LmsCourses
        {
            get
            {
                return this.GetDbSet<LmsCourse>();
            }
        }

        public IQueryable<LmsCourseSession> LmsCourseSessions
        {
            get
            {
                return this.GetDbSet<LmsCourseSession>();
            }
        }

        public LmsCourse UpsertLmsCourse(LmsCourse course)
        {
            if (course == null)
            {
                return null;
            }

            var foundCourse = this.LmsCourses.Where(w => w.LmsObjectId == course.LmsObjectId).FirstOrDefault();

            if (foundCourse != null)
            {
                // No changes required
                // Charles Teel - Delete after - 02/01/2019 - Removed because sessions may change even though the course will not.
                //if (foundCourse.LmsUpdateDate == course.LmsUpdateDate)
                //{
                //    return foundCourse;
                //}

                foundCourse.LmsCourseSessions = course.LmsCourseSessions;
                foundCourse.LmsCreateDate = course.LmsCreateDate;
                foundCourse.LmsObjectId = course.LmsObjectId;
                foundCourse.LmsUpdateDate = course.LmsUpdateDate;
                foundCourse.Location = course.Location;
                foundCourse.Title = course.Title;

                var entry = this.Context.Entry(foundCourse);

                switch (entry.State)
                {
                    case EntityState.Unchanged:
                        entry.State = EntityState.Modified;
                        break;
                    default:
                        break;
                }

                // Clear old course sessions
                var courseSession = this.LmsCourseSessions.Where(w => w.LmsCourseId == foundCourse.LmsCourseId).Delete();

                this.SaveChanges();

                //foundCourse.LmsCourseSessions = course.LmsCourseSessions;

                foreach (var sess in course.LmsCourseSessions)
                {
                    sess.LmsCourseId = foundCourse.LmsCourseId;
                    this.Context.LmsCourseSessions.Add(sess);
                }

                this.SaveChanges();

                return foundCourse;
            }
            else
            {
                this.Context.LmsCourses.Add(course);

                this.SaveChanges();
            }

            return course;
        }

        public IQueryable<LmsCourseSessionViewModel> QueryLmsCoursesSessionsViewableBySearch(UserSessionModel user, SearchLmsCourse search, bool noPaging)
        {
            IQueryable<LmsCourseSessionViewModel> query;

            //specifc override for person's permissions / daikin user status
            query = QueryLmsCoursesViewableByUser(user, search);

            query = Filter(query, search);

            if (!noPaging)
            {
                if (search != null && search.ReturnTotals)
                {
                    search.TotalRecords = query.Count();
                }

                query = Paging(user, query, search);
            }

            return query;
        }

        private IQueryable<LmsCourseSessionViewModel> QueryLmsCoursesViewableByUser(UserSessionModel user, SearchLmsCourse searchProject = null)
        {
            IQueryable<LmsCourseSessionViewModel> query;

            // TODO: No authentication required

            query = from course in this.LmsCourses
                    join sessions in this.LmsCourseSessions on course.LmsCourseId equals sessions.LmsCourseId
                    orderby sessions.StartDateTime
                    select new LmsCourseSessionViewModel()
                    {
                        AvailableSeats = sessions.AvailableSeats,
                        CourseDescription = course.Description,
                        CourseLocation = course.Location,
                        CourseTitle = course.Title,
                        DurationInMinutes = sessions.DurationInMinutes,
                        EndDateTime = sessions.EndDateTime,
                        LmsCourseId = course.LmsCourseId,
                        LmsCourseObjectId = course.LmsObjectId,
                        LmsCourseSessionId = sessions.LmsCourseSessionId,
                        LmsCreateDate = course.LmsCreateDate,
                        LmsSessionObjectId = sessions.LmsObjectId,
                        LmsUpdateDate = course.LmsUpdateDate,
                        LocatorNumber = sessions.LocatorNumber,
                        SessionLocation = sessions.Location,
                        StartDateTime = sessions.StartDateTime,
                        Timezone = sessions.Timezone,
                        TimezoneDescription = sessions.TimezoneDescription,
                        Waitlist = sessions.Waitlist
                    };

            return query;
        }

        private IQueryable<LmsCourseSessionViewModel> Filter(IQueryable<LmsCourseSessionViewModel> query, SearchLmsCourse search) //, SearchCourse search)
        {
            if (search == null) return query;

            if (search.SessionStartDate.HasValue)
            {
                query = query.Where(w => w.StartDateTime >= search.SessionStartDate);
            }

            if (search.SessionEndDate.HasValue)
            {
                query = query.Where(w => w.EndDateTime <= search.SessionEndDate);

            }

            if (!String.IsNullOrWhiteSpace(search.Location))
            {
                query = query.Where(w => w.SessionLocation.ToLower().Contains(search.Location.ToLower()));
            }

            //if (search.Address != null)
            //{
            //    if (search.Address.StateId.HasValue)
            //    {
            //        query = query.Where(s =>
            //            s.LmsCourseSessions.Any(a => a.LmsFacility.StateProvinceId == search.Address.StateId));
            //    }

            //    if (!String.IsNullOrWhiteSpace(search.Address.Location))
            //    {
            //        query = query.Where(s =>
            //            s.LmsCourseSessions.Any(a => a.LmsFacility != null && a.LmsFacility.City.ToLower().Contains(search.Address.Location)));
            //    }
            //}

            return query;
        }


    }
}
