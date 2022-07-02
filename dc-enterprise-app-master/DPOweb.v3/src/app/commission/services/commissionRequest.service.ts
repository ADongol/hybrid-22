import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import { ToastrService } from '../../shared/services/toastr.service';

@Injectable()
export class CommissionRequestService {
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

    public getCommissionRequestModel(projectId: any, quoteId: any, commissionRequestId: any, commissionRequestStatusTypeId: any){
        return this.http.get("/api/CommissionRequest/GetCommissionRequestModel?projectId=" + projectId + "&quoteId=" + quoteId + "&commissionRequestId=" + commissionRequestId + "&commissionRequestStatusTypeId=" + commissionRequestStatusTypeId, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    public getCommissionCalculationModel(projectId: any, quoteId: any, commissionRequestId: any, commissionRequestStatusTypeId: any) {
        return this.http.get("/api/CommissionRequest/GetCommissionCalculationModel?projectId=" + projectId + "&quoteId=" + quoteId + "&commissionRequestId=" + commissionRequestId + "&commissionRequestStatusTypeId=" + commissionRequestStatusTypeId, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    public postCommissionCalculation(data: any) {
        return this.http.post("/api/CommissionRequest/PostCommissionCalculation", data, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);

    }

    public postCommissionRequest(commissiontRequest: any) : Observable<any> {
        return this.http.post("/api/CommissionRequest/PostCommissionRequest", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);

    }

    

    public approveCommissionRequest(commissiontRequest: any) : Observable<any>{
        //MVC Controller
        //return this.http.post("/ProjectDashboard/CommissionRequestApprove", data, { headers: this.headers })
        //    .map(this.extractData)
        //    .catch(this.handleError);

        
        return this.http.post("/api/CommissionRequest/ApproveCommissionRequest", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public rejectCommissionRequest(commissiontRequest: any): Observable<any> {

        return this.http.post("/api/CommissionRequest/RejectCommissionRequest", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public deleteCommissionRequest(commissiontRequest: any): Observable<any> {

        return this.http.post("/api/CommissionRequest/DeleteCommissionRequest", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getCommissionPercentage(data: any) {
        return this.http.post("/api/CommissionRequest/GetCommissionPercentage", data, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public getUnitaryCommissionPercentage(data: any) {
        return this.http.post("/api/CommissionMultiplier/GetUnitaryMultiplier", data, { headers: this.headers }).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    }

    public sendCommissionRequestEmail(commissiontRequest: any) {
        return this.http.post("/ProjectDashboard/SendCommissionRequestEmail", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public sendApprovalRejectionEmail(commissiontRequest: any) {
        return this.http.post("/ProjectDashboard/SendApprovalRejectionCommissionRequestEmail", commissiontRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getMostRecentCommissionRequestModel(projectId: any, quoteId: any): Observable<any> {
        return this.http.get("/api/CommissionRequest/GetMostRecentCommissionRequestModel?projectId=" + projectId + "&quoteId=" + quoteId)
            .map(this.extractData)
            .catch(this.handleError);
    }

    
}