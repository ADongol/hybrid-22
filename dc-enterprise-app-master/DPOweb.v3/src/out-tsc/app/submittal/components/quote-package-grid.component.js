"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ng_block_ui_1 = require("ng-block-ui");
var kendo_file_saver_1 = require("@progress/kendo-file-saver");
var Rx_1 = require("rxjs/Rx");
var ng2_dragula_1 = require("ng2-dragula/ng2-dragula");
var submittal_package_service_1 = require("../services/submittal-package.service");
var toastr_service_1 = require("../../shared/services/toastr.service");
var upload_files_modal_component_1 = require("./upload-files-modal.component");
var submittal_package_1 = require("../models/submittal-package");
var user_1 = require("../../shared/models/user");
var QuotePackageGridComponent = /** @class */ (function () {
    function QuotePackageGridComponent(submittalService, toastrSvc, dragulaSvc) {
        this.submittalService = submittalService;
        this.toastrSvc = toastrSvc;
        this.dragulaSvc = dragulaSvc;
        this.quotePackageAttachedFiles = [];
        this.width = 0;
        this.submittalPackageUrl = "/api/SubmittalPackage/QuotePackageAttachFile";
        var bag = this.dragulaSvc.find('section-bag');
        if (bag !== undefined)
            this.dragulaSvc.destroy('section-bag');
        this.dragulaSvc.setOptions('section-bag', { revertOnSpill: true });
    }
    QuotePackageGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.title = "Upload New File";
        this.quoteIdentifier = this.quoteId;
        this.dragulaSvc
            .drag
            .subscribe(function (value) {
            _this.msg = "Dragging the " + value[1].innerText + "!";
        });
        this.dragulaSvc
            .drop
            .subscribe(function (value) {
            _this.msg = "Dropped the " + value[1].innerText + "!";
            setTimeout(function () {
                _this.msg = '';
            }, 1000);
        });
    };
    //ngOnDestroy() {
    //    if (this.dragulaSvc.find('container') !== undefined) {
    //        this.dragulaSvc.destroy('container');
    //    }
    //}
    /**
     * Event emitter receipt from child components
     **/
    QuotePackageGridComponent.prototype.getNotificationHandler = function (evt) {
        //console.log('message received');    
        this.quotePackageAttachedFiles = evt;
    };
    QuotePackageGridComponent.prototype.refreshFileListHandler = function (evt) {
        //console.log('message received');
        this.quotePackageAttachedFiles = evt.quotePackageAttachedFiles;
        if (this.quotePackageAttachedFiles.length > 0)
            this.hasAttachedFiles = true;
    };
    QuotePackageGridComponent.prototype.OpenModal = function () {
        this.componentInsideModal.open();
    };
    /**
     * On Form Submit by clicking on Create Package button
     * */
    QuotePackageGridComponent.prototype.onSubmit = function () {
        //this.blockUI.start('Loading...');
        //this.ngProgress.start();
        var _this = this;
        var submittalModel = new submittal_package_1.SubmittalPackageModel();
        submittalModel.quoteId = this.quoteId; //"724134023730921472";
        submittalModel.projectId = this.projectId; //"724133966570946560";
        var quotePackageCheckedItems = jQuery("#submittal-package-table")
            .find("tbody input[type=checkbox]:checked").map(function () {
            return this.value;
        }).get();
        if (quotePackageCheckedItems.length > 0) {
            jQuery("#progressbarModal").modal({ backdrop: 'static', keyboard: false });
            var quotePackageItemList = quotePackageCheckedItems.map(function (x) { return x.split('-'); });
            var mappedPackageItems_1 = [];
            quotePackageItemList.forEach(function (value, key) {
                var productId = value[0];
                var documentTypeId = value[1];
                mappedPackageItems_1.push({ productId: productId, documentTypeId: documentTypeId });
            });
            submittalModel.productsAndDocuments = mappedPackageItems_1; //quote package item list   
            submittalModel.businessLogoUrl = this.userModel.businessLogoUrl; //pass the business logo to print it in cover page
            var attachedFileValues = jQuery("#attachedfiles_table")
                .find("tbody input[type=checkbox]:checked").map(function () {
                return this.value;
            }).get();
            var attachedFileList_1 = [];
            attachedFileValues.forEach(function (value, key) {
                var filename = value;
                var absoultePath = null;
                var description = null;
                var documentId = null;
                var documentTypeId = 5;
                var productId = null;
                var productNumber = null;
                var hasImage = null;
                var url = null;
                var siteFinityUrl = null;
                var name = null;
                var rank = 0;
                var fileExtension = null;
                attachedFileList_1.push({
                    filename: filename, absoultePath: absoultePath, description: description, documentId: documentId, documentTypeId: documentTypeId, productId: productId,
                    productNumber: productNumber, hasImage: hasImage, url: url, siteFinityUrl: siteFinityUrl, name: name, rank: rank, fileExtension: fileExtension
                });
            });
            submittalModel.quotePackageAttachedFiles = attachedFileList_1; //attached File List
            //Call api through submittal service
            if (submittalModel.productsAndDocuments.length > 0) {
                this.runProgressBar();
                this.submittalService.createQuotePackage(submittalModel)
                    .subscribe(function (data) {
                    //const blob = data._body;
                    var filename = "Download.zip";
                    var blob = new Blob([data._body], { type: 'application/zip' });
                    data.headers._headers.forEach(function (value, index) {
                        if (index == 'content-disposition') {
                            value.forEach(function (obj) {
                                var stringArr = obj.split(";").map(function (item) { return item.trim(); });
                                filename = stringArr[1].replace("filename=", "");
                                filename = filename.replace(/["]+/g, '');
                            });
                        }
                    });
                    kendo_file_saver_1.saveAs(blob, filename);
                    jQuery("#progressbarModal").modal('hide');
                }, function (err) {
                    jQuery("#progressbarModal").modal('hide');
                    _this.toastrSvc.Error(INTERNAL_SERVER_ERROR);
                });
            }
            else {
                toastr.error(SUBMITTAL_GENERATION_FAILURE);
            }
        }
        else {
            toastr.error(CHECKBOXES_UNCHECKED_ERROR);
        }
    };
    QuotePackageGridComponent.prototype.runProgressBar = function () {
        var _this = this;
        Rx_1.Observable.timer(0, 100)
            .takeWhile(function () {
            return _this.isWidthWithinLimit();
        }).subscribe(function () {
            _this.width = _this.width + 1;
        });
    };
    QuotePackageGridComponent.prototype.isWidthWithinLimit = function () {
        if (this.width === 98) {
            return false;
        }
        else {
            return true;
        }
    };
    /**
     *  File Upload Event Handlers
     **/
    QuotePackageGridComponent.prototype.uploadEventHandler = function (e) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.quoteId
        };
        this.uploadEventData = e;
    };
    QuotePackageGridComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    };
    QuotePackageGridComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    QuotePackageGridComponent.prototype.uploadCompleted = function () {
        this.submittalFileUpload = null;
    };
    /* Main Table Button Click Events */
    /* Checks all the checkboxes of that Row */
    QuotePackageGridComponent.prototype.checkAllColumnCheckBoxes = function (event, rowId) {
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
                    parseInt(value.attributes.rowIndex.value) === 0)
                    value.checked = false;
            });
        }
    };
    /* Unchecks left most check box as well as the column header belong to the user clicked checkboxes column and header */
    QuotePackageGridComponent.prototype.uncheckBothRowAndColumnHeaderCheckBoxes = function (rowId, colIdentifier) {
        var checkBoxList = this.tblSubmittalPackage.nativeElement.getElementsByTagName('input');
        if (colIdentifier == SUBMITTAL_SHEETS) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_SUBMITTAL_SHEETS_HEADER);
        }
        else if (colIdentifier == INSTALLATION_MANUAL) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_INSTALLATION_MANUAL_HEADER);
        }
        else if (colIdentifier == OPERATION_MANUAL) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_OPERATION_MANUAL_HEADER);
        }
        else if (colIdentifier == GUIDE_SPECS) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_GUIDE_SPECS_HEADER);
        }
        else if (colIdentifier == PRODUCT_BROCHURE) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_PRODUCT_BROCHURE_HEADER);
        }
        else if (colIdentifier == REVIT_DRAWING) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_REVIT_DRAWING_HEADER);
        }
        else if (colIdentifier == CAD_DRAWING) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_CAD_DRAWING_HEADER);
        }
        else if (colIdentifier == PRODUCT_FLYER) {
            this.uncheckColumnHeaderAndRowIdentifier(checkBoxList, rowId, colIdentifier, CHK_PRODUCT_FLYER_HEADER);
        }
    };
    QuotePackageGridComponent.prototype.uncheckColumnHeaderAndRowIdentifier = function (checkBoxList, rowId, colIdentifier, chkBoxHeaderName) {
        Array.prototype.forEach.call(checkBoxList, function (value, index) {
            if ((value.name == CHECKBOX_REFERENCE_ROW &&
                (parseInt(value.attributes.rowIndex.value) === rowId)) ||
                (value.name == chkBoxHeaderName)) {
                value.checked = false;
            }
        });
    };
    /* checks/unchecks all check boxes of that particular column */
    QuotePackageGridComponent.prototype.checkAllRowCheckBoxes = function (event) {
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
    };
    QuotePackageGridComponent.prototype.checkOrUncheckCheckboxes = function (event, checkBoxList, chkBoxName) {
        Array.prototype.forEach.call(checkBoxList, function (value, index) {
            if (value.name == chkBoxName) {
                if (event.target.checked)
                    value.checked = true;
                else
                    value.checked = false;
            }
        });
    };
    __decorate([
        core_1.ViewChild('componentInsideModal'),
        __metadata("design:type", upload_files_modal_component_1.UploadFilesModalComponent)
    ], QuotePackageGridComponent.prototype, "componentInsideModal", void 0);
    __decorate([
        core_1.ViewChild("tblSubmittalPackage"),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "tblSubmittalPackage", void 0);
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], QuotePackageGridComponent.prototype, "quoteItemsList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", user_1.User)
    ], QuotePackageGridComponent.prototype, "userModel", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "quotePackageAttachedFiles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], QuotePackageGridComponent.prototype, "hasAttachedFiles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "possibleDocsList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "quoteId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "projectId", void 0);
    QuotePackageGridComponent = __decorate([
        core_1.Component({
            selector: 'quote-package-grid',
            templateUrl: './quote-package-grid.component.html',
            styleUrls: ['./quote-package-grid.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [submittal_package_service_1.SubmittalPackageService,
            toastr_service_1.ToastrService,
            ng2_dragula_1.DragulaService])
    ], QuotePackageGridComponent);
    return QuotePackageGridComponent;
}());
exports.QuotePackageGridComponent = QuotePackageGridComponent;
/**
 * *********** Constants ***************
 */
var PRODUCT_FLYER = 'productFlyer';
var CAD_DRAWING = 'cadDrawing';
var REVIT_DRAWING = 'revitDrawing';
var PRODUCT_BROCHURE = 'productBrochure';
var GUIDE_SPECS = 'guideSpecs';
var OPERATION_MANUAL = 'operationManual';
var INSTALLATION_MANUAL = 'installationManual';
var SUBMITTAL_SHEETS = 'submittalSheets';
var CHECKBOX_PRODUCT_FLYER = "chkBoxProductFlyer";
var CHECKBOX_CAD_DRAWING = "chkBoxCadDrawingRow";
var CHECKBOX_REVIT_DRAWING = "chkBoxRevitDrawingRow";
var CHECKBOX_PRODUCT_BROCHURE = 'chkBoxProductBrochureRow';
var CHECKBOX_GUIDE_SPECS = 'chkBoxGuideSpecsRow';
var CHECKBOX_OPERATION_MANUAL = 'chkBoxOperationManualRow';
var CHECKBOX_INSTALLATION_MANUAL = 'chkBoxInstallationManualRow';
var CHECKBOX_SUBMITTAL_SHEETS = 'chkBoxSubmittalSheetsRow';
var CHECKBOX_REFERENCE_ROW = "chkBoxReferenceRow";
var CHK_PRODUCT_FLYER_HEADER = "chkProductFlyerHeader";
var CHK_CAD_DRAWING_HEADER = "chkCadDrawingHeader";
var CHK_REVIT_DRAWING_HEADER = "chkRevitDrawingHeader";
var CHK_PRODUCT_BROCHURE_HEADER = "chkProductBrochureHeader";
var CHK_GUIDE_SPECS_HEADER = "chkGuideSpecsHeader";
var CHK_OPERATION_MANUAL_HEADER = "chkOperationManualHeader";
var CHK_INSTALLATION_MANUAL_HEADER = "chkInstallationManualHeader";
var CHK_SUBMITTAL_SHEETS_HEADER = "chkSubmittalSheetsHeader";
var INTERNAL_SERVER_ERROR = "Something went wrong. Please try again later.";
var SUBMITTAL_GENERATION_FAILURE = "Couln't generate submittal package. Please try again.";
var CHECKBOXES_UNCHECKED_ERROR = "At least one check box is required to be checked to generate submittal package.";
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
***/ ///////
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
//# sourceMappingURL=quote-package-grid.component.js.map