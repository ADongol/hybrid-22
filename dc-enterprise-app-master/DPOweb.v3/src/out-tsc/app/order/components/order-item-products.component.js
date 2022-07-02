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
var quote_service_1 = require("../../quote/services/quote.service");
var OrderItemProductsComponent = /** @class */ (function () {
    function OrderItemProductsComponent(http, quoteSvc) {
        this.http = http;
        this.quoteSvc = quoteSvc;
        this.orderItemProducts = [];
    }
    OrderItemProductsComponent.prototype.ngOnInit = function () {
        this.getOrderItemProducts(this.quoteId);
    };
    OrderItemProductsComponent.prototype.getOrderItemProducts = function (quoteId) {
        var _this = this;
        this.quoteSvc.getQuoteItems(quoteId)
            .then(function (resp) {
            if (resp.isok) {
                _this.orderItemProducts = resp.model;
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], OrderItemProductsComponent.prototype, "quoteId", void 0);
    OrderItemProductsComponent = __decorate([
        core_1.Component({
            selector: 'order-item-products',
            templateUrl: './order-item-products.component.html',
            styleUrls: ['./order-item-products.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http, quote_service_1.QuoteService])
    ], OrderItemProductsComponent);
    return OrderItemProductsComponent;
}());
exports.OrderItemProductsComponent = OrderItemProductsComponent;
//# sourceMappingURL=order-item-products.component.js.map