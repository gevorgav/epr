import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../mat/material.module';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { MailService } from '../../shared/services/mail.service';
const contactInfoRoutes = [
    {
        path: '',
        component: ContactInfoComponent,
        data: { title: 'EPR Contact Us' }
    }
];
let ContactInfoModule = class ContactInfoModule {
};
ContactInfoModule = __decorate([
    NgModule({
        declarations: [
            ContactInfoComponent
        ],
        imports: [
            RouterModule.forChild(contactInfoRoutes),
            FormsModule,
            ReactiveFormsModule,
            CommonModule,
            MaterialModule,
            RecaptchaModule,
            RecaptchaFormsModule
        ],
        providers: [
            MailService
        ]
    })
], ContactInfoModule);
export { ContactInfoModule };
//# sourceMappingURL=contact-info.module.js.map