import {AdditionModel} from './addition.model';

export class AdditionCategoryModel {
  private _id: string;
  private _name: string;
  private _additions: AdditionModel[];
  private _multiSelect: boolean;

  constructor(id: string, name: string, multiSelect: boolean, additions?: AdditionModel[]) {
    this._id = id;
    this._name = name;
    this._additions = additions;
    this._multiSelect = multiSelect;
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

  get additions(): AdditionModel[] {
    return this._additions;
  }

  set additions(value: AdditionModel[]) {
    this._additions = value;
  }

  get multiSelect(): boolean {
    return this._multiSelect;
  }

  set multiSelect(value: boolean) {
    this._multiSelect = value;
  }
}
