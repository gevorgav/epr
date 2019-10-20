import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ParseService } from './parse.service';
import { OrderModel } from '../model/order.model';
import { OrderItemModel } from '../model/order-item.model';
import { ZipCode } from '../model/delivery-chart.model';
import { ProductHttpService } from './product-http.service';
import { Error } from 'tslint/lib/error';
import { from } from 'rxjs/internal/observable/from';
import { Promise } from 'q';
import { of } from 'rxjs/internal/observable/of';
var OrderService = /** @class */ (function () {
    function OrderService(parseService) {
        this.parseService = parseService;
    }
    OrderService_1 = OrderService;
    OrderService.prototype.setOrderDateLocation = function (startDate, endDate, zipCode) {
        if (this.parseService.isAuth()) {
            var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
            var parseZipCode_1 = this.parseService.parse.Object.extend(OrderService_1.ZIP_CODE);
            var order_1 = new Order();
            order_1.set('startDate', startDate);
            order_1.set('endDate', endDate);
            order_1.set('user', this.parseService.getCurrentUser());
            order_1.set('zipCode', new parseZipCode_1({ id: zipCode.id }));
            var query = new this.parseService.parse.Query(order_1);
            var promise = query.equalTo('user', this.parseService.getCurrentUser());
            promise.first().catch(function (res) {
                console.log(res);
            }).then(function (res) {
                if (res) {
                    res.set('startDate', startDate);
                    res.set('endDate', endDate);
                    res.set('zipCode', new parseZipCode_1({ id: zipCode.id }));
                    return res.save();
                }
                else {
                    return order_1.save().then(function (order) {
                        return order.save();
                    });
                }
            });
        }
        else {
            return null;
        }
    };
    OrderService.prototype.initOrderedData = function () {
        var _this = this;
        var orderModel = new OrderModel(null, null, null, null, []);
        var orderItems = [];
        var promise;
        if (this.parseService.isAuth()) {
            var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
            var order = new Order();
            order.set('user', this.parseService.getCurrentUser());
            var query = new this.parseService.parse.Query(order);
            promise = query.equalTo('user', this.parseService.getCurrentUser()).first().then(function (orderParse) {
                if (!orderParse) {
                    throw new TypeError();
                }
                orderModel.startDate = orderParse.attributes['startDate'];
                orderModel.endDate = orderParse.attributes['endDate'];
                orderModel.id = orderParse.id;
                return orderParse;
            }).then(function (orderParse) {
                return _this.getZipCode(orderParse.attributes['zipCode'].id).then(function (zip) {
                    orderModel.zipCode = new ZipCode(zip.id, zip.attributes['zipCode']);
                    return _this.getDeliveryByZipCodeId(orderModel.zipCode.id).then(function (delivery) {
                        orderModel.zipCode.location = delivery.attributes['city'] + ' ' + orderModel.zipCode.zipCode;
                        return orderParse;
                    });
                }).then(function (orderParse) {
                    var list = [];
                    return orderParse.relation('orderItems').query().each(function (relatedObject) {
                        list.push(relatedObject);
                    }).then(function () {
                        list.forEach(function (item) {
                            orderItems.push(new OrderItemModel(item.attributes['product'].id, item.attributes['count'], item.id));
                        });
                        orderModel.orderItems = orderItems;
                        return orderModel;
                    });
                });
            }).catch(function (reason) {
                return Promise(function (resolver, reject) { resolver({}); });
            });
        }
        else {
            promise = Promise(function (resolver, reject) { resolver(orderModel); });
        }
        return from(promise);
    };
    OrderService.prototype.setOrder = function (model) {
        var _this = this;
        if (this.parseService.isAuth()) {
            var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
            var order = new Order();
            order.set('user', this.parseService.getCurrentUser());
            var query = new this.parseService.parse.Query(order);
            var promise = query.equalTo('user', this.parseService.getCurrentUser())
                .first().catch(function (res) {
                console.log(res);
            }).then(function (res) {
                if (res) {
                    return _this.saveAndGetOrderItems(model.orderItems).then(function (items) {
                        res.relation('orderItems').add(items);
                        return res.save();
                    });
                }
                throw new Error('Something went wrong, Try again.');
            });
            return from(promise);
        }
        else {
            return of(true);
        }
    };
    OrderService.prototype.setOrderFields = function (order, model) {
        order.set('id', model.id);
        order.set('startDate', model.startDate);
        order.set('endDate', model.endDate);
        order.set('userId', this.parseService.getCurrentUser().id);
        order.set('zipCode', model.zipCode.id);
    };
    OrderService.prototype.saveAndGetOrderItems = function (orderItems) {
        var OrderItem = this.parseService.parse.Object.extend(OrderService_1.ORDER_ITEM);
        var Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
        var savedOrderItems = [];
        for (var _i = 0, orderItems_1 = orderItems; _i < orderItems_1.length; _i++) {
            var orderItem = orderItems_1[_i];
            var parseOrderItem = new OrderItem();
            parseOrderItem.set('product', new Product({ id: orderItem.productId }));
            parseOrderItem.set('count', orderItem.count);
            savedOrderItems.push(parseOrderItem);
        }
        return this.parseService.parse.Object.saveAll(savedOrderItems, {
            success: function (res) { return res; },
            error: function (res) {
                console.error(res);
            }
        });
    };
    OrderService.prototype.getZipCode = function (id) {
        var ParseZipCode = this.parseService.parse.Object.extend(OrderService_1.ZIP_CODE);
        var queryZip = new this.parseService.parse.Query(ParseZipCode);
        return queryZip.equalTo("objectId", id).first().then(function (res) { return res; });
    };
    OrderService.prototype.getDeliveryByZipCodeId = function (zipCodeId) {
        var zipCodeQuery = new this.parseService.parse.Query(OrderService_1.ZIP_CODE);
        zipCodeQuery.contains('objectId', zipCodeId);
        var deliveryQuery = new this.parseService.parse.Query('DeliveryChart');
        deliveryQuery.matchesQuery('zipCode', zipCodeQuery);
        return deliveryQuery.first().then(function (delivery) {
            return delivery;
        }, function (error) {
            console.log(error);
        });
    };
    OrderService.prototype.saveCount = function (value, productId) {
        var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
        var order = new Order();
        order.set('user', this.parseService.getCurrentUser());
        var query = new this.parseService.parse.Query(order);
        var promise = query.equalTo('user', this.parseService.getCurrentUser())
            .first().then(function (res) {
            return res.relation('orderItems').query().find().then(function (orderItemsParse) {
                orderItemsParse.forEach(function (item) {
                    if (item.attributes.product.id === productId) {
                        item.set('count', value);
                        return item.save();
                    }
                });
            });
        });
        return from(promise);
    };
    OrderService.prototype.removeOrderItem = function (productId) {
        var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
        var order = new Order();
        order.set('user', this.parseService.getCurrentUser());
        var OrderItem = this.parseService.parse.Object.extend(OrderService_1.ORDER_ITEM);
        var queryOrderItem = new this.parseService.parse.Query(OrderItem);
        var query = new this.parseService.parse.Query(order);
        var promise = query.equalTo('user', this.parseService.getCurrentUser())
            .first().then(function (res) {
            return res.relation('orderItems').query().find().then(function (orderItemsParse) {
                for (var _i = 0, orderItemsParse_1 = orderItemsParse; _i < orderItemsParse_1.length; _i++) {
                    var orderItemParse = orderItemsParse_1[_i];
                    if (orderItemParse.attributes.product.id === productId) {
                        return orderItemParse.destroy();
                    }
                }
            });
        });
        return from(promise);
    };
    OrderService.prototype.destroyOrder = function () {
        var Order = this.parseService.parse.Object.extend(OrderService_1.ORDER);
        var order = new Order();
        order.set('user', this.parseService.getCurrentUser());
        var query = new this.parseService.parse.Query(order);
        var promise = query.equalTo('user', this.parseService.getCurrentUser())
            .first().then(function (orderParse) {
            return orderParse.destroy();
        });
        return from(promise);
    };
    var OrderService_1;
    OrderService.ORDER = 'order';
    OrderService.ZIP_CODE = 'ZipCode';
    OrderService.ORDER_ITEM = 'orderItem';
    OrderService = OrderService_1 = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], OrderService);
    return OrderService;
}());
export { OrderService };
//# sourceMappingURL=order.service.js.map