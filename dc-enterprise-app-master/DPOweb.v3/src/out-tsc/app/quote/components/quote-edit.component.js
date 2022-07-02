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
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var project_service_1 = require("../../project/services/project.service");
var quote_service_1 = require("../services/quote.service");
var QuoteEditComponent = /** @class */ (function () {
    function QuoteEditComponent(router, route, toastrSvc, userSvc, http, projectSvc, quoteSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.http = http;
        this.projectSvc = projectSvc;
        this.quoteSvc = quoteSvc;
        this.enums = enums;
        this.defaultItem = { text: "Select ...", value: null };
        this.action = this.route.snapshot.url[0].path;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quote = this.route.snapshot.data['quoteModel'].model;
    }
    QuoteEditComponent.prototype.ngOnInit = function () {
        this.canRequestCommission = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.RequestCommission);
    };
    QuoteEditComponent.prototype.cancel = function () {
        if (this.action == "quoteCreate") {
            this.router.navigateByUrl("/project/" + this.quote.projectId);
        }
        else if (this.action == "quoteEdit") {
            this.router.navigateByUrl("/quote/" + this.quote.quoteId + "/existingRecord");
        }
    };
    QuoteEditComponent.prototype.submit = function () {
        var _this = this;
        // this.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');
        this.quoteSvc.postQuote(this.quote)
            .subscribe(function (resp) {
            //debugger
            if (resp.isok) {
                //this.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                _this.quote = resp.model;
                if (_this.action == "quoteCreate") {
                    _this.router.navigateByUrl("/quote/" + _this.quote.quoteId + "/newRecord");
                }
                else {
                    _this.router.navigateByUrl("/quote/" + _this.quote.quoteId + "/existingRecord");
                }
            }
            else {
                _this.blockUI.stop();
                // this.loadingIconSvc.Stop(jQuery("#content"));
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) {
            _this.blockUI.stop();
            //this.loadingIconSvc.Start(jQuery("#content"));
            console.log("Error: ", err);
        });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], QuoteEditComponent.prototype, "blockUI", void 0);
    QuoteEditComponent = __decorate([
        core_1.Component({
            selector: 'quote-edit',
            templateUrl: './quote-edit.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, toastr_service_1.ToastrService,
            user_service_1.UserService, http_1.Http, project_service_1.ProjectService,
            quote_service_1.QuoteService, enums_1.Enums])
    ], QuoteEditComponent);
    return QuoteEditComponent;
}());
exports.QuoteEditComponent = QuoteEditComponent;
;
//# sourceMappingURL=quote-edit.component.js.map