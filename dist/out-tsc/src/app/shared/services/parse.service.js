import { __decorate, __metadata, __param } from "tslib";
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { from, of, Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
let ParseService = class ParseService {
    constructor(platformId) {
        this.$loginSubject = new Subject(); // true - login, false - logout.
        let isBrowser = isPlatformBrowser(platformId);
        if (isBrowser) {
            import('parse').then(Parse => {
                Parse['default'].serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
                this.initialize(Parse);
            });
        }
        else {
            Parse.serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
            this.initialize();
        }
    }
    initialize(parse = Parse) {
        parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
        this.parse = parse;
    }
    isAuth() {
        var _a, _b;
        return !!(((_a = this.parse) === null || _a === void 0 ? void 0 : _a.User.current()) && ((_b = this.parse) === null || _b === void 0 ? void 0 : _b.User.current().authenticated()));
    }
    getCurrentUser() {
        var _a, _b, _c;
        if (((_a = this.parse) === null || _a === void 0 ? void 0 : _a.User.current()) && ((_b = this.parse) === null || _b === void 0 ? void 0 : _b.User.current().authenticated())) {
            return (_c = this.parse) === null || _c === void 0 ? void 0 : _c.User.current();
        }
        return undefined;
    }
    isAdmin() {
        var _a, _b;
        if (((_a = this.parse) === null || _a === void 0 ? void 0 : _a.User.current()) && ((_b = this.parse) === null || _b === void 0 ? void 0 : _b.User.current().authenticated())) {
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
        }
        else {
            return of(false);
        }
    }
    login(username, password) {
        var _a;
        let promise = (_a = this.parse) === null || _a === void 0 ? void 0 : _a.User.logIn(username, password);
        return from(promise);
    }
    logOut() {
        var _a;
        this.$loginSubject.next(false);
        return from((_a = this.parse) === null || _a === void 0 ? void 0 : _a.User.logOut());
    }
};
ParseService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __param(0, Inject(PLATFORM_ID)),
    __metadata("design:paramtypes", [String])
], ParseService);
export { ParseService };
//# sourceMappingURL=parse.service.js.map