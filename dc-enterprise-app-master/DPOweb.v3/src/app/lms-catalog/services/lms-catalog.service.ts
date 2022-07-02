import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import { ToastrService } from '../../shared/services/toastr.service';

@Injectable()
export class LmsCatalogService {

    constructor(private toastrSvc: ToastrService, private http: Http) {
    }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'dataType': 'json',
        'Accept': 'application/json'
    });

    public extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    public extractHtml(res: any) {
        return res._body;
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message

        //console.error(error); // log to console instead
        console.log(error);
        this.toastrSvc.Error(error.statusText);
        return Observable.throw(error.statusText);
    }

    public getDaikinCityLmsCourseSessions(searchParams: any): Observable<any> {
        return this.http.post("/api/DaikinUniversity/SearchDaikinCityLmsCourseSessions", searchParams, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getPublicLmsCatalogBasedOnSearch(searchParams: any): Observable<any> {
        return this.http.post("/api/DaikinUniversity/SearchPublicLmsCatalog", searchParams, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public duplicateQuote(projectId: any, quoteId: any): Observable<any> {
        return this.http.get("/api/Quote/DuplicateQuote?projectId=" + projectId + "&quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
}