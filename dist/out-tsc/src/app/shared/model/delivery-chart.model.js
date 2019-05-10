var DeliveryChartModel = /** @class */ (function () {
    function DeliveryChartModel(id, city, price, $zipCodes, zipCodes, locationId) {
        this._id = id;
        this._city = city;
        this._zipCodes = zipCodes;
        this._price = price;
        this._locationId = locationId;
        this._$zipCodes = $zipCodes;
    }
    Object.defineProperty(DeliveryChartModel.prototype, "$zipCodes", {
        get: function () {
            return this._$zipCodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "city", {
        get: function () {
            return this._city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "zipCodes", {
        get: function () {
            return this._zipCodes;
        },
        set: function (value) {
            this._zipCodes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "locationId", {
        get: function () {
            return this._locationId;
        },
        enumerable: true,
        configurable: true
    });
    return DeliveryChartModel;
}());
export { DeliveryChartModel };
var ZipCode = /** @class */ (function () {
    function ZipCode(id, zipCode) {
        this._id = id;
        this._zipCode = zipCode;
    }
    Object.defineProperty(ZipCode.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipCode.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        enumerable: true,
        configurable: true
    });
    return ZipCode;
}());
export { ZipCode };
//# sourceMappingURL=delivery-chart.model.js.map