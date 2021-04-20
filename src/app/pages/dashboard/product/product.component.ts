import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductViewModel} from "../../../shared/model/product-view.model";
import {handleError} from "../../../shared/util/error-handler";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ProductPopupComponent} from "./product-popup/product-popup.component";
import {ProductModel} from "../../../shared/model/product.model";
import {CategoryService} from "../../../shared/services/category.service";
import {zip} from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductViewModel[] = [];
  dataSource = new MatTableDataSource(this.products);
  displayedColumns = ['title', 'price', /*'isHotDeal',*/ 'edit', 'delete'];
  private oldAdditionalCategories: string[];

  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private dialog: MatDialog) {

  }

  ngOnInit() {
    this.initProducts();
  }

  remove(id: string) {
    this.productService.deleteProduct(id)
      .subscribe(
        res => {
          if (res.id) {
            this.initProducts();
          }
        },
        error => handleError(error)
      )

  }

  edit(id: string) {
    zip(
      this.productService.getProduct(id),     // 0
      this.categoryService.getCategoryByProductId(id), // 1
    ).subscribe(([product, category]) => {
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
            .subscribe(
              res => {
                this.initProducts();
                this.oldAdditionalCategories = [];
              },
              erorr => handleError(erorr));
        }
      });
    });
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      data: {
        product: new ProductModel(null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null, null,
          null, null, null, null, null, null, null),
        products: this.products
      },
      width: '80%',
      height: '95%'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.product) {
        this.productService.saveProduct(data.product, data.newCategoryId)
          .subscribe(
            res => {
                this.initProducts();
            },
            error => handleError(error))
      }
    })
  }

  private initProducts() {
    this.productService.getAllProducts()
      .then(
        products => {
          this.products = products;
          this.dataSource = new MatTableDataSource(this.products);
        },
        error => {
          handleError(error);
        }
      )
  }

  applyFilter($event) {
    this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
  }
}
