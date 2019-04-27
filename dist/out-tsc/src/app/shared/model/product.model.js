import * as tslib_1 from "tslib";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { ProductViewModel } from './product-view.model';
var ProductModel = /** @class */ (function (_super) {
    tslib_1.__extends(ProductModel, _super);
    function ProductModel(id, title, price, images, isNew, isHotDeal, itemSize, pathParam, description, rentalTerms, spaceRequired, setupPolicy, instructions, video, safetyRules) {
        var _this = _super.call(this, id, title, price, images, isNew, isHotDeal, itemSize, pathParam) || this;
        _this._description = description;
        _this._rentalTerms = rentalTerms;
        _this._spaceRequired = spaceRequired;
        _this._setupPolicy = setupPolicy || new Map();
        _this._instructions = instructions;
        _this._video = video;
        _this._safetyRules = safetyRules;
        return _this;
    }
    Object.defineProperty(ProductModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "rentalTerms", {
        get: function () {
            return this._rentalTerms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "spaceRequired", {
        get: function () {
            return this._spaceRequired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "setupPolicy", {
        get: function () {
            return this._setupPolicy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "instructions", {
        get: function () {
            return this._instructions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "video", {
        get: function () {
            return this._video;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "safetyRules", {
        get: function () {
            return this._safetyRules;
        },
        enumerable: true,
        configurable: true
    });
    return ProductModel;
}(ProductViewModel));
export { ProductModel };
//# sourceMappingURL=product.model.js.map