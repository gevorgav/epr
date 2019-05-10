import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var LocationDateService = /** @class */ (function () {
    function LocationDateService() {
        this._isSpecified = false;
        this._locationDate = new LocationDate(null, null, null);
    }
    LocationDateService.prototype.setLocationDate = function (start, end, location) {
        if (start && end && location) {
            this._locationDate = new LocationDate(start, end, location);
            this._isSpecified = true;
        }
    };
    LocationDateService.prototype.reset = function () {
        this._locationDate = null;
        this._isSpecified = false;
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
        set: function (value) {
            this._isSpecified = value;
        },
        enumerable: true,
        configurable: true
    });
    LocationDateService.prototype.getCalculation = function (nightPrice, minPrice, minTime, price) {
        var night = 0;
        var hours = 0;
        var calculatedPrice = 0;
        if (this.isSpecified) {
            var days = this.getDates();
            for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
                var day = days_1[_i];
                if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length - 1) {
                    hours += this.getFutureHours(9).length;
                    night += 1;
                }
                else if (days.indexOf(day) === 0) {
                    hours += this.getFutureHours(day.getHours()).length;
                }
                else if (days.indexOf(day) === days.length - 1) {
                    hours += this.getLastDayHours(this._locationDate.endDateTime.getHours()).length;
                }
            }
        }
        if (hours > minTime) {
            hours = hours - minTime;
            calculatedPrice = nightPrice * night + price * hours + minPrice;
            return calculatedPrice;
        }
        return minPrice;
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
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
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
    return LocationDate;
}());
export { LocationDate };
//# sourceMappingURL=location-date.service.js.map