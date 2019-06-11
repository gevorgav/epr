import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { LocationDateService } from '../../shared/services/location-date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
import { OrderService } from '../../shared/services/order.service';
var LocationDateComponent = /** @class */ (function () {
    function LocationDateComponent(locationDateService, deliveryChartService, orderService) {
        this.locationDateService = locationDateService;
        this.deliveryChartService = deliveryChartService;
        this.orderService = orderService;
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.emitSubmit = new EventEmitter();
    }
    LocationDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationDateForm = new FormGroup({
            'zipCode': new FormControl(this.locationDateService.locationDate.getLocation(), [
                Validators.required
            ]),
            'startDate': new FormControl(this.locationDateService.locationDate.startDateTime, [
                Validators.required
            ]),
            'endDate': new FormControl(this.locationDateService.locationDate.endDateTime, [
                Validators.required
            ]),
        }, { validators: [identityRevealedValidator, identityTimeValidator] });
        this.deliveryChartService.getDeliveryLocations().subscribe(function (res) {
            _this.allDeliveryCharts = res;
            _this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.locationDateForm.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value.zipCode); }));
    };
    LocationDateComponent.prototype._filterGroup = function (value) {
        if (value) {
            var filterValue_1 = value.toLowerCase();
            return this.stateGroups.filter(function (option) { return option.toLowerCase().includes(filterValue_1); });
        }
        return this.stateGroups;
    };
    LocationDateComponent.prototype.onSubmit = function () {
        if (this.locationDateForm.valid) {
            if (this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value)) {
                this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.getZipCode(this.locationDateForm.get('zipCode').value));
                this.orderService.setOrderDateLocation(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.getZipCode(this.locationDateForm.get('zipCode').value));
                this.locationDateService.setIsSpecified(true);
                this.emitSubmit.emit(true);
            }
            else {
                //@ts-ignore
                this.locationDateForm.errors = { incorrectZipLocation: true };
            }
        }
    };
    LocationDateComponent.prototype.edit = function () {
        this.locationDateService.setIsSpecified(false);
    };
    LocationDateComponent.prototype.checkCityOrZipCode = function (value) {
        var isCorrect = false;
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                if (value.indexOf(zipCode.zipCode) > -1) {
                    isCorrect = true;
                    break;
                }
            }
        }
        return isCorrect;
    };
    LocationDateComponent.prototype.getZipCode = function (value) {
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                if (value.indexOf(zipCode.zipCode) > -1) {
                    zipCode.location = value;
                    return zipCode;
                }
            }
        }
    };
    LocationDateComponent.prototype.initAutoCompleteOptions = function () {
        var _a;
        var zipCodeNames = [];
        for (var _i = 0, _b = this.allDeliveryCharts; _i < _b.length; _i++) {
            var city = _b[_i];
            for (var _c = 0, _d = city.zipCodes; _c < _d.length; _c++) {
                var zipCode = _d[_c];
                zipCodeNames.push(city.city + ' ' + zipCode.zipCode);
            }
        }
        (_a = this.stateGroups).push.apply(_a, zipCodeNames);
    };
    LocationDateComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
    };
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], LocationDateComponent.prototype, "emitSubmit", void 0);
    LocationDateComponent = tslib_1.__decorate([
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
    var startDate = control.get('startDate');
    var endDate = control.get('endDate');
    return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? { 'identityRevealed': true } : null;
};
export var identityTimeValidator = function (control) {
    var startDate = control.get('startDate');
    var now = new Date();
    return startDate.value && (startDate.value.getTime() - now.getTime() < 54000000) ? { 'identityTime': true } : null;
};
//# sourceMappingURL=location-date.component.js.map