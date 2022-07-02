using DPO.Common;
using DPO.Common.DaikinUniversity;
using DPO.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Domain.Services
{
    public class DaikinCityLmsServices : BaseServices
    {
        public DaikinCityLmsServices() : base() { }

        public DaikinCityLmsServices(DPOContext context) : base(context) { }

        public DaikinCityLmsServices(BaseServices injectService, string propertyReference)
        {
            this.Response = injectService.Response;
            this.Context = injectService.Context;
            this.Db = injectService.Db;
            this.Response.PropertyReference = propertyReference;
        }

        public LmsCourse ModelToEntity(LmsCourseModel model)
        {
            var entity = new LmsCourse();

            if (this.Response.HasError) return null;

            if (model != null)
            {
                entity.Description = Utilities.Trim(model.Description);

                entity.LmsCourseSessions = ModelToEntity(model.LmsCourseSessions);

                entity.LmsCreateDate = model.LmsCreateDate;

                entity.LmsCourseId = model.LmsCourseId;

                entity.LmsObjectId = model.LmsObjectId;

                entity.LmsUpdateDate = model.LmsUpdateDate;

                entity.Location = model.Location;

                entity.Title = model.Title;
            }

            return entity;
        }

        public LmsCourseSession ModelToEntity(LmsCourseSessionModel model)
        {
            var entity = new LmsCourseSession();

            if (this.Response.HasError) return null;

            if (model != null)
            {
                entity.AvailableSeats = model.AvailableSeats;
                entity.DurationInMinutes = model.DurationInMinutes;
                entity.StartDateTime = model.StartDateTime;
                entity.EndDateTime = model.EndDateTime;
                //entity.LmsCourse
                entity.LmsCourseId = model.LmsCourseId;
                entity.LmsCourseSessionId = model.LmsCourseSessionId;

                entity.LmsFacility = ModelToEntity(model.LmsFacility);
                entity.LmsObjectId = model.LmsObjectId;
                entity.Location = model.Location;
                entity.LocatorNumber = model.LocatorNumber;

                entity.Timezone = model.Timezone;
                entity.TimezoneDescription = model.TimezoneDescription;

                entity.Waitlist = model.Waitlist;
            }

            return entity;
        }

        public LmsFacility ModelToEntity(LmsFacilityModel model)
        {
            var entity = new LmsFacility();

            if (model != null)
            {
                entity.AddressLine1 = model.Address != null ? model.Address.AddressLine1 : null;
                entity.AddressLine2 = model.Address != null ? model.Address.AddressLine2 : null;

                entity.City = model.Address != null ? model.Address.Location : null;
                entity.PostalCode = model.Address != null ? model.Address.PostalCode : null;
                entity.StateProvinceId = model.Address != null ? model.Address.StateId : null;

                entity.Name = model.Name;
            }

            return entity;
        }

        public ICollection<LmsCourseSession> ModelToEntity(ICollection<LmsCourseSessionModel> models)
        {
            if (models == null)
            {
                return null;
            }

            List<LmsCourseSession> courseSessions = new List<LmsCourseSession>();
            foreach (var session in models)
            {
                var entitySess = ModelToEntity(session);
                if (entitySess == null)
                {
                    continue;
                }

                courseSessions.Add(entitySess);
            }

            return courseSessions;
        }

        public ServiceResponse GetAllLmsCourseSessionViewModels(LmsCourseListModel model)
        {
            model.ReturnTotals = true;


            var resp = new ServiceResponse()
            {
                Model = model
            };

            var savePagesize = model.PageSize; // switch off paging

            model.PageSize = DPO.Common.Constants.DEFAULT_PAGESIZE_RETURN_ALL;

            var query = from courseSession in this.Db.QueryLmsCoursesSessionsViewableBySearch(null, model, true)
                        select courseSession;

            // TODO:  Server side sorting

            //string sortcolumn = (model.SortColumn + "").ToLower();

            //bool desc = model.IsDesc;

            //switch (sortcolumn)
            //{
            //    case "courseLocation":
            //        query = (desc) ? query.OrderByDescending(s => s) : query.OrderBy(s => s.BidDate);
            //        break;

            //    case "projectowner":
            //        query = (desc) ? query.OrderByDescending(s => s.ProjectOwner) : query.OrderBy(s => s.ProjectOwner);
            //        break;

            //    case "businessname":
            //        query = (desc) ? query.OrderByDescending(s => s.BusinessName) : query.OrderBy(s => s.BusinessName);
            //        break;

            //    case "customername":
            //        query = (desc) ? query.OrderByDescending(s => s.CustomerName) : query.OrderBy(s => s.CustomerName);
            //        break;

            //    case "estimatedclose":
            //        query = (desc) ? query.OrderByDescending(s => s.EstimatedClose) : query.OrderBy(s => s.EstimatedClose);
            //        break;

            //    case "estimateddelivery":
            //        query = (desc) ? query.OrderByDescending(s => s.EstimatedDelivery) : query.OrderBy(s => s.EstimatedDelivery);
            //        break;

            //    case "projectdate":
            //        query = (desc) ? query.OrderByDescending(s => s.ProjectDate) : query.OrderBy(s => s.ProjectDate);
            //        break;

            //    case "projectid":
            //        query = (desc) ? query.OrderByDescending(s => s.ProjectId) : query.OrderBy(s => s.ProjectId);
            //        break;

            //    case "totalnet":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveQuoteSummary.TotalNet) : query.OrderBy(s => s.ActiveQuoteSummary.TotalNet);
            //        break;

            //    case "totallist":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveQuoteSummary.TotalList) : query.OrderBy(s => s.ActiveQuoteSummary.TotalList);
            //        break;

            //    case "totalsell":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveQuoteSummary.TotalSell) : query.OrderBy(s => s.ActiveQuoteSummary.TotalSell);
            //        break;

            //    case "projectopenstatus":
            //        query = (desc) ? query.OrderByDescending(s => s.ProjectOpenStatus) : query.OrderBy(s => s.ProjectOpenStatus);
            //        break;
            //    case "activedarlink":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveDiscountRequestSummary.DiscountRequestStatusTypeDescription) : query.OrderBy(s => s.ActiveDiscountRequestSummary.DiscountRequestStatusTypeDescription);
            //        break;
            //    case "vrvoutdoorcount":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveQuoteSummary.VRVOutdoorCount) : query.OrderBy(s => s.ActiveQuoteSummary.VRVOutdoorCount);
            //        break;
            //    case "splitcount":
            //        query = (desc) ? query.OrderByDescending(s => s.ActiveQuoteSummary.SplitCount) : query.OrderBy(s => s.ActiveQuoteSummary.SplitCount);
            //        break;
            //    default:
            //        query = (desc) ? query.OrderByDescending(s => s.Name) : query.OrderBy(s => s.Name);
            //        break;
            //}

            if (model.ReturnTotals)
            {
                model.TotalRecords = query.Count();
            }

            model.PageSize = savePagesize;

            query = Db.Paging(null, query, model);

            model.Items = new PagedList<LmsCourseSessionViewModel>(query.ToList(), model);

            return resp;
        }

        #region Import From Lms Functions

        public void ImportLmsCourses(IList<LmsCourseModel> courses)
        {
            if (courses == null)
            {
                return;
            }

            foreach (var course in courses)
            {
                ImportLmsCourse(course);
            }
        }

        public void ImportLmsCourse(LmsCourseModel course)
        {
            var entity = this.Db.UpsertLmsCourse(ModelToEntity(course));
        }

        #endregion Import From Lms Functions

        public void FinaliseModel(ContactModel model)
        {
        }
    }
}
