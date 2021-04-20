import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {LocationDateService} from './shared/services/location-date.service';
import {OrderService} from './shared/services/order.service';
import {InitializerService} from './shared/services/initializer.service';
import {ParseService} from './shared/services/parse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  constructor(private router: Router,
              private parseService: ParseService,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationDateService,
              private orderService: OrderService,
              private initializerService: InitializerService) {
  }

  ngOnInit(): void {
    this.setTitles();
    this.init();
    this.initializerService.initialize().then();
    // this.shippingService.loadShippings().subscribe(res=>{
    //   console.log(res);
    // })
    // this.deliveryService.syncDeliveryChart().subscribe(res=>{
    //   console.log(res);
    // })

  }

  ngAfterViewInit() {
    // const script = document.createElement('script');
    // script.src = 'assets/js/functions.js';
    // document.body.appendChild(script);

  }

  private setTitles() {
    // this.router.events
    // .pipe(
    //   filter(event => event instanceof NavigationEnd),
    //   map(() => this.activatedRoute),
    //   map((route) => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   map((route) => {
    //     while (route.firstChild) route = route.firstChild;
    //     return route;
    //   }),
    //   filter((route) => route.outlet === 'primary'),
    //   mergeMap((route) => route.data)
    // )
    // .subscribe((event) => this.titleService.setTitle(event['title']));
  }

  private init() {
    // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
    //   this.isReady = true;
    // })
  }
}
