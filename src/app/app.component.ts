import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LocationDateService } from './shared/services/location-date.service';
import { OrderService } from './shared/services/order.service';
import { InitializerService } from './shared/services/initializer.service';
import { ParseService } from './shared/services/parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
    public parseService: ParseService,
    private activatedRoute: ActivatedRoute,
    private locationService: LocationDateService,
    private orderService: OrderService,
    private initializerService: InitializerService) {
  }

  ngOnInit(): void {
    this.init();
    this.initializerService.initialize().then();
  }

  ngAfterViewInit() {

  }


  private init() {
    // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
    //   this.isReady = true;
    // })
  }
}
