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
var toastr_service_1 = require("../../shared/services/toastr.service");
var user_service_1 = require("../../shared/services/user.service");
var enums_1 = require("../../shared/enums/enums");
var project_service_1 = require("../../project/services/project.service");
var order_service_1 = require("../services/order.service");
var order_constants_1 = require("../order-constants");
var MAX_PO_FILE_SIZE = 1000000;
var MAX_ADDITIONAL_DOCS_SIZE = 3000000;
var INVALID_MAX_FILE_SIZE = "invalidMaxFileSize";
var OrderFormComponent = /** @class */ (function () {
    function OrderFormComponent(router, route, toastrSvc, userSvc, enums, http, projectSvc, orderSvc) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.enums = enums;
        this.http = http;
        this.projectSvc = projectSvc;
        this.orderSvc = orderSvc;
        this.isOrderSubmitted = false;
        this.additionalDocsFileSize = 0;
        this.fileSizeRestrictions = {
            maxFileSize: MAX_ADDITIONAL_DOCS_SIZE
        };
        //restriction of file size for po attachment
        this.poFileSizeRestriction = {
            maxFileSize: MAX_PO_FILE_SIZE
        };
        this.user = this.route.snapshot.data['currentUser'].model;
        this.order = this.route.snapshot.data['orderFormModel'].model;
        this.recordState = this.route.snapshot.paramMap.get('recordState');
        if (this.recordState == "new") {
            if (this.order.hasConfiguredModel) {
                this.releaseDateMin = new Date();
                this.releaseDateMin.setDate((new Date()).getDate() + 28);
                this.order.orderReleaseDate = this.releaseDateMin;
                //this.order.orderReleaseDate = new Date();
                //this.order.orderReleaseDate.setDate((new Date()).getDate() + 28);
            }
            else {
                this.order.orderReleaseDate = null;
            }
        }
        else { // submitted
            this.order.orderReleaseDate = new Date(Date.parse(this.order.orderReleaseDate));
            this.additionalDocsArray = this.order.additionalDocsAttachment;
        }
        //immediate api calls for upload and remove of po attachments
        this.poUploadUrl = order_constants_1.OrderConstants.PO_UPLOAD_URL;
        this.additionalDocsUploadUrl = order_constants_1.OrderConstants.ADDITIONAL_DOCS_UPLOAD_URL;
        this.removeUploadedDocsUrl = order_constants_1.OrderConstants.REMOVE_UPLOADED_DOCS_URL;
    }
    OrderFormComponent.prototype.ngOnInit = function () {
        //this.recordState = this.route.snapshot.paramMap.get('recordState');
        var _this = this;
        //Check if this order has been submitted.
        //If not submitted, remove all po attachment related docs if any uploaded
        this.orderSvc.checkIfOrderIsSubmitted(this.order.quoteId)
            .subscribe(function (resp) {
            if (resp.isok)
                _this.isOrderSubmitted = true;
        });
        if (!this.isOrderSubmitted) {
            this.orderSvc.removeUploadedDocsOnCancel(this.order.quoteId)
                .subscribe(function (resp) { return console.log(resp); });
        }
    };
    OrderFormComponent.prototype.selectEventHandler = function (e) {
        this.order.poAttachmentFileName = e.files[0].name;
    };
    OrderFormComponent.prototype.uploadEventHandler = function (e) {
        e.data = {
            QuoteId: this.order.quoteId,
        };
    };
    OrderFormComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            //console.log("The " + e.operation + " was successful!");
        }
    };
    OrderFormComponent.prototype.removeEventHandler = function (e) {
        e.data = {
            QuoteId: this.order.quoteId,
            FileName: e.files[0].name
        };
    };
    OrderFormComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    OrderFormComponent.prototype.submit = function () {
        this.order.shipToName = this.order.project.shipToName;
        var self = this;
        if (self.order.hasConfiguredModel) {
            this.submitConfirmMessage = order_constants_1.OrderConstants.CONFIRM_CONFIGURED_SUBMIT_MSG;
        }
        else {
            this.submitConfirmMessage = order_constants_1.OrderConstants.SUBMIT_ORDER_CONFIRM_MSG;
        }
        if (self.additionalDocsAttachment != undefined || self.additionalDocsAttachment != null) {
            if (self.additionalDocsAttachment.length > 0) {
                this.order.additionalDocsAttachment = self.additionalDocsAttachment.map(function (x) { return x.name; });
            }
        }
        bootbox.confirm(self.submitConfirmMessage, function (result) {
            if (result) {
                bootbox.dialog({
                    message: '<div class="text-center"><i class="fa fa-spin fa-spinner"></i> Order processing ...</div>'
                });
                //Post Order
                self.orderSvc.postOrder(self.order)
                    .subscribe(function (resp) {
                    if (resp.isok) {
                        bootbox.hideAll();
                        //Send order email notification
                        self.orderSvc.sendOrderEmail(self.order).subscribe();
                        bootbox.alert(order_constants_1.OrderConstants.BOOTBOX_ALERT_MSG, function () {
                            self.router.navigateByUrl("/quote/" + self.order.quoteId + "/existingRecord");
                        });
                    }
                    else {
                        bootbox.hideAll();
                        self.toastrSvc.displayResponseMessages(resp);
                    }
                }, function (err) { console.log("Error: ", err); });
            }
        });
    };
    //when user cancels, remove all the files or attachment that might have been uploaded
    OrderFormComponent.prototype.onCancel = function () {
        this.orderSvc.removeUploadedDocsOnCancel(this.order.quoteId)
            .subscribe(function (resp) { return console.log(resp); });
        this.router.navigateByUrl("/quote/" + this.order.quoteId + "/existingRecord");
    };
    //for testing purpose
    OrderFormComponent.prototype.sendOrderEmail = function () {
        this.orderSvc.sendOrderEmail(this.order).subscribe();
    };
    OrderFormComponent.prototype.stateChange = function (value) {
        for (var i = 0; i < this.order.project.shipToAddress.states.items.length; i++) {
            if (this.order.project.shipToAddress.states.items[i].value == value) {
                this.order.project.shipToAddress.stateName = this.order.project.shipToAddress.states.items[i].text;
            }
        }
    };
    OrderFormComponent.prototype.checkReleaseDate = function () {
        if (this.order.hasConfiguredModel && (this.order.orderReleaseDate < this.releaseDateMin)) {
            this.toastrSvc.ErrorFadeOut(order_constants_1.OrderConstants.CHECK_RELEASE_DATE);
        }
    };
    OrderFormComponent = __decorate([
        core_1.Component({
            selector: 'order-form',
            templateUrl: './order-form.component.html',
            styleUrls: ["./order-form.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, user_service_1.UserService,
            enums_1.Enums, http_1.Http,
            project_service_1.ProjectService, order_service_1.OrderService])
    ], OrderFormComponent);
    return OrderFormComponent;
}());
exports.OrderFormComponent = OrderFormComponent;
;
//# sourceMappingURL=order-form.component.js.map