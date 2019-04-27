import * as tslib_1 from "tslib";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { CategoryModel } from '../model/category.model';
import { ParseService } from './parse.service';
import { from } from 'rxjs';
import { ProductViewModel } from '../model/product-view.model';
import { forkJoin } from 'rxjs/index';
import { map } from 'rxjs/operators';
import { flatMap } from 'rxjs/internal/operators';
var CategoryHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryHttpService, _super);
    function CategoryHttpService(parse) {
        var _this = _super.call(this) || this;
        _this.parse = parse;
        _this._categories = [];
        return _this;
    }
    CategoryHttpService_1 = CategoryHttpService;
    Object.defineProperty(CategoryHttpService.prototype, "categories", {
        get: function () {
            var _this = this;
            if (this._categories.length === 0) {
                this.getCategories().subscribe(function (res) {
                    _this._categories = res;
                });
            }
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    CategoryHttpService.prototype.getCategories = function () {
        var category = this.parse.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parse.parse.Query(category);
        var promise = query.find().then(function (res) {
            var categories = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                categories.push(CategoryHttpService_1.convertToCategoryModel(item));
            }
            return categories;
        });
        return from(promise);
    };
    CategoryHttpService.convertToCategoryModel = function (item, products) {
        if (products) {
            return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], products);
        }
        return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl']);
    };
    CategoryHttpService.prototype.getCategoryItems = function (categoryId) {
        return undefined;
    };
    CategoryHttpService.prototype.getCategoriesWithDependency = function () {
        var category = this.parse.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parse.parse.Query(category);
        var promise = query.find().then(function (res) {
            return res;
        });
        return from(promise).pipe(map(function (res) {
            var categories = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var category_1 = res_2[_i];
                var products$ = from(category_1.relation('products').query().find().then(function (product) {
                    return CategoryHttpService_1.forOne(product);
                }));
                var deliveryLocation = CategoryHttpService_1.convertToCategoryModel(category_1, products$);
                categories.push(deliveryLocation);
            }
            return categories;
        }), flatMap(function (categories) { return forkJoin(categories.map(function (categoryFork) {
            return forkJoin(categoryFork.$items).pipe(map(function (products) {
                categoryFork.items = products[0];
                return categoryFork;
            }));
        })); }));
    };
    CategoryHttpService.parseObjectToProductView = function (parseObject) {
        return new ProductViewModel(parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'], parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'], parseObject.attributes['pathParam']);
    };
    CategoryHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(CategoryHttpService_1.parseObjectToProductView(item));
        }
        return items;
    };
    var CategoryHttpService_1;
    CategoryHttpService.CATEGORY = "Category";
    CategoryHttpService = CategoryHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], CategoryHttpService);
    return CategoryHttpService;
}(CategoryService));
export { CategoryHttpService };
//# sourceMappingURL=category-http.service.js.map