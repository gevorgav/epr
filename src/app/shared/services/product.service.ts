/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {ProductModel} from '../model/product.model';
import {ProductViewModel} from '../model/product-view.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {Observable} from "rxjs";

export abstract class ProductService {
  abstract getAllProducts(): Promise<ProductModel[]>;
  abstract getProduct(id: string):  Promise<ProductModel>;
  abstract getProductByPatch(patch: string):  Promise<ProductModel>;
  abstract getProductByCategoryId(categoryId: number);
  abstract saveProduct(product: ProductModel, newCategoryId: string, oldCategoryId?: string, oldAdditionalCategories?: string[]);
  abstract deleteProduct(id: string);
  abstract getSimilarProducts(id: number): Promise<Array<ProductViewModel>>;
  abstract getProductQuestions(id: number): Promise<Array<QuestionAnswerModel>>;
  abstract getBestDealProducts(count: number): Promise<Array<ProductViewModel>>;
  abstract getProductsByName(name: string): Promise<ProductModel[]>;
}
