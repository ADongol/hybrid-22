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
var submittal_package_service_1 = require("../../submittal/services/submittal-package.service");
var UploadFilesModalComponent = /** @class */ (function () {
    function UploadFilesModalComponent(elementRef, changeDetectorRef, submittalService) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.submittalService = submittalService;
        this.closeOnOutsideClick = true;
        this.notifyParent = new core_1.EventEmitter();
        this.visible = false;
        this.visibleAnimate = false;
    }
    UploadFilesModalComponent.prototype.ngOnInit = function () {
        this.quoteValue = this.quoteIdentifier;
    };
    UploadFilesModalComponent.prototype.ngOnDestroy = function () {
        this.close();
    };
    UploadFilesModalComponent.prototype.open = function () {
        var _this = this;
        document.body.classList.add('modal-open');
        this.visible = true;
        setTimeout(function () {
            _this.visibleAnimate = true;
        });
    };
    UploadFilesModalComponent.prototype.close = function () {
        var _this = this;
        document.body.classList.remove('modal-open');
        this.visibleAnimate = false;
        setTimeout(function () {
            _this.visible = false;
            _this.changeDetectorRef.markForCheck();
        }, 200);
        if (jQuery(".k-upload-files").length > 0) {
            this.submittalService.getAttachedFiles(this.quoteValue)
                .subscribe(function (data) {
                console.log(data);
                _this.attachedFiles = data;
                _this.notifyParent.emit(_this.attachedFiles);
            });
        }
    };
    UploadFilesModalComponent.prototype.onContainerClicked = function (event) {
        if (event.target.classList.contains('modal') && this.isTopMost() && this.closeOnOutsideClick) {
            this.close();
        }
    };
    UploadFilesModalComponent.prototype.onKeyDownHandler = function (event) {
        // If ESC key and TOP MOST modal, close it.
        if (event.key === 'Escape' && this.isTopMost()) {
            this.close();
        }
    };
    /**
     * Returns true if this modal is the top most modal.
     */
    UploadFilesModalComponent.prototype.isTopMost = function () {
        return !this.elementRef.nativeElement.querySelector(':scope modal > .modal');
    };
    UploadFilesModalComponent.prototype.ngAfterViewChecked = function () {
        jQuery(".k-upload .k-dropzone").css("height", "100px");
        //jQuery(".k-button .k-upload-button").css({ "width": "250px", "position": "absolute", "left": "0", "top": "0" });
    };
    __decorate([
        core_1.ContentChild('modalHeader'),
        __metadata("design:type", core_1.TemplateRef)
    ], UploadFilesModalComponent.prototype, "header", void 0);
    __decorate([
        core_1.ContentChild('modalBody'),
        __metadata("design:type", core_1.TemplateRef)
    ], UploadFilesModalComponent.prototype, "body", void 0);
    __decorate([
        core_1.ContentChild('modalFooter'),
        __metadata("design:type", core_1.TemplateRef)
    ], UploadFilesModalComponent.prototype, "footer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UploadFilesModalComponent.prototype, "closeOnOutsideClick", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UploadFilesModalComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], UploadFilesModalComponent.prototype, "quoteIdentifier", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], UploadFilesModalComponent.prototype, "notifyParent", void 0);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], UploadFilesModalComponent.prototype, "onContainerClicked", null);
    __decorate([
        core_1.HostListener('document:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], UploadFilesModalComponent.prototype, "onKeyDownHandler", null);
    UploadFilesModalComponent = __decorate([
        core_1.Component({
            selector: 'upload-files-modal',
            templateUrl: './upload-files-modal.component.html',
            styleUrls: ['./upload-files-modal.component.css']
        }),
        __metadata("design:paramtypes", [core_1.ElementRef,
            core_1.ChangeDetectorRef,
            submittal_package_service_1.SubmittalPackageService])
    ], UploadFilesModalComponent);
    return UploadFilesModalComponent;
}());
exports.UploadFilesModalComponent = UploadFilesModalComponent;
//# sourceMappingURL=upload-files-modal.component.js.map