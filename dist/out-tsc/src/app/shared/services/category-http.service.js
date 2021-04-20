var CategoryHttpService_1;
import { __decorate, __metadata } from "tslib";
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
let CategoryHttpService = CategoryHttpService_1 = class CategoryHttpService extends CategoryService {
    constructor(parseService) {
        super();
        this.parseService = parseService;
        this._categories = [];
    }
    get categories() {
        if (this._categories.length === 0) {
            this.getCategories().then(res => {
                this._categories = res;
            });
        }
        return this._categories;
    }
    getCategories() {
        let category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        let query = new this.parseService.parse.Query(category);
        return query.find().then(res => {
            let categories = [];
            for (let item of res) {
                categories.push(CategoryHttpService_1.convertToCategoryModel(item));
            }
            return categories;
        });
    }
    static convertToCategoryModel(item, products) {
        if (products) {
            return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['metaDescription'], item.attributes['pathParam'], item.attributes['pageTitle'], item.attributes['order'], products);
        }
        return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['metaDescription'], item.attributes['pathParam'], item.attributes['pageTitle'], item.attributes['order']);
    }
    getCategoryItems(categoryId) {
        let category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        let query = new this.parseService.parse.Query(category).equalTo('objectId', categoryId);
        return query.first().then(res => {
            return res.relation('products').query().find().then(res => {
                return CategoryHttpService_1.forOne(res);
            });
        });
    }
    getCategoriesByPathParamWithDependency(pathParam) {
        let category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        let query = new this.parseService.parse.Query(category);
        return query.equalTo('pathParam', pathParam).first().then((res) => {
            let products$ = [];
            return res.relation('products').query().each((product) => {
                products$.push(CategoryHttpService_1.parseObjectToProductModel(product));
            }).then(res1 => new CategoryModel(res.id, res.attributes['title'], res.attributes['description'], res.attributes['imageUrl'], res.attributes['metaDescription'], res.attributes['pathParam'], res.attributes['pageTitle'], res.attributes['order'], null, products$));
        });
    }
    getCategoriesWithDependency() {
        let category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        let query = new this.parseService.parse.Query(category);
        let promise = query.find().then((res) => {
            return res;
        });
        return from(promise).pipe(map((res) => {
            let categories = [];
            for (let category of res) {
                let products$ = category.relation('products').query().find().then((product) => {
                    return CategoryHttpService_1.forOne(product);
                });
                let categoryModel = CategoryHttpService_1.convertToCategoryModel(category, products$);
                categories.push(categoryModel);
            }
            return categories;
        }), flatMap((categories) => forkJoin(categories.map((categoryFork) => {
            return forkJoin(categoryFork.$items).pipe(map((products) => {
                categoryFork.items = products[0];
                return categoryFork;
            }));
        }))));
    }
    static parseObjectToProductModel(parseObject) {
        return new ProductModel(parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'], parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'], parseObject.attributes['pathParam'], parseObject.attributes['description'], parseObject.attributes['rentalTerms'], parseObject.attributes['spaceRequired'], parseObject.attributes['setupPolicy'] ? new Map(Object.entries(parseObject.attributes['setupPolicy'])) : null, parseObject.attributes['instructions'], parseObject.attributes['video'], parseObject.attributes['safetyRules'], parseObject.attributes['minTime'], parseObject.attributes['minPrice'], parseObject.attributes['nightPrice'], parseObject.attributes['count'], [], parseObject.attributes['metaDescription'], parseObject.attributes['pageTitle'], parseObject.attributes['relation']);
    }
    static forOne(parseObject) {
        let items = [];
        for (let item of parseObject) {
            items.push(CategoryHttpService_1.parseObjectToProductModel(item));
        }
        return items;
    }
    getCategoryByProductId(productId) {
        let productQuery = new this.parseService.parse.Query('Product');
        productQuery.contains('objectId', productId);
        let categoryQuery = new this.parseService.parse.Query(CategoryHttpService_1.CATEGORY);
        categoryQuery.matchesQuery('products', productQuery);
        return categoryQuery.first().then(function (list) {
            return CategoryHttpService_1.convertToCategoryModel(list);
        }, function (error) {
            console.log(error);
        });
    }
    deleteCategory(id) {
        const Product = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        const query = new this.parseService.parse.Query(Product);
        query.equalTo('objectId', id);
        return query.first().then((result) => {
            result.relation('products').query().find().then(items => {
                items.forEach(item => item.destroy());
            });
            return result.destroy({});
        });
    }
    saveCategory(model) {
        let Category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        let category = new Category();
        this.setFields(category, model);
        let promise;
        if (model.id) {
            const query = new this.parseService.parse.Query(Category);
            query.equalTo('objectId', model.id);
            promise = query.first().then(res => {
                this.setFields(res, model);
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
    static pathParamFromName(name) {
        return name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
    }
    setFields(category, model) {
        category.set('title', model.title);
        category.set('description', model.description);
        category.set('imageUrl', model.imageUrl);
        category.set('metaDescription', model.metaDescription);
        category.set('pathParam', CategoryHttpService_1.pathParamFromName(model.title));
        category.set('pageTitle', model.pageTitle);
    }
};
CategoryHttpService.CATEGORY = 'Category';
CategoryHttpService = CategoryHttpService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], CategoryHttpService);
export { CategoryHttpService };
//# sourceMappingURL=category-http.service.js.map