import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AdditionCategoryModel} from '../model/addition-category.model';
import {AdditionModel} from '../model/addition.model';

@Injectable()
export abstract class AdditionCategoryService {
  abstract getAdditionCategories(): Observable<AdditionCategoryModel[]>;

  abstract getAdditionCategoriesWithAdditions(): Observable<AdditionCategoryModel[]>;

  abstract getAdditionCategoryByAdditionId(additionalId: string): Observable<AdditionCategoryModel>;

  abstract getAdditionalCategoryById(categoryId: string): Observable<AdditionCategoryModel>;

  abstract deleteAdditionalCategory(categoryId: string): Observable<boolean>;

  abstract saveAdditionalCategory(category: AdditionCategoryModel): Observable<boolean>;

  abstract getAllAdditions(): Observable<AdditionModel[]>;

  abstract getAdditionsByCategoryId(categoryId: string): Observable<AdditionModel[]>;

  abstract getAdditionById(additionId: string): Observable<AdditionModel>;

  abstract deleteAddition(additionId: string): Observable<boolean>;

  abstract saveAddition(addition: AdditionModel, newCategoryId: string, oldCategoryId?: string): Observable<boolean>;
}
