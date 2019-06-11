import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as Parse from 'parse';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { LocationDateService } from './shared/services/location-date.service';
import { OrderService } from './shared/services/order.service';
import { InitializerService } from './shared/services/initializer.service';
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, locationService, orderService, initializerService, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.locationService = locationService;
        this.orderService = orderService;
        this.initializerService = initializerService;
        this.titleService = titleService;
        this.title = 'app';
        this.isReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setTitles();
        this.init();
        this.initializerService.initialize().subscribe(function (res) {
            _this.isReady = res;
        });
        // this.deliveryService.syncDeliveryChart().subscribe(res=>{
        //   console.log(res);
        // })
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var script = document.createElement('script');
        script.src = 'assets/js/functions.js';
        document.body.appendChild(script);
    };
    AppComponent.prototype.setTitles = function () {
        var _this = this;
        this.router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }), map(function () { return _this.activatedRoute; }), map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), map(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), filter(function (route) { return route.outlet === 'primary'; }), mergeMap(function (route) { return route.data; }))
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
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
            ActivatedRoute,
            LocationDateService,
            OrderService,
            InitializerService,
            Title])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map