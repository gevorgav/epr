import {SettingsService} from './settings.service';
import {Observable} from 'rxjs';
import {SettingsModel} from '../model/settings.model';
import {ParseService} from './parse.service';
import {Injectable} from '@angular/core';

@Injectable()
export class SettingsHttpService implements SettingsService {

  public static SETTINGS_MODEL = 'Settings';

  constructor(private parseService: ParseService) {
  }

  getSettings(): Promise<SettingsModel> {
    const SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService.SETTINGS_MODEL);
    let settingsParse = new SettingsParse();
    const query = new this.parseService.parse.Query(settingsParse);
    return query.first().then(res => {
      return SettingsHttpService.convertSettingsToSettingsModel(res);
    });
  }

  private static convertSettingsToSettingsModel(item: any): SettingsModel {
    return new SettingsModel(
      item.id,
      item.attributes['homePageTitle'],
      item.attributes['homePageMetaDescription'],
      item.attributes['imageUrl1'],
      item.attributes['imageUrl2'],
      item.attributes['imageUrl3'],
      item.attributes['mobileImageUrl']);
  }

  updateSettings(settings: SettingsModel): Promise<any> {
    const SettingsParse = this.parseService.parse.Object.extend(SettingsHttpService.SETTINGS_MODEL);
    let settingsParse = new SettingsParse();
    const query = new this.parseService.parse.Query(settingsParse);
    return query.first().then(res => {
      SettingsHttpService.setFieldsForSettings(res, settings);
      return res.save();
    });
  }

  private static setFieldsForSettings(settingsParse: any, model: SettingsModel) {
    settingsParse.set('homePageTitle', model.title);
    settingsParse.set('homePageMetaDescription', model.homePageMetaDescription);
    settingsParse.set('imageUrl1', model.imageUrl1);
    settingsParse.set('imageUrl2', model.imageUrl2);
    settingsParse.set('imageUrl3', model.imageUrl3);
    settingsParse.set('mobileImageUrl', model.mobileImageUrl);
  }

}
