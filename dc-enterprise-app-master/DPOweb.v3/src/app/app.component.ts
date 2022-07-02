
import { Component, OnInit } from '@angular/core';
import {
    Router,
    // import as RouterEvent to avoid confusion with the DOM Event
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError
} from '@angular/router';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

//import { ROUTER_DIRECTIVES } from '@angular/router';
import { ToastrService } from './shared/services/toastr.service';
//import { LoadingIconService } from './shared/services/loadingIcon.service';

import { UserService } from './shared/services/user.service';
import { PasswordService } from './shared/services/password.service';

//import { ProductFamilyEnum } from './shared/enums/productFamilyEnum';
import { Enums } from './shared/enums/enums';
import { AccountService } from './account/services/account.service';
import { BusinessService } from './business/services/business.service';
import { UserResolver } from './account/services/user-resolver.service'; 

import { WebConfigService } from './shared/services/webconfig.service';
//import { OrderService } from './order/services/order.service';

//import { provideRouter, RouterConfig } from '@angular/router';
//import * as $ from 'jquery';
declare var jQuery: any;

@Component({
    selector: 'app-root',
    //templateUrl: 'app/app.component.html',
    templateUrl: './app.component.html',

    //directives: [ROUTER_DIRECTIVES, HeaderButtonsComponent, ProjectsComponent],
    providers: [
        ToastrService,
        //LoadingIconService,
        UserService,
        PasswordService,
        Enums,
        AccountService,
        BusinessService,
        UserResolver,
        //ProjectService,
        //ProductService,
        //OrderService,
        //SystemConfiguratorService,
        //SplitSystemConfiguratorService,
        //ToolsService,
        //BasketService,
        WebConfigService
    ]
})

export class AppComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;
    pageTitle: string = 'Daikin Project Office';

    public isAuthenticated = false;
    public currentUser: any;


    public loading = true;

    public webconfig: any;

    constructor(private router: Router, private toastrSvc: ToastrService,
        public userSvc: UserService,
        private webconfigSvc: WebConfigService, private passwordSvc: PasswordService,
        //private loadingIconSvc: LoadingIconService, 
    ) {
        //this.blockUI.start('Loading...'); // Start blocking

        //setTimeout(() => {
        //    this.blockUI.stop(); // Stop blocking
        //}, 2000);

        router.events.subscribe((event: RouterEvent) => {
            this.navigationInterceptor(event)
        })
    }

    ngOnChanges() {

    }

    ngOnInit() {

        //var hash = window.location.hash;
        //this.userSvc.isAuthenticated().then(this.isAuthenticatedCallBack.bind(this));

        this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));

        //Website testing message
        var self = this;
        this.webconfigSvc.getWebConfig().then((resp: any) => {
            self.webconfig = resp;
            if (self.webconfig.testMode.isTesting.toLowerCase() == 'true') {
                jQuery("#testModeModal").modal();
            }
        }).catch(error => {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    }

    ngAfterViewChecked() { }

    public getCurrentUserCallback(resp: any) {
        if (resp != null && resp != undefined) {
            if (resp.isok) {

                this.isAuthenticated = true;
                this.userSvc.userIsAuthenticated = true;

                this.currentUser = resp.model;
                this.userSvc.currentUser = resp.model;
                //this.setupActiveTab();

                for (let message of resp.messages.items) {
                    if (message.type == 40) {// success
                        this.toastrSvc.Success(message.text);
                    }
                }
            } else {
                this.isAuthenticated = false;
                this.userSvc.userIsAuthenticated = false;

                //resp is null
                //for (let message of resp.messages.items) {
                //    if (message.type == 10) {// error
                //        this.toastrSvc.Error(message.text);
                //    }
                //}
            }
        } else {
            this.isAuthenticated = false;
            this.userSvc.userIsAuthenticated = false;
        }
    }    

    navigationInterceptor(event: RouterEvent): void {
        if (event instanceof NavigationStart) {
            this.loading = true;
            //this.loadingIconSvc.Start(jQuery("#content"));
            this.blockUI.start('Loading...');
        }
        if (event instanceof NavigationEnd) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();
        }

        // Set loading state to false in both of the below events to hide the spinner in case a request fails
        if (event instanceof NavigationCancel) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();

        }
        if (event instanceof NavigationError) {
            this.loading = false;
            //this.loadingIconSvc.Stop(jQuery("#content"));
            this.blockUI.stop();
        }

    }
};

