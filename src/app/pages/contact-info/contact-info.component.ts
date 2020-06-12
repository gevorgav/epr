import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactUsModel} from '../../shared/model/contact-us.model';
import {MailService} from '../../shared/services/mail.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  public emailForm: FormGroup;
  public sendEmailErrorMessage: string = '';
  public contactUs: ContactUsModel = new ContactUsModel();
  private recaptcha: boolean = false;

  constructor(private emailService: MailService,
              private titleService: Title,
              private metaService: Meta) {
    this.initForm();
    this.titleService.setTitle('CONTACT US | Get in Touch with Us');
    this.metaService.updateTag({ name: 'description', content: `
    Headquarters: 600 Glenwood rd C.Glendale
    California 91202
    Phone: +1 626 766 4440
    Fax: +1 626 766 4440
    Email: entertainmentpartyrentals@gmail.com
    `});
  }

  onSubmitSendEmail() {
    if (this.emailForm.valid && this.recaptcha) {
      let contactUs = new ContactUsModel();
      contactUs.message = this.emailForm.get('message').value;
      contactUs.name = this.emailForm.get('name').value;
      contactUs.phone = this.emailForm.get('phone').value;
      contactUs.subject = this.emailForm.get('subject').value;
      contactUs.email = this.emailForm.get('email').value;
      this.emailService.sendEmail(contactUs).subscribe(res=>{
        location.reload();
      })
    }
  }

  private initForm() {
    this.emailForm = new FormGroup({
      'name': new FormControl(this.contactUs.name, [
        Validators.required
      ]),
      'email': new FormControl(this.contactUs.email, [
        Validators.required,
        Validators.email
      ]),
      'subject': new FormControl(this.contactUs.subject, [
        Validators.required
      ]),
      'phone': new FormControl(this.contactUs.phone, [
        Validators.required
      ]),
      'message': new FormControl(this.contactUs.message, [
        Validators.required
      ]),
      'recaptchaReactive': new FormControl('', []),
    });
  }

  resolved(captchaResponse: string) {
    this.emailService.sendToken(captchaResponse).subscribe(
      data => {
        this.recaptcha = true;
      },
      err => {
        this.recaptcha = false;
        this.sendEmailErrorMessage = 'Verification failed';
      },
    )
  }
}
