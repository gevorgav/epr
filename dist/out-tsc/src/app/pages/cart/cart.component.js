import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { InitializerService } from '../../shared/services/initializer.service';
import { OrderService } from '../../shared/services/order.service';
import { LocationDateService } from '../../shared/services/location-date.service';
import { ProductService } from '../../shared/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ParseService } from '../../shared/services/parse.service';
import { CheckoutService } from '../../shared/services/checkout.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShippingInfoModel } from '../../shared/model/shipping-info.model';
import { ShippingHttpService } from '../../shared/services/shipping-http.service';
import { zip } from 'rxjs';
var CartComponent = /** @class */ (function () {
    function CartComponent(orderService, locationService, productService, route, router, parseService, checkoutService, shippingService, initializerService) {
        this.orderService = orderService;
        this.locationService = locationService;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.parseService = parseService;
        this.checkoutService = checkoutService;
        this.shippingService = shippingService;
        this.initializerService = initializerService;
        this._productsInCart = [];
        this._minimalTotal = 89;
        this._minimalDeliver = 35;
        this.orderData = new Map();
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initOrderDataSelectedProducts();
        this.initShippingForm();
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
        zip.apply(void 0, products$).subscribe(function (res) {
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
    CartComponent.prototype.getPrice = function (product) {
        return this.locationService.getCalculation(product.nightPrice, product.minPrice, product.minTime, product.price);
    };
    CartComponent.prototype.initOrderData = function () {
        var _this = this;
        this.initializerService.orderModel.orderItems.forEach(function (value) {
            var product = _this.getProductById(value.productId);
            _this.orderData.set(value.productId, { count: value.count,
                available: _this.getQuantities(product),
                price: 0
            });
            _this.getPrice(product).subscribe(function (res) {
                _this.orderData.get(value.productId).price = res;
            });
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
            _this.shippingPrice = res;
            _this.setNewPrices();
        });
    };
    CartComponent.prototype.countChange = function (value, productId) {
        this.getSubtotalPrice();
        this.setNewPrices();
        if (this.parseService.isAuth()) {
            this.orderService.saveCount(value, productId);
        }
    };
    CartComponent.prototype.getDeliveryFee = function () {
        var subTotal = this.getSubtotalPrice() + this.shippingPrice;
        if (subTotal < this._minimalTotal) {
            return '$ ' + (this.shippingPrice + this._minimalDeliver);
        }
        return this.shippingPrice ? '$ ' + this.shippingPrice : 'Free Delivery';
    };
    CartComponent.prototype.getTotalPrice = function () {
        var subTotal = this.getSubtotalPrice() + this.shippingPrice;
        if (subTotal < this._minimalTotal) {
            return subTotal + this._minimalDeliver;
        }
        return subTotal;
    };
    CartComponent.prototype.getSubtotalPrice = function () {
        var subtotal = 0;
        this.orderData.forEach(function (value) {
            subtotal += value.price * value.count;
        });
        return subtotal;
    };
    CartComponent.prototype.removeOrderItem = function (productId) {
        var _this = this;
        this.orderService.removeOrderItem(productId).subscribe(function (res) {
            if (res) {
                _this.productsInCart = _this.productsInCart.filter(function (value) { return value.id !== productId; });
                _this.initializerService.orderModel.orderItems = _this.initializerService.orderModel.orderItems.filter(function (value) { return value.productId !== productId; });
                _this.orderData.delete(productId);
            }
        });
    };
    CartComponent.prototype.continueShopping = function () {
        this.router.navigate(['/rentals']);
    };
    CartComponent.prototype.checkout = function () {
        document.getElementById("shipping-submit").click();
    };
    CartComponent.prototype.redirect = function () {
        this.checkoutService.getToken().subscribe(function (res) {
            document.getElementById("payTok")['value'] = res;
            document.getElementById("btnContinue").click();
        });
    };
    CartComponent.prototype.setNewPrices = function () {
        CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.amount = this.getTotalPrice().toString();
        CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.billTo.zip = this.locationService.locationDate.location.zipCode;
    };
    CartComponent.prototype.onSubmitShippingForm = function () {
        var _this = this;
        if (this.shippingInformationForm.valid) {
            var shippingModel = new ShippingInfoModel(null, this.shippingInformationForm.get('name').value, this.shippingInformationForm.get('address').value, this.shippingInformationForm.get('phone').value, this.shippingInformationForm.get('email').value, this.shippingInformationForm.get('instruction').value, this.locationService.locationDate.location.id, this.getProductsIds(this.productsInCart), false, false, this.parseService.isAuth() ? this.parseService.getCurrentUser() : null, null, this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.getTotalPrice(), this.getProductCount(), this.initializerService.orderModel.orderItems);
            this.shippingService.saveShipping(shippingModel).subscribe(function (res) {
                CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.hostedPaymentSettings.setting[0].settingValue =
                    "{\"showReceipt\": true, \"url\": \"https://entertainmentpartyrentals.com/profile/" + res.id + "\", \"urlText\": \"Continue\", \"cancelUrl\": \"https://entertainmentpartyrentals.com/cart\", \"cancelUrlText\": \"Cancel\"}";
                _this.redirect();
            });
        }
    };
    CartComponent.prototype.initShippingForm = function () {
        this.shippingInformationForm = new FormGroup({
            'name': new FormControl('', [
                Validators.required
            ]),
            'address': new FormControl('', [
                Validators.required
            ]),
            'phone': new FormControl('', [
                Validators.required
            ]),
            'email': new FormControl('', [
                Validators.required
            ]),
            'instruction': new FormControl('', [])
        });
    };
    CartComponent.prototype.getProductsIds = function (productsInCart) {
        var ids = [];
        productsInCart.forEach(function (value) {
            ids.push({ id: value.id, title: value.title });
        });
        return ids;
    };
    CartComponent.prototype.getProductCount = function () {
        var productCount = [];
        this.orderData.forEach(function (value, key) {
            productCount.push({ productId: key, count: value.count, name: "" });
        });
        return productCount;
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
            ActivatedRoute,
            Router,
            ParseService,
            CheckoutService,
            ShippingHttpService,
            InitializerService])
    ], CartComponent);
    return CartComponent;
}());
export { CartComponent };
//# sourceMappingURL=cart.component.js.map