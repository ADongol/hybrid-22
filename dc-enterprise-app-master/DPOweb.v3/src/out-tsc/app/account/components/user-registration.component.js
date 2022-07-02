"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var password_service_1 = require("../../shared/services/password.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../services/account.service");
var business_service_1 = require("../../business/services/business.service");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(router, route, toastrSvc, userSvc, accountSvc, businessSvc, passwordSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.businessSvc = businessSvc;
        this.passwordSvc = passwordSvc;
        this.enums = enums;
        this.businessTypeDLLDisabled = false;
        this.foundBusiness = false;
        this.searchBtnClicked = false;
        this.showAccountIdSearch = false; // old logic
        this.showDakinAccRadioBtn = false; // old logic
        this.showBusinessInfo = false;
        this.useBusinessAddress = false;
        this.hasDaikinAccount = false;
        this.defaultItem = { text: "Select...", value: null };
        this.phoneNumberMask = "(000) 000-0000";
        //public phoneNumberMask1: string = "(000) 000-0000";
        this.disableAccountIdField = false;
        this.disableBusinessNameField = false;
        this.user = this.route.snapshot.data['user'].model;
        console.log("Mitra testing ", this.user);
        //debugger;
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        //this.pageTitle = this.route.snapshot.data['pageTitle'];
        this.user.business.parentBusinessId = null;
        this.getDistributorsAndReps();
        this.setupPasswordStrengthIndicator();
        //this.setupSearchBusiness();
        //jQuery('[data-toggle="tooltip"]').tooltip();
    };
    UserRegistrationComponent.prototype.ngDoCheck = function () {
        //debugger;
        console.log("Do Check");
        jQuery('[data-toggle="tooltip"]').tooltip();
        this.setupSearchBusiness();
    };
    UserRegistrationComponent.prototype.getDistributorsAndReps = function () {
        var self = this;
        this.businessSvc.getDistributorsAndReps("")
            .subscribe(function (data) {
            self.distributorsAndReps = data.model;
        }, function (err) { return console.log("Error: ", err); });
    };
    UserRegistrationComponent.prototype.distributorsAndRepsFilter = function (value) {
        if (value.length >= 2) {
            //this.distributorsAndRepsList = this.distributorsAndReps.filter((s:any) => s.businessName.toLowerCase().indexOf(value.toLowerCase()) !== -1);
            this.distributorsAndRepsList = this.distributorsAndReps
                .filter(function (s) { return s.businessName.toLowerCase().startsWith(value.toLowerCase()); });
        }
        else {
            this.distRepsCombo.toggle(false);
        }
    };
    UserRegistrationComponent.prototype.distRepsComboChange = function (event) {
    };
    UserRegistrationComponent.prototype.setupPasswordStrengthIndicator = function () {
        var self = this;
        jQuery("#userPassword").keyup(function (event) {
            event.stopImmediatePropagation();
            var password = jQuery("#userPassword")[0].value;
            self.showPasswordStrength(password);
        });
    };
    UserRegistrationComponent.prototype.showPasswordStrength = function (password) {
        if (this.passwordSvc.PasswordStrengthLevel(password) == 0) { // empty
            jQuery('#passwordStrengthBar').css("background-color", "#ddd");
            jQuery('#passwordStrengthBar').css("width", "0%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 1) { // weak
            jQuery('#passwordStrengthBar').css("background-color", "#ff704d");
            jQuery('#passwordStrengthBar').css("width", "10%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 2) { // medium 1 
            jQuery('#passwordStrengthBar').css("background-color", "#ffcc66");
            jQuery('#passwordStrengthBar').css("width", "30%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 3) { // medium 2
            jQuery('#passwordStrengthBar').css("background-color", "#ffcc66");
            jQuery('#passwordStrengthBar').css("width", "50%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 4) { // strong
            jQuery('#passwordStrengthBar').css("background-color", "#80bfff");
            jQuery('#passwordStrengthBar').css("width", "70%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) >= 5) { // very strong
            jQuery('#passwordStrengthBar').css("background-color", "#5cd65c");
            jQuery('#passwordStrengthBar').css("width", "100%");
        }
    };
    UserRegistrationComponent.prototype.setupSearchBusiness = function () {
        var self = this;
        jQuery("#businessSearchBox").keyup(function (event) {
            event.stopImmediatePropagation();
            var value = jQuery("#businessSearchBox")[0].value;
            if (value) {
                self.businessTypeDLLDisabled = true;
            }
            else {
                self.businessTypeDLLDisabled = false;
                self.useBusinessAddress = false;
            }
            if (event.keyCode == 13) { // enter key
                jQuery("#businessSearchBtn").click();
            }
        });
        jQuery("#businessSearchBtn").click(function (event) {
            self.searchBtnClicked = true;
            event.stopImmediatePropagation();
            var value = jQuery("#businessSearchBox")[0].value;
            if (value) {
                self.accountSvc.businessAddressLookup(value).then(self.businessAddressLookupCallback.bind(self));
            }
            else {
                self.foundBusiness = false;
                self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
                self.useBusinessAddress = false;
            }
        });
    };
    UserRegistrationComponent.prototype.lookupBusiness = function (event) {
        this.searchBtnClicked = false;
        var self = this;
        //var value = jQuery("#businessSearchBox")[0].value;
        if (this.user.accountId != "") {
            self.disableBusinessNameField = true;
            self.HasDaikinAccount();
            self.accountSvc.businessAddressLookup(this.user.accountId)
                .then(function (resp) {
                if (resp.model.businessId != null && resp.model.businessId != 0) {
                    self.applyAccountId(resp);
                }
                else {
                    self.foundBusiness = false;
                    self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
                    self.useBusinessAddress = false;
                    console.log("foundBusiness : " + self.foundBusiness);
                }
            }).catch(function (error) {
                console.log(error);
            });
        }
        else {
            self.businessTypeDLLDisabled = false;
            self.disableBusinessNameField = false;
            self.foundBusiness = false;
            self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
            self.useBusinessAddress = false;
        }
    };
    UserRegistrationComponent.prototype.businessAddressLookupCallback = function (resp) {
        if (resp.isok) {
            if (resp.model.accountId != null || resp.model.daikinCityId != null) {
                this.applyAccountId(resp);
            }
            else {
                this.toastrSvc.Warning("Business not found!");
                this.foundBusiness = false;
                this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
                this.useBusinessAddress = false;
            }
        }
    };
    UserRegistrationComponent.prototype.businessNameChange = function (input) {
        this.user.business.businessName = input;
        if (this.user.business.businessName == "") {
            this.disableAccountIdField = false;
        }
        else {
            this.disableAccountIdField = true;
            this.DoNotHasDaikinAccount();
        }
    };
    UserRegistrationComponent.prototype.applyAccountId = function (resp) {
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
    };
    UserRegistrationComponent.prototype.UseBusinessAddressToggle = function (event) {
        if (event.target.checked) {
            this.useBusinessAddress = true;
            this.UseBusinessAddress();
        }
        else {
            this.useBusinessAddress = false;
            this.user.useBusinessAddress = false;
            if (this.user.address != null) {
                this.user.address.addressId = null;
            }
            if (this.user.contact != null) {
                this.user.contact.contactId = null;
            }
        }
    };
    UserRegistrationComponent.prototype.UseBusinessAddress = function () {
        if (this.useBusinessAddress) {
            this.user.useBusinessAddress = true;
            this.user.address = Object.assign({}, this.business.address);
            this.user.address.stateId = this.business.address.stateId.toString();
            this.user.contact = Object.assign({}, this.business.contact);
        }
    };
    UserRegistrationComponent.prototype.BusinessTypeChange = function (selectedItem) {
        this.showBusinessInfo = true;
        if (selectedItem.value == this.enums.BusinessTypeEnum.Daikin
            || selectedItem.value == this.enums.BusinessTypeEnum.Distributor
            || selectedItem.value == this.enums.BusinessTypeEnum.ManufacturerRep) {
            this.showAccountIdSearch = true; // old logic
            this.showDakinAccRadioBtn = false;
            this.hasDaikinAccount = true;
            jQuery('#businessAddressLabel').text("USER ADDRESS DETAILS");
        }
        else { // Dealer/Contractor/Engineer/Architect/Other
            this.showAccountIdSearch = false; // old logic
            this.foundBusiness = false;
            this.showDakinAccRadioBtn = true;
            jQuery('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
    };
    UserRegistrationComponent.prototype.HasDaikinAccountChange = function (event) {
        if (event == "true") { // Yes
            this.HasDaikinAccount();
        }
        else { // No
            this.DoNotHasDaikinAccount();
        }
    };
    UserRegistrationComponent.prototype.HasDaikinAccount = function () {
        this.showAccountIdSearch = true;
        jQuery('#businessAddressLabel').text("USER ADDRESS DETAILS");
        this.user.existingBusiness = this.enums.ExistingBusinessEnum.Existing;
    };
    UserRegistrationComponent.prototype.DoNotHasDaikinAccount = function () {
        this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
        this.showAccountIdSearch = false;
        this.foundBusiness = false;
        this.useBusinessAddress = false;
        this.user.useBusinessAddress = false;
        this.businessTypeDLLDisabled = false;
        this.user.accountId = null;
        this.user.business.accountId = null;
        jQuery('#businessAddressLabel').text("BUSINESS ADDRESS");
    };
    UserRegistrationComponent.prototype.backToLogin = function () {
        window.location.href = "/v3/#/account/login";
        //this.router.navigateByUrl('/v3/#/account/login');
    };
    UserRegistrationComponent.prototype.register = function () {
        var self = this;
        if (this.user.password != this.user.confirmPassword) {
            this.toastrSvc.ErrorFadeOut("Password and confirm password do not match!");
        }
        else if (this.accountIdValid()) {
            //self.loadingIconSvc.Start(jQuery("#content"));
            self.blockUI.start();
            this.accountSvc.userRegistration(this.user).then(function (resp) {
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
                }
                else {
                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    self.blockUI.stop();
                    //self.toastrSvc.displayResponseMessages(resp);
                    if (resp != null && resp.Messages != null) {
                        for (var _i = 0, _a = resp.Messages.Items; _i < _a.length; _i++) {
                            var message = _a[_i];
                            if (message.Type == 40) { // success
                                self.toastrSvc.Success(message.Text);
                            }
                            else if (message.Type == 10) { // error
                                self.toastrSvc.UserRegistionError(message.Text);
                            }
                        }
                    }
                }
            }).catch(function (error) {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
                console.log('Retrieval error: jQuery{error}');
                console.log(error);
            });
        }
    };
    UserRegistrationComponent.prototype.accountIdValid = function () {
        if (this.user.business.businessTypeId == this.enums.BusinessTypeEnum.Daikin
            || this.user.business.businessTypeId == this.enums.BusinessTypeEnum.Distributor
            || this.user.business.businessTypeId == this.enums.BusinessTypeEnum.ManufacturerRep) {
            if (this.user.accountId == null || this.user.accountId == "") {
                this.toastrSvc.UserRegistionError("Account Id is required.");
                return false;
            }
            else if (!this.foundBusiness) {
                this.toastrSvc.UserRegistionError("Account Id is not found.");
                return false;
            }
            else if (this.foundBusiness) {
                return true;
            }
        }
        else { // Dealer/Contractor/Engineer/Architect/Other
            if (this.hasDaikinAccount == false) {
                return true;
            }
            if (this.hasDaikinAccount == true && !this.foundBusiness) {
                this.toastrSvc.UserRegistionError("Account Id is required.");
                return false;
            }
            else if (this.foundBusiness) {
                return true;
            }
        }
    };
    UserRegistrationComponent.prototype.onAccountIdFocus = function () {
        //this.disableAccountIdField = false;
        //this.disableBusinessNameField = true;
    };
    UserRegistrationComponent.prototype.onBusinessNameFocus = function () {
        //this.disableAccountIdField = true;
        //this.disableBusinessNameField = false;
    };
    __decorate([
        core_1.ViewChild('DistRepsCombo'),
        __metadata("design:type", kendo_angular_dropdowns_1.ComboBoxComponent)
    ], UserRegistrationComponent.prototype, "distRepsCombo", void 0);
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], UserRegistrationComponent.prototype, "blockUI", void 0);
    UserRegistrationComponent = __decorate([
        core_1.Component({
            selector: "user-registration",
            templateUrl: "./user-registration.component.html",
            styleUrls: ["./user-registration.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, toastr_service_1.ToastrService,
            user_service_1.UserService, account_service_1.AccountService,
            business_service_1.BusinessService, password_service_1.PasswordService,
            enums_1.Enums])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());
exports.UserRegistrationComponent = UserRegistrationComponent;
;
//# sourceMappingURL=user-registration.component.js.map