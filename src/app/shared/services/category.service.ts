/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {CategoryModel} from '../model/category.model';
import {Observable} from 'rxjs';
import {ProductViewModel} from '../model/product-view.model';

export abstract class CategoryService {
  abstract getCategories(): Promise<Array<CategoryModel>>;
  abstract getCategoriesWithDependency(): Observable<Array<CategoryModel>>;
  abstract getCategoriesByPathParamWithDependency(pathParam: string): Promise<CategoryModel>;
  abstract getCategoryItems(categoryId: string): Promise<Array<ProductViewModel>>;
  abstract getCategoryByProductId(productId: string): Promise<CategoryModel>;
  abstract deleteCategory(id: string): Promise<any>;
  abstract saveCategory(model: CategoryModel): Promise<any>;
}
