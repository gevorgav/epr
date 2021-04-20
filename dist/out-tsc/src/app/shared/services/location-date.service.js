import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { DeliveryChartService } from './delivery-chart.service';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
let LocationDateService = class LocationDateService {
    constructor(deliveryService) {
        this.deliveryService = deliveryService;
        this._isSpecified = new BehaviorSubject(false);
        this._locationDate = new LocationDate(null, null, null);
    }
    setLocationDate(start, end, location) {
        let now = new Date();
        if (start && end && location && !(start.getTime() - now.getTime() < 54000000)) {
            this._locationDate = new LocationDate(start, end, location);
            this.setIsSpecified(true);
        }
    }
    reset() {
        this._locationDate = null;
        this.setIsSpecified(false);
    }
    get locationDate() {
        return this._locationDate;
    }
    get isSpecified() {
        return this._isSpecified;
    }
    setIsSpecified(value) {
        this._isSpecified.next(value);
    }
    getShippingPriceByZipCode(zipCode) {
        return this.deliveryService.getDeliveryLocationByZipCode(zipCode).then((res) => {
            return res.price;
        });
    }
    getShippingPrice() {
        return this.getShippingPriceByZipCode(this._locationDate.location.zipCode);
    }
    getCalculation(nightPrice, minPrice, minTime, price) {
        return this.isSpecified.pipe(map(res => {
            if (res) {
                let night = 0;
                let hours = 0;
                let calculatedPrice = 0;
                let days = this.getDates();
                if (days.length === 1) {
                    hours = this.locationDate.endDateTime.getHours() - this.locationDate.startDateTime.getHours();
                }
                else {
                    for (let day of days) {
                        if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length - 1) {
                            hours += this.getFutureHours(9).length;
                            night += 1;
                        }
                        else if (days.indexOf(day) === 0) {
                            hours += this.getFutureHours(day.getHours()).length;
                            if (days.length > 1) {
                                night += 1;
                            }
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
            }
            else {
                return 0;
            }
        }));
    }
    getFutureHours(hour) {
        let futureHours = [];
        for (let i = hour; i <= 21; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    }
    getLastDayHours(hour) {
        let futureHours = [];
        for (let i = 9; i < hour; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    }
    getDates() {
        let dates = [], currentDate = this._locationDate.startDateTime, addDays = function (days) {
            let date = new Date(this.valueOf());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= this._locationDate.endDateTime) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    }
};
LocationDateService = __decorate([
    Injectable({
        providedIn: "root"
    }),
    __metadata("design:paramtypes", [DeliveryChartService])
], LocationDateService);
export { LocationDateService };
export class LocationDate {
    constructor(startDateTime, endDateTime, location) {
        this._startDateTime = startDateTime;
        this._endDateTime = endDateTime;
        this._location = location;
    }
    get startDateTime() {
        return this._startDateTime;
    }
    set startDateTime(value) {
        this._startDateTime = value;
    }
    get endDateTime() {
        return this._endDateTime;
    }
    set endDateTime(value) {
        this._endDateTime = value;
    }
    get location() {
        return this._location;
    }
    getLocation() {
        return this._location ? this._location.location : null;
    }
    set location(value) {
        this._location = value;
    }
}
//# sourceMappingURL=location-date.service.js.map