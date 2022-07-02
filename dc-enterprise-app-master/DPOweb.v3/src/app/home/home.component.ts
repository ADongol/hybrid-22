import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

import { ToastrService } from '../shared/services/toastr.service';
import { UserService } from '../shared/services/user.service';
import { AccountService } from '../account/services/account.service';
import { Enums } from '../shared/enums/enums';
import { WebConfigService } from '../shared/services/webconfig.service';
declare var jQuery: any;

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
    public links: any = [];
    public user: any;

    public canViewProjects: boolean = false;
    public canEditProjects: boolean = false;
    public canViewOrders: boolean = false;
    public canViewUsers: boolean = false;
    public canManageGroups: boolean = false;
    public canViewBusiness: boolean = false;
    public canAccessLibrary: boolean = false;

    public userInPendingStatus: boolean = false;
    public webconfig: any;

    constructor (private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private enums: Enums, private http: Http,
        private webconfigSvc: WebConfigService ) 
    {
        this.user = this.route.snapshot.data['currentUser'].model;
    }

    ngOnInit() {
        //debugger
        //document.location.href = "/";
        this.preventDisplayMenuCloseOnClick();

        this.canViewProjects = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewProject);
        this.canEditProjects = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.EditProject);
        this.canViewOrders = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewOrder);

        this.canViewUsers = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewUsers);
        this.canManageGroups = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ManageGroups);
        this.canViewBusiness = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ViewBusiness);

        this.userInPendingStatus = this.userSvc.checkUserStatus(this.user);

        this.getLinks();
        this.accountSvc.resetBasketQuoteId();
    }

    getLinks() {

        this.links = [{
            text: "Library",
            image: "/v3/src/assets/images/library.png",
            altText: "library",
            url: "/Library",
            show: true
        },  {
            text: "University",
            image: "/v3/src/assets/images/university.png",
            altText: "Home",
            url: "/Training",
            show: true
        }, {
            text: "User Manual",
            image: "/v3/src/assets/images/user_manual.png",
            altText: "Home",
            url: "/Content/pdf/DaikinCityUserGuide.pdf",
            show: true
        }]

        if (!this.userInPendingStatus) {
            var productNode = {
                text: "Products",
                image: "/v3/src/assets/images/products.png",
                altText: "Products",
                url: "/v3/#/product",
                show: true
            };

            this.links.push(productNode);

            var toolsNode = {
                text: "Tools",
                image: "/v3/src/assets/images/tools.png",
                altText: "Home",
                url: "/v3/#/tools",
                show: true
            };

            this.links.push(toolsNode);
        }

        if (this.canViewProjects || this.canEditProjects) {
            var projectNode = {
                text: "Projects",
                image: "/v3/src/assets/images/projects.png",
                altText: "Projects",
                url: "/v3/#/projects",
                show: true
            };
            this.links.splice(1, 0, projectNode);

            var overviewNode = {
                text: "Reports",
                image: "/v3/src/assets/images/reporting.png",
                altText: "Reports",
                url: "/ProjectDashboard/Overview",
                show: true
            }

            this.links.splice(3, 0, overviewNode);
        }

        if (this.canViewOrders) {
            var orderNode = {
                text: "Orders",
                image: "/v3/src/assets/images/orders.png",
                altText: "Orders",
                url: "/v3/#/orders",
                show: true
            };
            this.links.splice(4, 0, orderNode);
        }

        if (this.canViewUsers || this.canViewBusiness || this.canManageGroups) {
            if (this.canViewUsers) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/users/",
                    show: true
                }
                this.links.push(managementNode);
            } else if (this.canViewBusiness) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/businesses/",
                    show: true
                }
                this.links.push(managementNode);
            } else if (this.canManageGroups) {
                var managementNode = {
                    text: "Management",
                    image: "/v3/src/assets/images/management.png",
                    altText: "Management",
                    url: "/Userdashboard/groups/",
                    show: true
                }
                this.links.push(managementNode);
            }
        }
    }

    //browseProducts() {
    //    this.accountSvc.resetBasketQuoteId()
    //        .then((resp: any) => {
    //            if (resp.isok) {
    //                this.router.navigateByUrl("/product");
    //            }
    //        }).catch(error => {
    //            console.log(error);
    //        });

    //}

    preventDisplayMenuCloseOnClick() {
        jQuery('.dropdown-menu').on('click', function (e) {
            if (jQuery(this).hasClass('display-menu')) {
                e.stopPropagation();
            }
        });
    }
};

