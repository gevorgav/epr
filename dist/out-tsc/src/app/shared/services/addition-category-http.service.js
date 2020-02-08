import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AdditionCategoryService } from './addition-category.service';
import { from } from 'rxjs';
import { AdditionModel } from '../model/addition.model';
import { AdditionCategoryModel } from '../model/addition-category.model';
import { ParseService } from './parse.service';
var AdditionCategoryHttp = /** @class */ (function (_super) {
    tslib_1.__extends(AdditionCategoryHttp, _super);
    function AdditionCategoryHttp(parseService) {
        var _this_1 = _super.call(this) || this;
        _this_1.parseService = parseService;
        return _this_1;
    }
    AdditionCategoryHttp_1 = AdditionCategoryHttp;
    AdditionCategoryHttp.prototype.deleteAddition = function (additionId) {
        var Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        var query = new this.parseService.parse.Query(Addition);
        query.equalTo("objectId", additionId);
        var promise = query.first().then(function (result) {
            return result.destroy({});
        });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.deleteAdditionalCategory = function (categoryId) {
        var Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        var query = new this.parseService.parse.Query(Category);
        query.equalTo('objectId', categoryId);
        var promise = query.first().then(function (result) {
            result.relation('additions').query().find().then(function (items) {
                items.forEach(function (item) { return item.destroy(); });
            });
            return result.destroy({});
        });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.getAdditionById = function (additionId) {
        var Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        var query = new this.parseService.parse.Query(Addition);
        query.equalTo("objectId", additionId);
        var promise = query.first().then(function (result) {
            return AdditionCategoryHttp_1.convertToAdditionalModel(result);
        });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.getAdditionCategories = function () {
        var category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
        var promise = query.find().then(function (res) {
            var categories = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                categories.push(AdditionCategoryHttp_1.convertToAdditionalCategoryModel(item));
            }
            return categories;
        });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.getAdditionCategoriesWithAdditions = function () {
        return undefined;
    };
    AdditionCategoryHttp.prototype.getAdditionalCategoryById = function (categoryId) {
        var categoryModel;
        var category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
        var promise = query.equalTo('objectId', categoryId).first().then(function (res) {
            categoryModel = AdditionCategoryHttp_1.convertToAdditionalCategoryModel(res);
            categoryModel.additions = [];
            return res.relation('additions').query().each(function (additional) {
                categoryModel.additions.push(AdditionCategoryHttp_1.convertToAdditionalModel(additional));
            }).then(function (additions) {
                return categoryModel;
            });
        }).then(function (res) { return categoryModel; });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.getAdditionsByCategoryId = function (categoryId) {
        return undefined;
    };
    AdditionCategoryHttp.prototype.getAllAdditions = function () {
        var addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        var query = new this.parseService.parse.Query(addition);
        var promise = query.find().then(function (res) {
            var additions = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var item = res_2[_i];
                additions.push(AdditionCategoryHttp_1.convertToAdditionalModel(item));
            }
            return additions;
        });
        return from(promise);
    };
    AdditionCategoryHttp.prototype.saveAddition = function (additionToSave, newCategoryId, oldCategoryId) {
        var _this_1 = this;
        var Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        var addition = new Addition();
        this.setFields(addition, additionToSave);
        var promise;
        var _this = this;
        if (additionToSave.id) {
            var query = new this.parseService.parse.Query(Addition);
            query.equalTo("objectId", additionToSave.id);
            promise = query.first().then(function (res) {
                _this_1.setFields(res, additionToSave);
                return res.save().then(function (savedAddition) {
                    if (newCategoryId !== oldCategoryId) {
                        var Category = _this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
                        var query_1 = new _this.parseService.parse.Query(Category);
                        query_1.equalTo("objectId", oldCategoryId);
                        return query_1.first().then(function (category) {
                            category.relation('additions').remove(savedAddition);
                            return category.save();
                        }).then(function (res) { return _this_1.saveCategoryRelatedAddition(savedAddition, newCategoryId); });
                    }
                    else {
                        return savedAddition.save();
                    }
                });
            });
        }
        else {
            promise = addition.save().then(function (addition) { return _this_1.saveCategoryRelatedAddition(addition, newCategoryId); });
        }
        return from(promise);
    };
    AdditionCategoryHttp.prototype.saveAdditionalCategory = function (model) {
        var _this_1 = this;
        var Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        var category = new Category();
        this.setCategoryFields(category, model);
        var promise;
        if (model.id) {
            var query = new this.parseService.parse.Query(Category);
            query.equalTo('objectId', model.id);
            promise = query.first().then(function (res) {
                _this_1.setCategoryFields(res, model);
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
    AdditionCategoryHttp.prototype.setFields = function (item, model) {
        item.set('name', model.name);
        item.set('imageUrl', model.imageUrl);
    };
    AdditionCategoryHttp.prototype.setCategoryFields = function (category, model) {
        category.set('name', model.name);
    };
    AdditionCategoryHttp.convertToAdditionalCategoryModel = function (item) {
        return new AdditionCategoryModel(item.id, item.attributes['name']);
    };
    AdditionCategoryHttp.convertToAdditionalModel = function (item) {
        return new AdditionModel(item.id, item.attributes['name'], item.attributes['imageUrl']);
    };
    AdditionCategoryHttp.prototype.saveCategoryRelatedAddition = function (addition, categoryId) {
        var Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        var query = new this.parseService.parse.Query(Category);
        query.equalTo("objectId", categoryId);
        return query.first().then(function (category) {
            category.relation('additions').add(addition);
            return category.save();
        });
    };
    AdditionCategoryHttp.prototype.getAdditionCategoryByAdditionId = function (additionalId) {
        var productQuery = new this.parseService.parse.Query(AdditionCategoryHttp_1.ADDITION);
        productQuery.contains('objectId', additionalId);
        var categoryQuery = new this.parseService.parse.Query(AdditionCategoryHttp_1.CATEGORY);
        categoryQuery.matchesQuery('additions', productQuery);
        var promise = categoryQuery.first().then(function (list) {
            return AdditionCategoryHttp_1.convertToAdditionalCategoryModel(list);
        }, function (error) {
            console.log(error);
        });
        return from(promise);
    };
    var AdditionCategoryHttp_1;
    AdditionCategoryHttp.CATEGORY = "AdditionCategory";
    AdditionCategoryHttp.ADDITION = "Addition";
    AdditionCategoryHttp = AdditionCategoryHttp_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], AdditionCategoryHttp);
    return AdditionCategoryHttp;
}(AdditionCategoryService));
export { AdditionCategoryHttp };
//# sourceMappingURL=addition-category-http.service.js.map