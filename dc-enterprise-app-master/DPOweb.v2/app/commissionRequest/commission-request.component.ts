import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Rx';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../shared/services/user.service';
import { SystemAccessEnum } from '../shared/services/systemAccessEnum';
import { Enums } from '../shared/enums/enums';

import { AccountService } from '../account/services/account.service';
import { QuoteService } from '../quote/services/quote.service';
import { CommissionRequestService } from './services/commissionRequest.service';

import { UploadModule } from '@progress/kendo-angular-upload';
import { SelectEvent } from '@progress/kendo-angular-upload';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { FileInfo } from '@progress/kendo-angular-upload';

declare var jQuery: any;

@Component({
    selector: "commission-request",
    templateUrl: "app/commissionRequest/commission-request.component.html",
    styleUrls: ["app/commissionRequest/commission-request.component.css"]
})

export class CommissionRequestComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    public user: any;
    public quoteId: any;
    public projectId: any;
    public commissionRequestId: any;
    public commissionRequest: any;

    public canApproveCommissions: any;
    public commissionManuallyInput: boolean = false;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, 
        private userSvc: UserService, private accountSvc: AccountService,
        private quoteSvc: QuoteService, private commissionRequestSvc: CommissionRequestService,
        private systemAccessEnum: SystemAccessEnum, private enums: Enums,
        //private loadingIconSvc: LoadingIconService,
    ) {

        this.user = this.route.snapshot.data['currentUser'].model;
        this.quoteId = this.route.snapshot.paramMap.get('quoteId');
        this.projectId = this.route.snapshot.paramMap.get('projectId');
        this.commissionRequestId = this.route.snapshot.paramMap.get('commissionRequestId');
        if (this.commissionRequestId == 0) {
            this.commissionRequestId = null;
        }
    }

    ngOnInit() {
        this.getCommissionRequest();
        this.canApproveCommissions = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ApproveCommissionRequests);

        //this.calculateVRVCommission();
        //this.calculateSplitCommission();
        //this.calculateUnitaryCommission();
        //this.calculateLCPackageCommission();
    }

    public getCommissionRequest() {
        var self = this;
        this.commissionRequestSvc.getCommissionRequestModel(this.projectId, this.quoteId, this.commissionRequestId, null).then((resp: any) => {
            if (resp.isok) {
                self.commissionRequest = resp.model;
                //self.originalvalues = resp.model;
                self.calculateAll();

            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    selectCompetitorQuoteFile(e: SelectEvent) {
        
        this.commissionRequest.competitorQuoteFileName = e.files[0].name;
    } 

    public uploadEventHandler(e: UploadEvent) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.commissionRequest.quoteId,
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

    startupCostChange() {
        this.calculateTotals();
    }

    thirdPartyEquipmentCostsChange() {
        this.calculateTotals();
    }

    public calculateDiscountAmountVRV(event: any) {
        var self = this;

        //this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.requestedMultiplierVRV;
        var data = {
            MultiplierCategoryTypeId: 2,
            Multiplier: this.commissionRequest.requestedMultiplierVRV
        }

        this.commissionRequestSvc.getCommissionPercentage(data)
            .then((resp: any) => {
                if (resp.isok) {
                    self.commissionRequest.requestedCommissionPercentageVRV = resp.model.commissionPercentage;
                    self.calculateVRVCommission();
                    //self.commissionRequest.requestedCommissionVRV = self.commissionRequest.totalNetVRV * self.commissionRequest.requestedCommissionPercentageVRV / 100;
                    //self.commissionRequest.requestedNetMaterialValueVRV = self.commissionRequest.totalNetVRV - self.commissionRequest.requestedCommissionVRV;
                    //self.commissionRequest.requestedNetMaterialMultiplierVRV = self.commissionRequest.requestedNetMaterialValueVRV / self.commissionRequest.approvedTotalsCommission.totalListVRV;
                    //self.calculateTotals();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    public calculateVRVCommission() {
        //Purchase Order Amount
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.approvedMultiplierVRV;
            this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.approvedCommissionPercentageVRV;
            this.commissionRequest.requestedNetMaterialValueVRV = this.commissionRequest.totalNetVRV - this.commissionRequest.requestedCommissionVRV;
            this.commissionRequest.requestedNetMaterialMultiplierVRV = this.commissionRequest.requestedNetMaterialValueVRV / this.commissionRequest.approvedTotalsCommission.totalListVRV;
        } else {
            this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.requestedMultiplierVRV;
            this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.requestedCommissionPercentageVRV;
            this.commissionRequest.requestedNetMaterialValueVRV = this.commissionRequest.totalNetVRV - this.commissionRequest.requestedCommissionVRV;
            this.commissionRequest.requestedNetMaterialMultiplierVRV = this.commissionRequest.requestedNetMaterialValueVRV / this.commissionRequest.approvedTotalsCommission.totalListVRV;
        }
        //this.commissionRequest.totalNetVRV = this.commissionRequest.approvedTotalsCommission.totalListVRV * this.commissionRequest.requestedMultiplierVRV;

        //this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.requestedCommissionPercentageVRV / 100;
        //this.commissionRequest.requestedCommissionVRV = this.commissionRequest.totalNetVRV * this.commissionRequest.requestedCommissionPercentageVRV;
        //this.commissionRequest.requestedNetMaterialValueVRV = this.commissionRequest.totalNetVRV - this.commissionRequest.requestedCommissionVRV;
        //this.commissionRequest.requestedNetMaterialMultiplierVRV = this.commissionRequest.requestedNetMaterialValueVRV / this.commissionRequest.approvedTotalsCommission.totalListVRV;
        this.calculateTotals();
    }

    public calculateDiscountAmountSplit(event: any) {
        var self = this;

        //this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.requestedMultiplierSplit;
        var data = {
            MultiplierCategoryTypeId: 1,
            Multiplier: this.commissionRequest.requestedMultiplierSplit
        }

        this.commissionRequestSvc.getCommissionPercentage(data)
            .then((resp: any) => {
                if (resp.isok) {
                    self.commissionRequest.requestedCommissionPercentageSplit = resp.model.commissionPercentage;
                    self.calculateSplitCommission();
                    //self.commissionRequest.requestedCommissionSplit = self.commissionRequest.totalNetSplit * self.commissionRequest.requestedCommissionPercentageSplit / 100;
                    //self.commissionRequest.requestedNetMaterialValueSplit = self.commissionRequest.totalNetSplit - self.commissionRequest.requestedCommissionSplit;
                    //self.commissionRequest.requestedNetMaterialMultiplierSplit = self.commissionRequest.requestedNetMaterialValueSplit / self.commissionRequest.approvedTotalsCommission.totalListSplit;
                    //self.calculateTotals();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    public calculateSplitCommission() {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.approvedMultiplierSplit;
            this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.approvedCommissionPercentageSplit;
            this.commissionRequest.requestedNetMaterialValueSplit = this.commissionRequest.totalNetSplit - this.commissionRequest.requestedCommissionSplit;
            this.commissionRequest.requestedNetMaterialMultiplierSplit = this.commissionRequest.requestedNetMaterialValueSplit / this.commissionRequest.approvedTotalsCommission.totalListSplit;
        } else {
            this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.requestedMultiplierSplit;
            this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.requestedCommissionPercentageSplit;
            this.commissionRequest.requestedNetMaterialValueSplit = this.commissionRequest.totalNetSplit - this.commissionRequest.requestedCommissionSplit;
            this.commissionRequest.requestedNetMaterialMultiplierSplit = this.commissionRequest.requestedNetMaterialValueSplit / this.commissionRequest.approvedTotalsCommission.totalListSplit;
        }

        //this.commissionRequest.totalNetSplit = this.commissionRequest.approvedTotalsCommission.totalListSplit * this.commissionRequest.requestedMultiplierSplit;

        //this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.requestedCommissionPercentageSplit / 100;
        //this.commissionRequest.requestedCommissionSplit = this.commissionRequest.totalNetSplit * this.commissionRequest.requestedCommissionPercentageSplit;
        //this.commissionRequest.requestedNetMaterialValueSplit = this.commissionRequest.totalNetSplit - this.commissionRequest.requestedCommissionSplit;
        //this.commissionRequest.requestedNetMaterialMultiplierSplit = this.commissionRequest.requestedNetMaterialValueSplit / this.commissionRequest.approvedTotalsCommission.totalListSplit;
        this.calculateTotals();
    }

    public calculateDiscountAmountLCPackage(event: any) {
        var self = this;

        //this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.requestedMultiplierLCPackage;
        var data = {
            MultiplierCategoryTypeId: 4,
            Multiplier: this.commissionRequest.requestedMultiplierLCPackage
        }

        this.commissionRequestSvc.getCommissionPercentage(data)
            .then((resp: any) => {
                if (resp.isok) {
                    self.commissionRequest.requestedCommissionPercentageLCPackage = resp.model.commissionPercentage;
                    self.calculateLCPackageCommission();
                    //self.commissionRequest.requestedCommissionLCPackage = self.commissionRequest.totalNetLCPackage * self.commissionRequest.requestedCommissionPercentageLCPackage / 100;
                    //self.commissionRequest.requestedNetMaterialValueLCPackage = self.commissionRequest.totalNetLCPackage - self.commissionRequest.requestedCommissionLCPackage;
                    //self.commissionRequest.requestedNetMaterialMultiplierLCPackage = self.commissionRequest.requestedNetMaterialValueLCPackage / self.commissionRequest.approvedTotalsCommission.totalListLCPackage;
                    //self.calculateTotals();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    public calculateLCPackageCommission() {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.approvedMultiplierLCPackage;
            this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.approvedCommissionPercentageLCPackage;
            this.commissionRequest.requestedNetMaterialValueLCPackage = this.commissionRequest.totalNetLCPackage - this.commissionRequest.requestedCommissionLCPackage;
            this.commissionRequest.requestedNetMaterialMultiplierLCPackage = this.commissionRequest.requestedNetMaterialValueLCPackage / this.commissionRequest.approvedTotalsCommission.totalListLCPackage;
        } else {
            this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.requestedMultiplierLCPackage;
            this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.requestedCommissionPercentageLCPackage;
            this.commissionRequest.requestedNetMaterialValueLCPackage = this.commissionRequest.totalNetLCPackage - this.commissionRequest.requestedCommissionLCPackage;
            this.commissionRequest.requestedNetMaterialMultiplierLCPackage = this.commissionRequest.requestedNetMaterialValueLCPackage / this.commissionRequest.approvedTotalsCommission.totalListLCPackage;
        }
        //this.commissionRequest.totalNetLCPackage = this.commissionRequest.approvedTotalsCommission.totalListLCPackage * this.commissionRequest.requestedMultiplierLCPackage;

        //this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.requestedCommissionPercentageLCPackage / 100;
        //this.commissionRequest.requestedCommissionLCPackage = this.commissionRequest.totalNetLCPackage * this.commissionRequest.requestedCommissionPercentageLCPackage;
        //this.commissionRequest.requestedNetMaterialValueLCPackage = this.commissionRequest.totalNetLCPackage - this.commissionRequest.requestedCommissionLCPackage;
        //this.commissionRequest.requestedNetMaterialMultiplierLCPackage = this.commissionRequest.requestedNetMaterialValueLCPackage / this.commissionRequest.approvedTotalsCommission.totalListLCPackage;
        this.calculateTotals();
    }

    public calculateDiscountAmountUnitary(event: any) {
        var self = this;

        //Todo: Why do we have to do this?
        //this.commissionRequest.requestedMultiplier = this.commissionRequest.requestedMultiplierUnitary;

        //this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.requestedMultiplierUnitary;

        this.commissionRequestSvc.getUnitaryCommissionPercentage(this.commissionRequest)
            .then((resp: any) => {
                if (resp.isok) {
                    self.commissionRequest.requestedCommissionPercentageUnitary = resp.model.commissionPercentage;
                    self.calculateUnitaryCommission();
                    //self.commissionRequest.requestedCommissionUnitary = self.commissionRequest.totalNetUnitary * self.commissionRequest.requestedCommissionPercentageUnitary / 100;
                    //self.commissionRequest.requestedNetMaterialValueUnitary = self.commissionRequest.totalNetUnitary - self.commissionRequest.requestedCommissionUnitary;
                    //self.commissionRequest.requestedNetMaterialMultiplierUnitary = self.commissionRequest.requestedNetMaterialValueUnitary / self.commissionRequest.approvedTotalsCommission.totalListUnitary;
                    //self.calculateTotals();
                }
            })
            .catch(error => {
                console.log(error);
            });
    }

    public calculateUnitaryCommission() {
        if (this.commissionRequest.commissionRequestStatusTypeId == this.enums.CommissionRequestStatusTypeEnum.Approved) {
            this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.approvedMultiplierUnitary;
            this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.approvedCommissionPercentageUnitary;
            this.commissionRequest.requestedNetMaterialValueUnitary = this.commissionRequest.totalNetUnitary - this.commissionRequest.requestedCommissionUnitary;
            this.commissionRequest.requestedNetMaterialMultiplierUnitary = this.commissionRequest.requestedNetMaterialValueUnitary / this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        } else {
            this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.requestedMultiplierUnitary;
            this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.requestedCommissionPercentageUnitary;
            this.commissionRequest.requestedNetMaterialValueUnitary = this.commissionRequest.totalNetUnitary - this.commissionRequest.requestedCommissionUnitary;
            this.commissionRequest.requestedNetMaterialMultiplierUnitary = this.commissionRequest.requestedNetMaterialValueUnitary / this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        }

        //this.commissionRequest.totalNetUnitary = this.commissionRequest.approvedTotalsCommission.totalListUnitary * this.commissionRequest.requestedMultiplierUnitary;

        //this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.requestedCommissionPercentageUnitary / 100;
        //this.commissionRequest.requestedCommissionUnitary = this.commissionRequest.totalNetUnitary * this.commissionRequest.requestedCommissionPercentageUnitary;
        //this.commissionRequest.requestedNetMaterialValueUnitary = this.commissionRequest.totalNetUnitary - this.commissionRequest.requestedCommissionUnitary;
        //this.commissionRequest.requestedNetMaterialMultiplierUnitary = this.commissionRequest.requestedNetMaterialValueUnitary / this.commissionRequest.approvedTotalsCommission.totalListUnitary;
        this.calculateTotals();
    }

    public calculateTotals() {
        this.commissionRequest.totalNet = this.commissionRequest.totalNetVRV + this.commissionRequest.totalNetSplit + this.commissionRequest.totalNetUnitary + this.commissionRequest.totalNetLCPackage;
        this.commissionRequest.requestedMultiplier = this.commissionRequest.totalNet / this.commissionRequest.approvedTotalsCommission.totalList;
        this.commissionRequest.requestedCommissionTotal = this.commissionRequest.requestedCommissionVRV + this.commissionRequest.requestedCommissionSplit + this.commissionRequest.requestedCommissionUnitary + this.commissionRequest.requestedCommissionLCPackage;
        //this.commissionRequest.requestedCommissionPercentage = this.commissionRequest.requestedCommissionTotal / this.commissionRequest.totalNet * 100;
        this.commissionRequest.requestedCommissionPercentage = this.commissionRequest.requestedCommissionTotal / this.commissionRequest.totalNet;
        this.commissionRequest.requestedNetMaterialValue = this.commissionRequest.requestedNetMaterialValueVRV + this.commissionRequest.requestedNetMaterialValueSplit + this.commissionRequest.requestedNetMaterialValueUnitary + this.commissionRequest.requestedNetMaterialValueLCPackage;
        this.commissionRequest.requestedNetMaterialValueMultiplier = this.commissionRequest.requestedNetMaterialValue / this.commissionRequest.approvedTotalsCommission.totalList;

        this.commissionRequest.totalRevised = this.commissionRequest.totalNet + this.commissionRequest.startUpCosts + this.commissionRequest.thirdPartyEquipmentCosts;

    }

    public commissionPercentageVRVChange() {
        this.calculateVRVCommission();
    }

    public commissionPercentageSplitChange() {
        this.calculateSplitCommission();
    }

    public commissionPercentageLCPackageChange() {
        this.calculateLCPackageCommission();
    }

    public commissionPercentageUnitaryChange() {
        this.calculateUnitaryCommission();
    }


    public calculateAll() {
        this.calculateVRVCommission();
        this.calculateSplitCommission();
        this.calculateUnitaryCommission();
        this.calculateLCPackageCommission();
    }
    

    public submit() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');

        this.commissionRequestSvc.postCommissionRequest(this.commissionRequest).subscribe(
            (resp: any) => {
                if (resp.isok) {
                    //this.discountRequest = resp.model;
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);

                    //send Email notification
                    self.commissionRequestSvc.sendCommissionRequestEmail(self.commissionRequest).subscribe();

                    self.router.navigateByUrl("/quote/" + self.commissionRequest.quoteId + "/existingRecord");

                } else {
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();
                    self.toastrSvc.displayResponseMessages(resp);

                }

            },
            error => {
                console.log("Error: " + error);
            }
        );
    }

    public approve() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        self.blockUI.start('Loading...');

        this.commissionRequestSvc.approveCommissionRequest(this.commissionRequest).subscribe(
            (resp: any) => {
                if (resp.isok) {
                    self.commissionRequest = resp.model;

                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();
                    self.toastrSvc.displayResponseMessages(resp);

                    self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                    window.location.href = "/Userdashboard/CommissionRequests";

                } else {
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    self.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );
    }

    public reject() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');

        this.commissionRequestSvc.rejectCommissionRequest(this.commissionRequest).subscribe(
            (resp: any) => {
                if (resp.isok) {
                    self.commissionRequest = resp.model;

                    //self.loadingIconSvc.Stop(jQuery("#main-container"));

                    this.blockUI.stop();
                    self.toastrSvc.displayResponseMessages(resp);

                    self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                    window.location.href = "/Userdashboard/CommissionRequests";

                } else {
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));

                    this.blockUI.stop();
                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );

    }

    public delete() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');

        this.commissionRequestSvc.deleteCommissionRequest(this.commissionRequest).subscribe(
            (resp: any) => {
                if (resp.isok) {

                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    this.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);

                    self.commissionRequestSvc.sendApprovalRejectionEmail(self.commissionRequest).subscribe();
                    //window.location.href = "/Userdashboard/CommissionRequests";

                } else {
                    //self.loadingIconSvc.Stop(jQuery("#main-container"));
                    this.blockUI.stop();

                    self.toastrSvc.displayResponseMessages(resp);
                }
            },
            error => {
                console.log("Error: " + error);
            }
        );
    }
}