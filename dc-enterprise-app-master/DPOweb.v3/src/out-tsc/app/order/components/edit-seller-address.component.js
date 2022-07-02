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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var ng_block_ui_1 = require("ng-block-ui");
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var project_service_1 = require("../../project/services/project.service");
var address_service_1 = require("../../address/services/address.service");
var EditSellerAddressComponent = /** @class */ (function () {
    function EditSellerAddressComponent(router, route, toastrSvc, userSvc, enums, http, projectSvc, addressSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.addressSvc = addressSvc;
    }
    EditSellerAddressComponent.prototype.ngOnInit = function () {
        this._project = jQuery.extend(true, {}, this.project);
    };
    EditSellerAddressComponent.prototype.countryCodeChange = function (event) {
        var _this = this;
        var countryCode = event;
        this.addressSvc.getStatesByCountry(countryCode)
            .subscribe(function (resp) {
            if (resp.isok) {
                var states = resp.model;
                _this.project.sellerAddress.states.items = resp.model.items;
                _this.project.sellerAddress.stateId = null;
            }
        }, function (error) { console.log("Error: " + error); });
    };
    EditSellerAddressComponent.prototype.stateChange = function (value) {
        if (value != null && value != 0) {
            for (var i = 0; i < this.project.sellerAddress.states.items.length; i++) {
                if (this.project.sellerAddress.states.items[i].value == value) {
                    this.project.sellerAddress.stateName = this.project.sellerAddress.states.items[i].text;
                }
            }
        }
        else {
            this.project.sellerAddress.stateName = null;
        }
    };
    EditSellerAddressComponent.prototype.cancel = function () {
        this._project = this.project;
        this.project.sellerName = this._project.sellerName;
        this.project.sellerAddress.addressLine1 = this._project.sellerAddress.addressLine1;
        this.project.sellerAddress.addressLine2 = this._project.sellerAddress.addressLine2;
        this.project.sellerAddress.countryCode = this._project.sellerAddress.countryCode;
        this.project.sellerAddress.location = this._project.sellerAddress.location;
        this.project.sellerAddress.stateId = this._project.sellerAddress.stateId;
        this.project.sellerAddress.postalCode = this._project.sellerAddress.postalCode;
        this.stateChange(this.project.sellerAddress.stateId);
    };
    EditSellerAddressComponent.prototype.submit = function () {
        var _this = this;
        //this.loadingIconSvc.Start(jQuery("#editSellerAddressModal"));
        this.blockUI.start('Loading...');
        this._project = this.project; //Getting the latest edited ship to address to be applied, if user cancels without submitting.
        this.projectSvc.postProject(this.project)
            .subscribe(function (resp) {
            if (resp.isok) {
                _this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#editSellerAddressModal"));
                _this.toastrSvc.displayResponseMessagesFadeOut(resp);
                jQuery('#editSellerAddressModal').modal('hide');
            }
            else {
                _this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#editSellerAddressModal"));
                _this.toastrSvc.displayResponseMessagesFadeOut(resp);
                jQuery('#editSellerAddressModal').modal('hide');
            }
        }, function (err) {
            _this.blockUI.stop();
            // this.loadingIconSvc.Stop(jQuery("#editSellerAddressModal"));
            jQuery('#editSellerAddressModal').modal('hide');
            console.log("Error: ", err);
        });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], EditSellerAddressComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditSellerAddressComponent.prototype, "project", void 0);
    EditSellerAddressComponent = __decorate([
        core_1.Component({
            selector: 'edit-seller-address',
            templateUrl: './edit-seller-address.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, http_1.Http,
            project_service_1.ProjectService, address_service_1.AddressService])
    ], EditSellerAddressComponent);
    return EditSellerAddressComponent;
}());
exports.EditSellerAddressComponent = EditSellerAddressComponent;
;
//# sourceMappingURL=edit-seller-address.component.js.map