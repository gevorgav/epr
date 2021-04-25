import { __decorate, __metadata, __param } from "tslib";
import { Component, ElementRef, Inject, ViewChild, PLATFORM_ID } from '@angular/core';
import { ProductModel } from "../../../../shared/model/product.model";
import { FormBuilder, Validators } from '@angular/forms';
import { ParseService } from "../../../../shared/services/parse.service";
import { CategoryService } from '../../../../shared/services/category.service';
import { handleError } from '../../../../shared/util/error-handler';
import { UploadService } from "../../../../shared/services/upload.service";
import { AdditionCategoryService } from '../../../../shared/services/addition-category.service';
import { isPlatformBrowser } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
let ProductPopupComponent = class ProductPopupComponent {
    constructor(dialogRef, data, platformId, parseService, uploadService, categoryService, additionalCategoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.platformId = platformId;
        this.parseService = parseService;
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.additionalCategoryService = additionalCategoryService;
        this.formBuilder = new FormBuilder();
        this.setupPolicyKeys = [];
        this.setupPolicyValues = [];
        this.fileMaxSizeErrorMessage = '';
        this.isBrowser = false;
        this.compareFn = this.compare;
        this.isBrowser = isPlatformBrowser(platformId);
        if (this.isBrowser) {
            const ClassicEditor = require('@ckeditor/ckeditor5-build-classic');
            this.Editor = ClassicEditor;
        }
        this.product = this.data.product;
        this.products = this.data.products;
    }
    get categoryId() {
        return this.data.category ? this.data.category.id : '';
    }
    ngOnInit() {
        this.initSafetyRules();
        this.initForm();
        this.getCategories();
        this.getAdditionalCategories();
    }
    onSubmit() {
        if (this.form.valid) {
            this.dialogRef.close({
                product: new ProductModel(this.product.id, this.form.get('title').value, this.form.get('price').value, this.form.get('images').value, this.form.get('isNew').value, this.form.get('isHotDeal').value, this.form.get('itemSize').value, null, this.form.get('description').value, this.form.get('rentalTerms').value, this.form.get('spaceRequired').value, this.getSetupPolicy(), this.form.get('instructions').value, this.form.get('video').value, this.form.get('safetyRules').value, this.form.get('minTime').value, this.form.get('minPrice').value, this.form.get('nightPrice').value, this.form.get('count').value, this.form.get('additionalCategories').value, this.form.get('metaDescription').value, this.form.get('pageTitle').value, this.selectedRelationProducts),
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
    close() {
        this.dialogRef.close(null);
    }
    triggerClick() {
        this.inputRef.nativeElement.click();
    }
    filterImages(src) {
        this.form.get('images').setValue(this.form.get('images').value.filter(item => item !== src));
    }
    onFileUpload(event) {
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(res => {
                this.form.get('images').value.push(res.fileName);
            }, error => {
                if (error.fileMaxSize) {
                    this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    }
    initForm() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.product.title, [
                Validators.required
            ]),
            price: this.formBuilder.control(this.product.price, [
                Validators.required,
                Validators.min(1)
            ]),
            description: this.formBuilder.control(this.product.description, []),
            category: this.formBuilder.control(this.categoryId, [
                Validators.required
            ]),
            itemSize: this.formBuilder.control(this.product.itemSize, []),
            isHotDeal: this.formBuilder.control(this.product.isHotDeal, []),
            isNew: this.formBuilder.control(this.product.isNew, []),
            rentalTerms: this.formBuilder.control(this.product.rentalTerms, []),
            spaceRequired: this.formBuilder.control(this.product.spaceRequired, []),
            setupPolicyKeys: this.formBuilder.array(this.initSetupPolicyKeys()),
            setupPolicyValues: this.formBuilder.array(this.initSetupPolicyValues()),
            instructions: this.formBuilder.control(this.product.instructions, []),
            safetyRules: this.formBuilder.control(this.product.safetyRules, []),
            images: this.formBuilder.control(this.product.images, []),
            video: this.formBuilder.control(this.product.video, []),
            metaDescription: this.formBuilder.control(this.product.metaDescription, []),
            minTime: this.formBuilder.control(this.product.minTime, [
                Validators.required,
                Validators.min(1)
            ]),
            minPrice: this.formBuilder.control(this.product.minPrice, [
                Validators.required,
                Validators.min(1)
            ]),
            nightPrice: this.formBuilder.control(this.product.nightPrice, [
                Validators.required,
                Validators.min(1)
            ]),
            count: this.formBuilder.control(this.product.count, [
                Validators.required,
                Validators.min(1)
            ]),
            additionalCategories: this.formBuilder.control(this.product.additionalCategories, []),
            pageTitle: this.formBuilder.control(this.product.pageTitle, []),
            relation: this.formBuilder.control(this.product.relation, [])
        }, { validators: setupPolicyUniqueKeyValidator });
    }
    initSafetyRules() {
        this.product.setupPolicy.forEach((value, key) => {
            this.setupPolicyKeys.push(key);
            this.setupPolicyValues.push(value);
        });
    }
    selectRelatedItems(item) {
        this.selectedRelationProducts = item;
    }
    initSetupPolicyKeys() {
        const res = [];
        this.setupPolicyKeys.forEach(item => res.push(this.createGroup(item)));
        return res;
    }
    initSetupPolicyValues() {
        const res = [];
        this.setupPolicyValues.forEach(item => res.push(this.createGroup(item)));
        return res;
    }
    createGroup(name) {
        return this.formBuilder.group({
            name: this.formBuilder.control(name || '', [
                Validators.required
            ]),
        });
    }
    addSetupPolicy() {
        // debugger;
        this.form.get('setupPolicyKeys').push(this.createGroup());
        this.form.get('setupPolicyValues').push(this.createGroup());
    }
    removeSetupPolicy(index) {
        this.form.get('setupPolicyKeys').removeAt(index);
        this.form.get('setupPolicyValues').removeAt(index);
    }
    getSetupPolicy() {
        let res = new Map();
        for (let i = 0; i < this.form.get('setupPolicyKeys').controls.length; ++i) {
            res.set(this.form.get('setupPolicyKeys').controls[i].get('name').value, this.form.get('setupPolicyValues').controls[i].get('name').value);
        }
        return res;
    }
    getSetupPolicyValuesControls() {
        return this.form.get('setupPolicyValues').controls;
    }
    getSetupPolicyKeysControls() {
        return this.form.get('setupPolicyKeys').controls;
    }
    getCategories() {
        this.categoryService.getCategories()
            .then(res => {
            this.categories = res;
        })
            .catch(error => handleError(error));
    }
    compare(f1, f2) {
        return f1 === f2;
    }
    getAdditionalCategories() {
        this.additionalCategoryService.getAdditionCategories().then(res => {
            this.additionalCategories = res;
        });
    }
};
__decorate([
    ViewChild('input', { static: false }),
    __metadata("design:type", ElementRef)
], ProductPopupComponent.prototype, "inputRef", void 0);
ProductPopupComponent = __decorate([
    Component({
        selector: 'app-product-popup',
        templateUrl: './product-popup.component.html',
        styleUrls: ['./product-popup.component.css']
    }),
    __param(1, Inject(MAT_DIALOG_DATA)),
    __param(2, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [MatDialogRef, Object, Object,
        ParseService,
        UploadService,
        CategoryService,
        AdditionCategoryService])
], ProductPopupComponent);
export { ProductPopupComponent };
const setupPolicyUniqueKeyValidator = (control) => {
    for (let i = 0; i < control.get('setupPolicyKeys').controls.length; ++i) {
        for (let j = 0; j < control.get('setupPolicyKeys').controls.length; ++j) {
            if (i == j)
                continue;
            if (control.get('setupPolicyKeys').controls[i].get('name').value == control.get('setupPolicyKeys').controls[j].get('name').value) {
                return { 'setupPolicyUniqueKey': true };
            }
        }
    }
    return null;
};
//# sourceMappingURL=product-popup.component.js.map