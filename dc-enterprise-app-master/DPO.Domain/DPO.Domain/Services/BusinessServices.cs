using System;
using System.Linq;
using DPO.Common;
using DPO.Data;
using System.Data.Entity;

namespace DPO.Domain
{
    public partial class BusinessServices : BaseServices
    {
        private AddressServices addressService = new AddressServices();
        private ContactServices contactService = new ContactServices();
        private BusinessLinkServices businessLinkService;
        private HtmlServices htmlService = new HtmlServices();

        public BusinessServices()
            : base()
        {
            this.addressService = new AddressServices(this.Context);
            this.contactService = new ContactServices(this.Context);
            this.businessLinkService = new BusinessLinkServices(this.Context);
            this.htmlService = new HtmlServices(this.Context);
        }
        public BusinessServices(DPOContext context)
            : base(context)
        {
            this.addressService = new AddressServices(this.Context);
            this.contactService = new ContactServices(this.Context);
            this.businessLinkService = new BusinessLinkServices(this.Context);
            this.htmlService = new HtmlServices(this.Context);
        }

        public ServiceResponse GetBusinessListModel(UserSessionModel admin, SearchBusiness search)
        {
            search.ReturnTotals = true;

            var query = from business in Db.BusinessQueryBySearch(admin, search)
                        join businessType in Db.BusinessTypes on business.BusinessTypeId equals businessType.BusinessTypeId
                        join address in Db.Addresses on business.AddressId equals address.AddressId
                        join state in Db.States on address.StateId equals state.StateId into Lstate
                        from state in Lstate.DefaultIfEmpty()
                        join country in Db.Countries on state.CountryCode equals country.CountryCode into Lcountry
                        from country in Lcountry.DefaultIfEmpty()

                        select new BusinessListModel
                        {
                            AccountId = business.AccountId,
                            DaikinCityId = business.DaikinCityId,
                            CommissionSchemeAllowed = business.CommissionSchemeAllowed,
                            BusinessId = business.BusinessId,
                            WebSite = business.Contact.Website,
                            BusinessName = business.BusinessName,
                            BusinessType = business.BusinessType.Description,
                            Enabled = business.Enabled,
                            Location = address.Location,
                            State = state.Name,
                            Country = country.Name,
                            IsDaikinBranch = (business.BusinessTypeId == (BusinessTypeEnum)200002) ? true : false,
                            IsDaikinComfortPro = business.IsDaikinComfortPro,
                            IsVRVPro = business.IsVRVPro
                        };

            this.Response.Model = query.ToList();

            return this.Response;
        }

        public ServiceResponse GetDistributorsAndReps(UserSessionModel user, string businessName)
        {

            IQueryable<BusinessListModel> query;
            if (user.UserId == 0)// registering
            {
                query = from business in this.Db.Businesses
                        where (business.BusinessTypeId == BusinessTypeEnum.Distributor
                                || business.BusinessTypeId == BusinessTypeEnum.ManufacturerRep
                                || business.BusinessTypeId == BusinessTypeEnum.Branch)
                                && business.Enabled == true
                        select new BusinessListModel
                        {
                            AccountId = business.AccountId,
                            DaikinCityId = business.DaikinCityId,
                            //CommissionSchemeAllowed = business.CommissionSchemeAllowed,
                            BusinessId = business.BusinessId,
                            //WebSite = business.Contact.Website,
                            BusinessName = business.BusinessName,
                            BusinessType = business.BusinessType.Description,
                            Enabled = business.Enabled,
                        };
            }
            else
            {// editing
                query = from business in this.Db.Businesses
                        where (business.BusinessTypeId == BusinessTypeEnum.Distributor
                                || business.BusinessTypeId == BusinessTypeEnum.ManufacturerRep
                                || business.BusinessTypeId == BusinessTypeEnum.Branch)
                                && business.BusinessId != user.BusinessId
                                && business.BusinessName != businessName
                                && business.Enabled == true
                        select new BusinessListModel
                        {
                            AccountId = business.AccountId,
                            DaikinCityId = business.DaikinCityId,
                            //CommissionSchemeAllowed = business.CommissionSchemeAllowed,
                            BusinessId = business.BusinessId,
                            //WebSite = business.Contact.Website,
                            BusinessName = business.BusinessName,
                            BusinessType = business.BusinessType.Description,
                            Enabled = business.Enabled,
                        };
            }

            this.Response.Model = query.ToList();

            return this.Response;
        }

        public ServiceResponse GetBusinessModelByAccountId(UserSessionModel admin, string accountId)
        {
            var business = this.Db.GetBusinessByAccountId(accountId);

            if (business != null)
            {
                this.Response = GetBusinessModel(admin, business.BusinessId, false);
            }

            addressService.FinaliseModel((this.Response.Model as BusinessModel).Address);

            return this.Response;
        }

        public ServiceResponse GetBusinessModel(UserSessionModel admin, SearchBusiness search)
        {
            var busId = Db.BusinessQueryBySearch(admin, search).Select(s => s.BusinessId).FirstOrDefault();

            if (busId > 0)
            {
                this.Response = GetBusinessModel(admin, busId, false);
                addressService.FinaliseModel((this.Response.Model as BusinessModel).Address);
            }
            else
            {
                this.Response.Model = null;
            }

            return this.Response;
        }

        public ServiceResponse GetBusinessModel(UserSessionModel admin, long? businessId, bool isEditing = false)
        {
            BusinessModel model = null;

            if (businessId.HasValue)
            {
                var query = from business in this.Db.BusinessQueryByBusinessId(admin, businessId.Value)
                            join bustype in this.Db.BusinessTypes on business.BusinessTypeId equals bustype.BusinessTypeId into Lbt
                            from bustype in Lbt
                            select new BusinessModel
                            {
                                BusinessId = business.BusinessId,
                                BusinessName = business.BusinessName,
                                AccountId = business.AccountId,
                                DaikinCityId = business.DaikinCityId,
                                ShowPricing = business.ShowPricing,
                                CommissionSchemeAllowed = business.CommissionSchemeAllowed,
                                BusinessTypeId = (int)business.BusinessTypeId,
                                BusinessTypeDescription = bustype.Description,
                                Enabled = business.Enabled,
                                Timestamp = business.Timestamp,
                                ERPAccountId = (business.ERPAccountId == null) ? null : business.ERPAccountId,
                                Address = new AddressModel
                                {
                                    AddressId = business.AddressId,
                                },
                                Contact = new ContactModel
                                {
                                    ContactId = business.ContactId,
                                },
                                AccountManagerEmail = business.AccountManagerEmail,
                                AccountOwnerEmail = business.AccountOwnerEmail,
                                IsDaikinBranch = (business.BusinessTypeId == (BusinessTypeEnum)200002) ? true : false,
                                IsDaikinComfortPro = business.IsDaikinComfortPro,
                                IsVRVPro = business.IsVRVPro,

                                DVP_UserId = business.DVP_UserId,
                                TSM_UserId = business.TSM_UserId,
                                ASM_UserId = business.ASM_UserId,
                                RSM_UserId = business.RSM_UserId,
                                CSM_UserId = business.CSM_UserId,

                            };

                model = query.FirstOrDefault();

                //Get Parent Business if available 
                var businessLink = this.Db.BusinessLinkQueryByBusinessId(model.BusinessId).FirstOrDefault();

                if (businessLink != null)
                {
                    if (businessLink.BusinessId != businessLink.ParentBusinessId)// this check to prevent infinite loop
                    {
                        SearchBusiness businessSearch = new SearchBusiness
                        {
                            BusinessId = businessLink.ParentBusinessId,
                            ReturnTotals = true
                        };
                        var resp = GetBusinessModel(admin, businessSearch);
                        if (resp != null && resp.IsOK && resp.Model != null)
                        {
                            var parentBusiness = resp.Model as BusinessModel;
                            model.ParentBusinessId = (long)parentBusiness.BusinessId;
                            model.ParentBusinessName = parentBusiness.BusinessName;
                        }
                    }

                }

                if (model == null)
                {
                    this.Response.AddError(Resources.DataMessages.DM006);
                }
            }

            model = model ?? new BusinessModel();

            model.Address = addressService.GetAddressModel(admin, model.Address);

            model.Contact = contactService.GetContactModel(admin, model.Contact);

            FinaliseModel(admin, model, isEditing);

            this.Response.Model = model;

            return this.Response;
        }

        #region Finalise Model

        public void FinaliseModel(UserSessionModel admin, BusinessModel model, bool isEditing)
        {
            //user edit/registration uses this drop down
            model.BusinessTypes = htmlService.DropDownModelBusinessTypes((int?)model.BusinessTypeId);

            if (model.BusinessTypeId != null)
            {
                model.BusinessTypeDescription = Enum.GetName(typeof(BusinessTypeEnum), model.BusinessTypeId);
            }


            if (isEditing)
            {
                if (model.Address != null)
                {
                    addressService.FinaliseModel(model.Address);
                }

                // Permissions
                var id = model.BusinessId ?? 0;

                model.CityAreas = htmlService.CheckBoxListModelBusinessPermissions(admin, id, model.CityAreas, PermissionTypeEnum.CityArea);

                model.Brands = htmlService.CheckBoxListModelBusinessPermissions(admin, id, model.Brands, PermissionTypeEnum.Brand);

                model.ProductFamilies = htmlService.CheckBoxListModelBusinessPermissions(admin, id, model.ProductFamilies, PermissionTypeEnum.ProductFamily);

                model.Tools = htmlService.CheckBoxListModelBusinessPermissions(admin, id, model.Tools, PermissionTypeEnum.Tool);
            }
        }

        #endregion

        #region Post Requests

        public ServiceResponse SetupDefaultPermission(UserSessionModel admin, BusinessModel model)
        {
            this.Response = new ServiceResponse();
            this.Db.ReadOnly = false;

            if (model == null)
            {
                return this.Response;
            }

            if (model.BusinessId.HasValue && model.BusinessTypeId.HasValue)
            {
                Db.ReplacePermissions(EntityEnum.BusinessType, (long)model.BusinessTypeId.Value, EntityEnum.Business, model.BusinessId.Value, PermissionTypeEnum.Brand);
                Db.ReplacePermissions(EntityEnum.BusinessType, (long)model.BusinessTypeId.Value, EntityEnum.Business, model.BusinessId.Value, PermissionTypeEnum.CityArea);
                Db.ReplacePermissions(EntityEnum.BusinessType, (long)model.BusinessTypeId.Value, EntityEnum.Business, model.BusinessId.Value, PermissionTypeEnum.ProductFamily);
                Db.ReplacePermissions(EntityEnum.BusinessType, (long)model.BusinessTypeId.Value, EntityEnum.Business, model.BusinessId.Value, PermissionTypeEnum.Tool);

                Db.SaveChanges();
            }

            return this.Response;
        }

        public ServiceResponse EnableDisable(UserSessionModel admin, BusinessModel model)
        {
            this.Db.ReadOnly = false;

            var entity = GetEntity(admin, model);

            if (this.Response.IsOK)
            {
                entity.Enabled = model.Enabled;

                ApplyBusinessRules(admin, entity);
            }

            if (this.Response.IsOK)
            {
                base.SaveToDatabase(model, entity, string.Format("Business '{0}'", entity.BusinessName));
            }

            this.Response.Model = model;

            return this.Response;
        }

        public ServiceResponse PostModel(UserSessionModel admin, BusinessModel model)
        {
            this.Db.ReadOnly = false;

            try
            {
                Business entity = null;

                // Validate Model 
                RulesOnValidateModel(admin, model, true);

                // Map to Entity
                if (this.Response.IsOK)
                {
                    entity = ModelToEntity(admin, model, true);
                }

                // Validate Entity
                if (this.Response.IsOK)
                {
                    ApplyBusinessRules(admin, entity);
                }

                if (this.Response.IsOK)
                {
                    base.SaveToDatabase(model, entity, string.Format("Business '{0}'", entity.BusinessName));
                }

            }
            catch (Exception e)
            {
                this.Response.AddError(e.Message);
                this.Response.Messages.AddAudit(e);
            }

            FinaliseModel(admin, model, true);

            this.Response.Model = model;

            return this.Response;
        }

        #endregion

        #region Post Model To Entity


        public Business ModelToEntityByAccountId(BusinessModel model)
        {
            var entity = this.Db.GetBusinessByAccountId(model.AccountId);

            if (entity != null)
            {
                entity.BusinessName = Utilities.Trim(model.BusinessName);

                entity.AccountId = Utilities.Trim(model.AccountId);

                entity.BusinessTypeId = (BusinessTypeEnum)model.BusinessTypeId;
            }

            return entity;
        }

        public Business ModelToEntity(UserSessionModel admin, BusinessModel model, bool businessEdit)
        {
            var entity = GetEntity(admin, model);

            if (this.Response.HasError) return null;

            entity.BusinessName = Utilities.Trim(model.BusinessName);

            entity.AccountId = Utilities.Trim(model.AccountId);

            if (model.BusinessTypeId != null)
            {
                entity.BusinessTypeId = (BusinessTypeEnum)model.BusinessTypeId;
            }

            if (businessEdit)
            {
                if (this.Context.Entry(entity).State == EntityState.Added)
                {
                    if (entity.IsWebServiceImport)
                    {
                        model.Enabled = true;
                    }
                }

                entity.ShowPricing = model.ShowPricing;

                entity.Enabled = model.Enabled;

                Db.PermissionsUpdate(EntityEnum.CityArea, (long)PermissionTypeEnum.CityArea, EntityEnum.Business, model.BusinessId, CheckBoxListModel.ToPermissionListModel(model.CityAreas), PermissionTypeEnum.CityArea);
                Db.PermissionsUpdate(EntityEnum.Brand, (long)PermissionTypeEnum.Brand, EntityEnum.Business, model.BusinessId, CheckBoxListModel.ToPermissionListModel(model.Brands), PermissionTypeEnum.Brand);
                Db.PermissionsUpdate(EntityEnum.ProductFamily, (long)PermissionTypeEnum.ProductFamily, EntityEnum.Business, model.BusinessId, CheckBoxListModel.ToPermissionListModel(model.ProductFamilies), PermissionTypeEnum.ProductFamily);
                Db.PermissionsUpdate(EntityEnum.Tool, (long)PermissionTypeEnum.Tool, EntityEnum.Business, model.BusinessId, CheckBoxListModel.ToPermissionListModel(model.Tools), PermissionTypeEnum.Tool);

                contactService.BeginPropertyReference(this, "Contact");
                entity.Contact = contactService.ModelToEntity(model.Contact);
                contactService.EndPropertyReference();

                if (model.ParentBusinessId != 0 && model.ParentBusinessId != null)
                {
                    model.BusinessId = entity.BusinessId;
                    UpdateParentBusiness(model);
                }
                else
                {
                    RemoveParentBusiness(model);
                }


            }

            addressService.BeginPropertyReference(this, "Address");
            entity.Address = addressService.ModelToEntity(model.Address);
            addressService.EndPropertyReference();

            return entity;
        }

        #endregion

        public void UpdateParentBusiness(BusinessModel model)
        {
            if (model.BusinessId.Value != model.ParentBusinessId)
            {
                BusinessLink entity = businessLinkService.GetBusinessLinkByBusinessId(model.BusinessId.Value);
                if (entity == null)
                {
                    this.Db.BusinessLinkCreate(model.BusinessId.Value, model.ParentBusinessId);
                }
                else
                {
                    entity.ParentBusinessId = model.ParentBusinessId;
                    this.Context.Entry(entity).State = EntityState.Modified;
                }
            }
        }

        public void RemoveParentBusiness(BusinessModel model)
        {
            BusinessLink entity = businessLinkService.GetBusinessLinkByBusinessId(model.BusinessId.Value);
            if (entity != null)
            {
                this.Context.BusinessLinks.Remove(entity);
            }
        }

        private Business GetEntity(UserSessionModel admin, BusinessModel model)
        {
            var businessTypeId = BusinessTypeEnum.Other;
            try
            {
                if (model.BusinessTypeId.HasValue)
                {
                    businessTypeId = (BusinessTypeEnum)Enum.ToObject(typeof(BusinessTypeEnum), model.BusinessTypeId.Value);
                }
            }
            catch { }

            var newBusiness = !model.BusinessId.HasValue;
            Business entity = (newBusiness) ? Db.BusinessCreate(businessTypeId) : this.Db.BusinessQueryByBusinessId(admin, model.BusinessId).FirstOrDefault();

            entity.ModifyBy = admin.UserId;
            entity.ModifyOn = DateTime.UtcNow;

            if (entity == null)
            {
                this.Response.Messages.AddError(Resources.DataMessages.DM006);
            }

            return entity;
        }
    }
}
