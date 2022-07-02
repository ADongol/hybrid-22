using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using DPO.Common;
using DPO.Data;
using System.Data.Entity;
using DPO.Domain.DaikinWebServices;

namespace DPO.Domain
{
    public class CRMAccountImport : BaseServices
    {
        public readonly DPOContext context;
        public readonly DaikinServices daikinServices;

        public CRMAccountImport(DPOContext dpoContext)
        {
            context = dpoContext;
            daikinServices = new DaikinServices();
            this.Db = new Repository(context);
        }

        public Dictionary<string, State> states => Db.States.Where(s => s.CountryCode != "GB").ToArray()
                            .ToDictionary(b => b.CountryCode + ":" + b.Code);

        public void InsertNewRecordsIntoDC(List<Account> newRecordList)
        {
            Console.WriteLine($"Number of new records that were not found in DC {newRecordList.Count()}");

            Business dpoBusiness;
            //var businessList = new List<Business>();
            foreach (var newRecord in newRecordList)
            {
                Console.WriteLine($"Attempting to insert {newRecord.CRMAccountNumber} into DC");

                var type = BusinessTypeEnum.Other;

                if (newRecord.AccountCategoryCode != null)
                    type = (BusinessTypeEnum)newRecord.AccountCategoryCode;
                else
                    Console.WriteLine("Business type for {0} is null, defaulting to 'Unknown'", newRecord.Name);

                dpoBusiness = Db.BusinessCreate(type);
                dpoBusiness.AccountId = newRecord.CRMAccountNumber;
                dpoBusiness.ERPAccountId = newRecord.BillingAccountNumber;

                if (!string.IsNullOrWhiteSpace(newRecord.Address1Name))
                {
                    dpoBusiness.BusinessName = CheckStringLength(newRecord.Address1Name, 255);
                }
                else
                {
                    dpoBusiness.BusinessName = CheckStringLength(newRecord.Name, 255);
                }

                dpoBusiness.ERPBusinessName = newRecord.ERPAccountName;

                if (!string.IsNullOrEmpty(newRecord.YearToDateSales))
                    dpoBusiness.YearToDateSales = decimal.Parse(newRecord.YearToDateSales);

                if (!string.IsNullOrEmpty(newRecord.OpenOrderTotals))
                    dpoBusiness.OpenOrdersTotal = decimal.Parse(newRecord.OpenOrderTotals);

                //Identify if VRVPro DCpro
                dpoBusiness.IsVRVPro = newRecord.VRVPro;
                dpoBusiness.IsDaikinComfortPro = newRecord.DaikinComfortPro;

                //check if non po Business address and mapics Business address both are provided
                //if so just do straight comparison on physical address first and mapics address second
                if (newRecord.Address1Line1 != null)
                {
                    dpoBusiness.Address.AddressLine1 = CheckStringLength(newRecord.Address1Line1, 50);
                    dpoBusiness.Address.AddressLine2 = CheckStringLength(newRecord.Address1Line2, 50);
                    dpoBusiness.Address.AddressLine3 = CheckStringLength(newRecord.Address1Line3, 50);
                    dpoBusiness.Address.PostalCode = CheckStringLength(newRecord.Address1PostalCode, 10);
                    dpoBusiness.Address.Location = CheckStringLength(newRecord.Address1City, 50);
                    dpoBusiness.Address.State = daikinServices.GetState(states, newRecord.Address1Country, newRecord.Address1StateOrProvinceName);
                    dpoBusiness.Address.StateId = dpoBusiness.Address.State?.StateId;
                }
                else if (newRecord.Address2Line1 != null)
                {
                    dpoBusiness.Address.AddressLine1 = CheckStringLength(newRecord.Address2Line1, 50);
                    dpoBusiness.Address.AddressLine2 = CheckStringLength(newRecord.Address2Line2, 50);
                    dpoBusiness.Address.AddressLine3 = CheckStringLength(newRecord.Address2Line3, 50);
                    dpoBusiness.Address.PostalCode = CheckStringLength(newRecord.Address2PostalCode, 10);
                    dpoBusiness.Address.Location = CheckStringLength(newRecord.Address2City, 50);
                    dpoBusiness.Address.State = daikinServices.GetState(states, newRecord.Address2Country, newRecord.Address2StateOrProvince);
                    dpoBusiness.Address.StateId = dpoBusiness.Address.State?.StateId;
                }

                dpoBusiness.Contact.ContactEmail = CheckStringLength(newRecord.EMailAddress1, 50);
                dpoBusiness.Contact.Website = CheckStringLength(newRecord.WebAddress, 50);
                dpoBusiness.Contact.Phone = CheckStringLength(newRecord.Telephone1, 50);

                var enabled = !(newRecord.StatusCode.HasValue && newRecord.StatusCode.Value == 1);
                if (enabled != dpoBusiness.Enabled)
                    dpoBusiness.Enabled = enabled;

                if (newRecord.AllowExternalCommission.HasValue)
                    dpoBusiness.CommissionSchemeAllowed = newRecord.AllowExternalCommission.Value;

                dpoBusiness.DaikinModifiedOn = newRecord.ModifiedOn;
                dpoBusiness.AccountManagerEmail = CheckStringLength(newRecord.AccountManagerEmail, 200);
                dpoBusiness.AccountManagerFirstName = CheckStringLength(newRecord.AccountManager.FirstName, 100);
                dpoBusiness.AccountManagerLastName = CheckStringLength(newRecord.AccountManager.LastName, 100);
                dpoBusiness.AccountOwnerEmail = CheckStringLength(newRecord.AccountOwnerEmail, 200);
                dpoBusiness.AccountOwnerFirstName = CheckStringLength(newRecord.AccountOwner.FirstName, 100);
                dpoBusiness.AccountOwnerLastName = CheckStringLength(newRecord.AccountOwner.LastName, 100);
                dpoBusiness.AccountOwningGroupName = CheckStringLength(newRecord.OwningGroup.Name, 200);
                dpoBusiness.DaikinModifiedOn = DateTime.UtcNow;
                dpoBusiness.ModifyBy = 1111111111;

                daikinServices.businessService.RulesOnAdd(daikinServices.daikinSuperUser, dpoBusiness);

                if (daikinServices.businessService.Response != null && !daikinServices.businessService.Response.IsOK)
                    LogAndNotifyError(newRecord, dpoBusiness, daikinServices.businessService.Response);

                //businessList.Add(dpoBusiness);  Adding to list and saving it all could also be done 

                try
                {
                    Db.Context.SaveChanges();
                    Console.WriteLine($"Completed insert of {newRecord.CRMAccountNumber} into DC");
                }
                catch (Exception ex)
                {
                    var errorMessage = $"Exception occurred while inserting new record {newRecord} due to {ex.InnerException?.Message}";
                    LogAndSendExceptionMessage(errorMessage, ex);
                }
            }
        }

        public void ProcessAccountsAndUpdateInDC(List<Account> similarRecordList, IQueryable<Business> businesses)
        {
            var dcBusinessRecordList = new Dictionary<Account, Business>();

            foreach (var crmRecord in similarRecordList)  //AccountId Exists and matches with DC business
            {
                var dcBusinessRecord = businesses?.Include(b => b.Address).Include(c => c.Contact)
                                        .FirstOrDefault(x => x.AccountId == crmRecord.CRMAccountNumber);

                if (dcBusinessRecord != null)
                {
                    ///find out if anything has changed/any values of Business Record is different, and put it into list
                    var dcBusinessToUpdate = CompareCRMandDCValues(dcBusinessRecord, crmRecord);

                    if (dcBusinessToUpdate != null) //Create a new list of dcRecord to update
                        ApplyEditBusinessRulesAndSaveChanges(crmRecord, dcBusinessRecord, businesses);
                }
            }
        }

        public Business CompareCRMandDCValues(Business dcBusinessRecord, Account crmAccount)
        {
            var propsHaveChanged = false;
            var dcBusinessRecordToUpdate = new Business();

            if (dcBusinessRecord.ERPAccountId != crmAccount.BillingAccountNumber)
            {
                dcBusinessRecord.ERPAccountId = crmAccount.BillingAccountNumber;
                propsHaveChanged = true;
            }

            var busName = !String.IsNullOrWhiteSpace(crmAccount.Address1Name) ? crmAccount.Address1Name : crmAccount.Name;
            if (dcBusinessRecord.BusinessName.ToUpperTrim() != busName.ToUpperTrim())
            {
                dcBusinessRecord.BusinessName = busName.Substring(0, Math.Min(busName.Length, 50));
                propsHaveChanged = true;
            }

            if (!String.IsNullOrWhiteSpace(crmAccount.ERPAccountName))
            {
                if ((String.IsNullOrWhiteSpace(dcBusinessRecord.ERPBusinessName) ||
                    (dcBusinessRecord.ERPBusinessName != crmAccount.ERPAccountName)))
                {
                    dcBusinessRecord.ERPBusinessName = CheckStringLength(crmAccount.ERPAccountName.Trim(), 255);
                    propsHaveChanged = true;
                }
            }

            if (crmAccount.AccountCategoryCode.HasValue)
            {
                if (dcBusinessRecord.BusinessTypeId != (BusinessTypeEnum)crmAccount.AccountCategoryCode)
                {
                    dcBusinessRecord.BusinessTypeId = (BusinessTypeEnum)crmAccount.AccountCategoryCode;
                    propsHaveChanged = true;
                }
            }

            if (!string.IsNullOrEmpty(crmAccount.YearToDateSales))
            {
                dcBusinessRecord.YearToDateSales = decimal.Parse(crmAccount.YearToDateSales);
                propsHaveChanged = true;
            }

            if (!string.IsNullOrEmpty(crmAccount.OpenOrderTotals))
            {
                dcBusinessRecord.OpenOrdersTotal = decimal.Parse(crmAccount.OpenOrderTotals);
                propsHaveChanged = true;
            }

            //check if non po Business address and mapics Business address both are provided
            //if so just do straight comparison on physical address first and mapics address second
            if (crmAccount.Address1Line1 != null)
            {
                if ((!String.IsNullOrEmpty(crmAccount.Address1Line1)
                    && dcBusinessRecord.Address.AddressLine1.ToUpperTrim() != crmAccount.Address1Line1.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.AddressLine1 = CheckStringLength(crmAccount.Address1Line1, 50);
                    propsHaveChanged = true;
                }

                if (dcBusinessRecord.Address.AddressLine2.ToUpperTrim() != crmAccount.Address1Line2.ToUpperTrim())
                {
                    dcBusinessRecord.Address.AddressLine2 = CheckStringLength(crmAccount.Address1Line2, 50);
                    propsHaveChanged = true;
                }

                if (dcBusinessRecord.Address.AddressLine3.ToUpperTrim() != crmAccount.Address1Line3.ToUpperTrim())
                {
                    dcBusinessRecord.Address.AddressLine3 = CheckStringLength(crmAccount.Address1Line3, 50);
                    propsHaveChanged = true;
                }

                if ((!String.IsNullOrEmpty(crmAccount.Address1PostalCode)
                    && dcBusinessRecord.Address.PostalCode.ToUpperTrim() != crmAccount.Address1PostalCode.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.PostalCode = CheckStringLength(crmAccount.Address1PostalCode, 10);
                    propsHaveChanged = true;
                }

                if ((!String.IsNullOrEmpty(crmAccount.Address1PostalCode)
                    && dcBusinessRecord.Address.Location.ToUpperTrim() != crmAccount.Address1City.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.Location = CheckStringLength(crmAccount.Address1City, 50);
                    propsHaveChanged = true;
                }

                var state = daikinServices.GetState(states, crmAccount.Address1Country, crmAccount.Address1StateOrProvinceName);
                if (state != null && dcBusinessRecord.Address.StateId != state.StateId)
                {
                    dcBusinessRecord.Address.StateId = state.StateId;
                    propsHaveChanged = true;
                }
            }
            else if (crmAccount.Address2Line1 != null)
            {
                if ((!String.IsNullOrEmpty(crmAccount.Address2Line1)
                    && dcBusinessRecord.Address.AddressLine1.ToUpperTrim() != crmAccount.Address2Line1.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.AddressLine1 = CheckStringLength(crmAccount.Address2Line1, 50);
                    propsHaveChanged = true;
                }

                if (dcBusinessRecord.Address.AddressLine2.ToUpperTrim() != crmAccount.Address2Line2.ToUpperTrim())
                {
                    dcBusinessRecord.Address.AddressLine2 = CheckStringLength(crmAccount.Address2Line2, 50);
                    propsHaveChanged = true;
                }

                if (dcBusinessRecord.Address.AddressLine3.ToUpperTrim() != crmAccount.Address2Line3.ToUpperTrim())
                {
                    dcBusinessRecord.Address.AddressLine3 = CheckStringLength(crmAccount.Address2Line3, 50);
                    propsHaveChanged = true;
                }

                if ((!String.IsNullOrEmpty(crmAccount.Address2PostalCode)
                    && dcBusinessRecord.Address.PostalCode.ToUpperTrim() != crmAccount.Address2PostalCode.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.PostalCode = CheckStringLength(crmAccount.Address2PostalCode, 10);
                    propsHaveChanged = true;
                }

                if ((!String.IsNullOrEmpty(crmAccount.Address2City)
                    && dcBusinessRecord.Address.Location.ToUpperTrim() != crmAccount.Address2City.ToUpperTrim()))
                {
                    dcBusinessRecord.Address.Location = CheckStringLength(crmAccount.Address2City, 50);
                    propsHaveChanged = true;
                }

                var state = daikinServices.GetState(states, crmAccount.Address2Country, crmAccount.Address2StateOrProvince);
                if (state != null && dcBusinessRecord.Address.StateId != state.StateId)
                {
                    dcBusinessRecord.Address.StateId = state.StateId;
                    propsHaveChanged = true;
                }
            }

            if (dcBusinessRecord.Contact.ContactEmail.ToUpperTrim() != crmAccount.EMailAddress1.ToUpperTrim())
            {
                dcBusinessRecord.Contact.ContactEmail = CheckStringLength(crmAccount.EMailAddress1, 50);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.Contact.Website.ToUpperTrim() != crmAccount.WebAddress.ToUpperTrim())
            {
                dcBusinessRecord.Contact.Website = CheckStringLength(crmAccount.WebAddress, 50);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.Contact.Phone.ToUpperTrim() != crmAccount.Telephone1.ToUpperTrim())
            {
                dcBusinessRecord.Contact.Phone = CheckStringLength(crmAccount.Telephone1, 50);
                propsHaveChanged = true;
            }

            // Status 1 indicates disabled according to Charles
            var enabled = !(crmAccount.StatusCode.HasValue && crmAccount.StatusCode.Value == 1);
            if (enabled != dcBusinessRecord.Enabled)
            {
                dcBusinessRecord.Enabled = enabled;
                propsHaveChanged = true;
            }

            if (crmAccount.AllowExternalCommission.HasValue && dcBusinessRecord.CommissionSchemeAllowed != crmAccount.AllowExternalCommission)
            {
                dcBusinessRecord.CommissionSchemeAllowed = crmAccount.AllowExternalCommission.Value;
                propsHaveChanged = true;
            }

            //if (dcBusinessRecord.DaikinModifiedOn != crmAccount.ModifiedOn)
            //{
            //    dcBusinessRecord.DaikinModifiedOn = crmAccount.ModifiedOn;
            //    propsHaveChanged = true;
            //}

            if (!dcBusinessRecord.IsWebServiceImport) dcBusinessRecord.IsWebServiceImport = true;

            if (dcBusinessRecord.AccountManagerEmail.ToUpperTrim() != crmAccount.AccountManagerEmail.ToUpperTrim())
            {
                dcBusinessRecord.AccountManagerEmail = CheckStringLength(crmAccount.AccountManagerEmail, 200);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountManagerFirstName.ToUpperTrim() != crmAccount.AccountManager.FirstName.ToUpperTrim())
            {
                dcBusinessRecord.AccountManagerFirstName = CheckStringLength(crmAccount.AccountManager.FirstName, 100);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountManagerLastName.ToUpperTrim() != crmAccount.AccountManager.LastName.ToUpperTrim())
            {
                dcBusinessRecord.AccountManagerLastName = CheckStringLength(crmAccount.AccountManager.LastName, 100);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountOwnerEmail.ToUpperTrim() != crmAccount.AccountOwnerEmail.ToUpperTrim())
            {
                dcBusinessRecord.AccountOwnerEmail = CheckStringLength(crmAccount.AccountOwnerEmail, 200);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountOwnerFirstName.ToUpperTrim() != crmAccount.AccountOwner.FirstName.ToUpperTrim())
            {
                dcBusinessRecord.AccountOwnerFirstName = CheckStringLength(crmAccount.AccountOwner.FirstName, 100);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountOwnerLastName.ToUpperTrim() != crmAccount.AccountOwner.LastName.ToUpperTrim())
            {
                dcBusinessRecord.AccountOwnerLastName = CheckStringLength(crmAccount.AccountOwner.LastName, 100);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.AccountOwningGroupName.ToUpperTrim() != crmAccount.OwningGroup.Name.ToUpperTrim())
            {
                dcBusinessRecord.AccountOwningGroupName = CheckStringLength(crmAccount.OwningGroup.Name, 200);
                propsHaveChanged = true;
            }

            if (dcBusinessRecord.IsVRVPro != crmAccount.VRVPro || dcBusinessRecord.IsDaikinComfortPro != crmAccount.DaikinComfortPro)
            {
                dcBusinessRecord.IsVRVPro = crmAccount.VRVPro;
                dcBusinessRecord.IsDaikinComfortPro = crmAccount.DaikinComfortPro;
                propsHaveChanged = true;
            }

            if (propsHaveChanged)
            {
                dcBusinessRecord.DaikinModifiedOn = DateTime.UtcNow;
                dcBusinessRecord.ModifyBy = 1111111111;
                dcBusinessRecord.ModifyOn = DateTime.UtcNow;

                return dcBusinessRecord;
            }
            else
                return null;
        }

        public void ApplyEditBusinessRulesAndSaveChanges(Account crmRecord, Business dcBusinessRecord, IQueryable<Business> businesses)
        {
            daikinServices.businessService.ApplyBusinessRules(daikinServices.daikinSuperUser, dcBusinessRecord);

            if (daikinServices.businessService.Response != null && !daikinServices.businessService.Response.IsOK)
            {
                LogAndNotifyError(crmRecord, dcBusinessRecord, daikinServices.businessService.Response);
            }
            else if ((crmRecord.Name.Trim().ToUpper() != dcBusinessRecord.BusinessName.Trim().ToUpper())
                        && (businesses.Any(x => x.BusinessName.Trim().ToUpper() == crmRecord.Name.Trim().ToUpper())))
            {
                this.Response.AddError("BusinessName", Resources.ResourceModelBusiness.BM004);

                //Error in updating because the exact business name already exists with different account
                LogAndNotifyError(crmRecord, dcBusinessRecord, this.Response);
            }
            else
            {
                try
                {
                    Db.Entry(dcBusinessRecord).State = EntityState.Modified;
                    Db.SaveChanges(); //update changes here.
                }
                catch (Exception ex)
                {
                    Db.Entry(dcBusinessRecord).State = EntityState.Unchanged;
                    LogAndSendExceptionMessage(($"Updating of {dcBusinessRecord.AccountId} failed"), ex);
                }
            }
        }

        private string CheckStringLength(string crmRecordPropertyName, int cutoffNum)
        {
            if (!string.IsNullOrEmpty(crmRecordPropertyName))
            {
                if (crmRecordPropertyName.Length < cutoffNum)
                    return crmRecordPropertyName;
                else
                    return crmRecordPropertyName.Substring(0, cutoffNum - 1);
            }
            else
                return null;
        }

        public void NotifyFailureToImport(List<Account> newAcctsButSameBusinessNames, IQueryable<Business> businesses)
        {
            Console.WriteLine($"Number of records with new account ids but has similar business name - {newAcctsButSameBusinessNames.Count()}");

            foreach (var newCRMAccount in newAcctsButSameBusinessNames)
            {
                var dcBusinessAccount = businesses?
                                .FirstOrDefault(x => x.BusinessName.Trim().ToUpper() == newCRMAccount.Name.Trim().ToUpper());

                this.Response.AddError("BusinessName", Resources.ResourceModelBusiness.BM004);

                //Error inserting new account ids,  because the business name already exists with different account
                LogAndNotifyError(newCRMAccount, dcBusinessAccount, this.Response);
            }
        }

        private void LogAndNotifyError(Account crmAccount, Business dcBusinessRecord, ServiceResponse serviceResponse)
        {
            var sb = new StringBuilder();
            serviceResponse.GetMessages(MessageTypeEnum.Error).ForEach(m => sb.AppendLine("\t" + m.Text));
            Log.Debug(serviceResponse.Messages);
            Console.WriteLine("AccountId: " + crmAccount.CRMAccountNumber + "\n " + sb.ToString());

            //notify sales team here that there exists another record with different account Id but same business name
            // the reason for failure in account import
            if (serviceResponse.GetMessages(MessageTypeEnum.Error).Any(x => x.Key == "BusinessName"))
            {
                var dcAccountId = Db.Businesses.Where(x => x.BusinessName.Trim().ToUpper() == crmAccount.Name.Trim().ToUpper())
                                                .Select(y => y.AccountId).FirstOrDefault();
                var dcBusinessName = Db.Businesses.Where(x => x.BusinessName.Trim().ToUpper() == crmAccount.Name.Trim().ToUpper())
                                                .Select(y => y.BusinessName).FirstOrDefault();

                var errorMessage = "CRM Account: " + Environment.NewLine + "CRM Account Number: " + crmAccount.CRMAccountNumber +
                                        Environment.NewLine + "Name: " + crmAccount.Name + Environment.NewLine + Environment.NewLine +
                                    "Daikin City Account: " + Environment.NewLine + "Account Id: " + dcAccountId +
                                        Environment.NewLine + "Business Name: " + dcBusinessName;

                var emailValue = Utilities.Config("dpo.sales.team.email");
                var subject = "Daikin Import Errors - Account Import";
                WebImportError.NotifyErrorViaEmail(errorMessage, this.GetType().Name, emailValue, subject); //notify concerned parties..                 
            }

            //this.Context.Entry(dcBusinessRecord).State = EntityState.Unchanged;
            serviceResponse.Messages.Clear();
        }

        private void LogAndSendExceptionMessage(string errorMessage, Exception ex)
        {
            if (System.DateTime.Now.Hour >= 5 && System.DateTime.Now.Hour <= 6)
            {
                var errorMsg = errorMessage;
                var emailValue = Utilities.Config("dpo.dev.team.email");
                var subject = "Daikin Import Errors - Account Import";

                WebImportError.NotifyErrorViaEmail(errorMessage, this.GetType().Name, emailValue, subject);
                daikinServices._log.Fatal("Inserting Business into DC database failed");
            }

            // Remove errored record.  This could be done better with transactions
            //Db.Context.Entry(dpoBusiness).State = EntityState.Detached;
            Console.WriteLine(ex.InnerException?.Message + ex.InnerException);
        }
    }
}
