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
//import { LoadingIconService } from '../../shared/services/loadingIcon.service';
var user_service_1 = require("../../../shared/services/user.service");
var enums_1 = require("../../../shared/enums/enums");
var product_service_1 = require("../../services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var ProductDetailsComponent = /** @class */ (function () {
    function ProductDetailsComponent(router, route, toastrSvc, userSvc, enums, productSvc, basketSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
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
    };
    ProductDetailsComponent.prototype.ngAfterContentChecked = function () {
        //console.log("product Detail: ngAfterContentChecked");
    };
    ProductDetailsComponent.prototype.ngAfterViewInit = function () {
        //console.log("product Detail: ngAfterViewInit");
        //this.route.queryParams.subscribe((params: { tab: string }) => {
        //    var subTabId = '#' + params.tab;
        //    $(subTabId).click();
        //});
    };
    ProductDetailsComponent.prototype.ngAfterViewChecked = function () {
        //console.log("product Detail: ngAfterViewChecked");
        if (jQuery('#accessoryFilters').length) {
            jQuery('input[name="accessory-filter-type"]').on('change', function () {
                jQuery('#indoorAccessories, #outdoorAccessories').hide();
                switch (jQuery(this).val()) {
                    case "indoor":
                        jQuery('#indoorAccessories').show();
                        break;
                    case "outdoor":
                        jQuery('#outdoorAccessories').show();
                        break;
                    default:
                        jQuery('#indoorAccessories, #outdoorAccessories').show();
                }
            });
        }
    };
    ProductDetailsComponent.prototype.setupActiveTab = function () {
        //Product family tabs
        jQuery('.productFamilyTab li').each(function () {
            jQuery(this).removeClass('active');
        });
        if (this.product.productFamilyId != null) {
            var activeFamilyTabId = "#product-family-tab-" + this.product.productFamilyId;
        }
        else {
            var activeFamilyTabId = "#product-family-tab-home";
        }
        jQuery(activeFamilyTabId).addClass("active");
        //Product details tabs
        jQuery('#productDetailsTabs li').click(function () {
            jQuery('#productDetailsTabs li').each(function () {
                jQuery(this).removeClass('active');
            });
            jQuery(this).addClass('active');
        });
        jQuery('#product-overview').click(function () {
            jQuery('#productOverviewTab').show();
            jQuery('#productRelatedAccessoriesTab').hide();
            jQuery('#productSpecsTab').hide();
        });
        jQuery('#product-accessories').click(function () {
            jQuery('#productOverviewTab').hide();
            jQuery('#productRelatedAccessoriesTab').show();
            jQuery('#productSpecsTab').hide();
        });
        jQuery('#product-specs').click(function () {
            jQuery('#productOverviewTab').hide();
            jQuery('#productRelatedAccessoriesTab').hide();
            jQuery('#productSpecsTab').show();
        });
    };
    ProductDetailsComponent.prototype.setActiveTabByUrlParam = function () {
        this.route.queryParams.subscribe(function (params) {
            var activeTabId = '#' + params.activeTab;
            jQuery(activeTabId).click();
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
                if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Indoor) { // indoor
                    this.relatedIndoorUnit = item;
                }
                else if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor) { // outdoor
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
        this.router.navigate(['/product', { outlets: { 'productDetails': [product.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    };
    ProductDetailsComponent.prototype.getSubmittalDataSheet = function (product) {
        var _this = this;
        this.productSvc.getSubmittalDataSheet(product.productNumber).then(function (resp) {
            if (resp) {
                var HtmlString = resp;
                jQuery("#technical-specs").replaceWith(HtmlString);
                _this.setActiveTabByUrlParam();
            }
        });
    };
    ProductDetailsComponent = __decorate([
        core_1.Component({
            selector: 'product-details',
            templateUrl: './product-details.component.html',
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, product_service_1.ProductService, basket_service_1.BasketService])
    ], ProductDetailsComponent);
    return ProductDetailsComponent;
}());
exports.ProductDetailsComponent = ProductDetailsComponent;
;
//# sourceMappingURL=product-details.component.js.map