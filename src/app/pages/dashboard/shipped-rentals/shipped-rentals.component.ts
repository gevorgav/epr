import { Component, OnInit } from '@angular/core';
import {ProductIdName, ShippingInfoModel} from '../../../shared/model/shipping-info.model';
import {ShippingHttpService} from '../../../shared/services/shipping-http.service';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-shipped-rentals',
  templateUrl: './shipped-rentals.component.html',
  styleUrls: ['./shipped-rentals.component.css']
})
export class ShippedRentalsComponent implements OnInit {

  public shippingModels: ShippingInfoModel[] = [];
  public panelOpenState: boolean = false;
  dataSource = new MatTableDataSource(this.shippingModels);
  displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details'];


  constructor(private _shippingService: ShippingHttpService) { }

  ngOnInit() {
    this.initShipping();
  }

  private initShipping() {
    this._shippingService.loadShipped().then(res=>{
      this.shippingModels = res;
      this.dataSource = new MatTableDataSource(this.shippingModels);
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
