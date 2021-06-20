import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { LocationDateService } from './shared/services/location-date.service';
import { OrderService } from './shared/services/order.service';
import { InitializerService } from './shared/services/initializer.service';
import { ParseService } from './shared/services/parse.service';
import {SeoTagHttpService} from './shared/services/seo-tag-http.service';
import {Meta, Title} from '@angular/platform-browser';

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
    private seoService: SeoTagHttpService,
    private titleService: Title,
    private metaService: Meta,
    private initializerService: InitializerService) {
  }

  ngOnInit(): void {
    this.init();
    this.initializerService.initialize().then();
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url ===  '/home') {
          this.seoService.getHomePageSeo().subscribe(res => {
            this.titleService.setTitle(res.title);
            this.metaService.updateTag({name: 'description', content: res.description});
          });
        } else if (val.url.indexOf('/rentals/') >= 0) {
          this.seoService.getCategorySeo(val.url.split('/rentals/')[1]).subscribe(res => {
            this.titleService.setTitle(res.title);
            this.metaService.updateTag({name: 'description', content: res.description});
          });
        }
      }
      console.log(val);
    })


  }

  ngAfterViewInit() {

  }


  private init() {
    // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
    //   this.isReady = true;
    // })
  }
}
