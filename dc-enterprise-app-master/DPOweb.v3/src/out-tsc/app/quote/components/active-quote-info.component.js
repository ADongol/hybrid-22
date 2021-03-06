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
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../../account/services/account.service");
var quote_service_1 = require("../services/quote.service");
var ActiveQuoteInfoComponent = /** @class */ (function () {
    function ActiveQuoteInfoComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, enums) {
        //this.accountSvc.getUserLoginModel().then(this.getUserLoginModelCallback.bind(this));
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.enums = enums;
        this.showQuoteOverViewEvent = new core_1.EventEmitter();
        this.reloadDataEvent = new core_1.EventEmitter();
        //this.accountSvc.getUserLoginModel()
        //    .subscribe(
        //    data => {
        //        this.user = data.model
        //    },
        //    err => console.log("Error: ", err)
        //    );
        //this.quote = this.route.snapshot.data['quoteModel'].model;
        //this.user = this.route.snapshot.data['currentUser'].model;
    }
    ActiveQuoteInfoComponent.prototype.ngOnInit = function () { };
    ActiveQuoteInfoComponent.prototype.showQuoteOverview = function () {
        this.showQuoteOverViewEvent.emit();
    };
    ActiveQuoteInfoComponent.prototype.quoteRecalculate = function () {
        var _this = this;
        var self = this;
        var data = {
            "ProjectId": this.quote.projectId,
            "QuoteId": this.quote.quoteId,
            "RecalculationRequired": this.quote.recalculationRequired,
        };
        //self.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');
        this.quoteSvc.quoteRecalculate(data)
            .then(function (resp) {
            if (resp.isok) {
                //reload page
                self.toastrSvc.displayResponseMessages(resp);
                self.quote.recalculationRequired = resp.model.recalculationRequired;
                //self.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                self.reloadDataEvent.emit();
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
            }
        }).catch(function (error) {
            //self.loadingIconSvc.Stop(jQuery("#content"));
            //console.log('Retrieval error: ${error}');
            _this.blockUI.stop();
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActiveQuoteInfoComponent.prototype, "quote", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActiveQuoteInfoComponent.prototype, "user", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ActiveQuoteInfoComponent.prototype, "showQuoteOverViewEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ActiveQuoteInfoComponent.prototype, "reloadDataEvent", void 0);
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], ActiveQuoteInfoComponent.prototype, "blockUI", void 0);
    ActiveQuoteInfoComponent = __decorate([
        core_1.Component({
            selector: "active-quote-info",
            templateUrl: "./active-quote-info.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService, quote_service_1.QuoteService,
            enums_1.Enums])
    ], ActiveQuoteInfoComponent);
    return ActiveQuoteInfoComponent;
}());
exports.ActiveQuoteInfoComponent = ActiveQuoteInfoComponent;
;
//# sourceMappingURL=active-quote-info.component.js.map