import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service'; 
import { PasswordService } from '../../shared/services/password.service';
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../services/account.service';
import { BusinessService } from '../../business/services/business.service';

import { ComboBoxComponent } from '@progress/kendo-angular-dropdowns';
declare var jQuery: any;

@Component({
    selector: "user-registration", 
    templateUrl: "./user-registration.component.html",
    styleUrls: ["./user-registration.component.css"]
})
export class UserRegistrationComponent implements OnInit {

    @ViewChild('DistRepsCombo') public distRepsCombo: ComboBoxComponent;

    @BlockUI() blockUI: NgBlockUI;

    public pageTitle: any;
    public user: any;
    public business: any;
    public businessTypeDLLDisabled = false;
    public foundBusiness = false;
    public searchBtnClicked = false;
    public showAccountIdSearch = false;// old logic
    public showDakinAccRadioBtn = false;// old logic
    public showBusinessInfo = false;
    public useBusinessAddress = false;
    public hasDaikinAccount: any = false;
    public defaultItem: { text: string, value: string } = { text: "Select...", value: null };
    public phoneNumberMask: string = "(000) 000-0000";
    //public phoneNumberMask1: string = "(000) 000-0000";

    public disableAccountIdField: boolean = false;
    public disableBusinessNameField: boolean = false;

    public distributorsAndReps: any;
    public distributorsAndRepsList: any;

    constructor(private router: Router, private route: ActivatedRoute, private toastrSvc: ToastrService,
        private userSvc: UserService, private accountSvc: AccountService,
        private businessSvc: BusinessService, private passwordSvc: PasswordService,
        public enums: Enums)
    {
        this.user = this.route.snapshot.data['user'].model;
        console.log("Mitra testing ", this.user)
        //debugger;
    }

    ngOnInit() {

        //this.pageTitle = this.route.snapshot.data['pageTitle'];
        this.user.business.parentBusinessId = null;

        this.getDistributorsAndReps();
        this.setupPasswordStrengthIndicator();
        //this.setupSearchBusiness();

        //jQuery('[data-toggle="tooltip"]').tooltip();
    }

    ngDoCheck() {
        //debugger;
        console.log("Do Check");
        jQuery('[data-toggle="tooltip"]').tooltip();
        this.setupSearchBusiness();
    }

    public getDistributorsAndReps() {
        var self = this;
        this.businessSvc.getDistributorsAndReps("")
            .subscribe(data => {
                self.distributorsAndReps = data.model;
            },
            err => console.log("Error: ", err)
            );
    }

    public distributorsAndRepsFilter(value: any) {
        if (value.length >= 2) {
            //this.distributorsAndRepsList = this.distributorsAndReps.filter((s:any) => s.businessName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
            this.distributorsAndRepsList = this.distributorsAndReps
                .filter((s: any) => s.businessName.toLowerCase().startsWith(value.toLowerCase()));
        } else {
            this.distRepsCombo.toggle(false);
        }
    }

    public distRepsComboChange(event: any) {
    }

    public setupPasswordStrengthIndicator() {
        var self = this;
        jQuery("#userPassword").keyup(function (event: any) {
            event.stopImmediatePropagation();
            var password = jQuery("#userPassword")[0].value;
            self.showPasswordStrength(password);
        });
    }


    public showPasswordStrength(password: string) {

        if (this.passwordSvc.PasswordStrengthLevel(password) == 0) {// empty
            jQuery('#passwordStrengthBar').css("background-color", "#ddd");
            jQuery('#passwordStrengthBar').css("width", "0%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 1) {// weak
            jQuery('#passwordStrengthBar').css("background-color", "#ff704d");
            jQuery('#passwordStrengthBar').css("width", "10%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 2) {// medium 1 
            jQuery('#passwordStrengthBar').css("background-color", "#ffcc66");
            jQuery('#passwordStrengthBar').css("width", "30%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 3) {// medium 2
            jQuery('#passwordStrengthBar').css("background-color", "#ffcc66");
            jQuery('#passwordStrengthBar').css("width", "50%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 4) {// strong
            jQuery('#passwordStrengthBar').css("background-color", "#80bfff");
            jQuery('#passwordStrengthBar').css("width", "70%");
        } else if (this.passwordSvc.PasswordStrengthLevel(password) >= 5) {// very strong
            jQuery('#passwordStrengthBar').css("background-color", "#5cd65c");
            jQuery('#passwordStrengthBar').css("width", "100%");
        }
    }

    public setupSearchBusiness() {
        var self = this;

        jQuery("#businessSearchBox").keyup(function (event: any) {
            event.stopImmediatePropagation();
            var value = jQuery("#businessSearchBox")[0].value;
            if (value) {
                self.businessTypeDLLDisabled = true;
            } else {
                self.businessTypeDLLDisabled = false;
                self.useBusinessAddress = false;
            }
            if (event.keyCode == 13) {// enter key
                jQuery("#businessSearchBtn").click();
            }
        });

        jQuery("#businessSearchBtn").click(function (event: any) {
            self.searchBtnClicked = true;
            event.stopImmediatePropagation();

            var value = jQuery("#businessSearchBox")[0].value;
            if (value) {
                self.accountSvc.businessAddressLookup(value).then(self.businessAddressLookupCallback.bind(self));

            } else {
                self.foundBusiness = false;
                self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
                self.useBusinessAddress = false;
            }
        });
    }

    public lookupBusiness(event: any) {
        this.searchBtnClicked = false;
        var self = this;
        //var value = jQuery("#businessSearchBox")[0].value;

        if (this.user.accountId != "") {
            self.disableBusinessNameField = true;
            self.HasDaikinAccount();
            

            self.accountSvc.businessAddressLookup(this.user.accountId)
                .then((resp: any) => {

                    if (resp.model.businessId != null && resp.model.businessId != 0) {
                        self.applyAccountId(resp);
                    }
                    else {
                        self.foundBusiness = false;
                        self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
                        self.useBusinessAddress = false;
                        console.log("foundBusiness : " + self.foundBusiness);
                    }
                }).catch(error => {
                    console.log(error);
                });

        } else {
            self.businessTypeDLLDisabled = false;
            self.disableBusinessNameField = false;
            self.foundBusiness = false;
            self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
            self.useBusinessAddress = false;
        }
    }

    public businessAddressLookupCallback(resp: any) {
        if (resp.isok) {
            if (resp.model.accountId != null || resp.model.daikinCityId != null) {
                this.applyAccountId(resp);                             

            } else {
                this.toastrSvc.Warning("Business not found!");
                this.foundBusiness = false;
                this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
                this.useBusinessAddress = false;
            }
        }
    }

    public businessNameChange(input: any) {

        this.user.business.businessName = input;

        if (this.user.business.businessName == "") {
            this.disableAccountIdField = false;
        } else {
            this.disableAccountIdField = true;
            this.DoNotHasDaikinAccount();
        }
    }

    public applyAccountId(resp: any) {
        this.business = resp.model;

        this.user.business.businessId = resp.model.businessId;
        this.user.business.businessName = resp.model.businessName;
        this.user.business.accountId = resp.model.accountId;
        this.user.business.daikinCityId = resp.model.daikinCityId;

        //this.user.business = resp.model;
        this.foundBusiness = true;
        this.user.existingBusiness = this.enums.ExistingBusinessEnum.Existing;

        if (this.useBusinessAddress) {
            this.UseBusinessAddress();
        }
    }

    public UseBusinessAddressToggle(event: any) {
        if (event.target.checked) {
            this.useBusinessAddress = true;
            this.UseBusinessAddress();
        } else {
            this.useBusinessAddress = false;
            this.user.useBusinessAddress = false;
            if (this.user.address != null) {
                this.user.address.addressId = null;
            }
            if (this.user.contact != null) {
                this.user.contact.contactId = null;
            }
        }
    }

    public UseBusinessAddress() {
        if (this.useBusinessAddress) {
            this.user.useBusinessAddress = true;
            this.user.address = Object.assign({}, this.business.address);
            this.user.address.stateId = this.business.address.stateId.toString();
            this.user.contact = Object.assign({}, this.business.contact);
        }
    }

    public BusinessTypeChange(selectedItem: any) {
        this.showBusinessInfo = true;
        if (selectedItem.value == this.enums.BusinessTypeEnum.Daikin
            || selectedItem.value == this.enums.BusinessTypeEnum.Distributor
            || selectedItem.value == this.enums.BusinessTypeEnum.ManufacturerRep) {
            this.showAccountIdSearch = true;// old logic
            this.showDakinAccRadioBtn = false;
            this.hasDaikinAccount = true;
            jQuery('#businessAddressLabel').text("USER ADDRESS DETAILS");
        } else {// Dealer/Contractor/Engineer/Architect/Other
            this.showAccountIdSearch = false;// old logic
            this.foundBusiness = false;
            this.showDakinAccRadioBtn = true;

            jQuery('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
    }

    public HasDaikinAccountChange(event: any) {
        if (event == "true") {// Yes
            this.HasDaikinAccount();
        } else {// No
            this.DoNotHasDaikinAccount();
        }
    }

    public HasDaikinAccount() {
        this.showAccountIdSearch = true;
        jQuery('#businessAddressLabel').text("USER ADDRESS DETAILS");
        this.user.existingBusiness = this.enums.ExistingBusinessEnum.Existing;
    }
    
    public DoNotHasDaikinAccount() {
        this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
        this.showAccountIdSearch = false;
        this.foundBusiness = false;
        this.useBusinessAddress = false;
        this.user.useBusinessAddress = false;
        this.businessTypeDLLDisabled = false;
        this.user.accountId = null;
        this.user.business.accountId = null;
        jQuery('#businessAddressLabel').text("BUSINESS ADDRESS");
    }

    public backToLogin() {
       window.location.href = "/v3/#/account/login";
        //this.router.navigateByUrl('/v3/#/account/login');
    }

    public register() {
        var self = this;

        if (this.user.password != this.user.confirmPassword) {
            this.toastrSvc.ErrorFadeOut("Password and confirm password do not match!");
        } else if (this.accountIdValid()) {
            //self.loadingIconSvc.Start(jQuery("#content"));
            self.blockUI.start();
            
            this.accountSvc.userRegistration(this.user).then((resp: any) => {
                if (resp.IsOK) {

                    //this.accountSvc.universityUserRegistration(this.user).then((resp: any) => {
                    //    if (!resp.IsOK) {
                    //        self.blockUI.stop();
                    //        if (resp != null && resp.Messages != null) {
                    //            for (let message of resp.Messages.Items) {
                    //                if (message.Type == 40) {// success
                    //                    self.toastrSvc.Success(message.Text);
                    //                } else if (message.Type == 10) {// error
                    //                    self.toastrSvc.UserRegistionError(message.Text);
                    //                }
                    //            }
                    //        }
                    //    }
                    //});
                           

                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    self.blockUI.stop();
                   window.location.href = '/v3/#/account/registrationAcknowledgement';
                    //self.router.navigateByUrl('/v3/#/registrationAcknowledgement');
                } else {

                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    self.blockUI.stop();
                    //self.toastrSvc.displayResponseMessages(resp);
                    if (resp != null && resp.Messages != null) {
                        for (let message of resp.Messages.Items) {
                            if (message.Type == 40) {// success
                                self.toastrSvc.Success(message.Text);
                            } else if (message.Type == 10) {// error
                                self.toastrSvc.UserRegistionError(message.Text);
                            }
                        }
                    }
                }
            }).catch(error => {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
                console.log('Retrieval error: jQuery{error}');
                console.log(error);
            });
        }
    }

    public accountIdValid() {
        if (this.user.business.businessTypeId == this.enums.BusinessTypeEnum.Daikin
            || this.user.business.businessTypeId == this.enums.BusinessTypeEnum.Distributor
            || this.user.business.businessTypeId == this.enums.BusinessTypeEnum.ManufacturerRep) {
            if (this.user.accountId == null || this.user.accountId == "") {
                this.toastrSvc.UserRegistionError("Account Id is required.");
                return false;
            } else if (!this.foundBusiness) {
                this.toastrSvc.UserRegistionError("Account Id is not found.");
                return false;
            }
            else if (this.foundBusiness) {
                return true;
            }
        } else {// Dealer/Contractor/Engineer/Architect/Other
            if (this.hasDaikinAccount == false) {
                return true;
            }
            if (this.hasDaikinAccount == true && !this.foundBusiness) {
                this.toastrSvc.UserRegistionError("Account Id is required.");
                return false;
            } else if (this.foundBusiness) {
                return true;
            }
        }
    }

    public onAccountIdFocus() {
        //this.disableAccountIdField = false;
        //this.disableBusinessNameField = true;
    }

    public onBusinessNameFocus() {
        //this.disableAccountIdField = true;
        //this.disableBusinessNameField = false;
    }
};