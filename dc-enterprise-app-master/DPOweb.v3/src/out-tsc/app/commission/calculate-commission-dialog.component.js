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
var toastr_service_1 = require("../shared/services/toastr.service");
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
var ng_block_ui_1 = require("ng-block-ui");
var user_service_1 = require("../shared/services/user.service");
var enums_1 = require("../shared/enums/enums");
var account_service_1 = require("../account/services/account.service");
var quote_service_1 = require("../quote/services/quote.service");
var commissionRequest_service_1 = require("./services/commissionRequest.service");
var CalculateCommissionDialogComponent = /** @class */ (function () {
    function CalculateCommissionDialogComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, commissionRequestSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.commissionRequestSvc = commissionRequestSvc;
        this.enums = enums;
        this.reloadQuoteEvent = new core_1.EventEmitter();
    }
    //public originalvalues: any;
    CalculateCommissionDialogComponent.prototype.ngOnInit = function () {
        this.getCommissionCalculationModel();
    };
    CalculateCommissionDialogComponent.prototype.getCommissionCalculationModel = function () {
        var self = this;
        this.commissionRequestSvc.getCommissionCalculationModel(this.quote.projectId, this.quote.quoteId, this.quote.commissionRequestId, this.quote.commissionRequestStatusTypeId).then(function (resp) {
            if (resp.isok) {
                self.commissionRequest = resp.model;
                //self.originalvalues = resp.model;
                self.calculateAll();
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    CalculateCommissionDialogComponent.prototype.calculateDiscountAmountVRV = function () {
        var self = this;
        this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.requestedMultiplierVRV;
        var data = {
            MultiplierCategoryTypeId: 2,
            Multiplier: this.commissionRequest.requestedMultiplierVRV
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageVRV = resp.model.commissionPercentage;
                //self.commissionRequest.requestedCommissionVRV = self.commissionRequest.totalNetVRV * self.commissionRequest.requestedCommissionPercentageVRV / 100;
                self.commissionRequest.requestedCommissionVRV = self.commissionRequest.totalNetVRV * self.commissionRequest.requestedCommissionPercentageVRV;
                self.commissionRequest.requestedNetMaterialValueVRV = self.commissionRequest.totalNetVRV - self.commissionRequest.requestedCommissionVRV;
                self.commissionRequest.requestedNetMaterialMultiplierVRV = self.commissionRequest.requestedNetMaterialValueVRV / self.commissionRequest.approvedTotalsCommission.totalListVRV;
                self.calculateTotals();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CalculateCommissionDialogComponent.prototype.calculateDiscountAmountSplit = function () {
        var self = this;
        this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.requestedMultiplierSplit;
        var data = {
            MultiplierCategoryTypeId: 1,
            Multiplier: this.commissionRequest.requestedMultiplierSplit
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageSplit = resp.model.commissionPercentage;
                //self.commissionRequest.requestedCommissionSplit = self.commissionRequest.totalNetSplit * self.commissionRequest.requestedCommissionPercentageSplit/100;
                self.commissionRequest.requestedCommissionSplit = self.commissionRequest.totalNetSplit * self.commissionRequest.requestedCommissionPercentageSplit;
                self.commissionRequest.requestedNetMaterialValueSplit = self.commissionRequest.totalNetSplit - self.commissionRequest.requestedCommissionSplit;
                self.commissionRequest.requestedNetMaterialMultiplierSplit = self.commissionRequest.requestedNetMaterialValueSplit / self.commissionRequest.approvedTotalsCommission.totalListSplit;
                self.calculateTotals();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CalculateCommissionDialogComponent.prototype.calculateDiscountAmountLCPackage = function () {
        var self = this;
        this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.requestedMultiplierLCPackage;
        var data = {
            MultiplierCategoryTypeId: 4,
            Multiplier: this.commissionRequest.requestedMultiplierLCPackage
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageLCPackage = resp.model.commissionPercentage;
                //self.commissionRequest.requestedCommissionLCPackage = self.commissionRequest.totalNetLCPackage * self.commissionRequest.requestedCommissionPercentageLCPackage / 100;
                self.commissionRequest.requestedCommissionLCPackage = self.commissionRequest.totalNetLCPackage * self.commissionRequest.requestedCommissionPercentageLCPackage;
                self.commissionRequest.requestedNetMaterialValueLCPackage = self.commissionRequest.totalNetLCPackage - self.commissionRequest.requestedCommissionLCPackage;
                self.commissionRequest.requestedNetMaterialMultiplierLCPackage = self.commissionRequest.requestedNetMaterialValueLCPackage / self.commissionRequest.approvedTotalsCommission.totalListLCPackage;
                self.calculateTotals();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CalculateCommissionDialogComponent.prototype.calculateDiscountAmountUnitary = function () {
        var self = this;
        //Todo: Why do we have to do this?
        //this.commissionRequest.requestedMultiplier = this.commissionRequest.requestedMultiplierUnitary;
        this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.requestedMultiplierUnitary;
        this.commissionRequestSvc.getUnitaryCommissionPercentage(this.commissionRequest)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageUnitary = resp.model.commissionPercentage;
                //self.commissionRequest.requestedCommissionUnitary = self.commissionRequest.totalNetUnitary * self.commissionRequest.requestedCommissionPercentageUnitary / 100;
                self.commissionRequest.requestedCommissionUnitary = self.commissionRequest.totalNetUnitary * self.commissionRequest.requestedCommissionPercentageUnitary;
                self.commissionRequest.requestedNetMaterialValueUnitary = self.commissionRequest.totalNetUnitary - self.commissionRequest.requestedCommissionUnitary;
                self.commissionRequest.requestedNetMaterialMultiplierUnitary = self.commissionRequest.requestedNetMaterialValueUnitary / self.commissionRequest.approvedTotalsCommission.totalListUnitary;
                self.calculateTotals();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CalculateCommissionDialogComponent.prototype.calculateTotals = function () {
        this.commissionRequest.totalNet = this.commissionRequest.totalNetVRV + this.commissionRequest.totalNetSplit + this.commissionRequest.totalNetUnitary + this.commissionRequest.totalNetLCPackage;
        this.commissionRequest.requestedMultiplier = this.commissionRequest.totalNet / this.commissionRequest.approvedTotalsCommission.totalList;
        this.commissionRequest.requestedCommissionTotal = this.commissionRequest.requestedCommissionVRV + this.commissionRequest.requestedCommissionSplit + this.commissionRequest.requestedCommissionUnitary + this.commissionRequest.requestedCommissionLCPackage;
        //this.commissionRequest.requestedCommissionPercentage = this.commissionRequest.requestedCommissionTotal / this.commissionRequest.totalNet * 100;
        this.commissionRequest.requestedCommissionPercentage = this.commissionRequest.requestedCommissionTotal / this.commissionRequest.totalNet;
        this.commissionRequest.requestedNetMaterialValue = this.commissionRequest.requestedNetMaterialValueVRV + this.commissionRequest.requestedNetMaterialValueSplit + this.commissionRequest.requestedNetMaterialValueUnitary + this.commissionRequest.requestedNetMaterialValueLCPackage;
        this.commissionRequest.requestedNetMaterialValueMultiplier = this.commissionRequest.requestedNetMaterialValue / this.commissionRequest.approvedTotalsCommission.totalList;
    };
    CalculateCommissionDialogComponent.prototype.calculateAll = function () {
        this.calculateDiscountAmountVRV();
        this.calculateDiscountAmountSplit();
        this.calculateDiscountAmountLCPackage();
        this.calculateDiscountAmountUnitary();
    };
    CalculateCommissionDialogComponent.prototype.save = function () {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');
        this.commissionRequestSvc.postCommissionCalculation(this.commissionRequest)
            .then(function (resp) {
            if (resp.isok) {
                self.toastrSvc.displayResponseMessages(resp);
                ///self.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                self.reloadQuoteEvent.emit();
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
                //self.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
            }
        })
            .catch(function (error) {
            console.log(error);
            //self.loadingIconSvc.Stop(jQuery("#content"));
            _this.blockUI.stop();
        });
    };
    CalculateCommissionDialogComponent.prototype.cancel = function () {
        //this.commissionRequest = this.originalvalues;
        this.getCommissionCalculationModel();
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], CalculateCommissionDialogComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalculateCommissionDialogComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalculateCommissionDialogComponent.prototype, "quote", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], CalculateCommissionDialogComponent.prototype, "quoteItems", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], CalculateCommissionDialogComponent.prototype, "reloadQuoteEvent", void 0);
    CalculateCommissionDialogComponent = __decorate([
        core_1.Component({
            selector: "calculate-commission-dialog",
            templateUrl: "./calculate-commission-dialog.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            account_service_1.AccountService, quote_service_1.QuoteService,
            commissionRequest_service_1.CommissionRequestService,
            enums_1.Enums])
    ], CalculateCommissionDialogComponent);
    return CalculateCommissionDialogComponent;
}());
exports.CalculateCommissionDialogComponent = CalculateCommissionDialogComponent;
//# sourceMappingURL=calculate-commission-dialog.component.js.map