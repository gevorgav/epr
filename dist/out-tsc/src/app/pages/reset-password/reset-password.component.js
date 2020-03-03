import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as Parse from "parse";
import { ParseService } from '../../shared/services/parse.service';
import { Router } from '@angular/router';
var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(parseService, router) {
        this.parseService = parseService;
        this.router = router;
        this.email = "";
        this.message = "";
        this.disableResetButton = false;
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        this.initResetForm();
    };
    ResetPasswordComponent.prototype.initResetForm = function () {
        this.userResetForm = new FormGroup({
            'email': new FormControl(this.email, [
                Validators.required,
                Validators.email
            ], this.checkMail.bind(this)),
        });
    };
    ResetPasswordComponent.prototype.checkMail = function (control) {
        var Stores = Parse.Object.extend("User");
        var query = new Parse.Query(Stores);
        query.equalTo("email", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { emailTaken: true };
        });
    };
    ResetPasswordComponent.prototype.onSubmitResetPassword = function () {
        var _this = this;
        this.parseService.parse.User.requestPasswordReset(this.userResetForm.get('email').value)
            .then(function () {
            _this.message = "Password reset request was sent successfully, please check your email.";
            _this.redirect();
        }).catch(function (error) {
            _this.message = error.message;
        });
    };
    ResetPasswordComponent.prototype.redirect = function () {
        var _this = this;
        this.disableResetButton = true;
        setTimeout(function () {
            _this.router.navigate(["login"]);
        }, 3000);
    };
    ResetPasswordComponent = tslib_1.__decorate([
        Component({
            selector: 'app-reset-password',
            templateUrl: './reset-password.component.html',
            styleUrls: ['./reset-password.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ParseService,
            Router])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());
export { ResetPasswordComponent };
//# sourceMappingURL=reset-password.component.js.map