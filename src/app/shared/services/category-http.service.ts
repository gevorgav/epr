/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {CategoryModel} from '../model/category.model';
import {ParseService} from './parse.service';
import {from, Observable} from 'rxjs';
import {ProductViewModel} from '../model/product-view.model';
import {DeliveryChartModel, ZipCode} from '../model/delivery-chart.model';
import {forkJoin} from 'rxjs/index';
import {DeliveryChartHttpService} from './delivery-chart-http.service';
import {map} from 'rxjs/operators';
import {flatMap} from 'rxjs/internal/operators';

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

  static convertToCategoryModel(item: any, products?: Observable<ProductViewModel[]>): CategoryModel{
    if (products){
      return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], products);
    }
    return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl']);
  }

  getCategoryItems(categoryId: string): Observable<Array<ProductViewModel>> {
    return undefined;
  }
  
  getCategoriesWithDependency(): Observable<Array<CategoryModel>> {
    let category = this.parse.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parse.parse.Query(category);
    let promise = query.find().then((res: any[])=>{
      return res;
    });
    return from(promise).pipe(
      map((res: any[])=>{
        let categories : Array<CategoryModel> = [];
        for (let category of res){
          let products$: Observable<ProductViewModel[]> = from(category.relation('products').query().find().then((product: any[])=>{
            return CategoryHttpService.forOne(product);
          }));
          let deliveryLocation = CategoryHttpService.convertToCategoryModel(category, products$) ;
  
          categories.push(deliveryLocation);
        }
        return categories;
      }),
      flatMap(
        (categories: CategoryModel[])=> forkJoin(categories.map(
          (categoryFork:CategoryModel)=>{
            return forkJoin(categoryFork.$items).pipe(map((products:ProductViewModel[][])=>{
              categoryFork.items = products[0];
              return categoryFork;
            }))
          }
        ))
      ));
  }
  
  private static parseObjectToProductView(parseObject: any): ProductViewModel{
    return new ProductViewModel(parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'],
      parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'],
      parseObject.attributes['pathParam']);
  }
  
  private static forOne(parseObject: any[]): ProductViewModel[]{
    let items: ProductViewModel[] =  [];
    for (let item of parseObject) {
      items.push(CategoryHttpService.parseObjectToProductView(item));
    }
    return items;
  }
}
