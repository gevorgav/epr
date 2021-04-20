import { __decorate, __metadata } from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SettingsService } from '../../../shared/services/settings.service';
import { SettingsModel } from '../../../shared/model/settings.model';
import { UploadService } from '../../../shared/services/upload.service';
import { FormBuilder, Validators } from '@angular/forms';
let SettingsComponent = class SettingsComponent {
    constructor(settingsService, uploadService) {
        this.settingsService = settingsService;
        this.uploadService = uploadService;
        this.formBuilder = new FormBuilder();
        this.saveSuccess = false;
        this.fileSizes = 'Optimal image sizes:   Width: 1720 pixels, Height: 1105 pixels';
        this.isReady = false;
    }
    ngOnInit() {
        this.getSettings();
    }
    submit() {
        if (this.form.valid) {
            let settings = new SettingsModel(null, this.form.get('title').value, this.form.get('homePageMetaDescription').value, this.form.get('imageUrl1').value, this.form.get('imageUrl2').value, this.form.get('imageUrl3').value, this.form.get('mobileImageUrl').value);
            this.settingsService.updateSettings(settings).then(res => {
                if (res) {
                    this.saveSuccess = true;
                    setTimeout(() => this.saveSuccess = false, 3000);
                }
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    }
    onFileUpload(event, imageNumber) {
        this.fileMaxSizeErrorMessage = '';
        this.uploadFile(event, this.form.get(imageNumber));
    }
    uploadFile(event, control) {
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(res => {
                control.setValue(res.fileName);
            }, error => {
                if (error.fileMaxSize) {
                    this.fileMaxSizeErrorMessage = error.message;
                }
            });
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
    deleteImage(imageIndex) {
        this.form.get('imageUrl' + imageIndex).setValue('');
    }
    triggerClick(imageIndex) {
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
            case 4:
                this.inputRef4.nativeElement.click();
                break;
        }
    }
    getSettings() {
        this.settingsService.getSettings().then(res => {
            this.settings = res;
            this.initForm();
            this.isReady = true;
        });
    }
    initForm() {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.settings.title, [
                Validators.required
            ]),
            homePageMetaDescription: this.formBuilder.control(this.settings.homePageMetaDescription, []),
            imageUrl1: this.formBuilder.control(this.settings.imageUrl1 || '', []),
            imageUrl2: this.formBuilder.control(this.settings.imageUrl2 || '', []),
            imageUrl3: this.formBuilder.control(this.settings.imageUrl3 || '', []),
            mobileImageUrl: this.formBuilder.control(this.settings.mobileImageUrl || '', [])
        });
    }
};
__decorate([
    ViewChild('input1', { static: false }),
    __metadata("design:type", ElementRef)
], SettingsComponent.prototype, "inputRef1", void 0);
__decorate([
    ViewChild('input2', { static: false }),
    __metadata("design:type", ElementRef)
], SettingsComponent.prototype, "inputRef2", void 0);
__decorate([
    ViewChild('input3', { static: false }),
    __metadata("design:type", ElementRef)
], SettingsComponent.prototype, "inputRef3", void 0);
__decorate([
    ViewChild('input4', { static: false }),
    __metadata("design:type", ElementRef)
], SettingsComponent.prototype, "inputRef4", void 0);
SettingsComponent = __decorate([
    Component({
        selector: 'app-settings',
        templateUrl: './settings.component.html',
        styleUrls: ['./settings.component.css']
    }),
    __metadata("design:paramtypes", [SettingsService,
        UploadService])
], SettingsComponent);
export { SettingsComponent };
//# sourceMappingURL=settings.component.js.map