import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { GridModule, GridComponent, ExcelModule, RowClassArgs, } from '@progress/kendo-angular-grid';
import {
    ExcelExportData, Workbook,
    WorkbookSheetColumn, WorkbookSheetRow,
    WorkbookSheetRowCell, WorkbookSheet
} from '@progress/kendo-angular-excel-export';

import { saveAs } from '@progress/kendo-file-saver';


import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service';
import { LmsCatalogService } from '../services/lms-catalog.service';
import { AddressService } from '../../address/services/address.service';
import { setDOM } from '@angular/platform-browser/src/dom/dom_adapter';
import { SortDescriptor } from '@progress/kendo-data-query';

//import { OrderService } from '../services/order.service';
//import { QuoteService } from '../../quote/services/quote.service';
//import { SearchOrders } from '../../shared/models/searchOrders';

@Component({
    selector: 'lms-catalog-grid',
    templateUrl: './lms-catalog-grid.component.html',
    styleUrls: ["./lms-catalog-grid.component.css"]
})
export class LmsCatalogGridComponent implements OnInit {


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

    public courseListGridData: any = [];

    public pageSize = 20;
    public pageNumber = 1;
    public skip = 0;
    public buttonCount = 20;
    public info = true;
    public type: 'numeric' | 'input' = 'numeric';
    public pageSizes = true;
    public previousNext = true;

    public defaultSort: SortDescriptor[] = [{
        field: 'startDate',
        dir: 'asc'
    }];

    public user: any;
    public sourceUserList: any = [];
    public stateProvinces: any = [];
    public exportToExcelOptions: Array<string> = ["Orders", "Orders with products"];
    public defaultExportToExcelOption: string = "Orders";

    // Search Parameters
    // public searchStartProvince: any;
    // public searchCity: String;
    public searchLocation: string = null;
    public searchStartDate: Date = null;
    public searchEndDate: Date = null;

    public exportToExcelDialogOpen: boolean = false;
    public exportToExcelDialogTitle: string;
    public exportToExcelDialogMessage: string;
    public exportToExcelTemplate: boolean = false;

    public searchParams = null
    public inputParams: boolean = false;

    /**
     * Dependency Injection 
     **/
    constructor(private ngZone: NgZone,
        private toastrSvc: ToastrService,
        private userSvc: UserService,
        private addressSvc: AddressService,
        //private loadingIconSvc: LoadingIconService,
        private lmsCatalogService: LmsCatalogService, // TODO:  Rename service
        private router: Router,
        private route: ActivatedRoute
    ) {
        // this.user = this.route.snapshot.data['currentUser'].model;
    }

    /** 
     * angular life cycle hooks
     */
    public ngOnInit(): void {
        this.setDefaults();
        this.loadCourses();
    }

    private setDefaults() {
        this.courseListGridData = [];

        var startDate = new Date();
        startDate.setHours(0, 0, 0, 0);
        this.searchStartDate = startDate;

        var endDate = this.addDays(new Date(), 90); 
        endDate.setHours(24, 0, 0, 0);
        this.searchEndDate = endDate;

        this.searchLocation = null;
    }


    public onSearchClick() {
        this.loadCourses();
    }

    public handleStartDateChange(value: Date) {
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
    }

    public handleEndDateChange(value: Date) {
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
    }

    public loadCourses() {
        this.searchParams = {
            sessionStartDate: this.searchStartDate,
            sessionEndDate: this.searchEndDate,
            location: this.searchLocation
        };

        this.getCoursesBasedOnSearchParams(this.searchParams, this.inputParams = true);
    }

    public getCoursesBasedOnSearchParams(searchParams, inputParams: boolean) {
        this.blockUI.start('Loading...');

        return this.lmsCatalogService.getDaikinCityLmsCourseSessions(searchParams)
            .subscribe(data => {
                if (data && data.model && data.model.items) {
                    this.courseListGridData = this.buildCourseDataSet(data.model.items);

                    if (data.model != null) {
                        this.pageNumber = data.model.pageNumber;
                    } else {
                        this.pageNumber = 1;
                    }
                }
                this.blockUI.stop();
            });
    }

    private buildCourseDataSet(data: any): any {
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
    }

    public closeExportToExcelDialog() {
        this.exportToExcelDialogOpen = false;
    }

    public onExportToExcelClick() {
        this.openExportToExcelDialog();
    }

    public exportToExcel(grid: GridComponent): void {
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
    }

    public onDataStateChange(): void {
        this.fitColumns();
      }
  
      private fitColumns(): void {
        //   this.ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
        //     this.grid.autoFitColumns();
        //   });
      }

    public onResetButtonClick() {
        this.setDefaults();
    }

    public addDays(date, days) {
        var dateInMs = date.setDate(date.getDate() + days);
        return new Date(dateInMs);
    }

    public openDateSelectionErrorDialog() {
        this.toastrSvc.Warning("'From Date' can not be less than 'To Date'. Please, select another date range.")
        this.onResetButtonClick();
    }

    public openDateRangeErrorDialog() {
        this.toastrSvc.Warning("'Your selection returned large set of data. Please shorten your date range selection.")
        this.onResetButtonClick();
    }

    public openExportToExcelDialog() {
        this.exportToExcelDialogOpen = true;
        this.exportToExcelDialogTitle = "Export To Excel";
        this.exportToExcelDialogMessage = "Please select an export type:";
    }


    public rowCallback = (context: RowClassArgs) => {

    }

}
