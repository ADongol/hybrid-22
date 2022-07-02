export class OrderConstants {

    /**********************
     * Orders Grid 
     **********************/
    public static get DATE_SELECTION_ERROR_MSG(): string {
        return "'From Date' can not be less than 'To Date'. Please, select another date range.";
    };

    public static get DATE_RANGE_ERROR_MSG(): string {
        return "Your selection returned large set of data. Please shorten your date range selection."
    };

    public static get EXPORT_TO_EXCEL_TITLE(): string {
        return "Export To Excel";
    };

    public static get EXPORT_TO_EXCEL_DIALOG_MSG(): string {
        return "Please select an export type:";
    };

     /**********************
     * Order Submit Form
     **********************/
    public static get CONFIRM_CONFIGURED_SUBMIT_MSG(): string {
        return "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>"
            + "<p>At the point model creation submittal is accepted, any changes or cancellations to an order with Factory Install Options will incur a 25% cancellation fee.</p>";
    };

    public static get SUBMIT_ORDER_CONFIRM_MSG(): string {
        return "<p>Are you sure you want to submit Order? <br/>No further changes will be available on this project after it has been submitted.</p>";
    };

    public static get BOOTBOX_ALERT_MSG(): string {
        return "<p>Thank you for submitting the order. Your Daikin Customer Service Representative will review the order and get back to you within 24 hours.<br/> <br/>To cancel the order, please contact your Daikin Customer Service Representative.</p>";
    };

    public static get CHECK_RELEASE_DATE(): string {
        return "Please enter order release date at least 28 days from today.";
    };

    public static get EXCEEDED_MAX_FILE_SIZE(): string {
        return "File has exceeded max allowed size of 3MB";
    };

    public static get PO_UPLOAD_URL(): string {
        return "/api/Order/UploadPOAttachment";
    };

    public static get ADDITIONAL_DOCS_UPLOAD_URL(): string {
        return "/api/Order/UploadAdditionalOrderDocs";
    };

    public static get REMOVE_UPLOADED_DOCS_URL(): string {
        return "/api/Order/RemoveUploadedDocsUrl";
    };
}