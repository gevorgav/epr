/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {CategoryModel} from '../model/category.model';

export abstract class CategoryService {
  abstract getCategories(): Array<CategoryModel>;
}
