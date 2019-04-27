import * as tslib_1 from "tslib";
import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { ProductModel } from "../../../../shared/model/product.model";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ParseService } from "../../../../shared/services/parse.service";
var ProductPopupComponent = /** @class */ (function () {
    function ProductPopupComponent(dialogRef, data, parseService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.parseService = parseService;
        this.imagePreviews = [];
        this.videoPreview = [];
        this.product = this.data.product;
    }
    Object.defineProperty(ProductPopupComponent.prototype, "editMode", {
        get: function () {
            return this.product && this.product.id;
        },
        enumerable: true,
        configurable: true
    });
    ProductPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ProductPopupComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                product: new ProductModel(this.product.id, this.form.get('title').value, this.form.get('price').value, this.form.get('images').value, this.form.get('isNew').value, this.form.get('isHotDeal').value, this.form.get('itemSize').value, null, this.form.get('description').value, this.form.get('rentalTerms').value, this.form.get('spaceRequired').value, this.form.get('setupPolicy').value, this.form.get('instructions').value, this.product.video, this.form.get('safetyRules').value)
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
        console.log(src);
        console.log(this.form.get('images').value);
        console.log(this.form.get('images').value.filter(function (item) { return item !== src; }));
        this.form.get('images').setValue(this.form.get('images').value.filter(function (item) { return item !== src; }));
        console.log('a');
        console.log(this.form.get('images').value);
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
                // const reader = new FileReader()
                // reader.onload = () => {
                //   this.imagePreviews.push({preview: reader.result, path: file.lastModified + file.name, file: file});
                // };
                // reader.readAsDataURL(file)
                var parseFile = new this.parseService.parse.File(file.name, file);
                var promise = parseFile.save().then(function (result) {
                    console.log(result.url());
                    _this.form.get('images').value.push(result.url());
                });
            }
        }
    };
    ProductPopupComponent.prototype.initForm = function () {
        this.form = new FormGroup({
            title: new FormControl(this.product.title, [
                Validators.required
            ]),
            price: new FormControl(this.product.price, [
                Validators.required
            ]),
            description: new FormControl(this.product.description, []),
            itemSize: new FormControl(this.product.itemSize, []),
            isHotDeal: new FormControl(this.product.isHotDeal, []),
            isNew: new FormControl(this.product.isNew, []),
            rentalTerms: new FormControl(this.product.rentalTerms, []),
            spaceRequired: new FormControl(this.product.spaceRequired, []),
            setupPolicy: new FormControl(this.product.setupPolicy, []),
            instructions: new FormControl(this.product.instructions, []),
            safetyRules: new FormControl(this.product.safetyRules, []),
            images: new FormControl(this.product.images, []),
            video: new FormControl(this.product.video, []),
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
        tslib_1.__metadata("design:paramtypes", [MatDialogRef, Object, ParseService])
    ], ProductPopupComponent);
    return ProductPopupComponent;
}());
export { ProductPopupComponent };
//# sourceMappingURL=product-popup.component.js.map