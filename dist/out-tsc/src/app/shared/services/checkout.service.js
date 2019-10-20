import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
var CheckoutService = /** @class */ (function () {
    function CheckoutService(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://api.authorize.net/xml/v1/request.api';
    }
    CheckoutService_1 = CheckoutService;
    CheckoutService.prototype.getToken = function () {
        return this.httpClient.post(this.URL, CheckoutService_1.PAYMENT_OBJ).pipe(map(function (res) {
            if (res['messages']['resultCode'] === "Ok") {
                return res['token'];
            }
            else {
                return '';
            }
        }));
    };
    var CheckoutService_1;
    CheckoutService.PAYMENT_OBJ = {
        getHostedPaymentPageRequest: {
            merchantAuthentication: {
                name: "3Vpb69UJ6",
                transactionKey: "9Ut347QY48FJ9bs9"
            },
            transactionRequest: {
                transactionType: "authCaptureTransaction",
                amount: "20.00",
                customer: {
                    email: "ellen@mail.com"
                },
                billTo: {
                    firstName: "",
                    lastName: "",
                    company: "",
                    address: "",
                    city: "",
                    state: "",
                    zip: "",
                    country: "USA"
                }
            },
            hostedPaymentSettings: {
                setting: [{
                        settingName: "hostedPaymentReturnOptions",
                        settingValue: "{\"showReceipt\": true, \"url\": \"bebebe\", \"urlText\": \"Continue\", \"cancelUrl\": \"https://entertainmentpartyrentals.com/cart\", \"cancelUrlText\": \"Cancel\"}"
                    }]
            }
        }
    };
    CheckoutService = CheckoutService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], CheckoutService);
    return CheckoutService;
}());
export { CheckoutService };
//# sourceMappingURL=checkout.service.js.map