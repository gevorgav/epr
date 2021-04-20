import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ParseService } from './parse.service';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
let AuthGuardService = class AuthGuardService {
    constructor(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.parse.isAuth()) {
            return this.parse.isAdmin().pipe(map((res) => {
                if (res) {
                    return true;
                }
                else {
                    this.router.navigate(['home']);
                    return false;
                }
            }));
        }
        else {
            this.router.navigate(['home']);
            return of(false);
        }
    }
};
AuthGuardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService, Router])
], AuthGuardService);
export { AuthGuardService };
let AuthGuardLoginService = class AuthGuardLoginService {
    constructor(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.parse.isAuth()) {
            this.router.navigate(['home']);
            return of(false);
        }
        else {
            return of(true);
        }
    }
};
AuthGuardLoginService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService, Router])
], AuthGuardLoginService);
export { AuthGuardLoginService };
let AuthGuardVerificationService = class AuthGuardVerificationService {
    constructor(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.parse.parse.User.current() || (this.parse.parse.User.current() && this.parse.parse.User.current().authenticated())) {
            this.router.navigate(['home']);
            return of(false);
        }
        else {
            return of(true);
        }
    }
};
AuthGuardVerificationService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService, Router])
], AuthGuardVerificationService);
export { AuthGuardVerificationService };
//# sourceMappingURL=auth-guard.service.js.map