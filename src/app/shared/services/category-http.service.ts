/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {CategoryModel} from '../model/category.model';
import {ParseService} from './parse.service';
import {forkJoin, from, Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';
import {ProductModel} from '../model/product.model';
import {ProductHttpService} from './product-http.service';

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
    let promise = query.find().then(res => {
      let categories = [];
      for (let item of res) {
        categories.push(CategoryHttpService.convertToCategoryModel(item));
      }
      return categories;
    });
    return from(promise);
  }

  static convertToCategoryModel(item: any, products?: Observable<ProductModel[]>): CategoryModel {
    if (products) {
      return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'],
        item.attributes['metaDescription'], item.attributes['pathParam'], item.attributes['order'], products);
    }
    return new CategoryModel(item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'],
      item.attributes['metaDescription'], item.attributes['pathParam'], item.attributes['order']);
  }

  getCategoryItems(categoryId: string): Observable<Array<ProductModel>> {
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category).equalTo('objectId', categoryId);
    let promise = query.first().then(res => {
      return res.relation('products').query().find().then(res => {
        return CategoryHttpService.forOne(res);
      });
    });
    return from(promise);
  }

  getCategoriesByPathParamWithDependency(pathParam: string): Observable<CategoryModel>{
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category);
    let promise = query.equalTo('pathParam', pathParam).first().then((res: any) => {
      let products$: ProductModel[] = [];
      return res.relation('products').query().each((product: any) => {
        products$.push(CategoryHttpService.parseObjectToProductModel(product));
      }).then(res1 => new CategoryModel(res.id, res.attributes['title'], res.attributes['description'], res.attributes['imageUrl'],
        res.attributes['metaDescription'], res.attributes['pathParam'], res.attributes['order'], null, products$));
    });
    return from(promise);
  }

  getCategoriesWithDependency(): Observable<Array<CategoryModel>> {
    let category = this.parseService.parse.Object.extend(CategoryHttpService.CATEGORY);
    let query = new this.parseService.parse.Query(category);
    let promise = query.find().then((res: any[]) => {
      return res;
    });
    return from(promise).pipe(
      map((res: any[]) => {
        let categories: Array<CategoryModel> = [];
        for (let category of res) {
          let products$: Observable<ProductModel[]> = from(category.relation('products').query().find().then((product: any[]) => {
            return CategoryHttpService.forOne(product);
          }));
          let categoryModel = CategoryHttpService.convertToCategoryModel(category, products$);

          categories.push(categoryModel);
        }
        return categories;
      }),
      flatMap(
        (categories: CategoryModel[]) => forkJoin(categories.map(
          (categoryFork: CategoryModel) => {
            return forkJoin(categoryFork.$items).pipe(map((products: ProductModel[][]) => {
              categoryFork.items = products[0];
              return categoryFork;
            }));
          }
        ))
      ));
  }



  private static parseObjectToProductModel(parseObject: any): ProductModel {
    return new ProductModel(
      parseObject.id,
      parseObject.attributes['title'],
      parseObject.attributes['price'],
      parseObject.attributes['images'],
      parseObject.attributes['isNew'],
      parseObject.attributes['isHotDeal'],
      parseObject.attributes['itemSize'],
      parseObject.attributes['pathParam'],
      parseObject.attributes['description'],
      parseObject.attributes['rentalTerms'],
      parseObject.attributes['spaceRequired'],
      parseObject.attributes['setupPolicy'] ? new Map(Object.entries(parseObject.attributes['setupPolicy'])) : null,
      parseObject.attributes['instructions'],
      parseObject.attributes['video'],
      parseObject.attributes['safetyRules'],
      parseObject.attributes['minTime'],
      parseObject.attributes['minPrice'],
      parseObject.attributes['nightPrice'],
      parseObject.attributes['count'],
      [],
      parseObject.attributes['metaDescription']
    );
  }

  private static forOne(parseObject: any[]): ProductModel[] {
    let items: ProductModel[] = [];
    for (let item of parseObject) {
      items.push(CategoryHttpService.parseObjectToProductModel(item));
    }
    return items;
  }

  getCategoryByProductId(productId: string): Observable<CategoryModel> {
    let productQuery = new this.parseService.parse.Query('Product');
    productQuery.contains('objectId', productId);
    let categoryQuery = new this.parseService.parse.Query(CategoryHttpService.CATEGORY);
    categoryQuery.matchesQuery('products', productQuery);
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
    query.equalTo('objectId', id);
    const promise = query.first().then((result) => {
      result.relation('products').query().find().then(items => {
        items.forEach(item => item.destroy());
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
      query.equalTo('objectId', model.id);
      promise = query.first().then(
        res => {
          this.setFields(res, model);
          return res.save();
        }
      );
    } else {
      promise = category.save().then(category => {
        return category.save();
      });
    }
    return from(promise);
  }

  static pathParamFromName(name: string) {
    return name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
  }

  private setFields(category: any, model: CategoryModel) {
    category.set('title', model.title);
    category.set('description', model.description);
    category.set('imageUrl', model.imageUrl);
    category.set('metaDescription', model.metaDescription);
    category.set('pathParam', CategoryHttpService.pathParamFromName(model.title));
  }
}
