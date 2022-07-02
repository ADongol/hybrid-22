"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Observable_1 = require("rxjs/Observable");
var toastr_service_1 = require("../../shared/services/toastr.service");
var base_error_handler_service_1 = require("../../shared/services/base-error-handler.service");
var SubmittalPackageService = /** @class */ (function (_super) {
    __extends(SubmittalPackageService, _super);
    function SubmittalPackageService(http, toastrService) {
        var _this = _super.call(this, toastrService) || this;
        _this.http = http;
        _this.toastrService = toastrService;
        _this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        _this.options = new http_1.RequestOptions({ headers: _this.headers });
        _this.downloadHeaders = new http_1.Headers();
        _this.downloadOptions = new http_1.RequestOptions({
            //method: RequestMethod.Post,
            responseType: http_1.ResponseContentType.Blob,
            headers: _this.downloadHeaders
        });
        return _this;
        //console.log('Submittal Package Service Initialized...');
    }
    SubmittalPackageService.prototype.getQuotePackage = function (quoteId) {
        var data = this.http.get("/api/SubmittalPackage/GetQuotePackage?quoteId=" + quoteId)
            .map(this.extractData)
            .catch(this.handleError);
        return data;
    };
    SubmittalPackageService.prototype.getAttachedFiles = function (quoteId) {
        var data = this.http.get("/api/SubmittalPackage/GetAttachedFiles?quoteId=" + quoteId)
            .map(function (res) { return res.json().model; })
            .catch(this.handleError);
        return data;
    };
    SubmittalPackageService.prototype.createQuotePackage = function (model) {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageCreate";
        return this.http.post(this.apiUrl, model, this.downloadOptions)
            .map(function (res) {
            return res;
        })
            .share()
            .catch(this.handleError);
    };
    SubmittalPackageService.prototype.deleteFile = function (model) {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageDeleteAttachFile";
        var headers = new http_1.Headers();
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.apiUrl, model, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Observable_1.Observable.throw(error); });
    };
    SubmittalPackageService.prototype.extractData = function (res) {
        var body = res.json().model;
        return body || null;
    };
    SubmittalPackageService.prototype.handleError = function (error) {
        console.log(error);
        this.toastrService.Error(error.statusText);
        return Observable_1.Observable.throw(error.statusText);
    };
    SubmittalPackageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, toastr_service_1.ToastrService])
    ], SubmittalPackageService);
    return SubmittalPackageService;
}(base_error_handler_service_1.BaseErrorHandlerService));
exports.SubmittalPackageService = SubmittalPackageService;
/* .map((res) => {
     //return res.json();
     if (res.status == 400) {
         return "FAILURE";
     } else if (res.status == 200) {
         //var contentType = 'application/zip';
         //var blob = new Blob([(<any>res)._body], { type: contentType });
         //return blob;

         var blob = new Blob([this.str2bytes(res['_body'])], { type: "application/zip" });

        // let blob = res.blob();
         let filename = 'abcd.zip';
         //FileSaver.default(blob, filename);
             //FileSaver.saveAs(blob, "");
         //navigator.msSaveBlob(, filename);
     }
 })
 .catch(this.handleError) */ 
//# sourceMappingURL=submittal-package.service.js.map