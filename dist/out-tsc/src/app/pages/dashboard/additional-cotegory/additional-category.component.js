import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { handleError } from '../../../shared/util/error-handler';
import { AdditionCategoryModel } from '../../../shared/model/addition-category.model';
import { AdditionalCategoryPopupComponent } from './additional-category-popup/additional-category-popup.component';
import { AdditionCategoryService } from '../../../shared/services/addition-category.service';
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
let AdditionalCategoryComponent = class AdditionalCategoryComponent {
    constructor(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.categories);
        this.displayedColumns = ['name', 'edit', 'delete'];
    }
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
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.category) {
                this.categoryService.saveAdditionalCategory(data.category)
                    .then(res => {
                    this.initCategories();
                })
                    .catch(error => handleError(error));
            }
        });
    }
    edit(category) {
        let dialogRef = this.dialog.open(AdditionalCategoryPopupComponent, {
            data: {
                category: category
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.category) {
                this.categoryService.saveAdditionalCategory(data.category)
                    .then(res => {
                    this.initCategories();
                }, error => handleError(error));
            }
        });
    }
    remove(id) {
        this.categoryService.deleteAdditionalCategory(id)
            .then(res => {
            this.initCategories();
        }, error => handleError(error));
    }
    initCategories() {
        this.categoryService.getAdditionCategories()
            .then(res => {
            this.categories = res;
            this.dataSource = new MatTableDataSource(this.categories);
        });
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
AdditionalCategoryComponent = __decorate([
    Component({
        selector: 'app-additional-category',
        templateUrl: './additional-category.component.html',
        styleUrls: ['./additional-category.component.css']
    }),
    __metadata("design:paramtypes", [AdditionCategoryService,
        MatDialog])
], AdditionalCategoryComponent);
export { AdditionalCategoryComponent };
//# sourceMappingURL=additional-category.component.js.map