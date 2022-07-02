webpackJsonp(["account.module"],{

/***/ "../../../../../src/app/account/account-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/account/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var accountRoutes = [
    {
        path: '', component: __WEBPACK_IMPORTED_MODULE_2__index__["b" /* LoginComponent */]
    },
    {
        path: 'userRegistration', component: __WEBPACK_IMPORTED_MODULE_2__index__["f" /* UserRegistrationComponent */], resolve: { user: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["b" /* UserResolver */] }
    },
    {
        path: 'registrationAcknowledgement', component: __WEBPACK_IMPORTED_MODULE_2__index__["c" /* RegistrationAcknowledgementComponent */]
    }
];
var AccountRoutingModule = /** @class */ (function () {
    function AccountRoutingModule() {
    }
    AccountRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */].forChild(accountRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */]],
        })
    ], AccountRoutingModule);
    return AccountRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_COMPONENTS", function() { return ACCOUNT_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__index__ = __webpack_require__("../../../../../src/app/account/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_routing_module__ = __webpack_require__("../../../../../src/app/account/account-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

//import { CommonModule } from '@angular/common';

//import { HttpModule } from '@angular/http';
//import { HttpClientModule } from '@angular/http';
//import { FormsModule } from '@angular/forms';



//import { HomeModule } from '../home/home.module' 

var ACCOUNT_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__index__["b" /* LoginComponent */],
    __WEBPACK_IMPORTED_MODULE_4__index__["c" /* RegistrationAcknowledgementComponent */],
    __WEBPACK_IMPORTED_MODULE_4__index__["d" /* UserBusinessDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__index__["e" /* UserPersonalDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_4__index__["f" /* UserRegistrationComponent */],
];
var AccountModule = /** @class */ (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
                //CommonModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */],
                //FormsModule,
                __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */].forRoot(),
                //HomeModule,
                __WEBPACK_IMPORTED_MODULE_5__account_routing_module__["a" /* AccountRoutingModule */]
            ],
            exports: ACCOUNT_COMPONENTS,
            declarations: ACCOUNT_COMPONENTS,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__index__["a" /* BusinessService */],
            ]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#login-bg {\r\n    background-image: url(/v2/src/assets/images/project-office-bg.png);\r\n    background-size: cover;\r\n    height: 92%;\r\n}\r\n\r\n#hidden-div {\r\n    height: 100px;\r\n}\r\n\r\n\r\n#login-form {\r\n    max-width: 450px;\r\n    /*margin: 0 auto;*/\r\n}\r\n\r\n/*#signIn {\r\n    height: 320px;\r\n    padding: 20px;\r\n}*/\r\n\r\n/*#signUp {\r\n    background-color: #edf9ff;\r\n    height: 320px;\r\n    \r\n}*/\r\n\r\n\r\n/*@media all and (max-width: 710px) {\r\n    #signIn, #signUp {\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n\r\n    #login-form {\r\n        width: 100%;\r\n    }\r\n}*/\r\n\r\n@media (min-width: 1200px) {\r\n}\r\n\r\n@media (max-width: 576px) {\r\n    .container-fluid {\r\n        width: auto;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/account/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"login-bg\">\r\n    <div id=\"hidden-div\" class=\"hidden-xs hidden-sm\"></div>\r\n    <div id=\"login-form\" class='container-fluid'>\r\n        <div class=\"main-content\">\r\n            <div>\r\n                <!--Old layout-->\r\n                <!--<div class=\"col col-md-7\" id=\"signIn\">\r\n                    <h1>Sign In</h1>\r\n                    <form *ngIf=\"user\" #form=\"ngForm\" novalidate>\r\n                        <div class=\"form-group\">\r\n                            <label>Email Address</label>\r\n                            <input type=\"text\" class=\"form-control\" #email=\"ngModel\" required name=\"email\" [(ngModel)]=\"user.email\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Password</label>\r\n                            <input type=\"password\" class=\"form-control\" #password=\"ngModel\" required name=\"password\" [(ngModel)]=\"user.password\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" name=\"persistent\" [(ngModel)]=\"user.persistent\" /> Remember me\r\n                                </label>\r\n                                <a class=\"pull-right\" href=\"/Account/RequestNewPassword\">Forgot Password</a>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label>Jump To</label>\r\n                            <kendo-dropdownlist *ngIf=\"user\"  name=\"loginJump\"\r\n                                                [data]=\"user.links.items\" [defaultItem]=\"loginJumpDefault\"\r\n                                                [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                [(ngModel)]=\"user.selectedlink\" (ngModelChange)=\"selectedLinkChange($event)\">\r\n                            </kendo-dropdownlist>\r\n                            <button class=\"btn btn-primary pull-right\" type=\"submit\" (click)=\"logIn()\">Sign In</button>\r\n                        </div>\r\n\r\n\r\n                    </form>\r\n                </div>\r\n                <div class=\"col col-md-5\" id=\"signUp\">\r\n                    <div id=\"innerDiv\">\r\n                        <h3 style=\"color:#00A1E4\">Create a new account</h3>\r\n                        <p>\r\n                            Not register yet? <br />\r\n                            Click the button below to get started\r\n                        </p>\r\n                        <a [routerLink]=\"['/account/userRegistration']\" class=\"btn btn-primary\">Sign Up</a>\r\n                    </div>\r\n                </div>-->\r\n\r\n                <!--New layout-->\r\n                <div id=\"signIn\">\r\n                    <h1>Sign In</h1>\r\n                    <form *ngIf=\"user\" #form=\"ngForm\" novalidate>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Email Address</label>\r\n                            <input type=\"text\" class=\"form-control\" \r\n                                #email=\"ngModel\" required name=\"email\" \r\n                                [(ngModel)]=\"user.email\" />\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Password</label>\r\n                            <input type=\"password\" class=\"form-control\" #password=\"ngModel\" \r\n                                   required name=\"password\" [(ngModel)]=\"user.password\" />\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <div class=\"checkbox\">\r\n                                <label>\r\n                                    <input type=\"checkbox\" name=\"persistent\" [(ngModel)]=\"user.persistent\" /> Remember me\r\n                                </label>\r\n                                <a class=\"pull-right\" href=\"/Account/RequestNewPassword\">Forgot Password</a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"form-group\">\r\n                            <button class=\"btn btn-primary\" type=\"submit\" (click)=\"logIn()\" style=\"width:93%\">Sign In</button>\r\n                        </div>\r\n                        <hr />\r\n                        <div class=\"form-group\">\r\n                            <a class=\"btn btn-default\" [routerLink]=\"['/login/userRegistration']\" style=\"width:93%\">Create a new account</a>\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/account/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, toastrSvc, userSvc, accountSvc) {
        //this.accountSvc.getUserLoginModel().then(this.getUserLoginModelCallback.bind(this));
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.loginJumpDefault = { text: "Home", value: "/v2/#/home/home" };
        var self = this;
        this.accountSvc.getUserLoginModel()
            .subscribe(function (data) {
            self.user = data.model;
            self.user.selectedLink = "/v2/#/home/home";
            //self.loginJumpOptions = this.user.links.items;
        }, function (err) { return console.log("Error: ", err); });
    }
    LoginComponent.prototype.ngOnInit = function () {
        //Clear BasketId
        this.accountSvc.resetBasketQuoteId();
    };
    LoginComponent.prototype.selectedLinkChange = function (event) {
        this.user.selectedLink = event.value;
        //this.user.selectedLink = event;
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        var self = this;
        var data = {
            Email: this.user.email,
            Password: this.user.password,
            SelectedLink: this.user.selectedLink,
            Persistent: this.user.persistent,
        };
        this.accountSvc.logIn(data).then(function (resp) {
            //self.loadingIconSvc.Stop(jQuery("#productPageContainer"));
            self.toastrSvc.displayResponseMessages(resp);
            if (resp != undefined && resp.isok) {
                //window.location.href = resp.model;
                window.location.href = _this.user.selectedLink;
                //            this.router.navigateByUrl("/home");
                // this.router.navigate(['/home/home']);
                self.userSvc.userIsAuthenticated = true;
                _this.userSvc.getCurrentUser().then(_this.getCurrentUserCallback.bind(_this));
                //self.userAuthenticationEvt.emit({});
            }
        });
    };
    LoginComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp != undefined && resp.isok) {
            this.userSvc.currentUser = resp.model;
            for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) {
                    this.toastrSvc.Success(message.text);
                }
            }
        }
        else {
            //resp is null
            //for (let message of resp.messages.items) {
            //    if (message.type == 10) {// error
            //        this.toastrSvc.Error(message.text);
            //    }
            //}
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/account/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/account/components/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_account_account_service__["a" /* AccountService */]])
    ], LoginComponent);
    return LoginComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/account/components/registration-acknowledgement/registration-acknowledgement.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"registration-acknowledgement\" class='container-fluid dk-blue-background'>\r\n    <div class=\"main-content\">\r\n        <div class=\"main-form\">\r\n            <h4>\r\n                THANK YOU FOR REGISTERING TO DAIKIN CITY\r\n            </h4>\r\n            <!--<p>Please click the button below to get started</p>\r\n            <a href=\"/v2/#/account/login\" class=\"btn btn-primary\">Get Started</a>-->\r\n            <p>Your account admin (and Daikin) have received your account profile information, and will be processed within 2 business days.</p>\r\n            <p>You will be notified via email once the registration is processed. Please contact your account admin for more details.</p>\r\n            <p>Click the button below to go to Daikin City Home.</p>\r\n            <a href=\"/\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-home\"></span> Home</a>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/components/registration-acknowledgement/registration-acknowledgement.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationAcknowledgementComponent; });
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

var RegistrationAcknowledgementComponent = /** @class */ (function () {
    function RegistrationAcknowledgementComponent() {
    }
    RegistrationAcknowledgementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "registration-acknowledgement",
            template: __webpack_require__("../../../../../src/app/account/components/registration-acknowledgement/registration-acknowledgement.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationAcknowledgementComponent);
    return RegistrationAcknowledgementComponent;
}());



/***/ }),

/***/ "../../../../../src/app/account/components/user-business-details/user-business-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--not being used because signUpForm valiation does not work-->\r\n<div class=\"section form\">\r\n    <fieldset id=\"business-details\">\r\n\r\n        <div class=\"col col-md-6 col-sm-12\">\r\n            <h4>Business Details</h4>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <p>Business Type</p>\r\n                <!--<input type=\"text\" class=\"form-control\" #businessTypeId required name=\"businessTypeId\" [(ngModel)]=\"user.business.businessTypeId\">-->\r\n                <kendo-dropdownlist [data]=\"user.business.businessTypes.items\" [textField]=\"'text'\" [valueField]=\"'value'\" \r\n                                    name=\"businessType\"  #businessTypeId=\"ngModel\" required [(ngModel)]=\"user.business.businessTypeId\" (ngModelChange)=\"user.business.businessTypeId=$event.value\" (valueChange)=\"BusinessTypeChange($event)\"\r\n                                    [disabled]=\"businessTypeDLLDisabled\">\r\n                </kendo-dropdownlist>\r\n                <div *ngIf=\"businessTypeId.invalid && businessTypeId.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                    Business Type is required.\r\n                </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"!showDakinAccRadioBtn\" class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Do you have a Daikin account?</label>\r\n                <div class=\"radio\">\r\n                    <label><input type=\"radio\" name=\"daikinAccRadioBtn\" value=\"true\" [(ngModel)]=\"hasDaikinAccount\" (ngModelChange)=\"HasDaikinAccountChange($event)\">Yes</label>\r\n                    <label><input type=\"radio\" name=\"daikinAccRadioBtn\" value=\"false\" [(ngModel)]=\"hasDaikinAccount\" (ngModelChange)=\"HasDaikinAccountChange($event)\">No</label>\r\n                </div>\r\n            </div>\r\n\r\n            <div [hidden]=\"!showAccountIdSearch\" class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Account ID</label>\r\n                <div>\r\n                    <input type=\"text\" id=\"businessSearchBox\" class=\"form-control k-input k-textbox\" #accountId name=\"accountId\" [(ngModel)]=\"user.accountId\">\r\n                    <button id=\"businessSearchBtn\"><span class=\"k-icon k-i-search\"></span></button>\r\n                </div>\r\n            </div>\r\n\r\n            <div *ngIf=\"!hasDaikinAccount\" class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Business Name</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #businessName=\"ngModel\" required name=\"businessName\" [(ngModel)]=\"user.business.businessName\">\r\n                <div *ngIf=\"businessName.invalid && businessName.touched\" class=\"alert alert-danger\">\r\n                    Business Name is required.\r\n                </div>\r\n            </div>\r\n            \r\n            <!--TODO: Remove before publishing-->\r\n            <div *ngIf=\"foundBusinessAddress\" class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Business Address</label>\r\n                <div>\r\n                    {{business.address.addressLine1}}\r\n                </div>\r\n                <div>\r\n                    {{business.address.addressLine2}}\r\n                </div>\r\n                <div>\r\n                    {{business.address.location}}, {{business.address.stateName}}, {{business.address.postalCode}}\r\n                </div>\r\n\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col col-md-6 col-sm-12\">\r\n            <h4 id=\"businessAddressLabel\">Business Address</h4>\r\n            <div class=\"checkbox\" *ngIf=\"showAccountIdSearch && foundBusinessAddress\">\r\n                <label><input type=\"checkbox\" [(ngModel)]=\"useBusinessAddress\" (change)=\"UseBusinessAddress()\" >Use Business Address</label>\r\n            </div>\r\n\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <p>Country</p>\r\n                <!--<input type=\"text\" class=\"form-control\" #country required name=\"Country\" [(ngModel)]=\"user.address.countryCode\">-->\r\n                <kendo-dropdownlist [data]=\"user.address.countries.items\" [textField]=\"'text'\" [valueField]=\"'value'\" \r\n                                    name=\"country\" #countryCode=\"ngModel\" required [(ngModel)]=\"user.address.countryCode\" [disabled]=\"useBusinessAddress\">\r\n                </kendo-dropdownlist>\r\n                <div *ngIf=\"countryCode.invalid && countryCode.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                    Country is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Address Line 1</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #addressLine1=\"ngModel\" required name=\"addressLine1\" [(ngModel)]=\"user.address.addressLine1\" [disabled]=\"useBusinessAddress\">\r\n                <div *ngIf=\"addressLine1.invalid && addressLine1.touched\" class=\"alert alert-danger\">\r\n                    Address Line1 is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Address Line 2</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #addressLine2 required name=\"addressLine2\" [(ngModel)]=\"user.address.addressLine2\" [disabled]=\"useBusinessAddress\">\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">City</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #location=\"ngModel\" required name=\"location\" [(ngModel)]=\"user.address.location\" [disabled]=\"useBusinessAddress\">\r\n                <div *ngIf=\"location.invalid && location.touched\" class=\"alert alert-danger\">\r\n                    City is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-6 col-sm-12 form-group required\">\r\n                <p>State/Province</p>\r\n                <!--<input type=\"number\" class=\"form-control\" #stateId required name=\"stateId\" [(ngModel)]=\"user.address.stateId\">-->\r\n                <kendo-dropdownlist [data]=\"user.address.states.items\" [textField]=\"'text'\" [valueField]=\"'value'\" \r\n                                    name=\"state\" #stateId=\"ngModel\" required [(ngModel)]=\"user.address.stateId\" [disabled]=\"useBusinessAddress\">\r\n                </kendo-dropdownlist>\r\n                <div *ngIf=\"stateId.invalid && stateId.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                    State is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-6 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Zip Code</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #postalCode=\"ngModel\" required name=\"postalCode\" [(ngModel)]=\"user.address.postalCode\" [disabled]=\"useBusinessAddress\">\r\n                <div *ngIf=\"postalCode.invalid && postalCode.touched\" class=\"alert alert-danger\" >\r\n                    Zip Code is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Office Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" #officeNumber required name=\"officeNumber\" [(ngModel)]=\"user.contact.officeNumber\" [disabled]=\"useBusinessAddress\">\r\n                <!--<kendo-maskedtextbox [mask]=\"phoneNumberMask\" name=\"officeNumber\" [(ngModel)]=\"user.contact.officeNumber\"></kendo-maskedtextbox>-->\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Web Address</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #webAddress required name=\"webAddress\" [(ngModel)]=\"user.contact.webAddress\" [disabled]=\"useBusinessAddress\">\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n    </fieldset>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/account/components/user-business-details/user-business-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBusinessDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
//TODO: This component is not used because signUpForm valiation does not work
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserBusinessDetailsComponent = /** @class */ (function () {
    function UserBusinessDetailsComponent(router, route, toastrSvc, accountSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.accountSvc = accountSvc;
        this.enums = enums;
        this.businessTypeDLLDisabled = false;
        this.foundBusinessAddress = false;
        this.showAccountIdSearch = false;
        this.showDakinAccRadioBtn = false;
        this.useBusinessAddress = false;
        this.hasDaikinAccount = false;
        this.defaultItem = { text: "Select...", value: null };
        this.phoneNumberMask = "(000) 000-0000";
    }
    UserBusinessDetailsComponent.prototype.ngOnInit = function () {
        this.setupSearchBusiness();
    };
    UserBusinessDetailsComponent.prototype.setupSearchBusiness = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#businessSearchBox").keyup(function (event) {
            event.stopImmediatePropagation();
            var value = __WEBPACK_IMPORTED_MODULE_3_jquery__("#businessSearchBox").value;
            if (value) {
                self.businessTypeDLLDisabled = true;
            }
            else {
                self.businessTypeDLLDisabled = false;
                self.useBusinessAddress = false;
            }
            if (event.keyCode == 13) {
                __WEBPACK_IMPORTED_MODULE_3_jquery__("#businessSearchBtn").click();
            }
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#businessSearchBtn").click(function (event) {
            event.stopImmediatePropagation();
            var value = __WEBPACK_IMPORTED_MODULE_3_jquery__("#businessSearchBox").value;
            if (value) {
                self.accountSvc.businessAddressLookup(value).then(self.businessAddressLookupCallback.bind(self));
            }
            else {
                self.foundBusinessAddress = false;
                self.useBusinessAddress = false;
            }
        });
    };
    UserBusinessDetailsComponent.prototype.businessAddressLookupCallback = function (resp) {
        if (resp.isok) {
            if (resp.model.accountId != null) {
                this.business = resp.model;
                this.user.business.accountId = resp.model.accountId;
                this.foundBusinessAddress = true;
                if (this.useBusinessAddress) {
                    this.UseBusinessAddress();
                }
            }
            else {
                this.toastrSvc.Warning("Business not found!");
                this.foundBusinessAddress = false;
                this.useBusinessAddress = false;
            }
        }
    };
    UserBusinessDetailsComponent.prototype.UseBusinessAddress = function () {
        if (this.useBusinessAddress) {
            this.user.address = this.business.address;
            this.user.address.stateId = this.business.address.stateId.toString();
            this.user.contact = this.business.contact;
        }
    };
    UserBusinessDetailsComponent.prototype.BusinessTypeChange = function (selectedItem) {
        if (selectedItem.value == this.enums.BusinessTypeEnum.Daikin
            || selectedItem.value == this.enums.BusinessTypeEnum.Distributor
            || selectedItem.value == this.enums.BusinessTypeEnum.ManufacturerRep) {
            this.showAccountIdSearch = true;
            this.showDakinAccRadioBtn = false;
            this.hasDaikinAccount = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#businessAddressLabel').text("USER ADDRESS DETAILS");
        }
        else {
            this.showAccountIdSearch = false;
            this.foundBusinessAddress = false;
            this.showDakinAccRadioBtn = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
        //this.rowItem.furnace_Model = selectedItem.value;
        //this.furnaceSelectedEvent.emit(selectedItem);
    };
    UserBusinessDetailsComponent.prototype.HasDaikinAccountChange = function (event) {
        if (event == "true") {
            this.showAccountIdSearch = true;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#businessAddressLabel').text("USER ADDRESS DETAILS");
        }
        else {
            this.showAccountIdSearch = false;
            this.foundBusinessAddress = false;
            this.useBusinessAddress = false;
            this.businessTypeDLLDisabled = false;
            this.user.accountId = null;
            this.user.business.accountId = null;
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserBusinessDetailsComponent.prototype, "user", void 0);
    UserBusinessDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-business-details",
            template: __webpack_require__("../../../../../src/app/account/components/user-business-details/user-business-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* Enums */]])
    ], UserBusinessDetailsComponent);
    return UserBusinessDetailsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/account/components/user-personal-details/user-personal-details.component.html":
/***/ (function(module, exports) {

module.exports = "<!--not being used because signUpForm valiation does not work-->\r\n<div class=\"section form\">\r\n\r\n    <fieldset id=\"personal-details\">\r\n\r\n        <h4>Personal Details</h4>\r\n        <div class=\"col col-md-6 col-sm-12\">\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">First Name</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #firstName=\"ngModel\" required name=\"firstName\" [(ngModel)]=\"user.firstName\">\r\n                <div *ngIf=\"firstName.invalid && firstName.touched\" class=\"alert alert-danger\">\r\n                    First Name is required.\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Middle Name</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #middleName name=\"middleName\" [(ngModel)]=\"user.middleName\">\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Last Name</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #lastName=\"ngModel\" required name=\"lastName\" [(ngModel)]=\"user.lastName\">\r\n                <div *ngIf=\"lastName.invalid && lastName.touched\" class=\"alert alert-danger\">\r\n                    Last Name is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col col-md-6 col-sm-12\">\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\" [class.has-error]=\"email.invalid && email.touched\">\r\n                <label class=\"control-label\">Email</label>\r\n                <input type=\"text\" class=\"form-control input-sm\" #email=\"ngModel\" required name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your business email account\"\r\n                       title=\"Users registering without business email (Gmail, hotmail, ect.) will not be approved or may take additional time to verify and approve access to Daikin City.\">\r\n                <div *ngIf=\"email.invalid && email.touched\" class=\"alert alert-danger\">\r\n                    Email is required.\r\n                </div>\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                <label class=\"control-label\">Mobile Phone Number</label>\r\n                <input type=\"text\" class=\"form-control\" #mobileNumber name=\"mobileNumber\" [(ngModel)]=\"user.contact.mobileNumber\">\r\n                <!--Canada number?-->\r\n                <!--<kendo-maskedtextbox [mask]=\"phoneNumberMask\" name=\"mobileNumber\" [(ngModel)]=\"user.contact.mobileNumber\"></kendo-maskedtextbox>-->\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Password</label>\r\n                <input type=\"password\" id=\"userPassword\" class=\"form-control input-sm\" #password=\"ngModel\" required name=\"password\" [(ngModel)]=\"user.password\">\r\n\r\n                <div style=\"width:70%\">\r\n                    <div id=\"passwordStrengthBkg\">\r\n                        <div id=\"passwordStrengthBar\"></div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger\">\r\n                    Password is required.\r\n                </div>\r\n\r\n            </div>\r\n            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                <label class=\"control-label\">Confirm Password</label>\r\n                <input type=\"password\" class=\"form-control input-sm\" #confirmPassword=\"ngModel\" required name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\">\r\n                <div *ngIf=\"confirmPassword.invalid && confirmPassword.touched\" class=\"alert alert-danger\">\r\n                    Confirm Password is required.\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <!--if (Model.CurrentUser.HasAccess(SystemAccessEnum.EditUser) && Model.CurrentUser.UserId != Model.UserId)\r\n        {\r\n            @Html.LabelFor(m => m.UserTypeId, ResourceUI.UserType, new { @class = \"required\" })\r\n            @Html.DropDownUserTypeListFor(m => m.UserTypeId, Model.UserTypes)\r\n            @Html.KeyMessages(m => m.UserTypeId)\r\n        }-->\r\n    </fieldset>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/account/components/user-personal-details/user-personal-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPersonalDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
//TODO: This component is not used because signUpForm valiation does not work
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPersonalDetailsComponent = /** @class */ (function () {
    function UserPersonalDetailsComponent(passwordSvc, accountSvc) {
        this.passwordSvc = passwordSvc;
        this.accountSvc = accountSvc;
        this.defaultItem = { text: "Select...", value: null };
        this.phoneNumberMask = "(000) 000-0000";
    }
    UserPersonalDetailsComponent.prototype.ngOnInit = function () {
        this.setupPasswordStrengthIndicator();
    };
    UserPersonalDetailsComponent.prototype.setupPasswordStrengthIndicator = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__("#userPassword").keyup(function (event) {
            event.stopImmediatePropagation();
            var password = __WEBPACK_IMPORTED_MODULE_3_jquery__("#userPassword").value;
            self.showPasswordStrength(password);
        });
    };
    UserPersonalDetailsComponent.prototype.showPasswordStrength = function (password) {
        if (this.passwordSvc.PasswordStrengthLevel(password) == 0) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#ddd");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "0%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 1) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#ff704d");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "10%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 2) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#ffcc66");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "30%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 3) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#ffcc66");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "50%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 4) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#80bfff");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "70%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) >= 5) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("background-color", "#5cd65c");
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#passwordStrengthBar').css("width", "100%");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserPersonalDetailsComponent.prototype, "user", void 0);
    UserPersonalDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-personal-details",
            template: __webpack_require__("../../../../../src/app/account/components/user-personal-details/user-personal-details.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_index__["f" /* PasswordService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_account_account_service__["a" /* AccountService */]])
    ], UserPersonalDetailsComponent);
    return UserPersonalDetailsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/account/components/user-registration/user-registration.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"signup-form\" class='container-fluid'>\r\n    <div class=\"main-content \">\r\n        <div style=\"margin:20px;\">\r\n            <h1 style=\"padding:5px;\">\r\n                Register\r\n            </h1>\r\n            <form  #signUpForm=\"ngForm\" novalidate class=\"form-horizontal\">\r\n\r\n                <!--<user-personal-details [(user)]=\"user\"></user-personal-details>-->\r\n\r\n                <!--<user-business-details [(user)]=\"user\"></user-business-details>-->\r\n\r\n\r\n                <div class=\"section form\">\r\n\r\n                    <fieldset id=\"personal-details\">\r\n\r\n                        <h4>Personal Details</h4>\r\n                        <div class=\"col col-md-6 col-sm-12\">\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">First Name</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #firstName=\"ngModel\" required name=\"firstName\" [(ngModel)]=\"user.firstName\">\r\n                                <div *ngIf=\"firstName.invalid && firstName.touched\" class=\"alert alert-danger\">\r\n                                    First Name is required.\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Middle Name</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #middleName name=\"middleName\" [(ngModel)]=\"user.middleName\">\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Last Name</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #lastName=\"ngModel\" required name=\"lastName\" [(ngModel)]=\"user.lastName\">\r\n                                <div *ngIf=\"lastName.invalid && lastName.touched\" class=\"alert alert-danger\">\r\n                                    Last Name is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col col-md-6 col-sm-12\">\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\" [class.has-error]=\"email.invalid && email.touched\">\r\n                                <label class=\"control-label\">Email</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #email=\"ngModel\" required name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Enter your business email account\" \r\n                                       title=\"Users registering without business email (Gmail, hotmail, ect.) will not be approved or may take additional time to verify and approve access to Daikin City.\">\r\n                                <div *ngIf=\"email.invalid && email.touched\" class=\"alert alert-danger\">\r\n                                    Email is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Mobile Phone Number</label>\r\n                                <input type=\"text\" class=\"form-control\" #mobileNumber name=\"mobileNumber\" [(ngModel)]=\"user.contact.mobileNumber\">\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Password</label>\r\n                                <input type=\"password\" id=\"userPassword\" class=\"form-control input-sm\" #password=\"ngModel\" required name=\"password\" [(ngModel)]=\"user.password\">\r\n\r\n                                <div style=\"width:70%\">\r\n                                    <div id=\"passwordStrengthBkg\">\r\n                                        <div id=\"passwordStrengthBar\"></div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div *ngIf=\"password.invalid && password.touched\" class=\"alert alert-danger\">\r\n                                    Password is required.\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Confirm Password</label>\r\n                                <input type=\"password\" class=\"form-control input-sm\" #confirmPassword=\"ngModel\" required name=\"confirmPassword\" [(ngModel)]=\"user.confirmPassword\">\r\n                                <div *ngIf=\"confirmPassword.invalid && confirmPassword.touched\" class=\"alert alert-danger\">\r\n                                    Confirm Password is required.\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                       \r\n                    </fieldset>\r\n                </div>\r\n\r\n\r\n                <div class=\"section form\">\r\n                    <fieldset id=\"business-details\">\r\n\r\n                        <div class=\"col col-md-6 col-sm-12\">\r\n                            <h4>Business Details</h4>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <p>Business Type</p>\r\n                                <!--<input type=\"text\" class=\"form-control\" #businessTypeId required name=\"businessTypeId\" [(ngModel)]=\"user.business.businessTypeId\">-->\r\n                                <kendo-dropdownlist [data]=\"user.business.businessTypes.items\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    name=\"businessType\" #businessTypeId=\"ngModel\" required [(ngModel)]=\"user.business.businessTypeId\" (ngModelChange)=\"user.business.businessTypeId=$event.value\" (valueChange)=\"BusinessTypeChange($event)\"\r\n                                                    [disabled]=\"businessTypeDLLDisabled\">\r\n                                </kendo-dropdownlist>\r\n                                <div *ngIf=\"businessTypeId.invalid && businessTypeId.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                                    Business Type is required.\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [hidden]=\"!showDakinAccRadioBtn\" class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Do you have a Daikin account?</label>\r\n                                <div class=\"radio\">\r\n                                    <label><input type=\"radio\" name=\"daikinAccRadioBtn\" value=\"true\" [(ngModel)]=\"hasDaikinAccount\" (ngModelChange)=\"HasDaikinAccountChange($event)\">Yes</label>\r\n                                    <label><input type=\"radio\" name=\"daikinAccRadioBtn\" value=\"false\" [(ngModel)]=\"hasDaikinAccount\" (ngModelChange)=\"HasDaikinAccountChange($event)\">No</label>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div [hidden]=\"!showAccountIdSearch\" class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Account ID</label>\r\n                                <div>\r\n                                    <input type=\"text\" id=\"businessSearchBox\" class=\"form-control k-input k-textbox\" #accountId name=\"accountId\" [(ngModel)]=\"user.accountId\" (ngModelChange)=\"lookupBusiness($event)\">\r\n                                    <button id=\"businessSearchBtn\" class=\"searchBtn\"><span class=\"k-icon k-i-search\"></span></button>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-8\" style=\"font-size:smaller;font-weight:100;color: grey;\">\r\n                                        <i>Account-ID is a unique Daikin City ID for your company. In general Account-ID is 7 - 8 digit long and starts with ‘DC’ (DC123456) or ‘A’ (A123456). Please contact your company admin or business sales manager for Account-ID</i>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"hasDaikinAccount === 'false'\" class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Business Name</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #businessName=\"ngModel\" required name=\"businessName\" [(ngModel)]=\"user.business.businessName\">\r\n                                <div *ngIf=\"businessName.invalid && businessName.touched\" class=\"alert alert-danger\">\r\n                                    Business Name is required.\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div *ngIf=\"(user.business.businessTypeId == enums.BusinessTypeEnum.Dealer || user.business.businessTypeId == enums.BusinessTypeEnum.EngineerArchitect) && hasDaikinAccount === 'false'\" class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <p>Distributor/Manufacturer Rep Name</p>\r\n\r\n                                <kendo-combobox #DistRepsCombo\r\n                                                required\r\n                                                #parentBusiness=\"ngModel\"\r\n                                                name=\"parentBusinessId\"\r\n                                                [data]=\"distributorsAndRepsList\"\r\n                                                [textField]=\"'businessName'\" [valueField]=\"'businessId'\"\r\n                                                [(ngModel)]=\"user.business.parentBusinessId\"\r\n                                                (ngModelChange)=\"user.business.parentBusinessId=$event.businessId\"\r\n                                                [filterable]=\"true\"\r\n                                                (filterChange)=\"distributorsAndRepsFilter($event)\"\r\n                                                (valueChange)=\"distRepsComboChange($event)\"\r\n                                                [placeholder]=\"'Enter at least 2 characters'\"\r\n                                                style=\"width:100%\"\r\n                                                title=\"Enter at least 2 characters\">\r\n                                </kendo-combobox>\r\n                                <div *ngIf=\"parentBusiness.invalid && parentBusiness.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                                    Distributor/Manufacturer Rep name is required.\r\n                                </div>\r\n                                <!--<p>ParentBusiness valid:{{parentBusiness.valid}}</p>\r\n                <p>ParentBusiness :{{parentBusiness.value}}</p>-->\r\n\r\n                            </div>\r\n\r\n\r\n                            <div *ngIf=\"foundBusiness && searchBtnClicked\" class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Business Address</label>\r\n                                <div>\r\n                                    {{business.address.addressLine1}}\r\n                                </div>\r\n                                <div>\r\n                                    {{business.address.addressLine2}}\r\n                                </div>\r\n                                <div>\r\n                                    {{business.address.location}}, {{business.address.stateName}}, {{business.address.postalCode}}\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"col col-md-6 col-sm-12\">\r\n                            <h4 id=\"businessAddressLabel\">Business Address</h4>\r\n                            <div class=\"checkbox\" *ngIf=\"showAccountIdSearch && foundBusiness && searchBtnClicked\">\r\n                                <!--<label><input type=\"checkbox\" [(ngModel)]=\"useBusinessAddress\" (change)=\"UseBusinessAddress()\">Use Business Address</label>-->\r\n                                <label><input type=\"checkbox\" (change)=\"UseBusinessAddressToggle($event)\">Use Business Address</label>\r\n                            </div>\r\n\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <p>Country</p>\r\n                                <!--<input type=\"text\" class=\"form-control\" #country required name=\"Country\" [(ngModel)]=\"user.address.countryCode\">-->\r\n                                <kendo-dropdownlist [data]=\"user.address.countries.items\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    name=\"country\" #countryCode=\"ngModel\" required [(ngModel)]=\"user.address.countryCode\" (ngModelChange)=\"user.address.countryCode=$event.value\" [disabled]=\"useBusinessAddress\">\r\n                                </kendo-dropdownlist>\r\n                                <div *ngIf=\"countryCode.invalid && countryCode.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                                    Country is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Address Line 1</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #addressLine1=\"ngModel\" required name=\"addressLine1\" [(ngModel)]=\"user.address.addressLine1\" [disabled]=\"useBusinessAddress\">\r\n                                <div *ngIf=\"addressLine1.invalid && addressLine1.touched\" class=\"alert alert-danger\">\r\n                                    Address Line1 is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Address Line 2</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #addressLine2 name=\"addressLine2\" [(ngModel)]=\"user.address.addressLine2\" [disabled]=\"useBusinessAddress\">\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">City</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #location=\"ngModel\" required name=\"location\" [(ngModel)]=\"user.address.location\" [disabled]=\"useBusinessAddress\">\r\n                                <div *ngIf=\"location.invalid && location.touched\" class=\"alert alert-danger\">\r\n                                    City is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-6 col-sm-12 form-group required\">\r\n                                <p>State/Province</p>\r\n                                <!--<input type=\"number\" class=\"form-control\" #stateId required name=\"stateId\" [(ngModel)]=\"user.address.stateId\">-->\r\n                                <kendo-dropdownlist [data]=\"user.address.states.items\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    name=\"state\" #stateId=\"ngModel\" required [(ngModel)]=\"user.address.stateId\" (ngModelChange)=\"user.address.stateId=$event.value\" [disabled]=\"useBusinessAddress\">\r\n                                </kendo-dropdownlist>\r\n                                <div *ngIf=\"stateId.invalid && stateId.touched\" class=\"alert alert-danger\" style=\"width:170px\">\r\n                                    State is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-6 col-sm-12 form-group required\">\r\n                                <label class=\"control-label\">Zip Code</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #postalCode=\"ngModel\" required name=\"postalCode\" [(ngModel)]=\"user.address.postalCode\" [disabled]=\"useBusinessAddress\">\r\n                                <div *ngIf=\"postalCode.invalid && postalCode.touched\" class=\"alert alert-danger\">\r\n                                    Zip Code is required.\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Office Phone Number</label>\r\n                                <input type=\"text\" class=\"form-control\" #officeNumber name=\"officeNumber\" [(ngModel)]=\"user.contact.officeNumber\" [disabled]=\"useBusinessAddress\">\r\n                                <!--<kendo-maskedtextbox [mask]=\"phoneNumberMask\" name=\"officeNumber\" [(ngModel)]=\"user.contact.officeNumber\"></kendo-maskedtextbox>-->\r\n                            </div>\r\n                            <div class=\"col col-md-12 col-sm-12 form-group\">\r\n                                <label class=\"control-label\">Web Address</label>\r\n                                <input type=\"text\" class=\"form-control input-sm\" #webAddress name=\"webAddress\" [(ngModel)]=\"user.contact.webAddress\" [disabled]=\"useBusinessAddress\">\r\n                            </div>\r\n                        </div>\r\n\r\n                    </fieldset>\r\n                </div>\r\n\r\n\r\n\r\n\r\n                <div class=\"section action text-center\">\r\n                    <div style=\"padding:10px;\">\r\n                        <button class=\"btn btn-default\" style=\"width:70px;\" (click)=\"backToLogin()\">Cancel</button>\r\n                        <button class=\"btn btn-primary\" style=\"width:70px;\" (click)=\"register()\" type=\"submit\" [disabled]=\"signUpForm.invalid\">Register</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--<h3>Form valid: {{signUpForm.valid}}</h3>-->\r\n                 \r\n                <!--<h3>Form invalid: {{signUpForm.form.invalid}}</h3>\r\n                <h3>Form status: {{signUpForm.form.status}}</h3>-->\r\n\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/account/components/user-registration/user-registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_account_account_service__ = __webpack_require__("../../../../../src/app/shared/services/account/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_business_service__ = __webpack_require__("../../../../../src/app/account/services/business.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
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







var UserRegistrationComponent = /** @class */ (function () {
    function UserRegistrationComponent(router, route, accountSvc, businessSvc, passwordSvc, enums, toastrSvc) {
        this.router = router;
        this.route = route;
        this.accountSvc = accountSvc;
        this.businessSvc = businessSvc;
        this.passwordSvc = passwordSvc;
        this.enums = enums;
        this.toastrSvc = toastrSvc;
        this.businessTypeDLLDisabled = false;
        this.foundBusiness = false;
        this.searchBtnClicked = false;
        this.showAccountIdSearch = false;
        this.showDakinAccRadioBtn = false;
        this.useBusinessAddress = false;
        this.hasDaikinAccount = false;
        this.defaultItem = { text: "Select...", value: null };
        this.phoneNumberMask = "(000) 000-0000";
        this.user = this.route.snapshot.data['user'].model;
        //this.accountSvc.getUserRegistrationModel().then((resp: any) => {
        //    //self.loadingIconSvc.Stop(jQuery("#productPageContainer"));
        //    toastrSvc.displayResponseMessages(resp);
        //    if (resp.isok) {
        //        this.user = resp.model;
        //        //window.location.href = resp.model;
        //        //self.userSvc.userIsAuthenticated = true;
        //        //this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        //        //self.userAuthenticationEvt.emit({});
        //    }
        //});
    }
    UserRegistrationComponent.prototype.ngOnInit = function () {
        //this.pageTitle = this.route.snapshot.data['pageTitle'];
        this.user.business.parentBusinessId = null;
        this.getDistributorsAndReps();
        this.setupPasswordStrengthIndicator();
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
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#userPassword").keyup(function (event) {
            event.stopImmediatePropagation();
            var password = __WEBPACK_IMPORTED_MODULE_6_jquery__("#userPassword").value;
            self.showPasswordStrength(password);
        });
    };
    UserRegistrationComponent.prototype.showPasswordStrength = function (password) {
        if (this.passwordSvc.PasswordStrengthLevel(password) == 0) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#ddd");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "0%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 1) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#ff704d");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "10%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 2) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#ffcc66");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "30%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 3) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#ffcc66");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "50%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) == 4) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#80bfff");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "70%");
        }
        else if (this.passwordSvc.PasswordStrengthLevel(password) >= 5) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("background-color", "#5cd65c");
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#passwordStrengthBar').css("width", "100%");
        }
    };
    UserRegistrationComponent.prototype.setupSearchBusiness = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#businessSearchBox").keyup(function (event) {
            event.stopImmediatePropagation();
            var value = __WEBPACK_IMPORTED_MODULE_6_jquery__("#businessSearchBox").value;
            if (value) {
                self.businessTypeDLLDisabled = true;
            }
            else {
                self.businessTypeDLLDisabled = false;
                self.useBusinessAddress = false;
            }
            if (event.keyCode == 13) {
                __WEBPACK_IMPORTED_MODULE_6_jquery__("#businessSearchBtn").click();
            }
        });
        __WEBPACK_IMPORTED_MODULE_6_jquery__("#businessSearchBtn").click(function (event) {
            self.searchBtnClicked = true;
            event.stopImmediatePropagation();
            var value = __WEBPACK_IMPORTED_MODULE_6_jquery__("#businessSearchBox").value;
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
            self.foundBusiness = false;
            self.user.existingBusiness = self.enums.ExistingBusinessEnum.New;
            self.useBusinessAddress = false;
        }
    };
    UserRegistrationComponent.prototype.businessAddressLookupCallback = function (resp) {
        if (resp != undefined && resp.isok) {
            if (resp.model.accountId != null || resp.model.daikinCityId != null) {
                this.applyAccountId(resp);
                //this.business = resp.model;
                //this.user.business.businessId = resp.model.businessId;
                //this.user.business.businessName = resp.model.businessName;
                //this.user.business.accountId = resp.model.accountId;
                //this.user.business.daikinCityId = resp.model.daikinCityId;
                ////this.user.business = resp.model;
                //this.foundBusiness = true;
                //this.user.existingBusiness = this.enums.ExistingBusinessEnum.Existing;
                //if (this.useBusinessAddress) {
                //    this.UseBusinessAddress();
                //}
            }
            else {
                this.toastrSvc.Warning("Business not found!");
                this.foundBusiness = false;
                this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
                this.useBusinessAddress = false;
            }
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
        if (selectedItem.value == this.enums.BusinessTypeEnum.Daikin
            || selectedItem.value == this.enums.BusinessTypeEnum.Distributor
            || selectedItem.value == this.enums.BusinessTypeEnum.ManufacturerRep) {
            this.showAccountIdSearch = true;
            this.showDakinAccRadioBtn = false;
            this.hasDaikinAccount = true;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#businessAddressLabel').text("USER ADDRESS DETAILS");
        }
        else {
            this.showAccountIdSearch = false;
            this.foundBusiness = false;
            this.showDakinAccRadioBtn = true;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
    };
    UserRegistrationComponent.prototype.HasDaikinAccountChange = function (event) {
        if (event == "true") {
            this.showAccountIdSearch = true;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#businessAddressLabel').text("USER ADDRESS DETAILS");
            this.user.existingBusiness = this.enums.ExistingBusinessEnum.Existing;
        }
        else {
            this.user.existingBusiness = this.enums.ExistingBusinessEnum.New;
            this.showAccountIdSearch = false;
            this.foundBusiness = false;
            this.useBusinessAddress = false;
            this.user.useBusinessAddress = false;
            this.businessTypeDLLDisabled = false;
            this.user.accountId = null;
            this.user.business.accountId = null;
            __WEBPACK_IMPORTED_MODULE_6_jquery__('#businessAddressLabel').text("BUSINESS ADDRESS");
        }
    };
    UserRegistrationComponent.prototype.backToLogin = function () {
        window.location.href = "/v2/#/login";
    };
    UserRegistrationComponent.prototype.register = function () {
        var self = this;
        if (this.user.password != this.user.confirmPassword) {
            this.toastrSvc.ErrorFadeOut("Password and confirm password do not match!");
        }
        else if (this.accountIdValid()) {
            //self.loadingIconSvc.Start(jQuery("#content"));
            //this.blockUI.start('Loading...');
            this.accountSvc.userRegistration(this.user).then(function (resp) {
                if (resp != undefined && resp.IsOK) {
                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    //this.blockUI.stop();
                    window.location.href = '/v2/#/login/registrationAcknowledgement';
                }
                else {
                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    //this.blockUI.stop();
                    //self.toastrSvc.displayResponseMessages(resp);
                    if (resp != null && resp.Messages != null) {
                        for (var _i = 0, _a = resp.Messages.Items; _i < _a.length; _i++) {
                            var message = _a[_i];
                            if (message.Type == 40) {
                                self.toastrSvc.Success(message.Text);
                            }
                            else if (message.Type == 10) {
                                self.toastrSvc.ErrorFadeOut(message.Text);
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
                this.toastrSvc.ErrorFadeOut("Account Id is required.");
                return false;
            }
            else if (!this.foundBusiness) {
                this.toastrSvc.ErrorFadeOut("Account Id is not found.");
                return false;
            }
            else if (this.foundBusiness) {
                return true;
            }
        }
        else {
            if (this.hasDaikinAccount == "false") {
                return true;
            }
            if (this.hasDaikinAccount == "true" && !this.foundBusiness) {
                this.toastrSvc.ErrorFadeOut("Account Id is required.");
                return false;
            }
            else if (this.foundBusiness) {
                return true;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('DistRepsCombo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dropdowns__["b" /* ComboBoxComponent */])
    ], UserRegistrationComponent.prototype, "distRepsCombo", void 0);
    UserRegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-registration",
            template: __webpack_require__("../../../../../src/app/account/components/user-registration/user-registration.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_account_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__services_business_service__["a" /* BusinessService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["f" /* PasswordService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* Enums */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */]])
    ], UserRegistrationComponent);
    return UserRegistrationComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/account/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__ = __webpack_require__("../../../../../src/app/account/components/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__components_login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_registration_acknowledgement_registration_acknowledgement_component__ = __webpack_require__("../../../../../src/app/account/components/registration-acknowledgement/registration-acknowledgement.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__components_registration_acknowledgement_registration_acknowledgement_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_user_business_details_user_business_details_component__ = __webpack_require__("../../../../../src/app/account/components/user-business-details/user-business-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__components_user_business_details_user_business_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_user_personal_details_user_personal_details_component__ = __webpack_require__("../../../../../src/app/account/components/user-personal-details/user-personal-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__components_user_personal_details_user_personal_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_user_registration_user_registration_component__ = __webpack_require__("../../../../../src/app/account/components/user-registration/user-registration.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_4__components_user_registration_user_registration_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_business_service__ = __webpack_require__("../../../../../src/app/account/services/business.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__services_business_service__["a"]; });





//export * from './services/account.service';

//export * from './services/user-resolver.service';


/***/ }),

/***/ "../../../../../src/app/account/services/business.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BusinessService = /** @class */ (function () {
    function BusinessService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    BusinessService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    BusinessService.prototype.extractHtml = function (res) {
        return res._body;
    };
    BusinessService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    //public businessAddressLookup(accountId: any) {
    //    return this.http.get("/api/AccountApi/BusinessAddressLookup?accountId=" + accountId, { headers: this.headers }).toPromise()
    //        .then(this.extractData)
    //        .catch(this.handleError);
    //}
    BusinessService.prototype.getDistributorsAndReps = function (businessName) {
        //return this.http.get("/api/Business/GetBusinessList", { headers: this.headers }).toPromise()
        //    .then(this.extractData)
        //    .catch(this.handleError);
        return this.http.get("/api/AccountApi/GetDistributorsAndReps?businessName=" + businessName, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    BusinessService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], BusinessService);
    return BusinessService;
}());



/***/ })

});
//# sourceMappingURL=account.module.chunk.js.map