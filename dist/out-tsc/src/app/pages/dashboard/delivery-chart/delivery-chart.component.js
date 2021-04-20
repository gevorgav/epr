import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { DeliveryChartService } from "../../../shared/services/delivery-chart.service";
import { DeliveryChartModel } from "../../../shared/model/delivery-chart.model";
import { handleError } from "../../../shared/util/error-handler";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { DeliveryChartPopupComponent } from "./delivery-chart-popup/delivery-chart-popup.component";
let DeliveryChartComponent = class DeliveryChartComponent {
    constructor(deliveryChartService, dialog) {
        this.deliveryChartService = deliveryChartService;
        this.dialog = dialog;
        this.deliveryCharts = [];
        this.dataSource = new MatTableDataSource(this.deliveryCharts);
        this.displayedColumns = ['city', 'price', 'edit', 'delete'];
    }
    ngOnInit() {
        this.initDeliveryCharts();
    }
    addDeliveryChart() {
        const dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
            data: {
                deliveryChart: new DeliveryChartModel(null, '', null, null, null, null)
            },
            width: '50%',
            maxHeight: 600
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .then(res => {
                    this.initDeliveryCharts();
                }, error => handleError(error));
            }
        });
    }
    edit(element) {
        const dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
            data: {
                deliveryChart: element
            },
            width: '50%',
            maxHeight: 600
        });
        dialogRef.afterClosed().subscribe(data => {
            if (data) {
                this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .then(res => {
                    this.initDeliveryCharts();
                }, error => handleError(error));
            }
        });
    }
    remove(id) {
        this.deliveryChartService.deleteDeliveryChart(id)
            .then(res => {
            //
        }, error => handleError(error));
    }
    initDeliveryCharts() {
        this.deliveryChartService.getDeliveryLocations()
            .then(res => {
            this.deliveryCharts = res;
            this.dataSource = new MatTableDataSource(this.deliveryCharts.sort((a, b) => {
                return a.city.localeCompare(b.city);
            }));
        }, error => handleError(error));
    }
    applyFilter($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    }
};
DeliveryChartComponent = __decorate([
    Component({
        selector: 'app-delivery-chart',
        templateUrl: './delivery-chart.component.html',
        styleUrls: ['./delivery-chart.component.css']
    }),
    __metadata("design:paramtypes", [DeliveryChartService,
        MatDialog])
], DeliveryChartComponent);
export { DeliveryChartComponent };
//# sourceMappingURL=delivery-chart.component.js.map