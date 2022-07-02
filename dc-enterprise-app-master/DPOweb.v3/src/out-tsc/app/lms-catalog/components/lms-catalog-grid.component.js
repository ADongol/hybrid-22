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
var router_1 = require("@angular/router");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var lms_catalog_service_1 = require("../services/lms-catalog.service");
var address_service_1 = require("../../address/services/address.service");
//import { OrderService } from '../services/order.service';
//import { QuoteService } from '../../quote/services/quote.service';
//import { SearchOrders } from '../../shared/models/searchOrders';
var LmsCatalogGridComponent = /** @class */ (function () {
    /**
     * Dependency Injection
     **/
    function LmsCatalogGridComponent(ngZone, toastrSvc, userSvc, addressSvc, 
    //private loadingIconSvc: LoadingIconService,
    lmsCatalogService, // TODO:  Rename service
    router, route) {
        this.ngZone = ngZone;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.addressSvc = addressSvc;
        this.lmsCatalogService = lmsCatalogService;
        this.router = router;
        this.route = route;
        this.courseListGridData = [];
        this.pageSize = 20;
        this.pageNumber = 1;
        this.skip = 0;
        this.buttonCount = 20;
        this.info = true;
        this.type = 'numeric';
        this.pageSizes = true;
        this.previousNext = true;
        this.defaultSort = [{
                field: 'startDate',
                dir: 'asc'
            }];
        this.sourceUserList = [];
        this.stateProvinces = [];
        this.exportToExcelOptions = ["Orders", "Orders with products"];
        this.defaultExportToExcelOption = "Orders";
        // Search Parameters
        // public searchStartProvince: any;
        // public searchCity: String;
        this.searchLocation = null;
        this.searchStartDate = null;
        this.searchEndDate = null;
        this.exportToExcelDialogOpen = false;
        this.exportToExcelTemplate = false;
        this.searchParams = null;
        this.inputParams = false;
        this.rowCallback = function (context) {
        };
        // this.user = this.route.snapshot.data['currentUser'].model;
    }
    /**
     * angular life cycle hooks
     */
    LmsCatalogGridComponent.prototype.ngOnInit = function () {
        this.setDefaults();
        this.loadCourses();
    };
    LmsCatalogGridComponent.prototype.setDefaults = function () {
        this.courseListGridData = [];
        var startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        this.searchStartDate = startDate;
        var endDate = this.addDays(new Date(), 90);
        endDate.setHours(24, 0, 0, 0);
        this.searchEndDate = endDate;
        this.searchLocation = null;
    };
    LmsCatalogGridComponent.prototype.onSearchClick = function () {
        this.loadCourses();
    };
    LmsCatalogGridComponent.prototype.handleStartDateChange = function (value) {
        this.searchStartDate = value;
        // if (this.fromDateNode.value > this.toDateNode.value) {
        //     this.openDateSelectionErrorDialog();
        // }
        // else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
        //     this.openDateRangeErrorDialog();
        // }
        // else {
        //     this.FilterWithAllSearchParams();
        // }
    };
    LmsCatalogGridComponent.prototype.handleEndDateChange = function (value) {
        this.searchEndDate = value;
        // if (this.fromDateNode.value > this.toDateNode.value) {
        //     this.openDateSelectionErrorDialog();
        // }
        // else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
        //     this.openDateRangeErrorDialog();
        // }
        // else {
        //     this.FilterWithAllSearchParams();
        // }
    };
    LmsCatalogGridComponent.prototype.loadCourses = function () {
        this.searchParams = {
            sessionStartDate: this.searchStartDate,
            sessionEndDate: this.searchEndDate,
            location: this.searchLocation
        };
        this.getCoursesBasedOnSearchParams(this.searchParams, this.inputParams = true);
    };
    LmsCatalogGridComponent.prototype.getCoursesBasedOnSearchParams = function (searchParams, inputParams) {
        var _this = this;
        this.blockUI.start('Loading...');
        return this.lmsCatalogService.getDaikinCityLmsCourseSessions(searchParams)
            .subscribe(function (data) {
            if (data && data.model && data.model.items) {
                _this.courseListGridData = _this.buildCourseDataSet(data.model.items);
                if (data.model != null) {
                    _this.pageNumber = data.model.pageNumber;
                }
                else {
                    _this.pageNumber = 1;
                }
            }
            _this.blockUI.stop();
        });
    };
    LmsCatalogGridComponent.prototype.buildCourseDataSet = function (data) {
        if (!data) {
            return;
        }
        // data.forEach(element => {
        //     if (element.startDate) {
        //         element.startDate = new Date(element.startDate);
        //     }
        //     if (element.endDate) {
        //         element.endDate = new Date(element.endDate);
        //     }
        // });
        // data = data.filter((f) => {
        //     return f.startDate >= this.searchStartDate
        //         && f.endDate <= this.searchEndDate;
        // });
        return data;
    };
    LmsCatalogGridComponent.prototype.closeExportToExcelDialog = function () {
        this.exportToExcelDialogOpen = false;
    };
    LmsCatalogGridComponent.prototype.onExportToExcelClick = function () {
        this.openExportToExcelDialog();
    };
    LmsCatalogGridComponent.prototype.exportToExcel = function (grid) {
        //this.loadingIconSvc.Start(jQuery("#orderListGrid")); 
        //if (this.exportToExcelNode.value == "Orders") {
        //    grid.data = this.courseListGridData;
        //    grid.saveAsExcel();
        //}
        //else {
        //    this.excelexport.save();
        //}
        this.exportToExcelDialogOpen = false;
        //this.loadingIconSvc.Stop(jQuery("#orderListGrid")); 
    };
    LmsCatalogGridComponent.prototype.onDataStateChange = function () {
        this.fitColumns();
    };
    LmsCatalogGridComponent.prototype.fitColumns = function () {
        //   this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        //     this.grid.autoFitColumns();
        //   });
    };
    LmsCatalogGridComponent.prototype.onResetButtonClick = function () {
        this.setDefaults();
    };
    LmsCatalogGridComponent.prototype.addDays = function (date, days) {
        var dateInMs = date.setDate(date.getDate() + days);
        return new Date(dateInMs);
    };
    LmsCatalogGridComponent.prototype.openDateSelectionErrorDialog = function () {
        this.toastrSvc.Warning("'From Date' can not be less than 'To Date'. Please, select another date range.");
        this.onResetButtonClick();
    };
    LmsCatalogGridComponent.prototype.openDateRangeErrorDialog = function () {
        this.toastrSvc.Warning("'Your selection returned large set of data. Please shorten your date range selection.");
        this.onResetButtonClick();
    };
    LmsCatalogGridComponent.prototype.openExportToExcelDialog = function () {
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = "Export To Excel";
        this.exportToExcelDialogMessage = "Please select an export type:";
    };
    __decorate([
        core_1.ViewChild("mainSearchBox"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "mainSearchBox", void 0);
    __decorate([
        core_1.ViewChild("userListNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "userListNode", void 0);
    __decorate([
        core_1.ViewChild("orderStatusNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "orderStatusNode", void 0);
    __decorate([
        core_1.ViewChild("businessNameNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "businessNameNode", void 0);
    __decorate([
        core_1.ViewChild("fromDateNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "fromDateNode", void 0);
    __decorate([
        core_1.ViewChild("toDateNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "toDateNode", void 0);
    __decorate([
        core_1.ViewChild("exportToExcelNode"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "exportToExcelNode", void 0);
    __decorate([
        core_1.ViewChild("excelexport"),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "excelexport", void 0);
    __decorate([
        core_1.ViewChild(kendo_angular_grid_1.GridComponent),
        __metadata("design:type", kendo_angular_grid_1.GridComponent)
    ], LmsCatalogGridComponent.prototype, "grid", void 0);
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], LmsCatalogGridComponent.prototype, "blockUI", void 0);
    LmsCatalogGridComponent = __decorate([
        core_1.Component({
            selector: 'lms-catalog-grid',
            templateUrl: './lms-catalog-grid.component.html',
            styleUrls: ["./lms-catalog-grid.component.css"]
        }),
        __metadata("design:paramtypes", [core_1.NgZone,
            toastr_service_1.ToastrService,
            user_service_1.UserService,
            address_service_1.AddressService,
            lms_catalog_service_1.LmsCatalogService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], LmsCatalogGridComponent);
    return LmsCatalogGridComponent;
}());
exports.LmsCatalogGridComponent = LmsCatalogGridComponent;
//# sourceMappingURL=lms-catalog-grid.component.js.map