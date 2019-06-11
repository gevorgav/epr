import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InitializerService } from '../../shared/services/initializer.service';
import { OrderService } from '../../shared/services/order.service';
import { LocationDateService } from '../../shared/services/location-date.service';
import { ProductService } from '../../shared/services/product.service';
import { forkJoin } from 'rxjs/internal/observable/forkJoin';
var CartComponent = /** @class */ (function () {
    function CartComponent(orderService, locationService, productService, initializerService) {
        this.orderService = orderService;
        this.locationService = locationService;
        this.productService = productService;
        this.initializerService = initializerService;
        this._productsInCart = [];
        this.orderData = new Map();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initOrderDataSelectedProducts();
        this.locationService.isSpecified.subscribe(function (res) {
            if (res) {
                _this.getShippingPrice();
            }
        });
    };
    Object.defineProperty(CartComponent.prototype, "productsInCart", {
        get: function () {
            return this._productsInCart;
        },
        set: function (value) {
            this._productsInCart = value;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.initOrderDataSelectedProducts = function () {
        var _this = this;
        var products$ = [];
        this.initializerService.orderModel.orderItems.forEach(function (item) {
            products$.push(_this.productService.getProduct(item.productId));
        });
        forkJoin.apply(void 0, products$).subscribe(function (res) {
            _this.productsInCart = res;
            _this.initOrderData();
        });
    };
    CartComponent.prototype.getQuantities = function (product) {
        var quantities = [];
        if (product && product.count > 0) {
            var i = 1;
            while (i <= product.count) {
                quantities.push(i);
                i++;
            }
        }
        return quantities;
    };
    CartComponent.prototype.isSpecified = function () {
        return this.locationService.isSpecified;
    };
    CartComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    CartComponent.prototype.initOrderData = function () {
        var _this = this;
        this.initializerService.orderModel.orderItems.forEach(function (value) {
            _this.orderData.set(value.productId, { count: value.count, available: _this.getQuantities(_this.getProductById(value.productId)) });
        });
    };
    CartComponent.prototype.getProductById = function (id) {
        for (var _i = 0, _a = this.productsInCart; _i < _a.length; _i++) {
            var product = _a[_i];
            if (product.id === id) {
                return product;
            }
        }
    };
    CartComponent.prototype.getShippingPrice = function () {
        var _this = this;
        this.locationService.getShippingPrice().subscribe(function (res) {
            console.log(res);
            _this.shippingPrice = res;
        });
    };
    CartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cart',
            templateUrl: './cart.component.html',
            styleUrls: ['./cart.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrderService,
            LocationDateService,
            ProductService,
            InitializerService])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map