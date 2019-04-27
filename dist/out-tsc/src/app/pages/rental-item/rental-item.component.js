import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { LocationDateService } from '../../shared/services/location-date.service';
import { RoutingService } from '../../shared/services/routing.service';
var RentalItemComponent = /** @class */ (function () {
    function RentalItemComponent(titleService, locationService, route, router, routingService) {
        this.titleService = titleService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.reviewsCount = 4;
    }
    RentalItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRouteParams();
        this.title$.subscribe();
        this.route.queryParams.subscribe(function (res) {
            _this.itemId = (+res['id'] || 0);
        });
        this.routingService.itemIdSubject.subscribe(function (res) {
            console.log(res);
        });
    };
    RentalItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.router.events.subscribe(function (res) {
            if (res instanceof NavigationEnd) {
                if (res.url === "/home" || res.url === "/" || res.url === "" || res.url.indexOf("/rental/") > -1) {
                    _this.initGallery();
                }
            }
        });
    };
    RentalItemComponent.prototype.getRouteParams = function () {
        var _this = this;
        this.title$ = this.route.paramMap.pipe(map(function (params) {
            return _this.titleService.setTitle(params.get('title'));
        }));
    };
    RentalItemComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rental', title], { queryParams: { id: id } });
    };
    RentalItemComponent.prototype.initGallery = function () {
        setTimeout(function () {
            setTimeout(function () {
                SEMICOLON.documentOnReady.init();
                setTimeout(function () {
                    SEMICOLON.documentOnLoad.init();
                    setTimeout(function () {
                        SEMICOLON.documentOnResize.init();
                        setTimeout(function () {
                            SEMICOLON.widget.init();
                            setTimeout(function () {
                                $('.css3-spinner').remove();
                                $('#linked-to-gallery a').click(function () {
                                    var imageLink = $(this).attr('data-image');
                                    $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
                                    return false;
                                });
                            }, 10);
                        }, 10);
                    }, 10);
                }, 10);
            }, 10);
        }, 100);
    };
    RentalItemComponent.prototype.isSpecified = function () {
        return this.locationService.isSpecified;
    };
    RentalItemComponent = tslib_1.__decorate([
        Component({
            selector: 'app-rental-item',
            templateUrl: './rental-item.component.html',
            styleUrls: ['./rental-item.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Title,
            LocationDateService,
            ActivatedRoute,
            Router,
            RoutingService])
    ], RentalItemComponent);
    return RentalItemComponent;
}());
export { RentalItemComponent };
//# sourceMappingURL=rental-item.component.js.map