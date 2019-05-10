import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as Parse from "parse";
import { from, of, Subject } from 'rxjs';
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'http://138.68.251.183:1337/parse'; // use your server url
var ParseService = /** @class */ (function () {
    function ParseService() {
        this.$loginSubject = new Subject(); // true - login, false - logout.
        this.parse = Parse;
    }
    ParseService.prototype.isAuth = function () {
        return !!(this.parse.User.current() && this.parse.User.current().authenticated());
    };
    ParseService.prototype.getCurrentUser = function () {
        if (this.parse.User.current() && this.parse.User.current().authenticated()) {
            return this.parse.User.current();
        }
        return null;
    };
    ParseService.prototype.isAdmin = function () {
        if (Parse.User.current() && this.parse.User.current().authenticated()) {
            var that = this;
            var queryRole = new Parse.Query(Parse.Role);
            queryRole.equalTo('name', 'admin');
            var promise = queryRole.find().then(function (res) {
                var adminRelation = new Parse.Relation(res[0], 'users');
                var queryAdmins = adminRelation.query();
                queryAdmins.equalTo('objectId', Parse.User.current().id);
                return queryAdmins.find().then(function (result) {
                    return result.length > 0;
                });
            });
            return from(promise);
        }
        else {
            return of(false);
        }
    };
    ParseService.prototype.login = function (username, password) {
        var promise = this.parse.User.logIn(username, password);
        return from(promise);
    };
    ParseService.prototype.logOut = function () {
        this.$loginSubject.next(false);
        return from(this.parse.User.logOut());
    };
    ParseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ParseService);
    return ParseService;
}());
export { ParseService };
//# sourceMappingURL=parse.service.js.map