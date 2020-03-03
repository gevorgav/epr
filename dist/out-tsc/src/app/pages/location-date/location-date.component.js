import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { LocationDateService } from '../../shared/services/location-date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
import { OrderService } from '../../shared/services/order.service';
import * as moment from 'moment';
import { of } from 'rxjs';
import { debounceTime, finalize, flatMap, map, startWith, tap } from 'rxjs/operators';
var LocationDateComponent = /** @class */ (function () {
    function LocationDateComponent(locationDateService, deliveryChartService, orderService) {
        this.locationDateService = locationDateService;
        this.deliveryChartService = deliveryChartService;
        this.orderService = orderService;
        this.stateGroupOptions = of([]);
        this.allDeliveryCharts = [];
        this.isLoading = false;
        this.emitSubmit = new EventEmitter();
    }
    LocationDateComponent_1 = LocationDateComponent;
    LocationDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initForm();
        this.stateGroupOptions = this.locationDateForm.get('zipCode').valueChanges
            .pipe(debounceTime(300), startWith(''), tap(function () { return _this.isLoading = true; }), flatMap(function (value) { return _this._filterGroup(value)
            .pipe(finalize(function () { return _this.isLoading = false; })); }));
    };
    LocationDateComponent.prototype._filterGroup = function (value) {
        if (value) {
            var city = value.match(/[a-zA-Z]+/g);
            var zipCode = value.match(/\d+/g);
            if (city && !zipCode) {
                return this.getByCity(city[0].charAt(0).toUpperCase() + city[0].slice(1));
            }
            else if (zipCode && zipCode[0].length > 2) {
                return this.getByZipCodeAndCity(zipCode, city ? city[0].charAt(0).toUpperCase() + city[0].slice(1) : null);
            }
        }
        return of([]);
    };
    LocationDateComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.locationDateForm.valid) {
            this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value).subscribe(function (res) {
                if (res) {
                    var finalStartDate_1 = LocationDateComponent_1.getTimeWithDateTime(_this.locationDateForm.get('startDate').value, _this.locationDateForm.get('startDateTime').value);
                    var finalEndDate_1 = LocationDateComponent_1.getTimeWithDateTime(_this.locationDateForm.get('endDate').value, _this.locationDateForm.get('endDateTime').value);
                    _this.getZipCode(_this.locationDateForm.get('zipCode').value).subscribe(function (zipCode) {
                        _this.locationDateService.setLocationDate(finalStartDate_1, finalEndDate_1, zipCode);
                        _this.orderService.setOrderDateLocation(finalStartDate_1, finalEndDate_1, zipCode);
                        _this.locationDateService.setIsSpecified(true);
                        _this.emitSubmit.emit(true);
                    });
                }
                else {
                    _this.locationDateForm.setErrors({ incorrectZipLocation: true });
                }
            });
        }
    };
    LocationDateComponent.prototype.edit = function () {
        this.locationDateService.setIsSpecified(false);
    };
    LocationDateComponent.prototype.checkCityOrZipCode = function (value) {
        var city = value.match(/[a-zA-Z]+/g);
        var zipCode = value.match(/\d+/g);
        return this.deliveryChartService.getDeliveryLocationByZipCode(zipCode[0]).pipe(map(function (res) { return city.join(' ') === res.city; }));
    };
    LocationDateComponent.prototype.getZipCode = function (value) {
        var zipCode = value.match(/\d+/g);
        var city = value.match(/[a-zA-Z]+/g).join(" ");
        return this.deliveryChartService.getZipCodeModelByZipCode(zipCode[0]).pipe(map(function (res) {
            res.location = city + " " + res.zipCode;
            return res;
        }));
    };
    LocationDateComponent.prototype.getAutoCompleteOptions = function () {
        var zipCodeNames = [];
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                zipCodeNames.push(city.city + ' ' + zipCode.zipCode);
            }
        }
        return zipCodeNames;
    };
    LocationDateComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
    };
    LocationDateComponent.prototype.getByCity = function (city) {
        var _this = this;
        return this.deliveryChartService.getDeliveryLocationByCity(city).pipe(map(function (res) {
            return _this.initDeliveryList(res);
        }));
    };
    LocationDateComponent.prototype.initDeliveryList = function (res) {
        this.allDeliveryCharts = res;
        return this.getAutoCompleteOptions();
    };
    LocationDateComponent.prototype.getByZipCodeAndCity = function (zipCode, city) {
        var _this = this;
        return this.deliveryChartService.getDeliveryLocationsByZipCodeSearch(zipCode[0], city).pipe(map(function (res) {
            return _this.initDeliveryList(res);
        }));
    };
    LocationDateComponent.getTimeWithDateTime = function (date, time) {
        if (date.toLocaleDateString().indexOf('.') >= 0) {
            var replaceDate = date.toLocaleDateString().split(".").join("-");
            return moment(replaceDate + " " + time, 'DD-MM-YYYY hh:mm A').toDate();
        }
        return moment(date.toLocaleDateString() + " " + time, 'MM-DD-YYYY hh:mm A').toDate();
    };
    LocationDateComponent.prototype.initForm = function () {
        this.locationDateForm = new FormGroup({
            'zipCode': new FormControl(this.locationDateService.locationDate.getLocation(), [
                Validators.required
            ]),
            'startDate': new FormControl(this.locationDateService.locationDate.startDateTime, [
                Validators.required
            ]),
            'startDateTime': new FormControl(this.locationDateService.locationDate.startDateTime ?
                this.locationDateService.locationDate.startDateTime.toLocaleTimeString() : null, [
                Validators.required
            ]),
            'endDateTime': new FormControl(this.locationDateService.locationDate.endDateTime ?
                this.locationDateService.locationDate.endDateTime.toLocaleTimeString() : null, [
                Validators.required
            ]),
            'endDate': new FormControl(this.locationDateService.locationDate.endDateTime, [
                Validators.required
            ]),
        }, { validators: [identityRevealedValidator, identityTimeValidator] });
    };
    var LocationDateComponent_1;
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationDateComponent.prototype, "emitSubmit", void 0);
    LocationDateComponent = LocationDateComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'app-location-date',
            templateUrl: './location-date.component.html',
            styleUrls: ['./location-date.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [LocationDateService,
            DeliveryChartService,
            OrderService])
    ], LocationDateComponent);
    return LocationDateComponent;
}());
export { LocationDateComponent };
export var identityRevealedValidator = function (control) {
    if (!control.get('startDate').value || !control.get('startDateTime').value ||
        !control.get('endDate').value || !control.get('endDateTime').value) {
        return null;
    }
    var finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value, control.get('startDateTime').value);
    var finalEndDate = LocationDateComponent.getTimeWithDateTime(control.get('endDate').value, control.get('endDateTime').value);
    return (finalEndDate.getTime() - finalStartDate.getTime() < 0) ? { 'identityRevealed': true } : null;
};
export var identityTimeValidator = function (control) {
    if (!control.get('startDate').value || !control.get('startDateTime').value) {
        return null;
    }
    var finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value, control.get('startDateTime').value);
    var now = new Date();
    return (finalStartDate.getTime() - now.getTime() < 54000000) ? { 'identityTime': true } : null;
};
//# sourceMappingURL=location-date.component.js.map