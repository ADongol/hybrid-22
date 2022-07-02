import { Component, OnInit, Input, Output, SimpleChanges, OnChanges, EventEmitter } from '@angular/core';
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
    selector: "quote-button-bar",
    templateUrl: "./quote-button-bar.component.html"
})
export class QuoteButtonBarComponent implements OnInit {

    @Input() quote: any;
    @Input() quoteItems: any;
    @Input() user: any;
    @Output() reloadDataEvent: EventEmitter<any> = new EventEmitter();
    @BlockUI() blockUI: NgBlockUI;

    public message: string;
    public actionUrl: string;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private quoteSvc: QuoteService,
        private enums: Enums) {
    }

    ngOnChanges(changes: SimpleChanges) {
        //console.log("ngOnChanges");
    }

    ngOnInit() { }

    openOrderForm() {
        //this.actionUrl = "/ProjectDashboard/OrderForm?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId;
        this.actionUrl = "/v3/#/orderForm/" + this.quote.projectId + "/" + this.quote.quoteId + "/new" ;
        //this.actionUrl = "/orderForm/" + this.quote.projectId + "/" + this.quote.quoteId + "/new";
        this.setupInventoryCheckModal();
    }

    requestDiscountMVC() {
        this.actionUrl = "/ProjectDashboard/DiscountRequest?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId;
        this.setupInventoryCheckModal();
    }

    requestDiscount() {
        this.actionUrl = "/v3/#/discountRequest/0/" + this.quote.projectId + "/" + this.quote.quoteId;
        this.setupInventoryCheckModal();
    }

    requestCommissionMVC() {
        if (this.quote.commissionRequestId != null && this.quote.commissionRequestStatusTypeId != this.enums.CommissionRequestStatusTypeEnum.Deleted) {
            this.actionUrl = "/ProjectDashboard/CommissionRequest?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId + "&commissionRequestId=" + this.quote.commissionRequestId;
        } else {
            this.actionUrl = "/ProjectDashboard/CommissionRequest?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId;
        }
        
        this.setupInventoryCheckModal();
    }

    requestCommission() {
        if (this.quote.commissionRequestId != null && this.quote.commissionRequestStatusTypeId != this.enums.CommissionRequestStatusTypeEnum.Deleted) {
            this.actionUrl = "/v3/#/commissionRequest/" + this.quote.commissionRequestId + "/" + this.quote.projectId + "/" + this.quote.quoteId;
        } else {
            this.actionUrl = "/v3/#/commissionRequest/0/" + this.quote.projectId + "/" + this.quote.quoteId;
        }

        this.setupInventoryCheckModal();
    }

    public setupInventoryCheckModal() {
        if (this.quoteItems.hasObsoleteAndUnavailableProduct) {
            this.message = "This quote contains product(s) which are Obsolete and Unavailable. Please review and revise product(s) list to continue processing the quote or contact your Daikin Sales Representative."
            jQuery("#inventoryCheckModal").modal({ backdrop: 'static', keyboard: false });
        }
        else if (this.quoteItems.hasObsoleteProduct || this.quoteItems.hasUnavailableProduct) {
            this.message = "This quote contains obsolete or unavailable product(s). Please review and revise product(s) list or contact your Daikin Sales Representative."
            jQuery("#inventoryCheckModal").modal({ backdrop: 'static', keyboard: false });
        }
        else {
            window.location.href = this.actionUrl;
            //this.router.navigateByUrl(this.actionUrl);
        }
    }

    public redirect() {
        window.location.href = this.actionUrl;
        //this.router.navigateByUrl(this.actionUrl);
    }

    public setQuoteActive() {
        var self = this;

        var data = {
            "ProjectId ": this.quote.projectId,
            "QuoteId": this.quote.quoteId           
        };
        
     
        this.blockUI.start('Loading...');

        this.quoteSvc.setQuoteActive(data).then((resp: any) => {
            if (resp.isok) {
                self.toastrSvc.displayResponseMessages(resp);
                this.blockUI.stop();
                
                //window.location.href = "/ProjectDashboard/ProjectQuotes/" + this.quote.projectId;
                self.reloadDataEvent.emit();
            } else {
                
                this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(error => {
            this.blockUI.stop();
            console.log(error);
        });
    }

    public deleteQuote() {
        var self = this;

        var data = {
            "ProjectId ": this.quote.projectId,
            "QuoteId": this.quote.quoteId
        };

       
        this.blockUI.start('Loading...');

        this.quoteSvc.deleteQuote(data).then((resp: any) => {
            if (resp.isok) {
                self.toastrSvc.displayResponseMessages(resp);
                this.blockUI.stop();

                //window.location.href = "/ProjectDashboard/ProjectQuotes/" + this.quote.projectId;
                self.reloadDataEvent.emit();
            } else {
                this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(error => {
            this.blockUI.stop();
            console.log(error);
        });
    }

    public undeleteQuote() {
        var self = this;

        var data = {
            "ProjectId ": this.quote.projectId,
            "QuoteId": this.quote.quoteId
        };

        //self.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');

        this.quoteSvc.undeleteQuote(data).then((resp: any) => {
            if (resp.isok) {
                self.toastrSvc.displayResponseMessages(resp);
                // self.loadingIconSvc.Stop(jQuery("#content"));
                this.blockUI.stop();

                //window.location.href = "/ProjectDashboard/ProjectQuotes/" + this.quote.projectId;
                self.reloadDataEvent.emit();
            } else {
                // self.loadingIconSvc.Stop(jQuery("#content"));
                this.blockUI.stop();

                self.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(error => {
            // self.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();

            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public quotePrintNoPrices() {
        //var url = "/ProjectDashboard/QuotePrint?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId + "&withCostPrices=false";
        var url = "/Document/QuotePrint/" + this.quote.projectId + "?quoteId=" + this.quote.quoteId;
        window.open(url, '_blank');
    }
    public quotePrintWithPrices() {
        //var url = "/ProjectDashboard/QuotePrint?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId + "&withCostPrices=true";
        var url = "/Document/QuotePrintWithCostPrice/" + this.quote.projectId + "?quoteId=" + this.quote.quoteId;
        window.open(url, '_blank');
    }
    public quoteDownloadNoPrices() {
        var url = "/ProjectDashboard/QuotePrintExcel?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId + "&withCostPrices=false";
        window.open(url, '_blank');

    }
    public quoteDownloadWithPrices() {
        var url = "/ProjectDashboard/QuotePrintExcel?projectId=" + this.quote.projectId + "&quoteId=" + this.quote.quoteId + "&withCostPrices=true";
        window.open(url, '_blank');

    }

    public duplicateQuote() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');

        this.quoteSvc.duplicateQuote(this.quote.projectId, this.quote.quoteId)
            .subscribe(resp => {
                if (resp.isok) {
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    this.blockUI.stop();

                    //redirect
                    this.router.navigateByUrl("/projectQuotes/" + this.quote.projectId);
                } else {
                    //return null;
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    this.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);
                }
            }, error => {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                this.blockUI.stop();

                console.log("Error: ", error);
            });
    }

};
