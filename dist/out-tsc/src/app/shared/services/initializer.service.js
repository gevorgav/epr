import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LocationDateService } from './location-date.service';
import { OrderService } from './order.service';
import { map } from 'rxjs/operators';
import { DeliveryChartService } from './delivery-chart.service';
var InitializerService = /** @class */ (function () {
    function InitializerService(locationService, deliveryService, orderService) {
        this.locationService = locationService;
        this.deliveryService = deliveryService;
        this.orderService = orderService;
    }
    Object.defineProperty(InitializerService.prototype, "orderModel", {
        get: function () {
            return this._orderModel;
        },
        set: function (value) {
            this._orderModel = value;
        },
        enumerable: true,
        configurable: true
    });
    InitializerService.prototype.initialize = function () {
        var _this = this;
        return this.orderService.initOrderedData().pipe(map(function (res) {
            var now = new Date();
            if (res.startDate && res.endDate && location && !(res.startDate.getTime() - now.getTime() < 54000000)) {
                _this.locationService.setLocationDate(res.startDate, res.endDate, res.zipCode);
            }
            _this.orderModel = res;
            return true;
        }));
    };
    InitializerService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LocationDateService,
            DeliveryChartService,
            OrderService])
    ], InitializerService);
    return InitializerService;
}());
export { InitializerService };
//# sourceMappingURL=initializer.service.js.map