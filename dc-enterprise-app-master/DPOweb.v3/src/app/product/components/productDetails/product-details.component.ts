import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from '../../../shared/services/toastr.service';
//import { LoadingIconService } from '../../shared/services/loadingIcon.service';
import { UserService } from '../../../shared/services/user.service';
import { Enums } from '../../../shared/enums/enums';
import { ProductService } from '../../services/product.service';
import { BasketService } from '../../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'product-details',
    templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
    //@Input() product: any;
    //@Input() userBasket: any;

    public product: any;
    public userBasket: any;
    public currentUser: any;
    public showPrices: boolean = false;

    public relatedIndoorUnit: any;
    public relatedOutdoorUnit: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private enums: Enums, private productSvc: ProductService, private basketSvc: BasketService) {
    }

    ngOnChange() {
        //console.log("ProductDetail Component: ngOnChange");
    }

    ngOnInit() {

        this.route.params.subscribe((params: { id: string }) => {
            this.product = null; // this is to invoke change detection
            var data = {
                "ProductId": params.id,
            };
            this.productSvc.getProduct(data).then(this.GetProductCallback.bind(this));
        });

        if (this.basketSvc.userBasket == undefined) {
            this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
        } else {
            this.userBasket = this.basketSvc.userBasket;
        }

        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then((resp: any) => {
                if (resp.isok) {
                    this.userSvc.currentUser = resp.model;
                    this.currentUser = resp.model;
                    this.showPrices = this.userSvc.currentUser.showPrices;
                }
            });
        } else {
            this.currentUser = this.userSvc.currentUser;
        } 
    }
 
    ngAfterContentInit() {
        //console.log("product Detail: ngAfterContentInit");
        
    }

    ngAfterContentChecked() {
        //console.log("product Detail: ngAfterContentChecked");
        
    }

    ngAfterViewInit() {
        //console.log("product Detail: ngAfterViewInit");

        //this.route.queryParams.subscribe((params: { tab: string }) => {
        //    var subTabId = '#' + params.tab;
        //    $(subTabId).click();
        //});
    }

    ngAfterViewChecked() {
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
    }

    public setupActiveTab() {
        //Product family tabs
        jQuery('.productFamilyTab li').each(function () {
            jQuery(this).removeClass('active');
        });

        if (this.product.productFamilyId != null) {
            var activeFamilyTabId = "#product-family-tab-" + this.product.productFamilyId;
        } else {
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
    }

    public setActiveTabByUrlParam() {
        this.route.queryParams.subscribe((params: { activeTab: string }) => {

            var activeTabId = '#' + params.activeTab;
            jQuery(activeTabId).click();
        });
    }

    public GetProductCallback(resp: any) {
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
                } else if (item.productModelTypeId == this.enums.ProductModelTypeEnum.Outdoor) { // outdoor
                    this.relatedOutdoorUnit = item;
                }
            }
        }

        console.log("************ SubmittalSheetTypeId: " + this.product.submittalSheetTypeId + " *******************");
    }

    public getBasketCallback(resp: any) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
        }
    }

    public productDetails(event: any, product: any) {
        this.productSvc.product = product;

        this.router.navigate(['/product', { outlets: { 'productDetails': [product.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    }

    public getSubmittalDataSheet(product: any) {

        this.productSvc.getSubmittalDataSheet(product.productNumber).then((resp: any) => {
            if (resp) {
                var HtmlString = resp;
                jQuery("#technical-specs").replaceWith(HtmlString);
                this.setActiveTabByUrlParam();
            }
        });
    }
};