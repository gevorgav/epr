import * as tslib_1 from "tslib";
import { UserService } from './user.service';
import { UserModel } from '../model/user.model';
import { Injectable } from '@angular/core';
import { from } from 'rxjs/index';
import { ParseService } from './parse.service';
var UserHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(UserHttpService, _super);
    function UserHttpService(parseService) {
        var _this = _super.call(this) || this;
        _this.parseService = parseService;
        return _this;
    }
    UserHttpService_1 = UserHttpService;
    UserHttpService.prototype.getAuthUsers = function () {
        var user = this.parseService.parse.Object.extend(UserHttpService_1.USER);
        var query = new this.parseService.parse.Query(user).equalTo('emailVerified', true);
        var promise = query.find().then(function (res) {
            return UserHttpService_1.forOne(res);
        });
        return from(promise);
    };
    UserHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(UserHttpService_1.parseObjectToUserModel(item));
        }
        return items;
    };
    UserHttpService.parseObjectToUserModel = function (parseObject) {
        return new UserModel(parseObject.attributes['name'], parseObject.attributes['email'], parseObject.attributes['username'], parseObject.attributes['phone']);
    };
    var UserHttpService_1;
    UserHttpService.USER = 'User';
    UserHttpService = UserHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], UserHttpService);
    return UserHttpService;
}(UserService));
export { UserHttpService };
//# sourceMappingURL=user-http.service.js.map