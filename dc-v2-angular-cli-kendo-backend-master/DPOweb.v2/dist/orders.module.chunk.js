webpackJsonp(["orders.module"],{

/***/ "../../../../../src/app/orders/components/order-form-quote-items/order-form-quote-items.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid *ngIf=\"quoteItems\" [data]=\"quoteItems\">\r\n    <kendo-grid-column media=\"(max-width: 450px)\" title=\"Order submitted\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            <dl>\r\n                <dt>Product Number</dt>\r\n                <!--<dd>{{dataItem.productNumber}}</dd>-->\r\n                <dd>\r\n                    <span *ngIf=\"dataItem.lineItemTypeId == enums.LineItemTypeEnum.Configured; else elseBlock\">\r\n                        {{dataItem.codeString}}\r\n                    </span>\r\n                    <ng-template #elseBlock>\r\n                        {{dataItem.productNumber}}\r\n                    </ng-template>\r\n                </dd>\r\n                <dt>Description</dt>\r\n                <dd>\r\n                    <span *ngIf=\"dataItem.lineItemTypeId == enums.LineItemTypeEnum.Configured; else elseBlock\">\r\n                        Configured Product\r\n                    </span>\r\n                    <ng-template #elseBlock>\r\n                        {{dataItem.description}}\r\n                    </ng-template>\r\n                </dd>\r\n                <dt>Qty</dt>\r\n                <dd>{{dataItem.quantity}}</dd>\r\n                <dt>List Price</dt>\r\n                <dd>{{dataItem.listPrice | currency:'USD':true:'1.2-2'}}</dd>\r\n                <dt>Net Price</dt>\r\n                <dd>{{dataItem.netPrice | currency:'USD':true:'1.2-2'}}</dd>\r\n                <dt>Ext. Net Price</dt>\r\n                <dd>{{dataItem.netPrice * dataItem.quantity | currency:'USD':true:'1.2-2'}}</dd>\r\n                <dt>Ext. List Price</dt>\r\n                <dd>{{dataItem.netPrice * dataItem.quantity | currency:'USD':true:'1.2-2'}}</dd>\r\n            </dl>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"productNumber\" title=\"Product Number\" width=\"300\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span *ngIf=\"dataItem.lineItemTypeId == enums.LineItemTypeEnum.Configured; else elseBlock\">\r\n                {{dataItem.codeString}}\r\n            </span>\r\n            <ng-template #elseBlock>\r\n                {{dataItem.productNumber}}\r\n            </ng-template>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"description\" title=\"Description\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span *ngIf=\"dataItem.lineItemTypeId == enums.LineItemTypeEnum.Configured; else elseBlock\">\r\n                Configured Product\r\n            </span>\r\n            <ng-template #elseBlock>{{dataItem.description}}</ng-template>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"quantity\" title=\"Qty\" width=\"70\">\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"listPrice\" title=\"List Price\" format=\"{0:c}\" width=\"140\">\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"netPrice\" title=\"Net Price\" format=\"{0:c}\" width=\"140\">\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"Ext. List Price\" width=\"140\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.listPrice * dataItem.quantity | currency:'USD':true:'1.2-2'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"Ext. Net Price\" width=\"140\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.netPrice * dataItem.quantity | currency:'USD':true:'1.2-2'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/orders/components/order-form-quote-items/order-form-quote-items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormQuoteItemsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_services_quote_service__ = __webpack_require__("../../../../../src/app/quotes/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderFormQuoteItemsComponent = /** @class */ (function () {
    function OrderFormQuoteItemsComponent(quoteSvc) {
        this.quoteSvc = quoteSvc;
    }
    OrderFormQuoteItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteSvc.getQuoteItems(this.quoteId).then(function (resp) {
            if (resp.isok) {
                _this.quoteItems = resp.model;
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], OrderFormQuoteItemsComponent.prototype, "quoteId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], OrderFormQuoteItemsComponent.prototype, "blockUI", void 0);
    OrderFormQuoteItemsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'order-form-quote-items',
            template: __webpack_require__("../../../../../src/app/orders/components/order-form-quote-items/order-form-quote-items.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__quotes_services_quote_service__["a" /* QuoteService */]])
    ], OrderFormQuoteItemsComponent);
    return OrderFormQuoteItemsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/components/order-form/order-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".orderForm {\r\n    background-color: #E5F2FA;\r\n}\r\n\r\n#orderForm legend {\r\n    padding-top: 10px;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/components/order-form/order-form.component.html":
/***/ (function(module, exports) {

module.exports = "<project-tabs [user]=\"user\"></project-tabs>\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n            <ul class=\"breadcrumbs\">\r\n                <li><a href=\"/v2/#/projects\">Projects</a></li>\r\n                <li><a href=\"/v2/#/project/project/{{order.projectId}}\">{{order.projectName}}</a></li>\r\n                <li><a href=\"/v2/#/quote/quote/{{order.quoteId}}/existingRecord\">{{order.quoteTitle}}</a></li>\r\n                <li>Order</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n            <a href=\"/ProjectDashboard/OrderFAQ\" id=\"orderFAQ\" class=\"btn btn-default pull-right\" target=\"_blank\" style=\"margin:10px;\">FAQ</a>\r\n            <a *ngIf=\"order.orderId != 0\" href=\"/Document/OrderPrint/{{order.orderId}}?projectId={{order.projectId}}&quoteId={{order.quoteId}}\" id=\"order_request_print_modal_trigger\" class=\"btn btn-default pull-right\" target=\"_blank\" style=\"margin:10px;\">Print Order</a>\r\n        </div>\r\n    </div>\r\n\r\n    <h4>Order Form</h4>\r\n    <!--<button class=\"btn btn-default\"><a href=\"#orderReleaseDate\">Jump</a></button>-->\r\n    <div *ngIf=\"order\" class=\"orderForm\">\r\n        <form id=\"orderForm\" #orderForm=\"ngForm\" novalidate style=\"padding: 20px;\">\r\n            <fieldset>\r\n                <legend>Project Details</legend>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Name: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.name}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Reference: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.projectId}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Registration Date: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.projectDate  | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Bid Date: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.bidDate | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Estimated Close: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.estimatedClose | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Estimated Delivery: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.estimatedDelivery | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Pricing Strategy: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.pricingStrategy }}</div>\r\n                    </div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Construction Type: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.constructionTypeDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Status: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.projectStatusDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Type: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.projectTypeDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Open Status: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.projectOpenStatusDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Vertical Market: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.verticalMarketDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Status Notes: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.description}}</div>\r\n                    </div>\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                </div>\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend>Shipping Address/Project location</legend>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Business Name: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToName; else elseBlock\">{{order.project.shipToName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToName\" name=\"shipToName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Country: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToAddress.countryCode; else elseBlock\">{{order.project.shipToAddress.countryCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToAddress.countryCode\" name=\"shipToAddressCountryCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 1: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToAddress.addressLine1; else elseBlock\">{{order.project.shipToAddress.addressLine1}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToAddress.addressLine1\" name=\"shipToAddressAddressLine1\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 2: </div>\r\n                        <div class=\"col-md-6 col-xs-12\">{{order.project.shipToAddress.addressLine2}}</div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Location: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToAddress.location; else elseBlock\">{{order.project.shipToAddress.location}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToAddress.location\" name=\"shipToAddressLocation\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">State: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToAddress.stateName; else elseBlock\">{{order.project.shipToAddress.stateName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToAddress.stateName\" name=\"shipToAddressStateName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Zip Code: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.shipToAddress.postalCode; else elseBlock\">{{order.project.shipToAddress.postalCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.shipToAddress.postalCode\" name=\"shipToAddressPostalCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Square Footage: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.squareFootage}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Number Of Floors: </div> <div class=\"col-md-6 col-xs-12\">{{order.project.numberOfFloors}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div *ngIf=\"recordState == 'new'\"><span class=\"glyphicon glyphicon-pencil\"></span><a data-toggle=\"modal\" data-target=\"#editShipToAddressModal\" data-backdrop=\"static\"> Edit</a></div>\r\n                    </div>\r\n                </div>\r\n\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend>Dealer/Contractor</legend>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Dealer/Contractor Name: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" required *ngIf=\"order.project.dealerContractorName; else elseBlock\">{{order.project.dealerContractorName}}</div>\r\n                        <!--<div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.dealerContractorName; else elseBlock\">\r\n                            <input type=\"text\" class=\"form-control\" required [(ngModel)]=\"order.project.dealerContractorName\" name=\"dealerContractorName\"/>\r\n                        </div>-->\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.dealerContractorName\" name=\"dealerContractorName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Business Name: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerName; else elseBlock\">{{order.project.customerName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerName\" name=\"customerName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Country: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerAddress.countryCode; else elseBlock\">{{order.project.customerAddress.countryCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerAddress.countryCode\" name=\"customerAddressCountryCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 1: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerAddress.addressLine1; else elseBlock\">{{order.project.customerAddress.addressLine1}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerAddress.addressLine1\" name=\"customerAddressAddressLine1\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 2: </div>\r\n                        <div class=\"col-md-6 col-xs-12\">{{order.project.customerAddress.addressLine2}}</div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Location: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerAddress.location; else elseBlock\">{{order.project.customerAddress.location}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerAddress.location\" name=\"customerAddressLocation\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">State: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerAddress.stateName; else elseBlock\">{{order.project.customerAddress.stateName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerAddress.stateName\" name=\"customerAddressStateName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Zip Code: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.customerAddress.postalCode; else elseBlock\">{{order.project.customerAddress.postalCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.customerAddress.postalCode\" name=\"customerAddressPostalCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div *ngIf=\"recordState == 'new'\"><span class=\"glyphicon glyphicon-pencil\"></span><a data-toggle=\"modal\" data-target=\"#editCustomerAddressModal\" data-backdrop=\"static\"> Edit</a></div>\r\n                    </div>\r\n                </div>\r\n\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend>Seller</legend>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Business Name: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerName; else elseBlock\">{{order.project.sellerName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerName\" name=\"sellerName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Country: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerAddress.countryCode; else elseBlock\">{{order.project.sellerAddress.countryCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerAddress.countryCode\" name=\"sellerAddress.countryCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 1: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerAddress.addressLine1; else elseBlock\">{{order.project.sellerAddress.addressLine1}}</div>\r\n\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerAddress.addressLine1\" name=\"sellerAddress.addressLine1\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Address Line 2: </div>\r\n                        <div class=\"col-md-6 col-xs-12\">{{order.project.sellerAddress.addressLine2}}</div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Location: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerAddress.location; else elseBlock\">{{order.project.sellerAddress.location}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerAddress.location\" name=\"sellerAddress.location\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">State: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerAddress.stateName; else elseBlock\">{{order.project.sellerAddress.stateName}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerAddress.stateName\" name=\"sellerAddress.stateName\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Zip Code: </div>\r\n                        <div class=\"col-md-6 col-xs-12\" *ngIf=\"order.project.sellerAddress.postalCode; else elseBlock\">{{order.project.sellerAddress.postalCode}}</div>\r\n                        <input type=\"text\" style=\"display:none;\" class=\"form-control\" required [(ngModel)]=\"order.project.sellerAddress.postalCode\" name=\"sellerAddress.postalCode\" />\r\n                        <ng-template #elseBlock>\r\n                            <div style=\"color:red; font-style:italic\">This field is required</div>\r\n                        </ng-template>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n                        <div *ngIf=\"recordState == 'new'\"><span class=\"glyphicon glyphicon-pencil\"></span><a data-toggle=\"modal\" data-target=\"#editSellerAddressModal\" data-backdrop=\"static\"> Edit</a></div>\r\n                    </div>\r\n                </div>\r\n\r\n            </fieldset>\r\n            <fieldset>\r\n                <legend>Order Details</legend>\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Order Submitted By: </div> <div class=\"col-md-6 col-xs-12\">{{order.submittedByUserName}}</div>\r\n\r\n                        <div class=\"col-md-12\" style=\"padding: 5px 0px;\">\r\n                            <div class=\"col-md-6 col-xs-12 as-lnk\">\r\n                                <label class=\"required\">Order Release Date:</label>\r\n                            </div>\r\n                            <div class=\"col-md-6 col-xs-12\">\r\n                                <kendo-datepicker [disabled]=\"recordState == 'submitted'\" #datepicker id=\"orderReleaseDate\"\r\n                                                  class=\"form-control\" required name=\"orderReleaseDate\"\r\n                                                  [min]=\"releaseDateMin\"\r\n                                                  [(ngModel)]=\"order.orderReleaseDate\" placeholder=\"Select ...\">\r\n                                </kendo-datepicker>\r\n                                <!--<div> orderReleaseDate: {{order.orderReleaseDate}}</div>-->\r\n                                <!--<input type=\"date\" class=\"form-control\" required [(ngModel)]=\"order.orderReleaseDate\" name=\"orderReleaseDate\" />-->\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--<div class=\"form-group col-md-12\">\r\n                            <label class=\"control-label as-lnk\">Order Release Date: </label>\r\n\r\n                            <kendo-datepicker class=\"form-control\" [value]=\"order.orderReleaseDate\" placeholder=\"select...\">\r\n                            </kendo-datepicker>\r\n                        </div>-->\r\n\r\n\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">\r\n                            <label class=\"required\">Purchase Order Number:</label>\r\n                        </div>\r\n                        <div class=\"col-md-6 col-xs-12\">\r\n                            <input class=\"form-control\"\r\n                                   required maxlength=\"22\"\r\n                                   placeholder=\"Maximum 22 characters\"\r\n                                   [(ngModel)]=\"order.poNumber\" name=\"poNumber\"\r\n                                   [disabled]=\"recordState == 'submitted'\" />\r\n                        </div>\r\n                        <!--<div class=\"col-md-12\">\r\n                            <label class=\"control-label as-lnk\">Purchase Order Number: </label>\r\n                            <input type=\"text\" style=\"max-width:400px;\" class=\"form-control\" [(ngModel)]=\"order.poNumber\" name=\"poNumber\" />\r\n                        </div>-->\r\n\r\n                        <div *ngIf=\"recordState == 'new'\" class=\"col-md-12\">\r\n                            <label class=\"control-label as-lnk required\">Purchase Order Attachment: </label>\r\n                            <kendo-upload required [autoUpload]=\"true\"\r\n                                          [saveUrl]=\"poUploadUrl\"\r\n                                          [multiple]=\"false\"\r\n                                          [(ngModel)]=\"poAttachment\"\r\n                                          name=\"PurchaseOrderAttachment\"\r\n                                          (select)=\"selectEventHandler($event)\"\r\n                                          (upload)=\"uploadEventHandler($event)\"\r\n                                          [withCredentials]=\"true\"\r\n                                          (success)=\"successEventHandler($event)\"\r\n                                          (error)=\"errorEventHandler($event)\">\r\n                            </kendo-upload>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"recordState == 'submitted'\">\r\n                            <label class=\"col-md-6 col-xs-12 as-lnk required\">Purchase Order Attachment: </label>\r\n                            <div class=\"col-md-6 col-xs-12\"><a href=\"/document/QuoteOrder/{{order.quoteId}}/?filename={{order.poAttachmentFileName}}\" target=\"_blank\">{{order.poAttachmentFileName}}</a></div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"col-md-5 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Total Net Price: </div> <div class=\"col-md-6 col-xs-12\">{{order.totalNetPrice | currency:'USD':true:'1.2-2'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Total Discount Provided: </div> <div class=\"col-md-6 col-xs-12\">{{order.totalDiscountPercent*100}}%</div>\r\n                        <div class=\"col-md-12\">\r\n                            <label class=\"control-label as-lnk required\">Delivery Contact Details: </label>\r\n                            <!--<div style=\"font-size:smaller; font-style:italic; color:lightgray;\">(maximum 75 characters)</div>-->\r\n                            <input type=\"text\" style=\"max-width:400px;\" class=\"form-control\"\r\n                                   required maxlength=\"75\"\r\n                                   placeholder=\"Maximum 75 characters\"\r\n                                   [(ngModel)]=\"order.comments\" name=\"orderComments\"\r\n                                   [disabled]=\"recordState == 'submitted'\" />\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"hidden-xs col-md-1\"></div>\r\n                </div>\r\n            </fieldset>\r\n\r\n            <fieldset>\r\n                <legend>Order Items</legend>\r\n                <order-form-quote-items [quoteId]=\"order.quoteId\"></order-form-quote-items>\r\n            </fieldset>\r\n\r\n            <fieldset>\r\n                <div *ngIf=\"recordState == 'new'\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <a class=\"btn btn-default\" href=\"/v2/#/quote/quote/{{order.quoteId}}/existingRecord\" style=\"width:70px;\">Cancel</a>\r\n                    <button class=\"btn btn-primary\" style=\"width:70px;\" [disabled]=\"orderForm.invalid\" (click)=\"submit()\">Submit</button>\r\n                </div>\r\n                <div *ngIf=\"recordState == 'submitted'\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <a class=\"btn btn-default\" href=\"/v2/#/quote/quote/{{order.quoteId}}/existingRecord\">Back To Quote</a>\r\n                </div>\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<edit-project-location *ngIf=\"order\" [(project)]=\"order.project\"></edit-project-location>\r\n\r\n<!-- Modal -->\r\n<edit-customer-address *ngIf=\"order\" [(project)]=\"order.project\"></edit-customer-address>\r\n\r\n<!-- Modal -->\r\n<edit-seller-address *ngIf=\"order\" [(project)]=\"order.project\"></edit-seller-address>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/orders/components/order-form/order-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_order_service__ = __webpack_require__("../../../../../src/app/orders/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(router, route, toastrSvc, orderSvc) {
        //this.activeTab = this.route.snapshot.url[0].path;
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.orderSvc = orderSvc;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.order = this.route.snapshot.data['orderFormModel'].model;
        this.recordState = this.route.snapshot.paramMap.get('recordState');
        if (this.recordState == "new") {
            if (this.order.hasConfiguredModel) {
                this.releaseDateMin = new Date();
                this.releaseDateMin.setDate((new Date()).getDate() + 28);
                this.order.orderReleaseDate = this.releaseDateMin;
                //this.order.orderReleaseDate = new Date();
                //this.order.orderReleaseDate.setDate((new Date()).getDate() + 28);
            }
            else {
                this.order.orderReleaseDate = null;
            }
        }
        else {
            this.order.orderReleaseDate = new Date(Date.parse(this.order.orderReleaseDate));
        }
        //this.order.orderReleaseDate = new Date(Date.parse(this.order.orderReleaseDate)); // 1/1/1
        //this.order.orderReleaseDate = new Date();// current date
        this.poUploadUrl = "/api/Order/UploadPOAttachment";
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        //this.recordState = this.route.snapshot.paramMap.get('recordState');
    };
    OrderFormComponent.prototype.selectEventHandler = function (e) {
        //console.log("File selected");
        this.order.poAttachmentFileName = e.files[0].name;
    };
    OrderFormComponent.prototype.uploadEventHandler = function (e) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.order.quoteId,
        };
    };
    OrderFormComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
            //this.toastrSvc.Success("Quote '" + this.quote.title + "' has been updated.");
            //this.reloadDataEvent.emit();
            //$('button.close[data-dismiss=modal]').click();
        }
    };
    OrderFormComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    //====Deprecated: This is to fix kendo date picker view jump on open===
    //public datePickerOpen(): void {
    //    setTimeout(this.jumpToDatePicker.bind(this), 50); // wait 0.05 sec
    //}
    //public jumpToDatePicker() {
    //    //location.href = "#orderReleaseDate";
    //    //this.datepicker.open();
    //    document.getElementById("orderReleaseDate").scrollIntoView();
    //}
    //======================================================
    OrderFormComponent.prototype.submit = function () {
        this.order.shipToName = this.order.project.shipToName;
        var self = this;
        bootbox.confirm("<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>", function (result) {
            if (result) {
                //self.loadingIconSvc.Start(jQuery("#main-container"));
                //this.blockUI.start('Loading...');
                bootbox.dialog({ message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Order processing ...</div>' });
                //Post Order
                self.orderSvc.postOrder(self.order)
                    .subscribe(function (resp) {
                    if (resp.isok) {
                        //this.blockUI.stop();
                        //self.loadingIconSvc.Stop(jQuery("#main-container"));
                        bootbox.hideAll();
                        //Send order email notification
                        self.orderSvc.sendOrderEmail(self.order).subscribe();
                        if (self.order.hasConfiguredModel) {
                            bootbox.alert("<p>At the point model creation submittal is accepted, any changes or cancellations to an order with Factory Install Options will incur a 25% cancellation fee.</p>", function () {
                                self.router.navigateByUrl("/quote/quote/" + self.order.quoteId + "/existingRecord");
                            });
                        }
                        else {
                            bootbox.alert("<p>Thank you for submitting the order. Your Daikin Customer Service Representative will review the order and get back to you within 24 hours.<br/> <br/>To cancel the order, please contact your Daikin Customer Service Representative.</p>", function () {
                                self.router.navigateByUrl("/quote/quote/" + self.order.quoteId + "/existingRecord");
                            });
                        }
                    }
                    else {
                        //this.blockUI.stop();
                        //self.loadingIconSvc.Stop(jQuery("#main-container"));
                        bootbox.hideAll();
                        self.toastrSvc.displayResponseMessages(resp);
                    }
                }, function (err) {
                    //this.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    console.log("Error: ", err);
                });
            }
        });
    };
    //validate() {
    //    this.validateProjectInfo();
    //    this.validateOrderDetails();
    //}
    //validateProjectInfo() {
    //}
    //validateOrderDetails() {
    //    if (this.order.orderReleaseDate == null) {
    //        this.orderInfoIsValid = false;
    //    }
    //    if (this.poAttachment == null) {
    //        this.orderInfoIsValid = false;
    //    }
    //    if (this.order.poNumber == null) {
    //        this.orderInfoIsValid = false;
    //    }
    //    if (this.order.comments == null) {
    //        this.orderInfoIsValid = false;
    //    }
    //}
    OrderFormComponent.prototype.stateChange = function (value) {
        for (var i = 0; i < this.order.project.shipToAddress.states.items.length; i++) {
            if (this.order.project.shipToAddress.states.items[i].value == value) {
                this.order.project.shipToAddress.stateName = this.order.project.shipToAddress.states.items[i].text;
            }
        }
    };
    OrderFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'order-form',
            template: __webpack_require__("../../../../../src/app/orders/components/order-form/order-form.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/components/order-form/order-form.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__services_order_service__["a" /* OrderService */]])
    ], OrderFormComponent);
    return OrderFormComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/orders/components/order-item-products/order-item-products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/components/order-item-products/order-item-products.component.html":
/***/ (function(module, exports) {

module.exports = "<kendo-grid *ngIf=\"orderItemProducts\" [data]=\"orderItemProducts\">\r\n\r\n    <kendo-grid-column media=\"(max-width: 450px)\" title=\"Products\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            <dl>\r\n                <dt>Product</dt>\r\n                <dd>{{dataItem.productNumber}}</dd>\r\n                <dt>Product Description</dt>\r\n                <dd>{{dataItem.description}}</dd>\r\n                <dt>Qty</dt>\r\n                <dd>{{dataItem.quantity}}</dd>\r\n                <dt>List Price Each</dt>\r\n                <dd>{{ dataItem.listPrice| currency:'USD':true:'1.2-2' }}</dd>\r\n                <dt>Net Price Each</dt>\r\n                <dd>{{ dataItem.netPrice| currency:'USD':true:'1.2-2' }}</dd>\r\n                <dt>Ext. List Price</dt>\r\n                <dd>{{dataItem.listPrice * dataItem.quantity | currency:'USD':true:'1.2-2' }}</dd>\r\n                <dt>Ext. Net Price</dt>\r\n                <dd>{{dataItem.netPrice * dataItem.quantity | currency:'USD':true:'1.2-2' }}</dd>\r\n            </dl>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"productNumber\" title=\"Product\" width=\"15%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.productNumber}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"description\" title=\"Product Description\" width=\"20%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.description}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"quantity\" title=\"Qty\" width=\"5%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.quantity}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"listPriceEach\" title=\"List Price Each\" format=\"{0:c}\" width=\"15%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{ dataItem.listPrice| currency:'USD':true:'1.2-2' }}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"netPriceEach\" title=\"Net Price Each\" format=\"{0:c}\" width=\"15%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{ dataItem.netPrice| currency:'USD':true:'1.2-2' }}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"extListPrice\" title=\"Ext. List Price\" format=\"{0:c}\" width=\"15%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.listPrice * dataItem.quantity | currency:'USD':true:'1.2-2' }}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"extNetPrice\" title=\"Ext. Net Price\" format=\"{0:c}\" width=\"15%\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            {{dataItem.netPrice * dataItem.quantity | currency:'USD':true:'1.2-2' }}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/orders/components/order-item-products/order-item-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderItemProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_services_quote_service__ = __webpack_require__("../../../../../src/app/quotes/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], OrderItemProductsComponent.prototype, "quoteId", void 0);
    OrderItemProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'order-item-products',
            template: __webpack_require__("../../../../../src/app/orders/components/order-item-products/order-item-products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/components/order-item-products/order-item-products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__quotes_services_quote_service__["a" /* QuoteService */]])
    ], OrderItemProductsComponent);
    return OrderItemProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/components/order/order.component.html":
/***/ (function(module, exports) {

module.exports = "<div>Test Mapics API</div>\r\n<button (click)=\"getSubmittalOrder()\">Get Submittal Order</button>\r\n"

/***/ }),

/***/ "../../../../../src/app/orders/components/order/order.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_order_service__ = __webpack_require__("../../../../../src/app/orders/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderSvc) {
        this.orderSvc = orderSvc;
    }
    OrderComponent.prototype.ngOnInit = function () { };
    OrderComponent.prototype.getSubmittalOrder = function () {
        this.orderSvc.getSubmittalOrder()
            .then(function (resp) {
            var result = resp;
            debugger;
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    OrderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'order',
            template: __webpack_require__("../../../../../src/app/orders/components/order/order.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_order_service__["a" /* OrderService */]])
    ], OrderComponent);
    return OrderComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/orders/components/orders-grid/orders-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".row {\r\n  padding:0px;\r\n}\r\n\r\n.col-md-6 .col-md-4 .col-md-3{\r\n  padding: 0px;\r\n}\r\n\r\n.col-md-2{\r\n    padding-right:2%;\r\n}\r\n\r\n.clear-search-btn {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0.8em;\r\n    border: 0;\r\n    outline: 0;\r\n    background: none;\r\n    font-family: \"museo-sans\", sans-serif;\r\n    font-weight: 900;\r\n    color: #aaa;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-btn {\r\n    padding: 3px 10px 2px 10px;\r\n    margin: 0;\r\n    width: auto;\r\n    vertical-align: middle;\r\n}\r\n\r\n\r\n.search-button-row {\r\n    padding-left: 0px;\r\n}\r\n\r\n#orderSearchBox {\r\n    display: inline-block;\r\n    width: 250px;\r\n}\r\n\r\n#orderSearchButton {\r\n    display: inline-block;\r\n    background-color: #b3e6ff;\r\n}\r\n\r\n.export-to-excel-btn {\r\n    -ms-flex-align: start;\r\n        align-items: flex-start;\r\n    background-attachment: scroll;\r\n    background-clip: border-box;\r\n    background-image: linear-gradient(rgb(241, 241, 241), rgb(209, 209, 209));\r\n    background-origin: padding-box;\r\n    background-size: auto;\r\n    border-bottom-color: rgb(184, 184, 184);\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(184, 184, 184);\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-right-color: rgb(184, 184, 184);\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-top-color: rgb(184, 184, 184);\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n    color: rgb(77, 84, 93);\r\n    cursor: pointer;\r\n    display: block;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    float: right;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 900;\r\n    height: 30px;\r\n    letter-spacing: normal;\r\n    line-height: 15px;\r\n    margin: 0px;\r\n    overflow-x: visible;\r\n    overflow-y: visible;\r\n    padding-bottom: 6px;\r\n    padding-left: 12px;\r\n    padding-right: 12px;\r\n    padding-top: 6px;\r\n    text-align: center;\r\n    -webkit-text-size-adjust: 100%;\r\n        -ms-text-size-adjust: 100%;\r\n            text-size-adjust: 100%;\r\n    text-transform: uppercase;\r\n    -ms-touch-action: manipulation;\r\n        touch-action: manipulation;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    vertical-align: middle;\r\n    white-space: nowrap;\r\n    width: 194px;\r\n    word-spacing: 0px;\r\n    -ms-writing-mode: lr-tb;\r\n        writing-mode: horizontal-tb;\r\n}\r\n\r\n.k-icon .k-i-excel {\r\n    width: 1em;\r\n    height: 1em; \r\n    -webkit-font-smoothing: antialiased;\r\n    font-size: 16px;\r\n    font-family: 'WebComponentsIcons';\r\n    font-style: normal;\r\n    font-variant: normal;\r\n    font-weight: normal;\r\n    line-height: 1;\r\n    speak: none;\r\n    text-transform: none;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    padding-right: 5px;\r\n}\r\n\r\n.order-params-row {\r\n    background-color: #E5F2FA;\r\n    padding: 10px;\r\n    height: 60px;\r\n    margin: 15px;\r\n}\r\n\r\n.orders-search-labels {\r\n    box-sizing: content-box;\r\n    color: rgb(51, 51, 51);\r\n    cursor: default;\r\n    display: inline-block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 600;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    margin-bottom: 5px;\r\n    max-width: 100%;\r\n    -webkit-text-size-adjust: 100%;\r\n        -ms-text-size-adjust: 100%;\r\n            text-size-adjust: 100%;\r\n}\r\n\r\n.kendo-autocomplete {\r\n    width: 100%;\r\n}\r\n.kendo-dropdownlist {\r\n    width: 100%;\r\n}\r\n\r\n.kendo-datepicker {\r\n    width: 100%;\r\n}\r\n\r\n.btn-reset-span {\r\n    padding-left: 40px;\r\n}\r\n\r\n.btn-refresh-all {\r\n    border: none;\r\n    color: white;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    background-color: #008CBA;\r\n    margin-top: 15px;\r\n    padding: 8px;\r\n}\r\n\r\n.blue .codeColumn {\r\n    background-color: #D3E7F2;\r\n}\r\n\r\n.purple .codeColumn {\r\n    background-color: #D7D1EB;\r\n}\r\n\r\n.yellow .codeColumn {\r\n    background-color: #F5F0BC;\r\n}\r\n\r\n.lightgreen .codeColumn {\r\n    background-color: #C1D4BE;\r\n}\r\n\r\n.green .codeColumn {\r\n    background-color: #BCF5D3;\r\n}\r\n\r\n.grey .codeColumn {\r\n    background-color: #C2C8CF;\r\n}\r\n\r\n.pink .codeColumn {\r\n    background-color: #EBD1D8;\r\n}\r\n\r\n.k-grid a.order-field-anchortag {\r\n    color: #0080ff;\r\n    text-decoration: underline;\r\n}\r\n\r\n#orderListGrid table, #orderListGrid th, #orderListGrid td {\r\n    border-bottom: 1px solid #cccccc;\r\n    border-collapse: collapse;\r\n}\r\n\r\n/*nav a:visited, a:link {\r\n    color: rgb(0, 161, 228);\r\n}*/\r\n\r\n \r\n \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/orders/components/orders-grid/orders-grid.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n\r\n<div id=\"main-container\" class=\"container-fluid\">\r\n    <div class=\"main-content\">\r\n        <div class=\"tab-header\">\r\n            <header>\r\n                <h4>Orders Submitted</h4>\r\n            </header>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"search-button-row\">\r\n                        <input #mainSearchBox\r\n                               type=\"text\"\r\n                               class=\"k-input k-textbox\"\r\n                               id=\"orderSearchBox\"\r\n                               name=\"orderSearchFilter\"\r\n                               placeholder=\"Search Orders..\" />\r\n                        <button id=\"orderSearchButton\" (click)=\"onMainSearchBoxClick($event)\">\r\n                            <span class=\"k-icon k-i-search\"></span>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <button type=\"button\" (click)=\"onExportToExcelClick()\" class=\"export-to-excel-btn\">\r\n                        <span class=\"k-icon k-i-excel\"></span>Export To Excel\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"order-params-row\">\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"userAutoComplete\" class=\"orders-search-labels\">User </label>\r\n                        <span class=\"kendo-input-autocomplete\">\r\n                            <kendo-autocomplete #userListNode\r\n                                                class=\"kendo-autocomplete\"\r\n                                                [data]=\"userList\"\r\n                                                [filterable]=\"true\"\r\n                                                (filterChange)=\"handleUserListChange($event)\"\r\n                                                (valueChange)=\"handleUserSelectionChange($event)\">\r\n                            </kendo-autocomplete>\r\n                        </span>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"orderStatusDDL\" class=\"orders-search-labels\">Order Status </label>\r\n                        <kendo-dropdownlist #orderStatusNode\r\n                                            class=\"kendo-dropdownlist\"\r\n                                            [data]=\"orderStatusTypeList\"\r\n                                            [textField]=\"'text'\"\r\n                                            [valueField]=\"'value'\"\r\n                                            (valueChange)=\"handleOrderStatusListChange($event)\"\r\n                                            [valuePrimitive]=\"true\"\r\n                                            [(ngModel)]=\"defaultOrderStatus\">\r\n                        </kendo-dropdownlist>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"userAutoComplete\" class=\"orders-search-labels\">Business Name </label>\r\n                        <kendo-autocomplete #businessNameNode\r\n                                            class=\"kendo-autocomplete\"\r\n                                            [data]=\"businessNameList\"\r\n                                            [filterable]=\"true\"\r\n                                            (filterChange)=\"handleBusinessNameChange($event)\"\r\n                                            (valueChange)=\"handleBusinessNameSelectionChange($event)\">\r\n                        </kendo-autocomplete>\r\n                    </div>\r\n                    <div class=\"col-md-1\">\r\n\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"fromDate\" class=\"orders-search-labels\">From Date </label>\r\n                        <kendo-datepicker #fromDateNode\r\n                                          class=\"kendo-datepicker\"\r\n                                          [format]=\"'MM/dd/yyyy'\"\r\n                                          [value]=\"startDateValue\"\r\n                                          (valueChange)=\"handleStartDateChange($event)\">\r\n                        </kendo-datepicker>\r\n                    </div>\r\n                    <div class=\"col-md-2\">\r\n                        <label for=\"toDate\" class=\"orders-search-labels\">To Date </label>\r\n                        <kendo-datepicker #toDateNode\r\n                                          class=\"kendo-datepicker\"\r\n                                          [format]=\"'MM/dd/yyyy'\"\r\n                                          [value]=\"endDateValue\"\r\n                                          (valueChange)=\"handleEndDateChange($event)\">\r\n                        </kendo-datepicker>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-1\">\r\n                        <span class=\"btn-reset-span\">\r\n                            <button type=\"button\" class=\"btn-refresh-all\" (click)=\"onResetButtonClick()\">RESET</button>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n            <!--ORDERS GRID-->\r\n            <kendo-grid #grid=\"kendoGrid\" id=\"orderListGrid\"\r\n                        [kendoGridBinding]=\"orderListGridData\"\r\n                        [pageSize]=\"pageSize\"\r\n                        [skip]=\"skip\"\r\n                        [pageable]=\"{\r\n                              buttonCount: buttonCount,\r\n                              info: info,\r\n                              type: type,\r\n                              pageSizes: pageSizes,\r\n                              previousNext: previousNext\r\n                            }\"\r\n                        [columnMenu]=\"true\"\r\n                        [filterable]=\"true\"\r\n                        [sortable]=\"true\"\r\n                        [resizable]=\"true\"\r\n                        [rowClass]=\"rowCallback\">\r\n                <kendo-grid-column field=\"projectName\" media=\"(min-width: 450px)\" title=\"Project Name\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        <a class=\"order-field-anchortag\"\r\n                           href=\"/v2/#/project/{{dataItem.projectId}}\">\r\n                            {{dataItem.projectName}}\r\n                        </a>\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"activeQuote\" media=\"(min-width: 450px)\" title=\"Active Quote\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.activeQuoteTitle}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"businessName\" media=\"(min-width: 450px)\"\r\n                                   title=\"Business Name\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.businessName}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"projectOwnerName\" media=\"(min-width: 450px)\"\r\n                                   title=\"Project Owner Name\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.projectOwnerName}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"dealerContractorName\" media=\"(min-width: 450px)\"\r\n                                   title=\"Dealer/Contractor Name\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.dealerContractorName}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"projectDate\" media=\"(min-width: 450px)\" title=\"Project Date\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.projectDate | date : 'shortDate'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"orderStatusDescription\" media=\"(min-width: 450px)\" title=\"Order Status\" \r\n                                   [class]=\"{'codeColumn': true}\"> \r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        <a class=\"order-field-anchortag\" href=\"/v2/#/orderForm/{{dataItem.projectId}}/{{dataItem.quoteId}}/submitted\">\r\n                            {{dataItem.orderStatusDescription }}\r\n                        </a>\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"poNumber\" media=\"(min-width: 450px)\" title=\"PO Number\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.poNumber}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"erpOrderNumber\" media=\"(min-width: 450px)\" title=\"ERP Order Number\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.erpOrderNumber}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"poAttachmentName\" media=\"(min-width: 450px)\" title=\"PO Attachment\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        <a class=\"order-field-anchortag\" href=\"/ProjectDashboard/GetPOAttachment?quoteId={{dataItem.quoteId}}&poAttachmentFileName={{dataItem.poAttachmentName}}\"\r\n                           target=\"_blank\">\r\n                            {{dataItem.poAttachmentName}}\r\n                        </a>\r\n\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"submitDate\" media=\"(min-width: 450px)\" title=\"Order Date\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.submitDate | date : 'shortDate'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"estimatedDeliveryDate\" media=\"(min-width: 450px)\"\r\n                                   title=\"Est. Delivery Date\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.estimatedDeliveryDate | date : 'shortDate'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"orderReleaseDate\" media=\"(min-width: 450px)\"\r\n                                   title=\"Order Release Date\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.orderReleaseDate | date : 'shortDate'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"totalListPrice\" media=\"(min-width: 450px)\"\r\n                                   title=\"Total List\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.totalListPrice | currency:'USD':true:'1.2-2'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"totalNetPrice\" media=\"(min-width: 450px)\" title=\"Total Net\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.totalNetPrice | currency:'USD':true:'1.2-2'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"totalSellPrice\" media=\"(min-width: 450px)\"\r\n                                   title=\"Total Sell\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.totalSellPrice | currency:'USD':true:'1.2-2'}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"darComStatus\" media=\"(min-width: 450px)\"\r\n                                   title=\"DAR/COM Status\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.darComStatus}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"vrvODUcount\" media=\"(min-width: 450px)\"\r\n                                   title=\"VRV ODU #\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.vrvODUcount}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"splitODUcount\" media=\"(min-width: 450px)\"\r\n                                   title=\"Split ODU #\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.splitODUcount}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n                <kendo-grid-column field=\"pricingTypeDescription\" media=\"(min-width: 450px)\"\r\n                                   title=\"Pricing Strategy\" [hidden]=\"true\">\r\n                    <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                        {{dataItem.pricingTypeDescription}}\r\n                    </ng-template>\r\n                </kendo-grid-column>\r\n\r\n                <ng-template kendoGridDetailTemplate let-dataItem>\r\n                    <section>\r\n                        <order-item-products [quoteId]=\"dataItem.quoteId\"></order-item-products>\r\n                    </section>\r\n                </ng-template>\r\n                <kendo-grid-excel fileName=\"Orders.xlsx\"></kendo-grid-excel> \r\n            </kendo-grid>\r\n        </div>\r\n    </div>\r\n\r\n    <!--kendo dialog export to excel -->\r\n    <kendo-dialog *ngIf=\"exportToExcelDialogOpen\" \r\n                  title=\"{{exportToExcelDialogTitle}}\" \r\n                  (close)=\"closeExportToExcelDialog()\" >\r\n        <p>{{exportToExcelDialogMessage}}</p> <br />\r\n        <kendo-dropdownlist #exportToExcelNode\r\n                            class=\"kendo-dropdownlist\"\r\n                            [data]=\"exportToExcelOptions\"\r\n                            [(ngModel)]=\"defaultExportToExcelOption\">\r\n\r\n        </kendo-dropdownlist>\r\n        <br /><br />\r\n        <kendo-dialog-actions>\r\n            <button kendoButton class=\"k-button\" (click)=\"exportToExcel(grid)\" primary=\"true\" data-toggle=\"modal\" icon=\"file-excel\">Export</button>\r\n\r\n            <kendo-excelexport [data]=\"orderListWithProducts\" fileName=\"OrdersWithProducts.xlsx\" #excelexport>\r\n                <kendo-excelexport-column field=\"projectName\" title=\"Project Name\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"activeQuoteTitle\" title=\"Active Quote\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"businessName\" title=\"Business Name\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"projectOwnerName\" title=\"Project Owner Name\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"dealerContractorName\" title=\"Dealer/Contractor Name\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"projectDate\" title=\"Project Date\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"orderStatusDescription\" title=\"Order Status\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"poNumber\" title=\"PO Number\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"erpOrderNumber\" title=\"ERP Order Number\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"poAttachmentName\" title=\"PO Attachment\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"submitDate\" title=\"Order Date\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"estimatedDeliveryDate\" title=\"Est. Delivery Date\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"orderReleaseDate\" title=\"Order Release Date\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"totalListPrice\" title=\"Total List\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"totalNetPrice\" title=\"Total Net\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"totalSellPrice\" title=\"Total Sell\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"darComStatus\" title=\"DAR/COM Status\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"vrvODUcount\" title=\"VRV ODU #\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"splitODUcount\" title=\"Split ODU #\">\r\n                </kendo-excelexport-column>\r\n                <kendo-excelexport-column field=\"pricingTypeDescription\" title=\"Pricing Strategy\">\r\n                </kendo-excelexport-column>\r\n               \r\n                <kendo-excelexport-column-group title=\"Products\" [headerCellOptions]=\"{ textAlign: 'center' }\">\r\n                    <kendo-excelexport-column field=\"productNumber\" title=\"Product Number\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"description\" title=\"Product Description\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"quantity\" title=\"Qty\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"listPrice\" title=\"List Price Each\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"netPrice\" title=\"Net Price Each\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"extListPrice\" title=\"Ext. List Price\">\r\n                    </kendo-excelexport-column>\r\n                    <kendo-excelexport-column field=\"extNetPrice\" title=\"Ext. Net Price\">\r\n                    </kendo-excelexport-column>\r\n                </kendo-excelexport-column-group>\r\n            </kendo-excelexport>\r\n        </kendo-dialog-actions>\r\n    </kendo-dialog>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/orders/components/orders-grid/orders-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_service__ = __webpack_require__("../../../../../src/app/orders/services/order.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__quotes_services_quote_service__ = __webpack_require__("../../../../../src/app/quotes/services/quote.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_models_searchOrders__ = __webpack_require__("../../../../../src/app/shared/models/searchOrders.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var OrdersGridComponent = /** @class */ (function () {
    /**
     * Dependency Injection
     **/
    function OrdersGridComponent(toastrSvc, orderSvc, quoteSvc, router, route) {
        this.toastrSvc = toastrSvc;
        this.orderSvc = orderSvc;
        this.quoteSvc = quoteSvc;
        this.router = router;
        this.route = route;
        this.orderListGridData = [];
        this.pageSize = 20;
        this.skip = 0;
        this.buttonCount = 20;
        this.info = true;
        this.type = 'numeric';
        this.pageSizes = true;
        this.previousNext = true;
        this.default365DaysOrderList = [];
        this.fiveYearOrderItemList = [];
        this.orderListWithProducts = [];
        this.productListItems = [];
        this.sourceUserList = [];
        this.userList = [];
        this.sourceBusinessNameList = [];
        this.businessNameList = [];
        this.exportToExcelOptions = ["Orders", "Orders with products"];
        this.defaultExportToExcelOption = "Orders";
        this.orderStatusTypeList = [];
        this.ddlPlaceHolder = { text: 'All', value: null };
        this.defaultOrderStatus = 0;
        this.exportToExcelDialogOpen = false;
        this.exportToExcelTemplate = false;
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_7__shared_models_searchOrders__["a" /* SearchOrders */]();
        this.inputParams = false;
        this.rowCallback = function (context) {
            switch (context.dataItem.orderStatusDescription) {
                case 'Submitted':
                    return { blue: true };
                case 'Picked':
                    return { purple: true };
                case 'Awaiting CSR':
                    return { yellow: true };
                case 'Accepted':
                    return { lightgreen: true };
                case 'Shipped':
                    return { green: true };
                case 'Canceled':
                    return { grey: true };
                case 'In Process':
                    return { pink: true };
                default:
                    return {};
            }
        };
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ;
    /**
     * angular life cycle hooks
     */
    OrdersGridComponent.prototype.ngOnInit = function () {
        //set the default 365 date range
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt('364')); //set initial list to last 365 days
        this.startDateFiveYear = this.addDays(new Date(), parseInt('1825'));
        this.getOrderItemsForLast365Days(); // Fetch the item list with the initial state
        this.getUserList(); // user list for User autocomplete box
        this.getOrderStatusTypeList();
        this.getBusinessNameList();
        this.defaultOrderStatus = 0; //set dropdown list to 'All'
    };
    OrdersGridComponent.prototype.ngAfterViewInit = function () {
        // Expand the first row initially
        //this.grid.expandRow(0);
        __WEBPACK_IMPORTED_MODULE_8_jquery__(".k-grid .k-filter-row").hide();
    };
    /**
     * event handlers
     */
    OrdersGridComponent.prototype.onMainSearchBoxClick = function (eventValue) {
        this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleUserListChange = function (eventValue) {
        this.userList = this.sourceUserList
            .filter(function (s) { return s.toLowerCase().indexOf(eventValue.toLowerCase()) !== -1; });
    };
    OrdersGridComponent.prototype.handleUserSelectionChange = function (eventValue) {
        if (eventValue != "")
            this.orderListGridData = this.FilterUserSelectionChange(eventValue);
        else
            this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleBusinessNameChange = function (eventValue) {
        this.businessNameList = this.sourceBusinessNameList
            .filter(function (x) { return x.toLowerCase().indexOf(eventValue.toLowerCase()) !== -1; });
    };
    OrdersGridComponent.prototype.handleBusinessNameSelectionChange = function (eventValue) {
        if (eventValue != "")
            this.orderListGridData = this.FilterBusinessNameSelectionChange(eventValue);
        else
            this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleOrderStatusListChange = function (eventValue) {
        var dropdownSelectionText = this.orderStatusTypeList.find(function (obj) { return obj.value === eventValue; }).text;
        this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleStartDateChange = function (event) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    };
    OrdersGridComponent.prototype.handleEndDateChange = function (event) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    };
    OrdersGridComponent.prototype.FilterUserSelectionChange = function (userNameVal) {
        return this.orderListGridData.filter(function (x) { return x.projectOwnerName.trim() == userNameVal.trim(); });
    };
    OrdersGridComponent.prototype.FilterBusinessNameSelectionChange = function (businessNameVal) {
        return this.orderListGridData.filter(function (x) { return x.businessName.trim() == businessNameVal.trim(); });
    };
    //on date time picker change, also do further filters after server trip
    OrdersGridComponent.prototype.FilterWithAllSearchParams = function () {
        var _this = this;
        if (this.fromDateNode.value.toLocaleString() == this.startDateValue.toLocaleString() &&
            this.toDateNode.value.toLocaleString() == this.endDateValue.toLocaleString()) {
            this.orderListGridData = this.default365DaysOrderList;
        }
        else if (this.fromDateNode.value > this.startDateFiveYear) {
            this.orderListGridData = this.fiveYearOrderItemList
                .filter(function (x) {
                var convertedSubmitDate = new Date(Date.parse(x.submitDate));
                return convertedSubmitDate >= _this.fromDateNode.value
                    && convertedSubmitDate <= _this.toDateNode.value;
            });
        }
        else {
            this.searchParams = {
                startDate: this.fromDateNode.value.toLocaleDateString(),
                endDate: this.toDateNode.value.toLocaleDateString()
            };
            this.orderListGridData = this.getOrdersBasedOnSearchParams(this.searchParams, this.inputParams = true);
        }
        this.FilterAgainWithRemainingInputParams(this.orderListGridData); //filter more with other possible search params;
    };
    /**
     * api calls through services
     */
    OrdersGridComponent.prototype.getOrderItemsForLast365Days = function () {
        var _this = this;
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));
        this.blockUI.start('Loading...');
        return this.orderSvc.getLast365DaysOrderItemList()
            .subscribe(function (data) {
            _this.fiveYearOrderItemList = data.model;
            //var initialDate365Days = this.getFormattedDate(this.startDateValue, "inCSharpFormat");
            _this.default365DaysOrderList = _this.fiveYearOrderItemList
                .filter(function (obj) {
                var convertedSubmitDate = new Date(Date.parse(obj.submitDate));
                return convertedSubmitDate >= _this.startDateValue;
            });
            _this.orderListGridData = _this.default365DaysOrderList;
            //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
            _this.blockUI.stop();
        });
    };
    OrdersGridComponent.prototype.getOrdersBasedOnSearchParams = function (searchParams, inputParams) {
        var _this = this;
        this.blockUI.start('Loading...');
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));    
        return this.orderSvc.getOrdersBasedOnSearchParams(searchParams)
            .subscribe(function (data) {
            _this.orderListGridData = data.model;
            _this.blockUI.stop();
            //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
        });
    };
    OrdersGridComponent.prototype.getUserList = function () {
        var _this = this;
        return this.orderSvc.getUserList()
            .subscribe(function (data) {
            _this.sourceUserList = data.model.map(function (x) { return x.userFullName; });
        });
    };
    OrdersGridComponent.prototype.getBusinessNameList = function () {
        var _this = this;
        return this.orderSvc.getBusinessNameList()
            .subscribe(function (data) {
            _this.sourceBusinessNameList = data.model.map(function (x) { return x.businessName; });
        });
    };
    OrdersGridComponent.prototype.getOrderStatusTypeList = function () {
        var _this = this;
        return this.orderSvc.getOrderStatusList()
            .subscribe(function (data) {
            _this.orderStatusTypeList = [{ text: 'All', value: 0 }];
            data.model.forEach(function (x, index) {
                _this.orderStatusTypeList.push({ text: x.displayText, value: x.keyId });
            });
            _this.orderStatusTypeList.sort(function (a, b) { return a.text < b.text ? -1 : a.text > b.text ? 1 : 0; } // sort by descending
            );
        });
    };
    /**
     *  UI button Click Events
     * */
    OrdersGridComponent.prototype.closeExportToExcelDialog = function () {
        this.exportToExcelDialogOpen = false;
    };
    OrdersGridComponent.prototype.onExportToExcelClick = function () {
        this.openExportToExcelDialog();
    };
    OrdersGridComponent.prototype.exportToExcel = function (grid) {
        //this.loadingIconSvc.Start(jQuery("#orderListGrid")); 
        if (this.exportToExcelNode.value == "Orders") {
            grid.data = this.orderListGridData;
            grid.saveAsExcel();
        }
        else {
            this.excelexport.save();
        }
        this.exportToExcelDialogOpen = false;
        //this.loadingIconSvc.Stop(jQuery("#orderListGrid")); 
    };
    OrdersGridComponent.prototype.onResetButtonClick = function () {
        this.mainSearchBox.nativeElement.value = "";
        this.userListNode.text = "";
        this.businessNameNode.text = "";
        this.defaultOrderStatus = 0;
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt('365')); //set initial list to last 365 days
        this.orderListGridData = this.default365DaysOrderList;
    };
    /* Common functions */
    OrdersGridComponent.prototype.addDays = function (date, days) {
        var dateInMs = date.setDate(date.getDate() - days);
        return new Date(dateInMs);
    };
    OrdersGridComponent.prototype.openDateSelectionErrorDialog = function () {
        this.toastrSvc.Warning("'From Date' can not be less than 'To Date'. Please, select another date range.");
        this.onResetButtonClick();
    };
    OrdersGridComponent.prototype.openDateRangeErrorDialog = function () {
        this.toastrSvc.Warning("'Your selection returned large set of data. Please shorten your date range selection.");
        this.onResetButtonClick();
    };
    OrdersGridComponent.prototype.openExportToExcelDialog = function () {
        var _this = this;
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = "Export To Excel";
        this.exportToExcelDialogMessage = "Please select an export type:";
        this.orderListWithProducts = [];
        this.orderListGridData.forEach(function (order, index) {
            _this.quoteSvc.getQuoteItems(order.quoteId)
                .then(function (resp) {
                if (resp.isok) {
                    _this.productListItems = resp.model;
                    _this.productListItems.forEach(function (product, index) {
                        var extNetPriceValue = product.netPrice * product.quantity; //create additional properties by computing
                        var extListPriceValue = product.listPrice * product.quantity; //create additional properties by computing
                        Object.assign(product, { extNetPrice: extNetPriceValue, extListPrice: extListPriceValue });
                        _this.orderListWithProducts.push(Object.assign({}, order, product)); //final object for excel export with products
                    });
                }
            }).catch(function (error) {
                //console.log('Retrieval error: ${error}');
                console.log(error);
            });
        });
    };
    /**
     * Filter with all input params
     * @param recycledOrderListData
     */
    /**/
    OrdersGridComponent.prototype.FilterAgainWithRemainingInputParams = function (recycledOrderListData) {
        var searchVal = this.mainSearchBox.nativeElement.value;
        var userNameVal = this.userListNode.value;
        var orderStatusVal = this.orderStatusNode.value;
        var businessNameVal = this.businessNameNode.value;
        var orderStatusDesc = this.orderStatusTypeList.find(function (obj) { return obj.value == orderStatusVal; }).text;
        var orderListDataToReturn = null;
        //empty input possiblility
        //all empty except for 'All' as default order status
        if ((searchVal == "") && (userNameVal == "") && (businessNameVal == "")) {
            if (orderStatusDesc != 'All') {
                orderListDataToReturn = recycledOrderListData.filter(function (y) {
                    return (y.orderStatusDescription === orderStatusDesc);
                });
            }
            else {
                orderListDataToReturn = recycledOrderListData;
            }
        }
        //all input having some value possiblities
        //search box, user, and business boxes have value
        if ((searchVal != "") && (userNameVal != "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.projectOwnerName.trim() == userNameVal.trim() &&
                            y.orderStatusDescription == orderStatusDesc &&
                            y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.projectOwnerName.trim() == userNameVal.trim() &&
                            y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        else if ((searchVal == "") && (userNameVal != "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectOwnerName == userNameVal.trim() &&
                        y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        else if ((searchVal != "") && (userNameVal != "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.projectOwnerName.trim() == userNameVal.trim() &&
                            y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.projectOwnerName.trim() == userNameVal.trim());
                }
            });
        }
        else if ((searchVal != "") && (userNameVal == "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.orderStatusDescription == orderStatusDesc &&
                            y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        else if ((searchVal == "") && (userNameVal == "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        else if ((searchVal == "") && (userNameVal != "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectOwnerName.trim() == userNameVal.trim());
                }
            });
        }
        else if ((searchVal != "") && (userNameVal == "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                            y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1);
                }
            });
        }
        this.orderListGridData = orderListDataToReturn;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("mainSearchBox"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "mainSearchBox", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("userListNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "userListNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("orderStatusNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "orderStatusNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("businessNameNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "businessNameNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("fromDateNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "fromDateNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("toDateNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "toDateNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("exportToExcelNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "exportToExcelNode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("excelexport"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "excelexport", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["b" /* GridComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_grid__["b" /* GridComponent */])
    ], OrdersGridComponent.prototype, "grid", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "blockUI", void 0);
    OrdersGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'orders-grid',
            template: __webpack_require__("../../../../../src/app/orders/components/orders-grid/orders-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/orders/components/orders-grid/orders-grid.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__services_order_service__["a" /* OrderService */],
            __WEBPACK_IMPORTED_MODULE_6__quotes_services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], OrdersGridComponent);
    return OrdersGridComponent;
}());



/***/ }),

/***/ "../../../../../src/app/orders/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_order_order_component__ = __webpack_require__("../../../../../src/app/orders/components/order/order.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_order_order_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_order_form_order_form_component__ = __webpack_require__("../../../../../src/app/orders/components/order-form/order-form.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_order_form_order_form_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_order_item_products_order_item_products_component__ = __webpack_require__("../../../../../src/app/orders/components/order-item-products/order-item-products.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__components_order_item_products_order_item_products_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_order_form_quote_items_order_form_quote_items_component__ = __webpack_require__("../../../../../src/app/orders/components/order-form-quote-items/order-form-quote-items.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__components_order_form_quote_items_order_form_quote_items_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_orders_grid_orders_grid_component__ = __webpack_require__("../../../../../src/app/orders/components/orders-grid/orders-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__components_orders_grid_orders_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_order_resolver_service__ = __webpack_require__("../../../../../src/app/orders/services/order-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__services_order_resolver_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_order_service__ = __webpack_require__("../../../../../src/app/orders/services/order.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_6__services_order_service__["a"]; });









/***/ }),

/***/ "../../../../../src/app/orders/orders-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_order_resolver_service__ = __webpack_require__("../../../../../src/app/orders/services/order-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var orderRoutes = [
    {
        path: 'order', component: __WEBPACK_IMPORTED_MODULE_2__index__["a" /* OrderComponent */]
    },
    {
        path: 'order-list',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["g" /* OrdersGridComponent */],
        resolve: { currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */] }
    },
    {
        path: 'orderForm/:projectid/:quoteid/:recordState',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["b" /* OrderFormComponent */],
        resolve: {
            orderFormModel: __WEBPACK_IMPORTED_MODULE_4__services_order_resolver_service__["a" /* OrderResolver */],
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    }
];
var OrdersRoutingModule = /** @class */ (function () {
    function OrdersRoutingModule() {
    }
    OrdersRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */].forChild(orderRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */]],
        })
    ], OrdersRoutingModule);
    return OrdersRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/orders/orders.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_COMPONENTS", function() { return ORDER_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_popup__ = __webpack_require__("../../../../@progress/kendo-angular-popup/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_upload__ = __webpack_require__("../../../../@progress/kendo-angular-upload/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__quotes_quotes_module__ = __webpack_require__("../../../../../src/app/quotes/quotes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__address_address_module__ = __webpack_require__("../../../../../src/app/address/address.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__orders_routing_module__ = __webpack_require__("../../../../../src/app/orders/orders-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__index__ = __webpack_require__("../../../../../src/app/orders/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var ORDER_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_13__index__["a" /* OrderComponent */],
    __WEBPACK_IMPORTED_MODULE_13__index__["b" /* OrderFormComponent */],
    __WEBPACK_IMPORTED_MODULE_13__index__["c" /* OrderFormQuoteItemsComponent */],
    __WEBPACK_IMPORTED_MODULE_13__index__["d" /* OrderItemProductsComponent */],
    __WEBPACK_IMPORTED_MODULE_13__index__["g" /* OrdersGridComponent */],
];
var OrdersModule = /** @class */ (function () {
    function OrdersModule() {
    }
    OrdersModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["c" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["a" /* ExcelModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_popup__["a" /* PopupModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_9__progress_kendo_angular_upload__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["a" /* AutoCompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__quotes_quotes_module__["QuotesModule"],
                __WEBPACK_IMPORTED_MODULE_11__address_address_module__["a" /* AddressModule */],
                __WEBPACK_IMPORTED_MODULE_12__orders_routing_module__["a" /* OrdersRoutingModule */]
            ],
            exports: ORDER_COMPONENTS,
            declarations: ORDER_COMPONENTS,
            providers: [
                __WEBPACK_IMPORTED_MODULE_13__index__["e" /* OrderResolver */],
                __WEBPACK_IMPORTED_MODULE_13__index__["f" /* OrderService */]
            ]
        })
    ], OrdersModule);
    return OrdersModule;
}());



/***/ }),

/***/ "../../../../../src/app/orders/services/order-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_service__ = __webpack_require__("../../../../../src/app/orders/services/order.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OrderResolver = /** @class */ (function () {
    function OrderResolver(orderSvc) {
        this.orderSvc = orderSvc;
    }
    OrderResolver.prototype.resolve = function (route, state) {
        var projectId = route.params['projectid'];
        var quoteId = route.params['quoteid'];
        var recordState = route.params['recordState'];
        if (recordState.toLowerCase() == "new") {
            return this.orderSvc.orderForm(projectId, quoteId)
                .map(function (orderFormModel) {
                if (orderFormModel) {
                    return orderFormModel;
                }
                else {
                    return null;
                }
            }).catch(function (error) {
                //console.log('Retrieval error: ${error}');
                console.log(error);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
            });
        }
        else if (recordState.toLowerCase() == "submitted") {
            return this.orderSvc.getSubmittedOrderForm(quoteId)
                .map(function (orderFormModel) {
                if (orderFormModel) {
                    return orderFormModel;
                }
                else {
                    return null;
                }
            }).catch(function (error) {
                //console.log('Retrieval error: ${error}');
                console.log(error);
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
            });
        }
    };
    OrderResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__order_service__["a" /* OrderService */]])
    ], OrderResolver);
    return OrderResolver;
}());



/***/ }),

/***/ "../../../../../src/app/orders/services/order.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OrderService = /** @class */ (function () {
    function OrderService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            // 'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    OrderService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    OrderService.prototype.extractHtml = function (res) {
        return res._body;
    };
    OrderService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    //Test
    OrderService.prototype.getSubmittalOrder = function () {
        return this.http.get("/api/Order/GetSubmittalOrder", { headers: this.headers }).toPromise()
            .then(function (resp) {
            debugger;
            return resp;
        })
            .catch(this.handleError);
    };
    OrderService.prototype.orderForm = function (projectId, quoteId) {
        return this.http.get("/api/Order/OrderForm?projectId=" + projectId + "&quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getSubmittedOrderForm = function (quoteId) {
        return this.http.get("/api/Order/GetSubmittedOrder?quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.postOrder = function (order) {
        return this.http.post("/api/Order/PostOrder", order, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.sendOrderEmail = function (order) {
        return this.http.post("/ProjectDashboard/SendEmailOrderSubmit", order, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    //orders grid api calls
    OrderService.prototype.getLast365DaysOrderItemList = function () {
        return this.http.get("/api/Order/GetOrdersForGrid", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getUserList = function () {
        return this.http.get("/api/User/GetUsersViewable", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getOrderStatusList = function () {
        return this.http.get("/api/Order/GetOrderStatusTypes", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getBusinessNameList = function () {
        return this.http.get("/api/Business/GetBusinessList", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getOrderItemsForLast365Days = function () {
        return this.http.get("/api/Order/GetOrdersForGrid", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService.prototype.getOrdersBasedOnSearchParams = function (searchParams) {
        return this.http.post("/api/Order/GetOrdersBasedOnSearchParams", searchParams, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    OrderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], OrderService);
    return OrderService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/models/searchOrders.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchOrders; });
var SearchOrders = /** @class */ (function () {
    function SearchOrders() {
    }
    return SearchOrders;
}());



/***/ })

});
//# sourceMappingURL=orders.module.chunk.js.map