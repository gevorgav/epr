import {Injectable} from '@angular/core';
import {ParseService} from './parse.service';
import {ProductIdName, ShippingInfoModel} from '../model/shipping-info.model';
import {Observable} from 'rxjs/internal/Observable';
import {OrderService} from './order.service';
import {OrderItemModel} from '../model/order-item.model';
import {AdditionCategoryHttp} from './addition-category-http.service';
import {AdditionModel} from '../model/addition.model';
import {from} from 'rxjs';
import {ProductCount} from '../../pages/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class ShippingHttpService {

  static PRODUCT = 'Product';
  static ZIP_CODE = 'ZipCode';
  static SHIPPING_INFO = 'ShippingInfo';

  constructor(private parseService: ParseService, private orderService: OrderService) {
  }

  public saveShipping(shipping: ShippingInfoModel): Observable<any> {
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    const ZipCode = this.parseService.parse.Object.extend(ShippingHttpService.ZIP_CODE);
    let promise;
    promise = this.orderService.saveAndGetOrderItems(shipping.orderItems).then(res=>{
      res.forEach((value, index) => {
        shipping.orderItems[index].id = value.id;
      });
    }).then(()=>{
      let parseShippingInfo = new ShippingInfo();
      parseShippingInfo.set('name', shipping.name);
      parseShippingInfo.set('streetAddress', shipping.street);
      parseShippingInfo.set('phone', shipping.phone);
      parseShippingInfo.set('email', shipping.email);
      parseShippingInfo.set('specialInstructions', shipping.specialInstructions);
      if (shipping.user){
        parseShippingInfo.set('user', shipping.user);
      }
      parseShippingInfo.set('zipCode', new ZipCode({id: shipping.zipCode}));
      parseShippingInfo.set('isPayed', shipping.isPayed);
      parseShippingInfo.set('isShipped', shipping.isShipped);
      parseShippingInfo.set('startDate', shipping.startDate);
      parseShippingInfo.set('endDate', shipping.endDate);
      parseShippingInfo.set('productCount', shipping.productCount);
      parseShippingInfo.set('payed', shipping.payed);
      parseShippingInfo.relation('products').add(
        this.getRelatedParseObjects(shipping.products.map(value => value.id), ShippingHttpService.PRODUCT)
      );
      parseShippingInfo.relation('orderItems').add(
        this.getRelatedParseObjects(shipping.orderItems.map(value => value.id), OrderService.ORDER_ITEM)
      );
      parseShippingInfo.set('stairs', shipping.stairs);
      parseShippingInfo.set('setUpSurface', shipping.setUpSurface);
      return parseShippingInfo.save().then(res=>{
        return res;
      });
    });

    return from(promise);
  }

  public setPayed(id: string): Observable<any>{
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    let shippingInfo = new ShippingInfo();
    const query = new this.parseService.parse.Query(shippingInfo);
    let promise = query.equalTo('objectId', id)
    .first().catch(e => {
      console.error(e);
    }).then(res=>{
       res.set('isPayed', true);
      return res.save().then(res => res)
    });

    return from(promise);
  }

  public setShipped(id: string, shipped: boolean): Observable<any> {
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    let shippingInfo = new ShippingInfo();
    const query = new this.parseService.parse.Query(shippingInfo);
    let promise = query.equalTo('objectId', id)
    .first().catch(res => {
    }).then(res=>{
      res.set('isShipped', shipped);
      return res.save().then(res => true)
    });

    return from(promise);
  }

  loadShipped(): Promise<ShippingInfoModel[]>{
    return this.loadShippings({columnName: 'isShipped', value: true});
  }

  loadPayed(): Promise<ShippingInfoModel[]>{
    return this.loadShippings({columnName: 'isPayed', value: true});
  }

  public getInaccessibleCountForProductInDate(startDate: Date, endDate: Date, productId: string): Promise<number>{
    let isAvailable: number = 0;
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    let query1 = new this.parseService.parse.Query(ShippingInfo);
    let query2 = new this.parseService.parse.Query(ShippingInfo);
    query1 = query1.lessThanOrEqualTo('startDate', startDate).greaterThanOrEqualTo('endDate', startDate);
    query2 = query2.lessThanOrEqualTo('startDate', endDate).greaterThanOrEqualTo('endDate', endDate);
    let query = this.parseService.parse.Query.or(query1, query2).equalTo('isPayed', true);
    let promise = query.each(item=>{
      let products: ProductCount[] = item.attributes['productCount'];
      let result = products.find(value => value.productId == productId);
      if (result){
        isAvailable += result.count;
      }
    }).then(res=> isAvailable);
    return promise;
  }

  private loadShippings(option: Option): Promise<ShippingInfoModel[]>{
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    const ZipCodeParse = this.parseService.parse.Object.extend(ShippingHttpService.ZIP_CODE);
    let shippings: ShippingInfoModel[] = [];
    let query = new this.parseService.parse.Query(ShippingInfo);
    if (option.columnName === 'isPayed'){
      query = query.equalTo(option.columnName, option.value).equalTo('isShipped', false).withinRadians();
    } else{
      query = query.equalTo(option.columnName, option.value);
    }
    return query.each(item => {
      let shippingModel = ShippingHttpService.convertToShippingInfoModel(item);
      return this.loadShippingRelations(item).then((ordersProducts) => {
        shippingModel.products.push(...ordersProducts[1]);
        shippingModel.orderItems.push(...ordersProducts[0]);
        shippings.push(shippingModel);
        return item;
      }).then(parseShipping => {
        let zip = new ZipCodeParse();
        const query = new this.parseService.parse.Query(zip);
        return query.equalTo('objectId', parseShipping.attributes['zipCode']['id']).first().then(parseZip => {
          shippingModel.zipCode = parseZip.attributes['zipCode'];
        });
      })
    }).then(res => {
      return shippings;
    });
  }

  static convertToShippingInfoModel(item: any): ShippingInfoModel {
    return new ShippingInfoModel(
      item.id,
      item.attributes['name'],
      item.attributes['streetAddress'],
      item.attributes['phone'],
      item.attributes['email'],
      item.attributes['specialInstructions'],
      '',
      [],
      item.attributes['isPayed'],
      item.attributes['isShipped'],
      item.attributes['user']?item.attributes['user']['attributes']['name']: '',
      item.attributes['createdAt'],
      item.attributes['startDate'],
      item.attributes['endDate'],
      item.attributes['payed'],
      item.attributes['productCount'],
      [],
      item.attributes['stairs'],
      item.attributes['setUpSurface']
    );
  }

  public deleteShippingInformation(id: string): Observable<any> {
    return null;
  }

  private getRelatedParseObjects(items: string[], name: string): any {
    const ParseObject = this.parseService.parse.Object.extend(name);
    let parseItems = [];
    items.forEach(value=>{
      parseItems.push(new ParseObject({id: value}));
    });
    return parseItems;
  }

  private loadProductRelation(res: any): Promise<ProductIdName[]> {
    let prodList = [];
    return res.relation('products').query().each(resProd=>{
      prodList.push(resProd);
    }).then(()=>{
      return this.getProductsName(prodList);
    })
  }

  private loadOrderItemRelation(res: any): Promise<OrderItemModel[]> {
    let orderItems: OrderItemModel[] = [];
    return res.relation('orderItems').query().each(resItem=>{
      return this.getOrderItemsModel(resItem).then((resOrderItem) =>{
        orderItems.push(resOrderItem);
      });
    }).then(()=>{
      return orderItems;
    })
  }

  private getProductsName(prodList: any[]) {
    let names = [];
    for (let product of prodList){
      names.push({id: product.id, name: product.attributes['title']})
    }
    return names;
  }

  private loadShippingRelations(item: any) {
    return Promise.all([this.loadOrderItemRelation(item), this.loadProductRelation(item)]);
  }

  private getOrderItemsModel(orderItem: any): Promise<OrderItemModel> {
    const additions: AdditionModel[] = [];
    return orderItem.relation('additions').query().each(item=>{
      additions.push(AdditionCategoryHttp.convertToAdditionalModel(item))
    }).then(() =>{
      return new OrderItemModel(orderItem.attributes['product'].id,
        orderItem.attributes['count'], [], orderItem.id, additions);
    })
  }
}

export interface Option {
  columnName: string;
  value: any;
}


function aaa() {
  for (let i = 0; i < 10; i++) {
    setTimeout(()=>{
      console.log(i);
    },100)
  }
}
