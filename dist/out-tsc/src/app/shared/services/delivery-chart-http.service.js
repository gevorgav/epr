var DeliveryChartHttpService_1;
import { __decorate, __metadata } from "tslib";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { DeliveryChartService } from './delivery-chart.service';
import { Injectable } from '@angular/core';
import { DeliveryChartModel, ZipCode } from '../model/delivery-chart.model';
import { ParseService } from './parse.service';
import { OrderService } from './order.service';
import { of } from 'rxjs';
let DeliveryChartHttpService = DeliveryChartHttpService_1 = class DeliveryChartHttpService extends DeliveryChartService {
    constructor(parseService) {
        super();
        this.parseService = parseService;
    }
    getDeliveryLocationById(id) {
        return undefined;
    }
    getDeliveryLocationByZipCode(zipCode) {
        let zipCodeQuery = new this.parseService.parse.Query(OrderService.ZIP_CODE);
        zipCodeQuery.contains('zipCode', zipCode);
        let deliveryQuery = new this.parseService.parse.Query('DeliveryChart');
        deliveryQuery.matchesQuery('zipCode', zipCodeQuery);
        // let deliveryChartModel: DeliveryChartModel;
        return deliveryQuery.first().then((delivery) => {
            return new DeliveryChartModel(delivery['id'], delivery.attributes['city'], delivery.attributes['price'], null);
        }, (error) => {
            console.log(error);
        });
    }
    getDeliveryLocationsFromCash() {
        return null;
    }
    getDeliveryLocations() {
        let delivery = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        let query = new this.parseService.parse.Query(delivery);
        let deliveryCharts = [];
        return query.each(item => {
            let zipCodes = [];
            item.relation('zipCode').query().each(zip => {
                zipCodes.push(DeliveryChartHttpService_1.parseObjectToZipCode(zip));
            });
            deliveryCharts.push(new DeliveryChartModel(item['id'], item.attributes['city'], item.attributes['price'], null, zipCodes));
        }).then(() => deliveryCharts);
    }
    getDeliveryLocationByCity(city) {
        let delivery = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        let query = new this.parseService.parse.Query(delivery);
        let deliveryCharts = [];
        return query.contains('city', city).each(item => {
            let zipCodes = [];
            return item.relation('zipCode').query().each(zip => {
                zipCodes.push(DeliveryChartHttpService_1.parseObjectToZipCode(zip));
            }).then(() => {
                let deliveryChartModel = new DeliveryChartModel(item['id'], item.attributes['city'], item.attributes['price'], null, zipCodes);
                deliveryCharts.push(deliveryChartModel);
            });
        }).then((deliveryChart) => deliveryCharts);
    }
    static parseObjectToZipCode(parseObject) {
        return new ZipCode(parseObject.id, parseObject.attributes['zipCode']);
    }
    static forOne(parseObject) {
        let items = [];
        for (let item of parseObject) {
            items.push(DeliveryChartHttpService_1.parseObjectToZipCode(item));
        }
        return items;
    }
    deleteDeliveryChart(id) {
        const DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        const query = new this.parseService.parse.Query(DeliveryChart);
        query.equalTo("objectId", id);
        return query.first().then((result) => {
            result.relation('zipCode').query().find().then(items => {
                items.forEach(item => item.destroy());
            });
            return result.destroy();
        });
    }
    saveDeliveryChart(model) {
        const DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        let delivery = new DeliveryChart();
        let zipCodes = this.setZipCodeFields(model.zipCodes);
        // zipCode.set('zipCode', model.zipCodes[0].zipCode);
        this.setDeliveryChartFields(delivery, model);
        let promise;
        let _this = this;
        if (model.id) {
            const query = new this.parseService.parse.Query(DeliveryChart);
            query.equalTo("objectId", model.id);
            promise = query.first().then(res => {
                this.setDeliveryChartFields(res, model);
                res.relation('zipCode').query().find().then(relatedItems => {
                    relatedItems.forEach(item => item.destroy());
                });
                return this.parseService.parse.Object.saveAll(zipCodes).then(() => {
                    zipCodes.forEach(item => res.relation('zipCode').add(item));
                    return res.save();
                });
            });
        }
        else {
            promise = this.parseService.parse.Object.saveAll(zipCodes).then(() => {
                zipCodes.forEach(item => delivery.relation('zipCode').add(item));
                return delivery.save();
            });
        }
        return promise;
    }
    setDeliveryChartFields(deliveryChart, model) {
        deliveryChart.set('id', model.id);
        deliveryChart.set('city', model.city);
        deliveryChart.set('price', model.price);
        deliveryChart.set('locationId', model.locationId);
    }
    setZipCodeFields(zipCodes) {
        const ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.ZIP_CODE);
        let res = [];
        // zipCodes = zipCodes.filter(item => !item.id);
        for (let code of zipCodes) {
            let zipCode = new ZipCode();
            zipCode.set('zipCode', code.zipCode);
            res.push(zipCode);
        }
        return res;
    }
    syncDeliveryChart() {
        let deliveries = [];
        let cities = new Map();
        for (let item of ss) {
            if (!cities.has(item.City)) {
                cities.set(item.City, item.price ? item.price : 0);
            }
        }
        let citiesArray = Array.from(cities.keys());
        for (let city of citiesArray) {
            let zipCodes = [];
            for (let item of ss) {
                if (item.City === city) {
                    zipCodes.push(new ZipCode(null, item['ZIP Code'].toString()));
                }
            }
            deliveries.push(new DeliveryChartModel(null, city, cities.get(city), null, zipCodes));
        }
        deliveries.forEach(res => {
            this.saveDeliveryChart(res);
        });
        return of(deliveries);
    }
    getDeliveryLocationsByZipCodeSearch(zipCode, city) {
        let zipCodeQuery = new this.parseService.parse.Query(OrderService.ZIP_CODE);
        zipCodeQuery.contains('zipCode', zipCode);
        let deliveries = [];
        return zipCodeQuery.each(zipCodeItem => {
            let deliveryQuery = new this.parseService.parse.Query('DeliveryChart');
            deliveryQuery.equalTo('zipCode', zipCodeItem);
            if (city) {
                deliveryQuery.contains('city', city);
            }
            return deliveryQuery.first().then((delivery) => {
                if (delivery) {
                    deliveries.push(new DeliveryChartModel(delivery['id'], delivery.attributes['city'], delivery.attributes['price'], null, [DeliveryChartHttpService_1.parseObjectToZipCode(zipCodeItem)]));
                }
            }).then(() => deliveries);
        }).then(() => deliveries);
    }
    getZipCodeModelByZipCode(zipCode) {
        let zipCodeQuery = new this.parseService.parse.Query(OrderService.ZIP_CODE);
        zipCodeQuery.equalTo('zipCode', zipCode);
        return zipCodeQuery.first().then(res => DeliveryChartHttpService_1.parseObjectToZipCode(res));
    }
};
DeliveryChartHttpService.DELIVERY_CHART = "DeliveryChart";
DeliveryChartHttpService.ZIP_CODE = "ZipCode";
DeliveryChartHttpService = DeliveryChartHttpService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], DeliveryChartHttpService);
export { DeliveryChartHttpService };
const ss = [];
//# sourceMappingURL=delivery-chart-http.service.js.map