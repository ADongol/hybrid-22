"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//Angular Modules
var core_1 = require("@angular/core");
//Added when upgraded Kendo UI & Angular 5 (3/26/2018)
var http_1 = require("@angular/common/http");
var http_2 = require("@angular/http");
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
//Services
var common_service_1 = require("./shared/services/common.service");
var toastr_service_1 = require("./shared/services/toastr.service");
var account_service_1 = require("./account/services/account.service");
var user_service_1 = require("./shared/services/user.service");
var user_resolver_service_1 = require("./account/services/user-resolver.service");
var user_resolver_service_2 = require("./account/services/user-resolver.service");
var address_service_1 = require("./address/services/address.service");
var base_error_handler_service_1 = require("./shared/services/base-error-handler.service");
var webconfig_service_1 = require("./shared/services/webconfig.service");
var email_service_1 = require("./shared/services/email.service");
//Kendo Modules
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_grid_1 = require("@progress/kendo-angular-grid");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var kendo_angular_popup_1 = require("@progress/kendo-angular-popup");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var kendo_angular_dateinputs_1 = require("@progress/kendo-angular-dateinputs");
var kendo_angular_layout_1 = require("@progress/kendo-angular-layout");
var kendo_angular_dialog_1 = require("@progress/kendo-angular-dialog");
var kendo_angular_upload_1 = require("@progress/kendo-angular-upload");
//BlockUI
var ng_block_ui_1 = require("ng-block-ui");
//Modules
var ng2_dragula_1 = require("ng2-dragula");
var shared_module_1 = require("./shared/shared.module");
//import { HomeModule } from './home/home.module';
//import { AccountModule } from './account/account.module';
//DPO Web Components
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
//import { HeaderButtonsComponent } from './shared/header/header-buttons.component';
var home_component_1 = require("./home/home.component");
//Account
var index_1 = require("./account/index");
var project_tabs_component_1 = require("./shared/projectTabs/project-tabs.component");
var address_component_1 = require("./address/address.component");
//Projects
var index_2 = require("./project/index");
//Product
var index_3 = require("./product/index");
//Basket
var basket_component_1 = require("./basket/basket.component");
var basket_service_1 = require("./basket/services/basket.service");
//Quote
var index_4 = require("./quote/index");
//Order
var index_5 = require("./order/index");
//Discount
var discountRequest_service_1 = require("./discount/services/discountRequest.service");
var discount_request_component_1 = require("./discount/discount-request.component");
//Commission Request
var commissionRequest_service_1 = require("./commission/services/commissionRequest.service");
var calculate_commission_dialog_component_1 = require("./commission/calculate-commission-dialog.component");
var commission_request_component_1 = require("./commission/commission-request.component");
//tools 
var index_6 = require("./tools/index");
//Submittal Package
var index_7 = require("./submittal/index");
// Learning Management System Components
//import { LmsCatalogModule } from './lms-catalog/lms-catalog.module'
var index_8 = require("./lms-catalog/index");
//Redirect page
var redirect_page_component_1 = require("./shared/redirect/redirect-page.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                //HeaderButtonsComponent,
                home_component_1.HomeComponent,
                index_1.LoginComponent,
                index_1.UserRegistrationComponent,
                index_1.RegistrationAcknowledgementComponent,
                index_1.UserRegistrationFAQComponent,
                project_tabs_component_1.ProjectTabsComponent,
                address_component_1.AddressComponent,
                index_2.ProjectEditComponent,
                index_2.ProjectInternalComponent,
                index_2.ProjectsComponent,
                index_2.ProjectGridComponent,
                index_2.TransferProjectPopupComponent,
                index_2.DeleteProjectsPopupComponent,
                index_2.ExportProjectsPopupComponent,
                index_2.ProjectComponent,
                index_2.ProjectPipelineNotesUpdateComponent,
                index_2.ProjectQuotesComponent,
                basket_component_1.BasketComponent,
                index_4.ActiveQuoteInfoComponent,
                index_4.AddImportProductsDialogComponent,
                index_4.ImportProductsDialogComponent,
                index_4.OptionItemsComponent,
                index_4.QuoteButtonBarComponent,
                index_4.QuoteCommissionRequestsComponent,
                index_4.QuoteDetailsComponent,
                index_4.QuoteDiscountRequestsComponent,
                index_4.QuoteEditComponent,
                index_4.QuoteItemsListComponent,
                index_4.QuoteOrdersComponent,
                index_4.QuoteComponent,
                index_4.SelectProductsDialogComponent,
                index_4.TagEditPopupComponent,
                index_5.OrderComponent,
                index_5.OrderFormComponent,
                index_5.OrderFormQuoteItemsComponent,
                index_5.OrdersGridComponent,
                index_5.OrderItemProductsComponent,
                index_5.EditProjectLocationComponent,
                index_5.EditCustomerAddressComponent,
                index_5.EditSellerAddressComponent,
                discount_request_component_1.DiscountRequestComponent,
                commission_request_component_1.CommissionRequestComponent,
                calculate_commission_dialog_component_1.CalculateCommissionDialogComponent,
                index_3.ProductsComponent,
                index_3.ProductListComponent,
                index_3.ProductDetailsListViewComponent,
                index_3.ProductDetailsTableViewComponent,
                index_3.ProductDetailsGridViewComponent,
                index_3.ProductImageComponent,
                index_3.ProductSpecBarsComponent,
                index_3.ProductQuantityInputComponent,
                index_3.ProductQuantityAddComponent,
                index_3.ProductDetailsComponent,
                index_3.ProductOverviewComponent,
                index_3.ProductOverviewInfoComponent,
                index_3.RelatedDocsAndAssrComponent,
                index_3.ProductAccessoriesComponent,
                index_3.TechnicalSpecificationsComponent,
                index_3.TechnicalSpecificationsAccessoriesComponent,
                index_3.TechnicalSpecificationsOtherComponent,
                index_3.TechnicalSpecificationsSystemHPComponent,
                basket_component_1.BasketComponent,
                index_3.ProductFamilyGridComponent,
                index_6.ToolListComponent,
                index_6.UnitaryMatchupComponent,
                index_6.MatchupMasterGridComponent,
                index_6.MatchupDetailGridComponent,
                index_6.FurnaceDDLComponent,
                index_6.LCSplitMatchupComponent,
                index_6.SplitMatchupMasterGridComponent,
                index_6.SplitMatchupDetailGridComponent,
                index_7.SubmittalPackageComponent,
                index_7.QuotePackageGridComponent,
                index_7.AttachedFilesComponent,
                index_7.UploadFilesModalComponent,
                // LMS
                index_8.LmsCatalogComponent,
                index_8.LmsCatalogGridComponent,
                redirect_page_component_1.RedirectPageComponent
            ],
            imports: [
                shared_module_1.SharedModule,
                //CommonModule,
                //FormsModule,
                //ReactiveFormsModule, 
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                http_2.HttpModule,
                http_2.JsonpModule,
                app_routes_1.AppRoutingModule,
                ng2_dragula_1.DragulaModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_layout_1.LayoutModule,
                kendo_angular_grid_1.GridModule,
                kendo_angular_grid_1.ExcelModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                kendo_angular_popup_1.PopupModule,
                kendo_angular_inputs_1.InputsModule,
                kendo_angular_dateinputs_1.DateInputsModule,
                kendo_angular_dialog_1.DialogModule,
                kendo_angular_upload_1.UploadModule,
                ng2_dragula_1.DragulaModule,
                ng_block_ui_1.BlockUIModule.forRoot(),
            ],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                base_error_handler_service_1.BaseErrorHandlerService,
                common_service_1.CommonService,
                toastr_service_1.ToastrService,
                account_service_1.AccountService,
                user_service_1.UserService,
                user_resolver_service_1.UserResolver,
                user_resolver_service_2.CurrentUserResolver,
                address_service_1.AddressService,
                index_2.ProjectService,
                index_3.ProductService,
                index_2.ProjectResolver,
                index_2.ProjectQuotesResolver,
                index_4.QuoteService,
                index_4.QuoteResolver,
                index_4.QuoteEditResolver,
                index_4.QuoteItemsResolver,
                discountRequest_service_1.DiscountRequestService,
                commissionRequest_service_1.CommissionRequestService,
                index_5.OrderService,
                index_5.OrderResolver,
                basket_service_1.BasketService,
                index_7.SubmittalPackageService,
                index_6.ToolListService,
                index_6.LCSplitMatchupService,
                index_6.UnitaryMatchupService,
                index_6.UnitaryMatchupResolver,
                // LMS
                index_8.LmsCatalogService,
                webconfig_service_1.WebConfigService,
                email_service_1.EmailService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map