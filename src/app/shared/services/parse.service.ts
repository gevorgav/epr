import {Injectable} from '@angular/core';
import * as Parse from "parse";

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'http://138.68.251.183:1337/parse'; // use your server url

@Injectable({
  providedIn: 'root'
})
export class ParseService {
  public parse;
  
  constructor(){
    this.parse = Parse;
  }
  
  isAuth(): boolean{
    return !!this.parse.User.current();
  }
  
  getCurrentUser(){
    return this.parse.User.current();
  }
  
  initAdmin(): Promise<boolean>{
    if (Parse.User.current()){
      let that = this;
      let queryRole = new Parse.Query(Parse.Role);
      queryRole.equalTo('name', 'admin');
      return queryRole.find().then((res)=>{
        let adminRelation = new Parse.Relation(res[0], 'users');
        let queryAdmins = adminRelation.query();
        queryAdmins.equalTo('objectId', Parse.User.current().id);
        return queryAdmins.find().then((result)=>{
          if (result.length > 0){
            return true
          } else {
            return false
          }
        })
      });
    }else {
      return  new Promise(function(resolve, reject) {
        resolve(false);
      })
    }
  }
  
}
