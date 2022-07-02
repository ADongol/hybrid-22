"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { HomeModule } from './home/home.module';
//import { AccountModule } from './account/account.module';
var user_resolver_service_1 = require("./account/services/user-resolver.service");
var user_resolver_service_2 = require("./account/services/user-resolver.service");
var unitary_matchup_resolver_service_1 = require("./tools/services/unitary-matchup-resolver.service");
var home_component_1 = require("./home/home.component");
var login_component_1 = require("./account/components/login.component");
var user_registration_component_1 = require("./account/components/user-registration.component");
var registration_acknowledgement_component_1 = require("./account/components/registration-acknowledgement.component");
var user_registration_faq_component_1 = require("./account/components/user-registration-faq.component");
var project_resolver_service_1 = require("./project/services/project-resolver.service");
var project_resolver_service_2 = require("./project/services/project-resolver.service");
var project_edit_component_1 = require("./project/components/project-edit.component");
var project_component_1 = require("./project/components/project.component");
var projects_component_1 = require("./project/components/projects.component");
var quote_component_1 = require("./quote/components/quote.component");
var quote_edit_component_1 = require("./quote/components/quote-edit.component");
var quote_resolver_service_1 = require("./quote/services/quote-resolver.service");
var quote_resolver_service_2 = require("./quote/services/quote-resolver.service");
var quote_resolver_service_3 = require("./quote/services/quote-resolver.service");
var products_component_1 = require("./product/components/products.component");
var product_details_component_1 = require("./product/components/productDetails/product-details.component");
var unitary_matchup_component_1 = require("./tools/components/unitary-matchup-tool/unitary-matchup.component");
var lc_split_matchup_component_1 = require("./tools/components/lc-split-matchup-tool/lc-split-matchup.component");
var tool_list_component_1 = require("./tools/components/tool-list/tool-list.component");
var order_component_1 = require("./order/components/order.component");
var order_form_component_1 = require("./order/components/order-form.component");
var orders_grid_component_1 = require("./order/components/orders-grid.component");
var order_resolver_service_1 = require("./order/services/order-resolver.service");
var discount_request_component_1 = require("./discount/discount-request.component");
var commission_request_component_1 = require("./commission/commission-request.component");
var submittal_package_component_1 = require("./submittal/components/submittal-package.component");
var lms_catalog_grid_component_1 = require("./lms-catalog/components/lms-catalog-grid.component");
var redirect_page_component_1 = require("./shared/redirect/redirect-page.component");
var routes = [
    {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
        //loadChildren: () => HomeModule
        //loadChildren: 'app/home/home.module#HomeModule'
    },
    //{
    //    path: 'account',
    //    //loadChildren: () => AccountModule
    //    //loadChildren: 'app/account/account.module#AccountModule'
    //},
    {
        path: 'account',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            {
                path: 'userRegistration',
                component: user_registration_component_1.UserRegistrationComponent,
                //data: { pageTitle: 'User Registration' },
                resolve: { user: user_resolver_service_1.UserResolver }
            },
            {
                path: 'registrationAcknowledgement', component: registration_acknowledgement_component_1.RegistrationAcknowledgementComponent
            },
            {
                path: 'userRegistrationFAQ', component: user_registration_faq_component_1.UserRegistrationFAQComponent
            }
        ]
    },
    {
        path: 'projectCreate',
        component: project_edit_component_1.ProjectEditComponent,
        resolve: {
            projectModel: project_resolver_service_1.ProjectResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'projectEdit/:id',
        component: project_edit_component_1.ProjectEditComponent,
        resolve: {
            projectModel: project_resolver_service_1.ProjectResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'project/:id',
        component: project_component_1.ProjectComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver,
            projectModel: project_resolver_service_1.ProjectResolver,
            projectQuotesModel: project_resolver_service_2.ProjectQuotesResolver
        }
    },
    {
        path: 'projectQuotes/:id',
        component: project_component_1.ProjectComponent,
        resolve: {
            projectModel: project_resolver_service_1.ProjectResolver,
            projectQuotesModel: project_resolver_service_2.ProjectQuotesResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'quoteCreate/:projectid',
        component: quote_edit_component_1.QuoteEditComponent,
        resolve: {
            quoteModel: quote_resolver_service_2.QuoteEditResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'quoteEdit/:projectid/:quoteid',
        component: quote_edit_component_1.QuoteEditComponent,
        resolve: {
            quoteModel: quote_resolver_service_2.QuoteEditResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'quote/:id/:recordState',
        component: quote_component_1.QuoteComponent,
        resolve: {
            quoteModel: quote_resolver_service_1.QuoteResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'quoteItems/:id/:recordState',
        component: quote_component_1.QuoteComponent,
        resolve: {
            quoteModel: quote_resolver_service_1.QuoteResolver,
            quoteItems: quote_resolver_service_3.QuoteItemsResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'product',
        component: products_component_1.ProductsComponent,
        children: [
            //{ path: 'list', component: ProductListComponent, outlet: 'productList' },
            { path: ':id', component: product_details_component_1.ProductDetailsComponent, outlet: 'productDetails' }
        ],
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'tools',
        component: tool_list_component_1.ToolListComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'tools/unitaryMatchup',
        component: unitary_matchup_component_1.UnitaryMatchupComponent,
        resolve: {
            tonnageList: unitary_matchup_resolver_service_1.UnitaryMatchupResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'tools/lcSplitMatchup',
        component: lc_split_matchup_component_1.LCSplitMatchupComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'discountRequest/:discountRequestId/:projectId/:quoteId',
        component: discount_request_component_1.DiscountRequestComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'commissionRequest/:commissionRequestId/:projectId/:quoteId',
        component: commission_request_component_1.CommissionRequestComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'order',
        component: order_component_1.OrderComponent
    },
    {
        path: 'orders',
        component: orders_grid_component_1.OrdersGridComponent,
        resolve: {
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'orderForm/:projectid/:quoteid/:recordState',
        component: order_form_component_1.OrderFormComponent,
        resolve: {
            orderFormModel: order_resolver_service_1.OrderResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'submittalPackage/:projectid/:quoteid',
        component: submittal_package_component_1.SubmittalPackageComponent,
        resolve: {
            quoteModel: quote_resolver_service_2.QuoteEditResolver,
            currentUser: user_resolver_service_2.CurrentUserResolver
        }
    },
    {
        path: 'lms-catalog',
        component: lms_catalog_grid_component_1.LmsCatalogGridComponent
    },
    {
        path: 'redirect',
        component: redirect_page_component_1.RedirectPageComponent
    }
];
exports.AppRoutingModule = router_1.RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });
//# sourceMappingURL=app.routes.js.map