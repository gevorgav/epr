import { Component, OnInit } from '@angular/core';
import {DeliveryChartService} from "../../../shared/services/delivery-chart.service";
import {DeliveryChartModel} from "../../../shared/model/delivery-chart.model";
import {handleError} from "../../../shared/util/error-handler";
import {DeliveryChartPopupComponent} from "./delivery-chart-popup/delivery-chart-popup.component";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-delivery-chart',
  templateUrl: './delivery-chart.component.html',
  styleUrls: ['./delivery-chart.component.css']
})
export class DeliveryChartComponent implements OnInit {

  deliveryCharts: DeliveryChartModel[] = [];
  dataSource = new MatTableDataSource(this.deliveryCharts);
  displayedColumns = ['city', 'price', 'edit', 'delete'];

  constructor(private deliveryChartService: DeliveryChartService,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.initDeliveryCharts()
  }

  addDeliveryChart() {
    const dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
      data: {
        deliveryChart: new DeliveryChartModel(null, '', null, null, null, null)
      },
      width: '50%',
      maxHeight: 600
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
            .then(
              res => {
                  this.initDeliveryCharts();
              },
              error => handleError(error)
            )
        }
      }
    )
  }

  edit(element: DeliveryChartModel) {
    const dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
      data: {
        deliveryChart: element
      },
      width: '50%',
      maxHeight: 600
    });
    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
            .then(
              res => {
                  this.initDeliveryCharts();
              },
              error => handleError(error)
            )
        }
      }
    )

  }

  remove(id: string) {
    this.deliveryChartService.deleteDeliveryChart(id)
      .then(
        res => {
          //
        },
        error => handleError(error)
      )

  }

  private initDeliveryCharts() {
    this.deliveryChartService.getDeliveryLocations()
      .then(
        res => {
          this.deliveryCharts = res;
          this.dataSource = new MatTableDataSource(this.deliveryCharts.sort((a, b) => {
            return a.city.localeCompare(b.city);
          }));
        },
        error => handleError(error)
      )
  }

  applyFilter($event) {
    this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
  }
}
