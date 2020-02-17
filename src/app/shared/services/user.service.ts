import {UserModel} from '../model/user.model';
import {Observable} from 'rxjs';

export abstract class UserService {
  abstract getAuthUsers(): Observable<Array<UserModel>>;
}
