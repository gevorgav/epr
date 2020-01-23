import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Parse from 'parse';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import {filter, map, mergeMap} from 'rxjs/operators';
import {LocationDateService} from './shared/services/location-date.service';
import {OrderService} from './shared/services/order.service';
import {InitializerService} from './shared/services/initializer.service';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private locationService: LocationDateService,
              private orderService: OrderService,
              private initializerService: InitializerService,
              private titleService: Title) {
  }

  public isReady: boolean = false;

  ngOnInit(): void {
    this.setTitles();
    this.init();
    this.initializerService.initialize().subscribe(res=>{
      this.isReady = res;
    });
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
    this.router.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)
    )
    .subscribe((event) => this.titleService.setTitle(event['title']));
  }

  private init() {
    // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
    //   this.isReady = true;
    // })
  }
}
