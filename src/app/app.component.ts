import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as Parse from 'parse';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import User = Parse.User;
import {ParseService} from './shared/services/parse.service';
import {CategoryService} from './shared/services/category.service';
import {DeliveryChartService} from './shared/services/delivery-chart.service';
import { zip} from 'rxjs';

Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
(Parse as any).serverURL = 'http://138.68.251.183:1337/parse'; // use your server url

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'app';
  
  
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private titleService: Title,
              private parseService: ParseService,
              private categoryService: CategoryService,
              private deliveryService: DeliveryChartService) {
  }

  public isReady: boolean = false;
  
  ngOnInit(): void {
    this.setTitles();
    this.init();
  }
  
  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'assets/js/functions.js';
    document.body.appendChild(script);

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
