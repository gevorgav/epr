/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {ProductModel} from '../model/product.model';
import {ProductViewModel} from '../model/product-view.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {Observable} from 'rxjs';

export abstract class ProductService {
  abstract getProduct(id: string): ProductModel;
  abstract getProductByCategoryId(categoryId: string);
  abstract getSimilarProducts(id: string): Array<ProductViewModel>;
  abstract getProductQuestions(id: string): Array<QuestionAnswerModel>;
  abstract getBestDealProducts(count: number): Array<ProductViewModel>;
  abstract getProducts(count?: number):Observable<Array<ProductModel>>;
}
