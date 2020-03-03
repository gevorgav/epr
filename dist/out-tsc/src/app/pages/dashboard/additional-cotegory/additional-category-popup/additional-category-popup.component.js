import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AdditionCategoryModel } from '../../../../shared/model/addition-category.model';
var AdditionalCategoryPopupComponent = /** @class */ (function () {
    function AdditionalCategoryPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = new FormBuilder();
        this.category = this.data.category;
    }
    AdditionalCategoryPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AdditionalCategoryPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                category: new AdditionCategoryModel(this.category.id, this.form.get('title').value, this.form.get('multiSelect').value)
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    AdditionalCategoryPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    AdditionalCategoryPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    AdditionalCategoryPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.category.name, [
                Validators.required
            ]),
            multiSelect: this.formBuilder.control(this.category.multiSelect, []),
        });
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AdditionalCategoryPopupComponent.prototype, "inputRef", void 0);
    AdditionalCategoryPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-additional-category-popup',
            templateUrl: './additional-category-popup.component.html',
            styleUrls: ['./additional-category-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object])
    ], AdditionalCategoryPopupComponent);
    return AdditionalCategoryPopupComponent;
}());
export { AdditionalCategoryPopupComponent };
//# sourceMappingURL=additional-category-popup.component.js.map