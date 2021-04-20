export class OrderItemModel {
    constructor(productId, count, additionIds, id, additionModels) {
        this._id = id;
        this._productId = productId;
        this._count = count;
        this._additionIds = additionIds;
        this._additionModels = additionModels;
    }
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get count() {
        return this._count;
    }
    set count(value) {
        this._count = value;
    }
    get productId() {
        return this._productId;
    }
    set productId(value) {
        this._productId = value;
    }
    get additionIds() {
        return this._additionIds;
    }
    set additionIds(value) {
        this._additionIds = value;
    }
    get additionModels() {
        return this._additionModels;
    }
    set additionModels(value) {
        this._additionModels = value;
    }
}
//# sourceMappingURL=order-item.model.js.map