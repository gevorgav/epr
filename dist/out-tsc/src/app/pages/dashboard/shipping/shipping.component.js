import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { ShippingHttpService } from '../../../shared/services/shipping-http.service';
import { ShippingPopupComponent } from './shipping-popup/shipping-popup.component';
let ShippingComponent = class ShippingComponent {
    constructor(_shippingService, dialog) {
        this._shippingService = _shippingService;
        this.dialog = dialog;
        this.shippingModels = [];
        this.dataSource = new MatTableDataSource(this.shippingModels);
        this.displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details', 'ship off'];
    }
    ngOnInit() {
        this.initShipping();
    }
    initShipping() {
        this._shippingService.loadPayed().subscribe(res => {
            this.shippingModels = res;
            this.dataSource = new MatTableDataSource(this.shippingModels);
        });
    }
    setShipped(id) {
        this._shippingService.setShipped(id, true).subscribe(res => {
            this.initShipping();
        });
    }
    openViewDetails(id) {
        let shippingInfoModel = this.getShippingModelById(id);
        this.dialog.open(ShippingPopupComponent, {
            data: {
                shippingInfoModel
            },
            width: '80%',
            height: '95%'
        });
    }
    getShippingModelById(id) {
        return this.shippingModels.find(value => value.id === id);
    }
};
ShippingComponent = __decorate([
    Component({
        selector: 'app-shipping',
        templateUrl: './shipping.component.html',
        styleUrls: ['./shipping.component.css']
    }),
    __metadata("design:paramtypes", [ShippingHttpService,
        MatDialog])
], ShippingComponent);
export { ShippingComponent };
//# sourceMappingURL=shipping.component.js.map