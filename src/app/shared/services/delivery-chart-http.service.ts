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
      return result.destroy({});
    });
    return from(promise);
  }

  saveDeliveryChart(model: DeliveryChartModel): Observable<any> {
    const DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService.DELIVERY_CHART);
    let delivery = new DeliveryChart();
    const ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService.ZIP_CODE);
    // let zipCodes = this.setZipCodeFields(ZipCode, model.zipCodes);
    let zipCode = new ZipCode();
    zipCode.set('city', model.zipCodes[0]);
    this.setDeliveryChartFields(delivery, model);

    let promise;
    if (false && model.id) { // TODO
      // update
      // delivery.save(null).then(saved => {
      //   let relation = saved.relation('zipCodes');
      //   relation.add()
      // }
    } else {
      // create
      // promise = zipCode.save().then(savedZipCodes => {
        return delivery.save().then(savedDelivery => {
          return savedDelivery.save(delivery);
        })
      // })
      // promise = delivery.save().then(savedDelivery => {
      //   let zipCodeRelation = savedDelivery.relation('zipCodes');
      //   return zipCodeRelation.save(zipCode);
      // })

    }
    return from(promise);
  }

  private setDeliveryChartFields(deliveryChart: any, model: DeliveryChartModel) {
    deliveryChart.set('id', model.id);
    deliveryChart.set('city', model.city);
    deliveryChart.set('price', model.price);
    deliveryChart.set('locationId', model.locationId);
  }

  private setZipCodeFields(constructor: any, zipCodes: ZipCode[]): any[] {
    let res = [];
    for (let code of zipCodes) {
      let zipCode = new constructor();
      zipCode.set('city', code.zipCode);
      res.push(zipCode);
    }
    return res;
  }

}
