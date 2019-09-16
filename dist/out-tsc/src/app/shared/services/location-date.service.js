import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DeliveryChartService } from './delivery-chart.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
var LocationDateService = /** @class */ (function () {
    function LocationDateService(deliveryService) {
        this.deliveryService = deliveryService;
        this._isSpecified = new BehaviorSubject(false);
        this._locationDate = new LocationDate(null, null, null);
    }
    LocationDateService.prototype.setLocationDate = function (start, end, location) {
        var now = new Date();
        if (start && end && location && !(start.getTime() - now.getTime() < 54000000)) {
            this._locationDate = new LocationDate(start, end, location);
            this.setIsSpecified(true);
        }
    };
    LocationDateService.prototype.reset = function () {
        this._locationDate = null;
        this.setIsSpecified(false);
    };
    Object.defineProperty(LocationDateService.prototype, "locationDate", {
        get: function () {
            return this._locationDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDateService.prototype, "isSpecified", {
        get: function () {
            return this._isSpecified;
        },
        enumerable: true,
        configurable: true
    });
    LocationDateService.prototype.setIsSpecified = function (value) {
        this._isSpecified.next(value);
    };
    LocationDateService.prototype.getShippingPriceByZipCode = function (zipCode) {
        return this.deliveryService.getDeliveryLocationByZipCode(zipCode).pipe(map(function (res) {
            return res.price;
        }));
    };
    LocationDateService.prototype.getShippingPrice = function () {
        console.log(this._locationDate.location.zipCode);
        return this.getShippingPriceByZipCode(this._locationDate.location.zipCode);
    };
    LocationDateService.prototype.getCalculation = function (nightPrice, minPrice, minTime, price) {
        var _this = this;
        return this.isSpecified.pipe(map(function (res) {
            if (res) {
                var night = 0;
                var hours = 0;
                var calculatedPrice = 0;
                var days = _this.getDates();
                for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
                    var day = days_1[_i];
                    if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length - 1) {
                        hours += _this.getFutureHours(9).length;
                        night += 1;
                    }
                    else if (days.indexOf(day) === 0) {
                        hours += _this.getFutureHours(day.getHours()).length;
                    }
                    else if (days.indexOf(day) === days.length - 1) {
                        hours += _this.getLastDayHours(_this._locationDate.endDateTime.getHours()).length;
                    }
                }
                if (hours > minTime) {
                    hours = hours - minTime;
                    calculatedPrice = nightPrice * night + price * hours + minPrice;
                    return calculatedPrice;
                }
            }
            else {
                return 0;
            }
        }));
    };
    LocationDateService.prototype.getFutureHours = function (hour) {
        var futureHours = [];
        for (var i = hour; i <= 21; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    };
    LocationDateService.prototype.getLastDayHours = function (hour) {
        var futureHours = [];
        for (var i = 9; i < hour; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    };
    LocationDateService.prototype.getDates = function () {
        var dates = [], currentDate = this._locationDate.startDateTime, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= this._locationDate.endDateTime) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
    LocationDateService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [DeliveryChartService])
    ], LocationDateService);
    return LocationDateService;
}());
export { LocationDateService };
var LocationDate = /** @class */ (function () {
    function LocationDate(startDateTime, endDateTime, location) {
        this._startDateTime = startDateTime;
        this._endDateTime = endDateTime;
        this._location = location;
    }
    Object.defineProperty(LocationDate.prototype, "startDateTime", {
        get: function () {
            return this._startDateTime;
        },
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDate.prototype, "endDateTime", {
        get: function () {
            return this._endDateTime;
        },
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDate.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    LocationDate.prototype.getLocation = function () {
        return this._location ? this._location.location : null;
    };
    return LocationDate;
}());
export { LocationDate };
//# sourceMappingURL=location-date.service.js.map