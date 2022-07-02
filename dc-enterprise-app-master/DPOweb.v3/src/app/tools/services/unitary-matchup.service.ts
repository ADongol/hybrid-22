import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ToastrService } from '../../shared/services/toastr.service';
import { WebConfigService } from '../../shared/services/webconfig.service';
import * as webConfig from '../../../../webconfig.v3.json';


@Injectable()
export class UnitaryMatchupService {

    public webconfig: any;
    public unitaryMCToolURL: any;
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    constructor(private toastrSvc: ToastrService, private http: Http, private webConfigSvc: WebConfigService) {
        
        this.webconfig = webConfig;
        this.unitaryMCToolURL = this.webconfig.routeConfig.unitaryMatchupToolURL;
    }

    getWebConfig() {
        var self = this;
        return this.webConfigSvc.getWebConfig().then((resp: any) => {
            self.webconfig = resp;
        }).catch(error => {
            console.log("error message: " + error.message);
            console.log("error stack: " + error.stack);
        });
    }

    public getSystemMatchupList(params: any) {
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    }
        
    public getTonnageList() {
        var body = {
            "user": "user",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchup",
            "servicesName": "doGetTonnageList",
            "accountId": "goodman1",
            "params": {}
        }
        
        //Todo: load url endpoint from webconfig.v3
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        
        return this.http.post(this.unitaryMCToolURL, body, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    }

    public getEqModelList(params: any) {
        
        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    }

    public getEqCoilList(params: any) {
        var body = {
            "user": "",
            "tokenId": "7240794B-6D5A-4AAA-BAE4-7FE3FA07050F",
            "packageName": "SystemMatchupDaikin",
            "servicesName": "doGetEqCoilList",
            "accountId": "goodman1",
            "params": {
                "type": "ac",
                "modelnumber": "DX14SN0251B*"
            }
        }

        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);

    }

    public getEEPFurnaceList(params: any) {

        //var url = 'https://api.goodmanmfg.com/EBizWebServices/requestEntry';
        return this.http.post(this.unitaryMCToolURL, params, { headers: this.headers }).toPromise().then(this.extractData).catch(this.handleError);
    }

    public extractData(res: Response) {
        let resp = res.json();
        return resp || {};
    }

    public handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message

        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return Promise.reject(error.statusText);
    }
}