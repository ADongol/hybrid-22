
import {
    Component, OnInit, Input, Output, EventEmitter,
   ViewEncapsulation, ViewChild
} from '@angular/core';
 
import { NgProgress } from 'ngx-progressbar';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import * as FileSaver from "file-saver";
import * as saveAs from 'file-saver';

import { Observable } from 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

import { UploadModule } from '@progress/kendo-angular-upload';
import { SelectEvent } from '@progress/kendo-angular-upload';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { FileInfo } from '@progress/kendo-angular-upload';

import { SubmittalPackageService } from './services/submittal-package.service';
import { ToastrService } from '../../app/shared/services/toastr.service';
import { ModalComponent } from '../shared/modal/modal.component';
import { SubmittalPackageModel } from '../submittal-package/models/submittal-package';
import { QuoteItemListModel } from './models/quoteItemList';
import { DocumentModel } from './models/document';
import { User } from '../shared/models/user';

declare var jQuery: any;

@Component({
    selector: 'quote-package-grid',
    templateUrl: 'app/submittal-package/quote-package-grid.component.html',
    styleUrls: ['app/submittal-package/quote-package-grid.component.css'],    
    encapsulation: ViewEncapsulation.None
})
export class QuotePackageGridComponent implements OnInit {
    @ViewChild('componentInsideModal') componentInsideModal: ModalComponent;
    @ViewChild("tblSubmittalPackage") tblSubmittalPackage;

    @BlockUI() blockUI: NgBlockUI;

    @Input() quoteItemsList: QuoteItemListModel[];
    @Input() userModel: User;
    @Input() quotePackageAttachedFiles: any = [];
    @Input() hasAttachedFiles: boolean;
    @Input() possibleDocsList: any;
    @Input() quoteId: any;
    @Input() projectId: any;
 
    public submittalPackageUrl: string;
    public submittalFileUpload: Array<FileInfo>;
    public submittalModel: SubmittalPackageModel;
    public msg: string;
    public uploadEventData: any;
    public title: string;
    public buttonLabel: string;
    public quoteIdentifier: string;
    public width: any = 0;
    
    constructor(private submittalService: SubmittalPackageService,
        private ngProgress: NgProgress,
        private toastrSvc: ToastrService,
        private dragulaSvc: DragulaService,
    ) {

        this.submittalPackageUrl = "/api/SubmittalPackage/QuotePackageAttachFile";   

        const bag: any = this.dragulaSvc.find('section-bag');
        if (bag !== undefined) this.dragulaSvc.destroy('section-bag');
        this.dragulaSvc.setOptions('section-bag', { revertOnSpill: true }); 
    }     

    ngOnInit() {    
        this.title = "Upload New File";  
        this.quoteIdentifier = this.quoteId;   
         
        this.dragulaSvc
            .drag
            .subscribe(value => {
                this.msg = `Dragging the ${value[1].innerText}!`;
            });

        this.dragulaSvc
            .drop
            .subscribe(value => {
                this.msg = `Dropped the ${value[1].innerText}!`;

                setTimeout(() => {
                    this.msg = '';
                }, 1000);
            }); 
    }     

    //ngOnDestroy() {
    //    if (this.dragulaSvc.find('container') !== undefined) {
    //        this.dragulaSvc.destroy('container');
    //    }
    //}

    /**
     * Event emitter receipt from child components
     **/
    private getNotificationHandler(evt: any) {
        //console.log('message received');    
       
        this.quotePackageAttachedFiles = evt;
    }

    private refreshFileListHandler(evt: any) {
        //console.log('message received');
    
        this.quotePackageAttachedFiles = evt.quotePackageAttachedFiles;

        if (this.quotePackageAttachedFiles.length > 0)
            this.hasAttachedFiles = true;
    }

    private OpenModal() {
        this.componentInsideModal.open();
    }

    /**
     * On Form Submit by clicking on Create Package button
     * */
    private onSubmit() {
        //this.blockUI.start('Loading...');
        //this.ngProgress.start();

        var submittalModel = new SubmittalPackageModel();

        submittalModel.quoteId = this.quoteId; //"724134023730921472";
        submittalModel.projectId = this.projectId; //"724133966570946560";

        var quotePackageCheckedItems = jQuery("#submittal-package-table")
            .find("tbody input[type=checkbox]:checked").map(function () {
                return this.value;
        }).get();

        if (quotePackageCheckedItems.length > 0) {

            jQuery("#progressbarModal").modal({ backdrop: 'static', keyboard: false }) ;

            let quotePackageItemList = quotePackageCheckedItems.map(x => x.split('-'));
            let mappedPackageItems: any = [];

            quotePackageItemList.forEach((value: string, key: string) => {
                let productId: string = value[0];
                let documentTypeId: string = value[1];

                mappedPackageItems.push({ productId, documentTypeId });
            });

            submittalModel.productsAndDocuments = mappedPackageItems; //quote package item list   
            submittalModel.businessLogoUrl = this.userModel.businessLogoUrl; //pass the business logo to print it in cover page

            var attachedFileValues = jQuery("#attachedfiles_table")
                .find("tbody input[type=checkbox]:checked").map(function () {
                    return this.value;
            }).get();

            let attachedFileList: any = [];

            attachedFileValues.forEach((value: string, key: string) => {
                let filename: string = value;
                let absoultePath: string = null;
                let description: string = null;
                let documentId: string = null;
                let documentTypeId: number = 5;
                let productId: string = null;
                let productNumber: string = null;
                let hasImage: string = null;
                let url: string = null;
                let siteFinityUrl: string = null;
                let name: string = null;
                let rank: number = 0;
                let fileExtension: string = null;

                attachedFileList.push({
                    filename, absoultePath, description, documentId, documentTypeId, productId,
                    productNumber, hasImage, url, siteFinityUrl, name, rank, fileExtension
                })
            });

            submittalModel.quotePackageAttachedFiles = attachedFileList; //attached File List
          
            //Call api through submittal service
            if (submittalModel.productsAndDocuments.length > 0) {

                this.runProgressBar();

                this.submittalService.createQuotePackage(submittalModel)
                    .subscribe((data: any) => {

                        //const blob = data._body;
                        let filename = "Download.zip";
                        const blob = new Blob([data._body], { type: 'application/zip' });

                        data.headers._headers.forEach((value, index) => {
                            if (index == 'content-disposition') {
                                value.forEach(obj => {
                                    var stringArr = obj.split(";").map(item => item.trim());
                                    filename = stringArr[1].replace("filename=", "");
                                    filename = filename.replace(/["]+/g, '');
                                });
                            }
                        });

                        saveAs(blob, filename);

                        jQuery("#progressbarModal").modal('hide');
                        
                    },
                    (err: any) => {
                        jQuery("#progressbarModal").modal('hide');

                        this.toastrSvc.Error("Something went wrong. Please try again later.");
                    }
                );
            }
            else {
                //this.ngProgress.done();
                //this.blockUI.stop();

                toastr.error("Couln't generate submittal package. Please try again.")
            }
        }
        else {
            //this.ngProgress.done();
            //this.blockUI.stop();

            toastr.error("Couln't generate submittal package. Please check required boxes before creating package.")
        }
    }

    public runProgressBar() {
        Observable.timer(0, 100)
            .takeWhile(() =>
                this.isWidthWithinLimit()).subscribe(() => {
                    this.width = this.width + 1;
                })
    }

    public isWidthWithinLimit() {
        if (this.width === 98) {
            return false;
        } else {
            return true;
        }
    }
  
    /**
     *  File Upload Event Handlers
     **/
    public uploadEventHandler(e: UploadEvent) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.quoteId
        };       

        this.uploadEventData = e;
    }

    private successEventHandler(e: SuccessEvent) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    }

    private errorEventHandler(e: any) {
       console.log("Error: " + e.response.statusText);
       this.toastrSvc.ErrorFadeOut(e.response.statusText);
    }

    public uploadCompleted() {
        this.submittalFileUpload = null;
    }

    /* Main Table Button Click Events */
    /* Checks all the checkboxes of that Row */
    private checkAllColumnCheckBoxes(event: any, rowId: number) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');
        if (event.target.checked) {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {

                if (parseInt(value.attributes.rowIndex.value) === rowId)
                    value.checked = true;
            });
        }
        else {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {

                if (parseInt(value.attributes.rowIndex.value) === rowId || parseInt(value.attributes.rowIndex.value) === 0)
                    value.checked = false;
            });
        }
    }

    /* Unchecks left most check box as well as the column header belong to the user clicked checkboxes column and header */
    private uncheckBothRowAndColumnHeaderCheckBoxes(rowId: number, colIdentifier: string) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');

        if (colIdentifier == 'submittalSheets') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkSubmittalSheetsHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'installationManual') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkInstallationManualHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'operationManual') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkOperationManualHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'guideSpecs') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkGuideSpecsHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'productBrochure') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkProductBrochureHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'revitDrawing') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkRevitDrawingHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'cadDrawing') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkCadDrawingHeader")) {
                    value.checked = false;
                }
            });
        }
        else if (colIdentifier == 'productFlyer') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
                        || (value.name == "chkProductFlyerHeader")) {
                    value.checked = false;
                }
            });
        }
    }

    /* checks/unchecks all check boxes of that particular column */
    private checkAllRowCheckBoxes(event: any) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');
        if (event.target.id == 'submittalSheets') {
            //checkBoxList.chkBoxSubmittalSheetsRow.checked = true;
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxSubmittalSheetsRow") {
                    if (event.target.checked)
                        value.checked = true;
                    else
                        value.checked = false;
                }
            });
        }
        else if (event.target.id == 'installationManual') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxInstallationManualRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'operationManual') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxOperationManualRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'guideSpecs') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxGuideSpecsRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'productBrochure') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxProductBrochureRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'revitDrawing') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxRevitDrawingRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'cadDrawing') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxCadDrawingRow") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
        else if (event.target.id == 'productFlyer') {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {
                if (value.name == "chkBoxProductFlyer") {
                    if (event.target.checked) {
                        value.checked = true;
                    } else {
                        value.checked = false;
                    }
                }
            });
        }
    }
}


//** JQUERY WAY OF DOING

//jQuery("input[name='chkReferenceRow'][rowIndex='" + rowId + "']").prop('checked', false);
//jQuery("input[name='chkSubmittalSheetsHeader']").prop('checked', false);


//    //jQuery("input[rowIndex='" + rowId + "']").prop('checked', true);
//else {
//    jQuery("input[rowIndex='" + rowId + "']").prop('checked', false);
//    jQuery("input[rowIndex='0']").prop('checked', false);
//}           

//ngAfterViewChecked() {
//    //default all checkboxes of files table to checked
//    if (this.quotePackageAttachedFiles.length > 0)
//        jQuery("input[name='chkAllAttachedFiles']").prop('checked', true);

//    jQuery("#attachedfiles_table tbody tr td input[name=chkFileRow]").prop('checked', true);
//}

 
