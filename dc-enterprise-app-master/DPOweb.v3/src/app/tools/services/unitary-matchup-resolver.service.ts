import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import 'rxjs/Rx';
import { ToastrService } from '../../shared/services/toastr.service';
import { UnitaryMatchupService } from './unitary-matchup.service';

@Injectable()
export class UnitaryMatchupResolver {
    constructor(private unitaryMatchupSvc: UnitaryMatchupService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        
        return this.unitaryMatchupSvc.getTonnageList()
            .map(resp => {
                if (resp) {
                    return resp.result.tonnageList;
                } else {
                    return null;
                }
            }).catch(error => {
                console.log(error);
                return Observable.of(null);
            });
             
        

    }
}
