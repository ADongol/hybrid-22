import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, QueryList, Inject, TemplateRef, Renderer2, NgZone, AfterViewInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { RowClassArgs } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { take } from 'rxjs/operators/take';
import { tap } from 'rxjs/operators/tap';
import { fromEvent } from 'rxjs/observable/fromEvent';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../../account/services/account.service';
import { QuoteService } from '../services/quote.service';
 
import { TagEditPopupComponent } from './tag-edit-popup.component';
import { OptionItemsComponent } from './option-items.component';

import {
    DialogService,
    DialogRef,
    DialogCloseResult
} from '@progress/kendo-angular-dialog';

//import * as jQuery from 'jquery';
declare var jQuery: any;

const tableRow = node => node.tagName.toLowerCase() === 'tr';

const closest = (node, predicate) => {
    while (node && !predicate(node)) {
        node = node.parentNode;
    }

    return node;
};

@Component({
    selector: "quote-items-list",
    templateUrl: "./quote-items-list.component.html",
    styleUrls: ["./quote-items-list.component.css"],
    encapsulation: ViewEncapsulation.None
    //styles: [`
    //    .k-grid tr.dragging {
    //        background-color: #99ccff;
    //    };
    //`]
})
export class QuoteItemsListComponent implements OnInit {
    @BlockUI() blockUI: NgBlockUI;
    @Input() quote: any;
    @Input() user: any;
    @Input() quoteItems: any;
    @Output() reloadDataEvent: EventEmitter<any> = new EventEmitter();
    @Output() reloadQuoteEvent: EventEmitter<any> = new EventEmitter();
    //public originalQuoteItems: any = [];
    @ViewChildren(OptionItemsComponent) OptionItemsComponents: QueryList<OptionItemsComponent>;

    public gridIsModified: boolean = false;
    //public tagEditorOpened: boolean = false;

    //private editTagPopup: any;

    //for tag Editor
    public quoteItem: any; 
    public oldTagsValue: any;

    public state: State = {
        skip: 0,
        take: 50
    };
    //public gridData: any = process(this.quoteItems.items, this.state);
    public gridData: any;
    private currentSubscription: Subscription;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private quoteSvc: QuoteService,
        private userSvc: UserService, private accountSvc: AccountService,
        private dialogSvc: DialogService, private enums: Enums,
        private formBuilder: FormBuilder,
        private renderer: Renderer2, private zone: NgZone) {
    }

    ngOnChanges() {
        this.gridData = process(this.quoteItems.items, this.state);
    }

    ngOnInit() {
        
    }

    public ngAfterViewInit(): void {
        this.currentSubscription = this.handleDragAndDrop();
    }

    ngAfterViewChecked() {
        if (!this.gridIsModified) {
            jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
        }
    }

    public ngOnDestroy(): void {
        this.currentSubscription.unsubscribe();
    }

    public dataStateChange(state: State): void {
        this.state = state;
        this.gridData = process(this.quoteItems.items, this.state);
        this.currentSubscription.unsubscribe();
        this.zone.onStable.pipe(take(1))
            .subscribe(() => this.currentSubscription = this.handleDragAndDrop());
    }

    public rowCallback(context: RowClassArgs) {
        //console.log(context.dataItem.dragging);
        return {
            dragging: context.dataItem.dragging
        };
    }

    private handleDragAndDrop(): Subscription {
        const sub = new Subscription(() => { });
        let draggedItemIndex;

        const tableRows = Array.from(document.querySelectorAll('.k-grid tr'));
        tableRows.forEach(item => {
            this.renderer.setAttribute(item, 'draggable', 'true');
            const dragStart = fromEvent<DragEvent>(item, 'dragstart');
            const dragOver = fromEvent(item, 'dragover');
            const dragEnd = fromEvent(item, 'dragend');

            sub.add(dragStart.pipe(
                tap(({ dataTransfer }) => {
                    try {
                        //console.log("dragStart");
                        const dragImgEl = document.createElement('span');
                        dragImgEl.setAttribute('style', 'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;');
                        document.body.appendChild(dragImgEl);
                        dataTransfer.setDragImage(dragImgEl, 0, 0);
                    } catch (err) {
                        // IE doesn't support setDragImage
                    }
                    try {
                        // Firefox won't drag without setting data
                        dataTransfer.setData('application/json', JSON.stringify({}));
                    } catch (err) {
                        // IE doesn't support MIME types in setData
                    }
                })
            ).subscribe(({ target }) => {
                //console.log("dragStartSubscrible");
                const row: HTMLTableRowElement = <HTMLTableRowElement>target;
                draggedItemIndex = row.rowIndex;
                const dataItem = this.gridData.data[draggedItemIndex];
                dataItem.dragging = true;
            }));

            sub.add(dragOver.subscribe((e: any) => {
                //console.log("dragOver");

                e.preventDefault();
                const dataItem = this.gridData.data.splice(draggedItemIndex, 1)[0];
                const dropIndex = closest(e.target, tableRow).rowIndex;
                const dropItem = this.gridData.data[dropIndex];

                draggedItemIndex = dropIndex;
                this.zone.run(() =>
                    this.gridData.data.splice(dropIndex, 0, dataItem)
                );
            }));

            sub.add(dragEnd.subscribe((e: any) => {
                //console.log("dragEnd");
                
                e.preventDefault();
                const dataItem = this.gridData.data[draggedItemIndex];
                dataItem.dragging = false;
                
                this.setRank();
                this.gridIsChanged();
                //this.showRankInConsole();
            }));
        });

        return sub;
    }

    //this function is for debugging purpose only
    public showRankInConsole() {
        for (let item of this.gridData.data) {
            console.log("Product number:"+ item.productNumber + " Rank:" + item.rank);
        }
    }

    public setRank() {
        for (var i = 0; i < this.gridData.data.length; i++) {
            this.gridData.data[i].rank = i;
        }

        this.quoteItems.items = this.gridData.data;
    }

    public validateQuantity(event: any) {
        this.gridIsModified = true;

        jQuery("#quoteItemsGrid .k-grid-toolbar").show();

        //alert("this.quoteItems.items[0].quantity: " + this.quoteItems.items[0].quantity
        //    + "\n this.originalQuoteItems[0].quantity: " + this.originalQuoteItems[0].quantity)

        var value = parseFloat(event.target.value);

        if (value == null || isNaN(value)) {

            event.target.value = 0;
        } else if ((value < 0) || (Math.floor(value) != value)) {

            event.target.value = 0;
            this.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        }
    }

    

    public saveChanges(grid: any) {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');

        this.quoteSvc.adjustQuoteItems(this.quoteItems).then((resp: any) => {
            if (resp.isok) {

               // self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();

                self.reloadDataEvent.emit();

                self.toastrSvc.displayResponseMessages(resp);
                self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            } else {
                self.toastrSvc.displayResponseMessages(resp);
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();
            }
        });
    }

 

    public cancelChanges(grid: any) {

        this.reloadQuoteItems();

        //this.quoteItems.items = Object.assign({}, this.originalQuoteItems);
        //this.quoteItems.items = this.originalQuoteItems;
    }

    public reloadQuote() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));

        self.quoteSvc.getQuote(self.quote.projectId, self.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                self.quote = resp.model;
            } else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public reloadQuoteItems() {
        var self = this;

        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');

        self.quoteSvc.getQuoteItemsModel(self.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
               // self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();

                self.quoteItems = resp.model;
                this.gridData = process(this.quoteItems.items, this.state);
                self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            } else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();
            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public productDetails(dataItem: any) {
        

        this.quoteSvc.setBasketQuoteId(this.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                this.router.navigate(['/product', { outlets: { 'productDetails': [dataItem.productId] } }], { queryParams: { activeTab: "product-overview" } });
            } else {
                this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(error => {
            console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public hasOptionItems(dataItem: any, index: number): boolean {
        return dataItem.lineItemTypeId == 2;
    }

    //Tag Editor
    public openTagEditor(dataItem: any) {
        this.quoteItem = dataItem;
        this.oldTagsValue = this.quoteItem.tags;
        jQuery("#tagEditor").modal();
    }

    public closeTagEditor() {
        this.quoteItem.tags = this.oldTagsValue;
    }

    public saveTagUpdate() {
        var self = this;

        var data = {
            'QuoteId': this.quoteItem.quoteId,
            'Items': [this.quoteItem]
        };

        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');

        this.quoteSvc.adjustQuoteItems(data).then((resp: any) => {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                this.blockUI.stop();

                self.toastrSvc.displayResponseMessages(resp);
                //self.oldTagsValue = self.quoteItem.tags;
            } else {
                self.toastrSvc.displayResponseMessages(resp);
                this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(error => {
            console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }

    public gridIsChanged() {
        this.gridIsModified = true;
        jQuery("#quoteItemsGrid .k-grid-toolbar").show();
    }

    public gridIsSaved() {
        this.gridIsModified = false;
        jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
    }

};
