import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ParseService } from '../../shared/services/parse.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../shared/model/user.model';
import * as Parse from "parse";
import { ActivatedRoute, Router } from '@angular/router';
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'http://138.68.251.183:1337/parse'; // use your server url
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(parseService, router, activatedRoute) {
        this.parseService = parseService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginErrorMessage = "";
        this.user = new UserModel();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.initRegisterForm();
        this.initLoginForm();
    };
    LoginPageComponent.prototype.onSubmitLogin = function () {
        var that = this;
        if (this.userLoginForm.valid) {
            this.parseService.login(this.userLoginForm.get('username').value, this.userLoginForm.get('password').value).subscribe(function (data) {
                that.parseService.$loginSubject.next(true);
                that.router.navigate(["home"]);
            }, function (error) {
                that.loginErrorMessage = error.message;
            });
        }
    };
    LoginPageComponent.prototype.onSubmitRegistration = function () {
        if (this.userRegisterForm.valid) {
            var user_1 = new this.parseService.parse.User();
            user_1.setUsername(this.userRegisterForm.get('username').value.toLowerCase().trim());
            user_1.setEmail(this.userRegisterForm.get('email').value);
            user_1.setPassword(this.userRegisterForm.get('password').value);
            user_1.set('name', this.userRegisterForm.get('name').value);
            user_1.set('phone', this.userRegisterForm.get('phone').value);
            var that_1 = this;
            user_1.signUp().then(function () {
                var query = new that_1.parseService.parse.Query(that_1.parseService.parse.Role);
                query.equalTo("name", 'user');
                return query.first();
                //first will return one object or null
            }).then(function (role) {
                //.getUsers() is equal .relation('users')
                if (role) {
                    role.getUsers().add(user_1);
                    role.save(null, {}).then(function (res) {
                        that_1.router.navigate(["verification-page"]);
                    });
                }
                else {
                    return that_1.parseService.parse.Promise.error("no such role");
                }
            }, console.error).then(function () {
                return user_1;
            }, console.error);
        }
    };
    LoginPageComponent.prototype.checkMail = function (control) {
        var Stores = Parse.Object.extend("User");
        var query = new Parse.Query(Stores);
        query.equalTo("email", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { emailTaken: true };
        });
    };
    LoginPageComponent.prototype.checkUsername = function (control) {
        var Stores = Parse.Object.extend("User");
        var query = new Parse.Query(Stores);
        query.equalTo("username", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { usernameTaken: true };
        });
    };
    LoginPageComponent.prototype.initRegisterForm = function () {
        this.userRegisterForm = new FormGroup({
            'name': new FormControl(this.user.name, [
                Validators.required
            ]),
            'email': new FormControl(this.user.email, [
                Validators.required,
                Validators.email
            ], this.checkMail.bind(this)),
            'username': new FormControl(this.user.username, [
                Validators.required
            ], this.checkUsername.bind(this)),
            'phone': new FormControl(this.user.phone, [
                Validators.required
            ]),
            'password': new FormControl(this.user.password, [
                Validators.required,
                Validators.minLength(6)
            ]),
            'repassword': new FormControl(this.user.rePassword, [
                Validators.required,
                Validators.minLength(6)
            ]),
        }, { validators: userRevealedValidator });
    };
    LoginPageComponent.prototype.initLoginForm = function () {
        this.userLoginForm = new FormGroup({
            'username': new FormControl('', [
                Validators.required
            ]),
            'password': new FormControl('', [
                Validators.required
            ])
        });
    };
    LoginPageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login-page',
            templateUrl: './login-page.component.html',
            styleUrls: ['./login-page.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ParseService,
            Router,
            ActivatedRoute])
    ], LoginPageComponent);
    return LoginPageComponent;
}());
export { LoginPageComponent };
export var userRevealedValidator = function (control) {
    var password = control.get('password');
    var repassword = control.get('repassword');
    return password.value && repassword.value && password.value !== repassword.value ? { 'userRevealedValidator': true } : null;
};
//# sourceMappingURL=login-page.component.js.map