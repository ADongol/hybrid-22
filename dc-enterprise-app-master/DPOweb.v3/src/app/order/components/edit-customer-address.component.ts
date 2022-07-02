import { Component, OnInit, Input, Output, EventEmitter, ViewChildren } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router'; 
import { BlockUI, NgBlockUI } from 'ng-block-ui';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { ProjectService } from '../../project/services/project.service';
import { AddressService } from '../../address/services/address.service';

declare var jQuery: any;

@Component({
    selector: 'edit-customer-address',
    templateUrl: './edit-customer-address.component.html'     
})
export class EditCustomerAddressComponent implements OnInit {

    @BlockUI() blockUI: NgBlockUI;    
    @Input() project: any;
    public _project: any;

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,  
        private enums: Enums, private http: Http,
        private projectSvc: ProjectService, private addressSvc: AddressService,
    ) {
    }

    ngOnInit() {
        this._project = jQuery.extend(true, {}, this.project);
    }

    public countryCodeChange(event: any) {
        var countryCode = event;
        this.addressSvc.getStatesByCountry(countryCode)
            .subscribe(
            (resp: any) => {
                if (resp.isok) {
                    var states = resp.model;
                    this.project.customerAddress.states.items = resp.model.items;
                    this.project.customerAddress.stateId = null;
                }
            },
            error => { console.log("Error: " + error); });
    }

    stateChange(value: any) {
        if (value != null && value != 0) {
            for (var i = 0; i < this.project.customerAddress.states.items.length; i++) {
                if (this.project.customerAddress.states.items[i].value == value) {
                    this.project.customerAddress.stateName = this.project.customerAddress.states.items[i].text;
                }
            }
        } else {
            this.project.customerAddress.stateName = null;
        }
    }

    cancel() {

        this.project.dealerContractorName = this._project.dealerContractorName;
        this.project.customerName = this._project.customerName;
        this.project.customerAddress.addressLine1 = this._project.customerAddress.addressLine1;
        this.project.customerAddress.addressLine2 = this._project.customerAddress.addressLine2;
        this.project.customerAddress.countryCode = this._project.customerAddress.countryCode;
        this.project.customerAddress.location = this._project.customerAddress.location;
        this.project.customerAddress.stateId = this._project.customerAddress.stateId;
        this.project.customerAddress.postalCode = this._project.customerAddress.postalCode;

        this.stateChange(this.project.customerAddress.stateId);
    }

    submit() {
        //this.loadingIconSvc.Start(jQuery("#editCustomerAddressModal"));
        this.blockUI.start('Loading...');

        this._project = this.project; //Getting the latest edited ship to address to be applied, if user cancels without submitting.

        this.projectSvc.postProject(this.project)
            .subscribe(
            resp => {
                if (resp.isok) {
                    //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
                    this.blockUI.stop();
                    this.toastrSvc.displayResponseMessagesFadeOut(resp);
                    jQuery('#editCustomerAddressModal').modal('hide');

                } else {
                    this.blockUI.stop();
                    //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
                    this.toastrSvc.displayResponseMessagesFadeOut(resp);
                    jQuery('#editCustomerAddressModal').modal('hide');
                }
            },
            err => {
                this.blockUI.stop();
                //this.loadingIconSvc.Stop(jQuery("#editCustomerAddressModal"));
                jQuery('#editCustomerAddressModal').modal('hide');
                console.log("Error: ", err)
            });
    }
};

