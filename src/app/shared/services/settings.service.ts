import {Observable} from 'rxjs';
import {SettingsModel} from '../model/settings.model';

export abstract class SettingsService {
  abstract getSettings(): Promise<SettingsModel>;
  abstract updateSettings(settings: SettingsModel): Promise<any>;
}
