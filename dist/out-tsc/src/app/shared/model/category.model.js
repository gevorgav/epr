var CategoryModel = /** @class */ (function () {
    function CategoryModel(id, title, description, imageUrl, $items, items) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._items = items;
        this._$items = $items;
    }
    Object.defineProperty(CategoryModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "$items", {
        get: function () {
            return this._$items;
        },
        set: function (value) {
            this._$items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    return CategoryModel;
}());
export { CategoryModel };
//# sourceMappingURL=category.model.js.map