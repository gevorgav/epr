var OrderModel = /** @class */ (function () {
    function OrderModel(startDate, endDate, userId, zipCode, orderItems, id) {
        this._id = id;
        this._startDate = startDate;
        this._endDate = endDate;
        this._userId = userId;
        this._zipCode = zipCode;
        this._orderItems = orderItems;
    }
    Object.defineProperty(OrderModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "userId", {
        get: function () {
            return this._userId;
        },
        set: function (value) {
            this._userId = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (value) {
            this._zipCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "orderItems", {
        get: function () {
            return this._orderItems;
        },
        set: function (value) {
            this._orderItems = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderModel.prototype, "shipping", {
        get: function () {
            return this._shipping;
        },
        set: function (value) {
            this._shipping = value;
        },
        enumerable: true,
        configurable: true
    });
    return OrderModel;
}());
export { OrderModel };
//# sourceMappingURL=order.model.js.map