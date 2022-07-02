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
var webconfig_service_1 = require("../../../shared/services/webconfig.service");
var product_service_1 = require("../../../product/services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var unitary_matchup_service_1 = require("../../services/unitary-matchup.service");
//import { SortDescriptor } from '@progress/kendo-data-query';
var UnitaryMatchupComponent = /** @class */ (function () {
    function UnitaryMatchupComponent(router, route, userSvc, webconfigSvc, toastrSvc, productSvc, basketSvc, unitaryMatchupSvc) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.webconfigSvc = webconfigSvc;
        this.toastrSvc = toastrSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.unitaryMatchupSvc = unitaryMatchupSvc;
        this.model = "N";
        //Search by System Needs
        this.packageType = { text: "Dual Fuel", value: "pkg1" };
        this.packageTypes = [{ "text": "Dual Fuel", value: "pkg1" },
            { "text": "Heat Pump", value: "pkg2" },
            { "text": "Gas/Electric", value: "pkg3" },
            { "text": "Cool Only", value: "pkg4" }];
        this.txv = { text: "No Preference", value: "T" };
        this.txvOptions = [{ "text": "Yes", value: "Y" },
            { "text": "No", value: "N" },
            { "text": "No Preference", value: "T" }];
        this.status = { text: "No Preference", value: "S" };
        this.statusOptions = [{ "text": "Active", value: "Y" },
            { "text": "Discontinued", value: "N" },
            { "text": "No Preference", value: "S" }];
        this.minAFUE = { text: "Select...", value: null };
        this.minAFUEOptions = [{ "text": "80%", value: "80" },
            { "text": "90%", value: "90" },
            { "text": "92%", value: "92" },
            { "text": "95%", value: "95" },
            { "text": "96%", value: "96" },
            { "text": "97%", value: "97" }
        ];
        this.maxAFUE = { text: "Select...", value: null };
        this.maxAFUEOptions = [{ "text": "80%", value: "80" },
            { "text": "90%", value: "90" },
            { "text": "92%", value: "92" },
            { "text": "95%", value: "95" },
            { "text": "96%", value: "96" },
            { "text": "97%", value: "97" }
        ];
        //Dropdownlist options
        this.defaultItem = { "text": "Select...", value: null };
        var self = this;
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            self.unitaryMCToolURL = self.webconfig.routeConfig.unitaryMatchupToolURL;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.user = this.route.snapshot.data['currentUser'].model;
        this.tonnageList = this.route.snapshot.data['tonnageList'];
    }
    UnitaryMatchupComponent.prototype.ngOnChanges = function () {
        //console.log("system config: OnChange");
    };
    UnitaryMatchupComponent.prototype.ngOnInit = function () {
        //console.log("system config: OnInit");
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
    UnitaryMatchupComponent.prototype.ngAfterContentInit = function () {
    };
    UnitaryMatchupComponent.prototype.ngAfterViewChecked = function () {
    };
    UnitaryMatchupComponent.prototype.getBasketCallback = function (resp) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
            jQuery("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
        }
    };
    UnitaryMatchupComponent.prototype.ngOnDestroy = function () {
        jQuery('#content > #userBasket').remove();
        //reset session["BasketQuoteId"] = 0
        //// this.productSvc.resetBasketQuoteId();   ///TODO 08/22
        //console.log("system config: OnDestroy");
    };
    UnitaryMatchupComponent.prototype.setupDefaults = function () {
        this.model = "N";
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
        this.outdoorModelNumber = null;
    };
    UnitaryMatchupComponent.prototype.reset = function () {
        this.setupDefaults();
        jQuery("#searchBySystemNeeds").addClass('active-tab');
        jQuery("#searchByModelNumber").removeClass('active-tab');
    };
    UnitaryMatchupComponent.prototype.searchBy = function (value) {
        if (value == "systemNeeds") {
            jQuery("#searchBySystemNeeds").addClass('active-tab').siblings().removeClass('active-tab');
            if (this.model != "N") {
                this.model = "N";
                this.searchByOnChange();
            }
        }
        else if (value == "modelNumber") {
            jQuery("#searchByModelNumber").addClass('active-tab').siblings().removeClass('active-tab');
            if (this.model != "Y") {
                this.model = "Y";
                this.searchByOnChange();
            }
        }
        //this.searchByOnChange();
    };
    UnitaryMatchupComponent.prototype.searchByOnChange = function () {
        var self = this;
        if (this.model == "Y") {
            //wait until jQuery("#outdoorModelAutoComplete") is available
            setTimeout(this.setupOutdoorModelAutoComplete.bind(this), 200); // wait 0.2 sec
            this.outdoorModelNumber = null;
        }
        if (this.model == "N") {
            //wait until element is available
            setTimeout(this.setupTonnageDDL.bind(this), 200); // wait 0.2 sec
            setTimeout(this.setupCeeTierDDL.bind(this), 200); // wait 0.2 sec
        }
        this.indoorUnitType = null;
    };
    UnitaryMatchupComponent.prototype.packageTypeOnChange = function () {
        jQuery("#outdoorModelAutoComplete").val(null);
        setTimeout(this.setupRegionDLL.bind(this), 200); // wait 0.2 sec
    };
    UnitaryMatchupComponent.prototype.validateInput = function () {
        var isValidated = true;
        if (this.model == "N") {
            if (this.tonnage == null || this.tonnage == "null") {
                this.toastrSvc.ErrorFadeOut("Tonnage is required.");
                isValidated = false;
                //this.inputValidated = false;
            }
            if (this.minSEER == null) {
                this.toastrSvc.ErrorFadeOut("Min SEER is required.");
                isValidated = false;
            }
            if (this.outDoorUnitType != 'pkg') {
                if (this.coil == null && this.furnace == null && this.airHandler == null) {
                    this.toastrSvc.ErrorFadeOut("Indoor Unit Type is required.");
                    isValidated = false;
                }
            }
        }
        else if (this.model == "Y") {
            if (this.outdoorModelNumber == null) {
                this.toastrSvc.ErrorFadeOut("Outdoor Unit Model is required.");
                isValidated = false;
            }
        }
        return isValidated;
    };
    UnitaryMatchupComponent.prototype.getResult = function () {
        var _this = this;
        var self = this;
        if (this.validateInput()) {
            var params = this.mapInputToParams();
            //self.loadingIconSvc.Start(jQuery("#systemConfiguratorTool"));
            this.blockUI.start('Loading...');
            this.unitaryMatchupSvc.getSystemMatchupList(params).then(function (resp) {
                if (!resp.error) {
                    var result = resp.result;
                    //this.concatResult(resp.result);
                    _this.matchupResult = result;
                    jQuery('#systemConfigForm').hide();
                    jQuery('#matchupResultGrid').show();
                    //self.loadingIconSvc.Stop(jQuery("#systemConfiguratorTool"));
                    _this.blockUI.stop();
                }
                else {
                    // self.loadingIconSvc.Stop(jQuery("#systemConfiguratorTool"));
                    _this.blockUI.stop();
                }
            });
        }
        //this.SystemConfiguratorSvc.getSystemMatchupList(data).then(this.getSystemMatchupListCallBack.bind(this));
    };
    UnitaryMatchupComponent.prototype.concatResult = function (result) {
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
    UnitaryMatchupComponent.prototype.mapInputToParams = function () {
        var params = {};
        //map selections to params
        if (this.model == "N") {
            //Search by System Needs
            params = {
                "user": "",
                "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                "packageName": "SystemMatchupDaikin",
                "servicesName": "doGetSystemMatchupList",
                "accountId": "goodman1",
                "params": {
                    "model": this.model,
                    "type": this.outDoorUnitType,
                    "pkgtype": this.packageType.value,
                    "region": this.region,
                    "tonnage": this.tonnage,
                    "min_seer": this.minSEER,
                    "max_seer": this.maxSEER,
                    "min_eer": this.minEER,
                    "max_eer": this.maxEER,
                    "min_hspf": this.minHSPF,
                    "max_hspf": this.maxHSPF,
                    "txv": this.txv.value,
                    "status": this.status.value,
                    "coil": this.coil,
                    "airhandler": this.airHandler,
                    "furnace": this.furnace,
                    "min_afue": this.minAFUE.value,
                    "max_afue": this.maxAFUE.value,
                    "flushfit": this.flushfit
                }
            };
        }
        else if (this.model = "Y") {
            //search by model #
            params = {
                "user": "",
                "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                "packageName": "SystemMatchupDaikin",
                "servicesName": "doGetSystemMatchupList",
                "accountId": "goodman1",
                "params": {
                    "model": this.model,
                    "type": this.outDoorUnitType,
                    "pkgtype": this.packageType.value,
                    "region": this.region,
                    "modelnumber": this.outdoorModelNumber,
                    "coil": this.coilModelNumber,
                    "furnace": this.furnaceModelNumber,
                    "furnaceCoil": this.furnaceCoilModelNumber,
                    "airhandler": this.airHandlerModelNumber,
                    "blower": this.airHandlerBlowerModelNumber
                }
            };
        }
        return params;
    };
    //public getTonnageList() {
    //    this.unitaryMatchupSvc.getTonnageList().then((resp: any) => {
    //        if (resp) {
    //            var tonnageList = resp;
    //            debugger
    //        }
    //    });
    //}
    UnitaryMatchupComponent.prototype.getEqModelList = function () {
        //Test api
        this.unitaryMatchupSvc.getEqModelList({}).then(function (resp) {
            if (!resp.error) {
                var list = resp.result.modelList;
                debugger;
            }
        });
    };
    UnitaryMatchupComponent.prototype.setupDropDownLists = function () {
        this.outDoorUnitTypes = [
            { "text": "Air Conditioner", value: "ac" },
            { "text": "Heat Pump", value: "hp" },
            { "text": "Package", value: "pkg" }
        ];
        var self = this;
        jQuery("#outDoorUnitTypeDDL").kendoDropDownList({
            dataSource: self.outDoorUnitTypes,
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.outDoorUnitType = value;
                if (self.model == "N") {
                    self.ceeTier = "b4";
                    self.onCEETierChange();
                }
                if (self.model == "Y") {
                    //reset selections
                    self.outdoorModelNumber = null;
                    jQuery("#outdoorModelAutoComplete").val(null);
                    //Reset outdoorModelAutoComplete dataSource
                    var outdoorModelDLL = jQuery("#outdoorModelAutoComplete").data("kendoAutoComplete");
                    var emptyDataSrc = new kendo.data.DataSource();
                    outdoorModelDLL.setDataSource(emptyDataSrc);
                    self.indoorUnitType = null;
                }
                if (value == "pkg") {
                    self.packageType.text = "Dual Fuel";
                    self.packageType.value = "pkg1";
                    setTimeout(self.setupCeeTierDDL.bind(self), 200);
                    self.region = null;
                    self.txv.value = "T";
                    self.indoorUnitType = null;
                }
                else {
                    setTimeout(self.setupRegionDLL.bind(self), 200);
                    setTimeout(self.setupCeeTierDDL.bind(self), 200);
                }
            }
        });
        setTimeout(function () {
            var outDoorUnitTypeDDL = jQuery("#outDoorUnitTypeDDL").data("kendoDropDownList");
            outDoorUnitTypeDDL.select(0);
            outDoorUnitTypeDDL.trigger("change");
        }, 200);
        //var outDoorUnitTypeDDL = jQuery("#outDoorUnitTypeDDL").data("kendoDropDownList");
        //outDoorUnitTypeDDL.select(0);
        //outDoorUnitTypeDDL.trigger("change");
        setTimeout(self.setupCeeTierDDL.bind(self), 200);
        setTimeout(self.setupRegionDLL.bind(self), 200);
        setTimeout(self.setupTonnageDDL.bind(self), 200);
        //self.setupTonnageDDL();
    };
    UnitaryMatchupComponent.prototype.setupOutdoorModelAutoComplete = function () {
        var self = this;
        jQuery("#outdoorModelAutoComplete").kendoAutoComplete({
            filter: "contains",
            placeholder: " Enter model#",
            minLength: 2,
            dataSource: [],
            change: function (e) {
                var value = this.value();
                self.outdoorModelNumber = value;
                // need to reset indoor DDLs
                self.indoorUnitType = null;
            }
        });
        jQuery("#outdoorModelAutoComplete").keyup(function (e) {
            var _this = this;
            if (this.value.toString().length >= 2) {
                if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) { //up or down or enter
                    //debugger
                    var params = {
                        "user": "",
                        "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                        "packageName": "SystemMatchupDaikin",
                        "servicesName": "doGetEqModelList",
                        "accountId": "goodman1",
                        "params": {
                            "model": "N",
                            "type": self.outDoorUnitType,
                            "modelnumber": this.value,
                            "pkgtype": self.packageType.value,
                            "region": self.region
                        }
                    };
                    self.unitaryMatchupSvc.getEqModelList(params).then(function (resp) {
                        if (!resp.error) {
                            var dataSrc = resp.result.modelList;
                            if (dataSrc.length > 0) {
                                // update outdoorModelDLL DataSource
                                var outdoorModelDLL = jQuery("#outdoorModelAutoComplete").data("kendoAutoComplete");
                                outdoorModelDLL.setDataSource(dataSrc);
                                outdoorModelDLL.search(_this.value);
                            }
                            else {
                                self.toastrSvc.ErrorFadeOut("Model# does not match with selected type and brand");
                            }
                        }
                    });
                }
            }
        }); // end of outdoorModelAutoComplete keyUp
    };
    UnitaryMatchupComponent.prototype.setupCeeTierDDL = function () {
        var self = this;
        var ceeTierDS = {};
        if (this.outDoorUnitType == "pkg") {
            ceeTierDS = [
                { "text": "No Preference", value: "b4" },
                { "text": "CEE Tier 1", value: "b1" },
                { "text": "CEE Tier 2", value: "b2" }
            ];
        }
        else {
            ceeTierDS = [
                { "text": "No Preference", value: "b4" },
                { "text": "CEE Tier 0", value: "b0" },
                { "text": "CEE Tier 1", value: "b1" },
                { "text": "CEE Tier 2", value: "b2" },
                { "text": "CEE Tier 3", value: "b3" }
            ];
        }
        jQuery("#ceeTierDDL").kendoDropDownList({
            dataSource: ceeTierDS,
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.ceeTier = value;
                self.onCEETierChange();
            }
        });
    };
    UnitaryMatchupComponent.prototype.setupRegionDLL = function () {
        var self = this;
        this.regions = [
            { "text": "North", value: "north" },
            { "text": "SouthEast", value: "se" },
            { "text": "SouthWest", value: "sw" }
        ];
        jQuery("#regionDDL").kendoDropDownList({
            dataSource: self.regions,
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.region = value;
                if (value == 'se') {
                    self.minSEER = "14";
                }
                else {
                    self.minSEER = "13";
                }
            }
        });
        var regionDDL = jQuery("#regionDDL").data("kendoDropDownList");
        regionDDL.select(0);
        regionDDL.trigger("change");
    };
    UnitaryMatchupComponent.prototype.setupTonnageDDL = function () {
        var self = this;
        //this.unitaryMatchupSvc.getTonnageList().then((resp: any) => {
        //    if (resp) {
        //        var tonnageList = resp.result.tonnageList;
        //        //debugger
        //        let tonnageListDataSrc: any = [];
        //        for (var i in tonnageList) {
        //            var obj = {
        //                "text": tonnageList[i],
        //                "value": tonnageList[i]
        //            }
        //            //debugger
        //            tonnageListDataSrc.push(obj);
        //        }
        //        if (jQuery("#tonnageDDL").length > 0) {
        //            jQuery("#tonnageDDL").kendoDropDownList({
        //                dataSource: tonnageListDataSrc,
        //                dataTextField: "text",
        //                dataValueField: "value",
        //                optionLabel: {
        //                    text: "Select ...",
        //                    value: null
        //                },
        //                change: function (e) {
        //                    var value = this.value();
        //                    self.tonnage = value;
        //                    //debugger
        //                }
        //            });
        //            //debugger
        //            var tonnageDDL = jQuery("#tonnageDDL").data("kendoDropDownList");
        //            tonnageDDL.select(0);
        //            tonnageDDL.trigger("change");
        //        }
        //    }
        //});
        var tonnageListDataSrc = [];
        for (var i in this.tonnageList) {
            var obj = {
                "text": this.tonnageList[i],
                "value": this.tonnageList[i]
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
    };
    UnitaryMatchupComponent.prototype.setupRadioButtons = function () {
        this.model = "N";
        this.ceeTier = "b4";
        this.txv.value = "T";
        this.status.value = "S";
    };
    UnitaryMatchupComponent.prototype.onCEETierChange = function () {
        if (this.outDoorUnitType == "ac") {
            if (this.ceeTier == 'b4') {
                this.minSEER = 13;
                this.minEER = "";
                //this.minHSPF = "";
                jQuery('#minSEER').removeProp('readonly');
                jQuery('#minEER').removeProp('readonly');
            }
            else if (this.ceeTier == 'b0') {
                this.minSEER = 14.5;
                this.minEER = 12;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 13;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b3') {
                this.minSEER = 18;
                this.minEER = 13;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
            }
        }
        else if (this.outDoorUnitType == "hp") {
            if (this.ceeTier == 'b4') {
                this.minSEER = 14;
                this.minEER = "";
                this.minHSPF = "";
                jQuery('#minSEER').removeProp('readonly');
                jQuery('#minEER').removeProp('readonly');
                jQuery('#minHSPF').removeProp('readonly');
            }
            else if (this.ceeTier == 'b0') {
                this.minSEER = 14.5;
                this.minEER = 12;
                this.minHSPF = 8.5;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                this.minHSPF = 8.5;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 13;
                this.minHSPF = 9;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b3') {
                this.minSEER = 18;
                this.minEER = 13;
                this.minHSPF = 10;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
        }
        else if (this.outDoorUnitType == "pkg") {
            if (this.ceeTier == 'b4') {
                this.minSEER = 14;
                this.minEER = "";
                this.minHSPF = "";
                jQuery('#minSEER').removeProp('readonly');
                jQuery('#minEER').removeProp('readonly');
                jQuery('#minHSPF').removeProp('readonly');
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                this.minHSPF = 8.2;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 12;
                this.minHSPF = 8.2;
                jQuery('#minSEER').prop('readonly', true);
                jQuery('#minEER').prop('readonly', true);
                jQuery('#minHSPF').prop('readonly', true);
            }
        }
    };
    UnitaryMatchupComponent.prototype.resetIndoorUnit = function () {
        //this function get called before value is bound to model
        this.coil = null;
        this.furnace = null;
        this.minAFUE = { text: "Select ...", value: null };
        this.maxAFUE = { text: "Select ...", value: null };
        this.flushfit = null;
        this.airHandler = null;
        this.indoorUnitType = null;
    };
    UnitaryMatchupComponent.prototype.indoorUnitTypeOnChange = function () {
        if (this.model == 'Y') {
            this.coilModelNumber = null;
            this.furnaceModelNumber = null;
            this.furnaceCoilModelNumber = null;
            this.airHandlerModelNumber = null;
            this.airHandlerBlowerModelNumber = null;
            if (this.outdoorModelNumber != null && this.outdoorModelNumber != "") {
                if (this.indoorUnitType == 'coilOnly') {
                    //wait until element is available
                    setTimeout(this.setupCoilDDL.bind(this), 200); // wait 0.2 sec
                }
                if (this.indoorUnitType == 'furnaceCoil') {
                    //wait until element is available
                    setTimeout(this.setupFurnaceDDL.bind(this), 200); // wait 0.2 sec
                }
                if (this.indoorUnitType == 'airHandler') {
                    //wait until element is available
                    setTimeout(this.setupAirHandlerDDL.bind(this), 200); // wait 0.2 sec
                }
            }
            else {
                this.indoorUnitType = null;
                this.toastrSvc.ErrorFadeOut("Please Enter Outdoor Unit Model Number");
                var indoorUnitTypeRadios = document.getElementsByName("indoorUnitType");
                for (var i = 0; i < indoorUnitTypeRadios.length; i++) {
                    //indoorUnitTypeRadios[i].checked = false
                    jQuery(indoorUnitTypeRadios[i]).prop('checked', false);
                }
            }
        }
        if (this.model == 'N') {
            //reset
            this.coil = null;
            this.furnace = null;
            this.minAFUE = { text: "Select ...", value: null };
            this.maxAFUE = { text: "Select ...", value: null };
            this.flushfit = null;
            this.airHandler = null;
            if (this.indoorUnitType == 'coilOnly') {
                this.coil = 'coil';
            }
            if (this.indoorUnitType == 'furnaceCoil') {
                this.furnace = 'furnace';
            }
            if (this.indoorUnitType == 'airHandler') {
                this.airHandler = 'airhandler';
            }
        }
    };
    UnitaryMatchupComponent.prototype.setupCoilDDL = function () {
        var self = this;
        if (this.outdoorModelNumber != null) {
            var coilListDataSrc = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: self.unitaryMCToolURL,
                        type: "post",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            "user": "",
                            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                            "packageName": "SystemMatchupDaikin",
                            "servicesName": "doGetEqCoilList",
                            "accountId": "goodman1",
                            "params": {
                                "type": self.outDoorUnitType,
                                "modelnumber": self.outdoorModelNumber
                            }
                        }
                    },
                    parameterMap: function (data, operation) {
                        if (operation == "read") {
                            return kendo.stringify(data);
                        }
                    }
                },
                schema: {
                    data: "result.coilList"
                }
            });
            if (jQuery("#coilDDL").length > 0) {
                jQuery("#coilDDL").kendoDropDownList({
                    dataSource: coilListDataSrc,
                    optionLabel: "Select...",
                    dataTextField: "coill_Model",
                    dataValueField: "coill_Model",
                    change: function (e) {
                        var value = this.value();
                        self.coilModelNumber = value;
                    }
                });
                //debugger
                //var tonnageDDL = jQuery("#tonnageDDL").data("kendoDropDownList");
                //tonnageDDL.select(0);
                //tonnageDDL.trigger("change");
            }
        }
    };
    UnitaryMatchupComponent.prototype.setupFurnaceDDL = function () {
        var self = this;
        if (this.outdoorModelNumber != null) {
            var furnaceListDataSrc = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: self.unitaryMCToolURL,
                        type: "post",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            "user": "",
                            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                            "packageName": "SystemMatchupDaikin",
                            "servicesName": "doGetEqFurnaceList",
                            "accountId": "goodman1",
                            "params": {
                                "type": self.outDoorUnitType,
                                "modelnumber": self.outdoorModelNumber
                            }
                        }
                    },
                    parameterMap: function (data, operation) {
                        if (operation == "read") {
                            return kendo.stringify(data);
                        }
                    }
                },
                schema: {
                    data: "result.furnaceList"
                }
            });
            if (jQuery("#furnaceDDL").length > 0) {
                jQuery("#furnaceDDL").kendoDropDownList({
                    dataSource: furnaceListDataSrc,
                    optionLabel: "Select...",
                    dataTextField: "furnace_Model",
                    dataValueField: "furnace_Model",
                    change: function (e) {
                        var value = this.value();
                        self.furnaceModelNumber = value;
                        if (self.furnaceModelNumber != null) {
                            setTimeout(self.setupFurnaceCoilDDL.bind(self), 200);
                        }
                    }
                });
            }
        }
    };
    UnitaryMatchupComponent.prototype.setupFurnaceCoilDDL = function () {
        var self = this;
        if (this.outdoorModelNumber != null && this.furnaceModelNumber != null) {
            var furnaceCoilListDataSrc = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: self.unitaryMCToolURL,
                        type: "post",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            "user": "",
                            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                            "packageName": "SystemMatchupDaikin",
                            "servicesName": "doGetEqFurnaceCoilList",
                            "accountId": "goodman1",
                            "params": {
                                "type": self.outDoorUnitType,
                                "modelnumber": self.outdoorModelNumber,
                                "furnace": self.furnaceModelNumber
                            }
                        }
                    },
                    parameterMap: function (data, operation) {
                        if (operation == "read") {
                            return kendo.stringify(data);
                        }
                    }
                },
                schema: {
                    data: "result.furnaceCoilList"
                }
            });
            if (jQuery("#furnaceCoilDDL").length > 0) {
                jQuery("#furnaceCoilDDL").kendoDropDownList({
                    dataSource: furnaceCoilListDataSrc,
                    optionLabel: "Select...",
                    dataTextField: "coill_Model",
                    dataValueField: "coill_Model",
                    change: function (e) {
                        var value = this.value();
                        self.furnaceCoilModelNumber = value; // this might be bound to coilModelNumber instead
                    }
                });
            }
        }
    };
    UnitaryMatchupComponent.prototype.setupAirHandlerDDL = function () {
        var self = this;
        if (this.outdoorModelNumber != null) {
            var airHandlerListDataSrc = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: self.unitaryMCToolURL,
                        type: "post",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            "user": "",
                            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                            "packageName": "SystemMatchupDaikin",
                            "servicesName": "doGetEqAirHandlerList",
                            "accountId": "goodman1",
                            "params": {
                                "type": self.outDoorUnitType,
                                "modelnumber": self.outdoorModelNumber
                            }
                        }
                    },
                    parameterMap: function (data, operation) {
                        if (operation == "read") {
                            return kendo.stringify(data);
                        }
                    }
                },
                schema: {
                    data: "result.airhandlerList"
                }
            });
            if (jQuery("#airHandlerDDL").length > 0) {
                jQuery("#airHandlerDDL").kendoDropDownList({
                    dataSource: airHandlerListDataSrc,
                    optionLabel: "Select...",
                    dataTextField: "coill_Model",
                    dataValueField: "coill_Model",
                    change: function (e) {
                        var value = this.value();
                        self.airHandlerModelNumber = value;
                        if (self.airHandlerModelNumber != null) {
                            setTimeout(self.setupAirHandlerBlowerDDL.bind(self), 200);
                        }
                    }
                });
            }
        }
    };
    UnitaryMatchupComponent.prototype.setupAirHandlerBlowerDDL = function () {
        var self = this;
        if (this.outdoorModelNumber != null && this.airHandlerModelNumber != null) {
            var airHandlerBlowerListDataSrc = new kendo.data.DataSource({
                transport: {
                    read: {
                        url: self.unitaryMCToolURL,
                        type: "post",
                        contentType: "application/json",
                        dataType: "json",
                        data: {
                            "user": "",
                            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
                            "packageName": "SystemMatchupDaikin",
                            "servicesName": "doGetEqAirHandlerBlowerList",
                            "accountId": "goodman1",
                            "params": {
                                "type": self.outDoorUnitType,
                                "modelnumber": self.outdoorModelNumber,
                                "airhandler": self.airHandlerModelNumber
                            }
                        }
                    },
                    parameterMap: function (data, operation) {
                        if (operation == "read") {
                            return kendo.stringify(data);
                        }
                    }
                },
                schema: {
                    data: "result.airhandlerBlowerList"
                }
            });
            if (jQuery("#airHandlerBlowerDDL").length > 0) {
                jQuery("#airHandlerBlowerDDL").kendoDropDownList({
                    dataSource: airHandlerBlowerListDataSrc,
                    optionLabel: "Select...",
                    dataTextField: "blower_Model",
                    dataValueField: "blower_Model",
                    change: function (e) {
                        var value = this.value();
                        self.airHandlerBlowerModelNumber = value;
                    }
                });
            }
        }
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], UnitaryMatchupComponent.prototype, "blockUI", void 0);
    UnitaryMatchupComponent = __decorate([
        core_1.Component({
            selector: 'unitary-matchup',
            templateUrl: './unitary-matchup.component.html',
            styleUrls: ['./unitary-matchup.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            user_service_1.UserService, webconfig_service_1.WebConfigService,
            toastr_service_1.ToastrService, product_service_1.ProductService,
            basket_service_1.BasketService, unitary_matchup_service_1.UnitaryMatchupService])
    ], UnitaryMatchupComponent);
    return UnitaryMatchupComponent;
}());
exports.UnitaryMatchupComponent = UnitaryMatchupComponent;
;
//# sourceMappingURL=unitary-matchup.component.js.map