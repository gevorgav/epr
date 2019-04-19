/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartService} from './delivery-chart.service';
import {Injectable} from '@angular/core';
import {DeliveryChartModel, ZipCode} from '../model/delivery-chart.model';
import {ParseService} from './parse.service';
import * as Parse from "parse";
import {Observer} from 'rxjs/internal/types';
import {Observable} from 'rxjs/internal/Observable';
import {from} from 'rxjs/internal/observable/from';

@Injectable()
export class DeliveryChartHttpService extends DeliveryChartService{
  
  static DELIVERY_CHART = "DeliveryChart";
  static ZIP_CODE = "ZipCode";
  
  constructor(private parse: ParseService) {
    super();
  }
  
  getDeliveryLocationById(id: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocationByZipCode(zipCode: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocations(): Observable<Array<DeliveryChartModel>> {
    let delivery = this.parse.parse.Object.extend(DeliveryChartHttpService.DELIVERY_CHART);
    let query = new this.parse.parse.Query(delivery);
    let deliveryLocations = [];
    let promise = query.find().then((res: any[])=>{
      for (let delivery of res){
        let deliveryLocation = new DeliveryChartModel(delivery['id'], delivery.attributes['city'], delivery.attributes['price']);
        delivery.relation('zipCode').query().find().then((zip: any[])=>{
          deliveryLocation.zipCodes = [];
          deliveryLocation.zipCodes.push(...DeliveryChartHttpService.forOne(zip));
        }).finally(()=>{
          deliveryLocations.push(deliveryLocation)
        });
      }
      return deliveryLocations;
    });
    return from(promise);
  }
  
  getDeliveryLocationByCity(city: string): DeliveryChartModel {
    return undefined;
  }
  
  private static parseObjectToZipCode(parseObject: any): ZipCode{
    return new ZipCode(parseObject.id, parseObject.attributes['zipCode']);
  }
  
  private static forOne(parseObject: any[]): ZipCode[]{
    let items: ZipCode[] =  [];
    for (let item of parseObject) {
      items.push(DeliveryChartHttpService.parseObjectToZipCode(item));
    }
    return items;
  }
  
}
