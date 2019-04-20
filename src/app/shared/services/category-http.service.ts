/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {CategoryModel} from '../model/category.model';
import {ParseService} from './parse.service';
import {from, Observable} from 'rxjs';
import {ProductViewModel} from '../model/product-view.model';

@Injectable()
export class CategoryHttpService extends CategoryService{

  static CATEGORY = "Category";

  private _categories: CategoryModel[] = [];

  constructor(private parse: ParseService) {
    super();
  }

  get categories(): CategoryModel[] {
    if (this._categories.length === 0) {
      this.getCategories().subscribe(res=>{
        this._categories = res;
      })
    }
    return this._categories;
  }

  getCategories(): Observable<Array<CategoryModel>> {
    let category = this.parse.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parse.parse.Query(category);
    let promise = query.find().then(res=>{
      let categories = [];
      for (let item of res) {
        categories.push(CategoryHttpService.convertToCategoryModel(item));
      }
      return categories;
    });
    return from(promise);
  }

  static convertToCategoryModel(item: any): CategoryModel{
    return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl']);
  }

  getCategoryItems(categoryId: string): Observable<Array<ProductViewModel>> {
    return undefined;
  }

}
