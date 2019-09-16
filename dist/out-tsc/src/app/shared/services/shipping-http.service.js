import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ParseService } from './parse.service';
import { ShippingInfoModel } from '../model/shipping-info.model';
import { from } from 'rxjs/internal/observable/from';
var ShippingHttpService = /** @class */ (function () {
    function ShippingHttpService(parseService) {
        this.parseService = parseService;
    }
    ShippingHttpService_1 = ShippingHttpService;
    ShippingHttpService.prototype.saveShipping = function (shipping) {
        var ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        var ZipCode = this.parseService.parse.Object.extend(ShippingHttpService_1.ZIP_CODE);
        var parseShippingInfo = new ShippingInfo();
        parseShippingInfo.set('name', shipping.name);
        parseShippingInfo.set('streetAddress', shipping.street);
        parseShippingInfo.set('phone', shipping.phone);
        parseShippingInfo.set('specialInstructions', shipping.specialInstructions);
        if (shipping.user) {
            parseShippingInfo.set('user', shipping.user);
        }
        parseShippingInfo.set('zipCode', new ZipCode({ id: shipping.zipCode }));
        parseShippingInfo.set('isPayed', shipping.isPayed);
        parseShippingInfo.set('isShipped', shipping.isShipped);
        parseShippingInfo.set('startDate', shipping.startDate);
        parseShippingInfo.set('endDate', shipping.endDate);
        parseShippingInfo.set('productCount', shipping.productCount);
        parseShippingInfo.set('payed', shipping.payed);
        parseShippingInfo.relation('products').add(this.getProductParseObjects(shipping.products));
        var promise = parseShippingInfo.save().then(function (res) {
            return res;
        });
        return from(promise);
    };
    ShippingHttpService.prototype.setPayed = function (id) {
        var ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        var shippingInfo = new ShippingInfo();
        var query = new this.parseService.parse.Query(shippingInfo);
        var promise = query.equalTo('objectId', id)
            .first().catch(function (e) {
            console.error(e);
        }).then(function (res) {
            res.set('isPayed', true);
            return res.save().then(function (res) { return true; });
        });
        return from(promise);
    };
    ShippingHttpService.prototype.setShipped = function (id, shipped) {
        var ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        var shippingInfo = new ShippingInfo();
        var query = new this.parseService.parse.Query(shippingInfo);
        var promise = query.equalTo('objectId', id)
            .first().catch(function (res) {
            console.log(res);
        }).then(function (res) {
            res.set('isShipped', shipped);
            return res.save().then(function (res) { return true; });
        });
        return from(promise);
    };
    ShippingHttpService.prototype.loadShipped = function () {
        return this.loadShippings({ columnName: 'isShipped', value: true });
    };
    ShippingHttpService.prototype.loadPayed = function () {
        return this.loadShippings({ columnName: 'isPayed', value: true });
    };
    ShippingHttpService.prototype.loadShippings = function (option) {
        var _this = this;
        var ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        var ZipCodeParse = this.parseService.parse.Object.extend(ShippingHttpService_1.ZIP_CODE);
        var shippings = [];
        var query = new this.parseService.parse.Query(ShippingInfo);
        var promise = query.equalTo(option.columnName, option.value).each(function (item) {
            var shippingModel = ShippingHttpService_1.convertToShippingInfoModel(item);
            return _this.loadProductRelation(item).then(function (res1) {
                var _a;
                (_a = shippingModel.products).push.apply(_a, res1);
                shippings.push(shippingModel);
                return item;
            }).then(function (parseShipping) {
                var zip = new ZipCodeParse();
                var query = new _this.parseService.parse.Query(zip);
                return query.equalTo('objectId', parseShipping.attributes['zipCode']['id']).first().then(function (parseZip) {
                    shippingModel.zipCode = parseZip.attributes['zipCode'];
                });
            });
        }).then(function (res) {
            return shippings;
        });
        return from(promise);
    };
    ShippingHttpService.convertToShippingInfoModel = function (item) {
        return new ShippingInfoModel(item.id, item.attributes['name'], item.attributes['streetAddress'], item.attributes['phone'], item.attributes['specialInstructions'], '', [], item.attributes['isPayed'], item.attributes['isShipped'], item.attributes['user'] ? item.attributes['user']['attributes']['name'] : '', item.attributes['createdAt'], item.attributes['startDate'], item.attributes['endDate'], item.attributes['payed'], item.attributes['productCount']);
    };
    ShippingHttpService.prototype.deleteShippingInformation = function (id) {
        return null;
    };
    ShippingHttpService.prototype.getProductParseObjects = function (products) {
        var ProductParse = this.parseService.parse.Object.extend(ShippingHttpService_1.PRODUCT);
        var productsParse = [];
        products.forEach(function (value) {
            productsParse.push(new ProductParse({ id: value.id }));
        });
        return productsParse;
    };
    ShippingHttpService.prototype.loadProductRelation = function (res) {
        var _this = this;
        var prodList = [];
        return res.relation('products').query().each(function (resProd) {
            prodList.push(resProd);
        }).then(function () {
            return _this.getProductsName(prodList);
        });
    };
    ShippingHttpService.prototype.getProductsName = function (prodList) {
        var names = [];
        for (var _i = 0, prodList_1 = prodList; _i < prodList_1.length; _i++) {
            var product = prodList_1[_i];
            names.push(product.attributes['title']);
        }
        return names;
    };
    var ShippingHttpService_1;
    ShippingHttpService.PRODUCT = 'Product';
    ShippingHttpService.ZIP_CODE = 'ZipCode';
    ShippingHttpService.SHIPPING_INFO = 'ShippingInfo';
    ShippingHttpService = ShippingHttpService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], ShippingHttpService);
    return ShippingHttpService;
}());
export { ShippingHttpService };
//# sourceMappingURL=shipping-http.service.js.map