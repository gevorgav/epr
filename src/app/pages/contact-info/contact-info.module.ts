import {RouterModule, Routes} from '@angular/router';
import {ContactInfoComponent} from './contact-info.component';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../mat/material.module';
import {RecaptchaFormsModule, RecaptchaModule} from 'ng-recaptcha';
import {EmailService} from '../../shared/services/email.service';

const contactInfoRoutes: Routes = [
  {
    path: '',
    component: ContactInfoComponent,
    data: {title: 'EPR Contact Us'}
  }];

@NgModule({
  declarations: [
    ContactInfoComponent
  ],
  imports: [
    RouterModule.forChild(
      contactInfoRoutes
    ),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [
    EmailService
  ]
})
export class ContactInfoModule {

}
