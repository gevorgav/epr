import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
var ShippingPopupComponent = /** @class */ (function () {
    function ShippingPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shippingModel = this.data.shippingInfoModel;
    }
    ShippingPopupComponent.prototype.ngOnInit = function () {
    };
    ShippingPopupComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    ShippingPopupComponent.prototype.getProduct = function (productId) {
        var _this = this;
        var productCount;
        this.shippingModel.products.forEach(function (value) {
            if (productId === value.id) {
                productCount = _this.shippingModel.productCount.find(function (value1) { return value.id === value1.productId; });
                productCount.name = value.name;
            }
        });
        return productCount;
    };
    ShippingPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shipping-popup',
            templateUrl: './shipping-popup.component.html',
            styleUrls: ['./shipping-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], ShippingPopupComponent);
    return ShippingPopupComponent;
}());
export { ShippingPopupComponent };
//# sourceMappingURL=shipping-popup.component.js.map