import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingHttpService } from '../../shared/services/shipping-http.service';
import { OrderService } from '../../shared/services/order.service';
import { map } from 'rxjs/operators';
import { MailService } from '../../shared/services/mail.service';
let CheckoutComponent = class CheckoutComponent {
    constructor(route, router, orderService, shippingService, mailService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.shippingService = shippingService;
        this.mailService = mailService;
        this.id$ = this.route.paramMap;
    }
    ngOnInit() {
        this.id$.subscribe((params) => {
            let id = params.get('id');
            if (id) {
                this.setShippedTrue(params.get('id')).subscribe(res => {
                    if (res) {
                        this.removeProductsFromOrder().subscribe(res => {
                            this.router.navigateByUrl('/rentals').then(res => {
                                location.reload();
                            });
                        });
                    }
                });
            }
            else {
                this.router.navigateByUrl('/cart');
            }
        });
    }
    setShippedTrue(id) {
        return this.shippingService.setPayed(id).pipe(map(res => {
            this.mailService.sendClientNotice({
                email: res.attributes['email'],
                subject: `Dear ${res.attributes['name']}`,
                message: `Thank you for your order!
                    We shall send you Pro-Forma Invoice.`
            }).subscribe(res => res);
            return res;
        }));
    }
    removeProductsFromOrder() {
        return this.orderService.destroyOrder();
    }
};
CheckoutComponent = __decorate([
    Component({
        selector: 'app-checkout',
        templateUrl: './checkout.component.html',
        styleUrls: ['./checkout.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        OrderService,
        ShippingHttpService,
        MailService])
], CheckoutComponent);
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map