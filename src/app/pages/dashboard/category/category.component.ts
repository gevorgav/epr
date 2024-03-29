import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../../../shared/services/category.service';
import {CategoryModel} from '../../../shared/model/category.model';
import {CategoryPopupComponent} from './category-popup/category-popup.component';
import {handleError} from '../../../shared/util/error-handler';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: CategoryModel[];
  dataSource = new MatTableDataSource(this.categories);
  displayedColumns = ['title', 'edit', 'delete'];
  constructor(private categoryService: CategoryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.initCategories();
  }

  addCategory() {
    let dialogRef = this.dialog.open(CategoryPopupComponent, {
      data: {
        category: new CategoryModel(null, null, null, null, null, null, null)
      },
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.category) {
          this.categoryService.saveCategory(data.category)
            .then(() => {
                this.initCategories();
              }
            )
            .catch(error => handleError(error))
        }
      }
    )
  }

  edit(category: CategoryModel) {
    let dialogRef = this.dialog.open(CategoryPopupComponent, {
      data: {
        category
      },
      width: '80%',
      height: '95%'
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.category) {
          this.categoryService.saveCategory(data.category)
            .then(() => {
                this.initCategories();
              })
            .catch(error => handleError(error))
        }
      }
    )
  }

  remove(id: string) {
    this.categoryService.deleteCategory(id)
      .then(() => {
          this.initCategories();
        }
      )
      .catch(error => handleError(error))
  }

  private initCategories() {
    this.categoryService.getCategories()
      .then(
        res => {
          this.categories = res;
          this.dataSource = new MatTableDataSource(this.categories);
        }
      )
  }

  applyFilter($event) {
    this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
  }
}
