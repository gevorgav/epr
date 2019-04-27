import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../../shared/services/product.service";
import {ProductViewModel} from "../../../shared/model/product-view.model";
import {handleError} from "../../../shared/util/error-handler";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {ProductPopupComponent} from "./product-popup/product-popup.component";
import {ProductModel} from "../../../shared/model/product.model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: ProductViewModel[] = [];
  dataSource = new MatTableDataSource(this.products);
  displayedColumns = ['title', 'price', /*'isHotDeal',*/ 'edit', 'delete'];

  constructor(private productService: ProductService,
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
          console.log(res);
        },
        error => handleError(error)
      )

  }

  edit(id: string) {
    this.productService.getProduct(id)
      .subscribe(product => {
        const dialogRef = this.dialog.open(ProductPopupComponent, {
          data: {
            product
          },
          width: '80%',
          height: '95%'
        });
        dialogRef.afterClosed().subscribe(data => {
          if (data && data.product) {
            this.productService.saveProduct(data.product)
              .subscribe(
                res => {
                  console.log(res);
                },
                erorr => handleError(erorr))
          }
        })
      })
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductPopupComponent, {
      data: {
        product: new ProductModel(null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
      },
      width: '80%',
      height: '95%'
    });
    dialogRef.afterClosed().subscribe(data => {
      if (data && data.product) {
        this.productService.saveProduct(data.product)
          .subscribe(
            res => {
              if (res.id) {
                this.initProducts();
              }
            },
            erorr => handleError(erorr))
      }
    })
  }

  private initProducts() {
    this.productService.getAllProducts()
      .subscribe(
        products => {
          this.products = products;
          this.dataSource = new MatTableDataSource(this.products);
        },
        error => {
          handleError(error);
        }
      )
  }
}
