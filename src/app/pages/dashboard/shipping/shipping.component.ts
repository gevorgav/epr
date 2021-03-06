import {Component, OnInit} from '@angular/core';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {ProductIdName, ShippingInfoModel} from '../../../shared/model/shipping-info.model';
import {ShippingHttpService} from '../../../shared/services/shipping-http.service';
import {ProductPopupComponent} from '../product/product-popup/product-popup.component';
import {handleError} from '../../../shared/util/error-handler';
import {ShippingPopupComponent} from './shipping-popup/shipping-popup.component';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  public shippingModels: ShippingInfoModel[] = [];
  dataSource = new MatTableDataSource(this.shippingModels);
  displayedColumns = ['startDate', 'endDate', 'zipCode', 'address/street', 'paid', 'details', 'ship off'];


  constructor(private _shippingService: ShippingHttpService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.initShipping();
  }

  private initShipping() {
    this._shippingService.loadPayed().subscribe(res => {
      this.shippingModels = res;
      this.dataSource = new MatTableDataSource(this.shippingModels);
    });
  }

  public setShipped(id: string) {
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
