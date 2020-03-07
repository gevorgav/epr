import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, activatedRoute) {
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
    DashboardComponent.prototype.ngOnInit = function () {
        this.selectTab(this.items[0]);
    };
    DashboardComponent.prototype.selectTab = function (item) {
        this.setFalse();
        item.isActive = true;
        this.router.navigateByUrl('dashboard/' + item.routerLink);
    };
    DashboardComponent.prototype.setFalse = function () {
        this.items.forEach(function (value) { return value.isActive = false; });
    };
    DashboardComponent = tslib_1.__decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ActivatedRoute])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map