import * as tslib_1 from "tslib";
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { SettingsService } from '../../shared/services/settings.service';
import { SettingsModel } from '../../shared/model/settings.model';
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, locationDateService, categoryService, productService, settingsService) {
        this.router = router;
        this.locationDateService = locationDateService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.settingsService = settingsService;
        this.customOptions = {
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: true,
            dots: false,
            merge: true,
            lazyLoad: true,
            autoWidth: true,
            margin: 5,
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
                    items: 4
                }
            },
            nav: true
        };
        this.categories = [];
        this.featuredRentalProducts = [];
        this.sliderIndex = 0;
        this.maxImages = 0;
        this.sliderReady = false;
        this.onResize();
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.initCategories();
        this.initProducts();
        this.initSettings();
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
    };
    HomePageComponent.prototype.onResize = function (event) {
        this.screenHeight = window.innerHeight;
    };
    HomePageComponent.prototype.locationDateSubmitted = function () {
        this.router.navigate(['rentals']);
    };
    HomePageComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().pipe(map(function (arr) { return arr.sort(function (a, b) {
            return a.order - b.order;
        }); })).subscribe(function (res) {
            _this.categories = res;
        });
    };
    HomePageComponent.prototype.initFeaturedRentalProducts = function (res) {
        var _this = this;
        res.forEach(function (product) {
            if (product.isNew || product.isHotDeal) {
                _this.featuredRentalProducts.push(product);
            }
        });
    };
    HomePageComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rentals', title], { queryParams: { id: id } });
    };
    HomePageComponent.prototype.getClass = function (index) {
        if ((index === 0 || index === 1 || index === 11 || index === 12)
            && this.categories.length % 3 !== 0) {
            return 'col-lg-6';
        }
        return 'col-lg-4';
    };
    HomePageComponent.prototype.initProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (res) {
            _this.initFeaturedRentalProducts(res);
        });
    };
    HomePageComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
    };
    HomePageComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    HomePageComponent.prototype.getScreenHeight = function () {
        return this.screenHeight - 80;
    };
    HomePageComponent.prototype.initImage = function () {
        var _this = this;
        this.sliderIndex++;
        if (this.sliderIndex > this.maxImages)
            this.sliderIndex = 1;
        setTimeout(function () { return _this.initImage(); }, 7000);
    };
    HomePageComponent.prototype.initSettings = function () {
        var _this = this;
        this.settingsService.getSettings().subscribe(function (res) {
            _this.settings = res;
            _this.initImage();
            var i = 1;
            while (_this.settings['imageUrl' + i]) {
                _this.maxImages++;
                i++;
            }
            _this.sliderReady = true;
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", SettingsModel)
    ], HomePageComponent.prototype, "settings", void 0);
    tslib_1.__decorate([
        HostListener('window:resize', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], HomePageComponent.prototype, "onResize", null);
    HomePageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            LocationDateService,
            CategoryService,
            ProductService,
            SettingsService])
    ], HomePageComponent);
    return HomePageComponent;
}());
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map