import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpRequest } from '@angular/common/http';
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
import { DiscountRequestService } from './services/discountRequest.service';
declare var jQuery: any;

import { UploadModule } from '@progress/kendo-angular-upload';
import { SelectEvent } from '@progress/kendo-angular-upload';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { FileInfo } from '@progress/kendo-angular-upload';

@Component({
    selector: 'discount-request',
    templateUrl: 'app/discountRequest/discount-request.component.html',
    styleUrls: ["app/discountRequest/discount-request.component.css"]
})
export class DiscountRequestComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;

    public user: any;
    public quoteId: any;
    public projectId: any;
    public discountRequestId: any;
    public discountRequest: any;
    //public competitorQuoteFiles: Array<FileInfo>;

    //public viewOnly: boolean;
    //public pendingRequest: boolean;

    public canApproveDiscounts: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private systemAccessEnum: SystemAccessEnum,
        private enums: Enums, private http: Http,
        private projectSvc: ProjectService, private discountRequestSvc: DiscountRequestService
        //private loadingIconSvc: LoadingIconService,
    ) {

        this.user = this.route.snapshot.data['currentUser'].model;
        this.quoteId = this.route.snapshot.paramMap.get('quoteId');
        this.projectId = this.route.snapshot.paramMap.get('projectId');
        this.discountRequestId = this.route.snapshot.paramMap.get('discountRequestId');

        this.discountRequestSvc.getDiscountRequest(this.discountRequestId, this.projectId, this.quoteId).subscribe(
            (resp: any) => {
                if (resp.isok){
                    this.discountRequest = resp.model;

                    //if (this.discountRequest.discountRequestStatusTypeId != 0) {
                    //    this.viewOnly = true;
                    //}

                    //this.discountRequest.grossMarginMarkUp = this.discountRequest.standardTotals.totalCommissionPercentage;
                    this.discountRequest.grossMarginMarkUp = this.discountRequest.standardTotals.grossMarginMarkUp;

                    //this.calculateStandardGrossProfit();//remove
                    //this.calculateRevisedGrossProfit();//remove

                    this.calculateRevisedTotalSell();

                    if (this.discountRequest.discountRequestStatusTypeId == 0) {
                        this.discountRequest.orderPlannedFor = null;
                    } else {
                        this.discountRequest.orderPlannedFor = new Date(Date.parse(this.discountRequest.orderPlannedFor));
                    }
                    
                    this.discountRequest.project.estimatedDelivery = new Date(Date.parse(this.discountRequest.project.estimatedDelivery));
                }
                
            },
            error => {
                console.log("Error: "+ error);
            }
        );
    }

    ngOnInit() {
        this.canApproveDiscounts = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ApproveDiscounts);
    }

    hasCompetitorPriceChange(event: any) {
        if (event == false)
        {
            this.discountRequest.competitorPrice = null;
        }
    }

    hasCompetitorQuoteChange(event: any) {
    }

    hasCompetitorLineComparsionChange(event: any) {
    }

    selectCompetitorQuoteFile(e: SelectEvent) {
        //this.competitorQuoteFiles = e.files;
        //this.discountRequest.competitorQuoteFile = e.files[0];
        this.discountRequest.competitorQuoteFileName = e.files[0].name;
    }

    selectLineComparsionFile(e: SelectEvent) {
        //this.discountRequest.competitorLineComparsionFile = e.files[0];
        this.discountRequest.competitorLineComparsionFileName = e.files[0].name;
    }

    public uploadEventHandler(e: UploadEvent) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.discountRequest.quoteId,
        };
    }

    successEventHandler(e: SuccessEvent) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    }

    errorEventHandler(e: any) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    }

    //competitorQuoteFileChange(e: any) {
    //    //var files = e.srcElement.files;
    //    this.discountRequest.competitorQuoteFile = e.srcElement.files[0];

    //    //let formData: FormData = new FormData();
    //    //formData.append('competitorQuoteFile', e.srcElement.files[0], e.srcElement.files[0].name);
        
    //}

    //public test(event: any) {
    //    this.discountRequest.requestedDiscountVRV = event / 100;
    //}

    startupCostChange() {
        this.calculateRevisedTotalSell();
    }

    //Kendo numeric input
    //calculateDiscountAmountVRV(event: any) {
    //    //update Net Material 
    //    this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.approvedTotals.totalNetVRV * (1 - this.discountRequest.requestedDiscountVRV);
    //    //update Net Multiplier
    //    this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.approvedTotals.totalListVRV;
    //    //show/update Discount Ammount
    //    this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.approvedTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;

    //    this.calculateTotalDiscount();
    //}

    //HTML numeric input
    calculateDiscountAmountVRV(value: any) {
        this.discountRequest.requestedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.requestedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;

        this.calculateTotalDiscount();
    }

    calculateApprovedDiscountAmountVRV(value: any) {
        this.discountRequest.approvedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.approvedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;

        this.calculateTotalApprovedDiscount();
    }

    calculateDiscountAmountSplit(value: any) {
        this.discountRequest.requestedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.requestedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;

        this.calculateTotalDiscount();
    }

    calculateApprovedDiscountAmountSplit(value: any) {
        this.discountRequest.approvedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.approvedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;

        this.calculateTotalApprovedDiscount();
    }

    calculateDiscountAmountUnitary(value: any) {
        this.discountRequest.requestedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.requestedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;

        this.calculateTotalDiscount();
    }

    calculateApprovedDiscountAmountUnitary(value: any) {
        this.discountRequest.approvedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.approvedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;

        this.calculateTotalApprovedDiscount();
    }

    calculateDiscountAmountLCPackage(value: any) {
        this.discountRequest.requestedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.requestedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;

        this.calculateTotalDiscount();
    }

    calculateApprovedDiscountAmountLCPackage(value: any) {
        this.discountRequest.approvedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.approvedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;

        this.calculateTotalApprovedDiscount();
    }

    calculateTotalDiscount() {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
            this.discountRequest.approvedTotals.totalDiscountAmountSplit +
            this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
            this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;

        this.discountRequest.approvedTotals.netMaterialValue =
            this.discountRequest.approvedTotals.netMaterialValueVRV +
            this.discountRequest.approvedTotals.netMaterialValueSplit +
            this.discountRequest.approvedTotals.netMaterialValueUnitary +
            this.discountRequest.approvedTotals.netMaterialValueLCPackage;

        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;

        this.discountRequest.requestedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        //This is to fix javascript rounding issue. Ex: 823.72/2940.25 = 0.2799999997 instead of 0.28
        this.discountRequest.requestedDiscount = Math.round(this.discountRequest.requestedDiscount * 100000) / 100000;
               
        this.calculateRevisedTotalSell();
        this.calculateRevisedGrossProfit();

    }

    calculateTotalApprovedDiscount() {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
            this.discountRequest.approvedTotals.totalDiscountAmountSplit +
            this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
            this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;

        this.discountRequest.approvedTotals.netMaterialValue =
            this.discountRequest.approvedTotals.netMaterialValueVRV +
            this.discountRequest.approvedTotals.netMaterialValueSplit +
            this.discountRequest.approvedTotals.netMaterialValueUnitary +
            this.discountRequest.approvedTotals.netMaterialValueLCPackage;

        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;

        this.discountRequest.approvedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        //This is to fix javascript rounding issue. Ex: 823.72/2940.25 = 0.2799999997 instead of 0.28
        this.discountRequest.approvedDiscount = Math.round(this.discountRequest.approvedDiscount * 100000) / 100000;

        //this.calculateRevisedGrossProfit();
        this.calculateRevisedTotalSell();

    }

    //calculateStandardGrossProfit() {//This is done on server
    //    //this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.standardTotals.totalCommissionPercentage * this.discountRequest.standardTotals.totalNet;
    //    //this.discountRequest.standardTotals.totalCommissionAmount = this.discountRequest.standardTotals.totalCommissionPercentage * this.discountRequest.standardTotals.totalNet;

    //    //This is done on server
    //    //this.discountRequest.standardTotals.totalCommissionAmount = this.discountRequest.standardTotals.grossMarginMarkUp * this.discountRequest.standardTotals.totalNet;
    //}

    calculateRevisedGrossProfit() {
        //this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.grossMarginMarkUp * this.discountRequest.approvedTotals.netMaterialValue;
        //this.calculateRevisedTotalSell();

        this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.approvedTotals.totalSell - this.discountRequest.approvedTotals.netMaterialValue;
    }

    recalculateRevisedGrossProfit(value: any) {
        this.discountRequest.grossMarginMarkUp = value / 100;

        //this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.grossMarginMarkUp * this.discountRequest.approvedTotals.netMaterialValue;

        this.calculateRevisedTotalSell();
        this.calculateRevisedGrossProfit();
                
    }

    calculateRevisedTotalSell() {
        //this.discountRequest.approvedTotals.totalSell =
        //    this.discountRequest.quote.totalFreight +
        //    this.discountRequest.startUpCosts +
        //    this.discountRequest.approvedTotals.totalCommissionAmount +
        //    this.discountRequest.approvedTotals.netMaterialValue;

        if (this.discountRequest.quote.isGrossMargin) {// Gross Margin
            this.discountRequest.approvedTotals.totalSell = (this.discountRequest.quote.totalFreight + this.discountRequest.startUpCosts + this.discountRequest.approvedTotals.netMaterialValue) / (1 - this.discountRequest.grossMarginMarkUp);
        } else {// Markup
            this.discountRequest.approvedTotals.totalSell = (this.discountRequest.quote.totalFreight + this.discountRequest.startUpCosts + this.discountRequest.approvedTotals.netMaterialValue) * (1 + this.discountRequest.grossMarginMarkUp);
        }

        this.calculateRevisedGrossProfit();
        
    }

    submit() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');

        this.discountRequestSvc.postDiscountRequest(this.discountRequest).subscribe(
            (resp: any) => {
                if (resp.isok) {
                    //this.discountRequest = resp.model;
                    self.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);

                    //send Email notification
                    self.discountRequestSvc.sendDiscountRequestEmail(self.discountRequest).subscribe();

                    self.router.navigateByUrl("/quote/" + self.discountRequest.quoteId + "/existingRecord");

                } else {
                    self.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );
    }

    approve() {
        var self = this;

        self.blockUI.start('Loading...');
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.discountRequestSvc.approveDiscountRequest(this.discountRequest).subscribe(
            (resp: any) => {
                if (resp.IsOK) {

                    self.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);
                    
                    window.location.href = "/Userdashboard/DiscountRequests";

                } else {
                    self.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );
    }

    reject() {
        var self = this;

        this.blockUI.start('Loading...');
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.discountRequestSvc.rejectDiscountRequest(this.discountRequest).subscribe(
            (resp: any) => {
                if (resp.IsOK) {
                    self.blockUI.stop();
                    ///self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);

                    window.location.href = "/Userdashboard/DiscountRequests";

                } else {
                    self.blockUI.stop();
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );
    }

    delete() {
    }

    print() {
    }

    export() {
    }


    //====Deprecated: This is to fix kendo date picker view jump on open event===
    //public datePickerOpen(): void {
    //    setTimeout(this.jumpToDatePicker.bind(this), 10); // wait 0.01 sec
    //}

    //public jumpToDatePicker() {
    //    document.getElementById("orderIssueDate").scrollIntoView();
    //}
    //======================================================

    //onSubmit() {
    //    //const req = new HttpRequest('POST', '/api/DiscountRequest/PostDiscountRequest', this.discountRequest.competitorQuoteFile, {
    //    //    reportProgress: false;
    //    //});

    //    //let formData: FormData = new FormData();
    //    //formData.append('competitorQuoteFile', this.discountRequest.competitorQuoteFile, this.discountRequest.competitorQuoteFile.name);
    //    //this.discountRequestSvc.postDiscountRequest(formData).subscribe();

    //}
}