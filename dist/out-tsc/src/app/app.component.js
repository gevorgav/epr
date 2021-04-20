import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDateService } from './shared/services/location-date.service';
import { OrderService } from './shared/services/order.service';
import { InitializerService } from './shared/services/initializer.service';
import { ParseService } from './shared/services/parse.service';
let AppComponent = class AppComponent {
    constructor(router, parseService, activatedRoute, locationService, orderService, initializerService) {
        this.router = router;
        this.parseService = parseService;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.orderService = orderService;
        this.initializerService = initializerService;
    }
    ngOnInit() {
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
    setTitles() {
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
    init() {
        // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
        //   this.isReady = true;
        // })
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    __metadata("design:paramtypes", [Router,
        ParseService,
        ActivatedRoute,
        LocationDateService,
        OrderService,
        InitializerService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map