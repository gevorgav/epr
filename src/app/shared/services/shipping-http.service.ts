import {Injectable} from '@angular/core';
import {ParseService} from './parse.service';
import {ProductIdName, ShippingInfoModel} from '../model/shipping-info.model';
import {Observable} from 'rxjs/internal/Observable';
import {from} from 'rxjs/internal/observable/from';

@Injectable({
  providedIn: 'root'
})
export class ShippingHttpService {

  static PRODUCT = 'Product';
  static ZIP_CODE = 'ZipCode';
  static SHIPPING_INFO = 'ShippingInfo';

  constructor(private parseService: ParseService) {
  }

  public saveShipping(shipping: ShippingInfoModel): Observable<any> {
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    const ZipCode = this.parseService.parse.Object.extend(ShippingHttpService.ZIP_CODE);

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
    parseShippingInfo.relation('products').add(this.getProductParseObjects(shipping.products));

    let promise = parseShippingInfo.save().then(res=>{
      return res;
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
      return res.save().then(res => true)
    });

    return from(promise);
  }

  public setShipped(id: string, shipped: boolean): Observable<any> {
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    let shippingInfo = new ShippingInfo();
    const query = new this.parseService.parse.Query(shippingInfo);
    let promise = query.equalTo('objectId', id)
    .first().catch(res => {
      console.log(res);
    }).then(res=>{
      res.set('isShipped', shipped);
      return res.save().then(res => true)
    });

    return from(promise);
  }

  loadShipped(): Observable<ShippingInfoModel[]>{
    return this.loadShippings({columnName: 'isShipped', value: true});
  }

  loadPayed(): Observable<ShippingInfoModel[]>{
    return this.loadShippings({columnName: 'isPayed', value: true});
  }

  private loadShippings(option: Option): Observable<ShippingInfoModel[]>{
    const ShippingInfo = this.parseService.parse.Object.extend(ShippingHttpService.SHIPPING_INFO);
    const ZipCodeParse = this.parseService.parse.Object.extend(ShippingHttpService.ZIP_CODE);
    let shippings: ShippingInfoModel[] = [];
    let query = new this.parseService.parse.Query(ShippingInfo);
    if (option.columnName === 'isPayed'){
      query = query.equalTo(option.columnName, option.value).equalTo('isShipped', false);
    } else{
      query = query.equalTo(option.columnName, option.value);
    }
    let promise = query.each(item=>{
      let shippingModel = ShippingHttpService.convertToShippingInfoModel(item);
      return this.loadProductRelation(item).then(res1=>{
        shippingModel.products.push(...res1);
        shippings.push(shippingModel);
        return item;
      }).then(parseShipping=>{
        let zip = new ZipCodeParse();
        const query = new this.parseService.parse.Query(zip);
        return query.equalTo('objectId', parseShipping.attributes['zipCode']['id']).first().then(parseZip=>{
          shippingModel.zipCode = parseZip.attributes['zipCode'];
        });
      });
    }).then(res => {
      return shippings;
    });
    return from(promise);
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
      item.attributes['productCount']
    );
  }

  public deleteShippingInformation(id: string): Observable<any> {
    return null;
  }

  private getProductParseObjects(products: ProductIdName[]): any {
    const ProductParse = this.parseService.parse.Object.extend(ShippingHttpService.PRODUCT);
    let productsParse = [];
    products.forEach(value=>{
      productsParse.push(new ProductParse({id: value.id}))
    });
    return productsParse;
  }

  private loadProductRelation(res: any): Promise<ProductIdName[]> {
    let prodList = [];
    return res.relation('products').query().each(resProd=>{
      prodList.push(resProd);
    }).then(()=>{
      return this.getProductsName(prodList);
    })
  }

  private getProductsName(prodList: any[]) {
    let names = [];
    for (let product of prodList){
      names.push({id: product.id, name: product.attributes['title']})
    }
    return names;
  }
}

export interface Option {
  columnName: string;
  value: any;
}
