import {Injectable} from '@angular/core';
import {AdditionCategoryService} from './addition-category.service';
import {AdditionModel} from '../model/addition.model';
import {AdditionCategoryModel} from '../model/addition-category.model';
import {ParseService} from './parse.service';

@Injectable()
export class AdditionCategoryHttp extends AdditionCategoryService{

  static CATEGORY = "AdditionCategory";
  static ADDITION = "Addition";

  constructor(private parseService: ParseService) {
    super();
  }

  deleteAddition(additionId: string): Promise<boolean> {
    const Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp.ADDITION);
    const query = new this.parseService.parse.Query(Addition);
    query.equalTo("objectId", additionId);
    return query.first().then((result) => {
      return result.destroy({});
    })
  }

  deleteAdditionalCategory(categoryId: string): Promise<boolean> {
    const Category = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    const query = new this.parseService.parse.Query(Category);
    query.equalTo('objectId', categoryId);
    return query.first().then((result) => {
      result.relation('additions').query().find().then(items => {
        items.forEach(item => item.destroy());
      });
      return result.destroy({});
    });
  }

  getAdditionById(additionId: string): Promise<AdditionModel> {
    const Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp.ADDITION);
    const query = new this.parseService.parse.Query(Addition);
    query.equalTo("objectId", additionId);
    return query.first().then((result) => {
      return AdditionCategoryHttp.convertToAdditionalModel(result);
    });
  }

  getAdditionCategories(): Promise<AdditionCategoryModel[]> {
    let category = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    let query = new this.parseService.parse.Query(category);
    return query.find().then(res => {
      let categories = [];
      for (let item of res) {
        categories.push(AdditionCategoryHttp.convertToAdditionalCategoryModel(item));
      }
      return categories;
    });
  }

  getAdditionCategoriesWithAdditions(): Promise<AdditionCategoryModel[]> {
    return undefined;
  }

  getAdditionalCategoryById(categoryId: string): Promise<AdditionCategoryModel> {
    let categoryModel: AdditionCategoryModel;

    let category = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    let query = new this.parseService.parse.Query(category);

    return query.equalTo('objectId', categoryId).first().then(res => {
      categoryModel = AdditionCategoryHttp.convertToAdditionalCategoryModel(res);
      categoryModel.additions = [];
      return res.relation('additions').query().each(additional => {
        categoryModel.additions.push(AdditionCategoryHttp.convertToAdditionalModel(additional));
      }).then(additions => {
        return categoryModel
      });
    }).then(res => categoryModel);
  }

  getAdditionsByCategoryId(categoryId: string): Promise<AdditionModel[]> {
    return undefined;
  }

  getAllAdditions(): Promise<AdditionModel[]> {
    let addition = this.parseService.parse.Object.extend(AdditionCategoryHttp.ADDITION);
    let query = new this.parseService.parse.Query(addition);
    return query.find().then(res => {
      let additions = [];
      for (let item of res) {
        additions.push(AdditionCategoryHttp.convertToAdditionalModel(item));
      }
      return additions;
    });
  }

  saveAddition(additionToSave: AdditionModel, newCategoryId: string, oldCategoryId?: string): Promise<boolean> {
    let Addition = this.parseService.parse.Object.extend(AdditionCategoryHttp.ADDITION);
    let addition = new Addition();
    this.setFields(addition, additionToSave);
    let promise;
    let _this = this;
    if (additionToSave.id) {
      const query = new this.parseService.parse.Query(Addition);
      query.equalTo("objectId", additionToSave.id);
      promise = query.first().then(
        res => {
          this.setFields(res, additionToSave);
          return res.save().then(
            savedAddition => {
              if (newCategoryId !== oldCategoryId) {
                let Category = _this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
                let query = new _this.parseService.parse.Query(Category);
                query.equalTo("objectId", oldCategoryId);
                return query.first().then(category => {
                  category.relation('additions').remove(savedAddition);
                  return category.save();
                }).then(res => this.saveCategoryRelatedAddition(savedAddition, newCategoryId));
              } else {
                return savedAddition.save()
              }
            }
          )
        }
      );
    } else {
      promise = addition.save().then(addition => this.saveCategoryRelatedAddition(addition, newCategoryId));
    }
    return promise;
  }

  saveAdditionalCategory(model: AdditionCategoryModel): Promise<boolean> {
    let Category = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    let category = new Category();
    this.setCategoryFields(category, model);
    let promise;
    if (model.id) {
      const query = new this.parseService.parse.Query(Category);
      query.equalTo('objectId', model.id);
      promise = query.first().then(
        res => {
          this.setCategoryFields(res, model);
          return res.save();
        }
      );
    } else {
      promise = category.save().then(category => {
        return category.save();
      });
    }
    return promise;
  }

  private setFields(item: any, model: AdditionModel) {
    item.set('name', model.name);
    item.set('imageUrl', model.imageUrl);
  }

  private setCategoryFields(category: any, model: AdditionCategoryModel) {
    category.set('name', model.name);
    category.set('multiSelect', model.multiSelect);
  }

  private static convertToAdditionalCategoryModel(item: any): AdditionCategoryModel{
    return new AdditionCategoryModel(item.id,
      item.attributes['name'],
      item.attributes['multiSelect']);
  }

  public static convertToAdditionalModel(item: any): AdditionModel{
    return new AdditionModel(item.id,
      item.attributes['name'],
      item.attributes['imageUrl']);
  }

  private saveCategoryRelatedAddition(addition: Parse.Schema, categoryId: string){
    let Category = this.parseService.parse.Object.extend(AdditionCategoryHttp.CATEGORY);
    let query = new this.parseService.parse.Query(Category);
    query.equalTo("objectId", categoryId);
    return query.first().then(category => {
      category.relation('additions').add(addition);
      return category.save();
    });
  }

  getAdditionCategoryByAdditionId(additionalId: string): Promise<AdditionCategoryModel> {
    let productQuery = new this.parseService.parse.Query(AdditionCategoryHttp.ADDITION);
    productQuery.contains('objectId', additionalId);
    let categoryQuery = new this.parseService.parse.Query(AdditionCategoryHttp.CATEGORY);
    categoryQuery.matchesQuery('additions', productQuery);
    return categoryQuery.first().then(function (list) {
      return AdditionCategoryHttp.convertToAdditionalCategoryModel(list);
    }, function (error) {
      console.log(error);
    });
  }

}
