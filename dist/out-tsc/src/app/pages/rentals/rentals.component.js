import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { RoutingService } from '../../shared/services/routing.service';
import { CategoryService } from '../../shared/services/category.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(router, routingService, route, categoryService, locationDateService) {
        this.router = router;
        this.routingService = routingService;
        this.route = route;
        this.categoryService = categoryService;
        this.locationDateService = locationDateService;
        this.categories = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().pipe(map(function (arr) { return arr.sort(function (a, b) {
            return a.order - b.order;
        }); })).subscribe(function (res) {
            _this.categories = res;
            _this.activeCategory = res[0];
            _this.subscribeAndInit();
        });
    };
    RentalsComponent.prototype.categoryOnClick = function (category) {
        this.activeCategory = category;
    };
    RentalsComponent.prototype.activeCategoryStyle = function (category) {
        if (category === this.activeCategory) {
            return 'active-filter';
        }
        return '';
    };
    RentalsComponent.prototype.ngAfterViewInit = function () {
    };
    RentalsComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rental', title]);
        this.routingService.itemIdSubject.next(id);
    };
    RentalsComponent.prototype.subscribeAndInit = function () {
        var _this = this;
        this.initCategory();
        this.router.events.subscribe(function (res) {
            if (res instanceof ResolveEnd && res.url.indexOf('/rentals/') > -1) {
                _this.initCategory(res);
            }
        });
    };
    RentalsComponent.prototype.initCategory = function (routs) {
        var _this = this;
        var categoryId = routs ? routs.urlAfterRedirects.replace('/rentals/', '') : this.route.snapshot.params['id'];
        this.categories.forEach(function (value) {
            if (value.id === categoryId) {
                _this.activeCategory = value;
            }
        });
    };
    RentalsComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    RentalsComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
    };
    RentalsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rentals',
            templateUrl: './rentals.component.html',
            styleUrls: ['./rentals.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            RoutingService,
            ActivatedRoute,
            CategoryService,
            LocationDateService])
    ], RentalsComponent);
    return RentalsComponent;
}());
export { RentalsComponent };
//# sourceMappingURL=rentals.component.js.map