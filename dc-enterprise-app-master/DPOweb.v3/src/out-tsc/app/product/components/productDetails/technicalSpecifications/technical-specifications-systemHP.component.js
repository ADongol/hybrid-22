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
//This component is not used.Delete after 01/ 06 / 2017
var core_1 = require("@angular/core");
var toastr_service_1 = require("../../../../shared/services/toastr.service");
var user_service_1 = require("../../../../shared/services/user.service");
var product_service_1 = require("../../../services/product.service");
var basket_service_1 = require("../../../../basket/services/basket.service");
var TechnicalSpecificationsSystemHPComponent = /** @class */ (function () {
    function TechnicalSpecificationsSystemHPComponent(elementRef, toastrSvc, userSvc, productSvc, basketSvc) {
        this.elementRef = elementRef;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.specs = [];
    }
    TechnicalSpecificationsSystemHPComponent.prototype.ngOnInit = function () {
        this.specs = this.product.specifications.all;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsSystemHPComponent.prototype, "product", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TechnicalSpecificationsSystemHPComponent.prototype, "userBasket", void 0);
    TechnicalSpecificationsSystemHPComponent = __decorate([
        core_1.Component({
            selector: 'technical-specifications-systemHP',
            templateUrl: './technical-specifications-systemHP.component.html',
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, toastr_service_1.ToastrService,
            user_service_1.UserService, product_service_1.ProductService,
            basket_service_1.BasketService])
    ], TechnicalSpecificationsSystemHPComponent);
    return TechnicalSpecificationsSystemHPComponent;
}());
exports.TechnicalSpecificationsSystemHPComponent = TechnicalSpecificationsSystemHPComponent;
;
//# sourceMappingURL=technical-specifications-systemHP.component.js.map