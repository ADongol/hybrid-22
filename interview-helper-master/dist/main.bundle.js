webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<header>\n    <app-navbar></app-navbar>  \n    <div class=\"wrapper\">\n        <app-sidebar></app-sidebar>\n    </div>  \n    \n</header>\n<main>\n    \n    <div class=\"main-panel\">\n        <block-ui></block-ui>\n        <router-outlet></router-outlet>\n        \n    </div>\n    \n</main>\n<footer>\n    <app-footer></app-footer>\n</footer>\n\n\n\n<!-- <app-navbar></app-navbar>\n<div class=\"main-panel\">\n    <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\" data-image=\"../assets/img/sidebar-1.jpg\">\n        <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n    </div>\n<app-footer></app-footer>\n</div> -->\n \n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "header {\n  position: fixed;\n  top: 0px;\n  width: 100vw;\n  z-index: 10; }\n\nmain {\n  margin-top: 64px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationStart */]) {
                _this.blockUI.start();
            }
            else if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.blockUI.stop();
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["a" /* BlockUI */])(),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "blockUI", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__ = __webpack_require__("./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ui_carousel__ = __webpack_require__("./node_modules/ui-carousel/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ui_carousel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ui_carousel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_contact_list_contact_list_component__ = __webpack_require__("./src/app/components/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_typography_typography_component__ = __webpack_require__("./src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_icons_icons_component__ = __webpack_require__("./src/app/components/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__ = __webpack_require__("./src/app/components/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_notifications_notifications_component__ = __webpack_require__("./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_upgrade_upgrade_component__ = __webpack_require__("./src/app/components/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_topic_topic_list_topic_list_component__ = __webpack_require__("./src/app/components/topic/topic-list/topic-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_topic_topic_search_topic_search_component__ = __webpack_require__("./src/app/components/topic/topic-search/topic-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_articles_article_search_article_search_component__ = __webpack_require__("./src/app/components/articles/article-search/article-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_components_module__ = __webpack_require__("./src/app/components/components.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__layouts_admin_layout_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_topic_service__ = __webpack_require__("./src/app/services/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_filter_text_service__ = __webpack_require__("./src/app/services/filter-text.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_20__app_routing__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng_block_ui__["b" /* BlockUIModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ui_carousel__["UICarouselModule"],
                __WEBPACK_IMPORTED_MODULE_22__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["k" /* ReactiveFormsModule */]
                // AgmCoreModule.forRoot({
                //   apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
                // })
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__layouts_admin_layout_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_contact_list_contact_list_component__["a" /* ContactListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_typography_typography_component__["a" /* TypographyComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_icons_icons_component__["a" /* IconsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_maps_maps_component__["a" /* MapsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_notifications_notifications_component__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_upgrade_upgrade_component__["a" /* UpgradeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_topic_topic_list_topic_list_component__["a" /* TopicListComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_topic_topic_search_topic_search_component__["a" /* TopicSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_articles_article_search_article_search_component__["a" /* ArticleSearchComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_login_login_component__["a" /* LoginComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_25__services_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_26__services_topic_service__["a" /* TopicService */],
                __WEBPACK_IMPORTED_MODULE_28__services_filter_text_service__["a" /* FilterService */],
                __WEBPACK_IMPORTED_MODULE_27__services_article_service__["a" /* ArticleService */],
                __WEBPACK_IMPORTED_MODULE_29__services_pager_service__["a" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_31__guards_auth_guard__["a" /* AuthGuard */],
                //AlertService,
                __WEBPACK_IMPORTED_MODULE_30__services_authentication_service__["a" /* AuthenticationService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_user_profile_user_profile_component__ = __webpack_require__("./src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_contact_list_contact_list_component__ = __webpack_require__("./src/app/components/contact-list/contact-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_typography_typography_component__ = __webpack_require__("./src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_icons_icons_component__ = __webpack_require__("./src/app/components/icons/icons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_maps_maps_component__ = __webpack_require__("./src/app/components/maps/maps.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_notifications_notifications_component__ = __webpack_require__("./src/app/components/notifications/notifications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_upgrade_upgrade_component__ = __webpack_require__("./src/app/components/upgrade/upgrade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_topic_topic_list_topic_list_component__ = __webpack_require__("./src/app/components/topic/topic-list/topic-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_topic_topic_search_topic_search_component__ = __webpack_require__("./src/app/components/topic/topic-search/topic-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_articles_article_search_article_search_component__ = __webpack_require__("./src/app/components/articles/article-search/article-search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    // {
    //   path: '',
    //   component: AdminLayoutComponent,
    //   children: [
    //       {
    //     path: '',
    //     loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // }]},
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_6__components_user_profile_user_profile_component__["a" /* UserProfileComponent */] },
    { path: 'contact-list', component: __WEBPACK_IMPORTED_MODULE_7__components_contact_list_contact_list_component__["a" /* ContactListComponent */] },
    { path: 'typography', component: __WEBPACK_IMPORTED_MODULE_8__components_typography_typography_component__["a" /* TypographyComponent */] },
    { path: 'icons', component: __WEBPACK_IMPORTED_MODULE_9__components_icons_icons_component__["a" /* IconsComponent */] },
    { path: 'maps', component: __WEBPACK_IMPORTED_MODULE_10__components_maps_maps_component__["a" /* MapsComponent */] },
    { path: 'notifications', component: __WEBPACK_IMPORTED_MODULE_11__components_notifications_notifications_component__["a" /* NotificationsComponent */] },
    { path: 'upgrade', component: __WEBPACK_IMPORTED_MODULE_12__components_upgrade_upgrade_component__["a" /* UpgradeComponent */] },
    { path: 'topics', component: __WEBPACK_IMPORTED_MODULE_13__components_topic_topic_list_topic_list_component__["a" /* TopicListComponent */] },
    { path: 'topic-search', component: __WEBPACK_IMPORTED_MODULE_14__components_topic_topic_search_topic_search_component__["a" /* TopicSearchComponent */] },
    { path: 'article-search', component: __WEBPACK_IMPORTED_MODULE_15__components_articles_article_search_article_search_component__["a" /* ArticleSearchComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* RouterModule */].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/articles/article-search/article-search.component.css":
/***/ (function(module, exports) {

module.exports = "/* .form-control {\n    width: 500px;\n} */\n\nh6{\n    font-weight: bold;\n}\n\n.btn{\n    \n    background-color: rgb(76, 175, 80);\n    border-bottom-color: rgb(76, 175, 80);\n    border-bottom-left-radius: 3.2px;\n    border-bottom-right-radius: 3.2px;\n    border-bottom-style: none;\n \n    border-image-repeat: stretch;\n    border-image-slice: 100%;\n    border-image-source: none;\n    border-image-width: 1;\n    border-left-color: rgb(76, 175, 80);\n    border-left-style: none;\n    border-left-width: 0px;\n    border-right-color: rgb(76, 175, 80);\n    border-right-style: none;\n    border-right-width: 0px;\n    border-top-color: rgb(76, 175, 80);\n    border-top-left-radius: 3.2px;\n    border-top-right-radius: 3.2px;\n    border-top-style: none;\n    border-top-width: 0px;\n    -webkit-box-shadow: rgba(76, 175, 80, 0.14) 0px 2px 2px 0px,\n    rgba(76, 175, 80, 0.2) 0px 3px 1px -2px,\n    rgba(76, 175, 80, 0.12) 0px 1px 5px 0px;\n            box-shadow: rgba(76, 175, 80, 0.14) 0px 2px 2px 0px,\n    rgba(76, 175, 80, 0.2) 0px 3px 1px -2px,\n    rgba(76, 175, 80, 0.12) 0px 1px 5px 0px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    color: rgb(255, 255, 255);\n    cursor: pointer;\n    display: inline-block;\n    font-family: Inconsolata,\n    Helvetica,\n    Arial,\n    sans-serif;\n    font-size: 12px;\n    font-stretch: 100%;\n    font-style: normal;\n    font-variant-caps: normal;\n    font-variant-east-asian: normal;\n    -webkit-font-variant-ligatures: normal;\n            font-variant-ligatures: normal;\n    font-variant-numeric: normal;\n    font-weight: 400;\n    height: 35px;\n    letter-spacing: normal;\n    line-height: 17.1429px;\n    margin-bottom: 5px;\n    margin-left: 1px;\n    margin-right: 1px;\n    margin-top: 5px;\n    min-width: 0px;\n    outline-color: rgb(255, 255, 255);\n    outline-style: none;\n    outline-width: 0px;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding-bottom: 12px;\n    padding-left: 30px;\n    padding-right: 30px;\n    padding-top: 12px;\n    position: relative;\n    text-align: center;\n    -webkit-text-decoration-color: rgb(255, 255, 255);\n            text-decoration-color: rgb(255, 255, 255);\n    -webkit-text-decoration-line: none;\n            text-decoration-line: none;\n    -webkit-text-decoration-style: solid;\n            text-decoration-style: solid;\n    text-indent: 0px;\n    text-rendering: auto;\n    text-shadow: none;\n    -webkit-text-size-adjust: 100%;\n       -moz-text-size-adjust: 100%;\n        -ms-text-size-adjust: 100%;\n            text-size-adjust: 100%;\n    text-transform: uppercase;\n    -webkit-transition-delay: 0s,\n    0s,\n    0s;\n            transition-delay: 0s,\n    0s,\n    0s;\n    -webkit-transition-duration: 0.2s,\n    0.2s,\n    0.2s;\n            transition-duration: 0.2s,\n    0.2s,\n    0.2s;\n    transition-property: box-shadow,\n    background-color,\n    -webkit-box-shadow;\n    -webkit-transition-timing-function: cubic-bezier(0.4, 0, 1, 1),\n    cubic-bezier(0.4, 0, 0.2, 1),\n    cubic-bezier(0.4, 0, 1, 1);\n            transition-timing-function: cubic-bezier(0.4, 0, 1, 1),\n    cubic-bezier(0.4, 0, 0.2, 1),\n    cubic-bezier(0.4, 0, 1, 1);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    vertical-align: middle;\n    white-space: nowrap;\n    width: 105.531px;\n    will-change: box-shadow,\n    transform;\n    word-spacing: 0px;\n    -webkit-writing-mode: horizontal-tb;\n        -ms-writing-mode: lr-tb;\n            writing-mode: horizontal-tb;\n    -webkit-appearance: none;\n    -webkit-font-smoothing: antialiased;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n    -webkit-border-image: none;\n}\n\n.article-block {\n    margin: 20px 25px 20px 25px;\n}\n\n.article-title {\n    color:blue;\n       -webkit-text-decoration-style: underline;\n               text-decoration-style: underline;\n}\n\n.pagination a{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding-left: 0;\n    padding-right: 10px;\n    list-style: none;\n    border-radius: 0.25rem;\n}\n\ndiv.container\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px;\n}\n\ndiv.container > div\n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 5em;\n            flex: 1 1 5em;\n    margin-left: 10px;\n    height:50px;\n    /* background-color: blue; */\n}\n\ndiv.container > div:first-child\n{\n    margin-left: 0;\n}\n\ndiv.container > div.two\n{\n    -webkit-box-flex:2;\n        -ms-flex:2 2 calc(10em + 10px);\n            flex:2 2 calc(10em + 10px); /** 10px is the missing margin of the missing box */\n}\n\ndiv.container > div.three\n{\n    -webkit-box-flex:3;\n        -ms-flex:3 3 calc(15em + 20px);\n            flex:3 3 calc(15em + 20px); /** 20px is the missing margin of the two missing boxes */\n}\n\n "

/***/ }),

/***/ "./src/app/components/articles/article-search/article-search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">        \n        <!-- <form (ngSubmit)='searchArticles()' autocomplete=\"off\"> -->\n            <div class=\"container\">\n                \n                <div>\n                    <form (ngSubmit)='searchArticles()' autocomplete=\"off\">\n                        <mat-form-field>\n                            <input matInput #articleInput type=\"text\" [(ngModel)]='article.title' \n                                name='articleSearchBox' id=\"articleSearchBox\"\n                                placeholder=\"Search articles...\">\n\n                           \n                        </mat-form-field>\n                    </form>\n                </div>\n                <div class=\"two\"></div>\n               <div>\n                    <form>\n                        <mat-form-field>\n                            <input matInput [(ngModel)]=\"datex\" [matDatepicker]=\"datepicker\" name='articleDateSearchBox' placeholder=\"Choose a date\">\n                            <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n                            <mat-datepicker #datepicker (selectedChanged)=\"onDateSelect($event)\"></mat-datepicker>\n                        </mat-form-field>\n                    </form>\n               </div>               \n            </div>\n            <!-- <div layout=\"row\" layout-align=\"start left\" flex-start>\n                <div class=\"col-md-4\">\n                    <input matInput #articleInput type=\"text\" class=\"form-control\" \n                            [(ngModel)]='article.title' name='articleSearchBox' \n                            id=\"articleSearchBox\"\n                            placeholder=\"Search articles...\" > -->\n                    <!-- <div class=\"input-group\" > -->\n                        \n                        <!-- <span class=\"input-group-addon\" id=\"addon\">\n                            <i class=\"fa fa-search\" type=\"submit\"></i> \n                            <button class=\"success\" type=\"submit\">\n                                Search \n                            </button>\n                        </span> -->\n                    <!-- </div> -->\n                <!-- </div>\n                <div class=\"col-md-4\">\n                    <mat-form-field>\n                        <input matInput [(ngModel)]=\"datex\" [matDatepicker]=\"datepicker\" \n                               name='articleDateSearchBox' placeholder=\"Choose a date\">\n                        <mat-datepicker-toggle matSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n                        <mat-datepicker #datepicker (selectedChanged)=\"onDateSelect($event)\"></mat-datepicker>\n                    </mat-form-field>\n                </div> -->\n                \n            <!-- </div> -->\n\n        <!-- </form> -->\n        <br />\n\n        <div class=\"row\">\n            <div *ngIf=\"hasArticle\">\n                <div class=\"article-block\" *ngFor=\"let item of pagedItems\">\n                    <h6><a class=\"article-title\" href=\"{{item.referenceUrl}}\">{{item.title}}</a></h6>\n                    {{item.synopsis}} <br />\n                </div>\n                <br />\n                <br />\n                <!-- pager -->\n                <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a (click)=\"setPage(1)\">First</a>\n                    </li>\n                    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n                        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n                    </li>\n                    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n                        <a (click)=\"setPage(page)\">{{page}}</a>\n                    </li>\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n                    </li>\n                    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n                        <a (click)=\"setPage(pager.totalPages)\">Last</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/articles/article-search/article-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_article_service__ = __webpack_require__("./src/app/services/article.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__article__ = __webpack_require__("./src/app/components/articles/article-search/article.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArticleSearchComponent = (function () {
    function ArticleSearchComponent(articleSvc, pagerService) {
        this.articleSvc = articleSvc;
        this.pagerService = pagerService;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.articles = [];
        this.article = new __WEBPACK_IMPORTED_MODULE_4__article__["a" /* Article */]();
        this.hasArticle = false;
        // pager object
        this.pager = {};
        this.myDate = new Date();
        this.datex = new Date();
    }
    ArticleSearchComponent.prototype.ngOnInit = function () {
    };
    ArticleSearchComponent.prototype.searchArticles = function () {
        var _this = this;
        var val = this.searchTerm.value;
        val = this.article.title;
        if (val != "") {
            this.articleSvc.getAllArticles().subscribe(function (response) {
                _this.articles = response;
                _this.articles = _this.articles.filter(function (obj) {
                    return obj.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
                });
                if (_this.articles.length > 0) {
                    _this.hasArticle = true;
                    _this.setPage(1);
                }
            });
        }
        else {
            this.hasArticle = false;
        }
    };
    ArticleSearchComponent.prototype.setPage = function (page) {
        // get pager object from service
        this.pager = this.pagerService.getPager(this.articles.length, page);
        // get current page of items
        this.pagedItems = this.articles.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    ArticleSearchComponent.prototype.onDateSelect = function (event) {
        var _this = this;
        var date = event.getMonth() + event.getDate() + event.getYear();
        this.articleSvc.getAllSpecificArticles(date).subscribe(function (data) { _this.articles = data; }, function (err) { return console.error(err); }, function () { return console.log('done loading articles'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
        __metadata("design:type", Object)
    ], ArticleSearchComponent.prototype, "datepicker", void 0);
    ArticleSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'article-search',
            template: __webpack_require__("./src/app/components/articles/article-search/article-search.component.html"),
            styles: [__webpack_require__("./src/app/components/articles/article-search/article-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_article_service__["a" /* ArticleService */],
            __WEBPACK_IMPORTED_MODULE_3__services_pager_service__["a" /* PagerService */]])
    ], ArticleSearchComponent);
    return ArticleSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/articles/article-search/article.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Article; });
var Article = (function () {
    function Article() {
    }
    return Article;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__ = __webpack_require__("./src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["e" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["m" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["i" /* MatMenuModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__sidebar_sidebar_component__["a" /* SidebarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title \">Simple Table</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table\">\n                              <thead class=\" text-primary\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td class=\"text-primary\">\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"card card-plain\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title mt-0\"> Table on Plain Background</h4>\n                      <p class=\"card-category\"> Here is a subtitle for this table</p>\n                  </div>\n                  <div class=\"card-body\">\n                      <div class=\"table-responsive\">\n                          <table class=\"table table-hover\">\n                              <thead class=\"\">\n                                  <th>\n                                      ID\n                                  </th>\n                                  <th>\n                                      Name\n                                  </th>\n                                  <th>\n                                      Country\n                                  </th>\n                                  <th>\n                                      City\n                                  </th>\n                                  <th>\n                                      Salary\n                                  </th>\n                              </thead>\n                              <tbody>\n                                  <tr>\n                                      <td>\n                                          1\n                                      </td>\n                                      <td>\n                                          Dakota Rice\n                                      </td>\n                                      <td>\n                                          Niger\n                                      </td>\n                                      <td>\n                                          Oud-Turnhout\n                                      </td>\n                                      <td>\n                                          $36,738\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          2\n                                      </td>\n                                      <td>\n                                          Minerva Hooper\n                                      </td>\n                                      <td>\n                                          Curaçao\n                                      </td>\n                                      <td>\n                                          Sinaai-Waas\n                                      </td>\n                                      <td>\n                                          $23,789\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          3\n                                      </td>\n                                      <td>\n                                          Sage Rodriguez\n                                      </td>\n                                      <td>\n                                          Netherlands\n                                      </td>\n                                      <td>\n                                          Baileux\n                                      </td>\n                                      <td>\n                                          $56,142\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          4\n                                      </td>\n                                      <td>\n                                          Philip Chaney\n                                      </td>\n                                      <td>\n                                          Korea, South\n                                      </td>\n                                      <td>\n                                          Overland Park\n                                      </td>\n                                      <td>\n                                          $38,735\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          5\n                                      </td>\n                                      <td>\n                                          Doris Greene\n                                      </td>\n                                      <td>\n                                          Malawi\n                                      </td>\n                                      <td>\n                                          Feldkirchen in Kärnten\n                                      </td>\n                                      <td>\n                                          $63,542\n                                      </td>\n                                  </tr>\n                                  <tr>\n                                      <td>\n                                          6\n                                      </td>\n                                      <td>\n                                          Mason Porter\n                                      </td>\n                                      <td>\n                                          Chile\n                                      </td>\n                                      <td>\n                                          Gloucester\n                                      </td>\n                                      <td>\n                                          $78,615\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/contact-list/contact-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactListComponent = (function () {
    function ContactListComponent() {
    }
    ContactListComponent.prototype.ngOnInit = function () {
    };
    ContactListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-list',
            template: __webpack_require__("./src/app/components/contact-list/contact-list.component.html"),
            styles: [__webpack_require__("./src/app/components/contact-list/contact-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactListComponent);
    return ContactListComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ":host{\n    display: block;\n    width: 100%;\n}\n\n.wrapper{\n    height: 500px;\n    width: 900px;\n    position: relative;\n    margin: 20px auto;\n}\n\nui-carousel{\n    display: block;\n    position: relative;\n}\n\n.text{\n    text-align:  center;\n    line-height: 300px;\n    font-size: 40px;\n    color: #fff;\n}\n\n.button{\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    height: 35px;\n    width: 120px;\n    line-height: 35px;\n    color: gray;\n    background: #fff;\n    text-align: center;\n    border-radius: 2px;\n    -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    z-index: 5000;\n    left: 50%;\n    bottom: 50px;\n    transform: translateX(-50%);\n    -webkit-transform: translateX(-50%);\n    -moz-transform: translateX(-50%);\n    -o-transform: translateX(-50%);\n    -ms-transform: translateX(-50%);\n\n    transition: all .3s;\n    -webkit-transition: all .3s;\n    -moz-transition: all .3s;\n    -o-transition: all .3s;\n    -ms-transition: all .3s;\n}\n\n.button:hover{\n    cursor: pointer;\n    -webkit-box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\n            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.3);\n}\n\n.dots{\n    height: 4px;\n    width: 680px;\n    padding: 0 10px;\n    position: absolute;\n    bottom: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n}\n\n.dot{\n    height: 100%;\n    width: 200px;\n    background: rgba(256, 256, 256, 0.7);\n    padding: 0 3px;\n    border-radius: 1px;\n}\n\n.dot:hover{\n    cursor: pointer;\n}\n\nimg{\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <ui-carousel #uiCarousel [infinite]=\"true\" [fade]=\"true\" [speed]=\"400\" height=\"500px\" width=\"100%\" [dots]=\"true\">\n        <ui-carousel-item>\n            <img src=\"assets/img/image1.jpg\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n        <ui-carousel-item>\n            <img src=\"assets/img/image2.jpg\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n        <ui-carousel-item>\n            <img src=\"assets/img/image3.jpg\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n        <ui-carousel-item>\n            <img src=\"assets/img/image4.jpg\" alt=\"\" draggable=\"false\">\n        </ui-carousel-item>\n\n        <div class=\"dots\">\n            <div class=\"dot\" (click)=\"uiCarousel.goTo(0)\"></div>\n            <div class=\"dot\" (click)=\"uiCarousel.goTo(1)\"></div>\n            <div class=\"dot\" (click)=\"uiCarousel.goTo(2)\"></div>\n        </div>\n    </ui-carousel>   \n</div>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { MatDatepicker} from '@angular/material';
var DashboardComponent = (function () {
    function DashboardComponent(dashboardSvc) {
        this.dashboardSvc = dashboardSvc;
        this.myDate = new Date();
        this.datex = new Date();
        this.articles = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('datepicker'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "datepicker", void 0);
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_service__["a" /* DashboardService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ".footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    /* background-color: red; */\n    /* color: white; */\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\n    <div class=\"container-fluid\">\n        <nav class=\"pull-left\">\n            <ul>\n                <!-- <li>\n                    <a href=\"https://www.creative-tim.com\">\n                        Creative Tim\n                    </a>\n                </li> -->\n                <li>\n                    <a href=\"http://presentation.creative-tim.com\">\n                        About Us\n                    </a>\n                </li>\n                <li>\n                    <a href=\"http://blog.creative-tim.com\">\n                        Blog\n                    </a>\n                </li>\n                <li>\n                    <a href=\"https://www.creative-tim.com/license\">\n                        Licenses\n                    </a>\n                </li>\n            </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n            &copy;\n            {{test | date: 'yyyy'}}, made with love by\n            <a href=\"https://www.creative-tim.com\" target=\"_blank\">Anand Dongol</a> for a better web.\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/icons/icons.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/icons/icons.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card card-plain\">\n          <div class=\"card-header card-header-danger\">\n              <h4 class=\"card-title\">Material Design Icons</h4>\n              <p class=\"card-category\">Handcrafted by our friends from\n                  <a target=\"_blank\" href=\"https://design.google.com/icons/\">Google</a>\n              </p>\n          </div>\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                  <div class=\"card-body\">\n                      <div class=\"iframe-container d-none d-lg-block\">\n                          <iframe src=\"https://design.google.com/icons/\">\n                              <p>Your browser does not support iframes.</p>\n                          </iframe>\n                      </div>\n                      <div class=\"col-md-12 d-none d-sm-block d-md-block d-lg-none d-block d-sm-none text-center ml-auto mr-auto\">\n                          <h5>The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the\n                              <a href=\"https://design.google.com/icons/\" target=\"_blank\">Material Icons</a>\n                          </h5>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/icons/icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconsComponent = (function () {
    function IconsComponent() {
    }
    IconsComponent.prototype.ngOnInit = function () {
    };
    IconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-icons',
            template: __webpack_require__("./src/app/components/icons/icons.component.html"),
            styles: [__webpack_require__("./src/app/components/icons/icons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IconsComponent);
    return IconsComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\"\n                class=\"form-control\" \n                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors}\"/>\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required.</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\"\n                class=\"form-control\"\n                [ngClass]=\"{ 'is-invalid': submitted && f.username.errors}\"/>\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\"></button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n\n</form>"

/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["l" /* Validators */].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["a" /* first */])()).subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            //this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/maps/maps.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/maps/maps.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\n"

/***/ }),

/***/ "./src/app/components/maps/maps.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapsComponent = (function () {
    function MapsComponent() {
    }
    MapsComponent.prototype.ngOnInit = function () {
        var myLatlng = new google.maps.LatLng(40.748817, -73.985428);
        var mapOptions = {
            zoom: 13,
            center: myLatlng,
            scrollwheel: false,
            styles: [{
                    "featureType": "water",
                    "stylers": [{
                            "saturation": 43
                        }, {
                            "lightness": -11
                        }, {
                            "hue": "#0088ff"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "hue": "#ff0000"
                        }, {
                            "saturation": -100
                        }, {
                            "lightness": 99
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                            "color": "#808080"
                        }, {
                            "lightness": 54
                        }]
                }, {
                    "featureType": "landscape.man_made",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ece2d9"
                        }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "color": "#ccdca1"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.fill",
                    "stylers": [{
                            "color": "#767676"
                        }]
                }, {
                    "featureType": "road",
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                            "color": "#ffffff"
                        }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                            "visibility": "off"
                        }]
                }, {
                    "featureType": "landscape.natural",
                    "elementType": "geometry.fill",
                    "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#b8cb93"
                        }]
                }, {
                    "featureType": "poi.park",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.sports_complex",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.medical",
                    "stylers": [{
                            "visibility": "on"
                        }]
                }, {
                    "featureType": "poi.business",
                    "stylers": [{
                            "visibility": "simplified"
                        }]
                }]
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: "Hello World!"
        });
        // To add the marker to the map, call setMap();
        marker.setMap(map);
    };
    MapsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-maps',
            template: __webpack_require__("./src/app/components/maps/maps.component.html"),
            styles: [__webpack_require__("./src/app/components/maps/maps.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MapsComponent);
    return MapsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute fixed-top\"> -->\n\n<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <h1 fxFlex=\"25%\">Interview Helper App</h1>\n\n        <!-- <div fxFlex=\"25%\" >\n            <button mat-raised-button color=\"primary\">\n                <b>Home</b>\n            </button>\n        </div> -->\n        <span class=\"example-spacer\"></span>\n\n        <a class=\"nav-link\" href=\"http://example.com\" \n            id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" \n            aria-haspopup=\"true\"\n            aria-expanded=\"false\">\n            <i class=\"material-icons\">people</i>\n\n            <p>\n                <span class=\"d-lg-none d-md-block\">Account</span>\n            </p>\n        </a>\n\n        <div class=\"dropdown-menu dropdown-menu-right\" \n            aria-labelledby=\"navbarDropdownMenuLink\">\n            <a class=\"dropdown-item\" href=\"#\">Edit Profile</a>\n\n            <a class=\"dropdown-item\" href=\"#\">Logout</a>\n        </div>\n\n        <!-- <a class=\"image-icon\" href=\"{{appConfig.repositoryURL}}\" target=\"_blank\">\n            <img src=\"assets/images/github-circle-white-transparent.svg\">\n        </a> -->\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<!-- </nav> -->\n<!-- <nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button mat-raised-button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">dashboard</i>\n                        <p class=\"hidden-lg hidden-md\">Dashboard</p>\n                    </a>\n                </li>\n                <li class=\"dropdown\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <i class=\"material-icons\">notifications</i>\n                        <span class=\"notification\">5</span>\n                        <p class=\"hidden-lg hidden-md\">Notifications</p>\n                    </a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#\">Mike John responded to your email</a></li>\n                        <li><a href=\"#\">You have 5 new tasks</a></li>\n                        <li><a href=\"#\">You're now friend with Andrew</a></li>\n                        <li><a href=\"#\">Another Notification</a></li>\n                        <li><a href=\"#\">Another One</a></li>\n                    </ul>\n                </li>\n                <li>\n                    <a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                       <i class=\"material-icons\">person</i>\n                       <p class=\"hidden-lg hidden-md\">Profile</p>\n                    </a>\n                </li>\n            </ul>\n\n            <form class=\"navbar-form navbar-right\" role=\"search\">\n                <div class=\"form-group form-black is-empty\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                    <span class=\"material-input\"></span>\n                </div>\n                <button mat-raised-button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                    <i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>\n                </button>\n            </form>\n        </div>\n    </div>\n</nav> -->"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\nmat-toolbar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\nmat-toolbar .fill {\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n\nmat-toolbar a {\n    color: inherit;\n    text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(location, element, router) {
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());

// ngOnInit(){
//   this.listTitles = ROUTES.filter(listTitle => listTitle);
//   const navbar: HTMLElement = this.element.nativeElement;
//   this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
//   this.router.events.subscribe((event) => {
//     this.sidebarClose();
//      var $layer: any = document.getElementsByClassName('close-layer')[0];
//      if ($layer) {
//        $layer.remove();
//        this.mobile_menu_visible = 0;
//      }
//  });
// }
// sidebarOpen() {
//     const toggleButton = this.toggleButton;
//     const body = document.getElementsByTagName('body')[0];
//     setTimeout(function(){
//         toggleButton.classList.add('toggled');
//     }, 500);
//     body.classList.add('nav-open');
//     this.sidebarVisible = true;
// };
// sidebarClose() {
//     const body = document.getElementsByTagName('body')[0];
//     this.toggleButton.classList.remove('toggled');
//     this.sidebarVisible = false;
//     body.classList.remove('nav-open');
// };
// sidebarToggle() {
//     // const toggleButton = this.toggleButton;
//     // const body = document.getElementsByTagName('body')[0];
//     var $toggle = document.getElementsByClassName('navbar-toggler')[0];
//     if (this.sidebarVisible === false) {
//         this.sidebarOpen();
//     } else {
//         this.sidebarClose();
//     }
//     const body = document.getElementsByTagName('body')[0];
//     if (this.mobile_menu_visible == 1) {
//         // $('html').removeClass('nav-open');
//         body.classList.remove('nav-open');
//         if ($layer) {
//             $layer.remove();
//         }
//         setTimeout(function() {
//             $toggle.classList.remove('toggled');
//         }, 400);
//         this.mobile_menu_visible = 0;
//     } else {
//         setTimeout(function() {
//             $toggle.classList.add('toggled');
//         }, 430);
//         var $layer = document.createElement('div');
//         $layer.setAttribute('class', 'close-layer');
//         if (body.querySelectorAll('.main-panel')) {
//             document.getElementsByClassName('main-panel')[0].appendChild($layer);
//         }else if (body.classList.contains('off-canvas-sidebar')) {
//             document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
//         }
//         setTimeout(function() {
//             $layer.classList.add('visible');
//         }, 100);
//         $layer.onclick = function() { //asign a function
//           body.classList.remove('nav-open');
//           this.mobile_menu_visible = 0;
//           $layer.classList.remove('visible');
//           setTimeout(function() {
//               $layer.remove();
//               $toggle.classList.remove('toggled');
//           }, 400);
//         }.bind(this);
//         body.classList.add('nav-open');
//         this.mobile_menu_visible = 1;
//     }
// };
// getTitle(){
//   var titlee = this.location.prepareExternalUrl(this.location.path());
//   if(titlee.charAt(0) === '#'){
//       titlee = titlee.slice( 2 );
//   }
//   titlee = titlee.split('/').pop();
//   for(var item = 0; item < this.listTitles.length; item++){
//       if(this.listTitles[item].path === titlee){
//           return this.listTitles[item].title;
//       }
//   }
//   return 'Dashboard';
// }


/***/ }),

/***/ "./src/app/components/notifications/notifications.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"card\">\n          <div class=\"card-header card-header-danger\">\n              <h3 class=\"card-title\">Notifications</h3>\n              <p class=\"card-category\">Handcrafted by our friend\n                  <a target=\"_blank\" href=\"https://github.com/mouse0270\">Robert McIntosh</a>. Please checkout the\n                  <a href=\"http://bootstrap-notify.remabledesigns.com/\" target=\"_blank\">full documentation.</a>\n              </p>\n          </div>\n          <div class=\"card-body\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notifications Style</h4>\n                      <div class=\"alert alert-info\">\n                          <span>This is a plain notification</span>\n                      </div>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>This is a notification with close button.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon.</span>\n                      </div>\n                      <div class=\"alert alert-info alert-with-icon\" data-notify=\"container\">\n                          <i class=\"material-icons\" data-notify=\"icon\">add_alert</i>\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span data-notify=\"message\">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.</span>\n                      </div>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4 class=\"card-title\">Notification states</h4>\n                      <div class=\"alert alert-info\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Info - </b> This is a regular notification made with \".alert-info\"</span>\n                      </div>\n                      <div class=\"alert alert-success\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Success - </b> This is a regular notification made with \".alert-success\"</span>\n                      </div>\n                      <div class=\"alert alert-warning\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Warning - </b> This is a regular notification made with \".alert-warning\"</span>\n                      </div>\n                      <div class=\"alert alert-danger\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Danger - </b> This is a regular notification made with \".alert-danger\"</span>\n                      </div>\n                      <div class=\"alert alert-primary\">\n                          <button mat-button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                              <i class=\"material-icons\">close</i>\n                          </button>\n                          <span>\n                              <b> Primary - </b> This is a regular notification made with \".alert-primary\"</span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-12\">\n              <div class=\"places-buttons\">\n                  <div class=\"row\">\n                      <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                          <h4 class=\"card-title\">\n                              Notifications Places\n                              <p class=\"category\">Click to view notifications</p>\n                          </h4>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','left')\">Top Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','center')\">Top Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('top','right')\">Top Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                  <div class=\"row\">\n                      <div class=\"col-lg-8 col-md-10 ml-auto mr-auto\">\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','left')\">Bottom Left</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','center')\">Bottom Center</button>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <button mat-raised-button class=\"btn btn-danger btn-block\" (click)=\"showNotification('bottom','right')\">Bottom Right</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notifications/notifications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    NotificationsComponent.prototype.showNotification = function (from, align) {
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        $.notify({
            icon: "notifications",
            message: "Welcome to <b>Material Dashboard</b> - a beautiful freebie for every web developer."
        }, {
            type: type[color],
            timer: 4000,
            placement: {
                from: from,
                align: align
            },
            template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
                '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
                '<i class="material-icons" data-notify="icon">notifications</i> ' +
                '<span data-notify="title">{1}</span> ' +
                '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
        });
    };
    NotificationsComponent.prototype.ngOnInit = function () {
    };
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notifications',
            template: __webpack_require__("./src/app/components/notifications/notifications.component.html"),
            styles: [__webpack_require__("./src/app/components/notifications/notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());



/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".sidebar-menu-text {\n    display: inline;\n    vertical-align: bottom;\n    font-size: medium;\n}\n\n.material-icons {\n    font-size:15px;\n    padding: 10px 0px 5px 25px;    \n}\n\n.mat-tab-link {\n    opacity: 1;\n}\n\n.mat-tab-link:focus {\n    color: #800080;\n    /* obvious color for demo */\n}\n\n.list-item-active {\n    font-weight: bold;\n    color: mat-color(accent, darker) !important;\n    /* kbackground: rgba(0, 0, 0, 0.04); */\n    /* text-decoration: underline; */\n}"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-wrapper\">\n    <nav mat-tab-nav-bar=\"mat-tab-nav-bar\">\n        <a mat-tab-link=\"mat-tab-link\" *ngFor=\"let menu of menuItems\" \n            [routerLink]=\"menu.path\" routerLinkActive=\"routerLinkActive\"\n            #routerLinkActiveInstance=\"routerLinkActive\" [class.list-item-active]=\"routerLinkActiveInstance.isActive\">\n            <i class=\"material-icons\">{{menu.icon}}</i>\n            <span class=\"sidebar-menu-text\">{{menu.title}}</span>\n            <div class=\"ripple-container\"></div>\n        </a>\n    </nav>\n</div>\n\n<router-outlet></router-outlet>\n\n<!-- <div class=\"sidebar-wrapper\">\n    <div *ngIf=\"isMobileMenu()\">\n        <form class=\"navbar-form\">\n            <span class=\"bmd-form-group\">\n                <div class=\"input-group no-border\">\n                    <input type=\"text\" value=\"\" class=\"form-control\" placeholder=\"Search...\" />\n\n                    <button mat-raised-button=\"mat-raised-button\" type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">\n                        <i class=\"material-icons\">search</i>\n\n                        <div class=\"ripple-container\"></div>\n                    </button>\n                </div>\n            </span>\n        </form>\n\n        <ul class=\"nav navbar-nav nav-mobile-menu\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pablo\">\n                    <i class=\"material-icons\">dashboard</i>\n\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Stats</span>\n                    </p>\n                </a>\n            </li>\n\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link\" href=\"http://example.com\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\"\n                    aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <i class=\"material-icons\">notifications</i>\n\n                    <span class=\"notification\">5</span>\n\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Some Actions</span>\n                    </p>\n                </a>\n\n                <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">\n                        Mike John responded to your email\n                    </a>\n\n                    <a class=\"dropdown-item\" href=\"#\">You have 5 new tasks</a>\n\n                    <a class=\"dropdown-item\" href=\"#\">You're now friend with Andrew</a>\n\n                    <a class=\"dropdown-item\" href=\"#\">Another Notification</a>\n\n                    <a class=\"dropdown-item\" href=\"#\">Another One</a>\n                </div>\n            </li>\n\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#pablo\">\n                    <i class=\"material-icons\">person</i>\n\n                    <p>\n                        <span class=\"d-lg-none d-md-block\">Account</span>\n                    </p>\n                </a>\n            </li>\n        </ul>\n    </div>\n\n    <ul class=\"nav\">\n        <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\n            <a class=\"nav-link\" [routerLink]=\"[menuItem.path]\">\n                <i class=\"material-icons\">{{menuItem.icon}}</i>\n\n                <span class=\"sidebar-menu-text\">{{menuItem.title}}</span>\n            </a>\n        </li>\n    </ul>\n</div> -->"

/***/ }),

/***/ "./src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
    // { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/contact-list', title: 'Contact List', icon: 'content_paste', class: '' },
    // { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    //   { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO', icon: 'unarchive', class: 'active-pro' },
    { path: '/topics', title: 'Interview Topics', icon: 'library_books', class: '' },
    { path: '/topic-search', title: 'Search Topics', icon: 'search', class: '' },
    { path: '/article-search', title: 'Search Articles', icon: 'search', class: '' }
];
var SidebarComponent = (function () {
    function SidebarComponent() {
        this.rlaSafe = false;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.rlaSafe = true;
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/topic/topic-list/topic-list.component.css":
/***/ (function(module, exports) {

module.exports = ".footer-anchor{\n    padding-left: 20px;\n    text-decoration: underline;\n}\n\n.card {\n    border: 0;\n    margin-bottom: 0px;\n    margin-top: 30px;\n    border-radius: 6px;\n    color: #333333;\n    background: #fff;\n    width: 100%;\n}\n\n.card-title {\n    color: #3C4858;\n    text-decoration: none;\n    font-weight:bold;\n}\n\n.card-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin: 1px;\n}\n\n.topic-header{\n    display: block;\n    float: left;\n     width: 30%;\n}\n\n.topic-content {\n    display: block;\n    margin-bottom: 16px;\n    margin-top: 10px;\n    font-weight: bold; \n}\n\n.topic-footer {\n    padding-left: 15px;\n    padding-bottom:15px; \n\n}\n\n.mat-icon-header {\n    display: block;\n    float: right;\n    cursor: pointer;\n}\n    "

/***/ }),

/***/ "./src/app/components/topic/topic-list/topic-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <mat-expansion-panel [expanded]=\"isOpen\" *ngFor=\"let topic of topics\">\n            <mat-expansion-panel-header>\n                {{ topic.termName }}\n            </mat-expansion-panel-header>\n                <div *ngIf=\"topic.definition.length>0\">\n                    <ul *ngFor=\"let def of topic.definition\">\n                        <li>{{def}}</li>\n                    </ul>\n                </div>\n                <div class=\"topic-footer\">\n                    <a class=\"footer-anchor\" href=\"{{topic.referenceUrl}}\">{{ topic.referenceUrl}}</a>\n                </div>              \n                        \n        </mat-expansion-panel>\n    </div>\n</div>  \n\n\n<!-- <div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"card-list\" *ngIf=\"topics.length>0\">\n            <div *ngFor=\"let topic of topics\">\n            <mat-card>\n                <mat-card-header>\n                    <span class=\"topic-header\">\n                        <h4>{{topic.termName}}</h4>\n                    </span>\n                    <span class=\"mat-icon-header\">\n                        <mat-icon #addIcon  \n                                    class=\"add-icon-header\" \n                            (click)=\"hideme[topic.termId] = !hideme[topic.termId]\">add_circle</mat-icon>\n                        <!-- <mat-icon #removeIcon [hidden]=\"!hideme[topic.termId]\"\n                                class=\"remove-icon-header\"\n                                (click)=\"hideDefinition(topic)\">remove_circle</mat-icon> -->\n                    <!-- </span>                        \n                </mat-card-header>               \n                <div [hidden]=\"!hideme[topic.termId]\" class=\"topic-content\">\n                    <mat-card-content>\n                        <div *ngIf=\"topic.definition.length>0\">\n                            <ul *ngFor=\"let def of topic.definition\">\n                                <li>{{def}}</li>\n                            </ul>\n                        </div>\n                    </mat-card-content>                             \n                     \n                    <div class=\"topic-footer\"> \n                        <mat-card-footer>\n                            {{topic.referenceUrl}}</a>\n                        </mat-card-footer>\n                    </div>\n                    \n                </div>\n            </mat-card>\n        </div>\n    </div>\n</div> --> \n\n        \n            <!-- <div class=\"row\" *ngIf=\"topics.length>0\"> \n                <div *ngIf=\"showContent\">\n                    <div class=\"card\" *ngFor=\"let topic of topics\">\n                        <div class=\"card-header\">\n                            <h4 class=\"card-title \">{{topic.termName}}</h4>\n                        </div>\n                    <div class=\"\" *ngIf=\"topic.definition.length>0\">\n                        <ul *ngFor=\"let def of topic.definition\">\n                            <li>{{def}}</li>\n                        </ul>\n\n                    </div>\n                    <div class=\"\">\n                        <a class=\"footer-anchor\" href=\"{{topic.referenceUrl}}\">{{topic.referenceUrl}}</a>\n                    </div>\n                </div>\n            </div>-->\n        "

/***/ }),

/***/ "./src/app/components/topic/topic-list/topic-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_topic_service__ = __webpack_require__("./src/app/services/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng_block_ui__ = __webpack_require__("./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicListComponent = (function () {
    // @ViewChild('addIcon') addIcon: ElementRef;
    // @ViewChild('removeIcon') removeIcon: ElementRef;
    function TopicListComponent(topicSvc) {
        this.topicSvc = topicSvc;
        this.showContent = false;
        this.hideme = {};
        this.hideme = {};
    }
    TopicListComponent.prototype.ngOnInit = function () {
        this.getAllTopics();
        this.topicDefinition = [];
        this.topics = [];
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'none';
    };
    TopicListComponent.prototype.showDefinition = function (topic) {
        this.hideme[topic.termId] = !this.hideme[topic.termId];
        //this.addIcon.nativeElement._elementRef.nativeElement.style.display = 'none';  
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'inline';
    };
    TopicListComponent.prototype.testDefinition = function () {
        console.log("a");
        this.showContent = true;
    };
    TopicListComponent.prototype.hideDefinition = function (topic) {
        //this.addIcon.nativeElement._elementRef.nativeElement.style.display = 'inline'; 
        //this.removeIcon.nativeElement._elementRef.nativeElement.style.display = 'none';
    };
    TopicListComponent.prototype.getAllTopics = function () {
        var _this = this;
        this.blockUI.start('Loading...');
        this.topicSvc.getAllTopics().subscribe(function (data) {
            _this.topics = data;
            _this.topics = _this.topics.sort(function (a, b) { return a.termName !== b.termName ? a.termName < b.termName ? -1 : 1 : 0; });
        }, function (err) { return console.error(err); }, function () { return console.log('done loading topics'); });
        this.blockUI.stop();
        //this.topicDefinition = this.topics.forEach((value, index) => { return value.definition });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2_ng_block_ui__["a" /* BlockUI */])(),
        __metadata("design:type", Object)
    ], TopicListComponent.prototype, "blockUI", void 0);
    TopicListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topic-list',
            template: __webpack_require__("./src/app/components/topic/topic-list/topic-list.component.html"),
            styles: [__webpack_require__("./src/app/components/topic/topic-list/topic-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_topic_service__["a" /* TopicService */]])
    ], TopicListComponent);
    return TopicListComponent;
}());



/***/ }),

/***/ "./src/app/components/topic/topic-search/topic-search.component.css":
/***/ (function(module, exports) {

module.exports = "\n\n@import url(\"//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css\");\n/**\n * material-design-lite - Material Design Components in CSS, JS and HTML\n * @version v1.0.6\n * @license Apache-2.0\n * @copyright 2015 Google, Inc.\n * @link https://github.com/google/material-design-lite\n */\n/* @charset \"UTF-8\";\nhtml {\n    color: rgba(0, 0, 0, .87)\n}\n\n::-moz-selection {\n    background: #b3d4fc;\n    text-shadow: none\n}\n\n::selection {\n    background: #b3d4fc;\n    text-shadow: none\n}\n\nhr {\n    display: block;\n    height: 1px;\n    border: 0;\n    border-top: 1px solid #ccc;\n    margin: 1em 0;\n    padding: 0\n}\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n    vertical-align: middle\n}\n\nfieldset {\n    border: 0;\n    margin: 0;\n    padding: 0\n}\n\ntextarea {\n    resize: vertical\n}\n\n.browserupgrade {\n    margin: .2em 0;\n    background: #ccc;\n    color: #000;\n    padding: .2em 0\n}\n\n.hidden {\n    display: none !important\n}\n\n.visuallyhidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px\n}\n\n.visuallyhidden.focusable:active,\n.visuallyhidden.focusable:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto\n}\n\n.invisible {\n    visibility: hidden\n}\n\n.clearfix:before,\n.clearfix:after {\n    content: \" \";\n    display: table\n}\n\n.clearfix:after {\n    clear: both\n}\n\n@media print {\n    *,\n    *:before,\n    *:after,\n    *:first-letter,\n    *:first-line {\n        background: 0 0 !important;\n        color: #000 !important;\n        box-shadow: none !important;\n        text-shadow: none !important\n    }\n    a,\n    a:visited {\n        text-decoration: underline\n    }\n    a[href]:after {\n        content: \" (\" attr(href)\")\"\n    }\n    abbr[title]:after {\n        content: \" (\" attr(title)\")\"\n    }\n    a[href^=\"#\"]:after,\n    a[href^=\"javascript:\"]:after {\n        content: \"\"\n    }\n    pre,\n    blockquote {\n        border: 1px solid #999;\n        page-break-inside: avoid\n    }\n    thead {\n        display: table-header-group\n    }\n    tr,\n    img {\n        page-break-inside: avoid\n    }\n    img {\n        max-width: 100% !important\n    }\n    p,\n    h2,\n    h3 {\n        orphans: 3;\n        widows: 3\n    }\n    h2,\n    h3 {\n        page-break-after: avoid\n    }\n}\n\na,\n.mdl-accordion,\n.mdl-button,\n.mdl-card,\n.mdl-checkbox,\n.mdl-dropdown-menu,\n.mdl-icon-toggle,\n.mdl-item,\n.mdl-radio,\n.mdl-slider,\n.mdl-switch,\n.mdl-tabs__tab {\n    -webkit-tap-highlight-color: transparent;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0)\n}\n\nhtml {\n    width: 100%;\n    height: 100%;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation\n}\n\nbody {\n    width: 100%;\n    min-height: 100%\n}\n\nmain {\n    display: block\n}\n\n*[hidden] {\n    display: none !important\n}\n\nhtml,\nbody {\n    font-family: \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 20px\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np {\n    padding: 0\n}\n\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400;\n    line-height: 1.35;\n    letter-spacing: -.02em;\n    opacity: .54;\n    font-size: .6em\n}\n\nh1 {\n    font-size: 56px;\n    line-height: 1.35;\n    letter-spacing: -.02em;\n    margin: 24px 0\n}\n\nh1,\nh2 {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400\n}\n\nh2 {\n    font-size: 45px;\n    line-height: 48px\n}\n\nh2,\nh3 {\n    margin: 24px 0\n}\n\nh3 {\n    font-size: 34px;\n    line-height: 40px\n}\n\nh3,\nh4 {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 400\n}\n\nh4 {\n    font-size: 24px;\n    line-height: 32px;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 24px 0 16px\n}\n\nh5 {\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1;\n    letter-spacing: .02em\n}\n\nh5,\nh6 {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    margin: 24px 0 16px\n}\n\nh6 {\n    font-size: 16px;\n    letter-spacing: .04em\n}\n\nh6,\np {\n    font-weight: 400;\n    line-height: 24px\n}\n\np {\n    font-size: 14px;\n    letter-spacing: 0;\n    margin: 0 0 16px\n}\n\na {\n    color: rgb(255, 64, 129);\n    font-weight: 500\n}\n\nblockquote {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    position: relative;\n    font-size: 24px;\n    font-weight: 300;\n    font-style: italic;\n    line-height: 1.35;\n    letter-spacing: .08em\n}\n\nblockquote:before {\n    position: absolute;\n    left: -.5em;\n    content: '“'\n}\n\nblockquote:after {\n    content: '”';\n    margin-left: -.05em\n}\n\nmark {\n    background-color: #f4ff81\n}\n\ndt {\n    font-weight: 700\n}\n\naddress {\n    font-size: 12px;\n    line-height: 1;\n    font-style: normal\n}\n\naddress,\nul,\nol {\n    font-weight: 400;\n    letter-spacing: 0\n}\n\nul,\nol {\n    font-size: 14px;\n    line-height: 24px\n}\n\n.mdl-typography--display-4,\n.mdl-typography--display-4-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 112px;\n    font-weight: 300;\n    line-height: 1;\n    letter-spacing: -.04em\n}\n\n.mdl-typography--display-4-color-contrast {\n    opacity: .54\n}\n\n.mdl-typography--display-3,\n.mdl-typography--display-3-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 56px;\n    font-weight: 400;\n    line-height: 1.35;\n    letter-spacing: -.02em\n}\n\n.mdl-typography--display-3-color-contrast {\n    opacity: .54\n}\n\n.mdl-typography--display-2,\n.mdl-typography--display-2-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 45px;\n    font-weight: 400;\n    line-height: 48px\n}\n\n.mdl-typography--display-2-color-contrast {\n    opacity: .54\n}\n\n.mdl-typography--display-1,\n.mdl-typography--display-1-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 34px;\n    font-weight: 400;\n    line-height: 40px\n}\n\n.mdl-typography--display-1-color-contrast {\n    opacity: .54\n}\n\n.mdl-typography--headline,\n.mdl-typography--headline-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 24px;\n    font-weight: 400;\n    line-height: 32px;\n    -moz-osx-font-smoothing: grayscale\n}\n\n.mdl-typography--headline-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--title,\n.mdl-typography--title-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 20px;\n    font-weight: 500;\n    line-height: 1;\n    letter-spacing: .02em\n}\n\n.mdl-typography--title-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--subhead,\n.mdl-typography--subhead-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 16px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: .04em\n}\n\n.mdl-typography--subhead-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--body-2,\n.mdl-typography--body-2-color-contrast {\n    font-size: 14px;\n    font-weight: 700;\n    line-height: 24px;\n    letter-spacing: 0\n}\n\n.mdl-typography--body-2-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--body-1,\n.mdl-typography--body-1-color-contrast {\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0\n}\n\n.mdl-typography--body-1-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--body-2-force-preferred-font,\n.mdl-typography--body-2-force-preferred-font-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 24px;\n    letter-spacing: 0\n}\n\n.mdl-typography--body-2-force-preferred-font-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--body-1-force-preferred-font,\n.mdl-typography--body-1-force-preferred-font-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 24px;\n    letter-spacing: 0\n}\n\n.mdl-typography--body-1-force-preferred-font-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--caption,\n.mdl-typography--caption-force-preferred-font {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1;\n    letter-spacing: 0\n}\n\n.mdl-typography--caption-force-preferred-font {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif\n}\n\n.mdl-typography--caption-color-contrast,\n.mdl-typography--caption-force-preferred-font-color-contrast {\n    font-size: 12px;\n    font-weight: 400;\n    line-height: 1;\n    letter-spacing: 0;\n    opacity: .54\n}\n\n.mdl-typography--caption-force-preferred-font-color-contrast,\n.mdl-typography--menu {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif\n}\n\n.mdl-typography--menu {\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1;\n    letter-spacing: 0\n}\n\n.mdl-typography--menu-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--menu-color-contrast,\n.mdl-typography--button,\n.mdl-typography--button-color-contrast {\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    line-height: 1;\n    letter-spacing: 0\n}\n\n.mdl-typography--button,\n.mdl-typography--button-color-contrast {\n    text-transform: uppercase\n}\n\n.mdl-typography--button-color-contrast {\n    opacity: .87\n}\n\n.mdl-typography--text-left {\n    text-align: left\n}\n\n.mdl-typography--text-right {\n    text-align: right\n}\n\n.mdl-typography--text-center {\n    text-align: center\n}\n\n.mdl-typography--text-justify {\n    text-align: justify\n}\n\n.mdl-typography--text-nowrap {\n    white-space: nowrap\n}\n\n.mdl-typography--text-lowercase {\n    text-transform: lowercase\n}\n\n.mdl-typography--text-uppercase {\n    text-transform: uppercase\n}\n\n.mdl-typography--text-capitalize {\n    text-transform: capitalize\n}\n\n.mdl-typography--font-thin {\n    font-weight: 200 !important\n}\n\n.mdl-typography--font-light {\n    font-weight: 300 !important\n}\n\n.mdl-typography--font-regular {\n    font-weight: 400 !important\n}\n\n.mdl-typography--font-medium {\n    font-weight: 500 !important\n}\n\n.mdl-typography--font-bold {\n    font-weight: 700 !important\n}\n\n.mdl-typography--font-black {\n    font-weight: 900 !important\n}\n\n.mdl-color-text--red {\n    color: #f44336 !important\n}\n\n.mdl-color--red {\n    background-color: #f44336 !important\n}\n\n.mdl-color-text--red-50 {\n    color: #ffebee !important\n}\n\n.mdl-color--red-50 {\n    background-color: #ffebee !important\n}\n\n.mdl-color-text--red-100 {\n    color: #ffcdd2 !important\n}\n\n.mdl-color--red-100 {\n    background-color: #ffcdd2 !important\n}\n\n.mdl-color-text--red-200 {\n    color: #ef9a9a !important\n}\n\n.mdl-color--red-200 {\n    background-color: #ef9a9a !important\n}\n\n.mdl-color-text--red-300 {\n    color: #e57373 !important\n}\n\n.mdl-color--red-300 {\n    background-color: #e57373 !important\n}\n\n.mdl-color-text--red-400 {\n    color: #ef5350 !important\n}\n\n.mdl-color--red-400 {\n    background-color: #ef5350 !important\n}\n\n.mdl-color-text--red-500 {\n    color: #f44336 !important\n}\n\n.mdl-color--red-500 {\n    background-color: #f44336 !important\n}\n\n.mdl-color-text--red-600 {\n    color: #e53935 !important\n}\n\n.mdl-color--red-600 {\n    background-color: #e53935 !important\n}\n\n.mdl-color-text--red-700 {\n    color: #d32f2f !important\n}\n\n.mdl-color--red-700 {\n    background-color: #d32f2f !important\n}\n\n.mdl-color-text--red-800 {\n    color: #c62828 !important\n}\n\n.mdl-color--red-800 {\n    background-color: #c62828 !important\n}\n\n.mdl-color-text--red-900 {\n    color: #b71c1c !important\n}\n\n.mdl-color--red-900 {\n    background-color: #b71c1c !important\n}\n\n.mdl-color-text--red-A100 {\n    color: #ff8a80 !important\n}\n\n.mdl-color--red-A100 {\n    background-color: #ff8a80 !important\n}\n\n.mdl-color-text--red-A200 {\n    color: #ff5252 !important\n}\n\n.mdl-color--red-A200 {\n    background-color: #ff5252 !important\n}\n\n.mdl-color-text--red-A400 {\n    color: #ff1744 !important\n}\n\n.mdl-color--red-A400 {\n    background-color: #ff1744 !important\n}\n\n.mdl-color-text--red-A700 {\n    color: #d50000 !important\n}\n\n.mdl-color--red-A700 {\n    background-color: #d50000 !important\n}\n\n.mdl-color-text--pink {\n    color: #e91e63 !important\n}\n\n.mdl-color--pink {\n    background-color: #e91e63 !important\n}\n\n.mdl-color-text--pink-50 {\n    color: #fce4ec !important\n}\n\n.mdl-color--pink-50 {\n    background-color: #fce4ec !important\n}\n\n.mdl-color-text--pink-100 {\n    color: #f8bbd0 !important\n}\n\n.mdl-color--pink-100 {\n    background-color: #f8bbd0 !important\n}\n\n.mdl-color-text--pink-200 {\n    color: #f48fb1 !important\n}\n\n.mdl-color--pink-200 {\n    background-color: #f48fb1 !important\n}\n\n.mdl-color-text--pink-300 {\n    color: #f06292 !important\n}\n\n.mdl-color--pink-300 {\n    background-color: #f06292 !important\n}\n\n.mdl-color-text--pink-400 {\n    color: #ec407a !important\n}\n\n.mdl-color--pink-400 {\n    background-color: #ec407a !important\n}\n\n.mdl-color-text--pink-500 {\n    color: #e91e63 !important\n}\n\n.mdl-color--pink-500 {\n    background-color: #e91e63 !important\n}\n\n.mdl-color-text--pink-600 {\n    color: #d81b60 !important\n}\n\n.mdl-color--pink-600 {\n    background-color: #d81b60 !important\n}\n\n.mdl-color-text--pink-700 {\n    color: #c2185b !important\n}\n\n.mdl-color--pink-700 {\n    background-color: #c2185b !important\n}\n\n.mdl-color-text--pink-800 {\n    color: #ad1457 !important\n}\n\n.mdl-color--pink-800 {\n    background-color: #ad1457 !important\n}\n\n.mdl-color-text--pink-900 {\n    color: #880e4f !important\n}\n\n.mdl-color--pink-900 {\n    background-color: #880e4f !important\n}\n\n.mdl-color-text--pink-A100 {\n    color: #ff80ab !important\n}\n\n.mdl-color--pink-A100 {\n    background-color: #ff80ab !important\n}\n\n.mdl-color-text--pink-A200 {\n    color: #ff4081 !important\n}\n\n.mdl-color--pink-A200 {\n    background-color: #ff4081 !important\n}\n\n.mdl-color-text--pink-A400 {\n    color: #f50057 !important\n}\n\n.mdl-color--pink-A400 {\n    background-color: #f50057 !important\n}\n\n.mdl-color-text--pink-A700 {\n    color: #c51162 !important\n}\n\n.mdl-color--pink-A700 {\n    background-color: #c51162 !important\n}\n\n.mdl-color-text--purple {\n    color: #9c27b0 !important\n}\n\n.mdl-color--purple {\n    background-color: #9c27b0 !important\n}\n\n.mdl-color-text--purple-50 {\n    color: #f3e5f5 !important\n}\n\n.mdl-color--purple-50 {\n    background-color: #f3e5f5 !important\n}\n\n.mdl-color-text--purple-100 {\n    color: #e1bee7 !important\n}\n\n.mdl-color--purple-100 {\n    background-color: #e1bee7 !important\n}\n\n.mdl-color-text--purple-200 {\n    color: #ce93d8 !important\n}\n\n.mdl-color--purple-200 {\n    background-color: #ce93d8 !important\n}\n\n.mdl-color-text--purple-300 {\n    color: #ba68c8 !important\n}\n\n.mdl-color--purple-300 {\n    background-color: #ba68c8 !important\n}\n\n.mdl-color-text--purple-400 {\n    color: #ab47bc !important\n}\n\n.mdl-color--purple-400 {\n    background-color: #ab47bc !important\n}\n\n.mdl-color-text--purple-500 {\n    color: #9c27b0 !important\n}\n\n.mdl-color--purple-500 {\n    background-color: #9c27b0 !important\n}\n\n.mdl-color-text--purple-600 {\n    color: #8e24aa !important\n}\n\n.mdl-color--purple-600 {\n    background-color: #8e24aa !important\n}\n\n.mdl-color-text--purple-700 {\n    color: #7b1fa2 !important\n}\n\n.mdl-color--purple-700 {\n    background-color: #7b1fa2 !important\n}\n\n.mdl-color-text--purple-800 {\n    color: #6a1b9a !important\n}\n\n.mdl-color--purple-800 {\n    background-color: #6a1b9a !important\n}\n\n.mdl-color-text--purple-900 {\n    color: #4a148c !important\n}\n\n.mdl-color--purple-900 {\n    background-color: #4a148c !important\n}\n\n.mdl-color-text--purple-A100 {\n    color: #ea80fc !important\n}\n\n.mdl-color--purple-A100 {\n    background-color: #ea80fc !important\n}\n\n.mdl-color-text--purple-A200 {\n    color: #e040fb !important\n}\n\n.mdl-color--purple-A200 {\n    background-color: #e040fb !important\n}\n\n.mdl-color-text--purple-A400 {\n    color: #d500f9 !important\n}\n\n.mdl-color--purple-A400 {\n    background-color: #d500f9 !important\n}\n\n.mdl-color-text--purple-A700 {\n    color: #a0f !important\n}\n\n.mdl-color--purple-A700 {\n    background-color: #a0f !important\n}\n\n.mdl-color-text--deep-purple {\n    color: #673ab7 !important\n}\n\n.mdl-color--deep-purple {\n    background-color: #673ab7 !important\n}\n\n.mdl-color-text--deep-purple-50 {\n    color: #ede7f6 !important\n}\n\n.mdl-color--deep-purple-50 {\n    background-color: #ede7f6 !important\n}\n\n.mdl-color-text--deep-purple-100 {\n    color: #d1c4e9 !important\n}\n\n.mdl-color--deep-purple-100 {\n    background-color: #d1c4e9 !important\n}\n\n.mdl-color-text--deep-purple-200 {\n    color: #b39ddb !important\n}\n\n.mdl-color--deep-purple-200 {\n    background-color: #b39ddb !important\n}\n\n.mdl-color-text--deep-purple-300 {\n    color: #9575cd !important\n}\n\n.mdl-color--deep-purple-300 {\n    background-color: #9575cd !important\n}\n\n.mdl-color-text--deep-purple-400 {\n    color: #7e57c2 !important\n}\n\n.mdl-color--deep-purple-400 {\n    background-color: #7e57c2 !important\n}\n\n.mdl-color-text--deep-purple-500 {\n    color: #673ab7 !important\n}\n\n.mdl-color--deep-purple-500 {\n    background-color: #673ab7 !important\n}\n\n.mdl-color-text--deep-purple-600 {\n    color: #5e35b1 !important\n}\n\n.mdl-color--deep-purple-600 {\n    background-color: #5e35b1 !important\n}\n\n.mdl-color-text--deep-purple-700 {\n    color: #512da8 !important\n}\n\n.mdl-color--deep-purple-700 {\n    background-color: #512da8 !important\n}\n\n.mdl-color-text--deep-purple-800 {\n    color: #4527a0 !important\n}\n\n.mdl-color--deep-purple-800 {\n    background-color: #4527a0 !important\n}\n\n.mdl-color-text--deep-purple-900 {\n    color: #311b92 !important\n}\n\n.mdl-color--deep-purple-900 {\n    background-color: #311b92 !important\n}\n\n.mdl-color-text--deep-purple-A100 {\n    color: #b388ff !important\n}\n\n.mdl-color--deep-purple-A100 {\n    background-color: #b388ff !important\n}\n\n.mdl-color-text--deep-purple-A200 {\n    color: #7c4dff !important\n}\n\n.mdl-color--deep-purple-A200 {\n    background-color: #7c4dff !important\n}\n\n.mdl-color-text--deep-purple-A400 {\n    color: #651fff !important\n}\n\n.mdl-color--deep-purple-A400 {\n    background-color: #651fff !important\n}\n\n.mdl-color-text--deep-purple-A700 {\n    color: #6200ea !important\n}\n\n.mdl-color--deep-purple-A700 {\n    background-color: #6200ea !important\n}\n\n.mdl-color-text--indigo {\n    color: #3f51b5 !important\n}\n\n.mdl-color--indigo {\n    background-color: #3f51b5 !important\n}\n\n.mdl-color-text--indigo-50 {\n    color: #e8eaf6 !important\n}\n\n.mdl-color--indigo-50 {\n    background-color: #e8eaf6 !important\n}\n\n.mdl-color-text--indigo-100 {\n    color: #c5cae9 !important\n}\n\n.mdl-color--indigo-100 {\n    background-color: #c5cae9 !important\n}\n\n.mdl-color-text--indigo-200 {\n    color: #9fa8da !important\n}\n\n.mdl-color--indigo-200 {\n    background-color: #9fa8da !important\n}\n\n.mdl-color-text--indigo-300 {\n    color: #7986cb !important\n}\n\n.mdl-color--indigo-300 {\n    background-color: #7986cb !important\n}\n\n.mdl-color-text--indigo-400 {\n    color: #5c6bc0 !important\n}\n\n.mdl-color--indigo-400 {\n    background-color: #5c6bc0 !important\n}\n\n.mdl-color-text--indigo-500 {\n    color: #3f51b5 !important\n}\n\n.mdl-color--indigo-500 {\n    background-color: #3f51b5 !important\n}\n\n.mdl-color-text--indigo-600 {\n    color: #3949ab !important\n}\n\n.mdl-color--indigo-600 {\n    background-color: #3949ab !important\n}\n\n.mdl-color-text--indigo-700 {\n    color: #303f9f !important\n}\n\n.mdl-color--indigo-700 {\n    background-color: #303f9f !important\n}\n\n.mdl-color-text--indigo-800 {\n    color: #283593 !important\n}\n\n.mdl-color--indigo-800 {\n    background-color: #283593 !important\n}\n\n.mdl-color-text--indigo-900 {\n    color: #1a237e !important\n}\n\n.mdl-color--indigo-900 {\n    background-color: #1a237e !important\n}\n\n.mdl-color-text--indigo-A100 {\n    color: #8c9eff !important\n}\n\n.mdl-color--indigo-A100 {\n    background-color: #8c9eff !important\n}\n\n.mdl-color-text--indigo-A200 {\n    color: #536dfe !important\n}\n\n.mdl-color--indigo-A200 {\n    background-color: #536dfe !important\n}\n\n.mdl-color-text--indigo-A400 {\n    color: #3d5afe !important\n}\n\n.mdl-color--indigo-A400 {\n    background-color: #3d5afe !important\n}\n\n.mdl-color-text--indigo-A700 {\n    color: #304ffe !important\n}\n\n.mdl-color--indigo-A700 {\n    background-color: #304ffe !important\n}\n\n.mdl-color-text--blue {\n    color: #2196f3 !important\n}\n\n.mdl-color--blue {\n    background-color: #2196f3 !important\n}\n\n.mdl-color-text--blue-50 {\n    color: #e3f2fd !important\n}\n\n.mdl-color--blue-50 {\n    background-color: #e3f2fd !important\n}\n\n.mdl-color-text--blue-100 {\n    color: #bbdefb !important\n}\n\n.mdl-color--blue-100 {\n    background-color: #bbdefb !important\n}\n\n.mdl-color-text--blue-200 {\n    color: #90caf9 !important\n}\n\n.mdl-color--blue-200 {\n    background-color: #90caf9 !important\n}\n\n.mdl-color-text--blue-300 {\n    color: #64b5f6 !important\n}\n\n.mdl-color--blue-300 {\n    background-color: #64b5f6 !important\n}\n\n.mdl-color-text--blue-400 {\n    color: #42a5f5 !important\n}\n\n.mdl-color--blue-400 {\n    background-color: #42a5f5 !important\n}\n\n.mdl-color-text--blue-500 {\n    color: #2196f3 !important\n}\n\n.mdl-color--blue-500 {\n    background-color: #2196f3 !important\n}\n\n.mdl-color-text--blue-600 {\n    color: #1e88e5 !important\n}\n\n.mdl-color--blue-600 {\n    background-color: #1e88e5 !important\n}\n\n.mdl-color-text--blue-700 {\n    color: #1976d2 !important\n}\n\n.mdl-color--blue-700 {\n    background-color: #1976d2 !important\n}\n\n.mdl-color-text--blue-800 {\n    color: #1565c0 !important\n}\n\n.mdl-color--blue-800 {\n    background-color: #1565c0 !important\n}\n\n.mdl-color-text--blue-900 {\n    color: #0d47a1 !important\n}\n\n.mdl-color--blue-900 {\n    background-color: #0d47a1 !important\n}\n\n.mdl-color-text--blue-A100 {\n    color: #82b1ff !important\n}\n\n.mdl-color--blue-A100 {\n    background-color: #82b1ff !important\n}\n\n.mdl-color-text--blue-A200 {\n    color: #448aff !important\n}\n\n.mdl-color--blue-A200 {\n    background-color: #448aff !important\n}\n\n.mdl-color-text--blue-A400 {\n    color: #2979ff !important\n}\n\n.mdl-color--blue-A400 {\n    background-color: #2979ff !important\n}\n\n.mdl-color-text--blue-A700 {\n    color: #2962ff !important\n}\n\n.mdl-color--blue-A700 {\n    background-color: #2962ff !important\n}\n\n.mdl-color-text--light-blue {\n    color: #03a9f4 !important\n}\n\n.mdl-color--light-blue {\n    background-color: #03a9f4 !important\n}\n\n.mdl-color-text--light-blue-50 {\n    color: #e1f5fe !important\n}\n\n.mdl-color--light-blue-50 {\n    background-color: #e1f5fe !important\n}\n\n.mdl-color-text--light-blue-100 {\n    color: #b3e5fc !important\n}\n\n.mdl-color--light-blue-100 {\n    background-color: #b3e5fc !important\n}\n\n.mdl-color-text--light-blue-200 {\n    color: #81d4fa !important\n}\n\n.mdl-color--light-blue-200 {\n    background-color: #81d4fa !important\n}\n\n.mdl-color-text--light-blue-300 {\n    color: #4fc3f7 !important\n}\n\n.mdl-color--light-blue-300 {\n    background-color: #4fc3f7 !important\n}\n\n.mdl-color-text--light-blue-400 {\n    color: #29b6f6 !important\n}\n\n.mdl-color--light-blue-400 {\n    background-color: #29b6f6 !important\n}\n\n.mdl-color-text--light-blue-500 {\n    color: #03a9f4 !important\n}\n\n.mdl-color--light-blue-500 {\n    background-color: #03a9f4 !important\n}\n\n.mdl-color-text--light-blue-600 {\n    color: #039be5 !important\n}\n\n.mdl-color--light-blue-600 {\n    background-color: #039be5 !important\n}\n\n.mdl-color-text--light-blue-700 {\n    color: #0288d1 !important\n}\n\n.mdl-color--light-blue-700 {\n    background-color: #0288d1 !important\n}\n\n.mdl-color-text--light-blue-800 {\n    color: #0277bd !important\n}\n\n.mdl-color--light-blue-800 {\n    background-color: #0277bd !important\n}\n\n.mdl-color-text--light-blue-900 {\n    color: #01579b !important\n}\n\n.mdl-color--light-blue-900 {\n    background-color: #01579b !important\n}\n\n.mdl-color-text--light-blue-A100 {\n    color: #80d8ff !important\n}\n\n.mdl-color--light-blue-A100 {\n    background-color: #80d8ff !important\n}\n\n.mdl-color-text--light-blue-A200 {\n    color: #40c4ff !important\n}\n\n.mdl-color--light-blue-A200 {\n    background-color: #40c4ff !important\n}\n\n.mdl-color-text--light-blue-A400 {\n    color: #00b0ff !important\n}\n\n.mdl-color--light-blue-A400 {\n    background-color: #00b0ff !important\n}\n\n.mdl-color-text--light-blue-A700 {\n    color: #0091ea !important\n}\n\n.mdl-color--light-blue-A700 {\n    background-color: #0091ea !important\n}\n\n.mdl-color-text--cyan {\n    color: #00bcd4 !important\n}\n\n.mdl-color--cyan {\n    background-color: #00bcd4 !important\n}\n\n.mdl-color-text--cyan-50 {\n    color: #e0f7fa !important\n}\n\n.mdl-color--cyan-50 {\n    background-color: #e0f7fa !important\n}\n\n.mdl-color-text--cyan-100 {\n    color: #b2ebf2 !important\n}\n\n.mdl-color--cyan-100 {\n    background-color: #b2ebf2 !important\n}\n\n.mdl-color-text--cyan-200 {\n    color: #80deea !important\n}\n\n.mdl-color--cyan-200 {\n    background-color: #80deea !important\n}\n\n.mdl-color-text--cyan-300 {\n    color: #4dd0e1 !important\n}\n\n.mdl-color--cyan-300 {\n    background-color: #4dd0e1 !important\n}\n\n.mdl-color-text--cyan-400 {\n    color: #26c6da !important\n}\n\n.mdl-color--cyan-400 {\n    background-color: #26c6da !important\n}\n\n.mdl-color-text--cyan-500 {\n    color: #00bcd4 !important\n}\n\n.mdl-color--cyan-500 {\n    background-color: #00bcd4 !important\n}\n\n.mdl-color-text--cyan-600 {\n    color: #00acc1 !important\n}\n\n.mdl-color--cyan-600 {\n    background-color: #00acc1 !important\n}\n\n.mdl-color-text--cyan-700 {\n    color: #0097a7 !important\n}\n\n.mdl-color--cyan-700 {\n    background-color: #0097a7 !important\n}\n\n.mdl-color-text--cyan-800 {\n    color: #00838f !important\n}\n\n.mdl-color--cyan-800 {\n    background-color: #00838f !important\n}\n\n.mdl-color-text--cyan-900 {\n    color: #006064 !important\n}\n\n.mdl-color--cyan-900 {\n    background-color: #006064 !important\n}\n\n.mdl-color-text--cyan-A100 {\n    color: #84ffff !important\n}\n\n.mdl-color--cyan-A100 {\n    background-color: #84ffff !important\n}\n\n.mdl-color-text--cyan-A200 {\n    color: #18ffff !important\n}\n\n.mdl-color--cyan-A200 {\n    background-color: #18ffff !important\n}\n\n.mdl-color-text--cyan-A400 {\n    color: #00e5ff !important\n}\n\n.mdl-color--cyan-A400 {\n    background-color: #00e5ff !important\n}\n\n.mdl-color-text--cyan-A700 {\n    color: #00b8d4 !important\n}\n\n.mdl-color--cyan-A700 {\n    background-color: #00b8d4 !important\n}\n\n.mdl-color-text--teal {\n    color: #009688 !important\n}\n\n.mdl-color--teal {\n    background-color: #009688 !important\n}\n\n.mdl-color-text--teal-50 {\n    color: #e0f2f1 !important\n}\n\n.mdl-color--teal-50 {\n    background-color: #e0f2f1 !important\n}\n\n.mdl-color-text--teal-100 {\n    color: #b2dfdb !important\n}\n\n.mdl-color--teal-100 {\n    background-color: #b2dfdb !important\n}\n\n.mdl-color-text--teal-200 {\n    color: #80cbc4 !important\n}\n\n.mdl-color--teal-200 {\n    background-color: #80cbc4 !important\n}\n\n.mdl-color-text--teal-300 {\n    color: #4db6ac !important\n}\n\n.mdl-color--teal-300 {\n    background-color: #4db6ac !important\n}\n\n.mdl-color-text--teal-400 {\n    color: #26a69a !important\n}\n\n.mdl-color--teal-400 {\n    background-color: #26a69a !important\n}\n\n.mdl-color-text--teal-500 {\n    color: #009688 !important\n}\n\n.mdl-color--teal-500 {\n    background-color: #009688 !important\n}\n\n.mdl-color-text--teal-600 {\n    color: #00897b !important\n}\n\n.mdl-color--teal-600 {\n    background-color: #00897b !important\n}\n\n.mdl-color-text--teal-700 {\n    color: #00796b !important\n}\n\n.mdl-color--teal-700 {\n    background-color: #00796b !important\n}\n\n.mdl-color-text--teal-800 {\n    color: #00695c !important\n}\n\n.mdl-color--teal-800 {\n    background-color: #00695c !important\n}\n\n.mdl-color-text--teal-900 {\n    color: #004d40 !important\n}\n\n.mdl-color--teal-900 {\n    background-color: #004d40 !important\n}\n\n.mdl-color-text--teal-A100 {\n    color: #a7ffeb !important\n}\n\n.mdl-color--teal-A100 {\n    background-color: #a7ffeb !important\n}\n\n.mdl-color-text--teal-A200 {\n    color: #64ffda !important\n}\n\n.mdl-color--teal-A200 {\n    background-color: #64ffda !important\n}\n\n.mdl-color-text--teal-A400 {\n    color: #1de9b6 !important\n}\n\n.mdl-color--teal-A400 {\n    background-color: #1de9b6 !important\n}\n\n.mdl-color-text--teal-A700 {\n    color: #00bfa5 !important\n}\n\n.mdl-color--teal-A700 {\n    background-color: #00bfa5 !important\n}\n\n.mdl-color-text--green {\n    color: #4caf50 !important\n}\n\n.mdl-color--green {\n    background-color: #4caf50 !important\n}\n\n.mdl-color-text--green-50 {\n    color: #e8f5e9 !important\n}\n\n.mdl-color--green-50 {\n    background-color: #e8f5e9 !important\n}\n\n.mdl-color-text--green-100 {\n    color: #c8e6c9 !important\n}\n\n.mdl-color--green-100 {\n    background-color: #c8e6c9 !important\n}\n\n.mdl-color-text--green-200 {\n    color: #a5d6a7 !important\n}\n\n.mdl-color--green-200 {\n    background-color: #a5d6a7 !important\n}\n\n.mdl-color-text--green-300 {\n    color: #81c784 !important\n}\n\n.mdl-color--green-300 {\n    background-color: #81c784 !important\n}\n\n.mdl-color-text--green-400 {\n    color: #66bb6a !important\n}\n\n.mdl-color--green-400 {\n    background-color: #66bb6a !important\n}\n\n.mdl-color-text--green-500 {\n    color: #4caf50 !important\n}\n\n.mdl-color--green-500 {\n    background-color: #4caf50 !important\n}\n\n.mdl-color-text--green-600 {\n    color: #43a047 !important\n}\n\n.mdl-color--green-600 {\n    background-color: #43a047 !important\n}\n\n.mdl-color-text--green-700 {\n    color: #388e3c !important\n}\n\n.mdl-color--green-700 {\n    background-color: #388e3c !important\n}\n\n.mdl-color-text--green-800 {\n    color: #2e7d32 !important\n}\n\n.mdl-color--green-800 {\n    background-color: #2e7d32 !important\n}\n\n.mdl-color-text--green-900 {\n    color: #1b5e20 !important\n}\n\n.mdl-color--green-900 {\n    background-color: #1b5e20 !important\n}\n\n.mdl-color-text--green-A100 {\n    color: #b9f6ca !important\n}\n\n.mdl-color--green-A100 {\n    background-color: #b9f6ca !important\n}\n\n.mdl-color-text--green-A200 {\n    color: #69f0ae !important\n}\n\n.mdl-color--green-A200 {\n    background-color: #69f0ae !important\n}\n\n.mdl-color-text--green-A400 {\n    color: #00e676 !important\n}\n\n.mdl-color--green-A400 {\n    background-color: #00e676 !important\n}\n\n.mdl-color-text--green-A700 {\n    color: #00c853 !important\n}\n\n.mdl-color--green-A700 {\n    background-color: #00c853 !important\n}\n\n.mdl-color-text--light-green {\n    color: #8bc34a !important\n}\n\n.mdl-color--light-green {\n    background-color: #8bc34a !important\n}\n\n.mdl-color-text--light-green-50 {\n    color: #f1f8e9 !important\n}\n\n.mdl-color--light-green-50 {\n    background-color: #f1f8e9 !important\n}\n\n.mdl-color-text--light-green-100 {\n    color: #dcedc8 !important\n}\n\n.mdl-color--light-green-100 {\n    background-color: #dcedc8 !important\n}\n\n.mdl-color-text--light-green-200 {\n    color: #c5e1a5 !important\n}\n\n.mdl-color--light-green-200 {\n    background-color: #c5e1a5 !important\n}\n\n.mdl-color-text--light-green-300 {\n    color: #aed581 !important\n}\n\n.mdl-color--light-green-300 {\n    background-color: #aed581 !important\n}\n\n.mdl-color-text--light-green-400 {\n    color: #9ccc65 !important\n}\n\n.mdl-color--light-green-400 {\n    background-color: #9ccc65 !important\n}\n\n.mdl-color-text--light-green-500 {\n    color: #8bc34a !important\n}\n\n.mdl-color--light-green-500 {\n    background-color: #8bc34a !important\n}\n\n.mdl-color-text--light-green-600 {\n    color: #7cb342 !important\n}\n\n.mdl-color--light-green-600 {\n    background-color: #7cb342 !important\n}\n\n.mdl-color-text--light-green-700 {\n    color: #689f38 !important\n}\n\n.mdl-color--light-green-700 {\n    background-color: #689f38 !important\n}\n\n.mdl-color-text--light-green-800 {\n    color: #558b2f !important\n}\n\n.mdl-color--light-green-800 {\n    background-color: #558b2f !important\n}\n\n.mdl-color-text--light-green-900 {\n    color: #33691e !important\n}\n\n.mdl-color--light-green-900 {\n    background-color: #33691e !important\n}\n\n.mdl-color-text--light-green-A100 {\n    color: #ccff90 !important\n}\n\n.mdl-color--light-green-A100 {\n    background-color: #ccff90 !important\n}\n\n.mdl-color-text--light-green-A200 {\n    color: #b2ff59 !important\n}\n\n.mdl-color--light-green-A200 {\n    background-color: #b2ff59 !important\n}\n\n.mdl-color-text--light-green-A400 {\n    color: #76ff03 !important\n}\n\n.mdl-color--light-green-A400 {\n    background-color: #76ff03 !important\n}\n\n.mdl-color-text--light-green-A700 {\n    color: #64dd17 !important\n}\n\n.mdl-color--light-green-A700 {\n    background-color: #64dd17 !important\n}\n\n.mdl-color-text--lime {\n    color: #cddc39 !important\n}\n\n.mdl-color--lime {\n    background-color: #cddc39 !important\n}\n\n.mdl-color-text--lime-50 {\n    color: #f9fbe7 !important\n}\n\n.mdl-color--lime-50 {\n    background-color: #f9fbe7 !important\n}\n\n.mdl-color-text--lime-100 {\n    color: #f0f4c3 !important\n}\n\n.mdl-color--lime-100 {\n    background-color: #f0f4c3 !important\n}\n\n.mdl-color-text--lime-200 {\n    color: #e6ee9c !important\n}\n\n.mdl-color--lime-200 {\n    background-color: #e6ee9c !important\n}\n\n.mdl-color-text--lime-300 {\n    color: #dce775 !important\n}\n\n.mdl-color--lime-300 {\n    background-color: #dce775 !important\n}\n\n.mdl-color-text--lime-400 {\n    color: #d4e157 !important\n}\n\n.mdl-color--lime-400 {\n    background-color: #d4e157 !important\n}\n\n.mdl-color-text--lime-500 {\n    color: #cddc39 !important\n}\n\n.mdl-color--lime-500 {\n    background-color: #cddc39 !important\n}\n\n.mdl-color-text--lime-600 {\n    color: #c0ca33 !important\n}\n\n.mdl-color--lime-600 {\n    background-color: #c0ca33 !important\n}\n\n.mdl-color-text--lime-700 {\n    color: #afb42b !important\n}\n\n.mdl-color--lime-700 {\n    background-color: #afb42b !important\n}\n\n.mdl-color-text--lime-800 {\n    color: #9e9d24 !important\n}\n\n.mdl-color--lime-800 {\n    background-color: #9e9d24 !important\n}\n\n.mdl-color-text--lime-900 {\n    color: #827717 !important\n}\n\n.mdl-color--lime-900 {\n    background-color: #827717 !important\n}\n\n.mdl-color-text--lime-A100 {\n    color: #f4ff81 !important\n}\n\n.mdl-color--lime-A100 {\n    background-color: #f4ff81 !important\n}\n\n.mdl-color-text--lime-A200 {\n    color: #eeff41 !important\n}\n\n.mdl-color--lime-A200 {\n    background-color: #eeff41 !important\n}\n\n.mdl-color-text--lime-A400 {\n    color: #c6ff00 !important\n}\n\n.mdl-color--lime-A400 {\n    background-color: #c6ff00 !important\n}\n\n.mdl-color-text--lime-A700 {\n    color: #aeea00 !important\n}\n\n.mdl-color--lime-A700 {\n    background-color: #aeea00 !important\n}\n\n.mdl-color-text--yellow {\n    color: #ffeb3b !important\n}\n\n.mdl-color--yellow {\n    background-color: #ffeb3b !important\n}\n\n.mdl-color-text--yellow-50 {\n    color: #fffde7 !important\n}\n\n.mdl-color--yellow-50 {\n    background-color: #fffde7 !important\n}\n\n.mdl-color-text--yellow-100 {\n    color: #fff9c4 !important\n}\n\n.mdl-color--yellow-100 {\n    background-color: #fff9c4 !important\n}\n\n.mdl-color-text--yellow-200 {\n    color: #fff59d !important\n}\n\n.mdl-color--yellow-200 {\n    background-color: #fff59d !important\n}\n\n.mdl-color-text--yellow-300 {\n    color: #fff176 !important\n}\n\n.mdl-color--yellow-300 {\n    background-color: #fff176 !important\n}\n\n.mdl-color-text--yellow-400 {\n    color: #ffee58 !important\n}\n\n.mdl-color--yellow-400 {\n    background-color: #ffee58 !important\n}\n\n.mdl-color-text--yellow-500 {\n    color: #ffeb3b !important\n}\n\n.mdl-color--yellow-500 {\n    background-color: #ffeb3b !important\n}\n\n.mdl-color-text--yellow-600 {\n    color: #fdd835 !important\n}\n\n.mdl-color--yellow-600 {\n    background-color: #fdd835 !important\n}\n\n.mdl-color-text--yellow-700 {\n    color: #fbc02d !important\n}\n\n.mdl-color--yellow-700 {\n    background-color: #fbc02d !important\n}\n\n.mdl-color-text--yellow-800 {\n    color: #f9a825 !important\n}\n\n.mdl-color--yellow-800 {\n    background-color: #f9a825 !important\n}\n\n.mdl-color-text--yellow-900 {\n    color: #f57f17 !important\n}\n\n.mdl-color--yellow-900 {\n    background-color: #f57f17 !important\n}\n\n.mdl-color-text--yellow-A100 {\n    color: #ffff8d !important\n}\n\n.mdl-color--yellow-A100 {\n    background-color: #ffff8d !important\n}\n\n.mdl-color-text--yellow-A200 {\n    color: #ff0 !important\n}\n\n.mdl-color--yellow-A200 {\n    background-color: #ff0 !important\n}\n\n.mdl-color-text--yellow-A400 {\n    color: #ffea00 !important\n}\n\n.mdl-color--yellow-A400 {\n    background-color: #ffea00 !important\n}\n\n.mdl-color-text--yellow-A700 {\n    color: #ffd600 !important\n}\n\n.mdl-color--yellow-A700 {\n    background-color: #ffd600 !important\n}\n\n.mdl-color-text--amber {\n    color: #ffc107 !important\n}\n\n.mdl-color--amber {\n    background-color: #ffc107 !important\n}\n\n.mdl-color-text--amber-50 {\n    color: #fff8e1 !important\n}\n\n.mdl-color--amber-50 {\n    background-color: #fff8e1 !important\n}\n\n.mdl-color-text--amber-100 {\n    color: #ffecb3 !important\n}\n\n.mdl-color--amber-100 {\n    background-color: #ffecb3 !important\n}\n\n.mdl-color-text--amber-200 {\n    color: #ffe082 !important\n}\n\n.mdl-color--amber-200 {\n    background-color: #ffe082 !important\n}\n\n.mdl-color-text--amber-300 {\n    color: #ffd54f !important\n}\n\n.mdl-color--amber-300 {\n    background-color: #ffd54f !important\n}\n\n.mdl-color-text--amber-400 {\n    color: #ffca28 !important\n}\n\n.mdl-color--amber-400 {\n    background-color: #ffca28 !important\n}\n\n.mdl-color-text--amber-500 {\n    color: #ffc107 !important\n}\n\n.mdl-color--amber-500 {\n    background-color: #ffc107 !important\n}\n\n.mdl-color-text--amber-600 {\n    color: #ffb300 !important\n}\n\n.mdl-color--amber-600 {\n    background-color: #ffb300 !important\n}\n\n.mdl-color-text--amber-700 {\n    color: #ffa000 !important\n}\n\n.mdl-color--amber-700 {\n    background-color: #ffa000 !important\n}\n\n.mdl-color-text--amber-800 {\n    color: #ff8f00 !important\n}\n\n.mdl-color--amber-800 {\n    background-color: #ff8f00 !important\n}\n\n.mdl-color-text--amber-900 {\n    color: #ff6f00 !important\n}\n\n.mdl-color--amber-900 {\n    background-color: #ff6f00 !important\n}\n\n.mdl-color-text--amber-A100 {\n    color: #ffe57f !important\n}\n\n.mdl-color--amber-A100 {\n    background-color: #ffe57f !important\n}\n\n.mdl-color-text--amber-A200 {\n    color: #ffd740 !important\n}\n\n.mdl-color--amber-A200 {\n    background-color: #ffd740 !important\n}\n\n.mdl-color-text--amber-A400 {\n    color: #ffc400 !important\n}\n\n.mdl-color--amber-A400 {\n    background-color: #ffc400 !important\n}\n\n.mdl-color-text--amber-A700 {\n    color: #ffab00 !important\n}\n\n.mdl-color--amber-A700 {\n    background-color: #ffab00 !important\n}\n\n.mdl-color-text--orange {\n    color: #ff9800 !important\n}\n\n.mdl-color--orange {\n    background-color: #ff9800 !important\n}\n\n.mdl-color-text--orange-50 {\n    color: #fff3e0 !important\n}\n\n.mdl-color--orange-50 {\n    background-color: #fff3e0 !important\n}\n\n.mdl-color-text--orange-100 {\n    color: #ffe0b2 !important\n}\n\n.mdl-color--orange-100 {\n    background-color: #ffe0b2 !important\n}\n\n.mdl-color-text--orange-200 {\n    color: #ffcc80 !important\n}\n\n.mdl-color--orange-200 {\n    background-color: #ffcc80 !important\n}\n\n.mdl-color-text--orange-300 {\n    color: #ffb74d !important\n}\n\n.mdl-color--orange-300 {\n    background-color: #ffb74d !important\n}\n\n.mdl-color-text--orange-400 {\n    color: #ffa726 !important\n}\n\n.mdl-color--orange-400 {\n    background-color: #ffa726 !important\n}\n\n.mdl-color-text--orange-500 {\n    color: #ff9800 !important\n}\n\n.mdl-color--orange-500 {\n    background-color: #ff9800 !important\n}\n\n.mdl-color-text--orange-600 {\n    color: #fb8c00 !important\n}\n\n.mdl-color--orange-600 {\n    background-color: #fb8c00 !important\n}\n\n.mdl-color-text--orange-700 {\n    color: #f57c00 !important\n}\n\n.mdl-color--orange-700 {\n    background-color: #f57c00 !important\n}\n\n.mdl-color-text--orange-800 {\n    color: #ef6c00 !important\n}\n\n.mdl-color--orange-800 {\n    background-color: #ef6c00 !important\n}\n\n.mdl-color-text--orange-900 {\n    color: #e65100 !important\n}\n\n.mdl-color--orange-900 {\n    background-color: #e65100 !important\n}\n\n.mdl-color-text--orange-A100 {\n    color: #ffd180 !important\n}\n\n.mdl-color--orange-A100 {\n    background-color: #ffd180 !important\n}\n\n.mdl-color-text--orange-A200 {\n    color: #ffab40 !important\n}\n\n.mdl-color--orange-A200 {\n    background-color: #ffab40 !important\n}\n\n.mdl-color-text--orange-A400 {\n    color: #ff9100 !important\n}\n\n.mdl-color--orange-A400 {\n    background-color: #ff9100 !important\n}\n\n.mdl-color-text--orange-A700 {\n    color: #ff6d00 !important\n}\n\n.mdl-color--orange-A700 {\n    background-color: #ff6d00 !important\n}\n\n.mdl-color-text--deep-orange {\n    color: #ff5722 !important\n}\n\n.mdl-color--deep-orange {\n    background-color: #ff5722 !important\n}\n\n.mdl-color-text--deep-orange-50 {\n    color: #fbe9e7 !important\n}\n\n.mdl-color--deep-orange-50 {\n    background-color: #fbe9e7 !important\n}\n\n.mdl-color-text--deep-orange-100 {\n    color: #ffccbc !important\n}\n\n.mdl-color--deep-orange-100 {\n    background-color: #ffccbc !important\n}\n\n.mdl-color-text--deep-orange-200 {\n    color: #ffab91 !important\n}\n\n.mdl-color--deep-orange-200 {\n    background-color: #ffab91 !important\n}\n\n.mdl-color-text--deep-orange-300 {\n    color: #ff8a65 !important\n}\n\n.mdl-color--deep-orange-300 {\n    background-color: #ff8a65 !important\n}\n\n.mdl-color-text--deep-orange-400 {\n    color: #ff7043 !important\n}\n\n.mdl-color--deep-orange-400 {\n    background-color: #ff7043 !important\n}\n\n.mdl-color-text--deep-orange-500 {\n    color: #ff5722 !important\n}\n\n.mdl-color--deep-orange-500 {\n    background-color: #ff5722 !important\n}\n\n.mdl-color-text--deep-orange-600 {\n    color: #f4511e !important\n}\n\n.mdl-color--deep-orange-600 {\n    background-color: #f4511e !important\n}\n\n.mdl-color-text--deep-orange-700 {\n    color: #e64a19 !important\n}\n\n.mdl-color--deep-orange-700 {\n    background-color: #e64a19 !important\n}\n\n.mdl-color-text--deep-orange-800 {\n    color: #d84315 !important\n}\n\n.mdl-color--deep-orange-800 {\n    background-color: #d84315 !important\n}\n\n.mdl-color-text--deep-orange-900 {\n    color: #bf360c !important\n}\n\n.mdl-color--deep-orange-900 {\n    background-color: #bf360c !important\n}\n\n.mdl-color-text--deep-orange-A100 {\n    color: #ff9e80 !important\n}\n\n.mdl-color--deep-orange-A100 {\n    background-color: #ff9e80 !important\n}\n\n.mdl-color-text--deep-orange-A200 {\n    color: #ff6e40 !important\n}\n\n.mdl-color--deep-orange-A200 {\n    background-color: #ff6e40 !important\n}\n\n.mdl-color-text--deep-orange-A400 {\n    color: #ff3d00 !important\n}\n\n.mdl-color--deep-orange-A400 {\n    background-color: #ff3d00 !important\n}\n\n.mdl-color-text--deep-orange-A700 {\n    color: #dd2c00 !important\n}\n\n.mdl-color--deep-orange-A700 {\n    background-color: #dd2c00 !important\n}\n\n.mdl-color-text--brown {\n    color: #795548 !important\n}\n\n.mdl-color--brown {\n    background-color: #795548 !important\n}\n\n.mdl-color-text--brown-50 {\n    color: #efebe9 !important\n}\n\n.mdl-color--brown-50 {\n    background-color: #efebe9 !important\n}\n\n.mdl-color-text--brown-100 {\n    color: #d7ccc8 !important\n}\n\n.mdl-color--brown-100 {\n    background-color: #d7ccc8 !important\n}\n\n.mdl-color-text--brown-200 {\n    color: #bcaaa4 !important\n}\n\n.mdl-color--brown-200 {\n    background-color: #bcaaa4 !important\n}\n\n.mdl-color-text--brown-300 {\n    color: #a1887f !important\n}\n\n.mdl-color--brown-300 {\n    background-color: #a1887f !important\n}\n\n.mdl-color-text--brown-400 {\n    color: #8d6e63 !important\n}\n\n.mdl-color--brown-400 {\n    background-color: #8d6e63 !important\n}\n\n.mdl-color-text--brown-500 {\n    color: #795548 !important\n}\n\n.mdl-color--brown-500 {\n    background-color: #795548 !important\n}\n\n.mdl-color-text--brown-600 {\n    color: #6d4c41 !important\n}\n\n.mdl-color--brown-600 {\n    background-color: #6d4c41 !important\n}\n\n.mdl-color-text--brown-700 {\n    color: #5d4037 !important\n}\n\n.mdl-color--brown-700 {\n    background-color: #5d4037 !important\n}\n\n.mdl-color-text--brown-800 {\n    color: #4e342e !important\n}\n\n.mdl-color--brown-800 {\n    background-color: #4e342e !important\n}\n\n.mdl-color-text--brown-900 {\n    color: #3e2723 !important\n}\n\n.mdl-color--brown-900 {\n    background-color: #3e2723 !important\n}\n\n.mdl-color-text--grey {\n    color: #9e9e9e !important\n}\n\n.mdl-color--grey {\n    background-color: #9e9e9e !important\n}\n\n.mdl-color-text--grey-50 {\n    color: #fafafa !important\n}\n\n.mdl-color--grey-50 {\n    background-color: #fafafa !important\n}\n\n.mdl-color-text--grey-100 {\n    color: #f5f5f5 !important\n}\n\n.mdl-color--grey-100 {\n    background-color: #f5f5f5 !important\n}\n\n.mdl-color-text--grey-200 {\n    color: #eee !important\n}\n\n.mdl-color--grey-200 {\n    background-color: #eee !important\n}\n\n.mdl-color-text--grey-300 {\n    color: #e0e0e0 !important\n}\n\n.mdl-color--grey-300 {\n    background-color: #e0e0e0 !important\n}\n\n.mdl-color-text--grey-400 {\n    color: #bdbdbd !important\n}\n\n.mdl-color--grey-400 {\n    background-color: #bdbdbd !important\n}\n\n.mdl-color-text--grey-500 {\n    color: #9e9e9e !important\n}\n\n.mdl-color--grey-500 {\n    background-color: #9e9e9e !important\n}\n\n.mdl-color-text--grey-600 {\n    color: #757575 !important\n}\n\n.mdl-color--grey-600 {\n    background-color: #757575 !important\n}\n\n.mdl-color-text--grey-700 {\n    color: #616161 !important\n}\n\n.mdl-color--grey-700 {\n    background-color: #616161 !important\n}\n\n.mdl-color-text--grey-800 {\n    color: #424242 !important\n}\n\n.mdl-color--grey-800 {\n    background-color: #424242 !important\n}\n\n.mdl-color-text--grey-900 {\n    color: #212121 !important\n}\n\n.mdl-color--grey-900 {\n    background-color: #212121 !important\n}\n\n.mdl-color-text--blue-grey {\n    color: #607d8b !important\n}\n\n.mdl-color--blue-grey {\n    background-color: #607d8b !important\n}\n\n.mdl-color-text--blue-grey-50 {\n    color: #eceff1 !important\n}\n\n.mdl-color--blue-grey-50 {\n    background-color: #eceff1 !important\n}\n\n.mdl-color-text--blue-grey-100 {\n    color: #cfd8dc !important\n}\n\n.mdl-color--blue-grey-100 {\n    background-color: #cfd8dc !important\n}\n\n.mdl-color-text--blue-grey-200 {\n    color: #b0bec5 !important\n}\n\n.mdl-color--blue-grey-200 {\n    background-color: #b0bec5 !important\n}\n\n.mdl-color-text--blue-grey-300 {\n    color: #90a4ae !important\n}\n\n.mdl-color--blue-grey-300 {\n    background-color: #90a4ae !important\n}\n\n.mdl-color-text--blue-grey-400 {\n    color: #78909c !important\n}\n\n.mdl-color--blue-grey-400 {\n    background-color: #78909c !important\n}\n\n.mdl-color-text--blue-grey-500 {\n    color: #607d8b !important\n}\n\n.mdl-color--blue-grey-500 {\n    background-color: #607d8b !important\n}\n\n.mdl-color-text--blue-grey-600 {\n    color: #546e7a !important\n}\n\n.mdl-color--blue-grey-600 {\n    background-color: #546e7a !important\n}\n\n.mdl-color-text--blue-grey-700 {\n    color: #455a64 !important\n}\n\n.mdl-color--blue-grey-700 {\n    background-color: #455a64 !important\n}\n\n.mdl-color-text--blue-grey-800 {\n    color: #37474f !important\n}\n\n.mdl-color--blue-grey-800 {\n    background-color: #37474f !important\n}\n\n.mdl-color-text--blue-grey-900 {\n    color: #263238 !important\n}\n\n.mdl-color--blue-grey-900 {\n    background-color: #263238 !important\n}\n\n.mdl-color--black {\n    background-color: #000 !important\n}\n\n.mdl-color-text--black {\n    color: #000 !important\n}\n\n.mdl-color--white {\n    background-color: #fff !important\n}\n\n.mdl-color-text--white {\n    color: #fff !important\n}\n\n.mdl-color--primary {\n    background-color: rgb(255, 87, 34) !important\n}\n\n.mdl-color--primary-contrast {\n    background-color: rgb(255, 255, 255) !important\n}\n\n.mdl-color--primary-dark {\n    background-color: rgb(230, 74, 25) !important\n}\n\n.mdl-color--accent {\n    background-color: rgb(255, 64, 129) !important\n}\n\n.mdl-color--accent-contrast {\n    background-color: rgb(255, 255, 255) !important\n}\n\n.mdl-color-text--primary {\n    color: rgb(255, 87, 34) !important\n}\n\n.mdl-color-text--primary-contrast {\n    color: rgb(255, 255, 255) !important\n}\n\n.mdl-color-text--primary-dark {\n    color: rgb(230, 74, 25) !important\n}\n\n.mdl-color-text--accent {\n    color: rgb(255, 64, 129) !important\n}\n\n.mdl-color-text--accent-contrast {\n    color: rgb(255, 255, 255) !important\n}\n\n.mdl-ripple {\n    background: #000;\n    border-radius: 50%;\n    height: 50px;\n    left: 0;\n    opacity: 0;\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    -webkit-transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%);\n    transform: translate(-50%, -50%);\n    width: 50px;\n    overflow: hidden\n}\n\n.mdl-ripple.is-animating {\n    -webkit-transition: -webkit-transform .3s cubic-bezier(0, 0, .2, 1), width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .6s cubic-bezier(0, 0, .2, 1);\n    transition: transform .3s cubic-bezier(0, 0, .2, 1), width .3s cubic-bezier(0, 0, .2, 1), height .3s cubic-bezier(0, 0, .2, 1), opacity .6s cubic-bezier(0, 0, .2, 1)\n}\n\n.mdl-ripple.is-visible {\n    opacity: .3\n}\n\n.mdl-animation--default,\n.mdl-animation--fast-out-slow-in {\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-animation--linear-out-slow-in {\n    -webkit-transition-timing-function: cubic-bezier(0, 0, .2, 1);\n    transition-timing-function: cubic-bezier(0, 0, .2, 1)\n}\n\n.mdl-animation--fast-out-linear-in {\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, 1, 1);\n    transition-timing-function: cubic-bezier(.4, 0, 1, 1)\n}\n\n.mdl-badge {\n    position: relative;\n    white-space: nowrap;\n    margin-right: 24px\n}\n\n.mdl-badge:not([data-badge]) {\n    margin-right: auto\n}\n\n.mdl-badge[data-badge]:after {\n    content: attr(data-badge);\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: wrap;\n    -ms-flex-wrap: wrap;\n    flex-wrap: wrap;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-content: center;\n    -ms-flex-line-pack: center;\n    align-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    position: absolute;\n    top: -11px;\n    right: -24px;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-weight: 600;\n    font-size: 12px;\n    width: 22px;\n    height: 22px;\n    border-radius: 50%;\n    background: rgb(255, 64, 129);\n    color: rgb(255, 255, 255)\n}\n\n.mdl-button .mdl-badge[data-badge]:after {\n    top: -10px;\n    right: -5px\n}\n\n.mdl-badge.mdl-badge--no-background[data-badge]:after {\n    color: rgb(255, 64, 129);\n    background: rgb(255, 255, 255);\n    box-shadow: 0 0 1px gray\n}\n\n.mdl-button {\n    background: 0 0;\n    border: none;\n    border-radius: 2px;\n    color: #000;\n    position: relative;\n    height: 36px;\n    min-width: 64px;\n    padding: 0 16px;\n    display: inline-block;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 14px;\n    font-weight: 500;\n    text-transform: uppercase;\n    letter-spacing: 0;\n    overflow: hidden;\n    will-change: box-shadow, transform;\n    -webkit-transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);\n    transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);\n    outline: none;\n    cursor: pointer;\n    text-decoration: none;\n    text-align: center;\n    line-height: 36px;\n    vertical-align: middle\n}\n\n.mdl-button::-moz-focus-inner {\n    border: 0\n}\n\n.mdl-button:hover {\n    background-color: rgba(158, 158, 158, .2)\n}\n\n.mdl-button:focus:not(:active) {\n    background-color: rgba(0, 0, 0, .12)\n}\n\n.mdl-button:active {\n    background-color: rgba(158, 158, 158, .4)\n}\n\n.mdl-button.mdl-button--colored {\n    color: rgb(255, 87, 34)\n}\n\n.mdl-button.mdl-button--colored:focus:not(:active) {\n    background-color: rgba(0, 0, 0, .12)\n}\n\ninput.mdl-button[type=\"submit\"] {\n    -webkit-appearance: none\n}\n\n.mdl-button--raised {\n    background: rgba(158, 158, 158, .2);\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-button--raised:active {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n    background-color: rgba(158, 158, 158, .4)\n}\n\n.mdl-button--raised:focus:not(:active) {\n    box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n    background-color: rgba(158, 158, 158, .4)\n}\n\n.mdl-button--raised.mdl-button--colored {\n    background: rgb(255, 87, 34);\n    color: rgb(255, 255, 255)\n}\n\n.mdl-button--raised.mdl-button--colored:hover {\n    background-color: rgb(255, 87, 34)\n}\n\n.mdl-button--raised.mdl-button--colored:active {\n    background-color: rgb(255, 87, 34)\n}\n\n.mdl-button--raised.mdl-button--colored:focus:not(:active) {\n    background-color: rgb(255, 87, 34)\n}\n\n.mdl-button--raised.mdl-button--colored .mdl-ripple {\n    background: rgb(255, 255, 255)\n}\n\n.mdl-button--fab {\n    border-radius: 50%;\n    font-size: 24px;\n    height: 56px;\n    margin: auto;\n    min-width: 56px;\n    width: 56px;\n    padding: 0;\n    overflow: hidden;\n    background: rgba(158, 158, 158, .2);\n    box-shadow: 0 1px 1.5px 0 rgba(0, 0, 0, .12), 0 1px 1px 0 rgba(0, 0, 0, .24);\n    position: relative;\n    line-height: normal\n}\n\n.mdl-button--fab .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n    -ms-transform: translate(-12px, -12px);\n    transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px\n}\n\n.mdl-button--fab.mdl-button--mini-fab {\n    height: 40px;\n    min-width: 40px;\n    width: 40px\n}\n\n.mdl-button--fab .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)\n}\n\n.mdl-button--fab:active {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);\n    background-color: rgba(158, 158, 158, .4)\n}\n\n.mdl-button--fab:focus:not(:active) {\n    box-shadow: 0 0 8px rgba(0, 0, 0, .18), 0 8px 16px rgba(0, 0, 0, .36);\n    background-color: rgba(158, 158, 158, .4)\n}\n\n.mdl-button--fab.mdl-button--colored {\n    background: rgb(255, 64, 129);\n    color: rgb(255, 255, 255)\n}\n\n.mdl-button--fab.mdl-button--colored:hover {\n    background-color: rgb(255, 64, 129)\n}\n\n.mdl-button--fab.mdl-button--colored:focus:not(:active) {\n    background-color: rgb(255, 64, 129)\n}\n\n.mdl-button--fab.mdl-button--colored:active {\n    background-color: rgb(255, 64, 129)\n}\n\n.mdl-button--fab.mdl-button--colored .mdl-ripple {\n    background: rgb(255, 255, 255)\n}\n\n.mdl-button--icon {\n    border-radius: 50%;\n    font-size: 24px;\n    height: 32px;\n    margin-left: 0;\n    margin-right: 0;\n    min-width: 32px;\n    width: 32px;\n    padding: 0;\n    overflow: hidden;\n    color: inherit;\n    line-height: normal\n}\n\n.mdl-button--icon .material-icons {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-12px, -12px);\n    -ms-transform: translate(-12px, -12px);\n    transform: translate(-12px, -12px);\n    line-height: 24px;\n    width: 24px\n}\n\n.mdl-button--icon.mdl-button--mini-icon {\n    height: 24px;\n    min-width: 24px;\n    width: 24px\n}\n\n.mdl-button--icon.mdl-button--mini-icon .material-icons {\n    top: 0;\n    left: 0\n}\n\n.mdl-button--icon .mdl-button__ripple-container {\n    border-radius: 50%;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)\n}\n\n.mdl-button__ripple-container {\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n    overflow: hidden\n}\n\n.mdl-button[disabled] .mdl-button__ripple-container .mdl-ripple,\n.mdl-button.mdl-button--disabled .mdl-button__ripple-container .mdl-ripple {\n    background-color: transparent\n}\n\n.mdl-button--primary.mdl-button--primary {\n    color: rgb(255, 87, 34)\n}\n\n.mdl-button--primary.mdl-button--primary .mdl-ripple {\n    background: rgb(255, 255, 255)\n}\n\n.mdl-button--primary.mdl-button--primary.mdl-button--raised,\n.mdl-button--primary.mdl-button--primary.mdl-button--fab {\n    color: rgb(255, 255, 255);\n    background-color: rgb(255, 87, 34)\n}\n\n.mdl-button--accent.mdl-button--accent {\n    color: rgb(255, 64, 129)\n}\n\n.mdl-button--accent.mdl-button--accent .mdl-ripple {\n    background: rgb(255, 255, 255)\n}\n\n.mdl-button--accent.mdl-button--accent.mdl-button--raised,\n.mdl-button--accent.mdl-button--accent.mdl-button--fab {\n    color: rgb(255, 255, 255);\n    background-color: rgb(255, 64, 129)\n}\n\n.mdl-button[disabled][disabled],\n.mdl-button.mdl-button--disabled.mdl-button--disabled {\n    color: rgba(0, 0, 0, .26);\n    cursor: default;\n    background-color: transparent\n}\n\n.mdl-button--fab[disabled][disabled],\n.mdl-button--fab.mdl-button--disabled.mdl-button--disabled,\n.mdl-button--raised[disabled][disabled],\n.mdl-button--raised.mdl-button--disabled.mdl-button--disabled {\n    background-color: rgba(0, 0, 0, .12);\n    color: rgba(0, 0, 0, .26);\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-button--colored[disabled][disabled],\n.mdl-button--colored.mdl-button--disabled.mdl-button--disabled {\n    color: rgba(0, 0, 0, .26)\n}\n\n.mdl-button .material-icons {\n    vertical-align: middle\n}\n\n.mdl-card {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    font-size: 16px;\n    font-weight: 400;\n    min-height: 200px;\n    overflow: hidden;\n    width: 330px;\n    z-index: 1;\n    position: relative;\n    background: #fff;\n    border-radius: 2px;\n    box-sizing: border-box\n}\n\n.mdl-card__media {\n    background-color: rgb(255, 64, 129);\n    background-repeat: repeat;\n    background-position: 50% 50%;\n    background-size: cover;\n    background-origin: padding-box;\n    background-attachment: scroll;\n    box-sizing: border-box\n}\n\n.mdl-card__title {\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    color: #000;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: stretch;\n    -webkit-justify-content: stretch;\n    -ms-flex-pack: stretch;\n    justify-content: stretch;\n    line-height: normal;\n    padding: 16px;\n    -webkit-perspective-origin: 165px 56px;\n    perspective-origin: 165px 56px;\n    -webkit-transform-origin: 165px 56px;\n    -ms-transform-origin: 165px 56px;\n    transform-origin: 165px 56px;\n    box-sizing: border-box\n}\n\n.mdl-card__title.mdl-card--border {\n    border-bottom: 1px solid rgba(0, 0, 0, .1)\n}\n\n.mdl-card__title-text {\n    -webkit-align-self: flex-end;\n    -ms-flex-item-align: end;\n    align-self: flex-end;\n    color: inherit;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    font-size: 24px;\n    font-weight: 300;\n    line-height: normal;\n    overflow: hidden;\n    -webkit-transform-origin: 149px 48px;\n    -ms-transform-origin: 149px 48px;\n    transform-origin: 149px 48px;\n    margin: 0\n}\n\n.mdl-card__subtitle-text {\n    font-size: 14px;\n    color: rgba(0, 0, 0, .54);\n    margin: 0\n}\n\n.mdl-card__supporting-text {\n    color: rgba(0, 0, 0, .54);\n    font-size: 13px;\n    line-height: 18px;\n    overflow: hidden;\n    padding: 16px;\n    width: 90%\n}\n\n.mdl-card__actions {\n    font-size: 16px;\n    line-height: normal;\n    width: 100%;\n    background-color: transparent;\n    padding: 8px;\n    box-sizing: border-box\n}\n\n.mdl-card__actions.mdl-card--border {\n    border-top: 1px solid rgba(0, 0, 0, .1)\n}\n\n.mdl-card--expand {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1\n}\n\n.mdl-card__menu {\n    position: absolute;\n    right: 16px;\n    top: 16px\n}\n\n.mdl-checkbox {\n    position: relative;\n    z-index: 1;\n    vertical-align: middle;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 24px;\n    margin: 0;\n    padding: 0\n}\n\n.mdl-checkbox.is-upgraded {\n    padding-left: 24px\n}\n\n.mdl-checkbox__input {\n    line-height: 24px\n}\n\n.mdl-checkbox.is-upgraded .mdl-checkbox__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none\n}\n\n.mdl-checkbox__box-outline {\n    position: absolute;\n    top: 3px;\n    left: 0;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    cursor: pointer;\n    overflow: hidden;\n    border: 2px solid rgba(0, 0, 0, .54);\n    border-radius: 2px;\n    z-index: 2\n}\n\n.mdl-checkbox.is-checked .mdl-checkbox__box-outline {\n    border: 2px solid rgb(255, 87, 34)\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__box-outline {\n    border: 2px solid rgba(0, 0, 0, .26);\n    cursor: auto\n}\n\n.mdl-checkbox__focus-helper {\n    position: absolute;\n    top: 3px;\n    left: 0;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 16px;\n    height: 16px;\n    border-radius: 50%;\n    background-color: transparent\n}\n\n.mdl-checkbox.is-focused .mdl-checkbox__focus-helper {\n    box-shadow: 0 0 0 8px rgba(0, 0, 0, .1);\n    background-color: rgba(0, 0, 0, .1)\n}\n\n.mdl-checkbox.is-focused.is-checked .mdl-checkbox__focus-helper {\n    box-shadow: 0 0 0 8px rgba(255, 87, 34, .26);\n    background-color: rgba(255, 87, 34, .26)\n}\n\n.mdl-checkbox__tick-outline {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n    mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iY2xpcCI+CiAgICAgIDxwYXRoCiAgICAgICAgIGQ9Ik0gMCwwIDAsMSAxLDEgMSwwIDAsMCB6IE0gMC44NTM0Mzc1LDAuMTY3MTg3NSAwLjk1OTY4NzUsMC4yNzMxMjUgMC40MjkzNzUsMC44MDM0Mzc1IDAuMzIzMTI1LDAuOTA5Njg3NSAwLjIxNzE4NzUsMC44MDM0Mzc1IDAuMDQwMzEyNSwwLjYyNjg3NSAwLjE0NjU2MjUsMC41MjA2MjUgMC4zMjMxMjUsMC42OTc1IDAuODUzNDM3NSwwLjE2NzE4NzUgeiIKICAgICAgICAgc3R5bGU9ImZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KICAgIDwvY2xpcFBhdGg+CiAgICA8bWFzayBpZD0ibWFzayIgbWFza1VuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgbWFza0NvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giPgogICAgICA8cGF0aAogICAgICAgICBkPSJNIDAsMCAwLDEgMSwxIDEsMCAwLDAgeiBNIDAuODUzNDM3NSwwLjE2NzE4NzUgMC45NTk2ODc1LDAuMjczMTI1IDAuNDI5Mzc1LDAuODAzNDM3NSAwLjMyMzEyNSwwLjkwOTY4NzUgMC4yMTcxODc1LDAuODAzNDM3NSAwLjA0MDMxMjUsMC42MjY4NzUgMC4xNDY1NjI1LDAuNTIwNjI1IDAuMzIzMTI1LDAuNjk3NSAwLjg1MzQzNzUsMC4xNjcxODc1IHoiCiAgICAgICAgIHN0eWxlPSJmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmUiIC8+CiAgICA8L21hc2s+CiAgPC9kZWZzPgogIDxyZWN0CiAgICAgd2lkdGg9IjEiCiAgICAgaGVpZ2h0PSIxIgogICAgIHg9IjAiCiAgICAgeT0iMCIKICAgICBjbGlwLXBhdGg9InVybCgjY2xpcCkiCiAgICAgc3R5bGU9ImZpbGw6IzAwMDAwMDtmaWxsLW9wYWNpdHk6MTtzdHJva2U6bm9uZSIgLz4KPC9zdmc+Cg==\");\n    background: 0 0;\n    -webkit-transition-duration: .28s;\n    transition-duration: .28s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: background;\n    transition-property: background\n}\n\n.mdl-checkbox.is-checked .mdl-checkbox__tick-outline {\n    background: rgb(255, 87, 34)url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\")\n}\n\n.mdl-checkbox.is-checked.is-disabled .mdl-checkbox__tick-outline {\n    background: rgba(0, 0, 0, .26)url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmVyc2lvbj0iMS4xIgogICB2aWV3Qm94PSIwIDAgMSAxIgogICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWluWU1pbiBtZWV0Ij4KICA8cGF0aAogICAgIGQ9Ik0gMC4wNDAzODA1OSwwLjYyNjc3NjcgMC4xNDY0NDY2MSwwLjUyMDcxMDY4IDAuNDI5Mjg5MzIsMC44MDM1NTMzOSAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IE0gMC4yMTcxNTcyOSwwLjgwMzU1MzM5IDAuODUzNTUzMzksMC4xNjcxNTcyOSAwLjk1OTYxOTQxLDAuMjczMjIzMyAwLjMyMzIyMzMsMC45MDk2MTk0MSB6IgogICAgIGlkPSJyZWN0Mzc4MCIKICAgICBzdHlsZT0iZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lIiAvPgo8L3N2Zz4K\")\n}\n\n.mdl-checkbox__label {\n    position: relative;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__label {\n    color: rgba(0, 0, 0, .26);\n    cursor: auto\n}\n\n.mdl-checkbox__ripple-container {\n    position: absolute;\n    z-index: 2;\n    top: -6px;\n    left: -10px;\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    cursor: pointer;\n    overflow: hidden;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)\n}\n\n.mdl-checkbox__ripple-container .mdl-ripple {\n    background: rgb(255, 87, 34)\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container {\n    cursor: auto\n}\n\n.mdl-checkbox.is-disabled .mdl-checkbox__ripple-container .mdl-ripple {\n    background: 0 0\n}\n\n.mdl-data-table {\n    position: relative;\n    border: 1px solid rgba(0, 0, 0, .12);\n    border-collapse: collapse;\n    white-space: nowrap;\n    font-size: 13px;\n    background-color: #fff\n}\n\n.mdl-data-table thead {\n    padding-bottom: 3px\n}\n\n.mdl-data-table thead .mdl-data-table__select {\n    margin-top: 0\n}\n\n.mdl-data-table tbody tr {\n    position: relative;\n    height: 48px;\n    -webkit-transition-duration: .28s;\n    transition-duration: .28s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: background-color;\n    transition-property: background-color\n}\n\n.mdl-data-table tbody tr.is-selected {\n    background-color: #e0e0e0\n}\n\n.mdl-data-table tbody tr:hover {\n    background-color: #eee\n}\n\n.mdl-data-table td {\n    text-align: right\n}\n\n.mdl-data-table th {\n    padding: 0 18px;\n    text-align: right\n}\n\n.mdl-data-table td:first-of-type,\n.mdl-data-table th:first-of-type {\n    padding-left: 24px\n}\n\n.mdl-data-table td:last-of-type,\n.mdl-data-table th:last-of-type {\n    padding-right: 24px\n}\n\n.mdl-data-table td {\n    position: relative;\n    vertical-align: top;\n    height: 48px;\n    border-top: 1px solid rgba(0, 0, 0, .12);\n    border-bottom: 1px solid rgba(0, 0, 0, .12);\n    padding: 12px 18px 0;\n    box-sizing: border-box\n}\n\n.mdl-data-table td .mdl-data-table__select {\n    vertical-align: top;\n    position: absolute;\n    left: 24px\n}\n\n.mdl-data-table th {\n    position: relative;\n    vertical-align: bottom;\n    text-overflow: ellipsis;\n    font-weight: 700;\n    line-height: 24px;\n    letter-spacing: 0;\n    height: 48px;\n    font-size: 12px;\n    color: rgba(0, 0, 0, .54);\n    padding-bottom: 8px;\n    box-sizing: border-box\n}\n\n.mdl-data-table th .mdl-data-table__select {\n    position: absolute;\n    bottom: 8px;\n    left: 24px\n}\n\n.mdl-data-table__select {\n    width: 16px\n}\n\n.mdl-data-table__cell--non-numeric.mdl-data-table__cell--non-numeric {\n    text-align: left\n}\n\n.mdl-mega-footer {\n    padding: 16px 40px;\n    color: #9e9e9e;\n    background-color: #424242\n}\n\n.mdl-mega-footer--top-section:after,\n.mdl-mega-footer--middle-section:after,\n.mdl-mega-footer--bottom-section:after,\n.mdl-mega-footer__top-section:after,\n.mdl-mega-footer__middle-section:after,\n.mdl-mega-footer__bottom-section:after {\n    content: '';\n    display: block;\n    clear: both\n}\n\n.mdl-mega-footer--left-section,\n.mdl-mega-footer__left-section,\n.mdl-mega-footer--right-section,\n.mdl-mega-footer__right-section {\n    margin-bottom: 16px\n}\n\n.mdl-mega-footer--right-section a,\n.mdl-mega-footer__right-section a {\n    display: block;\n    margin-bottom: 16px;\n    color: inherit;\n    text-decoration: none\n}\n\n@media screen and (min-width:760px) {\n    .mdl-mega-footer--left-section,\n    .mdl-mega-footer__left-section {\n        float: left\n    }\n    .mdl-mega-footer--right-section,\n    .mdl-mega-footer__right-section {\n        float: right\n    }\n    .mdl-mega-footer--right-section a,\n    .mdl-mega-footer__right-section a {\n        display: inline-block;\n        margin-left: 16px;\n        line-height: 36px;\n        vertical-align: middle\n    }\n}\n\n.mdl-mega-footer--social-btn,\n.mdl-mega-footer__social-btn {\n    width: 36px;\n    height: 36px;\n    padding: 0;\n    margin: 0;\n    background-color: #9e9e9e;\n    border: none\n}\n\n.mdl-mega-footer--drop-down-section,\n.mdl-mega-footer__drop-down-section {\n    display: block;\n    position: relative\n}\n\n@media screen and (min-width:760px) {\n    .mdl-mega-footer--drop-down-section,\n    .mdl-mega-footer__drop-down-section {\n        width: 33%\n    }\n    .mdl-mega-footer--drop-down-section:nth-child(1),\n    .mdl-mega-footer--drop-down-section:nth-child(2),\n    .mdl-mega-footer__drop-down-section:nth-child(1),\n    .mdl-mega-footer__drop-down-section:nth-child(2) {\n        float: left\n    }\n    .mdl-mega-footer--drop-down-section:nth-child(3),\n    .mdl-mega-footer__drop-down-section:nth-child(3) {\n        float: right\n    }\n    .mdl-mega-footer--drop-down-section:nth-child(3):after,\n    .mdl-mega-footer__drop-down-section:nth-child(3):after {\n        clear: right\n    }\n    .mdl-mega-footer--drop-down-section:nth-child(4),\n    .mdl-mega-footer__drop-down-section:nth-child(4) {\n        clear: right;\n        float: right\n    }\n    .mdl-mega-footer--middle-section:after,\n    .mdl-mega-footer__middle-section:after {\n        content: '';\n        display: block;\n        clear: both\n    }\n    .mdl-mega-footer--bottom-section,\n    .mdl-mega-footer__bottom-section {\n        padding-top: 0\n    }\n}\n\n@media screen and (min-width:1024px) {\n    .mdl-mega-footer--drop-down-section,\n    .mdl-mega-footer--drop-down-section:nth-child(3),\n    .mdl-mega-footer--drop-down-section:nth-child(4),\n    .mdl-mega-footer__drop-down-section,\n    .mdl-mega-footer__drop-down-section:nth-child(3),\n    .mdl-mega-footer__drop-down-section:nth-child(4) {\n        width: 24%;\n        float: left\n    }\n}\n\n.mdl-mega-footer--heading-checkbox,\n.mdl-mega-footer__heading-checkbox {\n    position: absolute;\n    width: 100%;\n    height: 55.8px;\n    padding: 32px;\n    margin: -16px 0 0;\n    cursor: pointer;\n    z-index: 1;\n    opacity: 0\n}\n\n.mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,\n.mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,\n.mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after {\n    font-family: 'Material Icons';\n    content: '\\E5CE'\n}\n\n.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,\n.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,\n.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,\n.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,\n.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list {\n    display: none\n}\n\n.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,\n.mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,\n.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after {\n    font-family: 'Material Icons';\n    content: '\\E5CF'\n}\n\n.mdl-mega-footer--heading,\n.mdl-mega-footer__heading {\n    position: relative;\n    width: 100%;\n    padding-right: 39.8px;\n    margin-bottom: 16px;\n    box-sizing: border-box;\n    font-size: 14px;\n    line-height: 23.8px;\n    font-weight: 500;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: #e0e0e0\n}\n\n.mdl-mega-footer--heading:after,\n.mdl-mega-footer__heading:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: block;\n    width: 23.8px;\n    height: 23.8px;\n    background-size: cover\n}\n\n.mdl-mega-footer--link-list,\n.mdl-mega-footer__link-list {\n    list-style: none;\n    padding: 0;\n    margin: 0 0 32px\n}\n\n.mdl-mega-footer--link-list:after,\n.mdl-mega-footer__link-list:after {\n    clear: both;\n    display: block;\n    content: ''\n}\n\n.mdl-mega-footer--link-list li,\n.mdl-mega-footer__link-list li {\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    line-height: 20px\n}\n\n.mdl-mega-footer--link-list a,\n.mdl-mega-footer__link-list a {\n    color: inherit;\n    text-decoration: none;\n    white-space: nowrap\n}\n\n@media screen and (min-width:760px) {\n    .mdl-mega-footer--heading-checkbox,\n    .mdl-mega-footer__heading-checkbox {\n        display: none\n    }\n    .mdl-mega-footer--heading-checkbox+.mdl-mega-footer--heading:after,\n    .mdl-mega-footer--heading-checkbox+.mdl-mega-footer__heading:after,\n    .mdl-mega-footer__heading-checkbox+.mdl-mega-footer--heading:after,\n    .mdl-mega-footer__heading-checkbox+.mdl-mega-footer__heading:after {\n        background-image: none\n    }\n    .mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer--link-list,\n    .mdl-mega-footer--heading-checkbox:checked~.mdl-mega-footer__link-list,\n    .mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,\n    .mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list,\n    .mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer--link-list,\n    .mdl-mega-footer__heading-checkbox:checked~.mdl-mega-footer__link-list,\n    .mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading+.mdl-mega-footer__link-list,\n    .mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading+.mdl-mega-footer--link-list {\n        display: block\n    }\n    .mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer--heading:after,\n    .mdl-mega-footer--heading-checkbox:checked+.mdl-mega-footer__heading:after,\n    .mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer--heading:after,\n    .mdl-mega-footer__heading-checkbox:checked+.mdl-mega-footer__heading:after {\n        content: ''\n    }\n}\n\n.mdl-mega-footer--bottom-section,\n.mdl-mega-footer__bottom-section {\n    padding-top: 16px;\n    margin-bottom: 16px\n}\n\n.mdl-logo {\n    margin-bottom: 16px;\n    color: #fff\n}\n\n.mdl-mega-footer--bottom-section .mdl-mega-footer--link-list li,\n.mdl-mega-footer__bottom-section .mdl-mega-footer__link-list li {\n    float: left;\n    margin-bottom: 0;\n    margin-right: 16px\n}\n\n@media screen and (min-width:760px) {\n    .mdl-logo {\n        float: left;\n        margin-bottom: 0;\n        margin-right: 16px\n    }\n}\n\n.mdl-mini-footer {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    padding: 32px 16px;\n    color: #9e9e9e;\n    background-color: #424242\n}\n\n.mdl-mini-footer:after {\n    content: '';\n    display: block\n}\n\n.mdl-mini-footer .mdl-logo {\n    line-height: 36px\n}\n\n.mdl-mini-footer--link-list,\n.mdl-mini-footer__link-list {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row nowrap;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap;\n    list-style: none;\n    margin: 0;\n    padding: 0\n}\n\n.mdl-mini-footer--link-list li,\n.mdl-mini-footer__link-list li {\n    margin-bottom: 0;\n    margin-right: 16px\n}\n\n@media screen and (min-width:760px) {\n    .mdl-mini-footer--link-list li,\n    .mdl-mini-footer__link-list li {\n        line-height: 36px\n    }\n}\n\n.mdl-mini-footer--link-list a,\n.mdl-mini-footer__link-list a {\n    color: inherit;\n    text-decoration: none;\n    white-space: nowrap\n}\n\n.mdl-mini-footer--left-section,\n.mdl-mini-footer__left-section {\n    display: inline-block;\n    -webkit-box-ordinal-group: 1;\n    -webkit-order: 0;\n    -ms-flex-order: 0;\n    order: 0\n}\n\n.mdl-mini-footer--right-section,\n.mdl-mini-footer__right-section {\n    display: inline-block;\n    -webkit-box-ordinal-group: 2;\n    -webkit-order: 1;\n    -ms-flex-order: 1;\n    order: 1\n}\n\n.mdl-mini-footer--social-btn,\n.mdl-mini-footer__social-btn {\n    width: 36px;\n    height: 36px;\n    padding: 0;\n    margin: 0;\n    background-color: #9e9e9e;\n    border: none\n}\n\n.mdl-icon-toggle {\n    position: relative;\n    z-index: 1;\n    vertical-align: middle;\n    display: inline-block;\n    height: 32px;\n    margin: 0;\n    padding: 0\n}\n\n.mdl-icon-toggle__input {\n    line-height: 32px\n}\n\n.mdl-icon-toggle.is-upgraded .mdl-icon-toggle__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none\n}\n\n.mdl-icon-toggle__label {\n    display: inline-block;\n    position: relative;\n    cursor: pointer;\n    height: 32px;\n    width: 32px;\n    min-width: 32px;\n    color: #616161;\n    border-radius: 50%;\n    padding: 0;\n    margin-left: 0;\n    margin-right: 0;\n    text-align: center;\n    background-color: transparent;\n    will-change: background-color;\n    -webkit-transition: background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1);\n    transition: background-color .2s cubic-bezier(.4, 0, .2, 1), color .2s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-icon-toggle__label.material-icons {\n    line-height: 32px;\n    font-size: 24px\n}\n\n.mdl-icon-toggle.is-checked .mdl-icon-toggle__label {\n    color: rgb(255, 87, 34)\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__label {\n    color: rgba(0, 0, 0, .26);\n    cursor: auto;\n    -webkit-transition: none;\n    transition: none\n}\n\n.mdl-icon-toggle.is-focused .mdl-icon-toggle__label {\n    background-color: rgba(0, 0, 0, .12)\n}\n\n.mdl-icon-toggle.is-focused.is-checked .mdl-icon-toggle__label {\n    background-color: rgba(255, 87, 34, .26)\n}\n\n.mdl-icon-toggle__ripple-container {\n    position: absolute;\n    z-index: 2;\n    top: -2px;\n    left: -2px;\n    box-sizing: border-box;\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    cursor: pointer;\n    overflow: hidden;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)\n}\n\n.mdl-icon-toggle__ripple-container .mdl-ripple {\n    background: #616161\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container {\n    cursor: auto\n}\n\n.mdl-icon-toggle.is-disabled .mdl-icon-toggle__ripple-container .mdl-ripple {\n    background: 0 0\n}\n\n.mdl-menu__container {\n    display: block;\n    margin: 0;\n    padding: 0;\n    border: none;\n    position: absolute;\n    overflow: visible;\n    height: 0;\n    width: 0;\n    visibility: hidden;\n    z-index: -1\n}\n\n.mdl-menu__container.is-visible,\n.mdl-menu__container.is-animating {\n    z-index: 999;\n    visibility: visible\n}\n\n.mdl-menu__outline {\n    display: block;\n    background: #fff;\n    margin: 0;\n    padding: 0;\n    border: none;\n    border-radius: 2px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    overflow: hidden;\n    opacity: 0;\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n    -webkit-transform-origin: 0 0;\n    -ms-transform-origin: 0 0;\n    transform-origin: 0 0;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    will-change: transform;\n    -webkit-transition: -webkit-transform .3s cubic-bezier(.4, 0, .2, 1), opacity .2s cubic-bezier(.4, 0, .2, 1);\n    transition: transform .3s cubic-bezier(.4, 0, .2, 1), opacity .2s cubic-bezier(.4, 0, .2, 1);\n    z-index: -1\n}\n\n.mdl-menu__container.is-visible .mdl-menu__outline {\n    opacity: 1;\n    -webkit-transform: scale(1);\n    -ms-transform: scale(1);\n    transform: scale(1);\n    z-index: 999\n}\n\n.mdl-menu__outline.mdl-menu--bottom-right {\n    -webkit-transform-origin: 100% 0;\n    -ms-transform-origin: 100% 0;\n    transform-origin: 100% 0\n}\n\n.mdl-menu__outline.mdl-menu--top-left {\n    -webkit-transform-origin: 0 100%;\n    -ms-transform-origin: 0 100%;\n    transform-origin: 0 100%\n}\n\n.mdl-menu__outline.mdl-menu--top-right {\n    -webkit-transform-origin: 100% 100%;\n    -ms-transform-origin: 100% 100%;\n    transform-origin: 100% 100%\n}\n\n.mdl-menu {\n    position: absolute;\n    list-style: none;\n    top: 0;\n    left: 0;\n    height: auto;\n    width: auto;\n    min-width: 124px;\n    padding: 8px 0;\n    margin: 0;\n    opacity: 0;\n    clip: rect(0 0 0 0);\n    z-index: -1\n}\n\n.mdl-menu__container.is-visible .mdl-menu {\n    opacity: 1;\n    z-index: 999\n}\n\n.mdl-menu.is-animating {\n    -webkit-transition: opacity .2s cubic-bezier(.4, 0, .2, 1), clip .3s cubic-bezier(.4, 0, .2, 1);\n    transition: opacity .2s cubic-bezier(.4, 0, .2, 1), clip .3s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-menu.mdl-menu--bottom-right {\n    left: auto;\n    right: 0\n}\n\n.mdl-menu.mdl-menu--top-left {\n    top: auto;\n    bottom: 0\n}\n\n.mdl-menu.mdl-menu--top-right {\n    top: auto;\n    left: auto;\n    bottom: 0;\n    right: 0\n}\n\n.mdl-menu.mdl-menu--unaligned {\n    top: auto;\n    left: auto\n}\n\n.mdl-menu__item {\n    display: block;\n    border: none;\n    color: rgba(0, 0, 0, .87);\n    background-color: transparent;\n    text-align: left;\n    margin: 0;\n    padding: 0 16px;\n    outline-color: #bdbdbd;\n    position: relative;\n    overflow: hidden;\n    font-size: 14px;\n    font-weight: 400;\n    letter-spacing: 0;\n    text-decoration: none;\n    cursor: pointer;\n    height: 48px;\n    line-height: 48px;\n    white-space: nowrap;\n    opacity: 0;\n    -webkit-transition: opacity .2s cubic-bezier(.4, 0, .2, 1);\n    transition: opacity .2s cubic-bezier(.4, 0, .2, 1);\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n.mdl-menu__container.is-visible .mdl-menu__item {\n    opacity: 1\n}\n\n.mdl-menu__item::-moz-focus-inner {\n    border: 0\n}\n\n.mdl-menu__item[disabled] {\n    color: #bdbdbd;\n    background-color: transparent;\n    cursor: auto\n}\n\n.mdl-menu__item[disabled]:hover {\n    background-color: transparent\n}\n\n.mdl-menu__item[disabled]:focus {\n    background-color: transparent\n}\n\n.mdl-menu__item[disabled] .mdl-ripple {\n    background: 0 0\n}\n\n.mdl-menu__item:hover {\n    background-color: #eee\n}\n\n.mdl-menu__item:focus {\n    outline: none;\n    background-color: #eee\n}\n\n.mdl-menu__item:active {\n    background-color: #e0e0e0\n}\n\n.mdl-menu__item--ripple-container {\n    display: block;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 0;\n    overflow: hidden\n}\n\n.mdl-progress {\n    display: block;\n    position: relative;\n    height: 4px;\n    width: 500px\n}\n\n.mdl-progress>.bar {\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    width: 0%;\n    -webkit-transition: width .2s cubic-bezier(.4, 0, .2, 1);\n    transition: width .2s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-progress>.progressbar {\n    background-color: rgb(255, 87, 34);\n    z-index: 1;\n    left: 0\n}\n\n.mdl-progress>.bufferbar {\n    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), -webkit-linear-gradient(left, rgb(255, 87, 34), rgb(255, 87, 34));\n    background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(255, 87, 34), rgb(255, 87, 34));\n    z-index: 0;\n    left: 0\n}\n\n.mdl-progress>.auxbar {\n    right: 0\n}\n\n@supports (-webkit-appearance:none) {\n    .mdl-progress:not(.mdl-progress__indeterminate):not(.mdl-progress__indeterminate)>.auxbar {\n        background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), -webkit-linear-gradient(left, rgb(255, 87, 34), rgb(255, 87, 34));\n        background-image: linear-gradient(to right, rgba(255, 255, 255, .7), rgba(255, 255, 255, .7)), linear-gradient(to right, rgb(255, 87, 34), rgb(255, 87, 34));\n        -webkit-mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\");\n        mask: url(\"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+Cjxzdmcgd2lkdGg9IjEyIiBoZWlnaHQ9IjQiIHZpZXdQb3J0PSIwIDAgMTIgNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxlbGxpcHNlIGN4PSIyIiBjeT0iMiIgcng9IjIiIHJ5PSIyIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImN4IiBmcm9tPSIyIiB0bz0iLTEwIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogIDwvZWxsaXBzZT4KICA8ZWxsaXBzZSBjeD0iMTQiIGN5PSIyIiByeD0iMiIgcnk9IjIiIGNsYXNzPSJsb2FkZXIiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iY3giIGZyb209IjE0IiB0bz0iMiIgZHVyPSIwLjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgLz4KICA8L2VsbGlwc2U+Cjwvc3ZnPgo=\")\n    }\n}\n\n.mdl-progress:not(.mdl-progress__indeterminate)>.auxbar {\n    background-image: -webkit-linear-gradient(left, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), -webkit-linear-gradient(left, rgb(255, 87, 34), rgb(255, 87, 34));\n    background-image: linear-gradient(to right, rgba(255, 255, 255, .9), rgba(255, 255, 255, .9)), linear-gradient(to right, rgb(255, 87, 34), rgb(255, 87, 34))\n}\n\n.mdl-progress.mdl-progress__indeterminate>.bar1 {\n    -webkit-animation-name: indeterminate1;\n    animation-name: indeterminate1\n}\n\n.mdl-progress.mdl-progress__indeterminate>.bar1,\n.mdl-progress.mdl-progress__indeterminate>.bar3 {\n    background-color: rgb(255, 87, 34);\n    -webkit-animation-duration: 2s;\n    animation-duration: 2s;\n    -webkit-animation-iteration-count: infinite;\n    animation-iteration-count: infinite;\n    -webkit-animation-timing-function: linear;\n    animation-timing-function: linear\n}\n\n.mdl-progress.mdl-progress__indeterminate>.bar3 {\n    background-image: none;\n    -webkit-animation-name: indeterminate2;\n    animation-name: indeterminate2\n}\n\n@-webkit-keyframes indeterminate1 {\n    0% {\n        left: 0%;\n        width: 0%\n    }\n    50% {\n        left: 25%;\n        width: 75%\n    }\n    75% {\n        left: 100%;\n        width: 0%\n    }\n}\n\n@keyframes indeterminate1 {\n    0% {\n        left: 0%;\n        width: 0%\n    }\n    50% {\n        left: 25%;\n        width: 75%\n    }\n    75% {\n        left: 100%;\n        width: 0%\n    }\n}\n\n@-webkit-keyframes indeterminate2 {\n    0%,\n    50% {\n        left: 0%;\n        width: 0%\n    }\n    75% {\n        left: 0%;\n        width: 25%\n    }\n    100% {\n        left: 100%;\n        width: 0%\n    }\n}\n\n@keyframes indeterminate2 {\n    0%,\n    50% {\n        left: 0%;\n        width: 0%\n    }\n    75% {\n        left: 0%;\n        width: 25%\n    }\n    100% {\n        left: 100%;\n        width: 0%\n    }\n}\n\n.mdl-navigation {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    box-sizing: border-box\n}\n\n.mdl-navigation__link {\n    color: #424242;\n    text-decoration: none;\n    font-weight: 500;\n    font-size: 13px;\n    margin: 0\n}\n\n.mdl-layout {\n    width: 100%;\n    height: 100%;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    overflow-y: auto;\n    overflow-x: hidden;\n    position: relative;\n    -webkit-overflow-scrolling: touch\n}\n\n.mdl-layout.is-small-screen .mdl-layout--large-screen-only {\n    display: none\n}\n\n.mdl-layout:not(.is-small-screen) .mdl-layout--small-screen-only {\n    display: none\n}\n\n.mdl-layout__container {\n    position: absolute;\n    width: 100%;\n    height: 100%\n}\n\n.mdl-layout__title,\n.mdl-layout-title {\n    display: block;\n    position: relative;\n    font-family: \"Roboto\", \"Helvetica\", \"Arial\", sans-serif;\n    font-size: 20px;\n    line-height: 1;\n    letter-spacing: .02em;\n    font-weight: 400;\n    box-sizing: border-box\n}\n\n.mdl-layout-spacer {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1\n}\n\n.mdl-layout__drawer {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    width: 240px;\n    height: 100%;\n    max-height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    box-sizing: border-box;\n    border-right: 1px solid #e0e0e0;\n    background: #fafafa;\n    -webkit-transform: translateX(-250px);\n    -ms-transform: translateX(-250px);\n    transform: translateX(-250px);\n    -webkit-transform-style: preserve-3d;\n    transform-style: preserve-3d;\n    will-change: transform;\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: -webkit-transform;\n    transition-property: transform;\n    color: #424242;\n    overflow: visible;\n    overflow-y: auto;\n    z-index: 5\n}\n\n.mdl-layout__drawer.is-visible {\n    -webkit-transform: translateX(0);\n    -ms-transform: translateX(0);\n    transform: translateX(0)\n}\n\n.mdl-layout__drawer.is-visible~.mdl-layout__content.mdl-layout__content {\n    overflow: hidden\n}\n\n.mdl-layout__drawer>* {\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0\n}\n\n.mdl-layout__drawer>.mdl-layout__title,\n.mdl-layout__drawer>.mdl-layout-title {\n    line-height: 64px;\n    padding-left: 40px\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__drawer>.mdl-layout__title,\n    .mdl-layout__drawer>.mdl-layout-title {\n        line-height: 56px;\n        padding-left: 16px\n    }\n}\n\n.mdl-layout__drawer .mdl-navigation {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch;\n    padding-top: 16px\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n    display: block;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    padding: 16px 40px;\n    margin: 0;\n    color: #757575\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__drawer .mdl-navigation .mdl-navigation__link {\n        padding: 16px\n    }\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link:hover {\n    background-color: #e0e0e0\n}\n\n.mdl-layout__drawer .mdl-navigation .mdl-navigation__link--current {\n    background-color: #000;\n    color: #e0e0e0\n}\n\n@media screen and (min-width:1025px) {\n    .mdl-layout--fixed-drawer>.mdl-layout__drawer {\n        -webkit-transform: translateX(0);\n        -ms-transform: translateX(0);\n        transform: translateX(0)\n    }\n}\n\n.mdl-layout__drawer-button {\n    display: block;\n    position: absolute;\n    height: 48px;\n    width: 48px;\n    border: 0;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    overflow: hidden;\n    text-align: center;\n    cursor: pointer;\n    font-size: 26px;\n    line-height: 50px;\n    font-family: Helvetica, Arial, sans-serif;\n    margin: 10px 12px;\n    top: 0;\n    left: 0;\n    color: rgb(255, 255, 255);\n    z-index: 4\n}\n\n.mdl-layout__header .mdl-layout__drawer-button {\n    position: absolute;\n    color: rgb(255, 255, 255);\n    background-color: inherit\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header .mdl-layout__drawer-button {\n        margin: 4px\n    }\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__drawer-button {\n        margin: 4px;\n        color: rgba(0, 0, 0, .5)\n    }\n}\n\n@media screen and (min-width:1025px) {\n    .mdl-layout--fixed-drawer>.mdl-layout__drawer-button {\n        display: none\n    }\n}\n\n.mdl-layout__header {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: column;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-box-pack: start;\n    -webkit-justify-content: flex-start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    box-sizing: border-box;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n    min-height: 64px;\n    max-height: 1000px;\n    z-index: 3;\n    background-color: rgb(255, 87, 34);\n    color: rgb(255, 255, 255);\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: max-height, box-shadow;\n    transition-property: max-height, box-shadow\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header {\n        min-height: 56px\n    }\n}\n\n.mdl-layout--fixed-drawer.is-upgraded:not(.is-small-screen)>.mdl-layout__header {\n    margin-left: 240px;\n    width: calc(100% - 240px)\n}\n\n@media screen and (min-width:1025px) {\n    .mdl-layout--fixed-drawer>.mdl-layout__header .mdl-layout__header-row {\n        padding-left: 40px\n    }\n}\n\n.mdl-layout__header>.mdl-layout-icon {\n    position: absolute;\n    left: 40px;\n    top: 16px;\n    height: 32px;\n    width: 32px;\n    overflow: hidden;\n    z-index: 3;\n    display: block\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header>.mdl-layout-icon {\n        left: 16px;\n        top: 12px\n    }\n}\n\n.mdl-layout.has-drawer .mdl-layout__header>.mdl-layout-icon {\n    display: none\n}\n\n.mdl-layout__header.is-compact {\n    max-height: 64px\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header.is-compact {\n        max-height: 56px\n    }\n}\n\n.mdl-layout__header.is-compact.has-tabs {\n    height: 112px\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header.is-compact.has-tabs {\n        min-height: 104px\n    }\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header {\n        display: none\n    }\n    .mdl-layout--fixed-header>.mdl-layout__header {\n        display: -webkit-flex;\n        display: -ms-flexbox;\n        display: flex\n    }\n}\n\n.mdl-layout__header--transparent.mdl-layout__header--transparent {\n    background-color: transparent;\n    box-shadow: none\n}\n\n.mdl-layout__header--seamed,\n.mdl-layout__header--scroll {\n    box-shadow: none\n}\n\n.mdl-layout__header--waterfall {\n    box-shadow: none;\n    overflow: hidden\n}\n\n.mdl-layout__header--waterfall.is-casting-shadow {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-layout__header-row {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-flex-wrap: nowrap;\n    -ms-flex-wrap: nowrap;\n    flex-wrap: nowrap;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    box-sizing: border-box;\n    -webkit-align-self: stretch;\n    -ms-flex-item-align: stretch;\n    align-self: stretch;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    height: 64px;\n    margin: 0;\n    padding: 0 40px 0 80px\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header-row {\n        height: 56px;\n        padding: 0 16px 0 72px\n    }\n}\n\n.mdl-layout__header-row>* {\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0\n}\n\n.mdl-layout__header--scroll .mdl-layout__header-row {\n    width: 100%\n}\n\n.mdl-layout__header-row .mdl-navigation {\n    margin: 0;\n    padding: 0;\n    height: 64px;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header-row .mdl-navigation {\n        height: 56px\n    }\n}\n\n.mdl-layout__header-row .mdl-navigation__link {\n    display: block;\n    color: rgb(255, 255, 255);\n    line-height: 64px;\n    padding: 0 24px\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__header-row .mdl-navigation__link {\n        line-height: 56px;\n        padding: 0 16px\n    }\n}\n\n.mdl-layout__obfuscator {\n    background-color: transparent;\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    z-index: 4;\n    visibility: hidden;\n    -webkit-transition-property: background-color;\n    transition-property: background-color;\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-layout__obfuscator.is-visible {\n    background-color: rgba(0, 0, 0, .5);\n    visibility: visible\n}\n\n.mdl-layout__content {\n    -ms-flex: 0 1 auto;\n    display: inline-block;\n    overflow-y: auto;\n    overflow-x: hidden;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    z-index: 1;\n    -webkit-overflow-scrolling: touch\n}\n\n.mdl-layout--fixed-drawer>.mdl-layout__content {\n    margin-left: 240px\n}\n\n.mdl-layout__container.has-scrolling-header .mdl-layout__content {\n    overflow: visible\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout--fixed-drawer>.mdl-layout__content {\n        margin-left: 0\n    }\n    .mdl-layout__container.has-scrolling-header .mdl-layout__content {\n        overflow-y: auto;\n        overflow-x: hidden\n    }\n}\n\n.mdl-layout__tab-bar {\n    height: 96px;\n    margin: 0;\n    width: calc(100% - 112px);\n    padding: 0 0 0 56px;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    background-color: rgb(255, 87, 34);\n    overflow-y: hidden;\n    overflow-x: scroll\n}\n\n.mdl-layout__tab-bar::-webkit-scrollbar {\n    display: none\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__tab-bar {\n        width: calc(100% - 60px);\n        padding: 0 0 0 60px\n    }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab-bar {\n    padding: 0;\n    overflow: hidden;\n    width: 100%\n}\n\n.mdl-layout__tab-bar-container {\n    position: relative;\n    height: 48px;\n    width: 100%;\n    border: none;\n    margin: 0;\n    z-index: 2;\n    -webkit-box-flex: 0;\n    -webkit-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    overflow: hidden\n}\n\n.mdl-layout__container>.mdl-layout__tab-bar-container {\n    position: absolute;\n    top: 0;\n    left: 0\n}\n\n.mdl-layout__tab-bar-button {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    height: 48px;\n    width: 56px;\n    z-index: 4;\n    text-align: center;\n    background-color: rgb(255, 87, 34);\n    color: transparent;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__tab-bar-button {\n        display: none;\n        width: 60px\n    }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab-bar-button {\n    display: none\n}\n\n.mdl-layout__tab-bar-button .material-icons {\n    line-height: 48px\n}\n\n.mdl-layout__tab-bar-button.is-active {\n    color: rgb(255, 255, 255)\n}\n\n.mdl-layout__tab-bar-left-button {\n    left: 0\n}\n\n.mdl-layout__tab-bar-right-button {\n    right: 0\n}\n\n.mdl-layout__tab {\n    margin: 0;\n    border: none;\n    padding: 0 24px;\n    float: left;\n    position: relative;\n    display: block;\n    -webkit-box-flex: 0;\n    -webkit-flex-grow: 0;\n    -ms-flex-positive: 0;\n    flex-grow: 0;\n    -webkit-flex-shrink: 0;\n    -ms-flex-negative: 0;\n    flex-shrink: 0;\n    text-decoration: none;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: rgba(255, 255, 255, .6);\n    overflow: hidden\n}\n\n@media screen and (max-width:1024px) {\n    .mdl-layout__tab {\n        padding: 0 12px\n    }\n}\n\n.mdl-layout--fixed-tabs .mdl-layout__tab {\n    float: none;\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    padding: 0\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab.is-active {\n    color: rgb(255, 255, 255)\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab.is-active::after {\n    height: 2px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    background: rgb(255, 64, 129);\n    -webkit-animation: border-expand .2s cubic-bezier(.4, 0, .4, 1).01s alternate forwards;\n    animation: border-expand .2s cubic-bezier(.4, 0, .4, 1).01s alternate forwards;\n    -webkit-transition: all 1s cubic-bezier(.4, 0, 1, 1);\n    transition: all 1s cubic-bezier(.4, 0, 1, 1)\n}\n\n.mdl-layout__tab .mdl-layout__tab-ripple-container {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    overflow: hidden\n}\n\n.mdl-layout__tab .mdl-layout__tab-ripple-container .mdl-ripple {\n    background-color: rgb(255, 255, 255)\n}\n\n.mdl-layout__tab-panel {\n    display: block\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab-panel {\n    display: none\n}\n\n.mdl-layout.is-upgraded .mdl-layout__tab-panel.is-active {\n    display: block\n}\n\n.mdl-radio {\n    position: relative;\n    font-size: 16px;\n    line-height: 24px;\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 0;\n    padding-left: 0\n}\n\n.mdl-radio.is-upgraded {\n    padding-left: 24px\n}\n\n.mdl-radio__button {\n    line-height: 24px\n}\n\n.mdl-radio.is-upgraded .mdl-radio__button {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none\n}\n\n.mdl-radio__outer-circle {\n    position: absolute;\n    top: 4px;\n    left: 0;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 16px;\n    height: 16px;\n    margin: 0;\n    cursor: pointer;\n    border: 2px solid rgba(0, 0, 0, .54);\n    border-radius: 50%;\n    z-index: 2\n}\n\n.mdl-radio.is-checked .mdl-radio__outer-circle {\n    border: 2px solid rgb(255, 87, 34)\n}\n\n.mdl-radio.is-disabled .mdl-radio__outer-circle {\n    border: 2px solid rgba(0, 0, 0, .26);\n    cursor: auto\n}\n\n.mdl-radio__inner-circle {\n    position: absolute;\n    z-index: 1;\n    margin: 0;\n    top: 8px;\n    left: 4px;\n    box-sizing: border-box;\n    width: 8px;\n    height: 8px;\n    cursor: pointer;\n    -webkit-transition-duration: .28s;\n    transition-duration: .28s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: -webkit-transform;\n    transition-property: transform;\n    -webkit-transform: scale3d(0, 0, 0);\n    transform: scale3d(0, 0, 0);\n    border-radius: 50%;\n    background: rgb(255, 87, 34)\n}\n\n.mdl-radio.is-checked .mdl-radio__inner-circle {\n    -webkit-transform: scale3d(1, 1, 1);\n    transform: scale3d(1, 1, 1)\n}\n\n.mdl-radio.is-disabled .mdl-radio__inner-circle {\n    background: rgba(0, 0, 0, .26);\n    cursor: auto\n}\n\n.mdl-radio.is-focused .mdl-radio__inner-circle {\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, .1)\n}\n\n.mdl-radio__label {\n    cursor: pointer\n}\n\n.mdl-radio.is-disabled .mdl-radio__label {\n    color: rgba(0, 0, 0, .26);\n    cursor: auto\n}\n\n.mdl-radio__ripple-container {\n    position: absolute;\n    z-index: 2;\n    top: -9px;\n    left: -13px;\n    box-sizing: border-box;\n    width: 42px;\n    height: 42px;\n    border-radius: 50%;\n    cursor: pointer;\n    overflow: hidden;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000)\n}\n\n.mdl-radio__ripple-container .mdl-ripple {\n    background: rgb(255, 87, 34)\n}\n\n.mdl-radio.is-disabled .mdl-radio__ripple-container {\n    cursor: auto\n}\n\n.mdl-radio.is-disabled .mdl-radio__ripple-container .mdl-ripple {\n    background: 0 0\n}\n\n_:-ms-input-placeholder,\n:root .mdl-slider.mdl-slider.is-upgraded {\n    -ms-appearance: none;\n    height: 32px;\n    margin: 0\n}\n\n.mdl-slider {\n    width: calc(100% - 40px);\n    margin: 0 20px\n}\n\n.mdl-slider.is-upgraded {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    height: 2px;\n    background: 0 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    outline: 0;\n    padding: 0;\n    color: rgb(255, 87, 34);\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n    align-self: center;\n    z-index: 1;\n    cursor: pointer\n}\n\n.mdl-slider.is-upgraded::-moz-focus-outer {\n    border: 0\n}\n\n.mdl-slider.is-upgraded::-ms-tooltip {\n    display: none\n}\n\n.mdl-slider.is-upgraded::-webkit-slider-runnable-track {\n    background: 0 0\n}\n\n.mdl-slider.is-upgraded::-moz-range-track {\n    background: 0 0;\n    border: none\n}\n\n.mdl-slider.is-upgraded::-ms-track {\n    background: 0 0;\n    color: transparent;\n    height: 2px;\n    width: 100%;\n    border: none\n}\n\n.mdl-slider.is-upgraded::-ms-fill-lower {\n    padding: 0;\n    background: linear-gradient(to right, transparent, transparent 16px, rgb(255, 87, 34)16px, rgb(255, 87, 34)0)\n}\n\n.mdl-slider.is-upgraded::-ms-fill-upper {\n    padding: 0;\n    background: linear-gradient(to left, transparent, transparent 16px, rgba(0, 0, 0, .26)16px, rgba(0, 0, 0, .26)0)\n}\n\n.mdl-slider.is-upgraded::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 12px;\n    height: 12px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    background: rgb(255, 87, 34);\n    border: none;\n    -webkit-transition: -webkit-transform .18s cubic-bezier(.4, 0, .2, 1), border .18s cubic-bezier(.4, 0, .2, 1), box-shadow .18s cubic-bezier(.4, 0, .2, 1), background .28s cubic-bezier(.4, 0, .2, 1);\n    transition: transform .18s cubic-bezier(.4, 0, .2, 1), border .18s cubic-bezier(.4, 0, .2, 1), box-shadow .18s cubic-bezier(.4, 0, .2, 1), background .28s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-slider.is-upgraded::-moz-range-thumb {\n    -moz-appearance: none;\n    width: 12px;\n    height: 12px;\n    box-sizing: border-box;\n    border-radius: 50%;\n    background-image: none;\n    background: rgb(255, 87, 34);\n    border: none\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-webkit-slider-thumb {\n    box-shadow: 0 0 0 10px rgba(255, 87, 34, .26)\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-moz-range-thumb {\n    box-shadow: 0 0 0 10px rgba(255, 87, 34, .26)\n}\n\n.mdl-slider.is-upgraded:active::-webkit-slider-thumb {\n    background-image: none;\n    background: rgb(255, 87, 34);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5)\n}\n\n.mdl-slider.is-upgraded:active::-moz-range-thumb {\n    background-image: none;\n    background: rgb(255, 87, 34);\n    transform: scale(1.5)\n}\n\n.mdl-slider.is-upgraded::-ms-thumb {\n    width: 32px;\n    height: 32px;\n    border: none;\n    border-radius: 50%;\n    background: rgb(255, 87, 34);\n    -ms-transform: scale(.375);\n    transform: scale(.375);\n    transition: transform .18s cubic-bezier(.4, 0, .2, 1), background .28s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-slider.is-upgraded:focus:not(:active)::-ms-thumb {\n    background: radial-gradient(circle closest-side, rgb(255, 87, 34)0%, rgb(255, 87, 34)37.5%, rgba(255, 87, 34, .26)37.5%, rgba(255, 87, 34, .26)100%);\n    -ms-transform: scale(1);\n    transform: scale(1)\n}\n\n.mdl-slider.is-upgraded:active::-ms-thumb {\n    background: rgb(255, 87, 34);\n    -ms-transform: scale(.5625);\n    transform: scale(.5625)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-webkit-slider-thumb {\n    border: 2px solid rgba(0, 0, 0, .26);\n    background: 0 0\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-moz-range-thumb {\n    border: 2px solid rgba(0, 0, 0, .26);\n    background: 0 0\n}\n\n.mdl-slider.is-upgraded.is-lowest-value+.mdl-slider__background-flex>.mdl-slider__background-upper {\n    left: 6px\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-webkit-slider-thumb {\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, .12);\n    background: rgba(0, 0, 0, .12)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-moz-range-thumb {\n    box-shadow: 0 0 0 10px rgba(0, 0, 0, .12);\n    background: rgba(0, 0, 0, .12)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-webkit-slider-thumb {\n    border: 1.6px solid rgba(0, 0, 0, .26);\n    -webkit-transform: scale(1.5);\n    transform: scale(1.5)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active+.mdl-slider__background-flex>.mdl-slider__background-upper {\n    left: 9px\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-moz-range-thumb {\n    border: 1.5px solid rgba(0, 0, 0, .26);\n    transform: scale(1.5)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-thumb {\n    background: radial-gradient(circle closest-side, transparent 0%, transparent 66.67%, rgba(0, 0, 0, .26)66.67%, rgba(0, 0, 0, .26)100%)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:focus:not(:active)::-ms-thumb {\n    background: radial-gradient(circle closest-side, rgba(0, 0, 0, .12)0%, rgba(0, 0, 0, .12)25%, rgba(0, 0, 0, .26)25%, rgba(0, 0, 0, .26)37.5%, rgba(0, 0, 0, .12)37.5%, rgba(0, 0, 0, .12)100%);\n    -ms-transform: scale(1);\n    transform: scale(1)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-ms-thumb {\n    -ms-transform: scale(.5625);\n    transform: scale(.5625);\n    background: radial-gradient(circle closest-side, transparent 0%, transparent 77.78%, rgba(0, 0, 0, .26)77.78%, rgba(0, 0, 0, .26)100%)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-lower {\n    background: 0 0\n}\n\n.mdl-slider.is-upgraded.is-lowest-value::-ms-fill-upper {\n    margin-left: 6px\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:active::-ms-fill-upper {\n    margin-left: 9px\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-webkit-slider-thumb,\n.mdl-slider.is-upgraded:disabled:active::-webkit-slider-thumb,\n.mdl-slider.is-upgraded:disabled::-webkit-slider-thumb {\n    -webkit-transform: scale(.667);\n    transform: scale(.667);\n    background: rgba(0, 0, 0, .26)\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-moz-range-thumb,\n.mdl-slider.is-upgraded:disabled:active::-moz-range-thumb,\n.mdl-slider.is-upgraded:disabled::-moz-range-thumb {\n    transform: scale(.667);\n    background: rgba(0, 0, 0, .26)\n}\n\n.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-lower {\n    background-color: rgba(0, 0, 0, .26);\n    left: -6px\n}\n\n.mdl-slider.is-upgraded:disabled+.mdl-slider__background-flex>.mdl-slider__background-upper {\n    left: 6px\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-webkit-slider-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-webkit-slider-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-webkit-slider-thumb {\n    border: 3px solid rgba(0, 0, 0, .26);\n    background: 0 0;\n    -webkit-transform: scale(.667);\n    transform: scale(.667)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-moz-range-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-moz-range-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-moz-range-thumb {\n    border: 3px solid rgba(0, 0, 0, .26);\n    background: 0 0;\n    transform: scale(.667)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active+.mdl-slider__background-flex>.mdl-slider__background-upper {\n    left: 6px\n}\n\n.mdl-slider.is-upgraded:disabled:focus::-ms-thumb,\n.mdl-slider.is-upgraded:disabled:active::-ms-thumb,\n.mdl-slider.is-upgraded:disabled::-ms-thumb {\n    -ms-transform: scale(.25);\n    transform: scale(.25);\n    background: rgba(0, 0, 0, .26)\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:focus::-ms-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-thumb,\n.mdl-slider.is-upgraded.is-lowest-value:disabled::-ms-thumb {\n    -ms-transform: scale(.25);\n    transform: scale(.25);\n    background: radial-gradient(circle closest-side, transparent 0%, transparent 50%, rgba(0, 0, 0, .26)50%, rgba(0, 0, 0, .26)100%)\n}\n\n.mdl-slider.is-upgraded:disabled::-ms-fill-lower {\n    margin-right: 6px;\n    background: linear-gradient(to right, transparent, transparent 25px, rgba(0, 0, 0, .26)25px, rgba(0, 0, 0, .26)0)\n}\n\n.mdl-slider.is-upgraded:disabled::-ms-fill-upper {\n    margin-left: 6px\n}\n\n.mdl-slider.is-upgraded.is-lowest-value:disabled:active::-ms-fill-upper {\n    margin-left: 6px\n}\n\n.mdl-slider__ie-container {\n    height: 18px;\n    overflow: visible;\n    border: none;\n    margin: none;\n    padding: none\n}\n\n.mdl-slider__container {\n    height: 18px;\n    position: relative;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row\n}\n\n.mdl-slider__container,\n.mdl-slider__background-flex {\n    background: 0 0;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex\n}\n\n.mdl-slider__background-flex {\n    position: absolute;\n    height: 2px;\n    width: calc(100% - 52px);\n    top: 50%;\n    left: 0;\n    margin: 0 26px;\n    overflow: hidden;\n    border: 0;\n    padding: 0;\n    -webkit-transform: translate(0, -1px);\n    -ms-transform: translate(0, -1px);\n    transform: translate(0, -1px)\n}\n\n.mdl-slider__background-lower {\n    background: rgb(255, 87, 34)\n}\n\n.mdl-slider__background-lower,\n.mdl-slider__background-upper {\n    -webkit-box-flex: 0;\n    -webkit-flex: 0;\n    -ms-flex: 0;\n    flex: 0;\n    position: relative;\n    border: 0;\n    padding: 0\n}\n\n.mdl-slider__background-upper {\n    background: rgba(0, 0, 0, .26);\n    -webkit-transition: left .18s cubic-bezier(.4, 0, .2, 1);\n    transition: left .18s cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-spinner {\n    display: inline-block;\n    position: relative;\n    width: 28px;\n    height: 28px\n}\n\n.mdl-spinner:not(.is-upgraded).is-active:after {\n    content: \"Loading...\"\n}\n\n.mdl-spinner.is-upgraded.is-active {\n    -webkit-animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite;\n    animation: mdl-spinner__container-rotate 1568.23529412ms linear infinite\n}\n\n@-webkit-keyframes mdl-spinner__container-rotate {\n    to {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n@keyframes mdl-spinner__container-rotate {\n    to {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg)\n    }\n}\n\n.mdl-spinner__layer {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    opacity: 0\n}\n\n.mdl-spinner__layer-1 {\n    border-color: #42a5f5\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-1 {\n    border-color: rgb(255, 87, 34)\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-1 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-1-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n.mdl-spinner__layer-2 {\n    border-color: #f44336\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-2 {\n    border-color: rgb(255, 87, 34)\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-2 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-2-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n.mdl-spinner__layer-3 {\n    border-color: #fdd835\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-3 {\n    border-color: rgb(255, 87, 34)\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-3 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-3-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n.mdl-spinner__layer-4 {\n    border-color: #4caf50\n}\n\n.mdl-spinner--single-color .mdl-spinner__layer-4 {\n    border-color: rgb(255, 87, 34)\n}\n\n.mdl-spinner.is-active .mdl-spinner__layer-4 {\n    -webkit-animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1)infinite both, mdl-spinner__layer-4-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n@-webkit-keyframes mdl-spinner__fill-unfill-rotate {\n    12.5% {\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg)\n    }\n    25% {\n        -webkit-transform: rotate(270deg);\n        transform: rotate(270deg)\n    }\n    37.5% {\n        -webkit-transform: rotate(405deg);\n        transform: rotate(405deg)\n    }\n    50% {\n        -webkit-transform: rotate(540deg);\n        transform: rotate(540deg)\n    }\n    62.5% {\n        -webkit-transform: rotate(675deg);\n        transform: rotate(675deg)\n    }\n    75% {\n        -webkit-transform: rotate(810deg);\n        transform: rotate(810deg)\n    }\n    87.5% {\n        -webkit-transform: rotate(945deg);\n        transform: rotate(945deg)\n    }\n    to {\n        -webkit-transform: rotate(1080deg);\n        transform: rotate(1080deg)\n    }\n}\n\n@keyframes mdl-spinner__fill-unfill-rotate {\n    12.5% {\n        -webkit-transform: rotate(135deg);\n        transform: rotate(135deg)\n    }\n    25% {\n        -webkit-transform: rotate(270deg);\n        transform: rotate(270deg)\n    }\n    37.5% {\n        -webkit-transform: rotate(405deg);\n        transform: rotate(405deg)\n    }\n    50% {\n        -webkit-transform: rotate(540deg);\n        transform: rotate(540deg)\n    }\n    62.5% {\n        -webkit-transform: rotate(675deg);\n        transform: rotate(675deg)\n    }\n    75% {\n        -webkit-transform: rotate(810deg);\n        transform: rotate(810deg)\n    }\n    87.5% {\n        -webkit-transform: rotate(945deg);\n        transform: rotate(945deg)\n    }\n    to {\n        -webkit-transform: rotate(1080deg);\n        transform: rotate(1080deg)\n    }\n}\n\n@-webkit-keyframes mdl-spinner__layer-1-fade-in-out {\n    from,\n    25% {\n        opacity: .99\n    }\n    26%,\n    89% {\n        opacity: 0\n    }\n    90%,\n    100% {\n        opacity: .99\n    }\n}\n\n@keyframes mdl-spinner__layer-1-fade-in-out {\n    from,\n    25% {\n        opacity: .99\n    }\n    26%,\n    89% {\n        opacity: 0\n    }\n    90%,\n    100% {\n        opacity: .99\n    }\n}\n\n@-webkit-keyframes mdl-spinner__layer-2-fade-in-out {\n    from,\n    15% {\n        opacity: 0\n    }\n    25%,\n    50% {\n        opacity: .99\n    }\n    51% {\n        opacity: 0\n    }\n}\n\n@keyframes mdl-spinner__layer-2-fade-in-out {\n    from,\n    15% {\n        opacity: 0\n    }\n    25%,\n    50% {\n        opacity: .99\n    }\n    51% {\n        opacity: 0\n    }\n}\n\n@-webkit-keyframes mdl-spinner__layer-3-fade-in-out {\n    from,\n    40% {\n        opacity: 0\n    }\n    50%,\n    75% {\n        opacity: .99\n    }\n    76% {\n        opacity: 0\n    }\n}\n\n@keyframes mdl-spinner__layer-3-fade-in-out {\n    from,\n    40% {\n        opacity: 0\n    }\n    50%,\n    75% {\n        opacity: .99\n    }\n    76% {\n        opacity: 0\n    }\n}\n\n@-webkit-keyframes mdl-spinner__layer-4-fade-in-out {\n    from,\n    65% {\n        opacity: 0\n    }\n    75%,\n    90% {\n        opacity: .99\n    }\n    100% {\n        opacity: 0\n    }\n}\n\n@keyframes mdl-spinner__layer-4-fade-in-out {\n    from,\n    65% {\n        opacity: 0\n    }\n    75%,\n    90% {\n        opacity: .99\n    }\n    100% {\n        opacity: 0\n    }\n}\n\n.mdl-spinner__gap-patch {\n    position: absolute;\n    box-sizing: border-box;\n    top: 0;\n    left: 45%;\n    width: 10%;\n    height: 100%;\n    overflow: hidden;\n    border-color: inherit\n}\n\n.mdl-spinner__gap-patch .mdl-spinner__circle {\n    width: 1000%;\n    left: -450%\n}\n\n.mdl-spinner__circle-clipper {\n    display: inline-block;\n    position: relative;\n    width: 50%;\n    height: 100%;\n    overflow: hidden;\n    border-color: inherit\n}\n\n.mdl-spinner__circle-clipper .mdl-spinner__circle {\n    width: 200%\n}\n\n.mdl-spinner__circle {\n    box-sizing: border-box;\n    height: 100%;\n    border-width: 3px;\n    border-style: solid;\n    border-color: inherit;\n    border-bottom-color: transparent !important;\n    border-radius: 50%;\n    -webkit-animation: none;\n    animation: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0\n}\n\n.mdl-spinner__left .mdl-spinner__circle {\n    border-right-color: transparent !important;\n    -webkit-transform: rotate(129deg);\n    -ms-transform: rotate(129deg);\n    transform: rotate(129deg)\n}\n\n.mdl-spinner.is-active .mdl-spinner__left .mdl-spinner__circle {\n    -webkit-animation: mdl-spinner__left-spin 1333ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__left-spin 1333ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n.mdl-spinner__right .mdl-spinner__circle {\n    left: -100%;\n    border-left-color: transparent !important;\n    -webkit-transform: rotate(-129deg);\n    -ms-transform: rotate(-129deg);\n    transform: rotate(-129deg)\n}\n\n.mdl-spinner.is-active .mdl-spinner__right .mdl-spinner__circle {\n    -webkit-animation: mdl-spinner__right-spin 1333ms cubic-bezier(.4, 0, .2, 1)infinite both;\n    animation: mdl-spinner__right-spin 1333ms cubic-bezier(.4, 0, .2, 1)infinite both\n}\n\n@-webkit-keyframes mdl-spinner__left-spin {\n    from {\n        -webkit-transform: rotate(130deg);\n        transform: rotate(130deg)\n    }\n    50% {\n        -webkit-transform: rotate(-5deg);\n        transform: rotate(-5deg)\n    }\n    to {\n        -webkit-transform: rotate(130deg);\n        transform: rotate(130deg)\n    }\n}\n\n@keyframes mdl-spinner__left-spin {\n    from {\n        -webkit-transform: rotate(130deg);\n        transform: rotate(130deg)\n    }\n    50% {\n        -webkit-transform: rotate(-5deg);\n        transform: rotate(-5deg)\n    }\n    to {\n        -webkit-transform: rotate(130deg);\n        transform: rotate(130deg)\n    }\n}\n\n@-webkit-keyframes mdl-spinner__right-spin {\n    from {\n        -webkit-transform: rotate(-130deg);\n        transform: rotate(-130deg)\n    }\n    50% {\n        -webkit-transform: rotate(5deg);\n        transform: rotate(5deg)\n    }\n    to {\n        -webkit-transform: rotate(-130deg);\n        transform: rotate(-130deg)\n    }\n}\n\n@keyframes mdl-spinner__right-spin {\n    from {\n        -webkit-transform: rotate(-130deg);\n        transform: rotate(-130deg)\n    }\n    50% {\n        -webkit-transform: rotate(5deg);\n        transform: rotate(5deg)\n    }\n    to {\n        -webkit-transform: rotate(-130deg);\n        transform: rotate(-130deg)\n    }\n}\n\n.mdl-switch {\n    position: relative;\n    z-index: 1;\n    vertical-align: middle;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 100%;\n    height: 24px;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none\n}\n\n.mdl-switch.is-upgraded {\n    padding-left: 28px\n}\n\n.mdl-switch__input {\n    line-height: 24px\n}\n\n.mdl-switch.is-upgraded .mdl-switch__input {\n    position: absolute;\n    width: 0;\n    height: 0;\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    -ms-appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    appearance: none;\n    border: none\n}\n\n.mdl-switch__track {\n    background: rgba(0, 0, 0, .26);\n    position: absolute;\n    left: 0;\n    top: 5px;\n    height: 14px;\n    width: 36px;\n    border-radius: 14px;\n    cursor: pointer\n}\n\n.mdl-switch.is-checked .mdl-switch__track {\n    background: rgba(255, 87, 34, .5)\n}\n\n.mdl-switch.is-disabled .mdl-switch__track {\n    background: rgba(0, 0, 0, .12);\n    cursor: auto\n}\n\n.mdl-switch__thumb {\n    background: #fafafa;\n    position: absolute;\n    left: 0;\n    top: 2px;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);\n    -webkit-transition-duration: .28s;\n    transition-duration: .28s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    -webkit-transition-property: left;\n    transition-property: left\n}\n\n.mdl-switch.is-checked .mdl-switch__thumb {\n    background: rgb(255, 87, 34);\n    left: 16px;\n    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-switch.is-disabled .mdl-switch__thumb {\n    background: #bdbdbd;\n    cursor: auto\n}\n\n.mdl-switch__focus-helper {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-4px, -4px);\n    -ms-transform: translate(-4px, -4px);\n    transform: translate(-4px, -4px);\n    display: inline-block;\n    box-sizing: border-box;\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    background-color: transparent\n}\n\n.mdl-switch.is-focused .mdl-switch__focus-helper {\n    box-shadow: 0 0 0 20px rgba(0, 0, 0, .1);\n    background-color: rgba(0, 0, 0, .1)\n}\n\n.mdl-switch.is-focused.is-checked .mdl-switch__focus-helper {\n    box-shadow: 0 0 0 20px rgba(255, 87, 34, .26);\n    background-color: rgba(255, 87, 34, .26)\n}\n\n.mdl-switch__label {\n    position: relative;\n    cursor: pointer;\n    font-size: 16px;\n    line-height: 24px;\n    margin: 0;\n    left: 24px\n}\n\n.mdl-switch.is-disabled .mdl-switch__label {\n    color: #bdbdbd;\n    cursor: auto\n}\n\n.mdl-switch__ripple-container {\n    position: absolute;\n    z-index: 2;\n    top: -12px;\n    left: -14px;\n    box-sizing: border-box;\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    cursor: pointer;\n    overflow: hidden;\n    -webkit-mask-image: -webkit-radial-gradient(circle, #fff, #000);\n    -webkit-transition-duration: .4s;\n    transition-duration: .4s;\n    -webkit-transition-timing-function: step-end;\n    transition-timing-function: step-end;\n    -webkit-transition-property: left;\n    transition-property: left\n}\n\n.mdl-switch__ripple-container .mdl-ripple {\n    background: rgb(255, 87, 34)\n}\n\n.mdl-switch.is-disabled .mdl-switch__ripple-container {\n    cursor: auto\n}\n\n.mdl-switch.is-disabled .mdl-switch__ripple-container .mdl-ripple {\n    background: 0 0\n}\n\n.mdl-switch.is-checked .mdl-switch__ripple-container {\n    cursor: auto;\n    left: 2px\n}\n\n.mdl-tabs {\n    display: block;\n    width: 100%\n}\n\n.mdl-tabs__tab-bar {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-align-content: space-between;\n    -ms-flex-line-pack: justify;\n    align-content: space-between;\n    -webkit-box-align: start;\n    -webkit-align-items: flex-start;\n    -ms-flex-align: start;\n    align-items: flex-start;\n    height: 48px;\n    padding: 0;\n    margin: 0;\n    border-bottom: 1px solid #e0e0e0\n}\n\n.mdl-tabs__tab {\n    margin: 0;\n    border: none;\n    padding: 0 24px;\n    float: left;\n    position: relative;\n    display: block;\n    color: red;\n    text-decoration: none;\n    height: 48px;\n    line-height: 48px;\n    text-align: center;\n    font-weight: 500;\n    font-size: 14px;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, .54);\n    overflow: hidden\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active {\n    color: rgba(0, 0, 0, .87)\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__tab.is-active:after {\n    height: 2px;\n    width: 100%;\n    display: block;\n    content: \" \";\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    background: rgb(255, 87, 34);\n    -webkit-animation: border-expand .2s cubic-bezier(.4, 0, .4, 1).01s alternate forwards;\n    animation: border-expand .2s cubic-bezier(.4, 0, .4, 1).01s alternate forwards;\n    -webkit-transition: all 1s cubic-bezier(.4, 0, 1, 1);\n    transition: all 1s cubic-bezier(.4, 0, 1, 1)\n}\n\n.mdl-tabs__tab .mdl-tabs__ripple-container {\n    display: block;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    overflow: hidden\n}\n\n.mdl-tabs__tab .mdl-tabs__ripple-container .mdl-ripple {\n    background: rgb(255, 87, 34)\n}\n\n.mdl-tabs__panel {\n    display: block\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__panel {\n    display: none\n}\n\n.mdl-tabs.is-upgraded .mdl-tabs__panel.is-active {\n    display: block\n}\n\n@-webkit-keyframes border-expand {\n    0% {\n        opacity: 0;\n        width: 0\n    }\n    100% {\n        opacity: 1;\n        width: 100%\n    }\n}\n\n@keyframes border-expand {\n    0% {\n        opacity: 0;\n        width: 0\n    }\n    100% {\n        opacity: 1;\n        width: 100%\n    }\n}\n\n.mdl-textfield {\n    position: relative;\n    font-size: 16px;\n    display: inline-block;\n    box-sizing: border-box;\n    width: 300px;\n    max-width: 100%;\n    margin: 0;\n    padding: 20px 0\n}\n\n.mdl-textfield .mdl-button {\n    position: absolute;\n    bottom: 20px\n}\n\n.mdl-textfield--align-right {\n    text-align: right\n}\n\n.mdl-textfield--full-width {\n    width: 100%\n}\n\n.mdl-textfield--expandable {\n    min-width: 32px;\n    width: auto;\n    min-height: 32px\n}\n\n.mdl-textfield__input {\n    border: none;\n    border-bottom: 1px solid rgba(0, 0, 0, .12);\n    display: block;\n    font-size: 16px;\n    margin: 0;\n    padding: 4px 0;\n    width: 100%;\n    background: 0 0;\n    text-align: left;\n    color: inherit\n}\n\n.mdl-textfield.is-focused .mdl-textfield__input {\n    outline: none\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__input {\n    border-color: #de3226;\n    box-shadow: none\n}\n\n.mdl-textfield.is-disabled .mdl-textfield__input {\n    background-color: transparent;\n    border-bottom: 1px dotted rgba(0, 0, 0, .12);\n    color: rgba(0, 0, 0, .26)\n}\n\n.mdl-textfield textarea.mdl-textfield__input {\n    display: block\n}\n\n.mdl-textfield__label {\n    bottom: 0;\n    color: rgba(0, 0, 0, .26);\n    font-size: 16px;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n    position: absolute;\n    display: block;\n    top: 24px;\n    width: 100%;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: left\n}\n\n.mdl-textfield.is-dirty .mdl-textfield__label {\n    visibility: hidden\n}\n\n.mdl-textfield--floating-label .mdl-textfield__label {\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1)\n}\n\n.mdl-textfield.is-disabled.is-disabled .mdl-textfield__label {\n    color: rgba(0, 0, 0, .26)\n}\n\n.mdl-textfield--floating-label.is-focused .mdl-textfield__label,\n.mdl-textfield--floating-label.is-dirty .mdl-textfield__label {\n    color: rgb(255, 87, 34);\n    font-size: 12px;\n    top: 4px;\n    visibility: visible\n}\n\n.mdl-textfield--floating-label.is-focused .mdl-textfield__expandable-holder .mdl-textfield__label,\n.mdl-textfield--floating-label.is-dirty .mdl-textfield__expandable-holder .mdl-textfield__label {\n    top: -16px\n}\n\n.mdl-textfield--floating-label.is-invalid .mdl-textfield__label {\n    color: #de3226;\n    font-size: 12px\n}\n\n.mdl-textfield__label:after {\n    background-color: rgb(255, 87, 34);\n    bottom: 20px;\n    content: '';\n    height: 2px;\n    left: 45%;\n    position: absolute;\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    visibility: hidden;\n    width: 10px\n}\n\n.mdl-textfield.is-focused .mdl-textfield__label:after {\n    left: 0;\n    visibility: visible;\n    width: 100%\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__label:after {\n    background-color: #de3226\n}\n\n.mdl-textfield__error {\n    color: #de3226;\n    position: absolute;\n    font-size: 12px;\n    margin-top: 3px;\n    visibility: hidden;\n    display: block\n}\n\n.mdl-textfield.is-invalid .mdl-textfield__error {\n    visibility: visible\n}\n\n.mdl-textfield__expandable-holder {\n    position: relative;\n    margin-left: 32px;\n    -webkit-transition-duration: .2s;\n    transition-duration: .2s;\n    -webkit-transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    transition-timing-function: cubic-bezier(.4, 0, .2, 1);\n    display: inline-block;\n    max-width: .1px\n}\n\n.mdl-textfield.is-focused .mdl-textfield__expandable-holder,\n.mdl-textfield.is-dirty .mdl-textfield__expandable-holder {\n    max-width: 600px\n}\n\n.mdl-textfield__expandable-holder .mdl-textfield__label:after {\n    bottom: 0\n}\n\n.mdl-tooltip {\n    -webkit-transform: scale(0);\n    -ms-transform: scale(0);\n    transform: scale(0);\n    -webkit-transform-origin: top center;\n    -ms-transform-origin: top center;\n    transform-origin: top center;\n    will-change: transform;\n    z-index: 999;\n    background: rgba(97, 97, 97, .9);\n    border-radius: 2px;\n    color: #fff;\n    display: inline-block;\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 14px;\n    max-width: 170px;\n    position: fixed;\n    top: -500px;\n    left: -500px;\n    padding: 8px;\n    text-align: center\n}\n\n.mdl-tooltip.is-active {\n    -webkit-animation: pulse 200ms cubic-bezier(0, 0, .2, 1)forwards;\n    animation: pulse 200ms cubic-bezier(0, 0, .2, 1)forwards\n}\n\n.mdl-tooltip--large {\n    line-height: 14px;\n    font-size: 14px;\n    padding: 16px\n}\n\n@-webkit-keyframes pulse {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n        opacity: 0\n    }\n    50% {\n        -webkit-transform: scale(.99);\n        transform: scale(.99)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 1;\n        visibility: visible\n    }\n}\n\n@keyframes pulse {\n    0% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n        opacity: 0\n    }\n    50% {\n        -webkit-transform: scale(.99);\n        transform: scale(.99)\n    }\n    100% {\n        -webkit-transform: scale(1);\n        transform: scale(1);\n        opacity: 1;\n        visibility: visible\n    }\n}\n\n.mdl-shadow--2dp {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-shadow--3dp {\n    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12)\n}\n\n.mdl-shadow--4dp {\n    box-shadow: 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2)\n}\n\n.mdl-shadow--6dp {\n    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12), 0 3px 5px -1px rgba(0, 0, 0, .2)\n}\n\n.mdl-shadow--8dp {\n    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, .14), 0 3px 14px 2px rgba(0, 0, 0, .12), 0 5px 5px -3px rgba(0, 0, 0, .2)\n}\n\n.mdl-shadow--16dp {\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)\n}\n\n.mdl-grid {\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-flex-flow: row wrap;\n    -ms-flex-flow: row wrap;\n    flex-flow: row wrap;\n    margin: 0 auto;\n    -webkit-box-align: stretch;\n    -webkit-align-items: stretch;\n    -ms-flex-align: stretch;\n    align-items: stretch\n}\n\n.mdl-grid.mdl-grid--no-spacing {\n    padding: 0\n}\n\n.mdl-cell {\n    box-sizing: border-box\n}\n\n.mdl-cell--top {\n    -webkit-align-self: flex-start;\n    -ms-flex-item-align: start;\n    align-self: flex-start\n}\n\n.mdl-cell--middle {\n    -webkit-align-self: center;\n    -ms-flex-item-align: center;\n    align-self: center\n}\n\n.mdl-cell--bottom {\n    -webkit-align-self: flex-end;\n    -ms-flex-item-align: end;\n    align-self: flex-end\n}\n\n.mdl-cell--stretch {\n    -webkit-align-self: stretch;\n    -ms-flex-item-align: stretch;\n    align-self: stretch\n}\n\n.mdl-grid.mdl-grid--no-spacing>.mdl-cell {\n    margin: 0\n}\n\n@media (max-width:479px) {\n    .mdl-grid {\n        padding: 8px\n    }\n    .mdl-cell {\n        margin: 8px;\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell {\n        width: 100%\n    }\n    .mdl-cell--hide-phone {\n        display: none !important\n    }\n    .mdl-cell--1-col,\n    .mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n        width: calc(25% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--1-col,\n    .mdl-grid--no-spacing>.mdl-cell--1-col-phone.mdl-cell--1-col-phone {\n        width: 25%\n    }\n    .mdl-cell--2-col,\n    .mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n        width: calc(50% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--2-col,\n    .mdl-grid--no-spacing>.mdl-cell--2-col-phone.mdl-cell--2-col-phone {\n        width: 50%\n    }\n    .mdl-cell--3-col,\n    .mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n        width: calc(75% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--3-col,\n    .mdl-grid--no-spacing>.mdl-cell--3-col-phone.mdl-cell--3-col-phone {\n        width: 75%\n    }\n    .mdl-cell--4-col,\n    .mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--4-col,\n    .mdl-grid--no-spacing>.mdl-cell--4-col-phone.mdl-cell--4-col-phone {\n        width: 100%\n    }\n    .mdl-cell--5-col,\n    .mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--5-col,\n    .mdl-grid--no-spacing>.mdl-cell--5-col-phone.mdl-cell--5-col-phone {\n        width: 100%\n    }\n    .mdl-cell--6-col,\n    .mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--6-col,\n    .mdl-grid--no-spacing>.mdl-cell--6-col-phone.mdl-cell--6-col-phone {\n        width: 100%\n    }\n    .mdl-cell--7-col,\n    .mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--7-col,\n    .mdl-grid--no-spacing>.mdl-cell--7-col-phone.mdl-cell--7-col-phone {\n        width: 100%\n    }\n    .mdl-cell--8-col,\n    .mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--8-col,\n    .mdl-grid--no-spacing>.mdl-cell--8-col-phone.mdl-cell--8-col-phone {\n        width: 100%\n    }\n    .mdl-cell--9-col,\n    .mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--9-col,\n    .mdl-grid--no-spacing>.mdl-cell--9-col-phone.mdl-cell--9-col-phone {\n        width: 100%\n    }\n    .mdl-cell--10-col,\n    .mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--10-col,\n    .mdl-grid--no-spacing>.mdl-cell--10-col-phone.mdl-cell--10-col-phone {\n        width: 100%\n    }\n    .mdl-cell--11-col,\n    .mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--11-col,\n    .mdl-grid--no-spacing>.mdl-cell--11-col-phone.mdl-cell--11-col-phone {\n        width: 100%\n    }\n    .mdl-cell--12-col,\n    .mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--12-col,\n    .mdl-grid--no-spacing>.mdl-cell--12-col-phone.mdl-cell--12-col-phone {\n        width: 100%\n    }\n}\n\n@media (min-width:480px) and (max-width:839px) {\n    .mdl-grid {\n        padding: 8px\n    }\n    .mdl-cell {\n        margin: 8px;\n        width: calc(50% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell {\n        width: 50%\n    }\n    .mdl-cell--hide-tablet {\n        display: none !important\n    }\n    .mdl-cell--1-col,\n    .mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n        width: calc(12.5% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--1-col,\n    .mdl-grid--no-spacing>.mdl-cell--1-col-tablet.mdl-cell--1-col-tablet {\n        width: 12.5%\n    }\n    .mdl-cell--2-col,\n    .mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n        width: calc(25% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--2-col,\n    .mdl-grid--no-spacing>.mdl-cell--2-col-tablet.mdl-cell--2-col-tablet {\n        width: 25%\n    }\n    .mdl-cell--3-col,\n    .mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n        width: calc(37.5% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--3-col,\n    .mdl-grid--no-spacing>.mdl-cell--3-col-tablet.mdl-cell--3-col-tablet {\n        width: 37.5%\n    }\n    .mdl-cell--4-col,\n    .mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n        width: calc(50% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--4-col,\n    .mdl-grid--no-spacing>.mdl-cell--4-col-tablet.mdl-cell--4-col-tablet {\n        width: 50%\n    }\n    .mdl-cell--5-col,\n    .mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n        width: calc(62.5% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--5-col,\n    .mdl-grid--no-spacing>.mdl-cell--5-col-tablet.mdl-cell--5-col-tablet {\n        width: 62.5%\n    }\n    .mdl-cell--6-col,\n    .mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n        width: calc(75% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--6-col,\n    .mdl-grid--no-spacing>.mdl-cell--6-col-tablet.mdl-cell--6-col-tablet {\n        width: 75%\n    }\n    .mdl-cell--7-col,\n    .mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n        width: calc(87.5% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--7-col,\n    .mdl-grid--no-spacing>.mdl-cell--7-col-tablet.mdl-cell--7-col-tablet {\n        width: 87.5%\n    }\n    .mdl-cell--8-col,\n    .mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--8-col,\n    .mdl-grid--no-spacing>.mdl-cell--8-col-tablet.mdl-cell--8-col-tablet {\n        width: 100%\n    }\n    .mdl-cell--9-col,\n    .mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--9-col,\n    .mdl-grid--no-spacing>.mdl-cell--9-col-tablet.mdl-cell--9-col-tablet {\n        width: 100%\n    }\n    .mdl-cell--10-col,\n    .mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--10-col,\n    .mdl-grid--no-spacing>.mdl-cell--10-col-tablet.mdl-cell--10-col-tablet {\n        width: 100%\n    }\n    .mdl-cell--11-col,\n    .mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--11-col,\n    .mdl-grid--no-spacing>.mdl-cell--11-col-tablet.mdl-cell--11-col-tablet {\n        width: 100%\n    }\n    .mdl-cell--12-col,\n    .mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--12-col,\n    .mdl-grid--no-spacing>.mdl-cell--12-col-tablet.mdl-cell--12-col-tablet {\n        width: 100%\n    }\n}\n\n@media (min-width:840px) {\n    .mdl-grid {\n        padding: 8px\n    }\n    .mdl-cell {\n        margin: 8px;\n        width: calc(33.3333333333% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell {\n        width: 33.3333333333%\n    }\n    .mdl-cell--hide-desktop {\n        display: none !important\n    }\n    .mdl-cell--1-col,\n    .mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n        width: calc(8.3333333333% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--1-col,\n    .mdl-grid--no-spacing>.mdl-cell--1-col-desktop.mdl-cell--1-col-desktop {\n        width: 8.3333333333%\n    }\n    .mdl-cell--2-col,\n    .mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n        width: calc(16.6666666667% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--2-col,\n    .mdl-grid--no-spacing>.mdl-cell--2-col-desktop.mdl-cell--2-col-desktop {\n        width: 16.6666666667%\n    }\n    .mdl-cell--3-col,\n    .mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n        width: calc(25% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--3-col,\n    .mdl-grid--no-spacing>.mdl-cell--3-col-desktop.mdl-cell--3-col-desktop {\n        width: 25%\n    }\n    .mdl-cell--4-col,\n    .mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n        width: calc(33.3333333333% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--4-col,\n    .mdl-grid--no-spacing>.mdl-cell--4-col-desktop.mdl-cell--4-col-desktop {\n        width: 33.3333333333%\n    }\n    .mdl-cell--5-col,\n    .mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n        width: calc(41.6666666667% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--5-col,\n    .mdl-grid--no-spacing>.mdl-cell--5-col-desktop.mdl-cell--5-col-desktop {\n        width: 41.6666666667%\n    }\n    .mdl-cell--6-col,\n    .mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n        width: calc(50% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--6-col,\n    .mdl-grid--no-spacing>.mdl-cell--6-col-desktop.mdl-cell--6-col-desktop {\n        width: 50%\n    }\n    .mdl-cell--7-col,\n    .mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n        width: calc(58.3333333333% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--7-col,\n    .mdl-grid--no-spacing>.mdl-cell--7-col-desktop.mdl-cell--7-col-desktop {\n        width: 58.3333333333%\n    }\n    .mdl-cell--8-col,\n    .mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n        width: calc(66.6666666667% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--8-col,\n    .mdl-grid--no-spacing>.mdl-cell--8-col-desktop.mdl-cell--8-col-desktop {\n        width: 66.6666666667%\n    }\n    .mdl-cell--9-col,\n    .mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n        width: calc(75% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--9-col,\n    .mdl-grid--no-spacing>.mdl-cell--9-col-desktop.mdl-cell--9-col-desktop {\n        width: 75%\n    }\n    .mdl-cell--10-col,\n    .mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n        width: calc(83.3333333333% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--10-col,\n    .mdl-grid--no-spacing>.mdl-cell--10-col-desktop.mdl-cell--10-col-desktop {\n        width: 83.3333333333%\n    }\n    .mdl-cell--11-col,\n    .mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n        width: calc(91.6666666667% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--11-col,\n    .mdl-grid--no-spacing>.mdl-cell--11-col-desktop.mdl-cell--11-col-desktop {\n        width: 91.6666666667%\n    }\n    .mdl-cell--12-col,\n    .mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n        width: calc(100% - 16px)\n    }\n    .mdl-grid--no-spacing>.mdl-cell--12-col,\n    .mdl-grid--no-spacing>.mdl-cell--12-col-desktop.mdl-cell--12-col-desktop {\n        width: 100%\n    }\n}\n\nbody {\n    margin: 0\n}\n\n.styleguide-demo h1 {\n    margin: 48px 24px 0\n}\n\n.styleguide-demo h1:after {\n    content: '';\n    display: block;\n    width: 100%;\n    border-bottom: 1px solid rgba(0, 0, 0, .5);\n    margin-top: 24px\n}\n\n.styleguide-demo {\n    opacity: 0;\n    -webkit-transition: opacity .6s ease;\n    transition: opacity .6s ease\n}\n\n.styleguide-masthead {\n    height: 256px;\n    background: #212121;\n    padding: 115px 16px 0\n}\n\n.styleguide-container {\n    position: relative;\n    max-width: 960px;\n    width: 100%\n}\n\n.styleguide-title {\n    color: #fff;\n    bottom: auto;\n    position: relative;\n    font-size: 56px;\n    font-weight: 300;\n    line-height: 1;\n    letter-spacing: -.02em\n}\n\n.styleguide-title:after {\n    border-bottom: 0\n}\n\n.styleguide-title span {\n    font-weight: 300\n}\n\n.search-input {\n    width:50%;\n    margin-top:5%;\n}\n\n.mdl-styleguide .mdl-layout__drawer .mdl-navigation__link {\n    padding: 10px 24px\n}\n\n.demosLoaded .styleguide-demo {\n    opacity: 1\n}\n\niframe {\n    display: block;\n    width: 100%;\n    border: none\n}\n\niframe.heightSet {\n    overflow: hidden\n}\n\n.demo-wrapper {\n    margin: 24px\n}\n\n.demo-wrapper iframe {\n    border: 1px solid rgba(0, 0, 0, .5)\n} */\n.mat-input-element {\n    width: 450px;\n}\n.card-title {\n    font-size: 24px;\n    font-weight: bold;\n    line-height: 32px;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 24px 15px 16px 20px;\n}\n.card-footer {\n    padding: 0.75rem 1.25rem;\n    background-color: transparent;\n    border-top: 1px solid #eeeeee;\n}\n.clear-icon {\n    position: absolute;\n    top: 24px;\n    left: 7px;\n    font-size: 15px;\n    cursor: pointer;\n}\n.search-input-box {\n    position: relative;\n    text-align: -webkit-center;\n    margin-top: 50px;\n    margin-left: 30px;\n    line-height: 30px;\n}\ndiv.container\n{\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    margin-bottom: 10px;\n}\ndiv.container > div\n{\n    -webkit-box-flex: 1;\n        -ms-flex: 1 1 5em;\n            flex: 1 1 5em;\n    margin-left: 10px;\n    height:50px;\n    /* background-color: blue; */\n}\ndiv.container > div:first-child\n{\n    margin-left: 0;\n}\ndiv.container > div.two\n{\n    -webkit-box-flex:2;\n        -ms-flex:2 2 calc(10em + 10px);\n            flex:2 2 calc(10em + 10px); /** 10px is the missing margin of the missing box */\n}\ndiv.container > div.three\n{\n    -webkit-box-flex:3;\n        -ms-flex:3 3 calc(15em + 20px);\n            flex:3 3 calc(15em + 20px); /** 20px is the missing margin of the two missing boxes */\n}"

/***/ }),

/***/ "./src/app/components/topic/topic-search/topic-search.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"container\">\n            <div></div>\n            <div class=\"two\">\n                <mat-form-field>\n                    <div class=\"pull-left\">\n                        <input matInput #topicInput (keyup)=\"0\" \n                            placeholder=\"Search dot net term..\" \n                            aria-label=\"Term\" [matAutocomplete]=\"auto\"\n                            [formControl]=\"searchTerm\">\n                    </div>                    \n                    <div class=\"pull-right\">\n                        <span class=\"fa fa-remove\" (click)=\"clearInputBox()\"></span>\n                    </div>\n                    \n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <mat-option (onSelectionChange)=\"searchTerm.value !=undefined\" \n                            *ngFor=\"let topic of searchResult | async\" \n                            [value]=\"topic.termName\"\n                            (click)=\"onTermSelect(topic._id)\">                            \n                            <span>{{ topic.termName }}</span>\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>  \n            \n                <div *ngIf=\"hasSelectedTerm\">\n                    <h4 class=\"card-title \">{{selectedTerm.termName}}</h4>\n\n                    <ul *ngFor=\"let def of selectedTerm.definition\">\n                        <li>{{def}}</li>\n                    </ul>\n\n                    <div class=\"card-footer\">\n                        <a href=\"{{selectedTerm.referenceUrl}}\">{{selectedTerm.referenceUrl}}</a>\n                    </div>\n                </div>\n                \n            </div>\n            <div></div>     \n        </div>           \n    </div>\n</div>\n "

/***/ }),

/***/ "./src/app/components/topic/topic-search/topic-search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicSearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_topic_service__ = __webpack_require__("./src/app/services/topic.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_pager_service__ = __webpack_require__("./src/app/services/pager.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topic__ = __webpack_require__("./src/app/components/topic/topic.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TopicSearchComponent = (function () {
    function TopicSearchComponent(topicSvc, pagerService) {
        var _this = this;
        this.topicSvc = topicSvc;
        this.pagerService = pagerService;
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
        this.topics = [];
        this.hasSelectedTerm = false;
        this.selectedTerm = new __WEBPACK_IMPORTED_MODULE_5__topic__["a" /* Topic */]();
        this.getTopics();
        this.searchResult = this.searchTerm.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["c" /* startWith */])(''), Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (topic) { return topic ? _this.filterTopics(topic) : _this.topics.slice(); }));
    }
    TopicSearchComponent.prototype.ngOnInit = function () {
    };
    TopicSearchComponent.prototype.getTopics = function () {
        var _this = this;
        this.topicSvc.getAllTopics().subscribe(function (response) {
            _this.topics = response;
        });
    };
    TopicSearchComponent.prototype.filterTopics = function (val) {
        return this.topics.filter(function (obj) {
            return obj.termName.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    TopicSearchComponent.prototype.onTermSelect = function (id) {
        var _this = this;
        this.topicSvc.getSpecificTopic(id).subscribe(function (response) {
            //console.log(response);
            _this.selectedTerm = response;
            _this.selectedTermDefinition = _this.selectedTerm.definition;
            if (_this.selectedTerm != null)
                _this.hasSelectedTerm = true;
        });
    };
    TopicSearchComponent.prototype.clearInputBox = function () {
        this.searchTerm.setValue('');
        this.hasSelectedTerm = false;
    };
    TopicSearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'topic-search',
            template: __webpack_require__("./src/app/components/topic/topic-search/topic-search.component.html"),
            styles: [__webpack_require__("./src/app/components/topic/topic-search/topic-search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_topic_service__["a" /* TopicService */],
            __WEBPACK_IMPORTED_MODULE_4__services_pager_service__["a" /* PagerService */]])
    ], TopicSearchComponent);
    return TopicSearchComponent;
}());



/***/ }),

/***/ "./src/app/components/topic/topic.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Topic; });
var Topic = (function () {
    function Topic() {
    }
    return Topic;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"card\">\n        <div class=\"card-header card-header-danger\">\n            <h4 class=\"card-title\">Material Dashboard Heading</h4>\n            <p class=\"card-category\">Created using Roboto Font Family</p>\n        </div>\n        <div class=\"card-body\">\n            <div id=\"typography\">\n                <div class=\"card-title\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"row\">\n                    <div class=\"tim-typo\">\n                        <h1>\n                            <span class=\"tim-note\">Header 1</span>The Life of Material Dashboard </h1>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Header 2</span>The Life of Material Dashboard</h2>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h3>\n                            <span class=\"tim-note\">Header 3</span>The Life of Material Dashboard</h3>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h4>\n                            <span class=\"tim-note\">Header 4</span>The Life of Material Dashboard</h4>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h5>\n                            <span class=\"tim-note\">Header 5</span>The Life of Material Dashboard</h5>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h6>\n                            <span class=\"tim-note\">Header 6</span>The Life of Material Dashboard</h6>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <p>\n                            <span class=\"tim-note\">Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Quote</span>\n                        <blockquote class=\"blockquote\">\n                            <p>\n                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                            </p>\n                            <small>\n                                Kanye West, Musician\n                            </small>\n                        </blockquote>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <span class=\"tim-note\">Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"tim-typo\">\n                        <h2>\n                            <span class=\"tim-note\">Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () {
    };
    TypographyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typography',
            template: __webpack_require__("./src/app/components/typography/typography.component.html"),
            styles: [__webpack_require__("./src/app/components/typography/typography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/components/upgrade/upgrade.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/upgrade/upgrade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"card\">\n                    <div class=\"card-header card-header-danger\">\n                        <h4 class=\"card-title\">Material Dashboard PRO Angular</h4>\n                        <p class=\"card-category\">Are you looking for more components? Please check our Premium Version of Material Dashboard Angular.</p>\n                    </div>\n                    <div class=\"card-body\">\n                        <div class=\"table-responsive table-upgrade\">\n                            <table class=\"table\">\n                                <thead>\n                                    <tr>\n                                        <th></th>\n                                        <th class=\"text-center\">Free</th>\n                                        <th class=\"text-center\">PRO</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>Components</td>\n                                        <td class=\"text-center\">60</td>\n                                        <td class=\"text-center\">200</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Plugins</td>\n                                        <td class=\"text-center\">2</td>\n                                        <td class=\"text-center\">15</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Example Pages</td>\n                                        <td class=\"text-center\">3</td>\n                                        <td class=\"text-center\">27</td>\n                                    </tr>\n                                    <tr>\n                                        <td>Login, Register, Pricing, Lock Pages</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Mini Sidebar</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td>Premium Support</td>\n                                        <td class=\"text-center\"><i class=\"fa fa-times text-danger\"></i></td>\n                                        <td class=\"text-center\"><i class=\"fa fa-check text-success\"></i></td>\n                                    </tr>\n                                    <tr>\n                                        <td></td>\n                                        <td class=\"text-center\">Free</td>\n                                        <td class=\"text-center\">Just $59</td>\n                                    </tr>\n                                    <tr>\n                                        <td class=\"text-center\"></td>\n                                        <td class=\"text-center\">\n                                            <a href=\"#\" class=\"btn btn-round btn-fill btn-default disabled\">Current Version</a>\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a target=\"_blank\" href=\"https://www.creative-tim.com/product/material-dashboard-pro-angular2?ref=md-free-angular-upgrade-live\" class=\"btn btn-round btn-fill btn-info\">Upgrade to PRO</a>\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/upgrade/upgrade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpgradeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpgradeComponent = (function () {
    function UpgradeComponent() {
    }
    UpgradeComponent.prototype.ngOnInit = function () {
    };
    UpgradeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-upgrade',
            template: __webpack_require__("./src/app/components/upgrade/upgrade.component.html"),
            styles: [__webpack_require__("./src/app/components/upgrade/upgrade.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpgradeComponent);
    return UpgradeComponent;
}());



/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-8\">\n              <div class=\"card\">\n                  <div class=\"card-header card-header-danger\">\n                      <h4 class=\"card-title\">Edit Profile</h4>\n                      <p class=\"card-category\">Complete your profile</p>\n                  </div>\n                  <div class=\"card-body\">\n                        `<form [formGroup]=\"myform\"\n                            (ngSubmit)=\"onSubmit()\">\n                          <div class=\"row\">\n                              <div class=\"col-md-5\">\n                                <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Company (disabled)\" disabled>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-3\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Username\"\n                                        [formControl]=\"usernameFormControl\"\n                                        minLength=\"5\">\n                                    <mat-error *ngIf=\"usernameFormControl.hasError('minlength')\">\n                                        Username should be more than 5 characters in length.\n                                    </mat-error>\n                                    <mat-error *ngIf=\"usernameFormControl.hasError('required')\">\n                                        Username is <strong>required</strong>\n                                    </mat-error>\n                                  </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                  <mat-form-field class=\"example-full-width\">\n                                    <input matInput placeholder=\"Email address\" \n                                        type=\"email\"\n                                        [formControl]=\"emailFormControl\">\n                                    <mat-error *ngIf=\"emailFormControl.hasError('email')\">\n                                        Please enter a valid email address\n                          ``          </mat-error>\n                                    <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n                                        Email is <strong>required</strong>\n                                    </mat-error>\n                                  </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Fist Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-6\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Last Name\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Adress\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"City\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Country\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                              <div class=\"col-md-4\">\n                                <mat-form-field class=\"example-full-width\">\n                                  <input matInput placeholder=\"Postal Code\" type=\"text\">\n                                </mat-form-field>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-12\">\n                                <label>About Me</label>\n                                <mat-form-field class=\"example-full-width\">\n                                   <textarea matInput placeholder=\"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.\"></textarea>\n                                 </mat-form-field>\n                                  <!-- <div class=\"form-group\">\n\n                                      <div class=\"form-group\">\n                                          <label class=\"bmd-label-floating\"> Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.</label>\n                                          <textarea class=\"form-control\" rows=\"5\"></textarea>\n                                      </div>\n                                  </div> -->\n                              </div>\n                          </div>\n                          <button mat-raised-button type=\"submit\" class=\"btn btn-danger pull-right\">Update Profile</button>\n                          <div class=\"clearfix\"></div>\n                      </form>\n                  </div>\n              </div>\n          </div>\n          <div class=\"col-md-4\">\n              <div class=\"card card-profile\">\n                  <div class=\"card-avatar\">\n                      <a href=\"#pablo\">\n                          <img class=\"img\" src=\"../assets/img/faces/marc.jpg\" />\n                      </a>\n                  </div>\n                  <div class=\"card-body\">\n                      <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n                      <h4 class=\"card-title\">Alec Thompson</h4>\n                      <p class=\"card-description\">\n                          Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n                      </p>\n                      <a href=\"#pablo\" class=\"btn btn-danger btn-round\">Follow</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    UserProfileComponent.prototype.onSubmit = function () {
        if (this.myform.valid) {
            console.log("Form Submitted!");
            console.log(this.myform.value);
            //this.myform.reset();
        }
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    UserProfileComponent.prototype.createFormControls = function () {
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].email]);
        this.usernameFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["l" /* Validators */].minLength(5)]);
    };
    UserProfileComponent.prototype.createForm = function () {
        this.myform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            emailFormControl: this.emailFormControl,
            usernameFormControl: this.usernameFormControl,
        });
    };
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__("./src/app/components/user-profile/user-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            //logged in so return true 
            return true;
        }
        //not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"wrapper\">\n    <!-- Your app markup here -->\n    <!-- <app-navbar></app-navbar> -->\n        <!-- <app-sidebar></app-sidebar>         -->\n            <!-- <block-ui> -->\n                <!-- <div class=\"sidebar\" data-color=\"danger\" data-background-color=\"white\"> -->\n\n                <!-- <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div> -->\n                <!-- </div> -->\n                <!-- <div class=\"main-panel\">\n                    <router-outlet></router-outlet>\n\n                    <div *ngIf=\"isMaps('maps')\">\n                        <app-footer></app-footer>\n                    </div>\n                </div> -->\n            <!-- </block-ui>         -->\n    \n</div>\n    \n\n    \n\n\n\n"

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layouts/admin-layout/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_block_ui__ = __webpack_require__("./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(location, router) {
        this.location = location;
        this.router = router;
        this.yScrollStack = [];
        // setTimeout(() => {
        //     this.blockUI.stop(); // Stop blocking
        // }, 3000);
    }
    // ngOnInit() { }
    AdminLayoutComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4_ng_block_ui__["a" /* BlockUI */])(),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "blockUI", void 0);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/admin-layout/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/services/article.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var ArticleService = (function () {
    function ArticleService(httpClient) {
        this.httpClient = httpClient;
    }
    ArticleService.prototype.getAllArticles = function () {
        return this.httpClient.get('http://localhost:3000/articles');
    };
    ArticleService.prototype.getSpecificArticle = function (id) {
        return this.httpClient.get('http://localhost:3000/articles/' + id);
    };
    ArticleService.prototype.getAllSpecificArticles = function (date) {
        return this.httpClient.get('http://localhost:3000/articles');
    };
    ArticleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("/users/authenticate", { username: username, password: password })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var DashboardService = (function () {
    function DashboardService(httpClient) {
        this.httpClient = httpClient;
    }
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/filter-text.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterService = (function () {
    function FilterService() {
    }
    FilterService.prototype.filter = function (data, props, originalList) {
        var filteredList;
        if (data && props && originalList) {
            data = data.toLowerCase();
            var filtered = originalList.filter(function (item) {
                var match = false;
                for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                    var prop = props_1[_i];
                    if (item[prop].toString().toLowerCase().indexOf(data) > -1) {
                        match = true;
                        break;
                    }
                }
                ;
                return match;
            });
            filteredList = filtered;
        }
        else {
            filteredList = originalList;
        }
        return filteredList;
    };
    FilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FilterService);
    return FilterService;
}());



/***/ }),

/***/ "./src/app/services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.getPager = function (totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        //calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);
        // ensure current page isn't out of range
        if (currentPage < 1) {
            currentPage = 1;
        }
        else if (currentPage > totalPages) {
            currentPage = totalPages;
        }
        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        }
        else {
            //more than 10 total pages so calculate start and end pages
            if (totalPages <= 10) {
                // less than 10 total pages so show all
                startPage = 1;
                endPage = totalPages;
            }
            else {
                // more than 10 total pages so calculate start and end pages
                if (currentPage <= 6) {
                    startPage = 1;
                    endPage = 10;
                }
                else if (currentPage + 4 >= totalPages) {
                    startPage = totalPages - 9;
                    endPage = totalPages;
                }
                else {
                    startPage = currentPage - 5;
                    endPage = currentPage + 4;
                }
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = Array.from(Array((endPage + 1) - startPage).keys()).map(function (i) { return startPage + i; });
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    PagerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PagerService);
    return PagerService;
}());



/***/ }),

/***/ "./src/app/services/topic.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var TopicService = (function () {
    function TopicService(httpClient) {
        this.httpClient = httpClient;
    }
    TopicService.prototype.getAllTopics = function () {
        return this.httpClient.get('http://localhost:3000/topics');
    };
    TopicService.prototype.getSpecificTopic = function (id) {
        return this.httpClient.get('http://localhost:3000/topics/' + id);
    };
    TopicService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], TopicService);
    return TopicService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatToolbarModule */]
                //MatMomentDateModule
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["n" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material__["m" /* MatToolbarModule */]
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map