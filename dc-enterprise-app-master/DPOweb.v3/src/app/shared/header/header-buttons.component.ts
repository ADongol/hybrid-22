
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ToastrService } from '../services/toastr.service';
import { UserService } from '../services/user.service';
import { WebConfigService } from '../services/webconfig.service';
import { Enums } from '../enums/enums';

declare var jQuery: any;

@Component({
    selector: 'header-buttons',   
    templateUrl: "./header-buttons.component.html",
    styleUrls: ["./header-buttons.component.css"],
    providers: [ToastrService, UserService]
})
export class HeaderButtonsComponent implements OnInit {

    @Input() isAuthenticated: any;
    public currentUser: any;

    public webconfig: any;
    public libraryLink: any;

    public showMaintenanceIcon: boolean = false;
    public showMaintenanceDialog: boolean = false;
    public maintenanceText: string;
    public maintenanceData: any;

    constructor(private toastrSvc: ToastrService, private userSvc: UserService,
        private enums: Enums,
        private webconfigSvc: WebConfigService) {
    }

    public canViewUsers: any;
    public canManageGroups: any;
    public canViewBusiness: any;
    public canAccessLibrary: any;
    public canAccessLogistic: any;
    public canAccessTrainingCenter: any;

    ngOnChanges() {

        //was working ok, but maybe slow
        //this.userSvc.getCurrentUser()
        //    .then(this.getCurrentUserCallback.bind(this));

        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        }
    }

    ngOnInit() {     

        var self = this;

        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        }

        this.userSvc.getWebsiteMaintenanceInfo().then((resp: any) => {
            if (resp.model.showMaintenanceIcon == true) {
                self.showMaintenanceIcon = true;
                self.maintenanceData = resp.model;
            }
        }).catch(error => {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });

        this.webconfigSvc.getWebConfig().then((resp: any) => {
                self.webconfig = resp;
                self.libraryLink = self.webconfig.routeConfig.libraryLink;
            }).catch(error => {
                console.log("error message: " + error.message);
                console.log("error stack: " + error.stack);
           });
    }

    public getCurrentUserCallback(resp: any) {
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

                for (let message of resp.messages.items) {
                    if (message.type == 40) {// success
                        this.toastrSvc.Success(message.text);
                    }
                }
            } else if (resp.messages) {

                //window.location.href = "/Account/Login";

                for (let message of resp.messages.items) {
                    if (message.type == 10) {// error
                        this.toastrSvc.Error(message.text);
                    }
                }
            }
        }
    }

    public onImportantInfoIconClick() {
        jQuery("#informationInfoModal").modal();
        //this.showMaintenanceDialog = true;
        //jQuery("#informationInfoModal").modal();
        this.maintenanceText = this.maintenanceData.maintenanceText;
    }
};

