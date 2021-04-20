import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AdditionCategoryModel } from '../../../../shared/model/addition-category.model';
let AdditionalCategoryPopupComponent = class AdditionalCategoryPopupComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = new FormBuilder();
        this.category = this.data.category;
    }
    ngOnInit() {
        this.initForm();
    }
    submit() {
        if (this.form.valid) {
            this.dialogRef.close({
                category: new AdditionCategoryModel(this.category.id, this.form.get('title').value, this.form.get('multiSelect').value)
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
    initForm() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.category.name, [
                Validators.required
            ]),
            multiSelect: this.formBuilder.control(this.category.multiSelect, []),
        });
    }
};
__decorate([
    ViewChild('input', { static: false }),
    __metadata("design:type", ElementRef)
], AdditionalCategoryPopupComponent.prototype, "inputRef", void 0);
AdditionalCategoryPopupComponent = __decorate([
    Component({
        selector: 'app-additional-category-popup',
        templateUrl: './additional-category-popup.component.html',
        styleUrls: ['./additional-category-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object])
], AdditionalCategoryPopupComponent);
export { AdditionalCategoryPopupComponent };
//# sourceMappingURL=additional-category-popup.component.js.map