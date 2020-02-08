import {Injectable} from '@angular/core';
import {ParseService} from './parse.service';
import {OrderModel} from '../model/order.model';
import {OrderItemModel} from '../model/order-item.model';
import {ZipCode} from '../model/delivery-chart.model';
import {Observable} from 'rxjs/internal/Observable';
import {ProductHttpService} from './product-http.service';
import {Error} from 'tslint/lib/error';
import {from} from 'rxjs/internal/observable/from';
import {Promise} from 'q';
import {of} from 'rxjs/internal/observable/of';
import {DeliveryChartHttpService} from './delivery-chart-http.service';
import {AdditionCategoryHttp} from './addition-category-http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  static ORDER = 'order';
  static ZIP_CODE = 'ZipCode';
  static ORDER_ITEM = 'orderItem';

  constructor(private parseService: ParseService) {
  }

  setOrderDateLocation(startDate: Date, endDate: Date, zipCode: ZipCode): Observable<any> {
    if (this.parseService.isAuth()) {
      const Order = this.parseService.parse.Object.extend(OrderService.ORDER);
      const parseZipCode = this.parseService.parse.Object.extend(OrderService.ZIP_CODE);
      let order = new Order();
      order.set('startDate', startDate);
      order.set('endDate', endDate);
      order.set('user', this.parseService.getCurrentUser());
      order.set('zipCode', new parseZipCode({id: zipCode.id}));

      const query = new this.parseService.parse.Query(order);
      let promise = query.equalTo('user', this.parseService.getCurrentUser());
      promise.first().catch(res => {
        console.log(res);
      }).then(res => {
        if (res) {
          res.set('startDate', startDate);
          res.set('endDate', endDate);
          res.set('zipCode', new parseZipCode({id: zipCode.id}));
          return res.save();
        } else {
          return order.save().then(order => {
            return order.save();
          });
        }
      });
    } else {
      return null;
    }
  }

  initOrderedData(): Observable<OrderModel>{
    let orderModel = new OrderModel(null,null,null,null,[]);
    let orderItems: OrderItemModel[] = [];
    let promise;
    if (this.parseService.isAuth()) {
      let Order = this.parseService.parse.Object.extend(OrderService.ORDER);
      let order = new Order();
      order.set('user', this.parseService.getCurrentUser());
      const query = new this.parseService.parse.Query(order);
      promise = query.equalTo('user', this.parseService.getCurrentUser()).first().then(orderParse=>{
        if (!orderParse){
          throw new TypeError();
        }
        orderModel.startDate = orderParse.attributes['startDate'];
        orderModel.endDate = orderParse.attributes['endDate'];
        orderModel.id = orderParse.id;
        return orderParse
      }).then(orderParse =>{
        return this.getZipCode(orderParse.attributes['zipCode'].id).then(zip =>{
          orderModel.zipCode = new ZipCode(zip.id, zip.attributes['zipCode']);
          return this.getDeliveryByZipCodeId(orderModel.zipCode.id).then(delivery=>{
            orderModel.zipCode.location = delivery.attributes['city'] + ' ' +  orderModel.zipCode.zipCode;
            return orderParse;
          });
        }).then(orderParse => {
          let list = [];
          let additionObjs = [];
          return orderParse.relation('orderItems').query().each(relatedObject=> {
            return relatedObject.relation('additions').query().each(additionObj=> {
              additionObjs.push(additionObj.id);
            }).then(()=>{
              relatedObject['additions'] = additionObjs;
              list.push(relatedObject);
            });
          }).then(()=>{
            list.forEach(item=>{
              orderItems.push(new OrderItemModel(item.attributes['product'].id,
                item.attributes['count'], item['additions'], item.id))
            });
            orderModel.orderItems = orderItems;
            return orderModel;
          });
        });
      }).catch(reason=>{
        if (reason.code == 209){
          this.parseService.logOut();
        }
        return Promise((resolver, reject)=>{resolver({})});
      });
    }else {
      promise = Promise((resolver, reject)=>{resolver(orderModel)})
    }
    return from(promise);
  }

  setOrder(model: OrderModel): Observable<any> {
    if (this.parseService.isAuth()) {
      const Order = this.parseService.parse.Object.extend(OrderService.ORDER);
      let order = new Order();
      order.set('user', this.parseService.getCurrentUser());

      const query = new this.parseService.parse.Query(order);
      let promise = query.equalTo('user', this.parseService.getCurrentUser())
        .first().catch(res => {
          console.log(res);
        }).then(res => {
          if (res) {
            return this.saveAndGetOrderItems(model.orderItems).then(items => {
              res.relation('orderItems').add(items);
              return res.save();
            });
          }
          throw new Error('Something went wrong, Try again.');
        });
      return from(promise);
    } else {
      return of(true);
    }
  }

  private setOrderFields(order: any, model: OrderModel) {
    order.set('id', model.id);
    order.set('startDate', model.startDate);
    order.set('endDate', model.endDate);
    order.set('userId', this.parseService.getCurrentUser().id);
    order.set('zipCode', model.zipCode.id);
  }

  public saveAndGetOrderItems(orderItems: OrderItemModel[]): Promise<any[]> {
    const OrderItem = this.parseService.parse.Object.extend(OrderService.ORDER_ITEM);
    const Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let savedOrderItems = [];
    for (let orderItem of orderItems) {
      let parseOrderItem = new OrderItem();
      parseOrderItem.set('product', new Product({id: orderItem.productId}));
      parseOrderItem.set('count', orderItem.count);
      if (orderItem.additionIds && orderItem.additionIds.length > 0){
        parseOrderItem.relation('additions').add(this.getRelationAdditional(orderItem.additionIds));
      }
      savedOrderItems.push(parseOrderItem);
    }
    return this.parseService.parse.Object.saveAll(savedOrderItems, {
      success: (res) => res,
      error: (res) => {
        console.error(res);
      }
    });
  }

  private getRelationAdditional(ids: string[]): any{
    const Additional = this.parseService.parse.Object.extend(AdditionCategoryHttp.ADDITION);
    let additions: any[] = [];
    ids.forEach(value => {
      let additional = new Additional();
      additional.id = value;
      additions.push(additional);
    });
    return additions;
  }

  private getZipCode(id: any): Promise<any> {
    const ParseZipCode = this.parseService.parse.Object.extend(OrderService.ZIP_CODE);
    let queryZip = new this.parseService.parse.Query(ParseZipCode);
    return queryZip.equalTo("objectId", id).first().then(res=>{return res})
  }

  getDeliveryByZipCodeId(zipCodeId: string): Promise<any> {
    let zipCodeQuery = new this.parseService.parse.Query(OrderService.ZIP_CODE);
    zipCodeQuery.contains('objectId', zipCodeId);
    let deliveryQuery = new this.parseService.parse.Query('DeliveryChart');
    deliveryQuery.matchesQuery('zipCode', zipCodeQuery);
    return deliveryQuery.first().then( (delivery) => {
      return delivery
    }, (error) => {
      console.log(error);
    });
  }

  saveCount(value: number, productId: string): Observable<boolean> {
    const Order = this.parseService.parse.Object.extend(OrderService.ORDER);
    let order = new Order();
    order.set('user', this.parseService.getCurrentUser());

    const query = new this.parseService.parse.Query(order);
    let promise = query.equalTo('user', this.parseService.getCurrentUser())
      .first().then(res=>{
        return res.relation('orderItems').query().find().then((orderItemsParse)=>{
          orderItemsParse.forEach(item=>{
            if (item.attributes.product.id === productId){
              item.set('count', value);
              return item.save()
            }
          });
        })
      });
    return from(promise);
  }

  removeOrderItem(productId: string): Observable<boolean>{
    if (!this.parseService.getCurrentUser()){
      return of(true);
    }
    const Order = this.parseService.parse.Object.extend(OrderService.ORDER);
    let order = new Order();
    order.set('user', this.parseService.getCurrentUser());
    const query = new this.parseService.parse.Query(order);
    let promise = query.equalTo('user', this.parseService.getCurrentUser())
    .first().then(res=>{
      return res.relation('orderItems').query().find().then((orderItemsParse)=>{
        for (let orderItemParse of orderItemsParse){
          if (orderItemParse.attributes.product.id === productId){
            return orderItemParse.destroy()
          }
        }
      })
    });
    return from(promise);
  }

  public destroyOrder(): Observable<any>{
    if(this.parseService.getCurrentUser()){
      const Order = this.parseService.parse.Object.extend(OrderService.ORDER);
      let order = new Order();
      order.set('user', this.parseService.getCurrentUser());
      const query = new this.parseService.parse.Query(order);
      let promise = query.equalTo('user', this.parseService.getCurrentUser())
        .first().then(orderParse=>{
          return orderParse.destroy()
        });

      return from(promise);
    }

    return of(true);

  }

}
