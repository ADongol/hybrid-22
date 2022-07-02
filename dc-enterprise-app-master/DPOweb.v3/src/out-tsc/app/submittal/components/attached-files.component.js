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
var http_1 = require("@angular/http");
var submittal_package_service_1 = require("../services/submittal-package.service");
var submittal_package_1 = require("../../submittal/models/submittal-package");
var AttachedFilesComponent = /** @class */ (function () {
    function AttachedFilesComponent(http, submittalService) {
        this.http = http;
        this.submittalService = submittalService;
        this.quotePackageAttachedFiles = [];
        this.deleteFileClick = new core_1.EventEmitter();
        this.attachedFileList = [];
    }
    AttachedFilesComponent.prototype.ngOnInit = function () { };
    AttachedFilesComponent.prototype.checkAllFileRows = function (event) {
        var checkBoxes = this.tblAttachedFileList.nativeElement.querySelectorAll('input');
        if (event.target.checked) {
            Array.prototype.forEach.call(checkBoxes, function (value, index) {
                if (value.name === "chkFileRow") {
                    value.checked = true;
                }
            });
        }
        else {
            Array.prototype.forEach.call(checkBoxes, function (value, index) {
                if (value.name === "chkFileRow") {
                    value.checked = false;
                }
            });
        }
    };
    AttachedFilesComponent.prototype.isAllFilesChecked = function () {
        //if (this.quotePackageAttachedFiles.length > 0 )
        //    return this.quotePackageAttachedFiles.every(_ => _.isFileRow);
    };
    AttachedFilesComponent.prototype.onDeleteFile = function (filename) {
        //this.blockUI.start('Loading...');
        var _this = this;
        var submittalModel = new submittal_package_1.SubmittalPackageModel();
        submittalModel.quoteId = this.quoteId;
        var documentModel = [
            {
                fileName: filename,
                absoultePath: null,
                description: null,
                documentId: null,
                documentTypeId: 5,
                productId: null,
                productNumber: null,
                hasImage: null,
                url: null,
                siteFinityUrl: null,
                name: null,
                rank: 0,
                fileExtension: null
            }
        ];
        submittalModel.quotePackageAttachedFiles = documentModel;
        this.submittalService.deleteFile(submittalModel)
            .subscribe(function (data) {
            _this.attachedFileList = data.model;
            _this.deleteFileClick.emit(_this.attachedFileList);
        }, function (err) {
            console.log(err);
        });
    };
    __decorate([
        core_1.ViewChild("attachedFileListTable"),
        __metadata("design:type", Object)
    ], AttachedFilesComponent.prototype, "tblAttachedFileList", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AttachedFilesComponent.prototype, "quoteId", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AttachedFilesComponent.prototype, "hasAttachedFiles", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AttachedFilesComponent.prototype, "quotePackageAttachedFiles", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AttachedFilesComponent.prototype, "deleteFileClick", void 0);
    AttachedFilesComponent = __decorate([
        core_1.Component({
            selector: 'attached-files',
            templateUrl: './attached-files.component.html',
            styleUrls: ['./attached-files.component.css']
        }),
        __metadata("design:paramtypes", [http_1.Http,
            submittal_package_service_1.SubmittalPackageService])
    ], AttachedFilesComponent);
    return AttachedFilesComponent;
}());
exports.AttachedFilesComponent = AttachedFilesComponent;
//# sourceMappingURL=attached-files.component.js.map