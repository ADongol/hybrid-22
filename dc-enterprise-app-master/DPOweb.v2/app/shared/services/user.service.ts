import {Injectable, OnInit} from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/Rx';
import { ToastrService } from './toastr.service';

@Injectable()
export class UserService implements OnInit {

    public currentUser: any;
    public userIsAuthenticated: boolean;

    constructor(private router: Router, private route: ActivatedRoute, private toastrSvc: ToastrService, private http: Http) {
        
    }

    ngOnInit() {
        //this.getCurrentUser()
        //    .then(this.getCurrentUserCallback.bind(this));
    }

    public isAuthenticated() {
        let headers = new Headers({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });

        return this.http.get("/api/User/IsAuthenticated", { headers: headers }).toPromise().then(this.extractData).catch(this.handleError);
    }

    public getCurrentUser() {
        var self = this;

        let headers = new Headers({
            'Content-Type': 'application/json',
            'dataType': 'json',
            'Accept': 'application/json'
        });

        //return this.http.get("/api/User/GetCurrentUser", { headers: headers }).toPromise().then(this.extractData).catch(this.handleError);

        return this.http.get("/api/User/GetCurrentUser", { headers: headers }).toPromise()
            .then(res => {
                var resp = res.json();
                if (resp == null) {
                    self.router.navigateByUrl("/account/login");
                } else {
                    return resp || {};
                }
            })
            .catch(this.handleError);
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

    public hasAccess(user: any , accessId: any) {

        for (let item of user.systemAccesses) {
            if (item == accessId) {
                return true;
            }
        }

        return false;
    }
        

}