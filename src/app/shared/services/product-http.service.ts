/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {ProductModel} from '../model/product.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {ProductViewModel} from '../model/product-view.model';
import {ParseService} from './parse.service';
import {from, Observable} from 'rxjs';

@Injectable()
export class ProductHttpService extends ProductService {

  constructor(private parse: ParseService) {
    super();
  }

  static PRODUCT = "Product";
  
  getProduct(id: string): ProductModel {
    return undefined;
  }

  getProductByCategoryId(categoryId: string) {
  }

  getProductQuestions(id: string): Array<QuestionAnswerModel> {
    return undefined;
  }

  getSimilarProducts(id: string): Array<ProductViewModel> {
    return undefined;
  }

  getBestDealProducts(count: number): Array<ProductViewModel> {
    return undefined;
  }

  getProducts(count?: number): Observable<Array<ProductModel>> {
    let product = this.parse.parse.Object.extend(ProductHttpService.PRODUCT);
    let query = new this.parse.parse.Query(product);
    let promise = query.find().then(res=>{
      let products = [];
      for (let item of res) {
        products.push(ProductHttpService.convertToProductModel(item));
      }
      return products;
    });
    return from(promise);
  }

  private static convertToProductModel(item: any) {
    return new ProductModel(item['id'], item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'],
      item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam'], item.attributes['description'],
      item.attributes['rentalTerms'], item.attributes['spaceRequired'], item.attributes['setupPolicy'], item.attributes['instructions'],
      item.attributes['video'], item.attributes['safetyRules']);
  }
}
