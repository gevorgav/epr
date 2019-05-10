import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationDateService {
  private _locationDate: LocationDate;

  private _isSpecified: boolean = false;

  constructor() {
    this._locationDate = new LocationDate(null, null, null);
  }

  public setLocationDate(start: Date, end: Date, location: string){
    if (start && end && location){
      this._locationDate = new LocationDate(start, end, location);
      this._isSpecified = true;
    }
  }

  public reset(){
    this._locationDate = null;
    this._isSpecified = false;
  }

  get locationDate() {
    return this._locationDate;
  }

  get isSpecified(): boolean {
    return this._isSpecified;
  }

  set isSpecified(value: boolean) {
    this._isSpecified = value;
  }
  
  getCalculation(nightPrice: number, minPrice: number, minTime: number, price: number): number{
    let night: number = 0;
    let hours: number = 0;
    let calculatedPrice = 0;
    
    if (this.isSpecified) {
      let days: Date[] = this.getDates();
      for (let day of days){
        if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length-1){
          hours += this.getFutureHours(9).length;
          night += 1;
        } else if (days.indexOf(day) === 0) {
          hours += this.getFutureHours(day.getHours()).length;
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
  private _location: string;

  constructor(startDateTime: Date, endDateTime: Date, location: string) {
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

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }
}
