import {UserModel} from '../model/user.model';

export abstract class UserService {
  abstract getAuthUsers(): Promise<Array<UserModel>>;
}
