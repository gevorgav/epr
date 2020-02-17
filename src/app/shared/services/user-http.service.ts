import {UserService} from './user.service';
import {UserModel} from '../model/user.model';
import {Injectable} from '@angular/core';
import {from, Observable} from 'rxjs';
import {ParseService} from './parse.service';
@Injectable()
export class UserHttpService extends UserService{

  static USER = 'User';

  constructor(private parseService: ParseService) {
    super();
  }

  getAuthUsers(): Observable<Array<UserModel>> {
    let user = this.parseService.parse.Object.extend(UserHttpService.USER);
    let query = new this.parseService.parse.Query(user).equalTo('emailVerified', true);
    let promise = query.find().then(res => {
        return UserHttpService.forOne(res);
    });
    return from(promise);
  }

  private static forOne(parseObject: any[]): UserModel[] {
    let items: UserModel[] = [];
    for (let item of parseObject) {
      items.push(UserHttpService.parseObjectToUserModel(item));
    }
    return items;
  }

  private static parseObjectToUserModel(parseObject: any): UserModel {
    return new UserModel(
      parseObject.attributes['name'],
      parseObject.attributes['email'],
      parseObject.attributes['username'],
      parseObject.attributes['phone'],
    );
  }

}
