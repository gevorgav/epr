import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { AdditionCategoryService } from '../../../shared/services/addition-category.service';
import { handleError } from '../../../shared/util/error-handler';
import { AdditionModel } from '../../../shared/model/addition.model';
import { AdditionalPopupComponent } from './additional-popup/additional-popup.component';
import { zip } from 'rxjs';
let AdditionalComponent = class AdditionalComponent {
    constructor(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new MatTableDataSource(this.items);
        this.displayedColumns = ['name', 'edit', 'delete'];
    }
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
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.item) {
                this.categoryService.saveAddition(data.item, data.newCategoryId)
                    .then(res => {
                    this.initAdditions();
                }, error => handleError(error));
            }
        });
    }
    edit(additionId) {
        zip(this.categoryService.getAdditionById(additionId), // 0
        this.categoryService.getAdditionCategoryByAdditionId(additionId)).subscribe(([addition, category]) => {
            let dialogRef = this.dialog.open(AdditionalPopupComponent, {
                data: {
                    item: addition,
                    category
                },
                width: '80%'
            });
            dialogRef.afterClosed().subscribe(data => {
                if (data && data.item) {
                    this.categoryService.saveAddition(data.item, data.newCategoryId, data.oldCategoryId)
                        .then(res => {
                        this.initAdditions();
                    }, error => handleError(error));
                }
            });
        });
    }
    remove(id) {
        this.categoryService.deleteAddition(id)
            .then(res => {
            this.initAdditions();
        }, error => handleError(error));
    }
    initAdditions() {
        this.categoryService.getAllAdditions()
            .then(res => {
            this.items = res;
            this.dataSource = new MatTableDataSource(this.items);
        });
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
AdditionalComponent = __decorate([
    Component({
        selector: 'app-additional',
        templateUrl: './additional.component.html',
        styleUrls: ['./additional.component.css']
    }),
    __metadata("design:paramtypes", [AdditionCategoryService,
        MatDialog])
], AdditionalComponent);
export { AdditionalComponent };
//# sourceMappingURL=additional.component.js.map