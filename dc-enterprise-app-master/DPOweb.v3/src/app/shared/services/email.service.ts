import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from './toastr.service';

@Injectable()
export class EmailService implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private http: Http, private httpClient: HttpClient) {
    }

    ngOnInit() { }

    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }
    
    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message

        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Observable.throw(error.statusText);
    }


    private headers = new Headers({
        'Content-Type': 'application/json',
        'dataType': 'json',
        'Accept': 'application/json'
    });


    /*
     * @param emails is a json object
     * example:
     *   {
     *       "emails": ["test@123.com", "test@g", "test@eu.net"]
     *   }
     */
    public validateEmails(emails: any): Observable<any> {
        return this.http.post("/api/Email/ValidateEmails", emails, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public handleHttpClientError(error: any) {
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
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,

            //console.error(
            //    `Backend returned code ${error.status}, ` +
            //    `body was: ${error.error}`);

            //console.error(JSON.parse(JSON.stringify(error)));

             console.error(
                `Backend returned code ${error.status}, ` +
                 `body was: ${JSON.stringify(error.error)}`);
        }
        // return an observable with a user-facing error message
        return Observable.throw(error.statusText); //'Something bad happened; please try again later.'
    }

    /*
     * @param emailList: is a string (email are seperated with comma or semicolon)
     */
    //public validateEmailList(emailList: string): Observable<any> {
    //    return this.httpClient.get("/api/Email/ValidateEmailList?EmailList=" + emailList)
    //}

    public validateEmailList(emailList: string): Observable<any> {
        return this.httpClient.get("/api/Email/ValidateEmailList?EmailList=" + emailList).pipe(
            catchError(this.handleHttpClientError)
        );
    }
    



}