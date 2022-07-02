 
import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core';
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
 
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { OrderService } from '../services/order.service';
import { QuoteService } from '../../quote/services/quote.service';
import { SearchOrders } from '../../shared/models/searchOrders';
import { OrderConstants } from '../order-constants';

declare var jQuery: any;
const ONE_YEAR_SPAN = '364';
const FIVE_YEAR_SPAN = '1825';

@Component({
    selector: 'orders-grid',
    templateUrl: './orders-grid.component.html',
    styleUrls: ['./orders-grid.component.css'],
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

    /**********************
     * Dependency Injection 
     **********************/
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

    /************************** 
     * angular life cycle hooks
     *************************/
    public ngOnInit(): void {
       
        //set the default 365 date range
        this.endDateValue = new Date();
        this.startDateValue = this.addDays(new Date(), parseInt(ONE_YEAR_SPAN)); //set initial list to last 365 days
        this.startDateFiveYear = this.addDays(new Date(), parseInt(FIVE_YEAR_SPAN)); 
         
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

    /****************
     * event handlers
     ****************/
    public onMainSearchBoxClick(eventValue: any) {
        this.FilterWithAllSearchParams();
    }

    public handleUserListChange(eventValue: any) {
        this.userList = this.sourceUserList
                            .filter((s) => s.toLowerCase()
                            .indexOf(eventValue.toLowerCase()) !== -1);
    }

    public handleUserSelectionChange(eventValue: any) {
        if (eventValue != "")
            this.orderListGridData = this.FilterUserSelectionChange(eventValue);
        else 
            this.FilterWithAllSearchParams();
    }

    public handleBusinessNameChange(eventValue: any) {
        this.businessNameList = this.sourceBusinessNameList
                                    .filter((x) => x.toLowerCase()
                                    .indexOf(eventValue.toLowerCase()) !== -1);
    }

    public handleBusinessNameSelectionChange(eventValue: any) {
        if (eventValue != "")
            this.orderListGridData = this.FilterBusinessNameSelectionChange(eventValue);
        else 
            this.FilterWithAllSearchParams();
    }

    public handleOrderStatusListChange(eventValue: any) {
        let dropdownSelectionText = this.orderStatusTypeList.find((obj) => {
                                            return obj.value === eventValue
                                    }).text;
       
       this.FilterWithAllSearchParams();
    }

    public handleStartDateChange(event: any) {
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

    public handleEndDateChange(event: any) {
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
    public FilterWithAllSearchParams() {

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

    /*****************************
     * api calls through services
     *****************************/
    public getOrderItemsForLast365Days() {
         
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

    public getOrdersBasedOnSearchParams(searchParams: SearchOrders, inputParams: boolean) {
        this.blockUI.start('Loading...');
        //this.loadingIconSvc.Start(jQuery("#orderListGrid"));    
        
        return this.orderSvc.getOrdersBasedOnSearchParams(searchParams)
            .subscribe(data => {
                this.orderListGridData = data.model;
                this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#orderListGrid"));
            });
    }

    public getUserList() {
        return this.orderSvc.getUserList()
            .subscribe(data => {
                this.sourceUserList = data.model.map(x => x.userFullName);
            })
    }

    public getBusinessNameList() {
        return this.orderSvc.getBusinessNameList()
            .subscribe(data => {
                this.sourceBusinessNameList = data.model.map(x => x.businessName);
            })
    }

    public getOrderStatusTypeList() {
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

    /***********************
     *  UI button Click Events
     ***********************/
    public closeExportToExcelDialog() {
        this.exportToExcelDialogOpen = false;
    }

    public onExportToExcelClick() {
        this.openExportToExcelDialog();
    }

    public exportToExcel(grid: GridComponent): void {
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
        this.startDateValue = this.addDays(new Date(), parseInt(ONE_YEAR_SPAN)); //set initial list to last 365 days

        this.orderListGridData = this.default365DaysOrderList;
    }

    /* Common functions */
    public addDays(date, days) {
        var dateInMs = date.setDate(date.getDate() - days);
        return new Date(dateInMs);
    }
    
    public openDateSelectionErrorDialog() {

        let dateSelectionErrorMsg = OrderConstants.DATE_SELECTION_ERROR_MSG;
        this.toastrSvc.Warning(dateSelectionErrorMsg);
        this.onResetButtonClick();
    }

    public openDateRangeErrorDialog() {

        let dateRangeErrorMsg = OrderConstants.DATE_RANGE_ERROR_MSG;
        this.toastrSvc.Warning(dateRangeErrorMsg);
        this.onResetButtonClick();
    }

    public openExportToExcelDialog() {
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = OrderConstants.EXPORT_TO_EXCEL_TITLE;
        this.exportToExcelDialogMessage = OrderConstants.EXPORT_TO_EXCEL_DIALOG_MSG;

        this.orderListWithProducts = [];

        this.orderListGridData.forEach((order, index) => {
            this.quoteSvc.getQuoteItems(order.quoteId)
                .then((resp: any) => {
                    if (resp.isok) {
                        this.productListItems = resp.model;                      

                        this.productListItems.forEach((product, index) => {
                            //create additional properties by computing
                            let extNetPriceValue = product.netPrice * product.quantity; 
                            //create additional properties by computing
                            let extListPriceValue = product.listPrice * product.quantity; 
                            Object.assign(product, { extNetPrice: extNetPriceValue, extListPrice: extListPriceValue });

                            //final object for excel export with products
                            this.orderListWithProducts.push(Object.assign({}, order, product)); 
                        });                         
                    }
                }).catch(error => {
                    //console.log('Retrieval error: ${error}');
                    console.log(error);
                });
        });
    }

    /********************
     * Filter with all input params
     * @param recycledOrderListData
     ********************/
    /**/
    public FilterAgainWithRemainingInputParams(recycledOrderListData: any) {

        let searchVal = this.mainSearchBox.nativeElement.value;
        let userNameVal = this.userListNode.value;
        let orderStatusVal = this.orderStatusNode.value;
        let businessNameVal = this.businessNameNode.value;
        let orderStatusDesc = this.orderStatusTypeList.find((obj) =>
                                    { return obj.value == orderStatusVal }).text;

        var orderListDataToReturn = null; 
        
        //possibility of all input boxes being empty
        //all empty except for 'All' as default order status
        if (this.isTextBoxEmpty(searchVal) &&
            this.isTextBoxEmpty(userNameVal) &&
            this.isTextBoxEmpty(businessNameVal))
        {
            if (orderStatusDesc == "All") {
                orderListDataToReturn = recycledOrderListData;
            }
            else {
                orderListDataToReturn = recycledOrderListData.filter((y) => {
                    return (y.orderStatusDescription === orderStatusDesc);
                });
            }
        }
        //possibility of all input boxes having some value
        //search box, user, and business boxes have value
        else if (!this.isTextBoxEmpty(searchVal) &&
            !this.isTextBoxEmpty(userNameVal) &&
            !this.isTextBoxEmpty(businessNameVal))
        {
            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {
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

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {
                return (y.projectOwnerName == userNameVal.trim() &&
                        y.businessName.trim() == businessNameVal.trim() &&
                        y.orderStatusDescription === orderStatusDesc);
            });
        }
        //search and user boxes have value
        else if (!this.isTextBoxEmpty(searchVal) &&
                !this.isTextBoxEmpty(userNameVal) &&
                this.isTextBoxEmpty(businessNameVal)) {

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {                 
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

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {
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

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {
                return (y.businessName.trim() == businessNameVal.trim() &&  
                        y.orderStatusDescription === orderStatusDesc);
            });
        }
        // only user box has a value
        else if (this.isTextBoxEmpty(searchVal) &&
                !this.isTextBoxEmpty(userNameVal) &&
                this.isTextBoxEmpty(businessNameVal)) { 

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {
                return (y.projectOwnerName.trim() == userNameVal.trim() &&
                       (y.orderStatusDescription === orderStatusDesc));
            });
        }
        // only search box has a value
        else if (!this.isTextBoxEmpty(searchVal) &&
                this.isTextBoxEmpty(userNameVal) &&
                this.isTextBoxEmpty(businessNameVal)) {

            orderListDataToReturn = recycledOrderListData.filter((y) =>
            {                
                return ((y.projectName.indexOf(searchVal) !== -1 ||
                        y.activeQuoteTitle.indexOf(searchVal) !== -1 ||
                        y.poNumber.indexOf(searchVal) !== -1) &&
                        (y.orderStatusDescription === orderStatusDesc));
            });
        }

        this.orderListGridData = orderListDataToReturn;
    }

    public isTextBoxEmpty(value) {
        if (value == "")
            return true;
        else
            return false;
    }     

    public onAdditionalDocsLinkClick(quoteId) {

        return this.orderSvc.uploadAdditionalDocs(quoteId)
            .subscribe((data: any) => {

                let filename = "AdditionalDocs-" + quoteId + ".zip";
                const blob = new Blob([data._body], { type: 'application/zip' });
               
                saveAs(blob, filename);
            },
            (err: any) => {
                this.toastrSvc.Error("Something went wrong. Please try again.");
            });
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
     
 