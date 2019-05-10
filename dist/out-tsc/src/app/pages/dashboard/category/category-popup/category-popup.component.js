import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CategoryModel } from '../../../../shared/model/category.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from "../../../../shared/services/upload.service";
var CategoryPopupComponent = /** @class */ (function () {
    function CategoryPopupComponent(dialogRef, data, uploadService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.formBuilder = new FormBuilder();
        this.category = this.data.category;
    }
    CategoryPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CategoryPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                category: new CategoryModel(this.category.id, this.form.get('title').value, this.form.get('description').value, this.form.get('imageUrl').value)
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    CategoryPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    CategoryPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    CategoryPopupComponent.prototype.deleteImage = function () {
        this.form.get('imageUrl').setValue('');
    };
    CategoryPopupComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    CategoryPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                _this.form.get('imageUrl').setValue(res.fileName);
            }, function (error) { return alert(error.message); });
        }
    };
    CategoryPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.category.title, [
                Validators.required
            ]),
            description: this.formBuilder.control(this.category.description, []),
            imageUrl: this.formBuilder.control(this.category.imageUrl || '', []),
        });
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], CategoryPopupComponent.prototype, "inputRef", void 0);
    CategoryPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-category-popup',
            templateUrl: './category-popup.component.html',
            styleUrls: ['./category-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, UploadService])
    ], CategoryPopupComponent);
    return CategoryPopupComponent;
}());
export { CategoryPopupComponent };
//# sourceMappingURL=category-popup.component.js.map