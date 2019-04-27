import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { DeliveryChartService } from "../../../shared/services/delivery-chart.service";
import { DeliveryChartModel } from "../../../shared/model/delivery-chart.model";
import { handleError } from "../../../shared/util/error-handler";
import { MatDialog, MatTableDataSource } from "@angular/material";
import { DeliveryChartPopupComponent } from "./delivery-chart-popup/delivery-chart-popup.component";
var DeliveryChartComponent = /** @class */ (function () {
    function DeliveryChartComponent(deliveryChartService, dialog) {
        this.deliveryChartService = deliveryChartService;
        this.dialog = dialog;
        this.deliveryCharts = [];
        this.dataSource = new MatTableDataSource(this.deliveryCharts);
        this.displayedColumns = ['city', 'price', 'edit', 'delete'];
    }
    DeliveryChartComponent.prototype.ngOnInit = function () {
        this.initDeliveryCharts();
    };
    DeliveryChartComponent.prototype.addDeliveryChart = function () {
        var _this = this;
        var dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
            data: {
                deliveryChart: new DeliveryChartModel(null, '', null, null, null, null)
            },
            width: '50%',
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .subscribe(function (res) {
                    if (res.id) {
                        _this.initDeliveryCharts();
                    }
                }, function (error) { return handleError(error); });
            }
        });
    };
    DeliveryChartComponent.prototype.edit = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(DeliveryChartPopupComponent, {
            data: {
                deliveryChart: element
            },
            width: '50%',
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .subscribe(function (res) {
                    if (res.id) {
                        _this.initDeliveryCharts();
                    }
                }, function (error) { return handleError(error); });
            }
        });
    };
    DeliveryChartComponent.prototype.remove = function (id) {
        this.deliveryChartService.deleteDeliveryChart(id)
            .subscribe(function (res) {
            console.log(res);
        }, function (error) { return handleError(error); });
    };
    DeliveryChartComponent.prototype.initDeliveryCharts = function () {
        var _this = this;
        this.deliveryChartService.getDeliveryLocations()
            .subscribe(function (res) {
            _this.deliveryCharts = res;
            _this.dataSource = new MatTableDataSource(_this.deliveryCharts);
        }, function (error) { return handleError(error); });
    };
    DeliveryChartComponent = tslib_1.__decorate([
        Component({
            selector: 'app-delivery-chart',
            templateUrl: './delivery-chart.component.html',
            styleUrls: ['./delivery-chart.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DeliveryChartService,
            MatDialog])
    ], DeliveryChartComponent);
    return DeliveryChartComponent;
}());
export { DeliveryChartComponent };
//# sourceMappingURL=delivery-chart.component.js.map