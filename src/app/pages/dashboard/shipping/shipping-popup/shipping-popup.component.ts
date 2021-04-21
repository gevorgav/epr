import {Component, Inject, OnInit} from '@angular/core';
import {ProductIdName, ShippingInfoModel} from '../../../../shared/model/shipping-info.model';
import {ProductCount} from '../../../cart/cart.component';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-shipping-popup',
  templateUrl: './shipping-popup.component.html',
  styleUrls: ['./shipping-popup.component.css']
})
export class ShippingPopupComponent implements OnInit {
  public shippingModel: ShippingInfoModel;

  constructor(public dialogRef: MatDialogRef<ShippingPopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.shippingModel = this.data.shippingInfoModel;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close(null);
  }

  getProduct(productId: string): ProductCount {
    let productCount: ProductCount;
    this.shippingModel.products.forEach(value => {
      if (productId ===  value.id){
        productCount = this.shippingModel.productCount.find(value1 => value.id === value1.productId);
        productCount.name = value.name;
      }
    });
    return productCount;
  }

  getProductWithCount(shippingModel: ShippingInfoModel, product: ProductIdName): string {
    let text: string = '';
    for (let prodCount of shippingModel.productCount) {
      if (prodCount.productId === product.id){
        return product.name;
      }
    }
    return text;
  }


  getProductHowMany(shippingModel: ShippingInfoModel, product: ProductIdName) {
    let text: string = '';
    for (let prodCount of shippingModel.productCount) {
      if (prodCount.productId === product.id){
        return prodCount.count;
      }
    }
    return text;
  }
}
