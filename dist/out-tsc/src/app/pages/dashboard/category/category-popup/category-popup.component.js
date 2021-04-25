import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { CategoryModel } from '../../../../shared/model/category.model';
import { FormBuilder, Validators } from '@angular/forms';
import { UploadService } from "../../../../shared/services/upload.service";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
let CategoryPopupComponent = class CategoryPopupComponent {
    constructor(dialogRef, data, uploadService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.formBuilder = new FormBuilder();
        this.category = this.data.category;
    }
    ngOnInit() {
        this.initForm();
    }
    submit() {
        if (this.form.valid) {
            this.dialogRef.close({
                category: new CategoryModel(this.category.id, this.form.get('title').value, this.form.get('description').value, this.form.get('imageUrl').value, this.form.get('metaDescription').value, null, this.form.get('pageTitle').value)
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
    initForm() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.category.title, [
                Validators.required
            ]),
            description: this.formBuilder.control(this.category.description, []),
            imageUrl: this.formBuilder.control(this.category.imageUrl || '', []),
            metaDescription: this.formBuilder.control(this.category.metaDescription, []),
            pageTitle: this.formBuilder.control(this.category.pageTitle, [])
        });
    }
};
__decorate([
    ViewChild('input', { static: false }),
    __metadata("design:type", ElementRef)
], CategoryPopupComponent.prototype, "inputRef", void 0);
CategoryPopupComponent = __decorate([
    Component({
        selector: 'app-category-popup',
        templateUrl: './category-popup.component.html',
        styleUrls: ['./category-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __metadata("design:paramtypes", [MatDialogRef, Object, UploadService])
], CategoryPopupComponent);
export { CategoryPopupComponent };
//# sourceMappingURL=category-popup.component.js.map