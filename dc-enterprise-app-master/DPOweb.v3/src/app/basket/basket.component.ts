import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from '../shared/services/toastr.service';
import { UserService } from '../shared/services/user.service';
import { ProductService } from '../product/services/product.service';
import { BasketService } from './services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'basket',
    templateUrl: './basket.component.html'
})
export class BasketComponent implements OnInit {
    @Input() userBasket: any;
    @Input() productFamilyId: any;
    @Input() productModelTypeId: any;
    @Input() productData: any;
    public basketQuoteId: any;

    constructor(private toastrSvc: ToastrService, private userSvc: UserService,
        private productSvc: ProductService, private basketSvc: BasketService) {
    }

    ngOnInit() {

        this.productSvc.getBasketQuoteId().then(this.getBasketQuoteIdCallback.bind(this));
    }

    ngDoCheck() {

    }

    ngAfterViewChecked() {
        var hash = window.location.hash;

        if (hash.includes("#/product/(productDetails:")) {
            jQuery("#addProductsToQuoteBtn").hide();
        } else {
            jQuery("#addProductsToQuoteBtn").show();
        }
    }

    public getBasketQuoteIdCallback(resp: any) {
        if (resp.isok) {
            this.basketQuoteId = resp.model;

        }
    }
};