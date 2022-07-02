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
//import 'rxjs/Rx';
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../shared/services/toastr.service");
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
var user_service_1 = require("../shared/services/user.service");
var enums_1 = require("../shared/enums/enums");
var project_service_1 = require("../project/services/project.service");
var discountRequest_service_1 = require("./services/discountRequest.service");
var email_service_1 = require("../shared/services/email.service");
var DiscountRequestComponent = /** @class */ (function () {
    function DiscountRequestComponent(router, route, toastrSvc, userSvc, enums, http, projectSvc, discountRequestSvc, emailSvc) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.discountRequestSvc = discountRequestSvc;
        this.emailSvc = emailSvc;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quoteId = this.route.snapshot.paramMap.get('quoteId');
        this.projectId = this.route.snapshot.paramMap.get('projectId');
        this.discountRequestId = this.route.snapshot.paramMap.get('discountRequestId');
        this.discountRequestSvc.getDiscountRequest(this.discountRequestId, this.projectId, this.quoteId).subscribe(function (resp) {
            if (resp.isok) {
                _this.discountRequest = resp.model;
                _this.discountRequest.grossMarginMarkUp = _this.discountRequest.standardTotals.grossMarginMarkUp;
                _this.calculateRevisedTotalSell();
                if (_this.discountRequest.discountRequestStatusTypeId == 0) {
                    _this.discountRequest.orderPlannedFor = null;
                }
                else {
                    _this.discountRequest.orderPlannedFor = new Date(Date.parse(_this.discountRequest.orderPlannedFor));
                }
                _this.discountRequest.project.estimatedDelivery = new Date(Date.parse(_this.discountRequest.project.estimatedDelivery));
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    }
    DiscountRequestComponent.prototype.ngOnInit = function () {
        this.canApproveDiscounts = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ApproveDiscounts);
    };
    DiscountRequestComponent.prototype.autofillChange = function () {
        var _this = this;
        if (this.loadOldDAR == true) {
            this.discountRequestSvc.getMostRecentDiscountRequestModel(this.projectId, this.quoteId).subscribe(function (resp) {
                if (resp.isok) {
                    _this.oldDAR = resp.model;
                    _this.applyOldSelections();
                }
            }, function (error) {
                console.log("Error: " + error);
            });
        }
        else {
            this.removeSelections();
        }
    };
    DiscountRequestComponent.prototype.applyOldSelections = function () {
        this.discountRequest.systemBasisDesignTypeId = this.oldDAR.systemBasisDesignTypeId;
        this.discountRequest.zoneStrategyTypeId = this.oldDAR.zoneStrategyTypeId;
        this.discountRequest.systemBasisDesignTypeId = this.oldDAR.brandSpecifiedTypeId;
        this.discountRequest.brandSpecifiedTypeId = this.oldDAR.brandSpecifiedTypeId;
        this.discountRequest.brandApprovedTypeId = this.oldDAR.brandApprovedTypeId;
        this.discountRequest.daikinEquipmentAtAdvantageTypeId = this.oldDAR.daikinEquipmentAtAdvantageTypeId;
        this.discountRequest.probabilityOfCloseTypeId = this.oldDAR.probabilityOfCloseTypeId;
        this.discountRequest.orderPlannedFor = new Date(Date.parse(this.oldDAR.orderPlannedFor));
        this.discountRequest.project.estimatedDelivery = new Date(Date.parse(this.oldDAR.project.estimatedDelivery));
        this.discountRequest.emailsList = this.oldDAR.emailsList;
    };
    DiscountRequestComponent.prototype.removeSelections = function () {
        this.discountRequest.systemBasisDesignTypeId = null;
        this.discountRequest.zoneStrategyTypeId = null;
        this.discountRequest.systemBasisDesignTypeId = null;
        this.discountRequest.brandSpecifiedTypeId = null;
        this.discountRequest.brandApprovedTypeId = null;
        this.discountRequest.daikinEquipmentAtAdvantageTypeId = null;
        this.discountRequest.probabilityOfCloseTypeId = null;
        this.discountRequest.orderPlannedFor = null;
        this.discountRequest.project.estimatedDelivery = null;
        this.discountRequest.emailsList = null;
    };
    DiscountRequestComponent.prototype.hasCompetitorPriceChange = function (event) {
        if (event == false) {
            this.discountRequest.competitorPrice = null;
        }
    };
    DiscountRequestComponent.prototype.hasCompetitorQuoteChange = function (event) {
    };
    DiscountRequestComponent.prototype.hasCompetitorLineComparsionChange = function (event) {
    };
    DiscountRequestComponent.prototype.selectCompetitorQuoteFile = function (e) {
        this.discountRequest.competitorQuoteFileName = e.files[0].name;
    };
    DiscountRequestComponent.prototype.selectLineComparsionFile = function (e) {
        this.discountRequest.competitorLineComparsionFileName = e.files[0].name;
    };
    DiscountRequestComponent.prototype.uploadEventHandler = function (e) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.discountRequest.quoteId,
        };
    };
    DiscountRequestComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    };
    DiscountRequestComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    DiscountRequestComponent.prototype.startupCostChange = function () {
        this.calculateRevisedTotalSell();
    };
    //HTML numeric input
    DiscountRequestComponent.prototype.calculateDiscountAmountVRV = function (value) {
        this.discountRequest.requestedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.requestedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountVRV = function (value) {
        this.discountRequest.approvedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.approvedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountSplit = function (value) {
        this.discountRequest.requestedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.requestedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountSplit = function (value) {
        this.discountRequest.approvedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.approvedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountUnitary = function (value) {
        this.discountRequest.requestedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.requestedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountUnitary = function (value) {
        this.discountRequest.approvedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.approvedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountLCPackage = function (value) {
        this.discountRequest.requestedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.requestedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountLCPackage = function (value) {
        this.discountRequest.approvedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.approvedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateTotalDiscount = function () {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
                this.discountRequest.approvedTotals.totalDiscountAmountSplit +
                this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
                this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;
        var totalNetDiscountable = this.discountRequest.standardTotals.totalNetVRV + this.discountRequest.standardTotals.totalNetSplit + this.discountRequest.standardTotals.totalNetLCPackage + this.discountRequest.standardTotals.totalNetUnitary;
        var totalNetNonDiscountable = this.discountRequest.standardTotals.totalNet - totalNetDiscountable;
        var totalNetWithAccessories = totalNetDiscountable + totalNetNonDiscountable;
        //Net Material Value
        this.discountRequest.approvedTotals.netMaterialValue = totalNetWithAccessories - this.discountRequest.approvedTotals.totalDiscountAmount;
        //Net Multiplier
        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;
        this.discountRequest.requestedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        //This is to fix javascript rounding issue. Ex: 823.72/2940.25 = 0.2799999997 instead of 0.28
        this.discountRequest.requestedDiscount = Math.round(this.discountRequest.requestedDiscount * 100000) / 100000;
        this.calculateRevisedTotalSell();
        this.calculateRevisedGrossProfit();
    };
    DiscountRequestComponent.prototype.calculateTotalApprovedDiscount = function () {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
                this.discountRequest.approvedTotals.totalDiscountAmountSplit +
                this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
                this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;
        var totalNetDiscountable = this.discountRequest.standardTotals.totalNetVRV + this.discountRequest.standardTotals.totalNetSplit + this.discountRequest.standardTotals.totalNetLCPackage + this.discountRequest.standardTotals.totalNetUnitary;
        var totalNetNonDiscountable = this.discountRequest.standardTotals.totalNet - totalNetDiscountable;
        var totalNetWithAccessories = totalNetDiscountable + totalNetNonDiscountable;
        //Net Material Value
        this.discountRequest.approvedTotals.netMaterialValue = totalNetWithAccessories - this.discountRequest.approvedTotals.totalDiscountAmount;
        //Net Multiplier
        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;
        this.discountRequest.approvedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        //This is to fix javascript rounding issue. Ex: 823.72/2940.25 = 0.2799999997 instead of 0.28
        this.discountRequest.approvedDiscount = Math.round(this.discountRequest.approvedDiscount * 100000) / 100000;
        //this.calculateRevisedGrossProfit();
        this.calculateRevisedTotalSell();
    };
    DiscountRequestComponent.prototype.calculateRevisedGrossProfit = function () {
        this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.approvedTotals.totalSell - this.discountRequest.approvedTotals.netMaterialValue;
    };
    DiscountRequestComponent.prototype.recalculateRevisedGrossProfit = function (value) {
        this.discountRequest.grossMarginMarkUp = value / 100;
        this.calculateRevisedTotalSell();
        this.calculateRevisedGrossProfit();
    };
    DiscountRequestComponent.prototype.calculateRevisedTotalSell = function () {
        if (this.discountRequest.quote.isGrossMargin) { // Gross Margin
            this.discountRequest.approvedTotals.totalSell = (this.discountRequest.quote.totalFreight + this.discountRequest.startUpCosts + this.discountRequest.approvedTotals.netMaterialValue) / (1 - this.discountRequest.grossMarginMarkUp);
        }
        else { // Markup
            this.discountRequest.approvedTotals.totalSell = (this.discountRequest.quote.totalFreight + this.discountRequest.startUpCosts + this.discountRequest.approvedTotals.netMaterialValue) * (1 + this.discountRequest.grossMarginMarkUp);
        }
        this.calculateRevisedGrossProfit();
    };
    DiscountRequestComponent.prototype.submit = function () {
        this.validateEmailsAndPostRequest();
    };
    DiscountRequestComponent.prototype.validateEmailsAndPostRequest = function () {
        var _this = this;
        var self = this;
        this.emailSvc.validateEmailList(this.discountRequest.emailsList).subscribe(function (resp) {
            if (resp.isok) {
                _this.postRequest();
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.error("Error " + error);
        });
    };
    DiscountRequestComponent.prototype.postRequest = function () {
        var self = this;
        self.blockUI.start('Loading...');
        this.discountRequestSvc.postDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.isok) {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                //send Email notification
                self.discountRequestSvc.sendDiscountRequestEmail(self.discountRequest).subscribe();
                self.router.navigateByUrl("/quote/" + self.discountRequest.quoteId + "/existingRecord");
            }
            else {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.approve = function () {
        var self = this;
        self.blockUI.start('Loading...');
        this.discountRequestSvc.approveDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.IsOK) {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                window.location.href = "/Userdashboard/DiscountRequests";
            }
            else {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.reject = function () {
        var self = this;
        this.blockUI.start('Loading...');
        this.discountRequestSvc.rejectDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.IsOK) {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                window.location.href = "/Userdashboard/DiscountRequests";
            }
            else {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.delete = function () {
    };
    DiscountRequestComponent.prototype.print = function () {
    };
    DiscountRequestComponent.prototype.export = function () {
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], DiscountRequestComponent.prototype, "blockUI", void 0);
    DiscountRequestComponent = __decorate([
        core_1.Component({
            selector: 'discount-request',
            templateUrl: './discount-request.component.html',
            styleUrls: ["./discount-request.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, http_1.Http,
            project_service_1.ProjectService, discountRequest_service_1.DiscountRequestService,
            email_service_1.EmailService])
    ], DiscountRequestComponent);
    return DiscountRequestComponent;
}());
exports.DiscountRequestComponent = DiscountRequestComponent;
//# sourceMappingURL=discount-request.component.js.map