import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CheckoutService} from '../../shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

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
  
  ngAfterViewInit(): void {
    let my_awesome_script = document.createElement('script');
    my_awesome_script.setAttribute('src','https://jstest.authorize.net/v3/AcceptUI.js');
    my_awesome_script.setAttribute('charset','utf-8');
    document.head.appendChild(my_awesome_script);
  }
}
