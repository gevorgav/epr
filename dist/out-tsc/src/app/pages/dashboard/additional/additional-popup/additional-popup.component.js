import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from '../../../../shared/services/upload.service';
import { AdditionModel } from '../../../../shared/model/addition.model';
import { handleError } from '../../../../shared/util/error-handler';
import { AdditionCategoryService } from '../../../../shared/services/addition-category.service';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
let AdditionalPopupComponent = class AdditionalPopupComponent {
    constructor(dialogRef, data, uploadService, categoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.formBuilder = new FormBuilder();
        this.compareFn = this.compare;
        this.additionModel = this.data.item;
    }
    ngOnInit() {
        this.initForm();
        this.getCategories();
    }
    get categoryId() {
        return this.data.category ? this.data.category.id : '';
    }
    submit() {
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
    deleteImage() {
        this.form.get('imageUrl').setValue('');
    }
    triggerClick() {
        this.inputRef.nativeElement.click();
    }
    onFileUpload(event) {
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(res => {
                this.form.get('imageUrl').setValue(res.fileName);
            }, error => {
                if (error.fileMaxSize) {
                    this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    }
    getCategories() {
        this.categoryService.getAdditionCategories()
            .then(res => {
            this.categories = res;
        }, error => handleError(error));
    }
    initForm() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.additionModel.name, [
                Validators.required
            ]),
            imageUrl: this.formBuilder.control(this.additionModel.imageUrl || '', []),
            category: this.formBuilder.control(this.categoryId, [
                Validators.required
            ]),
        });
    }
    compare(f1, f2) {
        return f1 === f2;
    }
};
__decorate([
    ViewChild('input', { static: false }),
    __metadata("design:type", ElementRef)
], AdditionalPopupComponent.prototype, "inputRef", void 0);
AdditionalPopupComponent = __decorate([
    Component({
        selector: 'app-additional-popup',
        templateUrl: './additional-popup.component.html',
        styleUrls: ['./additional-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, UploadService,
        AdditionCategoryService])
], AdditionalPopupComponent);
export { AdditionalPopupComponent };
//# sourceMappingURL=additional-popup.component.js.map