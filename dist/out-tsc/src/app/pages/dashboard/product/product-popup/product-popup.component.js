import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ProductModel } from "../../../../shared/model/product.model";
import { FormBuilder, Validators } from '@angular/forms';
import { ParseService } from "../../../../shared/services/parse.service";
import { CategoryService } from '../../../../shared/services/category.service';
import { handleError } from '../../../../shared/util/error-handler';
var ProductPopupComponent = /** @class */ (function () {
    function ProductPopupComponent(dialogRef, data, parseService, categoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.parseService = parseService;
        this.categoryService = categoryService;
        this.formBuilder = new FormBuilder();
        this.imagePreviews = [];
        this.videoPreview = [];
        this.setupPolicyKeys = [];
        this.setupPolicyValues = [];
        this.product = this.data.product;
    }
    ProductPopupComponent.prototype.ngOnInit = function () {
        this.initSafetyRules();
        this.initForm();
        this.getCategories();
    };
    ProductPopupComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                product: new ProductModel(this.product.id, this.form.get('title').value, this.form.get('price').value, this.form.get('images').value, this.form.get('isNew').value, this.form.get('isHotDeal').value, this.form.get('itemSize').value, null, this.form.get('description').value, this.form.get('rentalTerms').value, this.form.get('spaceRequired').value, this.getSetupPolicy(), this.form.get('instructions').value, this.product.video, this.form.get('safetyRules').value)
            });
        }
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
    ProductPopupComponent.prototype.filterImagePreviews = function (del) {
        this.imagePreviews = this.imagePreviews.filter(function (item) { return item != del; });
    };
    ProductPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var files = event.target.files;
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var parseFile = new this.parseService.parse.File(file.name, file);
                parseFile.save().then(function (result) {
                    console.log(result.url());
                    _this.form.get('images').value.push(result.url());
                });
            }
        }
    };
    ProductPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.product.title, [
                Validators.required
            ]),
            price: this.formBuilder.control(this.product.price, [
                Validators.required
            ]),
            description: this.formBuilder.control(this.product.description, []),
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
        });
    };
    ProductPopupComponent.prototype.initSafetyRules = function () {
        var _this = this;
        this.product.setupPolicy.forEach(function (value, key) {
            _this.setupPolicyKeys.push(key);
            _this.setupPolicyValues.push(value);
        });
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
        this.form.get('setupPolicyKeys').push(this.createGroup());
        this.form.get('setupPolicyValues').push(this.createGroup());
    };
    ProductPopupComponent.prototype.removeSafetyRule = function (index) {
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
    ProductPopupComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
        }, function (error) { return handleError(error); });
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
            CategoryService])
    ], ProductPopupComponent);
    return ProductPopupComponent;
}());
export { ProductPopupComponent };
//# sourceMappingURL=product-popup.component.js.map