var ShippingInfoModel = /** @class */ (function () {
    function ShippingInfoModel(id, name, street, phone, email, specialInstructions, zipCode, products, isPayed, isShipped, user, createdAt, startDate, endDate, payed, productCount, orderItems) {
        this._name = name;
        this._street = street;
        this._phone = phone;
        this._specialInstructions = specialInstructions;
        this._zipCode = zipCode;
        this._products = products;
        this._isPayed = isPayed;
        this._isShipped = isShipped;
        this._user = user;
        this._id = id;
        this._createdAt = createdAt;
        this._startDate = startDate;
        this._endDate = endDate;
        this._payed = payed;
        this._productCount = productCount;
        this._email = email;
        this._orderItems = orderItems;
    }
    Object.defineProperty(ShippingInfoModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "street", {
        get: function () {
            return this._street;
        },
        set: function (value) {
            this._street = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "specialInstructions", {
        get: function () {
            return this._specialInstructions;
        },
        set: function (value) {
            this._specialInstructions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        set: function (value) {
            this._zipCode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "products", {
        get: function () {
            return this._products;
        },
        set: function (value) {
            this._products = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "isPayed", {
        get: function () {
            return this._isPayed;
        },
        set: function (value) {
            this._isPayed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "isShipped", {
        get: function () {
            return this._isShipped;
        },
        set: function (value) {
            this._isShipped = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "createdAt", {
        get: function () {
            return this._createdAt;
        },
        set: function (value) {
            this._createdAt = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "startDate", {
        get: function () {
            return this._startDate;
        },
        set: function (value) {
            this._startDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "endDate", {
        get: function () {
            return this._endDate;
        },
        set: function (value) {
            this._endDate = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "payed", {
        get: function () {
            return this._payed;
        },
        set: function (value) {
            this._payed = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "productCount", {
        get: function () {
            return this._productCount;
        },
        set: function (value) {
            this._productCount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShippingInfoModel.prototype, "orderItems", {
        get: function () {
            return this._orderItems;
        },
        set: function (value) {
            this._orderItems = value;
        },
        enumerable: true,
        configurable: true
    });
    return ShippingInfoModel;
}());
export { ShippingInfoModel };
//# sourceMappingURL=shipping-info.model.js.map