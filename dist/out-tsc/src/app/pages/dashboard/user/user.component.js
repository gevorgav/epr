import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UserService } from '../../../shared/services/user.service';
let UserComponent = class UserComponent {
    constructor(userService) {
        this.userService = userService;
        this.dataSource = new MatTableDataSource(this.users);
        this.displayedColumns = ['name', 'email', 'phone'];
    }
    ngOnInit() {
        this.initUsers();
    }
    initUsers() {
        this.userService.getAuthUsers()
            .then(res => {
            this.users = res;
            this.dataSource = new MatTableDataSource(this.users);
        });
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
UserComponent = __decorate([
    Component({
        selector: 'app-user',
        templateUrl: './user.component.html',
        styleUrls: ['./user.component.css']
    }),
    __metadata("design:paramtypes", [UserService])
], UserComponent);
export { UserComponent };
//# sourceMappingURL=user.component.js.map