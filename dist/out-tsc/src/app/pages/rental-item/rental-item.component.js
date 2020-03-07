import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
import { AdditionCategoryService } from '../../shared/services/addition-category.service';
import { zip } from 'rxjs';
var RentalItemComponent = /** @class */ (function () {
    function RentalItemComponent(titleService, metaService, locationService, route, router, routingService, productService, categoryService, orderService, initializerService, parseService, additionCategoryService) {
        this.titleService = titleService;
        this.metaService = metaService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.orderService = orderService;
        this.initializerService = initializerService;
        this.parseService = parseService;
        this.additionCategoryService = additionCategoryService;
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
            loop: false,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            merge: true,
            lazyLoad: true,
            autoWidth: true,
            margin: 10,
            navSpeed: 700,
            navText: ['<', '>'],
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
        this.additionCategories = [];
        this.selectedAdditions = new Map();
    }
    RentalItemComponent.prototype.ngOnInit = function () {
        this.getRouteParams();
        this.routingService.itemIdSubject.subscribe(function (res) {
            // console.log(res);
        });
    };
    RentalItemComponent.prototype.getSelectedProduct = function (productPatch) {
        var _this = this;
        this.productService.getProductByPatch(productPatch)
            .subscribe(function (res) {
            if (!res) {
                _this.router.navigate(['page-not-found']);
            }
            _this.initAdditions(res);
            _this.selectedProduct = res;
            _this.titleService.setTitle(res.title);
            _this.metaService.addTag({ name: 'description', content: res.metaDescription });
            _this.categoryService.getCategoryByProductId(_this.selectedProduct.id).subscribe(function (res) {
                _this.itemCategory = res;
            });
            if (_this.selectedProduct.relation && _this.selectedProduct.relation.length > 0) {
                _this.initRelatedProducts();
            }
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
        var selectedAdditions = this.getSelectedValues();
        var orderItem = new OrderItemModel(this.selectedProduct.id, this.quantity, selectedAdditions.map(function (value) { return value.id; }));
        var items = [];
        items.push(orderItem);
        var order = new OrderModel(this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.parseService.getCurrentUser() ? this.parseService.getCurrentUser().id : null, this.locationService.locationDate.location, items);
        this.orderService.setOrder(order).subscribe(function (res) {
            var _a;
            if (!_this.initializerService.orderModel.orderItems) {
                _this.initializerService.orderModel.orderItems = [];
            }
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
    RentalItemComponent.prototype.initAdditions = function (productModel) {
        var _this = this;
        var $obs = [];
        productModel.additionalCategories.forEach(function (value) {
            $obs.push(_this.additionCategoryService.getAdditionalCategoryById(value));
        });
        zip.apply(void 0, $obs).subscribe(function (res) {
            res.forEach(function (value) {
                _this.selectedAdditions.set(value.id, []);
            });
            _this.additionCategories = res;
        });
    };
    RentalItemComponent.prototype.selectAddition = function (itemId, category) {
        var _this = this;
        if (Array.isArray(itemId)) {
            this.selectedAdditions.set(category.id, []);
            itemId.forEach(function (valueId) {
                _this.setSelectedAdditions(valueId, category);
            });
        }
        else {
            if (!this.selectedAdditions.has(category.id)) {
                this.selectedAdditions.set(category.id, []);
            }
            this.setSelectedAdditions(itemId, category);
        }
    };
    RentalItemComponent.prototype.getSelectedValues = function () {
        var selected = [];
        this.selectedAdditions.forEach(function (value) {
            selected.push.apply(selected, value);
        });
        return selected;
    };
    RentalItemComponent.prototype.setSelectedAdditions = function (itemId, category) {
        var item = category.additions.find(function (value) { return itemId == value.id; });
        category.multiSelect ?
            this.selectedAdditions.get(category.id).indexOf(item) == -1 ?
                this.selectedAdditions.get(category.id).push(item) :
                this.selectedAdditions.set(category.id, this.selectedAdditions.get(category.id).filter(function (value) { return value.id != item.id; }))
            : this.selectedAdditions.set(category.id, [item]);
    };
    RentalItemComponent.prototype.initRelatedProducts = function () {
        var _this = this;
        var relatedProducts$ = [];
        this.selectedProduct.relation.forEach(function (value) {
            relatedProducts$.push(_this.productService.getProduct(value));
        });
        zip.apply(void 0, relatedProducts$).subscribe(function (res) {
            var _a;
            (_a = _this.relatedProducts).push.apply(_a, res);
        });
    };
    RentalItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rental-item',
            templateUrl: './rental-item.component.html',
            styleUrls: ['./rental-item.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            Meta,
            LocationDateService,
            ActivatedRoute,
            Router,
            RoutingService,
            ProductService,
            CategoryService,
            OrderService,
            InitializerService,
            ParseService,
            AdditionCategoryService])
    ], RentalItemComponent);
    return RentalItemComponent;
}());
export { RentalItemComponent };
//# sourceMappingURL=rental-item.component.js.map