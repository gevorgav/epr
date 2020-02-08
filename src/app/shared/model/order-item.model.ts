import {AdditionModel} from './addition.model';

export class OrderItemModel {
  private _id: string;
  private _productId: string;
  private _count: number;
  private _additionIds: string[];
  private _additionModels: AdditionModel[];

  constructor( productId: string, count: number, additionIds: string[], id?: string, additionModels?: AdditionModel[]) {
    this._id = id;
    this._productId = productId;
    this._count = count;
    this._additionIds = additionIds;
    this._additionModels = additionModels;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }

  get productId(): string {
    return this._productId;
  }

  set productId(value: string) {
    this._productId = value;
  }

  get additionIds(): string[] {
    return this._additionIds;
  }

  set additionIds(value: string[]) {
    this._additionIds = value;
  }

  get additionModels(): AdditionModel[] {
    return this._additionModels;
  }

  set additionModels(value: AdditionModel[]) {
    this._additionModels = value;
  }
}
