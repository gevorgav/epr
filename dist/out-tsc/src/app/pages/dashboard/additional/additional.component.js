import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AdditionCategoryService } from '../../../shared/services/addition-category.service';
import { handleError } from '../../../shared/util/error-handler';
import { AdditionModel } from '../../../shared/model/addition.model';
import { AdditionalPopupComponent } from './additional-popup/additional-popup.component';
import { zip } from 'rxjs';
var AdditionalComponent = /** @class */ (function () {
    function AdditionalComponent(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.items);
        this.displayedColumns = ['name', 'edit', 'delete'];
    }
    AdditionalComponent.prototype.ngOnInit = function () {
        this.initAdditions();
    };
    AdditionalComponent.prototype.addItem = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AdditionalPopupComponent, {
            data: {
                item: new AdditionModel(null, null, null)
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.item) {
                _this.categoryService.saveAddition(data.item, data.newCategoryId)
                    .subscribe(function (res) {
                    _this.initAdditions();
                }, function (error) { return handleError(error); });
            }
        });
    };
    AdditionalComponent.prototype.edit = function (additionId) {
        var _this = this;
        zip(this.categoryService.getAdditionById(additionId), // 0
        this.categoryService.getAdditionCategoryByAdditionId(additionId)).subscribe(function (_a) {
            var addition = _a[0], category = _a[1];
            var dialogRef = _this.dialog.open(AdditionalPopupComponent, {
                data: {
                    item: addition,
                    category: category
                },
                width: '80%'
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (data && data.item) {
                    _this.categoryService.saveAddition(data.item, data.newCategoryId, data.oldCategoryId)
                        .subscribe(function (res) {
                        _this.initAdditions();
                    }, function (error) { return handleError(error); });
                }
            });
        });
    };
    AdditionalComponent.prototype.remove = function (id) {
        var _this = this;
        this.categoryService.deleteAddition(id)
            .subscribe(function (res) {
            _this.initAdditions();
        }, function (error) { return handleError(error); });
    };
    AdditionalComponent.prototype.initAdditions = function () {
        var _this = this;
        this.categoryService.getAllAdditions()
            .subscribe(function (res) {
            _this.items = res;
            _this.dataSource = new MatTableDataSource(_this.items);
        });
    };
    AdditionalComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    AdditionalComponent = tslib_1.__decorate([
        Component({
            selector: 'app-additional',
            templateUrl: './additional.component.html',
            styleUrls: ['./additional.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AdditionCategoryService,
            MatDialog])
    ], AdditionalComponent);
    return AdditionalComponent;
}());
export { AdditionalComponent };
//# sourceMappingURL=additional.component.js.map