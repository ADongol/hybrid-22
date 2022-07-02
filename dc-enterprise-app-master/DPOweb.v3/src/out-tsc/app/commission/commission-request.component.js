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
var toastr_service_1 = require("../shared/services/toastr.service");
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
var user_service_1 = require("../shared/services/user.service");
var enums_1 = require("../shared/enums/enums");
var account_service_1 = require("../account/services/account.service");
var quote_service_1 = require("../quote/services/quote.service");
var commissionRequest_service_1 = require("./services/commissionRequest.service");
var email_service_1 = require("../shared/services/email.service");
var CommissionRequestComponent = /** @class */ (function () {
    function CommissionRequestComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, commissionRequestSvc, emailSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.commissionRequestSvc = commissionRequestSvc;
        this.emailSvc = emailSvc;
        this.enums = enums;
        this.commissionManuallyInput = false;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quoteId = this.route.snapshot.paramMap.get('quoteId');
        this.projectId = this.route.snapshot.paramMap.get('projectId');
        this.commissionRequestId = this.route.snapshot.paramMap.get('commissionRequestId');
        if (this.commissionRequestId == 0) {
            this.commissionRequestId = null;
        }
    }
    CommissionRequestComponent.prototype.ngOnInit = function () {
        this.getCommissionRequest();
        this.canApproveCommissions = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ApproveCommissionRequests);
    };
    CommissionRequestComponent.prototype.autofillChange = function () {
        var _this = this;
        if (this.loadOldCOM == true) {
            this.commissionRequestSvc.getMostRecentCommissionRequestModel(this.projectId, this.quoteId).subscribe(function (resp) {
                if (resp.isok) {
                    _this.oldCOM = resp.model;
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
    CommissionRequestComponent.prototype.applyOldSelections = function () {
        this.commissionRequest.systemBasisDesignTypeId = this.oldCOM.systemBasisDesignTypeId;
        this.commissionRequest.zoneStrategyTypeId = this.oldCOM.zoneStrategyTypeId;
        this.commissionRequest.brandSpecifiedTypeId = this.oldCOM.brandSpecifiedTypeId;
        this.commissionRequest.brandApprovedTypeId = this.oldCOM.brandApprovedTypeId;
        this.commissionRequest.fundingTypeId = this.oldCOM.fundingTypeId;
        this.commissionRequest.thirdPartyEquipmentCosts = this.oldCOM.thirdPartyEquipmentCosts;
        this.commissionRequest.emailsList = this.oldCOM.emailsList;
    };
    CommissionRequestComponent.prototype.removeSelections = function () {
        this.commissionRequest.systemBasisDesignTypeId = null;
        this.commissionRequest.zoneStrategyTypeId = null;
        this.commissionRequest.brandSpecifiedTypeId = null;
        this.commissionRequest.brandApprovedTypeId = null;
        this.commissionRequest.fundingTypeId = null;
        this.commissionRequest.thirdPartyEquipmentCosts = null;
        this.commissionRequest.emailsList = null;
    };
    CommissionRequestComponent.prototype.getCommissionRequest = function () {
        var self = this;
        this.commissionRequestSvc.getCommissionRequestModel(this.projectId, this.quoteId, this.commissionRequestId, null).then(function (resp) {
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
    CommissionRequestComponent.prototype.selectCompetitorQuoteFile = function (e) {
        this.commissionRequest.competitorQuoteFileName = e.files[0].name;
    };
    CommissionRequestComponent.prototype.uploadEventHandler = function (e) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.commissionRequest.quoteId,
        };
    };
    CommissionRequestComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    };
    CommissionRequestComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    CommissionRequestComponent.prototype.startupCostChange = function () {
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.thirdPartyEquipmentCostsChange = function () {
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.calculateDiscountAmountVRV = function (event) {
        var self = this;
        var data = {
            MultiplierCategoryTypeId: 2,
            Multiplier: this.commissionRequest.requestedMultiplierVRV
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageVRV = resp.model.commissionPercentage;
                self.calculateVRVCommission();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CommissionRequestComponent.prototype.calculateVRVCommission = function () {
        //Purchase Order Amount
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.approvedMultiplierVRV;
            this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.approvedCommissionPercentageVRV;
            this.commissionRequest.requestedNetMaterialValueVRV = this.commissionRequest.totalNetVRV - this.commissionRequest.requestedCommissionVRV;
            this.commissionRequest.requestedNetMaterialMultiplierVRV = this.commissionRequest.requestedNetMaterialValueVRV / this.commissionRequest.approvedTotalsCommission.totalListVRV;
        }
        else {
            this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.requestedMultiplierVRV;
            this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.requestedCommissionPercentageVRV;
            this.commissionRequest.requestedNetMaterialValueVRV = this.commissionRequest.totalNetVRV - this.commissionRequest.requestedCommissionVRV;
            this.commissionRequest.requestedNetMaterialMultiplierVRV = this.commissionRequest.requestedNetMaterialValueVRV / this.commissionRequest.approvedTotalsCommission.totalListVRV;
        }
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.calculateDiscountAmountSplit = function (event) {
        var self = this;
        var data = {
            MultiplierCategoryTypeId: 1,
            Multiplier: this.commissionRequest.requestedMultiplierSplit
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageSplit = resp.model.commissionPercentage;
                self.calculateSplitCommission();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CommissionRequestComponent.prototype.calculateSplitCommission = function () {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.approvedMultiplierSplit;
            this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.approvedCommissionPercentageSplit;
            this.commissionRequest.requestedNetMaterialValueSplit = this.commissionRequest.totalNetSplit - this.commissionRequest.requestedCommissionSplit;
            this.commissionRequest.requestedNetMaterialMultiplierSplit = this.commissionRequest.requestedNetMaterialValueSplit / this.commissionRequest.approvedTotalsCommission.totalListSplit;
        }
        else {
            this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.requestedMultiplierSplit;
            this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.requestedCommissionPercentageSplit;
            this.commissionRequest.requestedNetMaterialValueSplit = this.commissionRequest.totalNetSplit - this.commissionRequest.requestedCommissionSplit;
            this.commissionRequest.requestedNetMaterialMultiplierSplit = this.commissionRequest.requestedNetMaterialValueSplit / this.commissionRequest.approvedTotalsCommission.totalListSplit;
        }
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.calculateDiscountAmountLCPackage = function (event) {
        var self = this;
        var data = {
            MultiplierCategoryTypeId: 4,
            Multiplier: this.commissionRequest.requestedMultiplierLCPackage
        };
        this.commissionRequestSvc.getCommissionPercentage(data)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageLCPackage = resp.model.commissionPercentage;
                self.calculateLCPackageCommission();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CommissionRequestComponent.prototype.calculateLCPackageCommission = function () {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.approvedMultiplierLCPackage;
            this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.approvedCommissionPercentageLCPackage;
            this.commissionRequest.requestedNetMaterialValueLCPackage = this.commissionRequest.totalNetLCPackage - this.commissionRequest.requestedCommissionLCPackage;
            this.commissionRequest.requestedNetMaterialMultiplierLCPackage = this.commissionRequest.requestedNetMaterialValueLCPackage / this.commissionRequest.approvedTotalsCommission.totalListLCPackage;
        }
        else {
            this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.requestedMultiplierLCPackage;
            this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.requestedCommissionPercentageLCPackage;
            this.commissionRequest.requestedNetMaterialValueLCPackage = this.commissionRequest.totalNetLCPackage - this.commissionRequest.requestedCommissionLCPackage;
            this.commissionRequest.requestedNetMaterialMultiplierLCPackage = this.commissionRequest.requestedNetMaterialValueLCPackage / this.commissionRequest.approvedTotalsCommission.totalListLCPackage;
        }
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.calculateDiscountAmountUnitary = function (event) {
        var self = this;
        //Todo: Why do we have to do this?
        //this.commissionRequest.requestedMultiplier = this.commissionRequest.requestedMultiplierUnitary;
        this.commissionRequestSvc.getUnitaryCommissionPercentage(this.commissionRequest)
            .then(function (resp) {
            if (resp.isok) {
                self.commissionRequest.requestedCommissionPercentageUnitary = resp.model.commissionPercentage;
                self.calculateUnitaryCommission();
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CommissionRequestComponent.prototype.calculateUnitaryCommission = function () {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.approvedMultiplierUnitary;
            this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.approvedCommissionPercentageUnitary;
            this.commissionRequest.requestedNetMaterialValueUnitary = this.commissionRequest.totalNetUnitary - this.commissionRequest.requestedCommissionUnitary;
            this.commissionRequest.requestedNetMaterialMultiplierUnitary = this.commissionRequest.requestedNetMaterialValueUnitary / this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        }
        else {
            this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.requestedMultiplierUnitary;
            this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.requestedCommissionPercentageUnitary;
            this.commissionRequest.requestedNetMaterialValueUnitary = this.commissionRequest.totalNetUnitary - this.commissionRequest.requestedCommissionUnitary;
            this.commissionRequest.requestedNetMaterialMultiplierUnitary = this.commissionRequest.requestedNetMaterialValueUnitary / this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        }
        this.calculateTotals();
    };
    CommissionRequestComponent.prototype.calculateTotals = function () {
        //Overall TotalList
        var totalListWithOtherAccessories = this.commissionRequest.approvedTotalsCommission.totalList;
        var totalListCommissionable = this.commissionRequest.approvedTotalsCommission.totalListVRV + this.commissionRequest.approvedTotalsCommission.totalListSplit + this.commissionRequest.approvedTotalsCommission.totalListLCPackage + this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        //Notes: totalListNonCommissionable is totalList of Other/Accessorries which has multiplier is 1.0
        var totalListNonCommissionable = totalListWithOtherAccessories - totalListCommissionable;
        //Final TotalNet (Final Purchase Order Amount) with Other/Accessories
        this.commissionRequest.totalNet = this.commissionRequest.totalNetVRV + this.commissionRequest.totalNetSplit + this.commissionRequest.totalNetUnitary + this.commissionRequest.totalNetLCPackage + totalListNonCommissionable;
        //Total Net Multiplier
        this.commissionRequest.requestedMultiplier = this.commissionRequest.totalNet / this.commissionRequest.approvedTotalsCommission.totalList;
        //Total Commission Amount
        this.commissionRequest.requestedCommissionTotal = this.commissionRequest.requestedCommissionVRV + this.commissionRequest.requestedCommissionSplit + this.commissionRequest.requestedCommissionUnitary + this.commissionRequest.requestedCommissionLCPackage;
        //Commission Percent
        this.commissionRequest.requestedCommissionPercentage = this.commissionRequest.requestedCommissionTotal / this.commissionRequest.totalNet;
        //Net Material Value
        //this.commissionRequest.requestedNetMaterialValue = this.commissionRequest.requestedNetMaterialValueVRV + this.commissionRequest.requestedNetMaterialValueSplit + this.commissionRequest.requestedNetMaterialValueUnitary + this.commissionRequest.requestedNetMaterialValueLCPackage;// thieu Non-Commissionable products
        this.commissionRequest.requestedNetMaterialValue = this.commissionRequest.totalNet - this.commissionRequest.requestedCommissionTotal;
        //Net Material Value Multiplier
        this.commissionRequest.requestedNetMaterialValueMultiplier = this.commissionRequest.requestedNetMaterialValue / this.commissionRequest.approvedTotalsCommission.totalList;
        this.commissionRequest.totalRevised = this.commissionRequest.totalNet + this.commissionRequest.startUpCosts + this.commissionRequest.thirdPartyEquipmentCosts;
    };
    CommissionRequestComponent.prototype.commissionPercentageVRVChange = function () {
        this.calculateVRVCommission();
    };
    CommissionRequestComponent.prototype.commissionPercentageSplitChange = function () {
        this.calculateSplitCommission();
    };
    CommissionRequestComponent.prototype.commissionPercentageLCPackageChange = function () {
        this.calculateLCPackageCommission();
    };
    CommissionRequestComponent.prototype.commissionPercentageUnitaryChange = function () {
        this.calculateUnitaryCommission();
    };
    CommissionRequestComponent.prototype.calculateAll = function () {
        this.calculateVRVCommission();
        this.calculateSplitCommission();
        this.calculateUnitaryCommission();
        this.calculateLCPackageCommission();
    };
    CommissionRequestComponent.prototype.submit = function () {
        this.validateEmailsAndPostRequest();
    };
    CommissionRequestComponent.prototype.validateEmailsAndPostRequest = function () {
        var _this = this;
        var self = this;
        this.emailSvc.validateEmailList(this.commissionRequest.emailsList).subscribe(function (resp) {
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
    CommissionRequestComponent.prototype.postRequest = function () {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');
        this.commissionRequestSvc.postCommissionRequest(this.commissionRequest).subscribe(function (resp) {
            if (resp.isok) {
                //this.discountRequest = resp.model;
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                //send Email notification
                self.commissionRequestSvc.sendCommissionRequestEmail(self.commissionRequest).subscribe();
                self.router.navigateByUrl("/quote/" + self.commissionRequest.quoteId + "/existingRecord");
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    CommissionRequestComponent.prototype.approve = function () {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');
        this.commissionRequestSvc.approveCommissionRequest(this.commissionRequest).subscribe(function (resp) {
            if (resp.isok) {
                self.commissionRequest = resp.model;
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                window.location.href = "/Userdashboard/CommissionRequests";
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    CommissionRequestComponent.prototype.reject = function () {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');
        this.commissionRequestSvc.rejectCommissionRequest(this.commissionRequest).subscribe(function (resp) {
            if (resp.isok) {
                self.commissionRequest = resp.model;
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                window.location.href = "/Userdashboard/CommissionRequests";
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    CommissionRequestComponent.prototype.delete = function () {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');
        this.commissionRequestSvc.deleteCommissionRequest(this.commissionRequest).subscribe(function (resp) {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                //window.location.href = "/Userdashboard/CommissionRequests";
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], CommissionRequestComponent.prototype, "blockUI", void 0);
    CommissionRequestComponent = __decorate([
        core_1.Component({
            selector: "commission-request",
            templateUrl: "./commission-request.component.html",
            styleUrls: ["./commission-request.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService,
            user_service_1.UserService, account_service_1.AccountService,
            quote_service_1.QuoteService, commissionRequest_service_1.CommissionRequestService,
            email_service_1.EmailService,
            enums_1.Enums])
    ], CommissionRequestComponent);
    return CommissionRequestComponent;
}());
exports.CommissionRequestComponent = CommissionRequestComponent;
//# sourceMappingURL=commission-request.component.js.map