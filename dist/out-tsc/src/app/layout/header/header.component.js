import { __decorate, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParseService } from '../../shared/services/parse.service';
import { CategoryService } from '../../shared/services/category.service';
import { InitializerService } from '../../shared/services/initializer.service';
let HeaderComponent = class HeaderComponent {
    constructor(route, router, parseService, initializerService, categoryService) {
        this.route = route;
        this.router = router;
        this.parseService = parseService;
        this.initializerService = initializerService;
        this.categoryService = categoryService;
        this.isAdmin = false;
        this.categories = [];
        this.fixHeader = false;
        this.top = false;
    }
    ngOnInit() {
        this.initCategories();
        this.parseService.isAdmin().subscribe(isAdmin => {
            this.isAdmin = isAdmin;
        });
        this.parseService.$loginSubject.subscribe(res => {
            if (res === false) {
                this.isAdmin = res;
            }
            else {
                this.parseService.isAdmin().subscribe(isAdmin => {
                    this.isAdmin = isAdmin;
                });
            }
        });
        if (window.innerWidth && window.innerWidth < 990) {
            this.toggle = false;
        }
    }
    getCartCount() {
        if (this.getOrderModel()) {
            return this.initializerService.orderModel.orderItems.length;
        }
    }
    showCart() {
        if (this.getOrderModel()) {
            return !!this.initializerService.orderModel.orderItems;
        }
    }
    getOrderModel() {
        return this.initializerService.orderModel;
    }
    ngAfterViewInit() { }
    isLogin() {
        return this.parseService.isAuth();
    }
    getCurrentUser() {
        return this.parseService.getCurrentUser().getUsername();
    }
    logout() {
        this.parseService.logOut().subscribe(res => {
            this.router.navigate(["login"]).then(res => {
                location.reload();
            });
        });
    }
    initCategories() {
        this.categoryService.getCategories().then(res => {
            this.categories = res;
        });
    }
    getHeaderClass() {
        return this.fixHeader ? ["full-header", "sticky-header"] : ["full-header"];
    }
    scrollTop() {
        (function smoothscroll() {
            let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    toggleMenu() {
        this.toggle = !!!this.toggle;
    }
    search() {
        this.router.navigate(["search", this.searchText]);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "fixHeader", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], HeaderComponent.prototype, "top", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ParseService,
        InitializerService,
        CategoryService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map