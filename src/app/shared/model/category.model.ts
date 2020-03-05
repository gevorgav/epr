/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Observable} from 'rxjs/internal/Observable';
import {ProductModel} from './product.model';

export class CategoryModel {
  private _id: string;
  private _title: string;
  private _description: string;
  private _imageUrl: string;
  private _order: number;
  private _items: ProductModel[];
  private _$items: Observable<ProductModel[]>;
  private _metaDescription: string;
  private _pathParam: string;
  private _count: number;

  constructor(id: string, title: string, description: string, imageUrl: string, metaDescription: string, pathParam: string,
              order?: number, $items?: Observable<ProductModel[]>, items?: ProductModel[], count?: number) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._imageUrl = imageUrl;
    this._items = items;
    this._$items = $items;
    this._order = order;
    this._metaDescription = metaDescription;
    this._pathParam = pathParam;
    this._count = count;
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get $items(): Observable<ProductModel[]> {
    return this._$items;
  }

  set $items(value: Observable<ProductModel[]>) {
    this._$items = value;
  }

  get items(): ProductModel[] {
    return this._items;
  }

  set items(value: ProductModel[]) {
    this._items = value;
  }

  get description(): string {
    return this._description;
  }

  get imageUrl(): string {
    return this._imageUrl;
  }

  get order(): number {
    return this._order;
  }

  get metaDescription(): string {
    return this._metaDescription;
  }

  set metaDescription(value: string) {
    this._metaDescription = value;
  }

  get pathParam(): string {
    return this._pathParam;
  }

  set pathParam(value: string) {
    this._pathParam = value;
  }

  get count(): number {
    return this._count;
  }

  set count(value: number) {
    this._count = value;
  }
}
