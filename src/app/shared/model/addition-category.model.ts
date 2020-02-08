import {AdditionModel} from './addition.model';

export class AdditionCategoryModel {
  private _id: string;
  private _name: string;
  private _additions: AdditionModel[];

  constructor(id: string, name: string, additions?: AdditionModel[]) {
    this._id = id;
    this._name = name;
    this._additions = additions;
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
}
