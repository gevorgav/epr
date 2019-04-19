import { Component, OnInit } from '@angular/core';
import {DeliveryChartService} from '../../shared/services/delivery-chart.service';
import {DeliveryChartModel} from '../../shared/model/delivery-chart.model';

@Component({
  selector: 'app-delivery-cart',
  templateUrl: './delivery-chart.component.html',
  styleUrls: ['./delivery-chart.component.css']
})
export class DeliveryChartComponent implements OnInit {

  constructor(private deliveryChartService: DeliveryChartService) { }
  
  public delideryCharts : DeliveryChartModel[] = [];

  ngOnInit() {
    this.deliveryChartService.getDeliveryLocations().subscribe((res)=>{
      this.delideryCharts = res;
    });
  }

}
