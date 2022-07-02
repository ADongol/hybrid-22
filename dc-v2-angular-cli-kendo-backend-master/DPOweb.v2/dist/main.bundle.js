webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/account/account.module": [
		"../../../../../src/app/account/account.module.ts",
		"common",
		"account.module"
	],
	"app/commission/commission.module": [
		"../../../../../src/app/commission/commission.module.ts",
		"common",
		"commission.module"
	],
	"app/discount/discount.module": [
		"../../../../../src/app/discount/discount.module.ts",
		"common",
		"discount.module"
	],
	"app/home/home.module": [
		"../../../../../src/app/home/home.module.ts",
		"common",
		"home.module"
	],
	"app/orders/orders.module": [
		"../../../../../src/app/orders/orders.module.ts",
		"common",
		"orders.module"
	],
	"app/products/products.module": [
		"../../../../../src/app/products/products.module.ts",
		"common",
		"products.module"
	],
	"app/projects/projects.module": [
		"../../../../../src/app/projects/projects.module.ts",
		"common",
		"projects.module"
	],
	"app/quotes/quotes.module": [
		"../../../../../src/app/quotes/quotes.module.ts",
		"common"
	],
	"app/submittal/submittal.module": [
		"../../../../../src/app/submittal/submittal.module.ts",
		"common",
		"submittal.module"
	],
	"app/tools/tools.module": [
		"../../../../../src/app/tools/tools.module.ts",
		"common",
		"tools.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var appRoutes = [
    { path: '', pathMatch: 'full', redirectTo: '/login' },
    {
        path: 'login',
        loadChildren: 'app/account/account.module#AccountModule'
    },
    {
        path: 'home',
        loadChildren: 'app/home/home.module#HomeModule'
    },
    {
        path: 'product',
        loadChildren: 'app/products/products.module#ProductsModule'
    },
    {
        path: 'project',
        loadChildren: 'app/projects/projects.module#ProjectsModule'
    },
    {
        path: 'quote',
        loadChildren: 'app/quotes/quotes.module#QuotesModule'
    },
    {
        path: 'order',
        loadChildren: 'app/orders/orders.module#OrdersModule'
    },
    {
        path: 'discountRequest',
        loadChildren: 'app/discount/discount.module#DiscountRequestModule'
    },
    {
        path: 'commissionRequest',
        loadChildren: 'app/commission/commission.module#CommissionRequestModule'
    },
    {
        path: 'tools',
        loadChildren: 'app/tools/tools.module#ToolsModule'
    },
    {
        path: 'submittalPackage',
        loadChildren: 'app/submittal/submittal.module#SubmittalPackageModule'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule(parentModule) {
        if (parentModule) {
            throw new Error('AppRoutingModule is already loaded. Import it in the AppModule only');
        }
    }
    AppRoutingModule_1 = AppRoutingModule;
    AppRoutingModule.forRoot = function () {
        return {
            ngModule: AppRoutingModule_1,
            providers: []
        };
    };
    AppRoutingModule = AppRoutingModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */].forRoot(appRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */]],
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [AppRoutingModule])
    ], AppRoutingModule);
    return AppRoutingModule;
    var AppRoutingModule_1;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\r\n\r\n\r\n    <div class=\"header\" id=\"daikin-header\">\r\n        <header-buttons [isAuthenticated]=\"userSvc.userIsAuthenticated\"></header-buttons>\r\n    </div>\r\n\r\n    <div id=\"hiddenUserBasket\"></div>\r\n\r\n    <!--Website maintenance popup message-->\r\n    <div id=\"testModeModal\" class=\"modal fade\" role=\"dialog\">\r\n        <div class=\"modal-dialog\">\r\n            <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                    <h4 class=\"modal-title\">Website under maintenance</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                    <p *ngIf=\"webconfig\">{{webconfig.testMode.testModeMessage}}</p>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Proceed anyway</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <router-outlet> </router-outlet>\r\n    <block-ui></block-ui>\r\n\r\n\r\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppComponent = /** @class */ (function () {
    function AppComponent(router, toastrSvc, userSvc, webconfigSvc, passwordSvc) {
        //this.blockUI.start('Loading...'); // Start blocking
        var _this = this;
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.webconfigSvc = webconfigSvc;
        this.passwordSvc = passwordSvc;
        this.pageTitle = 'Daikin Project Office';
        this.isAuthenticated = false;
        this.loading = true;
        //setTimeout(() => {
        //    this.blockUI.stop(); // Stop blocking
        //}, 2000);
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //var hash = window.location.hash;
        //this.userSvc.isAuthenticated().then(this.isAuthenticatedCallBack.bind(this));
        this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        //Website testing message
        var self = this;
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            if (self.webconfig.testMode.isTesting.toLowerCase() == 'true') {
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#testModeModal").modal();
            }
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        //var routeUrl = this.router.url;
        //this.setupActiveTab();
    };
    AppComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp != undefined && resp.isok) {
            this.isAuthenticated = true;
            this.userSvc.userIsAuthenticated = true;
            this.currentUser = resp.model;
            this.userSvc.currentUser = resp.model;
            //this.setupActiveTab();
            for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) {
                    this.toastrSvc.Success(message.text);
                }
            }
        }
        else {
            this.isAuthenticated = false;
            this.userSvc.userIsAuthenticated = false;
            //resp is null
            //for (let message of resp.messages.items) {
            //    if (message.type == 10) {// error
            //        this.toastrSvc.Error(message.text);
            //    }
            //}
        }
    };
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
            this.loading = true;
            this.blockUI.start('Loading...');
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* RouteConfigLoadStart */]) {
            this.blockUI.start('Loading...');
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */]) {
            this.loading = false;
            this.blockUI.stop();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["f" /* RouteConfigLoadEnd */]) {
            this.blockUI.stop();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */]) {
            this.loading = false;
            this.blockUI.stop();
        }
        if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */]) {
            this.loading = false;
            this.blockUI.stop();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "blockUI", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-app',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */],
                __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_3__shared_index__["f" /* PasswordService */],
                __WEBPACK_IMPORTED_MODULE_4__shared_services_account_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_5__shared_services_common_user_resolver_service__["b" /* UserResolver */],
                __WEBPACK_IMPORTED_MODULE_3__shared_index__["l" /* WebConfigService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["l" /* WebConfigService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["f" /* PasswordService */]])
    ], AppComponent);
    return AppComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__ = __webpack_require__("../../../../../src/app/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUIModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */].forRoot(),
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["HashLocationStrategy"] },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/layout/components/header/headerButtons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media (min-width: 1200px) {\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    nav#topHeader {\r\n        background-color: white;\r\n    }\r\n\r\n    /*#topHeader.navbar-default {\r\n        background-color: white;\r\n    }*/\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/components/header/headerButtons.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<a href=\"javascript:window.location.href='/'\" id=\"home_btn\">\r\n    <img src=\"app/images/daikin-logo.png\" height=\"50\" alt=\"www.daikin.co.uk\" />\r\n</a>-->\r\n\r\n<nav id=\"topHeader\" class=\"navbar navbar-default\">\r\n\r\n    <div class=\"navbar-header\">\r\n        <a href=\"javascript:window.location.href='/'\" id=\"home_btn\">\r\n            <img src=\"/v2/src/assets/images/daikin-logo.png\" height=\"50\" alt=\"www.daikin.co.uk\" />\r\n        </a>\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#topMenuBar\">\r\n            <!--<span>Main Menu</span>-->\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n\r\n        <!--<a href=\"\" id=\"home_btn\">\r\n            <img src=\"app/images/daikin-logo.png\" height=\"50\" alt=\"www.daikin.co.uk\" />\r\n        </a>-->\r\n\r\n    </div>\r\n\r\n    <!--<a href=\"javascript:window.location.href='/'\" id=\"home_btn\">\r\n        <img src=\"app/images/daikin-logo.png\" height=\"50\" alt=\"www.daikin.co.uk\" />\r\n    </a>-->\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"topMenuBar\">\r\n        <ul id=\"headerButtons\" class=\"nav navbar-nav navbar-right\">\r\n            <!--<li><a href=\"/#library\"><img src=\"/v2/app/images/library-icon-s.png\" /> Documents Library</a></li>-->\r\n            <li>\r\n                <a href=\"{{libraryLink}}\">\r\n                    <img src=\"/v2/src/assets/images/library-icon-s.png\" /> Documents Library\r\n                </a>\r\n           </li>\r\n\r\n            <!--User has logged in-->\r\n            <!--<li><a *ngIf=\"isAuthenticated\" id=\"projectOfficeBtn\" href=\"#\"><img src=\"/v2/app/images/project-office-icon-s.png\" /> Project Office</a></li>-->\r\n            <li><a *ngIf=\"isAuthenticated\" id=\"projectOfficeBtn\" routerLink=\"/home/home\">\r\n                <img src=\"/v2/src/assets/images/project-office-icon-s.png\"/> Project Office</a>\r\n            </li>\r\n            <li class=\"dropdown\" *ngIf=\"isAuthenticated\">\r\n                <a id=\"signInBtn\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                    <!--<span class=\"glyphicon glyphicon-user\"></span> Signed in as: <span class=\"glyphicon glyphicon-menu-down\"></span>-->\r\n                    <img src=\"/v2/src/assets/images/user-icon-s.png\" /> Signed in as: \r\n                        <span class=\"glyphicon glyphicon-menu-down\"></span>\r\n                    <br />\r\n                    <span id=\"loggedin-username\" class=\"loggedinusername\" style=\"padding-left:35px;\">\r\n                        <!--{{currentUser.displayName}}-->\r\n                    </span>\r\n                </a>\r\n                <ul id=\"userOptionsDropdown\" class=\"dropdown-menu\">\r\n                    <li><a href=\"/Content/pdf/DaikinCityUserGuide.pdf\" target=\"_blank\">USER GUIDE</a></li>\r\n                    <li><a href=\"/Account/AccountDetailsEdit\">YOUR ACCOUNT</a></li>\r\n                    <li id=\"hidden-management-li\" hidden></li>\r\n                    <li id=\"hidden-content-management-li\" hidden></li>\r\n                    <li *ngIf=\"currentUser\"><a href=\"/Account/Logoff\">SIGN OUT</a></li>\r\n                </ul>\r\n            </li>\r\n            <!--------------------->\r\n            <!--User has not logged in-->\r\n            <li *ngIf=\"!isAuthenticated\">\r\n                <a id=\"loginLink\" routerLink=\"/login\">\r\n                    <span class=\"glyphicon glyphicon-user\"></span>\r\n                    <span>Sign In</span>\r\n                </a>\r\n            </li>\r\n            <!-------------------------->\r\n            <li class=\"dropdown\">\r\n                <!--<a id=\"menu-dropdown\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\"><span class=\"glyphicon glyphicon-menu-hamburger\"></span> Menu</a>-->\r\n                <a id=\"menu-dropdown\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n                    <img src=\"/v2/src/assets/images/menu-icon-s.png\" /> Menu</a>\r\n                <ul id=\"cityLocationsDropdown\" class=\"dropdown-menu\">\r\n                    <li><a href=\"/#conveniencestore\"> <span class=\"glyphicon glyphicon-menu-right\"></span> CONVENIENCE STORE</a></li>\r\n                    <li><a href=\"/#bank\"><span class=\"glyphicon glyphicon-menu-right\"></span> BANK</a></li>\r\n                    <li><a href=\"/#hotel\"><span class=\"glyphicon glyphicon-menu-right\"></span> HOTEL</a></li>\r\n                    <li><a href=\"/#office\"><span class=\"glyphicon glyphicon-menu-right\"></span> OFFICE</a></li>\r\n                    <li><a href=\"/#restaurant\"><span class=\"glyphicon glyphicon-menu-right\"></span> RESTAURANT</a></li>\r\n                    <li><a href=\"/#retailstore\"><span class=\"glyphicon glyphicon-menu-right\"></span> RETAIL STORE</a></li>\r\n                    <li><a href=\"/#commscenter\"><span class=\"glyphicon glyphicon-menu-right\"></span> SCHOOL</a></li>\r\n                    <li><a href=\"/#conveniencestore\"><span class=\"glyphicon glyphicon-menu-right\"></span> COMMS CENTER</a></li>\r\n                    <li><a href=\"/#projectoffice\"><span class=\"glyphicon glyphicon-menu-right\"></span> PROJECT OFFICE</a></li>\r\n                    <li><a href=\"/#trainingcenter\"><span class=\"glyphicon glyphicon-menu-right\"></span> TRAINING CENTER</a></li>\r\n                    <li *ngIf=\"canAccessLibrary\"><a href=\"/#library\"> <span class=\"glyphicon glyphicon-menu-right\"></span> LIBRARY</a></li>\r\n                    <li *ngIf=\"canAccessLogistic\"><a href=\"/#logisticscenter\"> <span class=\"glyphicon glyphicon-menu-right\"></span> LOGISTICS CENTER</a></li>\r\n                </ul>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/layout/components/header/headerButtons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderButtonsComponent = /** @class */ (function () {
    function HeaderButtonsComponent(toastrSvc, userSvc, systemAccessEnum, webconfigSvc) {
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.webconfigSvc = webconfigSvc;
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
        //this.userSvc.isAuthenticated().then(this.isAuthenticatedCallBack.bind(this));
        //was working ok, but maybe slow
        //this.userSvc.getCurrentUser()
        //    .then(this.getCurrentUserCallback.bind(this));
        var self = this;
        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        }
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            self.libraryLink = self.webconfig.routeConfig.libraryLink;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    };
    //public isAuthenticatedCallBack(resp: any) {
    //    if (resp.isok) {
    //        if (resp.model == true) {
    //            //setup user header menu
    //            this.isAuthenticated = true;
    //            this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
    HeaderButtonsComponent.prototype.isAuthenticatedCallBack = function (resp) {
        if (resp.isok) {
            if (resp.model == true) {
                //setup user header menu
                this.isAuthenticated = true;
                //        } else {
                //            //Go back to login page
                //            //window.location.href = "/Account/Login";
            }
        }
    };
    HeaderButtonsComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp != null || resp != undefined) {
            if (resp.isok) {
                this.currentUser = resp.model;
                this.userSvc.currentUser = resp.model;
                var userNameElem = __WEBPACK_IMPORTED_MODULE_3_jquery__("#loggedin-username");
                userNameElem.text(this.currentUser.displayName);
                var projectOfficeBtn = __WEBPACK_IMPORTED_MODULE_3_jquery__("#projectOfficeBtn");
                projectOfficeBtn.attr("href", this.currentUser.defaultPageUrl);
                var canViewUsers = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ViewUsers"));
                var canManageGroups = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ManageGroups"));
                var canViewBusiness = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ViewBusiness"));
                var userOptsDropdownElem = __WEBPACK_IMPORTED_MODULE_3_jquery__("#userOptionsDropdown");
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
                    __WEBPACK_IMPORTED_MODULE_3_jquery__("#hidden-management-li").replaceWith(management_li);
                }
                if (this.currentUser.hasAccessToCMS) {
                    var CMS_li = "";
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementTools"))) {
                        CMS_li = '<li><a href="/CityCMS/tools/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementProductFamilies"))) {
                        CMS_li = '<li><a href="/CityCMS/productfamilies/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementCommsCenter"))) {
                        CMS_li = '<li><a href="/CityCMS/communicationscenter/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementLibrary"))) {
                        CMS_li = '<li><a href="/CityCMS/library/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementApplicationProducts"))) {
                        CMS_li = '<li><a href="/CityCMS/applicationproducts/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementApplicationBuildings"))) {
                        CMS_li = '<li><a href="/CityCMS/applicationbuildings/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementFunctionalBuildings"))) {
                        CMS_li = '<li><a href="/CityCMS/functionalbuildings/">CONTENT MANAGEMENT</a></li>';
                    }
                    if (this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ContentManagementHomeScreen"))) {
                        CMS_li = '<li><a href="/CityCMS/homescreen/">CONTENT MANAGEMENT</a></li>';
                    }
                    //userOptsDropdownElem.append(CMS_li);
                    __WEBPACK_IMPORTED_MODULE_3_jquery__("#hidden-content-management-li").replaceWith(CMS_li);
                }
                var signOut_li = '<li><a href="/Account/Logoff">SIGN OUT</a></li>';
                //userOptsDropdownElem.append(signOut_li);
                var cityLocationsDropdownElem = __WEBPACK_IMPORTED_MODULE_3_jquery__("#cityLocationsDropdown");
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
                for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                    var message = _a[_i];
                    if (message.type == 40) {
                        this.toastrSvc.Success(message.text);
                    }
                }
            }
            else if (resp.messages) {
                //window.location.href = "/Account/Login";
                for (var _b = 0, _c = resp.messages.items; _b < _c.length; _b++) {
                    var message = _c[_b];
                    if (message.type == 10) {
                        this.toastrSvc.Error(message.text);
                    }
                }
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderButtonsComponent.prototype, "isAuthenticated", void 0);
    HeaderButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-buttons',
            template: __webpack_require__("../../../../../src/app/layout/components/header/headerButtons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/layout/components/header/headerButtons.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_index__["h" /* SystemAccessEnum */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["l" /* WebConfigService */]])
    ], HeaderButtonsComponent);
    return HeaderButtonsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_header_headerButtons_component__ = __webpack_require__("../../../../../src/app/layout/components/header/headerButtons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
                //SharedModule.forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__components_header_headerButtons_component__["a" /* HeaderButtonsComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__components_header_headerButtons_component__["a" /* HeaderButtonsComponent */]],
            providers: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_common_common_service__ = __webpack_require__("../../../../../src/app/shared/services/common/common.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__services_common_common_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_common_password_service__ = __webpack_require__("../../../../../src/app/shared/services/common/password.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__services_common_password_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_2__services_common_toastr_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_common_user_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_3__services_common_user_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_common_webconfig_service__ = __webpack_require__("../../../../../src/app/shared/services/common/webconfig.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_4__services_common_webconfig_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_common_enums_service__ = __webpack_require__("../../../../../src/app/shared/services/common/enums.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__services_common_enums_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_common_systemAccessEnum_service__ = __webpack_require__("../../../../../src/app/shared/services/common/systemAccessEnum.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__services_common_systemAccessEnum_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_7__services_common_user_resolver_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__services_common_user_resolver_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__services_account_account_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_basket_basket_service__ = __webpack_require__("../../../../../src/app/shared/services/basket/basket.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__services_basket_basket_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_products_product_service__ = __webpack_require__("../../../../../src/app/shared/services/products/product.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__services_products_product_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pipes_keep_html_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/keep-html.pipe.ts");
/* unused harmony namespace reexport */














/***/ }),

/***/ "../../../../../src/app/shared/pipes/keep-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeepHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var KeepHtmlPipe = /** @class */ (function () {
    function KeepHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    KeepHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    KeepHtmlPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'keepHtml' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], KeepHtmlPipe);
    return KeepHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/account/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountService = /** @class */ (function () {
    function AccountService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    AccountService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AccountService.prototype.extractHtml = function (res) {
        return res._body;
    };
    AccountService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    //public getUserLoginModel() {
    //    return this.http.get("/api/AccountApi/GetUserLoginModel", { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    //}
    AccountService.prototype.getUserLoginModel = function () {
        return this.http.get("/api/AccountApi/GetUserLoginModel", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.logIn = function (body) {
        return this.http.post("/api/AccountApi/Login", body, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    //public getUserRegistrationModel() {
    //    return this.http.get("/api/AccountApi/UserRegistration", { headers: this.headers }).toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}
    AccountService.prototype.getUserRegistrationModel = function () {
        return this.http.get("/api/AccountApi/UserRegistration", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.getCurrentUser = function () {
        return this.http.get("/api/User/GetCurrentUser", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    //not working
    //public userRegistration(data: any) {
    //    return this.http.post("/api/AccountApi/UserRegistration", data, { headers: this.headers }).toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}
    AccountService.prototype.userRegistration = function (data) {
        return this.http.post("/Account/RegisterUser", data, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.businessAddressLookup = function (accountId) {
        return this.http.get("/api/AccountApi/BusinessAddressLookup?accountId=" + accountId, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.resetBasketQuoteId = function () {
        return this.http.get("/api/AccountApi/ResetBasketQuoteId", { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/basket/basket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasketService = /** @class */ (function () {
    function BasketService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
    }
    BasketService.prototype.getBasket = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
        return this.http.get("/api/User/getBasket", { headers: headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    BasketService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    BasketService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    BasketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BasketService);
    return BasketService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/common.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommonService = /** @class */ (function () {
    function CommonService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    CommonService.prototype.getStateIdByStateCode = function (stateCode) {
        return this.http.get("/api/Common/GetStateIdByStateCode?stateCode=" + stateCode, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CommonService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    CommonService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/enums.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Enums; });
/* unused harmony export SystemAccessEnums */
/* unused harmony export UserTypeEnum */
/* unused harmony export ExistingBusinessEnum */
/* unused harmony export BusinessTypeEnum */
/* unused harmony export ProductFamilyEnum */
/* unused harmony export ProductModelTypeEnum */
/* unused harmony export ProductTypeEnum */
/* unused harmony export UnitInstallationTypeEnum */
/* unused harmony export ProductClassPIMEnum */
/* unused harmony export ProductEnergySourceTypeEnum */
/* unused harmony export ProductStatusTypeEnum */
/* unused harmony export ProductInventoryStatusTypeEnum */
/* unused harmony export SubmittalSheetTypeEnum */
/* unused harmony export DiscountRequestStatusTypeEnum */
/* unused harmony export CommissionRequestStatusTypeEnum */
/* unused harmony export LineItemTypeEnum */
/* unused harmony export LineItemOptionTypeEnum */
/* unused harmony export OrderStatusTypeEnum */
/* unused harmony export ToolAccessEnum */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Enums = /** @class */ (function () {
    function Enums() {
        this.SystemAccessEnum = new SystemAccessEnums();
        this.UserTypeEnum = new UserTypeEnum();
        this.ExistingBusinessEnum = new ExistingBusinessEnum();
        this.BusinessTypeEnum = new BusinessTypeEnum();
        this.ProductFamilyEnum = new ProductFamilyEnum();
        this.ProductTypeEnum = new ProductTypeEnum();
        this.ProductModelTypeEnum = new ProductModelTypeEnum();
        this.UnitInstallationTypeEnum = new UnitInstallationTypeEnum();
        this.ProductClassPIMEnum = new ProductClassPIMEnum();
        this.ProductEnergySourceTypeEnum = new ProductEnergySourceTypeEnum();
        this.ProductStatusTypeEnum = new ProductStatusTypeEnum();
        this.ProductInventoryStatusTypeEnum = new ProductInventoryStatusTypeEnum();
        this.SubmittalSheetTypeEnum = new SubmittalSheetTypeEnum();
        this.DiscountRequestStatusTypeEnum = new DiscountRequestStatusTypeEnum();
        this.CommissionRequestStatusTypeEnum = new CommissionRequestStatusTypeEnum();
        this.LineItemTypeEnum = new LineItemTypeEnum();
        this.LineItemOptionTypeEnum = new LineItemOptionTypeEnum();
        this.OrderStatusTypeEnum = new OrderStatusTypeEnum();
        this.ToolAccessEnum = new ToolAccessEnum();
    }
    Enums = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Enums);
    return Enums;
}());

var SystemAccessEnums = /** @class */ (function () {
    function SystemAccessEnums() {
        this.None = 1;
        this.ManageGroups = 20;
        this.ApproveUsers = 30;
        this.ViewUsers = 32;
        this.EditUser = 34;
        this.AdminAccessRights = 38;
        this.UndeleteUser = 36;
        this.ViewBusiness = 40;
        this.EditBusiness = 42;
        this.UndeleteBusiness = 44;
        this.ViewProject = 50;
        this.EditProject = 52;
        this.UndeleteProject = 54;
        //ShareProject : any = 56;
        this.TransferProject = 58;
        this.ViewProjectsInGroup = 59;
        this.RequestDiscounts = 60;
        this.ApproveDiscounts = 62;
        this.ViewOrder = 67;
        this.SubmitOrder = 68;
        //CMS access permissions
        this.ContentManagementHomeScreen = 70;
        this.ContentManagementFunctionalBuildings = 71;
        this.ContentManagementApplicationBuildings = 72;
        this.ContentManagementApplicationProducts = 73;
        this.ContentManagementLibrary = 74;
        this.ContentManagementCommsCenter = 75;
        this.ContentManagementProductFamilies = 76;
        this.ContentManagementTools = 77;
        // Pipeline Access Permissions
        this.ViewPipelineData = 80;
        this.EditPipelineData = 82;
        //View Discount Request
        this.ViewDiscountRequest = 63;
        this.RequestCommission = 64;
        this.ApproveCommissionRequests = 65;
        this.ViewRequestedCommission = 66;
    }
    return SystemAccessEnums;
}());

var UserTypeEnum = /** @class */ (function () {
    function UserTypeEnum() {
        this.Systems = 255;
        this.DaikinSuperUser = 190;
        this.DaikinAdmin = 170;
        this.DaikinEmployee = 150;
        this.CustomerSuperUser = 90;
        this.CustomerAdmin = 70;
        this.CustomerUser = 50;
        this.NotSet = 0;
        this.OtherType = 10;
    }
    return UserTypeEnum;
}());

var ExistingBusinessEnum = /** @class */ (function () {
    function ExistingBusinessEnum() {
        this.New = 0;
        this.Existing = 1;
        this.Duplicate = 2;
    }
    return ExistingBusinessEnum;
}());

var BusinessTypeEnum = /** @class */ (function () {
    function BusinessTypeEnum() {
        this.Unknown = 1;
        this.Daikin = 100000;
        this.ManufacturerRep = 200003;
        this.Distributor = 200000;
        this.Dealer = 200001;
        this.EngineerArchitect = 200005;
        this.Other = 100000000;
    }
    return BusinessTypeEnum;
}());

var ProductFamilyEnum = /** @class */ (function () {
    function ProductFamilyEnum() {
        this.Other = 1;
        this.Accessories = 2;
        this.UnitarySplitSystem = 111521;
        this.UnitaryPackagedSystem = 111522;
        this.MiniSplit = 111523;
        this.MultiSplit = 111524;
        this.SkyAir = 111525;
        this.VRV = 111526;
        this.AlthermaSplit = 111527;
        this.AlthermaMonobloc = 111528;
        this.LightCommercialSplitSystem = 111529;
        this.LightCommercialPackagedSystem = 111530;
    }
    return ProductFamilyEnum;
}());

var ProductModelTypeEnum = /** @class */ (function () {
    function ProductModelTypeEnum() {
        this.Other = 1;
        this.All = 100000999;
        this.Indoor = 111531;
        this.Outdoor = 111532;
        this.System = 111533;
        this.Accessory = 112553;
    }
    return ProductModelTypeEnum;
}());

var ProductTypeEnum = /** @class */ (function () {
    function ProductTypeEnum() {
        this.Equipment = 111226;
        this.Accessory = 111227;
        this.Service = 111228;
    }
    return ProductTypeEnum;
}());

//TODO: to be renamed
var UnitInstallationTypeEnum = /** @class */ (function () {
    function UnitInstallationTypeEnum() {
        // TODO:  Delete after 10/01/2017
        //public None = 0;
        //public Other = 1;
        //public All = 100000999;
        //public AirHandler = 100000000;
        //public EvaporatorCoil = 100000001;
        //public PackageAC = 100000002;
        //public PackageHP = 100000003;
        //public PackageDF = 100000004;
        //public PackageGE = 100000005;
        //public WallMounted = 100000151;
        //public CeilingSuspended = 100000152;
        //public Ducted = 100000153;
        //public FloorStanding = 100000154;
        //public CeilingCassette = 100000155;
        //public GasFurnace = 100000156;
        //public CasedCoil = 100000157;
        //public CoilOnly = 100000158;
        //public CoolingOnly = 100000301;
        //public HeatPump = 100000302;
        //public HeatRecovery = 100000303;
        //public AirConditioner = 100000304;
        // TODO END:  Delete after 10/01/2017
        this.None = 0;
        this.Other = 1;
        this.All = 100000999;
        this.AirHandler = 100000000;
        this.EvaporatorCoil = 100000001;
        this.PackageAC = 100000002;
        this.PackageHP = 100000003;
        this.PackageDF = 100000004;
        this.PackageGE = 100000005;
        this.WallMounted = 111006;
        this.CeilingSuspended = 111008;
        this.Ducted = 111007;
        this.FloorStanding = 111010;
        this.CeilingCassette = 111009;
        this.GasFurnace = 100000156;
        this.CasedCoil = 100000157;
        this.CoilOnly = 100000158;
        this.CoolingOnly = 100000301;
        this.HeatPump = 100000302;
        this.HeatRecovery = 100000303;
        this.AirConditioner = 100000304;
        this.DualFloorCeilingSuspended = 111011;
        this.Rooftop = 111012;
    }
    return UnitInstallationTypeEnum;
}());

var ProductClassPIMEnum = /** @class */ (function () {
    function ProductClassPIMEnum() {
        this.None = 0;
        this.All = 100000999;
        this.NewProduct = 111173;
        this.SplitAC = 111174;
        this.SplitHP = 111175;
        this.Coil = 111176;
        this.AirHandler = 111177;
        this.GasFurnace = 111178;
        this.PackageAC = 111179;
        this.PackagedHP = 111180;
        this.PackagedGED = 111181;
        this.LightCommercialPackagedAC = 111182;
        this.LightCommercialPackagedHP = 111183;
        this.LightCommercialPackagedGE = 111184;
        this.MiniSplitAC = 111185;
        this.MiniSplitHP = 111186;
        this.MiniSplitFC = 111187;
        this.MiniSplitSystem = 111188;
        this.MultiSplitAC = 111189;
        this.MultiSplitHP = 111190;
        this.MultiSplitFC = 111191;
        this.SkyAirAC = 111192;
        this.SkyAirHP = 111193;
        this.SkyAirFC = 111194;
        this.SkyAirSystem = 111195;
        this.AlthermaMonoBlocHP = 111196;
        this.AlthermaMonoBlocHeatOnly = 111197;
        this.AlthermaSplitHP = 111198;
        this.AlthermaSplitHeatOnly = 111199;
        this.AlthermaFC = 111200;
        this.AlthermaWaterTank = 111201;
        this.VRVAirCooledHP = 111202;
        this.VRVAirCooledHR = 111203;
        this.VRVFanCoil = 111204;
        this.VRVWaterCooledHP = 111205;
        this.VRVWaterCooledHR = 111206;
        this.VRVVentilation = 111207;
        this.AdapterPCB = 111208;
        this.ElectricHeater = 111209;
        this.ExpansionValveKit = 111210;
        this.Filters = 111211;
        this.GeneralAccessories = 111212;
        this.InstallationBox = 111213;
        this.PipingKit = 111214;
        this.BranchSelector = 111215;
        this.CondensateDrainKit = 111216;
        this.Controllers = 1112117;
        this.DecorationPanel = 111218;
        this.SensorKit = 111219;
        this.VentilationKit = 111220;
        this.PackagedAC = 112261;
    }
    return ProductClassPIMEnum;
}());

var ProductEnergySourceTypeEnum = /** @class */ (function () {
    function ProductEnergySourceTypeEnum() {
        this.Electric = 110979;
        this.Gas = 110980;
        this.DualFuel = 110981;
    }
    return ProductEnergySourceTypeEnum;
}());

var ProductStatusTypeEnum = /** @class */ (function () {
    function ProductStatusTypeEnum() {
        this.New = 111266;
        this.Active = 111267;
        this.Obsolete = 111268;
        this.HiddenModuleUnit = 111269;
        this.Inactive = 143382;
        this.Other = 1;
    }
    return ProductStatusTypeEnum;
}());

var ProductInventoryStatusTypeEnum = /** @class */ (function () {
    function ProductInventoryStatusTypeEnum() {
        this.Available = 111700;
        this.ContactCSR = 111710;
        //public ContactEquipmentCSR: any = 111720;
        this.NotAvailable = 111730;
    }
    return ProductInventoryStatusTypeEnum;
}());

var SubmittalSheetTypeEnum = /** @class */ (function () {
    function SubmittalSheetTypeEnum() {
        this.Other = 1;
        this.CoilsAirHandlers = 111499;
        this.CommercialACAndHP = 111500;
        this.CommercialAH = 111501;
        this.GasFurnace = 111502;
        this.AlthermaIndoor = 111503;
        this.AlthermaOutdoor = 111504;
        this.AlthermaTank = 111505;
        this.MultiSplitIndoor = 111506;
        this.MultiSplitOutdoor = 111507;
        this.SystemCooling = 111508;
        this.SystemHP = 111509;
        this.VRVIIIAirCooled = 111510;
        this.VRVIIIWaterCooled = 111511;
        this.VRVIndoor = 111512;
        this.Controllers = 111513;
        this.Accessories = 111514;
        this.RTU = 111515;
        this.Packaged = 111516;
        this.ACAndHP = 111517;
        this.PackagedACAndHP = 111518;
        this.PackagedDF = 111519;
        this.PackagedGE = 111520;
    }
    return SubmittalSheetTypeEnum;
}());

var DiscountRequestStatusTypeEnum = /** @class */ (function () {
    function DiscountRequestStatusTypeEnum() {
        this.NewRecord = 0;
        this.Pending = 2;
        this.Rejected = 4;
        this.Approved = 6;
        this.Deleted = 8;
    }
    return DiscountRequestStatusTypeEnum;
}());

var CommissionRequestStatusTypeEnum = /** @class */ (function () {
    function CommissionRequestStatusTypeEnum() {
        this.NewRecord = 0;
        this.Pending = 2;
        this.Rejected = 4;
        this.Approved = 6;
        this.Deleted = 8;
    }
    return CommissionRequestStatusTypeEnum;
}());

var LineItemTypeEnum = /** @class */ (function () {
    function LineItemTypeEnum() {
        this.Standard = 1;
        this.Configured = 2;
    }
    return LineItemTypeEnum;
}());

var LineItemOptionTypeEnum = /** @class */ (function () {
    function LineItemOptionTypeEnum() {
        this.BaseModel = 1;
        this.FactoryInstalled = 2;
        this.FieldInstalled = 3;
    }
    return LineItemOptionTypeEnum;
}());

var OrderStatusTypeEnum = /** @class */ (function () {
    function OrderStatusTypeEnum() {
        this.NewRecord = 1;
        this.Submitted = 2;
        this.AwaitingCSR = 3;
        this.Accepted = 4;
        this.InProcess = 5;
        this.Picked = 6;
        this.Shipped = 7;
        this.Canceled = 8;
    }
    return OrderStatusTypeEnum;
}());

var ToolAccessEnum = /** @class */ (function () {
    function ToolAccessEnum() {
        this.WEBXpress = 20;
        this.UnitaryMatchupTool = 35;
        this.CommercialSplitMatchupTool = 36;
        this.LCSubmittalTool = 120;
    }
    return ToolAccessEnum;
}());

//@Injectable()
//export class ProductFamilyEnum {
//    public Other: any = 1;
//    public MiniSplit: any = 100000000;
//    public Altherma: any = 100000001;
//    public MultiSplit: any = 100000002;
//    public SkyAir: any = 100000003;
//    public VRV: any = 100000004;
//    public RTU: any = 100000005;
//    public Packaged: any = 100000006;
//    public PTAC: any = 100000007;
//    public Ventilation: any = 100000008;
//    public IAQ_CleanComfort: any = 100000009;
//    public Accessories: any = 100000010;
//    public UnitarySplit: any = 100000012;
//    public UnitaryPackage: any = 100000013;
//    public CommercialSplit: any = 100000014;
//    constructor() {
//    }
//} 


/***/ }),

/***/ "../../../../../src/app/shared/services/common/password.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PasswordService = /** @class */ (function () {
    function PasswordService() {
    }
    PasswordService.prototype.PasswordStrengthLevel = function (password) {
        var strength = 0;
        if (this.ContainsLowerCase(password)) {
            strength++;
        }
        if (this.ContainsUpperCase(password)) {
            strength++;
        }
        if (this.ContainsNumber(password)) {
            strength++;
        }
        if (this.ContainsSpecialCharacter(password)) {
            strength++;
        }
        if (password.length >= 8) {
            strength++;
        }
        return strength;
    };
    PasswordService.prototype.ContainsLowerCase = function (password) {
        var patt = /[a-z]/g;
        var result = password.match(patt);
        if (result != null && result.length > 0) {
            return true;
        }
        else
            return false;
    };
    PasswordService.prototype.ContainsUpperCase = function (password) {
        var patt = /[A-Z]/g;
        var result = password.match(patt);
        if (result != null && result.length > 0) {
            return true;
        }
        else
            return false;
    };
    PasswordService.prototype.ContainsNumber = function (password) {
        var patt = /[0-9]/g;
        var result = password.match(patt);
        if (result != null && result.length > 0) {
            return true;
        }
        else
            return false;
    };
    PasswordService.prototype.ContainsSpecialCharacter = function (password) {
        var patt = /[`~!@#$%\^&\*\(\)\-_=\+\{\}\[\]\|\\:;"',\.\/<>\?]/g;
        var result = password.match(patt);
        if (result != null && result.length > 0) {
            return true;
        }
        else
            return false;
    };
    PasswordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PasswordService);
    return PasswordService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/systemAccessEnum.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SystemAccessEnum; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SystemAccessEnum = /** @class */ (function () {
    function SystemAccessEnum() {
        this.SystemAccess = {
            "None": 1,
            "ManageGroups": 20,
            "ApproveUsers": 30,
            "ViewUsers": 32,
            "EditUser": 34,
            "AdminAccessRights": 38,
            "UndeleteUser": 36,
            "ViewBusiness": 40,
            "EditBusiness": 42,
            "UndeleteBusiness": 44,
            "ViewProject": 50,
            "EditProject": 52,
            "UndeleteProject": 54,
            //"ShareProject" : 56,
            "TransferProject": 58,
            "ViewProjectsInGroup": 59,
            "RequestDiscounts": 60,
            "ApproveDiscounts": 62,
            "ViewOrder": 67,
            "SubmitOrder": 68,
            //CMS access permissions
            "ContentManagementHomeScreen": 70,
            "ContentManagementFunctionalBuildings": 71,
            "ContentManagementApplicationBuildings": 72,
            "ContentManagementApplicationProducts": 73,
            "ContentManagementLibrary": 74,
            "ContentManagementCommsCenter": 75,
            "ContentManagementProductFamilies": 76,
            "ContentManagementTools": 77,
            // Pipeline Access Permissions
            "ViewPipelineData": 80,
            "EditPipelineData": 82,
            //View Discount Request
            "ViewDiscountRequest": 63,
            "RequestCommission": 64,
            "ApproveCommissionRequests": 65,
            "ViewRequestedCommission": 66
        };
    }
    //this function return integer value of SystemAccessEnum
    SystemAccessEnum.prototype.getSystemAccessValueByName = function (systemAccessName) {
        return this.SystemAccess[systemAccessName];
    };
    SystemAccessEnum = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SystemAccessEnum);
    return SystemAccessEnum;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/toastr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastrService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ToastrService = /** @class */ (function () {
    function ToastrService() {
    }
    ToastrService.prototype.Error = function (message) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "timeOut": 0,
            "extendedTimeOut": 0,
            "preventDuplicates": true
        };
        toastr.error(message + "<br /><br /><button type'button' class='btn clear' style='color: black'>Ok</button>");
    };
    ToastrService.prototype.ErrorFadeOut = function (message) {
        //toastr.options = {
        //    "positionClass": "toast-bottom-right",
        //    "preventDuplicates": true
        //}
        //toastr.error(message);
    };
    ToastrService.prototype.Success = function (message) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        };
        toastr.success(message);
    };
    ToastrService.prototype.Info = function (message) {
        //toastr.options = {
        //    "positionClass": "toast-bottom-right",
        //    "preventDuplicates": true
        //}
        //toastr.info(message);
    };
    ToastrService.prototype.Warning = function (message) {
        //toastr.options = {
        //    "positionClass": "toast-bottom-right",
        //    "preventDuplicates": true
        //}
        //toastr.warning(message);
    };
    ToastrService.prototype.displayResponseMessages = function (response) {
        if (response != null && response.messages != null) {
            for (var _i = 0, _a = response.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) {
                    this.Success(message.text);
                }
                else if (message.type == 10) {
                    this.Error(message.text);
                }
            }
        }
    };
    ToastrService.prototype.displayResponseMessagesFadeOut = function (response) {
        if (response != null && response.messages != null) {
            for (var _i = 0, _a = response.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) {
                    this.Success(message.text);
                }
                else if (message.type == 10) {
                    this.ErrorFadeOut(message.text);
                }
            }
        }
    };
    ToastrService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], ToastrService);
    return ToastrService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/user-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UserResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUserResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserResolver = /** @class */ (function () {
    function UserResolver(accountSvc) {
        this.accountSvc = accountSvc;
    }
    UserResolver.prototype.resolve = function (route, state) {
        return this.accountSvc.getUserRegistrationModel()
            .map(function (user) {
            if (user) {
                return user;
            }
            else {
                return null;
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    UserResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */]])
    ], UserResolver);
    return UserResolver;
}());

var CurrentUserResolver = /** @class */ (function () {
    function CurrentUserResolver(accountSvc) {
        this.accountSvc = accountSvc;
    }
    CurrentUserResolver.prototype.resolve = function (route, state) {
        return this.accountSvc.getCurrentUser()
            .map(function (currentUser) {
            if (currentUser) {
                return currentUser;
            }
            else {
                return null;
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    CurrentUserResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__account_account_service__["a" /* AccountService */]])
    ], CurrentUserResolver);
    return CurrentUserResolver;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(router, route, toastrSvc, http) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.http = http;
    }
    UserService.prototype.ngOnInit = function () {
        //this.getCurrentUser()
        //    .then(this.getCurrentUserCallback.bind(this));
    };
    UserService.prototype.isAuthenticated = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
        return this.http.get("/api/User/IsAuthenticated", { headers: headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    UserService.prototype.getCurrentUser = function () {
        var self = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
        //return this.http.get("/api/User/GetCurrentUser", { headers: headers }).toPromise().then(this.extractData).catch(this.handleError);
        return this.http.get("/api/User/GetCurrentUser", { headers: headers }).toPromise()
            .then(function (res) {
            var resp = res.json();
            if (resp == null) {
                self.router.navigateByUrl("/login");
            }
            else {
                return resp || {};
            }
        })
            .catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    UserService.prototype.hasAccess = function (user, accessId) {
        for (var _i = 0, _a = user.systemAccesses; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item == accessId) {
                return true;
            }
        }
        return false;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/common/webconfig.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WebConfigService = /** @class */ (function () {
    function WebConfigService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    WebConfigService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    WebConfigService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    WebConfigService.prototype.getWebConfig = function () {
        return this.http.get("/v2/webconfig.v2.json", { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    WebConfigService.prototype.getLCSTApiToken = function () {
        return this.http.get("/api/Product/GetLCSTApiToken", { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    WebConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], WebConfigService);
    return WebConfigService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/products/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    ProductService.prototype.getBasketQuoteId = function () {
        return this.http.get("/api/Product/GetBasketQuoteId", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    //TODO: deprecated, delete after 01/31/2018
    ProductService.prototype.resetBasketQuoteId = function () {
        return this.http.get("/api/Product/ResetBasketQuoteId", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    //Go to product page & reset session["BasketQuoteId"] = 0
    ProductService.prototype.products = function () {
        return this.http.get("/api/Product/Products", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.browseProductsWithQuoteId = function (quoteId) {
        return this.http.get("/api/Product/BrowseProductsWithQuoteId?quoteId=" + quoteId, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.getProductFamilies = function () {
        return this.http.get("/api/Product/GetProductFamilies", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.getInstallationTypes = function (data) {
        return this.http.post("/api/Product/GetInstallationTypes", data, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.getProductStatuses = function () {
        return this.http.get("/api/Product/GetProductStatuses", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.getInventoryStatuses = function () {
        return this.http.get("/api/Product/GetInventoryStatuses", { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.getProducts = function (data) {
        ///return this.http.post("/api/Product/GetProducts", data, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
        return this.http.post("/api/Product/GetProducts", data, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (data) {
        return this.http.post("/api/Product/GetProduct", data, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    //public getAccessories(data: any) {
    //    return this.http.post("/api/Product/GetAccessories", data, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    //}
    //add multiple products
    ProductService.prototype.addProductsToQuote = function (data) {
        return this.http.post("/api/Product/AddProductsToQuote", data, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    //add single product
    ProductService.prototype.addProductToQuote = function (product) {
        return this.http.post("/api/Product/AddProductToQuote", product, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.addProductToQuoteByProductNumber = function (product) {
        return this.http.post("/api/Product/AddProductToQuoteByProductNumber", product, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    ProductService.prototype.addSystemToQuote = function (system) {
        return this.http.post("/api/Product/AddSystemToQuote", system, { headers: this.headers })
            .toPromise().then(this.extractData).catch(this.handleError);
    };
    //This service returns HTML as string 
    ProductService.prototype.getSubmittalDataSheet = function (ProductNumber) {
        //return this.http.get("/ProductDashboard/SubmittalTemplateHtml?ProductNumber=FDXS12LVJURXS12LVJU&PdfMode=true").toPromise().then(this.extractHtml).catch(this.handleError);
        return this.http.get("/ProductDashboard/SubmittalTemplateHtml?ProductNumber=" + ProductNumber + "&PdfMode=true")
            .toPromise().then(this.extractHtml).catch(this.handleError);
    };
    ProductService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    ProductService.prototype.extractHtml = function (res) {
        return res._body;
    };
    ProductService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map