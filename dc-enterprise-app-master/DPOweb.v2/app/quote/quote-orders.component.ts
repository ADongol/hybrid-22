﻿import { Component, OnInit, Input, Output, EventEmitter, Inject, TemplateRef } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { State, process } from '@progress/kendo-data-query';

import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Observable } from 'rxjs/Rx';

import { ToastrService } from '../shared/services/toastr.service';
import { UserService } from '../shared/services/user.service';
import { SystemAccessEnum } from '../shared/services/systemAccessEnum';
import { Enums } from '../shared/enums/enums';
import { AccountService } from '../account/services/account.service';
import { QuoteService } from './services/quote.service';

declare var jQuery: any;

@Component({
    selector: "quote-orders",
    templateUrl: "app/quote/quote-orders.component.html"
})

export class QuoteOrdersComponent implements OnInit {

    @Input() quote: any;
    @Input() user: any;
    @Input() quoteItems: any;


    constructor(private router: Router, private route: ActivatedRoute, private toastrSvc: ToastrService,  
        private userSvc: UserService, private accountSvc: AccountService, private quoteSvc: QuoteService,
        private systemAccessEnum: SystemAccessEnum, private enums: Enums) {

    }

    ngOnInit() { }


};
