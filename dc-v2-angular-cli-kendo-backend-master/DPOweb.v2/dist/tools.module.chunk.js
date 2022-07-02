webpackJsonp(["tools.module"],{

/***/ "../../../../../src/app/tools/components/lc-split-matchup/lc-split-matchup.component.html":
/***/ (function(module, exports) {

module.exports = "<basket id=\"userBasket\" [userBasket]=\"userBasket\"></basket>\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">\r\n        <h4>Split System Matchup</h4>\r\n        <div *ngIf=\"isAuthenticated\" id=\"splitSystemConfiguratorTool\">\r\n            <div class=\"row\" id=\"systemConfigForm\">\r\n                <!--Instructions-->\r\n                <div class=\"col col-md-3 col-xs-12\">\r\n                    <fieldset>\r\n                        <legend style=\"font-weight:bold\">INSTRUCTIONS</legend>\r\n                        <table>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td class=\"UserHeaderTd\">How to use this configurator:</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">1. Select outdoor unit information</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">2. Select indoor unit information</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">3. Click \"show results\"</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">4. Before using System Configurator, please read the Terms and Conditions information.</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">5. By using System Configurator, you are in agreement with all <a href=\"/SystemMatchups-Daikin/disclaimer.jsp\">Terms and Conditions</a></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td></td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td class=\"UserText\">\r\n                                        <b>Note:</b><br /> If your matchup does not show up in System Configurator, it may have been archived.  You can submit a request to retrieve archived certifications by filling out a request form through AHRI, which can be accessed in the link below.  Note that additional fields will appear as you complete the form.  Please allow at least 3 business days for AHRI to process your request.<br>\r\n                                        <a href=\"https://www.ahridirectory.org/ahridirectory/pages/Techsupport/support.aspx\">https://www.ahridirectory.org</a>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </fieldset>\r\n                </div>\r\n\r\n\r\n                <!--Search Form-->\r\n                <div class=\"col col-md-9 col-xs-12 form-horizontal\" style=\"font-size:small; padding-left: 50px;\">\r\n\r\n                    <fieldset>\r\n                        <legend style=\"font-weight:bold\">\r\n                            OUTDOOR UNIT\r\n                        </legend>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"row configToolRow\">\r\n                                <!--Outdoor Unit Type-->\r\n                                <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                                    <label class=\"col col-md-6 configToolLabel control-label\" for=\"outDoorUnitTypeDDL\">Unit Type:<font color=\"red\">*</font></label>\r\n                                    <div class=\"col col-md-6\">\r\n                                        <select id=\"outDoorUnitTypeDDL\"></select>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <!--Outdoor Unit - Search By System Needs-->\r\n                        <div class=\"row\">\r\n\r\n                            <div>\r\n                                <div style=\"padding-left:50px; color:#656565; text-decoration: underline\">UNIT CRITERIA</div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row configToolRow\">\r\n                                <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                                    <div class=\"col col-md-6 configToolLabel control-label\">Tonnage:<font color=\"red\">*</font></div>\r\n                                    <div class=\"col col-md-6\">\r\n                                        <select id=\"tonnageDDL\"></select>\r\n                                    </div>\r\n                                </div>\r\n\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                            <!--Temporary disabled-->\r\n                            <!--<div class=\"col col-md-6 configToolLabel control-label\">Voltage:</div>\r\n                            <div class=\"col col-md-6\">\r\n                                <kendo-dropdownlist [data]=\"voltageOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    [(ngModel)]=\"voltage\">\r\n                                </kendo-dropdownlist>\r\n                            </div>-->\r\n                        </div>\r\n                    </div>\r\n                    <div [hidden]=\"tonnage > 5\" class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                        <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">SEER:<font color=\"red\">*</font></div>\r\n                        <div class=\"col col-md-10 col-xs-12\">\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minSEER\" [(ngModel)]=\"minSEER\" style=\"width: 100px\" /></span>\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxSEER\" [(ngModel)]=\"maxSEER\" style=\"width: 100px\" /></span>\r\n                        </div>\r\n                    </div>\r\n\r\n                            <div *ngIf=\"tonnage > 5\" class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                                <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">IEER:<font color=\"red\">*</font></div>\r\n                                <div class=\"col col-md-10 col-xs-12\">\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minIEER\" [(ngModel)]=\"minIEER\" style=\"width: 100px\" /></span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxIEER\" [(ngModel)]=\"maxIEER\" style=\"width: 100px\" /></span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                                <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">EER:</div>\r\n                                <div class=\"col col-md-10 col-xs-12\">\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minEER\" [(ngModel)]=\"minEER\" style=\"width: 100px\" /></span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxEER\" [(ngModel)]=\"maxEER\" style=\"width: 100px\" /></span>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\" *ngIf=\"outDoorUnitType == 'hp'\">\r\n                                <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">HSPF:</div>\r\n                                <div class=\"col col-md-10 col-xs-12\">\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minHSPF\" [(ngModel)]=\"minHSPF\" style=\"width: 100px\" /></span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxHSPF\" [(ngModel)]=\"maxHSPF\" style=\"width: 100px\" /></span>\r\n\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row configToolRow\">\r\n                                <div class=\"col col-md-4  col-xs-12 form-group\">\r\n                                    <div class=\"col col-md-6 col-xs-12 configToolLabel control-label\">TXV:</div>\r\n                                    <div class=\"col col-md-6 col-xs-12\">\r\n                                        <kendo-dropdownlist [data]=\"txvOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                            [(ngModel)]=\"txv\">\r\n                                        </kendo-dropdownlist>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row configToolRow\">\r\n                                <div class=\"col col-md-4  col-xs-12 form-group\">\r\n                                    <div class=\"col col-md-6 col-xs-12 configToolLabel control-label\">Status:</div>\r\n                                    <div class=\"col col-md-6 col-xs-12\">\r\n                                        <kendo-dropdownlist [data]=\"statusOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                            [(ngModel)]=\"status\">\r\n                                        </kendo-dropdownlist>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--</fieldset>-->\r\n\r\n\r\n                        </div>\r\n                    </fieldset>\r\n\r\n\r\n                    <!--Indoor Unit - Search By System Needs-->\r\n                    <div>\r\n                        <fieldset>\r\n                            <legend style=\"font-weight:bold\">\r\n                                INDOOR UNIT\r\n                            </legend>\r\n                            <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                                <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">Unit Type:<font color=\"red\">*</font></div>\r\n                                <div class=\"col col-md-10 col-xs-12\">\r\n                                    <div class=\"row\">\r\n                                        <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"coilOnly\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Coil(only)</span>\r\n                                        <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"airHandler\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Air Handler</span>\r\n                                    </div>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n\r\n\r\n                        </fieldset>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <!--Show result/ reset-->\r\n                    <div class=\"form-group\">\r\n                        <div class=\"pull-right\">\r\n                            <button id=\"showResultBtn\" type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult()\">Show Result</button>\r\n                            <button id=\"resetBtn\" class=\"btn btn-default\" (click)=\"reset()\">Reset</button>\r\n\r\n                            <!--<button id=\"testBtn\" class=\"btn btn-default\" (click)=\"getEqModelList()\">Test</button>-->\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <div id=\"splitMatchupResultGrid\">\r\n                <split-matchup-master-grid *ngIf=\"matchupResult\" [matchupResult]=\"matchupResult\" [indoorUnitType]=\"indoorUnitType\" [outDoorUnitType]=\"outDoorUnitType\" [userBasket]=\"userBasket\"></split-matchup-master-grid>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/tools/components/lc-split-matchup/lc-split-matchup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LCSplitMatchupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lc_split_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/lc-split-matchup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { SortDescriptor } from '@progress/kendo-data-query';


var LCSplitMatchupComponent = /** @class */ (function () {
    function LCSplitMatchupComponent(route, toastrSvc, userSvc, basketSvc, LCSplitMatchupSvc) {
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.basketSvc = basketSvc;
        this.LCSplitMatchupSvc = LCSplitMatchupSvc;
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
        console.log("split system config: OnChange");
    };
    LCSplitMatchupComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("split system config: OnInit");
        this.userSvc.isAuthenticated().then(function (resp) {
            if (resp.isok && resp.model == true) {
                _this.isAuthenticated = true;
            }
            else {
                //Go back to login page
                window.location.href = "/v2/#/login";
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
    LCSplitMatchupComponent.prototype.ngAfterViewChecked = function () {
        console.log("split system config: AfterViewChecked");
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
            this.LCSplitMatchupSvc.getSystemMatchupList(params).then(function (resp) {
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
    //public getSystemMatchupListCallBack(resp: any) {
    //    if (!resp.error) {
    //        var result = resp.result;
    //        let data: any = [];
    //        for (var key in result) {
    //            if (!result.hasOwnProperty(key)) continue;
    //            var obj = result[key];
    //            data = data.concat(obj);
    //        }
    //        this.matchupResult = data;
    //    }
    //}
    LCSplitMatchupComponent.prototype.getTonnageList = function () {
        //this.SystemConfiguratorSvc.getTonnageList().then((resp: any) => {
        //    if (resp) {
        //        var tonnageList = resp;
        //        debugger
        //    }
        //});
    };
    LCSplitMatchupComponent.prototype.getEqModelList = function () {
        //Test api
        //this.SystemConfiguratorSvc.getEqModelList({}).then((resp: any) => {
        //    if (!resp.error) {
        //        var list = resp.result.modelList;
        //        debugger
        //    }
        //});
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
        this.LCSplitMatchupSvc.getTonnageList().then(function (resp) {
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
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], LCSplitMatchupComponent.prototype, "blockUI", void 0);
    LCSplitMatchupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'lc-split-matchup',
            template: __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/lc-split-matchup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* BasketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_lc_split_matchup_service__["a" /* LCSplitMatchupService */]])
    ], LCSplitMatchupComponent);
    return LCSplitMatchupComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/tools/components/lc-split-matchup/split-matchup-detail-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid id=\"split-matchup-detail-grid\" *ngIf=\"matchupResultDetail\"\r\n            [data]=\"gridViewData\"\r\n            [pageSize]=\"pageSize\"\r\n            [skip]=\"skip\"\r\n            [sortable]=\"true\"\r\n            [sort]=\"sort\"\r\n            [pageable]=\"true\"\r\n            [scrollable]=\"'none'\"\r\n            (dataStateChange)=\"dataStateChange($event)\">\r\n    <kendo-grid-column field=\"arirefNumber\" title=\"AHRI\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"outdoor_Model\" title=\"Outdoor Model\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'coilOnly'\" field=\"coill_Model\" title=\"Coil\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'airHandler'\" field=\"coill_Model\" title=\"Coil/AirHandler\"></kendo-grid-column>\r\n   \r\n\r\n    <!--Blower-->\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'airHandler'\" field=\"blower_Model\" title=\"Blower\"></kendo-grid-column>\r\n\r\n\r\n    <kendo-grid-column field=\"tonnage\" title=\"Tonnage\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType != 'pkg'\" field=\"txv\" title=\"TXV/Piston\"></kendo-grid-column>\r\n\r\n    <!--Add To Quote-->\r\n    <kendo-grid-column *ngIf=\"userBasket.quoteId != 0 && userBasket.quoteId != undefined\" field=\"quantity\" title=\"Quantity\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span>\r\n                <input class=\"numericTextBox productQuantity\" type=\"number\" [(ngModel)]=\"dataItem.quantity\" (change)=\"validateQuantity($event)\" min=\"0\" step=\"1\" style=\"width:70px; line-height:30px; font-size:1.2em; text-align: center;\" />\r\n            </span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"userBasket.quoteId != 0 && userBasket.quoteId != undefined\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span>\r\n                <button class=\"btn btn-default\" (click)=\"addToQuote(dataItem)\">Add To Quote</button>\r\n            </span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <!-------------->\r\n\r\n    <kendo-grid-column field=\"seer\" title=\"SEER\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"eer\" title=\"EER\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"cooling\" title=\"Cooling\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"fit\" title=\"Fit\"></kendo-grid-column>\r\n   \r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"highHeat\" title=\"High Heat\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"highCop\" title=\"High COP\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"hspf\" title=\"HSPF\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"lowHeat\" title=\"Low Heat\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"lowCop\" title=\"Low COP\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"status\" title=\"Status\"></kendo-grid-column>\r\n\r\n\r\n\r\n\r\n\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/tools/components/lc-split-matchup/split-matchup-detail-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitMatchupDetailGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lc_split_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/lc-split-matchup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//split-matchup-detail-grid.component.ts





var SplitMatchupDetailGridComponent = /** @class */ (function () {
    function SplitMatchupDetailGridComponent(toastrSvc, userSvc, productSvc, LCSplitMatchupSvc, basketSvc) {
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.LCSplitMatchupSvc = LCSplitMatchupSvc;
        this.basketSvc = basketSvc;
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
        this.defaultItem = { text: "Select item...", value: null, fit: "N/A", afue: "N/A" };
    }
    SplitMatchupDetailGridComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    SplitMatchupDetailGridComponent.prototype.dataStateChange = function (_a) {
        var skip = _a.skip, take = _a.take, sort = _a.sort;
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;
        this.loadData();
    };
    SplitMatchupDetailGridComponent.prototype.loadData = function () {
        for (var key in this.matchupResultDetail) {
            if (!this.matchupResultDetail[key].furnace_Model) {
                this.matchupResultDetail[key].showFurnaceDDL = true;
            }
            else {
                this.matchupResultDetail[key].showFurnaceDDL = false;
            }
            //add quantity field
            if (this.matchupResultDetail.hasOwnProperty(key)) {
                this.matchupResultDetail[key].quantity = 0;
            }
        }
        if (this.matchupResultDetail != undefined) {
            this.gridViewData = {
                data: this.matchupResultDetail.slice(this.skip, this.skip + this.pageSize),
                total: this.matchupResultDetail.length
            };
        }
    };
    //public FurnaceSelected(selectedItem: any, rowIndex: any) {
    //    var fitValueCellId = "#fitValue-" + rowIndex;
    //    $(fitValueCellId).text(selectedItem.fit);
    //    var afueValueCellId = "#afueValue-" + rowIndex;
    //    $(afueValueCellId).text(selectedItem.afue);
    //}
    SplitMatchupDetailGridComponent.prototype.validateQuantity = function (event) {
        var value = parseFloat(event.target.value);
        if (value == null || isNaN(value)) {
            //this.product.quantity = 0;
            event.target.value = 0;
        }
        else if ((value < 0) || (Math.floor(value) != value)) {
            //this.product.quantity = 0;
            event.target.value = 0;
            this.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        }
    };
    SplitMatchupDetailGridComponent.prototype.addToQuote = function (item) {
        var self = this;
        var outdoorModel = item.outdoor_Model.substring(0, item.outdoor_Model.length - 2);
        var coilModel = item.coill_Model.substring(0, item.coill_Model.length - 2);
        if (item.quantity > 0) {
            self.system = {
                "ProductNumbers": [outdoorModel, coilModel],
                "Quantity": item.quantity,
                "AHRI": item.arirefNumber,
                "SEER": item.seer,
                "EER": item.eer,
                "Cooling": item.cooling,
                "Fit": item.fit,
                "AFUE": item.afue,
                "ContinueAdding": false,
                "ValidProducts": [],
                "InValidProducts": []
            };
            if (this.indoorUnitType = "airHandler") {
                if (item.blower_Model != null && item.blower_Model != "") {
                    var blowerModel = item.blower_Model.substring(0, item.blower_Model.length - 2);
                    self.system.ProductNumbers.push(blowerModel);
                }
            }
            this.addSystemToQuote(self.system);
        }
        else {
            this.toastrSvc.Info("Please enter quantity!");
        }
        item.quantity = 0;
    };
    SplitMatchupDetailGridComponent.prototype.addSystemToQuote = function (system) {
        var _this = this;
        var self = this;
        this.blockUI.start('Loading...');
        this.productSvc.addSystemToQuote(system).then(function (resp) {
            _this.blockUI.stop();
            if (resp.isok) {
                //update basket item count
                self.basketSvc.getBasket().then(function (resp) {
                    if (resp.isok) {
                        self.basketSvc.userBasket = resp.model;
                        __WEBPACK_IMPORTED_MODULE_4_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                    }
                });
                self.toastrSvc.displayResponseMessages(resp); //all products added successfully
            }
            else {
                if (resp.model.validProducts.length > 0) {
                    var validproducts = "";
                    for (var i = 0; i < resp.model.validProducts.length; i++) {
                        if (i < resp.model.validProducts.length - 1) {
                            validproducts += resp.model.validProducts[i] + ", ";
                        }
                        else {
                            validproducts += resp.model.validProducts[i];
                        }
                    }
                    var inValidProducts = "";
                    for (var i = 0; i < resp.model.inValidProducts.length; i++) {
                        if (i < resp.model.inValidProducts.length - 1) {
                            inValidProducts += resp.model.inValidProducts[i] + ", ";
                        }
                        else {
                            inValidProducts += resp.model.inValidProducts[i];
                        }
                    }
                    bootbox.confirm("Can not find: " + inValidProducts + " <br/>Do you want continue adding " + validproducts + " to quote?", function (result) {
                        var _this = this;
                        if (result) {
                            self.system.ContinueAdding = true;
                            //Continue adding valid products
                            this.blockUI.start('Loading...');
                            self.productSvc.addSystemToQuote(self.system).then(function (resp) {
                                if (resp.isok) {
                                    //update basket item count
                                    self.basketSvc.getBasket().then(function (resp) {
                                        if (resp.isok) {
                                            //self.userBasket = resp.model;
                                            self.basketSvc.userBasket = resp.model;
                                            __WEBPACK_IMPORTED_MODULE_4_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                                        }
                                    });
                                    self.toastrSvc.displayResponseMessages(resp); //products added successfully
                                }
                                _this.blockUI.stop();
                            });
                        }
                    });
                    //self.toastrSvc.displayResponseMessages(resp);// this shows invalid products
                }
                else {
                    self.toastrSvc.displayResponseMessages(resp); // All products are invalid
                }
            }
            //self.toastrSvc.displayResponseMessages(resp);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "matchupResultDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "seer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "indoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "outDoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "userBasket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], SplitMatchupDetailGridComponent.prototype, "blockUI", void 0);
    SplitMatchupDetailGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'split-matchup-detail-grid',
            template: __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/split-matchup-detail-grid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__services_lc_split_matchup_service__["a" /* LCSplitMatchupService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* BasketService */]])
    ], SplitMatchupDetailGridComponent);
    return SplitMatchupDetailGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/lc-split-matchup/split-matchup-master-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <button class=\"btn btn-default pull-right\" (click)=\"backToSearchPage()\" style=\"margin: 10px\">Back To Search Page</button>\r\n</div>\r\n\r\n\r\n<kendo-grid id=\"split-matchup-master-grid\" *ngIf=\"matchupResult\"\r\n            [data]=\"gridViewData\"\r\n            [pageable]=\"false\"\r\n            [scrollable]=\"'none'\">\r\n\r\n    <kendo-grid-column field=\"seer\" title=\"SEER\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <p>{{dataItem.seer}} +</p>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"numberOfItem\" title=\"Available items\"></kendo-grid-column>\r\n\r\n    <ng-template kendoGridDetailTemplate let-dataItem>\r\n        <split-matchup-detail-grid [matchupResultDetail]=\"matchupResult[dataItem.seer]\" [seer]=\"dataItem.seer\" [indoorUnitType]=\"indoorUnitType\" [outDoorUnitType]=\"outDoorUnitType\" [userBasket]=\"userBasket\"></split-matchup-detail-grid>\r\n    </ng-template>\r\n\r\n</kendo-grid>\r\n\r\n\r\n<div class=\"row\">\r\n    <button class=\"btn btn-default pull-right\" (click)=\"backToSearchPage()\" style=\"margin: 10px\">Back To Search Page</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/components/lc-split-matchup/split-matchup-master-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplitMatchupMasterGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplitMatchupMasterGridComponent = /** @class */ (function () {
    function SplitMatchupMasterGridComponent() {
        this.seerCategoriesData = [];
    }
    SplitMatchupMasterGridComponent.prototype.ngOnChanges = function () {
        //console.log("On Change");
        this.loadData();
    };
    SplitMatchupMasterGridComponent.prototype.ngOnInit = function () { };
    //public dataStateChange({ skip, take, sort }: DataStateChangeEvent): void {
    //    this.skip = skip;
    //    this.pageSize = take;
    //    this.sort = sort;
    //    this.loadData();
    //}
    SplitMatchupMasterGridComponent.prototype.loadData = function () {
        this.seerCategoriesData = []; // clear old data
        for (var key in this.matchupResult) {
            if (!this.matchupResult.hasOwnProperty(key))
                continue;
            if (this.matchupResult[key].length > 0) {
                var obj = {
                    "seer": key,
                    "numberOfItem": this.matchupResult[key].length
                };
                this.seerCategoriesData.push(obj);
            }
        }
        if (this.seerCategoriesData != undefined) {
            this.gridViewData = {
                data: this.seerCategoriesData,
                total: this.seerCategoriesData.length
            };
        }
    };
    SplitMatchupMasterGridComponent.prototype.backToSearchPage = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#systemConfigForm').show();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#splitMatchupResultGrid').hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupMasterGridComponent.prototype, "matchupResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupMasterGridComponent.prototype, "indoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupMasterGridComponent.prototype, "outDoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SplitMatchupMasterGridComponent.prototype, "userBasket", void 0);
    SplitMatchupMasterGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'split-matchup-master-grid',
            styles: ['/deep/ .k-grid th.k-header, .k-grid-header { background: #5397cf; color: #fff}'],
            template: __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/split-matchup-master-grid.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SplitMatchupMasterGridComponent);
    return SplitMatchupMasterGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/tool-list/tool-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tool-page-header {\r\n    margin-left: 0;\r\n    font-family: \"museo-sans\",sans-serif;\r\n    font-weight: 900;\r\n    /*white-space: nowrap;*/\r\n    /*text-overflow: ellipsis;\r\n    overflow: hidden;*/\r\n    padding-bottom: 0;\r\n    font-size: 27px;\r\n    color: #00a1e4;\r\n    margin: 15px;\r\n}\r\n\r\n.tool-list {\r\n    list-style: none;\r\n    padding-bottom: 5px;\r\n    -webkit-margin-after: 10px;\r\n    -webkit-margin-before: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-padding-start: 0px;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n}\r\n\r\n.section.form.dark {\r\n    background-color: #def5ff;\r\n    margin-right: 0px;\r\n}\r\n\r\n.col-md-2 {\r\n    width:10%;\r\n}\r\n\r\n.tool-image {\r\n    padding-left:25px;\r\n    padding-top: 20px;\r\n}\r\n\r\n.tool-name {\r\n    color: #00a1e4;\r\n    margin: 0;\r\n    padding: 15px 0 15px 0;\r\n    text-transform: uppercase;\r\n    font-family: \"museo-sans\",sans-serif;\r\n    font-size: 22px;\r\n}\r\n\r\n.tool-description {\r\n    font-size: 15px;\r\n    color: #2e3641;\r\n    line-height: 22.05px;\r\n    font-family: \"museo-sans\",sans-serif;\r\n}\r\n\r\n.tool-anchortag {\r\n    padding-bottom: 20px;\r\n    font-family: \"museo-sans\", sans-serif;\r\n    font-size: 15px;\r\n    line-height: 22.05px;\r\n}\r\n\r\na {\r\n    color: #00a1e4;\r\n    text-decoration: underline;\r\n}\r\n\r\na:focus, a:hover {\r\n    color: #00a1e4;\r\n    text-decoration: underline;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tools/components/tool-list/tool-list.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n<link href=\"/v2/src/assets/css/adminstyles.css\" rel=\"stylesheet\" /> \r\n<link href=\"/v2/src/assets/css/kendo/kendo.default.min.css\" rel=\"stylesheet\" />\r\n\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">\r\n        <div class=\"tab-header\">\r\n            <h3 class=\"tool-page-header\">TOOLS</h3>\r\n        </div>\r\n        <div *ngIf=\"tools.length> 0\">\r\n            <ul class=\"tool-list\" *ngFor=\"let tool of tools\">\r\n                <li class=\"section form dark\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-2\">\r\n                            <a href=\"/document/Tools/{{tool.filename}}\">\r\n                                <img class=\"tool-image\" src=\"/v2/src/assets/images/tools_icon.png\" />\r\n                            </a>\r\n                        </div>\r\n                        <div class=\"col-md-10\">\r\n                            <h4 class=\"tool-name\">{{tool.name}}</h4>\r\n                            <div class=\"tool-description\">{{tool.description}}</div>\r\n                            <br />\r\n                            <div class=\"tool-anchortag\">\r\n                                <span *ngIf=\"tool.clickable == true\">\r\n                                    <a style=\"padding:0;\" href=\"{{tool.accessUrl}}\"> Click here to access</a>\r\n                                </span>\r\n                                <span *ngIf=\"tool.downloadable == true\">\r\n                                    <a style=\"padding:0;\" href=\"/document/Tools/{{tool.filename}}\">Click here to download</a>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/components/tool-list/tool-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_tool_list_service__ = __webpack_require__("../../../../../src/app/tools/services/tool-list.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ToolListComponent = /** @class */ (function () {
    function ToolListComponent(router, route, toolListSvc, webConfigSvc) {
        this.router = router;
        this.route = route;
        this.toolListSvc = toolListSvc;
        this.webConfigSvc = webConfigSvc;
        this.tools = [];
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ToolListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start('Loading...');
        this.webConfigSvc.getWebConfig().then(function (resp) {
            _this.webconfig = resp;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
        this.tools = this.getAllTools();
    };
    ToolListComponent.prototype.getAllTools = function () {
        var _this = this;
        return this.toolListSvc.getTools().subscribe(function (data) {
            _this.tools = data;
            for (var i = 0; i < _this.tools.length; i++) {
                if (_this.tools[i].accessUrl != null) {
                    _this.tools[i].clickable = true;
                    if (_this.tools[i].toolId == 120) {
                        _this.tools[i].accessUrl = _this.webconfig.routeConfig.lcstURL +
                            "&userId=" + _this.user.userId + "&firstName=" + _this.user.firstName +
                            "&lastName=" + _this.user.lastName + "&email=" + _this.user.email;
                    }
                }
                else {
                    _this.tools[i].downloadable = true;
                }
            }
            _this.blockUI.stop();
        }, function (err) {
            console.log(err);
            _this.blockUI.stop();
        });
    };
    ToolListComponent.prototype.convertToSafeHtml = function (description) {
        return;
    };
    ToolListComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ToolListComponent.prototype, "blockUI", void 0);
    ToolListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "tool-list",
            template: __webpack_require__("../../../../../src/app/tools/components/tool-list/tool-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tools/components/tool-list/tool-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__services_tool_list_service__["a" /* ToolListService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["l" /* WebConfigService */]])
    ], ToolListComponent);
    return ToolListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/furnaceDDL.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-dropdownlist [data]=\"furnaceList\" [textField]=\"'text'\" [valueField]=\"'value'\" [defaultItem]=\"defaultItem\" (valueChange)=\"PSCFunarceChange($event)\">\r\n    <ng-template kendoDropDownListItemTemplate let-dataItem>\r\n        <p *ngIf=\"dataItem.value == null\"><span style=\"font-weight:bold\">{{ dataItem.text }} </span></p>\r\n        <p *ngIf=\"dataItem.value != null\"><span style=\"font-weight:bold\">{{ dataItem.text }} </span> <br /> Fit:{{ dataItem.fit }} - AFUE: {{dataItem.afue}}</p>\r\n    </ng-template>\r\n</kendo-dropdownlist>\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/furnaceDDL.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FurnaceDDLComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_unitary_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/unitary-matchup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FurnaceDDLComponent = /** @class */ (function () {
    function FurnaceDDLComponent(unitaryMatchupSvc) {
        this.unitaryMatchupSvc = unitaryMatchupSvc;
        //@Input() seer: any;
        //@Input() indoorUnitType: any;
        //@Input() outDoorUnitType: any;
        //@Input() userBasket: any;
        this.furnaceSelectedEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.furnaceList = [];
        this.defaultItem = { text: "Select item...", value: null, fit: "N/A", afue: "N/A" };
    }
    FurnaceDDLComponent.prototype.ngOnInit = function () {
        var _this = this;
        var t = this.rowItem;
        var s = this.rowIndex;
        var params = this.mapParams();
        this.unitaryMatchupSvc.getEEPFurnaceList(params).then(function (resp) {
            if (!resp.error) {
                var furnaces = resp.result.eEFurnaceMatchUpList;
                for (var i in furnaces) {
                    //decode fit values
                    if (furnaces[i].fit != undefined && furnaces[i].fit != null) {
                        if (furnaces[i].fit == 0) {
                            furnaces[i].fit = "Flush";
                        }
                        else if (furnaces[i].fit == 1) {
                            furnaces[i].fit = "1.75";
                        }
                    }
                    var item = { text: furnaces[i].furnace_Model, value: furnaces[i].furnace_Model, fit: furnaces[i].fit, afue: furnaces[i].afue };
                    _this.furnaceList.push(item);
                }
            }
            else {
            }
        });
    };
    FurnaceDDLComponent.prototype.mapParams = function () {
        var params = {};
        params = {
            "user": "",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikin",
            "servicesName": "doGetEEPFurnacesList",
            "accountId": "goodman1",
            "params": {
                "aRIRefNumber": this.rowItem.arirefNumber,
                "coil": this.rowItem.coill_Model,
                "coilWidth": this.rowItem.coil_Width,
                "coilValue": this.rowItem.coil_Value,
                "airFlow": this.rowItem.airFlow,
                "minAfue": this.rowItem.minAfue == undefined ? "" : this.rowItem.afue,
                "maxAfue": this.rowItem.maxAfue == undefined ? "" : this.rowItem.afue,
                "fit": this.rowItem.fit == "N/A" ? "" : this.rowItem.fit,
                "model": this.rowItem.modelNumber,
                "tonnage": this.rowItem.tonnage,
                "txv": this.rowItem.txv,
                "seer": this.rowItem.seer,
                "eer": this.rowItem.eer,
                "cooling": this.rowItem.cooling,
                "status": this.rowItem.status
            }
        };
        return params;
    };
    FurnaceDDLComponent.prototype.PSCFunarceChange = function (selectedItem) {
        //var eventParams = {
        //    'selectedItem': selectedItem,
        //    'rowItem': this.rowItem,
        //    'rowIndex': this.rowIndex
        //}
        this.rowItem.furnace_Model = selectedItem.value;
        this.furnaceSelectedEvent.emit(selectedItem);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FurnaceDDLComponent.prototype, "rowItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FurnaceDDLComponent.prototype, "rowIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FurnaceDDLComponent.prototype, "furnaceSelectedEvent", void 0);
    FurnaceDDLComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'furnaceDDL',
            template: __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/furnaceDDL.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_unitary_matchup_service__["a" /* UnitaryMatchupService */]])
    ], FurnaceDDLComponent);
    return FurnaceDDLComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/matchup-detail-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid id=\"matchup-detail-grid\" *ngIf=\"matchupResultDetail\"\r\n            [data]=\"gridViewData\"\r\n            [pageSize]=\"pageSize\"\r\n            [skip]=\"skip\"\r\n            [sortable]=\"true\"\r\n            [sort]=\"sort\"\r\n            [pageable]=\"true\"\r\n            [scrollable]=\"'none'\"\r\n            (dataStateChange)=\"dataStateChange($event)\">\r\n    <kendo-grid-column field=\"arirefNumber\" title=\"AHRI\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"outdoor_Model\" title=\"Outdoor Model\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'coilOnly'\" field=\"coill_Model\" title=\"Coil\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'furnaceCoil'\" field=\"coill_Model\" title=\"Coil/AirHandler\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'airHandler'\" field=\"coill_Model\" title=\"Coil/AirHandler\"></kendo-grid-column>\r\n    <!--Furnace DDL-->\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'coilOnly' || indoorUnitType == 'furnaceCoil' \" title=\"Furnace\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <p *ngIf=\"!dataItem.showFurnaceDDL\">{{dataItem.furnace_Model}}</p>\r\n            <furnaceDDL *ngIf=\"dataItem.showFurnaceDDL\" [rowItem]=\"dataItem\" [rowIndex]=\"rowIndex\" (furnaceSelectedEvent)=\"FurnaceSelected($event, rowIndex)\"></furnaceDDL>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <!--Blower3-->\r\n    <kendo-grid-column *ngIf=\"indoorUnitType == 'airHandler'\" field=\"blower_Model\" title=\"Blower\"></kendo-grid-column>\r\n\r\n\r\n    <kendo-grid-column field=\"tonnage\" title=\"Tonnage\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType != 'pkg'\" field=\"txv\" title=\"TXV/Piston\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"seer\" title=\"SEER\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"eer\" title=\"EER\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"cooling\" title=\"Cooling\"></kendo-grid-column>\r\n    <!--<kendo-grid-column class=\"fitValue\" field=\"fit\" title=\"Fit\"></kendo-grid-column>-->\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType != 'pkg'\" class=\"fitValue\" field=\"fit\" title=\"Fit\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span [attr.id]=\"'fitValue-'+rowIndex\">{{dataItem.fit}}</span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n   \r\n    <kendo-grid-column *ngIf=\"outDoorUnitType != 'pkg'\" field=\"afue\" title=\"AFUE\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span [attr.id]=\"'afueValue-'+rowIndex\">{{dataItem.afue}}</span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"highHeat\" title=\"High Heat\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"highCop\" title=\"High COP\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp' || outDoorUnitType == 'pkg'\"  field=\"hspf\" title=\"HSPF\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"lowHeat\" title=\"Low Heat\"></kendo-grid-column>\r\n    <kendo-grid-column *ngIf=\"outDoorUnitType == 'hp'\" field=\"lowCop\" title=\"Low COP\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"status\" title=\"Status\"></kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"userBasket.quoteId != 0 && userBasket.quoteId != undefined\" field=\"quantity\" title=\"Quantity\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span>\r\n                <input class=\"numericTextBox productQuantity\" type=\"number\" [(ngModel)]=\"dataItem.quantity\" (change)=\"validateQuantity($event)\" min=\"0\" step=\"1\" style=\"width:70px; line-height:30px; font-size:1.2em; text-align: center;\" />\r\n            </span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"userBasket.quoteId != 0 && userBasket.quoteId != undefined\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span>\r\n                <button class=\"btn btn-default\" (click)=\"addToQuote(dataItem)\">Add To Quote</button>\r\n            </span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n\r\n\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/matchup-detail-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupDetailGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_unitary_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/unitary-matchup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MatchupDetailGridComponent = /** @class */ (function () {
    function MatchupDetailGridComponent(router, toastrSvc, productSvc, basketSvc, unitaryMatchupSvc) {
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.unitaryMatchupSvc = unitaryMatchupSvc;
        this.sort = [];
        this.pageSize = 10;
        this.skip = 0;
        //public testListItems: any = [
        //    { text: "DM96HS0804CN 3.0", value: "DM96HS0804CN 3.0", fit: 1.75, afue: 96 },
        //    { text: "DC96HS0804CN 3.0", value: "DC96HS0804CN 3.0", fit: 1.75, afue: 96 },
        //    { text: "DC96HS0704CX 3.0", value: "DC96HS0704CX 3.0", fit: 1.75, afue: 96 },
        //    { text: "DC96HS0904CX 3.0", value: "DC96HS0904CX 3.0", fit: 1.75, afue: 96 },
        //    { text: "DK92SS0704CX 3.0", value: "DK92SS0704CX 3.0", fit: 1.75, afue: 90 },
        //    { text: "DK92SS0904CX 3.0", value: "DK92SS0904CX 3.0", fit: 1.75, afue: 90 },
        //    { text: "DM80HS1205DX 3.0", value: "DM80HS1205DX 3.0", fit: "Flush", afue: 80 },
        //    { text: "DM80SS1205DX 3.0", value: "DM80SS1205DX 3.0", fit: "Flush", afue: 80 }
        //];
        this.defaultItem = { text: "Select item...", value: null, fit: "N/A", afue: "N/A" };
    }
    MatchupDetailGridComponent.prototype.ngOnInit = function () {
        this.loadData();
    };
    MatchupDetailGridComponent.prototype.dataStateChange = function (_a) {
        var skip = _a.skip, take = _a.take, sort = _a.sort;
        this.skip = skip;
        this.pageSize = take;
        this.sort = sort;
        this.loadData();
    };
    MatchupDetailGridComponent.prototype.loadData = function () {
        for (var key in this.matchupResultDetail) {
            if (!this.matchupResultDetail[key].furnace_Model) {
                this.matchupResultDetail[key].showFurnaceDDL = true;
            }
            else {
                this.matchupResultDetail[key].showFurnaceDDL = false;
            }
            //add quantity field
            if (this.matchupResultDetail.hasOwnProperty(key)) {
                this.matchupResultDetail[key].quantity = 0;
            }
        }
        if (this.matchupResultDetail != undefined) {
            this.gridViewData = {
                data: this.matchupResultDetail.slice(this.skip, this.skip + this.pageSize),
                total: this.matchupResultDetail.length
            };
        }
    };
    //deprecated
    //public PSCFunarceChange(selectedItem: any, rowIndex: any, dataItem: any) {
    //    var test = selectedItem;
    //    dataItem.furnace_Model = selectedItem.value;
    //    var fitValueCellId = "#fitValue-" + rowIndex;
    //    $(fitValueCellId).text(selectedItem.fit);
    //    var afueValueCellId = "#afueValue-" + rowIndex;
    //    $(afueValueCellId).text(selectedItem.afue);
    //}
    MatchupDetailGridComponent.prototype.FurnaceSelected = function (selectedItem, rowIndex) {
        var fitValueCellId = "#fitValue-" + rowIndex;
        __WEBPACK_IMPORTED_MODULE_5_jquery__(fitValueCellId).text(selectedItem.fit);
        var afueValueCellId = "#afueValue-" + rowIndex;
        __WEBPACK_IMPORTED_MODULE_5_jquery__(afueValueCellId).text(selectedItem.afue);
    };
    MatchupDetailGridComponent.prototype.validateQuantity = function (event) {
        var value = event.target.valueAsNumber;
        if (value == null || isNaN(value)) {
            //this.product.quantity = 0;
            event.target.valueAsNumber = 0;
        }
        else if ((value < 0) || (Math.floor(value) != value)) {
            //this.product.quantity = 0;
            event.target.valueAsNumber = 0;
            this.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        }
    };
    MatchupDetailGridComponent.prototype.addToQuote = function (item) {
        var self = this;
        var outdoorModel = item.outdoor_Model.substring(0, item.outdoor_Model.length - 2);
        var coilModel = item.coill_Model.substring(0, item.coill_Model.length - 2);
        if (item.quantity > 0) {
            self.system = {
                "ProductNumbers": [outdoorModel, coilModel],
                "Quantity": item.quantity,
                "AHRI": item.arirefNumber,
                "SEER": item.seer,
                "EER": item.eer,
                "Cooling": item.cooling,
                "Fit": item.fit,
                "AFUE": item.afue,
                "ContinueAdding": false,
                "ValidProducts": [],
                "InValidProducts": []
            };
            if (this.indoorUnitType = "coilOnly") {
                if (item.furnace_Model != null && item.furnace_Model != "") {
                    if (item.furnace_Model.includes('*')) {
                        var furnaceModel = item.furnace_Model.substring(0, item.furnace_Model.length - 2);
                        self.system.ProductNumbers.push(furnaceModel);
                    }
                    else {
                        var furnaceModel = item.furnace_Model;
                        self.system.ProductNumbers.push(furnaceModel);
                    }
                }
            }
            else if (this.indoorUnitType = "furnaceCoil") {
                if (item.furnace_Model != null && item.furnace_Model != "") {
                    if (item.furnace_Model.includes('*')) {
                        var furnaceModel = item.furnace_Model.substring(0, item.furnace_Model.length - 2);
                        self.system.ProductNumbers.push(furnaceModel);
                    }
                    else {
                        var furnaceModel = item.furnace_Model;
                        self.system.ProductNumbers.push(furnaceModel);
                    }
                }
            }
            else if (this.indoorUnitType = "airHandler") {
                if (item.blower_Model != null && item.blower_Model != "") {
                    var blowerModel = item.blower_Model.substring(0, item.blower_Model.length - 2);
                    self.system.ProductNumbers.push(blowerModel);
                }
            }
            this.addSystemToQuote(self.system);
        }
        else {
            this.toastrSvc.Info("Please enter quantity!");
        }
        item.quantity = 0;
    };
    MatchupDetailGridComponent.prototype.addSystemToQuote = function (system) {
        var _this = this;
        var self = this;
        this.blockUI.start('Loading...');
        this.productSvc.addSystemToQuote(system).then(function (resp) {
            //self.loadingIconSvc.Stop(jQuery("#systemConfiguratorTool"));
            _this.blockUI.stop();
            if (resp.isok) {
                //update basket item count
                self.basketSvc.getBasket().then(function (resp) {
                    if (resp.isok) {
                        self.basketSvc.userBasket = resp.model;
                        __WEBPACK_IMPORTED_MODULE_5_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                    }
                });
                self.toastrSvc.displayResponseMessages(resp); //all products added successfully
            }
            else {
                if (resp.model.validProducts.length > 0) {
                    var validproducts = "";
                    for (var i = 0; i < resp.model.validProducts.length; i++) {
                        if (i < resp.model.validProducts.length - 1) {
                            validproducts += resp.model.validProducts[i] + ", ";
                        }
                        else {
                            validproducts += resp.model.validProducts[i];
                        }
                    }
                    var inValidProducts = "";
                    for (var i = 0; i < resp.model.inValidProducts.length; i++) {
                        if (i < resp.model.inValidProducts.length - 1) {
                            inValidProducts += resp.model.inValidProducts[i] + ", ";
                        }
                        else {
                            inValidProducts += resp.model.inValidProducts[i];
                        }
                    }
                    bootbox.confirm("Can not find: " + inValidProducts + " <br/>Do you want continue adding " + validproducts + " to quote?", function (result) {
                        var _this = this;
                        if (result) {
                            self.system.ContinueAdding = true;
                            //Continue adding valid products
                            // self.loadingIconSvc.Start(jQuery("#systemConfiguratorTool"));
                            this.blockUI.start('Loading...');
                            self.productSvc.addSystemToQuote(self.system).then(function (resp) {
                                if (resp.isok) {
                                    //update basket item count
                                    self.basketSvc.getBasket().then(function (resp) {
                                        if (resp.isok) {
                                            //self.userBasket = resp.model;
                                            self.basketSvc.userBasket = resp.model;
                                            __WEBPACK_IMPORTED_MODULE_5_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                                        }
                                    });
                                    self.toastrSvc.displayResponseMessages(resp); //products added successfully
                                }
                                //self.loadingIconSvc.Stop(jQuery("#systemConfiguratorTool"));
                                _this.blockUI.stop();
                            });
                        }
                    });
                    //self.toastrSvc.displayResponseMessages(resp);// this shows invalid products
                }
                else {
                    self.toastrSvc.displayResponseMessages(resp); // All products are invalid
                }
            }
            //self.toastrSvc.displayResponseMessages(resp);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "matchupResultDetail", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "seer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "indoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "outDoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "userBasket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], MatchupDetailGridComponent.prototype, "blockUI", void 0);
    MatchupDetailGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'matchup-detail-grid',
            template: __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/matchup-detail-grid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["g" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* BasketService */],
            __WEBPACK_IMPORTED_MODULE_4__services_unitary_matchup_service__["a" /* UnitaryMatchupService */]])
    ], MatchupDetailGridComponent);
    return MatchupDetailGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/matchup-master-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <button class=\"btn btn-default pull-right\" (click)=\"backToSearchPage()\" style=\"margin: 10px\">Back To Search Page</button>\r\n</div>\r\n\r\n<!--<kendo-dropdownlist [data]=\"testListItems\">\r\n</kendo-dropdownlist>-->\r\n\r\n\r\n<kendo-grid id=\"matchup-master-grid\" *ngIf=\"matchupResult\"\r\n            [data]=\"gridViewData\"\r\n            [pageable]=\"false\"\r\n            [scrollable]=\"'none'\">\r\n\r\n    <kendo-grid-column field=\"seer\" title=\"SEER\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <p>{{dataItem.seer}} +</p>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column field=\"numberOfItem\" title=\"Available items\"></kendo-grid-column>\r\n\r\n    <ng-template kendoGridDetailTemplate let-dataItem>\r\n        <matchup-detail-grid [matchupResultDetail]=\"matchupResult[dataItem.seer]\" [seer]=\"dataItem.seer\" [indoorUnitType]=\"indoorUnitType\" [outDoorUnitType]=\"outDoorUnitType\" [userBasket]=\"userBasket\"></matchup-detail-grid>\r\n    </ng-template>\r\n\r\n</kendo-grid>\r\n\r\n\r\n<div class=\"row\">\r\n    <button class=\"btn btn-default pull-right\" (click)=\"backToSearchPage()\" style=\"margin: 10px\">Back To Search Page</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/matchup-master-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchupMasterGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchupMasterGridComponent = /** @class */ (function () {
    //public sort: Array<SortDescriptor> = [];
    //public pageSize: number = 15;
    //public skip: number = 0;
    //public testListItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
    function MatchupMasterGridComponent(toastrSvc) {
        this.toastrSvc = toastrSvc;
        this.seerCategoriesData = [];
    }
    MatchupMasterGridComponent.prototype.ngOnChanges = function () {
        this.loadData();
    };
    MatchupMasterGridComponent.prototype.ngOnInit = function () { };
    //public dataStateChange({ skip, take, sort }: DataStateChangeEvent): void {
    //    this.skip = skip;
    //    this.pageSize = take;
    //    this.sort = sort;
    //    this.loadData();
    //}
    MatchupMasterGridComponent.prototype.loadData = function () {
        //if (this.seerCategoriesData != undefined) {
        //    this.gridViewData = {
        //        data: this.seerCategoriesData.slice(this.skip, this.skip + this.pageSize),
        //        total: this.seerCategoriesData.length
        //    };
        //}
        this.seerCategoriesData = []; // clear old data
        for (var key in this.matchupResult) {
            if (!this.matchupResult.hasOwnProperty(key))
                continue;
            if (this.matchupResult[key].length > 0) {
                var obj = {
                    "seer": key,
                    "numberOfItem": this.matchupResult[key].length
                };
                this.seerCategoriesData.push(obj);
            }
        }
        if (this.seerCategoriesData != undefined) {
            this.gridViewData = {
                data: this.seerCategoriesData,
                total: this.seerCategoriesData.length
            };
        }
    };
    MatchupMasterGridComponent.prototype.backToSearchPage = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#systemConfigForm').show();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#matchupResultGrid').hide();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupMasterGridComponent.prototype, "matchupResult", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupMasterGridComponent.prototype, "indoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupMasterGridComponent.prototype, "outDoorUnitType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MatchupMasterGridComponent.prototype, "userBasket", void 0);
    MatchupMasterGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'matchup-master-grid',
            styles: ['/deep/ .k-grid th.k-header, .k-grid-header { background: #5397cf; color: #fff}'],
            template: __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/matchup-master-grid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_index__["i" /* ToastrService */]])
    ], MatchupMasterGridComponent);
    return MatchupMasterGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/unitary-matchup.component.html":
/***/ (function(module, exports) {

module.exports = "<basket id=\"userBasket\" [userBasket]=\"userBasket\"></basket>\r\n\r\n<h4>Unitary System Matchup</h4>\r\n<div id=\"systemConfiguratorTool\">\r\n    <div class=\"row\" id=\"systemConfigForm\">\r\n        <!--Instructions-->\r\n        <div class=\"col col-md-3 col-xs-12\">\r\n            <fieldset>\r\n                <legend style=\"font-weight:bold\">INSTRUCTIONS</legend>\r\n                <table>\r\n                    <tbody>\r\n                        <tr>\r\n                            <td class=\"UserHeaderTd\">How to use this configurator:</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">1. Select outdoor unit information</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">2. Select indoor unit information</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">3. Click \"show results\"</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">4. Before using System Configurator, please read the Terms and Conditions information.</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">5. By using System Configurator, you are in agreement with all <a href=\"/SystemMatchups-Daikin/disclaimer.jsp\">Terms and Conditions</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td class=\"UserText\">\r\n                                <b>Note:</b><br /> If your matchup does not show up in System Configurator, it may have been archived.  You can submit a request to retrieve archived certifications by filling out a request form through AHRI, which can be accessed in the link below.  Note that additional fields will appear as you complete the form.  Please allow at least 3 business days for AHRI to process your request.<br>\r\n                                <a href=\"https://www.ahridirectory.org/ahridirectory/pages/Techsupport/support.aspx\">https://www.ahridirectory.org</a>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </fieldset>\r\n        </div>\r\n\r\n\r\n        <!--Search Form-->\r\n        <div class=\"col col-md-9 col-xs-12 form-horizontal\" style=\"font-size:small; padding-left: 50px;\">\r\n            <div class=\"row\">\r\n                <!--Search By-->\r\n              \r\n                <div class=\"scrollmenu\">\r\n                    <ul class=\"systemConfig-tab-bar\">\r\n                        <li id=\"searchBySystemNeeds\" class=\"active-tab\"> <a (click)=\"searchBy('systemNeeds')\">Search By System Needs</a> </li>\r\n                        <li id=\"searchByModelNumber\"> <a (click)=\"searchBy('modelNumber')\">Search By Model Number</a> </li>\r\n                    </ul>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n\r\n            <fieldset>\r\n                <legend style=\"font-weight:bold\">\r\n                    OUTDOOR UNIT\r\n                </legend>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"row configToolRow\">\r\n                        <!--Outdoor Unit Type-->\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                            <label class=\"col col-md-6 configToolLabel control-label\" for=\"outDoorUnitTypeDDL\">Unit Type:<font color=\"red\">*</font></label>\r\n                            <div class=\"col col-md-6\">\r\n                                <select id=\"outDoorUnitTypeDDL\"></select>\r\n                            </div>\r\n                        </div>\r\n                        <!--packageType-->\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\" *ngIf=\"outDoorUnitType == 'pkg'\">\r\n                            <label class=\"col col-md-6 configToolLabel control-label\">Select Package:</label>\r\n                            <div class=\"col col-md-6\">\r\n                                <kendo-dropdownlist [data]=\"packageTypes\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    [(ngModel)]=\"packageType\" (ngModelChange)=\"packageTypeOnChange()\">\r\n                                </kendo-dropdownlist>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div class=\"row configToolRow\">\r\n                        <!--CEETier-->\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\" *ngIf=\"model=='N'\">\r\n                            <div class=\"col col-md-6 configToolLabel control-label\">Select CEE Tier:</div>\r\n                            <div class=\"col col-md-6\">\r\n                                <div id=\"ceeTierDDL\"></div>\r\n                            </div>\r\n                        </div>\r\n                        <!--Region-->\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\" *ngIf=\"!(outDoorUnitType == 'pkg' && (packageType.value == 'pkg1' || packageType.value == 'pkg2'))\">\r\n                            <div class=\"col col-md-6 configToolLabel control-label\">Region:</div>\r\n                            <div class=\"col col-md-6\">\r\n                                <select id=\"regionDDL\"></select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Outdoor Unit - Search By System Needs-->\r\n                <div *ngIf=\"model=='N'\" class=\"row\">\r\n                    <!--<fieldset>\r\n                    <legend style=\"font-weight:bold\">\r\n                        Outdoor Unit\r\n                    </legend>-->\r\n                    <!--<div style=\"padding-left:20px;\">Unit Criteria</div>-->\r\n                    <!--<div class=\"outDoorUnitCriteria\" style=\"border-style:solid; border-width:1px; border-radius:7px;\">-->\r\n                    <!--<div class=\"outDoorUnitCriteria col col-md-8\">-->\r\n                    <!--<div class=\"row\">\r\n                        <div class=\"col col-md-7 col-sm-10\" style=\"margin-left:40px; color:#656565; border-bottom:solid; border-bottom-width:1px; border-color:#e5e5e5;\">Unit Criteria</div>\r\n                    </div>-->\r\n                    <div>\r\n                        <div style=\"padding-left:50px; color:#656565; text-decoration: underline\">UNIT CRITERIA</div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row configToolRow\">\r\n                        <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                            <div class=\"col col-md-6 configToolLabel control-label\">Tonnage:<font color=\"red\">*</font></div>\r\n                            <div class=\"col col-md-6\">\r\n                                <select id=\"tonnageDDL\"></select>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                        <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">SEER:<font color=\"red\">*</font></div>\r\n                        <div class=\"col col-md-10 col-xs-12\">\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minSEER\" [(ngModel)]=\"minSEER\" style=\"width: 100px\" /></span>\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxSEER\" [(ngModel)]=\"maxSEER\" style=\"width: 100px\" /></span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                        <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">EER:</div>\r\n                        <div class=\"col col-md-10 col-xs-12\">\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minEER\" [(ngModel)]=\"minEER\" style=\"width: 100px\" /></span>\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxEER\" [(ngModel)]=\"maxEER\" style=\"width: 100px\" /></span>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\" *ngIf=\"outDoorUnitType == 'hp' || outDoorUnitType == 'pkg'\">\r\n                        <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">HSPF:</div>\r\n                        <div class=\"col col-md-10 col-xs-12\">\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Min <input id=\"minHSPF\" [(ngModel)]=\"minHSPF\" style=\"width: 100px\" /></span>\r\n                            <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">Max <input id=\"maxHSPF\" [(ngModel)]=\"maxHSPF\" style=\"width: 100px\" /></span>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row configToolRow\" *ngIf=\"outDoorUnitType != 'pkg'\">\r\n                        <div class=\"col col-md-4  col-xs-12 form-group\">\r\n                            <div class=\"col col-md-6 col-xs-12 configToolLabel control-label\">TXV:</div>\r\n                            <div class=\"col col-md-6 col-xs-12\">\r\n                                <kendo-dropdownlist [data]=\"txvOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    [(ngModel)]=\"txv\">\r\n                                </kendo-dropdownlist>\r\n                                <!--<span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"txv\" [(ngModel)]=\"txv\" value=\"Y\" /> Yes</span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"txv\" [(ngModel)]=\"txv\" value=\"N\" /> No</span>\r\n                                    <span class=\"col col-md-3 col col-xs-12\"><input type=\"radio\" name=\"txv\" [(ngModel)]=\"txv\" value=\"T\" /> No Preference</span>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"row configToolRow\">\r\n                        <div class=\"col col-md-4  col-xs-12 form-group\">\r\n                            <div class=\"col col-md-6 col-xs-12 configToolLabel control-label\">Status:</div>\r\n                            <div class=\"col col-md-6 col-xs-12\">\r\n                                <kendo-dropdownlist [data]=\"statusOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                    [(ngModel)]=\"status\">\r\n                                </kendo-dropdownlist>\r\n                                <!--<span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"status\" [(ngModel)]=\"status\" value=\"Y\" /> Active</span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"status\" [(ngModel)]=\"status\" value=\"N\" /> Discontinued</span>\r\n                                    <span class=\"col col-md-3 col col-xs-12\"><input type=\"radio\" name=\"status\" [(ngModel)]=\"status\" value=\"S\" /> No Preference</span>-->\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!--</fieldset>-->\r\n\r\n\r\n                </div>\r\n            </fieldset>\r\n\r\n\r\n            <!--Indoor Unit - Search By System Needs-->\r\n            <div *ngIf=\"model=='N' && outDoorUnitType != 'pkg'\">\r\n                <fieldset>\r\n                    <legend style=\"font-weight:bold\">\r\n                        INDOOR UNIT\r\n                    </legend>\r\n                    <div class=\"row configToolRow form-group\" style=\"margin-left:-35px;\">\r\n                        <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">Unit Type:<font color=\"red\">*</font></div>\r\n                        <div class=\"col col-md-10 col-xs-12\">\r\n                            <div class=\"row\">\r\n                                <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"coilOnly\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Coil(only)</span>\r\n                                <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"furnaceCoil\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Furnace</span>\r\n                                <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"airHandler\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Air Handler</span>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"configToolRow \" id=\"furnace-extra-params\" *ngIf=\"indoorUnitType == 'furnaceCoil'\">\r\n                        <div class=\"row form-group\" style=\"margin-left:-35px;\">\r\n                            <div class=\"col col-md-2 col-xs-12 configToolRow configToolLabel control-label\">AFUE Range:</div>\r\n                            <div class=\"col col-md-10 col-xs-12\">\r\n\r\n\r\n\r\n                                <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">\r\n                                    Min <kendo-dropdownlist [data]=\"minAFUEOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                            [defaultItem]=\"defaultItem\"\r\n                                                            [(ngModel)]=\"minAFUE\"\r\n                                                            style=\"width: 100px\">\r\n                                    </kendo-dropdownlist>\r\n                                </span>\r\n                                <span class=\"col col-md-2 col col-xs-12\" style=\"padding:0px\">\r\n                                    Max <kendo-dropdownlist [data]=\"maxAFUEOptions\" [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                                            [defaultItem]=\"defaultItem\"\r\n                                                            [(ngModel)]=\"maxAFUE\"\r\n                                                            style=\"width: 100px\">\r\n                                    </kendo-dropdownlist>\r\n                                </span>\r\n\r\n\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n\r\n                        <div class=\"row form-group\" style=\"margin-left:-35px;\">\r\n                            <div class=\"col-md-offset-2 col col-md-4\">\r\n                                <div class=\"checkbox\">\r\n                                    <label>\r\n                                        <input type=\"checkbox\" [(ngModel)]=\"flushfit\"> Flush fit\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </fieldset>\r\n\r\n            </div>\r\n\r\n\r\n            <!--Outdoor Unit - Search By Model#-->\r\n            <div *ngIf=\"model=='Y'\" class=\"row\">\r\n                <!--<fieldset>\r\n                    <legend style=\"font-weight:bold\">\r\n                        Outdoor Unit\r\n                    </legend>-->\r\n                <!--<div class=\"row row-nomargin configToolRow configToolLabel\">Enter Outdoor Unit Model#</div>-->\r\n                <div class=\"row configToolRows\">\r\n                    <div class=\"col col-md-4 col-xs-12 form-group\">\r\n                        <label class=\"col col-md-6 configToolLabel control-label\" for=\"outdoorModelAutoComplete\">Model:<font color=\"red\">*</font></label>\r\n                        <div class=\"col col-md-6\">\r\n                            <input id=\"outdoorModelAutoComplete\"/>\r\n                            <div style=\"font-size:xx-small; font-style:italic; color:#656565;\">Enter at least two characters</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--</fieldset>-->\r\n\r\n            </div>\r\n\r\n            <!--Indoor Unit - Search By Model #-->\r\n            <div *ngIf=\"model=='Y' && outDoorUnitType != 'pkg'\">\r\n                <fieldset>\r\n                    <legend style=\"font-weight:bold\">\r\n                        INDOOR UNIT\r\n                    </legend>\r\n                    <div class=\"row\">\r\n                        <div class=\"row configToolRow form-group\" >\r\n                            <div class=\"col col-md-2 col-xs-12 configToolLabel control-label\">Unit Type:</div>\r\n                            <div class=\"col col-md-10 col-xs-12\">\r\n                                <div class=\"row row-nomargin \">\r\n                                    <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"coilOnly\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Coil(only)</span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"furnaceCoil\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Furnace+Coil</span>\r\n                                    <span class=\"col col-md-2 col col-xs-12\"><input type=\"radio\" name=\"indoorUnitType\" value=\"airHandler\" [(ngModel)]=\"indoorUnitType\" (ngModelChange)=\"indoorUnitTypeOnChange()\" /> Air Handler</span>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--indoor-unit-dropdowns Go here-->\r\n                    <div id=\"indoor-unit-dropdowns\" style=\"margin-left:-35px;\">\r\n                        <div class=\"row configToolRow form-group\" *ngIf=\"indoorUnitType =='coilOnly'  && outdoorModelNumber != null \">\r\n                            <div class=\"col col-md-2 col col-xs-12 configToolLabel control-label\">\r\n                                Coil#:\r\n                            </div>\r\n                            <div class=\"col col-md-10 col col-xs-12\">\r\n                                <input id=\"coilDDL\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row configToolRow form-group\" *ngIf=\"indoorUnitType =='furnaceCoil' && outdoorModelNumber != null \">\r\n                            <div class=\"col col-md-2 col col-xs-12 configToolLabel control-label\">\r\n                                Furnace#:\r\n                            </div>\r\n                            <div class=\"col col-md-10 col col-xs-12\">\r\n                                <input id=\"furnaceDDL\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row configToolRow form-group\" *ngIf=\"indoorUnitType =='furnaceCoil' && outdoorModelNumber != null  && furnaceModelNumber != undefined && furnaceModelNumber != '' \">\r\n                            <div class=\"col col-md-2 col col-xs-12 configToolLabel control-label\">\r\n                                Coil#:\r\n                            </div>\r\n                            <div class=\"col col-md-10 col col-xs-12\">\r\n                                <input id=\"furnaceCoilDDL\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row configToolRow form-group\" *ngIf=\"indoorUnitType =='airHandler' && outdoorModelNumber != null \">\r\n                            <div class=\"col col-md-2 col col-xs-12 configToolLabel control-label\">\r\n                                Air Handler/ Coil#:\r\n                            </div>\r\n                            <div class=\"col col-md-10 col col-xs-12\">\r\n                                <input id=\"airHandlerDDL\" />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row configToolRow form-group\" *ngIf=\"indoorUnitType =='airHandler' && outdoorModelNumber != null && airHandlerModelNumber != undefined && airHandlerModelNumber != '' \">\r\n                            <div class=\"col col-md-2 col col-xs-12 configToolLabel control-label\">\r\n                                Blower#:\r\n                            </div>\r\n                            <div class=\"col col-md-10 col col-xs-12\">\r\n                                <input id=\"airHandlerBlowerDDL\" />\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n                    </div>\r\n\r\n                </fieldset>\r\n\r\n            </div>\r\n\r\n            <!--Show result/ reset-->\r\n            <div class=\"form-group\">\r\n                <div class=\"col-md-offset-10 col-md-2\">\r\n                    <button id=\"showResultBtn\" type=\"submit\" class=\"btn btn-primary\" (click)=\"getResult()\">Show Result</button>\r\n                    <button id=\"resetBtn\" class=\"btn btn-default\" (click)=\"reset()\">Reset</button>\r\n\r\n                    <!--<button id=\"testBtn\" class=\"btn btn-default\" (click)=\"getEqModelList()\">Test</button>-->\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div id=\"matchupResultGrid\">\r\n        <matchup-master-grid *ngIf=\"matchupResult\" [matchupResult]=\"matchupResult\" [indoorUnitType]=\"indoorUnitType\" [outDoorUnitType]=\"outDoorUnitType\" [userBasket]=\"userBasket\"></matchup-master-grid>\r\n    </div>\r\n</div>\r\n\r\n<!--<div>\r\n    <button (click)=\"Test()\">Test</button>\r\n    <div id=\"userGroup\"></div>\r\n</div>-->\r\n<!--<kendo-grid\r\n            *ngIf=\"matchupResult\"\r\n          [data]=\"matchupResult\"\r\n          [pageSize]=\"pageSize\"\r\n          [skip]=\"skip\"\r\n          [sortable]=\"true\"\r\n          [sort]=\"sort\"\r\n          [pageable]=\"true\"\r\n          [scrollable]=\"'none'\"\r\n          (dataStateChange)=\"dataStateChange($event)\"\r\n            >\r\n    <kendo-grid-column field=\"modelNumber\" ></kendo-grid-column>\r\n    <kendo-grid-column field=\"coilModelNumber\"></kendo-grid-column>\r\n    <kendo-grid-column field=\"seer\"></kendo-grid-column>\r\n\r\n</kendo-grid>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/tools/components/unitary-matchup/unitary-matchup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitaryMatchupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_unitary_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/unitary-matchup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UnitaryMatchupComponent = /** @class */ (function () {
    //public testListItems: Array<string> = ["Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball"];
    function UnitaryMatchupComponent(toastrSvc, productSvc, basketSvc, unitaryMatchupSvc) {
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
    }
    UnitaryMatchupComponent.prototype.ngOnChanges = function () {
        console.log("system config: OnChange");
    };
    UnitaryMatchupComponent.prototype.ngOnInit = function () {
        console.log("system config: OnInit");
        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
        //wait until elements are available
        setTimeout(this.setupDefaults.bind(this), 200); // wait 0.2 sec
        //set up active tab
        __WEBPACK_IMPORTED_MODULE_4_jquery__(".systemConfig-tab-bar li").click(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__(this).addClass('active-tab').siblings().removeClass('active-tab');
        });
        //$(activeSubTabId).addClass("active-tab");
    };
    UnitaryMatchupComponent.prototype.ngAfterContentInit = function () {
        //console.log("system config: AfterContentInit");
        setTimeout(function () {
            __WEBPACK_IMPORTED_MODULE_4_jquery__('#userBasket').insertBefore('#projectTabs');
        }, 1000);
        //$('#userBasket').insertBefore('#projectTabs');       
    };
    UnitaryMatchupComponent.prototype.ngAfterViewChecked = function () {
        // console.log("system config: AfterViewChecked");
    };
    UnitaryMatchupComponent.prototype.getBasketCallback = function (resp) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
            __WEBPACK_IMPORTED_MODULE_4_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
        }
    };
    UnitaryMatchupComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#content > #userBasket').remove();
        //reset session["BasketQuoteId"] = 0
        this.productSvc.resetBasketQuoteId();
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').removeProp('readonly');
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').removeProp('readonly');
        this.resetIndoorUnit();
        this.outdoorModelNumber = null;
    };
    UnitaryMatchupComponent.prototype.reset = function () {
        this.setupDefaults();
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#searchBySystemNeeds").addClass('active-tab');
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#searchByModelNumber").removeClass('active-tab');
    };
    UnitaryMatchupComponent.prototype.searchBy = function (value) {
        if (value == "systemNeeds") {
            if (this.model != "N") {
                this.model = "N";
                this.searchByOnChange();
            }
        }
        else if (value == "modelNumber") {
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
            //wait until $("#outdoorModelAutoComplete") is available
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").val(null);
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
            this.blockUI.start('Loading...');
            this.unitaryMatchupSvc.getSystemMatchupList(params).then(function (resp) {
                if (!resp.error) {
                    var result = resp.result;
                    //this.concatResult(resp.result);
                    _this.matchupResult = result;
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#systemConfigForm').hide();
                    __WEBPACK_IMPORTED_MODULE_4_jquery__('#matchupResultGrid').show();
                    _this.blockUI.stop();
                }
                else {
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#systemConfigForm').hide();
        __WEBPACK_IMPORTED_MODULE_4_jquery__('#matchupResultGrid').show();
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
    //public getSystemMatchupListCallBack(resp: any) {
    //    if (!resp.error) {
    //        var result = resp.result;
    //        let data: any = [];
    //        for (var key in result) {
    //            if (!result.hasOwnProperty(key)) continue;
    //            var obj = result[key];
    //            data = data.concat(obj);
    //        }
    //        this.matchupResult = data;
    //    }
    //}
    UnitaryMatchupComponent.prototype.getTonnageList = function () {
        this.unitaryMatchupSvc.getTonnageList().then(function (resp) {
            if (resp) {
                var tonnageList = resp;
                debugger;
            }
        });
    };
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#outDoorUnitTypeDDL").kendoDropDownList({
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
                    __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").val(null);
                    //Reset outdoorModelAutoComplete dataSource
                    var outdoorModelDLL = __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").data("kendoAutoComplete");
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
        var outDoorUnitTypeDDL = __WEBPACK_IMPORTED_MODULE_4_jquery__("#outDoorUnitTypeDDL").data("kendoDropDownList");
        outDoorUnitTypeDDL.select(0);
        outDoorUnitTypeDDL.trigger("change");
        setTimeout(self.setupCeeTierDDL.bind(self), 200);
        setTimeout(self.setupRegionDLL.bind(self), 200);
        setTimeout(self.setupTonnageDDL.bind(self), 200);
    };
    //public resetCeeTierDDL() {
    //    var ceeTierDDL = $("#ceeTierDDL").data("kendoDropDownList");
    //    if (this.outDoorUnitType == "ac" || this.outDoorUnitType == "hp") {
    //        var ceeTierDS = new kendo.data.DataSource({
    //            data: [
    //                { "text": "No Preference", value: "b4" },
    //                { "text": "CEE Tier 0", value: "b0" },
    //                { "text": "CEE Tier 1", value: "b1" },
    //                { "text": "CEE Tier 2", value: "b2" },
    //                { "text": "CEE Tier 3", value: "b3" }
    //            ]
    //        });
    //        ceeTierDDL.setDataSource(ceeTierDS);
    //    } else if (this.outDoorUnitType = "pkg"){
    //        var ceeTierDS = new kendo.data.DataSource({
    //            data: [
    //                { "text": "No Preference", value: "b4" },
    //                { "text": "CEE Tier 1", value: "b1" },
    //                { "text": "CEE Tier 2", value: "b2" }
    //            ]
    //        });
    //        ceeTierDDL.setDataSource(ceeTierDS);
    //    }
    //}
    UnitaryMatchupComponent.prototype.setupOutdoorModelAutoComplete = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").kendoAutoComplete({
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").keyup(function (e) {
            var _this = this;
            if (this.value.toString().length >= 2) {
                if (e.keyCode != 38 && e.keyCode != 40 && e.keyCode != 13) {
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
                                var outdoorModelDLL = __WEBPACK_IMPORTED_MODULE_4_jquery__("#outdoorModelAutoComplete").data("kendoAutoComplete");
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#ceeTierDDL").kendoDropDownList({
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
        __WEBPACK_IMPORTED_MODULE_4_jquery__("#regionDDL").kendoDropDownList({
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
        var regionDDL = __WEBPACK_IMPORTED_MODULE_4_jquery__("#regionDDL").data("kendoDropDownList");
        regionDDL.select(0);
        regionDDL.trigger("change");
    };
    UnitaryMatchupComponent.prototype.setupTonnageDDL = function () {
        var self = this;
        this.unitaryMatchupSvc.getTonnageList().then(function (resp) {
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
                if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#tonnageDDL").length > 0) {
                    __WEBPACK_IMPORTED_MODULE_4_jquery__("#tonnageDDL").kendoDropDownList({
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
                    var tonnageDDL = __WEBPACK_IMPORTED_MODULE_4_jquery__("#tonnageDDL").data("kendoDropDownList");
                    tonnageDDL.select(0);
                    tonnageDDL.trigger("change");
                }
            }
        });
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
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').removeProp('readonly');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').removeProp('readonly');
            }
            else if (this.ceeTier == 'b0') {
                this.minSEER = 14.5;
                this.minEER = 12;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 13;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
            }
            else if (this.ceeTier == 'b3') {
                this.minSEER = 18;
                this.minEER = 13;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
            }
        }
        else if (this.outDoorUnitType == "hp") {
            if (this.ceeTier == 'b4') {
                this.minSEER = 14;
                this.minEER = "";
                this.minHSPF = "";
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').removeProp('readonly');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').removeProp('readonly');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').removeProp('readonly');
            }
            else if (this.ceeTier == 'b0') {
                this.minSEER = 14.5;
                this.minEER = 12;
                this.minHSPF = 8.5;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                this.minHSPF = 8.5;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 13;
                this.minHSPF = 9;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b3') {
                this.minSEER = 18;
                this.minEER = 13;
                this.minHSPF = 10;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
            }
        }
        else if (this.outDoorUnitType == "pkg") {
            if (this.ceeTier == 'b4') {
                this.minSEER = 14;
                this.minEER = "";
                this.minHSPF = "";
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').removeProp('readonly');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').removeProp('readonly');
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').removeProp('readonly');
            }
            else if (this.ceeTier == 'b1') {
                this.minSEER = 15;
                this.minEER = 12.5;
                this.minHSPF = 8.2;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
            }
            else if (this.ceeTier == 'b2') {
                this.minSEER = 16;
                this.minEER = 12;
                this.minHSPF = 8.2;
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minSEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minEER').prop('readonly', true);
                __WEBPACK_IMPORTED_MODULE_4_jquery__('#minHSPF').prop('readonly', true);
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
                    __WEBPACK_IMPORTED_MODULE_4_jquery__(indoorUnitTypeRadios[i]).prop('checked', false);
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
                        url: "https://testapi.goodmanmfg.com/EBizWebServices/requestEntry",
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
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#coilDDL").length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#coilDDL").kendoDropDownList({
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
                //var tonnageDDL = $("#tonnageDDL").data("kendoDropDownList");
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
                        url: "https://testapi.goodmanmfg.com/EBizWebServices/requestEntry",
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
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#furnaceDDL").length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#furnaceDDL").kendoDropDownList({
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
                        url: "https://testapi.goodmanmfg.com/EBizWebServices/requestEntry",
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
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#furnaceCoilDDL").length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#furnaceCoilDDL").kendoDropDownList({
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
                        url: "https://testapi.goodmanmfg.com/EBizWebServices/requestEntry",
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
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#airHandlerDDL").length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#airHandlerDDL").kendoDropDownList({
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
                        url: "https://testapi.goodmanmfg.com/EBizWebServices/requestEntry",
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
            if (__WEBPACK_IMPORTED_MODULE_4_jquery__("#airHandlerBlowerDDL").length > 0) {
                __WEBPACK_IMPORTED_MODULE_4_jquery__("#airHandlerBlowerDDL").kendoDropDownList({
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
        Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], UnitaryMatchupComponent.prototype, "blockUI", void 0);
    UnitaryMatchupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'unitary-matchup',
            template: __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/unitary-matchup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* BasketService */],
            __WEBPACK_IMPORTED_MODULE_3__services_unitary_matchup_service__["a" /* UnitaryMatchupService */]])
    ], UnitaryMatchupComponent);
    return UnitaryMatchupComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/tools/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_tool_list_tool_list_component__ = __webpack_require__("../../../../../src/app/tools/components/tool-list/tool-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_0__components_tool_list_tool_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_lc_split_matchup_split_matchup_detail_grid_component__ = __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/split-matchup-detail-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__components_lc_split_matchup_split_matchup_detail_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_lc_split_matchup_split_matchup_master_grid_component__ = __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/split-matchup-master-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__components_lc_split_matchup_split_matchup_master_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_lc_split_matchup_lc_split_matchup_component__ = __webpack_require__("../../../../../src/app/tools/components/lc-split-matchup/lc-split-matchup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_3__components_lc_split_matchup_lc_split_matchup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_unitary_matchup_furnaceDDL_component__ = __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/furnaceDDL.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__components_unitary_matchup_furnaceDDL_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_unitary_matchup_matchup_detail_grid_component__ = __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/matchup-detail-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__components_unitary_matchup_matchup_detail_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_unitary_matchup_matchup_master_grid_component__ = __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/matchup-master-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__components_unitary_matchup_matchup_master_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_unitary_matchup_unitary_matchup_component__ = __webpack_require__("../../../../../src/app/tools/components/unitary-matchup/unitary-matchup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__components_unitary_matchup_unitary_matchup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_lc_split_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/lc-split-matchup.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_8__services_lc_split_matchup_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_unitary_matchup_service__ = __webpack_require__("../../../../../src/app/tools/services/unitary-matchup.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_9__services_unitary_matchup_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_tool_list_service__ = __webpack_require__("../../../../../src/app/tools/services/tool-list.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_10__services_tool_list_service__["a"]; });













/***/ }),

/***/ "../../../../../src/app/tools/services/lc-split-matchup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LCSplitMatchupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LCSplitMatchupService = /** @class */ (function () {
    function LCSplitMatchupService(toastrSvc, http, webconfigSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.webconfigSvc = webconfigSvc;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        var self = this;
        this.webconfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
            self.commercialSplitMCToolURL = self.webconfig.routeConfig.commercialSplitMatchupToolURL;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    }
    LCSplitMatchupService.prototype.getSystemMatchupList = function (params) {
        //var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.commercialSplitMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    LCSplitMatchupService.prototype.getTonnageList = function () {
        var body = {
            "user": "user",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikinSplSt",
            "servicesName": "doGetTonnageList",
            "accountId": "goodman1",
            "params": {}
        };
        //var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.commercialSplitMCToolURL, body, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    LCSplitMatchupService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    LCSplitMatchupService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    LCSplitMatchupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["l" /* WebConfigService */]])
    ], LCSplitMatchupService);
    return LCSplitMatchupService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/services/tool-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolListService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import 'rxjs/Rx';

var ToolListService = /** @class */ (function () {
    function ToolListService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        //super(toastrService);
        //console.log('Tools Service Initialized...');
    }
    ToolListService.prototype.getTools = function () {
        var data = this.http.get("/api/Tool/GetTools")
            .map(this.extractData)
            .catch(this.handleError);
        return data;
    };
    ToolListService.prototype.extractData = function (res) {
        var body = res.json();
        return body || null;
    };
    ToolListService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        //console.error(error); // log to console instead
        console.log(error);
        // this.toastrSvc.
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    ToolListService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */]])
    ], ToolListService);
    return ToolListService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/services/unitary-matchup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnitaryMatchupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UnitaryMatchupService = /** @class */ (function () {
    function UnitaryMatchupService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
    }
    UnitaryMatchupService.prototype.getSystemMatchupList = function (params) {
        var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(url, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getTonnageList = function () {
        var body = {
            "user": "user",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchup",
            "servicesName": "doGetTonnageList",
            "accountId": "goodman1",
            "params": {}
        };
        var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(url, body, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getEqModelList = function (params) {
        //var body = {
        //    "user": "",
        //    "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
        //    "packageName": "SystemMatchupDaikin",
        //    "servicesName": "doGetEqModelList",
        //    "accountId": "goodman1",
        //    "params": {
        //        "model": "N",
        //        "type": "AC",
        //        "modelnumber": "DX",
        //        "region": "se"
        //    }
        //}
        var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(url, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getEqCoilList = function (params) {
        var body = {
            "user": "",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikin",
            "servicesName": "doGetEqCoilList",
            "accountId": "goodman1",
            "params": {
                "type": "ac",
                "modelnumber": "DX14SN0251B*"
            }
        };
        var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(url, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getEEPFurnaceList = function (params) {
        var url = 'https://testapi.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(url, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    UnitaryMatchupService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    UnitaryMatchupService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UnitaryMatchupService);
    return UnitaryMatchupService;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tools-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/tools/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var toolsRoutes = [
    {
        path: 'tool-list', component: __WEBPACK_IMPORTED_MODULE_2__index__["h" /* ToolListComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_index__["d" /* CurrentUserResolver */]
        }
    },
    {
        path: 'unitaryMatchup', component: __WEBPACK_IMPORTED_MODULE_2__index__["j" /* UnitaryMatchupComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_index__["d" /* CurrentUserResolver */]
        }
    },
    {
        path: 'lcSplitMatchup', component: __WEBPACK_IMPORTED_MODULE_2__index__["b" /* LCSplitMatchupComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_index__["d" /* CurrentUserResolver */]
        }
    }
];
var ToolsRoutingModule = /** @class */ (function () {
    function ToolsRoutingModule() {
    }
    ToolsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(toolsRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
        })
    ], ToolsRoutingModule);
    return ToolsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/tools/tools.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS_COMPONENTS", function() { return TOOLS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return ToolsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_basket_module__ = __webpack_require__("../../../../../src/app/basket/basket.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tools_routing_module__ = __webpack_require__("../../../../../src/app/tools/tools-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/tools/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var TOOLS_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__index__["h" /* ToolListComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["b" /* LCSplitMatchupComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["f" /* SplitMatchupDetailGridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["g" /* SplitMatchupMasterGridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["a" /* FurnaceDDLComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["d" /* MatchupDetailGridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["e" /* MatchupMasterGridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["j" /* UnitaryMatchupComponent */]
];
var ToolsModule = /** @class */ (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_grid__["c" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__basket_basket_module__["a" /* BasketModule */],
                __WEBPACK_IMPORTED_MODULE_5__tools_routing_module__["a" /* ToolsRoutingModule */]
            ],
            exports: TOOLS_COMPONENTS,
            declarations: TOOLS_COMPONENTS,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__index__["i" /* ToolListService */],
                __WEBPACK_IMPORTED_MODULE_6__index__["c" /* LCSplitMatchupService */],
                __WEBPACK_IMPORTED_MODULE_6__index__["k" /* UnitaryMatchupService */]
            ]
        })
    ], ToolsModule);
    return ToolsModule;
}());



/***/ })

});
//# sourceMappingURL=tools.module.chunk.js.map