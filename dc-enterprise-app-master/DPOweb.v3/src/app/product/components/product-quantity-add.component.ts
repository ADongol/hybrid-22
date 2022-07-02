import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from '../../shared/services/toastr.service';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../../shared/services/user.service';
import { ProductService } from '../services/product.service';
import { BasketService } from '../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'product-quantity-add',
    templateUrl: './product-quantity-add.component.html',
})
export class ProductQuantityAddComponent implements OnInit {

    @Input() product: any;
    @BlockUI() blockUI: NgBlockUI; 

    constructor(private toastrSvc: ToastrService, 
        private userSvc: UserService, private productSvc: ProductService,
        private basketSvc: BasketService,
        //private loadingIconSvc: LoadingIconService,
    ) {
    } 

    ngOnInit() {
    }     

    public addProductToQuote() {
        var self = this;

        if (this.product.quantity > 0) {
            var data = {
                "ProductId": this.product.productId,
                "Quantity": this.product.quantity
            }

            this.blockUI.start('Loading...');
            //self.loadingIconSvc.Start(jQuery("#productPageContainer"));

            this.productSvc.addProductToQuote(data).then((resp: any) => {
                this.blockUI.stop();
               // self.loadingIconSvc.Stop(jQuery("#productPageContainer"));
                
                this.product.quantity = 0;

                self.basketSvc.getBasket().then((resp: any) => {
                    if (resp.isok) {
                        //self.userBasket = resp.model;
                        self.basketSvc.userBasket = resp.model;
                        jQuery("#quoteItemCount").text(resp.model.quoteItemCount + " items in active quote");
                    }
                });

                self.toastrSvc.displayResponseMessages(resp);
            });
        }
    }
};