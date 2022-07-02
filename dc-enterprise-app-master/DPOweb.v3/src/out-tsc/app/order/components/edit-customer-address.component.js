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
var EditCustomerAddressComponent = /** @class */ (function () {
    function EditCustomerAddressComponent(router, route, toastrSvc, userSvc, enums, http, projectSvc, addressSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.addressSvc = addressSvc;
    }
    EditCustomerAddressComponent.prototype.ngOnInit = function () {
        this._project = jQuery.extend(true, {}, this.project);
    };
    EditCustomerAddressComponent.prototype.countryCodeChange = function (event) {
        var _this = this;
        var countryCode = event;
        this.addressSvc.getStatesByCountry(countryCode)
            .subscribe(function (resp) {
            if (resp.isok) {
                var states = resp.model;
                _this.project.customerAddress.states.items = resp.model.items;
                _this.project.customerAddress.stateId = null;
            }
        }, function (error) { console.log("Error: " + error); });
    };
    EditCustomerAddressComponent.prototype.stateChange = function (value) {
        if (value != null && value != 0) {
            for (var i = 0; i < this.project.customerAddress.states.items.length; i++) {
                if (this.project.customerAddress.states.items[i].value == value) {
                    this.project.customerAddress.stateName = this.project.customerAddress.states.items[i].text;
                }
            }
        }
        else {
            this.project.customerAddress.stateName = null;
        }
    };
    EditCustomerAddressComponent.prototype.cancel = function () {
        this.project.dealerContractorName = this._project.dealerContractorName;
        this.project.customerName = this._project.customerName;
        this.project.customerAddress.addressLine1 = this._project.customerAddress.addressLine1;
        this.project.customerAddress.addressLine2 = this._project.customerAddress.addressLine2;
        this.project.customerAddress.countryCode = this._project.customerAddress.countryCode;
        this.project.customerAddress.location = this._project.customerAddress.location;
        this.project.customerAddress.stateId = this._project.customerAddress.stateId;
        this.project.customerAddress.postalCode = this._project.customerAddress.postalCode;
        this.stateChange(this.project.customerAddress.stateId);
    };
    EditCustomerAddressComponent.prototype.submit = function () {
        var _this = this;
        //this.loadingIconSvc.Start(jQuery("#editCustomerAddressModal"));
        this.blockUI.start('Loading...');
        this._project = this.project; //Getting the latest edited ship to address to be applied, if user cancels without submitting.
        this.projectSvc.postProject(this.project)
            .subscribe(function (resp) {
            if (resp.isok) {
                //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
                _this.blockUI.stop();
                _this.toastrSvc.displayResponseMessagesFadeOut(resp);
                jQuery('#editCustomerAddressModal').modal('hide');
            }
            else {
                _this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
                _this.toastrSvc.displayResponseMessagesFadeOut(resp);
                jQuery('#editCustomerAddressModal').modal('hide');
            }
        }, function (err) {
            _this.blockUI.stop();
            //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
            jQuery('#editCustomerAddressModal').modal('hide');
            console.log("Error: ", err);
        });
    };
    __decorate([
        ng_block_ui_1.BlockUI(),
        __metadata("design:type", Object)
    ], EditCustomerAddressComponent.prototype, "blockUI", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EditCustomerAddressComponent.prototype, "project", void 0);
    EditCustomerAddressComponent = __decorate([
        core_1.Component({
            selector: 'edit-customer-address',
            templateUrl: './edit-customer-address.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, http_1.Http,
            project_service_1.ProjectService, address_service_1.AddressService])
    ], EditCustomerAddressComponent);
    return EditCustomerAddressComponent;
}());
exports.EditCustomerAddressComponent = EditCustomerAddressComponent;
;
//# sourceMappingURL=edit-customer-address.component.js.map