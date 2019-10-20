import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ShippingHttpService } from '../../../shared/services/shipping-http.service';
var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(_shippingService) {
        this._shippingService = _shippingService;
        this.shippingModels = [];
        this.dataSource = new MatTableDataSource(this.shippingModels);
        this.displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details', 'ship off'];
    }
    ShippingComponent.prototype.ngOnInit = function () {
        this.initShipping();
    };
    ShippingComponent.prototype.initShipping = function () {
        var _this = this;
        this._shippingService.loadPayed().subscribe(function (res) {
            _this.shippingModels = res;
            _this.dataSource = new MatTableDataSource(_this.shippingModels);
        });
    };
    ShippingComponent.prototype.setShipped = function (id) {
        var _this = this;
        this._shippingService.setShipped(id, true).subscribe(function (res) {
            _this.initShipping();
        });
    };
    ShippingComponent.prototype.getProductWithCount = function (element, product) {
        var text = '';
        for (var _i = 0, _a = element.productCount; _i < _a.length; _i++) {
            var prodCount = _a[_i];
            if (prodCount.productId === product.id) {
                text = product.name + ' -_-    how many: ' + prodCount.count;
            }
        }
        return text;
    };
    ShippingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shipping',
            templateUrl: './shipping.component.html',
            styleUrls: ['./shipping.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShippingHttpService])
    ], ShippingComponent);
    return ShippingComponent;
}());
export { ShippingComponent };
//# sourceMappingURL=shipping.component.js.map