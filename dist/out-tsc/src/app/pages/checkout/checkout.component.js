import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingHttpService } from '../../shared/services/shipping-http.service';
import { OrderService } from '../../shared/services/order.service';
import { map } from 'rxjs/operators';
import { MailService } from '../../shared/services/mail.service';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(route, router, orderService, shippingService, mailService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.shippingService = shippingService;
        this.mailService = mailService;
        this.id$ = this.route.paramMap;
    }
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id$.subscribe(function (params) {
            var id = params.get('id');
            if (id) {
                _this.setShippedTrue(params.get('id')).subscribe(function (res) {
                    if (res) {
                        _this.removeProductsFromOrder().subscribe(function (res) {
                            _this.router.navigateByUrl('/rentals').then(function (res) {
                                location.reload();
                            });
                        });
                    }
                });
            }
            else {
                _this.router.navigateByUrl('/cart');
            }
        });
    };
    CheckoutComponent.prototype.setShippedTrue = function (id) {
        var _this = this;
        return this.shippingService.setPayed(id).pipe(map(function (res) {
            _this.mailService.sendClientNotice({
                email: res.attributes['email'],
                subject: "Dear " + res.attributes['name'],
                message: "Thank you for your order!\n                    We shall send you Pro-Forma Invoice."
            }).subscribe(function (res) { return res; });
            return res;
        }));
    };
    CheckoutComponent.prototype.removeProductsFromOrder = function () {
        return this.orderService.destroyOrder();
    };
    CheckoutComponent = tslib_1.__decorate([
        Component({
            selector: 'app-checkout',
            templateUrl: './checkout.component.html',
            styleUrls: ['./checkout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
            Router,
            OrderService,
            ShippingHttpService,
            MailService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map