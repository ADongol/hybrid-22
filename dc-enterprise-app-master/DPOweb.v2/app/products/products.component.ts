//import { AppRoutingModule }  from '../app.routes';
//import { ROUTER_DIRECTIVES } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Location } from "@angular/common";

import { ToastrService } from '../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../shared/services/user.service';
import { SystemAccessEnum } from '../shared/services/systemAccessEnum';
import { Enums } from '../shared/enums/enums';

import { ProductService } from './services/product.service';
import { BasketService } from '../basket/services/basket.service';
declare var jQuery: any;

@Component({
    selector: 'products',
    templateUrl: 'app/products/products.component.html',
})

export class ProductsComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    //@BlockUI('product-list') blockUIList: NgBlockUI;

    public user: any;
    public productFamilyTabs: any;

    private productData: any;

    public productFamilyId: any;
    public productFamilyName: any;
    public productTypeId: any;
    public productSearchTextHolder: any = "All";

    public productModelTypeId: any;

    public unitInstallationTypeId: any;//deprecated
    public unitInstallationTypeTabs: any;//deprecated

    public productClassPIMId: any;
    public productClassPIMTabs: any;

    public userBasket: any;
    public showProductGrid: any = true;
    public showProductHomeContent: any = true;
    public product: any = null;

    public hasRoutedBack: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService,
        private userSvc: UserService,
        private systemAccessEnum: SystemAccessEnum, private enums: Enums,
        private productSvc: ProductService, private basketSvc: BasketService,
        private locationSvc: Location
        //private loadingIconSvc: LoadingIconService, 
    ) {
        this.user = this.route.snapshot.data['currentUser'].model;
    }

    ngOnInit() {
        //console.log("products: ngOnInit");

        //if (!this.userSvc.userIsAuthenticated) {
        //    window.location.href = "/Account/Login";
        //}

        //if (this.route.url.value[0].path == 'products') {
        //    this.route.params.subscribe((params: { id: string }) => {
        //        debugger;
        //        var id = params.id;
        //    });
        //}

        var hash = window.location.hash;

        if (hash.includes("#/products/(productDetails:")) {
            this.showProductHomeContent = false;
            //$("#addProductsToQuoteBtn").hide();
        }  

        //if (this.productSvc.productFamilyTabs == undefined) {
        //    this.productSvc.getProductFamilies().then(this.getProductFamiliesCallback.bind(this));
        //} else {
        //    this.productFamilyTabs = this.productSvc.productFamilyTabs;
        //}

        if (this.userSvc.currentUser == undefined) {
            this.userSvc.getCurrentUser().then((resp: any) => {
                if (resp.isok) {
                    this.userSvc.currentUser = resp.model;
                    this.productFamilyTabs = resp.model.productFamilyAccesses;
                }
            });
        } else {
            this.productFamilyTabs = this.userSvc.currentUser.productFamilyAccesses;
        }

        //$("#numeric").kendoNumericTextBox({
        //    change: function () {
        //        var value = this.value();
        //        debugger
        //        alert(value);
        //    }
        //});

        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));
    }

    ngDoCheck() {
        //console.log("products: ngDoCheck");
        var hash = window.location.hash;
        if (hash == "#/products" && this.productFamilyId != null) {
            this.showProductGrid = true;
        } else if (hash.includes("#/products/(productDetails:")) {
            this.showProductGrid = false;
        }
    }

    ngAfterContentInit() {
        //if (!this.userSvc.userIsAuthenticated) {
        //    window.location.href = "/Account/Login";
        //}

        this.userSvc.isAuthenticated().then((resp: any) => {
            if (!resp.isok || resp.model != true) {
               //Go back to login page
                window.location.href = "/v2/#/account/login";

            }
        });

        console.log("products: ngAfterContentInit");

        $('#userBasket').insertBefore('#main-container');
        $('#productTabs').insertBefore('#main-container');

        //this.productFamilyTabs = this.userSvc.currentUser.productFamilyAccesses;

        //working ok, but slow
        //if (this.productSvc.productFamilyTabs == undefined || this.productSvc.productFamilyTabs.length == 0) {
        //    this.productSvc.getProductFamilies().then(this.getProductFamiliesCallback.bind(this));
        //} else {
        //    this.productFamilyTabs = this.productSvc.productFamilyTabs;
        //}
    }

    ngAfterViewChecked() {
        //console.log("products: ngAfterViewChecked");

        //this.setupActiveTab();
        this.setupSearchProduct();
    }

    ngOnDestroy() {
        //console.log("products: ngOnDestroy");

        $('#content > #userBasket').remove();
        $('#content > #productTabs').remove();
    }

    public getBasketCallback(resp: any) {
        if (resp.isok) {
            this.userBasket = resp.model;
            this.basketSvc.userBasket = resp.model;
            $("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
        }
    }

    public updateUserBasket() {
        this.basketSvc.getBasket().then(this.getBasketCallback.bind(this));

        //TODO: remove GetProducts, clear quantities on gridViewData instead
        //this.GetProducts(this.productFamilyId, this.productModelTypeId);

        //kendo.ui.progress(productGrid, true);

    }

    public getProductFamiliesCallback(resp: any) {
        if (resp.isok) {
            this.productFamilyTabs = resp.model.productFamilyTabs;
        }
    }

    public GetProducts(productFamilyId: any, productModelTypeId: any) { // Indoor/ Outdoor

        this.blockUI.start("Loading...");

        this.showProductGrid = true;
        this.showProductHomeContent = false;
        this.productFamilyId = productFamilyId;
        this.productModelTypeId = productModelTypeId;
        this.productTypeId = this.enums.ProductTypeEnum.Equipment;

        jQuery("#productSearchBox")[0].value = "";

        //this.productSvc.productFamilyId = productFamilyId;
        //this.productSvc.productModelTypeId = productModelTypeId;

        var data = {
            "ProductFamilyId": this.productFamilyId,
            "ProductModelTypeId": this.productModelTypeId
        };

        //this.productSvc.getProducts(data).then(this.GetProductsCallback.bind(this));
        this.productSvc.getProducts(data).subscribe(res => this.GetProductsCallback(res));
    }

    //deprecated
    public GetProductsByUnitInstallationType(productFamilyId: any, unitInstallationTypeId: any) {// Indoor/ Outdoor
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
        this.productSvc.getProducts(data).subscribe(res => this.GetProductsCallback(res));
    }

    public GetProductsByProductClassPIMId(productFamilyId: any, productClassPIMId: any) {// Indoor/ Outdoor
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
        this.productSvc.getProducts(data).subscribe(res => this.GetProductsCallback(res));
    }

    public GetProductsCallback(resp: any) {
         
        if (resp.isok) {
            this.productData = resp.model;
            this.productFamilyName = resp.model.productFamilyName;
            //this.productTypeId = this.enums.ProductTypeEnum.Equipment;
            this.productSearchTextHolder = resp.model.productFamilyName;
            this.unitInstallationTypeTabs = resp.model.unitInstallationTypeTabs;
            this.productClassPIMTabs = resp.model.productClassPIMTabs;

            this.productModelTypeId = this.productData.productModelTypeId;
            this.unitInstallationTypeId = this.productData.unitInstallationTypeId;// deprecated
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
    }

    public showProductHome() {
        this.showProductHomeContent = true;
        this.productFamilyId = null;
        this.setupActiveTab();
        //this.productSvc.productFamilyId = null;

        this.productFamilyName = null;
        this.productSearchTextHolder = "All";
        jQuery("#productSearchBox")[0].value = "";
        this.productData = null;
    }

    public setupActiveTab() {

        //Product family tabs
        //$('.productFamilyTab li').click(function () {
        //    $('.productFamilyTab li').each(function () {
        //        $(this).removeClass('active');
        //    });

        //    $(this).addClass('active');
        //})

        //Product family tabs
        $('.productFamilyTab li').each(function () {
            $(this).removeClass('active');
        });

        if (this.productFamilyId != null) {
            if (this.productTypeId == this.enums.ProductTypeEnum.Accessory) {
                var activeFamilyTabId = "#product-family-tab-accessories";
            } else {
                var activeFamilyTabId = "#product-family-tab-" + this.productFamilyId;
            }

        } else {
            var activeFamilyTabId = "#product-family-tab-home";
        }

        $(activeFamilyTabId).addClass("active");

        //Sub tabs
        $('.sub-tab-bar li').each(function () {
            $(this).removeClass('active-tab');
        });

        if (this.productModelTypeId != null) {
            var activeSubTabId = "#subTab-" + this.productModelTypeId;
        } else if (this.productClassPIMId != null) {
            var activeSubTabId = "#subTab-" + this.productClassPIMId;
        }

        $(activeSubTabId).addClass("active-tab");
    }

    public setupSearchProduct() {
        var self = this;

        jQuery("#productSearchBox").keyup(function (event: any) {
            event.stopImmediatePropagation();
            if (event.keyCode == 13) {// enter key
                jQuery("#productSearchBtn").click();
            }
        });
    }

    public searchProducts() {
        var self = this;

        self.showProductHomeContent = false;
        self.showProductGrid = true;
        //window.location.href = "/v2/#/products";

        var value = jQuery("#productSearchBox")[0].value;

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

            self.productSvc.getProducts(data).subscribe(res => self.GetProductsCallback(res));
           // self.GetProductsCallback.bind(self));
        }
    }

    public productDetails(eventParams: any) {
        this.showProductGrid = false;
        this.product = eventParams.product;// may not needed
        this.productSvc.product = eventParams.product;

        this.router.navigate(['/products', { outlets: { 'productDetails': [eventParams.product.productId] } }],
            { queryParams: { activeTab: eventParams.activeTab } });
    }
};

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
