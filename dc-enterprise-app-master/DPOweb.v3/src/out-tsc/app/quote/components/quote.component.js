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
var product_service_1 = require("../../product/services/product.service");
var QuoteComponent = /** @class */ (function () {
    function QuoteComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, productSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.productSvc = productSvc;
        this.enums = enums;
        this.recordState = false;
        this.quote = this.route.snapshot.data['quoteModel'].model;
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    QuoteComponent.prototype.ngOnInit = function () {
        var path = this.route.snapshot.url[0].path;
        this.quoteId = this.route.snapshot.paramMap.get('id');
        this.recordState = this.route.snapshot.paramMap.get('recordState');
        this.setActiveTab(path);
    };
    QuoteComponent.prototype.setActiveTab = function (path) {
        if (path == 'quote') {
            this.overViewActive = true;
            this.quoteItemsActive = false;
            this.quoteDiscountRequestsActive = false;
            this.quoteCommissionRequestsActive = false;
            this.quoteOrderActive = false;
            this.getQuoteItems(this.quote.quoteId);
        }
        else if (path == 'quoteItems') {
            this.overViewActive = false;
            this.quoteItemsActive = true;
            this.quoteDiscountRequestsActive = false;
            this.quoteCommissionRequestsActive = false;
            this.quoteOrderActive = false;
            if (this.route.snapshot.data['quoteItems'] == undefined) {
                this.getQuoteItems(this.quote.quoteId);
            }
            else {
                this.quoteItems = this.route.snapshot.data['quoteItems'].model;
            }
        }
    };
    QuoteComponent.prototype.showQuoteOverview = function () {
        jQuery('#k-tabstrip-tab-0').click();
    };
    QuoteComponent.prototype.showQuoteItems = function () {
        jQuery('#k-tabstrip-tab-1').click();
    };
    QuoteComponent.prototype.getQuoteItems = function (quoteId) {
        var self = this;
        console.log("get QuoteItems");
        self.quoteSvc.getQuoteItemsModel(this.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                self.quoteItems = resp.model;
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    QuoteComponent.prototype.browseProductsWithQuoteId = function () {
        this.productSvc.browseProductsWithQuoteId(this.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                //self.quoteItems = resp.model;
                window.location.href = "/v3/#/product";
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    QuoteComponent.prototype.reloadData = function () {
        this.reloadQuote();
        this.reloadQuoteItems();
    };
    QuoteComponent.prototype.reloadQuote = function () {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        self.quoteSvc.getQuote(self.quote.projectId, self.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                self.quote = resp.model;
                //self.gridIsModified = false;
                //jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    QuoteComponent.prototype.reloadQuoteItems = function () {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#content"));
        //this.blockUI.start('Loading...');
        self.quoteSvc.getQuoteItemsModel(self.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                // self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
                self.quoteItems = resp.model;
                //self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], QuoteComponent.prototype, "blockUI", void 0);
    QuoteComponent = __decorate([
        core_1.Component({
            selector: "quote",
            templateUrl: "./quote.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService, quote_service_1.QuoteService,
            product_service_1.ProductService, enums_1.Enums])
    ], QuoteComponent);
    return QuoteComponent;
}());
exports.QuoteComponent = QuoteComponent;
;
//# sourceMappingURL=quote.component.js.map