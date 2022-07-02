import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ToastrService } from '../../shared/services/toastr.service';
import { BaseErrorHandler } from '../../shared/common/base-error-handler.component';
import { SubmittalPackageModel } from '../../submittal-package/models/submittal-package';
import { DocumentModel } from '../models/document';

@Injectable()
export class SubmittalPackageService extends BaseErrorHandler {
    private apiUrl: string;

    private headers = new Headers({ 'Content-Type': 'application/json' });

    private options = new RequestOptions({ headers: this.headers });
    private downloadHeaders = new Headers();
    private downloadOptions = new RequestOptions({
        //method: RequestMethod.Post,
        responseType: ResponseContentType.Blob,
        headers: this.downloadHeaders
    });

    constructor(private http: Http, private toastrService: ToastrService) {
        super(toastrService);
        console.log('Submittal Package Service Initialized...');
    }     

    public getQuotePackage(quoteId: string) {        
        let data = this.http.get("/api/SubmittalPackage/GetQuotePackage?quoteId=" + quoteId)
            .map(this.extractData)
            .catch(this.handleError);    

        return data;
    }

    public getAttachedFiles(quoteId: string) {
        let data = this.http.get("/api/SubmittalPackage/GetAttachedFiles?quoteId=" + quoteId)
            .map(res => res.json().model as DocumentModel)
            .catch(this.handleError);

        return data;
    }
    
    public createQuotePackage(model: SubmittalPackageModel): Observable<any> {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageCreate";    

        return this.http.post(this.apiUrl, model, this.downloadOptions)
            .map((res) => {
                return res;
            })
            .share()
            .catch(this.handleError);
    }

    public deleteFile(model: SubmittalPackageModel): Observable<any> {
        this.apiUrl = "/api/SubmittalPackage/QuotePackageDeleteAttachFile";
        let headers = new Headers();
        let options = new RequestOptions({ headers: headers });
 
        return this.http.post(this.apiUrl, model, options)
            .map(response => response.json())
            .catch(error => Observable.throw(error));
    }

    private extractData(res: Response) {
        const body = res.json().model as SubmittalPackageModel;
        return body || null;
    }

    public handleError(error: any) {
        
        console.log(error);
        this.toastrService.Error(error.statusText);
        return Observable.throw(error.statusText);
    }
}


           /* .map((res) => {
                //return res.json();
                if (res.status == 400) {
                    return "FAILURE";
                } else if (res.status == 200) {
                    //var contentType = 'application/zip';
                    //var blob = new Blob([(<any>res)._body], { type: contentType });
                    //return blob;

                    var blob = new Blob([this.str2bytes(res['_body'])], { type: "application/zip" });

                   // let blob = res.blob();
                    let filename = 'abcd.zip';
                    //FileSaver.default(blob, filename);
                        //FileSaver.saveAs(blob, "");
                    //navigator.msSaveBlob(, filename);
                }
            })
            .catch(this.handleError) */