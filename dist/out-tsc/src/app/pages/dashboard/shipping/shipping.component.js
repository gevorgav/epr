import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ShippingHttpService } from '../../../shared/services/shipping-http.service';
import { ShippingPopupComponent } from './shipping-popup/shipping-popup.component';
var ShippingComponent = /** @class */ (function () {
    function ShippingComponent(_shippingService, dialog) {
        this._shippingService = _shippingService;
        this.dialog = dialog;
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
    ShippingComponent.prototype.openViewDetails = function (id) {
        var shippingInfoModel = this.getShippingModelById(id);
        this.dialog.open(ShippingPopupComponent, {
            data: {
                shippingInfoModel: shippingInfoModel
            },
            width: '80%',
            height: '95%'
        });
    };
    ShippingComponent.prototype.getShippingModelById = function (id) {
        return this.shippingModels.find(function (value) { return value.id === id; });
    };
    ShippingComponent = tslib_1.__decorate([
        Component({
            selector: 'app-shipping',
            templateUrl: './shipping.component.html',
            styleUrls: ['./shipping.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ShippingHttpService,
            MatDialog])
    ], ShippingComponent);
    return ShippingComponent;
}());
export { ShippingComponent };
//# sourceMappingURL=shipping.component.js.map