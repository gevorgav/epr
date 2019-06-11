import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var PaymentFormComponent = /** @class */ (function () {
    function PaymentFormComponent() {
        this.authData = { clientKey: "YOUR PUBLIC CLIENT KEY", apiLoginID: "YOUR API LOGIN ID" };
    }
    PaymentFormComponent.prototype.sendPaymentDataToAnet = function () {
    };
    PaymentFormComponent = tslib_1.__decorate([
        Component({
            selector: 'payment-form',
            templateUrl: './payment-form.component.html',
            styleUrls: ['./payment-form.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], PaymentFormComponent);
    return PaymentFormComponent;
}());
export { PaymentFormComponent };
//# sourceMappingURL=payment-form.component.js.map