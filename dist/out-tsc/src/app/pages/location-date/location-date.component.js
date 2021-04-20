var LocationDateComponent_1;
import { __decorate, __metadata } from "tslib";
import { Component, EventEmitter, Output } from '@angular/core';
import { LocationDateService } from '../../shared/services/location-date.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DeliveryChartService } from '../../shared/services/delivery-chart.service';
import { OrderService } from '../../shared/services/order.service';
import * as moment from 'moment';
import { from, of } from 'rxjs';
import { debounceTime, finalize, first, flatMap, map, startWith, tap } from 'rxjs/operators';
let LocationDateComponent = LocationDateComponent_1 = class LocationDateComponent {
    constructor(locationDateService, deliveryChartService, orderService) {
        this.locationDateService = locationDateService;
        this.deliveryChartService = deliveryChartService;
        this.orderService = orderService;
        this.stateGroupOptions = of([]);
        this.allDeliveryCharts = [];
        this.isLoading = false;
        this.emitSubmit = new EventEmitter();
    }
    ngOnInit() {
        this.initForm();
        this.stateGroupOptions = this.locationDateForm.get('zipCode').valueChanges
            .pipe(debounceTime(300), startWith(''), tap(() => this.isLoading = true), flatMap(value => this._filterGroup(value)
            .pipe(finalize(() => this.isLoading = false))));
    }
    _filterGroup(value) {
        if (value) {
            let city = value.match(/[a-zA-Z]+/g);
            let zipCode = value.match(/\d+/g);
            if (city && !zipCode) {
                return this.getByCity(city[0].charAt(0).toUpperCase() + city[0].slice(1));
            }
            else if (zipCode && zipCode[0].length > 2) {
                return this.getByZipCodeAndCity(zipCode, city ? city[0].charAt(0).toUpperCase() + city[0].slice(1) : null);
            }
        }
        return of([]);
    }
    onSubmit() {
        if (this.locationDateForm.valid) {
            this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value).then(res => {
                if (res) {
                    let finalStartDate = LocationDateComponent_1.getTimeWithDateTime(this.locationDateForm.get('startDate').value, this.locationDateForm.get('startDateTime').value);
                    let finalEndDate = LocationDateComponent_1.getTimeWithDateTime(this.locationDateForm.get('endDate').value, this.locationDateForm.get('endDateTime').value);
                    from(this.getZipCode(this.locationDateForm.get('zipCode').value)).pipe(first()).subscribe((zipCode) => {
                        this.locationDateService.setLocationDate(finalStartDate, finalEndDate, zipCode);
                        this.orderService.setOrderDateLocation(finalStartDate, finalEndDate, zipCode);
                        // this.locationDateService.setIsSpecified(true);
                        this.emitSubmit.emit(true);
                    });
                }
                else {
                    this.locationDateForm.setErrors({ incorrectZipLocation: true });
                }
            });
        }
    }
    edit() {
        this.locationDateService.setIsSpecified(false);
    }
    checkCityOrZipCode(value) {
        let city = value.match(/[a-zA-Z]+/g);
        let zipCode = value.match(/\d+/g);
        return this.deliveryChartService.getDeliveryLocationByZipCode(zipCode[0]).then(res => city.join(' ') === res.city);
    }
    getZipCode(value) {
        let zipCode = value.match(/\d+/g);
        let city = value.match(/[a-zA-Z]+/g).join(" ");
        return this.deliveryChartService.getZipCodeModelByZipCode(zipCode[0]).then(res => {
            res.location = city + " " + res.zipCode;
            return res;
        });
    }
    getAutoCompleteOptions() {
        let zipCodeNames = [];
        for (let city of this.allDeliveryCharts) {
            for (let zipCode of city.zipCodes) {
                zipCodeNames.push(city.city + ' ' + zipCode.zipCode);
            }
        }
        return zipCodeNames;
    }
    isSpecified() {
        return this.locationDateService.isSpecified;
    }
    getByCity(city) {
        return from(this.deliveryChartService.getDeliveryLocationByCity(city)).pipe(map(res => {
            return this.initDeliveryList(res);
        }));
    }
    initDeliveryList(res) {
        this.allDeliveryCharts = res;
        return this.getAutoCompleteOptions();
    }
    getByZipCodeAndCity(zipCode, city) {
        return from(this.deliveryChartService.getDeliveryLocationsByZipCodeSearch(zipCode[0], city)).pipe(map(res => {
            return this.initDeliveryList(res);
        }));
    }
    static getTimeWithDateTime(date, time) {
        if (date.toLocaleDateString().indexOf('.') >= 0) {
            let replaceDate = date.toLocaleDateString().split(".").join("-");
            return moment(replaceDate + " " + time, 'DD-MM-YYYY hh:mm A').toDate();
        }
        return moment(date.toLocaleDateString() + " " + time, 'MM-DD-YYYY hh:mm A').toDate();
    }
    initForm() {
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
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], LocationDateComponent.prototype, "emitSubmit", void 0);
LocationDateComponent = LocationDateComponent_1 = __decorate([
    Component({
        selector: 'app-location-date',
        templateUrl: './location-date.component.html',
        styleUrls: ['./location-date.component.css']
    }),
    __metadata("design:paramtypes", [LocationDateService,
        DeliveryChartService,
        OrderService])
], LocationDateComponent);
export { LocationDateComponent };
export const identityRevealedValidator = (control) => {
    if (!control.get('startDate').value || !control.get('startDateTime').value ||
        !control.get('endDate').value || !control.get('endDateTime').value) {
        return null;
    }
    const finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value, control.get('startDateTime').value);
    const finalEndDate = LocationDateComponent.getTimeWithDateTime(control.get('endDate').value, control.get('endDateTime').value);
    return (finalEndDate.getTime() - finalStartDate.getTime() < 0) ? { 'identityRevealed': true } : null;
};
export const identityTimeValidator = (control) => {
    if (!control.get('startDate').value || !control.get('startDateTime').value) {
        return null;
    }
    const finalStartDate = LocationDateComponent.getTimeWithDateTime(control.get('startDate').value, control.get('startDateTime').value);
    let now = new Date();
    return (finalStartDate.getTime() - now.getTime() < 54000000) ? { 'identityTime': true } : null;
};
//# sourceMappingURL=location-date.component.js.map