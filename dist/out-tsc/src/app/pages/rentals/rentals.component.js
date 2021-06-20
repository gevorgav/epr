import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, ResolveEnd, Router } from '@angular/router';
import { RoutingService } from '../../shared/services/routing.service';
import { CategoryService } from '../../shared/services/category.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { Meta, Title } from '@angular/platform-browser';
import { from, zip } from 'rxjs';
import { SeoTagHttpService } from '../../shared/services/seo-tag-http.service';
let RentalsComponent = class RentalsComponent {
    constructor(router, routingService, route, titleService, metaService, categoryService, locationDateService, seoService) {
        this.router = router;
        this.routingService = routingService;
        this.route = route;
        this.titleService = titleService;
        this.metaService = metaService;
        this.categoryService = categoryService;
        this.locationDateService = locationDateService;
        this.seoService = seoService;
        this.categories = [];
        this.isMobile = false;
        this.title$ = this.route.paramMap;
        this.setSeo();
    }
    ngOnInit() {
        if (window.innerWidth && window.innerWidth < 990) {
            this.isMobile = true;
        }
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
            else if (!this.isMobile) {
                this.navigate(res[0][0].id, res[0][0].pathParam);
            }
            this.subscribeAndInit();
        });
    }
    setSeo() {
        let categoryName = this.route.snapshot.params.title;
        if (categoryName) {
            this.seoService.getCategorySeo(categoryName).subscribe(res => {
                this.titleService.setTitle(res.title);
                this.metaService.addTag({ name: 'description', content: res.description });
            });
        }
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
        LocationDateService,
        SeoTagHttpService])
], RentalsComponent);
export { RentalsComponent };
//# sourceMappingURL=rentals.component.js.map