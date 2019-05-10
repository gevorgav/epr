/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
var ProductViewModel = /** @class */ (function () {
    function ProductViewModel(id, title, price, images, isNew, isHotDeal, itemSize, pathParam) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._images = images || [];
        this._isNew = isNew;
        this._isHotDeal = isHotDeal;
        this._itemSize = itemSize;
        this._pathParam = pathParam;
    }
    Object.defineProperty(ProductViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "isHotDeal", {
        get: function () {
            return this._isHotDeal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "itemSize", {
        get: function () {
            return this._itemSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "pathParam", {
        get: function () {
            return this._pathParam;
        },
        enumerable: true,
        configurable: true
    });
    return ProductViewModel;
}());
export { ProductViewModel };
//# sourceMappingURL=product-view.model.js.map