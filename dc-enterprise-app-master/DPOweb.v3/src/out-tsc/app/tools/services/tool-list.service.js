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
require("rxjs/Rx");
var toastr_service_1 = require("../../shared/services/toastr.service");
var base_error_handler_service_1 = require("../../shared/services/base-error-handler.service");
var ToolListService = /** @class */ (function (_super) {
    __extends(ToolListService, _super);
    function ToolListService(http, toastrService) {
        var _this = _super.call(this, toastrService) || this;
        _this.http = http;
        _this.toastrService = toastrService;
        console.log('Tools Service Initialized...');
        return _this;
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
    ToolListService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, toastr_service_1.ToastrService])
    ], ToolListService);
    return ToolListService;
}(base_error_handler_service_1.BaseErrorHandlerService));
exports.ToolListService = ToolListService;
//# sourceMappingURL=tool-list.service.js.map