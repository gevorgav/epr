export class SettingsModel {
  private _id: string;
  private _title: string;
  private _imageUrl1: string;
  private _imageUrl2: string;
  private _imageUrl3: string;
  private _mobileImageUrl: string
  private _homePageMetaDescription: string;

  constructor(id: string, title: string, homePageMetaDescription: string,imageUrl1?: string, imageUrl2?: string, imageUrl3?: string,
              mobileImageUrl?: string) {
    this._id = id;
    this._title = title;
    this._imageUrl1 = imageUrl1;
    this._imageUrl2 = imageUrl2;
    this._imageUrl3 = imageUrl3;
    this._mobileImageUrl = mobileImageUrl;
    this._homePageMetaDescription = homePageMetaDescription;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get imageUrl1(): string {
    return this._imageUrl1;
  }

  set imageUrl1(value: string) {
    this._imageUrl1 = value;
  }

  get imageUrl2(): string {
    return this._imageUrl2;
  }

  set imageUrl2(value: string) {
    this._imageUrl2 = value;
  }

  get imageUrl3(): string {
    return this._imageUrl3;
  }

  set imageUrl3(value: string) {
    this._imageUrl3 = value;
  }

  get mobileImageUrl(): string {
    return this._mobileImageUrl;
  }

  set mobileImageUrl(value: string) {
    this._mobileImageUrl = value;
  }

  get homePageMetaDescription(): string {
    return this._homePageMetaDescription;
  }

  set homePageMetaDescription(value: string) {
    this._homePageMetaDescription = value;
  }
}
