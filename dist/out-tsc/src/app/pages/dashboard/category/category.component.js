import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { CategoryService } from '../../../shared/services/category.service';
import { CategoryModel } from '../../../shared/model/category.model';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { CategoryPopupComponent } from './category-popup/category-popup.component';
import { handleError } from '../../../shared/util/error-handler';
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.categories);
        this.displayedColumns = ['title', 'edit', 'delete'];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.initCategories();
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var dialogRef = this.dialog.open(CategoryPopupComponent, {
            data: {
                item: new CategoryModel(null, null, null, null, null, null)
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return handleError(error); });
            }
        });
    };
    CategoryComponent.prototype.edit = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(CategoryPopupComponent, {
            data: {
                category: category
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return handleError(error); });
            }
        });
    };
    CategoryComponent.prototype.remove = function (id) {
        var _this = this;
        this.categoryService.deleteCategory(id)
            .subscribe(function (res) {
            _this.initCategories();
        }, function (error) { return handleError(error); });
    };
    CategoryComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
            _this.dataSource = new MatTableDataSource(_this.categories);
        });
    };
    CategoryComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    CategoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-category',
            templateUrl: './category.component.html',
            styleUrls: ['./category.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [CategoryService,
            MatDialog])
    ], CategoryComponent);
    return CategoryComponent;
}());
export { CategoryComponent };
//# sourceMappingURL=category.component.js.map