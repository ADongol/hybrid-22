
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//import { HomeModule } from './home/home.module';
//import { AccountModule } from './account/account.module';

import { UserResolver } from './account/services/user-resolver.service';
import { CurrentUserResolver } from './account/services/user-resolver.service';
import { UnitaryMatchupResolver } from './tools/services/unitary-matchup-resolver.service';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './account/components/login.component';
import { UserRegistrationComponent } from './account/components/user-registration.component';
import { RegistrationAcknowledgementComponent } from './account/components/registration-acknowledgement.component';
import { UserRegistrationFAQComponent } from './account/components/user-registration-faq.component';

import { ProjectResolver } from './project/services/project-resolver.service';
import { ProjectQuotesResolver } from './project/services/project-resolver.service';
import { ProjectEditComponent } from './project/components/project-edit.component';
import { ProjectComponent } from './project/components/project.component';
import { ProjectsComponent } from './project/components/projects.component';

import { QuoteComponent } from './quote/components/quote.component';
import { QuoteEditComponent } from './quote/components/quote-edit.component';
import { QuoteResolver } from './quote/services/quote-resolver.service';
import { QuoteEditResolver } from './quote/services/quote-resolver.service';
import { QuoteItemsResolver } from './quote/services/quote-resolver.service';

import { ProductsComponent } from './product/components/products.component';
import { ProductListComponent } from './product/components/productList.component';
import { ProductDetailsComponent } from './product/components/productDetails/product-details.component';

import { UnitaryMatchupComponent } from './tools/components/unitary-matchup-tool/unitary-matchup.component';
import { LCSplitMatchupComponent } from './tools/components/lc-split-matchup-tool/lc-split-matchup.component';
import { ToolListComponent } from './tools/components/tool-list/tool-list.component';

import { OrderComponent } from './order/components/order.component';
import { OrderFormComponent } from './order/components/order-form.component';
import { OrdersGridComponent } from './order/components/orders-grid.component';
import { OrderResolver } from './order/services/order-resolver.service';

import { DiscountRequestComponent } from './discount/discount-request.component';
import { CommissionRequestComponent } from './commission/commission-request.component'
import { SubmittalPackageComponent } from './submittal/components/submittal-package.component';

import { LmsCatalogGridComponent } from './lms-catalog/components/lms-catalog-grid.component'

import { RedirectPageComponent } from './shared/redirect/redirect-page.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        resolve: {
            currentUser: CurrentUserResolver
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
            { path: 'login', component: LoginComponent },
            {
                path: 'userRegistration',
                component: UserRegistrationComponent,
                //data: { pageTitle: 'User Registration' },
                resolve: { user: UserResolver }
            },
            {
                path: 'registrationAcknowledgement', component: RegistrationAcknowledgementComponent
            },
            {
                path: 'userRegistrationFAQ', component: UserRegistrationFAQComponent
            }
            
        ]
    },
    {
        path: 'projectCreate',
        component: ProjectEditComponent,
        resolve: {
            projectModel: ProjectResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'projectEdit/:id',
        component: ProjectEditComponent,
        resolve: {
            projectModel: ProjectResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'project/:id',
        component: ProjectComponent,
        resolve: {
            currentUser: CurrentUserResolver,
            projectModel: ProjectResolver,
            projectQuotesModel: ProjectQuotesResolver

        }
    },
    {
        path: 'projectQuotes/:id',
        component: ProjectComponent,
        resolve: {
            projectModel: ProjectResolver,
            projectQuotesModel: ProjectQuotesResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'projects',
        component: ProjectsComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'quoteCreate/:projectid',
        component: QuoteEditComponent,
        resolve: {
            quoteModel: QuoteEditResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'quoteEdit/:projectid/:quoteid',
        component: QuoteEditComponent,
        resolve: {
            quoteModel: QuoteEditResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'quote/:id/:recordState',
        component: QuoteComponent,
        resolve: {
            quoteModel: QuoteResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'quoteItems/:id/:recordState',
        component: QuoteComponent,
        resolve: {
            quoteModel: QuoteResolver,
            quoteItems: QuoteItemsResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'product',
        component: ProductsComponent

        , children: [
            //{ path: 'list', component: ProductListComponent, outlet: 'productList' },
            { path: ':id', component: ProductDetailsComponent, outlet: 'productDetails' }
        ],
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'tools',
        component: ToolListComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'tools/unitaryMatchup',
        component: UnitaryMatchupComponent,
        resolve: {
            tonnageList: UnitaryMatchupResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'tools/lcSplitMatchup',
        component: LCSplitMatchupComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'discountRequest/:discountRequestId/:projectId/:quoteId',
        component: DiscountRequestComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'commissionRequest/:commissionRequestId/:projectId/:quoteId',
        component: CommissionRequestComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'order',
        component: OrderComponent
    },
    {
        path: 'orders',
        component: OrdersGridComponent,
        resolve: {
            currentUser: CurrentUserResolver
        }
    },

    {
        path: 'orderForm/:projectid/:quoteid/:recordState',
        component: OrderFormComponent,
        resolve: {
            orderFormModel: OrderResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'submittalPackage/:projectid/:quoteid',
        component: SubmittalPackageComponent,
        resolve: {
            quoteModel: QuoteEditResolver,
            currentUser: CurrentUserResolver
        }
    },
    {
        path: 'lms-catalog',
        component: LmsCatalogGridComponent
    },
    {
        path: 'redirect',
        component: RedirectPageComponent
    }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' });