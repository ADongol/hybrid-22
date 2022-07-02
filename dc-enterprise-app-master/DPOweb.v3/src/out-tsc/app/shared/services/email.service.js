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
var http_2 = require("@angular/common/http");
//import { Observable } from 'rxjs/Observable';
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var toastr_service_1 = require("./toastr.service");
var EmailService = /** @class */ (function () {
    function EmailService(router, route, toastrSvc, http, httpClient) {
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.httpClient = httpClient;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    EmailService.prototype.ngOnInit = function () { };
    EmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    EmailService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return rxjs_1.Observable.throw(error.statusText);
    };
    /*
     * @param emails is a json object
     * example:
     *   {
     *       "emails": ["test@123.com", "test@g", "test@eu.net"]
     *   }
     */
    EmailService.prototype.validateEmails = function (emails) {
        return this.http.post("/api/Email/ValidateEmails", emails, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    EmailService.prototype.handleHttpClientError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        //console.error(error); // log to console instead
        //this.toastrSvc.Error(error.message);
        //console.error(error.message)
        //return Observable.throw(error.statusText);
        debugger;
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            //console.error(
            //    `Backend returned code ${error.status}, ` +
            //    `body was: ${error.error}`);
            //console.error(JSON.parse(JSON.stringify(error)));
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + JSON.stringify(error.error)));
        }
        // return an observable with a user-facing error message
        return rxjs_1.Observable.throw(error.statusText); //'Something bad happened; please try again later.'
    };
    /*
     * @param emailList: is a string (email are seperated with comma or semicolon)
     */
    //public validateEmailList(emailList: string): Observable<any> {
    //    return this.httpClient.get("/api/Email/ValidateEmailList?EmailList=" + emailList)
    //}
    EmailService.prototype.validateEmailList = function (emailList) {
        return this.httpClient.get("/api/Email/ValidateEmailList?EmailList=" + emailList).pipe(operators_1.catchError(this.handleHttpClientError));
    };
    EmailService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            toastr_service_1.ToastrService, http_1.Http, http_2.HttpClient])
    ], EmailService);
    return EmailService;
}());
exports.EmailService = EmailService;
//# sourceMappingURL=email.service.js.map