import {Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { ProductService } from '../services/product.service';

declare var jQuery: any;

@Component({
    selector: 'product-image',
    templateUrl: './product-image.component.html',
})
export class ProductImageComponent implements OnInit {

    @Input() product: any;
    public images: any = [];

    constructor(private toastrSvc: ToastrService, private userSvc: UserService,
        private productSvc: ProductService) {        
    }

    ngOnChanges() {
        this.images = [];
        if (this.product.image.hasImage) {
            this.images.push(this.product.image);
        }
        if (this.product.subProducts.length > 0) {

            for (var i = 0; i < this.product.subProducts.length; i++) {
                this.images.push(this.product.subProducts[i].image);
            }
        }   
    }

    ngOnInit() {
             
    }

    ngAfterViewInit() {
        this.setupImageToggleBtn();
    }

    ngAfterViewChecked() {
        
    }

    public setupImageToggleBtn() {
        jQuery(".product-img-btn").click(function (event: any) {

            //get productNumberIdx
            var targetId = event.target.id; // ex: "img-btn-FDXS09LVJURXS09LVJU-0"
            var productNumberIdx = targetId.substring(8, targetId.length)

            //find sub-product Imgabe Id by productNumberIdx
            var imgBtn = jQuery(event.target);
            //imgBtn.addClass("active");
            var parentDiv = imgBtn.parents(".sub-product-img-container");

            var imgId = "img-" + productNumberIdx;
            //var img = jQuery(parentDiv).find(imgId)[0];

            var subProductImgaes = jQuery(parentDiv).find(".sub-product-img");

            for (var i = 0; i < subProductImgaes.length; i++) {
                if (subProductImgaes[i].id == imgId) {
                    jQuery(subProductImgaes[i]).removeClass("hidden");
                } else {
                    jQuery(subProductImgaes[i]).addClass("hidden");
                }
            }

            var imgBtns = jQuery(parentDiv).find(".product-img-btn");
            jQuery(imgBtns).removeClass("active");

            imgBtn.addClass("active");

        });
    }
};