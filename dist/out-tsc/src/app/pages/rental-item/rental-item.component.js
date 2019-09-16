import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDateService } from '../../shared/services/location-date.service';
import { RoutingService } from '../../shared/services/routing.service';
import { ProductService } from '../../shared/services/product.service';
import { CategoryService } from '../../shared/services/category.service';
import { NgxGalleryAnimation } from 'ngx-gallery';
import { OrderService } from '../../shared/services/order.service';
import { OrderModel } from '../../shared/model/order.model';
import { ParseService } from '../../shared/services/parse.service';
import { OrderItemModel } from '../../shared/model/order-item.model';
import { InitializerService } from '../../shared/services/initializer.service';
var RentalItemComponent = /** @class */ (function () {
    function RentalItemComponent(titleService, locationService, route, router, routingService, productService, categoryService, orderService, initializerService, parseService) {
        this.titleService = titleService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.orderService = orderService;
        this.initializerService = initializerService;
        this.parseService = parseService;
        this.galleryOptions = [
            { 'imageSize': 'contain' },
            {
                width: '450px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            { 'breakpoint': 500, 'width': '300px', 'height': '300px', 'thumbnailsColumns': 3 },
            { 'breakpoint': 300, 'width': '100%', 'height': '200px', 'thumbnailsColumns': 2 },
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            merge: true,
            autoWidth: true,
            margin: 10,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                400: {
                    items: 1
                },
                940: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            },
            nav: true
        };
        this.galleryImages = [];
        this.reviewsCount = 0;
        this.relatedProducts = [];
        this.quantity = 0;
        this.title$ = this.route.paramMap;
    }
    RentalItemComponent.prototype.ngOnInit = function () {
        this.getRouteParams();
        this.routingService.itemIdSubject.subscribe(function (res) {
            // console.log(res);
        });
    };
    RentalItemComponent.prototype.getSelectedProduct = function (productPatch) {
        var _this = this;
        this.productService.getProductByPatch(productPatch).subscribe(function (res) {
            if (!res) {
                _this.router.navigate(['/404']);
            }
            _this.selectedProduct = res;
            _this.titleService.setTitle(res.title);
            _this.categoryService.getCategoryByProductId(_this.selectedProduct.id).subscribe(function (res) {
                _this.itemCategory = res;
                _this.categoryService.getCategoryItems(res.id).subscribe(function (res) {
                    _this.relatedProducts = res.filter(function (product) { return product.id !== _this.selectedProduct.id; });
                });
            });
            _this.initGallery();
        });
    };
    RentalItemComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            $('.css3-spinner').remove();
        }, 1500);
    };
    RentalItemComponent.prototype.getRouteParams = function () {
        var _this = this;
        this.title$.subscribe(function (params) {
            _this.getSelectedProduct(params.get('title'));
        });
    };
    RentalItemComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rental', title], { queryParams: { id: id } });
    };
    RentalItemComponent.prototype.initGallery = function () {
        this.galleryImages = [];
        for (var _i = 0, _a = this.selectedProduct.images; _i < _a.length; _i++) {
            var image = _a[_i];
            this.galleryImages.push({
                small: image,
                medium: image,
                big: image
            });
        }
    };
    RentalItemComponent.prototype.isSpecified = function () {
        return this.locationService.isSpecified;
    };
    RentalItemComponent.prototype.getSetupPolicy = function () {
        return Array.from(this.selectedProduct.setupPolicy.keys());
    };
    RentalItemComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    RentalItemComponent.prototype.getQuantities = function () {
        var quantities = [];
        if (this.selectedProduct && this.selectedProduct.count > 0) {
            var i = 1;
            while (i <= this.selectedProduct.count) {
                quantities.push(i);
                i++;
            }
        }
        return quantities;
    };
    RentalItemComponent.prototype.addToCart = function () {
        var _this = this;
        var orderItem = new OrderItemModel(this.selectedProduct.id, this.quantity);
        var items = [];
        items.push(orderItem);
        var order = new OrderModel(this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.parseService.getCurrentUser() ? this.parseService.getCurrentUser().id : null, this.locationService.locationDate.location, items);
        this.orderService.setOrder(order).subscribe(function (res) {
            var _a;
            (_a = _this.initializerService.orderModel.orderItems).push.apply(_a, order.orderItems);
        });
    };
    RentalItemComponent.prototype.productInCart = function () {
        if (this.initializerService.orderModel.orderItems) {
            for (var _i = 0, _a = this.initializerService.orderModel.orderItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (this.selectedProduct.id === item.productId) {
                    return true;
                }
            }
        }
        return false;
    };
    RentalItemComponent.prototype.continueShopping = function () {
        this.router.navigate(['/rentals']);
    };
    RentalItemComponent.prototype.goToCart = function () {
        this.router.navigate(['/cart']);
    };
    RentalItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rental-item',
            templateUrl: './rental-item.component.html',
            styleUrls: ['./rental-item.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            LocationDateService,
            ActivatedRoute,
            Router,
            RoutingService,
            ProductService,
            CategoryService,
            OrderService,
            InitializerService,
            ParseService])
    ], RentalItemComponent);
    return RentalItemComponent;
}());
export { RentalItemComponent };
//# sourceMappingURL=rental-item.component.js.map