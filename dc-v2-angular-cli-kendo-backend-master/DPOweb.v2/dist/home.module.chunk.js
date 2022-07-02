webpackJsonp(["home.module"],{

/***/ "../../../../../src/app/home/components/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n/*table.home-icon-table{\r\n    width:100%;\r\n    table-layout:fixed;\r\n    \r\n}\r\n\r\ntr.home-icon-row {\r\n    display:inline;\r\n}\r\n\r\ntd.home-icon-cell {\r\n    width:20%;\r\n    float:left;\r\n}*/\r\n\r\n@media (min-width: 1200px) {\r\n    #home-bg {\r\n        background-image: url('/v2/src/assets/images/project-office-bg.png');\r\n        background-size: cover;\r\n        height: 92.5%;       \r\n    }\r\n}\r\n\r\n/*Mobile*/\r\n@media (max-width: 576px) {\r\n    #home-bg {\r\n        background-image: url('/v2/src/assets/images/project-office-bg.png');\r\n        background-size: cover;\r\n        height: 92.5%;\r\n        /*background-size: cover;\r\n        background-repeat: no-repeat;\r\n        background-attachment: fixed;*/\r\n    }\r\n}\r\n\r\n.home-icon-image {\r\n    margin: auto;\r\n    /*box-shadow: 10px 10px 10px #6c8191;*/\r\n}\r\n\r\n/*Desktop*/\r\n@media (min-width: 1200px) {\r\n    .home-icon-text {\r\n        /*color:#ffffff;*/\r\n        /*color: #e2f7ff;*/ /*light-blue*/\r\n        color: #dfdfdf; /*light-grey*/\r\n        text-transform: uppercase;\r\n        font-family: \"museo-sans\", sans-serif;\r\n        /*font-weight: bold;*/\r\n        padding: 20px;\r\n    }\r\n}\r\n\r\n\r\n/*Mobile*/\r\n@media (max-width: 576px) {\r\n    .home-icon-text {\r\n        /*color:#ffffff;*/\r\n        /*color: #e2f7ff;*/ /*light-blue*/\r\n        color: #dfdfdf; /*light-grey*/\r\n        text-transform: uppercase;\r\n        font-family: \"museo-sans\", sans-serif;\r\n        /*font-weight: bold;*/\r\n        padding: 10px 0px 10px 0px;\r\n    }\r\n}\r\n\r\n\r\ninput[type=checkbox].checkbox-large {\r\n    transform: scale(1.5);\r\n}\r\n\r\n.display-menu {\r\n    max-height: 500px;\r\n    overflow-y: scroll;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/components/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"home-bg\">\r\n     \r\n    <div class=\"row no-gutters\">\r\n        <div class=\"pull-right\" style=\"padding:20px 20px 20px 20px\">\r\n            <div class=\"dropdown pull-left\">\r\n                <button class=\"btn btn-default dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n                    Display\r\n                    <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu dropdown-menu-right display-menu\">\r\n                    <li *ngFor=\"let link of links\">\r\n                        <!--<a (click)=\"link.show = !link.show\"><input type=\"checkbox\" [(ngModel)]=\"link.show\" /> {{link.text}}</a>-->\r\n                        <a><input class=\"checkbox-large\" type=\"checkbox\" [(ngModel)]=\"link.show\" /> {{link.text}}</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngFor=\"let link of links\">\r\n        <div *ngIf=\"link.show\">\r\n            <div class=\"col-md-2 col-xs-4\">\r\n                <div class=\"text-center\">\r\n                    <a href=\"{{link.url}}\" >\r\n                        <img src=\"{{link.image}}\" alt=\"{{link.altText}}\" class=\"img-responsive home-icon-image\" width=\"170\" height=\"170\" />\r\n                    </a>\r\n\r\n                    <!--<a *ngIf=\"link.url == '/v2/#/products'; else elseBlock\" (click)=\"browseProducts()\"><img src=\"{{link.image}}\" alt=\"{{link.altText}}\" class=\"img-responsive home-icon-image\" width=\"170\" height=\"170\" /></a>\r\n                    <ng-template #elseBlock>\r\n                        <a href=\"{{link.url}}\"><img src=\"{{link.image}}\" alt=\"{{link.altText}}\" class=\"img-responsive home-icon-image\" width=\"170\" height=\"170\" /></a>\r\n                    </ng-template>-->\r\n\r\n                </div>\r\n                <div class=\"text-center home-icon-text\">{{link.text}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/components/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, route, userSvc, accountSvc, enums, http) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.enums = enums;
        this.http = http;
        this.links = [];
        this.canViewProjects = false;
        this.canEditProjects = false;
        this.canViewOrders = false;
        this.canViewUsers = false;
        this.canManageGroups = false;
        this.canViewBusiness = false;
        this.canAccessLibrary = false;
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
        this.getLinks();
        this.accountSvc.resetBasketQuoteId();
    };
    HomeComponent.prototype.getLinks = function () {
        this.links = [{
                text: "Library",
                image: "/v2/src/assets/images/library.png",
                altText: "library",
                url: "/Library",
                show: true
            }, {
                text: "Products",
                image: "/v2/src/assets/images/products.png",
                altText: "Products",
                // url: "/v2/#/products",
                url: "/v2/#/product/product-list",
                show: true
            }, {
                text: "Tools",
                image: "/v2/src/assets/images/tools.png",
                altText: "Home",
                //url: "/v2/#/tools",
                url: "/v2/#/tools/tool-list",
                show: true
            }, {
                text: "University",
                image: "/v2/src/assets/images/university.png",
                altText: "Home",
                url: "/Training",
                show: true
            }, {
                text: "User Manual",
                image: "/v2/src/assets/images/user_manual.png",
                altText: "Home",
                url: "/Content/pdf/DaikinCityUserGuide.pdf",
                show: true
            }];
        if (this.canViewProjects || this.canEditProjects) {
            var projectNode = {
                text: "Projects",
                image: "/v2/src/assets/images/projects.png",
                altText: "Projects",
                //url: "/v2/#/projects",
                url: "/v2/#/project/projectList",
                show: true
            };
            this.links.splice(1, 0, projectNode);
            var overviewNode = {
                text: "Reports",
                image: "/v2/src/assets/images/reporting.png",
                altText: "Reports",
                url: "/ProjectDashboard/Overview",
                show: true
            };
            this.links.splice(3, 0, overviewNode);
        }
        if (this.canViewOrders) {
            var orderNode = {
                text: "Orders",
                image: "/v2/src/assets/images/orders.png",
                altText: "Orders",
                //url: "/ProjectDashboard/Orders",
                //url: "/v2/#/orders",
                url: "/v2/#/order/order-list",
                show: true
            };
            this.links.splice(4, 0, orderNode);
        }
        if (this.canViewUsers || this.canViewBusiness || this.canManageGroups) {
            if (this.canViewUsers) {
                var managementNode = {
                    text: "Management",
                    image: "/v2/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/users/",
                    show: true
                };
                this.links.push(managementNode);
            }
            else if (this.canViewBusiness) {
                var managementNode = {
                    text: "Management",
                    image: "/v2/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/businesses/",
                    show: true
                };
                this.links.push(managementNode);
            }
            else if (this.canManageGroups) {
                var managementNode = {
                    text: "Management",
                    image: "/v2/src/assets/images/management.png",
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
    //                this.router.navigateByUrl("/products");
    //            }
    //        }).catch(error => {
    //            console.log(error);
    //        });
    //}
    //showLoadingSpinner() {
    //     this.blockUI.start('Loading...'); // Start blocking
    //    setTimeout(() => {
    //        this.blockUI.stop(); // Stop blocking
    //    }, 3000);
    //}
    HomeComponent.prototype.preventDisplayMenuCloseOnClick = function () {
        __WEBPACK_IMPORTED_MODULE_5_jquery__('.dropdown-menu').on('click', function (e) {
            if (__WEBPACK_IMPORTED_MODULE_5_jquery__(this).hasClass('display-menu')) {
                e.stopPropagation();
            }
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'home',
            template: __webpack_require__("../../../../../src/app/home/components/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/components/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_index__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["e" /* Enums */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HomeComponent);
    return HomeComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_components_home_component__ = __webpack_require__("../../../../../src/app/home/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_components_home_component__["a" /* HomeComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        },
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(homeRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_component__ = __webpack_require__("../../../../../src/app/home/components/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("../../../../../src/app/home/home-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map