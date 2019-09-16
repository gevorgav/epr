import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParseService } from '../../shared/services/parse.service';
import { CategoryService } from '../../shared/services/category.service';
import { InitializerService } from '../../shared/services/initializer.service';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, parseService, initializerService, categoryService) {
        this.route = route;
        this.router = router;
        this.parseService = parseService;
        this.initializerService = initializerService;
        this.categoryService = categoryService;
        this.isAdmin = false;
        this.categories = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initCategories();
        this.parseService.isAdmin().subscribe(function (isAdmin) {
            _this.isAdmin = isAdmin;
        });
        this.parseService.$loginSubject.subscribe(function (res) {
            if (res === false) {
                _this.isAdmin = res;
            }
            else {
                _this.parseService.isAdmin().subscribe(function (isAdmin) {
                    _this.isAdmin = isAdmin;
                });
            }
        });
    };
    HeaderComponent.prototype.getCartCount = function () {
        return this.initializerService.orderModel.orderItems.length;
    };
    HeaderComponent.prototype.showCart = function () {
        return !!this.initializerService.orderModel.orderItems;
    };
    HeaderComponent.prototype.ngAfterViewInit = function () { };
    HeaderComponent.prototype.isLogin = function () {
        return this.parseService.isAuth();
    };
    HeaderComponent.prototype.getCurrentUser = function () {
        return this.parseService.getCurrentUser().getUsername();
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.parseService.logOut().subscribe(function (res) {
            _this.router.navigate(["login"]).then(function (res) {
                location.reload();
            });
        });
    };
    HeaderComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            ParseService,
            InitializerService,
            CategoryService])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map