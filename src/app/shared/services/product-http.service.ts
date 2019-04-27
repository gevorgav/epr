import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {ProductModel} from '../model/product.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {ProductViewModel} from '../model/product-view.model';
import {from, Observable} from "rxjs";
import {ParseService} from "./parse.service";
import {handleError} from '../util/error-handler';

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
@Injectable()
export class ProductHttpService extends ProductService {

  static PRODUCT = "Product";

  constructor(private parseService: ParseService) {
    super();
  }

  getAllProducts(): Observable<ProductViewModel[]> {
    let Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parseService.parse.Query(Product);
    let promise = query.find().then(res => {
      let products: ProductViewModel [] = [];
      for (let item of res) {
        products.push(ProductHttpService.convertToProductViewModel(item))
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
      return ProductHttpService.convertToProductModel(result);
    });
    return from(promise);
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

  saveProduct(productToSave: ProductModel) {
    let Product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let product = new Product();
    this.setFields(product, productToSave);
    let promise;
    if (productToSave.id) {
      const query = new this.parseService.parse.Query(Product);
      query.equalTo("objectId", productToSave.id);
      promise = query.first().then(
        res => {
          this.setFields(res, productToSave);
          return res.save()
        }
      );
    } else {
      promise = product.save().then(product => {
        return product.save()
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

  private static convertToProductModel(item: any) {
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
      new Map(Object.entries(item.attributes['setupPolicy'])),
      item.attributes['instructions'],
      item.attributes['video'],
      item.attributes['safetyRules']
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

  private setFields(product: any, productToSave: ProductModel) {
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
      product.set('pathParam', this.pathParamFromName(productToSave.title));
  }

  pathParamFromName(name: string) {
    return name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
  }

  getProductByPatch(patch: string): Observable<ProductModel> {
    let product = this.parseService.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parseService.parse.Query(product);
    query.equalTo('pathParam', patch);
    let promise = query.first().then(res=>{
      return res ? ProductHttpService.convertToProductModel(res) : null;
    });
    return from(promise);
  }


  mapToObject(map: Map<any,any>) {
    const obj = {};
    map.forEach ((v,k) => { obj[k] = v });
    return obj;
  }
}
