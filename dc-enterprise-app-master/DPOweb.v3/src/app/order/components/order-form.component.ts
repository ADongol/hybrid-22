import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable'; 
import { Router, ActivatedRoute } from '@angular/router'; 

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { ProjectService } from '../../project/services/project.service';
import { OrderService } from '../services/order.service';
import { OrderConstants } from '../order-constants';

import {
    UploadModule, SelectEvent, UploadEvent, SuccessEvent, RemoveEvent,
    FileInfo, FileRestrictions
} from '@progress/kendo-angular-upload';

declare var jQuery: any;
declare var bootbox: any;

const MAX_PO_FILE_SIZE = 1000000;
const MAX_ADDITIONAL_DOCS_SIZE = 3000000;
const INVALID_MAX_FILE_SIZE = "invalidMaxFileSize";

@Component({
    selector: 'order-form',
    templateUrl: './order-form.component.html',
    styleUrls: ["./order-form.component.css"],
})
export class OrderFormComponent implements OnInit {
    //@ViewChild('datepicker') datepicker: any;

    public user: any;
    public order: any;
    public recordState: any;
    public isOrderSubmitted: boolean = false;
 
    public poUploadUrl: any;
    public additionalDocsUploadUrl: any;
    public removeUploadedDocsUrl: any;

    public additionalDocsArray: any;
    public poAttachment: Array<FileInfo>;
    public additionalDocsAttachment: Array<FileInfo>;
    public additionalDocsFileSize: any = 0;  

    public releaseDateMin: any;
    public submitConfirmMessage: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,  
        private enums: Enums, private http: Http,
        private projectSvc: ProjectService, private orderSvc: OrderService,         
    ) {         

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
            this.additionalDocsArray = this.order.additionalDocsAttachment;
        }

        //immediate api calls for upload and remove of po attachments
        this.poUploadUrl = OrderConstants.PO_UPLOAD_URL;
        this.additionalDocsUploadUrl = OrderConstants.ADDITIONAL_DOCS_UPLOAD_URL;
        this.removeUploadedDocsUrl = OrderConstants.REMOVE_UPLOADED_DOCS_URL;
    }

    ngOnInit() {
        //this.recordState = this.route.snapshot.paramMap.get('recordState');

        //Check if this order has been submitted.
        //If not submitted, remove all po attachment related docs if any uploaded
         this.orderSvc.checkIfOrderIsSubmitted(this.order.quoteId)
            .subscribe(resp => {
                if (resp.isok)
                    this.isOrderSubmitted = true;
            });

         if (!this.isOrderSubmitted) {
             this.orderSvc.removeUploadedDocsOnCancel(this.order.quoteId)
                 .subscribe(resp => console.log(resp));
         }
    }

    public selectEventHandler(e: SelectEvent) {
        this.order.poAttachmentFileName = e.files[0].name;
    }

    public uploadEventHandler(e: UploadEvent) {

        e.data = {
            QuoteId: this.order.quoteId,
        };
    }

    successEventHandler(e: SuccessEvent) {
        var self = this;

        if (e.response.ok == true) {
            //console.log("The " + e.operation + " was successful!");
        }
    }

    removeEventHandler(e: RemoveEvent) {
         
        e.data = {
            QuoteId: this.order.quoteId,
            FileName: e.files[0].name
        };
    }

    errorEventHandler(e: any) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    }

    fileSizeRestrictions: FileRestrictions = {
        maxFileSize: MAX_ADDITIONAL_DOCS_SIZE
    };

    //restriction of file size for po attachment
    poFileSizeRestriction: FileRestrictions = {
        maxFileSize: MAX_PO_FILE_SIZE
    };
  
    submit() {
        this.order.shipToName = this.order.project.shipToName;
        var self = this;

        if (self.order.hasConfiguredModel) {
            this.submitConfirmMessage = OrderConstants.CONFIRM_CONFIGURED_SUBMIT_MSG;
        } else {
            this.submitConfirmMessage = OrderConstants.SUBMIT_ORDER_CONFIRM_MSG;
        }

        if (self.additionalDocsAttachment != undefined || self.additionalDocsAttachment != null)
        {
            if (self.additionalDocsAttachment.length > 0) {              
                this.order.additionalDocsAttachment = self.additionalDocsAttachment.map(x => x.name);
            }
        }

        bootbox.confirm(self.submitConfirmMessage, function (result) {

            if (result) {
                bootbox.dialog({
                    message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Order processing ...</div>'
                });

                //Post Order
                self.orderSvc.postOrder(self.order)
                    .subscribe(
                        resp => {
                            if (resp.isok) {
                                
                                bootbox.hideAll();
                                //Send order email notification
                                self.orderSvc.sendOrderEmail(self.order).subscribe();

                                bootbox.alert(OrderConstants.BOOTBOX_ALERT_MSG, function () {
                                    self.router.navigateByUrl("/quote/" + self.order.quoteId + "/existingRecord");
                                });
                            } else {
                                
                                bootbox.hideAll();
                                self.toastrSvc.displayResponseMessages(resp);
                            }
                        },
                        err => { console.log("Error: ", err) });
            }
        });
    }

    //when user cancels, remove all the files or attachment that might have been uploaded
    onCancel()
    {
        this.orderSvc.removeUploadedDocsOnCancel(this.order.quoteId)
            .subscribe(resp => console.log(resp));

        this.router.navigateByUrl("/quote/" + this.order.quoteId + "/existingRecord");
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
            this.toastrSvc.ErrorFadeOut(OrderConstants.CHECK_RELEASE_DATE);
        }
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

    //public poUploadEventHandler(e: UploadEvent) {
        //if (this.additionalDocsFileSize > MAX_ADDITIONAL_DOCS_SIZE) {
        //    let messageText = OrderConstants.EXCEEDED_MAX_FILE_SIZE;
        //    this.toastrSvc.ErrorFadeOut(messageText);
        //}
        //else {
            //this.additionalDocsFileSize = this.additionalDocsFileSize + e.files[0].size;
        //    e.data = {
        //        QuoteId: this.order.quoteId,
        //    };
        //}
    //}

    //public poRemoveEventHandler(e: RemoveEvent) {
        //no need to reduce the size of a file that didn't upload in the first place
        //if (this.additionalDocsFileSize > 0 && 
        //    (e.files[0].validationErrors[0] != INVALID_MAX_FILE_SIZE ||
        //         e.files[0].state != 0)) {
        //    this.additionalDocsFileSize = this.additionalDocsFileSize - e.files[0].size;
        //}

    //    e.data = {
    //        QuoteId: this.order.quoteId,
    //        FileName: e.files[0].name
    //    };
    //}

};

