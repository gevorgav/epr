import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';

@Injectable()
export class CheckoutService {
  
  constructor(private httpClient: HttpClient) {
  }
  
  public getToken(): Observable<string>{
    return this.httpClient.post(this.URL, CheckoutService.PAYMENT_OBJ).pipe(
      map(res=>{
        if (res['messages']['resultCode'] === "Ok") {
          return res['token'];
        }else {
          return '';
        }
      })
    )
  }
  
  private URL = 'https://api.authorize.net/xml/v1/request.api';
  public static PAYMENT_OBJ = {
    getHostedPaymentPageRequest: {
      merchantAuthentication: {
        name: "3Vpb69UJ6",
        transactionKey: "9Ut347QY48FJ9bs9"
      },
      transactionRequest: {
        transactionType: "authCaptureTransaction",
        amount: "20.00",
        customer: {
          email: "ellen@mail.com"
        },
        billTo: {
          firstName: "",
          lastName: "",
          company: "",
          address: "",
          city: "",
          state: "",
          zip: "",
          country: "USA"
        }
      },
      hostedPaymentSettings: {
        setting: [{
          settingName: "hostedPaymentReturnOptions",
          settingValue: "{\"showReceipt\": true, \"url\": \"bebebe\", \"urlText\": \"Continue\", \"cancelUrl\": \"https://entertainmentpartyrentals.com/cart\", \"cancelUrlText\": \"Cancel\"}"
        }]
      }
    }
  }
}
