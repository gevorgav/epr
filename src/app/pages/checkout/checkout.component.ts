import { Component, OnInit } from '@angular/core';
import {CheckoutService} from '../../shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }
  
  public token = '';

  ngOnInit() {
    this.getToken();
  }
  
  private getToken() {
    this.checkoutService.getToken().subscribe(res=>{
      this.token = res;
    })
  }
}
