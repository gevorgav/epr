var ProductHttpService_1;
import { __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from '../model/product.model';
import { ProductViewModel } from '../model/product-view.model';
import { from } from 'rxjs';
import { ParseService } from './parse.service';
import { CategoryHttpService } from './category-http.service';
import { AdditionCategoryHttp } from './addition-category-http.service';
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
let ProductHttpService = ProductHttpService_1 = class ProductHttpService extends ProductService {
    constructor(parseService) {
        super();
        this.parseService = parseService;
    }
    getAllProducts() {
        let Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        let query = new this.parseService.parse.Query(Product);
        return query.find().then(res => {
            let products = [];
            for (let item of res) {
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
    }
    getProduct(id) {
        const Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        const query = new this.parseService.parse.Query(Product);
        query.equalTo('objectId', id);
        return query.first().then((result) => {
            return this.loadProductAdditionalCategory(result).then(res => {
                let productModel = ProductHttpService_1.convertToProductModel(result);
                productModel.additionalCategories = res;
                return productModel;
            });
        });
    }
    loadProductAdditionalCategory(res) {
        let productAdditionalCategory = [];
        return res.relation('productAdditionalCategory').query().each(resProd => {
            productAdditionalCategory.push(resProd.id);
        }).then(() => {
            return productAdditionalCategory;
        });
    }
    deleteProduct(id) {
        const Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        const query = new this.parseService.parse.Query(Product);
        query.equalTo('objectId', id);
        return query.first().then((result) => {
            return result.destroy({});
        });
    }
    saveProduct(productToSave, newCategoryId, oldCategoryId, oldAdditionalCategories) {
        let Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        let product = new Product();
        this.setFields(product, productToSave, []);
        let promise;
        let _this = this;
        if (productToSave.id) {
            const query = new this.parseService.parse.Query(Product);
            query.equalTo('objectId', productToSave.id);
            promise = query.first().then(res => {
                this.setFields(res, productToSave, oldAdditionalCategories);
                return res.save().then(savedProduct => {
                    if (newCategoryId !== oldCategoryId) {
                        let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                        let query = new _this.parseService.parse.Query(Category);
                        query.equalTo('objectId', oldCategoryId);
                        return query.first().then(category => {
                            category.relation('products').remove(savedProduct);
                            return category.save();
                        }).then(res => {
                            let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                            let query = new _this.parseService.parse.Query(Category);
                            query.equalTo('objectId', newCategoryId);
                            return query.first().then(category => {
                                category.relation('products').add(savedProduct);
                                return category.save();
                            });
                        });
                    }
                });
            });
        }
        else {
            promise = product.save().then(product => {
                let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                let query = new _this.parseService.parse.Query(Category);
                query.equalTo('objectId', newCategoryId);
                return query.first().then(category => {
                    category.relation('products').add(product);
                    return category.save();
                });
            });
        }
        return from(promise);
    }
    getBestDealProducts(count) {
        return undefined;
    }
    getProductQuestions(id) {
        return undefined;
    }
    getSimilarProducts(id) {
        return undefined;
    }
    getProductByCategoryId(categoryId) {
    }
    // conversions
    static convertToProductViewModel(item) {
        return new ProductViewModel(item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam']);
    }
    static convertToProductModel(item) {
        return new ProductModel(item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam'], item.attributes['description'], item.attributes['rentalTerms'], item.attributes['spaceRequired'], item.attributes['setupPolicy'] ? new Map(Object.entries(item.attributes['setupPolicy'])) : null, item.attributes['instructions'], item.attributes['video'], item.attributes['safetyRules'], item.attributes['minTime'], item.attributes['minPrice'], item.attributes['nightPrice'], item.attributes['count'], [], item.attributes['metaDescription'], item.attributes['pageTitle'], item.attributes['relation']);
    }
    getProducts(count) {
        let product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        let query = new this.parseService.parse.Query(product);
        return query.find().then(res => {
            let products = [];
            for (let item of res) {
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
    }
    setFields(product, productToSave, oldAdditionalCategories) {
        product.set('title', productToSave.title);
        product.set('price', productToSave.price);
        product.set('images', productToSave.images);
        product.set('isNew', productToSave.isNew);
        product.set('isHotDeal', productToSave.isHotDeal);
        product.set('itemSize', productToSave.itemSize);
        product.set('description', productToSave.description);
        product.set('rentalTerms', productToSave.rentalTerms);
        product.set('spaceRequired', productToSave.spaceRequired);
        product.set('setupPolicy', this.mapToObject(productToSave.setupPolicy));
        product.set('instructions', productToSave.instructions);
        product.set('video', productToSave.video);
        product.set('safetyRules', productToSave.safetyRules);
        product.set('minTime', productToSave.minTime);
        product.set('minPrice', productToSave.minPrice);
        product.set('nightPrice', productToSave.nightPrice);
        product.set('count', productToSave.count);
        product.set('metaDescription', productToSave.metaDescription);
        product.set('pageTitle', productToSave.pageTitle);
        product.set('relation', productToSave.relation);
        product.set('pathParam', ProductHttpService_1.pathParamFromName(productToSave.title));
        if (oldAdditionalCategories && oldAdditionalCategories.length) {
            product.relation('productAdditionalCategory').remove(this.getAdditionalCategoryRelations(oldAdditionalCategories));
        }
        if (productToSave.additionalCategories && productToSave.additionalCategories.length) {
            product.relation('productAdditionalCategory').add(this.getAdditionalCategoryRelations(productToSave.additionalCategories));
        }
    }
    static pathParamFromName(name) {
        return name.replace(/[^a-zA-Z0-9- ]/g, '').trim().replace(/\s/g, '-');
    }
    getProductByPatch(patch) {
        let product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        let query = new this.parseService.parse.Query(product);
        query.equalTo('pathParam', patch);
        return query.first().then(resProd => {
            if (!resProd) {
                return null;
            }
            else {
                return this.loadProductAdditionalCategory(resProd).then(res => {
                    let productModel = ProductHttpService_1.convertToProductModel(resProd);
                    productModel.additionalCategories = res;
                    return productModel;
                });
            }
        });
    }
    mapToObject(map) {
        const obj = {};
        map.forEach((v, k) => {
            obj[k] = v;
        });
        return obj;
    }
    getAdditionalCategoryRelations(additionalCategories) {
        const CategoryParse = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
        let productsParse = [];
        additionalCategories.forEach(value => {
            productsParse.push(new CategoryParse({ id: value }));
        });
        return productsParse;
    }
    getProductsByName(name) {
        let productQuery = new this.parseService.parse.Query(ProductHttpService_1.PRODUCT);
        let products = [];
        return productQuery.contains('title', name).each(res => {
            products.push(ProductHttpService_1.convertToProductModel(res));
        }).then(res => {
            return products;
        });
    }
};
ProductHttpService.PRODUCT = 'Product';
ProductHttpService = ProductHttpService_1 = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [ParseService])
], ProductHttpService);
export { ProductHttpService };
//# sourceMappingURL=product-http.service.js.map