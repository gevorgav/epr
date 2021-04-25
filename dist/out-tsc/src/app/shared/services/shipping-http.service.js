var ShippingHttpService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ParseService } from './parse.service';
import { ShippingInfoModel } from '../model/shipping-info.model';
import { OrderService } from './order.service';
import { OrderItemModel } from '../model/order-item.model';
import { AdditionCategoryHttp } from './addition-category-http.service';
import { from } from 'rxjs';
let ShippingHttpService = ShippingHttpService_1 = class ShippingHttpService {
    constructor(parseService, orderService) {
        this.parseService = parseService;
        this.orderService = orderService;
    }
    saveShipping(shipping) {
        const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        const ZipCode = this.parseService.parse.Object.extend(ShippingHttpService_1.ZIP_CODE);
        let promise;
        promise = this.orderService.saveAndGetOrderItems(shipping.orderItems).then(res => {
            res.forEach((value, index) => {
                shipping.orderItems[index].id = value.id;
            });
        }).then(() => {
            let parseShippingInfo = new ShippingInfo();
            parseShippingInfo.set('name', shipping.name);
            parseShippingInfo.set('streetAddress', shipping.street);
            parseShippingInfo.set('phone', shipping.phone);
            parseShippingInfo.set('email', shipping.email);
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
            parseShippingInfo.relation('products').add(this.getRelatedParseObjects(shipping.products.map(value => value.id), ShippingHttpService_1.PRODUCT));
            parseShippingInfo.relation('orderItems').add(this.getRelatedParseObjects(shipping.orderItems.map(value => value.id), OrderService.ORDER_ITEM));
            parseShippingInfo.set('stairs', shipping.stairs);
            parseShippingInfo.set('setUpSurface', shipping.setUpSurface);
            return parseShippingInfo.save().then(res => {
                return res;
            });
        });
        return from(promise);
    }
    setPayed(id) {
        const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        let shippingInfo = new ShippingInfo();
        const query = new this.parseService.parse.Query(shippingInfo);
        let promise = query.equalTo('objectId', id)
            .first().catch(e => {
            console.error(e);
        }).then(res => {
            res.set('isPayed', true);
            return res.save().then(res => res);
        });
        return from(promise);
    }
    setShipped(id, shipped) {
        const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        let shippingInfo = new ShippingInfo();
        const query = new this.parseService.parse.Query(shippingInfo);
        let promise = query.equalTo('objectId', id)
            .first().catch(res => {
        }).then(res => {
            res.set('isShipped', shipped);
            return res.save().then(res => true);
        });
        return from(promise);
    }
    loadShipped() {
        return this.loadShippings({ columnName: 'isShipped', value: true });
    }
    loadPayed() {
        return this.loadShippings({ columnName: 'isPayed', value: true });
    }
    getInaccessibleCountForProductInDate(startDate, endDate, productId) {
        let isAvailable = 0;
        const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        let query1 = new this.parseService.parse.Query(ShippingInfo);
        let query2 = new this.parseService.parse.Query(ShippingInfo);
        query1 = query1.lessThanOrEqualTo('startDate', startDate).greaterThanOrEqualTo('endDate', startDate);
        query2 = query2.lessThanOrEqualTo('startDate', endDate).greaterThanOrEqualTo('endDate', endDate);
        let query = this.parseService.parse.Query.or(query1, query2).equalTo('isPayed', true);
        let promise = query.each(item => {
            let products = item.attributes['productCount'];
            let result = products.find(value => value.productId == productId);
            if (result) {
                isAvailable += result.count;
            }
        }).then(res => isAvailable);
        return promise;
    }
    loadShippings(option) {
        const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService_1.SHIPPING_INFO);
        let shippings = [];
        let query = new this.parseService.parse.Query(ShippingInfo);
        if (option.columnName === 'isPayed') {
            query = query.equalTo(option.columnName, option.value).equalTo('isShipped', false);
        }
        else {
            query = query.equalTo(option.columnName, option.value);
        }
        return query.findAll(
        // return this.loadShippingRelations(item).then((ordersProducts) => {
        //   shippingModel.products.push(...ordersProducts[1]);
        //   shippingModel.orderItems.push(...ordersProducts[0]);
        //   shippings.push(shippingModel);
        //   return item;
        // }).then(parseShipping => {
        //   let zip = new ZipCodeParse();
        //   const query = new this.parseService.parse.Query(zip);
        //   return query.equalTo('objectId', parseShipping.attributes['zipCode']['id']).first().then(parseZip => {
        //     shippingModel.zipCode = parseZip.attributes['zipCode'];
        //   });
        // })
        ).then((items) => {
            return items.map(value => {
                let shippingInfoModel = ShippingHttpService_1.convertToShippingInfoModel(value);
                shippingInfoModel.relationOrderItems = from(this.loadOrderItemRelation(value.relation('orderItems')));
                shippingInfoModel.relationProducts = from(this.loadProductRelation(value.relation('products')));
                shippingInfoModel.relationZipCode = from(this.getZipCode(value.attributes['zipCode']['id']));
                return shippingInfoModel;
            });
        });
    }
    getZipCode(id) {
        const ZipCodeParse = this.parseService.parse.Object.extend(ShippingHttpService_1.ZIP_CODE);
        let zip = new ZipCodeParse();
        const query = new this.parseService.parse.Query(zip);
        return query.equalTo('objectId', id).first().then(parseZip => parseZip.attributes['zipCode']);
    }
    static convertToShippingInfoModel(item) {
        return new ShippingInfoModel(item.id, item.attributes['name'], item.attributes['streetAddress'], item.attributes['phone'], item.attributes['email'], item.attributes['specialInstructions'], '', [], item.attributes['isPayed'], item.attributes['isShipped'], item.attributes['user'] ? item.attributes['user']['attributes']['name'] : '', item.attributes['createdAt'], item.attributes['startDate'], item.attributes['endDate'], item.attributes['payed'], item.attributes['productCount'], [], item.attributes['stairs'], item.attributes['setUpSurface']);
    }
    deleteShippingInformation(id) {
        return null;
    }
    getRelatedParseObjects(items, name) {
        const ParseObject = this.parseService.parse.Object.extend(name);
        let parseItems = [];
        items.forEach(value => {
            parseItems.push(new ParseObject({ id: value }));
        });
        return parseItems;
    }
    loadProductRelation(res) {
        let prodList = [];
        return res.query().each(resProd => {
            prodList.push(resProd);
        }).then(() => {
            return this.getProductsName(prodList);
        });
    }
    loadOrderItemRelation(res) {
        let orderItems = [];
        return res.query().each(resItem => {
            return this.getOrderItemsModel(resItem).then((resOrderItem) => {
                orderItems.push(resOrderItem);
            });
        }).then(() => {
            return orderItems;
        });
    }
    getProductsName(prodList) {
        let names = [];
        for (let product of prodList) {
            names.push({ id: product.id, name: product.attributes['title'] });
        }
        return names;
    }
    getOrderItemsModel(orderItem) {
        const additions = [];
        return orderItem.relation('additions').query().each(item => {
            additions.push(AdditionCategoryHttp.convertToAdditionalModel(item));
        }).then(() => {
            return new OrderItemModel(orderItem.attributes['product'].id, orderItem.attributes['count'], [], orderItem.id, additions);
        });
    }
};
ShippingHttpService.PRODUCT = 'Product';
ShippingHttpService.ZIP_CODE = 'ZipCode';
ShippingHttpService.SHIPPING_INFO = 'ShippingInfo';
ShippingHttpService = ShippingHttpService_1 = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [ParseService, OrderService])
], ShippingHttpService);
export { ShippingHttpService };
function aaa() {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => {
            console.log(i);
        }, 100);
    }
}
//# sourceMappingURL=shipping-http.service.js.map