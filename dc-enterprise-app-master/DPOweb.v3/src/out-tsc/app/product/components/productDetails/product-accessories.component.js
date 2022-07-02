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
var enums_1 = require("../../../shared/enums/enums");
var product_service_1 = require("../../services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var ProductAccessoriesComponent = /** @class */ (function () {
    function ProductAccessoriesComponent(router, toastrSvc, userSvc, enums, productSvc, basketSvc) {
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
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
        this.productSvc.product = accessory;
        this.router.navigate(['/product', { outlets: { 'productDetails': [accessory.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "userBasket", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductAccessoriesComponent.prototype, "currentUser", void 0);
    ProductAccessoriesComponent = __decorate([
        core_1.Component({
            selector: 'product-accessories',
            templateUrl: './product-accessories.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, toastr_service_1.ToastrService,
            user_service_1.UserService, enums_1.Enums, product_service_1.ProductService,
            basket_service_1.BasketService])
    ], ProductAccessoriesComponent);
    return ProductAccessoriesComponent;
}());
exports.ProductAccessoriesComponent = ProductAccessoriesComponent;
;
//# sourceMappingURL=product-accessories.component.js.map