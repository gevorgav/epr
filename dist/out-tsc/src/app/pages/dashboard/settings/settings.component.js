import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SettingsService } from '../../../shared/services/settings.service';
import { SettingsModel } from '../../../shared/model/settings.model';
import { UploadService } from '../../../shared/services/upload.service';
import { FormBuilder, Validators } from '@angular/forms';
var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(settingsService, uploadService) {
        this.settingsService = settingsService;
        this.uploadService = uploadService;
        this.formBuilder = new FormBuilder();
        this.saveSuccess = false;
        this.fileSizes = 'Optimal image sizes:   Width: 1720 pixels, Height: 1105 pixels';
        this.isReady = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.getSettings();
    };
    SettingsComponent.prototype.submit = function () {
        var _this = this;
        if (this.form.valid) {
            var settings = new SettingsModel(null, this.form.get('title').value, this.form.get('homePageMetaDescription').value, this.form.get('imageUrl1').value, this.form.get('imageUrl2').value, this.form.get('imageUrl3').value);
            this.settingsService.updateSettings(settings).subscribe(function (res) {
                if (res) {
                    _this.saveSuccess = true;
                    setTimeout(function () { return _this.saveSuccess = false; }, 3000);
                }
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    SettingsComponent.prototype.onFileUpload = function (event, imageNumber) {
        this.fileMaxSizeErrorMessage = '';
        this.uploadFile(event, this.form.get('imageUrl' + imageNumber));
    };
    SettingsComponent.prototype.uploadFile = function (event, control) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                control.setValue(res.fileName);
            }, function (error) {
                if (error.fileMaxSize) {
                    _this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    };
    SettingsComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    SettingsComponent.prototype.deleteImage = function (imageIndex) {
        this.form.get('imageUrl' + imageIndex).setValue('');
    };
    SettingsComponent.prototype.triggerClick = function (imageIndex) {
        switch (imageIndex) {
            case 1:
                this.inputRef1.nativeElement.click();
                break;
            case 2:
                this.inputRef2.nativeElement.click();
                break;
            case 3:
                this.inputRef3.nativeElement.click();
                break;
        }
    };
    SettingsComponent.prototype.getSettings = function () {
        var _this = this;
        this.settingsService.getSettings().subscribe(function (res) {
            _this.settings = res;
            _this.initForm();
            _this.isReady = true;
        });
    };
    SettingsComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.settings.title, [
                Validators.required
            ]),
            homePageMetaDescription: this.formBuilder.control(this.settings.homePageMetaDescription, []),
            imageUrl1: this.formBuilder.control(this.settings.imageUrl1 || '', []),
            imageUrl2: this.formBuilder.control(this.settings.imageUrl2 || '', []),
            imageUrl3: this.formBuilder.control(this.settings.imageUrl3 || '', []),
        });
    };
    tslib_1.__decorate([
        ViewChild('input1'),
        tslib_1.__metadata("design:type", ElementRef)
    ], SettingsComponent.prototype, "inputRef1", void 0);
    tslib_1.__decorate([
        ViewChild('input2'),
        tslib_1.__metadata("design:type", ElementRef)
    ], SettingsComponent.prototype, "inputRef2", void 0);
    tslib_1.__decorate([
        ViewChild('input3'),
        tslib_1.__metadata("design:type", ElementRef)
    ], SettingsComponent.prototype, "inputRef3", void 0);
    SettingsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-settings',
            templateUrl: './settings.component.html',
            styleUrls: ['./settings.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [SettingsService,
            UploadService])
    ], SettingsComponent);
    return SettingsComponent;
}());
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map