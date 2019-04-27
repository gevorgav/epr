import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../shared/services/category.service';
import { ProductService } from '../../shared/services/product.service';
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, categoryService, productService) {
        this.router = router;
        this.categoryService = categoryService;
        this.productService = productService;
        this.categories = [];
        this.featuredRentalProducts = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.initCategories();
        this.initProducts();
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
        this.initGallery();
    };
    HomePageComponent.prototype.locationDateSubmitted = function () {
        this.router.navigate(['rentals']);
    };
    HomePageComponent.prototype.initGallery = function () {
        setTimeout(function () {
            SEMICOLON.documentOnReady.init();
            setTimeout(function () {
                SEMICOLON.documentOnLoad.init();
                setTimeout(function () {
                    SEMICOLON.documentOnResize.init();
                    setTimeout(function () {
                        SEMICOLON.widget.init();
                        setTimeout(function () {
                            $('.css3-spinner').remove();
                        }, 10);
                    }, 10);
                }, 10);
            }, 10);
        }, 1000);
        $('#linked-to-gallery a').click(function () {
            var imageLink = $(this).attr('data-image');
            $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
            return false;
        });
    };
    HomePageComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().subscribe(function (res) {
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
        if (index === 0 || index === 1 || index === 11 || index === 12) {
            return "col-lg-6";
        }
        return "col-lg-4";
    };
    HomePageComponent.prototype.initProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (res) {
            _this.initFeaturedRentalProducts(res);
        });
    };
    HomePageComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home-page',
            templateUrl: './home-page.component.html',
            styleUrls: ['./home-page.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            CategoryService,
            ProductService])
    ], HomePageComponent);
    return HomePageComponent;
}());
export { HomePageComponent };
//# sourceMappingURL=home-page.component.js.map