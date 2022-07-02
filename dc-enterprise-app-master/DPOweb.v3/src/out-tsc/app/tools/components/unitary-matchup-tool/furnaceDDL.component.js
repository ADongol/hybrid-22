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
var toastr_service_1 = require("../../../shared/services/toastr.service");
var user_service_1 = require("../../../shared/services/user.service");
var product_service_1 = require("../../../product/services/product.service");
var basket_service_1 = require("../../../basket/services/basket.service");
var unitary_matchup_service_1 = require("../../services/unitary-matchup.service");
var FurnaceDDLComponent = /** @class */ (function () {
    function FurnaceDDLComponent(router, toastrSvc, userSvc, productSvc, basketSvc, unitaryMatchupSvc) {
        this.router = router;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.productSvc = productSvc;
        this.basketSvc = basketSvc;
        this.unitaryMatchupSvc = unitaryMatchupSvc;
        //@Input() seer: any;
        //@Input() indoorUnitType: any;
        //@Input() outDoorUnitType: any;
        //@Input() userBasket: any;
        this.furnaceSelectedEvent = new core_1.EventEmitter();
        //public system: any; // system to be added to quote
        this.furnaceList = [];
        this.defaultItem = { text: "Select item...", value: null, fit: "N/A", afue: "N/A" };
    }
    FurnaceDDLComponent.prototype.ngOnInit = function () {
        var _this = this;
        var t = this.rowItem;
        var s = this.rowIndex;
        var params = this.mapParams();
        this.unitaryMatchupSvc.getEEPFurnaceList(params).then(function (resp) {
            if (!resp.error) {
                var furnaces = resp.result.eEFurnaceMatchUpList;
                for (var i in furnaces) {
                    //decode fit values
                    if (furnaces[i].fit != undefined && furnaces[i].fit != null) {
                        if (furnaces[i].fit == 0) {
                            furnaces[i].fit = "Flush";
                        }
                        else if (furnaces[i].fit == 1) {
                            furnaces[i].fit = "1.75";
                        }
                    }
                    var item = { text: furnaces[i].furnace_Model, value: furnaces[i].furnace_Model, fit: furnaces[i].fit, afue: furnaces[i].afue };
                    _this.furnaceList.push(item);
                }
            }
            else {
            }
        });
    };
    FurnaceDDLComponent.prototype.mapParams = function () {
        var params = {};
        params = {
            "user": "",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikin",
            "servicesName": "doGetEEPFurnacesList",
            "accountId": "goodman1",
            "params": {
                "aRIRefNumber": this.rowItem.arirefNumber,
                "coil": this.rowItem.coill_Model,
                "coilWidth": this.rowItem.coil_Width,
                "coilValue": this.rowItem.coil_Value,
                "airFlow": this.rowItem.airFlow,
                "minAfue": this.rowItem.minAfue == undefined ? "" : this.rowItem.afue,
                "maxAfue": this.rowItem.maxAfue == undefined ? "" : this.rowItem.afue,
                "fit": this.rowItem.fit == "N/A" ? "" : this.rowItem.fit,
                "model": this.rowItem.modelNumber,
                "tonnage": this.rowItem.tonnage,
                "txv": this.rowItem.txv,
                "seer": this.rowItem.seer,
                "eer": this.rowItem.eer,
                "cooling": this.rowItem.cooling,
                "status": this.rowItem.status
            }
        };
        return params;
    };
    FurnaceDDLComponent.prototype.PSCFunarceChange = function (selectedItem) {
        //var eventParams = {
        //    'selectedItem': selectedItem,
        //    'rowItem': this.rowItem,
        //    'rowIndex': this.rowIndex
        //}
        this.rowItem.furnace_Model = selectedItem.value;
        this.furnaceSelectedEvent.emit(selectedItem);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FurnaceDDLComponent.prototype, "rowItem", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FurnaceDDLComponent.prototype, "rowIndex", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FurnaceDDLComponent.prototype, "furnaceSelectedEvent", void 0);
    FurnaceDDLComponent = __decorate([
        core_1.Component({
            selector: 'furnaceDDL',
            templateUrl: './furnaceDDL.component.html',
            providers: [unitary_matchup_service_1.UnitaryMatchupService]
        }),
        __metadata("design:paramtypes", [router_1.Router, toastr_service_1.ToastrService,
            user_service_1.UserService,
            product_service_1.ProductService, basket_service_1.BasketService,
            unitary_matchup_service_1.UnitaryMatchupService])
    ], FurnaceDDLComponent);
    return FurnaceDDLComponent;
}());
exports.FurnaceDDLComponent = FurnaceDDLComponent;
//# sourceMappingURL=furnaceDDL.component.js.map