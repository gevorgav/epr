import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LocationDateService } from '../../shared/services/location-date.service';
import { RoutingService } from '../../shared/services/routing.service';
import { ProductService } from '../../shared/services/product.service';
import { CategoryService } from '../../shared/services/category.service';
var RentalItemComponent = /** @class */ (function () {
    function RentalItemComponent(titleService, locationService, route, router, routingService, productService, categoryService) {
        this.titleService = titleService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.galleryOptions = [
            { 'imageSize': 'contain' },
            { 'breakpoint': 500, 'width': '300px', 'height': '300px', 'thumbnailsColumns': 3 },
            { 'breakpoint': 300, 'width': '100%', 'height': '200px', 'thumbnailsColumns': 2 },
        ];
        this.galleryImages = [];
        this.reviewsCount = 4;
        this.products = [];
        this.title$ = this.route.paramMap;
    }
    RentalItemComponent.prototype.ngOnInit = function () {
        this.getRouteParams();
        this.routingService.itemIdSubject.subscribe(function (res) {
            console.log(res);
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
                _this.categoryService.getCategoryItems(res.id).subscribe(function (res) {
                    _this.products = res.filter(function (product) { return product.id !== _this.selectedProduct.id; });
                    console.log(res);
                });
            });
            _this.initGallery();
        });
    };
    RentalItemComponent.prototype.ngAfterViewInit = function () {
        this.router.events.subscribe(function (res) {
            if (res instanceof NavigationEnd) {
                if (res.url === '/home' || res.url === '/' || res.url === '' || res.url.indexOf('/rental/') > -1) {
                    // this.initGallery();
                }
            }
        });
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
            CategoryService])
    ], RentalItemComponent);
    return RentalItemComponent;
}());
export { RentalItemComponent };
//# sourceMappingURL=rental-item.component.js.map