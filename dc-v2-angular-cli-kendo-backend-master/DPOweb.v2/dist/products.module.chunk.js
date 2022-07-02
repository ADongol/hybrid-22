webpackJsonp(["products.module"],{

/***/ "../../../../../src/app/products/components/product-details/document-accessories/related-documents-accessories.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row dk-list-grey\">\r\n\r\n    <div class=\"col col-md-6\">\r\n        <div class=\"dk-list-header\">RELATED DOCUMENTS</div>\r\n        <div style=\"overflow-y: auto; max-height: 500px;\">\r\n            <div class=\"row row-nomargin dk-list-row\" *ngFor=\"let item of product.documents ; let idx = index\">\r\n                <span class=\"col col-md-12\">\r\n                    <img src=\"/Images/related-document-icon.png\" />\r\n\r\n                    <a href=\"{{item.url}}\" target=\"_blank\"> {{item.description}} </a>\r\n\r\n                    <a href=\"{{item.url}}\" target=\"_blank\" class=\"pull-right\">{{item.name}}</a>\r\n\r\n                </span>\r\n                <!--<span class=\"col col-md-6\">\r\n                    <a href=\"{{item.url}}\" target=\"_blank\" class=\"pull-right\"> View Document </a>\r\n                </span>-->\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!--General Product-->\r\n    <div *ngIf=\"!product.isSystem && !(product.productModelTypeId == enums.ProductModelTypeEnum.System)\r\n         && !(product.productModelTypeId == enums.ProductModelTypeEnum.Accessory)\" class=\"col col-md-6\">\r\n        <div class=\"dk-list-header\">RELATED ACCESSORIES</div>\r\n        <div *ngIf=\"product.accessories.length == 0\">\r\n            No Related Accessories\r\n        </div>\r\n\r\n        <div *ngIf=\"product.accessories.length > 0\">\r\n            <div style=\"overflow-y: auto; max-height: 500px;\">\r\n                <div class=\"row row-nomargin dk-list-row\" *ngFor=\"let item of product.accessories ; let idx = index\">\r\n                    <div class=\"col col-md-6\">\r\n                        <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-left\"> {{item.accessory.name}} </a>\r\n                    </div>\r\n                    <div class=\"col col-md-6\">\r\n                        <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-right\"> {{item.accessory.productNumber}} </a>\r\n                    </div>\r\n                </div>\r\n\r\n                \r\n                \r\n            </div>\r\n\r\n            <div class=\"row row-nomargin\" style=\"padding-top:10px;\">\r\n                <button class=\"btn btn-default\" id=\"viewAllAccessoriesBtn\">View all accessories</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!--System Product-->\r\n    <div *ngIf=\"product.isSystem || product.productModelTypeId == enums.ProductModelTypeEnum.System\" class=\"col col-md-6\">\r\n        <div class=\"dk-list-header\">INDOOR UNIT RELATED ACCESSORIES</div>\r\n        <div style=\"overflow-y: auto; max-height: 240px;\">\r\n\r\n            <div class=\"row row-nomargin dk-list-row\" *ngFor=\"let item of relatedIndoorUnit.accessories ; let idx = index\">\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-left\"> {{item.accessory.name}} </a>\r\n                </div>\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-right\"> {{item.accessory.productNumber}} </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"dk-list-header\">OUTDOOR UNIT RELATED ACCESSORIES</div>\r\n        <div style=\"overflow-y: auto; max-height: 240px;\">\r\n\r\n            <div class=\"row row-nomargin dk-list-row\" *ngFor=\"let item of relatedOutdoorUnit.accessories ; let idx = index\">\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-left\"> {{item.accessory.name}} </a>\r\n                </div>\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item.accessory)\" class=\"pull-right\"> {{item.accessory.productNumber}} </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"row row-nomargin\" style=\"padding-top:10px;\">\r\n            <button class=\"btn btn-default\" id=\"viewAllAccessoriesBtn\">View all accessories</button>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <!--Accessory-->\r\n    <div *ngIf=\"product.productModelTypeId == enums.ProductModelTypeEnum.Accessory\" class=\"col col-md-6\">\r\n        <div class=\"dk-list-header\">PARENT PRODUCTS</div>\r\n        <div style=\"overflow-y: auto; max-height: 500px;\">\r\n            <div class=\"row row-nomargin dk-list-row\" *ngFor=\"let item of product.parentProducts ; let idx = index\">\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item)\" class=\"pull-left\"> {{item.name}} </a>\r\n                </div>\r\n                <div class=\"col col-md-6\">\r\n                    <a (click)=\"productDetails($event, item)\" class=\"pull-right\"> {{item.productNumber}} </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!--<div class=\"row row-nomargin\" style=\"padding-top:10px;\">\r\n            <button class=\"btn btn-default\" id=\"viewAllAccessoriesBtn\">View parent products</button>\r\n        </div>-->\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/document-accessories/related-documents-accessories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelatedDocsAndAssrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RelatedDocsAndAssrComponent = /** @class */ (function () {
    function RelatedDocsAndAssrComponent(router, userSvc, enums, productSvc) {
        this.router = router;
        this.userSvc = userSvc;
        this.enums = enums;
        this.productSvc = productSvc;
    }
    RelatedDocsAndAssrComponent.prototype.ngOnInit = function () {
        if (this.product.isSystem) {
            for (var i in this.product.subProducts) {
                var item = this.product.subProducts[i];
                if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) {
                    this.relatedIndoorUnit = item;
                }
                else if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor) {
                    this.relatedOutdoorUnit = item;
                }
            }
        }
        if (this.product.productTypeId == this.enums.ProductTypeEnum.Accessory) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-accessories a').text("PARENT PRODUCTS");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-accessories a').text("RELATED ACCESSORIES");
        }
    };
    RelatedDocsAndAssrComponent.prototype.ngAfterViewInit = function () {
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#viewAllAccessoriesBtn').click(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productOverviewTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productRelatedAccessoriesTab').show();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productSpecsTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productDetailsTabs li').each(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(this).removeClass('active');
            });
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-accessories').addClass('active');
        });
    };
    RelatedDocsAndAssrComponent.prototype.productDetails = function (event, product) {
        this.productSvc.product = product;
        this.router.navigate(['/products', { outlets: { 'productDetails': [product.productId] } }]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], RelatedDocsAndAssrComponent.prototype, "product", void 0);
    RelatedDocsAndAssrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'related-documents-accessories',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/document-accessories/related-documents-accessories.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* Enums */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */]])
    ], RelatedDocsAndAssrComponent);
    return RelatedDocsAndAssrComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-accessories/product-accessories.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.accessories.length == 0\">\r\n    No Related Accessories\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin border-bottom-row accessory-list-row\" *ngFor=\"let item of product.accessories ; let idx = index\">\r\n\r\n    <div class=\"col col-md-3 product-image no-padding\" style=\"height:130px;\">\r\n        <!--<product-image [product]=\"item.accessory\"></product-image>-->\r\n        <img src=\"{{item.accessory.image.url}}\" style=\"width:130px; height:110px;\" class=\"sub-product-img\"/>\r\n    </div>\r\n\r\n    <div class=\"product-info\" [ngClass]=\"{'col col-md-7' : quoteId != 0 && quoteId != undefined, 'col col-md-9' : quoteId == 0 || quoteId == undefined}\" style=\"background-color:none\">\r\n        <div>\r\n            <a (click)=\"accessoryDetails($event, item.accessory)\" class=\"product-link\" >  {{item.accessory.name}}</a>\r\n        </div>\r\n         <div>\r\n            <span class=\"as-lnk\">Model No.: </span> <span class=\"pull-right\"> {{item.accessory.productNumber}}</span>\r\n        </div>\r\n        <div *ngIf=\"showPrices\">\r\n            <span class=\"as-lnk\">Price: </span> <span class=\"pull-right\"> {{item.accessory.price | currency:'USD':true:'1.2-2'}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Quantity required: </span> <span class=\"pull-right\"> {{item.quantity}}</span>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"quoteId != 0 && quoteId != undefined\" class=\"col col-md-2 product-qty no-padding\" style=\"text-align:center\">\r\n        \r\n        <product-quantity-add [product]=\"item.accessory\"></product-quantity-add>\r\n    </div>\r\n   \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-accessories/product-accessories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductAccessoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_products_product_service__ = __webpack_require__("../../../../../src/app/shared/services/products/product.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductAccessoriesComponent = /** @class */ (function () {
    function ProductAccessoriesComponent(router, productSvc) {
        this.router = router;
        this.productSvc = productSvc;
        this.showPrices = false;
    }
    ProductAccessoriesComponent.prototype.ngOnChanges = function () {
        if (this.userBasket != undefined) {
            this.quoteId = this.userBasket.quoteId;
        }
        if (this.currentUser != undefined) {
            this.showPrices = this.currentUser.showPrices;
        }
    };
    ProductAccessoriesComponent.prototype.ngOnInit = function () { };
    ProductAccessoriesComponent.prototype.accessoryDetails = function (event, accessory) {
        //this.showProductGrid = false;
        //this.product = product;
        this.productSvc.product = accessory;
        this.router.navigate(['/products', { outlets: { 'productDetails': [accessory.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "blockUI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "userBasket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "currentUser", void 0);
    ProductAccessoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-accessories',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-accessories/product-accessories.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_products_product_service__["a" /* ProductService */]])
    ], ProductAccessoriesComponent);
    return ProductAccessoriesComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsTestComponent; });
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



var ProductDetailsTestComponent = /** @class */ (function () {
    function ProductDetailsTestComponent(userSvc, productSvc, basketSvc) {
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
    }
    ProductDetailsTestComponent.prototype.ngOnChanges = function () {
        //this.product = this.productSvc.product;
    };
    ProductDetailsTestComponent.prototype.ngOnInit = function () {
    };
    ProductDetailsTestComponent.prototype.ngDoCheck = function () {
        this.product = this.productSvc.product;
        this.userBasket = this.basketSvc.userBasket;
    };
    ProductDetailsTestComponent.prototype.ngAfterContentInit = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#userBasket').insertBefore('#main-container');
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#productFamilyTabs').insertBefore('#main-container');
    };
    ProductDetailsTestComponent.prototype.ngAfterViewChecked = function () {
    };
    ProductDetailsTestComponent.prototype.ngOnDestroy = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#content > #userBasket').remove();
        __WEBPACK_IMPORTED_MODULE_2_jquery__('#content > #productFamilyTabs').remove();
    };
    ProductDetailsTestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-details-test',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-details.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["g" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["b" /* BasketService */]])
    ], ProductDetailsTestComponent);
    return ProductDetailsTestComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-gridView.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div *ngIf=\"user\" class=\"product-details\">\r\n    <div class=\"row no-padding\" style=\"margin-bottom:10px;\">\r\n        <div class=\"col col-md-12 product-name-gridView\" style=\"background-color: #007fcc; height:35px;\">\r\n            <a (click)=\"productDetails($event, product, 'product-overview')\" style=\"color: #ffffff;\">{{product.name}}</a>\r\n        </div>\r\n    </div>\r\n    <div class=\"row no-padding\">\r\n        <div class=\"col col-md-6 product-image\" style=\"background-color: transparent; height: 135px;\">\r\n            <product-image [product]=\"product\"></product-image>\r\n            <!--<img width=\"135\" height=\"100\" src=\"{{product.image.url}}\" />-->\r\n        </div>\r\n        <div class=\"col col-md-6 product-info\" style=\"background-color: transparent; height: 135px;\">\r\n            <!--<div class=\"product-name\"><a href=\"/ProductDashboard/Product?ProductId={{product.productId}}\">{{product.name}}</a></div>-->\r\n            <div class=\"as-lnk\">Model No.:</div>\r\n            <div style=\"font-size:smaller\"> {{product.productNumber}}</div>\r\n            <div *ngIf=\"userSvc.currentUser.showPrices\">\r\n                <div class=\"as-lnk\">Price:</div>\r\n                <div style=\"font-size:smaller\"> {{product.price | currency:'USD':true:'1.2-2'}}</div>\r\n            </div>\r\n            <div>\r\n                <span class=\"pull-right\">\r\n                    <a (click)=\"productDetails($event, product, 'product-overview')\" title=\"Product overview\"><img src=\"/Images/RelatedDocumentsLinkIcon_Blue.png\"></a>\r\n                    <a (click)=\"productDetails($event, product, 'product-accessories')\" title=\"Product accessories\"><img src=\"/Images/RelatedAccessoriesLinkIcon_Blue.png\"></a>\r\n                    <a (click)=\"productDetails($event, product, 'product-specs')\" title=\"Product specifications\"><img src=\"/Images/TechDetailLInkIcon_blue.png\"></a>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row no-padding\" style=\"background-color: #effaff;\">\r\n        <div class=\"col col-md-8\" style=\"height: 120px; padding:10px\">\r\n            <div *ngIf=\"product.specifications.all != null\">\r\n\r\n\r\n                <div *ngIf=\"SEERNonDucted && product.specifications.all.seerNonDucted\" class=\"as-lnk\">SEER (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.seerNonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"IEERNonDucted && product.specifications.all.ieerNonDucted\" class=\"as-lnk\">IEER (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.ieerNonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"EERNonDucted && product.specifications.all.eerNonDucted\" class=\"as-lnk\">EER (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.eerNonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"HSPFNonDucted && product.specifications.all.hspfNonDucted\" class=\"as-lnk\">HSPF (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.hspfNonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"COP47NonDucted && product.specifications.all.coP47NonDucted\" class=\"as-lnk\">COP47 (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.coP47NonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"SCHENonDucted && product.specifications.all.scheNonDucted\" class=\"as-lnk\">SCHE (Non-Ducted): <span class=\"grey-text\">{{product.specifications.all.scheNonDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n\r\n                <div *ngIf=\"SEERDucted && product.specifications.all.seerDucted\" class=\"as-lnk\">SEER (Ducted): <span class=\"grey-text\">{{product.specifications.all.seerDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"EERDucted && product.specifications.all.eerDucted\" class=\"as-lnk\">EER (Ducted): <span class=\"grey-text\">{{product.specifications.all.eerDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"HSPFDucted && product.specifications.all.hspfDucted\" class=\"as-lnk\">HSPF (Ducted): <span class=\"grey-text\">{{product.specifications.all.hspfDucted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"COP47Ducted && product.specifications.all.coP47Ducted\" class=\"as-lnk\">COP47 (Ducted): <span class=\"grey-text\">{{product.specifications.all.coP47Ducted.value | number:'1.2-2'}}</span></div>\r\n\r\n                <div *ngIf=\"AFUE && product.specifications.all.afue\" class=\"as-lnk\">AFUE: <span class=\"grey-text\">{{product.specifications.all.afue.value | number:'1.2-2'}}</span></div>\r\n\r\n\r\n            </div>\r\n\r\n        </div>\r\n        <div *ngIf=\"basketQuoteId != 0 && basketQuoteId != undefined\" class=\"col col-md-4 product-qty no-padding\" style=\"text-align:center\">\r\n            <div>Quantity</div>\r\n            <product-quantity-input [(product)]=\"product\"></product-quantity-input>\r\n            <!--<product-quantity-input [(quantity)]=\"product.quantity\"></product-quantity-input>-->\r\n        </div>\r\n        <div *ngIf=\"user.showPrices\">\r\n            <div [ngSwitch]=\"product.productStatusTypeId\" style=\"text-align:center;\">\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.New\" style=\"color:blue; font-size:smaller; \">New</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Active\" style=\"color:#38c638; font-size:smaller;\">Active</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.HiddenModuleUnit\" style=\"color:red; font-size:smaller;\">Hidden</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Inactive\" style=\"color:red; font-size:smaller;\">Inactive</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Obsolete\" style=\"color:red; font-size:smaller;\">Obsolete</span>\r\n            </div>\r\n            <div [ngSwitch]=\"product.inventoryStatusId\" style=\"text-align:center;\">\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.Available\" style=\"color:black; background-color:#6df0af; padding:3px;\">Available</span>\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.NotAvailable\" style=\"color:black; background-color:#ffcce6; padding:3px;\">Not Available</span>\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.ContactCSR\" style=\"color:black; background-color:#f7d38c; padding:3px;\">\r\n                    <span *ngIf=\"product.productStatusTypeId == enums.ProductStatusTypeEnum.Active && product.invAvailableDate != null && (user.businessTypeId == enums.BusinessTypeEnum.Daikin || user.businessTypeId == enums.BusinessTypeEnum.ManufacturerRep); else contactCSRBlock\">\r\n                        ETA: {{product.invAvailableDate | date : 'shortDate'}}\r\n                    </span>\r\n                    <ng-template #contactCSRBlock>\r\n                        <span>Contact CSR</span>\r\n                    </ng-template>\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <!--<div *ngIf=\"basketQuoteId!=0\" class=\"col col-md-1\" style=\"background-color: lightcyan\">\r\n        <div>Quantity</div>\r\n        <input class=\"numericTextBox\" type=\"number\" value=\"{{product.quantity}}\" min=\"0\" max=\"1000\" step=\"1\" style=\"width:70px;\" />\r\n\r\n    </div>-->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-gridView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsGridViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_common_user_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailsGridViewComponent = /** @class */ (function () {
    function ProductDetailsGridViewComponent(systemAccessEnum, enums, productSvc, userSvc) {
        this.systemAccessEnum = systemAccessEnum;
        this.enums = enums;
        this.productSvc = productSvc;
        this.userSvc = userSvc;
        //@Output() changeQty: EventEmitter<any> = new EventEmitter();
        this.viewProductDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    }
    ProductDetailsGridViewComponent.prototype.ngOnChanges = function () {
        this.resetColumns();
        this.setupColumns();
    };
    ProductDetailsGridViewComponent.prototype.ngOnInit = function () { };
    ProductDetailsGridViewComponent.prototype.ngAfterViewChecked = function () {
    };
    //public productDetails(event: any, product: any, activeTab: any){
    //    //this.productSvc.product = product;
    //    //this.router.navigate(['/products', { outlets: { 'productDetails': [product.productId] } }], { queryParams: { tab: activeTab } });
    //    this.viewProductDetailsEvent.emit(product);
    //}
    ProductDetailsGridViewComponent.prototype.productDetails = function (event, product, activeTab) {
        var eventParams = {
            'product': product,
            'activeTab': activeTab
        };
        this.viewProductDetailsEvent.emit(eventParams);
    };
    ProductDetailsGridViewComponent.prototype.resetColumns = function () {
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    };
    ProductDetailsGridViewComponent.prototype.setupColumns = function () {
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.MiniSplit //Mini-Split
            || (this.product.productFamilyId == this.enums.ProductFamilyEnum.AlthermaSplit && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //Altherma
            || (this.product.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //MultiSplit - Outdoor/All
            || this.product.productFamilyId == this.enums.ProductFamilyEnum.SkyAir) {
            this.SEERNonDucted = true;
            this.EERNonDucted = true;
            this.HSPFNonDucted = true;
            this.COP47NonDucted = true;
        }
        if ((this.product.productFamilyId == this.enums.ProductFamilyEnum.VRV || this.product.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit) && this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) {
            //Show nothing
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.VRV && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) {
            this.IEERNonDucted = true;
            this.EERNonDucted = true;
            this.COP47NonDucted = true;
            this.SCHENonDucted = true;
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.UnitarySplitSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.SplitAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.SplitHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler || this.product.productClassPIMId == this.enums.ProductClassPIMEnum.Coil) {
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.GasFurnace) {
                this.AFUE = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.UnitaryPackagedSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackageAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedGED) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.AFUE = true;
                if (this.product.productEnergySourceTypeId = this.enums.ProductEnergySourceTypeEnum.DualFuel) {
                    this.HSPFDucted = true;
                    this.COP47Ducted = true;
                }
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.LightCommercialSplitSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler) {
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                //this.AFUEDucted = true;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsGridViewComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsGridViewComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductDetailsGridViewComponent.prototype, "viewProductDetailsEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsGridViewComponent.prototype, "basketQuoteId", void 0);
    ProductDetailsGridViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-details-gridView',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-gridView.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["g" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_common_user_service__["a" /* UserService */]])
    ], ProductDetailsGridViewComponent);
    return ProductDetailsGridViewComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-listView.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"row product-details no-padding\">-->\r\n<div class=\"row product-details no-padding\">\r\n    <div class=\"col col-md-3 product-image no-padding\" style=\"background-color:none\">\r\n        <!--<div class=\"product-image no-padding\" style=\"background-color:none\">-->\r\n        <product-image [product]=\"product\"></product-image>\r\n    </div>\r\n\r\n    <div class=\"col col-md-3 product-info\" style=\"background-color:none\">\r\n        <!--<div class=\"product-info no-padding\" style=\"background-color:none\">-->\r\n        <!--<div class=\"product-name\"><a href=\"/ProductDashboard/Product?ProductId={{product.productId}}\">{{product.name}}</a></div>-->\r\n        <div class=\"product-link\"><a (click)=\"productDetails($event, product, 'product-overview')\">{{product.name}}</a></div>\r\n        <div class=\"as-lnk\">Model No.: </div> <div style=\"font-size:smaller\"> {{product.productNumber}}</div>\r\n        <div *ngIf=\"userSvc.currentUser.showPrices\">\r\n            <div class=\"as-lnk\">Price: </div> <div style=\"font-size:smaller\"> {{product.price | currency:'USD':true:'1.2-2'}}</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col product-specs\" [ngClass]=\"{'col-md-4' : basketQuoteId != 0 && basketQuoteId != undefined, 'col-md-6' : basketQuoteId == 0 || basketQuoteId == undefined}\" style=\"background-color:none\">\r\n        <product-spec-bars [product]=\"product\"></product-spec-bars>\r\n        <div *ngIf=\"user.showPrices\">\r\n            <span [ngSwitch]=\"product.productStatusTypeId\">\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.New\" style=\"color:blue; font-size:smaller; text-align:right;\">New</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Active\" style=\"color:#38c638; font-size:smaller; text-align:right;\">Active</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.HiddenModuleUnit\" style=\"color:red; font-size:smaller; text-align:right;\">Hidden</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Inactive\" style=\"color:red; font-size:smaller; text-align:right;\">Inactive</span>\r\n                <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Obsolete\" style=\"color:red; font-size:smaller; text-align:right;\">Obsolete</span>\r\n            </span>\r\n            <span [ngSwitch]=\"product.inventoryStatusId\">\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.Available\" style=\"color:black; background-color:#6df0af; padding:3px; font-size:smaller; text-align:right;\">Available</span>\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.NotAvailable\" style=\"color:black; background-color:#ffcce6; padding:3px; font-size:smaller; text-align:right;\">Not Available</span>\r\n\r\n                <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.ContactCSR\" style=\"color:black; background-color:#f7d38c; padding:3px; font-size:smaller; text-align:right;\">\r\n                    <span *ngIf=\"product.productStatusTypeId == enums.ProductStatusTypeEnum.Active && product.invAvailableDate != null && (user.businessTypeId == enums.BusinessTypeEnum.Daikin || user.businessTypeId == enums.BusinessTypeEnum.ManufacturerRep); else contactCSRBlock\">\r\n                        ETA: {{product.invAvailableDate | date : 'shortDate'}}\r\n                    </span>\r\n                    <ng-template #contactCSRBlock>\r\n                        <span>Contact CSR</span>\r\n                    </ng-template>\r\n                </span>\r\n               \r\n\r\n            </span>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"basketQuoteId != 0 && basketQuoteId != undefined\" class=\"col col-md-2 product-qty no-padding\" style=\"text-align:center\">\r\n        <div class=\"productQtyContainer\" style=\"padding:10px 0px 25px 0px;\">\r\n            <div>Quantity</div>\r\n            <product-quantity-input [(product)]=\"product\"></product-quantity-input>\r\n            <!--<product-quantity-input [(quantity)]=\"product.quantity\"></product-quantity-input>-->\r\n        </div>\r\n        <!--<kendo-numerictextbox [autoCorrect]=\"autoCorrect\" value=\"{{product.quantity}}\" step=\"1\" min=\"0\" style=\"width:100px;\"></kendo-numerictextbox>-->\r\n        <!--<div>\r\n            <button (click)=\"showQty()\">Quantity</button>\r\n        </div>-->\r\n    </div>\r\n\r\n    <!--<hr class=\"col col-md-12 product-row-line\" />-->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-listView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsListViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_user_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductDetailsListViewComponent = /** @class */ (function () {
    function ProductDetailsListViewComponent(userSvc) {
        this.userSvc = userSvc;
        //@Output() changeQty: EventEmitter<any> = new EventEmitter();
        this.viewProductDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ProductDetailsListViewComponent.prototype.ngOnChanges = function () { };
    ProductDetailsListViewComponent.prototype.ngOnInit = function () {
        //this.productSvc.getBasketQuoteId().then(this.getBasketQuoteIdCallback.bind(this));        
    };
    ProductDetailsListViewComponent.prototype.productDetails = function (event, product, activeTab) {
        var eventParams = {
            'product': product,
            'activeTab': activeTab
        };
        this.viewProductDetailsEvent.emit(eventParams);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsListViewComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsListViewComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductDetailsListViewComponent.prototype, "viewProductDetailsEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsListViewComponent.prototype, "basketQuoteId", void 0);
    ProductDetailsListViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-details-listView',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-listView.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_common_user_service__["a" /* UserService */]])
    ], ProductDetailsListViewComponent);
    return ProductDetailsListViewComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-tableView.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<kendo-grid id=\"product-table-view\" [data]=\"gridViewData\" [skip]=\"skip\" [pageSize]=\"pageSize\" [pageable]=\"true\" (pageChange)=\"pageChange($event)\" style=\"height:480px;\">-->\r\n<kendo-grid id=\"product-table-view\" [data]=\"gridViewData\"\r\n            [skip]=\"skip\" [pageSize]=\"pageSize\" [pageable]=\"true\"\r\n            (pageChange)=\"pageChange($event)\" [height]=\"570\">\r\n\r\n    <kendo-grid-column field=\"product.name\" title=\"PRODUCT\" width=\"450\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <img class=\"product-image\" *ngIf=\"dataItem.product.image.hasImage\" src=\"{{dataItem.product.image.url}}\" style=\"width:32px;height:auto;\" />\r\n            <img class=\"product-image\" *ngIf=\"!dataItem.product.image.hasImage && dataItem.product.subProducts[0] && dataItem.product.subProducts[0].image.hasImage\" src=\"{{dataItem.product.subProducts[0].image.url}}\" style=\"width:32px;height:auto;\" />\r\n            <a (click)=\"productDetails($event, dataItem.product, 'product-overview')\">{{dataItem.product.name}}</a>\r\n            <!--<div *ngIf=\"user.showPrices\" style=\"text-align:right\">\r\n                <span [ngSwitch]=\"dataItem.product.productStatusTypeId\">\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.New\" style=\"color:blue; font-size:smaller;\">New</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Active\" style=\"color:#38c638; font-size:smaller;\">Active</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.HiddenModuleUnit\" style=\"color:red; font-size:smaller;\">Hidden</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Inactive\" style=\"color:red; font-size:smaller;\">Inactive</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Obsolete\" style=\"color:red; font-size:smaller;\">Obsolete</span>\r\n                </span>\r\n                <span [ngSwitch]=\"dataItem.product.inventoryStatusId\">\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.Available\" style=\"color:black; background-color:#6df0af; padding:3px; font-size:smaller;\">Available</span>\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.ContactCSR\" style=\"color:black; background-color:#f7d38c; padding:3px; font-size:smaller;\">\r\n                        <span *ngIf=\"dataItem.product.productStatusTypeId == enums.ProductStatusTypeEnum.Active && dataItem.product.invAvailableDate != null && (user.businessTypeId == enums.BusinessTypeEnum.Daikin || user.businessTypeId == enums.BusinessTypeEnum.ManufacturerRep); else contactCSRBlock\">\r\n                            ETA: {{dataItem.product.invAvailableDate | date : 'shortDate'}}\r\n                        </span>\r\n                        <ng-template #contactCSRBlock>\r\n                            <span>Contact CSR</span>\r\n                        </ng-template>\r\n\r\n                    </span>\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.NotAvailable\" style=\"color:black; background-color:#ffcce6; padding:3px; font-size:smaller;\">Not Available</span>\r\n                </span>\r\n            </div>-->\r\n\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column width=\"160\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"user.showPrices\">\r\n                <span [ngSwitch]=\"dataItem.product.productStatusTypeId\">\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.New\" style=\"color:blue; font-size:smaller;\">New</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Active\" style=\"color:#38c638; font-size:smaller;\">Active</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.HiddenModuleUnit\" style=\"color:red; font-size:smaller;\">Hidden</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Inactive\" style=\"color:red; font-size:smaller;\">Inactive</span>\r\n                    <span *ngSwitchCase=\"enums.ProductStatusTypeEnum.Obsolete\" style=\"color:red; font-size:smaller;\">Obsolete</span>\r\n                </span>\r\n                <span [ngSwitch]=\"dataItem.product.inventoryStatusId\">\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.Available\" style=\"color:black; background-color:#6df0af; padding:3px; font-size:smaller;\">Available</span>\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.ContactCSR\" style=\"color:black; background-color:#f7d38c; padding:3px; font-size:smaller;\">\r\n                        <span *ngIf=\"dataItem.product.productStatusTypeId == enums.ProductStatusTypeEnum.Active && dataItem.product.invAvailableDate != null && (user.businessTypeId == enums.BusinessTypeEnum.Daikin || user.businessTypeId == enums.BusinessTypeEnum.ManufacturerRep); else contactCSRBlock\">\r\n                            ETA: {{dataItem.product.invAvailableDate | date : 'shortDate'}}\r\n                        </span>\r\n                        <ng-template #contactCSRBlock>\r\n                            <span>Contact CSR</span>\r\n                        </ng-template>\r\n\r\n                    </span>\r\n                    <span *ngSwitchCase=\"enums.ProductInventoryStatusTypeEnum.NotAvailable\" style=\"color:black; background-color:#ffcce6; padding:3px; font-size:smaller;\">Not Available</span>\r\n                </span>\r\n            </div>\r\n        </ng-template>\r\n\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"product.productNumber\" title=\"MODEL NO.\" width=\"230\">\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column width=\"180\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <a (click)=\"productDetails($event, dataItem.product, 'product-overview')\" title=\"Product overview\"><img src=\"/Images/RelatedDocumentsLinkIcon_Blue.png\"></a>\r\n            <a (click)=\"productDetails($event, dataItem.product, 'product-accessories')\" title=\"Product accessories\"><img src=\"/Images/RelatedAccessoriesLinkIcon_Blue.png\"></a>\r\n            <a (click)=\"productDetails($event, dataItem.product, 'product-specs')\" title=\"Product specifications\"><img src=\"/Images/TechDetailLInkIcon_blue.png\"></a>\r\n        </ng-template>\r\n\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column title=\"Quantity\" *ngIf=\"basketQuoteId != 0 && basketQuoteId != undefined\" width=\"100\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <product-quantity-input [(product)]=\"dataItem.product\"></product-quantity-input>\r\n            <!--<product-quantity-input [(quantity)]=\"dataItem.product.quantity\"></product-quantity-input>-->\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"userSvc.currentUser.showPrices\" field=\"product.price\" title=\"PRICE\" width=\"100\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <span>{{dataItem.product.price | currency:'USD':true:'1.2-2'}}</span>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"SEERNonDucted\" title=\"SEER (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitarySplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.UnitaryPackagedSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialSplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialPackagedSystem\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.seerNonDucted\">{{dataItem.product.specifications.all.seerNonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"IEERNonDucted\" title=\"IEER (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitarySplitSystem && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitaryPackagedSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialSplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialPackagedSystem\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.ieerNonDucted\">{{dataItem.product.specifications.all.ieerNonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"EERNonDucted\" title=\"EER (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitarySplitSystem && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitaryPackagedSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialSplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialPackagedSystem\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.eerNonDucted\">{{dataItem.product.specifications.all.eerNonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"HSPFNonDucted\" title=\"HSPF (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitarySplitSystem && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitaryPackagedSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialSplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialPackagedSystem\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.hspfNonDucted\">{{dataItem.product.specifications.all.hspfNonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"COP47NonDucted\" title=\"COP47 (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitarySplitSystem && dataItem.product.productFamilyId != enums.ProductFamilyEnum.UnitaryPackagedSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialSplitSystem && dataItem.product.productFamilyId != this.enums.ProductFamilyEnum.LightCommercialPackagedSystem\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.coP47NonDucted\">{{dataItem.product.specifications.all.coP47NonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"SCHENonDucted\" title=\"SCHE (Non-Ducted)\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.scheNonDucted\">{{dataItem.product.specifications.all.scheNonDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <!--Unitary-->\r\n\r\n    <kendo-grid-column *ngIf=\"SEERDucted\" title=\"SEER (Ducted)\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" width=\"150\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null &&  (dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem)\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.seerDucted\">{{dataItem.product.specifications.all.seerDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"EERDucted\" title=\"EER (Ducted)\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" width=\"150\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null && (dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem)\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.eerDucted\">{{dataItem.product.specifications.all.eerDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"HSPFDucted\" title=\"HSPF (Ducted)\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" width=\"150\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null &&  (dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem)\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.hspfDucted\">{{dataItem.product.specifications.all.hspfDucted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"COP47Ducted\" title=\"COP47 (Ducted)\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" width=\"150\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null &&  (dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || dataItem.product.productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem)\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.coP47Ducted\">{{dataItem.product.specifications.all.coP47Ducted.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column *ngIf=\"AFUE\" title=\"AFUE\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" width=\"150\">\r\n            <div *ngIf=\"dataItem.product.specifications.all != null\">\r\n                <span *ngIf=\"dataItem.product.specifications.all.afue\">{{dataItem.product.specifications.all.afue.value | number:'1.2-2'}}</span>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <!--<kendo-grid-column title=\"Quantity\" *ngIf=\"basketQuoteId != 0 && basketQuoteId != undefined\" width=\"150\">\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" >\r\n\r\n            <product-quantity-input [(product.quantity)]=\"product.quantity\"></product-quantity-input>\r\n        </ng-template>\r\n    </kendo-grid-column>-->\r\n\r\n\r\n\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details-view/product-details-tableView.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsTableViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_common_user_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductDetailsTableViewComponent = /** @class */ (function () {
    function ProductDetailsTableViewComponent(elementRef, systemAccessEnum, userSvc, enums) {
        this.elementRef = elementRef;
        this.systemAccessEnum = systemAccessEnum;
        this.userSvc = userSvc;
        this.enums = enums;
        this.viewProductDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pageChangeEvt = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    }
    ProductDetailsTableViewComponent.prototype.ngOnChanges = function () {
        this.resetColumns();
        this.setupColumns();
    };
    ProductDetailsTableViewComponent.prototype.ngOnInit = function () {
        //this.productSvc.getBasketQuoteId().then(this.getBasketQuoteIdCallback.bind(this));
        //this.setupColumns();
    };
    ProductDetailsTableViewComponent.prototype.pageChange = function (event) {
        this.pageChangeEvt.emit(event);
    };
    ProductDetailsTableViewComponent.prototype.ngAfterViewChecked = function () {
        //var self = this;
        //var element = this.elementRef.nativeElement;
        //numeric text box
        //var numericTextBox = jQuery(element).find(".numericTextBox");
        //if (numericTextBox[0] != undefined) {
        //    jQuery(numericTextBox[0]).change(function () {
        //        if (this.valueAsNumber < 0) {
        //            this.valueAsNumber = 0;
        //            self.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        //        } else if (Math.floor(this.valueAsNumber) != this.valueAsNumber) {
        //            this.valueAsNumber = 0;
        //            self.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        //        }
        //        else {
        //            self.product.quantity = this.valueAsNumber;
        //        }
        //    });
        //}
    };
    ProductDetailsTableViewComponent.prototype.resetColumns = function () {
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    };
    ProductDetailsTableViewComponent.prototype.setupColumns = function () {
        if (this.productFamilyId == this.enums.ProductFamilyEnum.MiniSplit //Mini-Split
            || (this.productFamilyId == this.enums.ProductFamilyEnum.AlthermaSplit && (this.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //Altherma
            || (this.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit && (this.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //MultiSplit - Outdoor/All
            || this.productFamilyId == this.enums.ProductFamilyEnum.SkyAir) {
            this.SEERNonDucted = true;
            this.EERNonDucted = true;
            this.HSPFNonDucted = true;
            this.COP47NonDucted = true;
        }
        if ((this.productFamilyId == this.enums.ProductFamilyEnum.VRV || this.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit) && this.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) {
            //Show nothing
        }
        if (this.productFamilyId == this.enums.ProductFamilyEnum.VRV && (this.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.productModelTypeId == this.enums.ProductModelTypeEnum.All)) {
            this.IEERNonDucted = true;
            this.EERNonDucted = true;
            this.COP47NonDucted = true;
            this.SCHENonDucted = true;
        }
        if (this.productFamilyId == this.enums.ProductFamilyEnum.UnitarySplitSystem) {
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.SplitAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.SplitHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler || this.productClassPIMId == this.enums.ProductClassPIMEnum.Coil) {
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.GasFurnace) {
                this.AFUE = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.productFamilyId == this.enums.ProductFamilyEnum.UnitaryPackagedSystem) {
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.PackageAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedGED) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.productFamilyId == this.enums.ProductFamilyEnum.LightCommercialSplitSystem) {
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler) {
            }
            if (this.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                //this.AFUEDucted = true;
            }
        }
    };
    ProductDetailsTableViewComponent.prototype.validateQuantity = function (event) {
        var s = 0;
        //if (this.valueAsNumber < 0) {
        //            this.valueAsNumber = 0;
        //            self.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        //        } else if (Math.floor(this.valueAsNumber) != this.valueAsNumber) {
        //            this.valueAsNumber = 0;
        //            self.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        //        }
        //        else {
        //            self.product.quantity = this.valueAsNumber;
        //        }
    };
    ProductDetailsTableViewComponent.prototype.productDetails = function (event, product, activeTab) {
        var eventParams = {
            'product': product,
            'activeTab': activeTab
        };
        this.viewProductDetailsEvent.emit(eventParams);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "productFamilyId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "productModelTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "unitInstallationTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "productClassPIMId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "gridViewData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "skip", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "pageSize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductDetailsTableViewComponent.prototype, "viewProductDetailsEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductDetailsTableViewComponent.prototype, "pageChangeEvt", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductDetailsTableViewComponent.prototype, "basketQuoteId", void 0);
    ProductDetailsTableViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-details-tableView',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-tableView.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services_common_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_index__["e" /* Enums */]])
    ], ProductDetailsTableViewComponent);
    return ProductDetailsTableViewComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"margin-bottom:50px;\">\r\n    <h1 *ngIf=\"product\">{{product.name}}</h1>\r\n\r\n    <div class=\"scrollmenu\" id=\"productDetailsTabs\">\r\n        <ul class=\"sub-tab-bar\">\r\n            <li id=\"product-overview\" class=\"active\"> <a> OVERVIEW </a> </li>\r\n            <li id=\"product-accessories\"> <a> RELATED ACCESSORIES </a> </li>\r\n            <li id=\"product-specs\"> <a> TECHNICAL SPECIFICATIONS </a> </li>\r\n        </ul>\r\n\r\n    </div>\r\n\r\n    <!--Overview Tab-->\r\n    <div id=\"productOverviewTab\" *ngIf=\"product\" class=\"sub-tab-view\">\r\n        <product-overview [product]=\"product\" [userBasket]=\"userBasket\" [currentUser]=\"currentUser\"></product-overview>\r\n    </div>\r\n\r\n    <!--Related Accessories / Parent Products Tab-->\r\n    <div id=\"productRelatedAccessoriesTab\" *ngIf=\"product\" class=\"sub-tab-view accessory-list-view\" style=\"display:none;\">\r\n        <!--General Product-->\r\n        <div *ngIf=\"!product.isSystem && product.productModelTypeId != enums.ProductModelTypeEnum.Accessory\">\r\n            <product-accessories [product]=\"product\" [userBasket]=\"userBasket\" [currentUser]=\"currentUser\"></product-accessories>\r\n        </div>\r\n        <!--System Product-->\r\n        <div *ngIf=\"product.isSystem\">\r\n            <div class=\"sort-filter-container\" *ngIf=\"product.isSystem\" id=\"accessoryFilters\">\r\n                <div class=\"type-opts\">\r\n                    <label>Showing:&nbsp;</label>\r\n                    <input type=\"radio\" name=\"accessory-filter-type\" value=\"all\" checked />\r\n                    <label>All</label>\r\n                    <input type=\"radio\" name=\"accessory-filter-type\" value=\"indoor\" />\r\n                    <label>Indoor</label>\r\n                    <input type=\"radio\" name=\"accessory-filter-type\" value=\"outdoor\" />\r\n                    <label>Outdoor</label>\r\n                </div>\r\n            </div>\r\n            <div id=\"indoorAccessories\">\r\n                <product-accessories [product]=\"relatedIndoorUnit\" [userBasket]=\"userBasket\" [currentUser]=\"currentUser\"></product-accessories>\r\n            </div>\r\n            <div id=\"outdoorAccessories\">\r\n                <product-accessories [product]=\"relatedOutdoorUnit\" [userBasket]=\"userBasket\" [currentUser]=\"currentUser\"></product-accessories>\r\n            </div>\r\n        </div>\r\n\r\n        <!--Accessories Product-->\r\n        <div *ngIf=\"product.productModelTypeId == enums.ProductModelTypeEnum.Accessory\">\r\n\r\n            <div class=\"row row-nomargin border-bottom-row accessory-list-row\" *ngFor=\"let item of product.parentProducts ; let idx = index\">\r\n\r\n                <div class=\"col col-md-2 product-image no-padding\" style=\"height:130px;\">\r\n                    <img src=\"{{item.image.url}}\" width=\"150\" height=\"130\" class=\"sub-product-img\" />\r\n                </div>\r\n\r\n                <div *ngIf=\"userBasket\" class=\"product-info\" [ngClass]=\"{'col-md-8' : userBasket.basketQuoteId != 0 && userBasket.basketQuoteId != undefined, 'col-md-10' : userBasket.basketQuoteId == 0 || userBasket.basketQuoteId == undefined}\" style=\"background-color:none\">\r\n                    <div>\r\n                        <a (click)=\"productDetails($event, item)\" class=\"product-link\">  {{item.name}}</a>\r\n                    </div>\r\n                    <div>\r\n                        <span class=\"as-lnk\">Model No.: </span> <span class=\"pull-right\"> {{item.productNumber}}</span>\r\n                    </div>\r\n                    <div *ngIf=\"showPrices\">\r\n\r\n                        <span class=\"as-lnk\">Price: </span> <span class=\"pull-right\"> {{item.price | currency:'USD':true:'1.2-2'}}</span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!--Technical Specs Tabs-->\r\n    <div id=\"productSpecsTab\" *ngIf=\"product\" class=\"sub-tab-view dk-list-grey\" style=\"display:none;\">\r\n      \r\n\r\n        <div *ngIf=\"!product.isSystem\">\r\n            \r\n            <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.Controllers \r\n                || product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.RTU\r\n                || product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.Packaged\">\r\n\r\n                <!--<technical-specifications [specifications]=\"product.specifications\" [userBasket]=\"userBasket\"></technical-specifications>-->\r\n                <!--<div>General Product</div>-->\r\n                <div id=\"technical-specs\"></div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"product.isSystem\">\r\n            \r\n            <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.Controllers\r\n                || product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.RTU\r\n                || product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.Packaged\">\r\n                <!--<technical-specifications [specifications]=\"product.specifications\" [userBasket]=\"userBasket\"></technical-specifications>-->\r\n                <!--<div>System Product</div>-->\r\n                <div id=\"technical-specs\"></div>\r\n            </div>\r\n        </div>\r\n               \r\n\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.Accessories\">\r\n            <!--<div>Accessories</div>-->\r\n            <technical-specifications-accessories [product]=\"product\" [userBasket]=\"userBasket\"></technical-specifications-accessories>\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"product.submittalSheetTypeId == 1\">\r\n            <!--<div>Other</div>-->\r\n            <technical-specifications-other [product]=\"product\" [userBasket]=\"userBasket\"></technical-specifications-other>\r\n        </div>\r\n\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.SystemHP\">\r\n            <!--<div>System HP</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n           \r\n        </div>\r\n\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.SystemCooling\">\r\n            <!--<div>System cooling</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.MultiSplitIndoor || Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.VRVIndoor)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.MultiSplitIndoor || product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.VRVIndoor\">\r\n            <!--<div>MultiSplitIndoor || VRVIndoor</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n                     \r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.MultiSplitOutdoor)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.MultiSplitOutdoor\">\r\n            <!--<div>MultiSplitOutdoor</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n            \r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.VRVIIIAirCooled)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.VRVIIIAirCooled\">\r\n            <!--<div>VRVIIIAirCooled</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.VRVIIIWaterCooled)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.VRVIIIWaterCooled\">\r\n            <!--<div>VRVIIIWaterCooled</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.ACAndHP)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.ACAndHP\">\r\n            <!--<div>ACAndHP</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.CoilsAndAirHandler)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.CoilsAirHandlers\">\r\n            <!--<div>CoilsAirHandlers</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.GasFurnace)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.GasFurnace\">\r\n            <!--<div>GasFurnace</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.CommercialACAndHP)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.CommercialACAndHP\">\r\n            <!--<div>CommercialACAndHP</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.CommercialAH)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.CommercialAH\">\r\n            <!--<div>CommercialAH</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.PackagedACAndHP)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.PackagedACAndHP\">\r\n            <!--<div>PackagedACAndHP</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.PackagedDualFuel)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.PackagedDF\">\r\n            <!--<div>PackagedDF</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n\r\n        <!--if (Model.SubmittalSheetTypeId == SubmittalSheetTypeEnum.PackagedGasElectric)-->\r\n        <div *ngIf=\"product.submittalSheetTypeId == enums.SubmittalSheetTypeEnum.PackagedGE\">\r\n            <!--<div>PackagedGE</div>-->\r\n            <div id=\"technical-specs\">Template</div>\r\n\r\n        </div>\r\n\r\n        <!--<div>{{product.submittalSheetTypeId}}</div>-->\r\n\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, route, userSvc, enums, productSvc, basketSvc) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.enums = enums;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.showPrices = false;
    }
    ProductDetailsComponent.prototype.ngOnChange = function () {
        //console.log("ProductDetail Component: ngOnChange");
    };
    ProductDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.product = null; // this is to invoke change detection
            var data = {
                "ProductId": params.id,
            };
            _this.productSvc.getProduct(data).then(_this.GetProductCallback.bind(_this));
        });
        if (this.basketSvc.userBasket == undefined) {
            this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
        }
        else {
            this.userBasket = this.basketSvc.userBasket;
        }
        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(function (resp) {
                if (resp.isok) {
                    _this.userSvc.currentUser = resp.model;
                    _this.currentUser = resp.model;
                    _this.showPrices = _this.userSvc.currentUser.showPrices;
                }
            });
        }
        else {
            this.currentUser = this.userSvc.currentUser;
        }
    };
    ProductDetailsComponent.prototype.ngAfterContentInit = function () {
        //console.log("product Detail: ngAfterContentInit");
        //this.setupActiveTab();
    };
    ProductDetailsComponent.prototype.ngAfterContentChecked = function () {
        //console.log("product Detail: ngAfterContentChecked");
        //this.setupActiveTab();
    };
    ProductDetailsComponent.prototype.ngAfterViewInit = function () {
        //console.log("product Detail: ngAfterViewInit");
        //this.setupActiveTab();
        //this.route.queryParams.subscribe((params: { tab: string }) => {
        //    var subTabId = '#' + params.tab;
        //    jQuery(subTabId).click();
        //});
    };
    ProductDetailsComponent.prototype.ngAfterViewChecked = function () {
        //console.log("product Detail: ngAfterViewChecked");
        //this.setupActiveTab();
        if (__WEBPACK_IMPORTED_MODULE_3_jquery__('#accessoryFilters').length) {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('input[name="accessory-filter-type"]').on('change', function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__('#indoorAccessories, #outdoorAccessories').hide();
                switch (__WEBPACK_IMPORTED_MODULE_3_jquery__(this).val()) {
                    case "indoor":
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('#indoorAccessories').show();
                        break;
                    case "outdoor":
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('#outdoorAccessories').show();
                        break;
                    default:
                        __WEBPACK_IMPORTED_MODULE_3_jquery__('#indoorAccessories, #outdoorAccessories').show();
                }
            });
        }
    };
    ProductDetailsComponent.prototype.setupActiveTab = function () {
        //Product family tabs
        __WEBPACK_IMPORTED_MODULE_3_jquery__('.productFamilyTab li').each(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this).removeClass('active');
        });
        if (this.product.productFamilyId != null) {
            var activeFamilyTabId = "#product-family-tab-" + this.product.productFamilyId;
        }
        else {
            var activeFamilyTabId = "#product-family-tab-home";
        }
        __WEBPACK_IMPORTED_MODULE_3_jquery__(activeFamilyTabId).addClass("active");
        //Product details tabs
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#productDetailsTabs li').click(function () {
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productDetailsTabs li').each(function () {
                __WEBPACK_IMPORTED_MODULE_3_jquery__(this).removeClass('active');
            });
            __WEBPACK_IMPORTED_MODULE_3_jquery__(this).addClass('active');
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-overview').click(function () {
            //location.href = "#productOverviewTab";
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productOverviewTab').show();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productRelatedAccessoriesTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productSpecsTab').hide();
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-accessories').click(function () {
            //location.href = "#productRelatedAccessoriesTa  
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productOverviewTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productRelatedAccessoriesTab').show();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productSpecsTab').hide();
        });
        __WEBPACK_IMPORTED_MODULE_3_jquery__('#product-specs').click(function () {
            //location.href = "#productSpecsTab";
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productOverviewTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productRelatedAccessoriesTab').hide();
            __WEBPACK_IMPORTED_MODULE_3_jquery__('#productSpecsTab').show();
        });
    };
    ProductDetailsComponent.prototype.setActiveTabByUrlParam = function () {
        this.route.queryParams.subscribe(function (params) {
            var activeTabId = '#' + params.activeTab;
            __WEBPACK_IMPORTED_MODULE_3_jquery__(activeTabId).click();
        });
    };
    ProductDetailsComponent.prototype.GetProductCallback = function (resp) {
        if (resp.isok) {
            this.product = resp.model;
            //this.productSvc.product = resp.model;
            this.getSubmittalDataSheet(this.product);
            this.setupActiveTab();
        }
        if (this.product.isSystem) {
            for (var i in this.product.subProducts) {
                var item = this.product.subProducts[i];
                if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) {
                    this.relatedIndoorUnit = item;
                }
                else if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor) {
                    this.relatedOutdoorUnit = item;
                }
            }
        }
        console.log("************ SubmittalSheetTypeId: " + this.product.submittalSheetTypeId + " *******************");
    };
    ProductDetailsComponent.prototype.getBasketCallback = function (resp) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
        }
    };
    ProductDetailsComponent.prototype.productDetails = function (event, product) {
        this.productSvc.product = product;
        this.router.navigate(['/products', { outlets: { 'productDetails': [product.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    };
    ProductDetailsComponent.prototype.getSubmittalDataSheet = function (product) {
        var _this = this;
        this.productSvc.getSubmittalDataSheet(product.productNumber).then(function (resp) {
            if (resp) {
                var HtmlString = resp;
                __WEBPACK_IMPORTED_MODULE_3_jquery__("#technical-specs").replaceWith(HtmlString);
                _this.setActiveTabByUrlParam();
            }
        });
    };
    ProductDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-details',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-details.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* BasketService */]])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-overview/product-overview-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row row-nomargin product-details\" style=\"padding:10px;\">\r\n    <div class=\"col col-md-2 product-image no-padding\" style=\"background-color:none\">\r\n        <product-image [product]=\"product\"></product-image>\r\n    </div>\r\n\r\n    <div class=\"product-info\" [ngClass]=\"{'col col-md-8' : quoteId != 0 && quoteId != undefined, 'col col-md-10' : quoteId == 0 || quoteId == undefined}\" style=\"background-color:none\">\r\n        <div>\r\n            <span class=\"as-lnk\">Model No.: </span> <span class=\"pull-right\"> {{product.productNumber}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Model Type.: </span> <span class=\"pull-right\"> {{product.productModelTypeDescription}}</span>\r\n        </div>\r\n        <div *ngIf=\"showPrices\" >\r\n            <span class=\"as-lnk\">Price: </span> <span class=\"pull-right\"> {{product.price | currency:'USD':true:'1.2-2'}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Rated Cooling Capacity: </span> <span class=\"pull-right\"> {{product.coolingCapacityRated}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Rated Heating Capacity: </span> <span class=\"pull-right\"> {{product.heatingCapacityRated}}</span>\r\n        </div>\r\n\r\n        <product-spec-bars [product]=\"product\"></product-spec-bars>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"quoteId != 0 && quoteId != undefined\" class=\"col col-md-2 product-qty no-padding\" style=\"text-align:center\">\r\n        <product-quantity-add [product]=\"product\"></product-quantity-add>\r\n    </div>\r\n\r\n    <!--<div class=\"product-info\" [ngClass]=\"{'col col-md-8' : userBasket.quoteId != 0 && userBasket.quoteId != undefined, 'col col-md-10' : userBasket.quoteId == 0 || userBasket.quoteId == undefined}\" style=\"background-color:none\">\r\n        <div>\r\n            <span class=\"as-lnk\">Model No.: </span> <span class=\"pull-right\"> {{product.productNumber}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Model Type.: </span> <span class=\"pull-right\"> {{product.productModelTypeDescription}}</span>\r\n        </div>\r\n        <div *ngIf=\"userSvc.currentUser.showPrices\">\r\n            <span class=\"as-lnk\">Price: </span> <span class=\"pull-right\"> {{product.price | currency:'USD':true:'1.2-2'}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Rated Cooling Capacity: </span> <span class=\"pull-right\"> {{product.coolingCapacityRated}}</span>\r\n        </div>\r\n        <div>\r\n            <span class=\"as-lnk\">Rated Heating Capacity: </span> <span class=\"pull-right\"> {{product.heatingCapacityRated}}</span>\r\n        </div>\r\n               \r\n        <product-spec-bars [product]=\"product\"></product-spec-bars>\r\n    </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"userBasket.quoteId != 0 && userBasket.quoteId != undefined\" class=\"col col-md-2 product-qty no-padding\" style=\"text-align:center\">\r\n        <product-quantity-add [product]=\"product\"></product-quantity-add>\r\n    </div>-->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-overview/product-overview-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOverviewInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductOverviewInfoComponent = /** @class */ (function () {
    function ProductOverviewInfoComponent() {
        this.showPrices = false;
    }
    ProductOverviewInfoComponent.prototype.ngOnChanges = function () {
        if (this.userBasket != undefined) {
            this.quoteId = this.userBasket.quoteId;
        }
        if (this.currentUser != undefined) {
            this.showPrices = this.currentUser.showPrices;
        }
    };
    ProductOverviewInfoComponent.prototype.ngOnInit = function () {
    };
    ProductOverviewInfoComponent.prototype.ngAfterViewInit = function () {
        console.log("product-overview-info: ngAfterViewInit");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewInfoComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewInfoComponent.prototype, "userBasket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewInfoComponent.prototype, "currentUser", void 0);
    ProductOverviewInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-overview-info',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-overview/product-overview-info.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductOverviewInfoComponent);
    return ProductOverviewInfoComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-overview/product-overview.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<product-overview-info [product]=\"product\" [userBasket]=\"userBasket\" [currentUser]=\"currentUser\"></product-overview-info>\r\n\r\n<related-documents-accessories [product]=\"product\"></related-documents-accessories>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/product-overview/product-overview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductOverviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductOverviewComponent = /** @class */ (function () {
    function ProductOverviewComponent() {
    }
    ProductOverviewComponent.prototype.ngOnChanges = function (changes) {
        console.log("ProductDetail-OverView Component: ngOnChange");
    };
    ProductOverviewComponent.prototype.ngOnInit = function () { };
    ProductOverviewComponent.prototype.ngDoCheck = function () {
        //this.product = this.productSvc.product;
        //load new product
        //if (this.product != undefined && this.product.productId != this.productSvc.product.productId) {
        //    this.product = this.productSvc.product;
        //}
    };
    ProductOverviewComponent.prototype.ngAfterViewChecked = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "userBasket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "currentUser", void 0);
    ProductOverviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-overview',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/product-overview/product-overview.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-accessories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dk-list-header\">TECHNICAL SPECIFICATIONS</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Capacity Index Limit - Max</span> <span class=\"pull-right\">{{specs['capacityIndexLimitMax']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Capacity Index Limit - Min</span> <span class=\"pull-right\">{{specs['capacityIndexLimitMin']?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Capacity Rated</span> <span class=\"pull-right\">{{specs['coolingCapacityRated']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\"> Cooling Input Power</span> <span class=\"pull-right\">{{specs['coolingInputPower']?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Operation Range SspanMax</span> <span class=\"pull-right\">{{specs['coolingOperationRangeSspanMax']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Operation Range SspanMin</span> <span class=\"pull-right\">{{specs['coolingOperationRangeSspanMin']?.value}}</span>\r\n    </div>\r\n  \r\n</div> \r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Dimensions - Depth</span>  <span class=\"pull-right\">{{specs[\"dimensionsDepth\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Dimensions - Height</span> <span class=\"pull-right\">{{specs[\"dimensionsHeight\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Dimensions - Width</span>  <span class=\"pull-right\">{{specs[\"dimensionsWidth\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Fuse Size</span> <span class=\"pull-right\">{{specs[\"fuseSize\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">HL Pressure Line</span>  <span class=\"pull-right\">{{specs[\"pipeSizeHPLP\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Input Power</span> <span class=\"pull-right\">{{specs[\"heatingInputPower\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range Sspan Max</span>  <span class=\"pull-right\">{{specs[\"heatingOperationRangeSspanMax\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range Sspan Min</span> <span class=\"pull-right\">{{specs[\"heatingOperationRangeSspanMin\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">InERP</span>  <span class=\"pull-right\">{{specs[\"inerp\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Inter Connecting Wires</span> <span class=\"pull-right\">{{specs[\"interConnectingWires\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max Connection Ports</span>  <span class=\"pull-right\">{{specs[\"maxConnectionPorts\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max External Static Pressure</span> <span class=\"pull-right\">{{specs[\"maxExternalStaticPressure\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max Indoor Units</span>  <span class=\"pull-right\">{{specs[\"maxIndoorUnits\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Min Circuit Amps</span> <span *ngIf=\"specs['minCircuitAmpsText']\" class=\"pull-right\">\r\n            {{specs[\"minCircuitAmpsText\"]? specs[\"minCircuitAmpsText\"]?.value : specs[\"MinCircuitAmps\"]?.value}}\r\n        </span> \r\n                                                       \r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Pipe Size - Gas</span>  <span class=\"pull-right\">{{specs[\"pipeSizeGas\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">PipeSize - Liquid</span> <span class=\"pull-right\">{{specs[\"pipeSizeLiquid\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Frequency</span>  <span class=\"pull-right\">{{specs[\"powerFrequency\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Phase</span> <span class=\"pull-right\">{{specs[\"powerPhase\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Voltage</span>  <span class=\"pull-right\">{{specs[\"powerVoltage\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\"> Product Class Name</span> <span class=\"pull-right\">{{specs[\"productClassName\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated External Static Pressure</span>  <span class=\"pull-right\">{{specs[\"ratedExternalStaticPressure\"]?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Refrigerant Type</span> <span class=\"pull-right\">{{specs[\"refrigerantType\"]?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Weight - Net</span>  <span class=\"pull-right\">{{specs[\"WeightNetText\"]? specs[\"WeightNetText\"]?.value : specs[\"WeightNet\"]?.value}}</span>\r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-accessories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalSpecificationsAccessoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicalSpecificationsAccessoriesComponent = /** @class */ (function () {
    function TechnicalSpecificationsAccessoriesComponent() {
        this.specs = [];
    }
    TechnicalSpecificationsAccessoriesComponent.prototype.ngOnInit = function () {
        this.specs = this.product.specifications.all;
        //for (var key in this.product.specifications.all) {
        //    var item: any = {
        //        key: key,
        //        value: this.product.specifications.all[key]
        //    }
        //    this.specs.push(item);
        //}
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsAccessoriesComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsAccessoriesComponent.prototype, "userBasket", void 0);
    TechnicalSpecificationsAccessoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'technical-specifications-accessories',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-accessories.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalSpecificationsAccessoriesComponent);
    return TechnicalSpecificationsAccessoriesComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-other.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dk-list-header\">TECHNICAL SPECIFICATIONS</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">InERP</span> <span class=\"pull-right\">{{specs['inerp']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Product Class Name</span> <span class=\"pull-right\">{{specs['productClassName']?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Short Name</span> <span class=\"pull-right\">{{specs['shortName']?.value}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-other.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalSpecificationsOtherComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TechnicalSpecificationsOtherComponent = /** @class */ (function () {
    function TechnicalSpecificationsOtherComponent() {
        this.specs = [];
    }
    TechnicalSpecificationsOtherComponent.prototype.ngOnInit = function () {
        this.specs = this.product.specifications.all;
        //for (var key in this.product.specifications.all) {
        //    var item: any = {
        //        key: key,
        //        value: this.product.specifications.all[key]
        //    }
        //    this.specs.push(item);
        //}
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsOtherComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsOtherComponent.prototype, "userBasket", void 0);
    TechnicalSpecificationsOtherComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'technical-specifications-other',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-other.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalSpecificationsOtherComponent);
    return TechnicalSpecificationsOtherComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-systemHP.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This view is not used. Delete after 01/06/2017-->\r\n<div class=\"dk-list-header\">TECHNICAL SPECIFICATIONS</div>\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Additional Refrigerant Charge</span> <span class=\"pull-right\">{{specs['additionalRefrigerantCharge']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating COP (Non-Ducted)</span> <span class=\"pull-right\">{{specs['coP47Nonducted']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Condensate Drain Outlet (in)</span> <span class=\"pull-right\">{{specs['condensateDrainOutlet']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Capacity Max</span> <span class=\"pull-right\">{{specs['coolingCapacityMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Capacity Min</span> <span class=\"pull-right\">{{specs['coolingCapacityMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Capacity Rated</span> <span class=\"pull-right\">{{specs['coolingCapacityRated']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Capacity Sensible</span> <span class=\"pull-right\">{{specs['coolingCapacitySensible']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Input Power</span> <span class=\"pull-right\">{{specs['coolingInputPower']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Operation Range StdMax</span> <span class=\"pull-right\">{{specs['coolingOperationRangeStdMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Operation Range StdMin</span> <span class=\"pull-right\">{{specs['coolingOperationRangeStdMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Cooling Operation Range wBaffleMax</span> <span class=\"pull-right\">{{specs['coolingOperationRangewBaffleMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">CoolingOperationRangewBaffleMin</span> <span class=\"pull-right\">{{specs['coolingOperationRangewBaffleMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">EER Nonducted</span> <span class=\"pull-right\">{{specs['eerNonducted']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Factory Std Refrigerant Charge</span> <span class=\"pull-right\">{{(specs['factoryStdRefrigerantChargeText'] ? specs['factoryStdRefrigerantChargeText']?.value : specs['factoryStdRefrigerantCharge']?.value)  | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Fuse Size</span> <span class=\"pull-right\">{{specs['fuseSize']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">HSPF Nonducted</span> <span class=\"pull-right\">{{specs['hspfNonducted']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Capacity Max</span> <span class=\"pull-right\">{{specs['heatingCapacityMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Capacity Min</span> <span class=\"pull-right\">{{specs['heatingCapacityMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Capacity Rated</span> <span class=\"pull-right\">{{specs['heatingCapacityRated']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Input Power</span> <span class=\"pull-right\">{{specs['heatingInputPower']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range Std Max</span> <span class=\"pull-right\">{{specs['heatingOperationRangeStdMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range Std Min</span> <span class=\"pull-right\">{{specs['heatingOperationRangeStdMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range wBaffle Max</span> <span class=\"pull-right\">{{specs['heatingOperationRangewBaffleMax']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Heating Operation Range wBaffle Min</span> <span class=\"pull-right\">{{specs['heatingOperationRangewBaffleMin']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">InERP</span> <span class=\"pull-right\">{{specs['inerp']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Inter Connecting Wires</span> <span class=\"pull-right\">{{specs['interConnectingWires']?.value }}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max External Static Pressure</span> <span class=\"pull-right\">{{specs['maxExternalStaticPressure']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max Indoor to Indoor Piping</span> <span class=\"pull-right\">{{specs['maxIndoortoIndoorPiping']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max Overcurrent Protection</span> <span class=\"pull-right\">{{(specs['maxOvercurrentProtectionText']? specs['maxOvercurrentProtectionText']?.value: specs['maxOvercurrentProtection']?.value)  | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Max Pipe Length Total</span> <span class=\"pull-right\">{{specs['maxPipeLengthTotal']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Min Circuit Amps</span> <span class=\"pull-right\">{{(specs['minCircuitAmpsText']? specs['minCircuitAmpsText']?.value : specs['minCircuitAmps']?.value)  | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Moisture Removal Rate</span> <span class=\"pull-right\">{{specs['moistureRemovalRate']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Pipe Size - Gas</span> <span class=\"pull-right\">{{specs['pipeSizeGas']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">PipeSize - Liquid</span> <span class=\"pull-right\">{{specs['pipeSizeLiquid']?.value}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Frequency</span> <span class=\"pull-right\">{{specs['powerFrequency']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Phase</span> <span class=\"pull-right\">{{specs['powerPhase']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Power Voltage</span> <span class=\"pull-right\">{{specs['powerVoltage']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Cooling Condition AmbientDB</span> <span class=\"pull-right\">{{specs['ratedCoolingConditionAmbientDB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Cooling Condition AmbientWB</span> <span class=\"pull-right\">{{specs['ratedCoolingConditionAmbientWB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Cooling Condition RoomDB</span> <span class=\"pull-right\">{{specs['ratedCoolingConditionRoomDB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Cooling Condition RoomWB</span> <span class=\"pull-right\">{{specs['ratedCoolingConditionRoomWB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated External Static Pressure</span> <span class=\"pull-right\">{{specs['ratedExternalStaticPressure']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Heating Condition AmbientDB</span> <span class=\"pull-right\">{{specs['ratedHeatingConditionAmbientDB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Heating Condition AmbientWB</span> <span class=\"pull-right\">{{specs['ratedHeatingConditionAmbientWB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Heating Condition RoomDB</span> <span class=\"pull-right\">{{specs['ratedHeatingConditionRoomDB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Heating Condition RoomWB</span> <span class=\"pull-right\">{{specs['ratedHeatingConditionRoomWB']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Height Difference</span> <span class=\"pull-right\">{{specs['ratedHeightDifference']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Rated Load Amps</span> <span class=\"pull-right\">{{(specs['ratedLoadAmpsText'] ? specs['ratedLoadAmpsText']?.value : specs['ratedLoadAmps']?.value) | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Refrigerant Type</span> <span class=\"pull-right\">{{specs['refrigerantType']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">SEER Nonducted</span> <span class=\"pull-right\">{{specs['seerNonducted']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Short Name</span> <span class=\"pull-right\">{{specs['shortName']?.value}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Sound Pressure - High</span> <span class=\"pull-right\">{{specs['soundPressureHigh']?.value | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row row-nomargin dk-list-row\">\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\">Unit Installation Type</span> <span class=\"pull-right\">{{product.productCategoryName}}</span>\r\n    </div>\r\n    <div class=\"col col-md-6 col-xs-12\">\r\n        <span class=\"pull-left\"> Weight - Net</span> <span class=\"pull-right\">{{(specs['weightNetText'] ? specs['weightNetText']?.value : specs['weightNet']?.value) | number:'1.2-2'}}</span>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-systemHP.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalSpecificationsSystemHPComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//This component is not used.Delete after 01/ 06 / 2017

var TechnicalSpecificationsSystemHPComponent = /** @class */ (function () {
    function TechnicalSpecificationsSystemHPComponent() {
        this.specs = [];
    }
    TechnicalSpecificationsSystemHPComponent.prototype.ngOnInit = function () {
        this.specs = this.product.specifications.all;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsSystemHPComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsSystemHPComponent.prototype, "userBasket", void 0);
    TechnicalSpecificationsSystemHPComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'technical-specifications-systemHP',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-systemHP.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalSpecificationsSystemHPComponent);
    return TechnicalSpecificationsSystemHPComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications.component.html":
/***/ (function(module, exports) {

module.exports = "<!--This view is not used. Delete after 01/06/2017-->\r\n<div class=\"dk-list-header\">TECHNICAL SPECIFICATIONS</div>\r\n    <!--<div class=\"dk-list-header\">TECHNICAL SPECIFICATIONS</div>-->\r\n    <div *ngFor=\"let item of specs ; let idx = index\">\r\n        <div *ngIf=\"item.name\" class=\"row row-nomargin row-halfpage border-bottom-row\" style=\"margin:5px;\">\r\n            <span class=\"pull-left\">{{item.name}}</span>\r\n            <span class=\"pull-right\">{{item.value}}</span>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TechnicalSpecificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//This component is not used.Delete after 01/ 06 / 2017

var TechnicalSpecificationsComponent = /** @class */ (function () {
    function TechnicalSpecificationsComponent() {
        this.specs = [];
    }
    TechnicalSpecificationsComponent.prototype.ngOnInit = function () {
        for (var key in this.specifications.all) {
            this.specs.push(this.specifications.all[key]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsComponent.prototype, "specifications", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsComponent.prototype, "userBasket", void 0);
    TechnicalSpecificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'technical-specifications',
            template: __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TechnicalSpecificationsComponent);
    return TechnicalSpecificationsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-images/product-image.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div>\r\n    <div class=\"sub-product-img-container\" style=\"width:150px; height:135px;\" >\r\n        <span *ngIf=\"images.length == 0\">\r\n            <!--<img width=\"135\" height=\"100\" src=\"/Images/NoImage.png\" class=\"sub-product-img\"/>-->\r\n            <img src=\"/Images/NoImage.png\" class=\"sub-product-img no-image\" style=\"width:145px; height:110px;\" />\r\n        </span>\r\n        <span *ngIf=\"images.length > 0\">\r\n            <span *ngFor=\"let image of images ; let idx = index\">\r\n                <!--<img id=\"img-{{product.productNumber}}-{{idx}}\" width=\"135\" height=\"100\" src=\"{{image.url}}\" class=\"sub-product-img\" [ngClass]=\"{hidden : idx > 0}\" />-->\r\n                <img id=\"img-{{product.productNumber}}-{{idx}}\" src=\"{{image.url}}\" \r\n                     class=\"sub-product-img\" style=\"width:145px; height:110px;\" [ngClass]=\"{hidden : idx > 0}\" />\r\n            </span>\r\n        </span>\r\n        \r\n        <div *ngIf=\"images.length > 1\" style=\"text-align:center\">\r\n            <span *ngFor=\"let image of images ; let idx = index\">\r\n                <button id=\"img-btn-{{product.productNumber}}-{{idx}}\" \r\n                        class=\"product-img-btn\" [ngClass]=\"{active : idx == 0}\"></button>\r\n            </span>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--[ngStyle]=\"{'display': idx > 0 ? 'none': 'block'}\"-->\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-images/product-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductImageComponent; });
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


var ProductImageComponent = /** @class */ (function () {
    function ProductImageComponent() {
        this.images = [];
    }
    ProductImageComponent.prototype.ngOnInit = function () {
        //if (this.product.image == undefined) {
        //    debugger
        //}
        if (this.product.image.hasImage) {
            this.images.push(this.product.image);
        }
        if (this.product.subProducts.length > 0) {
            for (var i = 0; i < this.product.subProducts.length; i++) {
                this.images.push(this.product.subProducts[i].image);
            }
        }
    };
    ProductImageComponent.prototype.ngAfterViewInit = function () {
        this.setupImageToggleBtn();
    };
    ProductImageComponent.prototype.ngAfterViewChecked = function () {
        //if (this.product.image.hasImage) {
        //    this.images.push(this.product.images);
        //}
        //if (this.product.subProducts.length > 0) {
        //    for (var i = 0; i < this.product.subProducts.length; i++) {
        //        this.images.push(this.product.subProducts[i].image);
        //    }
        //}
        //this.setupImageToggleBtn();
        //jQuery(".product-img-btn").click(function (event: any) {
        //    //get productNumberIdx
        //    var targetId = event.target.id; // ex: "img-btn-FDXS09LVJURXS09LVJU-0"
        //    var productNumberIdx = targetId.substring(8, targetId.length)
        //    //find sub-product Imgabe Id by productNumberIdx
        //    var imgBtn = jQuery(event.target);
        //    //imgBtn.addClass("active");
        //    var parentDiv = imgBtn.parents(".sub-product-img-container");
        //    var imgId = "img-" + productNumberIdx;
        //    //var img = jQuery(parentDiv).find(imgId)[0];
        //    var subProductImgaes = jQuery(parentDiv).find(".sub-product-img");
        //    for (var i = 0; i < subProductImgaes.length; i++) {
        //        if (subProductImgaes[i].id == imgId) {
        //            jQuery(subProductImgaes[i]).removeClass("hidden");
        //        } else {
        //            jQuery(subProductImgaes[i]).addClass("hidden");
        //        }
        //    }
        //    var imgBtns = jQuery(parentDiv).find(".product-img-btn");
        //    jQuery(imgBtns).removeClass("active");
        //    imgBtn.addClass("active");
        //});
    };
    ProductImageComponent.prototype.setupImageToggleBtn = function () {
        __WEBPACK_IMPORTED_MODULE_1_jquery__(".product-img-btn").click(function (event) {
            //get productNumberIdx
            var targetId = event.target.id; // ex: "img-btn-FDXS09LVJURXS09LVJU-0"
            var productNumberIdx = targetId.substring(8, targetId.length);
            //find sub-product Imgabe Id by productNumberIdx
            var imgBtn = __WEBPACK_IMPORTED_MODULE_1_jquery__(event.target);
            //imgBtn.addClass("active");
            var parentDiv = imgBtn.parents(".sub-product-img-container");
            var imgId = "img-" + productNumberIdx;
            //var img = jQuery(parentDiv).find(imgId)[0];
            var subProductImgaes = __WEBPACK_IMPORTED_MODULE_1_jquery__(parentDiv).find(".sub-product-img");
            for (var i = 0; i < subProductImgaes.length; i++) {
                if (subProductImgaes[i].id == imgId) {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(subProductImgaes[i]).removeClass("hidden");
                }
                else {
                    __WEBPACK_IMPORTED_MODULE_1_jquery__(subProductImgaes[i]).addClass("hidden");
                }
            }
            var imgBtns = __WEBPACK_IMPORTED_MODULE_1_jquery__(parentDiv).find(".product-img-btn");
            __WEBPACK_IMPORTED_MODULE_1_jquery__(imgBtns).removeClass("active");
            imgBtn.addClass("active");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductImageComponent.prototype, "product", void 0);
    ProductImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-image',
            template: __webpack_require__("../../../../../src/app/products/components/product-images/product-image.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], ProductImageComponent);
    return ProductImageComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-list/productList.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<style>\r\n    .k-grid-pager {\r\n        top: 0;\r\n        position: fixed;\r\n        width: auto;\r\n        z-index: 1;\r\n    }\r\n</style>-->\r\n\r\n<div class=\"sort-filter-container\">\r\n    <div class=\"sortby-container product-sort\">\r\n        <span>\r\n            <label>Sort by</label>\r\n            <!--<kendo-dropdownlist [data]=\"sortByDDLValues\"\r\n                            [textField]=\"'text'\" [valueField]=\"'value'\" [(ngModel)]=\"productSortBy\"\r\n                            (selectionChange)=\"sortProductsBy($event)\"></kendo-dropdownlist>-->\r\n            <input id=\"sortProductDLL\" />\r\n        </span>\r\n\r\n        <span class=\"view-options pull-right\">\r\n            \r\n\r\n            <span style=\"float:left; padding-right: 10px;\">\r\n                <label>Product status</label>\r\n                <kendo-dropdownlist [data]=\"productStatusOptions\"\r\n                                    [textField]=\"'text'\" [valueField]=\"'valueDecimal'\"\r\n                                    (selectionChange)=\"productFilterByDecimalValue($event, 'productStatusTypeId')\"\r\n                                    [valuePrimitive]=\"true\"\r\n                                    [(ngModel)]=\"selectedProductStatus\">\r\n                </kendo-dropdownlist>\r\n            </span>\r\n\r\n            <span style=\"float:left; padding-right: 10px;\">\r\n                <label>Inventory Status</label>\r\n                <kendo-dropdownlist [data]=\"inventoryStatusOptions\"\r\n                                    [textField]=\"'text'\" [valueField]=\"'valueDecimal'\"\r\n                                    (selectionChange)=\"productFilterByDecimalValue($event, 'inventoryStatusId')\"\r\n                                    [valuePrimitive]=\"true\"\r\n                                    [(ngModel)]=\"selectedInventoryStatus\">\r\n                </kendo-dropdownlist>\r\n            </span>\r\n\r\n            <span class=\"hidden-xs\">\r\n                <button class=\"display-btn display-view-table selected\" (click)=\"setViewOption(1)\" title=\"Table view\"></button>\r\n                <button class=\"display-btn display-view-list\" (click)=\"setViewOption(0)\" title=\"List view\"></button>\r\n                <button class=\"display-btn display-view-grid\" (click)=\"setViewOption(2)\" title=\"Grid view\"></button>\r\n            </span>\r\n\r\n\r\n            <!--<kendo-dropdownlist [data]=\"listItems\"\r\n                                [textField]=\"'text'\" [valueField]=\"'value'\"\r\n                                [(ngModel)]=\"selectedItem\">\r\n            </kendo-dropdownlist>-->\r\n        </span>\r\n    </div>\r\n\r\n    <div class=\"filters-container product-filters\">\r\n        <ul>\r\n            <!--Family (Sub Family)-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.MiniSplit\r\n                        || productFamilyId == enums.ProductFamilyEnum.MultiSplit\r\n                        || productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.SkyAir\r\n                        || productFamilyId == enums.ProductFamilyEnum.VRV) \">\r\n\r\n                <label>Sub Family</label>\r\n                <kendo-dropdownlist [data]=\"productSubFamilyDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productSubFamilySelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productSubFamilyId')\"\r\n                                    [popupSettings]=\"{ width: 370 }\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Unit Type (Function Category)-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.MiniSplit\r\n                        || (productFamilyId == enums.ProductFamilyEnum.MultiSplit && (productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || productModelTypeId == this.enums.ProductModelTypeEnum.All))\r\n                        || productFamilyId == enums.ProductFamilyEnum.SkyAir\r\n                        || (productFamilyId == enums.ProductFamilyEnum.VRV && productModelTypeId == enums.ProductModelTypeEnum.Outdoor)   ) \">\r\n                <label>Unit Type</label>\r\n                <kendo-dropdownlist [data]=\"productFunctionCategoryDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productFunctionCategorySelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event,'productFunctionCategoryId')\"></kendo-dropdownlist>\r\n\r\n            </li>\r\n\r\n            <!--TODO: to be renamed-->\r\n            <!--Unit Style (Unit Installation Type)-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.MiniSplit\r\n                        || ((productFamilyId == enums.ProductFamilyEnum.AlthermaSplit || productFamilyId == enums.ProductFamilyEnum.AlthermaMonobloc) && productModelTypeId == enums.ProductModelTypeEnum.Outdoor)\r\n                        || (productFamilyId == enums.ProductFamilyEnum.MultiSplit && (productModelTypeId == enums.ProductModelTypeEnum.Indoor || productModelTypeId == enums.ProductModelTypeEnum.All))\r\n                        || productFamilyId == enums.ProductFamilyEnum.SkyAir\r\n                        || (productFamilyId == enums.ProductFamilyEnum.VRV && productModelTypeId == enums.ProductModelTypeEnum.Indoor)   ) \">\r\n                <label>Unit Style</label>\r\n                <kendo-dropdownlist [data]=\"unitInstallationTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"unitInstallationTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event,'unitInstallationTypeId')\"></kendo-dropdownlist>\r\n                <!--<input id=\"unitInstallationTypeDDL\" />-->\r\n            </li>\r\n\r\n            <!--Power Supply (Power Voltage)-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.MiniSplit\r\n                        || productFamilyId == enums.ProductFamilyEnum.AlthermaSplit\r\n                        || productFamilyId == enums.ProductFamilyEnum.AlthermaMonobloc\r\n                        || productFamilyId == enums.ProductFamilyEnum.MultiSplit\r\n                        || productFamilyId == enums.ProductFamilyEnum.SkyAir\r\n                        || productFamilyId == enums.ProductFamilyEnum.VRV\r\n                        || productFamilyId == enums.ProductFamilyEnum.Accessories) \">\r\n\r\n                <label>Power Supply </label>\r\n                <kendo-dropdownlist [data]=\"productPowerVoltageDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productPowerVoltageSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productPowerVoltageTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Capacity (Tonnage)-->\r\n            <li *ngIf=\"( (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId != enums.ProductClassPIMEnum.GasFurnace)\r\n                         || (productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem && productClassPIMId != enums.ProductClassPIMEnum.GasFurnace )\r\n                         || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && productClassPIMId != enums.ProductClassPIMEnum.GasFurnace )\r\n                         || (productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem && productClassPIMId != enums.ProductClassPIMEnum.GasFurnace ) )\r\n                        && productClassPIMId != enums.ProductClassPIMEnum.All \">\r\n\r\n                <label>Capacity</label>\r\n                <kendo-dropdownlist [data]=\"tonnageDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"tonnageSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'tonnage')\" title=\"Tonnage\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Capacity (Cooling Capacity Nominal)-->\r\n            <!--<li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId == enums.ProductClassPIMEnum.Coil)\r\n                       || (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId == enums.ProductClassPIMEnum.AirHandler) \">\r\n\r\n                <label>Capacity</label>\r\n                <kendo-dropdownlist [data]=\"coolingCapacityNominalDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"coolingCapacityNominalSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'coolingCapacityNominal')\" title=\"Cooling Capacity Nominal\"></kendo-dropdownlist>\r\n\r\n            </li>-->\r\n            <!--Capacity (Heating Capacity Rated)-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId == enums.ProductClassPIMEnum.GasFurnace)\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem && productClassPIMId == enums.ProductClassPIMEnum.GasFurnace)\">\r\n\r\n                <label>Capacity</label>\r\n                <kendo-dropdownlist [data]=\"heatingCapacityRatedDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"heatingCapacityRatedSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'heatingCapacityRated')\" title=\"Heating Capacity Rated\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Compressor Type (Compressor Stage)-->\r\n            <li *ngIf=\"( (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.SplitAC || productClassPIMId == enums.ProductClassPIMEnum.SplitHP || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.SplitAC || productClassPIMId == enums.ProductClassPIMEnum.SplitHP || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem) \">\r\n\r\n                <label>Compressor Stage</label>\r\n                <kendo-dropdownlist [data]=\"productCompressorTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productCompressorTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productCompressorTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Air Flow Rate High Cooling-->\r\n            <li *ngIf=\"( (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId == enums.ProductClassPIMEnum.AirHandler)\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && productClassPIMId == enums.ProductClassPIMEnum.AirHandler)\r\n                        || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem) \">\r\n\r\n                <label>Air Flow Rate High Cooling</label>\r\n                <kendo-dropdownlist [data]=\"airFlowRateHighCoolingDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"airFlowRateHighCoolingSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'airFlowRateHighCooling')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Air Flow Rate High Heating-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && productClassPIMId == enums.ProductClassPIMEnum.GasFurnace)\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && productClassPIMId == enums.ProductClassPIMEnum.GasFurnace)\">\r\n\r\n                <label>Air Flow Rate High Heating</label>\r\n                <kendo-dropdownlist [data]=\"airFlowRateHighHeatingDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"airFlowRateHighHeatingSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'airFlowRateHighHeating')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Gas Valve Type-->\r\n            <li *ngIf=\"( (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem && (productClassPIMId == enums.ProductClassPIMEnum.PackagedGED))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem && (productClassPIMId == enums.ProductClassPIMEnum.PackagedGED)) ) \">\r\n\r\n                <label>Gas Valve Type</label>\r\n                <kendo-dropdownlist [data]=\"productGasValveTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productGasValveTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productGasValveTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Motor Type-->\r\n            <li *ngIf=\"( (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem\r\n                        || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem) \">\r\n\r\n                <label>Motor Type</label>\r\n                <kendo-dropdownlist [data]=\"productMotorSpeedTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productMotorSpeedTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productMotorSpeedTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Installation Configutation Type-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\r\n                        || (productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem && (productClassPIMId == enums.ProductClassPIMEnum.GasFurnace || productClassPIMId == enums.ProductClassPIMEnum.All))\">\r\n\r\n                <label>Installation Configutation Type</label>\r\n                <kendo-dropdownlist [data]=\"productInstallationConfigurationTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productInstallationConfigurationTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event, 'productInstallationConfigurationTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Heat Exchanger Type-->\r\n            <li *ngIf=\"(productFamilyId == enums.ProductFamilyEnum.VRV && (productModelTypeId == enums.ProductModelTypeEnum.Outdoor || productModelTypeId == this.enums.ProductModelTypeEnum.All) )\">\r\n                <label>Heat Exchanger Type</label>\r\n                <kendo-dropdownlist [data]=\"productHeatExchangerTypeDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productHeatExchangerTypeSelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event,'productHeatExchangerTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--Unit Type (Accessory Type)-->\r\n            <li *ngIf=\"productTypeId == enums.ProductTypeEnum.Accessory\">\r\n                <label>Unit Type</label>\r\n                <kendo-dropdownlist [data]=\"productAccessoryDDLValues\"\r\n                                    [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productAccessorySelectedValue\"\r\n                                    (selectionChange)=\"productFilter($event,'productAccessoryTypeId')\"></kendo-dropdownlist>\r\n            </li>\r\n\r\n            <!--<kendo-dropdownlist [data]=\"productCategoryDDLValues\"\r\n                           [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"productCategorySelectedValue\"\r\n                           (selectionChange)=\"productFilter($event,'productCategoryId')\"></kendo-dropdownlist>-->\r\n            <!--<kendo-dropdownlist [data]=\"coolingCapacityRatedDDLValues\"\r\n               [defaultItem]=\"defaultItem\" [textField]=\"'text'\" [valueField]=\"'value'\" [(value)]=\"coolingCapacityRatedSelectedValue\"\r\n               (selectionChange)=\"productFilter($event,'coolingCapacityRated')\"></kendo-dropdownlist>-->\r\n            <li>\r\n                <button class=\"btn btn-primary\" (click)=\"clearFilters()\" style=\"margin-left: 10px;\">RESET</button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<!--product-table-view-->\r\n<div *ngIf=\"viewOption == 1 &&  gridData\" class=\"product-table-view hidden-xs\">\r\n    <product-details-tableView [user]=\"user\"\r\n                               [productFamilyId]=\"productFamilyId\" [productModelTypeId]=\"productModelTypeId\"\r\n                               [unitInstallationTypeId]=\"unitInstallationTypeId\" [productClassPIMId]=\"productClassPIMId\"\r\n                               [(gridViewData)]=\"gridViewData\" [skip]=\"skip\" [pageSize]=\"pageSize\"\r\n                               [basketQuoteId]=\"basketQuoteId\"\r\n                               (viewProductDetailsEvent)=\"viewProductDetails($event)\"\r\n                               (pageChangeEvt)=\"pageChange($event)\">\r\n    </product-details-tableView>\r\n</div>\r\n\r\n<!--product-list-view-->\r\n<div *ngIf=\"viewOption == 0\" class=\"product-list-view hidden-xs\">\r\n    <kendo-grid id=\"product-list-view\" *ngIf=\"gridData\" [data]=\"gridViewData\"\r\n                [skip]=\"skip\" [pageSize]=\"pageSize\" [pageable]=\"true\" (pageChange)=\"pageChange($event)\">\r\n\r\n        <kendo-grid-column field=\"product.name\">\r\n            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                <product-details-listView [user]=\"user\"\r\n                                          [(product)]=\"dataItem.product\"\r\n                                          [basketQuoteId]=\"basketQuoteId\"\r\n                                          (viewProductDetailsEvent)=\"viewProductDetails($event)\">\r\n                </product-details-listView>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n\r\n    </kendo-grid>\r\n</div>\r\n\r\n<!--product-grid-view-->\r\n<div *ngIf=\"viewOption == 2\" class=\"product-grid-view hidden-xs\">\r\n    <kendo-grid id=\"product-grid-view\" *ngIf=\"gridData\" [data]=\"gridViewData\" \r\n                [skip]=\"skip\" [pageSize]=\"pageSize\" [pageable]=\"true\" \r\n                (pageChange)=\"pageChange($event)\">\r\n\r\n        <kendo-grid-column>\r\n            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                <product-details-gridView [user]=\"user\"\r\n                                          [(product)]=\"dataItem.product\"\r\n                                          [basketQuoteId]=\"basketQuoteId\"\r\n                                          (viewProductDetailsEvent)=\"viewProductDetails($event)\">\r\n                </product-details-gridView>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n    </kendo-grid>\r\n</div>\r\n\r\n\r\n<!--Mobile-->\r\n<div class=\"product-grid-view visible-xs\">\r\n    <kendo-grid id=\"product-grid-view\" *ngIf=\"gridData\" [data]=\"gridViewData\" [skip]=\"skip\" [pageSize]=\"pageSize\" [pageable]=\"true\" (pageChange)=\"pageChange($event)\">\r\n\r\n        <kendo-grid-column>\r\n            <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\">\r\n                <product-details-gridView [(product)]=\"dataItem.product\"\r\n                                          [basketQuoteId]=\"basketQuoteId\"\r\n                                          (viewProductDetailsEvent)=\"viewProductDetails($event)\">\r\n                </product-details-gridView>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n    </kendo-grid>\r\n</div>\r\n\r\n<div id=\"scrollUpBtn\" class=\"text-center\" style=\"display:none\">\r\n    <button class=\"btn btn-primary\" style=\"width:25px;\" (click)=\"scrollUp()\"><span class=\"glyphicon glyphicon-arrow-up\"></span></button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-list/productList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__ = __webpack_require__("../../../../@progress/kendo-data-query/dist/es/main.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/*
interface Item {
 text: string,
 value: number
}*/
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(toastrSvc, systemAccessEnum, enums, productSvc) {
        this.toastrSvc = toastrSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.enums = enums;
        this.productSvc = productSvc;
        //public productFamilyId: any;
        //public productModelTypeId: any;
        //public unitInstallationTypeId: any;
        this.updateBasketEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.showProductDetailsEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pageSize = 100;
        this.skip = 0;
        this.viewOption = 1;
        //Dropdowns
        //public sortByDDLValues: any = [{ text: "Model No.", value: "product.productNumber" },
        //                                { text: "Product description", value: "product.name" }];
        this.productSortBy = "product.productNumber";
        this.productFilters = [];
        this.defaultItem = { text: "Select...", value: null };
        this.productStatusOptions = [];
        this.inventoryStatusOptions = [];
        /*
        public productStatusOptions : Array<{ text: string, value: any }> = [
            { text: "Released", value: 111267 },
            { text: "Obsolete", value: 111268 },
            { text: "Hidden Module Unit", value: 111269 },
            { text: "All", value: null }
        ];*/
        //public selectedProductStatus: { text: string, value: any } = { text: "Released", value: 111267 };
        this.selectedProductStatus = 111267;
        this.selectedInventoryStatus = 0;
        this.firstViewCheckAfterOnChange = true;
    }
    ProductListComponent.prototype.ngOnChanges = function () {
        //console.log("ProductList: ---- ngOnChanges ----");
        this.firstViewCheckAfterOnChange = true;
        this.gridData = this.productsModel.products;
        this.gridFilteredData = this.gridData;
        this.loadProducts();
        this.skip = 0; // restart from page 1
        this.resetFilters();
        setTimeout(this.updateDropDownLists(this.gridData), 200); // wait 0.2 sec
        this.resetSortBy();
        setTimeout(this.setupGridHeight.bind(this), 200);
        //this.selectedProductStatus = { text: "Released", value: 111267 };
        if (this.productsModel.isSearch == true) {
            this.selectedProductStatus = 0; // All
        }
        else {
            this.selectedProductStatus = this.enums.ProductStatusTypeEnum.Active;
        }
        this.selectedInventoryStatus = 0; // All
        this.setDefaultFilters(this.productsModel.isSearch);
    };
    ProductListComponent.prototype.ngOnInit = function () {
        //console.log("ProductList: ngOnInit");
        var self = this;
        self.blockUI.start('Loading...');
        this.productSvc.getBasketQuoteId().then(this.getBasketQuoteIdCallback.bind(this));
        //var data = this.productSvc.getProducts().then(this.getProductsCallback.bind(this));
        this.setupAddProductsBtn();
        this.getProductStatusOptions();
        this.getInventoryStatusOptions();
    };
    ProductListComponent.prototype.ngDoCheck = function () {
        //console.log("ProductList: ngDoCheck");
    };
    ProductListComponent.prototype.ngAfterContentInit = function () {
        //console.log("ProductList: ngAfterContentInit");
    };
    ProductListComponent.prototype.ngAfterContentChecked = function () {
        //console.log("ProductList: ngAfterContentChecked");
    };
    ProductListComponent.prototype.ngAfterViewInit = function () {
        //console.log("ProductList: ngAfterViewInit");
        setTimeout(this.setupDropDownFilters.bind(this), 200); // wait 0.2 sec
        this.setActiveViewOption();
        //this.setupPager();
    };
    ProductListComponent.prototype.ngAfterViewChecked = function () {
        //console.log("ProductList: ngAfterViewChecked");
        if (this.firstViewCheckAfterOnChange) {
            this.updateDropDownLists(this.gridData);
            this.firstViewCheckAfterOnChange = false;
        }
        this.blockUI.stop();
    };
    ProductListComponent.prototype.getProductStatusOptions = function () {
        var _this = this;
        this.productSvc.getProductStatuses().then(function (resp) {
            if (resp.isok) {
                _this.productStatusOptions = resp.model;
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.getInventoryStatusOptions = function () {
        var _this = this;
        this.productSvc.getInventoryStatuses().then(function (resp) {
            if (resp.isok) {
                _this.inventoryStatusOptions = resp.model;
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProductListComponent.prototype.setDefaultFilters = function (isSearch) {
        if (!isSearch) {
            this.productFilters.push({ field: "product.productStatusTypeId", operator: "eq", value: this.enums.ProductStatusTypeEnum.Active });
        }
        this.applyFilters();
    };
    ProductListComponent.prototype.setupAddProductsBtn = function () {
        var self = this;
        jQuery("#addProductsToQuoteBtn").click(function () {
            var data = {
                "Products": self.gridData
            };
            self.blockUI.start('Loading...');
            self.productSvc.addProductsToQuote(data).then(function (resp) {
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                self.clearQuantities();
                self.updateBasketEvent.emit();
                //self.reloadGrid();
            }, function (resp) {
                //self.loadingIconSvc.Stop(jQuery("#productPageContainer"));
                self.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                //TODO: create a log service for this
                for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                    var message = _a[_i];
                    console.log(message.text);
                }
            });
        });
    };
    ProductListComponent.prototype.clearQuantities = function () {
        for (var i = 0; i < this.gridViewData.data.length; i++) {
            this.gridViewData.data[i].product.quantity = 0;
        }
    };
    ProductListComponent.prototype.setupPager = function () {
        if (this.viewOption == 1) {
            this.setupGridHeight();
        }
        else {
            if (this.viewOption == 0) {
                var grid = jQuery("#product-list-view");
            }
            else if (this.viewOption == 2) {
                var grid = jQuery("#product-grid-view");
            }
            grid.find(".k-grid-pager").insertBefore(grid.find(".k-grid-content"));
            var pager = grid.find(".k-grid-pager");
            var viewOption = this.viewOption;
            //TODO: Hacking kendo grid css to fix kendo grid with custom pager
            //need to find a better solution
            var gridContainer = grid.find(".k-grid-container");
            gridContainer.css("display", "block");
            //================================================================
            resizeFixed();
            jQuery(window).resize(resizeFixed);
            jQuery(window).scroll(scrollFixed);
        }
        function resizeFixed() {
            pager.css("width", grid.width());
        }
        function scrollFixed() {
            if (viewOption != 1) {
                var offset = jQuery(this).scrollTop(), tableOffsetTop = grid.offset().top, tableOffsetBottom = tableOffsetTop + grid.height() - pager.height();
                if (offset < tableOffsetTop || offset > tableOffsetBottom) {
                    pager.removeClass("fixed-pager");
                    jQuery("#scrollUpBtn").css("display", "none");
                }
                else if (offset >= tableOffsetTop && offset <= tableOffsetBottom) {
                    pager.addClass("fixed-pager");
                    jQuery("#scrollUpBtn").css("display", "block");
                }
            }
        }
    };
    ProductListComponent.prototype.scrollUp = function () {
        jQuery('html, body').animate({ scrollTop: 0 }, 300);
    };
    ProductListComponent.prototype.setupGridHeight = function () {
        if (this.viewOption == 1) {
            var gridContent = jQuery(".k-grid-content");
            var gridHeaderH = jQuery(".k-grid-header").height();
            var gridPagerH = jQuery(".k-grid-header").height();
            var offsetTop = jQuery("#product-table-view").position().top;
            var windowHeight = jQuery(window).height();
            //old code - before kendo grid upgrade 
            //var gridHeight = windowHeight - offsetTop - gridHeaderH - gridPagerH - 5;
            //if (windowHeight > 750) {
            //    gridContent.height(gridHeight);
            //}
            //fix broken css after kendo angular grid upgrade to grid 1.2.1
            var gridContentHeight = 570 - gridHeaderH - gridPagerH;
            gridContent.height(gridContentHeight);
        }
    };
    ProductListComponent.prototype.setupDropDownFilters = function () {
        var self = this;
        //delete when Kendo-angular 2 DDL is used
        jQuery("#sortProductDLL").kendoDropDownList({
            dataSource: [{ text: "Model No.", value: "product.productNumber" },
                { text: "Product description", value: "product.name" }],
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.productSortBy = value;
                self.sortBy(value);
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#unitInstallationTypeDDL").kendoDropDownList({
            dataSource: self.unitInstallationTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            //value: self.unitInstallationTypeSelectedValue,
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                //self.unitInstallationTypeSelectedValue = value;
                self.productFilterJQ(value, 'unitInstallationTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#productCategoryDDL").kendoDropDownList({
            dataSource: self.productCategoryDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'productCategoryId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#coolingCapacityRatedDDL").kendoDropDownList({
            dataSource: self.coolingCapacityRatedDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'coolingCapacityRated');
            }
        });
        jQuery("#coolingCapacityNominalDDL").kendoDropDownList({
            dataSource: self.coolingCapacityNominalDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'coolingCapacityNominal');
            }
        });
        jQuery("#heatingCapacityRatedDDL").kendoDropDownList({
            dataSource: self.heatingCapacityRatedDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'heatingCapacityRated');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#powerVoltageDDL").kendoDropDownList({
            dataSource: self.productPowerVoltageDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'productPowerVoltageTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#heatExchangerTypeDDL").kendoDropDownList({
            dataSource: self.productHeatExchangerTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'heatExchangerTypeId'); //heatExchangerTypeId does not have values in DB yet
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#compressorTypeDDL").kendoDropDownList({
            dataSource: self.productCompressorTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'compressorTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#gasValveTypeDDL").kendoDropDownList({
            dataSource: self.productGasValveTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'gasValveTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#motorTypeDDL").kendoDropDownList({
            dataSource: self.productMotorSpeedTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'motorTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#installationConfigurationTypeDDL").kendoDropDownList({
            dataSource: self.productInstallationConfigurationTypeDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'installationConfigurationTypeId');
            }
        });
        //delete when Kendo-angular 2 DDL is used
        jQuery("#airFlowRateTypeDDL").kendoDropDownList({
            dataSource: self.airFlowRateHighCoolingDDLValues,
            dataTextField: "text",
            dataValueField: "value",
            optionLabel: {
                text: "Select ...",
                value: null
            },
            change: function (e) {
                var value = this.value();
                self.productFilterJQ(value, 'airFlowRateHighCooling');
            }
        });
    };
    ProductListComponent.prototype.pageChange = function (event) {
        this.skip = event.skip;
        this.loadProducts();
        var elem;
        if (this.viewOption == 1) {
            elem = document.querySelector("#product-table-view table tbody tr");
            elem.scrollIntoView();
        }
        else {
            elem = document.getElementById("productFamilyName");
            window.scrollTo(0, elem.offsetTop);
        }
    };
    ProductListComponent.prototype.getDistinctValues = function (valueId, description, data) {
        var flags = []; // flags[] is to keep track of what value is already added to distinctValues[]
        var distinctValues = [];
        var productArray = data;
        for (var i = 0; i < productArray.length; i++) {
            var item = { text: "", value: 0 };
            var value = productArray[i].product[valueId];
            if (description == null) {
                var text = productArray[i].product[valueId];
            }
            else {
                var text = productArray[i].product[description];
            }
            if ((flags[value] == true) || value == null) {
                continue;
            }
            else {
                item.text = text;
                item.value = value;
                distinctValues.push(item);
                flags[value] = true;
            }
        }
        distinctValues = this.sortDistinctValues(distinctValues);
        return distinctValues;
    };
    ProductListComponent.prototype.sortDistinctValues = function (distinctValues) {
        var sortedValues = [];
        if (distinctValues.length > 0) {
            if (isNaN(distinctValues[0].text)) {
                sortedValues = distinctValues.sort(function (a, b) {
                    if (a.text < b.text)
                        return -1;
                    if (a.text > b.text)
                        return 1;
                    return 0;
                });
            }
            else {
                sortedValues = distinctValues.sort(function (a, b) { return a.text - b.text; });
            }
        }
        else {
            return distinctValues;
        }
        return sortedValues;
    };
    ProductListComponent.prototype.getBasketQuoteIdCallback = function (resp) {
        if (resp.isok) {
            this.basketQuoteId = resp.model;
        }
    };
    ProductListComponent.prototype.loadProducts = function () {
        if (this.productsModel != undefined) {
            this.gridViewData = {
                data: this.gridFilteredData.slice(this.skip, this.skip + this.pageSize),
                total: this.gridFilteredData.length
            };
        }
    };
    ProductListComponent.prototype.loadProductsNoFilter = function () {
        if (this.productsModel != undefined) {
            this.gridViewData = {
                data: this.gridData.slice(this.skip, this.skip + this.pageSize),
                total: this.gridData.length
            };
        }
        this.updateDropDownLists(this.gridData);
        //this.setupDropDownFilters();
    };
    //This function is used for kendo-dropdownlist (angular 2)
    ProductListComponent.prototype.productFilter = function (selectedObj, field) {
        var fieldName = "product." + field;
        if (selectedObj == undefined || selectedObj.value == null) {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            if (this.productFilters.length > 0) {
                this.applyFilters();
            }
            else {
                this.loadProductsNoFilter();
            }
        }
        else {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            //add new filter value
            this.productFilters.push({ field: fieldName, operator: "eq", value: selectedObj.value });
            this.applyFilters();
        }
    };
    ProductListComponent.prototype.productFilterByDecimalValue = function (selectedObj, field) {
        var fieldName = "product." + field;
        if (selectedObj == undefined || selectedObj.value == null) {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            if (this.productFilters.length > 0) {
                this.applyFilters();
            }
            else {
                this.loadProductsNoFilter();
            }
        }
        else {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            //add new filter value
            this.productFilters.push({ field: fieldName, operator: "eq", value: selectedObj.valueDecimal });
            this.applyFilters();
        }
    };
    ProductListComponent.prototype.productFilterPrimitive = function (value, field) {
        var fieldName = "product." + field;
        if (value == null || value == 0) {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            if (this.productFilters.length > 0) {
                this.applyFilters();
            }
            else {
                this.loadProductsNoFilter();
            }
        }
        else {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            //add new filter value
            this.productFilters.push({ field: fieldName, operator: "eq", value: value });
            this.applyFilters();
        }
    };
    //This function is used for kendo-DDL (JQuery)
    ProductListComponent.prototype.productFilterJQ = function (value, field) {
        var fieldName = "product." + field;
        if (value == undefined || value == null || value == "") {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            if (this.productFilters.length > 0) {
                this.applyFilters();
            }
            else {
                this.loadProductsNoFilter();
            }
        }
        else {
            //Look for the filter by name and remove it from productFilters
            this.removeFilterByName(fieldName);
            //add new filter value
            this.productFilters.push({ field: fieldName, operator: "eq", value: value });
            this.applyFilters();
        }
    };
    ProductListComponent.prototype.removeFilterByName = function (fieldName) {
        for (var i = 0; i < this.productFilters.length; i++) {
            if (this.productFilters[i].field == fieldName) {
                this.productFilters.splice(i, 1);
            }
        }
    };
    ProductListComponent.prototype.applyFilters = function () {
        this.skip = 0; // reset to page 1
        var result = Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["e" /* process */])(this.gridData, {
            sort: [{ field: this.productSortBy, dir: "asc" }],
            filter: {
                logic: "and",
                filters: this.productFilters
            }
        });
        this.gridViewData = {
            data: result.data.slice(this.skip, this.skip + this.pageSize),
            total: result.data.length
        };
        this.gridFilteredData = result.data;
        this.updateDropDownLists(result.data);
        //this.setupDropDownFilters();
    };
    //sortBy JQuery style
    ProductListComponent.prototype.sortBy = function (fieldName) {
        var result = Object(__WEBPACK_IMPORTED_MODULE_3__progress_kendo_data_query__["d" /* orderBy */])(this.gridFilteredData, [{ field: fieldName, dir: "asc" }]);
        this.gridFilteredData = result; // filtered and sorted data
        this.gridViewData = {
            data: result.slice(this.skip, this.skip + this.pageSize),
            total: result.length
        };
    };
    //sortBy Angular 2 style
    //public sortBy(option: any) {
    //    var fieldName = option.value;
    //    const result = orderBy(this.gridFilteredData, [{ field: fieldName, dir: "asc" }]);
    //    this.gridFilteredData = result; // filtered and sorted data
    //    this.gridViewData = {
    //        data: result.slice(this.skip, this.skip + this.pageSize),
    //        total: result.length
    //    };
    //}
    ProductListComponent.prototype.clearFilters = function () {
        this.resetFilters();
        this.loadProductsNoFilter();
        this.resetSortBy();
    };
    ProductListComponent.prototype.resetFilters = function () {
        this.productFilters = [];
        //Kendo DDL angular 2 
        this.productSubFamilySelectedValue = null;
        this.productFunctionCategorySelectedValue = null;
        this.unitInstallationTypeSelectedValue = null;
        this.productPowerVoltageSelectedValue = null;
        this.tonnageSelectedValue = null;
        this.coolingCapacityRatedSelectedValue = null;
        this.coolingCapacityNominalSelectedValue = null;
        this.heatingCapacityRatedSelectedValue = null;
        this.productCompressorTypeSelectedValue = null;
        this.airFlowRateHighCoolingSelectedValue = null;
        this.airFlowRateHighHeatingSelectedValue = null;
        this.productGasValveTypeSelectedValue = null;
        this.productMotorSpeedTypeSelectedValue = null;
        this.productInstallationConfigurationTypeSelectedValue = null;
        this.productHeatExchangerTypeSelectedValue = null;
        this.productAccessorySelectedValue = null;
        //this.selectedProductStatus = this.enums.ProductStatusTypeEnum.Active;
        this.selectedProductStatus = 0; // All
        this.selectedInventoryStatus = 0; // All
        //this.productCategorySelectedValue = null;
        //delete when Kendo DDL angular 2 is used
        if (jQuery("#unitInstallationTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#unitInstallationTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#productCategoryDDL").data("kendoDropDownList") != undefined) {
            jQuery("#productCategoryDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#coolingCapacityRatedDDL").data("kendoDropDownList") != undefined) {
            jQuery("#coolingCapacityRatedDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#coolingCapacityNominalDDL").data("kendoDropDownList") != undefined) {
            jQuery("#coolingCapacityNominalDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#heatingCapacityRatedDDL").data("kendoDropDownList") != undefined) {
            jQuery("#heatingCapacityRatedDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#powerVoltageDDL").data("kendoDropDownList") != undefined) {
            jQuery("#powerVoltageDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#heatExchangerTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#heatExchangerTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#compressorTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#compressorTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#gasValveTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#gasValveTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#motorTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#motorTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#installationConfigurationTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#installationConfigurationTypeDDL").data("kendoDropDownList").value("");
        }
        if (jQuery("#airFlowRateTypeDDL").data("kendoDropDownList") != undefined) {
            jQuery("#airFlowRateTypeDDL").data("kendoDropDownList").value("");
        }
        this.gridFilteredData = this.gridData;
        //reset sortby
        //jQuery("#sortProductDLL").kendoDropDownList().select(0);
    };
    ProductListComponent.prototype.resetSortBy = function () {
        var sortDDL = jQuery("#sortProductDLL").data("kendoDropDownList");
        if (sortDDL != undefined) {
            sortDDL.select(0);
            sortDDL.trigger("change");
        }
    };
    ProductListComponent.prototype.updateDropDownLists = function (data) {
        this.productSubFamilyDDLValues = this.getDistinctValues("productSubFamilyId", "productSubFamilyName", data);
        this.productFunctionCategoryDDLValues = this.getDistinctValues("productFunctionCategoryId", "productFunctionCategoryName", data);
        this.unitInstallationTypeDDLValues = this.getDistinctValues("unitInstallationTypeId", "unitInstallationTypeDescription", data);
        this.productPowerVoltageDDLValues = this.getDistinctValues("productPowerVoltageTypeId", "productPowerVoltageTypeDescription", data);
        this.tonnageDDLValues = this.getDistinctValues("tonnage", null, data);
        this.coolingCapacityRatedDDLValues = this.getDistinctValues("coolingCapacityRated", null, data);
        this.coolingCapacityNominalDDLValues = this.getDistinctValues("coolingCapacityNominal", null, data);
        this.heatingCapacityRatedDDLValues = this.getDistinctValues("heatingCapacityRated", null, data);
        this.productCompressorTypeDDLValues = this.getDistinctValues("productCompressorTypeId", "productCompressorTypeDescription", data);
        this.airFlowRateHighCoolingDDLValues = this.getDistinctValues("airFlowRateHighCooling", null, data);
        this.airFlowRateHighHeatingDDLValues = this.getDistinctValues("airFlowRateHighHeating", null, data);
        this.productGasValveTypeDDLValues = this.getDistinctValues("productGasValveTypeId", "productGasValveTypeDescription", data);
        this.productMotorSpeedTypeDDLValues = this.getDistinctValues("productMotorSpeedTypeId", "productMotorSpeedTypeDescription", data);
        this.productInstallationConfigurationTypeDDLValues = this.getDistinctValues("productInstallationConfigurationTypeId", "productInstallationConfigurationTypeDescription", data);
        this.productHeatExchangerTypeDDLValues = this.getDistinctValues("productHeatExchangerTypeId", "productHeatExchangerTypeDescription", data);
        this.productAccessoryDDLValues = this.getDistinctValues("productAccessoryTypeId", "productAccessoryTypeDescription", data);
        //deprecated
        //this.coolingCapacityNominalDDLValues = this.getDistinctValues("coolingCapacityNominal", null, data);
        //this.productCategoryDDLValues = this.getDistinctValues("productCategoryId", "productCategoryName", data);
        this.setupDropDownFilters();
    };
    //public startSpinning(target: any) {
    //    var element = jQuery(target);
    //    kendo.ui.progress(element, true);
    //    //setTimeout(function () {
    //    //    kendo.ui.progress(element, false);
    //    //}, 5000);
    //}
    ProductListComponent.prototype.viewProductDetails = function (eventParams) {
        this.showProductDetailsEvent.emit(eventParams);
    };
    ProductListComponent.prototype.setViewOption = function (viewOpt) {
        this.viewOption = viewOpt;
        setTimeout(this.setupPager.bind(this), 200);
    };
    ProductListComponent.prototype.setActiveViewOption = function () {
        jQuery('.view-options button').click(function () {
            jQuery('.view-options button').each(function () {
                jQuery(this).removeClass('selected');
            });
            jQuery(this).addClass('selected');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "blockUI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productsModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productFamilyId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productModelTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "unitInstallationTypeId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductListComponent.prototype, "productClassPIMId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductListComponent.prototype, "updateBasketEvent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProductListComponent.prototype, "showProductDetailsEvent", void 0);
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-list',
            template: __webpack_require__("../../../../../src/app/products/components/product-list/productList.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-quantity/product-quantity-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"productQtyContainer\">\r\n    <div>Quantity</div>\r\n    <product-quantity-input [(product)]=\"product\"></product-quantity-input>\r\n    <div>\r\n        <button class=\"btn btn-primary\" style=\"margin:5px;\" (click)=\"addProductToQuote()\">Add</button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-quantity/product-quantity-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuantityAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductQuantityAddComponent = /** @class */ (function () {
    function ProductQuantityAddComponent(toastrSvc, productSvc, basketSvc) {
        this.toastrSvc = toastrSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
    }
    ProductQuantityAddComponent.prototype.ngOnChange = function (changes) {
        //console.log("Product Quantiy Input: ngOnChange");
    };
    ProductQuantityAddComponent.prototype.ngOnInit = function () { };
    ProductQuantityAddComponent.prototype.addProductToQuote = function () {
        var _this = this;
        var self = this;
        if (this.product.quantity > 0) {
            var data = {
                "ProductId": this.product.productId,
                "Quantity": this.product.quantity
            };
            this.blockUI.start('Loading...');
            this.productSvc.addProductToQuote(data).then(function (resp) {
                _this.blockUI.stop();
                _this.product.quantity = 0;
                self.basketSvc.getBasket().then(function (resp) {
                    if (resp.isok) {
                        //self.userBasket = resp.model;
                        self.basketSvc.userBasket = resp.model;
                        __WEBPACK_IMPORTED_MODULE_3_jquery__("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                    }
                });
                self.toastrSvc.displayResponseMessages(resp);
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductQuantityAddComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProductQuantityAddComponent.prototype, "blockUI", void 0);
    ProductQuantityAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-quantity-add',
            template: __webpack_require__("../../../../../src/app/products/components/product-quantity/product-quantity-add.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["g" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_index__["b" /* BasketService */]])
    ], ProductQuantityAddComponent);
    return ProductQuantityAddComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-quantity/product-quantity-input.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<input class=\"numericTextBox productQuantity\" type=\"number\" [(ngModel)]=\"product.quantity\" (change)=\"validateQuantity($event)\" min=\"0\" step=\"1\" style=\"width:70px; line-height:30px; font-size:1.2em; text-align: center;\" />\r\n<!--<input class=\"numericTextBox productQuantity\" type=\"number\" [(ngModel)]=\"quantity\" (change)=\"validateQuantity($event)\" min=\"0\" step=\"1\" style=\"width:70px; line-height:30px; font-size:1.2em; text-align: center;\" />-->\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/product-quantity/product-quantity-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductQuantityInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductQuantityInputComponent = /** @class */ (function () {
    function ProductQuantityInputComponent(toastrSvc) {
        this.toastrSvc = toastrSvc;
    }
    ProductQuantityInputComponent.prototype.ngOnInit = function () { };
    ProductQuantityInputComponent.prototype.ngAfterViewChecked = function () { };
    ProductQuantityInputComponent.prototype.validateQuantity = function (event) {
        var value = parseFloat(event.target.value);
        if (value == null || isNaN(value)) {
            this.product.quantity = 0;
            event.target.value = 0;
        }
        else if ((value < 0) || (Math.floor(value) != value)) {
            this.product.quantity = 0;
            event.target.value = 0;
            this.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductQuantityInputComponent.prototype, "product", void 0);
    ProductQuantityInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-quantity-input',
            template: __webpack_require__("../../../../../src/app/products/components/product-quantity/product-quantity-input.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_common_toastr_service__["a" /* ToastrService */]])
    ], ProductQuantityInputComponent);
    return ProductQuantityInputComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/product-spec-bars/product-spec-bars.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"product.specifications.all != null\">\r\n    <div *ngIf=\"SEERNonDucted\">\r\n        <div *ngIf=\"product.specifications.all.seerNonDucted\">SEER (Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.seerNonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"seerRatingBar\"></div>\r\n    </div>\r\n    \r\n    <div *ngIf=\"IEERNonDucted\">\r\n        <div *ngIf=\"product.specifications.all.ieerNonDucted\">IEER (Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.ieerNonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"ieerRatingBar\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"EERNonDucted\">\r\n        <div *ngIf=\"product.specifications.all.eerNonDucted\">EER (Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.eerNonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"eerRatingBar\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"HSPFNonDucted\">\r\n        <div *ngIf=\"product.specifications.all.hspfNonDucted\">HSPF (Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.hspfNonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"hspfRatingBar\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"COP47NonDucted\">\r\n        <div *ngIf=\"product.specifications.all.coP47NonDucted\">COP47 (Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.coP47NonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"cop47RatingBar\"></div>\r\n    </div>\r\n    \r\n  \r\n    <div *ngIf=\"SCHENonDucted\">\r\n        <div *ngIf=\"product.specifications.all.scheNonDucted\">SCHE(Non-Ducted):<span class=\"pull-right\">{{product.specifications.all.scheNonDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"scheRatingBar\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"SEERDucted\">\r\n        <div *ngIf=\"product.specifications.all.seerDucted\">SEER (Ducted):<span class=\"pull-right\">{{product.specifications.all.seerDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"seerRatingBarDucted\"></div>\r\n    </div>\r\n    <div *ngIf=\"EERDucted\">\r\n        <div *ngIf=\"product.specifications.all.eerDucted\">EER (Ducted):<span class=\"pull-right\">{{product.specifications.all.eerDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"eerRatingBarDucted\"></div>\r\n    </div>\r\n    <div *ngIf=\"HSPFDucted\">\r\n        <div *ngIf=\"product.specifications.all.hspfDucted\">HSPF (Ducted):<span class=\"pull-right\">{{product.specifications.all.hspfDucted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"hspfRatingBarDucted\"></div>\r\n    </div>\r\n    <div *ngIf=\"COP47Ducted\">\r\n        <div *ngIf=\"product.specifications.all.coP47Ducted\">COP47 (Ducted):<span class=\"pull-right\">{{product.specifications.all.coP47Ducted.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"cop47RatingBarDucted\"></div>\r\n    </div>\r\n    <div *ngIf=\"AFUE\">\r\n        <div *ngIf=\"product.specifications.all.afue\">AFUE:<span class=\"pull-right\">{{product.specifications.all.afue.value | number:'1.2-2'}}</span></div>\r\n        <div class=\"afueRatingBar\"></div>\r\n    </div>\r\n    \r\n        \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/components/product-spec-bars/product-spec-bars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSpecBarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_common_enums_service__ = __webpack_require__("../../../../../src/app/shared/services/common/enums.service.ts");
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



var ProductSpecBarsComponent = /** @class */ (function () {
    function ProductSpecBarsComponent(elementRef, enums) {
        this.elementRef = elementRef;
        this.enums = enums;
        //@Input() userBasket: any;
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    }
    ProductSpecBarsComponent.prototype.ngOnChanges = function () {
        this.resetColumns();
        this.setupColumns();
    };
    ProductSpecBarsComponent.prototype.ngOnInit = function () {
        setTimeout(this.setupSpecBars.bind(this), 200); // wait 0.2 sec
    };
    ProductSpecBarsComponent.prototype.ngAfterViewChecked = function () { };
    ProductSpecBarsComponent.prototype.setupSpecBars = function () {
        var self = this;
        var element = this.elementRef.nativeElement;
        var seerRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".seerRatingBar");
        if (seerRatingBar[0] != undefined && this.product.specifications.all.seerNonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(seerRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 40,
                value: this.product.specifications.all.seerNonDucted.value
            });
        }
        var scheRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".scheRatingBar");
        if (scheRatingBar[0] != undefined && this.product.specifications.all.scheNonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(scheRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 35,
                value: this.product.specifications.all.scheNonDucted.value
            });
        }
        var ieerRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".ieerRatingBar");
        if (ieerRatingBar[0] != undefined && this.product.specifications.all.ieerNonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(ieerRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 40,
                value: this.product.specifications.all.ieerNonDucted.value
            });
        }
        var eerRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".eerRatingBar");
        if (eerRatingBar[0] != undefined && this.product.specifications.all.eerNonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(eerRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 20,
                value: this.product.specifications.all.eerNonDucted.value
            });
        }
        var hspfRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".hspfRatingBar");
        if (hspfRatingBar[0] != undefined && this.product.specifications.all.hspfNonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(hspfRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 20,
                value: this.product.specifications.all.hspfNonDucted.value
            });
        }
        var cop47RatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".cop47RatingBar");
        if (cop47RatingBar[0] != undefined && this.product.specifications.all.coP47NonDucted) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(cop47RatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 10,
                value: this.product.specifications.all.coP47NonDucted.value
            });
        }
        var afueRatingBar = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".afueRatingBar");
        if (afueRatingBar[0] != undefined && this.product.specifications.all.afue) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(afueRatingBar[0]).kendoProgressBar({
                showStatus: false,
                max: 100,
                value: this.product.specifications.all.afue.value
            });
        }
        //Unitary
        if (self.product.productFamilyId == this.enums.ProductFamilyEnum.UnitarySplitSystem || self.product.productFamilyId == this.enums.ProductFamilyEnum.UnitaryPackagedSystem || self.product.productFamilyId == this.enums.ProductFamilyEnum.LightCommercialSplitSystem || self.product.productFamilyId == this.enums.ProductFamilyEnum.LightCommercialPackagedSystem) {
            var seerRatingBarDucted = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".seerRatingBarDucted");
            if (seerRatingBarDucted[0] != undefined && this.product.specifications.all.seerDucted) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(seerRatingBarDucted[0]).kendoProgressBar({
                    showStatus: false,
                    max: 40,
                    value: this.product.specifications.all.seerDucted.value
                });
            }
            var ieerRatingBarDucted = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".ieerRatingBarDucted");
            if (ieerRatingBarDucted[0] != undefined && this.product.specifications.all.ieerDucted) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(ieerRatingBarDucted[0]).kendoProgressBar({
                    showStatus: false,
                    max: 40,
                    value: this.product.specifications.all.ieerDucted.value
                });
            }
            var eerRatingBarDucted = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".eerRatingBarDucted");
            if (eerRatingBarDucted[0] != undefined && this.product.specifications.all.eerDucted) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(eerRatingBarDucted[0]).kendoProgressBar({
                    showStatus: false,
                    max: 20,
                    value: this.product.specifications.all.eerDucted.value
                });
            }
            var hspfRatingBarDucted = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".hspfRatingBarDucted");
            if (hspfRatingBarDucted[0] != undefined && this.product.specifications.all.hspfDucted) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(hspfRatingBarDucted[0]).kendoProgressBar({
                    showStatus: false,
                    max: 20,
                    value: this.product.specifications.all.hspfDucted.value
                });
            }
            var cop47RatingBarDucted = __WEBPACK_IMPORTED_MODULE_2_jquery__(element).find(".cop47RatingBarDucted");
            if (cop47RatingBarDucted[0] != undefined && this.product.specifications.all.coP47Ducted) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(cop47RatingBarDucted[0]).kendoProgressBar({
                    showStatus: false,
                    max: 10,
                    value: this.product.specifications.all.coP47Ducted.value
                });
            }
        }
    };
    ProductSpecBarsComponent.prototype.resetColumns = function () {
        this.SEERNonDucted = false;
        this.EERNonDucted = false;
        this.HSPFNonDucted = false;
        this.COP47NonDucted = false;
        this.IEERNonDucted = false;
        this.SCHENonDucted = false;
        this.SEERDucted = false;
        this.EERDucted = false;
        this.HSPFDucted = false;
        this.COP47Ducted = false;
        this.AFUE = false;
    };
    ProductSpecBarsComponent.prototype.setupColumns = function () {
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.MiniSplit //Mini-Split
            || (this.product.productFamilyId == this.enums.ProductFamilyEnum.AlthermaSplit && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //Altherma
            || (this.product.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) //MultiSplit - Outdoor/All
            || this.product.productFamilyId == this.enums.ProductFamilyEnum.SkyAir) {
            this.SEERNonDucted = true;
            this.EERNonDucted = true;
            this.HSPFNonDucted = true;
            this.COP47NonDucted = true;
        }
        if ((this.product.productFamilyId == this.enums.ProductFamilyEnum.VRV || this.product.productFamilyId == this.enums.ProductFamilyEnum.MultiSplit) && this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) {
            //Show nothing
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.VRV && (this.product.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor || this.product.productModelTypeId == this.enums.ProductModelTypeEnum.All)) {
            this.IEERNonDucted = true;
            this.EERNonDucted = true;
            this.COP47NonDucted = true;
            this.SCHENonDucted = true;
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.UnitarySplitSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.SplitAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.SplitHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler || this.product.productClassPIMId == this.enums.ProductClassPIMEnum.Coil) {
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.GasFurnace) {
                this.AFUE = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.UnitaryPackagedSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackageAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.PackagedGED) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.AFUE = true;
                if (this.product.productEnergySourceTypeId = this.enums.ProductEnergySourceTypeEnum.DualFuel) {
                    this.HSPFDucted = true;
                    this.COP47Ducted = true;
                }
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                this.AFUE = true;
            }
        }
        if (this.product.productFamilyId == this.enums.ProductFamilyEnum.LightCommercialSplitSystem) {
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedAC) {
                this.SEERDucted = true;
                this.EERDucted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.LightCommercialPackagedHP) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.AirHandler) {
            }
            if (this.product.productClassPIMId == this.enums.ProductClassPIMEnum.All) {
                this.SEERDucted = true;
                this.EERDucted = true;
                this.HSPFDucted = true;
                this.COP47Ducted = true;
                //this.AFUEDucted = true;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProductSpecBarsComponent.prototype, "product", void 0);
    ProductSpecBarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'product-spec-bars',
            template: __webpack_require__("../../../../../src/app/products/components/product-spec-bars/product-spec-bars.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__shared_services_common_enums_service__["a" /* Enums */]])
    ], ProductSpecBarsComponent);
    return ProductSpecBarsComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/products/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div *ngIf=\"basketQuoteId!=0\">ActiveQuoteId: {{basketQuoteId}}</div>-->\r\n\r\n\r\n<basket id=\"userBasket\" [userBasket]=\"userBasket\" \r\n        [productFamilyId]=\"productFamilyId\" \r\n        [productModelTypeId]=\"productModelTypeId\" \r\n        [productData]=\"productData\">\r\n</basket>\r\n\r\n\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">   <!--*blockUI=\"'product-list'\"-->\r\n\r\n        <!--Product Family Tabs-->\r\n        <div id=\"productPageContainer\">\r\n\r\n            <nav id=\"productTabs\" class='navbar navbar-default'>\r\n                <div class='container-fluid navibar'>\r\n                    <div class=\"navbar-header\">\r\n                        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#productFamilyTabs\">\r\n                            <span class=\"icon-bar\"></span>\r\n                            <span class=\"icon-bar\"></span>\r\n                            <span class=\"icon-bar\"></span>\r\n                        </button>\r\n                    </div>\r\n\r\n                    <div class=\"collapse navbar-collapse\" id=\"productFamilyTabs\">\r\n                        <ul class='nav navbar-nav productFamilyTab'>\r\n                            <li id=\"product-family-tab-home\"> <a href=\"/v2/#/products\" (click)=\"showProductHome()\">PRODUCT HOME</a></li>\r\n                            <li *ngFor=\"let item of productFamilyTabs ; let idx = index\" attr.id=\"product-family-tab-{{item.productFamilyId}}\">\r\n                                <a (click)=\"GetProducts(item.productFamilyId,null)\">{{item.name | uppercase}}</a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n\r\n            <!--Product Home Tab Content-->\r\n            <div id=\"productHome\" class=\"product-family-listing-outer\">\r\n                <div class=\"row\">\r\n                    <h1 *ngIf=\"showProductHomeContent\" class=\"pull-left\">Our Product Ranges</h1>\r\n                    <h1 *ngIf=\"productFamilyId && showProductGrid\" id=\"productFamilyName\" class=\"pull-left\">{{productFamilyName}}</h1>\r\n                    <div class=\"pull-right productSearch\">\r\n                        <input type=\"text\" class=\"k-input k-textbox\"\r\n                               id=\"productSearchBox\"\r\n                               name=\"productSearchFilter\"\r\n                               placeholder=\" Search {{productSearchTextHolder}} Products\" />\r\n                        <button id=\"productSearchBtn\" (click)=\"searchProducts()\"><span class=\"k-icon k-i-search\"></span></button>\r\n                    </div>\r\n                </div>\r\n\r\n                <ul *ngIf=\"showProductHomeContent\" class=\"product-family-listing-inner\">\r\n\r\n                    <li *ngFor=\"let item of productFamilyTabs ; let idx = index\" style=\"width: 160px; height:300px;\">\r\n                        <!--<a (click)=\"GetProducts(item.id,null)\">\r\n                        <img src=\"/image/10/{{item.id}}\" onerror=\"this.onerror = null; this.src = '/Images/product-family-noimage.png'\" style=\"height: 170px; width: 160px;\" />\r\n                        <div class=\"fam-description\" style=\"height:100px;\">\r\n                            <h4 style=\"font-size: 1.4em;\">{{item.description | uppercase}}</h4>\r\n                            <span>View Range</span>\r\n                        </div>\r\n                    </a>-->\r\n\r\n                        <a (click)=\"GetProducts(item.productFamilyId,null)\">\r\n                            <img src=\"/image/10/{{item.productFamilyId}}\" onerror=\"this.onerror = null; this.src = '/Images/product-family-noimage.png'\"\r\n                                 style=\"height: 170px; width: 160px;\" />\r\n                            <div class=\"fam-description\" style=\"height:100px;\">\r\n                                <h4 style=\"font-size: 1.4em;\">{{item.name | uppercase}}</h4>\r\n                                <span>View Range</span>\r\n                            </div>\r\n                        </a>\r\n                    </li>\r\n\r\n                    <!--TODO: delete after 9/1/2017-->\r\n                    <!--<li style=\"width: 160px; height:300px;\">\r\n                    <a (click)=\"GetAccessories()\">\r\n                        <img src=\"/image/10/100000010\" onerror=\"this.onerror = null; this.src = '/Images/product-family-noimage.png'\" style=\"height: 170px; width: 160px;\" />\r\n                        <div class=\"fam-description\" style=\"height:100px;\">\r\n                            <h4 style=\"font-size: 1.4em;\">ACCESSORIES</h4>\r\n                            <span>View Range</span>\r\n                        </div>\r\n                    </a>\r\n                </li>-->\r\n\r\n                </ul>\r\n            </div>\r\n\r\n            <!--Product List-->\r\n            <div *ngIf=\"showProductGrid\">\r\n                <!--Product Sub-Tabs-->\r\n                <div class=\"scrollmenu\"\r\n                     *ngIf=\"productFamilyId && (productFamilyId == enums.ProductFamilyEnum.AlthermaSplit || productFamilyId == enums.ProductFamilyEnum.AlthermaMonobloc || productFamilyId == enums.ProductFamilyEnum.MultiSplit || productFamilyId == enums.ProductFamilyEnum.VRV)\" id=\"productModelTypeTabs\">\r\n                    <ul class=\"sub-tab-bar tabbar-fullwidth\">\r\n                        <li id=\"subTab-111531\"> <a (click)=\"GetProducts(productFamilyId, enums.ProductModelTypeEnum.Indoor)\"> INDOOR </a> </li>\r\n                        <li id=\"subTab-111532\"> <a (click)=\"GetProducts(productFamilyId, enums.ProductModelTypeEnum.Outdoor)\"> OUTDOOR </a> </li>\r\n                        <li id=\"subTab-100000999\"> <a (click)=\"GetProducts(productFamilyId,100000999)\"> ALL </a> </li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!--show InstallationTypes Tabs when ProductFamilyName == Unitary Split || Unitary Package || Commercial Split -->\r\n                <!--<div class=\"scrollmenu\" *ngIf=\"productFamilyId && (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem )\" id=\"unitInstallationTypeTabs\">\r\n                <ul class=\"sub-tab-bar\">\r\n                    <li *ngFor=\"let item of unitInstallationTypeTabs; let idx = index\" attr.id=\"subTab-{{item.id}}\"> <a (click)=\"GetProductsByUnitInstallationType(productFamilyId,item.id)\"> {{item.description | uppercase}} </a> </li>\r\n                    <li id=\"subTab-100000999\"><a (click)=\"GetProductsByUnitInstallationType(productFamilyId, 100000999)\"> ALL </a></li>\r\n                </ul>\r\n\r\n            </div>-->\r\n                <!--show InstallationTypes Tabs when ProductFamilyName == Unitary Split || Unitary Package || Commercial Split -->\r\n                <div class=\"scrollmenu\" *ngIf=\"productFamilyId && (productFamilyId == enums.ProductFamilyEnum.UnitarySplitSystem || productFamilyId == enums.ProductFamilyEnum.UnitaryPackagedSystem || productFamilyId == enums.ProductFamilyEnum.LightCommercialSplitSystem || productFamilyId == enums.ProductFamilyEnum.LightCommercialPackagedSystem )\" id=\"unitInstallationTypeTabs\">\r\n                    <ul class=\"sub-tab-bar tabbar-fullwidth\">\r\n                        <li *ngFor=\"let item of productClassPIMTabs; let idx = index\" attr.id=\"subTab-{{item.id}}\"> <a (click)=\"GetProductsByProductClassPIMId(productFamilyId,item.id)\"> {{item.description | uppercase}} </a> </li>\r\n                        <li id=\"subTab-100000999\"><a (click)=\"GetProductsByProductClassPIMId(productFamilyId, 100000999)\"> ALL </a></li>\r\n                    </ul>\r\n                </div>\r\n\r\n                <!--Product grid and filters-->\r\n                <!--<product-list id=\"productGrid\" *ngIf=\"productData\" [productsModel]=\"productData\"\r\n                          [productFamilyId]=\"productFamilyId\"\r\n                          [productModelTypeId]=\"productModelTypeId\"\r\n                          [unitInstallationTypeId]=\"unitInstallationTypeId\"\r\n                          (updateBasketEvent)=\"updateUserBasket()\"\r\n                          (showProductDetailsEvent)=\"showProductDetails($event)\">\r\n\r\n            </product-list>-->\r\n                <!--How to put event emitter on router-outlet?-->\r\n                <!--<router-outlet name=\"productList\"></router-outlet>-->\r\n\r\n                <!--<div *blockUI=\"'product-list'\">-->\r\n                    <product-list id=\"productGrid\" *ngIf=\"productData\"\r\n                                  [user]=\"user\"\r\n                                  [productsModel]=\"productData\"\r\n                                  [productFamilyId]=\"productFamilyId\"\r\n                                  [productTypeId]=\"productTypeId\"\r\n                                  [productModelTypeId]=\"productModelTypeId\"\r\n                                  [unitInstallationTypeId]=\"unitInstallationTypeId\"\r\n                                  [productClassPIMId]=\"productClassPIMId\"\r\n                                  (updateBasketEvent)=\"updateUserBasket()\"\r\n                                  (showProductDetailsEvent)=\"productDetails($event)\">\r\n                    </product-list>\r\n                <!--</div>-->\r\n            </div>\r\n\r\n            <!--<router-outlet name=\"productDetails\"></router-outlet>-->\r\n            <!--<div *ngIf=\"!showProductGrid && product\">\r\n            <product-details [product]=\"product\" [userBasket]=\"userBasket\" ></product-details>\r\n        </div>-->\r\n            <!--<div *ngIf=\"!showProductGrid && product\" style=\"margin-bottom:50px;\">\r\n            <product-details></product-details>\r\n        </div>-->\r\n            <!--<div style=\"margin-bottom:50px;\">\r\n            <router-outlet name=\"productDetails\"></router-outlet>\r\n        </div>-->\r\n\r\n            <div>\r\n                <router-outlet name=\"productDetails\"></router-outlet>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/products/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
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




var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(router, route, userSvc, enums, productSvc, basketSvc) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.enums = enums;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.productSearchTextHolder = "All";
        this.showProductGrid = true;
        this.showProductHomeContent = true;
        this.product = null;
        this.hasRoutedBack = false;
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        //if (this.route.url.value[0].path == 'products') {
        //    this.route.params.subscribe((params: { id: string }) => {
        //        debugger;
        //        var id = params.id;
        //    });
        //}      
        var _this = this;
        var hash = window.location.hash;
        if (hash.includes("#/product/productList/(productDetails:")) {
            this.showProductHomeContent = false;
            //$("#addProductsToQuoteBtn").hide();
        }
        //if (this.productSvc.productFamilyTabs == undefined) {
        //    this.productSvc.getProductFamilies().then(this.getProductFamiliesCallback.bind(this));
        //} else {
        //    this.productFamilyTabs = this.productSvc.productFamilyTabs;
        //}
        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then(function (resp) {
                if (resp.isok) {
                    _this.userSvc.currentUser = resp.model;
                    _this.productFamilyTabs = resp.model.productFamilyAccesses;
                }
            });
        }
        else {
            this.productFamilyTabs = this.userSvc.currentUser.productFamilyAccesses;
        }
        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
    };
    ProductsComponent.prototype.ngDoCheck = function () {
        var hash = window.location.hash;
        if (hash == "#/product/productList" && this.productFamilyId != null) {
            this.showProductGrid = true;
        }
        else if (hash.includes("#/product/productList/(productDetails:")) {
            this.showProductGrid = false;
        }
    };
    ProductsComponent.prototype.ngAfterContentInit = function () {
        this.userSvc.isAuthenticated().then(function (resp) {
            if (!resp.isok || resp.model != true) {
                //Go back to login page
                window.location.href = "/v2/#/login";
            }
        });
        //console.log("products: ngAfterContentInit");
        jQuery('#userBasket').insertBefore('#main-container');
        jQuery('#productTabs').insertBefore('#main-container');
        //this.productFamilyTabs = this.userSvc.currentUser.productFamilyAccesses;
        //working ok, but slow
        //if (this.productSvc.productFamilyTabs == undefined || this.productSvc.productFamilyTabs.length == 0) {
        //    this.productSvc.getProductFamilies().then(this.getProductFamiliesCallback.bind(this));
        //} else {
        //    this.productFamilyTabs = this.productSvc.productFamilyTabs;
        //}
    };
    ProductsComponent.prototype.ngAfterViewChecked = function () {
        //this.setupActiveTab();
        this.setupSearchProduct();
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        jQuery('#content > #userBasket').remove();
        jQuery('#content > #productTabs').remove();
        this.blockUI.stop();
    };
    ProductsComponent.prototype.getBasketCallback = function (resp) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
            jQuery("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
        }
    };
    ProductsComponent.prototype.updateUserBasket = function () {
        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
    };
    ProductsComponent.prototype.getProductFamiliesCallback = function (resp) {
        if (resp.isok) {
            this.productFamilyTabs = resp.model.productFamilyTabs;
        }
    };
    ProductsComponent.prototype.GetProducts = function (productFamilyId, productModelTypeId) {
        var _this = this;
        this.blockUI.start("Loading...");
        this.showProductGrid = true;
        this.showProductHomeContent = false;
        this.productFamilyId = productFamilyId;
        this.productModelTypeId = productModelTypeId;
        this.productTypeId = this.enums.ProductTypeEnum.Equipment;
        ///   jQuery("#productSearchBox")[0].value = ""; ////TODO
        //this.productSvc.productFamilyId = productFamilyId;
        //this.productSvc.productModelTypeId = productModelTypeId;
        var data = {
            "ProductFamilyId": this.productFamilyId,
            "ProductModelTypeId": this.productModelTypeId
        };
        //this.productSvc.getProducts(data).then(this.GetProductsCallback.bind(this));
        this.productSvc.getProducts(data).subscribe(function (res) { return _this.GetProductsCallback(res); });
    };
    //deprecated
    ProductsComponent.prototype.GetProductsByUnitInstallationType = function (productFamilyId, unitInstallationTypeId) {
        var _this = this;
        this.productFamilyId = productFamilyId;
        this.unitInstallationTypeId = unitInstallationTypeId;
        var data = {
            "ProductFamilyId": this.productFamilyId,
            "UnitInstallationTypeId": this.unitInstallationTypeId
        };
        var productGrid = jQuery("#productGrid");
        if (productGrid != undefined) {
            //kendo.ui.progress(productGrid, true);
            //this.blockUIList.start('Loading...');
        }
        //this.productSvc.getProducts(data).then(this.GetProductsCallback.bind(this));
        this.productSvc.getProducts(data).subscribe(function (res) { return _this.GetProductsCallback(res); });
    };
    ProductsComponent.prototype.GetProductsByProductClassPIMId = function (productFamilyId, productClassPIMId) {
        var _this = this;
        this.productFamilyId = productFamilyId;
        this.productClassPIMId = productClassPIMId;
        //this.productSvc.productFamilyId = productFamilyId;
        //this.productSvc.unitInstallationTypeId = unitInstallationTypeId;
        var data = {
            "ProductFamilyId": this.productFamilyId,
            "ProductClassPIMId": this.productClassPIMId
        };
        var productGrid = jQuery("#productGrid");
        this.blockUI.start('Loading...');
        //if (this.hasRoutedBack)
        //this.blockUIList.start('Loading...');
        if (productGrid != undefined) {
            //kendo.ui.progress(productGrid, true);
            //this.blockUIList.start('Loading...');
        }
        //this.productSvc.getProducts(data).then(this.GetProductsCallback.bind(this));
        this.productSvc.getProducts(data).subscribe(function (res) { return _this.GetProductsCallback(res); });
    };
    ProductsComponent.prototype.GetProductsCallback = function (resp) {
        if (resp.isok) {
            this.productData = resp.model;
            this.productFamilyName = resp.model.productFamilyName;
            //this.productTypeId = this.enums.ProductTypeEnum.Equipment;
            this.productSearchTextHolder = resp.model.productFamilyName;
            this.unitInstallationTypeTabs = resp.model.unitInstallationTypeTabs;
            this.productClassPIMTabs = resp.model.productClassPIMTabs;
            this.productModelTypeId = this.productData.productModelTypeId;
            this.unitInstallationTypeId = this.productData.unitInstallationTypeId; // deprecated
            this.productClassPIMId = this.productData.productClassPIMId;
            setTimeout(this.setupActiveTab.bind(this), 200); // wait 0.2 sec
            this.blockUI.stop();
            //this.blockUIList.stop();
        }
        else {
            this.blockUI.stop();
            //this.blockUIList.stop();
        }
        this.router.navigate(['/products']);
    };
    ProductsComponent.prototype.showProductHome = function () {
        this.showProductHomeContent = true;
        this.productFamilyId = null;
        this.setupActiveTab();
        //this.productSvc.productFamilyId = null;
        this.productFamilyName = null;
        this.productSearchTextHolder = "All";
        jQuery("#productSearchBox").value = ""; ///TODO
        this.productData = null;
    };
    ProductsComponent.prototype.setupActiveTab = function () {
        //Product family tabs
        //jQuery('.productFamilyTab li').click(function () {
        //    jQuery('.productFamilyTab li').each(function () {
        //        jQuery(this).removeClass('active');
        //    });
        //    jQuery(this).addClass('active');
        //})
        //Product family tabs
        jQuery('.productFamilyTab li').each(function () {
            jQuery(this).removeClass('active');
        });
        if (this.productFamilyId != null) {
            if (this.productTypeId == this.enums.ProductTypeEnum.Accessory) {
                var activeFamilyTabId = "#product-family-tab-accessories";
            }
            else {
                var activeFamilyTabId = "#product-family-tab-" + this.productFamilyId;
            }
        }
        else {
            var activeFamilyTabId = "#product-family-tab-home";
        }
        jQuery(activeFamilyTabId).addClass("active");
        //Sub tabs
        jQuery('.sub-tab-bar li').each(function () {
            jQuery(this).removeClass('active-tab');
        });
        if (this.productModelTypeId != null) {
            var activeSubTabId = "#subTab-" + this.productModelTypeId;
        }
        else if (this.productClassPIMId != null) {
            var activeSubTabId = "#subTab-" + this.productClassPIMId;
        }
        jQuery(activeSubTabId).addClass("active-tab");
    };
    ProductsComponent.prototype.setupSearchProduct = function () {
        var self = this;
        jQuery("#productSearchBox").keyup(function (event) {
            event.stopImmediatePropagation();
            if (event.keyCode == 13) {
                jQuery("#productSearchBtn").click();
            }
        });
    };
    ProductsComponent.prototype.searchProducts = function () {
        var self = this;
        self.showProductHomeContent = false;
        self.showProductGrid = true;
        //window.location.href = "/v2/#/products";
        var value = jQuery("#productSearchBox").value; ////TODO
        self.blockUI.start('Loading...');
        //self.blockUIList.start('Loading...');
        if (value) {
            var data = {
                "ProductFamilyId": self.productFamilyId ? self.productFamilyId : null,
                "IsSearch": true,
                "Filter": value
            };
            var productGrid = jQuery("#productGrid");
            if (productGrid != undefined) {
                //kendo.ui.progress(productGrid, true);
            }
            self.productSvc.getProducts(data).subscribe(function (res) { return self.GetProductsCallback(res); });
            // self.GetProductsCallback.bind(self));
        }
    };
    ProductsComponent.prototype.productDetails = function (eventParams) {
        this.showProductGrid = false;
        this.product = eventParams.product; // may not needed
        this.productSvc.product = eventParams.product;
        this.router.navigate(['/product-list', { outlets: { 'productDetails': [eventParams.product.productId] } }], { queryParams: { activeTab: eventParams.activeTab } });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProductsComponent.prototype, "blockUI", void 0);
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'products',
            template: __webpack_require__("../../../../../src/app/products/components/products/products.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["g" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["b" /* BasketService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());

;
//moved to angular function sprint 12
//delete after 3 months 
//jQuery("#productSearchBtn").click(function (event: any) {
//    //event.preventDefault();
//    //event.stopPropagation();
//    console.log("i got hit again");
//   /// event.stopImmediatePropagation();
//    self.showProductHomeContent = false;
//    self.showProductGrid = true;
//    window.location.href = "/v2/#/products";
//    var value = jQuery("#productSearchBox")[0].value;
//    self.blockUI.start('Loading...');
//    if (value) {
//        var data = {
//            "ProductFamilyId": self.productFamilyId ? self.productFamilyId : null,
//            "IsSearch": true,
//            "Filter": value
//        };
//        var productGrid = jQuery("#productGrid");
//        if (productGrid != undefined) {
//            //kendo.ui.progress(productGrid, true);
//        }
//        self.productSvc.getProducts(data).then(
//            self.GetProductsCallback.bind(self));
//    }
//});


/***/ }),

/***/ "../../../../../src/app/products/enums/productTypeEnum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductTypeEnum */
var ProductTypeEnum;
(function (ProductTypeEnum) {
    ProductTypeEnum[ProductTypeEnum["Accessory"] = 100000000] = "Accessory";
    ProductTypeEnum[ProductTypeEnum["Indoor"] = 100000151] = "Indoor";
    ProductTypeEnum[ProductTypeEnum["Outdoor"] = 100000301] = "Outdoor";
    ProductTypeEnum[ProductTypeEnum["System"] = 100000451] = "System";
    ProductTypeEnum[ProductTypeEnum["Other"] = 1] = "Other";
})(ProductTypeEnum || (ProductTypeEnum = {}));


/***/ }),

/***/ "../../../../../src/app/products/enums/submittalSheetTypeEnum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubmittalSheetTypeEnum */
var SubmittalSheetTypeEnum;
(function (SubmittalSheetTypeEnum) {
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["Other"] = 1] = "Other";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["AlthermaIndoor"] = 100000000] = "AlthermaIndoor";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["AlthermaOutdoor"] = 100000001] = "AlthermaOutdoor";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["AlthermaTank"] = 100000002] = "AlthermaTank";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["MultiSplitIndoor"] = 100000003] = "MultiSplitIndoor";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["MultiSplitOutdoor"] = 100000004] = "MultiSplitOutdoor";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["SystemCooling"] = 100000005] = "SystemCooling";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["SystemHP"] = 100000006] = "SystemHP";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["VRVIIIAirCooled"] = 100000007] = "VRVIIIAirCooled";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["VRVIIIWaterCooled"] = 100000008] = "VRVIIIWaterCooled";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["VRVIndoor"] = 100000009] = "VRVIndoor";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["Controllers"] = 100000010] = "Controllers";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["Accessories"] = 100000011] = "Accessories";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["RTU"] = 100000012] = "RTU";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["Packaged"] = 100000013] = "Packaged";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["ACAndHP"] = 100000014] = "ACAndHP";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["CoilsAndAirHandler"] = 100000015] = "CoilsAndAirHandler";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["GasFurnace"] = 100000016] = "GasFurnace";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["CommercialACAndHP"] = 100000017] = "CommercialACAndHP";
    SubmittalSheetTypeEnum[SubmittalSheetTypeEnum["CommercialAH"] = 100000018] = "CommercialAH";
})(SubmittalSheetTypeEnum || (SubmittalSheetTypeEnum = {}));


/***/ }),

/***/ "../../../../../src/app/products/enums/unitInstallationTypeEnum.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export UnitInstallationTypeEnum */
var UnitInstallationTypeEnum;
(function (UnitInstallationTypeEnum) {
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["None"] = 0] = "None";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["AirHandler"] = 100000000] = "AirHandler";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["EvaporatorCoil"] = 100000001] = "EvaporatorCoil";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["PackageAC"] = 100000002] = "PackageAC";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["PackageHP"] = 100000003] = "PackageHP";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["PackageDF"] = 100000004] = "PackageDF";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["PackageGE"] = 100000005] = "PackageGE";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["WallMounted"] = 100000151] = "WallMounted";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["CeilingSuspended"] = 100000152] = "CeilingSuspended";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["Ducted"] = 100000153] = "Ducted";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["FloorStanding"] = 100000154] = "FloorStanding";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["CeilingCassette"] = 100000155] = "CeilingCassette";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["GasFurnace"] = 100000156] = "GasFurnace";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["CasedCoil"] = 100000157] = "CasedCoil";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["CoilOnly"] = 100000158] = "CoilOnly";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["CoolingOnly"] = 100000301] = "CoolingOnly";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["HeatPump"] = 100000302] = "HeatPump";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["HeatRecovery"] = 100000303] = "HeatRecovery";
    UnitInstallationTypeEnum[UnitInstallationTypeEnum["AirConditioner"] = 100000304] = "AirConditioner";
})(UnitInstallationTypeEnum || (UnitInstallationTypeEnum = {}));


/***/ }),

/***/ "../../../../../src/app/products/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_product_details_product_details_view_product_details_gridView_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-gridView.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__components_product_details_product_details_view_product_details_gridView_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_product_details_product_details_view_product_details_listView_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-listView.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__components_product_details_product_details_view_product_details_listView_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_product_details_product_details_view_product_details_tableView_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-details-view/product-details-tableView.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__components_product_details_product_details_view_product_details_tableView_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_product_images_product_image_component__ = __webpack_require__("../../../../../src/app/products/components/product-images/product-image.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_3__components_product_images_product_image_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_product_list_productList_component__ = __webpack_require__("../../../../../src/app/products/components/product-list/productList.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_4__components_product_list_productList_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_product_quantity_product_quantity_add_component__ = __webpack_require__("../../../../../src/app/products/components/product-quantity/product-quantity-add.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__components_product_quantity_product_quantity_add_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_product_quantity_product_quantity_input_component__ = __webpack_require__("../../../../../src/app/products/components/product-quantity/product-quantity-input.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_6__components_product_quantity_product_quantity_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_product_spec_bars_product_spec_bars_component__ = __webpack_require__("../../../../../src/app/products/components/product-spec-bars/product-spec-bars.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_7__components_product_spec_bars_product_spec_bars_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_product_details_product_accessories_product_accessories_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-accessories/product-accessories.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_8__components_product_details_product_accessories_product_accessories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_product_details_product_details_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-details.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_9__components_product_details_product_details_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_product_details_product_details_test_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-details-test.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_10__components_product_details_product_details_test_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_product_details_product_overview_product_overview_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-overview/product-overview.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_11__components_product_details_product_overview_product_overview_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_product_details_product_overview_product_overview_info_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/product-overview/product-overview-info.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_12__components_product_details_product_overview_product_overview_info_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_product_details_document_accessories_related_documents_accessories_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/document-accessories/related-documents-accessories.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_13__components_product_details_document_accessories_related_documents_accessories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_product_details_technical_specifications_technical_specifications_accessories_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-accessories.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_14__components_product_details_technical_specifications_technical_specifications_accessories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_product_details_technical_specifications_technical_specifications_other_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-other.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_15__components_product_details_technical_specifications_technical_specifications_other_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_product_details_technical_specifications_technical_specifications_systemHP_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications-systemHP.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_16__components_product_details_technical_specifications_technical_specifications_systemHP_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_product_details_technical_specifications_technical_specifications_component__ = __webpack_require__("../../../../../src/app/products/components/product-details/technical-specifications/technical-specifications.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_17__components_product_details_technical_specifications_technical_specifications_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_products_products_component__ = __webpack_require__("../../../../../src/app/products/components/products/products.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_18__components_products_products_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__enums_productTypeEnum__ = __webpack_require__("../../../../../src/app/products/enums/productTypeEnum.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__enums_submittalSheetTypeEnum__ = __webpack_require__("../../../../../src/app/products/enums/submittalSheetTypeEnum.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__enums_unitInstallationTypeEnum__ = __webpack_require__("../../../../../src/app/products/enums/unitInstallationTypeEnum.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__models_categoryList__ = __webpack_require__("../../../../../src/app/products/models/categoryList.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__models_document__ = __webpack_require__("../../../../../src/app/products/models/document.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__models_product__ = __webpack_require__("../../../../../src/app/products/models/product.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__models_productAccessory__ = __webpack_require__("../../../../../src/app/products/models/productAccessory.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__models_productFamily__ = __webpack_require__("../../../../../src/app/products/models/productFamily.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__models_productNote__ = __webpack_require__("../../../../../src/app/products/models/productNote.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__models_productSpecification__ = __webpack_require__("../../../../../src/app/products/models/productSpecification.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__models_productTab__ = __webpack_require__("../../../../../src/app/products/models/productTab.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__models_tab__ = __webpack_require__("../../../../../src/app/products/models/tab.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_productFamily_service__ = __webpack_require__("../../../../../src/app/products/services/productFamily.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_31__services_productFamily_service__["a"]; });


































/***/ }),

/***/ "../../../../../src/app/products/models/categoryList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CategoryListModel */
var CategoryListModel = /** @class */ (function () {
    function CategoryListModel(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    return CategoryListModel;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Document */
var Document = /** @class */ (function () {
    function Document(productId, productNumber, documentId, description, type, hasImage, documentUrl, absolutePath, fileName, documentTypeId, rank) {
        this.productId = productId;
        this.productNumber = productNumber;
        this.documentId = documentId;
        this.description = description;
        this.type = type;
        this.hasImage = hasImage;
        this.documentUrl = documentUrl;
        this.absolutePath = absolutePath;
        this.fileName = fileName;
        this.documentTypeId = documentTypeId;
        this.rank = rank;
    }
    return Document;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Product */
var Product = /** @class */ (function () {
    function Product(accessories, benefits, dimensionalDrawing, documents, features, getSubmittalSheetTemplateName, getSystemIndoorUnit, getSystemOutdoorUnit, productImage, indoorUnit, isSystem, isSystemTemplte, logos, name, notes, outDoorUnit, parentProductId, parentProducts, price, productBrandId, productBrandName, productCategoryName, productClassCode, productFamilyId, productFamilyName, productFamilyTabs, productId, productTypeDescription, productTypeId, unitInstallationTypeId, productNumber, productSpecifications, quantity, specifications, submittalSheetTypeDescription, submittalSheetTypeId, subProducts, tabs, unitCombination, quoteId) {
        this.accessories = accessories;
        this.benefits = benefits;
        this.dimensionalDrawing = dimensionalDrawing;
        this.documents = documents;
        this.features = features;
        this.getSubmittalSheetTemplateName = getSubmittalSheetTemplateName;
        this.getSystemIndoorUnit = getSystemIndoorUnit;
        this.getSystemOutdoorUnit = getSystemOutdoorUnit;
        this.productImage = productImage;
        this.indoorUnit = indoorUnit;
        this.isSystem = isSystem;
        this.isSystemTemplte = isSystemTemplte;
        this.logos = logos;
        this.name = name;
        this.notes = notes;
        this.outDoorUnit = outDoorUnit;
        this.parentProductId = parentProductId;
        this.parentProducts = parentProducts;
        this.price = price;
        this.productBrandId = productBrandId;
        this.productBrandName = productBrandName;
        this.productCategoryName = productCategoryName;
        this.productClassCode = productClassCode;
        this.productFamilyId = productFamilyId;
        this.productFamilyName = productFamilyName;
        this.productFamilyTabs = productFamilyTabs;
        this.productId = productId;
        this.productTypeDescription = productTypeDescription;
        this.productTypeId = productTypeId;
        this.unitInstallationTypeId = unitInstallationTypeId;
        this.productNumber = productNumber;
        this.productSpecifications = productSpecifications;
        this.quantity = quantity;
        this.specifications = specifications;
        this.submittalSheetTypeDescription = submittalSheetTypeDescription;
        this.submittalSheetTypeId = submittalSheetTypeId;
        this.subProducts = subProducts;
        this.tabs = tabs;
        this.unitCombination = unitCombination;
        this.quoteId = quoteId;
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/productAccessory.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductAccessory */
var ProductAccessory = /** @class */ (function () {
    function ProductAccessory(parentProductId, accessory, quantity) {
        this.parentProductId = parentProductId;
        this.accessory = accessory;
        this.quantity = quantity;
    }
    return ProductAccessory;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/productFamily.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductFamily */
var ProductFamily = /** @class */ (function () {
    function ProductFamily(productFamilyTabs, items) {
        this.productFamilyTabs = productFamilyTabs;
        this.items = items;
    }
    return ProductFamily;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/productNote.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductNote */
var ProductNote = /** @class */ (function () {
    function ProductNote(productId, description, productNoteTypeId, rank) {
        this.productId = productId;
        this.description = description;
        this.productNoteTypeId = productNoteTypeId;
        this.rank = rank;
    }
    return ProductNote;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/productSpecification.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductSpecification */
var ProductSpecification = /** @class */ (function () {
    function ProductSpecification(id, key, name, productId, value) {
        this.id = id;
        this.key = key;
        this.name = name;
        this.productId = productId;
        this.value = value;
    }
    return ProductSpecification;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/productTab.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductTab */
var ProductTab = /** @class */ (function () {
    function ProductTab(isActive, id, description) {
        this.isActive = isActive;
        this.id = id;
        this.description = description;
    }
    return ProductTab;
}());



/***/ }),

/***/ "../../../../../src/app/products/models/tab.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TabModel */
var TabModel = /** @class */ (function () {
    function TabModel(isActive, id, description) {
        this.isActive = isActive;
        this.id = id;
        this.description = description;
    }
    return TabModel;
}());



/***/ }),

/***/ "../../../../../src/app/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var productsRoutes = [
    {
        path: 'product-list',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["o" /* ProductsComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    },
    {
        path: ':id', component: __WEBPACK_IMPORTED_MODULE_2__index__["b" /* ProductDetailsComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    }
];
var ProductsRoutingModule = /** @class */ (function () {
    function ProductsRoutingModule() {
    }
    ProductsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(productsRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
        })
    ], ProductsRoutingModule);
    return ProductsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS_COMPONENTS", function() { return PRODUCTS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basket_basket_module__ = __webpack_require__("../../../../../src/app/basket/basket.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dialog__ = __webpack_require__("../../../../@progress/kendo-angular-dialog/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_routing_module__ = __webpack_require__("../../../../../src/app/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__index__ = __webpack_require__("../../../../../src/app/products/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var PRODUCTS_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_7__index__["c" /* ProductDetailsGridViewComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["d" /* ProductDetailsListViewComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["e" /* ProductDetailsTableViewComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["h" /* ProductImageComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["i" /* ProductListComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["l" /* ProductQuantityAddComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["m" /* ProductQuantityInputComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["n" /* ProductSpecBarsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["a" /* ProductAccessoriesComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["b" /* ProductDetailsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["f" /* ProductDetailsTestComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["j" /* ProductOverviewComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["k" /* ProductOverviewInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["p" /* RelatedDocsAndAssrComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["q" /* TechnicalSpecificationsAccessoriesComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["s" /* TechnicalSpecificationsOtherComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["t" /* TechnicalSpecificationsSystemHPComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["r" /* TechnicalSpecificationsComponent */],
    __WEBPACK_IMPORTED_MODULE_7__index__["o" /* ProductsComponent */],
];
var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__basket_basket_module__["a" /* BasketModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["c" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_grid__["a" /* ExcelModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__products_routing_module__["a" /* ProductsRoutingModule */]
            ],
            exports: PRODUCTS_COMPONENTS,
            declarations: PRODUCTS_COMPONENTS,
            providers: [
                // ProductService,
                __WEBPACK_IMPORTED_MODULE_7__index__["g" /* ProductFamilyService */]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "../../../../../src/app/products/services/productFamily.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductFamilyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductFamilyService = /** @class */ (function () {
    function ProductFamilyService(_http) {
        this._http = _http;
        this._productFamilyUrl = '/api/Product/GetProductFamilies';
    }
    //getProductFamilies(): Observable<IProductFamily[]> {
    //    return this._http.get(this._productFamilyUrl)
    //        .map((response: Response) => <IProductFamily[]>response.json())
    //        .do(data => console.log('All: ' + JSON.stringify(data)))
    //        .catch(this.handleError);
    //}
    ProductFamilyService.prototype.getProductFamilies = function () {
        return this._http.get(this._productFamilyUrl)
            .map(function (response) { return response.json().data; })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    ProductFamilyService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.json().error || 'Server error');
    };
    ProductFamilyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductFamilyService);
    return ProductFamilyService;
}());



/***/ })

});
//# sourceMappingURL=products.module.chunk.js.map