"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderConstants = /** @class */ (function () {
    function OrderConstants() {
    }
    Object.defineProperty(OrderConstants, "DATE_SELECTION_ERROR_MSG", {
        /**********************
         * Orders Grid
         **********************/
        get: function () {
            return "'From Date' can not be less than 'To Date'. Please, select another date range.";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "DATE_RANGE_ERROR_MSG", {
        get: function () {
            return "Your selection returned large set of data. Please shorten your date range selection.";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "EXPORT_TO_EXCEL_TITLE", {
        get: function () {
            return "Export To Excel";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "EXPORT_TO_EXCEL_DIALOG_MSG", {
        get: function () {
            return "Please select an export type:";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "CONFIRM_CONFIGURED_SUBMIT_MSG", {
        /**********************
        * Order Submit Form
        **********************/
        get: function () {
            return "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>"
                + "<p>At the point model creation submittal is accepted, any changes or cancellations to an order with Factory Install Options will incur a 25% cancellation fee.</p>";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "SUBMIT_ORDER_CONFIRM_MSG", {
        get: function () {
            return "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "BOOTBOX_ALERT_MSG", {
        get: function () {
            return "<p>Thank you for submitting the order. Your Daikin Customer Service Representative will review the order and get back to you within 24 hours.<br/> <br/>To cancel the order, please contact your Daikin Customer Service Representative.</p>";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "CHECK_RELEASE_DATE", {
        get: function () {
            return "Please enter order release date at least 28 days from today.";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "EXCEEDED_MAX_FILE_SIZE", {
        get: function () {
            return "File has exceeded max allowed size of 3MB";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "PO_UPLOAD_URL", {
        get: function () {
            return "/api/Order/UploadPOAttachment";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "ADDITIONAL_DOCS_UPLOAD_URL", {
        get: function () {
            return "/api/Order/UploadAdditionalOrderDocs";
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(OrderConstants, "REMOVE_UPLOADED_DOCS_URL", {
        get: function () {
            return "/api/Order/RemoveUploadedDocsUrl";
        },
        enumerable: true,
        configurable: true
    });
    ;
    return OrderConstants;
}());
exports.OrderConstants = OrderConstants;
//# sourceMappingURL=order-constants.js.map