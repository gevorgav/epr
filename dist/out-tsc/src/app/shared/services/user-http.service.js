var UserHttpService_1;
import { __decorate, __metadata } from "tslib";
import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { Injectable } from '@angular/core';
import { ParseService } from './parse.service';
let UserHttpService = UserHttpService_1 = class UserHttpService extends UserService {
    constructor(parseService) {
        super();
        this.parseService = parseService;
    }
    getAuthUsers() {
        let user = this.parseService.parse.Object.extend(UserHttpService_1.USER);
        let query = new this.parseService.parse.Query(user).equalTo('emailVerified', true);
        let promise = query.find().then(res => {
            return UserHttpService_1.forOne(res);
        });
        return promise;
    }
    static forOne(parseObject) {
        let items = [];
        for (let item of parseObject) {
            items.push(UserHttpService_1.parseObjectToUserModel(item));
        }
        return items;
    }
    static parseObjectToUserModel(parseObject) {
        return new UserModel(parseObject.attributes['name'], parseObject.attributes['email'], parseObject.attributes['username'], parseObject.attributes['phone']);
    }
};
UserHttpService.USER = 'User';
UserHttpService = UserHttpService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], UserHttpService);
export { UserHttpService };
//# sourceMappingURL=user-http.service.js.map