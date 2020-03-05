/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {CategoryModel} from '../model/category.model';
import {Observable} from 'rxjs';
import {ProductViewModel} from '../model/product-view.model';

export abstract class CategoryService {
  abstract getCategories(): Observable<Array<CategoryModel>>;
  abstract getCategoriesWithDependency(): Observable<Array<CategoryModel>>;
  abstract getCategoriesByPathParamWithDependency(pathParam: string): Observable<CategoryModel>;
  abstract getCategoryItems(categoryId: string): Observable<Array<ProductViewModel>>;
  abstract getCategoryByProductId(productId: string): Observable<CategoryModel>;
  abstract deleteCategory(id: string): Observable<any>;
  abstract saveCategory(model: CategoryModel): Observable<any>;
}
