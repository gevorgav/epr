var AdditionCategoryModel = /** @class */ (function () {
    function AdditionCategoryModel(id, name, multiSelect, additions) {
        this._id = id;
        this._name = name;
        this._additions = additions;
        this._multiSelect = multiSelect;
    }
    Object.defineProperty(AdditionCategoryModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdditionCategoryModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdditionCategoryModel.prototype, "additions", {
        get: function () {
            return this._additions;
        },
        set: function (value) {
            this._additions = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdditionCategoryModel.prototype, "multiSelect", {
        get: function () {
            return this._multiSelect;
        },
        set: function (value) {
            this._multiSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    return AdditionCategoryModel;
}());
export { AdditionCategoryModel };
//# sourceMappingURL=addition-category.model.js.map