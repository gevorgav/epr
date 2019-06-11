import { Component, OnInit } from '@angular/core';
import {ParseService} from '../../shared/services/parse.service';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {UserModel} from '../../shared/model/user.model';
import * as Parse from "parse";
import {ActivatedRoute, Router} from '@angular/router';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  
  public userRegisterForm: FormGroup;
  
  public userLoginForm: FormGroup;
  
  public loginErrorMessage: string = "";
  
  public user: UserModel = new UserModel();

  constructor(private parseService: ParseService,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initRegisterForm();
    this.initLoginForm();
  }
  
  onSubmitLogin(){
    let that = this;
    if (this.userLoginForm.valid) {
      this.parseService.login(this.userLoginForm.get('username').value,
        this.userLoginForm.get('password').value).subscribe(function (data) {
        that.parseService.$loginSubject.next(true);
        that.router.navigate(["home"]).then(res=>{
          location.reload()
        });
      }, function (error) {
        that.loginErrorMessage = error.message;
      });
    }
  }
  
  onSubmitRegistration(){
    if (this.userRegisterForm.valid){
      let user = new this.parseService.parse.User();
      user.setUsername(this.userRegisterForm.get('username').value.toLowerCase().trim());
      user.setEmail(this.userRegisterForm.get('email').value);
      user.setPassword(this.userRegisterForm.get('password').value);
      user.set('name', this.userRegisterForm.get('name').value);
      user.set('phone', this.userRegisterForm.get('phone').value);
  
      let that = this;
      
      user.signUp().then(function() {
        var query = new that.parseService.parse.Query(that.parseService.parse.Role);
        query.equalTo("name", 'user');
        return query.first();
        //first will return one object or null
      }).then(function(role) {
        //.getUsers() is equal .relation('users')
        if(role){
          role.getUsers().add(user);
          role.save(null, { }).then(res=>{
            that.router.navigate(["verification-page"]);
          })
        }else{
          return that.parseService.parse.Promise.error("no such role");
        }
      }, console.error).then(function() {
        return user;
      }, console.error
      );
      
      
    }
  }
  
  private checkMail(control: AbstractControl){
    let Stores = Parse.Object.extend("User");
    const query = new Parse.Query(Stores);
    query.equalTo("email", control.value.trim());
    return query.find().then(function(results) {
      return results.length == 0 ? null : { emailTaken: true } ;
    });
  }
  
  private checkUsername(control: AbstractControl){
    let Stores = Parse.Object.extend("User");
    const query = new Parse.Query(Stores);
    query.equalTo("username", control.value.trim());
    return query.find().then(function(results) {
      return results.length == 0 ? null : { usernameTaken: true } ;
    });
  }
  
  private initRegisterForm() {
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
  
  private initLoginForm() {
    this.userLoginForm = new FormGroup({
      'username': new FormControl('',[
        Validators.required
      ]),
      'password': new FormControl('',[
        Validators.required
      ])
    })
  }
}

export const userRevealedValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  
  const password = control.get('password');
  const repassword = control.get('repassword');
  
  return password.value && repassword.value && password.value !== repassword.value? { 'userRevealedValidator': true } : null;
};
