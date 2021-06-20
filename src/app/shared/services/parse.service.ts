import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {from, Observable, of, Subject} from 'rxjs';
import User = Parse.User;
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  public parse;
  public $loginSubject: Subject<any> = new Subject<any>(); // true - login, false - logout.

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    let isBrowser = isPlatformBrowser(platformId);
    if (isBrowser) {
      import('parse').then(Parse => {
          Parse['default'].serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
          this.initialize(Parse);
        }
      );
    } else {
      (Parse as any).serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
      this.initialize();
    }
  }

  private initialize(parse = Parse) {
    parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
    this.parse = parse;
  }

  isAuth(): boolean {
    return !!(this.parse?.User.current() && this.parse?.User.current().authenticated());
  }

  getCurrentUser(): User | undefined {
    if (this.parse?.User.current() && this.parse?.User.current().authenticated()) {
      return this.parse?.User.current();
    }
    return undefined;
  }

  isAdmin(): Observable<boolean> {
    if (this.parse?.User.current() && this.parse?.User.current().authenticated()) {
      let queryRole = new this.parse.Query(this.parse.Role);
      queryRole.equalTo('name', 'admin');
      let promise = queryRole.find().then((res) => {
        let adminRelation = new this.parse.Relation(res[0], 'users');
        let queryAdmins = adminRelation.query();
        queryAdmins.equalTo('objectId', this.parse.User.current().id);
        return queryAdmins.find().then((result) => {
          return result.length > 0;
        });
      });
      // @ts-ignore
      return from(promise);
    } else {
      return of(false);
    }
  }

  login(username: string, password: string) {
    let promise = this.parse?.User.logIn(username, password);
    return from(promise);
  }

  logOut() {
    this.$loginSubject.next(false);
    return from(this.parse?.User.logOut());
  }

}
