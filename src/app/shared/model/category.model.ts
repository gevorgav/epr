/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class CategoryModel {
  private _id: number;
  private _title: string;
  private _description: string;
  private _productsCount: number;

  constructor(id: number, title: string, description: string, productsCount: number) {
    this._id = id;
    this._title = title;
    this._description = description;
    this._productsCount = productsCount;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get description(): string {
    return this._description;
  }

  get productsCount(): number {
    return this._productsCount;
  }
}
