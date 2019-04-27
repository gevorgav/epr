import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductService } from "../../../shared/services/product.service";
import { handleError } from "../../../shared/util/error-handler";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { ProductPopupComponent } from "./product-popup/product-popup.component";
import { ProductModel } from "../../../shared/model/product.model";
var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, dialog) {
        this.productService = productService;
        this.dialog = dialog;
        this.products = [];
        this.dataSource = new MatTableDataSource(this.products);
        this.displayedColumns = ['title', 'price', /*'isHotDeal',*/ 'edit', 'delete'];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.initProducts();
    };
    ProductComponent.prototype.remove = function (id) {
        var _this = this;
        this.productService.deleteProduct(id)
            .subscribe(function (res) {
            if (res.id) {
                _this.initProducts();
            }
            console.log(res);
        }, function (error) { return handleError(error); });
    };
    ProductComponent.prototype.edit = function (id) {
        var _this = this;
        this.productService.getProduct(id)
            .subscribe(function (product) {
            var dialogRef = _this.dialog.open(ProductPopupComponent, {
                data: {
                    product: product
                },
                width: '80%',
                height: '95%'
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (data && data.product) {
                    _this.productService.saveProduct(data.product)
                        .subscribe(function (res) {
                        _this.initProducts();
                    }, function (erorr) { return handleError(erorr); });
                }
            });
        });
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        var dialogRef = this.dialog.open(ProductPopupComponent, {
            data: {
                product: new ProductModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
            },
            width: '80%',
            height: '95%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.product) {
                _this.productService.saveProduct(data.product)
                    .subscribe(function (res) {
                    if (res.id) {
                        _this.initProducts();
                    }
                }, function (erorr) { return handleError(erorr); });
            }
        });
    };
    ProductComponent.prototype.initProducts = function () {
        var _this = this;
        this.productService.getAllProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.dataSource = new MatTableDataSource(_this.products);
        }, function (error) {
            handleError(error);
        });
    };
    ProductComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    ProductComponent = tslib_1.__decorate([
        Component({
            selector: 'app-product',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductService,
            MatDialog])
    ], ProductComponent);
    return ProductComponent;
}());
export { ProductComponent };
//# sourceMappingURL=product.component.js.map