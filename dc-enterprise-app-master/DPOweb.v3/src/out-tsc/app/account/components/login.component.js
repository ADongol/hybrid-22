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
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
var toastr_service_1 = require("../../shared/services/toastr.service");
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
//import { BlockUI, NgBlockUI } from 'ng-block-ui';
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../services/account.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, route, toastrSvc, userSvc, accountSvc, enums) {
        //this.accountSvc.getUserLoginModel().then(this.getUserLoginModelCallback.bind(this));
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.enums = enums;
        this.loginJumpDefault = { text: "Home", value: "/v3/#/home" };
        var self = this;
        this.accountSvc.getUserLoginModel()
            .subscribe(function (data) {
            self.user = data.model;
            self.user.selectedLink = "/v3/#/home";
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
            self.toastrSvc.displayUserRegistrationResponseMessages(resp);
            if (resp.isok) {
                //window.location.href = resp.model;
                window.location.href = _this.user.selectedLink;
                self.userSvc.userIsAuthenticated = true;
                _this.userSvc.getCurrentUser().then(_this.getCurrentUserCallback.bind(_this));
                //self.userAuthenticationEvt.emit({});
            }
        });
    };
    LoginComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp.isok) {
            this.userSvc.currentUser = resp.model;
            for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) { // success
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
        core_1.Component({
            selector: "login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService,
            enums_1.Enums])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
;
//# sourceMappingURL=login.component.js.map