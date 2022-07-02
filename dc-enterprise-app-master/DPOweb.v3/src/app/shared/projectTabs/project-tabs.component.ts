import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from '../services/toastr.service';
//import { LoadingIconService } from '../services/loadingIcon.service';
import { UserService } from '../services/user.service';
import { Enums } from '../enums/enums';

import { AccountService } from '../../account/services/account.service';
import { ProductService } from '../../product/services/product.service';

declare var jQuery: any;

@Component({
    selector: "project-tabs",
    templateUrl: "./project-tabs.component.html"
})
export class ProjectTabsComponent implements OnInit {
    public isAuthenticated: any = false;
    @Input() user: any;
    public canViewProject: boolean = false;


    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private productSvc: ProductService,
        private enums: Enums,
        //private loadingIconSvc: LoadingIconService,
    ) {

    }
    ngOnInit() {

        this.userSvc.isAuthenticated().then(this.isAuthenticatedCallBack.bind(this));
        this.canViewProject = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);
    }

    ngAfterViewInit() {
        //this.isAuthenticated = this.userSvc.userIsAuthenticated;
    }

    ngAfterViewChecked() {

        this.setupActiveTab();
    }

    public isAuthenticatedCallBack(resp: any) {
        if (resp.isok) {
            if (resp.model == true) {
                //setup user header menu
                this.isAuthenticated = true;
                this.userSvc.userIsAuthenticated = true;
                //this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));

            } else {
                //Go back to login page
                //window.location.href = "/Account/Login";

            }
        }
    }

    //Navigate to Product page and set BasketQuoteId = 0 
    public Products() {
        this.productSvc.products();
    }

    public setupActiveTab() {
        var hash = window.location.hash;

        if (hash == "#/overview") {
            jQuery("#overviewTab").addClass('selected').siblings().removeClass('selected');
        } else if ((hash == "#/projects") || hash.includes("#/projects/") || hash.includes("#/projectQuotes/") || hash.includes("#/projectEdit/") || hash.includes("#/projectCreate")) {
            jQuery("#projectsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash.includes("#/quote/") || hash.includes("#/quoteCreate/") || hash.includes("#/quoteEdit/")) {
            jQuery("#projectsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash.includes("#/orderForm/")) {
            jQuery("#projectsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash.includes("#/discountRequest/")) {
            jQuery("#projectsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash.includes("#/commissionRequest/")) {
            jQuery("#projectsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash.includes("#/tool")) {
            jQuery("#toolsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash == "#/product") {
            jQuery("#productsTab").addClass('selected').siblings().removeClass('selected');
        } else if (hash == "#/orders") {
            jQuery("#ordersTab").addClass('selected').siblings().removeClass('selected');
        }

        jQuery("#nav-bar li").click(function () {
            jQuery(this).addClass('selected').siblings().removeClass('selected');
        });
    }


};
