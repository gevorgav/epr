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

  constructor(id: string, title: string, price: number, images: Array<string>, isNew: boolean, isHotDeal: boolean, itemSize: string, description: string, rentalTerms: string, spaceRequired: string, setupPolicy: Map<string, string>, instructions: string, video: string, safetyRules: string) {
    super(id, title, price, images, isNew, isHotDeal, itemSize);
    this._description = description;
    this._rentalTerms = rentalTerms;
    this._spaceRequired = spaceRequired;
    this._setupPolicy = setupPolicy;
    this._instructions = instructions;
    this._video = video;
    this._safetyRules = safetyRules;
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
}
