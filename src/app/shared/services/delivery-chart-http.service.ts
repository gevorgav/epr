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
import {concatAll, concatMap, delay, flatMap, map, mergeMap, reduce, tap} from 'rxjs/operators';
import {forkJoin, of, zip} from 'rxjs';

@Injectable()
export class DeliveryChartHttpService extends DeliveryChartService{

  static DELIVERY_CHART = "DeliveryChart";
  static ZIP_CODE = "ZipCode";

  private _deliveryLocations : DeliveryChartModel[] = [];

  constructor(private parseService: ParseService) {
    super();
  }

  getDeliveryLocationById(id: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocationByZipCode(zipCode: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocationsFromCash(): DeliveryChartModel[] {
    return null;
  }

  getDeliveryLocations(): Observable<Array<DeliveryChartModel>> {
    let delivery = this.parseService.parse.Object.extend(DeliveryChartHttpService.DELIVERY_CHART);
    let query = new this.parseService.parse.Query(delivery);
    let promise = query.find().then((res: any[])=>{
      return res;
    });
    return from(promise).pipe(
      map((res: any[])=>{
        let deliveryLocations : Array<DeliveryChartModel> = [];
        for (let delivery of res){
          let zip: Observable<ZipCode[]> = from(delivery.relation('zipCode').query().find().then((zip: any[])=>{
            return DeliveryChartHttpService.forOne(zip);
          }));
          let deliveryLocation = new DeliveryChartModel(delivery['id'], delivery.attributes['city'], delivery.attributes['price'], zip);

          deliveryLocations.push(deliveryLocation);
        }
        return deliveryLocations;
      }),
      flatMap(
        (deliveries: DeliveryChartModel[])=> forkJoin(deliveries.map(
          (deliveryFork:DeliveryChartModel)=>{
            return forkJoin(deliveryFork.$zipCodes).pipe(map((zipCodes:ZipCode[][])=>{
              deliveryFork.zipCodes = zipCodes[0];
              return deliveryFork;
            }))
          }
        ))
      ));
  }


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

  deleteDeliveryChart(id: string): Observable<any> {
    const DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService.DELIVERY_CHART);
    const query = new this.parseService.parse.Query(DeliveryChart);
    query.equalTo("objectId", id);
    const promise = query.first().then((result) =>{
      result.relation('zipCode').query().find().then(items => {
        items.forEach(item => item.destroy())
      });
      return result.destroy();
    });
    return from(promise);
  }

  saveDeliveryChart(model: DeliveryChartModel): Observable<any> {
    const DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService.DELIVERY_CHART);
    let delivery = new DeliveryChart();
    let zipCodes = this.setZipCodeFields(model.zipCodes);

    // zipCode.set('zipCode', model.zipCodes[0].zipCode);
    this.setDeliveryChartFields(delivery, model);

    let promise;
    let _this = this;
    if (model.id) {
      const query = new this.parseService.parse.Query(DeliveryChart);
      query.equalTo("objectId", model.id);
      promise = query.first().then(
        res => {
          this.setDeliveryChartFields(res, model);
          res.relation('zipCode').query().find().then(relatedItems => {
            relatedItems.forEach(item => item.destroy())
          });
          return this.parseService.parse.Object.saveAll(zipCodes).then(() => {
            zipCodes.forEach(item => res.relation('zipCode').add(item));
            return res.save();
          });
        }
      );
    } else {
      promise = this.parseService.parse.Object.saveAll(zipCodes).then(() => {
        zipCodes.forEach(item => delivery.relation('zipCode').add(item));
        return delivery.save();
      });
    }
    return from(promise);
  }

  private setDeliveryChartFields(deliveryChart: any, model: DeliveryChartModel) {
    deliveryChart.set('id', model.id);
    deliveryChart.set('city', model.city);
    deliveryChart.set('price', model.price);
    deliveryChart.set('locationId', model.locationId);
  }

  private setZipCodeFields(zipCodes: ZipCode[]): any[] {
    const ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService.ZIP_CODE);
    let res = [];
    // zipCodes = zipCodes.filter(item => !item.id);
    for (let code of zipCodes) {
      let zipCode = new ZipCode();
      zipCode.set('zipCode', code.zipCode);
      res.push(zipCode);
    }
    return res;
  }

}
