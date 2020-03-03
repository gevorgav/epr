import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { UploadService } from '../../../../shared/services/upload.service';
import { AdditionModel } from '../../../../shared/model/addition.model';
import { handleError } from '../../../../shared/util/error-handler';
import { AdditionCategoryService } from '../../../../shared/services/addition-category.service';
var AdditionalPopupComponent = /** @class */ (function () {
    function AdditionalPopupComponent(dialogRef, data, uploadService, categoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.formBuilder = new FormBuilder();
        this.compareFn = this.compare;
        this.additionModel = this.data.item;
    }
    AdditionalPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
        this.getCategories();
    };
    Object.defineProperty(AdditionalPopupComponent.prototype, "categoryId", {
        get: function () {
            return this.data.category ? this.data.category.id : '';
        },
        enumerable: true,
        configurable: true
    });
    AdditionalPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                item: new AdditionModel(this.additionModel.id, this.form.get('title').value, this.form.get('imageUrl').value),
                newCategoryId: this.form.get('category').value,
                oldCategoryId: this.categoryId
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    AdditionalPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    AdditionalPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    AdditionalPopupComponent.prototype.deleteImage = function () {
        this.form.get('imageUrl').setValue('');
    };
    AdditionalPopupComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    AdditionalPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                _this.form.get('imageUrl').setValue(res.fileName);
            }, function (error) {
                if (error.fileMaxSize) {
                    _this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    };
    AdditionalPopupComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getAdditionCategories()
            .subscribe(function (res) {
            _this.categories = res;
        }, function (error) { return handleError(error); });
    };
    AdditionalPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.additionModel.name, [
                Validators.required
            ]),
            imageUrl: this.formBuilder.control(this.additionModel.imageUrl || '', []),
            category: this.formBuilder.control(this.categoryId, [
                Validators.required
            ]),
        });
    };
    AdditionalPopupComponent.prototype.compare = function (f1, f2) {
        return f1 === f2;
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], AdditionalPopupComponent.prototype, "inputRef", void 0);
    AdditionalPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-additional-popup',
            templateUrl: './additional-popup.component.html',
            styleUrls: ['./additional-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, UploadService,
            AdditionCategoryService])
    ], AdditionalPopupComponent);
    return AdditionalPopupComponent;
}());
export { AdditionalPopupComponent };
//# sourceMappingURL=additional-popup.component.js.map