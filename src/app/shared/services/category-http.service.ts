/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {CategoryModel} from '../model/category.model';
import {ParseService} from './parse.service';
import {from, Observable} from 'rxjs';
import {ProductViewModel} from '../model/product-view.model';
import {forkJoin} from 'rxjs/index';
import {map} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';
import * as Parse from 'parse';

@Injectable()
export class CategoryHttpService extends CategoryService {

  static CATEGORY = 'Category';

  private _categories: CategoryModel[] = [];

  constructor(private parseService: ParseService) {
    super();
  }

  get categories(): CategoryModel[] {
    if (this._categories.length === 0) {
      this.getCategories().subscribe(res => {
        this._categories = res;
      });
    }
    return this._categories;
  }

  getCategories(): Observable<Array<CategoryModel>> {
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category);
    let promise = query.find().then(res=>{
      let categories = [];
      for (let item of res) {
        categories.push(CategoryHttpService.convertToCategoryModel(item));
      }
      return categories;
    });
    return from(promise);
  }

  static convertToCategoryModel(item: any, products?: Observable<ProductViewModel[]>): CategoryModel {
    if (products) {
      return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], products);
    }
    return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl']);
  }

  getCategoryItems(categoryId: string): Observable<Array<ProductViewModel>> {
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category).equalTo('objectId', categoryId);
    let promise = query.first().then(res =>{
      return res.relation('products').query().find().then(products=>{
        return products;
      })
    });
    return from(promise);
  }

  getCategoriesWithDependency(): Observable<Array<CategoryModel>> {
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category);
    let promise = query.find().then((res: any[])=>{
      return res;
    });
    return from(promise).pipe(
      map((res: any[]) => {
        let categories: Array<CategoryModel> = [];
        for (let category of res) {
          let products$: Observable<ProductViewModel[]> = from(category.relation('products').query().find().then((product: any[]) => {
            return CategoryHttpService.forOne(product);
          }));
          let deliveryLocation = CategoryHttpService.convertToCategoryModel(category, products$);

          categories.push(deliveryLocation);
        }
        return categories;
      }),
      flatMap(
        (categories: CategoryModel[]) => forkJoin(categories.map(
          (categoryFork: CategoryModel) => {
            return forkJoin(categoryFork.$items).pipe(map((products: ProductViewModel[][]) => {
              categoryFork.items = products[0];
              return categoryFork;
            }));
          }
        ))
      ));
  }

  private static parseObjectToProductView(parseObject: any): ProductViewModel {
    return new ProductViewModel(parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'],
      parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'],
      parseObject.attributes['pathParam']);
  }

  private static forOne(parseObject: any[]): ProductViewModel[] {
    let items: ProductViewModel[] = [];
    for (let item of parseObject) {
      items.push(CategoryHttpService.parseObjectToProductView(item));
    }
    return items;
  }

  getCategoryByProductId(productId: string): Observable<CategoryModel> {
    let productQuery = new this.parseService.parse.Query("Product");
    productQuery.contains("objectId", productId);
    let categoryQuery = new this.parseService.parse.Query(CategoryHttpService.CATEGORY);
    categoryQuery.matchesQuery("products", productQuery);
    let promise = categoryQuery.first().then(function (list) {
      return CategoryHttpService.convertToCategoryModel(list);
    }, function (error) {
      console.log(error);
    });
    return from(promise);
  }

  deleteCategory(id: string): Observable<any> {
    const Product = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    const query = new this.parseService.parse.Query(Product);
    query.equalTo("objectId", id);
    const promise = query.first().then((result) =>{
      result.relation('products').query().find().then(items => {
        items.forEach(item => item.destroy())
      });
      return result.destroy({});
    });
    return from(promise);
  }

  saveCategory(model: CategoryModel): Observable<any> {
    let Category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let category = new Category();
    this.setFields(category, model);
    let promise;
    if (model.id) {
      const query = new this.parseService.parse.Query(Category);
      query.equalTo("objectId", model.id);
      promise = query.first().then(
        res => {
          this.setFields(res, model);
          return res.save()
        }
      );
    } else {
      promise = category.save().then(category => {
        return category.save()
      });
    }
    return from(promise);
  }

  private setFields(category: any, model: CategoryModel) {
      category.set('title', model.title);
      category.set('description', model.description);
      category.set('imageUrl', model.imageUrl);
  }
}
