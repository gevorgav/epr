/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class DeliveryChartModel {
  private _id: number;
  private _city: string;
  private _zipCodes: string;
  private _price: number;
  private _locationId: number;

  constructor(id: number, city: string, zipCodes: string, price: number, locationId?: number) {
    this._id = id;
    this._city = city;
    this._zipCodes = zipCodes;
    this._price = price;
    this._locationId = locationId;
  }

  get id(): number {
    return this._id;
  }

  get city(): string {
    return this._city;
  }

  get zipCodes(): string {
    return this._zipCodes;
  }

  get price(): number {
    return this._price;
  }

  get locationId(): number {
    return this._locationId;
  }
}
