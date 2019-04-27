import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import * as Parse from 'parse';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs/operators';
import { ParseService } from './shared/services/parse.service';
import { CategoryService } from './shared/services/category.service';
import { DeliveryChartService } from './shared/services/delivery-chart.service';
Parse.initialize('myAppId', 'javascriptkey'); // use your appID & your js key
Parse.serverURL = 'https://entertainmentpartyrentals.com/parse'; // use your server url
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService, parseService, categoryService, deliveryService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.parseService = parseService;
        this.categoryService = categoryService;
        this.deliveryService = deliveryService;
        this.title = 'app';
        this.isReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTitles();
        this.init();
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
            Title,
            ParseService,
            CategoryService,
            DeliveryChartService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map