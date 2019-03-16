/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {ProductModel} from '../model/product.model';
import {ProductViewModel} from '../model/product-view.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';

export abstract class ProductService {
  abstract getProduct(id: number): ProductModel;
  abstract getProductByCategoryId(categoryId: number);
  abstract getSimilarProducts(id: number): Array<ProductViewModel>;
  abstract getProductQuestions(id: number): Array<QuestionAnswerModel>;
  abstract getBestDealProducts(count: number): Array<ProductViewModel>;
}
