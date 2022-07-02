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
var http_1 = require("@angular/http");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_file_saver_1 = require("@progress/kendo-file-saver");
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var order_service_1 = require("../services/order.service");
var quote_service_1 = require("../../quote/services/quote.service");
var searchOrders_1 = require("../../shared/models/searchOrders");
var order_constants_1 = require("../order-constants");
var ONE_YEAR_SPAN = '364';
var FIVE_YEAR_SPAN = '1825';
var OrdersGridComponent = /** @class */ (function () {
    /**********************
     * Dependency Injection
     **********************/
    function OrdersGridComponent(toastrSvc, userSvc, orderSvc, quoteSvc, 
    //private loadingIconSvc: LoadingIconService,
    router, route, http) {
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.orderSvc = orderSvc;
        this.quoteSvc = quoteSvc;
        this.router = router;
        this.route = route;
        this.http = http;
        this.orderListGridData = [];
        this.pageSize = 20;
        this.skip = 0;
        this.buttonCount = 20;
        this.info = true;
        this.type = 'numeric';
        this.pageSizes = true;
        this.previousNext = true;
        this.default365DaysOrderList = [];
        this.fiveYearOrderItemList = [];
        this.orderListWithProducts = [];
        this.productListItems = [];
        this.sourceUserList = [];
        this.userList = [];
        this.sourceBusinessNameList = [];
        this.businessNameList = [];
        this.exportToExcelOptions = ["Orders", "Orders with products"];
        this.defaultExportToExcelOption = "Orders";
        this.orderStatusTypeList = [];
        this.ddlPlaceHolder = { text: 'All', value: null };
        this.defaultOrderStatus = 0;
        this.exportToExcelDialogOpen = false;
        this.exportToExcelTemplate = false;
        this.searchParams = new searchOrders_1.SearchOrders();
        this.inputParams = false;
        this.rowCallback = function (context) {
            switch (context.dataItem.orderStatusDescription) {
                case 'Submitted':
                    return { blue: true };
                case 'Picked':
                    return { purple: true };
                case 'Awaiting CSR':
                    return { yellow: true };
                case 'Accepted':
                    return { lightgreen: true };
                case 'Shipped':
                    return { green: true };
                case 'Canceled':
                    return { grey: true };
                case 'In Process':
                    return { pink: true };
                default:
                    return {};
            }
        };
        this.user = this.route.snapshot.data['currentUser'].model;
    }
    ;
    /**************************
     * angular life cycle hooks
     *************************/
    OrdersGridComponent.prototype.ngOnInit = function () {
        //set the default 365 date range
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt(ONE_YEAR_SPAN)); //set initial list to last 365 days
        this.startDateFiveYear = this.addDays(new Date(), parseInt(FIVE_YEAR_SPAN));
        this.getOrderItemsForLast365Days(); // Fetch the item list with the initial state
        this.getUserList(); // user list for User autocomplete box
        this.getOrderStatusTypeList();
        this.getBusinessNameList();
        this.defaultOrderStatus = 0; //set dropdown list to 'All'
    };
    OrdersGridComponent.prototype.ngAfterViewInit = function () {
        // Expand the first row initially
        //this.grid.expandRow(0);
        jQuery(".k-grid .k-filter-row").hide();
    };
    /****************
     * event handlers
     ****************/
    OrdersGridComponent.prototype.onMainSearchBoxClick = function (eventValue) {
        this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleUserListChange = function (eventValue) {
        this.userList = this.sourceUserList
            .filter(function (s) { return s.toLowerCase()
            .indexOf(eventValue.toLowerCase()) !== -1; });
    };
    OrdersGridComponent.prototype.handleUserSelectionChange = function (eventValue) {
        if (eventValue != "")
            this.orderListGridData = this.FilterUserSelectionChange(eventValue);
        else
            this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleBusinessNameChange = function (eventValue) {
        this.businessNameList = this.sourceBusinessNameList
            .filter(function (x) { return x.toLowerCase()
            .indexOf(eventValue.toLowerCase()) !== -1; });
    };
    OrdersGridComponent.prototype.handleBusinessNameSelectionChange = function (eventValue) {
        if (eventValue != "")
            this.orderListGridData = this.FilterBusinessNameSelectionChange(eventValue);
        else
            this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleOrderStatusListChange = function (eventValue) {
        var dropdownSelectionText = this.orderStatusTypeList.find(function (obj) {
            return obj.value === eventValue;
        }).text;
        this.FilterWithAllSearchParams();
    };
    OrdersGridComponent.prototype.handleStartDateChange = function (event) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    };
    OrdersGridComponent.prototype.handleEndDateChange = function (event) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    };
    OrdersGridComponent.prototype.FilterUserSelectionChange = function (userNameVal) {
        return this.orderListGridData.filter(function (x) { return x.projectOwnerName.trim() == userNameVal.trim(); });
    };
    OrdersGridComponent.prototype.FilterBusinessNameSelectionChange = function (businessNameVal) {
        return this.orderListGridData.filter(function (x) { return x.businessName.trim() == businessNameVal.trim(); });
    };
    //on date time picker change, also do further filters after server trip
    OrdersGridComponent.prototype.FilterWithAllSearchParams = function () {
        var _this = this;
        if (this.fromDateNode.value.toLocaleString() == this.startDateValue.toLocaleString() &&
            this.toDateNode.value.toLocaleString() == this.endDateValue.toLocaleString()) {
            this.orderListGridData = this.default365DaysOrderList;
        }
        else if (this.fromDateNode.value > this.startDateFiveYear) {
            this.orderListGridData = this.fiveYearOrderItemList
                .filter(function (x) {
                var convertedSubmitDate = new Date(Date.parse(x.submitDate));
                return convertedSubmitDate >= _this.fromDateNode.value
                    && convertedSubmitDate <= _this.toDateNode.value;
            });
        }
        else {
            this.searchParams = {
                startDate: this.fromDateNode.value.toLocaleDateString(),
                endDate: this.toDateNode.value.toLocaleDateString()
            };
            this.orderListGridData = this.getOrdersBasedOnSearchParams(this.searchParams, this.inputParams = true);
        }
        this.FilterAgainWithRemainingInputParams(this.orderListGridData); //filter more with other possible search params;
    };
    /*****************************
     * api calls through services
     *****************************/
    OrdersGridComponent.prototype.getOrderItemsForLast365Days = function () {
        var _this = this;
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));
        this.blockUI.start('Loading...');
        return this.orderSvc.getLast365DaysOrderItemList()
            .subscribe(function (data) {
            _this.fiveYearOrderItemList = data.model;
            //var initialDate365Days = this.getFormattedDate(this.startDateValue, "inCSharpFormat");
            _this.default365DaysOrderList = _this.fiveYearOrderItemList
                .filter(function (obj) {
                var convertedSubmitDate = new Date(Date.parse(obj.submitDate));
                return convertedSubmitDate >= _this.startDateValue;
            });
            _this.orderListGridData = _this.default365DaysOrderList;
            //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
            _this.blockUI.stop();
        });
    };
    OrdersGridComponent.prototype.getOrdersBasedOnSearchParams = function (searchParams, inputParams) {
        var _this = this;
        this.blockUI.start('Loading...');
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));    
        return this.orderSvc.getOrdersBasedOnSearchParams(searchParams)
            .subscribe(function (data) {
            _this.orderListGridData = data.model;
            _this.blockUI.stop();
            //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
        });
    };
    OrdersGridComponent.prototype.getUserList = function () {
        var _this = this;
        return this.orderSvc.getUserList()
            .subscribe(function (data) {
            _this.sourceUserList = data.model.map(function (x) { return x.userFullName; });
        });
    };
    OrdersGridComponent.prototype.getBusinessNameList = function () {
        var _this = this;
        return this.orderSvc.getBusinessNameList()
            .subscribe(function (data) {
            _this.sourceBusinessNameList = data.model.map(function (x) { return x.businessName; });
        });
    };
    OrdersGridComponent.prototype.getOrderStatusTypeList = function () {
        var _this = this;
        return this.orderSvc.getOrderStatusList()
            .subscribe(function (data) {
            _this.orderStatusTypeList = [{ text: 'All', value: 0 }];
            data.model.forEach(function (x, index) {
                _this.orderStatusTypeList.push({ text: x.displayText, value: x.keyId });
            });
            _this.orderStatusTypeList.sort(function (a, b) { return a.text < b.text ? -1 : a.text > b.text ? 1 : 0; } // sort by descending
            );
        });
    };
    /***********************
     *  UI button Click Events
     ***********************/
    OrdersGridComponent.prototype.closeExportToExcelDialog = function () {
        this.exportToExcelDialogOpen = false;
    };
    OrdersGridComponent.prototype.onExportToExcelClick = function () {
        this.openExportToExcelDialog();
    };
    OrdersGridComponent.prototype.exportToExcel = function (grid) {
        //this.loadingIconSvc.Start(jQuery("#orderListGrid")); 
        if (this.exportToExcelNode.value == "Orders") {
            grid.data = this.orderListGridData;
            grid.saveAsExcel();
        }
        else {
            this.excelexport.save();
        }
        this.exportToExcelDialogOpen = false;
        //this.loadingIconSvc.Stop(jQuery("#orderListGrid")); 
    };
    OrdersGridComponent.prototype.onResetButtonClick = function () {
        this.mainSearchBox.nativeElement.value = "";
        this.userListNode.text = "";
        this.businessNameNode.text = "";
        this.defaultOrderStatus = 0;
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt(ONE_YEAR_SPAN)); //set initial list to last 365 days
        this.orderListGridData = this.default365DaysOrderList;
    };
    /* Common functions */
    OrdersGridComponent.prototype.addDays = function (date, days) {
        var dateInMs = date.setDate(date.getDate() - days);
        return new Date(dateInMs);
    };
    OrdersGridComponent.prototype.openDateSelectionErrorDialog = function () {
        var dateSelectionErrorMsg = order_constants_1.OrderConstants.DATE_SELECTION_ERROR_MSG;
        this.toastrSvc.Warning(dateSelectionErrorMsg);
        this.onResetButtonClick();
    };
    OrdersGridComponent.prototype.openDateRangeErrorDialog = function () {
        var dateRangeErrorMsg = order_constants_1.OrderConstants.DATE_RANGE_ERROR_MSG;
        this.toastrSvc.Warning(dateRangeErrorMsg);
        this.onResetButtonClick();
    };
    OrdersGridComponent.prototype.openExportToExcelDialog = function () {
        var _this = this;
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = order_constants_1.OrderConstants.EXPORT_TO_EXCEL_TITLE;
        this.exportToExcelDialogMessage = order_constants_1.OrderConstants.EXPORT_TO_EXCEL_DIALOG_MSG;
        this.orderListWithProducts = [];
        this.orderListGridData.forEach(function (order, index) {
            _this.quoteSvc.getQuoteItems(order.quoteId)
                .then(function (resp) {
                if (resp.isok) {
                    _this.productListItems = resp.model;
                    _this.productListItems.forEach(function (product, index) {
                        //create additional properties by computing
                        var extNetPriceValue = product.netPrice * product.quantity;
                        //create additional properties by computing
                        var extListPriceValue = product.listPrice * product.quantity;
                        Object.assign(product, { extNetPrice: extNetPriceValue, extListPrice: extListPriceValue });
                        //final object for excel export with products
                        _this.orderListWithProducts.push(Object.assign({}, order, product));
                    });
                }
            }).catch(function (error) {
                //console.log('Retrieval error: ${error}');
                console.log(error);
            });
        });
    };
    /********************
     * Filter with all input params
     * @param recycledOrderListData
     ********************/
    /**/
    OrdersGridComponent.prototype.FilterAgainWithRemainingInputParams = function (recycledOrderListData) {
        var searchVal = this.mainSearchBox.nativeElement.value;
        var userNameVal = this.userListNode.value;
        var orderStatusVal = this.orderStatusNode.value;
        var businessNameVal = this.businessNameNode.value;
        var orderStatusDesc = this.orderStatusTypeList.find(function (obj) { return obj.value == orderStatusVal; }).text;
        var orderListDataToReturn = null;
        //possibility of all input boxes being empty
        //all empty except for 'All' as default order status
        if (this.isTextBoxEmpty(searchVal) &&
            this.isTextBoxEmpty(userNameVal) &&
            this.isTextBoxEmpty(businessNameVal)) {
            if (orderStatusDesc == "All") {
                orderListDataToReturn = recycledOrderListData;
            }
            else {
                orderListDataToReturn = recycledOrderListData.filter(function (y) {
                    return (y.orderStatusDescription === orderStatusDesc);
                });
            }
        }
        //possibility of all input boxes having some value
        //search box, user, and business boxes have value
        else if (!this.isTextBoxEmpty(searchVal) &&
            !this.isTextBoxEmpty(userNameVal) &&
            !this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return ((y.projectName.indexOf(searchVal) !== -1 ||
                    y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                    y.poNumber.indexOf(searchVal) !== -1) &&
                    y.projectOwnerName.trim() == userNameVal.trim() &&
                    y.businessName.trim() == businessNameVal.trim() &&
                    y.orderStatusDescription === orderStatusDesc);
            });
        }
        //possibility of atleast two inputs having some value 
        //user and business boxes have value
        else if (this.isTextBoxEmpty(searchVal) &&
            !this.isTextBoxEmpty(userNameVal) &&
            !this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return (y.projectOwnerName == userNameVal.trim() &&
                    y.businessName.trim() == businessNameVal.trim() &&
                    y.orderStatusDescription === orderStatusDesc);
            });
        }
        //search and user boxes have value
        else if (!this.isTextBoxEmpty(searchVal) &&
            !this.isTextBoxEmpty(userNameVal) &&
            this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return ((y.projectName.indexOf(searchVal) !== -1 ||
                    y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                    y.poNumber.indexOf(searchVal) !== -1) &&
                    (y.projectOwnerName.trim() == userNameVal.trim()) &&
                    (y.orderStatusDescription === orderStatusDesc));
            });
        }
        // search and business boxes have value
        else if (!this.isTextBoxEmpty(searchVal) &&
            this.isTextBoxEmpty(userNameVal) &&
            !this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return ((y.projectName.indexOf(searchVal) !== -1 ||
                    y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                    y.poNumber.indexOf(searchVal) !== -1) &&
                    (y.businessName.trim() == businessNameVal.trim()) &&
                    (y.orderStatusDescription === orderStatusDesc));
            });
        }
        //only one input with a value possibilities
        // only business box has a value
        else if (this.isTextBoxEmpty(searchVal) &&
            this.isTextBoxEmpty(userNameVal) &&
            !this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return (y.businessName.trim() == businessNameVal.trim() &&
                    y.orderStatusDescription === orderStatusDesc);
            });
        }
        // only user box has a value
        else if (this.isTextBoxEmpty(searchVal) &&
            !this.isTextBoxEmpty(userNameVal) &&
            this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return (y.projectOwnerName.trim() == userNameVal.trim() &&
                    (y.orderStatusDescription === orderStatusDesc));
            });
        }
        // only search box has a value
        else if (!this.isTextBoxEmpty(searchVal) &&
            this.isTextBoxEmpty(userNameVal) &&
            this.isTextBoxEmpty(businessNameVal)) {
            orderListDataToReturn = recycledOrderListData.filter(function (y) {
                return ((y.projectName.indexOf(searchVal) !== -1 ||
                    y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                    y.poNumber.indexOf(searchVal) !== -1) &&
                    (y.orderStatusDescription === orderStatusDesc));
            });
        }
        this.orderListGridData = orderListDataToReturn;
    };
    OrdersGridComponent.prototype.isTextBoxEmpty = function (value) {
        if (value == "")
            return true;
        else
            return false;
    };
    OrdersGridComponent.prototype.onAdditionalDocsLinkClick = function (quoteId) {
        var _this = this;
        return this.orderSvc.uploadAdditionalDocs(quoteId)
            .subscribe(function (data) {
            var filename = "AdditionalDocs-" + quoteId + ".zip";
            var blob = new Blob([data._body], { type: 'application/zip' });
            kendo_file_saver_1.saveAs(blob, filename);
        }, function (err) {
            _this.toastrSvc.Error("Something went wrong. Please try again.");
        });
    };
    __decorate([
        core_1.ViewChild("mainSearchBox"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "mainSearchBox", void 0);
    __decorate([
        core_1.ViewChild("userListNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "userListNode", void 0);
    __decorate([
        core_1.ViewChild("orderStatusNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "orderStatusNode", void 0);
    __decorate([
        core_1.ViewChild("businessNameNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "businessNameNode", void 0);
    __decorate([
        core_1.ViewChild("fromDateNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "fromDateNode", void 0);
    __decorate([
        core_1.ViewChild("toDateNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "toDateNode", void 0);
    __decorate([
        core_1.ViewChild("exportToExcelNode"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "exportToExcelNode", void 0);
    __decorate([
        core_1.ViewChild("excelexport"),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "excelexport", void 0);
    __decorate([
        core_1.ViewChild(kendo_angular_grid_1.GridComponent),
        __metadata("design:type", kendo_angular_grid_1.GridComponent)
    ], OrdersGridComponent.prototype, "grid", void 0);
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], OrdersGridComponent.prototype, "blockUI", void 0);
    OrdersGridComponent = __decorate([
        core_1.Component({
            selector: 'orders-grid',
            templateUrl: './orders-grid.component.html',
            styleUrls: ['./orders-grid.component.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [toastr_service_1.ToastrService,
            user_service_1.UserService,
            order_service_1.OrderService,
            quote_service_1.QuoteService,
            router_1.Router,
            router_1.ActivatedRoute,
            http_1.Http])
    ], OrdersGridComponent);
    return OrdersGridComponent;
}());
exports.OrdersGridComponent = OrdersGridComponent;
//# sourceMappingURL=orders-grid.component.js.map