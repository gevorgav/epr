import {Injectable} from '@angular/core';
import {DeliveryChartModel, ZipCode} from '../model/delivery-chart.model';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs/internal/Observable';
import {DeliveryChartService} from './delivery-chart.service';
import {Subject} from 'rxjs/internal/Subject';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: "root"
})
export class LocationDateService {
  private _locationDate: LocationDate;

  private _isSpecified = new BehaviorSubject<boolean>(false);

  constructor(private deliveryService: DeliveryChartService) {
    this._locationDate = new LocationDate(null, null, null);
  }

  public setLocationDate(start: Date, end: Date, location: ZipCode){
    let now = new Date();
    if (start && end && location && !(start.getTime() - now.getTime() < 54000000)){
      this._locationDate = new LocationDate(start, end, location);
      this.setIsSpecified(true);
    }
  }

  public reset(){
    this._locationDate = null;
    this.setIsSpecified(false);
  }

  get locationDate() {
    return this._locationDate;
  }

  get isSpecified(): Subject<boolean> {
    return this._isSpecified;
  }

  setIsSpecified(value: boolean) {
    this._isSpecified.next(value);
  }

  getShippingPriceByZipCode(zipCode: string): Promise<number> {
    return this.deliveryService.getDeliveryLocationByZipCode(zipCode).then(
      (res: DeliveryChartModel) => {
        return res.price;
      }
    )
  }

  getShippingPrice(): Promise<number>{
    return this.getShippingPriceByZipCode(this._locationDate.location.zipCode);
  }

  getCalculation(nightPrice: number, minPrice: number, minTime: number, price: number): Observable<number>{
    return this.isSpecified.pipe(map(res=>{
      if (res) {
        let night: number = 0;
        let hours: number = 0;
        let calculatedPrice = 0;

        let days: Date[] = this.getDates();
        if (days.length === 1){
          hours = this.locationDate.endDateTime.getHours() - this.locationDate.startDateTime.getHours();
        } else {
          for (let day of days){
            if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length-1){
              hours += this.getFutureHours(9).length;
              night += 1;
            } else if (days.indexOf(day) === 0) {
              hours += this.getFutureHours(day.getHours()).length;
              if (days.length > 1) {
                night += 1;
              }
            }else if (days.indexOf(day) === days.length - 1) {
              hours += this.getLastDayHours(this._locationDate.endDateTime.getHours()).length;
            }
          }
        }

        if (hours > minTime) {
          hours = hours - minTime;
          calculatedPrice = nightPrice * night + price * hours + minPrice;

          return calculatedPrice;
        }

        return minPrice;
      }else {
        return 0;
      }
    }));

  }

  private getFutureHours(hour: number){
    let  futureHours = [];
    for(let i=hour; i<=21; i++) {
      futureHours.push(i + ":" + ("00") );
    }
    return futureHours;
  }

  private getLastDayHours(hour: number){
    let  futureHours = [];
    for(let i=9; i<hour; i++) {
      futureHours.push(i + ":" + ("00") );
    }
    return futureHours;
  }

  private getDates (): Date[] {
    let dates = [],
      currentDate = this._locationDate.startDateTime,
      addDays = function(days) {
        let date = new Date(this.valueOf());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + days);
        return date;
      };
    while (currentDate <= this._locationDate.endDateTime) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates;
  }

}

export class LocationDate {
  private _startDateTime: Date;
  private _endDateTime: Date;
  private _location: ZipCode;

  constructor(startDateTime: Date, endDateTime: Date, location: ZipCode) {
    this._startDateTime = startDateTime;
    this._endDateTime = endDateTime;
    this._location = location;
  }

  get startDateTime(): Date {
    return this._startDateTime;
  }

  set startDateTime(value: Date) {
    this._startDateTime = value;
  }

  get endDateTime(): Date {
    return this._endDateTime;
  }

  set endDateTime(value: Date) {
    this._endDateTime = value;
  }

  get location(): ZipCode {
    return this._location;
  }

  getLocation(){
    return this._location?this._location.location:null;
  }

  set location(value: ZipCode) {
    this._location = value;
  }
}
