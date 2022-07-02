import { Component, OnInit, Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { QuoteService } from '../../quote/services/quote.service';

@Component({
    selector: 'order-item-products',
    templateUrl: './order-item-products.component.html',
    styleUrls: ['./order-item-products.component.css']
})
export class OrderItemProductsComponent implements OnInit {
    @Input() quoteId: string;
    public orderItemProducts: any = [];

    constructor(private http: Http, private quoteSvc: QuoteService)
    { }

    ngOnInit() {
        this.getOrderItemProducts(this.quoteId);
    }

    private getOrderItemProducts(quoteId: string) {
        this.quoteSvc.getQuoteItems(quoteId)
            .then((resp: any) => {
                if (resp.isok) {
                    this.orderItemProducts = resp.model;
                }
            }).catch(error => {
                console.log(error);
        });
    }
}