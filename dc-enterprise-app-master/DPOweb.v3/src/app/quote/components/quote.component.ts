import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';

import { AccountService } from '../../account/services/account.service';
import { QuoteService } from '../services/quote.service';
import { ProductService } from '../../product/services/product.service';

declare var jQuery: any;

@Component({
    selector: "quote",
    templateUrl: "./quote.component.html"
})
export class QuoteComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;

    public quoteId: any;
    public recordState: any = false;
    public quote: any;
    public user: any;
    public quoteItems: any;
    public overViewActive: boolean;
    public quoteItemsActive: boolean;
    public quoteDiscountRequestsActive: boolean;
    public quoteCommissionRequestsActive: boolean;
    public quoteOrderActive: boolean;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private quoteSvc: QuoteService,
        private productSvc: ProductService, private enums: Enums) {
            

        this.quote = this.route.snapshot.data['quoteModel'].model;
        this.user = this.route.snapshot.data['currentUser'].model;
        
    }

    ngOnInit() {

        let path = this.route.snapshot.url[0].path;
        this.quoteId = this.route.snapshot.paramMap.get('id');        
        this.recordState = this.route.snapshot.paramMap.get('recordState');

        this.setActiveTab(path);
    }

    public setActiveTab(path: string) {

        if (path == 'quote') {
            this.overViewActive = true;
            this.quoteItemsActive = false;
            this.quoteDiscountRequestsActive = false;
            this.quoteCommissionRequestsActive = false;
            this.quoteOrderActive = false;

            this.getQuoteItems(this.quote.quoteId);
        } else if (path == 'quoteItems') {
            this.overViewActive = false;
            this.quoteItemsActive = true;
            this.quoteDiscountRequestsActive = false;
            this.quoteCommissionRequestsActive = false;
            this.quoteOrderActive = false;

            if (this.route.snapshot.data['quoteItems'] == undefined) {
                this.getQuoteItems(this.quote.quoteId);
            } else {
                this.quoteItems = this.route.snapshot.data['quoteItems'].model;
            }
        }
    }

    public showQuoteOverview() {
        jQuery('#k-tabstrip-tab-0').click();
    }

    public showQuoteItems() {
        jQuery('#k-tabstrip-tab-1').click();
    }

    public getQuoteItems(quoteId: any) {
        var self = this;

        console.log("get QuoteItems");

        self.quoteSvc.getQuoteItemsModel(this.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                self.quoteItems = resp.model;
            }
        }).catch(error => {
            console.log(error);
        });
    }

    public browseProductsWithQuoteId() {
        this.productSvc.browseProductsWithQuoteId(this.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                //self.quoteItems = resp.model;
                window.location.href = "/v3/#/product";
            }
        }).catch(error => {
            console.log(error);
        });
    }

    public reloadData() {
        this.reloadQuote();
        this.reloadQuoteItems();
    }
    public reloadQuote() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));

        self.quoteSvc.getQuote(self.quote.projectId, self.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                self.quote = resp.model;
                //self.gridIsModified = false;
                //jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            } else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public reloadQuoteItems() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#content"));
        //this.blockUI.start('Loading...');

        self.quoteSvc.getQuoteItemsModel(self.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
               // self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
                self.quoteItems = resp.model;
                //self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            } else {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                //this.blockUI.stop();
            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }
};
