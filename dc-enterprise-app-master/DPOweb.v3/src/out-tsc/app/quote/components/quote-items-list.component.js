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
var forms_1 = require("@angular/forms");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var router_1 = require("@angular/router");
var Subscription_1 = require("rxjs/Subscription");
var take_1 = require("rxjs/operators/take");
var tap_1 = require("rxjs/operators/tap");
var fromEvent_1 = require("rxjs/observable/fromEvent");
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var account_service_1 = require("../../account/services/account.service");
var quote_service_1 = require("../services/quote.service");
var option_items_component_1 = require("./option-items.component");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var tableRow = function (node) { return node.tagName.toLowerCase() === 'tr'; };
var closest = function (node, predicate) {
    while (node && !predicate(node)) {
        node = node.parentNode;
    }
    return node;
};
var QuoteItemsListComponent = /** @class */ (function () {
    function QuoteItemsListComponent(router, route, toastrSvc, quoteSvc, userSvc, accountSvc, dialogSvc, enums, formBuilder, renderer, zone) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.quoteSvc = quoteSvc;
        this.userSvc = userSvc;
        this.accountSvc = accountSvc;
        this.dialogSvc = dialogSvc;
        this.enums = enums;
        this.formBuilder = formBuilder;
        this.renderer = renderer;
        this.zone = zone;
        this.reloadDataEvent = new core_1.EventEmitter();
        this.reloadQuoteEvent = new core_1.EventEmitter();
        this.gridIsModified = false;
        this.state = {
            skip: 0,
            take: 50
        };
    }
    QuoteItemsListComponent.prototype.ngOnChanges = function () {
        this.gridData = kendo_data_query_1.process(this.quoteItems.items, this.state);
    };
    QuoteItemsListComponent.prototype.ngOnInit = function () {
    };
    QuoteItemsListComponent.prototype.ngAfterViewInit = function () {
        this.currentSubscription = this.handleDragAndDrop();
    };
    QuoteItemsListComponent.prototype.ngAfterViewChecked = function () {
        if (!this.gridIsModified) {
            jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
        }
    };
    QuoteItemsListComponent.prototype.ngOnDestroy = function () {
        this.currentSubscription.unsubscribe();
    };
    QuoteItemsListComponent.prototype.dataStateChange = function (state) {
        var _this = this;
        this.state = state;
        this.gridData = kendo_data_query_1.process(this.quoteItems.items, this.state);
        this.currentSubscription.unsubscribe();
        this.zone.onStable.pipe(take_1.take(1))
            .subscribe(function () { return _this.currentSubscription = _this.handleDragAndDrop(); });
    };
    QuoteItemsListComponent.prototype.rowCallback = function (context) {
        //console.log(context.dataItem.dragging);
        return {
            dragging: context.dataItem.dragging
        };
    };
    QuoteItemsListComponent.prototype.handleDragAndDrop = function () {
        var _this = this;
        var sub = new Subscription_1.Subscription(function () { });
        var draggedItemIndex;
        var tableRows = Array.from(document.querySelectorAll('.k-grid tr'));
        tableRows.forEach(function (item) {
            _this.renderer.setAttribute(item, 'draggable', 'true');
            var dragStart = fromEvent_1.fromEvent(item, 'dragstart');
            var dragOver = fromEvent_1.fromEvent(item, 'dragover');
            var dragEnd = fromEvent_1.fromEvent(item, 'dragend');
            sub.add(dragStart.pipe(tap_1.tap(function (_a) {
                var dataTransfer = _a.dataTransfer;
                try {
                    //console.log("dragStart");
                    var dragImgEl = document.createElement('span');
                    dragImgEl.setAttribute('style', 'position: absolute; display: block; top: 0; left: 0; width: 0; height: 0;');
                    document.body.appendChild(dragImgEl);
                    dataTransfer.setDragImage(dragImgEl, 0, 0);
                }
                catch (err) {
                    // IE doesn't support setDragImage
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer.setData('application/json', JSON.stringify({}));
                }
                catch (err) {
                    // IE doesn't support MIME types in setData
                }
            })).subscribe(function (_a) {
                var target = _a.target;
                //console.log("dragStartSubscrible");
                var row = target;
                draggedItemIndex = row.rowIndex;
                var dataItem = _this.gridData.data[draggedItemIndex];
                dataItem.dragging = true;
            }));
            sub.add(dragOver.subscribe(function (e) {
                //console.log("dragOver");
                e.preventDefault();
                var dataItem = _this.gridData.data.splice(draggedItemIndex, 1)[0];
                var dropIndex = closest(e.target, tableRow).rowIndex;
                var dropItem = _this.gridData.data[dropIndex];
                draggedItemIndex = dropIndex;
                _this.zone.run(function () {
                    return _this.gridData.data.splice(dropIndex, 0, dataItem);
                });
            }));
            sub.add(dragEnd.subscribe(function (e) {
                //console.log("dragEnd");
                e.preventDefault();
                var dataItem = _this.gridData.data[draggedItemIndex];
                dataItem.dragging = false;
                _this.setRank();
                _this.gridIsChanged();
                //this.showRankInConsole();
            }));
        });
        return sub;
    };
    //this function is for debugging purpose only
    QuoteItemsListComponent.prototype.showRankInConsole = function () {
        for (var _i = 0, _a = this.gridData.data; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("Product number:" + item.productNumber + " Rank:" + item.rank);
        }
    };
    QuoteItemsListComponent.prototype.setRank = function () {
        for (var i = 0; i < this.gridData.data.length; i++) {
            this.gridData.data[i].rank = i;
        }
        this.quoteItems.items = this.gridData.data;
    };
    QuoteItemsListComponent.prototype.validateQuantity = function (event) {
        this.gridIsModified = true;
        jQuery("#quoteItemsGrid .k-grid-toolbar").show();
        //alert("this.quoteItems.items[0].quantity: " + this.quoteItems.items[0].quantity
        //    + "\n this.originalQuoteItems[0].quantity: " + this.originalQuoteItems[0].quantity)
        var value = parseFloat(event.target.value);
        if (value == null || isNaN(value)) {
            event.target.value = 0;
        }
        else if ((value < 0) || (Math.floor(value) != value)) {
            event.target.value = 0;
            this.toastrSvc.ErrorFadeOut("Please enter an integer greater than zero.");
        }
    };
    QuoteItemsListComponent.prototype.saveChanges = function (grid) {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');
        this.quoteSvc.adjustQuoteItems(this.quoteItems).then(function (resp) {
            if (resp.isok) {
                // self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                _this.blockUI.stop();
                self.reloadDataEvent.emit();
                self.toastrSvc.displayResponseMessages(resp);
                self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                _this.blockUI.stop();
            }
        });
    };
    QuoteItemsListComponent.prototype.cancelChanges = function (grid) {
        this.reloadQuoteItems();
        //this.quoteItems.items = Object.assign({}, this.originalQuoteItems);
        //this.quoteItems.items = this.originalQuoteItems;
    };
    QuoteItemsListComponent.prototype.reloadQuote = function () {
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        self.quoteSvc.getQuote(self.quote.projectId, self.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                self.quote = resp.model;
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    QuoteItemsListComponent.prototype.reloadQuoteItems = function () {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');
        self.quoteSvc.getQuoteItemsModel(self.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                // self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                _this.blockUI.stop();
                self.quoteItems = resp.model;
                _this.gridData = kendo_data_query_1.process(_this.quoteItems.items, _this.state);
                self.gridIsModified = false;
                jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
            }
            else {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                _this.blockUI.stop();
            }
        }).catch(function (error) {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    QuoteItemsListComponent.prototype.productDetails = function (dataItem) {
        var _this = this;
        this.quoteSvc.setBasketQuoteId(this.quote.quoteId).then(function (resp) {
            if (resp.isok) {
                _this.router.navigate(['/product', { outlets: { 'productDetails': [dataItem.productId] } }], { queryParams: { activeTab: "product-overview" } });
            }
            else {
                _this.toastrSvc.displayResponseMessages(resp);
            }
        }).catch(function (error) {
            console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    QuoteItemsListComponent.prototype.hasOptionItems = function (dataItem, index) {
        return dataItem.lineItemTypeId == 2;
    };
    //Tag Editor
    QuoteItemsListComponent.prototype.openTagEditor = function (dataItem) {
        this.quoteItem = dataItem;
        this.oldTagsValue = this.quoteItem.tags;
        jQuery("#tagEditor").modal();
    };
    QuoteItemsListComponent.prototype.closeTagEditor = function () {
        this.quoteItem.tags = this.oldTagsValue;
    };
    QuoteItemsListComponent.prototype.saveTagUpdate = function () {
        var _this = this;
        var self = this;
        var data = {
            'QuoteId': this.quoteItem.quoteId,
            'Items': [this.quoteItem]
        };
        //self.loadingIconSvc.Start(jQuery("#quoteItemsGrid"));
        this.blockUI.start('Loading...');
        this.quoteSvc.adjustQuoteItems(data).then(function (resp) {
            if (resp.isok) {
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
                _this.blockUI.stop();
                self.toastrSvc.displayResponseMessages(resp);
                //self.oldTagsValue = self.quoteItem.tags;
            }
            else {
                self.toastrSvc.displayResponseMessages(resp);
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#quoteItemsGrid"));
            }
        }).catch(function (error) {
            console.log('Retrieval error: ${error}');
            console.log(error);
        });
    };
    QuoteItemsListComponent.prototype.gridIsChanged = function () {
        this.gridIsModified = true;
        jQuery("#quoteItemsGrid .k-grid-toolbar").show();
    };
    QuoteItemsListComponent.prototype.gridIsSaved = function () {
        this.gridIsModified = false;
        jQuery("#quoteItemsGrid .k-grid-toolbar").hide();
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], QuoteItemsListComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuoteItemsListComponent.prototype, "quote", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuoteItemsListComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], QuoteItemsListComponent.prototype, "quoteItems", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuoteItemsListComponent.prototype, "reloadDataEvent", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], QuoteItemsListComponent.prototype, "reloadQuoteEvent", void 0);
    __decorate([
        core_1.ViewChildren(option_items_component_1.OptionItemsComponent),
        __metadata("design:type", core_1.QueryList)
    ], QuoteItemsListComponent.prototype, "OptionItemsComponents", void 0);
    QuoteItemsListComponent = __decorate([
        core_1.Component({
            selector: "quote-items-list",
            templateUrl: "./quote-items-list.component.html",
            styleUrls: ["./quote-items-list.component.css"],
            encapsulation: core_1.ViewEncapsulation.None
            //styles: [`
            //    .k-grid tr.dragging {
            //        background-color: #99ccff;
            //    };
            //`]
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, quote_service_1.QuoteService,
            user_service_1.UserService, account_service_1.AccountService,
            kendo_angular_dialog_1.DialogService, enums_1.Enums,
            forms_1.FormBuilder,
            core_1.Renderer2, core_1.NgZone])
    ], QuoteItemsListComponent);
    return QuoteItemsListComponent;
}());
exports.QuoteItemsListComponent = QuoteItemsListComponent;
;
//# sourceMappingURL=quote-items-list.component.js.map