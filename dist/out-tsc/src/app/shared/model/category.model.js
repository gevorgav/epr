var CategoryModel = /** @class */ (function () {
    function CategoryModel(id, title, description, imageUrl, metaDescription, pathParam, pageTitle, order, $items, items, count) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._items = items;
        this._$items = $items;
        this._order = order;
        this._metaDescription = metaDescription;
        this._pathParam = pathParam;
        this._count = count;
        this._pageTitle = pageTitle;
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
    Object.defineProperty(CategoryModel.prototype, "order", {
        get: function () {
            return this._order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "metaDescription", {
        get: function () {
            return this._metaDescription;
        },
        set: function (value) {
            this._metaDescription = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "pathParam", {
        get: function () {
            return this._pathParam;
        },
        set: function (value) {
            this._pathParam = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "pageTitle", {
        get: function () {
            return this._pageTitle;
        },
        set: function (value) {
            this._pageTitle = value;
        },
        enumerable: true,
        configurable: true
    });
    return CategoryModel;
}());
export { CategoryModel };
//# sourceMappingURL=category.model.js.map