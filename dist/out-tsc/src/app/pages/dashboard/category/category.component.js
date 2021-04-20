import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { CategoryModel } from '../../../shared/model/category.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CategoryPopupComponent } from './category-popup/category-popup.component';
import { handleError } from '../../../shared/util/error-handler';
let CategoryComponent = class CategoryComponent {
    constructor(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.categories);
        this.displayedColumns = ['title', 'edit', 'delete'];
    }
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
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.category) {
                this.categoryService.saveCategory(data.category)
                    .then(() => {
                    this.initCategories();
                })
                    .catch(error => handleError(error));
            }
        });
    }
    edit(category) {
        let dialogRef = this.dialog.open(CategoryPopupComponent, {
            data: {
                category
            },
            width: '80%',
            height: '95%'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.category) {
                this.categoryService.saveCategory(data.category)
                    .then(() => {
                    this.initCategories();
                })
                    .catch(error => handleError(error));
            }
        });
    }
    remove(id) {
        this.categoryService.deleteCategory(id)
            .then(() => {
            this.initCategories();
        })
            .catch(error => handleError(error));
    }
    initCategories() {
        this.categoryService.getCategories()
            .then(res => {
            this.categories = res;
            this.dataSource = new MatTableDataSource(this.categories);
        });
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
CategoryComponent = __decorate([
    Component({
        selector: 'app-category',
        templateUrl: './category.component.html',
        styleUrls: ['./category.component.css']
    }),
    __metadata("design:paramtypes", [CategoryService,
        MatDialog])
], CategoryComponent);
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map