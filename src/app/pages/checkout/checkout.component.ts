import { Component, OnInit } from '@angular/core';
declare const Accept: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.sendPaymentDataToAnet();
    console.log('ssssss')
  }
  
  sendPaymentDataToAnet(){
    let authData = {};
    authData['clientKey'] = "9dQyqK5G2xP62erW9teH8hyjX5wq8jYjC7P7Z5d4dw9hyP76M4J2kWGRuQ5MFfSb";
    authData['apiLoginID'] = "6w38LfZ8v";
    let cardData = {};
    cardData['cardNumber'] = "5424000000000015";
    cardData['month'] = "12";
    cardData['year'] = "2020";
    cardData['cardCode'] = "999";
  
  
    let secureData = {};
    secureData['authData'] = authData;
    secureData['cardData'] = cardData;
  
    Accept.dispatchData(secureData,f);
  }
  
  responseHandler(){
    console.log('done');
  }

}

function f(e) {
  console.log(e);
}
