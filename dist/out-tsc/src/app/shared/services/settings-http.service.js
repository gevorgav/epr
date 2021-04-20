var SettingsHttpService_1;
import { __decorate, __metadata } from "tslib";
import { SettingsModel } from '../model/settings.model';
import { ParseService } from './parse.service';
import { Injectable } from '@angular/core';
let SettingsHttpService = SettingsHttpService_1 = class SettingsHttpService {
    constructor(parseService) {
        this.parseService = parseService;
    }
    getSettings() {
        const SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService_1.SETTINGS_MODEL);
        let settingsParse = new SettingsParse();
        const query = new this.parseService.parse.Query(settingsParse);
        return query.first().then(res => {
            return SettingsHttpService_1.convertSettingsToSettingsModel(res);
        });
    }
    static convertSettingsToSettingsModel(item) {
        return new SettingsModel(item.id, item.attributes['homePageTitle'], item.attributes['homePageMetaDescription'], item.attributes['imageUrl1'], item.attributes['imageUrl2'], item.attributes['imageUrl3'], item.attributes['mobileImageUrl']);
    }
    updateSettings(settings) {
        const SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService_1.SETTINGS_MODEL);
        let settingsParse = new SettingsParse();
        const query = new this.parseService.parse.Query(settingsParse);
        return query.first().then(res => {
            SettingsHttpService_1.setFieldsForSettings(res, settings);
            return res.save();
        });
    }
    static setFieldsForSettings(settingsParse, model) {
        settingsParse.set('homePageTitle', model.title);
        settingsParse.set('homePageMetaDescription', model.homePageMetaDescription);
        settingsParse.set('imageUrl1', model.imageUrl1);
        settingsParse.set('imageUrl2', model.imageUrl2);
        settingsParse.set('imageUrl3', model.imageUrl3);
        settingsParse.set('mobileImageUrl', model.mobileImageUrl);
    }
};
SettingsHttpService.SETTINGS_MODEL = 'Settings';
SettingsHttpService = SettingsHttpService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], SettingsHttpService);
export { SettingsHttpService };
//# sourceMappingURL=settings-http.service.js.map