import * as tslib_1 from "tslib";
import { from } from 'rxjs';
import { SettingsModel } from '../model/settings.model';
import { ParseService } from './parse.service';
import { Injectable } from '@angular/core';
var SettingsHttpService = /** @class */ (function () {
    function SettingsHttpService(parseService) {
        this.parseService = parseService;
    }
    SettingsHttpService_1 = SettingsHttpService;
    SettingsHttpService.prototype.getSettings = function () {
        var SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService_1.SETTINGS_MODEL);
        var settingsParse = new SettingsParse();
        var query = new this.parseService.parse.Query(settingsParse);
        var promise = query.first().then(function (res) {
            return SettingsHttpService_1.convertSettingsToSettingsModel(res);
        });
        return from(promise);
    };
    SettingsHttpService.convertSettingsToSettingsModel = function (item) {
        return new SettingsModel(item.id, item.attributes['homePageTitle'], item.attributes['homePageMetaDescription'], item.attributes['imageUrl1'], item.attributes['imageUrl2'], item.attributes['imageUrl3']);
    };
    SettingsHttpService.prototype.updateSettings = function (settings) {
        var SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService_1.SETTINGS_MODEL);
        var settingsParse = new SettingsParse();
        var query = new this.parseService.parse.Query(settingsParse);
        var promise = query.first().then(function (res) {
            SettingsHttpService_1.setFieldsForSettings(res, settings);
            return res.save();
        });
        return from(promise);
    };
    SettingsHttpService.setFieldsForSettings = function (settingsParse, model) {
        settingsParse.set('homePageTitle', model.title);
        settingsParse.set('homePageMetaDescription', model.homePageMetaDescription);
        settingsParse.set('imageUrl1', model.imageUrl1);
        settingsParse.set('imageUrl2', model.imageUrl2);
        settingsParse.set('imageUrl3', model.imageUrl3);
    };
    var SettingsHttpService_1;
    SettingsHttpService.SETTINGS_MODEL = 'Settings';
    SettingsHttpService = SettingsHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], SettingsHttpService);
    return SettingsHttpService;
}());
export { SettingsHttpService };
//# sourceMappingURL=settings-http.service.js.map