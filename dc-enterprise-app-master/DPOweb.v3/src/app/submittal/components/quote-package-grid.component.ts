
import {
    Component, OnInit, Input, Output, EventEmitter,
   ViewEncapsulation, ViewChild
} from '@angular/core'; 

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { saveAs } from '@progress/kendo-file-saver';
import { Observable } from 'rxjs/Rx';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { UploadModule } from '@progress/kendo-angular-upload';
import { SelectEvent } from '@progress/kendo-angular-upload';
import { UploadEvent } from '@progress/kendo-angular-upload';
import { SuccessEvent } from '@progress/kendo-angular-upload';
import { FileInfo } from '@progress/kendo-angular-upload';

import { SubmittalPackageService } from '../services/submittal-package.service';
import { ToastrService } from '../../shared/services/toastr.service';
import { UploadFilesModalComponent } from './upload-files-modal.component';
import { SubmittalPackageModel } from '../models/submittal-package';
import { QuoteItemListModel } from '../models/quoteItemList';
import { DocumentModel } from '../models/document';
import { User } from '../../shared/models/user';

declare var jQuery: any;
declare var toastr: any;

@Component({
    selector: 'quote-package-grid',
    templateUrl: './quote-package-grid.component.html',
    styleUrls: ['./quote-package-grid.component.css'],    
    encapsulation: ViewEncapsulation.None
})
export class QuotePackageGridComponent implements OnInit {

    @ViewChild('componentInsideModal') componentInsideModal: UploadFilesModalComponent;
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
    public getNotificationHandler(evt: any) {
        //console.log('message received');    
       
        this.quotePackageAttachedFiles = evt;
    }

    public refreshFileListHandler(evt: any) {
        //console.log('message received');
    
        this.quotePackageAttachedFiles = evt.quotePackageAttachedFiles;

        if (this.quotePackageAttachedFiles.length > 0)
            this.hasAttachedFiles = true;
    }

    public OpenModal() {
        this.componentInsideModal.open();
    }

    /**
     * On Form Submit by clicking on Create Package button
     * */
    public onSubmit() {
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
                        this.toastrSvc.Error(INTERNAL_SERVER_ERROR);
                    }
                );
            }
            else { 
                toastr.error(SUBMITTAL_GENERATION_FAILURE);
            }
        }
        else {
            toastr.error(CHECKBOXES_UNCHECKED_ERROR);
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

    public successEventHandler(e: SuccessEvent) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    }

    public errorEventHandler(e: any) {
       console.log("Error: " + e.response.statusText);
       this.toastrSvc.ErrorFadeOut(e.response.statusText);
    }

    public uploadCompleted() {
        this.submittalFileUpload = null;
    }

    /* Main Table Button Click Events */
    /* Checks all the checkboxes of that Row */
    public checkAllColumnCheckBoxes(event: any, rowId: number) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');
        if (event.target.checked) {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {

                if (parseInt(value.attributes.rowIndex.value) === rowId)
                    value.checked = true;
            });
        }
        else {
            Array.prototype.forEach.call(checkBoxList, function (value, index) {

                if (parseInt(value.attributes.rowIndex.value) === rowId ||
                    parseInt(value.attributes.rowIndex.value) === 0 )
                    value.checked = false;
            });
        }
    }

    /* Unchecks left most check box as well as the column header belong to the user clicked checkboxes column and header */
    public uncheckBothRowAndColumnHeaderCheckBoxes(rowId: number, colIdentifier: string) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');

        if (colIdentifier == SUBMITTAL_SHEETS) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_SUBMITTAL_SHEETS_HEADER)            
        }
        else if (colIdentifier == INSTALLATION_MANUAL) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_INSTALLATION_MANUAL_HEADER)
        }
        else if (colIdentifier == OPERATION_MANUAL) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_OPERATION_MANUAL_HEADER)
        }
        else if (colIdentifier == GUIDE_SPECS) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_GUIDE_SPECS_HEADER)
        }
        else if (colIdentifier == PRODUCT_BROCHURE) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_PRODUCT_BROCHURE_HEADER)             
        }
        else if (colIdentifier == REVIT_DRAWING) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_REVIT_DRAWING_HEADER)          
        }
        else if (colIdentifier == CAD_DRAWING) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_CAD_DRAWING_HEADER)           
        }
        else if (colIdentifier == PRODUCT_FLYER) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_PRODUCT_FLYER_HEADER)            
        }
    }

    public uncheckColumnHeaderAndRowIdentifier(checkBoxList: any, rowId: number, colIdentifier: string, chkBoxHeaderName: string)
    {
        Array.prototype.forEach.call(checkBoxList, function (value, index) {
            if ((value.name == CHECKBOX_REFERENCE_ROW &&
                (parseInt(value.attributes.rowIndex.value) === rowId)) ||
                (value.name == chkBoxHeaderName))
            {
                value.checked = false;
            }
        });
    }

    /* checks/unchecks all check boxes of that particular column */
    public checkAllRowCheckBoxes(event: any) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');

        if (event.target.id == SUBMITTAL_SHEETS) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_SUBMITTAL_SHEETS);
        }
        else if (event.target.id == INSTALLATION_MANUAL) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_INSTALLATION_MANUAL);
        }
        else if (event.target.id == OPERATION_MANUAL) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_OPERATION_MANUAL);           
        }
        else if (event.target.id == GUIDE_SPECS) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_GUIDE_SPECS);             
        }
        else if (event.target.id == PRODUCT_BROCHURE) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_PRODUCT_BROCHURE);             
        }
        else if (event.target.id == REVIT_DRAWING) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_REVIT_DRAWING);           
        }
        else if (event.target.id == CAD_DRAWING) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_CAD_DRAWING);         
        }
        else if (event.target.id == PRODUCT_FLYER) {
            this.checkOrUncheckCheckboxes(event, checkBoxList, CHECKBOX_PRODUCT_FLYER);           
        }
    }

    public checkOrUncheckCheckboxes(event: any, checkBoxList: any, chkBoxName: any) {
        Array.prototype.forEach.call(checkBoxList, function (value, index) {
            if (value.name == chkBoxName) {
                if (event.target.checked)
                    value.checked = true;
                else
                    value.checked = false;
            }
        });
    }
}

/**
 * *********** Constants ***************
 */
const PRODUCT_FLYER = 'productFlyer';
const CAD_DRAWING = 'cadDrawing';
const REVIT_DRAWING = 'revitDrawing';
const PRODUCT_BROCHURE = 'productBrochure';
const GUIDE_SPECS = 'guideSpecs';
const OPERATION_MANUAL = 'operationManual';
const INSTALLATION_MANUAL = 'installationManual';
const SUBMITTAL_SHEETS = 'submittalSheets';

const CHECKBOX_PRODUCT_FLYER = "chkBoxProductFlyer";
const CHECKBOX_CAD_DRAWING = "chkBoxCadDrawingRow";
const CHECKBOX_REVIT_DRAWING = "chkBoxRevitDrawingRow";
const CHECKBOX_PRODUCT_BROCHURE = 'chkBoxProductBrochureRow';
const CHECKBOX_GUIDE_SPECS = 'chkBoxGuideSpecsRow';
const CHECKBOX_OPERATION_MANUAL = 'chkBoxOperationManualRow';
const CHECKBOX_INSTALLATION_MANUAL = 'chkBoxInstallationManualRow';
const CHECKBOX_SUBMITTAL_SHEETS = 'chkBoxSubmittalSheetsRow';
const CHECKBOX_REFERENCE_ROW = "chkBoxReferenceRow";

const CHK_PRODUCT_FLYER_HEADER = "chkProductFlyerHeader";
const CHK_CAD_DRAWING_HEADER = "chkCadDrawingHeader";
const CHK_REVIT_DRAWING_HEADER = "chkRevitDrawingHeader";
const CHK_PRODUCT_BROCHURE_HEADER = "chkProductBrochureHeader";
const CHK_GUIDE_SPECS_HEADER = "chkGuideSpecsHeader";
const CHK_OPERATION_MANUAL_HEADER = "chkOperationManualHeader";
const CHK_INSTALLATION_MANUAL_HEADER = "chkInstallationManualHeader";
const CHK_SUBMITTAL_SHEETS_HEADER = "chkSubmittalSheetsHeader";

const INTERNAL_SERVER_ERROR = "Something went wrong. Please try again later.";
const SUBMITTAL_GENERATION_FAILURE = "Couln't generate submittal package. Please try again.";
const CHECKBOXES_UNCHECKED_ERROR = "At least one check box is required to be checked to generate submittal package."


/*********************
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
***////////

 /****
DELETE AFTER THREE MONTHS by 03/01/2019

//Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
//            || (value.name == "chkInstallationManualHeader")) {
//        value.checked = false;
//    }
//});//

 //Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
//            || (value.name == "chkOperationManualHeader")) {
//        value.checked = false;
//    }
//});

  //Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if ((value.name == "chkBoxReferenceRow" && (parseInt(value.attributes.rowIndex.value) === rowId))
//            || (value.name == "chkGuideSpecsHeader")) {
//        value.checked = false;
//    }
//});
  
//Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if (value.name == "chkBoxSubmittalSheetsRow") {
//        if (event.target.checked)
//            value.checked = true;
//        else
//            value.checked = false;
//    }
//});

 //Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if (value.name == "chkBoxInstallationManualRow") {
//        if (event.target.checked) {
//            value.checked = true;
//        } else {
//            value.checked = false;
//        }
//    }
//});

 //Array.prototype.forEach.call(checkBoxList, function (value, index) {
//    if (value.name == "chkBoxOperationManualRow") {
//        if (event.target.checked) {
//            value.checked = true;
//        } else {
//            value.checked = false;
//        }
//    }
//});

****/
 