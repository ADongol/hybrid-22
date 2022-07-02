"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var toastr_service_1 = require("./toastr.service");
var UserService = /** @class */ (function () {
    function UserService(router, route, toastrSvc, http) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    UserService.prototype.ngOnInit = function () { };
    UserService.prototype.isAuthenticated = function () {
        return this.http.get("/api/User/IsAuthenticated", { headers: this.headers }).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    UserService.prototype.getCurrentUser = function () {
        var self = this;
        return this.http.get("/api/User/GetCurrentUser", { headers: this.headers }).toPromise()
            .then(function (res) {
            var resp = res.json();
            // HACK:  Hard-coded
            if (self.router.url.toLowerCase().includes("lms-catalog")) {
                return resp || {};
            }
            if (resp == null) {
                self.router.navigateByUrl("/account/login");
            }
            else {
                return resp || {};
            }
        })
            .catch(this.handleError);
    };
    UserService.prototype.getWebsiteMaintenanceInfo = function () {
        return this.http.get("/api/MaintenancePage/GetMaintenancePageInfo", { headers: this.headers }).toPromise()
            .then(this.extractData).catch(this.handleError);
    };
    UserService.prototype.extractData = function (res) {
        var resp = res.json();
        return resp || {};
    };
    UserService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    };
    UserService.prototype.hasAccess = function (user, accessId) {
        if (user != undefined || user != null) {
            for (var _i = 0, _a = user.systemAccesses; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item == accessId) {
                    return true;
                }
            }
        }
        return false;
    };
    UserService.prototype.checkUserStatus = function (user) {
        if (user != undefined || user != null) {
            if (this.userInPendingStatus(user))
                return true;
        }
        return false;
    };
    UserService.prototype.userInPendingStatus = function (user) {
        return user.approved == false && user.rejected == false && user.enabled == true;
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map