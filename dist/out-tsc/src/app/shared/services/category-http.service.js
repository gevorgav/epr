import * as tslib_1 from "tslib";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import { Injectable } from '@angular/core';
import { CategoryService } from './category.service';
import { CategoryModel } from '../model/category.model';
import { ParseService } from './parse.service';
import { forkJoin, from } from 'rxjs';
import { flatMap, map } from 'rxjs/operators';
import { ProductModel } from '../model/product.model';
var CategoryHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryHttpService, _super);
    function CategoryHttpService(parseService) {
        var _this = _super.call(this) || this;
        _this.parseService = parseService;
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
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
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
            return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['order'], products);
        }
        return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['order']);
    };
    CategoryHttpService.prototype.getCategoryItems = function (categoryId) {
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category).equalTo('objectId', categoryId);
        var promise = query.first().then(function (res) {
            return res.relation('products').query().find().then(function (res) {
                return CategoryHttpService_1.forOne(res);
            });
        });
        return from(promise);
    };
    CategoryHttpService.prototype.getCategoriesWithDependency = function () {
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
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
                var categoryModel = CategoryHttpService_1.convertToCategoryModel(category_1, products$);
                categories.push(categoryModel);
            }
            return categories;
        }), flatMap(function (categories) { return forkJoin(categories.map(function (categoryFork) {
            return forkJoin(categoryFork.$items).pipe(map(function (products) {
                categoryFork.items = products[0];
                return categoryFork;
            }));
        })); }));
    };
    CategoryHttpService.parseObjectToProductModel = function (parseObject) {
        return new ProductModel(parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'], parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'], parseObject.attributes['pathParam'], parseObject.attributes['description'], parseObject.attributes['rentalTerms'], parseObject.attributes['spaceRequired'], parseObject.attributes['setupPolicy'] ? new Map(Object.entries(parseObject.attributes['setupPolicy'])) : null, parseObject.attributes['instructions'], parseObject.attributes['video'], parseObject.attributes['safetyRules'], parseObject.attributes['minTime'], parseObject.attributes['minPrice'], parseObject.attributes['nightPrice'], parseObject.attributes['count'], []);
    };
    CategoryHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(CategoryHttpService_1.parseObjectToProductModel(item));
        }
        return items;
    };
    CategoryHttpService.prototype.getCategoryByProductId = function (productId) {
        var productQuery = new this.parseService.parse.Query('Product');
        productQuery.contains('objectId', productId);
        var categoryQuery = new this.parseService.parse.Query(CategoryHttpService_1.CATEGORY);
        categoryQuery.matchesQuery('products', productQuery);
        var promise = categoryQuery.first().then(function (list) {
            return CategoryHttpService_1.convertToCategoryModel(list);
        }, function (error) {
            console.log(error);
        });
        return from(promise);
    };
    CategoryHttpService.prototype.deleteCategory = function (id) {
        var Product = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo('objectId', id);
        var promise = query.first().then(function (result) {
            result.relation('products').query().find().then(function (items) {
                items.forEach(function (item) { return item.destroy(); });
            });
            return result.destroy({});
        });
        return from(promise);
    };
    CategoryHttpService.prototype.saveCategory = function (model) {
        var _this = this;
        var Category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var category = new Category();
        this.setFields(category, model);
        var promise;
        if (model.id) {
            var query = new this.parseService.parse.Query(Category);
            query.equalTo('objectId', model.id);
            promise = query.first().then(function (res) {
                _this.setFields(res, model);
                return res.save();
            });
        }
        else {
            promise = category.save().then(function (category) {
                return category.save();
            });
        }
        return from(promise);
    };
    CategoryHttpService.prototype.setFields = function (category, model) {
        category.set('title', model.title);
        category.set('description', model.description);
        category.set('imageUrl', model.imageUrl);
    };
    var CategoryHttpService_1;
    CategoryHttpService.CATEGORY = 'Category';
    CategoryHttpService = CategoryHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], CategoryHttpService);
    return CategoryHttpService;
}(CategoryService));
export { CategoryHttpService };
//# sourceMappingURL=category-http.service.js.map