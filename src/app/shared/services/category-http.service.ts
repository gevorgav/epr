/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
import {Injectable} from '@angular/core';
import {CategoryService} from './category.service';
import {CategoryModel} from '../model/category.model';

Injectable();

export class CategoryHttpService extends CategoryService{
  getCategories(): Array<CategoryModel> {
    return undefined;
  }

}
