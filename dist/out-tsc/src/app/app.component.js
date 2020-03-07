import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDateService } from './shared/services/location-date.service';
import { OrderService } from './shared/services/order.service';
import { InitializerService } from './shared/services/initializer.service';
import { ParseService } from './shared/services/parse.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, parseService, activatedRoute, locationService, orderService, initializerService) {
        this.router = router;
        this.parseService = parseService;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.orderService = orderService;
        this.initializerService = initializerService;
        this.isReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitles();
        this.init();
        this.initializerService.initialize().subscribe(function (res) {
            _this.isReady = res;
        });
        // this.shippingService.loadShippings().subscribe(res=>{
        //   console.log(res);
        // })
        // this.deliveryService.syncDeliveryChart().subscribe(res=>{
        //   console.log(res);
        // })
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        // const script = document.createElement('script');
        // script.src = 'assets/js/functions.js';
        // document.body.appendChild(script);
    };
    AppComponent.prototype.setTitles = function () {
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
    };
    AppComponent.prototype.init = function () {
        // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
        //   this.isReady = true;
        // })
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            ParseService,
            ActivatedRoute,
            LocationDateService,
            OrderService,
            InitializerService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map