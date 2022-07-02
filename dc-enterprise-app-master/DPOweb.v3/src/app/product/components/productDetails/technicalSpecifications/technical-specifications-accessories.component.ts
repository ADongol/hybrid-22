import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ToastrService } from '../../../../shared/services/toastr.service';
 import { UserService } from '../../../../shared/services/user.service'; 

import { ProductService } from '../../../services/product.service';
import { BasketService } from '../../../../basket/services/basket.service';
declare var jQuery: any;

@Component({
    selector: 'technical-specifications-accessories',
    templateUrl: './technical-specifications-accessories.component.html',
})
export class TechnicalSpecificationsAccessoriesComponent implements OnInit {

    @Input() product: any;
    @Input() userBasket: any;
    public specs: any = [];

    constructor(private elementRef: ElementRef, private toastrSvc: ToastrService,  
        private userSvc: UserService, private productSvc: ProductService,
        private basketSvc: BasketService
    ) {
    }

    ngOnInit() {

        this.specs = this.product.specifications.all;

        //for (var key in this.product.specifications.all) {
        //    var item: any = {
        //        key: key,
        //        value: this.product.specifications.all[key]
        //    }
        //    this.specs.push(item);
        //}

    }

};