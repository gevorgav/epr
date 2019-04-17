import {Injectable} from '@angular/core';
import * as Parse from "parse";
import {Subject} from 'rxjs/internal/Subject';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'http://138.68.251.183:1337/parse'; // use your server url

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  public parse;
  
  public $isAdmin: Subject<boolean> = new Subject<boolean>();
  
  constructor(){
    this.parse = Parse;
  }
  
  isAuth(): boolean{
    return !!this.parse.User.current();
  }
  
  getCurrentUser(){
    return this.parse.User.current();
  }
  
  initAdmin(){
    if (Parse.User.current()){
      let that = this;
      let queryRole = new Parse.Query(Parse.Role);
      queryRole.equalTo('name', 'admin');
      queryRole.find().then((res)=>{
        let adminRelation = new Parse.Relation(res[0], 'users');
        let queryAdmins = adminRelation.query();
        queryAdmins.equalTo('objectId', Parse.User.current().id);
        queryAdmins.find().then((result)=>{
          if (result.length > 0){
            that.$isAdmin.next(true)
          } else {
            that.$isAdmin.next(false)
          }
        })
      });
    }
  }
  
}
