import {Component, OnInit} from '@angular/core';
import {ProductIdName, ShippingInfoModel} from '../../../shared/model/shipping-info.model';
import {ShippingHttpService} from '../../../shared/services/shipping-http.service';
import {ShippingPopupComponent} from './shipping-popup/shipping-popup.component';
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  public shippingModels: ShippingInfoModel[] = [];
  dataSource = new MatTableDataSource(this.shippingModels);
  displayedColumns = ['orderId', 'endDate', 'zipCode', 'address/street', 'paid', 'details', 'ship off'];


  constructor(private _shippingService: ShippingHttpService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.initShipping();
  }

  private initShipping() {
    this._shippingService.loadPayed().then(res => {
      this.shippingModels = res;
      this.dataSource = new MatTableDataSource(this.shippingModels);
    });
  }

  public setShipped(id: string): void {
    this._shippingService.setShipped(id, true).subscribe(res => {
      this.initShipping();
    });
  }

  openViewDetails(id: string) {
    let shippingInfoModel: ShippingInfoModel = this.getShippingModelById(id);
    this.dialog.open(ShippingPopupComponent, {
      data: {
        shippingInfoModel
      },
      width: '80%',
      height: '95%'
    });
  }

  private getShippingModelById(id: string): ShippingInfoModel {
    return this.shippingModels.find(value => value.id === id);
  }
}
