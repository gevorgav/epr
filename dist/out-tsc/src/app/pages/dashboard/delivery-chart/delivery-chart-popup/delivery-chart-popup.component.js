import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DeliveryChartModel, ZipCode } from "../../../../shared/model/delivery-chart.model";
import { FormBuilder, Validators } from "@angular/forms";
var DeliveryChartPopupComponent = /** @class */ (function () {
    function DeliveryChartPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = new FormBuilder();
        this.deliveryChart = this.data.deliveryChart;
    }
    DeliveryChartPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    DeliveryChartPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            city: this.formBuilder.control(this.deliveryChart.city, [
                Validators.required
            ]),
            zipCodes: this.formBuilder.array(this.initZipCodes().slice()),
            price: this.formBuilder.control(this.deliveryChart.price, [
                Validators.required
            ]),
            locationId: this.formBuilder.control(this.deliveryChart.locationId, []),
        });
        console.log(this.form);
    };
    DeliveryChartPopupComponent.prototype.initZipCodes = function () {
        var res = [];
        if (this.deliveryChart.zipCodes) {
            for (var _i = 0, _a = this.deliveryChart.zipCodes; _i < _a.length; _i++) {
                var code = _a[_i];
                res.push(this.createZipCode(code.zipCode));
            }
        }
        return res;
    };
    DeliveryChartPopupComponent.prototype.createZipCode = function (code, id) {
        return this.formBuilder.group({
            code: this.formBuilder.control(code || '', [
                Validators.required
            ]),
            id: this.formBuilder.control(id || '', []),
        });
    };
    DeliveryChartPopupComponent.prototype.removeZipCode = function (index) {
        this.form.get('zipCodes').value.splice(index, 1);
    };
    DeliveryChartPopupComponent.prototype.addZipCode = function () {
        var items = this.form.get('zipCodes');
        items.push(this.createZipCode());
    };
    DeliveryChartPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                deliveryChart: new DeliveryChartModel(this.deliveryChart.id, this.form.get('city').value, this.form.get('price').value, null, this.getZipCodes(), null)
            });
        }
    };
    DeliveryChartPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    DeliveryChartPopupComponent.prototype.getZipCodes = function () {
        var res = [];
        for (var _i = 0, _a = this.form.get('zipCodes').controls; _i < _a.length; _i++) {
            var control = _a[_i];
            res.push(new ZipCode(control.get('id').value, control.get('code').value));
        }
        return res;
    };
    DeliveryChartPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-delivery-chart-popup',
            templateUrl: './delivery-chart-popup.component.html',
            styleUrls: ['./delivery-chart-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], DeliveryChartPopupComponent);
    return DeliveryChartPopupComponent;
}());
export { DeliveryChartPopupComponent };
//# sourceMappingURL=delivery-chart-popup.component.js.map