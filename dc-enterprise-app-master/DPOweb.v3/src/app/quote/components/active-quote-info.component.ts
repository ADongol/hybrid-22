import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../../account/services/account.service';
import { QuoteService } from '../services/quote.service';

declare var jQuery: any;

@Component({
    selector: "active-quote-info",
    templateUrl: "./active-quote-info.component.html"
})
export class ActiveQuoteInfoComponent implements OnInit {

    @Input() quote: any;
    @Input() user: any;
    @Output() showQuoteOverViewEvent: EventEmitter<any> = new EventEmitter();
    @Output() reloadDataEvent: EventEmitter<any> = new EventEmitter();
    @BlockUI() blockUI: NgBlockUI;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private quoteSvc: QuoteService,
        private enums: Enums) {

        //this.accountSvc.getUserLoginModel().then(this.getUserLoginModelCallback.bind(this));

        //this.accountSvc.getUserLoginModel()
        //    .subscribe(
        //    data => {
        //        this.user = data.model
        //    },
        //    err => console.log("Error: ", err)
        //    );

        //this.quote = this.route.snapshot.data['quoteModel'].model;
        //this.user = this.route.snapshot.data['currentUser'].model;

    }

    ngOnInit() { }

    public showQuoteOverview() {
        this.showQuoteOverViewEvent.emit();
    }

    public quoteRecalculate() {
        var self = this;

        var data = {
            "ProjectId": this.quote.projectId,
            "QuoteId": this.quote.quoteId,
            "RecalculationRequired": this.quote.recalculationRequired,
        }

        //self.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');

        this.quoteSvc.quoteRecalculate(data)
            .then((resp: any) => {
                if (resp.isok) {
                    //reload page
                    self.toastrSvc.displayResponseMessages(resp);
                    self.quote.recalculationRequired = resp.model.recalculationRequired;
                    //self.loadingIconSvc.Stop(jQuery("#content"));

                    this.blockUI.stop();

                    self.reloadDataEvent.emit();
                } else {
                    //self.loadingIconSvc.Stop(jQuery("#content"));
                    this.blockUI.stop();

                }
            }).catch(error => {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                //console.log('Retrieval error: ${error}');
                this.blockUI.stop();

                console.log(error);
            });
    }

    //public getCurrentUserCallback(resp: any) {
    //    if (resp.isok) {

    //        this.userSvc.currentUser = resp.model;

    //        for (let message of resp.messages.items) {
    //            if (message.type == 40) {// success
    //                this.toastrSvc.Success(message.text);
    //            }
    //        }
    //    } else {
    //        for (let message of resp.messages.items) {
    //            if (message.type == 10) {// error
    //                this.toastrSvc.Error(message.text);
    //            }
    //        }
    //    }

    //}
};
