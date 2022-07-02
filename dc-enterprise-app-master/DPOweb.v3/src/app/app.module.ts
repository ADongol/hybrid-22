//Angular Modules
import { NgModule } from '@angular/core';

    //Added when upgraded Kendo UI & Angular 5 (3/26/2018)
import { HttpClientModule } from '@angular/common/http';
import { HttpModule, JsonpModule } from '@angular/http';

import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgForm } from '@angular/forms';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

//Services
import { CommonService } from './shared/services/common.service';
import { ToastrService } from './shared/services/toastr.service';
import { AccountService } from './account/services/account.service';
import { UserService } from './shared/services/user.service';
import { UserResolver } from './account/services/user-resolver.service';
import { CurrentUserResolver } from './account/services/user-resolver.service';
import { AddressService } from './address/services/address.service';
import { BaseErrorHandlerService } from './shared/services/base-error-handler.service';
import { WebConfigService } from './shared/services/webconfig.service';
import { EmailService } from './shared/services/email.service';

//Kendo Modules
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule, ExcelModule } from '@progress/kendo-angular-grid';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { AutoCompleteComponent } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogModule } from '@progress/kendo-angular-dialog';
import { UploadModule } from '@progress/kendo-angular-upload'; 

//BlockUI
import { BlockUIModule } from 'ng-block-ui';

import { FileSaver } from 'file-saver';

//Modules
import { DragulaModule } from 'ng2-dragula';
import { SharedModule } from './shared/shared.module';
//import { HomeModule } from './home/home.module';
//import { AccountModule } from './account/account.module';

//DPO Web Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

//import { HeaderButtonsComponent } from './shared/header/header-buttons.component';
import { HomeComponent } from './home/home.component'; 

//Account
import {
    LoginComponent, UserRegistrationComponent,
    RegistrationAcknowledgementComponent,
    UserRegistrationFAQComponent
} from './account/index';

import { ProjectTabsComponent } from './shared/projectTabs/project-tabs.component';
import { AddressComponent } from './address/address.component';

//Projects
import {
    ProjectService, ProjectResolver, ProjectQuotesResolver,
    ProjectEditComponent, ProjectInternalComponent, ProjectsComponent,
    ProjectGridComponent, TransferProjectPopupComponent, DeleteProjectsPopupComponent,
    ExportProjectsPopupComponent, ProjectComponent, ProjectPipelineNotesUpdateComponent,
    ProjectQuotesComponent
} from './project/index';

//Product
import {
    ProductService, ProductsComponent, ProductListComponent,
    ProductDetailsListViewComponent, ProductDetailsTableViewComponent, 
    ProductDetailsGridViewComponent, ProductImageComponent, ProductFamilyGridComponent,
    ProductSpecBarsComponent, ProductQuantityInputComponent, ProductQuantityAddComponent,
    ProductDetailsComponent, ProductOverviewComponent, ProductOverviewInfoComponent,
    RelatedDocsAndAssrComponent, ProductAccessoriesComponent, TechnicalSpecificationsComponent,
    TechnicalSpecificationsAccessoriesComponent, TechnicalSpecificationsOtherComponent,
    TechnicalSpecificationsSystemHPComponent
} from './product/index';

//Basket
import { BasketComponent } from './basket/basket.component';
import { BasketService } from './basket/services/basket.service';

//Quote
import {
    ActiveQuoteInfoComponent, AddImportProductsDialogComponent, ImportProductsDialogComponent,
    OptionItemsComponent, QuoteButtonBarComponent, QuoteCommissionRequestsComponent,
    QuoteDetailsComponent, QuoteDiscountRequestsComponent, QuoteEditComponent,
    QuoteItemsListComponent, QuoteOrdersComponent, QuoteComponent,
    SelectProductsDialogComponent, TagEditPopupComponent, QuoteService, 
    QuoteResolver, QuoteEditResolver, QuoteItemsResolver
} from './quote/index';

//Order
import {
    OrderComponent, OrderFormComponent, OrderFormQuoteItemsComponent,
    OrdersGridComponent, OrderItemProductsComponent,
    EditProjectLocationComponent, EditCustomerAddressComponent, EditSellerAddressComponent,
    OrderService, OrderResolver
} from './order/index';
 
//Discount
import { DiscountRequestService } from './discount/services/discountRequest.service';
import { DiscountRequestComponent } from './discount/discount-request.component';

//Commission Request
import { CommissionRequestService } from './commission/services/commissionRequest.service';
import { CalculateCommissionDialogComponent } from './commission/calculate-commission-dialog.component';
import { CommissionRequestComponent } from './commission/commission-request.component'

//tools 
import {
    LCSplitMatchupComponent, SplitMatchupDetailGridComponent, 
    SplitMatchupMasterGridComponent, FurnaceDDLComponent, MatchupDetailGridComponent,
    MatchupMasterGridComponent, UnitaryMatchupComponent, ToolListComponent,
    ToolListService, LCSplitMatchupService, UnitaryMatchupService,
    UnitaryMatchupResolver
} from './tools/index';

//Submittal Package
import {
    SubmittalPackageComponent, QuotePackageGridComponent, 
    AttachedFilesComponent, UploadFilesModalComponent, SubmittalPackageService
} from './submittal/index';

// Learning Management System Components
//import { LmsCatalogModule } from './lms-catalog/lms-catalog.module'
import { LmsCatalogGridComponent, LmsCatalogComponent, LmsCatalogService} from './lms-catalog/index';

//Redirect page
import { RedirectPageComponent } from './shared/redirect/redirect-page.component';

  
@NgModule({
  declarations: [
      AppComponent,
      //HeaderButtonsComponent,
      HomeComponent,
      LoginComponent,
      UserRegistrationComponent,
      RegistrationAcknowledgementComponent,
      UserRegistrationFAQComponent,
      ProjectTabsComponent,
      AddressComponent,
      ProjectEditComponent,
      ProjectInternalComponent,
      ProjectsComponent,
      ProjectGridComponent,
      TransferProjectPopupComponent,
      DeleteProjectsPopupComponent,
      ExportProjectsPopupComponent,
      ProjectComponent,
      ProjectPipelineNotesUpdateComponent,
      ProjectQuotesComponent,
      BasketComponent,
      ActiveQuoteInfoComponent,
      AddImportProductsDialogComponent,
      ImportProductsDialogComponent,
      OptionItemsComponent,
      QuoteButtonBarComponent,
      QuoteCommissionRequestsComponent,
      QuoteDetailsComponent,
      QuoteDiscountRequestsComponent,
      QuoteEditComponent,
      QuoteItemsListComponent,
      QuoteOrdersComponent,
      QuoteComponent,
      SelectProductsDialogComponent,
      TagEditPopupComponent,
      OrderComponent,
      OrderFormComponent,
      OrderFormQuoteItemsComponent,
      OrdersGridComponent,
      OrderItemProductsComponent,
      EditProjectLocationComponent,
      EditCustomerAddressComponent,
      EditSellerAddressComponent,
      DiscountRequestComponent,
      CommissionRequestComponent,
      CalculateCommissionDialogComponent,
      ProductsComponent,
      ProductListComponent,
      ProductDetailsListViewComponent,
      ProductDetailsTableViewComponent,
      ProductDetailsGridViewComponent,
      ProductImageComponent,
      ProductSpecBarsComponent,
      ProductQuantityInputComponent,
      ProductQuantityAddComponent,
      ProductDetailsComponent,
      ProductOverviewComponent,
      ProductOverviewInfoComponent,
      RelatedDocsAndAssrComponent,
      ProductAccessoriesComponent,
      TechnicalSpecificationsComponent,
      TechnicalSpecificationsAccessoriesComponent,
      TechnicalSpecificationsOtherComponent,
      TechnicalSpecificationsSystemHPComponent,
      BasketComponent,
      ProductFamilyGridComponent,
      ToolListComponent,
      UnitaryMatchupComponent,
      MatchupMasterGridComponent,
      MatchupDetailGridComponent,
      FurnaceDDLComponent,
      LCSplitMatchupComponent,
      SplitMatchupMasterGridComponent,
      SplitMatchupDetailGridComponent,
      SubmittalPackageComponent,
      QuotePackageGridComponent,
      AttachedFilesComponent,
      UploadFilesModalComponent,

      // LMS
      LmsCatalogComponent,
      LmsCatalogGridComponent,
      RedirectPageComponent
  ],
  imports: [
      SharedModule,
      //CommonModule,
      //FormsModule,
      //ReactiveFormsModule, 
       BrowserModule,
      BrowserAnimationsModule,
      HttpClientModule,
      HttpModule,
      JsonpModule,
      AppRoutingModule,   
      DragulaModule,

      ButtonsModule,
      LayoutModule,
      GridModule,
      ExcelModule,
      DropDownsModule,
      PopupModule,
      InputsModule,
      DateInputsModule,
      DialogModule,
      UploadModule,
      DragulaModule,
      BlockUIModule.forRoot(),

      //HomeModule,
      //AccountModule,
      //LmsCatalogModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },
      BaseErrorHandlerService,
      CommonService, 
      ToastrService,
      AccountService,
      UserService,
      UserResolver,
      CurrentUserResolver,
      AddressService,
      ProjectService,
      ProductService,
      ProjectResolver,
      ProjectQuotesResolver,
      QuoteService,
      QuoteResolver,
      QuoteEditResolver,
      QuoteItemsResolver,
      DiscountRequestService,
      CommissionRequestService,
      OrderService,
      OrderResolver,   
      BasketService,
      SubmittalPackageService,
      ToolListService,
      LCSplitMatchupService,
      UnitaryMatchupService,
      UnitaryMatchupResolver,
      

      // LMS
      LmsCatalogService,
      WebConfigService,
      EmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
