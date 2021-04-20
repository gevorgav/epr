/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
export class ProductViewModel {
    constructor(id, title, price, images, isNew, isHotDeal, itemSize, pathParam) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._images = images || [];
        this._isNew = isNew;
        this._isHotDeal = isHotDeal;
        this._itemSize = itemSize;
        this._pathParam = pathParam;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get price() {
        return this._price;
    }
    get images() {
        return this._images;
    }
    get isNew() {
        return this._isNew;
    }
    get isHotDeal() {
        return this._isHotDeal;
    }
    get itemSize() {
        return this._itemSize;
    }
    get pathParam() {
        return this._pathParam;
    }
}
//# sourceMappingURL=product-view.model.js.map