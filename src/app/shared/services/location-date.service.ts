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
