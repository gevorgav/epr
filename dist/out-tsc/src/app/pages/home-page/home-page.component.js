import { __decorate, __metadata } from "tslib";
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { SettingsService } from '../../shared/services/settings.service';
import { Meta, Title } from '@angular/platform-browser';
import { of } from 'rxjs';
import { SeoTagHttpService } from '../../shared/services/seo-tag-http.service';
let HomePageComponent = class HomePageComponent {
    constructor(router, titleService, metaService, locationDateService, categoryService, productService, settingsService, seoService) {
        this.router = router;
        this.titleService = titleService;
        this.metaService = metaService;
        this.locationDateService = locationDateService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.settingsService = settingsService;
        this.seoService = seoService;
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
        this.sliderReady = false;
        this.showLocationDate = false;
        this.isMobile = false;
        this.maxImages = 0;
        this.seoService.getHomePageSeo().subscribe(res => {
            this.titleService.setTitle(res.title);
            this.metaService.addTag({ name: 'description', content: res.description });
        });
    }
    ngOnInit() {
        this.initCategories();
        this.initProducts();
        this.initSettings();
        if (window.innerWidth && window.innerWidth < 990) {
            this.isMobile = true;
        }
    }
    ngAfterViewInit() {
    }
    onResize(event) {
        this.screenHeight = window.innerHeight;
    }
    locationDateSubmitted() {
        this.router.navigate(['rentals']);
    }
    initCategories() {
        this.categoryService.getCategoriesWithDependency().pipe(map((arr) => arr.sort((a, b) => {
            return a.order - b.order;
        }))).subscribe(res => {
            this.categories = res;
        });
    }
    initFeaturedRentalProducts(res) {
        res.forEach((product) => {
            if (product.isNew || product.isHotDeal) {
                this.featuredRentalProducts.push(product);
            }
        });
    }
    navigate(id, title) {
        this.router.navigate(['/rentals', title], { queryParams: { id: id } });
    }
    getClass(index) {
        if ((index === 0 || index === 1 || index === 11 || index === 12)
            && this.categories.length % 3 !== 0) {
            return 'col-lg-6';
        }
        return 'col-lg-4';
    }
    getProductLabel(product) {
        if (product.isNew) {
            return 'New !';
        }
        else if (product.isHotDeal) {
            return 'Hot Deal !';
        }
        return '';
    }
    initProducts() {
        this.productService.getAllProducts().then((res) => {
            this.initFeaturedRentalProducts(res);
        });
    }
    isSpecified() {
        return this.locationDateService.isSpecified;
    }
    getPrice(nightPrice, minPrice, minTime, price) {
        this.isSpecified().pipe(map(res => {
            if (res) {
                return '$ ' + this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
            }
            else {
                return of('');
            }
        }));
    }
    getScreenHeight() {
        return this.screenHeight - 80;
    }
    initImage() {
        this.sliderIndex++;
        if (this.sliderIndex > this.maxImages)
            this.sliderIndex = 1;
        setTimeout(() => this.initImage(), 7000);
    }
    initSettings() {
        this.settingsService.getSettings().then(res => {
            this.settings = res;
            this.initImage();
            let i = 1;
            while (this.settings['imageUrl' + i]) {
                this.maxImages++;
                i++;
            }
            this.sliderReady = true;
        });
    }
};
__decorate([
    HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HomePageComponent.prototype, "onResize", null);
HomePageComponent = __decorate([
    Component({
        selector: 'app-home-page',
        templateUrl: './home-page.component.html',
        styleUrls: ['./home-page.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        Title,
        Meta,
        LocationDateService,
        CategoryService,
        ProductService,
        SettingsService,
        SeoTagHttpService])
], HomePageComponent);
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map