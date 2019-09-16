import * as tslib_1 from "tslib";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { DeliveryChartService } from './delivery-chart.service';
import { Injectable } from '@angular/core';
import { DeliveryChartModel, ZipCode } from '../model/delivery-chart.model';
import { ParseService } from './parse.service';
import { from } from 'rxjs/internal/observable/from';
import { flatMap, map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { OrderService } from './order.service';
var DeliveryChartHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(DeliveryChartHttpService, _super);
    function DeliveryChartHttpService(parseService) {
        var _this_1 = _super.call(this) || this;
        _this_1.parseService = parseService;
        _this_1._deliveryLocations = [];
        return _this_1;
    }
    DeliveryChartHttpService_1 = DeliveryChartHttpService;
    DeliveryChartHttpService.prototype.getDeliveryLocationById = function (id) {
        return undefined;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationByZipCode = function (zipCode) {
        var zipCodeQuery = new this.parseService.parse.Query(OrderService.ZIP_CODE);
        zipCodeQuery.contains('zipCode', zipCode);
        var deliveryQuery = new this.parseService.parse.Query('DeliveryChart');
        deliveryQuery.matchesQuery('zipCode', zipCodeQuery);
        var promise = deliveryQuery.first().then(function (delivery) {
            return new DeliveryChartModel(delivery['id'], delivery.attributes['city'], delivery.attributes['price'], null);
        }, function (error) {
            console.log(error);
        });
        return from(promise);
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationsFromCash = function () {
        return null;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocations = function () {
        var delivery = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var query = new this.parseService.parse.Query(delivery);
        var promise = query.find().then(function (res) {
            return res;
        });
        return from(promise).pipe(map(function (res) {
            var deliveryLocations = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var delivery_1 = res_1[_i];
                var zip = from(delivery_1.relation('zipCode').query().find().then(function (zip) {
                    return DeliveryChartHttpService_1.forOne(zip);
                }));
                var deliveryLocation = new DeliveryChartModel(delivery_1['id'], delivery_1.attributes['city'], delivery_1.attributes['price'], zip);
                deliveryLocations.push(deliveryLocation);
            }
            return deliveryLocations;
        }), flatMap(function (deliveries) { return forkJoin(deliveries.map(function (deliveryFork) {
            return forkJoin(deliveryFork.$zipCodes).pipe(map(function (zipCodes) {
                deliveryFork.zipCodes = zipCodes[0];
                return deliveryFork;
            }));
        })); }));
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationByCity = function (city) {
        return undefined;
    };
    DeliveryChartHttpService.parseObjectToZipCode = function (parseObject) {
        return new ZipCode(parseObject.id, parseObject.attributes['zipCode']);
    };
    DeliveryChartHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(DeliveryChartHttpService_1.parseObjectToZipCode(item));
        }
        return items;
    };
    DeliveryChartHttpService.prototype.deleteDeliveryChart = function (id) {
        var DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var query = new this.parseService.parse.Query(DeliveryChart);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            result.relation('zipCode').query().find().then(function (items) {
                items.forEach(function (item) { return item.destroy(); });
            });
            return result.destroy();
        });
        return from(promise);
    };
    DeliveryChartHttpService.prototype.saveDeliveryChart = function (model) {
        var _this_1 = this;
        var DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var delivery = new DeliveryChart();
        var zipCodes = this.setZipCodeFields(model.zipCodes);
        // zipCode.set('zipCode', model.zipCodes[0].zipCode);
        this.setDeliveryChartFields(delivery, model);
        var promise;
        var _this = this;
        if (model.id) {
            var query = new this.parseService.parse.Query(DeliveryChart);
            query.equalTo("objectId", model.id);
            promise = query.first().then(function (res) {
                _this_1.setDeliveryChartFields(res, model);
                res.relation('zipCode').query().find().then(function (relatedItems) {
                    relatedItems.forEach(function (item) { return item.destroy(); });
                });
                return _this_1.parseService.parse.Object.saveAll(zipCodes).then(function () {
                    zipCodes.forEach(function (item) { return res.relation('zipCode').add(item); });
                    return res.save();
                });
            });
        }
        else {
            promise = this.parseService.parse.Object.saveAll(zipCodes).then(function () {
                zipCodes.forEach(function (item) { return delivery.relation('zipCode').add(item); });
                return delivery.save();
            });
        }
        return from(promise);
    };
    DeliveryChartHttpService.prototype.setDeliveryChartFields = function (deliveryChart, model) {
        deliveryChart.set('id', model.id);
        deliveryChart.set('city', model.city);
        deliveryChart.set('price', model.price);
        deliveryChart.set('locationId', model.locationId);
    };
    DeliveryChartHttpService.prototype.setZipCodeFields = function (zipCodes) {
        var ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.ZIP_CODE);
        var res = [];
        // zipCodes = zipCodes.filter(item => !item.id);
        for (var _i = 0, zipCodes_1 = zipCodes; _i < zipCodes_1.length; _i++) {
            var code = zipCodes_1[_i];
            var zipCode = new ZipCode();
            zipCode.set('zipCode', code.zipCode);
            res.push(zipCode);
        }
        return res;
    };
    DeliveryChartHttpService.prototype.syncDeliveryChart = function () {
        var _this_1 = this;
        var deliveries = [];
        var cities = new Map();
        for (var _i = 0, ss_1 = ss; _i < ss_1.length; _i++) {
            var item = ss_1[_i];
            if (!cities.has(item.City)) {
                cities.set(item.City, item.price ? item.price : 0);
            }
        }
        var citiesArray = Array.from(cities.keys());
        for (var _a = 0, citiesArray_1 = citiesArray; _a < citiesArray_1.length; _a++) {
            var city = citiesArray_1[_a];
            var zipCodes = [];
            for (var _b = 0, ss_2 = ss; _b < ss_2.length; _b++) {
                var item = ss_2[_b];
                if (item.City === city) {
                    zipCodes.push(new ZipCode(null, item['ZIP Code'].toString()));
                }
            }
            deliveries.push(new DeliveryChartModel(null, city, cities.get(city), null, zipCodes));
        }
        deliveries.forEach(function (res) {
            _this_1.saveDeliveryChart(res);
        });
        return of(deliveries);
    };
    var DeliveryChartHttpService_1;
    DeliveryChartHttpService.DELIVERY_CHART = "DeliveryChart";
    DeliveryChartHttpService.ZIP_CODE = "ZipCode";
    DeliveryChartHttpService = DeliveryChartHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], DeliveryChartHttpService);
    return DeliveryChartHttpService;
}(DeliveryChartService));
export { DeliveryChartHttpService };
var ss = [];
//# sourceMappingURL=delivery-chart-http.service.js.map