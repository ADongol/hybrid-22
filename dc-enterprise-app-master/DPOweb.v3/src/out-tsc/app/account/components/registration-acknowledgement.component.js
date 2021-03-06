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
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../services/account.service");
var RegistrationAcknowledgementComponent = /** @class */ (function () {
    function RegistrationAcknowledgementComponent(router, route, toastrSvc, userSvc, accountSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.enums = enums;
    }
    RegistrationAcknowledgementComponent = __decorate([
        core_1.Component({
            selector: "registration-acknowledgement",
            templateUrl: "./registration-acknowledgement.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService,
            enums_1.Enums])
    ], RegistrationAcknowledgementComponent);
    return RegistrationAcknowledgementComponent;
}());
exports.RegistrationAcknowledgementComponent = RegistrationAcknowledgementComponent;
//# sourceMappingURL=registration-acknowledgement.component.js.map