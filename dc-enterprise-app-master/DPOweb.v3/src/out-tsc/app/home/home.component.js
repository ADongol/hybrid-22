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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var toastr_service_1 = require("../shared/services/toastr.service");
var user_service_1 = require("../shared/services/user.service");
var account_service_1 = require("../account/services/account.service");
var enums_1 = require("../shared/enums/enums");
var webconfig_service_1 = require("../shared/services/webconfig.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, toastrSvc, userSvc, accountSvc, enums, http, webconfigSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.enums = enums;
        this.http = http;
        this.webconfigSvc = webconfigSvc;
        this.links = [];
        this.canViewProjects = false;
        this.canEditProjects = false;
        this.canViewOrders = false;
        this.canViewUsers = false;
        this.canManageGroups = false;
        this.canViewBusiness = false;
        this.canAccessLibrary = false;
        this.userInPendingStatus = false;
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    HomeComponent.prototype.ngOnInit = function () {
        //debugger
        //document.location.href = "/";
        this.preventDisplayMenuCloseOnClick();
        this.canViewProjects = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);
        this.canEditProjects = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditProject);
        this.canViewOrders = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewOrder);
        this.canViewUsers = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewUsers);
        this.canManageGroups = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ManageGroups);
        this.canViewBusiness = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewBusiness);
        this.userInPendingStatus = this.userSvc.checkUserStatus(this.user);
        this.getLinks();
        this.accountSvc.resetBasketQuoteId();
    };
    HomeComponent.prototype.getLinks = function () {
        this.links = [{
                text: "Library",
                image: "/v3/src/assets/images/library.png",
                altText: "library",
                url: "/Library",
                show: true
            }, {
                text: "University",
                image: "/v3/src/assets/images/university.png",
                altText: "Home",
                url: "/Training",
                show: true
            }, {
                text: "User Manual",
                image: "/v3/src/assets/images/user_manual.png",
                altText: "Home",
                url: "/Content/pdf/DaikinCityUserGuide.pdf",
                show: true
            }];
        if (!this.userInPendingStatus) {
            var productNode = {
                text: "Products",
                image: "/v3/src/assets/images/products.png",
                altText: "Products",
                url: "/v3/#/product",
                show: true
            };
            this.links.push(productNode);
            var toolsNode = {
                text: "Tools",
                image: "/v3/src/assets/images/tools.png",
                altText: "Home",
                url: "/v3/#/tools",
                show: true
            };
            this.links.push(toolsNode);
        }
        if (this.canViewProjects || this.canEditProjects) {
            var projectNode = {
                text: "Projects",
                image: "/v3/src/assets/images/projects.png",
                altText: "Projects",
                url: "/v3/#/projects",
                show: true
            };
            this.links.splice(1, 0, projectNode);
            var overviewNode = {
                text: "Reports",
                image: "/v3/src/assets/images/reporting.png",
                altText: "Reports",
                url: "/ProjectDashboard/Overview",
                show: true
            };
            this.links.splice(3, 0, overviewNode);
        }
        if (this.canViewOrders) {
            var orderNode = {
                text: "Orders",
                image: "/v3/src/assets/images/orders.png",
                altText: "Orders",
                url: "/v3/#/orders",
                show: true
            };
            this.links.splice(4, 0, orderNode);
        }
        if (this.canViewUsers || this.canViewBusiness || this.canManageGroups) {
            if (this.canViewUsers) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/users/",
                    show: true
                };
                this.links.push(managementNode);
            }
            else if (this.canViewBusiness) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/businesses/",
                    show: true
                };
                this.links.push(managementNode);
            }
            else if (this.canManageGroups) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/groups/",
                    show: true
                };
                this.links.push(managementNode);
            }
        }
    };
    //browseProducts() {
    //    this.accountSvc.resetBasketQuoteId()
    //        .then((resp: any) => {
    //            if (resp.isok) {
    //                this.router.navigateByUrl("/product");
    //            }
    //        }).catch(error => {
    //            console.log(error);
    //        });
    //}
    HomeComponent.prototype.preventDisplayMenuCloseOnClick = function () {
        jQuery('.dropdown-menu').on('click', function (e) {
            if (jQuery(this).hasClass('display-menu')) {
                e.stopPropagation();
            }
        });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './home.component.html',
            styleUrls: ["./home.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService, enums_1.Enums, http_1.Http,
            webconfig_service_1.WebConfigService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
;
//# sourceMappingURL=home.component.js.map