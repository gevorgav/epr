var OrderItemModel = /** @class */ (function () {
    function OrderItemModel(productId, count, id) {
        this._id = id;
        this._productId = productId;
        this._count = count;
    }
    Object.defineProperty(OrderItemModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderItemModel.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderItemModel.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        set: function (value) {
            this._productId = value;
        },
        enumerable: true,
        configurable: true
    });
    return OrderItemModel;
}());
export { OrderItemModel };
//# sourceMappingURL=order-item.model.js.map