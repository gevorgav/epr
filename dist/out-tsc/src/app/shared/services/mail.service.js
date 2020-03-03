import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MailService = /** @class */ (function () {
    function MailService(http) {
        this.http = http;
    }
    MailService.prototype.sendToken = function (token) {
        return this.http.post('/token_validate', { recaptcha: token });
    };
    MailService.prototype.sendEmail = function (contactUsModel) {
        return this.http.post('/sendEmail', contactUsModel);
    };
    MailService.prototype.sendClientNotice = function (clientNotice) {
        return this.http.post('/sendEmail/client-notice', clientNotice);
    };
    MailService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MailService);
    return MailService;
}());
export { MailService };
//# sourceMappingURL=mail.service.js.map