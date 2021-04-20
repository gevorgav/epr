import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Parse from "parse";
import { ParseService } from '../../shared/services/parse.service';
import { Router } from '@angular/router';
let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(parseService, router) {
        this.parseService = parseService;
        this.router = router;
        this.email = "";
        this.message = "";
        this.disableResetButton = false;
    }
    ngOnInit() {
        this.initResetForm();
    }
    initResetForm() {
        this.userResetForm = new FormGroup({
            'email': new FormControl(this.email, [
                Validators.required,
                Validators.email
            ], this.checkMail.bind(this)),
        });
    }
    checkMail(control) {
        let Stores = Parse.Object.extend("User");
        const query = new Parse.Query(Stores);
        query.equalTo("email", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { emailTaken: true };
        });
    }
    onSubmitResetPassword() {
        this.parseService.parse.User.requestPasswordReset(this.userResetForm.get('email').value)
            .then(() => {
            this.message = "Password reset request was sent successfully, please check your email.";
            this.redirect();
        }).catch((error) => {
            this.message = error.message;
        });
    }
    redirect() {
        this.disableResetButton = true;
        setTimeout(() => {
            this.router.navigate(["login"]);
        }, 3000);
    }
};
ResetPasswordComponent = __decorate([
    Component({
        selector: 'app-reset-password',
        templateUrl: './reset-password.component.html',
        styleUrls: ['./reset-password.component.css']
    }),
    __metadata("design:paramtypes", [ParseService,
        Router])
], ResetPasswordComponent);
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map