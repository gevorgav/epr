import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
import { FormBuilder } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
let DeliveryChartComponent = class DeliveryChartComponent {
    constructor(deliveryChartService, fb) {
        this.deliveryChartService = deliveryChartService;
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.deliveryChartsSearch = [];
    }
    ngOnInit() {
        this.deliveryChartService.getDeliveryLocations().then((res) => {
            this.deliveryChartsSearch = this.allDeliveryCharts = res;
            this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(startWith(''), map(value => this._filterGroup(value)));
    }
    ngAfterViewInit() {
        this.stateForm.valueChanges.subscribe(res => {
            this.valueChange(res.stateGroup);
        });
    }
    _filterGroup(value) {
        if (value) {
            return this.stateGroups
                .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
                .filter(group => group.names.length > 0);
        }
        return this.stateGroups;
    }
    valueChange(value) {
        this.deliveryChartsSearch = [];
        if (value == "" || value == null || value == undefined) {
            this.deliveryChartsSearch = this.allDeliveryCharts;
        }
        else {
            for (let city of this.allDeliveryCharts) {
                if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    this.deliveryChartsSearch.push(city);
                }
                else {
                    for (let zipCode of city.zipCodes) {
                        if (zipCode.zipCode.indexOf(value) > -1) {
                            this.deliveryChartsSearch.push(city);
                            break;
                        }
                    }
                }
            }
        }
    }
    initAutoCompleteOptions() {
        let cityNames = [];
        let zipCodeNames = [];
        for (let city of this.allDeliveryCharts) {
            cityNames.push(city.city);
            for (let zipCode of city.zipCodes) {
                zipCodeNames.push(zipCode.zipCode);
            }
        }
        let cities = { letter: 'Cities', names: cityNames };
        let zipCodes = { letter: 'Zip codes', names: zipCodeNames };
        this.stateGroups.push(cities, zipCodes);
    }
};
DeliveryChartComponent = __decorate([
    Component({
        selector: 'app-delivery-cart',
        templateUrl: './delivery-chart.component.html',
        styleUrls: ['./delivery-chart.component.css']
    }),
    __metadata("design:paramtypes", [DeliveryChartService, FormBuilder])
], DeliveryChartComponent);
export { DeliveryChartComponent };
export const _filter = (opt, value) => {
    const filterValue = value.toLowerCase();
    return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};
//# sourceMappingURL=delivery-chart.component.js.map