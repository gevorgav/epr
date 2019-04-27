import * as tslib_1 from "tslib";
// src/app/auth/auth-guard.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from './parse.service';
import { of } from 'rxjs/internal/observable/of';
import { map } from 'rxjs/operators';
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.parse.isAuth()) {
            return this.parse.isAdmin().pipe(map(function (res) {
                if (res) {
                    return true;
                }
                else {
                    _this.router.navigate(['home']);
                    return false;
                }
            }));
        }
        else {
            this.router.navigate(['home']);
            return of(false);
        }
    };
    AuthGuardService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService, Router])
    ], AuthGuardService);
    return AuthGuardService;
}());
export { AuthGuardService };
var AuthGuardLoginService = /** @class */ (function () {
    function AuthGuardLoginService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardLoginService.prototype.canActivate = function (route, state) {
        if (this.parse.isAuth()) {
            this.router.navigate(['home']);
            return of(false);
        }
        else {
            return of(true);
        }
    };
    AuthGuardLoginService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService, Router])
    ], AuthGuardLoginService);
    return AuthGuardLoginService;
}());
export { AuthGuardLoginService };
var AuthGuardVerificationService = /** @class */ (function () {
    function AuthGuardVerificationService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardVerificationService.prototype.canActivate = function (route, state) {
        if (!this.parse.parse.User.current() || (this.parse.parse.User.current() && this.parse.parse.User.current().authenticated())) {
            this.router.navigate(['home']);
            return of(false);
        }
        else {
            return of(true);
        }
    };
    AuthGuardVerificationService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService, Router])
    ], AuthGuardVerificationService);
    return AuthGuardVerificationService;
}());
export { AuthGuardVerificationService };
//# sourceMappingURL=auth-guard.service.js.map