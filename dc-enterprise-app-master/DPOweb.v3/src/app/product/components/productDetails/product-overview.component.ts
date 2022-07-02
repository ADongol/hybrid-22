import { Component, OnInit, OnChanges, SimpleChanges, Input, ElementRef } from '@angular/core';

import { ToastrService } from '../../../shared/services/toastr.service'; 
import { UserService } from '../../../shared/services/user.service'; 
import { ProductService } from '../../services/product.service';
import { BasketService } from '../../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'product-overview',
    templateUrl: './product-overview.component.html',
})
export class ProductOverviewComponent implements OnInit {
    @Input() product: any;
    @Input() userBasket: any;
    @Input() currentUser: any;

    constructor(private elementRef: ElementRef, private toastrSvc: ToastrService,
        private userSvc: UserService, private productSvc: ProductService,
        private basketSvc: BasketService) {
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log("ProductDetail-OverView Component: ngOnChange");
    }

    ngOnInit() {}
};