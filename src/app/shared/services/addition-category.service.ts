import {Injectable} from '@angular/core';
import {AdditionCategoryModel} from '../model/addition-category.model';
import {AdditionModel} from '../model/addition.model';

@Injectable()
export abstract class AdditionCategoryService {
  abstract getAdditionCategories(): Promise<AdditionCategoryModel[]>;

  abstract getAdditionCategoriesWithAdditions(): Promise<AdditionCategoryModel[]>;

  abstract getAdditionCategoryByAdditionId(additionalId: string): Promise<AdditionCategoryModel>;

  abstract getAdditionalCategoryById(categoryId: string): Promise<AdditionCategoryModel>;

  abstract deleteAdditionalCategory(categoryId: string): Promise<boolean>;

  abstract saveAdditionalCategory(category: AdditionCategoryModel): Promise<boolean>;

  abstract getAllAdditions(): Promise<AdditionModel[]>;

  abstract getAdditionsByCategoryId(categoryId: string): Promise<AdditionModel[]>;

  abstract getAdditionById(additionId: string): Promise<AdditionModel>;

  abstract deleteAddition(additionId: string): Promise<boolean>;

  abstract saveAddition(addition: AdditionModel, newCategoryId: string, oldCategoryId?: string): Promise<boolean>;
}
