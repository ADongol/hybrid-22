//import { NgModule } from '@angular/core';
//import { SharedModule } from '../shared/shared.module';
//import { RouterModule } from '@angular/router';
//import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
//import { LoginComponent } from './login.component';
//import { UserRegistrationComponent } from './user-registration.component';
//import { RegistrationAcknowledgementComponent } from './registration-acknowledgement.component';
//import { UserResolver } from './services/user-resolver.service';
//import { CurrentUserResolver } from './services/user-resolver.service';
//@NgModule({
//    imports: [SharedModule, DropDownsModule,
//        RouterModule.forChild([
//            { path: '', redirectTo: 'login', pathMatch: 'full' },
//            { path: 'login', component: LoginComponent },
//            {
//                path: 'userRegistration',
//                component: UserRegistrationComponent,
//                resolve: { user: UserResolver }
//            },
//            {
//                path: 'registrationAcknowledgement', component: RegistrationAcknowledgementComponent
//            }
//        ])
//    ],
//    declarations: [LoginComponent, UserRegistrationComponent, RegistrationAcknowledgementComponent],
//    exports: [LoginComponent, UserRegistrationComponent, RegistrationAcknowledgementComponent,RouterModule],
//    providers: []
//})
//export class AccountModule {};
//# sourceMappingURL=account.module.js.map