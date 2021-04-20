import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
let DashboardComponent = class DashboardComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.items = [
            { routerLink: 'shipping', name: 'Rental requests', isActive: true },
            { routerLink: 'shipped', name: 'Shipped Rentals', isActive: false },
            { routerLink: 'product', name: 'Product', isActive: false },
            { routerLink: 'delivery-chart', name: 'Delivery Chart', isActive: false },
            { routerLink: 'category', name: 'Category', isActive: false },
            { routerLink: 'settings', name: 'Settings', isActive: false },
            { routerLink: 'user', name: 'User', isActive: false },
            { routerLink: 'additional', name: 'Additional', isActive: false },
            { routerLink: 'additional-category', name: 'Additional Category', isActive: false },
        ];
    }
    ngOnInit() {
        this.selectTab(this.items[0]);
    }
    selectTab(item) {
        this.setFalse();
        item.isActive = true;
        this.router.navigateByUrl('dashboard/' + item.routerLink);
    }
    setFalse() {
        this.items.forEach(value => value.isActive = false);
    }
};
DashboardComponent = __decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map