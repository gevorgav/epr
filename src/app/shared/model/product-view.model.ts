/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class ProductViewModel {
  private _id: string;
  private _title: string;
  private _price: number;
  private _images: Array<string>; // images patch
  private _isNew: boolean;
  private _isHotDeal: boolean;
  private _itemSize: string;

  constructor(id: string, title: string, price: number, images: Array<string>, isNew: boolean, isHotDeal: boolean, itemSize: string) {
    this._id = id;
    this._title = title;
    this._price = price;
    this._images = images;
    this._isNew = isNew;
    this._isHotDeal = isHotDeal;
    this._itemSize = itemSize;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get price(): number {
    return this._price;
  }

  get images(): Array<string> {
    return this._images;
  }

  get isNew(): boolean {
    return this._isNew;
  }

  get isHotDeal(): boolean {
    return this._isHotDeal;
  }

  get itemSize(): string {
    return this._itemSize;
  }
}
