import * as tslib_1 from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { LocationDateService } from '../../shared/services/location-date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { _filter } from '../delivery-chart/delivery-chart.component';
import { map, startWith } from 'rxjs/operators';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
var LocationDateComponent = /** @class */ (function () {
    function LocationDateComponent(locationDateService, deliveryChartService) {
        this.locationDateService = locationDateService;
        this.deliveryChartService = deliveryChartService;
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.emitSubmit = new EventEmitter();
    }
    LocationDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationDateForm = new FormGroup({
            'zipCode': new FormControl(this.locationDateService.locationDate.location, [
                Validators.required
            ]),
            'startDate': new FormControl(this.locationDateService.locationDate.startDateTime, [
                Validators.required
            ]),
            'endDate': new FormControl(this.locationDateService.locationDate.endDateTime, [
                Validators.required
            ]),
        }, { validators: identityRevealedValidator });
        this.deliveryChartService.getDeliveryLocations().subscribe(function (res) {
            _this.allDeliveryCharts = res;
            _this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.locationDateForm.valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value.zipCode); }));
    };
    LocationDateComponent.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    LocationDateComponent.prototype.onSubmit = function () {
        if (this.locationDateForm.valid) {
            if (this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value)) {
                this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.locationDateForm.get('zipCode').value);
                this.locationDateService.isSpecified = true;
                this.emitSubmit.emit(true);
            }
            else {
                //@ts-ignore
                this.locationDateForm.errors = { incorrectZipLocation: true };
            }
        }
    };
    LocationDateComponent.prototype.edit = function () {
        this.locationDateService.isSpecified = false;
    };
    LocationDateComponent.prototype.checkCityOrZipCode = function (value) {
        var isCorrect = false;
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                isCorrect = true;
                break;
            }
            else {
                for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                    var zipCode = _c[_b];
                    if (zipCode.zipCode.indexOf(value) > -1) {
                        isCorrect = true;
                        break;
                    }
                }
            }
        }
        return isCorrect;
    };
    LocationDateComponent.prototype.initAutoCompleteOptions = function () {
        var cityNames = [];
        var zipCodeNames = [];
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            cityNames.push(city.city);
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                zipCodeNames.push(zipCode.zipCode);
            }
        }
        var cities = { letter: 'Cities', names: cityNames };
        var zipCodes = { letter: 'Zip codes', names: zipCodeNames };
        this.stateGroups.push(cities, zipCodes);
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
            DeliveryChartService])
    ], LocationDateComponent);
    return LocationDateComponent;
}());
export { LocationDateComponent };
export var identityRevealedValidator = function (control) {
    var zipCode = control.get('zipCode');
    var startDate = control.get('startDate');
    var endDate = control.get('endDate');
    return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? { 'identityRevealed': true } : null;
};
//# sourceMappingURL=location-date.component.js.map