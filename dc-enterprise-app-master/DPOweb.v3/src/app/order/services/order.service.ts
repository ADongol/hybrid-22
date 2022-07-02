import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import { ToastrService } from '../../shared/services/toastr.service';

@Injectable()
export class OrderService {

    constructor(private toastrSvc: ToastrService, private http: Http) { }

    private headers = new Headers({
        'Content-Type': 'application/json',
        'dataType': 'json',
        'Accept': 'application/json'
    });

    private downloadHeaders = new Headers();
    private downloadOptions = new RequestOptions({
        //method: RequestMethod.Post,
        responseType: ResponseContentType.Blob,
        headers: this.downloadHeaders
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

        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Observable.throw(error.statusText);
    }

    //Test
    public getSubmittalOrder() {
        return this.http.get("/api/Order/GetSubmittalOrder", { headers: this.headers }).toPromise()
            .then((resp: Response) => {
                debugger
                return resp;

            })
            .catch(this.handleError);
    }

    public orderForm(projectId: any, quoteId: any): Observable<any> {
        return this.http.get("/api/Order/OrderForm?projectId=" + projectId + "&quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getSubmittedOrderForm(quoteId: any): Observable<any> {
        return this.http.get("/api/Order/GetSubmittedOrder?quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public postOrder(order: any): Observable<any> {
        return this.http.post("/api/Order/PostOrder", order, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public sendOrderEmail(order: any): Observable<any> {
        return this.http.post("/ProjectDashboard/SendEmailOrderSubmit", order, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    //orders grid api calls
    public getLast365DaysOrderItemList(): Observable<any> {
        return this.http.get("/api/Order/GetOrdersForGrid", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getUserList(): Observable<any> {
        return this.http.get("/api/User/GetUsersViewable", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getOrderStatusList(): Observable<any> {
        return this.http.get("/api/Order/GetOrderStatusTypes", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getBusinessNameList(): Observable<any> {
        return this.http.get("/api/Business/GetBusinessList", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getOrderItemsForLast365Days(): Observable<any> {
        return this.http.get("/api/Order/GetOrdersForGrid", { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getOrdersBasedOnSearchParams(searchParams: any): Observable<any> {
        return this.http.post("/api/Order/GetOrdersBasedOnSearchParams", searchParams, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public uploadAdditionalDocs(quoteId: any): Observable<any> {
        let httpUrl = "/api/Order/UploadAdditionalDocsZip?quoteId=";    

        return this.http.get(httpUrl + quoteId, this.downloadOptions)
            .map((res) => { return res; })
            .share()
            .catch(this.handleError);
    }

    public removeUploadedDocsOnCancel(quoteId: any): Observable<any> {
        return this.http.get("/api/Order/DeleteUploadedDocsOnCancel?quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public checkIfOrderIsSubmitted(quoteId: any): Observable<any> {
        return this.http.get("/api/Order/CheckIfOrderIsSubmitted?quoteId=" + quoteId, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
}