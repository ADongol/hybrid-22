
import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../shared/services/user.service';
import { SystemAccessEnum } from '../shared/services/systemAccessEnum';
import { Enums } from '../shared/enums/enums';

import { ProjectService } from '../projects/services/project.service';
import { QuoteService } from '../quote/services/quote.service';
declare var jQuery: any;

@Component({
    selector: 'project-quotes',
    styles: ['/deep/ .k-grid-content .k-button {margin: 0px} /deep/ .k-list .k-item:hover{background-color: white}'],
    templateUrl: 'app/project/projectQuotes.component.html'

})
export class ProjectQuotesComponent implements OnInit {

    //public project: any;
    //public projectQuotes: any;
    //public user: any;

    @BlockUI() blockUI: NgBlockUI;

    @Input() project: any;
    @Input() projectQuotes: any;
    @Input() user: any;

    @Output() reloadDataEvent: EventEmitter<any> = new EventEmitter();

    //private showActionWindow: boolean = false;

    actionOptions: Array<any> = [{}];


    public defaultItem: { text: string, value: number } = { text: "Select ...", value: null };

    constructor(private router: Router, private route: ActivatedRoute, private toastrSvc: ToastrService,
        private userSvc: UserService, private systemAccessEnum: SystemAccessEnum, private http: Http,
        private quoteSvc: QuoteService, private projectSvc: ProjectService) {
    }

    ngOnInit() {
        
        //this.actionOptions = [{
        //    text: 'Export Quote',
        //    url: "/ProjectDashboard/QuotePrintExcel?projectId=" + this.project.projectId + "&quoteId=" + this.project.quoteId + "&withCostPrices=true"
        //}, {
        //    text: 'Edit Quote',
        //    url: "/v2/#/quoteEdit/" + this.project.projectId + "/" + this.project.quoteId
        //}, {
        //    text: 'Duplicate Quote',
        //    url: "/ProjectDashboard/QuoteDuplicate?projectId=" + this.project.projectId + "&quoteId=" + this.project.quoteId
        //}];
    }

    //public cancel() {
    //}

    //public submit() {

    //}

    //public actionWindowToggle(): void {
    //    this.showActionWindow = !this.showActionWindow;

    //}

    public setQuoteActive(quote: any) {
        var self = this;

        var data = {
            "ProjectId ": this.project.projectId,
            "QuoteId": quote.quoteId
        };

        //self.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');

        this.quoteSvc.setQuoteActive(data).then((resp: any) => {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                this.blockUI.stop();

                self.toastrSvc.displayResponseMessages(resp);
                self.reloadData();
            } else {
                //self.loadingIconSvc.Stop(jQuery("#content"));
                this.blockUI.stop();

                self.toastrSvc.displayResponseMessages(resp);
            }
        }).catch((error: any) => {
            //self.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();

            console.log(error);
        });
    }

    public reloadData() {
        this.reloadDataEvent.emit();
    }


    public duplicateQuote(projectId: any, quoteId: any) {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');

        this.quoteSvc.duplicateQuote(projectId, quoteId)
            .subscribe(resp => {
                if (resp.isok) {
                    self.reloadData();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();
                } else {
                    //return null;
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);
                }
            }, error => {
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.blockUI.stop();

                console.log("Error: ", error);
            });
    }


};

