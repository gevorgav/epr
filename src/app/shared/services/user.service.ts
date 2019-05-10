import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs/internal/Observable';

export abstract class UserService {
  abstract getAuthUsers(): Observable<Array<UserModel>>;
}
