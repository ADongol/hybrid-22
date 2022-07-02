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
var toastr_service_1 = require("../../../shared/services/toastr.service");
var user_service_1 = require("../../../shared/services/user.service");
var product_service_1 = require("../../../product/services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var lc_split_matchup_service_1 = require("../../services/lc-split-matchup.service");
//import { SortDescriptor } from '@progress/kendo-data-query';
var LCSplitMatchupComponent = /** @class */ (function () {
    //public testListItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
    function LCSplitMatchupComponent(router, route, toastrSvc, userSvc, productSvc, basketSvc, lcMatchupServiceSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.lcMatchupServiceSvc = lcMatchupServiceSvc;
        this.voltage = { text: "No Preference", value: "" };
        this.voltageOptions = [{ text: "No Preference", value: "" },
            { "text": "208/230", value: "208/230" },
            { "text": "460", value: "460" }];
        this.txv = { text: "No Preference", value: "T" };
        this.txvOptions = [{ "text": "Yes", value: "Y" },
            { "text": "No", value: "N" },
            { "text": "No Preference", value: "T" }];
        this.status = { text: "No Preference", value: "S" };
        this.statusOptions = [{ "text": "Active", value: "Y" },
            { "text": "Discontinued", value: "N" },
            { "text": "No Preference", value: "S" }];
        //Dropdownlist options
        this.defaultItem = { "text": "Select...", value: null };
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    LCSplitMatchupComponent.prototype.ngOnChanges = function () {
        //console.log("split system config: OnChange");
    };
    LCSplitMatchupComponent.prototype.ngOnInit = function () {
        //console.log("split system config: OnInit");
        var _this = this;
        this.userSvc.isAuthenticated().then(function (resp) {
            if (resp.isok && resp.model == true) {
                _this.isAuthenticated = true;
            }
            else {
                //Go back to login page
                window.location.href = "/v3/#/account/login";
            }
        });
        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
        //wait until elements are available
        setTimeout(this.setupDefaults.bind(this), 200); // wait 0.2 sec
        //set up active tab
        jQuery(".systemConfig-tab-bar li").click(function () {
            jQuery(this).addClass('active-tab').siblings().removeClass('active-tab');
        });
    };
    //ngDoCheck() {
    //}
    LCSplitMatchupComponent.prototype.ngAfterContentInit = function () {
        //console.log("system config: AfterContentInit");
        //setTimeout(function () {
        //    $('#userBasket').insertBefore('#projectTabs');
        //}, 1000);
    };
    LCSplitMatchupComponent.prototype.ngAfterViewChecked = function () {
        //console.log("split system config: AfterViewChecked");
    };
    LCSplitMatchupComponent.prototype.getBasketCallback = function (resp) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
            jQuery("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
        }
    };
    LCSplitMatchupComponent.prototype.ngOnDestroy = function () {
        //$('#content > #userBasket').remove();
        ////reset session["BasketQuoteId"] = 0
        //this.productSvc.resetBasketQuoteId();
        //console.log("system config: OnDestroy");
    };
    LCSplitMatchupComponent.prototype.setupDefaults = function () {
        //this.model = "N";
        this.setupRadioButtons();
        this.setupDropDownLists();
        this.minSEER = "13";
        this.maxSEER = null;
        this.minEER = null;
        this.maxEER = null;
        this.minHSPF = null;
        this.maxHSPF = null;
        jQuery('#minSEER').removeProp('readonly');
        jQuery('#minEER').removeProp('readonly');
        this.resetIndoorUnit();
        //this.outdoorModelNumber = null;
    };
    LCSplitMatchupComponent.prototype.reset = function () {
        this.setupDefaults();
        //$("#searchBySystemNeeds").addClass('active-tab');
        //$("#searchByModelNumber").removeClass('active-tab');
    };
    LCSplitMatchupComponent.prototype.validateInput = function () {
        var isValidated = true;
        if (this.tonnage == null || this.tonnage == "null") {
            this.toastrSvc.ErrorFadeOut("Tonnage is required.");
            isValidated = false;
        }
        if (this.minSEER == null) {
            this.toastrSvc.ErrorFadeOut("Min SEER is required.");
            isValidated = false;
        }
        if (this.coil == null && this.airHandler == null) {
            this.toastrSvc.ErrorFadeOut("Indoor Unit Type is required.");
            isValidated = false;
        }
        return isValidated;
    };
    LCSplitMatchupComponent.prototype.getResult = function () {
        var _this = this;
        var self = this;
        if (this.validateInput()) {
            var params = this.mapInputToParams();
            this.blockUI.start('Loading...');
            //self.loadingIconSvc.Start(jQuery("#splitSystemConfiguratorTool"));
            this.lcMatchupServiceSvc.getSystemMatchupList(params).then(function (resp) {
                if (!resp.error) {
                    var result = resp.result;
                    ////this.concatResult(resp.result);
                    _this.matchupResult = result;
                    jQuery('#systemConfigForm').hide();
                    jQuery('#splitMatchupResultGrid').show();
                    _this.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#splitSystemConfiguratorTool"));
                }
                else {
                    _this.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#splitSystemConfiguratorTool"));
                }
            });
        }
        //this.SystemConfiguratorSvc.getSystemMatchupList(data).then(this.getSystemMatchupListCallBack.bind(this));
    };
    LCSplitMatchupComponent.prototype.concatResult = function (result) {
        var data = [];
        for (var key in result) {
            if (!result.hasOwnProperty(key))
                continue;
            var obj = result[key];
            data = data.concat(obj);
        }
        this.matchupResult = data;
        jQuery('#systemConfigForm').hide();
        jQuery('#matchupResultGrid').show();
    };
    LCSplitMatchupComponent.prototype.mapInputToParams = function () {
        var params = {
            "user": "",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikinSplSt",
            "servicesName": "doGetSystemMatchupList",
            "accountId": "goodman1",
            "params": {
                "type": this.outDoorUnitType,
                "tonnage": this.tonnage,
                "voltage": this.voltage.value,
                "min_seer": this.minSEER,
                "max_seer": this.maxSEER,
                "min_ieer": this.minIEER,
                "max_ieer": this.maxIEER,
                "min_eer": this.minEER,
                "max_eer": this.maxEER,
                "min_hspf": this.minHSPF,
                "max_hspf": this.maxHSPF,
                "txv": this.txv.value,
                "status": this.status.value,
                "coil": this.coil,
                "airhandler": this.airHandler
            }
        };
        return params;
    };
    LCSplitMatchupComponent.prototype.getTonnageList = function () {
    };
    LCSplitMatchupComponent.prototype.getEqModelList = function () {
    };
    LCSplitMatchupComponent.prototype.setupDropDownLists = function () {
        this.outDoorUnitTypes = [
            { "text": "Air Conditioner", value: "ac" },
            { "text": "Heat Pump", value: "hp" }
        ];
        var self = this;
        jQuery("#outDoorUnitTypeDDL").kendoDropDownList({
            dataSource: self.outDoorUnitTypes,
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.outDoorUnitType = value;
                //if (self.model == "N") {
                //    self.ceeTier = "b4";
                //    self.onCEETierChange();
                //}      
            }
        });
        var outDoorUnitTypeDDL = jQuery("#outDoorUnitTypeDDL").data("kendoDropDownList");
        outDoorUnitTypeDDL.select(0);
        outDoorUnitTypeDDL.trigger("change");
        //setTimeout(self.setupCeeTierDDL.bind(self), 200);
        //setTimeout(self.setupRegionDLL.bind(self), 200);
        setTimeout(self.setupTonnageDDL.bind(self), 200);
    };
    LCSplitMatchupComponent.prototype.setupTonnageDDL = function () {
        var self = this;
        this.lcMatchupServiceSvc.getTonnageList().then(function (resp) {
            if (resp) {
                var tonnageList = resp.result.tonnageList;
                //debugger
                var tonnageListDataSrc = [];
                for (var i in tonnageList) {
                    var obj = {
                        "text": tonnageList[i],
                        "value": tonnageList[i]
                    };
                    //debugger
                    tonnageListDataSrc.push(obj);
                }
                if (jQuery("#tonnageDDL").length > 0) {
                    jQuery("#tonnageDDL").kendoDropDownList({
                        dataSource: tonnageListDataSrc,
                        dataTextField: "text",
                        dataValueField: "value",
                        optionLabel: {
                            text: "Select ...",
                            value: null
                        },
                        change: function (e) {
                            var value = this.value();
                            self.tonnage = value;
                            //debugger
                        }
                    });
                    //debugger
                    var tonnageDDL = jQuery("#tonnageDDL").data("kendoDropDownList");
                    tonnageDDL.select(0);
                    tonnageDDL.trigger("change");
                }
            }
        });
    };
    LCSplitMatchupComponent.prototype.setupRadioButtons = function () {
        //this.model = "N";
        //this.ceeTier = "b4";
        this.txv.value = "T";
        this.status.value = "S";
    };
    LCSplitMatchupComponent.prototype.resetIndoorUnit = function () {
        //this function get called before value is bound to model
        this.coil = null;
        //this.furnace = null;
        //this.minAFUE = { text: "Select ...", value: null };
        //this.maxAFUE = { text: "Select ...", value: null };
        //this.flushfit = null;
        this.airHandler = null;
        this.indoorUnitType = null;
    };
    LCSplitMatchupComponent.prototype.indoorUnitTypeOnChange = function () {
        //reset
        this.coil = null;
        //this.furnace = null;
        //this.minAFUE = { text: "Select ...", value: null };
        //this.maxAFUE = { text: "Select ...", value: null };
        //this.flushfit = null;
        this.airHandler = null;
        if (this.indoorUnitType == 'coilOnly') {
            this.coil = 'coil';
        }
        //if (this.indoorUnitType == 'furnaceCoil') {
        //    this.furnace = 'furnace'
        //}
        if (this.indoorUnitType == 'airHandler') {
            this.airHandler = 'airhandler';
        }
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], LCSplitMatchupComponent.prototype, "blockUI", void 0);
    LCSplitMatchupComponent = __decorate([
        core_1.Component({
            selector: 'lc-split-matchup',
            templateUrl: './lc-split-matchup.component.html',
            styleUrls: ['./lc-split-matchup.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute, toastr_service_1.ToastrService,
            user_service_1.UserService,
            product_service_1.ProductService, basket_service_1.BasketService,
            lc_split_matchup_service_1.LCSplitMatchupService])
    ], LCSplitMatchupComponent);
    return LCSplitMatchupComponent;
}());
exports.LCSplitMatchupComponent = LCSplitMatchupComponent;
;
//# sourceMappingURL=lc-split-matchup.component.js.map