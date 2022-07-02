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
require("rxjs/Rx");
var toastr_service_1 = require("../../shared/services/toastr.service");
var webconfig_service_1 = require("../../shared/services/webconfig.service");
var webConfig = require("../../../../webconfig.v3.json");
var UnitaryMatchupService = /** @class */ (function () {
    function UnitaryMatchupService(toastrSvc, http, webConfigSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.webConfigSvc = webConfigSvc;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        this.webconfig = webConfig;
        this.unitaryMCToolURL = this.webconfig.routeConfig.unitaryMatchupToolURL;
    }
    UnitaryMatchupService.prototype.getWebConfig = function () {
        var self = this;
        return this.webConfigSvc.getWebConfig().then(function (resp) {
            self.webconfig = resp;
        }).catch(function (error) {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    };
    UnitaryMatchupService.prototype.getSystemMatchupList = function (params) {
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
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
        //Todo: load url endpoint from webconfig.v3
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, body, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getEqModelList = function (params) {
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
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
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    };
    UnitaryMatchupService.prototype.getEEPFurnaceList = function (params) {
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [toastr_service_1.ToastrService, http_1.Http, webconfig_service_1.WebConfigService])
    ], UnitaryMatchupService);
    return UnitaryMatchupService;
}());
exports.UnitaryMatchupService = UnitaryMatchupService;
//# sourceMappingURL=unitary-matchup.service.js.map