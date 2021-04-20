import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { LocationDateService } from './location-date.service';
import { OrderService } from './order.service';
import { DeliveryChartService } from './delivery-chart.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
let InitializerService = class InitializerService {
    constructor(locationService, deliveryService, orderService) {
        this.locationService = locationService;
        this.deliveryService = deliveryService;
        this.orderService = orderService;
        this._initialized = new BehaviorSubject(false);
    }
    get orderModel() {
        return this._orderModel;
    }
    set orderModel(value) {
        this._orderModel = value;
    }
    initialize() {
        return this.orderService.initOrderedData().then(res => {
            if (res) {
                let now = new Date();
                this.orderModel = res;
                this._initialized.next(true);
                if (res.startDate && res.endDate && location && !(res.startDate.getTime() - now.getTime() < 54000000)) {
                    this.locationService.setLocationDate(res.startDate, res.endDate, res.zipCode);
                }
            }
            return true;
        });
    }
    get initialized() {
        return this._initialized;
    }
};
InitializerService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [LocationDateService,
        DeliveryChartService,
        OrderService])
], InitializerService);
export { InitializerService };
//# sourceMappingURL=initializer.service.js.map