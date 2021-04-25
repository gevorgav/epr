import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ShippingHttpService} from '../../shared/services/shipping-http.service';
import {Observable} from 'rxjs/internal/Observable';
import {OrderService} from '../../shared/services/order.service';
import {map} from 'rxjs/operators';
import {MailService} from '../../shared/services/mail.service';
import { zip } from 'rxjs';
import { PromoCodeService } from '../../shared/services/promo-coed.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
  providers: [PromoCodeService]
})
export class CheckoutComponent implements OnInit {

  private id$ = this.route.paramMap;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private orderService: OrderService,
              private shippingService: ShippingHttpService,
              private mailService: MailService,
              private promoCodeService: PromoCodeService) { }

  ngOnInit() {
    this.id$.subscribe((params: ParamMap) => {
      let id = params.get('id');
      let promoCodeId = params.get('promoCodeId');
      if (id){
        this.setShippedTrue(params.get('id')).subscribe(res=>{
          if (res) {
            let observables: Observable<any>[] = [];
            observables.push(this.removeProductsFromOrder());
            if (promoCodeId) {
              observables.push(this.promoCodeService.setShippingId(promoCodeId, id));
            }
            zip(...observables).subscribe(res =>{
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
    return this.shippingService.setPayed(id).pipe(
      map(res =>{
        this.mailService.sendClientNotice({
          email: res.attributes['email'],
          subject: `Dear ${res.attributes['name']}`,
          message: `Thank you for your order!
                    We shall send you Pro-Forma Invoice.`
        }).subscribe(res=>res);
        return res;
      })
    );
  }

  private removeProductsFromOrder() {
    return this.orderService.destroyOrder()
  }
}
