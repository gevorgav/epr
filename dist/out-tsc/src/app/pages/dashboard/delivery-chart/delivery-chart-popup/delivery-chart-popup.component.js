import { __decorate, __metadata, __param } from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { DeliveryChartModel, ZipCode } from "../../../../shared/model/delivery-chart.model";
import { FormBuilder, Validators } from "@angular/forms";
let DeliveryChartPopupComponent = class DeliveryChartPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = new FormBuilder();
        this.deliveryChart = this.data.deliveryChart;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.form = this.formBuilder.group({
            city: this.formBuilder.control(this.deliveryChart.city, [
                Validators.required
            ]),
            zipCodes: this.formBuilder.array([...this.initZipCodes()]),
            price: this.formBuilder.control(this.deliveryChart.price, [
                Validators.required
            ]),
            locationId: this.formBuilder.control(this.deliveryChart.locationId, []),
        });
    }
    initZipCodes() {
        const res = [];
        if (this.deliveryChart.zipCodes) {
            for (let code of this.deliveryChart.zipCodes) {
                res.push(this.createZipCode(code.zipCode, code.id));
            }
        }
        return res;
    }
    createZipCode(code, id) {
        return this.formBuilder.group({
            code: this.formBuilder.control(code || '', [
                Validators.required
            ]),
            id: this.formBuilder.control(id || '', []),
        });
    }
    removeZipCode(index) {
        this.form.get('zipCodes').removeAt(index);
    }
    addZipCode() {
        let items = this.form.get('zipCodes');
        items.push(this.createZipCode());
    }
    submit() {
        if (this.form.valid) {
            this.dialogRef.close({
                deliveryChart: new DeliveryChartModel(this.deliveryChart.id, this.form.get('city').value, this.form.get('price').value, null, this.getZipCodes(), null)
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    }
    markFormGroupTouched(formGroup) {
        Object.values(formGroup.controls).forEach(control => {
            control.markAsTouched();
            if (control.controls) {
                this.markFormGroupTouched(control);
            }
        });
    }
    cancel() {
        this.dialogRef.close(null);
    }
    getZipCodes() {
        let res = [];
        for (let control of this.form.get('zipCodes').controls) {
            res.push(new ZipCode(control.get('id').value, control.get('code').value));
        }
        return res;
    }
    getZipCodesControls() {
        return this.form.get('zipCodes').controls;
    }
};
DeliveryChartPopupComponent = __decorate([
    Component({
        selector: 'app-delivery-chart-popup',
        templateUrl: './delivery-chart-popup.component.html',
        styleUrls: ['./delivery-chart-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object])
], DeliveryChartPopupComponent);
export { DeliveryChartPopupComponent };
//# sourceMappingURL=delivery-chart-popup.component.js.map