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