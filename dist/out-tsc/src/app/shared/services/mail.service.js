import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let MailService = class MailService {
    constructor(http) {
        this.http = http;
    }
    sendToken(token) {
        return this.http.post('/token_validate', { recaptcha: token });
    }
    sendEmail(contactUsModel) {
        return this.http.post('/sendEmail', contactUsModel);
    }
    sendClientNotice(clientNotice) {
        return this.http.post('/sendEmail/client-notice', clientNotice);
    }
};
MailService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], MailService);
export { MailService };
//# sourceMappingURL=mail.service.js.map