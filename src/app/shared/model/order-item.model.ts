export class OrderItemModel {
  private _id: string;
  private _productId: string;
  private _count: number;
  
  constructor( productId: string, count: number, id?: string) {
    this._id = id;
    this._productId = productId;
    this._count = count;
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
}
