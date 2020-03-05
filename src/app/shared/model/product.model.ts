/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {ProductViewModel} from './product-view.model';

export class ProductModel extends ProductViewModel {
  private _description: string;
  private _rentalTerms: string;
  private _spaceRequired: string;
  private _setupPolicy: Map<string, string>; //TODO in backend
  private _instructions: string;  // PDF file patch
  private _video: string;         // video patch
  private _safetyRules: string;   // image patch
  private _minTime: number;
  private _minPrice: number;
  private _nightPrice: number;
  private _count: number;
  private _calculatedPrice: number;
  private _additionalCategories: string [];
  private _metaDescription: string;
  private _pageTitle: string;
  private _relation: string[];

  constructor(id: string, title: string, price: number, images: Array<string>, isNew: boolean, isHotDeal: boolean, itemSize: string,
              pathParam: string, description: string, rentalTerms: string, spaceRequired: string, setupPolicy: Map<string, string>,
              instructions: string, video: string, safetyRules: string, minTime: number, minPrice: number, nightPrice: number, count: number,
              additionalCategories: string[], metaDescription: string, pageTitle: string, relation: string[]) {
    super(id, title, price, images, isNew, isHotDeal, itemSize, pathParam);
    this._description = description;
    this._rentalTerms = rentalTerms;
    this._spaceRequired = spaceRequired;
    this._setupPolicy = setupPolicy || new Map();
    this._instructions = instructions;
    this._video = video;
    this._safetyRules = safetyRules;
    this._minTime = minTime;
    this._minPrice = minPrice;
    this._nightPrice = nightPrice;
    this._count = count;
    this._additionalCategories = additionalCategories;
    this._metaDescription = metaDescription;
    this._pageTitle = pageTitle;
    this._relation = relation;
  }

  get description(): string {
    return this._description;
  }

  get rentalTerms(): string {
    return this._rentalTerms;
  }

  get spaceRequired(): string {
    return this._spaceRequired;
  }

  get setupPolicy(): Map<string, string> {
    return this._setupPolicy;
  }

  get instructions(): string {
    return this._instructions;
  }

  get video(): string {
    return this._video;
  }

  get safetyRules(): string {
    return this._safetyRules;
  }

  get minTime(): number {
    return this._minTime;
  }

  get minPrice(): number {
    return this._minPrice;
  }

  get nightPrice(): number {
    return this._nightPrice;
  }

  get count(): number {
    return this._count;
  }

  get calculatedPrice(): number {
    return this._calculatedPrice;
  }

  set calculatedPrice(value: number) {
    this._calculatedPrice = value;
  }

  get additionalCategories(): string[] {
    return this._additionalCategories;
  }

  set additionalCategories(value: string[]) {
    this._additionalCategories = value;
  }

  get metaDescription(): string {
    return this._metaDescription;
  }

  set metaDescription(value: string) {
    this._metaDescription = value;
  }

  get pageTitle(): string {
    return this._pageTitle;
  }

  set pageTitle(value: string) {
    this._pageTitle = value;
  }

  get relation(): string[] {
    return this._relation;
  }

  set relation(value: string[]) {
    this._relation = value;
  }
}
