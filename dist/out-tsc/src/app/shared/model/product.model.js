/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { ProductViewModel } from './product-view.model';
export class ProductModel extends ProductViewModel {
    constructor(id, title, price, images, isNew, isHotDeal, itemSize, pathParam, description, rentalTerms, spaceRequired, setupPolicy, instructions, video, safetyRules, minTime, minPrice, nightPrice, count, additionalCategories, metaDescription, pageTitle, relation) {
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
    get description() {
        return this._description;
    }
    get rentalTerms() {
        return this._rentalTerms;
    }
    get spaceRequired() {
        return this._spaceRequired;
    }
    get setupPolicy() {
        return this._setupPolicy;
    }
    get instructions() {
        return this._instructions;
    }
    get video() {
        return this._video;
    }
    get safetyRules() {
        return this._safetyRules;
    }
    get minTime() {
        return this._minTime;
    }
    get minPrice() {
        return this._minPrice;
    }
    get nightPrice() {
        return this._nightPrice;
    }
    get count() {
        return this._count;
    }
    get calculatedPrice() {
        return this._calculatedPrice;
    }
    set calculatedPrice(value) {
        this._calculatedPrice = value;
    }
    get additionalCategories() {
        return this._additionalCategories;
    }
    set additionalCategories(value) {
        this._additionalCategories = value;
    }
    get metaDescription() {
        return this._metaDescription;
    }
    set metaDescription(value) {
        this._metaDescription = value;
    }
    get pageTitle() {
        return this._pageTitle;
    }
    set pageTitle(value) {
        this._pageTitle = value;
    }
    get relation() {
        return this._relation;
    }
    set relation(value) {
        this._relation = value;
    }
}
//# sourceMappingURL=product.model.js.map