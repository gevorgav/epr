import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CheckoutService} from '../../shared/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private checkoutService: CheckoutService) { }

  ngOnInit() {
  }
  
  public redirect(){
    this.checkoutService.getToken().subscribe(res=>{
      document.getElementById("payTok")['value'] = res;
      document.getElementById("btnContinue").click();
    })
  }
}
