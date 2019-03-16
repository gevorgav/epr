/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {ProductService} from './product.service';
import {ProductModel} from '../model/product.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {ProductViewModel} from '../model/product-view.model';

Injectable();
export class ProductHttpService extends ProductService {

  getProduct(id: number): ProductModel {
    return undefined;
  }

  getProductByCategoryId(categoryId: number) {
  }

  getProductQuestions(id: number): Array<QuestionAnswerModel> {
    return undefined;
  }

  getSimilarProducts(id: number): Array<ProductViewModel> {
    return undefined;
  }

  getBestDealProducts(count: number): Array<ProductViewModel> {
    return undefined;
  }

}
