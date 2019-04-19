/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class DeliveryChartModel {
  private _id: string;
  private _city: string;
  private _zipCodes: ZipCode[];
  private _price: number;
  private _locationId: number;

  constructor(id: string, city: string, price: number, zipCodes?: ZipCode[], locationId?: number) {
    this._id = id;
    this._city = city;
    this._zipCodes = zipCodes;
    this._price = price;
    this._locationId = locationId;
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
  
  constructor(id: string, zipCode: string) {
    this._id = id;
    this._zipCode = zipCode;
  }
  
  get id(): string {
    return this._id;
  }
  
  get zipCode(): string {
    return this._zipCode;
  }
}
