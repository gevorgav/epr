import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsModel } from '../../shared/model/contact-us.model';
import { MailService } from '../../shared/services/mail.service';
var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent(emailService) {
        this.emailService = emailService;
        this.sendEmailErrorMessage = '';
        this.contactUs = new ContactUsModel();
        this.recaptcha = false;
        this.initForm();
    }
    ContactInfoComponent.prototype.onSubmitSendEmail = function () {
        if (this.emailForm.valid && this.recaptcha) {
            var contactUs = new ContactUsModel();
            contactUs.message = this.emailForm.get('message').value;
            contactUs.name = this.emailForm.get('name').value;
            contactUs.phone = this.emailForm.get('phone').value;
            contactUs.subject = this.emailForm.get('subject').value;
            contactUs.email = this.emailForm.get('email').value;
            this.emailService.sendEmail(contactUs).subscribe(function (res) {
                location.reload();
            });
        }
    };
    ContactInfoComponent.prototype.initForm = function () {
        this.emailForm = new FormGroup({
            'name': new FormControl(this.contactUs.name, [
                Validators.required
            ]),
            'email': new FormControl(this.contactUs.email, [
                Validators.required,
                Validators.email
            ]),
            'subject': new FormControl(this.contactUs.subject, [
                Validators.required
            ]),
            'phone': new FormControl(this.contactUs.phone, [
                Validators.required
            ]),
            'message': new FormControl(this.contactUs.message, [
                Validators.required
            ]),
            'recaptchaReactive': new FormControl('', []),
        });
    };
    ContactInfoComponent.prototype.resolved = function (captchaResponse) {
        var _this = this;
        this.emailService.sendToken(captchaResponse).subscribe(function (data) {
            _this.recaptcha = true;
        }, function (err) {
            _this.recaptcha = false;
            _this.sendEmailErrorMessage = 'Verification failed';
        });
    };
    ContactInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact-info',
            templateUrl: './contact-info.component.html',
            styleUrls: ['./contact-info.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MailService])
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());
export { ContactInfoComponent };
//# sourceMappingURL=contact-info.component.js.map