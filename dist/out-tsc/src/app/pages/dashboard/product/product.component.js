import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ProductService } from "../../../shared/services/product.service";
import { handleError } from "../../../shared/util/error-handler";
import { ProductPopupComponent } from "./product-popup/product-popup.component";
import { ProductModel } from "../../../shared/model/product.model";
import { CategoryService } from "../../../shared/services/category.service";
import { zip } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { MatDialog } from "@angular/material/dialog";
let ProductComponent = class ProductComponent {
    constructor(productService, categoryService, dialog) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.products = [];
        this.dataSource = new MatTableDataSource(this.products);
        this.displayedColumns = ['title', 'price', /*'isHotDeal',*/ 'edit', 'delete'];
    }
    ngOnInit() {
        this.initProducts();
    }
    remove(id) {
        this.productService.deleteProduct(id)
            .subscribe(res => {
            if (res.id) {
                this.initProducts();
            }
        }, error => handleError(error));
    }
    edit(id) {
        zip(this.productService.getProduct(id), // 0
        this.categoryService.getCategoryByProductId(id)).subscribe(([product, category]) => {
            this.oldAdditionalCategories = product.additionalCategories;
            const dialogRef = this.dialog.open(ProductPopupComponent, {
                data: {
                    product,
                    category,
                    products: this.products
                },
                width: '80%',
                height: '95%'
            });
            dialogRef.afterClosed().subscribe(data => {
                if (data && data.product) {
                    this.productService.saveProduct(data.product, data.newCategoryId, data.oldCategoryId, this.oldAdditionalCategories)
                        .subscribe(res => {
                        this.initProducts();
                        this.oldAdditionalCategories = [];
                    }, erorr => handleError(erorr));
                }
            });
        });
    }
    addProduct() {
        const dialogRef = this.dialog.open(ProductPopupComponent, {
            data: {
                product: new ProductModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null),
                products: this.products
            },
            width: '80%',
            height: '95%'
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data && data.product) {
                this.productService.saveProduct(data.product, data.newCategoryId)
                    .subscribe(res => {
                    this.initProducts();
                }, error => handleError(error));
            }
        });
    }
    initProducts() {
        this.productService.getAllProducts()
            .then(products => {
            this.products = products;
            this.dataSource = new MatTableDataSource(this.products);
        }, error => {
            handleError(error);
        });
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
ProductComponent = __decorate([
    Component({
        selector: 'app-product',
        templateUrl: './product.component.html',
        styleUrls: ['./product.component.css']
    }),
    __metadata("design:paramtypes", [ProductService,
        CategoryService,
        MatDialog])
], ProductComponent);
export { ProductComponent };
//# sourceMappingURL=product.component.js.map