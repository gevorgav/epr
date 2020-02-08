export class AdditionModel {
  private _id: string;
  private _name: string;
  private _imageUrl: string;

  constructor(id: string, name: string, imageUrl: string) {
    this._id = id;
    this._name = name;
    this._imageUrl = imageUrl;
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

  get imageUrl(): string {
    return this._imageUrl;
  }

  set imageUrl(value: string) {
    this._imageUrl = value;
  }
}
