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
var DeliveryChartHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(DeliveryChartHttpService, _super);
    function DeliveryChartHttpService(parseService) {
        var _this = _super.call(this) || this;
        _this.parseService = parseService;
        _this._deliveryLocations = [];
        return _this;
    }
    DeliveryChartHttpService_1 = DeliveryChartHttpService;
    DeliveryChartHttpService.prototype.getDeliveryLocationById = function (id) {
        return undefined;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationByZipCode = function (zipCode) {
        return undefined;
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
                var zip_1 = from(delivery_1.relation('zipCode').query().find().then(function (zip) {
                    return DeliveryChartHttpService_1.forOne(zip);
                }));
                var deliveryLocation = new DeliveryChartModel(delivery_1['id'], delivery_1.attributes['city'], delivery_1.attributes['price'], zip_1);
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
    //   let promise = delivery.relation('zipCode').query().find().then((zip: any[])=>{
    //     return zip;
    //   });
    //   let $zips: Observable<any>[]= [];
    //   $zips.push(from(promise));
    //   for (let $zip of $zips) {
    //   $zip.pipe()
    // }
    // from(promise).pipe(map((zips: any[])=>{
    //   for (let zip of zips) {
    //     deliveryLocation.zipCodes.push(...DeliveryChartHttpService.forOne(zip))
    //   }
    //   return deliveryLocations;
    // }));
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
            return result.destroy({});
        });
        return from(promise);
    };
    DeliveryChartHttpService.prototype.saveDeliveryChart = function (model) {
        var DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var delivery = new DeliveryChart();
        var ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.ZIP_CODE);
        // let zipCodes = this.setZipCodeFields(ZipCode, model.zipCodes);
        var zipCode = new ZipCode();
        zipCode.set('city', model.zipCodes[0]);
        this.setDeliveryChartFields(delivery, model);
        var promise;
        if (false && model.id) { // TODO
            // update
            // delivery.save(null).then(saved => {
            //   let relation = saved.relation('zipCodes');
            //   relation.add()
            // }
        }
        else {
            // create
            // promise = zipCode.save().then(savedZipCodes => {
            return delivery.save().then(function (savedDelivery) {
                return savedDelivery.save(delivery);
            });
            // })
            // promise = delivery.save().then(savedDelivery => {
            //   let zipCodeRelation = savedDelivery.relation('zipCodes');
            //   return zipCodeRelation.save(zipCode);
            // })
        }
        return from(promise);
    };
    DeliveryChartHttpService.prototype.setDeliveryChartFields = function (deliveryChart, model) {
        deliveryChart.set('id', model.id);
        deliveryChart.set('city', model.city);
        deliveryChart.set('price', model.price);
        deliveryChart.set('locationId', model.locationId);
    };
    DeliveryChartHttpService.prototype.setZipCodeFields = function (constructor, zipCodes) {
        var res = [];
        for (var _i = 0, zipCodes_1 = zipCodes; _i < zipCodes_1.length; _i++) {
            var code = zipCodes_1[_i];
            var zipCode = new constructor();
            zipCode.set('city', code.zipCode);
            res.push(zipCode);
        }
        return res;
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
//# sourceMappingURL=delivery-chart-http.service.js.map