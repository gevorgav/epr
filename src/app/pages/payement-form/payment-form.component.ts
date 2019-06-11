import {Component} from '@angular/core';

@Component({
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})

export class PaymentFormComponent {
  
  readonly authData : AuthData = {clientKey : "YOUR PUBLIC CLIENT KEY", apiLoginID : "YOUR API LOGIN ID"};
  
  constructor(){}
  
  public sendPaymentDataToAnet() {
  
  }

}

export interface AuthData {
  clientKey: string,
  apiLoginID: string
}
