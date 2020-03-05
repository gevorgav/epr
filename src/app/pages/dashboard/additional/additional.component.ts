import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {AdditionCategoryService} from '../../../shared/services/addition-category.service';
import {handleError} from '../../../shared/util/error-handler';
import {AdditionModel} from '../../../shared/model/addition.model';
import {AdditionalPopupComponent} from './additional-popup/additional-popup.component';
import {zip} from 'rxjs';

@Component({
  selector: 'app-additional',
  templateUrl: './additional.component.html',
  styleUrls: ['./additional.component.css']
})
export class AdditionalComponent implements OnInit {

  items: AdditionModel[];
  dataSource = new MatTableDataSource(this.items);
  displayedColumns = ['name', 'edit', 'delete'];
  constructor(private categoryService: AdditionCategoryService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.initAdditions();
  }

  addItem() {
    let dialogRef = this.dialog.open(AdditionalPopupComponent, {
      data: {
        item: new AdditionModel(null, null, null)
      },
      width: '80%',
      height: '95%'
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data && data.item) {
          this.categoryService.saveAddition(data.item, data.newCategoryId)
            .subscribe(
              res => {
                this.initAdditions();
              },
              error => handleError(error)
            )
        }
      }
    )
  }

  edit(additionId: string) {
    zip(
      this.categoryService.getAdditionById(additionId),     // 0
      this.categoryService.getAdditionCategoryByAdditionId(additionId), // 1
    ).subscribe(([addition, category]) => {
      let dialogRef = this.dialog.open(AdditionalPopupComponent, {
        data: {
          item: addition,
          category
        },
        width: '80%'
      });
      dialogRef.afterClosed().subscribe(
        data => {
          if (data && data.item) {
            this.categoryService.saveAddition(data.item, data.newCategoryId, data.oldCategoryId)
              .subscribe(
                res => {
                  this.initAdditions();
                },
                error => handleError(error)
              );
          }
        });
    });
  }

  remove(id: string) {
    this.categoryService.deleteAddition(id)
      .subscribe(
        res => {
          this.initAdditions();
        },
        error => handleError(error)
      )
  }

  private initAdditions() {
    this.categoryService.getAllAdditions()
      .subscribe(
        res => {
          this.items = res;
          this.dataSource = new MatTableDataSource(this.items);
        }
      )
  }

  applyFilter($event) {
    this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
  }

}
