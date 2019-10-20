import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ShippingHttpService } from '../../../shared/services/shipping-http.service';
var ShippedRentalsComponent = /** @class */ (function () {
    function ShippedRentalsComponent(_shippingService) {
        this._shippingService = _shippingService;
        this.shippingModels = [];
        this.dataSource = new MatTableDataSource(this.shippingModels);
        this.displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details'];
    }
    ShippedRentalsComponent.prototype.ngOnInit = function () {
        this.initShipping();
    };
    ShippedRentalsComponent.prototype.initShipping = function () {
        var _this = this;
        this._shippingService.loadShipped().subscribe(function (res) {
            _this.shippingModels = res;
            _this.dataSource = new MatTableDataSource(_this.shippingModels);
        });
    };
    ShippedRentalsComponent.prototype.getProductWithCount = function (element, product) {
        var text = '';
        for (var _i = 0, _a = element.productCount; _i < _a.length; _i++) {
            var prodCount = _a[_i];
            if (prodCount.productId === product.id) {
                text = product.name + ' -_-    how many: ' + prodCount.count;
            }
        }
        return text;
    };
    ShippedRentalsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shipped-rentals',
            templateUrl: './shipped-rentals.component.html',
            styleUrls: ['./shipped-rentals.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShippingHttpService])
    ], ShippedRentalsComponent);
    return ShippedRentalsComponent;
}());
export { ShippedRentalsComponent };
//# sourceMappingURL=shipped-rentals.component.js.map