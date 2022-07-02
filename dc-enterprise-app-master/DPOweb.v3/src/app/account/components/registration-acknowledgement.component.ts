import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from '../../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';

import { AccountService } from '../services/account.service';

declare var jQuery: any;

@Component({
    selector: "registration-acknowledgement",
    templateUrl: "./registration-acknowledgement.component.html"
})
export class RegistrationAcknowledgementComponent {
    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService,
        private enums: Enums,
        //private loadingIconSvc: LoadingIconService,
    ) {
    }
}