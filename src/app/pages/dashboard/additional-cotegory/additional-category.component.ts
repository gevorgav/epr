import { Component, OnInit } from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {handleError} from '../../../shared/util/error-handler';
import {AdditionCategoryModel} from '../../../shared/model/addition-category.model';
import {AdditionalCategoryPopupComponent} from './additional-category-popup/additional-category-popup.component';
import {AdditionCategoryService} from '../../../shared/services/addition-category.service';

@Component({
  selector: 'app-additional-category',
  templateUrl: './additional-category.component.html',
  styleUrls: ['./additional-category.component.css']
})
export class AdditionalCategoryComponent implements OnInit {

  categories: AdditionCategoryModel[];
  dataSource = new MatTableDataSource(this.categories);
  displayedColumns = ['name', 'edit', 'delete'];
  constructor(private categoryService: AdditionCategoryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.initCategories();
  }

  addCategory() {
    let dialogRef = this.dialog.open(AdditionalCategoryPopupComponent, {
      data: {
        category: new AdditionCategoryModel(null, null, false)
      },
      width: '80%',
      height: '95%'
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.category) {
          this.categoryService.saveAdditionalCategory(data.category)
            .then(
              res => {
                this.initCategories();
              }
            )
            .catch(error => handleError(error))
        }
      }
    )
  }

  edit(category: AdditionCategoryModel) {
    let dialogRef = this.dialog.open(AdditionalCategoryPopupComponent, {
      data: {
        category: category
      },
      width: '80%'
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.category) {
          this.categoryService.saveAdditionalCategory(data.category)
            .then(
              res => {
                this.initCategories();
              },
              error => handleError(error)
            )
        }
      }
    )
  }

  remove(id: string) {
    this.categoryService.deleteAdditionalCategory(id)
      .then(
        res => {
          this.initCategories();
        },
        error => handleError(error)
      )
  }

  private initCategories() {
    this.categoryService.getAdditionCategories()
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
