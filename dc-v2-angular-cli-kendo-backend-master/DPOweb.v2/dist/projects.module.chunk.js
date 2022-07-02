webpackJsonp(["projects.module"],{

/***/ "../../../../../src/app/projects/components/delete-projects-popup/deleteProjectsPopup.component.html":
/***/ (function(module, exports) {

module.exports = "<form role=\"form\">\r\n    <div class=\"form-group\">\r\n        <p>Are you sure you want to delete the following projects?</p>\r\n\r\n        <!--<div class=\"well\" style=\"overflow:scroll;height:200px;\">-->\r\n        <div class=\"well\">\r\n            <div *ngFor=\"let project of deleteProjects\">\r\n                <p style=\"color:red;\">{{project.projectName}}</p>\r\n            </div>\r\n        </div>\r\n        \r\n        <p>Projects selected: {{deleteProjects.length}}</p>\r\n        \r\n    </div>\r\n    <div class=\"row action text-center\">\r\n        <button class=\"btn btn-primary\" (click)=\"deleteSelectedProjects()\">Delete Projects</button>\r\n        <button class=\"btn btn-default\" (click)=\"closeDeleteProjectsWindow()\">Cancel</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/delete-projects-popup/deleteProjectsPopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeleteProjectsPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DeleteProjectsPopupComponent = /** @class */ (function () {
    function DeleteProjectsPopupComponent(toastrSvc, http, projectSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.projectSvc = projectSvc;
        this.clearDeleteProjectsArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    DeleteProjectsPopupComponent.prototype.ngOnInit = function () {
    };
    DeleteProjectsPopupComponent.prototype.deleteSelectedProjects = function () {
        var self = this;
        var selectedProjectIds = [];
        for (var _i = 0, _a = this.deleteProjects; _i < _a.length; _i++) {
            var project = _a[_i];
            selectedProjectIds.push(project.projectId);
        }
        this.projectSvc.deleteProjects(selectedProjectIds).then(this.deleteProjectsCallback.bind(this));
    };
    DeleteProjectsPopupComponent.prototype.closeDeleteProjectsWindow = function () {
        var deleteProjectsWindow = __WEBPACK_IMPORTED_MODULE_5_jquery__("#deleteProjectsWindow").data("kendoWindow");
        deleteProjectsWindow.close();
    };
    DeleteProjectsPopupComponent.prototype.deleteProjectsCallback = function (resp) {
        if (resp.isok) {
            for (var _i = 0, _a = resp.messages.items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.type == 40) {
                    this.toastrSvc.Success(message.text);
                }
            }
            //reload projects grid
            var projectEditAllGridDtaSrc = __WEBPACK_IMPORTED_MODULE_5_jquery__('#project-grid').data('kendoGrid').dataSource;
            projectEditAllGridDtaSrc.read();
            //clear deleteProjects Array
            this.clearDeleteProjectsArray.emit();
        }
        else {
            for (var _b = 0, _c = resp.messages.items; _b < _c.length; _b++) {
                var message = _c[_b];
                if (message.type == 10) {
                    this.toastrSvc.Error(message.text);
                }
            }
        }
        this.closeDeleteProjectsWindow();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], DeleteProjectsPopupComponent.prototype, "deleteProjects", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DeleteProjectsPopupComponent.prototype, "clearDeleteProjectsArray", void 0);
    DeleteProjectsPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'deleteProjects-popup',
            template: __webpack_require__("../../../../../src/app/projects/components/delete-projects-popup/deleteProjectsPopup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], DeleteProjectsPopupComponent);
    return DeleteProjectsPopupComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/export-projects-popup/exportProjectsPopup.component.html":
/***/ (function(module, exports) {

module.exports = "<form role=\"form\">\r\n    <div class=\"form-group\">\r\n        <p>Please select a project export type:</p>\r\n        <input id=\"projectExportTypeDDL\" style=\"width: 90%\" >\r\n\r\n    </div>\r\n    <div class=\"row action text-center\">\r\n        <button class=\"btn btn-primary\" (click)=\"exportProjects()\">Export</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/export-projects-popup/exportProjectsPopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExportProjectsPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExportProjectsPopupComponent = /** @class */ (function () {
    function ExportProjectsPopupComponent(toastrSvc, http, projectSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.projectSvc = projectSvc;
        this.projectExportType = 1;
    }
    ExportProjectsPopupComponent.prototype.ngOnInit = function () {
        this.setupExportTypeDDL();
    };
    ExportProjectsPopupComponent.prototype.setupExportTypeDDL = function () {
        var self = this;
        jQuery("#projectExportTypeDDL").kendoDropDownList({
            dataSource: [{ text: "Project Pipeline Export", value: 1 },
                { text: "Project Pipeline Export - Detailed", value: 2 }],
            dataTextField: "text",
            dataValueField: "value",
            change: function (e) {
                var value = this.value();
                self.projectExportType = value;
            }
        });
    };
    ExportProjectsPopupComponent.prototype.closeExportProjectWindow = function () {
        var exportProjectsWindow = jQuery("#exportProjectsWindow").data("kendoWindow");
        exportProjectsWindow.close();
    };
    ExportProjectsPopupComponent.prototype.exportProjects = function () {
        var filterString = "";
        var sortString = "";
        var prjectsDataSrc = jQuery("#project-grid").data("kendoGrid").dataSource;
        if (prjectsDataSrc.filter() != undefined) {
            filterString = JSON.stringify(prjectsDataSrc.filter()).replace(/\"/g, '\'');
        }
        if (prjectsDataSrc.sort() != undefined) {
            sortString = JSON.stringify(prjectsDataSrc.sort()).replace(/\"/g, '\'');
        }
        var data = {
            "projectExportType": this.projectExportType,
            "showDeletedProjects": this.showDeletedProjects,
            "filter": filterString,
            "sort": sortString
        };
        this.projectSvc.exportProject(data);
        this.closeExportProjectWindow();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ExportProjectsPopupComponent.prototype, "showDeletedProjects", void 0);
    ExportProjectsPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'exportProjects-popup',
            template: __webpack_require__("../../../../../src/app/projects/components/export-projects-popup/exportProjectsPopup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], ExportProjectsPopupComponent);
    return ExportProjectsPopupComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project-edit/projectEdit.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">\r\n\r\n        <ul class=\"breadcrumbs\">\r\n            <li><a href=\"/v2/#/project/project-list\">Projects</a></li>\r\n            <li *ngIf=\"action == 'projectCreate'\">Add New Project</li>\r\n            <li *ngIf=\"action == 'projectEdit'\">Edit Project</li>\r\n        </ul>\r\n\r\n        <h4 *ngIf=\"action == 'projectCreate'\">New Project</h4>\r\n        <h4 *ngIf=\"action == 'projectEdit'\">Edit Project</h4>\r\n\r\n        <form #projectEditForm=\"ngForm\" novalidate>\r\n\r\n            <ul class=\"hidden-xs nav nav-tabs\">\r\n                <li class=\"active tabs-header\"><a data-toggle=\"tab\" href=\"#projectDetails\">PROJECT DETAILS</a></li>\r\n                <li class=\"tabs-header\"><a data-toggle=\"tab\" href=\"#engineerDetails\">ENGINEER</a></li>\r\n                <li class=\"tabs-header\"><a data-toggle=\"tab\" href=\"#dealerDetails\">DEALER/CONTRACTOR</a></li>\r\n                <li class=\"tabs-header\"><a data-toggle=\"tab\" href=\"#sellerDetails\">SELLER</a></li>\r\n                <li class=\"tabs-header\"><a data-toggle=\"tab\" id=\"shipToAddressLink\" href=\"#shippingAddressDetails\">SHIPPING ADDRESS/ PROJECT LOCATION</a></li>\r\n                <li class=\"tabs-header\" *ngIf=\"canViewPipelineData || canEditPipelineData\"><a data-toggle=\"tab\" href=\"#projectInternal\">INTERNAL</a></li>\r\n            </ul>\r\n\r\n            <div class=\"visible-xs scrollmenu\">\r\n                <ul class=\"sub-tab-bar\">\r\n                    <li class=\"active tabs-header\"><a data-toggle=\"tab\" href=\"#projectDetails\">PROJECT DETAILS</a></li>\r\n                    <li class=\"tabs-header\"><a data-toggle=\"tab\" class=\"tabs-header\" href=\"#engineerDetails\">ENGINEER</a></li>\r\n                    <li class=\"tabs-header\"><a data-toggle=\"tab\" class=\"tabs-header\" href=\"#dealerDetails\">DEALER/CONTRACTOR</a></li>\r\n                    <li class=\"tabs-header\"><a data-toggle=\"tab\" class=\"tabs-header\" href=\"#sellerDetails\">SELLER</a></li>\r\n                    <li class=\"tabs-header\"><a data-toggle=\"tab\" class=\"tabs-header\" href=\"#shippingAddressDetails\">SHIPPING ADDRESS/ PROJECT LOCATION</a></li>\r\n                    <li class=\"tabs-header\" *ngIf=\"canViewPipelineData || canEditPipelineData\"><a data-toggle=\"tab\" class=\"tabs-header\" href=\"#projectInternal\">INTERNAL</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"tab-content\" style=\"margin:10px;\">\r\n                <!--PROJECT DETAILS-->\r\n                <!--<div id=\"projectDetails\" class=\"tab-pane fade in active\">\r\n\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"col-md-5 col-sm-12\">\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label required\">Project Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #projectName=\"ngModel\" required name=\"projectName\" [(ngModel)]=\"project.name\" (ngModelChange)=\"projectNameChange($event)\">\r\n                            <div *ngIf=\"projectName.touched && projectName.invalid\" class=\"alert alert-danger\">\r\n                                Project Name is required\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label for=\"projectDate\" class=\"control-label\">Registration Date</label>\r\n                            <div>\r\n                                <kendo-datepicker [value]=\"projectDate\" [disabled]=\"true\">\r\n                                </kendo-datepicker>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label required\">Contruction Type</p>\r\n\r\n                                <select class=\"form-control\" required [(ngModel)]=\"project.constructionTypeId\" (ngModelChange)=\"constructionTypeChange($event)\" name=\"constructionType\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.constructionTypes.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label required\">Project Status</p>\r\n                                <select class=\"form-control\" required [(ngModel)]=\"project.projectStatusTypeId\" (ngModelChange)=\"projectStatusTypeChange($event)\" name=\"projectStatusType\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.projectStatusTypes.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label required\">Project Type</p>\r\n                                <select class=\"form-control\" required [(ngModel)]=\"project.projectTypeId\" (ngModelChange)=\"projectTypeChange($event)\" name=\"projectType\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.projectTypes.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label required\">Project Open Status</p>\r\n                                <select class=\"form-control\" required [(ngModel)]=\"project.projectOpenStatusTypeId\" (ngModelChange)=\"projectOpenStatusTypeChange($event)\" name=\"projectOpenStatusType\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.projectOpenStatusTypes.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label required\">Vertical Market</p>\r\n                                <select class=\"form-control\" required [(ngModel)]=\"project.verticalMarketTypeId\" (ngModelChange)=\"verticalMarketTypeChange($event)\" name=\"verticalMarketType\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.verticalMarketTypes.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col-md-5 col-sm-12\">\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label required\">Bid Date</label>\r\n                            <div>\r\n                                <kendo-datepicker required [(value)]=\"project.bidDate\"></kendo-datepicker>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label required\">Estimated Close</label>\r\n                            <div>\r\n                                <kendo-datepicker required [(value)]=\"project.estimatedClose\"></kendo-datepicker>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label required\">Estimated Delivery</label>\r\n                            <div>\r\n                                <kendo-datepicker required [(value)]=\"project.estimatedDelivery\"></kendo-datepicker>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label\">Country</p>\r\n                                <select class=\"form-control\" [(ngModel)]=\"project.shipToAddress.countryCode\" (ngModelChange)=\"countryCodeChange($event)\" name=\"shipToCountryCode\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.shipToAddress.countries.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <p class=\"control-label\">State</p>\r\n                                <select class=\"form-control\" [(ngModel)]=\"project.shipToAddress.stateId\" name=\"shipToState\">\r\n                                    <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                    <option *ngFor=\"let item of project.shipToAddress.states.items\"\r\n                                            [value]=\"item.value\">\r\n                                        {{item.text}}\r\n                                    </option>\r\n                                </select>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"form-group col-md-6\">\r\n                                <label class=\"control-label\">City</label>\r\n                                <input type=\"text\" class=\"form-control\" #shipToLocation=\"ngModel\" name=\"shipToLocation\" [(ngModel)]=\"project.shipToAddress.location\">\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group\">\r\n                            <label class=\"control-label\">Project Note</label>\r\n                            <textarea class=\"form-control\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"project.description\"></textarea>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n            </div>-->\r\n\r\n                <div id=\"projectDetails\" class=\"tab-pane fade in active\">\r\n                    <!--Project Name-->\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label required\">Project Name</label>\r\n                                <input type=\"text\" class=\"form-control\" #projectName=\"ngModel\" required name=\"projectName\" [(ngModel)]=\"project.name\" (ngModelChange)=\"projectNameChange($event)\">\r\n                                <div *ngIf=\"projectName.touched && projectName.invalid\" class=\"alert alert-danger\">\r\n                                    Project Name is required\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!--<div class=\"col-md-6\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-offset-1 col-md-11\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"form-group\">\r\n                                        <input type=\"checkbox\" [(ngModel)]=\"isStrategicProject\" name=\"isStrategicProject\" /> <label> Is Strategic Project </label><br />\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"row\" *ngIf=\"isStrategicProject\">\r\n                                    <div class=\"form-group\">\r\n                                        <label>Reason For Strategic Project</label>\r\n                                        <kendo-multiselect [data]=\"listItems\" [(ngModel)]=\"value\" name=\"strategicProjectReason\"></kendo-multiselect>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>-->\r\n\r\n                    </div>\r\n\r\n                    <!--Details-->\r\n                    <div class=\"row\">\r\n\r\n                        <!--Types-->\r\n                        <div class=\"col-md-4 col-xs-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-9\">\r\n                                    <label class=\"control-label required\">Contruction Type</label>\r\n\r\n                                    <select class=\"form-control\" required [(ngModel)]=\"project.constructionTypeId\" (ngModelChange)=\"constructionTypeChange($event)\" name=\"constructionType\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.constructionTypes.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-9\">\r\n                                    <label class=\"control-label required\">Project Status</label>\r\n                                    <select class=\"form-control\" required [(ngModel)]=\"project.projectStatusTypeId\" (ngModelChange)=\"projectStatusTypeChange($event)\" name=\"projectStatusType\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.projectStatusTypes.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-9\">\r\n                                    <label class=\"control-label required\">Project Type</label>\r\n                                    <select class=\"form-control\" required [(ngModel)]=\"project.projectTypeId\" (ngModelChange)=\"projectTypeChange($event)\" name=\"projectType\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.projectTypes.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-9\">\r\n                                    <label class=\"control-label required\">Project Open Status</label>\r\n                                    <select class=\"form-control\" required [(ngModel)]=\"project.projectOpenStatusTypeId\" (ngModelChange)=\"projectOpenStatusTypeChange($event)\" name=\"projectOpenStatusType\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.projectOpenStatusTypes.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-9\">\r\n                                    <label class=\"control-label required\">Vertical Market</label>\r\n                                    <select class=\"form-control\" required [(ngModel)]=\"project.verticalMarketTypeId\" (ngModelChange)=\"verticalMarketTypeChange($event)\" name=\"verticalMarketType\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.verticalMarketTypes.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <!--Dates-->\r\n                        <div class=\"col-md-3 col-xs-12\">\r\n\r\n                            <!--<div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"isStrategicProject\" name=\"isStrategicProject\" /> <label> Is Strategic Project </label><br />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" *ngIf=\"isStrategicProject\">\r\n                            <div class=\"form-group\">\r\n                                <label>Reason For Strategic Project</label>\r\n                                <kendo-multiselect [data]=\"listItems\" [(ngModel)]=\"value\" name=\"strategicProjectReason\"></kendo-multiselect>\r\n                            </div>\r\n                        </div>-->\r\n\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label for=\"projectDate\" class=\"control-label\">Registration Date</label>\r\n                                    <div>\r\n                                        <kendo-datepicker [value]=\"projectDate\" [disabled]=\"true\">\r\n                                        </kendo-datepicker>\r\n\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label required\">Bid Date</label>\r\n                                    <div>\r\n                                        <kendo-datepicker required [(value)]=\"project.bidDate\"></kendo-datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label required\">Estimated Close</label>\r\n                                    <div>\r\n                                        <kendo-datepicker required [(value)]=\"project.estimatedClose\"></kendo-datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label class=\"control-label required\">Estimated Delivery</label>\r\n                                    <div>\r\n                                        <kendo-datepicker required [(value)]=\"project.estimatedDelivery\"></kendo-datepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!--<div class=\"row\">\r\n                            <div class=\"form-group\">\r\n                                <input type=\"checkbox\" [(ngModel)]=\"isStrategicProject\" name=\"isStrategicProject\" /> <label> Is Strategic Project </label><br />\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" *ngIf=\"isStrategicProject\">\r\n                            <div class=\"form-group\">\r\n                                <label>Reason For Strategic Project</label>\r\n                                <kendo-multiselect [data]=\"listItems\" [(ngModel)]=\"value\" name=\"strategicProjectReason\"></kendo-multiselect>\r\n                            </div>\r\n                        </div>-->\r\n\r\n                        </div>\r\n\r\n\r\n                        <!--Location and notes-->\r\n                        <div class=\"col-md-5 col-xs-12\">\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <input type=\"checkbox\" [(ngModel)]=\"project.isStrategicProject\" name=\"isStrategicProject\" /> <label> Strategic Project </label><br />\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"project.isStrategicProject\">\r\n                                <div class=\"form-group col-md-12\">\r\n                                    <label class=\"required\">Reason For Strategic Project</label>\r\n                                    <kendo-multiselect required\r\n                                                       [data]=\"project.strategicTypes.items\" \r\n                                                       [(ngModel)]=\"project.selectedStrategicTypes\" name=\"strategicProjectReason\"\r\n                                                       [textField]=\"'text'\"\r\n                                                       [valueField]=\"'valueLong'\"\r\n                                                       [valuePrimitive]=\"true\"></kendo-multiselect>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label class=\"control-label\">Country</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"project.shipToAddress.countryCode\" (ngModelChange)=\"countryCodeChange($event)\" name=\"shipToCountryCode\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.shipToAddress.countries.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label class=\"control-label\">State</label>\r\n                                    <select class=\"form-control\" [(ngModel)]=\"project.shipToAddress.stateId\" name=\"shipToState\">\r\n                                        <option [value]=\"null\" selected disabled>Select ...</option>\r\n                                        <option *ngFor=\"let item of project.shipToAddress.states.items\"\r\n                                                [value]=\"item.value\">\r\n                                            {{item.text}}\r\n                                        </option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"form-group col-md-6\">\r\n                                    <label class=\"control-label\">City</label>\r\n                                    <input type=\"text\" class=\"form-control\" #shipToLocation=\"ngModel\" name=\"shipToLocation\" [(ngModel)]=\"project.shipToAddress.location\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"form-group\">\r\n                                <label class=\"control-label\">Project Note</label>\r\n                                <textarea class=\"form-control\" #description=\"ngModel\" name=\"description\" [(ngModel)]=\"project.description\"></textarea>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n\r\n\r\n                <!--ENGINEER-->\r\n                <div id=\"engineerDetails\" class=\"tab-pane fade\">\r\n\r\n\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Contact Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #engineerName=\"ngModel\" name=\"engineerName\" [(ngModel)]=\"project.engineerName\">\r\n                        </div>\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Business Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #engineerBusinessName=\"ngModel\" name=\"engineerBusinessName\" [(ngModel)]=\"project.engineerBusinessName\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <hr />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <address [project]=\"project\"\r\n                             [addressType]=\"'engineer'\"\r\n                             [address]=\"project.engineerAddress\"\r\n                             [projectEditForm]=\"projectEditForm\">\r\n\r\n                    </address>\r\n\r\n\r\n                </div>\r\n\r\n                <!--DEALER/CONTRACTOR-->\r\n                <div id=\"dealerDetails\" class=\"tab-pane fade\">\r\n\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Contact Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #dealerContractorName=\"ngModel\" name=\"dealerContractorName\" [(ngModel)]=\"project.dealerContractorName\">\r\n                        </div>\r\n\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Business Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #customerName=\"ngModel\" name=\"customerName\" [(ngModel)]=\"project.customerName\">\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <hr />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <address [project]=\"project\"\r\n                             [addressType]=\"'customer'\"\r\n                             [address]=\"project.customerAddress\"\r\n                             [projectEditForm]=\"projectEditForm\">\r\n\r\n                    </address>\r\n\r\n                </div>\r\n\r\n                <!--SELLER-->\r\n                <div id=\"sellerDetails\" class=\"tab-pane fade\">\r\n\r\n\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Business Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #sellerName=\"ngModel\" name=\"sellerName\" [(ngModel)]=\"project.sellerName\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <hr />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <address [project]=\"project\"\r\n                             [addressType]=\"'seller'\"\r\n                             [address]=\"project.sellerAddress\"\r\n                             [projectEditForm]=\"projectEditForm\">\r\n                    </address>\r\n\r\n                </div>\r\n\r\n                <!--SHIPPING ADDRESS/ PROJECT LOCATION-->\r\n                <div id=\"shippingAddressDetails\" class=\"tab-pane fade\">\r\n\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"form-group col-md-5 col-xs-12\">\r\n                            <label class=\"control-label\">Business Name</label>\r\n                            <input type=\"text\" class=\"form-control\" #shipToName=\"ngModel\" name=\"shipToName\" [(ngModel)]=\"project.shipToName\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <hr />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <address [project]=\"project\"\r\n                             [addressType]=\"'shipToAddress'\"\r\n                             [address]=\"project.shipToAddress\"\r\n                             [projectEditForm]=\"projectEditForm\">\r\n\r\n                    </address>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-10\">\r\n                            <hr />\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row no-gutters\">\r\n                        <div class=\"form-group col-md-2 col-xs-12\">\r\n                            <label class=\"control-label\">Square Footage</label>\r\n                            <input type=\"text\" class=\"form-control\" #squareFootage=\"ngModel\" name=\"squareFootage\" [(ngModel)]=\"project.squareFootage\">\r\n                        </div>\r\n                        <div class=\"form-group col-md-3 col-xs-12\">\r\n                            <label class=\"control-label\">Number Of Floors</label>\r\n                            <input type=\"text\" class=\"form-control\" #numberOfFloors=\"ngModel\" name=\"numberOfFloors\" [(ngModel)]=\"project.numberOfFloors\">\r\n                        </div>\r\n                    </div>\r\n\r\n\r\n                </div>\r\n\r\n                <!--INTERNAL-->\r\n                <div *ngIf=\"canViewPipelineData || canEditPipelineData\" id=\"projectInternal\" class=\"tab-pane fade\">\r\n                    <project-internal [user]=\"user\" [project]=\"project\" [projectEditForm]=\"projectEditForm\"></project-internal>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row text-center\">\r\n                <div class=\"col-md-10\" style=\"padding:10px;\">\r\n                    <button class=\"btn btn-default\" style=\"width:70px;\" (click)=\"cancel()\">Cancel</button>\r\n                    <button class=\"btn btn-primary\" style=\"width:70px;\" (click)=\"submit()\" type=\"submit\" id=\"projectEditSubmitBtn\">Submit</button>\r\n                    <!--<button class=\"btn btn-default\" style=\"width:70px;\" (click)=\"check()\">Check</button>-->\r\n                </div>\r\n            </div>\r\n\r\n        </form>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<!--<div *ngIf=\"project\">\r\n            Project Name: {{project.name}}<br />\r\n            ContructionTypeId: {{project.constructionTypeId}}<br />\r\n            Project Status TypeId: {{project.projectStatusTypeId}}<br />\r\n            Project Type Id: {{project.projectTypeId}}<br />\r\n            Project Open Status Id: {{project.projectOpenStatusTypeId}}<br />\r\n            Vertical Market TypeId: {{project.verticalMarketTypeId}}<br />\r\n            ProjectLeadStatusTypeId: {{project.projectLeadStatusTypeId}}<br />\r\n            Bid Date: {{project.bidDate}}<br />\r\n            Country Code: {{project.shipToAddress.countryCode}}<br />\r\n            State: {{project.shipToAddress.stateId}}<br />\r\n\r\n        </div>-->\r\n<!--{{diagnostic}}-->\r\n\r\n\r\n<div id=\"shippingAddressDialog\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n          <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Shipping Address</h4>\r\n            </div>\r\n            <div class=\"modal-body\" *ngIf=\"!suggestedAddress\">\r\n                <p>We were unable to verify entered address, please review. Do you want to continue?</p>\r\n            </div>\r\n            <div class=\"modal-footer\" *ngIf=\"!suggestedAddress\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"reEnterAddress()\">Re-enter address</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"continue()\">Continue</button>\r\n            </div>\r\n\r\n            <div class=\"modal-body\" *ngIf=\"suggestedAddress\">\r\n                <p>Address you entered:</p>\r\n                <div>\r\n                    <p>\r\n                        <span>{{project.shipToAddress.addressLine1}}</span>\r\n                        <span>{{project.shipToAddress.addressLine2}},</span>\r\n                        <span>{{project.shipToAddress.location}}, </span>\r\n                        <span>{{project.shipToAddress.stateName}}</span>\r\n                        <span>{{project.shipToAddress.postalCode}}</span>\r\n                    </p>\r\n                </div>\r\n                <p>Suggested Address:</p>\r\n                <div>\r\n                    <p>\r\n                        <input type=\"checkbox\" class=\"checkbox-large\" id=\"useSuggestedAddress\" name=\"useSuggestedAddress\" [(ngModel)]=\"useSuggestedAddress\">\r\n\r\n                        <span>{{suggestedAddress.line1}}</span>\r\n                        <span>{{suggestedAddress.line2}},</span>\r\n                        <span>{{suggestedAddress.city}}, </span>\r\n                        <span>{{suggestedAddress.stateProvince}} </span>\r\n                        <span>{{suggestedAddress.zipCode}}</span>\r\n                    </p>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\" *ngIf=\"suggestedAddress\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"reEnterAddress()\">Re-enter address</button>\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"continue()\">Continue</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-edit/projectEdit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__address_services_address_service__ = __webpack_require__("../../../../../src/app/address/services/address.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(router, route, commonSvc, toastrSvc, userSvc, enums, systemAccessEnum, http, projectSvc, addressSvc) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.commonSvc = commonSvc;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.systemAccessEnum = systemAccessEnum;
        this.http = http;
        this.projectSvc = projectSvc;
        this.addressSvc = addressSvc;
        this.formIsValid = false;
        this.canViewPipelineData = false;
        this.canEditPipelineData = false;
        this.useSuggestedAddress = false;
        //public ignoreAddressValidation: boolean = false;
        this.defaultItem = { text: "Select ...", value: null };
        //public isStrategicProject: boolean = false;
        //Test
        //public listItems: Array<string> = ['Potential National Account', 'High Visibility', 'Multi Building', 'New Contractor', 'Owner Direct Purchase', 'New Engineer'];
        //public value: any = [];
        this.selectedReasons = [];
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.previousUrl = e.url;
        });
        this.action = this.route.snapshot.url[0].path;
        this.project = this.route.snapshot.data['projectModel'].model;
        this.user = this.route.snapshot.data['currentUser'].model;
        // this.project.projectDate = new Date(Date.parse(this.project.projectDate));
        if (this.action == "projectCreate") {
            this.projectDate = new Date();
            this.project.bidDate = null;
            this.project.estimatedClose = null;
            this.project.estimatedDelivery = null;
            this.project.projectStatusTypeId = 1;
        }
        else {
            this.projectDate = new Date(Date.parse(this.project.projectDate));
            this.project.bidDate = new Date(Date.parse(this.project.bidDate));
            this.project.estimatedClose = new Date(Date.parse(this.project.estimatedClose));
            this.project.estimatedDelivery = new Date(Date.parse(this.project.estimatedDelivery));
        }
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        this.validateForm();
        this.canViewPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewPipelineData);
        this.canEditPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditPipelineData);
    };
    ProjectEditComponent.prototype.ngDoCheck = function () {
        //if (this.projectEditForm.invalid) {
        //    jQuery("#projectEditSubmitBtn").attr("disabled", "disabled");
        //} else {
        //    jQuery("#projectEditSubmitBtn").removeAttr("disabled");
        //}
        //console.log("ProjectEditForm.invalid: " + this.projectEditForm.invalid);
        if (this.formIsValid == false) {
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#projectEditSubmitBtn").attr("disabled", "disabled");
        }
        else {
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#projectEditSubmitBtn").removeAttr("disabled");
        }
    };
    ProjectEditComponent.prototype.validateForm = function () {
        if (this.projectEditForm.invalid) {
            this.formIsValid = false;
        }
        else {
            this.formIsValid = true;
        }
    };
    ProjectEditComponent.prototype.projectNameChange = function (event) {
        this.project.name = event;
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.constructionTypeChange = function (event) {
        //this.project.constructionTypeId = event.value;
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.projectStatusTypeChange = function (event) {
        //this.project.projectStatusTypeId = event.value;
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.projectTypeChange = function (event) {
        //this.project.projectTypeId = event.value;
        this.setDefaultDates();
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.projectOpenStatusTypeChange = function (event) {
        //this.project.projectOpenStatusTypeId = event.value;
        this.setDefaultDates();
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.verticalMarketTypeChange = function (event) {
        //this.project.verticalMarketTypeId = event.value;
        //this.validateForm();
        setTimeout(this.validateForm.bind(this), 200);
    };
    ProjectEditComponent.prototype.countryCodeChange = function (event) {
        var _this = this;
        var countryCode = event;
        this.addressSvc.getStatesByCountry(countryCode)
            .subscribe(function (resp) {
            if (resp.isok) {
                var states = resp.model;
                _this.project.shipToAddress.states.items = resp.model.items;
                _this.project.shipToAddress.stateId = null;
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    // If project type && open status selected and no dates have been set 
    ProjectEditComponent.prototype.setDefaultDates = function () {
        if (this.project.projectTypeId && this.project.projectOpenStatusTypeId && !this.project.bidDate && !this.project.estimatedClose && !this.project.estimatedDelivery) {
            if (this.project.projectTypeId == "6") {
                // Design build 	
                //  1. Bid: should be same month as registration date
                //  2. Close: Add 60 days to bid date	
                //  3. Delivery: Add 30 days to estimated close
                //  4. Many time the customer marks D/B as budget or design and they should be all bidding 
                this.project.bidDate = new Date(this.projectDate);
                this.project.estimatedClose = new Date(this.project.bidDate);
                this.project.estimatedClose.setDate(this.project.estimatedClose.getDate() + 60);
                this.project.estimatedDelivery = new Date(this.project.estimatedClose);
                this.project.estimatedDelivery.setDate(this.project.estimatedDelivery.getDate() + 30);
            }
            else {
                switch (this.project.projectOpenStatusId) {
                    case "1": // Budget
                    case "2":// Design
                        // 1. Bid: Add 9 months to reg date	
                        // 2. Close: Add 60 days to bid date
                        // 3. Delivery: Add 30 days to close date	
                        this.project.bidDate = new Date(this.projectDate);
                        this.project.bidDate.setDate(this.project.bidDate.getDate() + (30 * 9));
                        this.project.estimatedClose = new Date(this.project.bidDate);
                        this.project.estimatedClose.setDate(this.project.estimatedClose.getDate() + 60);
                        this.project.estimatedDelivery = new Date(this.project.estimatedClose);
                        this.project.estimatedDelivery.setDate(this.project.estimatedDelivery.getDate() + 30);
                        break;
                    case "3": // Quote
                    default:
                        // 1. Bid: Quote 
                        // 2. Close: Add 60 days 
                        // 3. Delivery: Add 30 days
                        this.project.bidDate = new Date(this.projectDate);
                        this.project.estimatedClose = new Date(this.project.bidDate);
                        this.project.estimatedClose.setDate(this.project.estimatedClose.getDate() + 60);
                        this.project.estimatedDelivery = new Date(this.project.estimatedClose);
                        this.project.estimatedDelivery.setDate(this.project.estimatedDelivery.getDate() + 30);
                        break;
                }
            }
        }
    };
    ProjectEditComponent.prototype.cancel = function () {
        if (this.action == "projectCreate") {
            this.router.navigateByUrl("/projects");
        }
        else if (this.action == "projectEdit") {
            this.router.navigateByUrl("/project/" + this.project.projectId);
        }
    };
    ProjectEditComponent.prototype.submit = function () {
        var _this = this;
        this.suggestedAddress = null;
        ///this.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');
        this.projectSvc.postProjectAndVerifyAddress(this.project)
            .subscribe(function (resp) {
            if (resp.isok) {
                ///this.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                _this.project.projectId = resp.model.projectId;
                if (_this.action == "projectCreate") {
                    _this.router.navigateByUrl("/quote/quoteCreate/" + _this.project.projectId);
                }
                else if (_this.action == "projectEdit") {
                    _this.router.navigateByUrl("/project/project/" + _this.project.projectId);
                }
            }
            else {
                ///this.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                _this.toastrSvc.displayResponseMessagesFadeOut(resp);
                if (_this.project.shipToAddress.addressLine1 != null) {
                    if (resp.model.error) {
                        __WEBPACK_IMPORTED_MODULE_9_jquery__("#shipToAddressLink").click();
                        //if (resp.model.isAddressValid == false) {// Address is not verified
                        //    jQuery("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
                        //} else if (resp.model.addresses.length > 0) {// Address does not match suggested address
                        //    this.suggestedAddress = resp.model.addresses[0];
                        //    jQuery("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
                        //}
                        if (resp.model.addresses != null && resp.model.addresses.length > 0) {
                            _this.suggestedAddress = resp.model.addresses[0];
                            __WEBPACK_IMPORTED_MODULE_9_jquery__("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
                        }
                        else {
                            __WEBPACK_IMPORTED_MODULE_9_jquery__("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
                        }
                    }
                    else {
                        //Allow cusomter to continue
                        __WEBPACK_IMPORTED_MODULE_9_jquery__("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
                    }
                }
            }
        }, function (err) {
            ////this.loadingIconSvc.Stop(jQuery("#content"));
            _this.blockUI.stop();
            console.log("Error: ", err);
            //Allow cusomter to continue
            __WEBPACK_IMPORTED_MODULE_9_jquery__("#shippingAddressDialog").modal({ backdrop: 'static', keyboard: false });
        });
    };
    ProjectEditComponent.prototype.check = function () {
        debugger;
    };
    //public onTabSelect(e: any) {
    //    console.log(e);
    //}
    //get diagnostic() { return JSON.stringify(this.project); }
    ProjectEditComponent.prototype.reEnterAddress = function () { };
    ProjectEditComponent.prototype.continue = function () {
        if (this.useSuggestedAddress) {
            this.project.shipToAddress.addressLine1 = this.suggestedAddress.line1;
            this.project.shipToAddress.addressLine2 = this.suggestedAddress.line2;
            this.project.shipToAddress.location = this.suggestedAddress.city;
            this.project.shipToAddress.stateName = this.suggestedAddress.stateProvince;
            this.project.shipToAddress.postalCode = this.suggestedAddress.zipCode;
            var self = this;
            this.commonSvc.getStateIdByStateCode(this.suggestedAddress.stateProvince)
                .subscribe(function (resp) {
                if (resp.isok) {
                    self.project.shipToAddress.stateId = resp.model;
                    self.postProject();
                }
                else {
                    self.toastrSvc.displayResponseMessages(resp);
                }
            }, function (err) { return console.log("Error: ", err); });
        }
        else {
            this.postProject();
        }
    };
    ProjectEditComponent.prototype.postProject = function () {
        var _this = this;
        //this.loadingIconSvc.Start(jQuery("#content"));
        this.blockUI.start('Loading...');
        this.projectSvc.postProject(this.project)
            .subscribe(function (resp) {
            if (resp.isok) {
                //this.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                _this.project.projectId = resp.model.projectId;
                if (_this.action == "projectCreate") {
                    _this.router.navigateByUrl("/quoteCreate/" + _this.project.projectId);
                }
                else if (_this.action == "projectEdit") {
                    _this.router.navigateByUrl("/project/" + _this.project.projectId);
                }
            }
            else {
                //this.loadingIconSvc.Stop(jQuery("#content"));
                _this.blockUI.stop();
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) {
            //this.loadingIconSvc.Stop(jQuery("#content"));
            _this.blockUI.stop();
            console.log("Error: ", err);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('projectEditForm'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* NgForm */])
    ], ProjectEditComponent.prototype, "projectEditForm", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProjectEditComponent.prototype, "blockUI", void 0);
    ProjectEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-edit',
            template: __webpack_require__("../../../../../src/app/projects/components/project-edit/projectEdit.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__shared_index__["c" /* CommonService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_6__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__shared_index__["e" /* Enums */], __WEBPACK_IMPORTED_MODULE_6__shared_index__["h" /* SystemAccessEnum */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7__services_project_service__["a" /* ProjectService */], __WEBPACK_IMPORTED_MODULE_8__address_services_address_service__["a" /* AddressService */]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project-grid/projectGrid.component.html":
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"/v2/src/assets/css/kendo/kendo.common.min.css\" />\r\n<link rel=\"stylesheet\" href=\"/v2/src/assets/css/kendo/kendo.default.min.css\" />\r\n<link rel=\"stylesheet\" href=\"/v2/src/assets/css/kendo/kendo.default.mobile.min.css\" />\r\n<link rel=\"stylesheet\" href=\"/v2/src/assets/css/kendoGridJQuery.css\" />\r\n \r\n<div id=\"projectGridButtonBar\" class=\"row\">\r\n    <div class=\"col col-xs-12 col-sm-4 col-md-4 col-lg-4\" style=\"margin-bottom:10px\">\r\n        <div class=\"row\">\r\n            <input type=\"text\" class=\"k-input k-textbox\" \r\n                   id=\"projectSearchBox\" name=\"projectSearchFilter\" \r\n                   placeholder=\" Search\" title=\"Search by project Id, project name, project owner name, business name.\" />\r\n            <button id=\"projectSearchBtn\"><span class=\"k-icon k-i-search\"></span></button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"col col-xs-12 col-sm-8 col-md-8 col-lg-8\">\r\n        <button class=\"btn btn-default pull-right\" \r\n                (click)=\"openExportProjectsWindow()\" \r\n                style=\"margin-left:10px\">\r\n            <span class=\"k-icon k-i-excel\"></span> <span class=\"hidden-xs\">Export To Excel</span>\r\n        </button>\r\n        <button class=\"btn btn-default pull-right\" \r\n                (click)=\"clearFilters()\" \r\n                style=\"margin-left:10px\"> \r\n            <span class=\"k-icon k-i-funnel-clear\"></span> <span class=\"hidden-xs\">Clear Filters</span>\r\n        </button>\r\n        <!--<a id=\"newProjectBtn\" *ngIf=\"canEditProject\" href=\"/Projectdashboard/ProjectEdit\" class=\"btn btn-primary pull-right\" style=\"margin-left:10px\"><span class=\"k-icon k-i-plus\"></span> <span class=\"hidden-xs\">New Project</span></a>-->\r\n        <a id=\"newProjectBtn\" *ngIf=\"canEditProject\" \r\n           href=\"/v2/#/project/projectCreate\" class=\"btn btn-primary pull-right\" \r\n           style=\"margin-left:10px\"><span class=\"k-icon k-i-plus\"></span> \r\n            <span class=\"hidden-xs\">New Project</span>\r\n        </a>\r\n        <button class=\"btn btn-default pull-right\" \r\n                *ngIf=\"deleteProjects.length>0\" \r\n                (click)=\"openDeleteProjectsWindow()\" \r\n                style=\"margin-left:10px\"> \r\n            <span class=\"k-font-icon k-i-trash\"></span> \r\n            <span class=\"hidden-xs\">Delete Projects</span>\r\n        </button>\r\n        <span class=\"pull-right hidden-xs\" \r\n              *ngIf=\"canUnDeleteProject\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"showDeletedProjects\" style=\"margin-left:10px\" /> Show deleted projects\r\n        </span>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" style=\"margin-bottom:10px\">\r\n</div>\r\n\r\n<!--<div id=\"testdiv\">Hello</div>-->\r\n\r\n<div id=\"project-grid\" class=\"kendogrid row\"></div>\r\n\r\n<ul id=\"actionMenu\"></ul>\r\n\r\n<div id=\"transferProjectWindow\" style=\"display:none\">\r\n    <transferProject-popup [selectedProjectId]=\"selectedProjectId\" \r\n                           (closeWindow)=\"CloseTransferProjectPopup()\"></transferProject-popup>\r\n</div>\r\n<div id=\"deleteProjectsWindow\" style=\"display:none\">\r\n    <deleteProjects-popup [deleteProjects]=\"deleteProjects\" \r\n                          (clearDeleteProjectsArray)=\"emptyDeleteProjectsArray()\"></deleteProjects-popup>\r\n</div>\r\n\r\n<div id=\"exportProjectsWindow\" style=\"display:none\">\r\n    <exportProjects-popup [showDeletedProjects]=\"showDeletedProjects\"></exportProjects-popup>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-grid/projectGrid.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectGridComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProjectGridComponent = /** @class */ (function () {
    function ProjectGridComponent(toastrSvc, userSvc, systemAccessEnum, http, projectSvc) {
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.http = http;
        this.projectSvc = projectSvc;
        this.isAuthenticated = false;
        this.canEditProject = false;
        this.canTransferProject = false;
        this.canUnDeleteProject = false;
        this.canViewPipelineData = false;
        this.canEditPipelineData = false;
        this.deleteProjects = [];
        this.gridColumns = [];
        this.showDeletedProjects = false;
    }
    ProjectGridComponent.prototype.ngOnInit = function () {
        this.setGridHeight();
        var currentDate = new Date();
        this.currentDateString = currentDate.toISOString();
        var currentYear = currentDate.getFullYear();
        var lastYear = currentYear - 1;
        var thisDateLastYear = new Date();
        thisDateLastYear.setFullYear(lastYear);
        //if (thisDateLastYear.getDate() == 29) { // not necessarry since Feb 29th will be converted to Mar 1st automatically if the year is not leap year
        //    if (!this.isLeapYear(lastYear)) {
        //        thisDateLastYear.setDate(28);
        //    }
        //}
        this.thisDateLastYearString = thisDateLastYear.toISOString();
        this.userSvc.getCurrentUser()
            .then(this.getCurrentUserCallback.bind(this));
        this.gridColumns = this.setupGridColumns();
        this.ProjectsDataSource = this.getDataSource();
        this.setupSearchBox();
    };
    ProjectGridComponent.prototype.ngAfterContentInit = function () { };
    ProjectGridComponent.prototype.ngAfterViewInit = function () {
        this.setupActionsMenu();
        this.setupAlertTooltip();
        //setTimeout(this.removeKIconText, 1000); /*fix jquery kendo grid*/
    };
    ProjectGridComponent.prototype.removeKIconText = function () {
        jQuery(".k-icon").text("");
        jQuery(".k-i-refresh").text("");
    };
    ProjectGridComponent.prototype.isLeapYear = function (year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    };
    ProjectGridComponent.prototype.setGridHeight = function () {
        var daikinHeaderH = jQuery("#daikin-header").height();
        var projectTabsH = jQuery("#projectTabs").height();
        var tabHeaderTitleH = jQuery("div.tab-header").height() + 10 + 10; // margin top & bottom is 10px;
        var gridButtonBarH = jQuery("#projectGridButtonBar").height() + 10; //// margin bottom is 10px;
        var windowH = jQuery(window).height();
        this.gridHeight = windowH - daikinHeaderH - projectTabsH - tabHeaderTitleH - gridButtonBarH - 20;
        if (windowH < 750) {
            this.gridHeight = 550;
        }
    };
    ProjectGridComponent.prototype.getCurrentUserCallback = function (resp) {
        if (resp.isok) {
            this.isAuthenticated = true;
            this.currentUser = resp.model;
            this.canEditProject = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("EditProject"));
            this.canTransferProject = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("TransferProject"));
            this.canUnDeleteProject = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("UndeleteProject"));
            this.canViewPipelineData = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("ViewPipelineData"));
            this.canEditPipelineData = this.userSvc.hasAccess(this.currentUser, this.systemAccessEnum.getSystemAccessValueByName("EditPipelineData"));
            //if (this.canUnDeleteProject && this.canEditProject) {
            //    var deletedProjectColumn = {
            //        field: "deleted",
            //        title: "Deleted",
            //        hidden: true,
            //        filterable: false
            //    };
            //    this.gridColumns.push(deletedProjectColumn);
            //}
            if (this.canEditProject) {
                var deletedProjectColumn = {
                    title: "Delete Project",
                    headerTemplate: "<span class='k-font-icon k-i-trash'></span>",
                    width: "40px",
                    //template: kendo.template("<input type='checkbox' onclick='this.onDeleteProjectCheck(#:projectIdStr#, #:name#)'>"),
                    template: kendo.template("#=this.displayDeleteProjectCheckBox(projectIdStr, name, deleted)#").bind(this),
                    filterable: false,
                    sortable: false,
                    hidden: true
                };
                this.gridColumns.splice(1, 0, deletedProjectColumn);
            }
            if (this.canViewPipelineData) {
                var pipelineStatusColumn = {
                    field: "projectLeadStatusId",
                    title: "Pipeline Status",
                    editor: this.projectPipelineStatusDropDownEditor.bind(this),
                    template: kendo.template("#=this.getprojectPipelineStatus(projectLeadStatusId, projectStatusId, isTransferred, deleted)#").bind(this),
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                                eq: "Is equal to",
                            }
                        },
                        ui: this.projectPipelineStatusFilter.bind(this)
                    },
                    hidden: true
                };
                this.gridColumns.push(pipelineStatusColumn);
            }
            if (this.currentUser.showPrices) {
                var totalListColumn = {
                    field: "totalList",
                    title: "Total List",
                    format: "{0:c}",
                    hidden: true,
                    width: "13%",
                };
                this.gridColumns.push(totalListColumn);
                var totalSellColumn = {
                    field: "totalSell",
                    title: "Total Sell",
                    format: "{0:c}",
                    hidden: true,
                    width: "13%",
                };
                this.gridColumns.push(totalSellColumn);
                var totalNetColumn = {
                    field: "totalNet",
                    title: "Total Net",
                    format: "{0:c}",
                    hidden: true,
                    width: "13%",
                };
                this.gridColumns.push(totalNetColumn);
                var darComStatusColumn = {
                    field: "darComStatus",
                    title: "Dar/Com Status",
                    hidden: true,
                    filterable: false
                };
                this.gridColumns.push(darComStatusColumn);
                var pricingStrategyColumn = {
                    field: "pricingStrategy",
                    title: "Pricing Strategy",
                    hidden: true,
                    filterable: {
                        extra: false,
                        operators: {
                            string: {
                                eq: "Is equal to",
                            }
                        },
                        ui: this.pricingStrategyFilter.bind(this)
                    }
                };
                this.gridColumns.push(pricingStrategyColumn);
            }
            this.setupGrid();
            //this.LoadGridSettings();
        }
        else {
            window.location.href = "/v2/#/login";
        }
    };
    ProjectGridComponent.prototype.getDataSource = function () {
        var self = this;
        var projectsDataSrc = new kendo.data.DataSource({
            transport: {
                read: {
                    url: "/api/Project/GetProjects",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json",
                    cache: true
                },
                update: {
                    url: "/api/Project/EditProjects",
                    dataType: "json",
                    type: "POST",
                    contentType: "application/json"
                },
                parameterMap: function (data, operation) {
                    if (operation !== "read" && data.models) {
                        self.ProjectsGridViewModel.items = data.models;
                        return kendo.stringify(self.ProjectsGridViewModel);
                    }
                    else if (operation == "read") {
                        var queryInfo = {
                            take: data.take,
                            skip: data.skip,
                            page: data.page,
                            pageSize: data.pageSize,
                            sort: data.sort,
                            filter: data.filter,
                            showDeletedProjects: self.showDeletedProjects
                        };
                        return JSON.stringify(queryInfo);
                    }
                }
            },
            sync: function (e) {
                self.reloadGrid();
            },
            change: function (e) {
                //hide grid tool bar when there is no unsaved changes
                if (self.dataSourceIsChanged(this)) {
                    jQuery("#project-grid .k-grid-toolbar").show();
                }
                else {
                    jQuery("#project-grid .k-grid-toolbar").hide();
                }
                self.resizeGrid();
            },
            //requestEnd: function (e:any) {
            //    //check the "response" argument to skip the local operations
            //    if (e.type === "update" && e.response) {
            //        console.log("Current request is 'update'.");
            //    }
            //},
            batch: true,
            sort: ({ field: "projectDate", dir: "desc" }),
            //get projects within last 12 months by default
            filter: {
                filters: [
                    { field: "projectStatusId", operator: "eq", value: "1" }
                    //,
                    //{
                    //    filters: [{ field: "projectDate", operator: "gte", value: self.thisDateLastYearString },
                    //        { field: "projectDate", operator: "lte", value: self.currentDateString }],
                    //    logic: "and"
                    //}
                    //,{ field: "alert", operator: "eq", value: "true" }
                ],
                logic: "and"
            },
            schema: {
                //errors: function (response: any) {
                //    if (response) {
                //        debugger;
                //        console.log(response);
                //        return response;
                //    }
                //    return false;
                //}, 
                data: function (response) {
                    self.displayProjectResponseMessages(response);
                    self.ProjectsGridViewModel = response.model;
                    return response.model.items;
                },
                model: {
                    id: 'projectId',
                    fields: {
                        projectId: { type: 'string', editable: false },
                        projectIdStr: { type: 'string', editable: false },
                        name: { type: 'string', editable: false },
                        alert: { type: 'boolean', editable: false },
                        businessName: { type: 'string', editable: false },
                        projectOwner: { type: 'string', editable: false },
                        customerName: { type: 'string', editable: false },
                        projectType: { type: 'string' },
                        projectStatus: { type: 'string' },
                        projectOpenStatus: { type: 'string' },
                        projectLeadStatus: { type: 'string', editable: false },
                        projectDate: { type: 'date', editable: false },
                        bidDate: { type: 'date' },
                        estimatedClose: { type: 'date' },
                        estimatedDelivery: { type: 'date' },
                        //Quote Info
                        activeQuoteTitle: { type: 'string', editable: false },
                        activeQuoteId: { type: 'string', editable: false },
                        totalList: { type: 'number', editable: false },
                        totalSell: { type: 'number', editable: false },
                        totalNet: { type: 'number', editable: false },
                        totalCountVRVOutDoor: { type: 'number', editable: false },
                        totalCountSplitOutDoor: { type: 'number', editable: false },
                        darComStatus: { type: 'string', editable: false },
                        isCommission: { type: 'boolean', editable: false },
                        pricingStrategy: { type: 'string', editable: false },
                        deleted: { type: 'boolean', editable: false },
                        isStrategicProject: { type: 'boolean', editable: false }
                    }
                },
                total: "model.totalRecords"
            },
            pageSize: 50,
            serverPaging: true,
            serverFiltering: true,
            serverSorting: true,
        });
        projectsDataSrc = this.applyFiltersFromUrl(projectsDataSrc);
        return projectsDataSrc;
    }; // end of getDataSource
    ProjectGridComponent.prototype.applyFiltersFromUrl = function (dataSource) {
        var url = window.location.href;
        var urlQueryString = url.split("?")[1];
        if (urlQueryString != undefined) {
            var urlParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */](urlQueryString, new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* QueryEncoder */]());
            //debugger
            //var params = urlParams.paramsMap.entries();
            //for (var i = 0; i < params.length; i++){
            //    //dataSource._filter.filters.push({ field: params[i], operator: "eq", value: params[i].value });
            //}
            if (urlParams.has("alert")) {
                dataSource._filter.filters.push({ field: "alert", operator: "eq", value: urlParams.get("alert") });
            }
            if (urlParams.has("expirationDays")) {
                dataSource._filter.filters.push({ field: "expirationDays", operator: "eq", value: urlParams.get("expirationDays") });
            }
        }
        return dataSource;
    };
    ProjectGridComponent.prototype.dataSourceIsChanged = function (dataSrc) {
        var dirty = false;
        var self = this;
        self.hasUnsavedChanges = false;
        jQuery.each(dataSrc._data, function () {
            if (this.dirty == true) {
                dirty = true;
                self.hasUnsavedChanges = true;
            }
        });
        if (dataSrc._destroyed.length > 0) {
            dirty = true;
            self.hasUnsavedChanges = true;
        }
        return dirty;
    };
    ProjectGridComponent.prototype.setupGrid = function () {
        var self = this;
        this.projectsGrid = jQuery('#project-grid');
        this.projectsGrid.kendoGrid(self.CombinedGridSettings());
        var gridToolbar = jQuery(".k-grid-toolbar");
        if (!self.canEditProject) {
            gridToolbar.hide();
        }
        jQuery(window).resize(function () {
            self.resizeGrid();
        });
    }; // end of setupGrid()
    ProjectGridComponent.prototype.getBaseGridOptions = function () {
        var self = this;
        return {
            //autoBind: false,
            dataSource: this.ProjectsDataSource,
            height: self.gridHeight,
            columnMenu: true,
            scrollable: true,
            resizable: true,
            sortable: true,
            filterable: true,
            toolbar: ["save", "cancel"],
            editable: {
                confirmation: false
            },
            reorderable: true,
            pageable: {
                refresh: true,
                input: true,
                numeric: false
            },
            columns: this.gridColumns,
            columnReorder: function (e) {
                var gridoptions = this;
                setTimeout(function () {
                    //console.log(kendo.stringify(gridoptions.columns));
                    self.SaveGridSettings();
                }, 5);
            },
            columnResize: function (e) {
                self.SaveGridSettings();
            },
            columnShow: function (e) {
                self.SaveGridSettings();
            },
            columnHide: function (e) {
                self.SaveGridSettings();
            },
            //change: function (e: any) {
            //    alert("changed");
            //    if (e.values.name !== e.model.name) {
            //        console.log("name is modified");
            //    }
            //},
            //saveChanges: function (e: any) {
            //    if (!confirm("Are you sure you want to save all changes?")) {
            //        e.preventDefault();
            //    }
            //    //bootbox.confirm("<p>Are you sure you want to save all changes?</p>", function (result) {
            //    //    if (result == false) {
            //    //        e.preventDefault();
            //    //    }
            //    //});
            //},
            dataBound: function (e) {
                self.resizeGrid();
                //Highlight deleted projects
                var items = this._data;
                var tableRows = jQuery(this.table).find("tr");
                tableRows.each(function (index) {
                    var row = jQuery(this);
                    var Item = items[index];
                    if (Item.deleted == true) {
                        row.addClass("projectDeleted");
                    }
                });
                jQuery("#project-grid th[data-field=totalList]").html("Total List<br>" + kendo.toString(self.ProjectsGridViewModel.totalList, "c"));
                jQuery("#project-grid th[data-field=totalNet]").html("Total Net<br> " + kendo.toString(self.ProjectsGridViewModel.totalNet, "c"));
                jQuery("#project-grid th[data-field=totalSell]").html("Total Sell<br>" + kendo.toString(self.ProjectsGridViewModel.totalSell, "c"));
                jQuery("#project-grid th[data-field=totalCountVRVOutDoor]").html("VRV ODU<br>#" + self.ProjectsGridViewModel.totalVRVOutdoorCount);
                jQuery("#project-grid th[data-field=totalCountSplitOutDoor]").html("Split ODU<br>#" + self.ProjectsGridViewModel.totalSplitCount);
                self.setupDeleteProjectCheckBox();
            }
        };
    };
    ProjectGridComponent.prototype.resizeGrid = function () {
        //jQuery("#project-grid").data("kendoGrid").resize();
        var self = this;
        var daikinHeaderH = jQuery("#daikin-header").height();
        var projectTabsH = jQuery("#projectTabs").height();
        var tabHeaderTitleH = jQuery("div.tab-header").height() + 10 + 10; // margin top & bottom is 10px;
        var gridButtonBarH = jQuery("#projectGridButtonBar").height() + 10; //// margin bottom is 10px;
        var windowH = jQuery(window).height();
        var gridElement = jQuery("#project-grid");
        var dataArea = gridElement.find(".k-grid-content"); // kendo grid row data area 
        var gridHeight = gridElement.innerHeight();
        var otherElements = gridElement.children().not(".k-grid-content"); // other Elements inside kendo grid. (ex: toolbar, header, pager ...)
        var otherElementsHeight = 0;
        otherElements.each(function () {
            var elem = jQuery(this);
            if (elem.hasClass("k-grid-toolbar") && !self.hasUnsavedChanges) {
                //continue;
            }
            else {
                var elemH = jQuery(this).outerHeight();
                otherElementsHeight += elemH;
            }
        });
        var gridElementHeight = windowH - daikinHeaderH - projectTabsH - tabHeaderTitleH - gridButtonBarH - 15;
        if (windowH < 750) {
            gridElementHeight = 550;
        }
        var dataAreaHeight = gridElementHeight - otherElementsHeight;
        gridElement.height(gridElementHeight);
        dataArea.height(dataAreaHeight);
    };
    ProjectGridComponent.prototype.setupGridColumns = function () {
        var columns = [
            {
                title: "Action",
                width: "40px",
                headerTemplate: "",
                template: "<img src='/Images/action-icon.png' class='actions actions-icon'  />",
                attributes: {
                    "class": "actions"
                }
            },
            //{
            //    title: "Delete Project",
            //    headerTemplate: "<span class='k-font-icon k-i-trash'></span>",
            //    width: "40px",
            //    //template: kendo.template("<input type='checkbox' onclick='this.onDeleteProjectCheck(#:projectIdStr#, #:name#)'>"),
            //    template: kendo.template("#=this.displayDeleteProjectCheckBox(projectIdStr, name, deleted)#").bind(this),
            //    //editable: false,
            //    filterable: false,
            //    sortable: false,
            //    hidden: true
            //},
            {
                field: "alert",
                title: "Alert",
                headerTemplate: "<span class='k-icon k-i-note'></span>",
                width: "60px",
                //template: "<span *ngIf='#:alert#' class='k-icon k-i-note'></span> <span>#=alertText#</span>",
                template: kendo.template("#=this.displayAlertIcon(alert, alertText, isTransferred)#").bind(this),
                filterable: true,
                sortable: false
            },
            {
                field: "name",
                title: "Project Name",
                //template: "<a href='/projectdashboard/Project/#=projectIdStr#'>#=name#</a>",
                template: "<a href='/v2/\\\\#/project/project/#=projectIdStr#'>#=name#</a>",
                width: "12%",
                filterable: false
            },
            {
                field: "projectIdStr",
                title: "Project Ref",
                hidden: true,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    }
                },
                sortable: false
            },
            {
                field: "activeQuoteTitle",
                title: "Active Quote",
                template: kendo.template("#=this.displayActiveQuote(activeQuoteTitle, activeQuoteId)#").bind(this),
                hidden: true,
                filterable: false
            },
            {
                field: "projectTypeId",
                title: "Project Type",
                editor: this.projectTypeDropDownEditor.bind(this),
                template: kendo.template("#=this.getProjectType(projectTypeId, projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    },
                    ui: this.projectTypeFilter.bind(this)
                }
            },
            {
                field: "projectStatusId",
                title: "Project Status",
                editor: this.projectStatusDropDownEditor.bind(this),
                template: kendo.template("#=this.getProjectStatus(projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    },
                    ui: this.projectStatusFilter.bind(this)
                }
            },
            {
                field: "projectOpenStatusId",
                title: "Project Open Status",
                editor: this.projectOpenStatusDropDownEditor.bind(this),
                template: kendo.template("#=this.getProjectOpenStatus(projectOpenStatusId, projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    },
                    ui: this.projectOpenStatusFilter.bind(this)
                }
            },
            {
                field: "bidDate",
                title: "Bid Date",
                format: "{0:MM-dd-yyyy}",
                editor: this.datePickerEditor.bind(this),
                template: kendo.template("#=this.displayDate(bidDate, projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    operators: {
                        date: {
                            eq: "Is equal to",
                            gte: "Is after or equal to",
                            lte: "Is before or equal to",
                        }
                    },
                }
            },
            {
                field: "estimatedClose",
                title: "Estimated Close",
                format: "{0:MM-dd-yyyy}",
                editor: this.datePickerEditor.bind(this),
                template: kendo.template("#=this.displayDate(estimatedClose, projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    operators: {
                        date: {
                            eq: "Is equal to",
                            gte: "Is after or equal to",
                            lte: "Is before or equal to",
                        }
                    },
                }
            },
            {
                field: "estimatedDelivery",
                title: "Estimated Delivery",
                format: "{0:MM-dd-yyyy}",
                editor: this.datePickerEditor.bind(this),
                template: kendo.template("#=this.displayDate(estimatedDelivery, projectStatusId, isTransferred, deleted)#").bind(this),
                filterable: {
                    operators: {
                        date: {
                            eq: "Is equal to",
                            gte: "Is after or equal to",
                            lte: "Is before or equal to",
                        }
                    },
                }
            },
            {
                field: "projectOwner",
                title: "Project Owner",
                hidden: true,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    },
                    ui: this.projectOwnerFilter.bind(this)
                },
            },
            {
                field: "businessName",
                title: "Business Name",
                hidden: true,
                filterable: {
                    extra: false,
                    operators: {
                        string: {
                            eq: "Is equal to",
                        }
                    },
                    ui: this.businessNameFilter.bind(this)
                }
            },
            {
                field: "customerName",
                title: "Dealer/Contractor",
                hidden: true,
                filterable: false
            },
            {
                field: "projectDate",
                title: "Project Date",
                format: "{0:MM-dd-yyyy}",
                hidden: true,
                filterable: {
                    operators: {
                        date: {
                            eq: "Is equal to",
                            gte: "Is after or equal to",
                            lte: "Is before or equal to",
                        }
                    },
                }
            },
            {
                field: "totalCountVRVOutDoor",
                title: "VRV ODU #",
                hidden: true,
            },
            {
                field: "totalCountSplitOutDoor",
                title: "Split ODU #",
                hidden: true,
            },
            {
                field: "isStrategicProject",
                title: "Strategic Project",
                template: kendo.template("#=this.displayStrategicProject(isStrategicProject, selectedStrategicTypes, strategicTypes)#").bind(this),
                hidden: true,
            }
            //{
            //    command: ["edit","destroy"],
            //    title: "&nbsp;",
            //    width: "250px"
            //}
        ];
        return columns;
    };
    ProjectGridComponent.prototype.displayActiveQuote = function (activeQuoteTitle, activeQuoteId) {
        if (activeQuoteTitle != "No Active Quote") {
            //return "<a href='/Projectdashboard/QuoteItems?QuoteId=" + activeQuoteId + "'>" + activeQuoteTitle + "</a>";
            return "<a href='/v2/#/quote/quote/" + activeQuoteId + "/existingRecord'>" + activeQuoteTitle + "</a>";
            //return "<a href='/v2/#/quoteItems/" + activeQuoteId + "/existingRecord'>" + activeQuoteTitle + "</a>";
        }
        else {
            return activeQuoteTitle;
        }
    };
    ProjectGridComponent.prototype.displayStrategicProject = function (isStrategicProject, selectedStrategicTypes, strategicTypes) {
        var strategicTypesText = "";
        if (isStrategicProject) {
            for (var i = 0; i < strategicTypes.items.length; i++) {
                if (strategicTypes.items[i].selected) {
                    strategicTypesText += strategicTypes.items[i].text + "&#13;";
                    //if (i < selectedStrategicTypes.length - 1) {
                    //    strategicTypesText += "&#13;";// new line
                    //}
                }
            }
            return "<span title='" + strategicTypesText + "'>True</span>";
        }
        else {
            return "<span>False</span>";
        }
    };
    ProjectGridComponent.prototype.displayAlertIcon = function (alert, alertText, isTransferred) {
        if (isTransferred) {
            return "<span class='k-icon k-i-lock alert-icon'></span>";
        }
        else if (alert) {
            return "<span class='k-icon k-i-note alert-icon'></span>";
        }
        else {
            return "";
        }
    };
    ProjectGridComponent.prototype.setupAlertTooltip = function () {
        jQuery("#project-grid").kendoTooltip({
            //filter: "td:nth-child(2)", //this filter selects the second column's cells
            filter: "tbody tr td span.alert-icon",
            position: "right",
            content: function (e) {
                var dataItem = jQuery("#project-grid").data("kendoGrid").dataItem(e.target.closest("tr"));
                if (dataItem.isTransferred) {
                    return "Project has been transferred.";
                }
                else {
                    var content = dataItem.alertText;
                    return content;
                }
            }
        }).data("kendoTooltip");
    };
    ProjectGridComponent.prototype.setupActionsMenu = function () {
        var self = this;
        jQuery("#actionMenu").kendoContextMenu({
            open: this.onOpenActionMenu.bind(this),
            target: "#project-grid",
            filter: "tbody > tr > td.actions",
            showOn: "click",
            alignToAnchor: true,
            direction: "right",
            select: function (e) {
                self.onContextSelect(e);
            }
        });
    };
    ProjectGridComponent.prototype.onContextSelect = function (e) {
        var self = this;
        //var selectedRow = jQuery(e.target.closest("tr"));
        var selectedCommand = e.item.innerText.trim();
        var actionItem = jQuery(e.item);
        switch (selectedCommand) {
            case "Export Project":
                var actionItemSpan = actionItem.find("span.actionItem");
                this.selectedProjectId = actionItemSpan.attr("projectid");
                this.ProjectsGridViewModel.projectId = this.selectedProjectId;
                var data = {
                    "projectId": this.selectedProjectId,
                };
                this.projectSvc.exportProject(data);
                break;
            case "Edit Project":
                break;
            case "Transfer Project":
                var actionItemSpan = actionItem.find("span.actionItem");
                this.selectedProjectId = actionItemSpan.attr("projectid");
                jQuery("#transferProjectWindow").kendoWindow({
                    width: "500px",
                    title: "Transfer Project",
                    visible: false,
                    modal: true,
                    actions: [
                        "Close"
                    ],
                    position: {
                        top: 100,
                        left: "35%"
                    }
                }).data("kendoWindow").open();
                break;
            case "Delete Project":
                var actionItemSpan = actionItem.find("span.actionItem");
                this.selectedProjectId = actionItemSpan.attr("projectid");
                bootbox.confirm("<p>Are you sure you want to delete this project?</p>", function (result) {
                    if (result) {
                        self.projectSvc.deleteProject(self.selectedProjectId).then(function (resp) {
                            self.displayResponseMessages(resp);
                            var grid = jQuery("#project-grid").data("kendoGrid");
                            self.reloadGrid();
                            //remove deleted project from grid
                            //grid.removeRow(selectedRow);
                            //grid.cancelChanges();
                            //self.hasUnsavedChanges = false;
                        });
                    }
                });
                break;
        }
    };
    ProjectGridComponent.prototype.onOpenActionMenu = function (e) {
        //var self = this;
        var row = jQuery(e.target.parentElement);
        //var grid = this.target.data("kendoGrid");
        var grid = jQuery("#project-grid").data("kendoGrid");
        //var grid = e.target.data("kendoGrid");
        var item = grid.dataItem(row);
        var actionMenuItems = [{
                text: "<span class='actionItem' projectId ='" + item.projectIdStr + "' >Export Project</span>",
                encoded: false
            }];
        if (this.canEditProject && !item.isTransferred && !item.deleted) {
            var editProjectOption = {
                text: "Edit Project",
                encoded: false,
                url: "/v2/#/project/projectEdit/" + item.projectIdStr
            };
            actionMenuItems.push(editProjectOption);
        }
        if (this.canTransferProject && !item.isTransferred && !item.deleted) {
            var transferProjectOption = {
                text: "<span class='actionItem' projectId ='" + item.projectIdStr + "' >Transfer Project</span>",
                encoded: false
            };
            actionMenuItems.push(transferProjectOption);
        }
        if (this.canEditProject && !item.isTransferred && !item.deleted) {
            var deleteProjectOption = {
                text: "<span class='actionItem' projectId ='" + item.projectIdStr + "' >Delete Project</span>",
                encoded: false
            };
            actionMenuItems.push(deleteProjectOption);
        }
        e.sender.setOptions({
            dataSource: actionMenuItems
        });
    };
    ProjectGridComponent.prototype.setupDeleteProjectCheckBox = function () {
        var self = this;
        jQuery("input.deletePrjChkBox").click(function (event) {
            event.stopImmediatePropagation();
            var chkbox = jQuery(event.target);
            var projectId = chkbox.attr("projectid");
            var projectName = chkbox.attr("projectname");
            var project = {
                "projectId": projectId,
                "projectName": projectName
            };
            if (jQuery(this).is(':checked')) {
                self.deleteProjects.push(project);
            }
            else {
                self.removeFromDeleteProjects(projectId);
            }
        });
    };
    ProjectGridComponent.prototype.removeFromDeleteProjects = function (projectId) {
        var self = this;
        var index = self.findDeleteProjectIndex(projectId);
        self.deleteProjects.splice(index, 1);
    };
    ProjectGridComponent.prototype.findDeleteProjectIndex = function (projectId) {
        var self = this;
        var index = 0;
        for (var i = 0; i < self.deleteProjects.length; i++) {
            var item = self.deleteProjects[i];
            if (item.projectId == projectId) {
                return i;
            }
        }
        return null;
    };
    ProjectGridComponent.prototype.openDeleteProjectsWindow = function () {
        var deleteProjectsWindow = jQuery("#deleteProjectsWindow");
        deleteProjectsWindow.kendoWindow({
            width: "500px",
            title: "Delete Projects",
            visible: false,
            modal: true,
            actions: [
                "Close"
            ],
        }).data("kendoWindow").center().open();
    };
    ProjectGridComponent.prototype.emptyDeleteProjectsArray = function () {
        this.deleteProjects = [];
    };
    ProjectGridComponent.prototype.displayDeleteProjectCheckBox = function (projectIdStr, name, deleted) {
        if (deleted == false) {
            return "<input type='checkbox' class='deletePrjChkBox' projectid='" + projectIdStr + "' projectname='" + name + "'>";
        }
        else {
            return "";
        }
    };
    ProjectGridComponent.prototype.openExportProjectsWindow = function () {
        var exportProjectsWindow = jQuery("#exportProjectsWindow");
        exportProjectsWindow.kendoWindow({
            width: "400px",
            title: "Export Projects",
            visible: false,
            modal: true,
            actions: [
                "Close"
            ],
        }).data("kendoWindow").center().open();
    };
    ProjectGridComponent.prototype.setupSearchBox = function () {
        jQuery("#projectSearchBox").keyup(function (event) {
            if (event.keyCode == 13) {
                jQuery("#projectSearchBtn").click();
            }
        });
        jQuery("#projectSearchBtn").click(function () {
            var value = jQuery("#projectSearchBox")[0].value;
            if (value) {
                //clear all filters
                var filter = jQuery("#project-grid").data("kendoGrid").dataSource.filter();
                if (filter != undefined) {
                    jQuery("#project-grid").data("kendoGrid").dataSource.filter().filters = [];
                }
                //apply new filters
                jQuery("#project-grid").data("kendoGrid").dataSource.filter([{
                        "name": "search",
                        "logic": "or",
                        "filters": [
                            {
                                "field": "projectId",
                                "operator": "contains",
                                "value": value
                            },
                            {
                                "field": "name",
                                "operator": "contains",
                                "value": value
                            },
                            {
                                "field": "projectOwner",
                                "operator": "contains",
                                "value": value
                            },
                            {
                                "field": "businessName",
                                "operator": "contains",
                                "value": value
                            }
                        ]
                    }]);
            }
        });
    };
    ProjectGridComponent.prototype.clearFilters = function () {
        //jQuery("form.k-filter-menu button[type='reset']").trigger("click");
        var filter = jQuery("#project-grid").data("kendoGrid").dataSource.filter();
        if (filter != undefined) {
            jQuery("#project-grid").data("kendoGrid").dataSource.filter().filters = [];
            this.reloadGrid();
        }
    };
    ProjectGridComponent.prototype.reloadGrid = function () {
        var projectEditAllGridDtaSrc = jQuery('#project-grid').data('kendoGrid').dataSource;
        projectEditAllGridDtaSrc.read();
    };
    ProjectGridComponent.prototype.CloseTransferProjectPopup = function () {
        var transferProjectWindow = jQuery("#transferProjectWindow").data("kendoWindow");
        transferProjectWindow.close();
    };
    //Project Type
    //If Project Status is "Open" then show a dropdown list when user click on the editable cell
    ProjectGridComponent.prototype.projectTypeDropDownEditor = function (container, options) {
        if (options.model.projectStatusId == 1 && this.canEditProject && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownList({
                //autoBind: false,
                dataSource: this.ProjectsGridViewModel.projectTypes.items,
                dataTextField: "text",
                dataValueField: "value"
            });
        }
        else {
            var text = jQuery('<span>' + options.model.projectType + '</span>');
            text.appendTo(container);
        }
    };
    //If Project Status is "Open" then show Project Type as editable field
    ProjectGridComponent.prototype.getProjectType = function (projectTypeId, projectStatusId, isTransferred, deleted) {
        if (this.ProjectsGridViewModel != undefined) {
            var projectTypes = this.ProjectsGridViewModel.projectTypes.items;
            for (var _i = 0, projectTypes_1 = projectTypes; _i < projectTypes_1.length; _i++) {
                var projectType = projectTypes_1[_i];
                if (projectTypeId == projectType.value) {
                    if (projectStatusId == 1 && this.canEditProject && !isTransferred && !deleted) {
                        return "<span class='k-edit-cell k-dropdown-wrap k-state-default' style='overflow: hidden; text-overflow:ellipsis;' >" + projectType.text + "<span>";
                    }
                    else {
                        return projectType.text;
                    }
                }
            }
        }
        return "";
    };
    //Project Status
    //If Project Status is "Open" then show a dropdown list when user click on the editable cell
    ProjectGridComponent.prototype.projectStatusDropDownEditor = function (container, options) {
        if (options.model.projectStatusId == 1 && this.canEditProject && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownList({
                dataSource: this.ProjectsGridViewModel.projectStatusTypes.items,
                dataTextField: "text",
                dataValueField: "value"
            });
        }
        if ((options.model.projectStatusId == 3 || options.model.projectStatusId == 4) && this.canEditProject && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownList({
                dataSource: [{ text: "Open", value: 1 }],
                dataTextField: "text",
                dataValueField: "value"
            });
        }
        else {
            var text = jQuery('<span>' + options.model.projectStatus + '</span>');
            text.appendTo(container);
        }
    };
    //If Project Status is "Open" then show Project Status as editable field
    ProjectGridComponent.prototype.getProjectStatus = function (projectStatusId, isTransferred, deleted) {
        if (this.ProjectsGridViewModel != undefined) {
            var statusList = this.ProjectsGridViewModel.projectStatusTypes.items;
            for (var _i = 0, statusList_1 = statusList; _i < statusList_1.length; _i++) {
                var status_1 = statusList_1[_i];
                if (projectStatusId == status_1.value) {
                    if ((projectStatusId == 1 || projectStatusId == 3 || projectStatusId == 4) && this.canEditProject && !isTransferred && !deleted) {
                        return "<span class='k-edit-cell k-dropdown-wrap k-state-default' style='overflow: hidden; text-overflow:ellipsis;' >" + status_1.text + "<span>";
                    }
                    else {
                        return status_1.text;
                    }
                    //return status.text;
                }
            }
        }
        return "";
    };
    //Project Open Status
    //If Project Status is "Open" then show a dropdown list when user click on the editable cell
    ProjectGridComponent.prototype.projectOpenStatusDropDownEditor = function (container, options) {
        if (options.model.projectStatusId == 1 && this.canEditProject && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownList({
                //autoBind: false,
                dataSource: this.ProjectsGridViewModel.projectOpenStatusTypes.items,
                dataTextField: "text",
                dataValueField: "value"
            });
        }
        else {
            var text = jQuery('<span>' + options.model.projectOpenStatus + '</span>');
            text.appendTo(container);
        }
    };
    //If Project Status is "Open" then show Project Open Status as editable field
    ProjectGridComponent.prototype.getProjectOpenStatus = function (projectOpenStatusId, projectStatusId, isTransferred, deleted) {
        if (this.ProjectsGridViewModel != undefined) {
            var openStatusList = this.ProjectsGridViewModel.projectOpenStatusTypes.items;
            for (var _i = 0, openStatusList_1 = openStatusList; _i < openStatusList_1.length; _i++) {
                var status_2 = openStatusList_1[_i];
                if (projectOpenStatusId == status_2.value) {
                    if (projectStatusId == 1 && this.canEditProject && !isTransferred && !deleted) {
                        return "<span class='k-edit-cell k-dropdown-wrap k-state-default' style='overflow: hidden; text-overflow:ellipsis;' >" + status_2.text + "<span>";
                    }
                    else {
                        return status_2.text;
                    }
                }
            }
        }
        return "";
    };
    //projectPipelineStatusDropDownEditor
    ProjectGridComponent.prototype.projectPipelineStatusDropDownEditor = function (container, options) {
        if (options.model.projectStatusId == 1 && this.canEditProject && this.canEditPipelineData && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDropDownList({
                dataSource: [{ text: "Lead", value: 1 },
                    { text: "Opportunity", value: 2 },
                    { text: "Disqualified", value: 5 }],
                dataTextField: "text",
                dataValueField: "value"
            });
        }
        else {
            var text = jQuery('<span>' + options.model.projectLeadStatus + '</span>');
            text.appendTo(container);
        }
    };
    ProjectGridComponent.prototype.getprojectPipelineStatus = function (projectLeadStatusId, projectStatusId, isTransferred, deleted) {
        if (this.ProjectsGridViewModel != undefined) {
            var pipelineStatusList = this.ProjectsGridViewModel.projectLeadStatusTypes.items;
            for (var _i = 0, pipelineStatusList_1 = pipelineStatusList; _i < pipelineStatusList_1.length; _i++) {
                var status_3 = pipelineStatusList_1[_i];
                if (projectLeadStatusId == status_3.value) {
                    if (projectStatusId == 1 && this.canEditProject && this.canEditPipelineData && !isTransferred && !deleted) {
                        return "<span class='k-edit-cell k-dropdown-wrap k-state-default' style='overflow: hidden; text-overflow:ellipsis;' >" + status_3.text + "<span>";
                    }
                    else {
                        return status_3.text;
                    }
                }
            }
        }
        return "";
    };
    //Date Picker
    //If Project Status is "Open" then show a date picker when user click on the editable cell
    ProjectGridComponent.prototype.datePickerEditor = function (container, options) {
        if (options.model.projectStatusId == 1 && this.canEditProject && !options.model.isTransferred && !options.model.deleted) {
            jQuery('<input data-text-field="text" data-value-field="value" data-bind="value:' + options.field + '" />')
                .appendTo(container)
                .kendoDatePicker();
        }
        else {
            var text = jQuery('<span>' + options.model[options.field].toLocaleDateString('en-US') + '</span>');
            text.appendTo(container);
        }
    };
    //If Project Status is "Open" then show date as editable field
    ProjectGridComponent.prototype.displayDate = function (date, projectStatusId, isTransferred, deleted) {
        if (projectStatusId == 1 && this.canEditProject && !isTransferred && !deleted) {
            //return "<span class='k-picker-wrap k-state-default k-widget'  >" + date.toLocaleDateString('en-US') + " <span unselectable='on' class='k-icon k-i-calendar'>select</span> </span>  ";
            return "<span class='k-edit-cell k-picker-wrap k-state-default'  >" + date.toLocaleDateString('en-US') + " </span> ";
        }
        else {
            return date.toLocaleDateString('en-US');
        }
    };
    //Filters
    ProjectGridComponent.prototype.projectTypeFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.projectTypes.items,
            dataTextField: "text",
            dataValueField: "value"
        });
    };
    ProjectGridComponent.prototype.projectStatusFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.projectStatusTypes.items,
            dataTextField: "text",
            dataValueField: "value"
        });
    };
    ProjectGridComponent.prototype.projectOpenStatusFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.projectOpenStatusTypes.items,
            dataTextField: "text",
            dataValueField: "value"
        });
    };
    ProjectGridComponent.prototype.projectPipelineStatusFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.projectLeadStatusTypes.items,
            dataTextField: "text",
            dataValueField: "value"
        });
    };
    ProjectGridComponent.prototype.businessNameFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.businessesInGroup.items,
            dataTextField: "text",
            dataValueField: "text"
        });
    };
    //projectOwnerFilter
    ProjectGridComponent.prototype.projectOwnerFilter = function (element) {
        element.kendoDropDownList({
            dataSource: this.ProjectsGridViewModel.usersInGroup.items,
            dataTextField: "text",
            dataValueField: "text"
        });
    };
    ProjectGridComponent.prototype.pricingStrategyFilter = function (element) {
        element.kendoDropDownList({
            dataSource: [{ text: "Commission", value: "Commission" },
                { text: "Buy/Sell", value: "Buy/Sell" }],
            dataTextField: "text",
            dataValueField: "value"
        });
    };
    //showDeletedProjectsFilter
    ProjectGridComponent.prototype.showDeletedProjectsFilter = function (element) {
        var self = this;
        element.kendoDropDownList({
            dataSource: [{ text: "Yes", value: true },
                { text: "No", value: false }],
            dataTextField: "text",
            dataValueField: "value",
            select: function (e) {
                var item = e.item;
                var text = item.text();
                if (text == "Yes") {
                    self.showDeletedProjects = true;
                }
                else if (text == "No") {
                    self.showDeletedProjects = false;
                }
            }
        });
    };
    //Export To Excel
    ProjectGridComponent.prototype.exportToExcel = function () {
        alert("export to excel");
    };
    ProjectGridComponent.prototype.displayProjectResponseMessages = function (response) {
        for (var _i = 0, _a = response.model.items; _i < _a.length; _i++) {
            var project = _a[_i];
            if (project.messages != null) {
                for (var _b = 0, _c = project.messages.items; _b < _c.length; _b++) {
                    var message = _c[_b];
                    if (message.type == 40) {
                        this.toastrSvc.Success(message.text);
                    }
                    else if (message.type == 10) {
                        this.toastrSvc.Error(message.text);
                    }
                }
            }
        }
        if (!response.isok) {
            for (var _d = 0, _e = response.messages.items; _d < _e.length; _d++) {
                var message = _e[_d];
                this.toastrSvc.Error(message.text);
            }
        }
    };
    ProjectGridComponent.prototype.displayResponseMessages = function (response) {
        for (var _i = 0, _a = response.messages.items; _i < _a.length; _i++) {
            var message = _a[_i];
            if (message.type == 40) {
                this.toastrSvc.Success(message.text);
            }
            else if (message.type == 10) {
                this.toastrSvc.Error(message.text);
            }
        }
    };
    ProjectGridComponent.prototype.SaveGridSettings = function () {
        var grid = jQuery("#project-grid").data("kendoGrid");
        var gridsettings = kendo.stringify(grid.getOptions());
        localStorage["projects-grid-settings-1"] = gridsettings;
    };
    ProjectGridComponent.prototype.LoadGridSettings = function () {
        var grid = jQuery("#project-grid").data("kendoGrid");
        var baseSettings = this.getBaseGridOptions();
        var savedSettings = JSON.parse(localStorage["projects-grid-settings-1"]);
        //var gridSettings = jQuery.extend(true, baseSettings, savedSettings);
        var gridSettings = this.MergeGridSettings(baseSettings, savedSettings);
        grid.setOptions(gridSettings);
    };
    ProjectGridComponent.prototype.MergeGridSettings = function (baseSettings, savedSettings) {
        var columns = [];
        for (var i = 0; i < savedSettings.columns.length; i++) {
            for (var j = 0; j < baseSettings.columns.length; j++) {
                if (savedSettings.columns[i].title == baseSettings.columns[j].title) {
                    //if column title match then merge savedSetting column into baseSetting column
                    var col = jQuery.extend(true, baseSettings.columns[j], savedSettings.columns[i]);
                    columns.push(col);
                }
            }
        }
        var newGridSettings = baseSettings;
        newGridSettings.columns = columns;
        return newGridSettings;
    };
    ProjectGridComponent.prototype.CombinedGridSettings = function () {
        var baseSettings = this.getBaseGridOptions();
        //return baseSettings;
        if (localStorage.getItem("projects-grid-settings-1") === null) {
            return baseSettings;
        }
        else {
            var savedSettings = JSON.parse(localStorage["projects-grid-settings-1"]);
            var gridSettings = this.MergeGridSettings(baseSettings, savedSettings);
            return gridSettings;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProjectGridComponent.prototype, "blockUI", void 0);
    ProjectGridComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-grid',
            template: __webpack_require__("../../../../../src/app/projects/components/project-grid/projectGrid.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["h" /* SystemAccessEnum */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], ProjectGridComponent);
    return ProjectGridComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project-internal/projectInternal.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row no-gutters\">\r\n    <div class=\"form-group col-md-3 col-xs-12\">\r\n        <label class=\"control-label required\">Pipeline Status</label>\r\n        <select class=\"form-control\" [attr.disabled]=\"canEditPipelineData? null : 'disabled'\" [(ngModel)]=\"project.projectLeadStatusTypeId\" >\r\n            <option [value]=\"null\" selected disabled>Select ...</option>\r\n            <option *ngFor=\"let item of project.projectLeadStatusTypes.items\" [attr.disabled]=\"item.disabled == true? 'disabled': null\" [value]=\"item.value\">{{item.text}}</option>\r\n        </select>\r\n        \r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"row no-gutters\">\r\n    <div class=\"form-group col-md-3 col-xs-12\">\r\n        <label class=\"control-label\">Order Number</label>\r\n        <input type=\"text\" [disabled]=\"true\" class=\"form-control\" #eRPFirstOrderNumber=\"ngModel\" name=\"eRPFirstOrderNumber\" [(ngModel)]=\"project.eRPFirstOrderNumber\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row no-gutters\">\r\n    <div class=\"form-group col-md-3 col-xs-12\">\r\n        <label class=\"control-label\">Order Date</label>\r\n        <input type=\"text\" [disabled]=\"true\" class=\"form-control\" #eRPFirstOrderDate=\"ngModel\" name=\"eRPFirstOrderDate\" [(ngModel)]=\"project.eRPFirstOrderDate\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row no-gutters\">\r\n    <div class=\"form-group col-md-3 col-xs-12\">\r\n        <label class=\"control-label\">Order PO Number</label>\r\n        <input type=\"text\" [disabled]=\"true\" class=\"form-control\" #eRPFirstPONumber=\"ngModel\" name=\"eRPFirstPONumber\" [(ngModel)]=\"project.eRPFirstPONumber\">\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row no-gutters\">\r\n    <div class=\"form-group col-md-6 col-xs-12\">\r\n        <label class=\"control-label\">Order Comments</label>\r\n        <textarea [disabled]=\"true\" class=\"form-control\" #eRPFirstOrderComment=\"ngModel\" name=\"eRPFirstOrderComment\" [(ngModel)]=\"project.eRPFirstOrderComment\"></textarea>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-internal/projectInternal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInternalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectInternalComponent = /** @class */ (function () {
    function ProjectInternalComponent(router, route, userSvc, enums, systemAccessEnum, http) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.enums = enums;
        this.systemAccessEnum = systemAccessEnum;
        this.http = http;
        this.canViewPipelineData = false;
        this.canEditPipelineData = false;
        this.defaultItem = { text: "Select ...", value: null };
    }
    ProjectInternalComponent.prototype.ngOnInit = function () {
        this.canViewPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewPipelineData);
        this.canEditPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditPipelineData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectInternalComponent.prototype, "projectEditForm", void 0);
    ProjectInternalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-internal',
            template: __webpack_require__("../../../../../src/app/projects/components/project-internal/projectInternal.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProjectInternalComponent);
    return ProjectInternalComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project-list/project-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<project-tabs></project-tabs>\r\n\r\n<div class=\"tab-header\">\r\n    <h4>PROJECTS</h4>\r\n</div>\r\n\r\n<div id=\"projectsGridContainer\" >\r\n    <project-grid ></project-grid>\r\n</div>-->\r\n\r\n<project-tabs [user]=\"user\"></project-tabs>\r\n\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">      \r\n\r\n        <div class=\"tab-header\">\r\n            <h4>PROJECTS</h4>\r\n        </div>\r\n   \r\n        <div *ngIf=\"canViewProject ; else elseBlock\" id=\"projectsGridContainer\">\r\n            <project-grid></project-grid>\r\n        </div>\r\n        <ng-template #elseBlock>No permission to view projects</ng-template>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-list/project-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectListComponent = /** @class */ (function () {
    //public editMode: boolean = false;
    function ProjectListComponent(elementRef, router, route, userSvc, enums) {
        this.router = router;
        this.route = route;
        this.userSvc = userSvc;
        this.enums = enums;
        this.canViewProject = false;
        //this.projectsGridDataSource = this.getData();
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.blockUI.start('Loading...');
        this.userSvc.isAuthenticated().then(function (resp) {
            if (!resp.isok || resp.model != true) {
                //Go back to login page
                window.location.href = "/v2/#/login";
            }
        });
        this.canViewProject = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);
        this.blockUI.stop();
        //if (!this.userSvc.userIsAuthenticated) {
        //    window.location.href = "/Account/Login";
        //    //window.location.href = "/v2/#/account/login";
        //}
        //this.projectsGridDataSource = this.getData();
    };
    ProjectListComponent.prototype.ngAfterContentInit = function () {
        //setTimeout(this.removeKIconText, 1000); // wait 1 sec
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProjectListComponent.prototype, "blockUI", void 0);
    ProjectListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'projects',
            template: __webpack_require__("../../../../../src/app/projects/components/project-list/project-list.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_index__["e" /* Enums */]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/projects/components/project-pipeline-notes-update/project-pipeline-notes-update.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"estimateDeliveryDialog\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">Please update the estimated delivery date</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <form>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-md-3 col-xs-12\" for=\"bidDate\">Bid Date:</label>\r\n                        <kendo-datepicker class=\"col-md-4 col-xs-12\" [value]=\"project.bidDate\" [disabled]=\"true\">\r\n\r\n                        </kendo-datepicker>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-md-3 col-xs-12\" for=\"closeDate\">Est. Close Date</label>\r\n                        <kendo-datepicker class=\"col-md-4 col-xs-12\" [value]=\"project.estimatedClose\" [disabled]=\"true\">\r\n\r\n                        </kendo-datepicker>\r\n                    </div>\r\n                    <div class=\"row\">\r\n                        <label class=\"col-md-3 col-xs-12\" for=\"deliveryDate\">Est. Delivery Date</label>\r\n                        <kendo-datepicker class=\"col-md-4 col-xs-12\" [(value)]=\"project.estimatedDelivery\">\r\n\r\n                        </kendo-datepicker>\r\n                    </div>\r\n                </form>\r\n\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"updateDeliveryDate()\">Save</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<form *ngIf=\"canEditPipelineData && !project.deleted && newProjectPipelineNote && projectPipelineNoteOptions\">\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"form-group col-md-3 col-xs-10\">\r\n            <select class=\"form-control\" [(ngModel)]=\"newProjectPipelineNote.projectPipelineNoteId\" name=\"projectPipelineNote\" (ngModelChange)=\"pipelineNoteChange($event)\">\r\n                <option [value]=\"null\" selected>Select ...</option>\r\n                <option *ngFor=\"let item of projectPipelineNoteOptions.items\"\r\n                        [value]=\"item.projectPipelineNoteTypeId\">\r\n                    {{item.name}}\r\n                </option>\r\n            </select>\r\n        </div>\r\n        <div class=\"form-group col-md-1 col-xs-2\">\r\n            <button class=\"btn btn-default\" (click)=\"addPipelineNote()\">Add</button>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row no-gutters\">\r\n        <div class=\"form-group col-md-5 col-xs-12\">\r\n            <textarea class=\"form-control\" name=\"note\" [(ngModel)]=\"newProjectPipelineNote.note\"></textarea>\r\n        </div>\r\n    </div>\r\n</form>\r\n\r\n<div *ngIf=\"projectPipelineNotes && (canViewPipelineData || canEditPipelineData)\" class=\"row no-gutters\">\r\n    <div class=\"col-md-5 col-xs-12\">\r\n        <div *ngIf=\"projectPipelineNotes.length > 0\">\r\n            <div *ngFor=\"let item of projectPipelineNotes\">\r\n                <hr />\r\n                <p>{{item.projectPipelineNoteType.name}} at {{ item.timestamp | date: 'short' }} by {{ item.ownerName }}</p>\r\n                <p>{{item.note}}</p>\r\n            </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"projectPipelineNotes.length == 0\">\r\n            No Records to display\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-pipeline-notes-update/project-pipeline-notes-update.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPipelineNotesUpdateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectPipelineNotesUpdateComponent = /** @class */ (function () {
    function ProjectPipelineNotesUpdateComponent(router, route, toastrSvc, http, projectSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.projectSvc = projectSvc;
        this.projectPipelineNotes = [];
        this.defaultItem = { name: "Select ...", value: null };
    }
    ProjectPipelineNotesUpdateComponent.prototype.ngOnChanges = function () {
        this.project.bidDate = new Date(Date.parse(this.project.bidDate));
        this.project.estimatedClose = new Date(Date.parse(this.project.estimatedClose));
        this.project.estimatedDelivery = new Date(Date.parse(this.project.estimatedDelivery));
        this.currentEstDeliveryDate = new Date(Date.parse(this.project.estimatedDelivery));
    };
    ProjectPipelineNotesUpdateComponent.prototype.ngOnInit = function () {
        this.getNewProjectPipelineNote();
        this.getPipelineNoteOptions();
        this.getProjectPipelineNotes();
        //this.project.bidDate = new Date(Date.parse(this.project.bidDate));
        //this.project.estimatedClose = new Date(Date.parse(this.project.estimatedClose));
        //this.project.estimatedDelivery = new Date(Date.parse(this.project.estimatedDelivery));
        //this.currentEstDeliveryDate = new Date(Date.parse(this.project.estimatedDelivery));
    };
    ProjectPipelineNotesUpdateComponent.prototype.getNewProjectPipelineNote = function () {
        var self = this;
        this.projectSvc.getNewProjectPipelineNote(this.project.projectId)
            .subscribe(function (resp) {
            if (resp.isok) {
                self.newProjectPipelineNote = resp.model;
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectPipelineNotesUpdateComponent.prototype.getPipelineNoteOptions = function () {
        var self = this;
        this.projectSvc.getProjectPipelineNoteOptions()
            .subscribe(function (resp) {
            if (resp.isok) {
                self.projectPipelineNoteOptions = resp.model;
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectPipelineNotesUpdateComponent.prototype.getProjectPipelineNotes = function () {
        var _this = this;
        var self = this;
        this.projectSvc.getProjectPipelineNotes(this.project.projectId)
            .subscribe(function (resp) {
            if (resp.isok) {
                //self.projectPipelineNotes = resp.model;
                _this.pipelineNotesReverse(resp.model);
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectPipelineNotesUpdateComponent.prototype.pipelineNotesReverse = function (notes) {
        for (var i = 0; i < notes.items.length; i++) {
            this.projectPipelineNotes.unshift(notes.items[i]);
        }
    };
    ProjectPipelineNotesUpdateComponent.prototype.pipelineNoteChange = function (value) {
        for (var i = 0; i < this.projectPipelineNoteOptions.items.length; i++) {
            if (this.projectPipelineNoteOptions.items[i].projectPipelineNoteTypeId == value) {
                this.newProjectPipelineNote.projectPipelineNoteType = this.projectPipelineNoteOptions.items[i];
            }
        }
    };
    ProjectPipelineNotesUpdateComponent.prototype.addPipelineNote = function () {
        var _this = this;
        //TODO: Estimate Delivery date push forward/back
        if (this.newProjectPipelineNote.projectPipelineNoteId == 4 || this.newProjectPipelineNote.projectPipelineNoteId == 5) {
            __WEBPACK_IMPORTED_MODULE_6_jquery__("#estimateDeliveryDialog").modal({ backdrop: 'static', keyboard: false });
        }
        else if (this.newProjectPipelineNote.projectPipelineNoteId == 1) {
            this.project.projectLeadStatusTypeId = 2; // Opportunity
            this.projectSvc.postProject(this.project)
                .subscribe(function (resp) {
                if (resp.isok) {
                    _this.project.projectLeadStatusTypeDescription = "Opportunity";
                    _this.postPipelineNote();
                }
                else {
                    _this.toastrSvc.displayResponseMessages(resp);
                }
            }, function (err) { return console.log("Error: ", err); });
        }
        else {
            this.postPipelineNote();
        }
    };
    ProjectPipelineNotesUpdateComponent.prototype.updateDeliveryDate = function () {
        var _this = this;
        this.projectSvc.postProject(this.project)
            .subscribe(function (resp) {
            if (resp.isok) {
                _this.postPipelineNote();
                _this.currentEstDeliveryDate = _this.project.estimatedDelivery;
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
                _this.project.estimatedDelivery = _this.currentEstDeliveryDate;
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectPipelineNotesUpdateComponent.prototype.postPipelineNote = function () {
        var self = this;
        this.projectSvc.postProjectPipelineNote(this.newProjectPipelineNote)
            .subscribe(function (resp) {
            if (resp.isok) {
                self.newProjectPipelineNote = resp.model;
                self.getProjectPipelineNotes();
                self.getNewProjectPipelineNote();
                self.toastrSvc.displayResponseMessages(resp);
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPipelineNotesUpdateComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPipelineNotesUpdateComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPipelineNotesUpdateComponent.prototype, "canViewPipelineData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectPipelineNotesUpdateComponent.prototype, "canEditPipelineData", void 0);
    ProjectPipelineNotesUpdateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-pipeline-notes-update',
            template: __webpack_require__("../../../../../src/app/projects/components/project-pipeline-notes-update/project-pipeline-notes-update.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_5__services_project_service__["a" /* ProjectService */]])
    ], ProjectPipelineNotesUpdateComponent);
    return ProjectPipelineNotesUpdateComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project-quotes/projectQuotes.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"col\">PROJECT QUOTES</h4>\r\n\r\n<kendo-grid [data]=\"projectQuotes.items\">\r\n    <!--Mobile-->\r\n    <kendo-grid-column media=\"(max-width: 450px)\" title=\"Products\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Actions</div>\r\n                <div class=\"7\">\r\n                    <kendo-dropdownbutton [data]=\"actionOptions\" [imageUrl]=\"'/v2/src/assets/images/action-icon.png'\">\r\n                        <ng-template kendoDropDownButtonItemTemplate>\r\n                            <ul class=\"nav nav-stacked\">\r\n                                <li *ngIf=\"user.showPrices\">\r\n                                    <a href=\"/ProjectDashboard/QuotePrintExcel?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}&withCostPrices=true\">\r\n                                        Export Quote\r\n                                    </a>\r\n                                </li>\r\n                                <li *ngIf=\"!user.showPrices\">\r\n                                    <a href=\"/ProjectDashboard/QuotePrintExcel?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}&withCostPrices=false\">\r\n                                        Export Quote\r\n                                    </a>\r\n                                </li>\r\n                                <li>\r\n                                    <a href=\"/v2/#/quote/quoteEdit/{{project.projectId}}/{{dataItem.quoteId}}\">Edit Quote</a>\r\n                                </li>\r\n                                <li>\r\n                                    <!--<a href=\"/Projectdashboard/QuoteDuplicate?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}\">Duplicate Quote</a>-->\r\n                                    <a (click)=\"duplicateQuote(project.projectId, dataItem.quoteId)\">Duplicate Quote</a>\r\n                                </li>\r\n                            </ul>\r\n                        </ng-template>\r\n                    </kendo-dropdownbutton>\r\n                </div>\r\n            </div>\r\n            \r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Quote:</div>\r\n                <!--<div class=\"7\">{{ dataItem.title }}</div>-->\r\n                <div class=\"7\"><a href=\"/v2/#/quote/quote/{{dataItem.quoteId}}/existingRecord\" style=\"color:#337ab7\">{{ dataItem.title}}</a></div>\r\n\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Alert:</div>\r\n                <div class=\"7\">{{ dataItem.alert }}</div>\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Revision:</div>\r\n                <div class=\"7\">{{ dataItem.revision }}</div>\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Date:</div>\r\n                <div class=\"7\">{{ dataItem.timestamp | date: 'shortDate' }}</div>\r\n                <div class=\"col-xs-5\" *ngIf=\"user.showPrices\" style=\"font-weight:700;\">Total List:</div>\r\n                <div class=\"7\" *ngIf=\"user.showPrices\">{{ dataItem.totalList | currency:'USD':true:'1.2-2' }}</div>\r\n                <div class=\"col-xs-5\" *ngIf=\"user.showPrices\" style=\"font-weight:700;\">Total Net:</div>\r\n                <div class=\"7\" *ngIf=\"user.showPrices\">{{ dataItem.totalNet | currency:'USD':true:'1.2-2' }}</div>\r\n                <div class=\"col-xs-5\" *ngIf=\"user.showPrices\" style=\"font-weight:700;\">Total Sell:</div>\r\n                <div class=\"7\" *ngIf=\"user.showPrices\">{{ dataItem.totalSell | currency:'USD':true:'1.2-2' }}</div>\r\n                \r\n            </div>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-xs-5\" style=\"font-weight:700;\">Actvie</div>\r\n                <div class=\"7\">\r\n                    <kendo-switch [(ngModel)]=\"dataItem.active\" (ngModelChange)=\"setQuoteActive(dataItem)\"></kendo-switch>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n\r\n    <!--Desktop-->\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"\" width=\"60\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n\r\n            <kendo-dropdownbutton [data]=\"actionOptions\" [imageUrl]=\"'/v2/src/assets/images/action-icon.png'\">\r\n                <ng-template kendoDropDownButtonItemTemplate>\r\n                    <ul class=\"nav nav-stacked\">\r\n                        <li *ngIf=\"user.showPrices\">\r\n                            <a href=\"/ProjectDashboard/QuotePrintExcel?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}&withCostPrices=true\">Export Quote</a>\r\n                        </li>\r\n                        <li *ngIf=\"!user.showPrices\">\r\n                            <a href=\"/ProjectDashboard/QuotePrintExcel?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}&withCostPrices=false\">Export Quote</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"/v2/#/quote/quoteEdit/{{project.projectId}}/{{dataItem.quoteId}}\">Edit Quote</a>\r\n                        </li>\r\n                        <li>\r\n                            <!--<a href=\"/Projectdashboard/QuoteDuplicate?projectId={{project.projectId}}&quoteId={{dataItem.quoteId}}\">Duplicate Quote</a>-->\r\n                            <a (click)=\"duplicateQuote(project.projectId, dataItem.quoteId)\">Duplicate Quote</a>\r\n                        </li>\r\n                    </ul>\r\n                </ng-template>\r\n\r\n            </kendo-dropdownbutton>\r\n\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"Quote\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            <a href=\"/v2/#/quote/quote/{{dataItem.quoteId}}/existingRecord\" style=\"color:#337ab7\">{{ dataItem.title}}</a>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"alert\" title=\"Alert\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"revision\" title=\"Revision\">\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" field=\"itemCount\" title=\"Items\">\r\n    </kendo-grid-column>\r\n    <!--<kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\">\r\n    </kendo-grid-column>-->\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"Date\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{ dataItem.timestamp | date: 'shortDate'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" *ngIf=\"user.showPrices\" title=\"Total List\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{ dataItem.totalList | currency:'USD':true:'1.2-2'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" *ngIf=\"user.showPrices\" title=\"Total Net\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{ dataItem.totalNet | currency:'USD':true:'1.2-2'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" *ngIf=\"user.showPrices\" title=\"Total Sell\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            {{ dataItem.totalSell | currency:'USD':true:'1.2-2'}}\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n    <kendo-grid-column media=\"(min-width: 450px)\" title=\"Active\">\r\n        <ng-template kendoGridCellTemplate let-dataItem>\r\n            <kendo-switch [(ngModel)]=\"dataItem.active\" (ngModelChange)=\"setQuoteActive(dataItem)\"></kendo-switch>\r\n        </ng-template>\r\n    </kendo-grid-column>\r\n</kendo-grid>"

/***/ }),

/***/ "../../../../../src/app/projects/components/project-quotes/projectQuotes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectQuotesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__quotes_services_quote_service__ = __webpack_require__("../../../../../src/app/quotes/services/quote.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectQuotesComponent = /** @class */ (function () {
    function ProjectQuotesComponent(router, route, toastrSvc, http, quoteSvc, projectSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.quoteSvc = quoteSvc;
        this.projectSvc = projectSvc;
        this.reloadDataEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.actionOptions = [{}];
        this.defaultItem = { text: "Select ...", value: null };
    }
    ProjectQuotesComponent.prototype.ngOnInit = function () { };
    //public actionWindowToggle(): void {
    //    this.showActionWindow = !this.showActionWindow;
    //}
    ProjectQuotesComponent.prototype.setQuoteActive = function (quote) {
        var _this = this;
        var self = this;
        var data = {
            "ProjectId ": this.project.projectId,
            "QuoteId": quote.quoteId
        };
        this.blockUI.start('Loading...');
        this.quoteSvc.setQuoteActive(data).then(function (resp) {
            if (resp.isok) {
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                self.reloadData();
            }
            else {
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            _this.blockUI.stop();
            console.log(error);
        });
    };
    ProjectQuotesComponent.prototype.reloadData = function () {
        this.reloadDataEvent.emit();
    };
    ProjectQuotesComponent.prototype.duplicateQuote = function (projectId, quoteId) {
        var _this = this;
        var self = this;
        this.blockUI.start('Loading...');
        this.quoteSvc.duplicateQuote(projectId, quoteId)
            .subscribe(function (resp) {
            if (resp.isok) {
                self.reloadData();
            }
            else {
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            _this.blockUI.stop();
            console.log("Error: ", error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProjectQuotesComponent.prototype, "blockUI", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectQuotesComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectQuotesComponent.prototype, "projectQuotes", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectQuotesComponent.prototype, "user", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ProjectQuotesComponent.prototype, "reloadDataEvent", void 0);
    ProjectQuotesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project-quotes',
            styles: ['/deep/ .k-grid-content .k-button {margin: 0px} /deep/ .k-list .k-item:hover{background-color: white}'],
            template: __webpack_require__("../../../../../src/app/projects/components/project-quotes/projectQuotes.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_services_common_toastr_service__["a" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_7__quotes_services_quote_service__["a" /* QuoteService */],
            __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]])
    ], ProjectQuotesComponent);
    return ProjectQuotesComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<project-tabs [user]=\"user\"></project-tabs>\r\n<div id=\"main-container\" class='container-fluid'>\r\n    <div class=\"main-content\">\r\n        <ul class=\"breadcrumbs\">\r\n            <li><a href=\"/v2/#/project/project-list\">Projects</a></li>\r\n            <li>{{project.name}}</li>\r\n        </ul>\r\n        <h4>{{project.name}}</h4>\r\n        <div class=\"row\">\r\n            <div class=\"pull-right\">\r\n                <a href=\"/Projectdashboard/ProjectExport?projectId={{project.projectId}}\" class=\"btn btn-default\"><img src=\"/Images/package-quote-icon.png\" /> EXPORT</a>\r\n                <a *ngIf=\"canEditProject && !project.deleted && !project.isTransferred\" (click)=\"deleteProject()\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-trash\"></span> DELETE PROJECT</a>\r\n                <a *ngIf=\"canEditProject && project.deleted && !project.isTransferred\" (click)=\"undeleteProject()\" class=\"btn btn-default\">UNDELETE PROJECT</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <ul class=\"nav nav-tabs\">\r\n        <li id=\"projectOverviewTabHeader\" class=\"active tabs-header\"><a id=\"projectOverviewTabLink\" data-toggle=\"tab\" href=\"#projectOverview\">OVERVIEW</a></li>\r\n        <li id=\"projectQuotesTabHeader\" class=\"tabs-header\"><a id=\"projectQuotesTabLink\" data-toggle=\"tab\" href=\"#projectQuotes\">QUOTES</a></li>\r\n    </ul>\r\n\r\n    <div class=\"tab-content\" style=\"margin:10px;\">\r\n        <div id=\"projectOverview\" class=\"tab-pane fade in active\">\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"row no-gutters sub-heading\">\r\n                    <h4 class=\"col pull-left\">ACTIVE QUOTE</h4>\r\n                    <!--<div class=\"col pull-right\"><a href=\"/ProjectDashboard/QuoteEdit/{{quote.projectId}}\" class=\"btn btn-primary pull-right\" ><span class=\"k-icon k-i-file-add\"></span> CREATE REVISION</a></div>-->\r\n                    <div *ngIf=\"canEditProject && !project.deleted && !project.isTransferred\" class=\"col pull-right\">\r\n                        <a href=\"/v2/#/quote/quoteCreate/{{project.projectId}}\" class=\"btn btn-primary pull-right\"><span class=\"k-icon k-i-file-add\"></span> CREATE REVISION</a></div>\r\n                </div>\r\n                <active-quote-info [user]=\"user\" [quote]=\"project.activeQuoteSummary\" (showQuoteOverViewEvent)=\"showQuoteOverview()\"></active-quote-info>\r\n            </div>\r\n            <div class=\"row no-gutters sub-heading\">\r\n                <h4 class=\"pull-left\">PROJECT DETAILS</h4>\r\n                <div *ngIf=\"canEditProject && !project.deleted && !project.isTransferred\" class=\"pull-right\">\r\n                    <div class=\"pull-right\">\r\n                        <a href=\"/v2/#/project/projectEdit/{{project.projectId}}\" class=\"btn btn-default\"><span class=\"glyphicon glyphicon-pencil\"></span> EDIT PROJECT DETAILS</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row no-gutters\">\r\n                <div *ngIf=\"project.isStrategicProject\" class=\"visible-xs col-xs-12\">\r\n                    <p><span class=\"glyphicon glyphicon-ok\"></span> Strategic Project</p>\r\n                </div>\r\n                <div class=\"hidden-xs col-md-2\"></div>\r\n                <div class=\"col-md-4 col-xs-12\">\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Name: </div> <div class=\"col-md-6 col-xs-6\">{{project.name}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Reference: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectId}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Registration Date: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectDate  | date: 'shortDate'}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Bid Date: </div> <div class=\"col-md-6 col-xs-6\">{{project.bidDate | date: 'shortDate'}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Estimated Close: </div> <div class=\"col-md-6 col-xs-6\">{{project.estimatedClose | date: 'shortDate'}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Estimated Delivery: </div> <div class=\"col-md-6 col-xs-6\">{{project.estimatedDelivery | date: 'shortDate'}}</div>\r\n                </div>\r\n                <div class=\"col-md-4 col-xs-12\">\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Construction Type: </div> <div class=\"col-md-6 col-xs-6\">{{project.constructionTypeDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Status: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectStatusDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Type: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectTypeDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Open Status: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectOpenStatusDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Vertical Market: </div> <div class=\"col-md-6 col-xs-6\">{{project.verticalMarketDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Project Status Notes: </div> <div class=\"col-md-6 col-xs-6\">{{project.description}}</div>\r\n                </div>\r\n                <div class=\"hidden-xs col-md-2\">\r\n                    <!--<input *ngIf=\"project.isStrategicProject\" type=\"checkbox\" disabled [(ngModel)]=\"project.isStrategicProject\" name=\"isStrategicProject\" /> <label> Strategic Project </label><br />-->\r\n                    <p *ngIf=\"project.isStrategicProject\"><span class=\"glyphicon glyphicon-ok\"></span> Strategic Project</p>\r\n                    <div *ngIf=\"project.isStrategicProject\">\r\n                        <ul *ngFor=\"let item of project.strategicTypes.items\">\r\n                            <li *ngIf=\"item.selected\">\r\n                                {{item.text}}\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <h4>PROJECT ADDRESSES</h4>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"col-md-3 col-xs-12\">\r\n                    <div class=\"col-md-12 as-lnk\">Engineering Details:</div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>{{project.engineerName}}</div>\r\n                        <div>{{project.engineerBusinessName}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>\r\n                            {{project.engineerAddress.addressLine1}} &nbsp; {{project.engineerAddress.addressLine2}}\r\n                        </div>\r\n                        <div *ngIf=\"project.engineerAddress.location\">\r\n                            {{project.engineerAddress.location}}, {{project.engineerAddress.stateName}} {{project.engineerAddress.postalCode}}, {{project.engineerAddress.countryCode}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-xs-12\">\r\n                    <div class=\"col-md-12 as-lnk\">Dealer/Contractor Details:</div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>{{project.dealerContractorName}}</div>\r\n                        <div>{{project.customerName}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>\r\n                            {{project.customerAddress.addressLine1}} &nbsp; {{project.customerAddress.addressLine2}}\r\n                        </div>\r\n                        <div *ngIf=\"project.customerAddress.location\">\r\n                            {{project.customerAddress.location}}, {{project.customerAddress.stateName}} {{project.customerAddress.postalCode}}, {{project.customerAddress.countryCode}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-xs-12\">\r\n                    <div class=\"col-md-12 as-lnk\">Seller Address:</div>\r\n                    <div class=\"col-md-12\">\r\n\r\n                        <div>{{project.sellerName}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>\r\n                            {{project.sellerAddress.addressLine1}} &nbsp; {{project.sellerAddress.addressLine2}}\r\n                        </div>\r\n                        <div *ngIf=\"project.sellerAddress.location\">\r\n                            {{project.sellerAddress.location}}, {{project.sellerAddress.stateName}} {{project.sellerAddress.postalCode}}, {{project.sellerAddress.countryCode}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-md-3 col-xs-12\">\r\n                    <div class=\"col-md-12 as-lnk\">Shipping Address/Project Location:</div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>{{project.shipToName}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                        <div>\r\n                            {{project.shipToAddress.addressLine1}} &nbsp; {{project.shipToAddress.addressLine2}}\r\n                        </div>\r\n                        <div *ngIf=\"project.shipToAddress.location\">\r\n                            {{project.shipToAddress.location}}, {{project.shipToAddress.stateName}} {{project.shipToAddress.postalCode}}, {{project.shipToAddress.countryCode}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n            <h4>ORDER DETAILS</h4>\r\n            <div class=\"row no-gutters\">\r\n                <div class=\"hidden-xs col-md-2\"></div>\r\n                <div class=\"col-md-4 col-xs-12\">\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Pipeline Status: </div> <div class=\"col-md-6 col-xs-6\">{{project.projectLeadStatusTypeDescription}}</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Order Number: </div> <div class=\"col-md-6 col-xs-6\">{{project?.eRPFirstOrderNumber}}&nbsp;</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Order Date: </div> <div class=\"col-md-6 col-xs-6\">{{project?.eRPFirstOrderDate}}&nbsp;</div>\r\n                </div>\r\n                <div class=\"col-md-4 col-xs-12\">\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Order PO Number: </div> <div class=\"col-md-6 col-xs-6\">{{project?.eRPFirstPONumber}}&nbsp;</div>\r\n                    <div class=\"col-md-6 col-xs-6 as-lnk\">Order Comments: </div> <div class=\"col-md-6 col-xs-6\">{{project?.eRPFirstOrderComment}}&nbsp;</div>\r\n                </div>\r\n                <div class=\"hidden-xs col-md-2\"></div>\r\n            </div>\r\n            <div *ngIf=\"canViewPipelineData || canEditPipelineData\">\r\n                <h4>PROJECT UPDATE NOTES</h4>\r\n                <project-pipeline-notes-update [user]=\"user\" [project]=\"project\" [canViewPipelineData]=\"canViewPipelineData\" [canEditPipelineData]=\"canEditPipelineData\"></project-pipeline-notes-update>\r\n            </div>\r\n\r\n        </div>\r\n        <div id=\"projectQuotes\" class=\"tab-pane fade\">\r\n\r\n            <div class=\"row no-gutters sub-heading\">\r\n                <h4 class=\"col pull-left\">ACTIVE QUOTE</h4>\r\n                <div *ngIf=\"canEditProject && !project.deleted && !project.isTransferred\" class=\"col pull-right\">\r\n\t\t\t\t\t<a href=\"/v2/#/quote/quoteCreate/{{project.projectId}}\" class=\"btn btn-primary pull-right\">\r\n\t\t\t\t\t\t<span class=\"k-icon k-i-file-add\"></span> CREATE REVISION</a></div>\r\n            </div>\r\n\r\n            <active-quote-info [user]=\"user\" [quote]=\"project.activeQuoteSummary\" (showQuoteOverViewEvent)=\"showQuoteOverview()\"></active-quote-info>\r\n\r\n            <div class=\"row no-gutters sub-heading\">\r\n                <project-quotes [user]=\"user\" [project]=\"project\" [projectQuotes]=\"projectQuotes\" (reloadDataEvent)=\"reloadData()\"></project-quotes>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/projects/components/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(router, route, toastrSvc, userSvc, systemAccessEnum, enums, http, projectSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.canViewPipelineData = false;
        this.canEditPipelineData = false;
        this.canEditProject = false;
        //public newProjectPipelineNote: any;
        //public projectPipelineNoteOptions: any;
        //public selectedPipelineNoteTypeId: any;// temp
        //public projectPipelineNotes: any;
        this.defaultItem = { text: "Select ...", value: null };
        this.activeTab = this.route.snapshot.url[0].path;
        if (this.route.snapshot.data['currentUser'] == null) {
            this.router.navigateByUrl("/account/login");
        }
        else {
            this.user = this.route.snapshot.data['currentUser'].model;
        }
        this.project = this.route.snapshot.data['projectModel'].model;
        this.projectQuotes = this.route.snapshot.data['projectQuotesModel'].model;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        if (this.activeTab == "projectQuotes") {
            __WEBPACK_IMPORTED_MODULE_7_jquery__("#projectQuotesTabLink").click();
            //jQuery("#projectQuotesTabHeader").addClass("active");
            //jQuery("#projectOverviewTabHeader").removeClass("active");
        }
        this.canViewPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewPipelineData);
        this.canEditPipelineData = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditPipelineData);
        this.canEditProject = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditProject);
    };
    ProjectComponent.prototype.onTabSelect = function (event) { };
    ProjectComponent.prototype.reloadData = function () {
        this.reloadProject();
        this.reloadProjectQuotes();
    };
    ProjectComponent.prototype.reloadProject = function () {
        var self = this;
        this.projectSvc.getProject(this.project.projectId)
            .subscribe(function (resp) {
            if (resp.isok) {
                self.project = resp.model;
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectComponent.prototype.reloadProjectQuotes = function () {
        var self = this;
        this.projectSvc.getProjectQuotes(this.project.projectId)
            .subscribe(function (resp) {
            if (resp.isok) {
                self.projectQuotes = resp.model;
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (err) { return console.log("Error: ", err); });
    };
    ProjectComponent.prototype.showQuoteOverview = function () {
        this.router.navigateByUrl("/quote/quote/" + this.project.activeQuoteSummary.quoteId + "/existingRecord");
    };
    ProjectComponent.prototype.deleteProject = function () {
        var _this = this;
        this.blockUI.start('Loading...');
        this.projectSvc.deleteProject(this.project.projectId)
            .then(function (resp) {
            if (resp.isok) {
                _this.toastrSvc.displayResponseMessages(resp);
                _this.project.deleted = true;
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProjectComponent.prototype.undeleteProject = function () {
        var _this = this;
        this.projectSvc.undeleteProject(this.project)
            .then(function (resp) {
            if (resp.isok) {
                _this.toastrSvc.displayResponseMessages(resp);
                _this.project.deleted = false;
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "blockUI", void 0);
    ProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'project',
            template: __webpack_require__("../../../../../src/app/projects/components/project/project.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__shared_index__["i" /* ToastrService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_index__["k" /* UserService */], __WEBPACK_IMPORTED_MODULE_5__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_5__shared_index__["e" /* Enums */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__services_project_service__["a" /* ProjectService */]])
    ], ProjectComponent);
    return ProjectComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/components/transfer-project-popup/transferProjectPopup.component.html":
/***/ (function(module, exports) {

module.exports = "<form role=\"form\">\r\n    <div class=\"form-group\">\r\n        <label>Email:</label>\r\n        <input [(ngModel)]=\"transferToEmail\" name=\"transferToEmail\"/>\r\n        <div>You will not be able to edit the project once it is transferred to its new owner. Are you sure you want to transfer this project ?</div>\r\n        <!--<div>projectId: {{selectedProjectId}}</div>-->\r\n    </div>\r\n    <div class=\"row action text-center\">\r\n        <button class=\"btn btn-primary\" (click)=\"transferProject()\">Ok</button>\r\n        <button class=\"btn btn-default\" (click)=\"closePopup()\">Cancel</button>\r\n    </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/projects/components/transfer-project-popup/transferProjectPopup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferProjectPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TransferProjectPopupComponent = /** @class */ (function () {
    function TransferProjectPopupComponent(toastrSvc, http, projectSvc) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.projectSvc = projectSvc;
        this.closeWindow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.transferToEmail = "";
    }
    TransferProjectPopupComponent.prototype.ngOnInit = function () {
        //this.projectSvc
    };
    TransferProjectPopupComponent.prototype.closePopup = function () {
        this.closeWindow.emit();
    };
    TransferProjectPopupComponent.prototype.transferProject = function () {
        var data = {
            "projectId": this.selectedProjectId,
            "email": this.transferToEmail
        };
        this.projectSvc.transferProject(data)
            .then(this.transferProjectCallback.bind(this));
        //reset email
        this.transferToEmail = "";
    };
    TransferProjectPopupComponent.prototype.transferProjectCallback = function (resp) {
        if (resp.IsOK) {
            for (var _i = 0, _a = resp.Messages.Items; _i < _a.length; _i++) {
                var message = _a[_i];
                if (message.Type == 40) {
                    this.toastrSvc.Success(message.Text);
                }
            }
            //reload projects grid
            var projectEditAllGridDtaSrc = __WEBPACK_IMPORTED_MODULE_5_jquery__('#project-grid').data('kendoGrid').dataSource;
            projectEditAllGridDtaSrc.read();
        }
        else {
            for (var _b = 0, _c = resp.Messages.Items; _b < _c.length; _b++) {
                var message = _c[_b];
                if (message.Type == 10) {
                    this.toastrSvc.Error(message.Text);
                }
            }
        }
        this.closePopup();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], TransferProjectPopupComponent.prototype, "selectedProjectId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], TransferProjectPopupComponent.prototype, "closeWindow", void 0);
    TransferProjectPopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'transferProject-popup',
            template: __webpack_require__("../../../../../src/app/projects/components/transfer-project-popup/transferProjectPopup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__services_project_service__["a" /* ProjectService */]])
    ], TransferProjectPopupComponent);
    return TransferProjectPopupComponent;
}());

;


/***/ }),

/***/ "../../../../../src/app/projects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_delete_projects_popup_deleteProjectsPopup_component__ = __webpack_require__("../../../../../src/app/projects/components/delete-projects-popup/deleteProjectsPopup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_delete_projects_popup_deleteProjectsPopup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_export_projects_popup_exportProjectsPopup_component__ = __webpack_require__("../../../../../src/app/projects/components/export-projects-popup/exportProjectsPopup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__components_export_projects_popup_exportProjectsPopup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_project_project_component__ = __webpack_require__("../../../../../src/app/projects/components/project/project.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__components_project_project_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_project_edit_projectEdit_component__ = __webpack_require__("../../../../../src/app/projects/components/project-edit/projectEdit.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__components_project_edit_projectEdit_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_project_grid_projectGrid_component__ = __webpack_require__("../../../../../src/app/projects/components/project-grid/projectGrid.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__components_project_grid_projectGrid_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_project_internal_projectInternal_component__ = __webpack_require__("../../../../../src/app/projects/components/project-internal/projectInternal.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__components_project_internal_projectInternal_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_project_pipeline_notes_update_project_pipeline_notes_update_component__ = __webpack_require__("../../../../../src/app/projects/components/project-pipeline-notes-update/project-pipeline-notes-update.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__components_project_pipeline_notes_update_project_pipeline_notes_update_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_project_quotes_projectQuotes_component__ = __webpack_require__("../../../../../src/app/projects/components/project-quotes/projectQuotes.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__components_project_quotes_projectQuotes_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_project_list_project_list_component__ = __webpack_require__("../../../../../src/app/projects/components/project-list/project-list.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__components_project_list_project_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_transfer_project_popup_transferProjectPopup_component__ = __webpack_require__("../../../../../src/app/projects/components/transfer-project-popup/transferProjectPopup.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_9__components_transfer_project_popup_transferProjectPopup_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_project_resolver_service__ = __webpack_require__("../../../../../src/app/projects/services/project-resolver.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__services_project_resolver_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_10__services_project_resolver_service__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__services_project_service__["a"]; });














/***/ }),

/***/ "../../../../../src/app/projects/projects-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/app/projects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__ = __webpack_require__("../../../../../src/app/projects/services/project-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var projectRoutes = [
    {
        path: 'projectCreate',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["d" /* ProjectEditComponent */],
        resolve: {
            projectModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["b" /* ProjectResolver */],
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    },
    {
        path: 'projectEdit/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["d" /* ProjectEditComponent */],
        resolve: {
            projectModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["b" /* ProjectResolver */],
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    },
    {
        path: 'project/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["c" /* ProjectComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */],
            projectModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["b" /* ProjectResolver */],
            projectQuotesModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["a" /* ProjectQuotesResolver */]
        }
    },
    {
        path: 'projectQuotes/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["c" /* ProjectComponent */],
        resolve: {
            projectModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["b" /* ProjectResolver */],
            projectQuotesModel: __WEBPACK_IMPORTED_MODULE_4__services_project_resolver_service__["a" /* ProjectQuotesResolver */],
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    },
    {
        path: 'projectList',
        component: __WEBPACK_IMPORTED_MODULE_2__index__["g" /* ProjectListComponent */],
        resolve: {
            currentUser: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */]
        }
    }
];
var ProjectsRoutingModule = /** @class */ (function () {
    function ProjectsRoutingModule() {
    }
    ProjectsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */].forChild(projectRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["i" /* RouterModule */]],
        })
    ], ProjectsRoutingModule);
    return ProjectsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/projects/projects.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROJECTS_COMPONENTS", function() { return PROJECTS_COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address_module__ = __webpack_require__("../../../../../src/app/address/address.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quotes_quotes_module__ = __webpack_require__("../../../../../src/app/quotes/quotes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__ = __webpack_require__("../../../../@progress/kendo-angular-buttons/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__ = __webpack_require__("../../../../@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__ = __webpack_require__("../../../../@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__projects_routing_module__ = __webpack_require__("../../../../../src/app/projects/projects-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__index__ = __webpack_require__("../../../../../src/app/projects/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var PROJECTS_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_10__index__["a" /* DeleteProjectsPopupComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["b" /* ExportProjectsPopupComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["c" /* ProjectComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["d" /* ProjectEditComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["e" /* ProjectGridComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["f" /* ProjectInternalComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["h" /* ProjectPipelineNotesUpdateComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["i" /* ProjectQuotesComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["g" /* ProjectListComponent */],
    __WEBPACK_IMPORTED_MODULE_10__index__["m" /* TransferProjectPopupComponent */]
];
var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__address_address_module__["a" /* AddressModule */],
                __WEBPACK_IMPORTED_MODULE_3__quotes_quotes_module__["QuotesModule"],
                __WEBPACK_IMPORTED_MODULE_5__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_6__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
                __WEBPACK_IMPORTED_MODULE_7__progress_kendo_angular_dropdowns__["d" /* DropDownsModule */],
                __WEBPACK_IMPORTED_MODULE_8__progress_kendo_angular_grid__["c" /* GridModule */],
                __WEBPACK_IMPORTED_MODULE_4__progress_kendo_angular_buttons__["b" /* ButtonsModule */],
                __WEBPACK_IMPORTED_MODULE_9__projects_routing_module__["a" /* ProjectsRoutingModule */]
            ],
            exports: PROJECTS_COMPONENTS,
            declarations: PROJECTS_COMPONENTS,
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__index__["k" /* ProjectResolver */],
                __WEBPACK_IMPORTED_MODULE_10__index__["j" /* ProjectQuotesResolver */],
                __WEBPACK_IMPORTED_MODULE_10__index__["l" /* ProjectService */]
            ]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "../../../../../src/app/projects/services/project-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProjectResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectQuotesResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_services_project_service__ = __webpack_require__("../../../../../src/app/projects/services/project.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectResolver = /** @class */ (function () {
    function ProjectResolver(projectSvc) {
        this.projectSvc = projectSvc;
    }
    ProjectResolver.prototype.resolve = function (route, state) {
        var projectId = route.params['id'];
        return this.projectSvc.getProject(projectId)
            .map(function (resp) {
            if (resp) {
                return resp;
            }
            else {
                return null;
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    ProjectResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__projects_services_project_service__["a" /* ProjectService */]])
    ], ProjectResolver);
    return ProjectResolver;
}());

var ProjectQuotesResolver = /** @class */ (function () {
    function ProjectQuotesResolver(projectSvc) {
        this.projectSvc = projectSvc;
    }
    ProjectQuotesResolver.prototype.resolve = function (route, state) {
        var projectId = route.params['id'];
        return this.projectSvc.getProjectQuotes(projectId)
            .map(function (resp) {
            if (resp) {
                return resp;
            }
            else {
                return null;
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(null);
        });
    };
    ProjectQuotesResolver = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__projects_services_project_service__["a" /* ProjectService */]])
    ], ProjectQuotesResolver);
    return ProjectQuotesResolver;
}());



/***/ })

});
//# sourceMappingURL=projects.module.chunk.js.map