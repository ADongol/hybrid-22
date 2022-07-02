import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable()
export class ToastrService {
    Error(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "timeOut": 0,
            "extendedTimeOut": 0,
            "preventDuplicates": true
        }

        toastr.error(message + "<br /><br /><button type'button' class='btn clear' style='color: black'>Ok</button>");
    }

    ErrorFadeOut(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }

        toastr.error(message);
    }

    UserRegistionError(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }

        toastr.error(message + "<br />Please refer to our <a href='/v3/#/account/userRegistrationFAQ' style='color: #40c8f4; text-decoration: underline'>FAQ</a>");
    }

    Success(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }

        toastr.success(message);
    }

    Info(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }
        toastr.info(message);
    }

    Warning(message: any) {
        toastr.options = {
            "positionClass": "toast-bottom-right",
            "preventDuplicates": true
        }
        toastr.warning(message);
    }


    displayResponseMessages(response: any) {
        if (response != null && response.messages != null) {
            for (let message of response.messages.items) {
                if (message.type == 40) {// success
                    this.Success(message.text);
                } else if (message.type == 10) {// error
                    this.Error(message.text);
                }

            }
        }

    }

    displayUserRegistrationResponseMessages(response: any) {
        if (response != null && response.messages != null) {
            for (let message of response.messages.items) {
                if (message.type == 40) {// success
                    this.Success(message.text);
                } else if (message.type == 10) {// error
                    this.UserRegistionError(message.text);
                }

            }
        }

    }

    displayResponseMessagesFadeOut(response: any) {
        if (response != null && response.messages != null) {
            for (let message of response.messages.items) {
                if (message.type == 40) {// success
                    this.Success(message.text);
                } else if (message.type == 10) {// error
                    this.ErrorFadeOut(message.text);
                }

            }
        }

    }
}