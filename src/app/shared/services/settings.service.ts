import {Observable} from 'rxjs';
import {SettingsModel} from '../model/settings.model';

export abstract class SettingsService {
  abstract getSettings(): Observable<SettingsModel>;
  abstract updateSettings(settings: SettingsModel): Observable<any>;
}
