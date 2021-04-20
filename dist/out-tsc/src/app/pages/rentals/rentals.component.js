import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { RoutingService } from '../../shared/services/routing.service';
import { CategoryService } from '../../shared/services/category.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { Meta, Title } from '@angular/platform-browser';
import { from, zip } from 'rxjs';
let RentalsComponent = class RentalsComponent {
    constructor(router, routingService, route, titleService, metaService, categoryService, locationDateService) {
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
    ngOnInit() {
        zip(from(this.categoryService.getCategories()).pipe(map(arr => arr.sort((a, b) => {
            return a.order - b.order;
        }))), this.getPathParam()).subscribe(res => {
            this.categories = res[0];
            if (res[1]) {
                this.categories.forEach(value => {
                    if (value.pathParam === res[1])
                        this.categoryService.getCategoriesByPathParamWithDependency(res[1]).then(res => {
                            this.activeCategory = res;
                        });
                });
            }
            else {
                this.navigate(res[0][0].id, res[0][0].pathParam);
            }
            this.subscribeAndInit();
        });
    }
    getPathParam() {
        return this.title$.pipe(map((params) => {
            return params.get('title');
        }));
    }
    categoryOnClick(category) {
        this.navigate(category.id, category.pathParam);
        this.activeCategory = category;
    }
    activeCategoryStyle(category) {
        if (this.activeCategory && category.pathParam === this.activeCategory.pathParam) {
            return 'active-filter';
        }
        return '';
    }
    ngAfterViewInit() {
    }
    navigate(id, title) {
        this.router.navigate(['/rentals', title]);
        this.routingService.itemIdSubject.next(id);
    }
    subscribeAndInit() {
        // this.initCategory();
        this.router.events.subscribe(res => {
            if (res instanceof ResolveEnd && res.url.indexOf('/rentals/') > -1) {
                this.initCategory(res);
            }
        });
    }
    initCategory(routs) {
        let pathParam = routs ? routs.urlAfterRedirects.replace('/rentals/', '') : this.route.snapshot.params['id'];
        this.categoryService.getCategoriesByPathParamWithDependency(pathParam).then(res => {
            this.activeCategory = res;
            this.titleService.setTitle(res.pageTitle ? res.pageTitle : res.title);
            this.metaService.updateTag({ name: 'description', content: res.metaDescription });
        });
    }
    getPrice(nightPrice, minPrice, minTime, price) {
        return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
    }
    isSpecified() {
        return this.locationDateService.isSpecified;
    }
};
RentalsComponent = __decorate([
    Component({
        selector: 'app-rentals',
        templateUrl: './rentals.component.html',
        styleUrls: ['./rentals.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        RoutingService,
        ActivatedRoute,
        Title,
        Meta,
        CategoryService,
        LocationDateService])
], RentalsComponent);
export { RentalsComponent };
//# sourceMappingURL=rentals.component.js.map