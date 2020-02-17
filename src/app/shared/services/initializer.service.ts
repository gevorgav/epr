import {Injectable} from '@angular/core';
import {LocationDateService} from './location-date.service';
import {OrderService} from './order.service';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {OrderModel} from '../model/order.model';
import {DeliveryChartService} from './delivery-chart.service';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {
  constructor(private locationService: LocationDateService,
              private deliveryService: DeliveryChartService,
              private orderService: OrderService) {
  }

  private _orderModel: OrderModel;

  get orderModel(): OrderModel {
    return this._orderModel;
  }

  set orderModel(value: OrderModel) {
    this._orderModel = value;
  }

  initialize(): Observable<boolean> {
    return this.orderService.initOrderedData().pipe(
      map(res => {
        if (res) {
          let now = new Date();
          if (res.startDate && res.endDate && location && !(res.startDate.getTime() - now.getTime() < 54000000)){
            this.locationService.setLocationDate(res.startDate, res.endDate, res.zipCode);
          }
          this.orderModel = res;
        }
        return true;
      }));
  }
}
