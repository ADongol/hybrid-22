import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from '../../../shared/services/toastr.service';
 
import { UserService } from '../../../shared/services/user.service'; 
import { Enums } from '../../../shared/enums/enums';
import { ProductService } from '../../services/product.service';
import { BasketService } from '../../../basket/services/basket.service';

declare var jQuery: any;

@Component({
    selector: 'related-documents-accessories',
    templateUrl: './related-documents-accessories.component.html',
})
export class RelatedDocsAndAssrComponent implements OnInit {

    @Input() product: any;
    //@Input() userBasket: any;
    public relatedIndoorUnit: any;
    public relatedOutdoorUnit: any;

    constructor(private router: Router, private toastrSvc: ToastrService,  
        private userSvc: UserService, public enums: Enums,
        private productSvc: ProductService, private basketSvc: BasketService ) 
    {
    }    

    ngOnInit() {
        
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

        if (this.product.productTypeId == this.enums.ProductTypeEnum.Accessory) { // accessories
            jQuery('#product-accessories a').text("PARENT PRODUCTS");
        } else {
            jQuery('#product-accessories a').text("RELATED ACCESSORIES");
        }   
    } 

    ngAfterViewInit() {
        jQuery('#viewAllAccessoriesBtn').click(function () {
            jQuery('#productOverviewTab').hide();
            jQuery('#productRelatedAccessoriesTab').show();
            jQuery('#productSpecsTab').hide();

            jQuery('#productDetailsTabs li').each(function () {
                jQuery(this).removeClass('active');
            });

            jQuery('#product-accessories').addClass('active');
        });
    }     

    public productDetails(event: any, product: any) {
        this.productSvc.product = product;

        this.router.navigate(['/product', { outlets: { 'productDetails': [product.productId] } }]);
    }
};