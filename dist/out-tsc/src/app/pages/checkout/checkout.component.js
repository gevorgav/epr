import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShippingHttpService } from '../../shared/services/shipping-http.service';
import { OrderService } from '../../shared/services/order.service';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(route, router, orderService, shippingService) {
        this.route = route;
        this.router = router;
        this.orderService = orderService;
        this.shippingService = shippingService;
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
        return this.shippingService.setPayed(id);
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
            ShippingHttpService])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map