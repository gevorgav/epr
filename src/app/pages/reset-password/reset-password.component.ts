import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import * as Parse from "parse";
import {ParseService} from '../../shared/services/parse.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  public userResetForm: FormGroup;

  public email :string = "";

  public message: string = "";
  public disableResetButton: boolean = false;

  constructor(private parseService: ParseService,
              private router: Router) { }

  ngOnInit() {
    this.initResetForm();
  }

  private initResetForm() {
    this.userResetForm = new FormGroup({
      'email': new FormControl(this.email, [
        Validators.required,
        Validators.email
      ], this.checkMail.bind(this)),
    }, );
  }

  private checkMail(control: AbstractControl){
    let Stores = Parse.Object.extend("User");
    const query = new Parse.Query(Stores);
    query.equalTo("email", control.value.trim());
    return query.find().then(function(results) {
      return results.length == 0 ? null : { emailTaken: true } ;
    });
  }

  onSubmitResetPassword() {
    this.parseService.parse.User.requestPasswordReset(this.userResetForm.get('email').value)
      .then(() => {
        this.message =  "Password reset request was sent successfully, please check your email.";
        this.redirect();
      }).catch((error) => {
        this.message = error.message;
    });
  }
  
  private redirect() {
    this.disableResetButton = true;
    setTimeout(()=>{
      this.router.navigate(["login"]);
    }, 3000)
  }
}
