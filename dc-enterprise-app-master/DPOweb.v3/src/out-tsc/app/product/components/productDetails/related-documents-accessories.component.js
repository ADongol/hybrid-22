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
var toastr_service_1 = require("../../../shared/services/toastr.service");
var user_service_1 = require("../../../shared/services/user.service");
var enums_1 = require("../../../shared/enums/enums");
var product_service_1 = require("../../services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var RelatedDocsAndAssrComponent = /** @class */ (function () {
    function RelatedDocsAndAssrComponent(router, toastrSvc, userSvc, enums, productSvc, basketSvc) {
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
    }
    RelatedDocsAndAssrComponent.prototype.ngOnInit = function () {
        if (this.product.isSystem) {
            for (var i in this.product.subProducts) {
                var item = this.product.subProducts[i];
                if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) { // indoor
                    this.relatedIndoorUnit = item;
                }
                else if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor) { // outdoor
                    this.relatedOutdoorUnit = item;
                }
            }
        }
        if (this.product.productTypeId == this.enums.ProductTypeEnum.Accessory) { // accessories
            jQuery('#product-accessories a').text("PARENT PRODUCTS");
        }
        else {
            jQuery('#product-accessories a').text("RELATED ACCESSORIES");
        }
    };
    RelatedDocsAndAssrComponent.prototype.ngAfterViewInit = function () {
        jQuery('#viewAllAccessoriesBtn').click(function () {
            jQuery('#productOverviewTab').hide();
            jQuery('#productRelatedAccessoriesTab').show();
            jQuery('#productSpecsTab').hide();
            jQuery('#productDetailsTabs li').each(function () {
                jQuery(this).removeClass('active');
            });
            jQuery('#product-accessories').addClass('active');
        });
    };
    RelatedDocsAndAssrComponent.prototype.productDetails = function (event, product) {
        this.productSvc.product = product;
        this.router.navigate(['/product', { outlets: { 'productDetails': [product.productId] } }]);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], RelatedDocsAndAssrComponent.prototype, "product", void 0);
    RelatedDocsAndAssrComponent = __decorate([
        core_1.Component({
            selector: 'related-documents-accessories',
            templateUrl: './related-documents-accessories.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, toastr_service_1.ToastrService,
            user_service_1.UserService, enums_1.Enums,
            product_service_1.ProductService, basket_service_1.BasketService])
    ], RelatedDocsAndAssrComponent);
    return RelatedDocsAndAssrComponent;
}());
exports.RelatedDocsAndAssrComponent = RelatedDocsAndAssrComponent;
;
//# sourceMappingURL=related-documents-accessories.component.js.map