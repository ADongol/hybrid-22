 
import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core';
//import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import { GridModule, GridComponent, ExcelModule, RowClassArgs } from '@progress/kendo-angular-grid';
import {
    ExcelExportData, Workbook,
    WorkbookSheetColumn, WorkbookSheetRow,
    WorkbookSheetRowCell, WorkbookSheet
} from '@progress/kendo-angular-excel-export';
 
import { saveAs } from '@progress/kendo-file-saver';
 
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from '../shared/services/toastr.service';
import { UserService } from '../shared/services/user.service';
import { OrderService } from './services/order.service';
import { QuoteService } from '../quote/services/quote.service';
import { SearchOrders } from '../shared/models/searchOrders';

declare var jQuery: any;

@Component({
    selector: 'orders-grid',
    templateUrl: 'app/order/orders-grid.component.html',
    styleUrls: ['app/order/orders-grid.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class OrdersGridComponent implements OnInit, AfterViewInit {

    /* variable declarations */
    @ViewChild("mainSearchBox") mainSearchBox;
    @ViewChild("userListNode") userListNode;
    @ViewChild("orderStatusNode") orderStatusNode;
    @ViewChild("businessNameNode") businessNameNode;
    @ViewChild("fromDateNode") fromDateNode;
    @ViewChild("toDateNode") toDateNode;
    @ViewChild("exportToExcelNode") exportToExcelNode;
    @ViewChild("excelexport") excelexport;
    @ViewChild(GridComponent) grid: GridComponent;

    @BlockUI() blockUI: NgBlockUI;

    public orderListGridData: any = [];
    public pageSize = 20;
    public skip = 0;
    public buttonCount = 20;
    public info = true;
    public type: 'numeric' | 'input' = 'numeric';
    public pageSizes = true;
    public previousNext = true;

    public default365DaysOrderList: any = [];
    public fiveYearOrderItemList: any = [];
    public orderListWithProducts: any = [];
    public productListItems: any = [];

    public user: any;
    public sourceUserList: any = [];
    public userList: any = [];
    public sourceBusinessNameList: any = [];
    public businessNameList: any = [];
    public exportToExcelOptions: Array<string> = ["Orders", "Orders with products"];
    public defaultExportToExcelOption: string = "Orders";

    public orderStatusTypeList: Array<{ text: string, value: any }> = [];;
    public ddlPlaceHolder = { text: 'All', value: null };
    public defaultOrderStatus: number = 0;

    public startDateValue: Date;
    public endDateValue: Date;
    public startDateFiveYear: Date; 

    public exportToExcelDialogOpen: boolean = false;
    public exportToExcelDialogTitle: string;
    public exportToExcelDialogMessage: string;
    public exportToExcelTemplate: boolean = false;

    public searchParams: SearchOrders = new SearchOrders();
    public inputParams: boolean = false;

    /**
     * Dependency Injection 
     **/
    constructor(private toastrSvc: ToastrService,
        private userSvc: UserService,
        private orderSvc: OrderService,
        private quoteSvc: QuoteService, 
        //private loadingIconSvc: LoadingIconService,
        private router: Router,
        private route: ActivatedRoute,
        private http: Http
    ) {
        this.user = this.route.snapshot.data['currentUser'].model;
    }

    /** 
     * angular life cycle hooks
     */
    public ngOnInit(): void {
       
        //set the default 365 date range
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt('364')); //set initial list to last 365 days
        this.startDateFiveYear = this.addDays(new Date(), parseInt('1825')); 
         
        this.getOrderItemsForLast365Days(); // Fetch the item list with the initial state
        this.getUserList(); // user list for User autocomplete box
        this.getOrderStatusTypeList();
        this.getBusinessNameList();
        this.defaultOrderStatus = 0; //set dropdown list to 'All'
    } 

    public ngAfterViewInit(): void {
        // Expand the first row initially
        //this.grid.expandRow(0);
        jQuery(".k-grid .k-filter-row").hide();
    }

    /**
     * event handlers
     */
    private onMainSearchBoxClick(eventValue: any) {
        this.FilterWithAllSearchParams();
    }

    private handleUserListChange(eventValue: any) {
        this.userList = this.sourceUserList
                            .filter((s) => s.toLowerCase().indexOf(eventValue.toLowerCase()) !== -1);
    }

    private handleUserSelectionChange(eventValue: any) {
        if (eventValue != "")
            this.orderListGridData = this.FilterUserSelectionChange(eventValue);
        else 
            this.FilterWithAllSearchParams();
    }

    private handleBusinessNameChange(eventValue: any) {
        this.businessNameList = this.sourceBusinessNameList
                                    .filter((x) => x.toLowerCase().indexOf(eventValue.toLowerCase()) !== -1);
    }

    private handleBusinessNameSelectionChange(eventValue: any) {
        if (eventValue != "")
            this.orderListGridData = this.FilterBusinessNameSelectionChange(eventValue);
        else 
            this.FilterWithAllSearchParams();
    }

    private handleOrderStatusListChange(eventValue: any) {
        let dropdownSelectionText = this.orderStatusTypeList.find((obj) => { return obj.value === eventValue }).text;
       
       this.FilterWithAllSearchParams();
    }

    private handleStartDateChange(event: any) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    }

    private handleEndDateChange(event: any) {
        if (this.fromDateNode.value > this.toDateNode.value) {
            this.openDateSelectionErrorDialog();
        }
        else if ((this.toDateNode.value.getYear() - this.fromDateNode.value.getYear()) > 5) {
            this.openDateRangeErrorDialog();
        }
        else {
            this.FilterWithAllSearchParams();
        }
    }
 
    public FilterUserSelectionChange(userNameVal: string): OrdersGridComponent {
        return this.orderListGridData.filter((x) => { return x.projectOwnerName.trim() == userNameVal.trim() });
    }

    public FilterBusinessNameSelectionChange(businessNameVal: string): OrdersGridComponent {
        return this.orderListGridData.filter((x) => { return x.businessName.trim() == businessNameVal.trim() });
    }

    //on date time picker change, also do further filters after server trip
    private FilterWithAllSearchParams() {

        if (this.fromDateNode.value.toLocaleString() == this.startDateValue.toLocaleString() &&
            this.toDateNode.value.toLocaleString() == this.endDateValue.toLocaleString())
        {
            this.orderListGridData = this.default365DaysOrderList;
        }
        else if (this.fromDateNode.value > this.startDateFiveYear) {
            this.orderListGridData = this.fiveYearOrderItemList
                .filter((x) => {
                    let convertedSubmitDate = new Date(Date.parse(x.submitDate));

                    return convertedSubmitDate >= this.fromDateNode.value
                        && convertedSubmitDate <= this.toDateNode.value;
                });
        }
        else {
            this.searchParams = {
                startDate: this.fromDateNode.value.toLocaleDateString(),
                endDate: this.toDateNode.value.toLocaleDateString()
            }

            this.orderListGridData = this.getOrdersBasedOnSearchParams(this.searchParams, this.inputParams = true);
        }

        this.FilterAgainWithRemainingInputParams(this.orderListGridData);  //filter more with other possible search params;
    }

    /**
     * api calls through services
     */
    private getOrderItemsForLast365Days() {
         
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));
        this.blockUI.start('Loading...');
        
        return this.orderSvc.getLast365DaysOrderItemList()
            .subscribe(data => {
                this.fiveYearOrderItemList = data.model;

                //var initialDate365Days = this.getFormattedDate(this.startDateValue, "inCSharpFormat");

                this.default365DaysOrderList = this.fiveYearOrderItemList
                    .filter((obj) => {
                        let convertedSubmitDate = new Date(Date.parse(obj.submitDate));

                        return convertedSubmitDate >= this.startDateValue
                    });

                this.orderListGridData = this.default365DaysOrderList;

                //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
                this.blockUI.stop();
            })
    } 

    private getOrdersBasedOnSearchParams(searchParams: SearchOrders, inputParams: boolean) {
        this.blockUI.start('Loading...');
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));    
        
        return this.orderSvc.getOrdersBasedOnSearchParams(searchParams)
            .subscribe(data => {
                this.orderListGridData = data.model;
                this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
            });
    }

    private getUserList() {
        return this.orderSvc.getUserList()
            .subscribe(data => {
                this.sourceUserList = data.model.map(x => x.userFullName);
            })
    }

    private getBusinessNameList() {
        return this.orderSvc.getBusinessNameList()
            .subscribe(data => {
                this.sourceBusinessNameList = data.model.map(x => x.businessName);
            })
    }

    private getOrderStatusTypeList() {
        return this.orderSvc.getOrderStatusList()
            .subscribe(data => {
                this.orderStatusTypeList = [{ text: 'All', value: 0 }];

                data.model.forEach((x, index) => {
                    this.orderStatusTypeList.push({ text: x.displayText, value: x.keyId });
                })

                this.orderStatusTypeList.sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0// sort by descending
                );
                 
            });
    }

    /**
     *  UI button Click Events
     * */
    private closeExportToExcelDialog() {
        this.exportToExcelDialogOpen = false;
    }

    private onExportToExcelClick() {
        this.openExportToExcelDialog();
    }

    private exportToExcel(grid: GridComponent): void {
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
    }

    public onResetButtonClick() {
        this.mainSearchBox.nativeElement.value = "";
        this.userListNode.text = "";
        this.businessNameNode.text = "";
        this.defaultOrderStatus = 0;    

        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt('365')); //set initial list to last 365 days

        this.orderListGridData = this.default365DaysOrderList;
    }

    /* Common functions */
    public addDays(date, days) {
        var dateInMs = date.setDate(date.getDate() - days);
        return new Date(dateInMs);
    }
    
    private openDateSelectionErrorDialog() {
        this.toastrSvc.Warning("'From Date' can not be less than 'To Date'. Please, select another date range.")
        this.onResetButtonClick();
    }

    private openDateRangeErrorDialog() {
        this.toastrSvc.Warning("'Your selection returned large set of data. Please shorten your date range selection.")
        this.onResetButtonClick();
    }

    private openExportToExcelDialog() {
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = "Export To Excel";
        this.exportToExcelDialogMessage = "Please select an export type:";

        this.orderListWithProducts = [];

        this.orderListGridData.forEach((order, index) => {
            this.quoteSvc.getQuoteItems(order.quoteId)
                .then((resp: any) => {
                    if (resp.isok) {
                        this.productListItems = resp.model;                      

                        this.productListItems.forEach((product, index) => {
                            let extNetPriceValue = product.netPrice * product.quantity; //create additional properties by computing
                            let extListPriceValue = product.listPrice * product.quantity; //create additional properties by computing
                            Object.assign(product, { extNetPrice: extNetPriceValue, extListPrice: extListPriceValue });

                            this.orderListWithProducts.push(Object.assign({}, order, product)); //final object for excel export with products
                        });                         
                    }

                }).catch(error => {
                    //console.log('Retrieval error: ${error}');
                    console.log(error);
                });
        });
    }

    /**
     * Filter with all input params
     * @param recycledOrderListData
     */
    /**/
    private FilterAgainWithRemainingInputParams(recycledOrderListData: any) {

        let searchVal = this.mainSearchBox.nativeElement.value;
        let userNameVal = this.userListNode.value;
        let orderStatusVal = this.orderStatusNode.value;
        let businessNameVal = this.businessNameNode.value;
        let orderStatusDesc = this.orderStatusTypeList.find((obj) => { return obj.value == orderStatusVal }).text;

        var orderListDataToReturn = null;

        //empty input possiblility
        //all empty except for 'All' as default order status
        if ((searchVal == "") && (userNameVal == "") && (businessNameVal == "")) {
            if (orderStatusDesc != 'All') {
                orderListDataToReturn = recycledOrderListData.filter((y) => {
                    return (y.orderStatusDescription === orderStatusDesc);
                });
            }
            else {
                orderListDataToReturn = recycledOrderListData;
            }
        }
        //all input having some value possiblities
        //search box, user, and business boxes have value
        if ((searchVal != "") && (userNameVal != "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        //atleast two inputs having value possiblities
        //user and business boxes have value
        else if ((searchVal == "") && (userNameVal != "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectOwnerName == userNameVal.trim() &&
                        y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        //search and user boxes have value
        else if ((searchVal != "") && (userNameVal != "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.projectOwnerName.trim() == userNameVal.trim());
                }
            });
        }
        // search and business boxes have value
        else if ((searchVal != "") && (userNameVal == "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        //only one input with a value possibilities
        // only business box has a value
        else if ((searchVal == "") && (userNameVal == "") && (businessNameVal != "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.orderStatusDescription == orderStatusDesc &&
                        y.businessName.trim() == businessNameVal.trim());
                }
                else {
                    return (y.businessName.trim() == businessNameVal.trim());
                }
            });
        }
        // only user box has a value
        else if ((searchVal == "") && (userNameVal != "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectOwnerName.trim() == userNameVal.trim() &&
                        y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectOwnerName.trim() == userNameVal.trim());
                }
            });
        }
        // only serach box has a value
        else if ((searchVal != "") && (userNameVal == "") && (businessNameVal == "")) {
            orderListDataToReturn = recycledOrderListData.filter((y) => {
                if (orderStatusDesc != 'All') {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1 &&
                        y.orderStatusDescription == orderStatusDesc);
                }
                else {
                    return (y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1);
                }
            });
        }
      

        this.orderListGridData = orderListDataToReturn;
    }

    public rowCallback = (context: RowClassArgs) => {
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
    }
}
     
 