import {Injectable} from '@angular/core';
import * as Parse from "parse";
import {from, Observable, of, Subject} from 'rxjs';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  public parse;
  public $loginSubject: Subject<any> =  new Subject<any>(); // true - login, false - logout.
  
  constructor(){
    this.parse = Parse;
  }
  
  isAuth(): boolean{
    return !!(this.parse.User.current() && this.parse.User.current().authenticated());
  }
  
  getCurrentUser(){
    if (this.parse.User.current() && this.parse.User.current().authenticated()) {
      return this.parse.User.current();
    }
    return null;
  }
  
  isAdmin(): Observable<boolean>{
    if (Parse.User.current() && this.parse.User.current().authenticated()){
      let that = this;
      let queryRole = new Parse.Query(Parse.Role);
      queryRole.equalTo('name', 'admin');
      let promise = queryRole.find().then((res)=>{
        let adminRelation = new Parse.Relation(res[0], 'users');
        let queryAdmins = adminRelation.query();
        queryAdmins.equalTo('objectId', Parse.User.current().id);
        return queryAdmins.find().then((result)=>{
          return result.length > 0;
        })
      });
      return from(promise);
    }else {
      return  of(false);
    }
  }

  login(username: string, password:string){
    let promise = this.parse.User.logIn(username, password);
    return from(promise);
  }

  logOut(){
    this.$loginSubject.next(false);
    return from(this.parse.User.logOut());
  }
  
}
