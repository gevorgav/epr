import {ZipCode} from './delivery-chart.model';
import {OrderItemModel} from './order-item.model';

export class OrderModel {
  private _id: string;
  private _startDate: Date;
  private _endDate: Date;
  private _userId: string;
  private _zipCode: ZipCode;
  private _orderItems: OrderItemModel [];
  private _shipping: string;
  
  constructor(startDate: Date, endDate: Date, userId: string, zipCode: ZipCode, orderItems: OrderItemModel[], id?: string) {
    this._id = id;
    this._startDate = startDate;
    this._endDate = endDate;
    this._userId = userId;
    this._zipCode = zipCode;
    this._orderItems = orderItems;
  }
  
  get id(): string {
    return this._id;
  }
  
  set id(value: string) {
    this._id = value;
  }
  
  get startDate(): Date {
    return this._startDate;
  }
  
  set startDate(value: Date) {
    this._startDate = value;
  }
  
  get endDate(): Date {
    return this._endDate;
  }
  
  set endDate(value: Date) {
    this._endDate = value;
  }
  
  get userId(): string {
    return this._userId;
  }
  
  set userId(value: string) {
    this._userId = value;
  }
  
  get zipCode(): ZipCode {
    return this._zipCode;
  }
  
  set zipCode(value: ZipCode) {
    this._zipCode = value;
  }
  
  get orderItems(): OrderItemModel[] {
    return this._orderItems;
  }
  
  set orderItems(value: OrderItemModel[]) {
    this._orderItems = value;
  }
  
  get shipping(): string {
    return this._shipping;
  }
  
  set shipping(value: string) {
    this._shipping = value;
  }
}
