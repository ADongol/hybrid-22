
import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
//import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ToastrService } from '../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../shared/services/user.service';
import { Enums } from '../shared/enums/enums';

import { ProjectService } from '../project/services/project.service';
import { AddressService } from './services/address.service';
declare var jQuery: any;

@Component({
    selector: 'address',
    templateUrl: './address.component.html'

})
export class AddressComponent implements OnInit {
    //public project: any;

    @Input() project: any;
    @Input() address: any;
  

    //no being used
    @Input() addressType: any;
    @Input() projectEditForm: any;

    //public selectedState: { text: string, value: number } = { text: null, value: null };

    public defaultItem: { text: string, value: number } = { text: "Select ...", value: null };

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private http: Http, private projectSvc: ProjectService, private addressSvc: AddressService) {

    

    }

    ngOnInit() {

        var type = this.addressType;
        //this.selectedState.text = this.address.stateName;
        //this.selectedState.value = this.address.stateId;

    }

    public countryCodeChange(event: any) {
        var countryCode = event;
        this.addressSvc.getStatesByCountry(countryCode)
            .subscribe(
            (resp: any) => {
                if (resp.isok) {
                    var states = resp.model;
                    this.address.states.items = resp.model.items;
                    this.address.stateId = null;
                }
            },
            error => {
                console.log("Error: " + error);
            });
    }

    stateChange(value: any) {
        for (var i = 0; i < this.address.states.items.length; i++) {
            if (this.address.states.items[i].value == value) {
                this.address.stateName = this.address.states.items[i].text;
            }
        }
    }

   



};

