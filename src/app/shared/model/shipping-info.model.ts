import {ProductCount} from '../../pages/cart/cart.component';
import {OrderItemModel} from './order-item.model';

export class ShippingInfoModel {
  private _id: string;
  private _createdAt: Date;
  private _name: string;
  private _street: string;
  private _phone: string;
  private _specialInstructions: string;
  private _zipCode: string;
  private _products: ProductIdName[];
  private _isPayed: boolean;
  private _isShipped: boolean;
  private _user: any;
  private _startDate: Date;
  private _endDate: Date;
  private _payed: number;
  private _productCount: ProductCount[];
  private _email: string;
  private _stairs: string;
  private _orderItems: OrderItemModel[];

  constructor(id:string, name: string, street: string, phone: string, email: string, specialInstructions: string, zipCode: string,
              products: ProductIdName[], isPayed: boolean, isShipped: boolean, user: any, createdAt: Date, startDate: Date, endDate: Date,
              payed: number, productCount: ProductCount[], orderItems: OrderItemModel[], stairs: string) {
    this._name = name;
    this._street = street;
    this._phone = phone;
    this._specialInstructions = specialInstructions;
    this._zipCode = zipCode;
    this._products = products;
    this._isPayed = isPayed;
    this._isShipped = isShipped;
    this._user = user;
    this._id = id;
    this._createdAt = createdAt;
    this._startDate = startDate;
    this._endDate = endDate;
    this._payed = payed;
    this._productCount = productCount;
    this._email = email;
    this._orderItems = orderItems;
    this._stairs = stairs;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get specialInstructions(): string {
    return this._specialInstructions;
  }

  set specialInstructions(value: string) {
    this._specialInstructions = value;
  }

  get zipCode(): string {
    return this._zipCode;
  }

  set zipCode(value: string) {
    this._zipCode = value;
  }

  get products(): ProductIdName[] {
    return this._products;
  }

  set products(value: ProductIdName[]) {
    this._products = value;
  }

  get isPayed(): boolean {
    return this._isPayed;
  }

  set isPayed(value: boolean) {
    this._isPayed = value;
  }

  get isShipped(): boolean {
    return this._isShipped;
  }

  set isShipped(value: boolean) {
    this._isShipped = value;
  }

  get user(): any {
    return this._user;
  }

  set user(value: any) {
    this._user = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
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

  get payed(): number {
    return this._payed;
  }

  set payed(value: number) {
    this._payed = value;
  }

  get productCount(): ProductCount[] {
    return this._productCount;
  }

  set productCount(value: ProductCount[]) {
    this._productCount = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get orderItems(): OrderItemModel[] {
    return this._orderItems;
  }

  set orderItems(value: OrderItemModel[]) {
    this._orderItems = value;
  }

  get stairs(): string {
    return this._stairs;
  }

  set stairs(value: string) {
    this._stairs = value;
  }
}

export interface ProductIdName {
  id: string;
  name: string;
}
