import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ParseService } from '../../shared/services/parse.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../shared/model/user.model';
import { Router } from '@angular/router';
let LoginPageComponent = class LoginPageComponent {
    constructor(parseService, router) {
        this.parseService = parseService;
        this.router = router;
        this.loginErrorMessage = "";
        this.user = new UserModel();
    }
    ngOnInit() {
        this.initRegisterForm();
        this.initLoginForm();
    }
    onSubmitLogin() {
        let that = this;
        if (this.userLoginForm.valid) {
            this.parseService.login(this.userLoginForm.get('username').value, this.userLoginForm.get('password').value).subscribe(function (data) {
                that.parseService.$loginSubject.next(true);
                that.router.navigate(["home"]).then(res => {
                    location.reload();
                });
            }, function (error) {
                that.loginErrorMessage = error.message;
            });
        }
    }
    onSubmitRegistration() {
        if (this.userRegisterForm.valid) {
            let user = new this.parseService.parse.User();
            user.setUsername(this.userRegisterForm.get('username').value.toLowerCase().trim());
            user.setEmail(this.userRegisterForm.get('email').value);
            user.setPassword(this.userRegisterForm.get('password').value);
            user.set('name', this.userRegisterForm.get('name').value);
            user.set('phone', this.userRegisterForm.get('phone').value);
            let that = this;
            user.signUp().then(function () {
                let query = new that.parseService.parse.Query(that.parseService.parse.Role);
                query.equalTo("name", 'user');
                return query.first();
                //first will return one object or null
            }).then(function (role) {
                //.getUsers() is equal .relation('users')
                if (role) {
                    role.getUsers().add(user);
                    role.save(null, {}).then(res => {
                        that.router.navigate(["verification-page"]);
                    });
                }
                else {
                    return that.parseService.parse.Promise.error("no such role");
                }
            }, console.error).then(function () {
                return user;
            }, console.error);
        }
    }
    checkMail(control) {
        let Stores = this.parseService.parse.Object.extend("User");
        const query = new this.parseService.parse.Query(Stores);
        query.equalTo("email", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { emailTaken: true };
        });
    }
    checkUsername(control) {
        let Stores = this.parseService.parse.Object.extend("User");
        const query = new this.parseService.parse.Query(Stores);
        query.equalTo("username", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { usernameTaken: true };
        });
    }
    initRegisterForm() {
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
    }
    initLoginForm() {
        this.userLoginForm = new FormGroup({
            'username': new FormControl('', [
                Validators.required
            ]),
            'password': new FormControl('', [
                Validators.required
            ])
        });
    }
};
LoginPageComponent = __decorate([
    Component({
        selector: 'app-login-page',
        templateUrl: './login-page.component.html',
        styleUrls: ['./login-page.component.css']
    }),
    __metadata("design:paramtypes", [ParseService,
        Router])
], LoginPageComponent);
export { LoginPageComponent };
export const userRevealedValidator = (control) => {
    const password = control.get('password');
    const repassword = control.get('repassword');
    return password.value && repassword.value && password.value !== repassword.value ? { 'userRevealedValidator': true } : null;
};
//# sourceMappingURL=login-page.component.js.map