import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactUsModel} from '../model/contact-us.model';

@Injectable()
export class EmailService {

  constructor(private http: HttpClient) {
  }

  public sendToken(token): Observable<any> {
    return this.http.post<any>('/token_validate', {recaptcha: token});
  }

  public sendEmail(contactUsModel: ContactUsModel){
    return this.http.post<any>('/sendEmail', {})
  }

}
