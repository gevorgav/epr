/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {DeliveryChartService} from './delivery-chart.service';
import {Injectable} from '@angular/core';
import {DeliveryChartModel} from '../model/delivery-chart.model';

Injectable();
export class DeliveryChartHttpService extends DeliveryChartService{
  
  getDeliveryLocationById(id: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocationByZipCode(zipCode: number): DeliveryChartModel {
    return undefined;
  }

  getDeliveryLocations(locationId?: number): Array<DeliveryChartModel> {
    return undefined;
  }
  
}
