var CheckoutService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
let CheckoutService = CheckoutService_1 = class CheckoutService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.URL = 'https://api.authorize.net/xml/v1/request.api';
    }
    getToken() {
        return this.httpClient.post(this.URL, CheckoutService_1.PAYMENT_OBJ).pipe(map(res => {
            if (res['messages']['resultCode'] === "Ok") {
                return res['token'];
            }
            else {
                return '';
            }
        }));
    }
};
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
CheckoutService = CheckoutService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], CheckoutService);
export { CheckoutService };
//# sourceMappingURL=checkout.service.js.map