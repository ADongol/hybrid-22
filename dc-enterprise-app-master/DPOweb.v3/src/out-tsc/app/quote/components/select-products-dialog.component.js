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
var webconfig_service_1 = require("../../shared/services/webconfig.service");
var SelectProductsDialogComponent = /** @class */ (function () {
    function SelectProductsDialogComponent(router, route, toastrSvc, userSvc, accountSvc, quoteSvc, webconfigSvc, enums) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.quoteSvc = quoteSvc;
        this.webconfigSvc = webconfigSvc;
        this.enums = enums;
        this.toolList = [];
        this.defaultItem = { text: "Select ...", value: null };
    }
    SelectProductsDialogComponent.prototype.ngOnInit = function () {
        //var tools = [];
        var self = this;
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.webconfigSvc.getLCSTApiToken().then(function (resp) {
            self.lcstApiToken = resp.model;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        setTimeout(function () {
            for (var i in self.user.toolAccesses) {
                if (self.user.toolAccesses[i].addToQuote == 1) {
                    if (self.user.toolAccesses[i].toolId == self.enums.ToolAccessEnum.LCSubmittalTool) {
                        if (self.webconfig.lcst.pilotRelease == "true") {
                            if (self.webconfig.lcst.availableToBusinesses.indexOf(self.user.businessId) > -1) {
                                self.toolList.push({ text: self.user.toolAccesses[i].name, value: self.user.toolAccesses[i].toolId });
                            }
                        }
                        else {
                            self.toolList.push({ text: self.user.toolAccesses[i].name, value: self.user.toolAccesses[i].toolId });
                        }
                    }
                    else {
                        self.toolList.push({ text: self.user.toolAccesses[i].name, value: self.user.toolAccesses[i].toolId });
                    }
                }
            }
        }, 500);
        if (this.toolList.length == 0) {
            jQuery("#selectProductsBtn").hide();
        }
    };
    SelectProductsDialogComponent.prototype.openTool = function () {
        var self = this;
        //alert("selected tool: " + this.selectedTool.text);
        if (this.selectedTool.value == this.enums.ToolAccessEnum.UnitaryMatchupTool) {
            //window.location.href = "/api/Tool/SystemConfigurator?quoteId=" + this.quote.quoteId;
            this.quoteSvc.setBasketQuoteId(this.quote.quoteId).then(function (resp) {
                if (resp.isok) {
                    window.location.href = "/v3/#/tools/unitaryMatchup";
                    self.toastrSvc.displayResponseMessages(resp);
                }
                else {
                    self.toastrSvc.displayResponseMessages(resp);
                }
            }).catch(function (error) {
                console.log('Retrieval error: ${error}');
                console.log(error);
            });
        }
        else if (this.selectedTool.value == this.enums.ToolAccessEnum.CommercialSplitMatchupTool) {
            //window.location.href = "/api/Tool/SplitSystemConfigurator?quoteId=" + this.quote.quoteId;
            this.quoteSvc.setBasketQuoteId(this.quote.quoteId).then(function (resp) {
                if (resp.isok) {
                    window.location.href = "/v3/#/tools/lcSplitMatchup";
                    self.toastrSvc.displayResponseMessages(resp);
                }
                else {
                    self.toastrSvc.displayResponseMessages(resp);
                }
            }).catch(function (error) {
                console.log('Retrieval error: ${error}');
                console.log(error);
            });
        }
        else if (this.selectedTool.value == this.enums.ToolAccessEnum.LCSubmittalTool) {
            window.location.href = this.webconfig.routeConfig.lcstURL + "&quoteId=" + this.quote.quoteId + "&projectId=" + this.quote.projectId + "&projectName=" + this.quote.project.name + "&userId=" + this.user.userId + "&firstName=" + this.user.firstName + "&lastName=" + this.user.lastName + "&token=" + this.lcstApiToken;
        }
        else if (this.selectedTool.value == this.enums.ToolAccessEnum.LCSTHighEff) {
            window.location.href = this.webconfig.routeConfig.lcstURLHighEff + "&reqType=Quote" + "&quoteId=" + this.quote.quoteId + "&projectId=" + this.quote.projectId + "&projectName=" + this.quote.project.name + "&userId=" + this.user.userId + "&firstName=" + this.user.firstName + "&lastName=" + this.user.lastName + "&token=" + this.lcstApiToken;
        }
        else if (this.selectedTool.value == this.enums.ToolAccessEnum.LCSTHighEffv2) {
            window.location.href = this.webconfig.routeConfig.lcstURLHighEffv2 + "&reqType=Quote" + "&quoteId=" + this.quote.quoteId + "&projectId=" + this.quote.projectId + "&projectName=" + this.quote.project.name + "&userId=" + this.user.userId + "&firstName=" + this.user.firstName + "&lastName=" + this.user.lastName + "&token=" + this.lcstApiToken;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SelectProductsDialogComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SelectProductsDialogComponent.prototype, "quote", void 0);
    SelectProductsDialogComponent = __decorate([
        core_1.Component({
            selector: "select-products-dialog",
            templateUrl: "./select-products-dialog.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService,
            user_service_1.UserService, account_service_1.AccountService,
            quote_service_1.QuoteService, webconfig_service_1.WebConfigService,
            enums_1.Enums])
    ], SelectProductsDialogComponent);
    return SelectProductsDialogComponent;
}());
exports.SelectProductsDialogComponent = SelectProductsDialogComponent;
//# sourceMappingURL=select-products-dialog.component.js.map