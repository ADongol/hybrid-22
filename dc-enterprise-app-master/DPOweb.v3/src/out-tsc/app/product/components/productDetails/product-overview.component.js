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
var toastr_service_1 = require("../../../shared/services/toastr.service");
var user_service_1 = require("../../../shared/services/user.service");
var product_service_1 = require("../../services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var ProductOverviewComponent = /** @class */ (function () {
    function ProductOverviewComponent(elementRef, toastrSvc, userSvc, productSvc, basketSvc) {
        this.elementRef = elementRef;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
    }
    ProductOverviewComponent.prototype.ngOnChanges = function (changes) {
        console.log("ProductDetail-OverView Component: ngOnChange");
    };
    ProductOverviewComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "userBasket", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ProductOverviewComponent.prototype, "currentUser", void 0);
    ProductOverviewComponent = __decorate([
        core_1.Component({
            selector: 'product-overview',
            templateUrl: './product-overview.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, toastr_service_1.ToastrService,
            user_service_1.UserService, product_service_1.ProductService,
            basket_service_1.BasketService])
    ], ProductOverviewComponent);
    return ProductOverviewComponent;
}());
exports.ProductOverviewComponent = ProductOverviewComponent;
;
//# sourceMappingURL=product-overview.component.js.map