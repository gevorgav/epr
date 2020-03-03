var AdditionModel = /** @class */ (function () {
    function AdditionModel(id, name, imageUrl) {
        this._id = id;
        this._name = name;
        this._imageUrl = imageUrl;
    }
    Object.defineProperty(AdditionModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdditionModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdditionModel.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        set: function (value) {
            this._imageUrl = value;
        },
        enumerable: true,
        configurable: true
    });
    return AdditionModel;
}());
export { AdditionModel };
//# sourceMappingURL=addition.model.js.map