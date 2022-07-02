/*
    Deprecated!
    Not working after upgrade kendo grid
*/

import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Rx';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';

import { AccountService } from '../../account/services/account.service';
import { QuoteService } from '../services/quote.service';

declare var jQuery: any;

@Component({
    selector: "tag-edit-popup",
    templateUrl: "./tag-edit-popup.component.html"
})
export class TagEditPopupComponent implements OnInit {
    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService, 
        private accountSvc: AccountService, private quoteSvc: QuoteService,
        private enums: Enums) {
    }

    @BlockUI() blockUI: NgBlockUI;
    @Input() quote: any;
    @Input() quoteItem: any;
    public oldTagsValue: any;
    public modalId: any;
    public modalTarget: any;

    ngOnInit() {
        this.modalId = this.quoteItem.quoteItemId;
        this.modalTarget = "#" + this.modalId;
        this.oldTagsValue = this.quoteItem.tags;
    }

    public closeTagEditor() {
        this.quoteItem.tags = this.oldTagsValue;
    }

    public saveTagUpdate() {
        var self = this;
     
        var data = {
            'QuoteId': this.quoteItem.quoteId,
            'Items': [this.quoteItem]
        };

        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');

        this.quoteSvc.adjustQuoteItems(data).then((resp: any) => {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();

                self.toastrSvc.displayResponseMessages(resp);
                self.oldTagsValue = self.quoteItem.tags;
            } else {
                self.toastrSvc.displayResponseMessages(resp);
               // self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();
            }
        }).catch(error => {
            console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }
}