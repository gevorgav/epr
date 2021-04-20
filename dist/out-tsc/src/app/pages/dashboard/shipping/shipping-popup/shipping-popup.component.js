import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
let ShippingPopupComponent = class ShippingPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.shippingModel = this.data.shippingInfoModel;
    }
    ngOnInit() {
    }
    close() {
        this.dialogRef.close(null);
    }
    getProduct(productId) {
        let productCount;
        this.shippingModel.products.forEach(value => {
            if (productId === value.id) {
                productCount = this.shippingModel.productCount.find(value1 => value.id === value1.productId);
                productCount.name = value.name;
            }
        });
        return productCount;
    }
    getProductWithCount(shippingModel, product) {
        let text = '';
        for (let prodCount of shippingModel.productCount) {
            if (prodCount.productId === product.id) {
                return product.name;
            }
        }
        return text;
    }
    getProductHowMany(shippingModel, product) {
        let text = '';
        for (let prodCount of shippingModel.productCount) {
            if (prodCount.productId === product.id) {
                return prodCount.count;
            }
        }
        return text;
    }
};
ShippingPopupComponent = __decorate([
    Component({
        selector: 'app-shipping-popup',
        templateUrl: './shipping-popup.component.html',
        styleUrls: ['./shipping-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object])
], ShippingPopupComponent);
export { ShippingPopupComponent };
//# sourceMappingURL=shipping-popup.component.js.map