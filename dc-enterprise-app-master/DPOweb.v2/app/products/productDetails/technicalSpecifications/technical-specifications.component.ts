﻿//This component is not used.Delete after 01/ 06 / 2017
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ToastrService } from '../../../shared/services/toastr.service';
 
import { UserService } from '../../../shared/services/user.service';
import { SystemAccessEnum } from '../../../shared/services/systemAccessEnum';

import { ProductService } from '../../services/product.service';
import { BasketService } from '../../../basket/services/basket.service';
declare var jQuery: any;

@Component({
    selector: 'technical-specifications',
    templateUrl: 'app/products/productDetails/technicalSpecifications/technical-specifications.component.html',
})

export class TechnicalSpecificationsComponent implements OnInit {
    @Input() specifications: any;
    @Input() userBasket: any;
    public specs: any = [];

    constructor(private elementRef: ElementRef, private toastrSvc: ToastrService,  
        private userSvc: UserService, private systemAccessEnum: SystemAccessEnum,
        private productSvc: ProductService, private basketSvc: BasketService
    ) {

    } 

    ngOnInit() {
        for (var key in this.specifications.all) {
            this.specs.push(this.specifications.all[key]);
        }
    }
};