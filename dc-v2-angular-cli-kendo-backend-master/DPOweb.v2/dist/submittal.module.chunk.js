webpackJsonp(["submittal.module"],{

/***/ "../../../../../src/app/shared/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.businessLogoUrl = "";
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/components/attached-files/attached-files.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tbl-holder-custom {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding-top: 10px;\r\n    min-height: 90px;\r\n}\r\n\r\n.tbl thead tr th input[type=\"checkbox\"], .tbl tbody tr td input[type=\"checkbox\"] {\r\n    position: relative;\r\n    top: 0px;\r\n}\r\n\r\n.filename-header {\r\n    padding-top: 15px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.delete_quote_package_attached_file {\r\n    float: right;\r\n}\r\n\r\n.context-btn {\r\n    -ms-flex-align: start;\r\n        align-items: flex-start;\r\n    background-attachment: scroll;\r\n    background-clip: border-box;\r\n    background-image: linear-gradient(rgb(241, 241, 241), rgb(209, 209, 209));\r\n    background-origin: padding-box;\r\n    background-size: auto;\r\n    border-bottom-color: rgb(184, 184, 184);\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(184, 184, 184);\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-right-color: rgb(184, 184, 184);\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-top-color: rgb(184, 184, 184);\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n    color: rgb(77, 84, 93);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13.3333px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    font-variant-caps: normal;\r\n    -webkit-font-variant-ligatures: normal;\r\n            font-variant-ligatures: normal;\r\n    font-variant-numeric: normal;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    letter-spacing: normal;\r\n    line-height: 30px;\r\n    margin-bottom: 9px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-top: 8px;\r\n    padding-bottom: 2px;\r\n    padding-left: 6px;\r\n    padding-right: 10px;\r\n    padding-top: 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-indent: 0px;\r\n    text-rendering: auto;\r\n    text-shadow: none;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    width: 169px;\r\n    word-spacing: 0px;\r\n    -ms-writing-mode: lr-tb;\r\n        writing-mode: horizontal-tb;\r\n    -webkit-appearance: none;\r\n    -webkit-border-image: none\r\n}\r\n\r\n.context-btn img {\r\n    padding-right: 6px;\r\n    position: relative;\r\n    top: 0px;\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    font-family: museo-sans, sans-serif;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submittal/components/attached-files/attached-files.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"/v2/app/content/tablestyles.css\" />\r\n\r\n<div class=\"tbl-holder-custom scroll-x\">\r\n    <table class=\"tbl\" id=\"attachedfiles_table\" #attachedFileListTable>\r\n        <thead>\r\n            <tr>\r\n                <th>\r\n                    <input type=\"checkbox\"\r\n                           name=\"chkAllAttachedFiles\"\r\n                           class=\"pull-left\"\r\n                           [checked]=\"hasAttachedFiles\"\r\n                           (change)=\"checkAllFileRows($event)\" />\r\n                    <span class=\"filename-header\">File Name</span>\r\n                </th>\r\n                <th></th>\r\n            </tr>\r\n        </thead>\r\n        <tbody *ngIf=\"quotePackageAttachedFiles.length > 0\">\r\n            <tr *ngFor=\"let item of quotePackageAttachedFiles; let i= index;\">\r\n                <td>\r\n                    <input type=\"checkbox\"\r\n                           id=\"{{item.fileName}}\"\r\n                           name=\"chkFileRow\"\r\n                           [attr.rowIndex]=\"i + 1\"\r\n                           value=\"{{item.description}}\"\r\n                           [checked]=\"hasAttachedFiles\"\r\n                           />\r\n                    <span>{{item.fileName}}</span>\r\n\r\n                </td>\r\n                <td>\r\n                    <button class=\"delete_quote_package_attached_file context-btn h-slim\"\r\n                       (click)=\"onDeleteFile(item.fileName)\">\r\n                        <img src=\"../../../images/context-btn-delete-icon.png\" />\r\n                        Delete File\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/submittal/components/attached-files/attached-files.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AttachedFilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_submittal_package_service__ = __webpack_require__("../../../../../src/app/submittal/services/submittal-package.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_submittal_package__ = __webpack_require__("../../../../../src/app/submittal/models/submittal-package.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AttachedFilesComponent = /** @class */ (function () {
    function AttachedFilesComponent(http, submittalService) {
        this.http = http;
        this.submittalService = submittalService;
        this.quotePackageAttachedFiles = [];
        this.deleteFileClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        var submittalModel = new __WEBPACK_IMPORTED_MODULE_3__models_submittal_package__["a" /* SubmittalPackageModel */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("attachedFileListTable"),
        __metadata("design:type", Object)
    ], AttachedFilesComponent.prototype, "tblAttachedFileList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], AttachedFilesComponent.prototype, "quoteId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AttachedFilesComponent.prototype, "hasAttachedFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AttachedFilesComponent.prototype, "quotePackageAttachedFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], AttachedFilesComponent.prototype, "deleteFileClick", void 0);
    AttachedFilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'attached-files',
            template: __webpack_require__("../../../../../src/app/submittal/components/attached-files/attached-files.component.html"),
            styles: [__webpack_require__("../../../../../src/app/submittal/components/attached-files/attached-files.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_2__services_submittal_package_service__["a" /* SubmittalPackageService */]])
    ], AttachedFilesComponent);
    return AttachedFilesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/components/modal/modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex: 1;\r\n        flex: 1;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n    z-index: 42;\r\n} \r\n\r\n.modal.in {\r\n    opacity: 1;\r\n}\r\n\r\n.modal-header {\r\n    padding: 5px;\r\n    border-bottom: 1px solid #e5e5e5;\r\n    height: 30px;\r\n}\r\n\r\n.modal-header .close {\r\n    margin-top: -2px;\r\n    margin-right: 10px;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0;\r\n    height: 20px;\r\n    font-weight: bolder;\r\n}\r\n\r\n.header-label { \r\n    padding-left: 10px;\r\n}\r\n\r\n.modal-body {\r\n    position: relative;\r\n    padding: 15px;\r\n}\r\n\r\n.k-upload .k-dropzone {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    position: relative;\r\n    border-width: 0;\r\n    background-color: transparent;\r\n    height: 80px;\r\n}\r\n\r\n.k-upload .k-dropzone .k-upload-status {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    position: absolute;\r\n    padding: 4px 8px;\r\n    font-size: 14px;\r\n    font-weight: normal;\r\n    line-height: 1.42857;\r\n    top: 5%;\r\n    right: 35%;\r\n}\r\n\r\n.kendo-upload-button {\r\n    min-width: 7em;\r\n    margin: 8px;\r\n    width: 250px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}\r\n/*.k-upload-button {\r\n    position: relative;\r\n    overflow: hidden;\r\n    direction: ltr;\r\n}*/\r\n.k-button {\r\n    /* border-radius: 2px; */\r\n    padding: 4px 8px;\r\n    /* box-sizing: border-box; */\r\n    /* border-width: 1px; */\r\n    /* border-style: solid; */\r\n    font-size: 14px;\r\n    line-height: 1.42857;\r\n    text-align: justify;\r\n    text-decoration: underline;\r\n    white-space: nowrap;\r\n    /* display: inline-flex; */\r\n    -ms-flex-align: stretch;\r\n        align-items: stretch;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    vertical-align: text-top;\r\n    -webkit-user-select: none;\r\n       -moz-user-select: none;\r\n        -ms-user-select: none;\r\n            user-select: none;\r\n    cursor: pointer;\r\n    outline: none;\r\n    -webkit-appearance: none;\r\n    position: relative;\r\n    color: blue;\r\n}\r\n\r\n.modal-footer {\r\n    padding: 15px;\r\n    text-align: right;\r\n    border-top: 1px solid #e5e5e5;\r\n    height: 25px;\r\n}\r\n\r\nbutton.close {\r\n    -webkit-appearance: none;\r\n    padding: 0;\r\n    cursor: pointer;\r\n    background: 0 0;\r\n    border: 0; \r\n    font-weight: bolder;\r\n}\r\n\r\n.k-button .k-upload-button {\r\n    min-width: 7em;\r\n    margin: 8px;\r\n    width: 250px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submittal/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\"\r\n     role=\"dialog\"\r\n     tabindex=\"-1\"\r\n     [class.in]=\"visibleAnimate\"  \r\n     *ngIf=\"visible\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <ng-container *ngTemplateOutlet=\"header\"></ng-container>\r\n                <h4>\r\n                    <span><label class=\"header-label\">{{title}}</label></span>\r\n                    <span><button class=\"close\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">×</button></span>\r\n                </h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <ng-container *ngTemplateOutlet=\"body\"></ng-container>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <ng-container *ngTemplateOutlet=\"footer\"></ng-container>\r\n                <span><button class=\"button-ok\" data-dismiss=\"modal\" type=\"button\" aria-label=\"Close\" (click)=\"close()\">Ok</button></span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n "

/***/ }),

/***/ "../../../../../src/app/submittal/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submittal_services_submittal_package_service__ = __webpack_require__("../../../../../src/app/submittal/services/submittal-package.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = /** @class */ (function () {
    function ModalComponent(elementRef, changeDetectorRef, submittalService) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.submittalService = submittalService;
        this.closeOnOutsideClick = true;
        this.notifyParent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.visible = false;
        this.visibleAnimate = false;
    }
    ModalComponent.prototype.ngOnInit = function () {
        this.quoteValue = this.quoteIdentifier;
    };
    ModalComponent.prototype.ngOnDestroy = function () {
        this.close();
    };
    ModalComponent.prototype.open = function () {
        var _this = this;
        document.body.classList.add('modal-open');
        this.visible = true;
        setTimeout(function () {
            _this.visibleAnimate = true;
        });
    };
    ModalComponent.prototype.close = function () {
        var _this = this;
        document.body.classList.remove('modal-open');
        this.visibleAnimate = false;
        setTimeout(function () {
            _this.visible = false;
            _this.changeDetectorRef.markForCheck();
        }, 200);
        if (__WEBPACK_IMPORTED_MODULE_2_jquery__(".k-upload-files").length > 0) {
            this.submittalService.getAttachedFiles(this.quoteValue)
                .subscribe(function (data) {
                console.log(data);
                _this.attachedFiles = data;
                _this.notifyParent.emit(_this.attachedFiles);
            });
        }
    };
    ModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal') && this.isTopMost() && this.closeOnOutsideClick) {
            this.close();
        }
    };
    ModalComponent.prototype.onKeyDownHandler = function (event) {
        // If ESC key and TOP MOST modal, close it.
        if (event.key === 'Escape' && this.isTopMost()) {
            this.close();
        }
    };
    /**
     * Returns true if this modal is the top most modal.
     */
    ModalComponent.prototype.isTopMost = function () {
        return !this.elementRef.nativeElement.querySelector(':scope modal > .modal');
    };
    ModalComponent.prototype.ngAfterViewChecked = function () {
        __WEBPACK_IMPORTED_MODULE_2_jquery__(".k-upload .k-dropzone").css("height", "100px");
        //jQuery(".k-button .k-upload-button").css({ "width": "250px", "position": "absolute", "left": "0", "top": "0" });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('modalHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ModalComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('modalBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ModalComponent.prototype, "body", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChild"])('modalFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"])
    ], ModalComponent.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "closeOnOutsideClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ModalComponent.prototype, "quoteIdentifier", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ModalComponent.prototype, "notifyParent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onContainerClicked", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], ModalComponent.prototype, "onKeyDownHandler", null);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'modal',
            template: __webpack_require__("../../../../../src/app/submittal/components/modal/modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/submittal/components/modal/modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"],
            __WEBPACK_IMPORTED_MODULE_1__submittal_services_submittal_package_service__["a" /* SubmittalPackageService */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".section {\r\n    box-sizing: border-box;\r\n    color: rgb(46, 54, 65);\r\n    display: block;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    padding-bottom: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 10px;\r\n    position: relative;\r\n\r\n}\r\n\r\n.section .t-flush {\r\n    box-sizing: border-box;\r\n    color: rgb(46, 54, 65);\r\n    display: block;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    padding-bottom: 20px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    padding-top: 0px;\r\n    position: relative;\r\n}\r\n\r\n.item-strap {\r\n    box-sizing: border-box;\r\n    color: rgb(46, 54, 65);\r\n    display: block;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    height: 70px;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    position: relative;\r\n    text-transform: uppercase;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.item-strap .itemname {\r\n    float: left;\r\n    padding-top: 0px;\r\n    max-width: 100%;\r\n    box-sizing: content-box;\r\n}\r\n\r\nh1 {\r\n    color: rgb(0, 161, 228);\r\n    display: block;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    height: 40px;\r\n    margin-bottom: 0;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding-top: 0px;\r\n    text-overflow: ellipsis;\r\n    text-transform: uppercase;\r\n    white-space: nowrap;\r\n}\r\n\r\n.item-strap .btn-bar {\r\n    box-sizing: border-box;\r\n    color: rgb(46, 54, 65);\r\n    display: block;\r\n    float: right;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    height: 32px;\r\n    margin-bottom: 20px;\r\n    margin-left: 0px;\r\n    margin-right: 0px;\r\n    margin-top: 20px;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.item-strap .btn-bar a, .item-strap .btn-bar button {\r\n    margin-bottom: 4px;\r\n}\r\n\r\n.submit-btn, .context-btn.submit, .search-btn {\r\n    color: #fff;\r\n    background-color: #007fcc;\r\n    background: linear-gradient(#21ade9,#007fcc);\r\n    text-transform: uppercase;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n    box-shadow: none;\r\n    border: 1px solid #007fcc;\r\n    font-family: \"museo-sans\",sans-serif;\r\n    font-weight: 900;\r\n}\r\n\r\n.submit-btn:hover {\r\n    background: #21aee9;\r\n}\r\n\r\n.submit-btn {\r\n    -ms-flex-align: start;\r\n        align-items: flex-start;\r\n    background-attachment: scroll;\r\n    background-clip: border-box; \r\n    background-image: linear-gradient(rgb(33, 173, 233), rgb(0, 127, 204));\r\n    background-origin: padding-box;\r\n    background-size: auto;\r\n    border-bottom-color: rgb(0, 127, 204);\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(0, 127, 204);\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-right-color: rgb(0, 127, 204);\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-top-color: rgb(0, 127, 204);\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n    color: rgb(255, 255, 255);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13.3333px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    height: 38px;\r\n    letter-spacing: normal;\r\n    line-height: 36px;\r\n    margin-bottom: 4px; \r\n    padding-bottom: 1px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    padding-top: 1px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-indent: 2px;\r\n    text-rendering: auto;\r\n    text-shadow: none;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    /*width: 223px;*/\r\n    word-spacing: 0px;\r\n    -ms-writing-mode: lr-tb;\r\n        writing-mode: horizontal-tb;\r\n}\r\n\r\n.submit-btn img {\r\n    position: relative;\r\n    top: 0px;\r\n    right: 8px;\r\n}\r\n\r\n.tbl-strap {\r\n    /*padding-bottom: 5px;\r\n    padding-top: 10px;*/\r\n    overflow: hidden;\r\n    padding-bottom: 0px;\r\n}\r\n\r\nh6 {\r\n    font-size: 16px;\r\n    color: #00a1e4;\r\n    text-transform: uppercase;\r\n    display: block;\r\n    -webkit-margin-before: 2.33em;\r\n    -webkit-margin-after: 2.33em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.tbl-holder-custom {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    padding-top: 10px;\r\n    min-height: 90px;\r\n}\r\n\r\n.section.action.c-align {\r\n    background-color: rgb(222, 245, 255);\r\n    box-sizing: border-box;\r\n    color: rgb(46, 54, 65);\r\n    display: block;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n    margin-top: 18px;\r\n    padding-bottom: 20px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n    padding-top: 20px;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.header-reference {\r\n    width: 15%;\r\n}\r\n\r\n.header-description {\r\n   width: 20%;\r\n}\r\n\r\n.col-main-grid {\r\n    padding-right: 15px;\r\n}\r\n\r\n.context-btn {\r\n    -ms-flex-align: start;\r\n        align-items: flex-start;\r\n    background-attachment: scroll;\r\n    background-clip: border-box;\r\n    background-image: linear-gradient(rgb(241, 241, 241), rgb(209, 209, 209));\r\n    background-origin: padding-box;\r\n    background-size: auto;\r\n    border-bottom-color: rgb(184, 184, 184);\r\n    border-bottom-left-radius: 0px;\r\n    border-bottom-right-radius: 0px;\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(184, 184, 184);\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-right-color: rgb(184, 184, 184);\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-top-color: rgb(184, 184, 184);\r\n    border-top-left-radius: 0px;\r\n    border-top-right-radius: 0px;\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n    color: rgb(77, 84, 93);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13.3333px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    font-variant-caps: normal;\r\n    -webkit-font-variant-ligatures: normal;\r\n            font-variant-ligatures: normal;\r\n    font-variant-numeric: normal;\r\n    font-weight: bold;\r\n    height: 30px;\r\n    letter-spacing: normal;\r\n    line-height: 30px;\r\n    margin: 0px;\r\n    padding-bottom: 2px;\r\n    padding-left: 6px;\r\n    padding-right: 10px;\r\n    padding-top: 0px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-indent: 0px;\r\n    text-rendering: auto;\r\n    text-shadow: none;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    width: 169px;\r\n    word-spacing: 0px;\r\n    -ms-writing-mode: lr-tb;\r\n        writing-mode: horizontal-tb;\r\n    -webkit-appearance: none;\r\n    -webkit-border-image: none\r\n}\r\n\r\n.context-btn img {\r\n    padding-right: 6px;\r\n    position: relative;\r\n    top: 0px;\r\n}\r\n\r\na {\r\n    color: #00a1e4;\r\n    outline: 0;\r\n    border: none;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n    text-decoration: underline;\r\n}\r\n\r\n.label-view-link {\r\n    background-color: rgba(0, 0, 0, 0);\r\n    border-bottom-color: rgb(0, 161, 228);\r\n    border-bottom-style: none;\r\n    border-bottom-width: 0px;\r\n    border-collapse: collapse;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(0, 161, 228);\r\n    border-left-style: none;\r\n    border-left-width: 0px;\r\n    border-right-color: rgb(0, 161, 228);\r\n    border-right-style: none;\r\n    border-right-width: 0px;\r\n    border-top-color: rgb(0, 161, 228);\r\n    border-top-style: none;\r\n    border-top-width: 0px;\r\n    box-sizing: content-box;\r\n    color: rgb(0, 161, 228);\r\n    cursor: pointer;\r\n    display: inline;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 13px;\r\n    height: auto;\r\n    line-height: 18.5714px;\r\n    outline-color: rgb(0, 161, 228);\r\n    outline-style: none;\r\n    outline-width: 0px;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n    text-decoration: underline;\r\n    -webkit-text-size-adjust: 100%;\r\n        -ms-text-size-adjust: 100%;\r\n            text-size-adjust: 100%;\r\n    width: auto;\r\n    \r\n}\r\n\r\nnav a:visited, a:link {\r\n    color: rgb(0, 161, 228);\r\n}\r\n\r\nimg {\r\n    border: 0;\r\n    box-sizing: border-box;\r\n    font-family: museo-sans, sans-serif;\r\n}\r\n\r\n.btn-cancel {\r\n    background-clip: border-box;\r\n    background-color: rgba(0, 0, 0, 0);\r\n    background-image: linear-gradient(rgb(241, 241, 241), rgb(209, 209, 209));\r\n    background-origin: padding-box;\r\n    background-size: auto;\r\n    border-bottom-color: rgb(184, 184, 184);\r\n    border-bottom-style: solid;\r\n    border-bottom-width: 1px;\r\n    border-image-outset: 0px;\r\n    border-image-repeat: stretch;\r\n    border-image-slice: 100%;\r\n    border-image-source: none;\r\n    border-image-width: 1;\r\n    border-left-color: rgb(184, 184, 184);\r\n    border-left-style: solid;\r\n    border-left-width: 1px;\r\n    border-right-color: rgb(184, 184, 184);\r\n    border-right-style: solid;\r\n    border-right-width: 1px;\r\n    border-top-color: rgb(184, 184, 184);\r\n    border-top-style: solid;\r\n    border-top-width: 1px;\r\n    box-shadow: none;\r\n    box-sizing: border-box;\r\n    color: rgb(77, 84, 93);\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    -webkit-filter: none;\r\n            filter: none;\r\n    font-family: museo-sans, sans-serif;\r\n    font-size: 13px;\r\n    font-weight: 900;\r\n    height: 38px;\r\n    line-height: 36px;\r\n    outline-color: rgb(77, 84, 93);\r\n    outline-style: none;\r\n    outline-width: 0px;\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    vertical-align: top;\r\n    width: 121px;\r\n}\r\n\r\n.section-bottom{\r\n    padding:10px;\r\n}\r\n\r\n.drag-dots{\r\n    height:10px;\r\n    vertical-align:inherit;\r\n    padding-right: 5px;\r\n} \r\n\r\n.progress {\r\n    height: 20px;\r\n    margin-bottom: 20px;\r\n    overflow: hidden;\r\n    background-color: #f5f5f5;\r\n    border-radius: 4px;\r\n    box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\r\n}\r\n\r\n.progress-bar {\r\n    float: left;\r\n    width: 0;\r\n    height: 100%;\r\n    font-size: 12px;\r\n    line-height: 20px;\r\n    color: #fff;\r\n    text-align: center;\r\n    background-color: #337ab7;\r\n    box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\r\n    transition: width .6s ease;\r\n}\r\n\r\n.progress-striped .progress-bar,\r\n.progress-bar-striped {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n    background-size: 40px 40px;\r\n}\r\n\r\n.progress.active .progress-bar,\r\n.progress-bar.active {\r\n    animation: progress-bar-stripes 2s linear infinite;\r\n}\r\n\r\n.progress-bar-success {\r\n    background-color: #5cb85c;\r\n}\r\n\r\n.modal .modal-body .progress-striped .progress-bar-success {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-bar-info {\r\n    background-color: #5bc0de;\r\n}\r\n\r\n.progress-striped .progress-bar-info {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-bar-warning {\r\n    background-color: #f0ad4e;\r\n}\r\n\r\n.progress-striped .progress-bar-warning {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n.progress-bar-danger {\r\n    background-color: #d9534f;\r\n}\r\n\r\n.progress-striped .progress-bar-danger {\r\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\r\n}\r\n\r\n\r\n.processing-modal-header{\r\n    text-align: center;\r\n}\r\n\r\n\r\n.k-button .k-upload-button {\r\n    min-width: 7em;\r\n    margin: 8px;\r\n    width: 250px;\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"/v2/app/content/tablestyles.css\" />\r\n<link rel=\"stylesheet\" href=\"/v2/app/content/dragula.min.css\" />\r\n\r\n<div>\r\n    <form #submittalRequestForm=\"ngForm\">\r\n\r\n        <div class=\"item-strap\">\r\n            <div class=\"itemname\">\r\n                <h1>SUBMITTAL PACKAGE</h1>\r\n            </div>\r\n            <div class=\"btn-bar\">\r\n                <button type=\"submit\"\r\n                        class=\"submit-btn\"\r\n                        (click)=\"onSubmit()\">\r\n                    <img src=\"../../../images/create-package-btn-icon.png\" />Create Package\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"section t-flush\">\r\n            <div class=\"tbl-strap\">\r\n                <img src=\"../../../images/assoc-products-icon.png\" class=\"pull-left\" />\r\n                <div class=\"pull-left\">\r\n                    <h6>Associated Product Files</h6>\r\n                    <p>Customise the available documents you wish to be included in this package</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"tbl-holder-custom scroll-x\">\r\n                <table class=\"tbl\" id=\"submittal-package-table\" #tblSubmittalPackage>\r\n                    <thead>\r\n                        <tr>\r\n                            <th id=\"productReference\" aria-sort=\"none\" class=\"header-reference\">\r\n                                Reference\r\n                            </th>\r\n                            <th id=\"productDescription\" aria-sort=\"none\" class=\"header-description\">\r\n                                Description\r\n                            </th>\r\n                            <th *ngFor=\"let header of possibleDocsList\" #chkBoxColumnHeader>\r\n\r\n                                <input type=\"checkbox\"\r\n                                       id={{header.name}}\r\n                                       name={{header.inputname}}\r\n                                       class=\"pull-left\"\r\n                                       [attr.colIndex]=\"header.colId\"\r\n                                       [attr.rowIndex]=\"0\"\r\n                                       (change)=\"checkAllRowCheckBoxes($event)\" />\r\n                                {{header.label}}\r\n\r\n                            </th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class=\"container\" [dragula]='\"section-bag\"'>\r\n                        <tr *ngFor=\"let item of quoteItemsList; let i= index;\" #quoteItemRows>\r\n                            <td class=\"col-reference\">\r\n                                <div *ngIf=\"item.lineItemTypeId!=2; else configuredItemReference\">\r\n                                    <img src=\"/v2/app/images/drag_dots_blue.png\" class=\"drag-dots\"/>\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.productId}}\"\r\n                                           class=\"header-checkbox\"\r\n                                           name=\"chkBoxReferenceRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.productId}}\"\r\n                                           (change)=\"checkAllColumnCheckBoxes($event, i+1)\" />\r\n                                    <a class=\"product-number-link\"\r\n                                       href=\"/v2/#/products/(productDetails:{{item.productId}})?activeTab=product-overview\">\r\n                                        {{item.productNumber}}\r\n                                    </a>\r\n                                </div>\r\n                                <ng-template #configuredItemReference>\r\n                                    <img src=\"/v2/app/images/drag_dots_blue.png\" class=\"drag-dots\"/>\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.productId}}\"\r\n                                           class=\"header-checkbox\"\r\n                                           name=\"chkBoxReferenceRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.productId}}\"\r\n                                           (change)=\"checkAllColumnCheckBoxes($event, i+1)\" />\r\n                                    <a class=\"product-number-link\"\r\n                                       href=\"/v2/#/products/(productDetails:{{item.productId}})?activeTab=product-overview\">\r\n                                        {{item.codeString}}\r\n                                    </a>\r\n                                </ng-template>\r\n                            </td>\r\n\r\n                            <td class=\"col-description\">\r\n                                <div *ngIf=\"item.lineItemTypeId!=2; else configuredItemDescription\">\r\n                                    {{item.description}}\r\n                                </div>\r\n                                <ng-template #configuredItemDescription>\r\n                                    <p>Configured Item</p>\r\n                                </ng-template>\r\n                            </td>\r\n\r\n                            <td class=\"col-main-grid\" #tdSubmittalSheets>\r\n                                <div *ngIf=\"item.hasSubmittalSheets\">\r\n                                    <input class=\"chkBoxSubmittalSheets\"\r\n                                           type=\"checkbox\"\r\n                                           id=\"{{item.submittalSheetsDocId}}\"\r\n                                           name=\"chkBoxSubmittalSheetsRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.submittalSheetsDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'submittalSheets')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.submittalSheetUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n\r\n                            <td class=\"col-main-grid\" #tdInstallationManual>\r\n                                <div *ngIf=\"item.hasInstallationManual\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.installationManualDocId}}\"\r\n                                           name=\"chkBoxInstallationManualRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.installationManualDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'installationManual')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.installationManualUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdOperationManual>\r\n                                <div *ngIf=\"item.hasOperationManual\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.operationManualDocId}}\"\r\n                                           name=\"chkBoxOperationManualRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.operationManualDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'operationManual')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.operationalManualUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdGuideSpecs>\r\n                                <div *ngIf=\"item.hasGuideSpecs\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.guideSpecsDocId}}\"\r\n                                           name=\"chkBoxGuideSpecsRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.guideSpecsDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'guideSpecs')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.guideSpecsUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdProductBrochure>\r\n                                <div *ngIf=\"item.hasProductBrochure\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.productBrochureDocId}}\"\r\n                                           name=\"chkBoxProductBrochureRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.productBrochureDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'productBrochure')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.productBrochureUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdRevitDrawing>\r\n                                <div *ngIf=\"item.hasRevitDrawing\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.revitDrawingDocId}}\"\r\n                                           name=\"chkBoxRevitDrawingRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.revitDrawingDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'revitDrawing')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.revitDrawingUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdCadDrawing>\r\n                                <div *ngIf=\"item.hasCadDrawing\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.cadDrawingDocId}}\"\r\n                                           name=\"chkBoxCadDrawingRow\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.cadDrawingDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'cadDrawing')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.cadDrawingUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                            <td class=\"col-main-grid\" #tdProductFlyer>\r\n                                <div *ngIf=\"item.hasProductFlyer\">\r\n                                    <input type=\"checkbox\"\r\n                                           id=\"{{item.productFlyerDocId}}\"\r\n                                           name=\"chkBoxProductFlyer\"\r\n                                           [attr.rowIndex]=\"i + 1\"\r\n                                           value=\"{{item.productFlyerDocId}}\"\r\n                                           (change)=\"uncheckBothRowAndColumnHeaderCheckBoxes(i+1, 'productFlyer')\" />\r\n                                    <a class=\"label-view-link\" href=\"{{item.productFlyerUrl}}\" target=\"_blank\">\r\n                                        View\r\n                                    </a>\r\n                                </div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n\r\n            </div>\r\n        </div>\r\n        <br />\r\n\r\n        <div class=\"section\">\r\n\r\n            <div class=\"tbl-strap\">\r\n                <img src=\"../../../images/attached-files-icon.png\" class=\"pull-left\" />\r\n                <div class=\"pull-left\">\r\n                    <h6>Other Uploaded Files</h6>\r\n                    <p>Please select the files to be attached when this package is created</p>\r\n                </div>\r\n                <div class=\"pull-right\">\r\n                    <span class=\"selections-buttons\">\r\n                        <button type=\"button\" class=\"context-btn\" id=\"attach_new_file_btn\"\r\n                                (click)=\"OpenModal()\">\r\n                            <img src=\"../../../images/context-btn-export-icon.png\" />\r\n                            Upload New File\r\n                        </button>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <attached-files [quotePackageAttachedFiles]=\"quotePackageAttachedFiles\"\r\n                            [hasAttachedFiles]=\"hasAttachedFiles\"\r\n                            [quoteId]=\"quoteId\"\r\n                            (deleteFileClick)=\"refreshFileListHandler($event)\">\r\n            </attached-files>\r\n        </div>\r\n\r\n        <div class=\"section action c-align\">\r\n            <a class=\"btn-cancel\" href=\"/v2/#/quote/quote/{{quoteIdentifier}}/existingRecord\">Cancel</a>\r\n            <button type=\"button\"\r\n                    class=\"submit-btn\"\r\n                    (click)=\"onSubmit()\">\r\n                <img src=\"../../../images/create-package-btn-icon.png\" />Create Package\r\n            </button>\r\n        </div>\r\n\r\n        <div class=\"section-bottom\">\r\n\r\n        </div>\r\n\r\n        <modal #componentInsideModal [title]=\"title\"\r\n               [quoteIdentifier]=\"quoteIdentifier\"\r\n               (notifyParent)=\"getNotificationHandler($event)\">\r\n            <ng-template #modalHeader>\r\n            </ng-template>\r\n            <ng-template #modalBody>\r\n                <div>\r\n                    <p>\r\n                        Click 'Select' to browse <br />\r\n                        or  <br />\r\n                        Drag & drop your file in this section...\r\n                    </p>\r\n\r\n                    <kendo-upload required\r\n                                  [saveUrl]=\"submittalPackageUrl\"\r\n                                  [multiple]=\"true\"\r\n                                  [autoUpload]=\"true\"\r\n                                  [(ngModel)]=\"submittalFileUpload\"\r\n                                  name=\"submittalFileAttachment\"\r\n                                  (upload)=\"uploadEventHandler($event)\"\r\n                                  (success)=\"successEventHandler($event)\"\r\n                                  (complete)=\"uploadCompleted()\"\r\n                                  (error)=\"errorEventHandler($event)\">\r\n\r\n                    </kendo-upload>\r\n                </div>\r\n            </ng-template>\r\n            <ng-template #modalFooter>\r\n                <!--<button (click)=\"saveFiles()\">Upload</button>-->\r\n            </ng-template>\r\n        </modal>\r\n    </form>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"progressbarModal\"\r\n     role=\"dialog\"\r\n     tabindex=\"-1\">\r\n\r\n   \r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"processing-modal-header\">\r\n                    Processing...\r\n                </h4>\r\n                <div class=\"modal-body\">\r\n                    <div class=\"progress progress-striped active\">\r\n                        <div class=\"progress\">\r\n                            <div class=\"progress-bar progress-bar-striped bg-success\" role=\"progressbar\" [style.width]=\"width+'%'\">\r\n                                 \r\n                            </div>\r\n                            <!--<ng-progress [positionUsing]=\"'translate3d'\"\r\n                                         [minimum]=\"0.15\"\r\n                                         [maximum]=\"1\"\r\n                                         [speed]=\"200\"\r\n                                         [showSpinner]=\"false\"\r\n                                         [direction]=\"'leftToRightReduced'\"\r\n                                         [color]=\"'red'\"\r\n                                         [trickleSpeed]=\"250\"\r\n                                         [thick]=\"true\"\r\n                                         [ease]=\"'linear'\">\r\n                            </ng-progress>-->\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<!--Configured products-->\r\n<!--<div *ngIf=\"hasConfiguredItem\">\r\n    <div class=\"tbl-holder scroll-x\">\r\n        <table class=\"tbl\" id=\"configuredproducts_table\">\r\n            <thead>\r\n                <tr>\r\n                    <th id=\"productreference\" aria-sort=\"none\" style=\"width:180px;\">Reference</th>\r\n                    <th id=\"productdescription\" aria-sort=\"none\" style=\"width:180px;\">Description</th>\r\n                    <th><input type=\"checkbox\" name=\"chkAllSubmittalSheets\" class=\"pull-left\" />Submittal<br />Sheets</th>\r\n\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of Items ; let i = index\">-->\r\n<!--@foreach (var item in Model.Items)\r\n{\r\nif (item.LineItemTypeId == (byte)LineItemTypeEnum.Configured)\r\n{-->\r\n<!--<td class=\"as-lnk\" style=\"padding-right: 10px;\">\r\n    <span>{{item.CodeString}}</span>\r\n</td>\r\n<td style=\"padding-right: 10px; max-width: 40px; white-space:normal;\">\r\n    Configured Item\r\n</td>-->\r\n<!--<td style=\"padding-right: 10px;\">\r\n    @GenerateCheckBox(item.GetDocument(DocumentTypeEnum.SubmittalData))\r\n</td>-->\r\n<!--</tbody>\r\n        </table>\r\n    </div>\r\n</div>-->\r\n<!--\r\n\r\n\r\n<kendo-grid [data]=\"quoteItemsList\" [scrollable]=\"'scrollable'\">\r\n    <kendo-grid-column field=\"reference\" title=\"Reference\" class=\"header-reference\">\r\n        <ng-template kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\r\n            {{column.title}}({{columnIndex}})\r\n        </ng-template>\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"\r\n                        *ngIf=\"{dataItem.lineItemTypeId}}!=2; else configuredItemReference\">\r\n            <input type=\"checkbox\"\r\n                    id=\"{{dataItem.productId}}\"\r\n                    class=\"header-checkbox\"\r\n                    name=\"chkBoxReferenceRow\"\r\n                    [attr.rowIndex]=\"i + 1\"\r\n                    value=\"{{dataItem.productId}}\"\r\n                    (change)=\"checkAllColumnCheckBoxes($event, i+1)\" />\r\n            <a class=\"product-number-link\"\r\n                href=\"/v2/#/products/(productDetails:{{dataItem.productId}})?activeTab=product-overview\">\r\n                {{dataItem.productNumber}}\r\n            </a>\r\n        </ng-template>\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" #configuredItemReference>\r\n            <input type=\"checkbox\"\r\n                    id=\"{{dataItem.productId}}\"\r\n                    class=\"header-checkbox\"\r\n                    name=\"chkBoxReferenceRow\"\r\n                    [attr.rowIndex]=\"i + 1\"\r\n                    value=\"{{dataItem.productId}}\"\r\n                    (change)=\"checkAllColumnCheckBoxes($event, i+1)\" />\r\n            <a class=\"product-number-link\"\r\n                href=\"/v2/#/products/(productDetails:{{dataItem.productId}})?activeTab=product-overview\">\r\n                {{dataItem.codeString}}\r\n            </a>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"description\" title=\"Description\" class=\"header-description\">\r\n        <ng-template kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\r\n            {{column.title}}({{columnIndex}})\r\n        </ng-template>\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"\r\n                        *ngIf=\"{{dataItem.lineItemTypeId}}!=2; else configuredItemDescription\">\r\n            {{dataItem.description}}\r\n        </ng-template>\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\" #configuredItemDescription>\r\n            <p>Configured Item</p>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <kendo-grid-column field=\"submittalSheets\" title=\"Submittal Sheets\" class=\"header-reference\">\r\n        <ng-template kendoGridHeaderTemplate let-column let-columnIndex=\"columnIndex\">\r\n\r\n            <input type=\"checkbox\"\r\n                    id={{column.field}}\r\n                    name={{column.title}}\r\n                    class=\"pull-left\"\r\n                    [attr.colIndex]=\"columnIndex\"\r\n                    [attr.rowIndex]=\"0\"\r\n                    (change)=\"checkAllRowCheckBoxes($event)\" />\r\n            {{column.title}}({{columnIndex}})\r\n        </ng-template>\r\n        <ng-template kendoGridCellTemplate let-dataItem let-rowIndex=\"rowIndex\"\r\n                        *ngIf=\"dataItem.hasSubmittalSheets\">\r\n            <input type=\"checkbox\"\r\n                    id=\"{{dataItem.submittalSheetsDocId}}\"\r\n                    class=\"chkBoxSubmittalSheets\"\r\n                    name=\"chkBoxSubmittalSheetsRow\"\r\n                    [attr.rowIndex]=\"rowIndex\"\r\n                    value=\"{{dataItem.submittalSheetsDocId}}\"\r\n                    (change)=\"checkAllColumnCheckBoxes($event, rowIndex)\" />\r\n            <a class=\"product-number-link\" href=\"{{dataItem.submittalSheetUrl}}\">\r\n                View\r\n            </a>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n</kendo-grid>\r\n-->\r\n"

/***/ }),

/***/ "../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotePackageGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_file_saver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_file_saver__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_submittal_package_service__ = __webpack_require__("../../../../../src/app/submittal/services/submittal-package.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/submittal/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_submittal_package__ = __webpack_require__("../../../../../src/app/submittal/models/submittal-package.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_models_user__ = __webpack_require__("../../../../../src/app/shared/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var QuotePackageGridComponent = /** @class */ (function () {
    function QuotePackageGridComponent(submittalService, 
        // private ngProgress: NgProgress,
        toastrSvc, dragulaSvc) {
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
    /***
     * Event emitter receipt from child components
     ***/
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
    /***
     On Form Submit by clicking on Create Package button
     ***/
    QuotePackageGridComponent.prototype.onSubmit = function () {
        //this.blockUI.start('Loading...');
        //this.ngProgress.start();
        var submittalModel = new __WEBPACK_IMPORTED_MODULE_8__models_submittal_package__["a" /* SubmittalPackageModel */]();
        submittalModel.quoteId = this.quoteId; //"724134023730921472";
        submittalModel.projectId = this.projectId; //"724133966570946560";
        var quotePackageCheckedItems = jQuery("#submittal-package-table")
            .find("tbody input[type=checkbox]:checked").map(function () {
            return this.value;
        }).get();
        if (quotePackageCheckedItems.length > 0) {
            jQuery("#progressbarModal").modal();
            //var $progress = jQuery('.progress');
            //var $progressBar = jQuery('.progress-bar');
            //$progressBar.css('width', '30%');
            // $progress.css('display', 'block');
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
            //$progressBar.css('width', '80%');
            //$progressBar.css('width', '100%');
            //Call api through submittal service
            if (submittalModel.productsAndDocuments.length > 0) {
                this.runProgressBar();
                //setTimeout(function () {
                //    $progressBar.css('width', '50%');
                //    setTimeout(function () {
                //        $progressBar.css('width', '98%');
                //        // location.href = "index.php"
                //    }, 3000); // WAIT 2 seconds
                //}, 2000);  
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
                    __WEBPACK_IMPORTED_MODULE_2_file_saver__(blob, filename);
                    jQuery("#progressbarModal").modal('hide');
                    //this.ngProgress.done();
                    //this.blockUI.stop();
                }, function (err) {
                    console.log(err);
                });
            }
            else {
                //this.ngProgress.done();
                //this.blockUI.stop();
                toastr.error("Couln't generate submittal package. Please try again.");
            }
        }
        else {
            //this.ngProgress.done();
            //this.blockUI.stop();
            toastr.error("Couln't generate submittal package. Please check required boxes before creating package.");
        }
    };
    QuotePackageGridComponent.prototype.runProgressBar = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].timer(0, 100)
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
    /***
     File Upload Event Handlers
     ***/
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
    /*** Main Table Button Click Events ***/
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
                if (parseInt(value.attributes.rowIndex.value) === rowId || parseInt(value.attributes.rowIndex.value) === 0)
                    value.checked = false;
            });
        }
    };
    /* Unchecks left most check box as well as the column header belong to the user clicked checkboxes column and header */
    QuotePackageGridComponent.prototype.uncheckBothRowAndColumnHeaderCheckBoxes = function (rowId, colIdentifier) {
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
    };
    /*** checks/unchecks all check boxes of that particular column ***/
    QuotePackageGridComponent.prototype.checkAllRowCheckBoxes = function (event) {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
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
                    }
                    else {
                        value.checked = false;
                    }
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('componentInsideModal'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_7__components_modal_modal_component__["a" /* ModalComponent */])
    ], QuotePackageGridComponent.prototype, "componentInsideModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("tblSubmittalPackage"),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "tblSubmittalPackage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "blockUI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], QuotePackageGridComponent.prototype, "quoteItemsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_9__shared_models_user__["a" /* User */])
    ], QuotePackageGridComponent.prototype, "userModel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "quotePackageAttachedFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], QuotePackageGridComponent.prototype, "hasAttachedFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "possibleDocsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "quoteId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], QuotePackageGridComponent.prototype, "projectId", void 0);
    QuotePackageGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'quote-package-grid',
            template: __webpack_require__("../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.html"),
            styles: [__webpack_require__("../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_submittal_package_service__["a" /* SubmittalPackageService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_dragula_ng2_dragula__["DragulaService"]])
    ], QuotePackageGridComponent);
    return QuotePackageGridComponent;
}());

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


/***/ }),

/***/ "../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n.container-fluid {\r\n    background-color: #fff;\r\n    width: 97%;\r\n    margin-left: 30px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n}\r\n\r\n\r\n.breadcrumbs {\r\n    color: rgb(51, 51, 51);\r\n    display: block;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 14px;\r\n    line-height: 20px;\r\n    list-style-type: disc;\r\n    margin-bottom: 10px;\r\n    margin-top: 0px;\r\n    padding-bottom: 0px;\r\n    padding-left: 10px;\r\n    padding-right: 0px;\r\n    padding-top: 10px;\r\n    -webkit-text-size-adjust: 100%;\r\n        -ms-text-size-adjust: 100%;\r\n            text-size-adjust: 100%;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.html":
/***/ (function(module, exports) {

module.exports = " \r\n\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n<div id=\"main-container\" class=\"container-fluid\">\r\n    \r\n    <div class=\"main-content\">\r\n        <ul class=\"breadcrumbs\">\r\n            <li><a href=\"/v2/#/project/projectList\">Projects</a></li>\r\n            <li><a href=\"/v2/#/project/project{{quote.projectId}}\">{{quote.project.name}}</a></li>\r\n            <li><a href=\"/v2/#/quote/quote/{{quote.quoteId}}/existingRecord\">{{quote.title}}</a></li>\r\n            <li>Submittal package</li>\r\n        </ul>        \r\n        \r\n        <!--<div *ngIf=\"quoteItemsList.length > 0\">-->\r\n            <quote-package-grid [userModel]=\"user\"\r\n                                [possibleDocsList]=\"possibleDocsList\"\r\n                                [quoteItemsList]=\"quoteItemsList\"\r\n                                [quotePackageAttachedFiles]=\"quotePackageAttachedFiles\"\r\n                                [quoteId]=\"quote.quoteId\"\r\n                                [projectId]=\"quote.projectId\"\r\n                                [hasAttachedFiles]=\"hasAttachedFiles\">\r\n            </quote-package-grid>\r\n        <!--</div>-->\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittalPackageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_submittal_package_service__ = __webpack_require__("../../../../../src/app/submittal/services/submittal-package.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmittalPackageComponent = /** @class */ (function () {
    function SubmittalPackageComponent(router, route, http, submittalPackageSvc) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.submittalPackageSvc = submittalPackageSvc;
        this.hasAttachedFiles = false;
        this.quoteItemsList = [];
        this.quotePackageAttachedFiles = [];
        //array of column headers that could be repeated across as td 
        this.possibleDocsList = [
            { colId: 2, name: "submittalSheets", inputname: "chkSubmittalSheetsHeader", label: "Submittal Sheets" },
            { colId: 3, name: "installationManual", inputname: "chkInstallationManualHeader", label: "Installation Manual" },
            { colId: 4, name: "operationManual", inputname: "chkOperationManualHeader", label: "Operation Manual" },
            { colId: 5, name: "guideSpecs", inputname: "chkGuideSpecsHeader", label: "Guide Specs" },
            { colId: 6, name: "productBrochure", inputname: "chkProductBrochureHeader", label: "Product Brochure" },
            { colId: 7, name: "revitDrawing", inputname: "chkRevitDrawingHeader", label: "Revit Drawing" },
            { colId: 8, name: "cadDrawing", inputname: "chkCadDrawingHeader", label: "CAD Drawing" },
            { colId: 9, name: "productFlyer", inputname: "chkProductFlyerHeader", label: "Product Flyer" },
        ];
        this.action = this.route.snapshot.url[0].path;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quote = this.route.snapshot.data['quoteModel'].model;
    }
    SubmittalPackageComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    SubmittalPackageComponent.prototype.loadItems = function () {
        var _this = this;
        return this.submittalPackageSvc.getQuotePackage(this.quote.quoteId)
            .subscribe(function (data) {
            _this.quoteItemsList = data.items;
            _this.quotePackageAttachedFiles = data.quotePackageAttachedFiles;
            if (_this.quotePackageAttachedFiles.length > 0)
                _this.hasAttachedFiles = true;
            //loop through again to set the values and ids for checkboxes
            _this.quoteItemsList.forEach(function (quote, index) {
                //configured items
                if (quote.lineItemTypeId === 2) {
                    quote.hasSubmittalSheets = true;
                    quote.documents.forEach(function (doc, index) {
                        quote.submittalSheetsDocId = doc.productId + "-" + doc.documentTypeId;
                        quote.submittalSheetUrl = doc.url;
                    });
                }
                else {
                    quote.documents.forEach(function (doc, index) {
                        //set values for each checkboxes
                        //Submittal Sheets 
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000008) {
                            quote.hasSubmittalSheets = true;
                            quote.submittalSheetsDocObj = doc;
                            if (quote.submittalSheetsDocObj != null) {
                                quote.submittalSheetsDocId =
                                    quote.submittalSheetsDocObj.productId + "-" + quote.submittalSheetsDocObj.documentTypeId;
                                quote.submittalSheetUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Installation Manual
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000002) {
                            quote.hasInstallationManual = true;
                            quote.installationManualDocObj = doc;
                            if (quote.installationManualDocObj != null) {
                                quote.installationManualDocId =
                                    quote.installationManualDocObj.productId + "-" + quote.installationManualDocObj.documentTypeId;
                                quote.installationManualUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Operation Manual
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000003) {
                            quote.hasOperationManual = true;
                            quote.operationManualDocObj = doc;
                            if (quote.operationManualDocObj != null) {
                                quote.operationManualDocId =
                                    quote.operationManualDocObj.productId + "-" + quote.operationManualDocObj.documentTypeId;
                                quote.operationalManualUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Guide Specs
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000009) {
                            quote.hasGuideSpecs = true;
                            quote.guideSpecsDocObj = doc;
                            if (quote.guideSpecsDocObj != null) {
                                quote.guideSpecsDocId =
                                    quote.guideSpecsDocObj.productId + "-" + quote.guideSpecsDocObj.documentTypeId;
                                quote.guideSpecsUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Product Brochure
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000001) {
                            quote.hasProductBrochure = true;
                            quote.productBrochureDocObj = doc;
                            if (quote.productBrochureDocObj != null) {
                                quote.productBrochureDocId =
                                    quote.productBrochureDocObj.productId + "-" + quote.productBrochureDocObj.documentTypeId;
                                quote.productBrochureUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Revit Drawing
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000012) {
                            quote.hasRevitDrawing = true;
                            quote.revitDrawingDocObj = doc;
                            if (quote.revitDrawingDocObj != null) {
                                quote.revitDrawingDocId =
                                    quote.revitDrawingDocObj.productId + "-" + quote.revitDrawingDocObj.documentTypeId;
                                quote.revitDrawingUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //CAD Drawing
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000011) {
                            quote.hasCadDrawing = true;
                            quote.cadDrawingDocObj = doc;
                            if (quote.cadDrawingDocObj != null) {
                                quote.cadDrawingDocId =
                                    quote.cadDrawingDocObj.productId + "-" + quote.cadDrawingDocObj.documentTypeId;
                                quote.cadDrawingUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                        //Product Flyer
                        if (doc.productId === quote.productId && doc.documentTypeId === 100000000) {
                            quote.hasProductFlyer = true;
                            quote.productFlyerDocObj = doc;
                            if (quote.productFlyerDocObj != null) {
                                quote.productFlyerDocId =
                                    quote.productFlyerDocObj.productId + "-" + quote.productFlyerDocObj.documentTypeId;
                                quote.productFlyerUrl = doc.url;
                            }
                            quote.documents.splice(index, 1);
                        }
                    });
                }
            });
        });
    };
    SubmittalPackageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'submittal-package',
            template: __webpack_require__("../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.html"),
            styles: [__webpack_require__("../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__services_submittal_package_service__["a" /* SubmittalPackageService */]])
    ], SubmittalPackageComponent);
    return SubmittalPackageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_attached_files_attached_files_component__ = __webpack_require__("../../../../../src/app/submittal/components/attached-files/attached-files.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_attached_files_attached_files_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_modal_modal_component__ = __webpack_require__("../../../../../src/app/submittal/components/modal/modal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_modal_modal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_quote_package_grid_quote_package_grid_component__ = __webpack_require__("../../../../../src/app/submittal/components/quote-package-grid/quote-package-grid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__components_quote_package_grid_quote_package_grid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_submittal_package_grid_submittal_package_component__ = __webpack_require__("../../../../../src/app/submittal/components/submittal-package-grid/submittal-package.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__components_submittal_package_grid_submittal_package_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_document__ = __webpack_require__("../../../../../src/app/submittal/models/document.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_product_and_document__ = __webpack_require__("../../../../../src/app/submittal/models/product-and-document.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_quoteItemList__ = __webpack_require__("../../../../../src/app/submittal/models/quoteItemList.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_submittal_file_info__ = __webpack_require__("../../../../../src/app/submittal/models/submittal-file-info.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_submittal_package__ = __webpack_require__("../../../../../src/app/submittal/models/submittal-package.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_submittal_package_service__ = __webpack_require__("../../../../../src/app/submittal/services/submittal-package.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_9__services_submittal_package_service__["a"]; });












/***/ }),

/***/ "../../../../../src/app/submittal/models/document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DocumentModel */
var DocumentModel = /** @class */ (function () {
    function DocumentModel() {
    }
    return DocumentModel;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/models/product-and-document.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProductsAndDocumentsModel */
var ProductsAndDocumentsModel = /** @class */ (function () {
    function ProductsAndDocumentsModel() {
    }
    return ProductsAndDocumentsModel;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/models/quoteItemList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export QuoteItemListModel */
var QuoteItemListModel = /** @class */ (function () {
    function QuoteItemListModel() {
        this.hasSubmittalSheets = false;
        this.hasInstallationManual = false;
        this.hasOperationManual = false;
        this.hasGuideSpecs = false;
        this.hasProductBrochure = false;
        this.hasRevitDrawing = false;
        this.hasCadDrawing = false;
        this.hasProductFlyer = false;
    }
    return QuoteItemListModel;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/models/submittal-file-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SubmittalFileInfo */
var SubmittalFileInfo = /** @class */ (function () {
    function SubmittalFileInfo() {
    }
    return SubmittalFileInfo;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/models/submittal-package.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittalPackageModel; });
var SubmittalPackageModel = /** @class */ (function () {
    function SubmittalPackageModel() {
        this.name = "";
        this.fileName = "";
        this.description = "";
        this.order = "";
        this.addToQuote = false;
        this.accessUrl = "";
        this.clickable = false;
        this.downloadable = false;
        this.projectName = "";
        //public fileInfo: SubmittalFileInfo;
    }
    return SubmittalPackageModel;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/services/submittal-package.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittalPackageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { BaseErrorHandlerComponent } from '../../shared/components/base-error-handler/base-error-handler.component';
var SubmittalPackageService = /** @class */ (function () {
    function SubmittalPackageService(http, toastrService) {
        this.http = http;
        this.toastrService = toastrService;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: this.headers });
        this.downloadHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.downloadOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({
            //method: RequestMethod.Post,
            responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* ResponseContentType */].Blob,
            headers: this.downloadHeaders
        });
        //super(toastrService);
    }
    SubmittalPackageService.prototype.getQuotePackage = function (quoteId) {
        var data = this.http.get("/api/SubmittalPackage/GetQuotePackage?quoteId=" + quoteId)
            .map(this.extractData)
            .catch(this.handleError);
        return data;
    };
    SubmittalPackageService.prototype.getAttachedFiles = function (quoteId) {
        var data = this.http.get("/api/SubmittalPackage/GetAttachedFiles?quoteId=" + quoteId)
            .map(function (res) { return res.json().model; })
            .catch(this.handleError);
        return data;
    };
    SubmittalPackageService.prototype.createQuotePackage = function (model) {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageCreate";
        return this.http.post(this.apiUrl, model, this.downloadOptions)
            .map(function (res) {
            return res;
        })
            .share()
            .catch(this.handleError);
    };
    SubmittalPackageService.prototype.deleteFile = function (model) {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageDeleteAttachFile";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.apiUrl, model, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error); });
    };
    SubmittalPackageService.prototype.extractData = function (res) {
        var body = res.json().model;
        return body || null;
    };
    SubmittalPackageService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        //console.error(error); // log to console instead
        console.log(error);
        // this.toastrSvc.
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    SubmittalPackageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__["a" /* ToastrService */]])
    ], SubmittalPackageService);
    return SubmittalPackageService;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/submittal-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmittalPackageRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/submittal/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quotes_services_quote_resolver_service__ = __webpack_require__("../../../../../src/app/quotes/services/quote-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var submittalPackageRoutes = [
    {
        path: 'submittalPackage/:projectid/:quoteid',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["d" /* SubmittalPackageComponent */],
        resolve: {
            quoteModel: __WEBPACK_IMPORTED_MODULE_4__quotes_services_quote_resolver_service__["a" /* QuoteEditResolver */],
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    }
];
var SubmittalPackageRoutingModule = /** @class */ (function () {
    function SubmittalPackageRoutingModule() {
    }
    SubmittalPackageRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(submittalPackageRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
        })
    ], SubmittalPackageRoutingModule);
    return SubmittalPackageRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/submittal/submittal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBMITTALPACKAGE_COMPONENTS", function() { return SUBMITTALPACKAGE_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittalPackageModule", function() { return SubmittalPackageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes_quotes_module__ = __webpack_require__("../../../../../src/app/quotes/quotes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__ = __webpack_require__("../../../../ng2-dragula/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_upload__ = __webpack_require__("../../../../@progress/kendo-angular-upload/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__submittal_routing_module__ = __webpack_require__("../../../../../src/app/submittal/submittal-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index__ = __webpack_require__("../../../../../src/app/submittal/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SUBMITTALPACKAGE_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_6__index__["a" /* AttachedFilesComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["c" /* QuotePackageGridComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["d" /* SubmittalPackageComponent */],
    __WEBPACK_IMPORTED_MODULE_6__index__["b" /* ModalComponent */]
];
var SubmittalPackageModule = /** @class */ (function () {
    function SubmittalPackageModule() {
    }
    SubmittalPackageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ng2_dragula__["DragulaModule"],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_upload__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_5__submittal_routing_module__["a" /* SubmittalPackageRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__quotes_quotes_module__["QuotesModule"]
            ],
            exports: SUBMITTALPACKAGE_COMPONENTS,
            declarations: SUBMITTALPACKAGE_COMPONENTS,
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__index__["e" /* SubmittalPackageService */]
            ]
        })
    ], SubmittalPackageModule);
    return SubmittalPackageModule;
}());



/***/ }),

/***/ "../../../../atoa/atoa.js":
/***/ (function(module, exports) {

module.exports = function atoa (a, n) { return Array.prototype.slice.call(a, n); }


/***/ }),

/***/ "../../../../contra/debounce.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ticky = __webpack_require__("../../../../ticky/ticky-browser.js");

module.exports = function debounce (fn, args, ctx) {
  if (!fn) { return; }
  ticky(function run () {
    fn.apply(ctx || null, args || []);
  });
};


/***/ }),

/***/ "../../../../contra/emitter.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var atoa = __webpack_require__("../../../../atoa/atoa.js");
var debounce = __webpack_require__("../../../../contra/debounce.js");

module.exports = function emitter (thing, options) {
  var opts = options || {};
  var evt = {};
  if (thing === undefined) { thing = {}; }
  thing.on = function (type, fn) {
    if (!evt[type]) {
      evt[type] = [fn];
    } else {
      evt[type].push(fn);
    }
    return thing;
  };
  thing.once = function (type, fn) {
    fn._once = true; // thing.off(fn) still works!
    thing.on(type, fn);
    return thing;
  };
  thing.off = function (type, fn) {
    var c = arguments.length;
    if (c === 1) {
      delete evt[type];
    } else if (c === 0) {
      evt = {};
    } else {
      var et = evt[type];
      if (!et) { return thing; }
      et.splice(et.indexOf(fn), 1);
    }
    return thing;
  };
  thing.emit = function () {
    var args = atoa(arguments);
    return thing.emitterSnapshot(args.shift()).apply(this, args);
  };
  thing.emitterSnapshot = function (type) {
    var et = (evt[type] || []).slice(0);
    return function () {
      var args = atoa(arguments);
      var ctx = this || thing;
      if (type === 'error' && opts.throws !== false && !et.length) { throw args.length === 1 ? args[0] : args; }
      et.forEach(function emitter (listen) {
        if (opts.async) { debounce(listen, args, ctx); } else { listen.apply(ctx, args); }
        if (listen._once) { thing.off(type, listen); }
      });
      return thing;
    };
  };
  return thing;
};


/***/ }),

/***/ "../../../../crossvent/src/crossvent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var customEvent = __webpack_require__("../../../../custom-event/index.js");
var eventmap = __webpack_require__("../../../../crossvent/src/eventmap.js");
var doc = global.document;
var addEvent = addEventEasy;
var removeEvent = removeEventEasy;
var hardCache = [];

if (!global.addEventListener) {
  addEvent = addEventHard;
  removeEvent = removeEventHard;
}

module.exports = {
  add: addEvent,
  remove: removeEvent,
  fabricate: fabricateEvent
};

function addEventEasy (el, type, fn, capturing) {
  return el.addEventListener(type, fn, capturing);
}

function addEventHard (el, type, fn) {
  return el.attachEvent('on' + type, wrap(el, type, fn));
}

function removeEventEasy (el, type, fn, capturing) {
  return el.removeEventListener(type, fn, capturing);
}

function removeEventHard (el, type, fn) {
  var listener = unwrap(el, type, fn);
  if (listener) {
    return el.detachEvent('on' + type, listener);
  }
}

function fabricateEvent (el, type, model) {
  var e = eventmap.indexOf(type) === -1 ? makeCustomEvent() : makeClassicEvent();
  if (el.dispatchEvent) {
    el.dispatchEvent(e);
  } else {
    el.fireEvent('on' + type, e);
  }
  function makeClassicEvent () {
    var e;
    if (doc.createEvent) {
      e = doc.createEvent('Event');
      e.initEvent(type, true, true);
    } else if (doc.createEventObject) {
      e = doc.createEventObject();
    }
    return e;
  }
  function makeCustomEvent () {
    return new customEvent(type, { detail: model });
  }
}

function wrapperFactory (el, type, fn) {
  return function wrapper (originalEvent) {
    var e = originalEvent || global.event;
    e.target = e.target || e.srcElement;
    e.preventDefault = e.preventDefault || function preventDefault () { e.returnValue = false; };
    e.stopPropagation = e.stopPropagation || function stopPropagation () { e.cancelBubble = true; };
    e.which = e.which || e.keyCode;
    fn.call(el, e);
  };
}

function wrap (el, type, fn) {
  var wrapper = unwrap(el, type, fn) || wrapperFactory(el, type, fn);
  hardCache.push({
    wrapper: wrapper,
    element: el,
    type: type,
    fn: fn
  });
  return wrapper;
}

function unwrap (el, type, fn) {
  var i = find(el, type, fn);
  if (i) {
    var wrapper = hardCache[i].wrapper;
    hardCache.splice(i, 1); // free up a tad of memory
    return wrapper;
  }
}

function find (el, type, fn) {
  var i, item;
  for (i = 0; i < hardCache.length; i++) {
    item = hardCache[i];
    if (item.element === el && item.type === type && item.fn === fn) {
      return i;
    }
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../crossvent/src/eventmap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var eventmap = [];
var eventname = '';
var ron = /^on/;

for (eventname in global) {
  if (ron.test(eventname)) {
    eventmap.push(eventname.slice(2));
  }
}

module.exports = eventmap;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../custom-event/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../dragula/classes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cache = {};
var start = '(?:^|\\s)';
var end = '(?:\\s|$)';

function lookupClass (className) {
  var cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

function addClass (el, className) {
  var current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

function rmClass (el, className) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

module.exports = {
  add: addClass,
  rm: rmClass
};


/***/ }),

/***/ "../../../../dragula/dragula.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var emitter = __webpack_require__("../../../../contra/emitter.js");
var crossvent = __webpack_require__("../../../../crossvent/src/crossvent.js");
var classes = __webpack_require__("../../../../dragula/classes.js");
var doc = document;
var documentElement = doc.documentElement;

function dragula (initialContainers, options) {
  var len = arguments.length;
  if (len === 1 && Array.isArray(initialContainers) === false) {
    options = initialContainers;
    initialContainers = [];
  }
  var _mirror; // mirror image
  var _source; // source container
  var _item; // item being dragged
  var _offsetX; // reference x
  var _offsetY; // reference y
  var _moveX; // reference move x
  var _moveY; // reference move y
  var _initialSibling; // reference sibling when grabbed
  var _currentSibling; // reference sibling now
  var _copy; // item used for copying
  var _renderTimer; // timer for setTimeout renderMirrorImage
  var _lastDropTarget = null; // last container item was over
  var _grabbed; // holds mousedown context until first mousemove

  var o = options || {};
  if (o.moves === void 0) { o.moves = always; }
  if (o.accepts === void 0) { o.accepts = always; }
  if (o.invalid === void 0) { o.invalid = invalidTarget; }
  if (o.containers === void 0) { o.containers = initialContainers || []; }
  if (o.isContainer === void 0) { o.isContainer = never; }
  if (o.copy === void 0) { o.copy = false; }
  if (o.copySortSource === void 0) { o.copySortSource = false; }
  if (o.revertOnSpill === void 0) { o.revertOnSpill = false; }
  if (o.removeOnSpill === void 0) { o.removeOnSpill = false; }
  if (o.direction === void 0) { o.direction = 'vertical'; }
  if (o.ignoreInputTextSelection === void 0) { o.ignoreInputTextSelection = true; }
  if (o.mirrorContainer === void 0) { o.mirrorContainer = doc.body; }

  var drake = emitter({
    containers: o.containers,
    start: manualStart,
    end: end,
    cancel: cancel,
    remove: remove,
    destroy: destroy,
    canMove: canMove,
    dragging: false
  });

  if (o.removeOnSpill === true) {
    drake.on('over', spillOver).on('out', spillOut);
  }

  events();

  return drake;

  function isContainer (el) {
    return drake.containers.indexOf(el) !== -1 || o.isContainer(el);
  }

  function events (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousedown', grab);
    touchy(documentElement, op, 'mouseup', release);
  }

  function eventualMovements (remove) {
    var op = remove ? 'remove' : 'add';
    touchy(documentElement, op, 'mousemove', startBecauseMouseMoved);
  }

  function movements (remove) {
    var op = remove ? 'remove' : 'add';
    crossvent[op](documentElement, 'selectstart', preventGrabbed); // IE8
    crossvent[op](documentElement, 'click', preventGrabbed);
  }

  function destroy () {
    events(true);
    release({});
  }

  function preventGrabbed (e) {
    if (_grabbed) {
      e.preventDefault();
    }
  }

  function grab (e) {
    _moveX = e.clientX;
    _moveY = e.clientY;

    var ignore = whichMouseButton(e) !== 1 || e.metaKey || e.ctrlKey;
    if (ignore) {
      return; // we only care about honest-to-god left clicks and touch events
    }
    var item = e.target;
    var context = canStart(item);
    if (!context) {
      return;
    }
    _grabbed = context;
    eventualMovements();
    if (e.type === 'mousedown') {
      if (isInput(item)) { // see also: https://github.com/bevacqua/dragula/issues/208
        item.focus(); // fixes https://github.com/bevacqua/dragula/issues/176
      } else {
        e.preventDefault(); // fixes https://github.com/bevacqua/dragula/issues/155
      }
    }
  }

  function startBecauseMouseMoved (e) {
    if (!_grabbed) {
      return;
    }
    if (whichMouseButton(e) === 0) {
      release({});
      return; // when text is selected on an input and then dragged, mouseup doesn't fire. this is our only hope
    }
    // truthy check fixes #239, equality fixes #207
    if (e.clientX !== void 0 && e.clientX === _moveX && e.clientY !== void 0 && e.clientY === _moveY) {
      return;
    }
    if (o.ignoreInputTextSelection) {
      var clientX = getCoord('clientX', e);
      var clientY = getCoord('clientY', e);
      var elementBehindCursor = doc.elementFromPoint(clientX, clientY);
      if (isInput(elementBehindCursor)) {
        return;
      }
    }

    var grabbed = _grabbed; // call to end() unsets _grabbed
    eventualMovements(true);
    movements();
    end();
    start(grabbed);

    var offset = getOffset(_item);
    _offsetX = getCoord('pageX', e) - offset.left;
    _offsetY = getCoord('pageY', e) - offset.top;

    classes.add(_copy || _item, 'gu-transit');
    renderMirrorImage();
    drag(e);
  }

  function canStart (item) {
    if (drake.dragging && _mirror) {
      return;
    }
    if (isContainer(item)) {
      return; // don't drag container itself
    }
    var handle = item;
    while (getParent(item) && isContainer(getParent(item)) === false) {
      if (o.invalid(item, handle)) {
        return;
      }
      item = getParent(item); // drag target should be a top element
      if (!item) {
        return;
      }
    }
    var source = getParent(item);
    if (!source) {
      return;
    }
    if (o.invalid(item, handle)) {
      return;
    }

    var movable = o.moves(item, source, handle, nextEl(item));
    if (!movable) {
      return;
    }

    return {
      item: item,
      source: source
    };
  }

  function canMove (item) {
    return !!canStart(item);
  }

  function manualStart (item) {
    var context = canStart(item);
    if (context) {
      start(context);
    }
  }

  function start (context) {
    if (isCopy(context.item, context.source)) {
      _copy = context.item.cloneNode(true);
      drake.emit('cloned', _copy, context.item, 'copy');
    }

    _source = context.source;
    _item = context.item;
    _initialSibling = _currentSibling = nextEl(context.item);

    drake.dragging = true;
    drake.emit('drag', _item, _source);
  }

  function invalidTarget () {
    return false;
  }

  function end () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    drop(item, getParent(item));
  }

  function ungrab () {
    _grabbed = false;
    eventualMovements(true);
    movements(true);
  }

  function release (e) {
    ungrab();

    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    if (dropTarget && ((_copy && o.copySortSource) || (!_copy || dropTarget !== _source))) {
      drop(item, dropTarget);
    } else if (o.removeOnSpill) {
      remove();
    } else {
      cancel();
    }
  }

  function drop (item, target) {
    var parent = getParent(item);
    if (_copy && o.copySortSource && target === _source) {
      parent.removeChild(_item);
    }
    if (isInitialPlacement(target)) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, target, _source, _currentSibling);
    }
    cleanup();
  }

  function remove () {
    if (!drake.dragging) {
      return;
    }
    var item = _copy || _item;
    var parent = getParent(item);
    if (parent) {
      parent.removeChild(item);
    }
    drake.emit(_copy ? 'cancel' : 'remove', item, parent, _source);
    cleanup();
  }

  function cancel (revert) {
    if (!drake.dragging) {
      return;
    }
    var reverts = arguments.length > 0 ? revert : o.revertOnSpill;
    var item = _copy || _item;
    var parent = getParent(item);
    var initial = isInitialPlacement(parent);
    if (initial === false && reverts) {
      if (_copy) {
        if (parent) {
          parent.removeChild(_copy);
        }
      } else {
        _source.insertBefore(item, _initialSibling);
      }
    }
    if (initial || reverts) {
      drake.emit('cancel', item, _source, _source);
    } else {
      drake.emit('drop', item, parent, _source, _currentSibling);
    }
    cleanup();
  }

  function cleanup () {
    var item = _copy || _item;
    ungrab();
    removeMirrorImage();
    if (item) {
      classes.rm(item, 'gu-transit');
    }
    if (_renderTimer) {
      clearTimeout(_renderTimer);
    }
    drake.dragging = false;
    if (_lastDropTarget) {
      drake.emit('out', item, _lastDropTarget, _source);
    }
    drake.emit('dragend', item);
    _source = _item = _copy = _initialSibling = _currentSibling = _renderTimer = _lastDropTarget = null;
  }

  function isInitialPlacement (target, s) {
    var sibling;
    if (s !== void 0) {
      sibling = s;
    } else if (_mirror) {
      sibling = _currentSibling;
    } else {
      sibling = nextEl(_copy || _item);
    }
    return target === _source && sibling === _initialSibling;
  }

  function findDropTarget (elementBehindCursor, clientX, clientY) {
    var target = elementBehindCursor;
    while (target && !accepted()) {
      target = getParent(target);
    }
    return target;

    function accepted () {
      var droppable = isContainer(target);
      if (droppable === false) {
        return false;
      }

      var immediate = getImmediateChild(target, elementBehindCursor);
      var reference = getReference(target, immediate, clientX, clientY);
      var initial = isInitialPlacement(target, reference);
      if (initial) {
        return true; // should always be able to drop it right back where it was
      }
      return o.accepts(_item, target, _source, reference);
    }
  }

  function drag (e) {
    if (!_mirror) {
      return;
    }
    e.preventDefault();

    var clientX = getCoord('clientX', e);
    var clientY = getCoord('clientY', e);
    var x = clientX - _offsetX;
    var y = clientY - _offsetY;

    _mirror.style.left = x + 'px';
    _mirror.style.top = y + 'px';

    var item = _copy || _item;
    var elementBehindCursor = getElementBehindPoint(_mirror, clientX, clientY);
    var dropTarget = findDropTarget(elementBehindCursor, clientX, clientY);
    var changed = dropTarget !== null && dropTarget !== _lastDropTarget;
    if (changed || dropTarget === null) {
      out();
      _lastDropTarget = dropTarget;
      over();
    }
    var parent = getParent(item);
    if (dropTarget === _source && _copy && !o.copySortSource) {
      if (parent) {
        parent.removeChild(item);
      }
      return;
    }
    var reference;
    var immediate = getImmediateChild(dropTarget, elementBehindCursor);
    if (immediate !== null) {
      reference = getReference(dropTarget, immediate, clientX, clientY);
    } else if (o.revertOnSpill === true && !_copy) {
      reference = _initialSibling;
      dropTarget = _source;
    } else {
      if (_copy && parent) {
        parent.removeChild(item);
      }
      return;
    }
    if (
      (reference === null && changed) ||
      reference !== item &&
      reference !== nextEl(item)
    ) {
      _currentSibling = reference;
      dropTarget.insertBefore(item, reference);
      drake.emit('shadow', item, dropTarget, _source);
    }
    function moved (type) { drake.emit(type, item, _lastDropTarget, _source); }
    function over () { if (changed) { moved('over'); } }
    function out () { if (_lastDropTarget) { moved('out'); } }
  }

  function spillOver (el) {
    classes.rm(el, 'gu-hide');
  }

  function spillOut (el) {
    if (drake.dragging) { classes.add(el, 'gu-hide'); }
  }

  function renderMirrorImage () {
    if (_mirror) {
      return;
    }
    var rect = _item.getBoundingClientRect();
    _mirror = _item.cloneNode(true);
    _mirror.style.width = getRectWidth(rect) + 'px';
    _mirror.style.height = getRectHeight(rect) + 'px';
    classes.rm(_mirror, 'gu-transit');
    classes.add(_mirror, 'gu-mirror');
    o.mirrorContainer.appendChild(_mirror);
    touchy(documentElement, 'add', 'mousemove', drag);
    classes.add(o.mirrorContainer, 'gu-unselectable');
    drake.emit('cloned', _mirror, _item, 'mirror');
  }

  function removeMirrorImage () {
    if (_mirror) {
      classes.rm(o.mirrorContainer, 'gu-unselectable');
      touchy(documentElement, 'remove', 'mousemove', drag);
      getParent(_mirror).removeChild(_mirror);
      _mirror = null;
    }
  }

  function getImmediateChild (dropTarget, target) {
    var immediate = target;
    while (immediate !== dropTarget && getParent(immediate) !== dropTarget) {
      immediate = getParent(immediate);
    }
    if (immediate === documentElement) {
      return null;
    }
    return immediate;
  }

  function getReference (dropTarget, target, x, y) {
    var horizontal = o.direction === 'horizontal';
    var reference = target !== dropTarget ? inside() : outside();
    return reference;

    function outside () { // slower, but able to figure out any position
      var len = dropTarget.children.length;
      var i;
      var el;
      var rect;
      for (i = 0; i < len; i++) {
        el = dropTarget.children[i];
        rect = el.getBoundingClientRect();
        if (horizontal && (rect.left + rect.width / 2) > x) { return el; }
        if (!horizontal && (rect.top + rect.height / 2) > y) { return el; }
      }
      return null;
    }

    function inside () { // faster, but only available if dropped inside a child element
      var rect = target.getBoundingClientRect();
      if (horizontal) {
        return resolve(x > rect.left + getRectWidth(rect) / 2);
      }
      return resolve(y > rect.top + getRectHeight(rect) / 2);
    }

    function resolve (after) {
      return after ? nextEl(target) : target;
    }
  }

  function isCopy (item, container) {
    return typeof o.copy === 'boolean' ? o.copy : o.copy(item, container);
  }
}

function touchy (el, op, type, fn) {
  var touch = {
    mouseup: 'touchend',
    mousedown: 'touchstart',
    mousemove: 'touchmove'
  };
  var pointers = {
    mouseup: 'pointerup',
    mousedown: 'pointerdown',
    mousemove: 'pointermove'
  };
  var microsoft = {
    mouseup: 'MSPointerUp',
    mousedown: 'MSPointerDown',
    mousemove: 'MSPointerMove'
  };
  if (global.navigator.pointerEnabled) {
    crossvent[op](el, pointers[type], fn);
  } else if (global.navigator.msPointerEnabled) {
    crossvent[op](el, microsoft[type], fn);
  } else {
    crossvent[op](el, touch[type], fn);
    crossvent[op](el, type, fn);
  }
}

function whichMouseButton (e) {
  if (e.touches !== void 0) { return e.touches.length; }
  if (e.which !== void 0 && e.which !== 0) { return e.which; } // see https://github.com/bevacqua/dragula/issues/261
  if (e.buttons !== void 0) { return e.buttons; }
  var button = e.button;
  if (button !== void 0) { // see https://github.com/jquery/jquery/blob/99e8ff1baa7ae341e94bb89c3e84570c7c3ad9ea/src/event.js#L573-L575
    return button & 1 ? 1 : button & 2 ? 3 : (button & 4 ? 2 : 0);
  }
}

function getOffset (el) {
  var rect = el.getBoundingClientRect();
  return {
    left: rect.left + getScroll('scrollLeft', 'pageXOffset'),
    top: rect.top + getScroll('scrollTop', 'pageYOffset')
  };
}

function getScroll (scrollProp, offsetProp) {
  if (typeof global[offsetProp] !== 'undefined') {
    return global[offsetProp];
  }
  if (documentElement.clientHeight) {
    return documentElement[scrollProp];
  }
  return doc.body[scrollProp];
}

function getElementBehindPoint (point, x, y) {
  var p = point || {};
  var state = p.className;
  var el;
  p.className += ' gu-hide';
  el = doc.elementFromPoint(x, y);
  p.className = state;
  return el;
}

function never () { return false; }
function always () { return true; }
function getRectWidth (rect) { return rect.width || (rect.right - rect.left); }
function getRectHeight (rect) { return rect.height || (rect.bottom - rect.top); }
function getParent (el) { return el.parentNode === doc ? null : el.parentNode; }
function isInput (el) { return el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || isEditable(el); }
function isEditable (el) {
  if (!el) { return false; } // no parents were editable
  if (el.contentEditable === 'false') { return false; } // stop the lookup
  if (el.contentEditable === 'true') { return true; } // found a contentEditable element in the chain
  return isEditable(getParent(el)); // contentEditable is set to 'inherit'
}

function nextEl (el) {
  return el.nextElementSibling || manually();
  function manually () {
    var sibling = el;
    do {
      sibling = sibling.nextSibling;
    } while (sibling && sibling.nodeType !== 1);
    return sibling;
  }
}

function getEventHost (e) {
  // on touchend event, we have to use `e.changedTouches`
  // see http://stackoverflow.com/questions/7192563/touchend-event-properties
  // see https://github.com/bevacqua/dragula/issues/34
  if (e.targetTouches && e.targetTouches.length) {
    return e.targetTouches[0];
  }
  if (e.changedTouches && e.changedTouches.length) {
    return e.changedTouches[0];
  }
  return e;
}

function getCoord (coord, e) {
  var host = getEventHost(e);
  var missMap = {
    pageX: 'clientX', // IE8
    pageY: 'clientY' // IE8
  };
  if (coord in missMap && !(coord in host) && missMap[coord] in host) {
    coord = missMap[coord];
  }
  return host[coord];
}

module.exports = dragula;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("../../../../webpack/buildin/global.js")))

/***/ }),

/***/ "../../../../file-saver/FileSaver.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* FileSaver.js
 * A saveAs() FileSaver implementation.
 * 1.3.2
 * 2016-06-16 18:25:19
 *
 * By Eli Grey, http://eligrey.com
 * License: MIT
 *   See https://github.com/eligrey/FileSaver.js/blob/master/LICENSE.md
 */

/*global self */
/*jslint bitwise: true, indent: 4, laxbreak: true, laxcomma: true, smarttabs: true, plusplus: true */

/*! @source http://purl.eligrey.com/github/FileSaver.js/blob/master/FileSaver.js */

var saveAs = saveAs || (function(view) {
	"use strict";
	// IE <10 is explicitly unsupported
	if (typeof view === "undefined" || typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
		return;
	}
	var
		  doc = view.document
		  // only get URL when necessary in case Blob.js hasn't overridden it yet
		, get_URL = function() {
			return view.URL || view.webkitURL || view;
		}
		, save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a")
		, can_use_save_link = "download" in save_link
		, click = function(node) {
			var event = new MouseEvent("click");
			node.dispatchEvent(event);
		}
		, is_safari = /constructor/i.test(view.HTMLElement) || view.safari
		, is_chrome_ios =/CriOS\/[\d]+/.test(navigator.userAgent)
		, throw_outside = function(ex) {
			(view.setImmediate || view.setTimeout)(function() {
				throw ex;
			}, 0);
		}
		, force_saveable_type = "application/octet-stream"
		// the Blob API is fundamentally broken as there is no "downloadfinished" event to subscribe to
		, arbitrary_revoke_timeout = 1000 * 40 // in ms
		, revoke = function(file) {
			var revoker = function() {
				if (typeof file === "string") { // file is an object URL
					get_URL().revokeObjectURL(file);
				} else { // file is a File
					file.remove();
				}
			};
			setTimeout(revoker, arbitrary_revoke_timeout);
		}
		, dispatch = function(filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		}
		, auto_bom = function(blob) {
			// prepend BOM for UTF-8 XML and text/* types (including HTML)
			// note: your browser will automatically convert UTF-16 U+FEFF to EF BB BF
			if (/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(blob.type)) {
				return new Blob([String.fromCharCode(0xFEFF), blob], {type: blob.type});
			}
			return blob;
		}
		, FileSaver = function(blob, name, no_auto_bom) {
			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			// First try a.download, then web filesystem, then object URLs
			var
				  filesaver = this
				, type = blob.type
				, force = type === force_saveable_type
				, object_url
				, dispatch_all = function() {
					dispatch(filesaver, "writestart progress write writeend".split(" "));
				}
				// on any filesys errors revert to saving with object URLs
				, fs_error = function() {
					if ((is_chrome_ios || (force && is_safari)) && view.FileReader) {
						// Safari doesn't allow downloading of blob urls
						var reader = new FileReader();
						reader.onloadend = function() {
							var url = is_chrome_ios ? reader.result : reader.result.replace(/^data:[^;]*;/, 'data:attachment/file;');
							var popup = view.open(url, '_blank');
							if(!popup) view.location.href = url;
							url=undefined; // release reference before dispatching
							filesaver.readyState = filesaver.DONE;
							dispatch_all();
						};
						reader.readAsDataURL(blob);
						filesaver.readyState = filesaver.INIT;
						return;
					}
					// don't create more object URLs than needed
					if (!object_url) {
						object_url = get_URL().createObjectURL(blob);
					}
					if (force) {
						view.location.href = object_url;
					} else {
						var opened = view.open(object_url, "_blank");
						if (!opened) {
							// Apple does not allow window.open, see https://developer.apple.com/library/safari/documentation/Tools/Conceptual/SafariExtensionGuide/WorkingwithWindowsandTabs/WorkingwithWindowsandTabs.html
							view.location.href = object_url;
						}
					}
					filesaver.readyState = filesaver.DONE;
					dispatch_all();
					revoke(object_url);
				}
			;
			filesaver.readyState = filesaver.INIT;

			if (can_use_save_link) {
				object_url = get_URL().createObjectURL(blob);
				setTimeout(function() {
					save_link.href = object_url;
					save_link.download = name;
					click(save_link);
					dispatch_all();
					revoke(object_url);
					filesaver.readyState = filesaver.DONE;
				});
				return;
			}

			fs_error();
		}
		, FS_proto = FileSaver.prototype
		, saveAs = function(blob, name, no_auto_bom) {
			return new FileSaver(blob, name || blob.name || "download", no_auto_bom);
		}
	;
	// IE 10+ (native saveAs)
	if (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob) {
		return function(blob, name, no_auto_bom) {
			name = name || blob.name || "download";

			if (!no_auto_bom) {
				blob = auto_bom(blob);
			}
			return navigator.msSaveOrOpenBlob(blob, name);
		};
	}

	FS_proto.abort = function(){};
	FS_proto.readyState = FS_proto.INIT = 0;
	FS_proto.WRITING = 1;
	FS_proto.DONE = 2;

	FS_proto.error =
	FS_proto.onwritestart =
	FS_proto.onprogress =
	FS_proto.onwrite =
	FS_proto.onabort =
	FS_proto.onerror =
	FS_proto.onwriteend =
		null;

	return saveAs;
}(
	   typeof self !== "undefined" && self
	|| typeof window !== "undefined" && window
	|| this.content
));
// `self` is undefined in Firefox for Android content script context
// while `this` is nsIContentFrameMessageManager
// with an attribute `content` that corresponds to the window

if (typeof module !== "undefined" && module.exports) {
  module.exports.saveAs = saveAs;
} else if (("function" !== "undefined" && __webpack_require__("../../../../webpack/buildin/amd-define.js") !== null) && (__webpack_require__("../../../../webpack/buildin/amd-options.js") !== null)) {
  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
    return saveAs;
  }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}


/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.class.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dragulaexpt = __webpack_require__("../../../../dragula/dragula.js");
exports.dragula = dragulaexpt.default || dragulaexpt;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.directive.js":
/***/ (function(module, exports, __webpack_require__) {

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
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
var dragula_class_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.class.js");
var DragulaDirective = (function () {
    function DragulaDirective(el, dragulaService) {
        this.el = el;
        this.dragulaService = dragulaService;
        this.container = el.nativeElement;
    }
    DragulaDirective.prototype.ngOnInit = function () {
        var _this = this;
        // console.log(this.bag);
        var bag = this.dragulaService.find(this.dragula);
        var checkModel = function () {
            if (_this.dragulaModel) {
                if (_this.drake.models) {
                    _this.drake.models.push(_this.dragulaModel);
                }
                else {
                    _this.drake.models = [_this.dragulaModel];
                }
            }
        };
        if (bag) {
            this.drake = bag.drake;
            checkModel();
            this.drake.containers.push(this.container);
        }
        else {
            this.drake = dragula_class_1.dragula([this.container], Object.assign({}, this.dragulaOptions));
            checkModel();
            this.dragulaService.add(this.dragula, this.drake);
        }
    };
    DragulaDirective.prototype.ngOnChanges = function (changes) {
        // console.log('dragula.directive: ngOnChanges');
        // console.log(changes);
        if (changes && changes.dragulaModel) {
            if (this.drake) {
                if (this.drake.models) {
                    var modelIndex = this.drake.models.indexOf(changes.dragulaModel.previousValue);
                    this.drake.models.splice(modelIndex, 1, changes.dragulaModel.currentValue);
                }
                else {
                    this.drake.models = [changes.dragulaModel.currentValue];
                }
            }
        }
    };
    return DragulaDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], DragulaDirective.prototype, "dragula", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaModel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], DragulaDirective.prototype, "dragulaOptions", void 0);
DragulaDirective = __decorate([
    core_1.Directive({ selector: '[dragula]' }),
    __metadata("design:paramtypes", [core_1.ElementRef, dragula_provider_1.DragulaService])
], DragulaDirective);
exports.DragulaDirective = DragulaDirective;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragula.provider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var dragula_class_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.class.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var DragulaService = (function () {
    function DragulaService() {
        this.cancel = new core_1.EventEmitter();
        this.cloned = new core_1.EventEmitter();
        this.drag = new core_1.EventEmitter();
        this.dragend = new core_1.EventEmitter();
        this.drop = new core_1.EventEmitter();
        this.out = new core_1.EventEmitter();
        this.over = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
        this.shadow = new core_1.EventEmitter();
        this.dropModel = new core_1.EventEmitter();
        this.removeModel = new core_1.EventEmitter();
        this.events = [
            'cancel', 'cloned', 'drag', 'dragend', 'drop', 'out', 'over',
            'remove', 'shadow', 'dropModel', 'removeModel'
        ];
        this.bags = [];
    }
    DragulaService.prototype.add = function (name, drake) {
        var bag = this.find(name);
        if (bag) {
            throw new Error('Bag named: "' + name + '" already exists.');
        }
        bag = { name: name, drake: drake };
        this.bags.push(bag);
        if (drake.models) {
            this.handleModels(name, drake);
        }
        if (!bag.initEvents) {
            this.setupEvents(bag);
        }
        return bag;
    };
    DragulaService.prototype.find = function (name) {
        for (var _i = 0, _a = this.bags; _i < _a.length; _i++) {
            var bag = _a[_i];
            if (bag.name === name) {
                return bag;
            }
        }
    };
    DragulaService.prototype.destroy = function (name) {
        var bag = this.find(name);
        var i = this.bags.indexOf(bag);
        this.bags.splice(i, 1);
        bag.drake.destroy();
    };
    DragulaService.prototype.setOptions = function (name, options) {
        var bag = this.add(name, dragula_class_1.dragula(options));
        this.handleModels(name, bag.drake);
    };
    DragulaService.prototype.handleModels = function (name, drake) {
        var _this = this;
        var dragElm;
        var dragIndex;
        var dropIndex;
        var sourceModel;
        drake.on('remove', function (el, source) {
            if (!drake.models) {
                return;
            }
            sourceModel = drake.models[drake.containers.indexOf(source)];
            sourceModel.splice(dragIndex, 1);
            // console.log('REMOVE');
            // console.log(sourceModel);
            _this.removeModel.emit([name, el, source]);
        });
        drake.on('drag', function (el, source) {
            dragElm = el;
            dragIndex = _this.domIndexOf(el, source);
        });
        drake.on('drop', function (dropElm, target, source) {
            if (!drake.models || !target) {
                return;
            }
            dropIndex = _this.domIndexOf(dropElm, target);
            sourceModel = drake.models[drake.containers.indexOf(source)];
            // console.log('DROP');
            // console.log(sourceModel);
            if (target === source) {
                sourceModel.splice(dropIndex, 0, sourceModel.splice(dragIndex, 1)[0]);
            }
            else {
                var notCopy = dragElm === dropElm;
                var targetModel = drake.models[drake.containers.indexOf(target)];
                var dropElmModel = notCopy ? sourceModel[dragIndex] : JSON.parse(JSON.stringify(sourceModel[dragIndex]));
                if (notCopy) {
                    sourceModel.splice(dragIndex, 1);
                }
                targetModel.splice(dropIndex, 0, dropElmModel);
                target.removeChild(dropElm); // element must be removed for ngFor to apply correctly
            }
            _this.dropModel.emit([name, dropElm, target, source]);
        });
    };
    DragulaService.prototype.setupEvents = function (bag) {
        bag.initEvents = true;
        var that = this;
        var emitter = function (type) {
            function replicate() {
                var args = Array.prototype.slice.call(arguments);
                that[type].emit([bag.name].concat(args));
            }
            bag.drake.on(type, replicate);
        };
        this.events.forEach(emitter);
    };
    DragulaService.prototype.domIndexOf = function (child, parent) {
        return Array.prototype.indexOf.call(parent.children, child);
    };
    return DragulaService;
}());
DragulaService = __decorate([
    core_1.Injectable()
], DragulaService);
exports.DragulaService = DragulaService;


/***/ }),

/***/ "../../../../ng2-dragula/components/dragular.module.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dragula_directive_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.directive.js");
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
var DragulaModule = (function () {
    function DragulaModule() {
    }
    return DragulaModule;
}());
DragulaModule = __decorate([
    core_1.NgModule({
        exports: [dragula_directive_1.DragulaDirective],
        declarations: [dragula_directive_1.DragulaDirective],
        providers: [dragula_provider_1.DragulaService]
    })
], DragulaModule);
exports.DragulaModule = DragulaModule;


/***/ }),

/***/ "../../../../ng2-dragula/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// var dragula_class_1 = require("./components/dragula.class");
// exports.dragula = dragula_class_1.dragula;
var dragula_directive_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.directive.js");
exports.DragulaDirective = dragula_directive_1.DragulaDirective;
var dragula_provider_1 = __webpack_require__("../../../../ng2-dragula/components/dragula.provider.js");
exports.DragulaService = dragula_provider_1.DragulaService;
var dragular_module_1 = __webpack_require__("../../../../ng2-dragula/components/dragular.module.js");
exports.DragulaModule = dragular_module_1.DragulaModule;


/***/ }),

/***/ "../../../../ng2-dragula/ng2-dragula.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var index_1 = __webpack_require__("../../../../ng2-dragula/index.js");
exports.dragula = index_1.dragula;
exports.DragulaDirective = index_1.DragulaDirective;
exports.DragulaModule = index_1.DragulaModule;
exports.DragulaService = index_1.DragulaService;


/***/ }),

/***/ "../../../../ticky/ticky-browser.js":
/***/ (function(module, exports) {

var si = typeof setImmediate === 'function', tick;
if (si) {
  tick = function (fn) { setImmediate(fn); };
} else {
  tick = function (fn) { setTimeout(fn, 0); };
}

module.exports = tick;

/***/ }),

/***/ "../../../../webpack/buildin/amd-define.js":
/***/ (function(module, exports) {

module.exports = function() {
	throw new Error("define cannot be used indirect");
};


/***/ }),

/***/ "../../../../webpack/buildin/amd-options.js":
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })

});
//# sourceMappingURL=submittal.module.chunk.js.map