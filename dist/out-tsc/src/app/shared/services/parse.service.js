import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import * as Parse from "parse";
import { from, of, Subject } from 'rxjs';
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
let ParseService = class ParseService {
    constructor() {
        this.$loginSubject = new Subject(); // true - login, false - logout.
        this.parse = Parse;
    }
    isAuth() {
        return !!(this.parse.User.current() && this.parse.User.current().authenticated());
    }
    getCurrentUser() {
        if (this.parse.User.current() && this.parse.User.current().authenticated()) {
            return this.parse.User.current();
        }
        return undefined;
    }
    isAdmin() {
        if (Parse.User.current() && this.parse.User.current().authenticated()) {
            let queryRole = new Parse.Query(Parse.Role);
            queryRole.equalTo('name', 'admin');
            let promise = queryRole.find().then((res) => {
                let adminRelation = new Parse.Relation(res[0], 'users');
                let queryAdmins = adminRelation.query();
                queryAdmins.equalTo('objectId', Parse.User.current().id);
                return queryAdmins.find().then((result) => {
                    return result.length > 0;
                });
            });
            return from(promise);
        }
        else {
            return of(false);
        }
    }
    login(username, password) {
        let promise = this.parse.User.logIn(username, password);
        return from(promise);
    }
    logOut() {
        this.$loginSubject.next(false);
        return from(this.parse.User.logOut());
    }
};
ParseService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], ParseService);
export { ParseService };
//# sourceMappingURL=parse.service.js.map