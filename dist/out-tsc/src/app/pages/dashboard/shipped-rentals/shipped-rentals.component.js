import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ShippingHttpService } from '../../../shared/services/shipping-http.service';
import { MatTableDataSource } from "@angular/material/table";
let ShippedRentalsComponent = class ShippedRentalsComponent {
    constructor(_shippingService) {
        this._shippingService = _shippingService;
        this.shippingModels = [];
        this.panelOpenState = false;
        this.dataSource = new MatTableDataSource(this.shippingModels);
        this.displayedColumns = ['orderId', 'endDate', 'zipCode', 'address/street', 'paid', 'details'];
    }
    ngOnInit() {
        this.initShipping();
    }
    initShipping() {
        this._shippingService.loadShipped().then(res => {
            this.shippingModels = res;
            this.dataSource = new MatTableDataSource(this.shippingModels);
        });
    }
    getProductWithCount(element, product) {
        let text = '';
        for (let prodCount of element.productCount) {
            if (prodCount.productId === product.id) {
                text = product.name + ' -_-    how many: ' + prodCount.count;
            }
        }
        return text;
    }
};
ShippedRentalsComponent = __decorate([
    Component({
        selector: 'app-shipped-rentals',
        templateUrl: './shipped-rentals.component.html',
        styleUrls: ['./shipped-rentals.component.css']
    }),
    __metadata("design:paramtypes", [ShippingHttpService])
], ShippedRentalsComponent);
export { ShippedRentalsComponent };
//# sourceMappingURL=shipped-rentals.component.js.map