/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {ProductModel} from '../model/product.model';
import {ProductViewModel} from '../model/product-view.model';
import {QuestionAnswerModel} from '../model/product-question-answer.model';
import {Observable} from "rxjs";

export abstract class ProductService {
  abstract getAllProducts(): Observable<ProductModel[]>;
  abstract getProduct(id: string):  Observable<ProductModel>;
  abstract getProductByPatch(patch: string):  Observable<ProductModel>;
  abstract getProductByCategoryId(categoryId: number);
  abstract saveProduct(product: ProductModel, newCategoryId: string, oldCategoryId?: string, oldAdditionalCategories?: string[]);
  abstract deleteProduct(id: string);
  abstract getSimilarProducts(id: number): Observable<Array<ProductViewModel>>;
  abstract getProductQuestions(id: number): Observable<Array<QuestionAnswerModel>>;
  abstract getBestDealProducts(count: number): Observable<Array<ProductViewModel>>;
  abstract getProductsByName(name: string): Observable<ProductModel[]>;
}
