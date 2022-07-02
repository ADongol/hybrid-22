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
var LCSplitMatchupService = /** @class */ (function () {
    function LCSplitMatchupService(toastrSvc, http, webconfigSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.webconfigSvc = webconfigSvc;
        this.headers = new http_1.Headers({
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [toastr_service_1.ToastrService, http_1.Http, webconfig_service_1.WebConfigService])
    ], LCSplitMatchupService);
    return LCSplitMatchupService;
}());
exports.LCSplitMatchupService = LCSplitMatchupService;
//# sourceMappingURL=lc-split-matchup.service.js.map