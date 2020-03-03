import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.dataSource = new MatTableDataSource(this.users);
        this.displayedColumns = ['name', 'email', 'phone'];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.initUsers();
    };
    UserComponent.prototype.initUsers = function () {
        var _this = this;
        this.userService.getAuthUsers()
            .subscribe(function (res) {
            _this.users = res;
            _this.dataSource = new MatTableDataSource(_this.users);
        });
    };
    UserComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    UserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UserService])
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map