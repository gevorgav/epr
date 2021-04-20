var AdditionCategoryHttp_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { AdditionCategoryService } from './addition-category.service';
import { AdditionModel } from '../model/addition.model';
import { AdditionCategoryModel } from '../model/addition-category.model';
import { ParseService } from './parse.service';
let AdditionCategoryHttp = AdditionCategoryHttp_1 = class AdditionCategoryHttp extends AdditionCategoryService {
    constructor(parseService) {
        super();
        this.parseService = parseService;
    }
    deleteAddition(additionId) {
        const Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        const query = new this.parseService.parse.Query(Addition);
        query.equalTo("objectId", additionId);
        return query.first().then((result) => {
            return result.destroy({});
        });
    }
    deleteAdditionalCategory(categoryId) {
        const Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        const query = new this.parseService.parse.Query(Category);
        query.equalTo('objectId', categoryId);
        return query.first().then((result) => {
            result.relation('additions').query().find().then(items => {
                items.forEach(item => item.destroy());
            });
            return result.destroy({});
        });
    }
    getAdditionById(additionId) {
        const Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        const query = new this.parseService.parse.Query(Addition);
        query.equalTo("objectId", additionId);
        return query.first().then((result) => {
            return AdditionCategoryHttp_1.convertToAdditionalModel(result);
        });
    }
    getAdditionCategories() {
        let category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        let query = new this.parseService.parse.Query(category);
        return query.find().then(res => {
            let categories = [];
            for (let item of res) {
                categories.push(AdditionCategoryHttp_1.convertToAdditionalCategoryModel(item));
            }
            return categories;
        });
    }
    getAdditionCategoriesWithAdditions() {
        return undefined;
    }
    getAdditionalCategoryById(categoryId) {
        let categoryModel;
        let category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        let query = new this.parseService.parse.Query(category);
        return query.equalTo('objectId', categoryId).first().then(res => {
            categoryModel = AdditionCategoryHttp_1.convertToAdditionalCategoryModel(res);
            categoryModel.additions = [];
            return res.relation('additions').query().each(additional => {
                categoryModel.additions.push(AdditionCategoryHttp_1.convertToAdditionalModel(additional));
            }).then(additions => {
                return categoryModel;
            });
        }).then(res => categoryModel);
    }
    getAdditionsByCategoryId(categoryId) {
        return undefined;
    }
    getAllAdditions() {
        let addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        let query = new this.parseService.parse.Query(addition);
        return query.find().then(res => {
            let additions = [];
            for (let item of res) {
                additions.push(AdditionCategoryHttp_1.convertToAdditionalModel(item));
            }
            return additions;
        });
    }
    saveAddition(additionToSave, newCategoryId, oldCategoryId) {
        let Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.ADDITION);
        let addition = new Addition();
        this.setFields(addition, additionToSave);
        let promise;
        let _this = this;
        if (additionToSave.id) {
            const query = new this.parseService.parse.Query(Addition);
            query.equalTo("objectId", additionToSave.id);
            promise = query.first().then(res => {
                this.setFields(res, additionToSave);
                return res.save().then(savedAddition => {
                    if (newCategoryId !== oldCategoryId) {
                        let Category = _this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
                        let query = new _this.parseService.parse.Query(Category);
                        query.equalTo("objectId", oldCategoryId);
                        return query.first().then(category => {
                            category.relation('additions').remove(savedAddition);
                            return category.save();
                        }).then(res => this.saveCategoryRelatedAddition(savedAddition, newCategoryId));
                    }
                    else {
                        return savedAddition.save();
                    }
                });
            });
        }
        else {
            promise = addition.save().then(addition => this.saveCategoryRelatedAddition(addition, newCategoryId));
        }
        return promise;
    }
    saveAdditionalCategory(model) {
        let Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        let category = new Category();
        this.setCategoryFields(category, model);
        let promise;
        if (model.id) {
            const query = new this.parseService.parse.Query(Category);
            query.equalTo('objectId', model.id);
            promise = query.first().then(res => {
                this.setCategoryFields(res, model);
                return res.save();
            });
        }
        else {
            promise = category.save().then(category => {
                return category.save();
            });
        }
        return promise;
    }
    setFields(item, model) {
        item.set('name', model.name);
        item.set('imageUrl', model.imageUrl);
    }
    setCategoryFields(category, model) {
        category.set('name', model.name);
        category.set('multiSelect', model.multiSelect);
    }
    static convertToAdditionalCategoryModel(item) {
        return new AdditionCategoryModel(item.id, item.attributes['name'], item.attributes['multiSelect']);
    }
    static convertToAdditionalModel(item) {
        return new AdditionModel(item.id, item.attributes['name'], item.attributes['imageUrl']);
    }
    saveCategoryRelatedAddition(addition, categoryId) {
        let Category = this.parseService.parse.Object.extend(AdditionCategoryHttp_1.CATEGORY);
        let query = new this.parseService.parse.Query(Category);
        query.equalTo("objectId", categoryId);
        return query.first().then(category => {
            category.relation('additions').add(addition);
            return category.save();
        });
    }
    getAdditionCategoryByAdditionId(additionalId) {
        let productQuery = new this.parseService.parse.Query(AdditionCategoryHttp_1.ADDITION);
        productQuery.contains('objectId', additionalId);
        let categoryQuery = new this.parseService.parse.Query(AdditionCategoryHttp_1.CATEGORY);
        categoryQuery.matchesQuery('additions', productQuery);
        return categoryQuery.first().then(function (list) {
            return AdditionCategoryHttp_1.convertToAdditionalCategoryModel(list);
        }, function (error) {
            console.log(error);
        });
    }
};
AdditionCategoryHttp.CATEGORY = "AdditionCategory";
AdditionCategoryHttp.ADDITION = "Addition";
AdditionCategoryHttp = AdditionCategoryHttp_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], AdditionCategoryHttp);
export { AdditionCategoryHttp };
//# sourceMappingURL=addition-category-http.service.js.map