import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { RoutingService } from '../../shared/services/routing.service';
import { CategoryService } from '../../shared/services/category.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { Meta, Title } from '@angular/platform-browser';
import { zip } from 'rxjs';
var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(router, routingService, route, titleService, metaService, categoryService, locationDateService) {
        this.router = router;
        this.routingService = routingService;
        this.route = route;
        this.titleService = titleService;
        this.metaService = metaService;
        this.categoryService = categoryService;
        this.locationDateService = locationDateService;
        this.categories = [];
        this.title$ = this.route.paramMap;
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        zip(this.categoryService.getCategories().pipe(map(function (arr) { return arr.sort(function (a, b) {
            return a.order - b.order;
        }); })), this.getPathParam()).subscribe(function (res) {
            _this.categories = res[0];
            if (res[1]) {
                _this.categories.forEach(function (value) {
                    if (value.pathParam === res[1])
                        _this.categoryService.getCategoriesByPathParamWithDependency(res[1]).subscribe(function (res) {
                            _this.activeCategory = res;
                        });
                });
            }
            else {
                _this.navigate(res[0][0].id, res[0][0].pathParam);
            }
            _this.subscribeAndInit();
        });
    };
    RentalsComponent.prototype.getPathParam = function () {
        return this.title$.pipe(map(function (params) {
            return params.get('title');
        }));
    };
    RentalsComponent.prototype.categoryOnClick = function (category) {
        this.navigate(category.id, category.pathParam);
        this.activeCategory = category;
    };
    RentalsComponent.prototype.activeCategoryStyle = function (category) {
        if (this.activeCategory && category.pathParam === this.activeCategory.pathParam) {
            return 'active-filter';
        }
        return '';
    };
    RentalsComponent.prototype.ngAfterViewInit = function () {
    };
    RentalsComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rentals', title]);
        this.routingService.itemIdSubject.next(id);
    };
    RentalsComponent.prototype.subscribeAndInit = function () {
        var _this = this;
        // this.initCategory();
        this.router.events.subscribe(function (res) {
            if (res instanceof ResolveEnd && res.url.indexOf('/rentals/') > -1) {
                _this.initCategory(res);
            }
        });
    };
    RentalsComponent.prototype.initCategory = function (routs) {
        var _this = this;
        var pathParam = routs ? routs.urlAfterRedirects.replace('/rentals/', '') : this.route.snapshot.params['id'];
        this.categoryService.getCategoriesByPathParamWithDependency(pathParam).subscribe(function (res) {
            _this.activeCategory = res;
            _this.titleService.setTitle(res.pageTitle ? res.pageTitle : res.title);
            _this.metaService.addTag({ name: 'description', content: res.metaDescription });
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
            Title,
            Meta,
            CategoryService,
            LocationDateService])
    ], RentalsComponent);
    return RentalsComponent;
}());
export { RentalsComponent };
//# sourceMappingURL=rentals.component.js.map