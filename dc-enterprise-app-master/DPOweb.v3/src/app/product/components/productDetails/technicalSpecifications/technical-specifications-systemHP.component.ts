//This component is not used.Delete after 01/ 06 / 2017
import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { ToastrService } from '../../../../shared/services/toastr.service';
import { UserService } from '../../../../shared/services/user.service';
import { ProductService } from '../../../services/product.service';
import { BasketService } from '../../../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'technical-specifications-systemHP',
    templateUrl: './technical-specifications-systemHP.component.html',
})
export class TechnicalSpecificationsSystemHPComponent implements OnInit {

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
    }
};