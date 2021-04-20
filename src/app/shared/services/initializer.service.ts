import {Injectable} from '@angular/core';
import {LocationDateService} from './location-date.service';
import {OrderService} from './order.service';
import {Observable} from 'rxjs/internal/Observable';
import {map} from 'rxjs/operators';
import {OrderModel} from '../model/order.model';
import {DeliveryChartService} from './delivery-chart.service';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class InitializerService {
  constructor(private locationService: LocationDateService,
              private deliveryService: DeliveryChartService,
              private orderService: OrderService) {
  }

  private _initialized = new BehaviorSubject<boolean>(false);

  private _orderModel: OrderModel;

  get orderModel(): OrderModel {
    return this._orderModel;
  }

  set orderModel(value: OrderModel) {
    this._orderModel = value;
  }

  initialize(): Promise<boolean> {
    return this.orderService.initOrderedData().then(
      res => {
        if (res) {
          let now = new Date();
          this.orderModel = res;
          this._initialized.next(true);
          if (res.startDate && res.endDate && location && !(res.startDate.getTime() - now.getTime() < 54000000)){
            this.locationService.setLocationDate(res.startDate, res.endDate, res.zipCode);
          }
        }
        return true;
      });
  }

  get initialized(): BehaviorSubject<boolean> {
    return this._initialized;
  }
}
