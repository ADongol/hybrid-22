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
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../../account/services/account.service");
var quote_service_1 = require("../services/quote.service");
var OptionItemsComponent = /** @class */ (function () {
    function OptionItemsComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.enums = enums;
    }
    OptionItemsComponent.prototype.ngOnInit = function () {
        this.loadOptionItems();
    };
    OptionItemsComponent.prototype.loadOptionItems = function () {
        var self = this;
        this.quoteSvc.getOptionItems(this.configuredItem.quoteItemId).then(function (resp) {
            if (resp.isok) {
                self.optionItems = resp.model;
            }
            else {
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OptionItemsComponent.prototype, "configuredItem", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], OptionItemsComponent.prototype, "unitQuantity", void 0);
    OptionItemsComponent = __decorate([
        core_1.Component({
            selector: "option-items",
            templateUrl: "./option-items.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService, quote_service_1.QuoteService,
            enums_1.Enums])
    ], OptionItemsComponent);
    return OptionItemsComponent;
}());
exports.OptionItemsComponent = OptionItemsComponent;
//# sourceMappingURL=option-items.component.js.map