import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ShippingHttpService} from '../../shared/services/shipping-http.service';
import {Observable} from 'rxjs/internal/Observable';
import {OrderService} from '../../shared/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  private id$ = this.route.paramMap;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private shippingService: ShippingHttpService) { }

  ngOnInit() {
    this.id$.subscribe((params: ParamMap) => {
      let id = params.get('id');
      if (id){
        this.setShippedTrue(params.get('id')).subscribe(res=>{
          if (res){
            this.removeProductsFromOrder().subscribe(res =>{
              this.router.navigateByUrl('/rentals').then(res=>{
                location.reload()
              })
            });
          }
        });
      } else {
        this.router.navigateByUrl('/cart')
      }
    })
  }
  
  private setShippedTrue(id: string): Observable<any> {
    return this.shippingService.setPayed(id)
  }
  
  private removeProductsFromOrder() {
    return this.orderService.destroyOrder()
  }
}
