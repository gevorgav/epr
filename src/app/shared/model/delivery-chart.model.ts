/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Observable} from 'rxjs';

export class DeliveryChartModel {
  private _id: string;
  private _city: string;
  private _zipCodes: ZipCode[] ;
  private _$zipCodes: Observable<ZipCode[]>;
  private _price: number;
  private _locationId: number;

  constructor(id: string, city: string, price: number,  $zipCodes?: Observable<ZipCode[]>, zipCodes?: ZipCode[], locationId?: number) {
    this._id = id;
    this._city = city;
    this._zipCodes = zipCodes;
    this._price = price;
    this._locationId = locationId;
    this._$zipCodes = $zipCodes;
  }

  get $zipCodes(): Observable<ZipCode[]> {
    return this._$zipCodes;
  }

  get id(): string {
    return this._id;
  }

  get city(): string {
    return this._city;
  }
  
  set zipCodes(value: ZipCode[]) {
    this._zipCodes = value;
  }
  
  get zipCodes(): ZipCode[] {
    return this._zipCodes;
  }

  get price(): number {
    return this._price;
  }

  get locationId(): number {
    return this._locationId;
  }
}

export class ZipCode {
  private _id: string;
  private _zipCode: string;
  private _location: string;
  
  constructor(id: string, zipCode: string, location?: string) {
    this._id = id;
    this._zipCode = zipCode;
    this._location = location;
  }
  
  get id(): string {
    return this._id;
  }
  
  get zipCode(): string {
    return this._zipCode;
  }
  
  set id(value: string) {
    this._id = value;
  }
  
  set zipCode(value: string) {
    this._zipCode = value;
  }
  
  get location(): string {
    return this._location;
  }
  
  set location(value: string) {
    this._location = value;
  }
}
