import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { ProductModel } from '../model/product.model';
import { ProductViewModel } from '../model/product-view.model';
import { from } from "rxjs";
import { ParseService } from "./parse.service";
import { CategoryHttpService } from "./category-http.service";
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
var ProductHttpService = /** @class */ (function (_super) {
    tslib_1.__extends(ProductHttpService, _super);
    function ProductHttpService(parseService) {
        var _this_1 = _super.call(this) || this;
        _this_1.parseService = parseService;
        return _this_1;
    }
    ProductHttpService_1 = ProductHttpService;
    ProductHttpService.prototype.getAllProducts = function () {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        var promise = query.find().then(function (res) {
            var products = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
        return from(promise);
    };
    ProductHttpService.prototype.getProduct = function (id) {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            return ProductHttpService_1.convertToProductModel(result);
        });
        return from(promise);
    };
    ProductHttpService.prototype.deleteProduct = function (id) {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            return result.destroy({});
        });
        return from(promise);
    };
    ProductHttpService.prototype.saveProduct = function (productToSave, newCategoryId, oldCategoryId) {
        var _this_1 = this;
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var product = new Product();
        this.setFields(product, productToSave);
        var promise;
        var _this = this;
        if (productToSave.id) {
            var query = new this.parseService.parse.Query(Product);
            query.equalTo("objectId", productToSave.id);
            promise = query.first().then(function (res) {
                _this_1.setFields(res, productToSave);
                return res.save().then(function (savedProduct) {
                    if (newCategoryId !== oldCategoryId) {
                        var Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                        var query_1 = new _this.parseService.parse.Query(Category);
                        query_1.equalTo("objectId", oldCategoryId);
                        return query_1.first().then(function (category) {
                            category.relation('products').remove(savedProduct);
                            return category.save();
                        }).then(function (res) {
                            var Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                            var query = new _this.parseService.parse.Query(Category);
                            query.equalTo("objectId", newCategoryId);
                            return query.first().then(function (category) {
                                category.relation('products').add(savedProduct);
                                return category.save();
                            });
                        });
                    }
                    else {
                        return savedProduct.save();
                    }
                });
            });
        }
        else {
            promise = product.save().then(function (product) {
                var Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                var query = new _this.parseService.parse.Query(Category);
                query.equalTo("objectId", newCategoryId);
                return query.first().then(function (category) {
                    category.relation('products').add(product);
                    return category.save();
                });
            });
        }
        return from(promise);
    };
    ProductHttpService.prototype.getBestDealProducts = function (count) {
        return undefined;
    };
    ProductHttpService.prototype.getProductQuestions = function (id) {
        return undefined;
    };
    ProductHttpService.prototype.getSimilarProducts = function (id) {
        return undefined;
    };
    ProductHttpService.prototype.getProductByCategoryId = function (categoryId) {
    };
    // conversions
    ProductHttpService.convertToProductViewModel = function (item) {
        return new ProductViewModel(item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam']);
    };
    ProductHttpService.convertToProductModel = function (item) {
        return new ProductModel(item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam'], item.attributes['description'], item.attributes['rentalTerms'], item.attributes['spaceRequired'], item.attributes['setupPolicy'] ? new Map(Object.entries(item.attributes['setupPolicy'])) : null, item.attributes['instructions'], item.attributes['video'], item.attributes['safetyRules'], item.attributes['minTime'], item.attributes['minPrice'], item.attributes['nightPrice'], item.attributes['count']);
    };
    ProductHttpService.prototype.getProducts = function (count) {
        var product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(product);
        var promise = query.find().then(function (res) {
            var products = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var item = res_2[_i];
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
        return from(promise);
    };
    ProductHttpService.prototype.setFields = function (product, productToSave) {
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
        product.set('pathParam', this.pathParamFromName(productToSave.title));
    };
    ProductHttpService.prototype.pathParamFromName = function (name) {
        return new Date().getTime() + '-' + name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
    };
    ProductHttpService.prototype.getProductByPatch = function (patch) {
        var product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(product);
        query.equalTo('pathParam', patch);
        var promise = query.first().then(function (res) {
            return res ? ProductHttpService_1.convertToProductModel(res) : null;
        });
        return from(promise);
    };
    ProductHttpService.prototype.mapToObject = function (map) {
        var obj = {};
        map.forEach(function (v, k) { obj[k] = v; });
        return obj;
    };
    var ProductHttpService_1;
    ProductHttpService.PRODUCT = "Product";
    ProductHttpService = ProductHttpService_1 = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [ParseService])
    ], ProductHttpService);
    return ProductHttpService;
}(ProductService));
export { ProductHttpService };
//# sourceMappingURL=product-http.service.js.map