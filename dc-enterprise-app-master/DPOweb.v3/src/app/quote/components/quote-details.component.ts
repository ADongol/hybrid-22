import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../../account/services/account.service';

declare var jQuery: any;

@Component({
    selector: "quote-details",
    templateUrl: "./quote-details.component.html"
})
export class QuoteDetailsComponent implements OnInit {

    @Input() quote: any;
    @Input() user: any;

    constructor(private router: Router, private route: ActivatedRoute, private toastrSvc: ToastrService,  
        private userSvc: UserService, private accountSvc: AccountService,
        private enums: Enums) {
    }

    ngOnInit() {
    }
};
