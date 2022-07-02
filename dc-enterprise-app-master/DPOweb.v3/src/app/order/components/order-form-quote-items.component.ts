import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from '../../shared/services/toastr.service'; 
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';
import { QuoteService } from '../../quote/services/quote.service';

declare var jQuery: any;

@Component({
    selector: 'order-form-quote-items',
    templateUrl: './order-form-quote-items.component.html'
})
export class OrderFormQuoteItemsComponent implements OnInit {

    @Input() quoteId: any;
    public quoteItems: any;
    @BlockUI() blockUI: NgBlockUI;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService,
        private userSvc: UserService, private enums: Enums, 
        private quoteSvc: QuoteService, private http: Http
    ) { }

    ngOnInit() {
        this.quoteSvc.getQuoteItems(this.quoteId).then((resp: any) => {
            if (resp.isok) {
                this.quoteItems = resp.model;
            }
        }).catch(error => {
            console.log(error);
        });
    }
}