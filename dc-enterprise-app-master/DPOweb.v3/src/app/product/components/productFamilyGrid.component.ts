import { Component, OnInit } from '@angular/core';
import { IProductFamily } from '../models/productFamily';
import { ProductFamilyService } from '../services/productFamily.service';

import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import {
    GridComponent,
    GridDataResult,
    DataStateChangeEvent
} from '@progress/kendo-angular-grid';

@Component({
    selector: 'dk-productFamilies',
    templateUrl: './productFamilyGrid.component.html',
    styleUrls: ['./productList.component.css'],
    providers: [ProductFamilyService]
})

export class ProductFamilyGridComponent implements OnInit {
    pageTitle: string = 'Product Families';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    listFilter: string = 'All';
    productFamilies: IProductFamily[];
    errorMessage: string;

    constructor(private _productFamilyService: ProductFamilyService) { }

    ngOnInit() {
        this.getProductFamilies();
    }

    getProductFamilies(): void {
        this._productFamilyService.getProductFamilies()
            .subscribe(data => this.productFamilies = data,
            error => this.errorMessage = <any>error);
    }
}
