import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../../shared/services/toastr.service';
import { UserService } from '../../../shared/services/user.service';
import { Enums } from '../../../shared/enums/enums';
import { ProductService } from '../../services/product.service';
import { BasketService } from '../../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'product-accessories',
    templateUrl: './product-accessories.component.html',
})
export class ProductAccessoriesComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    @Input() product: any;
    @Input() userBasket: any;
    @Input() currentUser: any;
    public showPrices: boolean = false;
    public quoteId: any;
  
    constructor(private router: Router, private toastrSvc: ToastrService,
        private userSvc: UserService, private enums: Enums, private productSvc: ProductService,
        private basketSvc: BasketService
    ) { }

    ngOnChanges() {
        if (this.userBasket != undefined) {
            this.quoteId = this.userBasket.quoteId;
        }

        if (this.currentUser != undefined) {
            this.showPrices = this.currentUser.showPrices;
        }
    }

    ngOnInit() { }

    public accessoryDetails(event: any, accessory: any) {
        
        this.productSvc.product = accessory;

        this.router.navigate(['/product', { outlets: { 'productDetails': [accessory.productId] } }], { queryParams: { activeTab: 'product-overview' } });
    }
};