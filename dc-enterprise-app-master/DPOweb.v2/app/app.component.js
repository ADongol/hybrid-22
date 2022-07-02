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
//import { ROUTER_DIRECTIVES } from '@angular/router';
var toastr_service_1 = require("./shared/services/toastr.service");
//import { LoadingIconService } from './shared/services/loadingIcon.service';
var user_service_1 = require("./shared/services/user.service");
var systemAccessEnum_1 = require("./shared/services/systemAccessEnum");
var password_service_1 = require("./shared/services/password.service");
//import { ProductFamilyEnum } from './shared/enums/productFamilyEnum';
var enums_1 = require("./shared/enums/enums");
var account_service_1 = require("./account/services/account.service");
var business_service_1 = require("./business/services/business.service");
var user_resolver_service_1 = require("./account/services/user-resolver.service");
var project_service_1 = require("./projects/services/project.service");
//import { ProductService } from './products/services/product.service';
//import { ProductFamilyService } from './products/services/productFamily.service';
var product_service_1 = require("./products/services/product.service");
var basket_service_1 = require("./basket/services/basket.service");
var systemConfigurator_service_1 = require("./tools/systemConfigurator/services/systemConfigurator.service");
var splitSystemConfigurator_service_1 = require("./tools/splitSystemConfigurator/services/splitSystemConfigurator.service");
var tools_service_1 = require("./tools/tools.service");
var webconfig_service_1 = require("./shared/services/webconfig.service");
var order_service_1 = require("./order/services/order.service");
//import { provideRouter, RouterConfig } from '@angular/router';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, toastrSvc, userSvc, systemAccessEnum, productSvc, systemConfiguratorSvc, SplitSystemConfiguratorSvc, webconfigSvc, passwordSvc) {
        var _this = this;
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.productSvc = productSvc;
        this.systemConfiguratorSvc = systemConfiguratorSvc;
        this.SplitSystemConfiguratorSvc = SplitSystemConfiguratorSvc;
        this.webconfigSvc = webconfigSvc;
        this.passwordSvc = passwordSvc;
        this.pageTitle = 'Daikin Project Office';
        this.isAuthenticated = false;
        this.loading = true;
        router.events.subscribe(function (event) {
            _this.navigationInterceptor(event);
        });
    }
    AppComponent.prototype.ngOnChanges = function () { };
    AppComponent.prototype.ngOnInit = function () {
        //var hash = window.location.hash;
        //this.userSvc.isAuthenticated().then(this.isAuthenticatedCallBack.bind(this));
        this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
        //Website testing message
        var self = this;
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            if (self.webconfig.testMode.isTesting.toLowerCase() == 'true') {
                $("#testModeModal").modal();
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
        if (resp != null && resp != undefined) {
            if (resp.isok) {
                this.isAuthenticated = true;
                this.userSvc.userIsAuthenticated = true;
                this.currentUser = resp.model;
                this.userSvc.currentUser = resp.model;
                //this.setupActiveTab();
                for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                    var message = _a[_i];
                    if (message.type == 40) { // success
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
        }
        else {
            this.isAuthenticated = false;
            this.userSvc.userIsAuthenticated = false;
        }
    };
    AppComponent.prototype.navigationInterceptor = function (event) {
        if (event instanceof router_1.NavigationStart) {
            this.loading = true;
            //this.loadingIconSvc.Start(jQuery("#content"));
            this.blockUI.start('Loading...');
        }
        if (event instanceof router_1.NavigationEnd) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();
        }
        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof router_1.NavigationCancel) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();
        }
        if (event instanceof router_1.NavigationError) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();
        }
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", typeof (_a = typeof ng_block_ui_1.NgBlockUI !== "undefined" && ng_block_ui_1.NgBlockUI) === "function" && _a || Object)
    ], AppComponent.prototype, "blockUI", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            //directives: [ROUTER_DIRECTIVES, HeaderButtonsComponent, ProjectsComponent],
            providers: [
                toastr_service_1.ToastrService,
                //LoadingIconService,
                user_service_1.UserService,
                password_service_1.PasswordService,
                systemAccessEnum_1.SystemAccessEnum,
                enums_1.Enums,
                account_service_1.AccountService,
                business_service_1.BusinessService,
                user_resolver_service_1.UserResolver,
                project_service_1.ProjectService,
                product_service_1.ProductService,
                order_service_1.OrderService,
                systemConfigurator_service_1.SystemConfiguratorService,
                splitSystemConfigurator_service_1.SplitSystemConfiguratorService,
                tools_service_1.ToolsService,
                basket_service_1.BasketService,
                webconfig_service_1.WebConfigService
            ]
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, toastr_service_1.ToastrService,
            user_service_1.UserService,
            systemAccessEnum_1.SystemAccessEnum, product_service_1.ProductService,
            systemConfigurator_service_1.SystemConfiguratorService,
            splitSystemConfigurator_service_1.SplitSystemConfiguratorService,
            webconfig_service_1.WebConfigService, password_service_1.PasswordService])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
exports.AppComponent = AppComponent;
;
//# sourceMappingURL=app.component.js.map