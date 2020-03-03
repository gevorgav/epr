import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
import { FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
var DeliveryChartComponent = /** @class */ (function () {
    function DeliveryChartComponent(deliveryChartService, fb) {
        this.deliveryChartService = deliveryChartService;
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.deliveryChartsSearch = [];
    }
    DeliveryChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryChartService.getDeliveryLocations().subscribe(function (res) {
            _this.deliveryChartsSearch = _this.allDeliveryCharts = res;
            _this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(function (value) { return _this._filterGroup(value); }));
    };
    DeliveryChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stateForm.valueChanges.subscribe(function (res) {
            _this.valueChange(res.stateGroup);
        });
    };
    DeliveryChartComponent.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    DeliveryChartComponent.prototype.valueChange = function (value) {
        this.deliveryChartsSearch = [];
        if (value == "" || value == null || value == undefined) {
            this.deliveryChartsSearch = this.allDeliveryCharts;
        }
        else {
            for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
                var city = _a[_i];
                if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    this.deliveryChartsSearch.push(city);
                }
                else {
                    for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                        var zipCode = _c[_b];
                        if (zipCode.zipCode.indexOf(value) > -1) {
                            this.deliveryChartsSearch.push(city);
                            break;
                        }
                    }
                }
            }
        }
    };
    DeliveryChartComponent.prototype.initAutoCompleteOptions = function () {
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
    DeliveryChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-delivery-cart',
            templateUrl: './delivery-chart.component.html',
            styleUrls: ['./delivery-chart.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DeliveryChartService, FormBuilder])
    ], DeliveryChartComponent);
    return DeliveryChartComponent;
}());
export { DeliveryChartComponent };
export var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};
//# sourceMappingURL=delivery-chart.component.js.map