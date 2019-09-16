import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {ProductIdName, ShippingInfoModel} from '../../../shared/model/shipping-info.model';
import {ShippingHttpService} from '../../../shared/services/shipping-http.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  
  public shippingModels: ShippingInfoModel[] = [];
  dataSource = new MatTableDataSource(this.shippingModels);
  displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details', 'ship off'];
  
  
  constructor(private _shippingService: ShippingHttpService) { }

  ngOnInit() {
    this.initShipping();
  }
  
  private initShipping() {
    this._shippingService.loadPayed().subscribe(res=>{
      this.shippingModels = res;
      this.dataSource = new MatTableDataSource(this.shippingModels);
    })
  }
  
  public setShipped(id: string){
    this._shippingService.setShipped(id, true).subscribe(res=>{
      this.initShipping();
    })
  }
  
  getProductWithCount(element: any, product: ProductIdName): string {
    let text: string = '';
    for (let prodCount of element.productCount) {
      if (prodCount.productId === product.id){
        text = product.name + ' -_-    how many: ' + prodCount.count;
      }
    }
    return text;
  }
  
}
