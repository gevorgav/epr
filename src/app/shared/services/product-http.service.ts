import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {ProductModel} from '../model/product.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {ProductViewModel} from '../model/product-view.model';
import {from, Observable} from "rxjs";
import {ParseService} from "./parse.service";
import {CategoryHttpService} from "./category-http.service";
import {AdditionCategoryHttp} from './addition-category-http.service';

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
@Injectable()
export class ProductHttpService extends ProductService {

  static PRODUCT = "Product";

  constructor(private parseService: ParseService) {
    super();
  }

  getAllProducts(): Observable<ProductModel[]> {
    let Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parseService.parse.Query(Product);
    let promise = query.find().then(res => {
      let products: ProductModel [] = [];
      for (let item of res) {
        products.push(ProductHttpService.convertToProductModel(item))
      }
      return products;
    });
    return from(promise);
  }

  getProduct(id: string): Observable<ProductModel> {
    const Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    const query = new this.parseService.parse.Query(Product);
    query.equalTo("objectId", id);
    const promise = query.first().then((result) =>{
      return this.loadProductAdditionalCategory(result).then(res=>{
        let productModel =  ProductHttpService.convertToProductModel(result);
        productModel.additionalCategories = res;
        return productModel;
      })
    });
    return from(promise);
  }

  private loadProductAdditionalCategory(res: any): Promise<string[]>{
    let productAdditionalCategory = [];
    return res.relation('productAdditionalCategory').query().each(resProd=>{
      productAdditionalCategory.push(resProd.id);
    }).then(()=>{
      return productAdditionalCategory
    })
  }

  deleteProduct(id: string) {
    const Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    const query = new this.parseService.parse.Query(Product);
    query.equalTo("objectId", id);
    const promise = query.first().then((result) =>{
      return result.destroy({});
    });
    return from(promise);
  }

  saveProduct(productToSave: ProductModel, newCategoryId: string, oldCategoryId?: string, oldAdditionalCategories?: string[]) {
    let Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let product = new Product();
    this.setFields(product, productToSave, []);
    let promise;
    let _this = this;
    if (productToSave.id) {
      const query = new this.parseService.parse.Query(Product);
      query.equalTo("objectId", productToSave.id);
      promise = query.first().then(
        res => {
          this.setFields(res, productToSave, oldAdditionalCategories);
          return res.save().then(
            savedProduct => {
              if (newCategoryId !== oldCategoryId) {
                let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                let query = new _this.parseService.parse.Query(Category);
                query.equalTo("objectId", oldCategoryId);
                return query.first().then(category => {
                  category.relation('products').remove(savedProduct);
                  return category.save();
                }).then(res => {
                  let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
                  let query = new _this.parseService.parse.Query(Category);
                  query.equalTo("objectId", newCategoryId);
                  return query.first().then(category => {
                    category.relation('products').add(savedProduct);
                    return category.save();
                  })
                });
              }
            }
          )
        }
      );
    } else {
      promise = product.save().then(product => {
        let Category = _this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
        let query = new _this.parseService.parse.Query(Category);
        query.equalTo("objectId", newCategoryId);
        return query.first().then(category => {
          category.relation('products').add(product);
          return category.save();
        });
      });
    }
    return from(promise);
  }

  getBestDealProducts(count: number): Observable<Array<ProductViewModel>> {
    return undefined;
  }

  getProductQuestions(id: number): Observable<Array<QuestionAnswerModel>> {
    return undefined;
  }

  getSimilarProducts(id: number): Observable<Array<ProductViewModel>> {
    return undefined;
  }

  getProductByCategoryId(categoryId: number) {
  }

  // conversions
  static convertToProductViewModel(item: any): ProductViewModel {
    return new ProductViewModel(
      item.id,
      item.attributes['title'],
      item.attributes['price'],
      item.attributes['images'],
      item.attributes['isNew'],
      item.attributes['isHotDeal'],
      item.attributes['itemSize'],
      item.attributes['pathParam']
    );
  }

  public static convertToProductModel(item: any) {
    return new ProductModel(
      item.id,
      item.attributes['title'],
      item.attributes['price'],
      item.attributes['images'],
      item.attributes['isNew'],
      item.attributes['isHotDeal'],
      item.attributes['itemSize'],
      item.attributes['pathParam'],
      item.attributes['description'],
      item.attributes['rentalTerms'],
      item.attributes['spaceRequired'],
      item.attributes['setupPolicy']?new Map(Object.entries(item.attributes['setupPolicy'])):null,
      item.attributes['instructions'],
      item.attributes['video'],
      item.attributes['safetyRules'],
      item.attributes['minTime'],
      item.attributes['minPrice'],
      item.attributes['nightPrice'],
      item.attributes['count'],
      [],
      item.attributes['metaDescription']
    )
  }

  getProducts(count?: number): Observable<Array<ProductModel>> {
    let product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parseService.parse.Query(product);
    let promise = query.find().then(res=>{
      let products = [];
      for (let item of res) {
        products.push(ProductHttpService.convertToProductModel(item));
      }
      return products;
    });
    return from(promise);
  }

  private setFields(product: any, productToSave: ProductModel, oldAdditionalCategories: string[]) {
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
      product.set('pathParam', ProductHttpService.pathParamFromName(productToSave.title));
      if (oldAdditionalCategories && oldAdditionalCategories.length){
        product.relation('productAdditionalCategory').remove(this.getAdditionalCategoryRelations(oldAdditionalCategories));
      }
      if (productToSave.additionalCategories && productToSave.additionalCategories.length){
        product.relation('productAdditionalCategory').add(this.getAdditionalCategoryRelations(productToSave.additionalCategories))
      }
  }

  static pathParamFromName(name: string) {
    return name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
  }

  getProductByPatch(patch: string): Observable<ProductModel> {
    let product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parseService.parse.Query(product);
    query.equalTo('pathParam', patch);
    let promise = query.first().then(resProd=>{
      if (!resProd){
        return null;
      } else {
        return this.loadProductAdditionalCategory(resProd).then(res=>{
          let productModel =  ProductHttpService.convertToProductModel(resProd);
          productModel.additionalCategories = res;
          return productModel;
        })
      }
    });
    return from(promise);
  }


  mapToObject(map: Map<any,any>) {
    const obj = {};
    map.forEach ((v,k) => { obj[k] = v });
    return obj;
  }

  private getAdditionalCategoryRelations(additionalCategories: string[]): any {
    const CategoryParse = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    let productsParse = [];
    additionalCategories.forEach(value=>{
      productsParse.push(new CategoryParse({id: value}))
    });
    return productsParse;
  }
}
