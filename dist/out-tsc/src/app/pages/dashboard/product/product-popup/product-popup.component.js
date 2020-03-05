import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ProductModel } from "../../../../shared/model/product.model";
import { FormBuilder, Validators } from '@angular/forms';
import { ParseService } from "../../../../shared/services/parse.service";
import { CategoryService } from '../../../../shared/services/category.service';
import { handleError } from '../../../../shared/util/error-handler';
import { UploadService } from "../../../../shared/services/upload.service";
import { AdditionCategoryService } from '../../../../shared/services/addition-category.service';
var ProductPopupComponent = /** @class */ (function () {
    function ProductPopupComponent(dialogRef, data, parseService, uploadService, categoryService, additionalCategoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.parseService = parseService;
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.additionalCategoryService = additionalCategoryService;
        this.formBuilder = new FormBuilder();
        this.setupPolicyKeys = [];
        this.setupPolicyValues = [];
        this.fileMaxSizeErrorMessage = '';
        this.compareFn = this.compare;
        this.product = this.data.product;
        this.products = this.data.products;
    }
    Object.defineProperty(ProductPopupComponent.prototype, "categoryId", {
        get: function () {
            return this.data.category ? this.data.category.id : '';
        },
        enumerable: true,
        configurable: true
    });
    ProductPopupComponent.prototype.ngOnInit = function () {
        this.initSafetyRules();
        this.initForm();
        this.getCategories();
        this.getAdditionalCategories();
    };
    ProductPopupComponent.prototype.onSubmit = function () {
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
    };
    ProductPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ProductPopupComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    ProductPopupComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    ProductPopupComponent.prototype.filterImages = function (src) {
        this.form.get('images').setValue(this.form.get('images').value.filter(function (item) { return item !== src; }));
    };
    ProductPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                _this.form.get('images').value.push(res.fileName);
            }, function (error) {
                if (error.fileMaxSize) {
                    _this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    };
    ProductPopupComponent.prototype.initForm = function () {
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
    };
    ProductPopupComponent.prototype.initSafetyRules = function () {
        var _this = this;
        this.product.setupPolicy.forEach(function (value, key) {
            _this.setupPolicyKeys.push(key);
            _this.setupPolicyValues.push(value);
        });
    };
    ProductPopupComponent.prototype.selectRelatedItems = function (item) {
        this.selectedRelationProducts = item;
    };
    ProductPopupComponent.prototype.initSetupPolicyKeys = function () {
        var _this = this;
        var res = [];
        this.setupPolicyKeys.forEach(function (item) { return res.push(_this.createGroup(item)); });
        return res;
    };
    ProductPopupComponent.prototype.initSetupPolicyValues = function () {
        var _this = this;
        var res = [];
        this.setupPolicyValues.forEach(function (item) { return res.push(_this.createGroup(item)); });
        return res;
    };
    ProductPopupComponent.prototype.createGroup = function (name) {
        return this.formBuilder.group({
            name: this.formBuilder.control(name || '', [
                Validators.required
            ]),
        });
    };
    ProductPopupComponent.prototype.addSetupPolicy = function () {
        // debugger;
        this.form.get('setupPolicyKeys').push(this.createGroup());
        this.form.get('setupPolicyValues').push(this.createGroup());
    };
    ProductPopupComponent.prototype.removeSetupPolicy = function (index) {
        this.form.get('setupPolicyKeys').removeAt(index);
        this.form.get('setupPolicyValues').removeAt(index);
    };
    ProductPopupComponent.prototype.getSetupPolicy = function () {
        var res = new Map();
        for (var i = 0; i < this.form.get('setupPolicyKeys').controls.length; ++i) {
            res.set(this.form.get('setupPolicyKeys').controls[i].get('name').value, this.form.get('setupPolicyValues').controls[i].get('name').value);
        }
        return res;
    };
    ProductPopupComponent.prototype.getSetupPolicyValuesControls = function () {
        return this.form.get('setupPolicyValues').controls;
    };
    ProductPopupComponent.prototype.getSetupPolicyKeysControls = function () {
        return this.form.get('setupPolicyKeys').controls;
    };
    ProductPopupComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
        }, function (error) { return handleError(error); });
    };
    ProductPopupComponent.prototype.compare = function (f1, f2) {
        return f1 === f2;
    };
    ProductPopupComponent.prototype.getAdditionalCategories = function () {
        var _this = this;
        this.additionalCategoryService.getAdditionCategories().subscribe(function (res) {
            _this.additionalCategories = res;
        });
    };
    tslib_1.__decorate([
        ViewChild('input'),
        tslib_1.__metadata("design:type", ElementRef)
    ], ProductPopupComponent.prototype, "inputRef", void 0);
    ProductPopupComponent = tslib_1.__decorate([
        Component({
            selector: 'app-product-popup',
            templateUrl: './product-popup.component.html',
            styleUrls: ['./product-popup.component.css']
        }),
        tslib_1.__param(1, Inject(MAT_DIALOG_DATA)),
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, ParseService,
            UploadService,
            CategoryService,
            AdditionCategoryService])
    ], ProductPopupComponent);
    return ProductPopupComponent;
}());
export { ProductPopupComponent };
var setupPolicyUniqueKeyValidator = function (control) {
    for (var i = 0; i < control.get('setupPolicyKeys').controls.length; ++i) {
        for (var j = 0; j < control.get('setupPolicyKeys').controls.length; ++j) {
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