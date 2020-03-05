import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { handleError } from '../../../shared/util/error-handler';
import { AdditionCategoryModel } from '../../../shared/model/addition-category.model';
import { AdditionalCategoryPopupComponent } from './additional-category-popup/additional-category-popup.component';
import { AdditionCategoryService } from '../../../shared/services/addition-category.service';
var AdditionalCategoryComponent = /** @class */ (function () {
    function AdditionalCategoryComponent(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.categories);
        this.displayedColumns = ['name', 'edit', 'delete'];
    }
    AdditionalCategoryComponent.prototype.ngOnInit = function () {
        this.initCategories();
    };
    AdditionalCategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AdditionalCategoryPopupComponent, {
            data: {
                category: new AdditionCategoryModel(null, null, false)
            },
            width: '80%',
            height: '95%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveAdditionalCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return handleError(error); });
            }
        });
    };
    AdditionalCategoryComponent.prototype.edit = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(AdditionalCategoryPopupComponent, {
            data: {
                category: category
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveAdditionalCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return handleError(error); });
            }
        });
    };
    AdditionalCategoryComponent.prototype.remove = function (id) {
        var _this = this;
        this.categoryService.deleteAdditionalCategory(id)
            .subscribe(function (res) {
            _this.initCategories();
        }, function (error) { return handleError(error); });
    };
    AdditionalCategoryComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getAdditionCategories()
            .subscribe(function (res) {
            _this.categories = res;
            _this.dataSource = new MatTableDataSource(_this.categories);
        });
    };
    AdditionalCategoryComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    AdditionalCategoryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-additional-category',
            templateUrl: './additional-category.component.html',
            styleUrls: ['./additional-category.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AdditionCategoryService,
            MatDialog])
    ], AdditionalCategoryComponent);
    return AdditionalCategoryComponent;
}());
export { AdditionalCategoryComponent };
//# sourceMappingURL=additional-category.component.js.map