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
var toastr_service_1 = require("../services/toastr.service");
var user_service_1 = require("../services/user.service");
var webconfig_service_1 = require("../services/webconfig.service");
var enums_1 = require("../enums/enums");
var HeaderButtonsComponent = /** @class */ (function () {
    function HeaderButtonsComponent(toastrSvc, userSvc, enums, webconfigSvc) {
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.webconfigSvc = webconfigSvc;
        this.showMaintenanceIcon = false;
        this.showMaintenanceDialog = false;
    }
    HeaderButtonsComponent.prototype.ngOnChanges = function () {
        //was working ok, but maybe slow
        //this.userSvc.getCurrentUser()
        //    .then(this.getCurrentUserCallback.bind(this));
        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        }
    };
    HeaderButtonsComponent.prototype.ngOnInit = function () {
        var self = this;
        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        }
        this.userSvc.getWebsiteMaintenanceInfo().then(function (resp) {
            if (resp.model.showMaintenanceIcon == true) {
                self.showMaintenanceIcon = true;
                self.maintenanceData = resp.model;
            }
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            self.libraryLink = self.webconfig.routeConfig.libraryLink;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    };
    HeaderButtonsComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp != null && resp != undefined) {
            if (resp.isok) {
                this.currentUser = resp.model;
                this.userSvc.currentUser = resp.model;
                var userNameElem = jQuery("#loggedin-username");
                userNameElem.text(this.currentUser.displayName);
                var projectOfficeBtn = jQuery("#projectOfficeBtn");
                projectOfficeBtn.attr("href", this.currentUser.defaultPageUrl);
                var canViewUsers = this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ViewUsers);
                var canManageGroups = this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ManageGroups);
                var canViewBusiness = this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ViewBusiness);
                var userOptsDropdownElem = jQuery("#userOptionsDropdown");
                if (canManageGroups || canViewBusiness || canViewUsers) {
                    var management_li = "";
                    if (canManageGroups) {
                        management_li = '<li><a href="/Userdashboard/groups/">MANAGEMENT</a></li>';
                    }
                    if (canViewBusiness) {
                        management_li = '<li><a href="/Userdashboard/businesses/">MANAGEMENT</a></li>';
                    }
                    if (canViewUsers) {
                        management_li = '<li><a href="/Userdashboard/users/">MANAGEMENT</a></li>';
                    }
                    //userOptsDropdownElem.append(management_li);
                    jQuery("#hidden-management-li").replaceWith(management_li);
                }
                if (this.currentUser.hasAccessToCMS) {
                    var CMS_li = "";
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementTools)) {
                        CMS_li = '<li><a href="/CityCMS/tools/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementProductFamilies)) {
                        CMS_li = '<li><a href="/CityCMS/productfamilies/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementCommsCenter)) {
                        CMS_li = '<li><a href="/CityCMS/communicationscenter/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementLibrary)) {
                        CMS_li = '<li><a href="/CityCMS/library/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementApplicationProducts)) {
                        CMS_li = '<li><a href="/CityCMS/applicationproducts/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementApplicationBuildings)) {
                        CMS_li = '<li><a href="/CityCMS/applicationbuildings/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementFunctionalBuildings)) {
                        CMS_li = '<li><a href="/CityCMS/functionalbuildings/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.enums.SystemAccessEnum.ContentManagementHomeScreen)) {
                        CMS_li = '<li><a href="/CityCMS/homescreen/">CONTENT MANAGEMENT</a></li>';
                    }
                    //userOptsDropdownElem.append(CMS_li);
                    jQuery("#hidden-content-management-li").replaceWith(CMS_li);
                }
                var signOut_li = '<li><a href="/Account/Logoff">SIGN OUT</a></li>';
                //userOptsDropdownElem.append(signOut_li);
                var cityLocationsDropdownElem = jQuery("#cityLocationsDropdown");
                if (this.currentUser.cityAccesses.indexOf(1) > -1) {
                    //var cityLibrary_li = '<li><a href="/#library"> <span class="glyphicon glyphicon-menu-right"></span> LIBRARY</a></li>';
                    //cityLocationsDropdownElem.append(cityLibrary_li);
                    this.canAccessLibrary = true;
                }
                if (this.currentUser.cityAccesses.indexOf(2) > -1) {
                    //var logisticsCenter_li = '<li><a href="/#logisticscenter"> <span class="glyphicon glyphicon-menu-right"></span> LOGISTICS CENTER</a></li>';
                    //cityLocationsDropdownElem.append(logisticsCenter_li);
                    this.canAccessLogistic = true;
                }
                if (this.currentUser.cityAccesses.indexOf(3) > -1) {
                    this.canAccessTrainingCenter = true;
                }
                for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                    var message = _a[_i];
                    if (message.type == 40) { // success
                        this.toastrSvc.Success(message.text);
                    }
                }
            }
            else if (resp.messages) {
                //window.location.href = "/Account/Login";
                for (var _b = 0, _c = resp.messages.items; _b < _c.length; _b++) {
                    var message = _c[_b];
                    if (message.type == 10) { // error
                        this.toastrSvc.Error(message.text);
                    }
                }
            }
        }
    };
    HeaderButtonsComponent.prototype.onImportantInfoIconClick = function () {
        jQuery("#informationInfoModal").modal();
        //this.showMaintenanceDialog = true;
        //jQuery("#informationInfoModal").modal();
        this.maintenanceText = this.maintenanceData.maintenanceText;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HeaderButtonsComponent.prototype, "isAuthenticated", void 0);
    HeaderButtonsComponent = __decorate([
        core_1.Component({
            selector: 'header-buttons',
            templateUrl: "./header-buttons.component.html",
            styleUrls: ["./header-buttons.component.css"],
            providers: [toastr_service_1.ToastrService, user_service_1.UserService]
        }),
        __metadata("design:paramtypes", [toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums,
            webconfig_service_1.WebConfigService])
    ], HeaderButtonsComponent);
    return HeaderButtonsComponent;
}());
exports.HeaderButtonsComponent = HeaderButtonsComponent;
;
//# sourceMappingURL=header-buttons.component.js.map