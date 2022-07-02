import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';

import { ToastrService } from '../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../shared/services/user.service';
import { SystemAccessEnum } from '../shared/services/systemAccessEnum';
import { Enums } from '../shared/enums/enums';

import { ProjectService } from '../projects/services/project.service';
import { OrderService } from './services/order.service';
declare var jQuery: any;

import { UploadModule } from '@progress/kendo-angular-upload';
import { SelectEvent } from '@progress/kendo-angular-upload';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { FileInfo } from '@progress/kendo-angular-upload';

@Component({
    selector: 'order-form',
    templateUrl: 'app/order/order-form.component.html',
    styleUrls: ["app/order/order-form.component.css"],
})
export class OrderFormComponent implements OnInit {
    //@ViewChild('datepicker') datepicker: any;

    public user: any;
    public order: any;
    public recordState: any;

    //public poAttachment: any;
    public poUploadUrl: any;
    public poAttachment: Array<FileInfo>;

    //public projectInfoIsValid : boolean = true;
    //public orderInfoIsValid : boolean = true;

    public releaseDateMin: any;
    public submitConfirmMessage: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService,
        private userSvc: UserService, private systemAccessEnum: SystemAccessEnum,
        private enums: Enums, private http: Http,
        private projectSvc: ProjectService, private orderSvc: OrderService,
        //private loadingIconSvc: LoadingIconService,
    ) {

        //this.activeTab = this.route.snapshot.url[0].path;

        this.user = this.route.snapshot.data['currentUser'].model;
        this.order = this.route.snapshot.data['orderFormModel'].model;
        this.recordState = this.route.snapshot.paramMap.get('recordState');

        if (this.recordState == "new") {
            if (this.order.hasConfiguredModel) {
                this.releaseDateMin = new Date();
                this.releaseDateMin.setDate((new Date()).getDate() + 28);

                this.order.orderReleaseDate = this.releaseDateMin;
                //this.order.orderReleaseDate = new Date();
                //this.order.orderReleaseDate.setDate((new Date()).getDate() + 28);
            } else {
                this.order.orderReleaseDate = null;
            }
        } else {// submitted
            this.order.orderReleaseDate = new Date(Date.parse(this.order.orderReleaseDate));
        }

        //this.order.orderReleaseDate = new Date(Date.parse(this.order.orderReleaseDate)); // 1/1/1
        //this.order.orderReleaseDate = new Date();// current date

        this.poUploadUrl = "/api/Order/UploadPOAttachment";
    }

    ngOnInit() {
        //this.recordState = this.route.snapshot.paramMap.get('recordState');
    }

    public selectEventHandler(e: SelectEvent) {
        //console.log("File selected");
        this.order.poAttachmentFileName = e.files[0].name;

    }
    public uploadEventHandler(e: UploadEvent) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.order.quoteId,
        };
    }

    successEventHandler(e: SuccessEvent) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
            //this.toastrSvc.Success("Quote '" + this.quote.title + "' has been updated.");
            //this.reloadDataEvent.emit();
            //$('button.close[data-dismiss=modal]').click();
        }
    }

    errorEventHandler(e: any) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    }

    //====Deprecated: This is to fix kendo date picker view jump on open===
    //public datePickerOpen(): void {
    //    setTimeout(this.jumpToDatePicker.bind(this), 50); // wait 0.05 sec
    //}

    //public jumpToDatePicker() {
    //    //location.href = "#orderReleaseDate";
    //    //this.datepicker.open();
    //    document.getElementById("orderReleaseDate").scrollIntoView();
    //}
    //======================================================

    submit() {
        this.order.shipToName = this.order.project.shipToName;
        var self = this;

        if (self.order.hasConfiguredModel) {
            this.submitConfirmMessage = "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>"
                + "<p>At the point model creation submittal is accepted, any changes or cancellations to an order with Factory Install Options will incur a 25% cancellation fee.</p>"
        } else {
            this.submitConfirmMessage = "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>";
        }

        bootbox.confirm(self.submitConfirmMessage, function (result) {
            if (result) {

                //self.loadingIconSvc.Start(jQuery("#main-container"));
                //this.blockUI.start('Loading...');

                bootbox.dialog({ message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Order processing ...</div>' });
                //Post Order
                self.orderSvc.postOrder(self.order)
                    .subscribe(
                        resp => {
                            if (resp.isok) {
                                //this.blockUI.stop();
                                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                                bootbox.hideAll();
                                //Send order email notification
                                self.orderSvc.sendOrderEmail(self.order).subscribe();

                                bootbox.alert("<p>Thank you for submitting the order. Your Daikin Customer Service Representative will review the order and get back to you within 24 hours.<br/> <br/>To cancel the order, please contact your Daikin Customer Service Representative.</p>", function () {
                                    self.router.navigateByUrl("/quote/" + self.order.quoteId + "/existingRecord");
                                });

                                //if (self.order.hasConfiguredModel) {
                                //    bootbox.alert("<p>At the point model creation submittal is accepted, any changes or cancellations to an order with Factory Install Options will incur a 25% cancellation fee.</p>", function () {
                                //        self.router.navigateByUrl("/quote/" + self.order.quoteId + "/existingRecord");
                                //    });
                                //} else {
                                //    bootbox.alert("<p>Thank you for submitting the order. Your Daikin Customer Service Representative will review the order and get back to you within 24 hours.<br/> <br/>To cancel the order, please contact your Daikin Customer Service Representative.</p>", function () {
                                //        self.router.navigateByUrl("/quote/" + self.order.quoteId + "/existingRecord");
                                //    });
                                //}

                            } else {
                                //this.blockUI.stop();
                                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                                bootbox.hideAll();
                                self.toastrSvc.displayResponseMessages(resp);
                            }
                        },
                        err => {
                            //this.blockUI.stop();
                            //self.loadingIconSvc.Stop(jQuery("#main-container"));
                            console.log("Error: ", err)
                        });
            }
        });
    }

    //for testing purpose
    sendOrderEmail() {
        this.orderSvc.sendOrderEmail(this.order).subscribe();
    }

    stateChange(value: any) {
        for (var i = 0; i < this.order.project.shipToAddress.states.items.length; i++) {
            if (this.order.project.shipToAddress.states.items[i].value == value) {
                this.order.project.shipToAddress.stateName = this.order.project.shipToAddress.states.items[i].text;
            }
        }
    }

    checkReleaseDate() {
        if (this.order.hasConfiguredModel && (this.order.orderReleaseDate < this.releaseDateMin)) {
            this.toastrSvc.ErrorFadeOut("Please enter order release date at least 28 days from today.");
        }
    }

};

