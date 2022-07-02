import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrService } from '../../shared/services/toastr.service';
//import { LoadingIconService } from '../shared/services/loadingIcon.service';
//import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { UserService } from '../../shared/services/user.service';
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../services/account.service';

declare var jQuery: any;

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

    //@Output() userAuthenticationEvt = new EventEmitter();

    public user: any;
    public loginJumpDefault: { text: string, value: string } = { text: "Home", value: "/v3/#/home" };

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, 
        private enums: Enums,
        //private loadingIconSvc: LoadingIconService,
    ) {

        //this.accountSvc.getUserLoginModel().then(this.getUserLoginModelCallback.bind(this));

        var self = this;
        this.accountSvc.getUserLoginModel()
            .subscribe(
            data => {
                self.user = data.model;
                self.user.selectedLink = "/v3/#/home";
                //self.loginJumpOptions = this.user.links.items;
            },
            err => console.log("Error: ", err)
            );
    }
    ngOnInit() {
        //Clear BasketId
        this.accountSvc.resetBasketQuoteId();
    }

    public selectedLinkChange(event: any) {
        this.user.selectedLink = event.value;
        //this.user.selectedLink = event;
    }

    public logIn() {

        var self = this;
        var data = {
            Email: this.user.email,
            Password: this.user.password,
            SelectedLink: this.user.selectedLink,
            Persistent: this.user.persistent,
        }

        this.accountSvc.logIn(data).then((resp: any) => {
            //self.loadingIconSvc.Stop(jQuery("#productPageContainer"));

            self.toastrSvc.displayUserRegistrationResponseMessages(resp);

            if (resp.isok) {
                //window.location.href = resp.model;
                window.location.href = this.user.selectedLink;
                self.userSvc.userIsAuthenticated = true;
                this.userSvc.getCurrentUser().then(this.getCurrentUserCallback.bind(this));
                //self.userAuthenticationEvt.emit({});
            }

        });

    }

    public getCurrentUserCallback(resp: any) {
        if (resp.isok) {

            this.userSvc.currentUser = resp.model;

            for (let message of resp.messages.items) {
                if (message.type == 40) {// success
                    this.toastrSvc.Success(message.text);
                }
            }
        } else {
            //resp is null
            //for (let message of resp.messages.items) {
            //    if (message.type == 10) {// error
            //        this.toastrSvc.Error(message.text);
            //    }
            //}
        }

    }

    //public getUserLoginModelCallback(resp: any) {
    //    if (resp.isok) {
    //        this.user = resp.model;
    //        //this.loginJumpOptions = this.user.links.items;
    //    }
    //}
};
