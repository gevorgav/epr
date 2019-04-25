(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-page></app-page>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");









parse__WEBPACK_IMPORTED_MODULE_2__["initialize"]('myAppId', 'javascriptkey'); // use your appID & your js key
parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = 'http://138.68.251.183:1337/parse'; // use your server url
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (route) {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(function (route) { return route.data; }))
            .subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AppComponent.prototype.init = function () {
        // zip(this.categoryService.getCategories(),this.deliveryService.getDeliveryLocationsFromCash()).subscribe(res=>{
        //   this.isReady = true;
        // })
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_6__["ParseService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_8__["DeliveryChartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contact-info/contact-info.component */ "./src/app/pages/contact-info/contact-info.component.ts");
/* harmony import */ var _pages_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/delivery-chart/delivery-chart.component */ "./src/app/pages/delivery-chart/delivery-chart.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/rentals/rentals.component */ "./src/app/pages/rentals/rentals.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-pick-datetime */ "./node_modules/ng-pick-datetime/picker.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _pages_rental_item_rental_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/rental-item/rental-item.component */ "./src/app/pages/rental-item/rental-item.component.ts");
/* harmony import */ var _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/checkout/checkout.component */ "./src/app/pages/checkout/checkout.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _pages_location_date_location_date_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/location-date/location-date.component */ "./src/app/pages/location-date/location-date.component.ts");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _layout_page_page_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./layout/page/page.component */ "./src/app/layout/page/page.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _shared_services_delivery_chart_http_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/services/delivery-chart-http.service */ "./src/app/shared/services/delivery-chart-http.service.ts");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_services_category_http_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/category-http.service */ "./src/app/shared/services/category-http.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/verification/verification.component */ "./src/app/pages/verification/verification.component.ts");






































var appRoutes = [
    {
        path: 'home',
        component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
        data: { title: 'Entertainment Party Rentals.' }
    },
    {
        path: 'about-us',
        component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"]
    },
    {
        path: 'contact-info',
        component: _pages_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__["ContactInfoComponent"]
    },
    {
        path: 'delivery-chart',
        component: _pages_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryChartComponent"]
    },
    {
        path: 'rentals/:id',
        component: _pages_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_13__["RentalsComponent"]
    },
    {
        path: 'rentals',
        component: _pages_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_13__["RentalsComponent"]
    },
    {
        path: 'dashboard',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"]]
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__["LoginPageComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardLoginService"]],
        data: { title: 'EPR login page.' }
    },
    {
        path: 'rental/:title',
        component: _pages_rental_item_rental_item_component__WEBPACK_IMPORTED_MODULE_17__["RentalItemComponent"],
    },
    {
        path: 'cart',
        component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
    },
    {
        path: 'verification-page',
        component: _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_37__["VerificationComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardVerificationService"]]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_5__["CategoriesComponent"],
                _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_6__["CalculatorComponent"],
                _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_7__["AboutUsComponent"],
                _pages_contact_info_contact_info_component__WEBPACK_IMPORTED_MODULE_8__["ContactInfoComponent"],
                _pages_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_9__["DeliveryChartComponent"],
                _layout_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
                _pages_rentals_rentals_component__WEBPACK_IMPORTED_MODULE_13__["RentalsComponent"],
                _pages_rental_item_rental_item_component__WEBPACK_IMPORTED_MODULE_17__["RentalItemComponent"],
                _pages_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_18__["CheckoutComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__["LoginPageComponent"],
                _pages_location_date_location_date_component__WEBPACK_IMPORTED_MODULE_22__["LocationDateComponent"],
                _layout_page_page_component__WEBPACK_IMPORTED_MODULE_26__["PageComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_27__["DashboardComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_30__["CartComponent"],
                _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_37__["VerificationComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlDateTimeModule"],
                ng_pick_datetime__WEBPACK_IMPORTED_MODULE_15__["OwlNativeDateTimeModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_33__["MatAutocompleteModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_20__["MatTabsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"]
            ],
            providers: [
                _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_23__["LocationDateService"],
                _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_28__["ParseService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardLoginService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_29__["AuthGuardVerificationService"],
                _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_36__["RoutingService"],
                { provide: _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_32__["DeliveryChartService"], useClass: _shared_services_delivery_chart_http_service__WEBPACK_IMPORTED_MODULE_31__["DeliveryChartHttpService"] },
                { provide: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_34__["CategoryService"], useClass: _shared_services_category_http_service__WEBPACK_IMPORTED_MODULE_35__["CategoryHttpService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculator/calculator.component.css":
/*!*****************************************************!*\
  !*** ./src/app/calculator/calculator.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/calculator/calculator.component.html":
/*!******************************************************!*\
  !*** ./src/app/calculator/calculator.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  calculator works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/calculator/calculator.component.ts":
/*!****************************************************!*\
  !*** ./src/app/calculator/calculator.component.ts ***!
  \****************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CalculatorComponent = /** @class */ (function () {
    function CalculatorComponent() {
    }
    CalculatorComponent.prototype.ngOnInit = function () {
    };
    CalculatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calculator',
            template: __webpack_require__(/*! ./calculator.component.html */ "./src/app/calculator/calculator.component.html"),
            styles: [__webpack_require__(/*! ./calculator.component.css */ "./src/app/calculator/calculator.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalculatorComponent);
    return CalculatorComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  categories works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent.prototype.ngOnInit = function () {
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Footer\r\n\t\t============================================= -->\r\n<footer id=\"footer\" class=\"footer-light\" style=\"background: url('../../../assets/images/footer-1.jpg') right top / cover no-repeat\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <!-- Footer Widgets\r\n            ============================================= -->\r\n    <div class=\"footer-widgets-wrap clearfix\">\r\n\r\n      <div class=\"col_two_fifth\">\r\n\r\n        <div class=\"widget clearfix\">\r\n\r\n          <img src=\"../../../assets/images/logo/lrg-epr-logo.png\" style=\"position: relative; opacity: 0.85; left: -10px; max-height: 80px; margin-bottom: 20px;\" alt=\"Footer Logo\">\r\n\r\n          <p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.</p>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_three_fifth col_last\">\r\n\r\n        <div class=\"col_half\">\r\n          <h4 class=\"ls1 t400 uppercase\">Contact Info</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 bottommargin-sm widget_links widget_real_estate_popular\">\r\n              <address>\r\n                <strong>Headquarters:</strong><br>\r\n                795 Folsom Ave, Suite 600<br>\r\n                San Francisco, CA 94107<br>\r\n              </address>\r\n              <abbr title=\"Phone Number\"><strong>Phone:</strong></abbr> (91) 8547 632521<br>\r\n              <abbr title=\"Fax\"><strong>Fax:</strong></abbr> (91) 11 4752 1433<br>\r\n              <abbr title=\"Email Address\"><strong>Email:</strong></abbr> info@canvas.com\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col_half col_last\">\r\n\r\n          <h4 class=\"ls1 t400 uppercase\">Connect Socially</h4>\r\n\r\n          <div class=\"bottommargin-sm clearfix\">\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-facebook\" title=\"Facebook\">\r\n              <i class=\"icon-facebook\"></i>\r\n              <i class=\"icon-facebook\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-twitter\" title=\"Twitter\">\r\n              <i class=\"icon-twitter\"></i>\r\n              <i class=\"icon-twitter\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-instagram\" title=\"Instagram\">\r\n              <i class=\"icon-instagram\"></i>\r\n              <i class=\"icon-instagram\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-apple\" title=\"App Store\">\r\n              <i class=\"icon-apple\"></i>\r\n              <i class=\"icon-apple\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-android\" title=\"Play Store\">\r\n              <i class=\"icon-android\"></i>\r\n              <i class=\"icon-android\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-skype\" title=\"Skype\">\r\n              <i class=\"icon-skype\"></i>\r\n              <i class=\"icon-skype\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"line\" style=\"margin: 30px 0;\"></div>\r\n\r\n          <p class=\"ls1 t300\" style=\"font-size: 13px;\">Copyrights &copy; {{currentYear.getFullYear()}} Entertainment Party Rentals</p>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div><!-- .footer-widgets-wrap end -->\r\n\r\n  </div>\r\n\r\n</footer><!-- #footer end -->\r\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.currentYear = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header\r\n\t\t============================================= -->\r\n<header id=\"header\" class=\"full-header\">\r\n\r\n  <div id=\"header-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div id=\"primary-menu-trigger\"><i class=\"icon-reorder\"></i></div>\r\n\r\n      <!-- Logo\r\n                ============================================= -->\r\n      <div id=\"logo\">\r\n        <a routerLink=\"home\" class=\"standard-logo\" data-dark-logo=\"images/logo-dark.png\"><img\r\n          src=\"../../../assets/images/logo/lrg-epr-logo.png\" alt=\"Canvas Logo\"></a>\r\n        <a routerLink=\"home\" class=\"retina-logo\" data-dark-logo=\"images/logo-dark@2x.png\"><img\r\n          src=\"../../../assets/images/logo/lrg-epr-logo.png\" alt=\"Canvas Logo\"></a>\r\n      </div><!-- #logo end -->\r\n\r\n      <!-- Primary Navigation\r\n                ============================================= -->\r\n      <nav id=\"primary-menu\">\r\n        <ul>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"home\">\r\n            <div>Home</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/rentals\">\r\n            <div>Rentals</div>\r\n          </a>\r\n            <ul>\r\n              <li *ngFor=\"let category of categories\"><a [routerLink]=\"['/rentals', category.id]\">\r\n                <div>{{category.title}}</div>\r\n              </a></li>\r\n            </ul>\r\n          </li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/delivery-chart\">\r\n            <div>Delivery Chart</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/about-us\">\r\n            <div>About Us</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/contact-info\">\r\n            <div>Contact Info</div>\r\n          </a></li>\r\n          <li *ngIf=\"isAdmin\" routerLinkActive=\"current\"><a routerLink=\"/dashboard\">\r\n            <div>Dashboard</div>\r\n          </a></li>\r\n          <!--<li><a routerLink=\"demos/real-estate/listing.html\"><div>Listing</div></a></li>-->\r\n          <!--<li><a routerLink=\"demos/real-estate/contact.html\"><div>Contact</div></a></li>-->\r\n        </ul>\r\n\r\n        <!-- Top Cart\r\n                    ============================================= -->\r\n        <div class=\"top-links\">\r\n          <ul>\r\n            <li class=\"d-md-none d-lg-block\"><a routerLink=\"#\"><i class=\"icon-call\"></i> +1800-123-7890</a></li>\r\n            <li *ngIf=\"isLogin()\" routerLinkActive=\"current\"><a routerLink=\"#\" class=\"side-panel-trigger\">{{getCurrentUser()}}</a></li>\r\n            <li *ngIf=\"isLogin()\"><a href=\"#\" (click)=\"logout()\" data-lightbox=\"inline\" class=\"header-login-trigger\"><i class=\"icon-line2-login\"></i></a></li>\r\n            <li *ngIf=\"!isLogin()\" routerLinkActive=\"current\"><a routerLink=\"login\" class=\"side-panel-trigger\">Login/Register</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div id=\"top-cart\">\r\n          <a routerLink=\"cart\" id=\"top-cart-trigger\"><i class=\"icon-shopping-cart\"></i><span>5</span></a>\r\n          <!--<div class=\"top-cart-content\">-->\r\n            <!--<div class=\"top-cart-title\">-->\r\n              <!--<h4>Shopping Cart</h4>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"top-cart-items\">-->\r\n              <!--<div class=\"top-cart-item clearfix\">-->\r\n                <!--<div class=\"top-cart-item-image\">-->\r\n                  <!--<a href=\"#\"><img src=\"../../../assets/images/shop/small/1.jpg\" alt=\"Blue Round-Neck Tshirt\"/></a>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"top-cart-item-desc\">-->\r\n                  <!--<a href=\"#\">Blue Round-Neck Tshirt</a>-->\r\n                  <!--<span class=\"top-cart-item-price\">$19.99</span>-->\r\n                  <!--<span class=\"top-cart-item-quantity\">x 2</span>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"top-cart-item clearfix\">-->\r\n                <!--<div class=\"top-cart-item-image\">-->\r\n                  <!--<a href=\"#\"><img src=\"../../../assets/images/shop/small/6.jpg\" alt=\"Light Blue Denim Dress\"/></a>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"top-cart-item-desc\">-->\r\n                  <!--<a href=\"#\">Light Blue Denim Dress</a>-->\r\n                  <!--<span class=\"top-cart-item-price\">$24.99</span>-->\r\n                  <!--<span class=\"top-cart-item-quantity\">x 3</span>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"top-cart-action clearfix\">-->\r\n              <!--<span class=\"fleft top-checkout-price\">$114.95</span>-->\r\n              <!--<button class=\"button button-3d button-small nomargin fright\">View Cart</button>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        </div><!-- #top-cart end -->\r\n\r\n\r\n      </nav><!-- #primary-menu end -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</header><!-- #header end -->\r\n\r\n<div id=\"gotoTop\" class=\"icon-angle-up\"></div>\r\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(route, router, parseService, categoryService) {
        this.route = route;
        this.router = router;
        this.parseService = parseService;
        this.categoryService = categoryService;
        this.isAdmin = false;
        this.categories = [];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initCategories();
        this.parseService.isAdmin().subscribe(function (isAdmin) {
            _this.isAdmin = isAdmin;
        });
        this.parseService.$loginSubject.subscribe(function (res) {
            if (res === false) {
                _this.isAdmin = res;
            }
            else {
                _this.parseService.isAdmin().subscribe(function (isAdmin) {
                    _this.isAdmin = isAdmin;
                });
            }
        });
    };
    HeaderComponent.prototype.ngAfterViewInit = function () { };
    HeaderComponent.prototype.isLogin = function () {
        return this.parseService.isAuth();
    };
    HeaderComponent.prototype.getCurrentUser = function () {
        return this.parseService.getCurrentUser().getUsername();
    };
    HeaderComponent.prototype.logout = function () {
        var _this = this;
        this.parseService.logOut().subscribe(function (res) {
            _this.router.navigate(["login"]);
        });
    };
    HeaderComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_3__["ParseService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/page/page.component.css":
/*!************************************************!*\
  !*** ./src/app/layout/page/page.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/layout/page/page.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/page/page.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"clearfix\">\r\n  <app-header></app-header>\r\n  <router-outlet></router-outlet>\r\n  <app-footer></app-footer>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layout/page/page.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/page/page.component.ts ***!
  \***********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageComponent = /** @class */ (function () {
    function PageComponent() {
    }
    PageComponent.prototype.ngOnInit = function () {
    };
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/layout/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/layout/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL2Fib3V0LXVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\r\n\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>About Us</h1>\r\n    <span>Everything you need to know about our Company</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">About Us</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"col_full\">\r\n        <p>It’s very cool and important for kids' activities to teach them to be a smart, fast and communicative person.\r\n          Not only does our service bring them joy but we also want them to learn while they enjoy their childhood\r\n          parties!! Interactive games are what can make your children learn literally everything fast and easily! Stay\r\n          tuned for our virtual reality headset which is coming very soon! This is designed for kids to learn with\r\n          different interesting and funny video games and to develop their imagination! Additionally, we’re not only\r\n          focused on children’s parties but also on adults' events! We prepared for you the highly interesting table and\r\n          sports games, a photo booth, tables, chairs, tents, party machines and much more!</p>\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>Why choose <span>Us</span>.</h4>\r\n        </div>\r\n\r\n        <p>The answer is that you can rely on us undoubtedly cause we’re a team who loves punctuality, perfectionism in\r\n          everything, and of course parties! We’re a team of optimists who can’t tolerate sadness especially when it’s\r\n          relating to children. Choose us to share happiness and joy with other people to make this world a better place\r\n          to live in. Your every celebration will be at the highest level with our party rentals company.</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>Our <span>Mission</span>.</h4>\r\n        </div>\r\n\r\n        <p>Our mission is simple. We just aim to make your life happier when you’re using our rental service, and this\r\n          is why all our equipment is safe for our customers, cleaned each time before and after usage, delivered on\r\n          time and bringing fun to all of you! And this is not all we want to do for this world. We also aim to bring\r\n          joy to those children who unfortunately don’t have families, and we don’t actually like to call it “charity”\r\n          because we think that giving to those who really need it is our obligation, not an act of charity.</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>What we <span>Do</span>.</h4>\r\n        </div>\r\n\r\n        <p>We’re not only an amazing party rental service in Los Angeles County, California but we also provide a great\r\n          mood in all occasions such as birthday parties, carnivals, anniversaries, business, city or park events,\r\n          weddings, etc. Find on our website different range of party rentals with affordable price and high-quality\r\n          equipment such as bounce houses, combos, food machines, mechanical rides, interactive games and so much\r\n          more!</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
        this.selectedMoments = [
            null,
            null
        ];
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/pages/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/cart/cart.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\n\t\t============================================= -->\n<section id=\"page-title\">\n\n  <div class=\"container clearfix\">\n    <h1>Cart</h1>\n    <ol class=\"breadcrumb\">\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\n      <li class=\"breadcrumb-item\"><a routerLink=\"/rentals\">Rentals</a></li>\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Cart</li>\n    </ol>\n  </div>\n\n</section><!-- #page-title end -->\n\n<!-- Content\n    ============================================= -->\n<section id=\"content\">\n\n  <div class=\"content-wrap\">\n\n    <div class=\"container clearfix\">\n\n      <div class=\"table-responsive\">\n        <table class=\"table cart\">\n          <thead>\n          <tr>\n            <th class=\"cart-product-remove\">&nbsp;</th>\n            <th class=\"cart-product-thumbnail\">&nbsp;</th>\n            <th class=\"cart-product-name\">Product</th>\n            <th class=\"cart-product-price\">Unit Price</th>\n            <th class=\"cart-product-quantity\">Quantity</th>\n            <th class=\"cart-product-subtotal\">Total</th>\n          </tr>\n          </thead>\n          <tbody>\n          <tr class=\"cart_item\">\n            <td class=\"cart-product-remove\">\n              <a href=\"#\" class=\"remove\" title=\"Remove this item\"><i class=\"icon-trash2\"></i></a>\n            </td>\n\n            <td class=\"cart-product-thumbnail\">\n              <a href=\"#\"><img width=\"64\" height=\"64\" src=\"images/shop/thumbs/small/dress-3.jpg\" alt=\"Pink Printed Dress\"></a>\n            </td>\n\n            <td class=\"cart-product-name\">\n              <a href=\"#\">Pink Printed Dress</a>\n            </td>\n\n            <td class=\"cart-product-price\">\n              <span class=\"amount\">$19.99</span>\n            </td>\n\n            <td class=\"cart-product-quantity\">\n              <div class=\"quantity clearfix\">\n                <input type=\"button\" value=\"-\" class=\"minus\">\n                <input type=\"text\" name=\"quantity\" value=\"2\" class=\"qty\" />\n                <input type=\"button\" value=\"+\" class=\"plus\">\n              </div>\n            </td>\n\n            <td class=\"cart-product-subtotal\">\n              <span class=\"amount\">$39.98</span>\n            </td>\n          </tr>\n          <tr class=\"cart_item\">\n            <td class=\"cart-product-remove\">\n              <a href=\"#\" class=\"remove\" title=\"Remove this item\"><i class=\"icon-trash2\"></i></a>\n            </td>\n\n            <td class=\"cart-product-thumbnail\">\n              <a href=\"#\"><img width=\"64\" height=\"64\" src=\"images/shop/thumbs/small/shoes-2.jpg\" alt=\"Checked Canvas Shoes\"></a>\n            </td>\n\n            <td class=\"cart-product-name\">\n              <a href=\"#\">Checked Canvas Shoes</a>\n            </td>\n\n            <td class=\"cart-product-price\">\n              <span class=\"amount\">$24.99</span>\n            </td>\n\n            <td class=\"cart-product-quantity\">\n              <div class=\"quantity clearfix\">\n                <input type=\"button\" value=\"-\" class=\"minus\">\n                <input type=\"text\" name=\"quantity\" value=\"1\" class=\"qty\" />\n                <input type=\"button\" value=\"+\" class=\"plus\">\n              </div>\n            </td>\n\n            <td class=\"cart-product-subtotal\">\n              <span class=\"amount\">$24.99</span>\n            </td>\n          </tr>\n          <tr class=\"cart_item\">\n            <td class=\"cart-product-remove\">\n              <a href=\"#\" class=\"remove\" title=\"Remove this item\"><i class=\"icon-trash2\"></i></a>\n            </td>\n\n            <td class=\"cart-product-thumbnail\">\n              <a href=\"#\"><img width=\"64\" height=\"64\" src=\"images/shop/thumbs/small/tshirt-2.jpg\" alt=\"Pink Printed Dress\"></a>\n            </td>\n\n            <td class=\"cart-product-name\">\n              <a href=\"#\">Blue Men Tshirt</a>\n            </td>\n\n            <td class=\"cart-product-price\">\n              <span class=\"amount\">$13.99</span>\n            </td>\n\n            <td class=\"cart-product-quantity\">\n              <div class=\"quantity clearfix\">\n                <input type=\"button\" value=\"-\" class=\"minus\">\n                <input type=\"text\" name=\"quantity\" value=\"3\" class=\"qty\" />\n                <input type=\"button\" value=\"+\" class=\"plus\">\n              </div>\n            </td>\n\n            <td class=\"cart-product-subtotal\">\n              <span class=\"amount\">$41.97</span>\n            </td>\n          </tr>\n          <tr class=\"cart_item\">\n            <td colspan=\"6\">\n              <div class=\"row clearfix\">\n                <div class=\"col-lg-4 col-4 nopadding\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-8 col-7\">\n                      <input type=\"text\" value=\"\" class=\"sm-form-control\" placeholder=\"Enter Coupon Code..\" />\n                    </div>\n                    <div class=\"col-lg-4 col-5\">\n                      <a href=\"#\" class=\"button button-3d button-black nomargin\">Apply Coupon</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-8 col-8 nopadding\">\n                  <a href=\"#\" class=\"button button-3d nomargin fright\">Update Cart</a>\n                  <a href=\"shop.html\" class=\"button button-3d notopmargin fright\">Proceed to Checkout</a>\n                </div>\n              </div>\n            </td>\n          </tr>\n          </tbody>\n\n        </table>\n      </div>\n\n      <div class=\"row clearfix\">\n        <div class=\"col-lg-6 clearfix\">\n          <h4>Calculate Shipping</h4>\n          <form>\n            <div class=\"col_full\">\n              <select class=\"sm-form-control\">\n                <option value=\"AX\">&#197;land Islands</option>\n                <option value=\"AF\">Afghanistan</option>\n                <option value=\"AL\">Albania</option>\n                <option value=\"DZ\">Algeria</option>\n                <option value=\"AD\">Andorra</option>\n                <option value=\"AO\">Angola</option>\n                <option value=\"AI\">Anguilla</option>\n                <option value=\"AQ\">Antarctica</option>\n                <option value=\"AG\">Antigua and Barbuda</option>\n                <option value=\"AR\">Argentina</option>\n                <option value=\"AM\">Armenia</option>\n                <option value=\"AW\">Aruba</option>\n                <option value=\"AU\">Australia</option>\n                <option value=\"AT\">Austria</option>\n                <option value=\"AZ\">Azerbaijan</option>\n                <option value=\"BS\">Bahamas</option>\n                <option value=\"BH\">Bahrain</option>\n                <option value=\"BD\">Bangladesh</option>\n                <option value=\"BB\">Barbados</option>\n                <option value=\"BY\">Belarus</option>\n                <option value=\"PW\">Belau</option>\n                <option value=\"BE\">Belgium</option>\n                <option value=\"BZ\">Belize</option>\n                <option value=\"BJ\">Benin</option>\n                <option value=\"BM\">Bermuda</option>\n                <option value=\"BT\">Bhutan</option>\n                <option value=\"BO\">Bolivia</option>\n                <option value=\"BQ\">Bonaire, Saint Eustatius and Saba</option>\n                <option value=\"BA\">Bosnia and Herzegovina</option>\n                <option value=\"BW\">Botswana</option>\n                <option value=\"BV\">Bouvet Island</option>\n                <option value=\"BR\">Brazil</option>\n                <option value=\"IO\">British Indian Ocean Territory</option>\n                <option value=\"VG\">British Virgin Islands</option>\n                <option value=\"BN\">Brunei</option>\n                <option value=\"BG\">Bulgaria</option>\n                <option value=\"BF\">Burkina Faso</option>\n                <option value=\"BI\">Burundi</option>\n                <option value=\"KH\">Cambodia</option>\n                <option value=\"CM\">Cameroon</option>\n                <option value=\"CA\">Canada</option>\n                <option value=\"CV\">Cape Verde</option>\n                <option value=\"KY\">Cayman Islands</option>\n                <option value=\"CF\">Central African Republic</option>\n                <option value=\"TD\">Chad</option>\n                <option value=\"CL\">Chile</option>\n                <option value=\"CN\">China</option>\n                <option value=\"CX\">Christmas Island</option>\n                <option value=\"CC\">Cocos (Keeling) Islands</option>\n                <option value=\"CO\">Colombia</option>\n                <option value=\"KM\">Comoros</option>\n                <option value=\"CG\">Congo (Brazzaville)</option>\n                <option value=\"CD\">Congo (Kinshasa)</option>\n                <option value=\"CK\">Cook Islands</option>\n                <option value=\"CR\">Costa Rica</option>\n                <option value=\"HR\">Croatia</option>\n                <option value=\"CU\">Cuba</option>\n                <option value=\"CW\">Cura&Ccedil;ao</option>\n                <option value=\"CY\">Cyprus</option>\n                <option value=\"CZ\">Czech Republic</option>\n                <option value=\"DK\">Denmark</option>\n                <option value=\"DJ\">Djibouti</option>\n                <option value=\"DM\">Dominica</option>\n                <option value=\"DO\">Dominican Republic</option>\n                <option value=\"EC\">Ecuador</option>\n                <option value=\"EG\">Egypt</option>\n                <option value=\"SV\">El Salvador</option>\n                <option value=\"GQ\">Equatorial Guinea</option>\n                <option value=\"ER\">Eritrea</option>\n                <option value=\"EE\">Estonia</option>\n                <option value=\"ET\">Ethiopia</option>\n                <option value=\"FK\">Falkland Islands</option>\n                <option value=\"FO\">Faroe Islands</option>\n                <option value=\"FJ\">Fiji</option>\n                <option value=\"FI\">Finland</option>\n                <option value=\"FR\">France</option>\n                <option value=\"GF\">French Guiana</option>\n                <option value=\"PF\">French Polynesia</option>\n                <option value=\"TF\">French Southern Territories</option>\n                <option value=\"GA\">Gabon</option>\n                <option value=\"GM\">Gambia</option>\n                <option value=\"GE\">Georgia</option>\n                <option value=\"DE\">Germany</option>\n                <option value=\"GH\">Ghana</option>\n                <option value=\"GI\">Gibraltar</option>\n                <option value=\"GR\">Greece</option>\n                <option value=\"GL\">Greenland</option>\n                <option value=\"GD\">Grenada</option>\n                <option value=\"GP\">Guadeloupe</option>\n                <option value=\"GT\">Guatemala</option>\n                <option value=\"GG\">Guernsey</option>\n                <option value=\"GN\">Guinea</option>\n                <option value=\"GW\">Guinea-Bissau</option>\n                <option value=\"GY\">Guyana</option>\n                <option value=\"HT\">Haiti</option>\n                <option value=\"HM\">Heard Island and McDonald Islands</option>\n                <option value=\"HN\">Honduras</option>\n                <option value=\"HK\">Hong Kong</option>\n                <option value=\"HU\">Hungary</option>\n                <option value=\"IS\">Iceland</option>\n                <option value=\"IN\">India</option>\n                <option value=\"ID\">Indonesia</option>\n                <option value=\"IR\">Iran</option>\n                <option value=\"IQ\">Iraq</option>\n                <option value=\"IM\">Isle of Man</option>\n                <option value=\"IL\">Israel</option>\n                <option value=\"IT\">Italy</option>\n                <option value=\"CI\">Ivory Coast</option>\n                <option value=\"JM\">Jamaica</option>\n                <option value=\"JP\">Japan</option>\n                <option value=\"JE\">Jersey</option>\n                <option value=\"JO\">Jordan</option>\n                <option value=\"KZ\">Kazakhstan</option>\n                <option value=\"KE\">Kenya</option>\n                <option value=\"KI\">Kiribati</option>\n                <option value=\"KW\">Kuwait</option>\n                <option value=\"KG\">Kyrgyzstan</option>\n                <option value=\"LA\">Laos</option>\n                <option value=\"LV\">Latvia</option>\n                <option value=\"LB\">Lebanon</option>\n                <option value=\"LS\">Lesotho</option>\n                <option value=\"LR\">Liberia</option>\n                <option value=\"LY\">Libya</option>\n                <option value=\"LI\">Liechtenstein</option>\n                <option value=\"LT\">Lithuania</option>\n                <option value=\"LU\">Luxembourg</option>\n                <option value=\"MO\">Macao S.A.R., China</option>\n                <option value=\"MK\">Macedonia</option>\n                <option value=\"MG\">Madagascar</option>\n                <option value=\"MW\">Malawi</option>\n                <option value=\"MY\">Malaysia</option>\n                <option value=\"MV\">Maldives</option>\n                <option value=\"ML\">Mali</option>\n                <option value=\"MT\">Malta</option>\n                <option value=\"MH\">Marshall Islands</option>\n                <option value=\"MQ\">Martinique</option>\n                <option value=\"MR\">Mauritania</option>\n                <option value=\"MU\">Mauritius</option>\n                <option value=\"YT\">Mayotte</option>\n                <option value=\"MX\">Mexico</option>\n                <option value=\"FM\">Micronesia</option>\n                <option value=\"MD\">Moldova</option>\n                <option value=\"MC\">Monaco</option>\n                <option value=\"MN\">Mongolia</option>\n                <option value=\"ME\">Montenegro</option>\n                <option value=\"MS\">Montserrat</option>\n                <option value=\"MA\">Morocco</option>\n                <option value=\"MZ\">Mozambique</option>\n                <option value=\"MM\">Myanmar</option>\n                <option value=\"NA\">Namibia</option>\n                <option value=\"NR\">Nauru</option>\n                <option value=\"NP\">Nepal</option>\n                <option value=\"NL\">Netherlands</option>\n                <option value=\"AN\">Netherlands Antilles</option>\n                <option value=\"NC\">New Caledonia</option>\n                <option value=\"NZ\">New Zealand</option>\n                <option value=\"NI\">Nicaragua</option>\n                <option value=\"NE\">Niger</option>\n                <option value=\"NG\">Nigeria</option>\n                <option value=\"NU\">Niue</option>\n                <option value=\"NF\">Norfolk Island</option>\n                <option value=\"KP\">North Korea</option>\n                <option value=\"NO\">Norway</option>\n                <option value=\"OM\">Oman</option>\n                <option value=\"PK\">Pakistan</option>\n                <option value=\"PS\">Palestinian Territory</option>\n                <option value=\"PA\">Panama</option>\n                <option value=\"PG\">Papua New Guinea</option>\n                <option value=\"PY\">Paraguay</option>\n                <option value=\"PE\">Peru</option>\n                <option value=\"PH\">Philippines</option>\n                <option value=\"PN\">Pitcairn</option>\n                <option value=\"PL\">Poland</option>\n                <option value=\"PT\">Portugal</option>\n                <option value=\"QA\">Qatar</option>\n                <option value=\"IE\">Republic of Ireland</option>\n                <option value=\"RE\">Reunion</option>\n                <option value=\"RO\">Romania</option>\n                <option value=\"RU\">Russia</option>\n                <option value=\"RW\">Rwanda</option>\n                <option value=\"ST\">S&atilde;o Tom&eacute; and Pr&iacute;ncipe</option>\n                <option value=\"BL\">Saint Barth&eacute;lemy</option>\n                <option value=\"SH\">Saint Helena</option>\n                <option value=\"KN\">Saint Kitts and Nevis</option>\n                <option value=\"LC\">Saint Lucia</option>\n                <option value=\"SX\">Saint Martin (Dutch part)</option>\n                <option value=\"MF\">Saint Martin (French part)</option>\n                <option value=\"PM\">Saint Pierre and Miquelon</option>\n                <option value=\"VC\">Saint Vincent and the Grenadines</option>\n                <option value=\"SM\">San Marino</option>\n                <option value=\"SA\">Saudi Arabia</option>\n                <option value=\"SN\">Senegal</option>\n                <option value=\"RS\">Serbia</option>\n                <option value=\"SC\">Seychelles</option>\n                <option value=\"SL\">Sierra Leone</option>\n                <option value=\"SG\">Singapore</option>\n                <option value=\"SK\">Slovakia</option>\n                <option value=\"SI\">Slovenia</option>\n                <option value=\"SB\">Solomon Islands</option>\n                <option value=\"SO\">Somalia</option>\n                <option value=\"ZA\">South Africa</option>\n                <option value=\"GS\">South Georgia/Sandwich Islands</option>\n                <option value=\"KR\">South Korea</option>\n                <option value=\"SS\">South Sudan</option>\n                <option value=\"ES\">Spain</option>\n                <option value=\"LK\">Sri Lanka</option>\n                <option value=\"SD\">Sudan</option>\n                <option value=\"SR\">Suriname</option>\n                <option value=\"SJ\">Svalbard and Jan Mayen</option>\n                <option value=\"SZ\">Swaziland</option>\n                <option value=\"SE\">Sweden</option>\n                <option value=\"CH\">Switzerland</option>\n                <option value=\"SY\">Syria</option>\n                <option value=\"TW\">Taiwan</option>\n                <option value=\"TJ\">Tajikistan</option>\n                <option value=\"TZ\">Tanzania</option>\n                <option value=\"TH\">Thailand</option>\n                <option value=\"TL\">Timor-Leste</option>\n                <option value=\"TG\">Togo</option>\n                <option value=\"TK\">Tokelau</option>\n                <option value=\"TO\">Tonga</option>\n                <option value=\"TT\">Trinidad and Tobago</option>\n                <option value=\"TN\">Tunisia</option>\n                <option value=\"TR\">Turkey</option>\n                <option value=\"TM\">Turkmenistan</option>\n                <option value=\"TC\">Turks and Caicos Islands</option>\n                <option value=\"TV\">Tuvalu</option>\n                <option value=\"UG\">Uganda</option>\n                <option value=\"UA\">Ukraine</option>\n                <option value=\"AE\">United Arab Emirates</option>\n                <option value=\"GB\" selected='selected'>United Kingdom (UK)</option>\n                <option value=\"US\">United States (US)</option>\n                <option value=\"UY\">Uruguay</option>\n                <option value=\"UZ\">Uzbekistan</option>\n                <option value=\"VU\">Vanuatu</option>\n                <option value=\"VA\">Vatican</option>\n                <option value=\"VE\">Venezuela</option>\n                <option value=\"VN\">Vietnam</option>\n                <option value=\"WF\">Wallis and Futuna</option>\n                <option value=\"EH\">Western Sahara</option>\n                <option value=\"WS\">Western Samoa</option>\n                <option value=\"YE\">Yemen</option>\n                <option value=\"ZM\">Zambia</option>\n                <option value=\"ZW\">Zimbabwe</option>\n\n              </select>\n            </div>\n            <div class=\"col_half\">\n              <input type=\"text\" class=\"sm-form-control\" placeholder=\"State / Country\" />\n            </div>\n\n            <div class=\"col_half col_last\">\n              <input type=\"text\" class=\"sm-form-control\" placeholder=\"PostCode / Zip\" />\n            </div>\n            <a href=\"#\" class=\"button button-3d nomargin button-black\">Update Totals</a>\n          </form>\n        </div>\n\n        <div class=\"col-lg-6 clearfix\">\n          <h4>Cart Totals</h4>\n\n          <div class=\"table-responsive\">\n            <table class=\"table cart\">\n              <tbody>\n              <tr class=\"cart_item\">\n                <td class=\"cart-product-name\">\n                  <strong>Cart Subtotal</strong>\n                </td>\n\n                <td class=\"cart-product-name\">\n                  <span class=\"amount\">$106.94</span>\n                </td>\n              </tr>\n              <tr class=\"cart_item\">\n                <td class=\"cart-product-name\">\n                  <strong>Shipping</strong>\n                </td>\n\n                <td class=\"cart-product-name\">\n                  <span class=\"amount\">Free Delivery</span>\n                </td>\n              </tr>\n              <tr class=\"cart_item\">\n                <td class=\"cart-product-name\">\n                  <strong>Total</strong>\n                </td>\n\n                <td class=\"cart-product-name\">\n                  <span class=\"amount color lead\"><strong>$106.94</strong></span>\n                </td>\n              </tr>\n              </tbody>\n\n            </table>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n\n</section><!-- #content end -->\n"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CartComponent = /** @class */ (function () {
    function CartComponent() {
    }
    CartComponent.prototype.ngOnInit = function () {
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/pages/cart/cart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  checkout works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/checkout/checkout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/checkout/checkout.component.ts ***!
  \******************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent() {
    }
    CheckoutComponent.prototype.ngOnInit = function () {
    };
    CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout',
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/pages/checkout/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/pages/checkout/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckoutComponent);
    return CheckoutComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact-info/contact-info.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/contact-info/contact-info.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QtaW5mby9jb250YWN0LWluZm8uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/contact-info/contact-info.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/contact-info/contact-info.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Contact</h1>\r\n    <span>Get in Touch with Us</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Contact Info</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n    <div class=\"container clearfix\">\r\n\r\n      <!-- Postcontent\r\n          ============================================= -->\r\n      <div class=\"col_half\">\r\n\r\n      </div><!-- .postcontent end -->\r\n\r\n      <!-- Sidebar\r\n          ============================================= -->\r\n      <div class=\"sidebar col_last nobottommargin\">\r\n\r\n        <address>\r\n          <strong>Headquarters:</strong><br>\r\n          795 Folsom Ave, Suite 600<br>\r\n          San Francisco, CA 94107<br>\r\n        </address>\r\n        <abbr title=\"Phone Number\"><strong>Phone:</strong></abbr> (91) 8547 632521<br>\r\n        <abbr title=\"Fax\"><strong>Fax:</strong></abbr> (91) 11 4752 1433<br>\r\n        <abbr title=\"Email Address\"><strong>Email:</strong></abbr> info@canvas.com\r\n\r\n        <div class=\"widget noborder notoppadding\">\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"widget noborder notoppadding\">\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-facebook\">\r\n            <i class=\"icon-facebook\"></i>\r\n            <i class=\"icon-facebook\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-twitter\">\r\n            <i class=\"icon-twitter\"></i>\r\n            <i class=\"icon-twitter\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-dribbble\">\r\n            <i class=\"icon-dribbble\"></i>\r\n            <i class=\"icon-dribbble\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-forrst\">\r\n            <i class=\"icon-forrst\"></i>\r\n            <i class=\"icon-forrst\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-pinterest\">\r\n            <i class=\"icon-pinterest\"></i>\r\n            <i class=\"icon-pinterest\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-gplus\">\r\n            <i class=\"icon-gplus\"></i>\r\n            <i class=\"icon-gplus\"></i>\r\n          </a>\r\n\r\n        </div>\r\n\r\n      </div><!-- .sidebar end -->\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/contact-info/contact-info.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/contact-info/contact-info.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactInfoComponent", function() { return ContactInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactInfoComponent = /** @class */ (function () {
    function ContactInfoComponent() {
    }
    ContactInfoComponent.prototype.ngOnInit = function () {
    };
    ContactInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-info',
            template: __webpack_require__(/*! ./contact-info.component.html */ "./src/app/pages/contact-info/contact-info.component.html"),
            styles: [__webpack_require__(/*! ./contact-info.component.css */ "./src/app/pages/contact-info/contact-info.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactInfoComponent);
    return ContactInfoComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/delivery-chart/delivery-chart.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/pages/delivery-chart/delivery-chart.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlbGl2ZXJ5LWNoYXJ0L2RlbGl2ZXJ5LWNoYXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/delivery-chart/delivery-chart.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/delivery-chart/delivery-chart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Delivery Chart</h1>\r\n    <span>Get in Touch with Us</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Delivery Chart</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n    <div class=\"container clearfix\">\r\n\r\n      <!-- Postcontent\r\n          ============================================= -->\r\n      <div class=\"fullscreen\">\r\n\r\n        <h3>Delivery Areas price list</h3>\r\n        <form [formGroup]=\"stateForm\">\r\n          <mat-form-field style=\"width: 100%;\" >\r\n            <input type=\"text\"  matInput placeholder=\"Check for Zip Code or City\" formControlName=\"stateGroup\" [matAutocomplete]=\"autoGroup\">\r\n            <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n              <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n                <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n                  {{name}}\r\n                </mat-option>\r\n              </mat-optgroup>\r\n            </mat-autocomplete>\r\n          </mat-form-field>\r\n        </form>\r\n        <table class=\"table table-hover\">\r\n          <thead>\r\n          <tr>\r\n            <th>Cities</th>\r\n            <th>Los Angeles County Zip Codes</th>\r\n            <th>Price</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let item of deliveryChartsSearch\" >\r\n            <td>{{item.city}}</td>\r\n            <td>\r\n              <ng-container *ngFor=\"let zip of item.zipCodes; let i = index\">\r\n                {{zip.zipCode}}\r\n                <ng-container *ngIf=\"i !== item.zipCodes.length-1\">\r\n                  ,\r\n                </ng-container>\r\n              </ng-container>\r\n            </td>\r\n            <td>${{item.price}}</td>\r\n          </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/delivery-chart/delivery-chart.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/delivery-chart/delivery-chart.component.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryChartComponent, _filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartComponent", function() { return DeliveryChartComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_filter", function() { return _filter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var DeliveryChartComponent = /** @class */ (function () {
    function DeliveryChartComponent(deliveryChartService, fb) {
        this.deliveryChartService = deliveryChartService;
        this.fb = fb;
        this.stateForm = this.fb.group({
            stateGroup: '',
        });
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.deliveryChartsSearch = [];
    }
    DeliveryChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.deliveryChartService.getDeliveryLocations().subscribe(function (res) {
            _this.deliveryChartsSearch = _this.allDeliveryCharts = res;
            _this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.stateForm.get('stateGroup').valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (value) { return _this._filterGroup(value); }));
    };
    DeliveryChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stateForm.valueChanges.subscribe(function (res) {
            _this.valueChange(res.stateGroup);
        });
    };
    DeliveryChartComponent.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: _filter(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    DeliveryChartComponent.prototype.valueChange = function (value) {
        this.deliveryChartsSearch = [];
        if (value == "" || value == null || value == undefined) {
            this.deliveryChartsSearch = this.allDeliveryCharts;
        }
        else {
            for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
                var city = _a[_i];
                if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                    this.deliveryChartsSearch.push(city);
                }
                else {
                    for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                        var zipCode = _c[_b];
                        if (zipCode.zipCode.indexOf(value) > -1) {
                            this.deliveryChartsSearch.push(city);
                            break;
                        }
                    }
                }
            }
        }
    };
    DeliveryChartComponent.prototype.initAutoCompleteOptions = function () {
        var cityNames = [];
        var zipCodeNames = [];
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            cityNames.push(city.city);
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                zipCodeNames.push(zipCode.zipCode);
            }
        }
        var cities = { letter: 'Cities', names: cityNames };
        var zipCodes = { letter: 'Zip codes', names: zipCodeNames };
        this.stateGroups.push(cities, zipCodes);
    };
    DeliveryChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-cart',
            template: __webpack_require__(/*! ./delivery-chart.component.html */ "./src/app/pages/delivery-chart/delivery-chart.component.html"),
            styles: [__webpack_require__(/*! ./delivery-chart.component.css */ "./src/app/pages/delivery-chart/delivery-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryChartService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DeliveryChartComponent);
    return DeliveryChartComponent;
}());

var _filter = function (opt, value) {
    var filterValue = value.toLowerCase();
    return opt.filter(function (item) { return item.toLowerCase().indexOf(filterValue) === 0; });
};


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUtcGFnZS9ob21lLXBhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Slider\r\n\t\t============================================= -->\r\n<section id=\"slider\" class=\"slider-element full-screen clearfix\"\r\n         style=\"background: url(../../../assets/images/party-at-home.jpg) top right no-repeat; background-size: cover;\"\r\n         data-height-md=\"550\">\r\n\r\n  <div class=\"full-screen\">\r\n    <div class=\"real-estate-tabs-slider\">\r\n      <div class=\"container clearfix\">\r\n        <div class=\"tabs advanced-real-estate-tabs nomargin clearfix\" style=\"max-width: 500px;\">\r\n\r\n          <ul class=\"tab-nav clearfix\">\r\n            <li class=\"noleftmargin\"><a routerLink=\"#\">Instant Price & Availability</a></li>\r\n          </ul>\r\n          <app-location-date (emitSubmit)=\"locationDateSubmitted()\"></app-location-date>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section><!-- #slider end -->\r\n\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-my-house\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Hassle Free</h3>\r\n          <p>Our goal is to make your kids' childhood totally hassle-free. We want them to have fun and enjoy each\r\n            moment of their childhood with family and friends.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third \">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-doc\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Rich Assortment </h3>\r\n          <p>We present a large range of rentals you’ll need to have a great birthday party! Inflatables, party\r\n            decorations, interactive games and more to have fun with your kids.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-garage\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Affordable Price</h3>\r\n          <p>Don’t waste your time looking for party rentals, cause you have already found the company with high-quality\r\n            service and affordable price!</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-rent\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Clean Equipment</h3>\r\n          <p>Our ALL inflatables, party packages, (water) slides and other equipment are cleaned before and after each\r\n            use also inspected and certified each year.\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-credit\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Safety</h3>\r\n          <p>We guarantee that you and your children will be in safety from all injuries during the parties with our\r\n            rentals. We know that kids' joy is happiness for parents.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-hammer\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Well Constructed</h3>\r\n          <p>Both the service and equipment are flawless so feel free to use our service to make your party be the best\r\n            of all the time.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n      <div class=\"line topmargin-sm bottommargin-lg\"></div>\r\n\r\n      <!--<div style=\"position: relative;\">-->\r\n      <!--<div class=\"heading-block nobottomborder\">-->\r\n      <!--<h3>Featured Properties</h3>-->\r\n      <!--</div>-->\r\n\r\n      <!--<a routerLink=\"#\" class=\"button button-small button-rounded button-border button-border-thin t500 nomargin\"-->\r\n      <!--style=\"position: absolute; top: 7px; right: 0;\">Check All</a>-->\r\n\r\n      <!--<div class=\"real-estate owl-carousel image-carousel carousel-widget bottommargin-lg\" data-margin=\"10\"-->\r\n      <!--data-nav=\"true\" data-loop=\"true\" data-pagi=\"false\" data-items-xs=\"1\" data-items-sm=\"1\" data-items-md=\"2\"-->\r\n      <!--data-items-lg=\"3\" data-items-xl=\"3\">-->\r\n\r\n      <!--<div class=\"oc-item\">-->\r\n      <!--<div class=\"real-estate-item\">-->\r\n      <!--<div class=\"real-estate-item-image\">-->\r\n      <!--<div class=\"badge badge-danger bgcolor-2\">For Sale</div>-->\r\n      <!--<a href=\"#\">-->\r\n      <!--<img src=\"../../../assets/real-estate/images/items/1.jpg\" alt=\"Image 1\">-->\r\n      <!--</a>-->\r\n      <!--<div class=\"real-estate-item-price\">-->\r\n      <!--$1.2m<span>Leasehold</span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"real-estate-item-info clearfix\">-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-stack-2\"></i></a>-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-heart\"></i></a>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"real-estate-item-desc\">-->\r\n      <!--<h3><a href=\"#\">3 Bedroom Villa</a></h3>-->\r\n      <!--<span>Seminyak Area</span>-->\r\n\r\n      <!--<a href=\"#\" class=\"real-estate-item-link\"><i class=\"icon-info\"></i></a>-->\r\n\r\n      <!--<div class=\"line\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>-->\r\n\r\n      <!--<div class=\"real-estate-item-features t500 font-primary clearfix\">-->\r\n      <!--<div class=\"row no-gutters\">-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Beds: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Baths: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Area: <span class=\"color\">150 sqm</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Pool: <span class=\"text-success\"><i-->\r\n      <!--class=\"icon-check-sign\"></i></span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Internet: <span class=\"text-success\"><i class=\"icon-check-sign\"></i></span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Cleaning: <span class=\"text-danger\"><i-->\r\n      <!--class=\"icon-minus-sign-alt\"></i></span></div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"oc-item\">-->\r\n      <!--<div class=\"real-estate-item\">-->\r\n      <!--<div class=\"real-estate-item-image\">-->\r\n      <!--<div class=\"badge badge-success\">Hot Deal</div>-->\r\n      <!--<a href=\"#\">-->\r\n      <!--<img src=\"../../../assets/real-estate/images/items/2.jpg\" alt=\"Image 2\">-->\r\n      <!--</a>-->\r\n      <!--<div class=\"real-estate-item-price\">-->\r\n      <!--$200,000<span>bi-annually</span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"real-estate-item-info clearfix\">-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-stack-2\"></i></a>-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-heart\"></i></a>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"real-estate-item-desc\">-->\r\n      <!--<h3><a href=\"#\">3 Bedroom Villa</a></h3>-->\r\n      <!--<span>Seminyak Area</span>-->\r\n\r\n      <!--<a href=\"#\" class=\"real-estate-item-link\"><i class=\"icon-info\"></i></a>-->\r\n\r\n      <!--<div class=\"line\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>-->\r\n\r\n      <!--<div class=\"real-estate-item-features t500 clearfix\">-->\r\n      <!--<div class=\"row no-gutters\">-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Beds: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Baths: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Area: <span class=\"color\">150 sqm</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Pool: <span class=\"text-success\"><i-->\r\n      <!--class=\"icon-check-sign\"></i></span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Internet: <span class=\"text-success\"><i class=\"icon-check-sign\"></i></span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Cleaning: <span class=\"text-success\"><i class=\"icon-check-sign\"></i></span>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"oc-item\">-->\r\n      <!--<div class=\"real-estate-item\">-->\r\n      <!--<div class=\"real-estate-item-image\">-->\r\n      <!--<div class=\"badge badge-danger\">Long Term Rental</div>-->\r\n      <!--<a href=\"#\">-->\r\n      <!--<img src=\"../../../assets/real-estate/images/items/4.jpg\" alt=\"Image 3\">-->\r\n      <!--</a>-->\r\n      <!--<div class=\"real-estate-item-price\">-->\r\n      <!--$1600<span>per month</span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"real-estate-item-info clearfix\">-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-stack-2\"></i></a>-->\r\n      <!--<a href=\"#\"><i class=\"icon-line-heart\"></i></a>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--<div class=\"real-estate-item-desc\">-->\r\n      <!--<h3><a href=\"#\">3 Bedroom Villa</a></h3>-->\r\n      <!--<span>Seminyak Area</span>-->\r\n\r\n      <!--<a href=\"#\" class=\"real-estate-item-link\"><i class=\"icon-info\"></i></a>-->\r\n\r\n      <!--<div class=\"line\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>-->\r\n\r\n      <!--<div class=\"real-estate-item-features t500 clearfix\">-->\r\n      <!--<div class=\"row no-gutters\">-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Beds: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Baths: <span class=\"color\">3</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Area: <span class=\"color\">150 sqm</span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Pool: <span class=\"text-success\"><i-->\r\n      <!--class=\"icon-check-sign\"></i></span></div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Internet: <span class=\"text-success\"><i class=\"icon-check-sign\"></i></span>-->\r\n      <!--</div>-->\r\n      <!--<div class=\"col-lg-4 nopadding\">Cleaning: <span class=\"text-success\"><i class=\"icon-check-sign\"></i></span>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <!--</div>-->\r\n      <!--</div>-->\r\n\r\n      <div class=\"clear\"></div>\r\n\r\n      <div class=\"promo promo-dark promo-flat bottommargin-lg\">\r\n        <h3 class=\"t400 ls1\">Special Offers on Long Term Rentals &amp; Lease Agreements</h3>\r\n        <a href=\"#\" class=\"button button-dark button-large button-rounded\">Contact Now</a>\r\n      </div>\r\n\r\n      <div class=\"col_full nobottommargin\">\r\n        <div class=\"tabs tabs-justify tabs-tb tabs-alt nobottommargin clearfix\">\r\n          <mat-tab-group>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">format_align_justify</mat-icon>\r\n                Why Us?\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-1\" style=\"margin: 15px;\">\r\n                <p>We believe that each child on this planet deserves a loving family, freedom, and happiness. That’s\r\n                  why we created a company able to bring lots of fun, unforgettable memories and precious childhood\r\n                  moments with family and friends. We love bringing joy to the children of the world and that’s why the\r\n                  company has the future goal to be engaged in charity. Let’s help to make children of the world happier\r\n                  together!\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n                Advantages\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-2\" style=\"margin: 15px;\">\r\n                <p>High-quality service is what we’re working on every single day! You’ll be satisfied with the safety,\r\n                  cleanliness and fast work we do for you to make your every event be on a high level so that you can\r\n                  give a magical and carefree childhood to your kids. Check the large variety of our rentals to find\r\n                  what you and your kids would love most to have at the parties. We would love to help you make the\r\n                  fabulous party which will surely be the best of all the time!</p>\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">rate_review</mat-icon>\r\n                Who We Are\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-2\" style=\"margin: 15px;\">\r\n                <p>We’re a team of kind people who adore children and life. We’re dedicated to providing the best rental\r\n                  service with the highest quality products for our lovely customers. Each of us is a hard-working\r\n                  person and it helps to make service without any disadvantages. We are working every single day on each\r\n                  aspect of our job so that you can totally enjoy events using our service.</p>\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n      <div class=\"line topmargin-sm bottommargin-lg\"></div>\r\n\r\n      <div class=\"heading-block nobottomborder\">\r\n        <h3>Party Rentals, Interactive Games, and Inflatable Jumpers</h3>\r\n      </div>\r\n      <div class=\"row real-estate-properties clearfix bottommargin-lg\">\r\n        <ng-container *ngFor=\"let category of categories; let i = index\">\r\n          <div [ngClass]=\"getClass(i)\">\r\n            <a href=\"#\"\r\n               style=\"background: url('../../../assets/real-estate/images/cities/4.jpg') no-repeat bottom center; background-size: cover;\">\r\n              <div class=\"vertical-middle dark center\">\r\n                <div class=\"heading-block nomargin noborder\">\r\n                  <h3 class=\"capitalize t500\">{{category.title}}</h3>\r\n                  <span style=\"margin-top: 5px; font-size: 17px;\">23 Properties</span>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <!--<div class=\"col_one_third col_last\">-->\r\n\r\n    <!--<h4 class=\"center\">Top Builders</h4>-->\r\n\r\n    <!--<ul class=\"clients-grid grid-2 nobottommargin clearfix\">-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/1.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/2.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/3.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/4.png\" alt=\"Clients\"></a></li>-->\r\n    <!--</ul>-->\r\n\r\n    <!--</div>-->\r\n\r\n    <div class=\"clear\"></div>\r\n\r\n  </div>\r\n\r\n</section>\r\n\r\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");




var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, categoryService) {
        this.router = router;
        this.categoryService = categoryService;
        this.categories = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.initCategories();
    };
    HomePageComponent.prototype.ngAfterViewInit = function () {
        this.initGallery();
    };
    HomePageComponent.prototype.locationDateSubmitted = function () {
        this.router.navigate(['rentals']);
    };
    HomePageComponent.prototype.initGallery = function () {
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
                        }, 10);
                    }, 10);
                }, 10);
            }, 10);
        }, 1000);
        $('#linked-to-gallery a').click(function () {
            var imageLink = $(this).attr('data-image');
            $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
            return false;
        });
    };
    HomePageComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategories().subscribe(function (res) {
            _this.categories = res;
        });
    };
    HomePageComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rentals', title], { queryParams: { id: id } });
    };
    HomePageComponent.prototype.getClass = function (index) {
        if (index === 0 || index === 1 || index === 11 || index === 12) {
            return "col-lg-6";
        }
        return "col-lg-4";
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/location-date/location-date.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/location-date/location-date.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvY2F0aW9uLWRhdGUvbG9jYXRpb24tZGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/location-date/location-date.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/location-date/location-date.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-container\">\r\n        <form [formGroup]=\"locationDateForm\" *ngIf=\"!locationDateService.isSpecified\" novalidate>\r\n          <div class=\"tab-content clearfix\" id=\"tab-rent\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <label for=\"zipCode\" style=\"margin-bottom: 20px !important;\">Event Location</label>\r\n                <mat-form-field style=\"width: 100%;\" >\r\n                  <input type=\"text\"  matInput placeholder=\"Enter Zip Code or City\" required formControlName=\"zipCode\" [matAutocomplete]=\"autoGroup\"  id=\"zipCode\">\r\n                  <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n                    <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n                      <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n                        {{name}}\r\n                      </mat-option>\r\n                    </mat-optgroup>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n                <div *ngIf=\"locationDateForm.errors?.incorrectZipLocation && (locationDateForm.touched || locationDateForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                  Sorry, there is no branch that currently provides service for {{locationDateForm.get('zipCode')?.value}} .\r\n                </div>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"start\" style=\"margin-bottom: 20px !important;\">Date Time Range From:</label>\r\n                <input class=\"required sm-form-control input-block-level not-dark\" id=\"start\" [owlDateTimeTrigger]=\"dt12\" [owlDateTime]=\"dt12\" formControlName=\"startDate\">\r\n                <div *ngIf=\"locationDateForm.controls['startDate'].invalid && (locationDateForm.controls['startDate'].dirty || locationDateForm.controls['startDate'].touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"locationDateForm.controls['startDate'].errors.required\">\r\n                    Start date is required.\r\n                  </div>\r\n                </div>\r\n                <owl-date-time #dt12></owl-date-time>\r\n              </div>\r\n              <div class=\"w-100 d-block d-md-none bottommargin-sm\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"end\" style=\"margin-bottom: 20px !important;\"> Date Time Range To:</label>\r\n                <input id=\"end\" class=\"required sm-form-control input-block-level not-dark\"  [owlDateTimeTrigger]=\"dt13\" [owlDateTime]=\"dt13\" formControlName=\"endDate\">\r\n                <div *ngIf=\"locationDateForm.controls['endDate'].invalid && (locationDateForm.controls['endDate'].dirty || locationDateForm.controls['endDate'].touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"locationDateForm.controls['endDate'].errors.required\">\r\n                    End date is required.\r\n                  </div>\r\n                </div>\r\n                <owl-date-time #dt13></owl-date-time>\r\n              </div>\r\n              <div class=\"col-md-12 clearfix\">\r\n                <div *ngIf=\"locationDateForm.errors?.identityRevealed && (locationDateForm.touched || locationDateForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                  Start date con't be after end date.\r\n                </div>\r\n                <button type=\"button\" (click)=\"onSubmit()\" class=\"button button-3d button-rounded btn-block nomargin\"\r\n                        style=\"margin-top: 35px !important;\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <ng-container *ngIf=\"locationDateService.isSpecified\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-rent-view\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <label for=\"zipCodeView\" style=\"margin-bottom: 20px !important;\">Event Location</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"zipCodeView\">{{locationDateService.locationDate.location}}</span>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"startDateView\" style=\"margin-bottom: 20px !important;\">Date Time Range From:</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"startDateView\">{{locationDateService.locationDate.startDateTime.toLocaleString()}}</span>\r\n              </div>\r\n              <div class=\"w-100 d-block d-md-none bottommargin-sm\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"endDateView\" style=\"margin-bottom: 20px !important;\">Date Time Range To:</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"endDateView\">{{locationDateService.locationDate.endDateTime.toLocaleString()}}</span>\r\n              </div>\r\n              <div class=\"col-md-12 clearfix\">\r\n                <button class=\"button button-3d button-rounded btn-block button-white button-light nomargin\" (click)=\"edit()\" style=\"margin-top: 35px !important;\">Change</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/pages/location-date/location-date.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/location-date/location-date.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationDateComponent, identityRevealedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDateComponent", function() { return LocationDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityRevealedValidator", function() { return identityRevealedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../delivery-chart/delivery-chart.component */ "./src/app/pages/delivery-chart/delivery-chart.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");







var LocationDateComponent = /** @class */ (function () {
    function LocationDateComponent(locationDateService, deliveryChartService) {
        this.locationDateService = locationDateService;
        this.deliveryChartService = deliveryChartService;
        this.stateGroups = [];
        this.allDeliveryCharts = [];
        this.emitSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    LocationDateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.locationDateForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'zipCode': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.locationDateService.locationDate.location, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'startDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.locationDateService.locationDate.startDateTime, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'endDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.locationDateService.locationDate.endDateTime, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
        }, { validators: identityRevealedValidator });
        this.deliveryChartService.getDeliveryLocations().subscribe(function (res) {
            _this.allDeliveryCharts = res;
            _this.initAutoCompleteOptions();
        });
        this.stateGroupOptions = this.locationDateForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (value) { return _this._filterGroup(value.zipCode); }));
    };
    LocationDateComponent.prototype._filterGroup = function (value) {
        if (value) {
            return this.stateGroups
                .map(function (group) { return ({ letter: group.letter, names: Object(_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_4__["_filter"])(group.names, value) }); })
                .filter(function (group) { return group.names.length > 0; });
        }
        return this.stateGroups;
    };
    LocationDateComponent.prototype.onSubmit = function () {
        if (this.locationDateForm.valid) {
            if (this.checkCityOrZipCode(this.locationDateForm.get('zipCode').value)) {
                this.locationDateService.setLocationDate(this.locationDateForm.get('startDate').value, this.locationDateForm.get('endDate').value, this.locationDateForm.get('zipCode').value);
                this.locationDateService.isSpecified = true;
                this.emitSubmit.emit(true);
            }
            else {
                //@ts-ignore
                this.locationDateForm.errors = { incorrectZipLocation: true };
            }
        }
    };
    LocationDateComponent.prototype.edit = function () {
        this.locationDateService.isSpecified = false;
    };
    LocationDateComponent.prototype.checkCityOrZipCode = function (value) {
        var isCorrect = false;
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            if (city.city.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                isCorrect = true;
                break;
            }
            else {
                for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                    var zipCode = _c[_b];
                    if (zipCode.zipCode.indexOf(value) > -1) {
                        isCorrect = true;
                        break;
                    }
                }
            }
        }
        return isCorrect;
    };
    LocationDateComponent.prototype.initAutoCompleteOptions = function () {
        var cityNames = [];
        var zipCodeNames = [];
        for (var _i = 0, _a = this.allDeliveryCharts; _i < _a.length; _i++) {
            var city = _a[_i];
            cityNames.push(city.city);
            for (var _b = 0, _c = city.zipCodes; _b < _c.length; _b++) {
                var zipCode = _c[_b];
                zipCodeNames.push(zipCode.zipCode);
            }
        }
        var cities = { letter: 'Cities', names: cityNames };
        var zipCodes = { letter: 'Zip codes', names: zipCodeNames };
        this.stateGroups.push(cities, zipCodes);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LocationDateComponent.prototype, "emitSubmit", void 0);
    LocationDateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-location-date',
            template: __webpack_require__(/*! ./location-date.component.html */ "./src/app/pages/location-date/location-date.component.html"),
            styles: [__webpack_require__(/*! ./location-date.component.css */ "./src/app/pages/location-date/location-date.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_2__["LocationDateService"],
            _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_6__["DeliveryChartService"]])
    ], LocationDateComponent);
    return LocationDateComponent;
}());

var identityRevealedValidator = function (control) {
    var zipCode = control.get('zipCode');
    var startDate = control.get('startDate');
    var endDate = control.get('endDate');
    return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? { 'identityRevealed': true } : null;
};


/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>My Account</h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a href=\"\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Login - Registration</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n    ============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n      <mat-tab-group animationDuration=\"0ms\" style=\"max-width: 500px;\" class=\"nobottommargin clearfix divcenter\">\r\n        <mat-tab label=\"Login\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-login\">\r\n            <div class=\"card nobottommargin\">\r\n              <div class=\"card-body\" style=\"padding: 40px;\">\r\n                <form id=\"login-form\" [formGroup]=\"userLoginForm\" (ngSubmit)=\"onSubmitLogin()\">\r\n\r\n                  <h3>Login to your Account</h3>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"login-form-username\">Username:</label>\r\n                    <input formControlName=\"username\" type=\"text\" id=\"login-form-username\" name=\"login-form-username\" value=\"\" class=\"form-control\" />\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"login-form-password\">Password:</label>\r\n                    <input formControlName=\"password\" type=\"password\" id=\"login-form-password\" name=\"login-form-password\" value=\"\" class=\"form-control\" />\r\n                  </div>\r\n\r\n                  <div class=\"col_full nobottommargin\">\r\n                    <div *ngIf=\"loginErrorMessage\" class=\"cross-validation-error-message alert alert-danger\">\r\n                      {{loginErrorMessage}}\r\n                    </div>\r\n                    <button class=\"button button-3d button-black nomargin\" id=\"login-form-submit\" name=\"login-form-submit\" value=\"login\" type=\"submit\">Login</button>\r\n                    <!--<a href=\"#\" class=\"fright\">Forgot Password?</a>-->\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Register\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-register\">\r\n            <div class=\"card nobottommargin\">\r\n              <div class=\"card-body\" style=\"padding: 40px;\">\r\n                <h3>Register for an Account</h3>\r\n\r\n                <form id=\"register-form\" name=\"register-form\" class=\"nobottommargin\" [formGroup]=\"userRegisterForm\" (ngSubmit)=\"onSubmitRegistration()\">\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-name\">Name:</label>\r\n                    <input formControlName=\"name\" type=\"text\" id=\"register-form-name\" name=\"register-form-name\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['name'].invalid && (userRegisterForm.controls['name'].dirty || userRegisterForm.controls['name'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['name'].errors.required\">\r\n                        Name is required.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-email\">Email Address:</label>\r\n                    <input formControlName=\"email\" type=\"text\" id=\"register-form-email\" name=\"register-form-email\" value=\"\" class=\"form-control\"  [email]=\"true\"/>\r\n                    <div *ngIf=\"userRegisterForm.controls['email'].invalid && (userRegisterForm.controls['email'].dirty || userRegisterForm.controls['email'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.required\">\r\n                        Email Address is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.email\">\r\n                        Email Address is invalid.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.emailTaken\">\r\n                        Email Address is already registered.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-username\">Choose a Username:</label>\r\n                    <input formControlName=\"username\" type=\"text\" id=\"register-form-username\" name=\"register-form-username\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['username'].invalid && (userRegisterForm.controls['username'].dirty || userRegisterForm.controls['username'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['username'].errors.required\">\r\n                        Username is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['username'].errors.usernameTaken\">\r\n                        Username is already registered.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-phone\">Phone:</label>\r\n                    <input formControlName=\"phone\" type=\"text\" id=\"register-form-phone\" name=\"register-form-phone\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['phone'].invalid && (userRegisterForm.controls['phone'].dirty || userRegisterForm.controls['phone'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['phone'].errors.required\">\r\n                        Phone is required.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-password\">Choose Password:</label>\r\n                    <input formControlName=\"password\" type=\"password\" id=\"register-form-password\" name=\"register-form-password\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['password'].invalid && (userRegisterForm.controls['password'].dirty || userRegisterForm.controls['password'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['password'].errors.required\">\r\n                        Password is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['password'].errors?.minlength\">\r\n                        Password min length is 6.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-repassword\">Re-enter Password:</label>\r\n                    <input formControlName=\"repassword\" type=\"password\" id=\"register-form-repassword\" name=\"register-form-repassword\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['repassword'].invalid && (userRegisterForm.controls['repassword'].dirty || userRegisterForm.controls['repassword'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['repassword'].errors.required\">\r\n                        Password is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['repassword'].errors?.minlength\">\r\n                        Password min length is 6.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full nobottommargin\">\r\n                    <div *ngIf=\"userRegisterForm.errors?.userRevealedValidator && (userRegisterForm.touched || userRegisterForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                      Incorrect password.\r\n                    </div>\r\n                    <button type=\"submit\" class=\"button button-3d button-black nomargin\" id=\"register-form-submit\" name=\"register-form-submit\" value=\"register\">Register Now</button>\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent, userRevealedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userRevealedValidator", function() { return userRevealedValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_model_user_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/model/user.model */ "./src/app/shared/model/user.model.ts");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







parse__WEBPACK_IMPORTED_MODULE_5__["initialize"]('myAppId', 'javascriptkey'); // use your appID & your js key
parse__WEBPACK_IMPORTED_MODULE_5__["serverURL"] = 'http://138.68.251.183:1337/parse'; // use your server url
var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(parseService, router, activatedRoute) {
        this.parseService = parseService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.loginErrorMessage = "";
        this.user = new _shared_model_user_model__WEBPACK_IMPORTED_MODULE_4__["UserModel"]();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.initRegisterForm();
        this.initLoginForm();
    };
    LoginPageComponent.prototype.onSubmitLogin = function () {
        var that = this;
        if (this.userLoginForm.valid) {
            this.parseService.login(this.userLoginForm.get('username').value, this.userLoginForm.get('password').value).subscribe(function (data) {
                that.parseService.$loginSubject.next(true);
                that.router.navigate(["home"]);
            }, function (error) {
                that.loginErrorMessage = error.message;
            });
        }
    };
    LoginPageComponent.prototype.onSubmitRegistration = function () {
        if (this.userRegisterForm.valid) {
            var user_1 = new this.parseService.parse.User();
            user_1.setUsername(this.userRegisterForm.get('username').value.toLowerCase().trim());
            user_1.setEmail(this.userRegisterForm.get('email').value);
            user_1.setPassword(this.userRegisterForm.get('password').value);
            user_1.set('name', this.userRegisterForm.get('name').value);
            user_1.set('phone', this.userRegisterForm.get('phone').value);
            var that_1 = this;
            user_1.signUp().then(function () {
                var query = new that_1.parseService.parse.Query(that_1.parseService.parse.Role);
                query.equalTo("name", 'user');
                return query.first();
                //first will return one object or null
            }).then(function (role) {
                //.getUsers() is equal .relation('users')
                if (role) {
                    role.getUsers().add(user_1);
                    role.save(null, {}).then(function (res) {
                        that_1.router.navigate(["verification-page"]);
                    });
                }
                else {
                    return that_1.parseService.parse.Promise.error("no such role");
                }
            }, console.error).then(function () {
                return user_1;
            }, console.error);
        }
    };
    LoginPageComponent.prototype.checkMail = function (control) {
        var Stores = parse__WEBPACK_IMPORTED_MODULE_5__["Object"].extend("User");
        var query = new parse__WEBPACK_IMPORTED_MODULE_5__["Query"](Stores);
        query.equalTo("email", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { emailTaken: true };
        });
    };
    LoginPageComponent.prototype.checkUsername = function (control) {
        var Stores = parse__WEBPACK_IMPORTED_MODULE_5__["Object"].extend("User");
        var query = new parse__WEBPACK_IMPORTED_MODULE_5__["Query"](Stores);
        query.equalTo("username", control.value.trim());
        return query.find().then(function (results) {
            return results.length == 0 ? null : { usernameTaken: true };
        });
    };
    LoginPageComponent.prototype.initRegisterForm = function () {
        this.userRegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.name, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.email, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email
            ], this.checkMail.bind(this)),
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.username, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ], this.checkUsername.bind(this)),
            'phone': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.phone, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.password, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ]),
            'repassword': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.user.rePassword, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6)
            ]),
        }, { validators: userRevealedValidator });
    };
    LoginPageComponent.prototype.initLoginForm = function () {
        this.userLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])
        });
    };
    LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.css */ "./src/app/pages/login-page/login-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_parse_service__WEBPACK_IMPORTED_MODULE_2__["ParseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());

var userRevealedValidator = function (control) {
    var password = control.get('password');
    var repassword = control.get('repassword');
    return password.value && repassword.value && password.value !== repassword.value ? { 'userRevealedValidator': true } : null;
};


/***/ }),

/***/ "./src/app/pages/rental-item/rental-item.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/rental-item/rental-item.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbC1pdGVtL3JlbnRhbC1pdGVtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/rental-item/rental-item.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/rental-item/rental-item.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\r\n    ============================================= -->\r\n<section id=\"page-title\">\r\n  <div class=\"container clearfix\">\r\n    <h1>Pink Printed Dress</h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a href=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/rentals\">Rentals</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Shop Single</li>\r\n    </ol>\r\n  </div>\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n    ============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"single-product\">\r\n\r\n        <div class=\"product\">\r\n\r\n          <div class=\"col_two_fifth\">\r\n\r\n            <!-- Product Single - Gallery\r\n                            ============================================= -->\r\n            <div class=\"product-image\" style=\"overflow: visible;\">\r\n              <div id=\"oc-images\" class=\"owl-carousel image-carousel carousel-widget\" data-lightbox=\"gallery\" data-margin=\"0\" data-items=\"1\" data-pagi=\"false\" data-autoplay=\"6000\" data-loop=\"true\">\r\n                <div class=\"oc-item\">\r\n                  <a href=\"../../../assets/real-estate/images/cities/4.jpg\" title=\"Pink Printed Dress - Front View\" data-lightbox=\"gallery-item\"><img src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Pink Printed Dress\"></a>\r\n                </div>\r\n                <div class=\"oc-item\">\r\n                  <a href=\"../../../assets/real-estate/images/cities/4.jpg\" title=\"Pink Printed Dress - Side View\" data-lightbox=\"gallery-item\"><img src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Pink Printed Dress\"></a>\r\n                </div>\r\n                <div class=\"oc-item\">\r\n                  <a href=\"../../../assets/real-estate/images/cities/4.jpg\" title=\"Pink Printed Dress - Back View\" data-lightbox=\"gallery-item\"><img src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Pink Printed Dress\"></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"sale-flash\">Sale!</div>\r\n            </div><!-- Product Single - Gallery End -->\r\n\r\n            <div id=\"linked-to-gallery\" style=\"margin-top: 4px;\">\r\n              <div id=\"oc-images-linker\" class=\"owl-carousel image-carousel carousel-widget\" data-margin=\"4\" data-items=\"4\" data-pagi=\"false\" data-loop=\"true\">\r\n                <div class=\"oc-item\">\r\n                  <a href=\"#\" data-image=\"1\"><img class=\"image_fade\" src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Gallery Thumb 1\"></a>\r\n                </div>\r\n                <div class=\"oc-item\">\r\n                  <a href=\"#\" data-image=\"2\"><img class=\"image_fade\" src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Gallery Thumb 2\"></a>\r\n                </div>\r\n                <div class=\"oc-item\">\r\n                  <a href=\"#\" data-image=\"3\"><img class=\"image_fade\" src=\"../../../assets/real-estate/images/cities/4.jpg\" alt=\"Gallery Thumb 3\"></a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col_two_fifth product-desc\">\r\n\r\n            <!-- Product Single - Price\r\n                            ============================================= -->\r\n            <div class=\"product-price\"> <ins>$24.99</ins></div><!-- Product Single - Price End -->\r\n            <!-- Product Single - Rating\r\n                            ============================================= -->\r\n            <div class=\"product-rating\">\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n            </div><!-- Product Single - Rating End -->\r\n            <div class=\"line\"></div>\r\n            <div class=\"clear\"></div>\r\n\r\n            <ul class=\"tab-nav clearfix\">\r\n              <li class=\"noleftmargin\"><a routerLink=\"#\">Instant Price & Availability</a></li>\r\n            </ul>\r\n            <app-location-date></app-location-date>\r\n\r\n\r\n            <!-- Product Single - Quantity & Cart Button\r\n\t\t\t\t\t\t\t\t============================================= -->\r\n            <form *ngIf=\"locationService.isSpecified\" class=\"cart nobottommargin clearfix\" method=\"post\" enctype='multipart/form-data'>\r\n              <div class=\"line\"></div>\r\n              <div class=\"quantity clearfix\">\r\n                <input type=\"button\" value=\"-\" class=\"minus\">\r\n                <input type=\"text\" step=\"1\" min=\"1\"  name=\"quantity\" value=\"1\" title=\"Qty\" class=\"qty\" size=\"4\" />\r\n                <input type=\"button\" value=\"+\" class=\"plus\">\r\n              </div>\r\n              <button type=\"submit\" class=\"add-to-cart button nomargin\">Add to cart</button>\r\n            </form><!-- Product Single - Quantity & Cart Button End -->\r\n\r\n            <div class=\"clear\"></div>\r\n            <div class=\"line\"></div>\r\n\r\n            <!-- Product Single - Short Description\r\n                            ============================================= -->\r\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero velit id eaque ex quae laboriosam nulla optio doloribus! Perspiciatis, libero, neque, perferendis at nisi optio dolor!</p>\r\n            <p>Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.</p>\r\n            <ul class=\"iconlist\">\r\n              <li><i class=\"icon-caret-right\"></i> Dynamic Color Options</li>\r\n              <li><i class=\"icon-caret-right\"></i> Lots of Size Options</li>\r\n              <li><i class=\"icon-caret-right\"></i> 30-Day Return Policy</li>\r\n            </ul><!-- Product Single - Short Description End -->\r\n\r\n            <!--&lt;!&ndash; Product Single - Meta-->\r\n                            <!--============================================= &ndash;&gt;-->\r\n            <!--<div class=\"card product-meta\">-->\r\n              <!--<div class=\"card-body\">-->\r\n                <!--<span itemprop=\"productID\" class=\"sku_wrapper\">SKU: <span class=\"sku\">8465415</span></span>-->\r\n                <!--<span class=\"posted_in\">Category: <a href=\"#\" rel=\"tag\">Dress</a>.</span>-->\r\n                <!--<span class=\"tagged_as\">Tags: <a href=\"#\" rel=\"tag\">Pink</a>, <a href=\"#\" rel=\"tag\">Short</a>, <a href=\"#\" rel=\"tag\">Dress</a>, <a href=\"#\" rel=\"tag\">Printed</a>.</span>-->\r\n              <!--</div>-->\r\n            <!--</div>&lt;!&ndash; Product Single - Meta End &ndash;&gt;-->\r\n\r\n            <!-- Product Single - Share\r\n                            ============================================= -->\r\n            <div class=\"si-share noborder clearfix\">\r\n              <span>Share:</span>\r\n              <div>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-facebook\">\r\n                  <i class=\"icon-facebook\"></i>\r\n                  <i class=\"icon-facebook\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-twitter\">\r\n                  <i class=\"icon-twitter\"></i>\r\n                  <i class=\"icon-twitter\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-pinterest\">\r\n                  <i class=\"icon-pinterest\"></i>\r\n                  <i class=\"icon-pinterest\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-gplus\">\r\n                  <i class=\"icon-gplus\"></i>\r\n                  <i class=\"icon-gplus\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-rss\">\r\n                  <i class=\"icon-rss\"></i>\r\n                  <i class=\"icon-rss\"></i>\r\n                </a>\r\n                <a href=\"#\" class=\"social-icon si-borderless si-email3\">\r\n                  <i class=\"icon-email3\"></i>\r\n                  <i class=\"icon-email3\"></i>\r\n                </a>\r\n              </div>\r\n            </div><!-- Product Single - Share End -->\r\n\r\n          </div>\r\n\r\n          <div class=\"col_one_fifth col_last\">\r\n            <div class=\"divider divider-center\"><i class=\"icon-circle-blank\"></i></div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-thumbs-up2\"></i>\r\n              </div>\r\n              <h3>100% Original</h3>\r\n              <p class=\"notopmargin\">We guarantee you the sale of Original Brands.</p>\r\n            </div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-credit-cards\"></i>\r\n              </div>\r\n              <h3>Payment Options</h3>\r\n              <p class=\"notopmargin\">We accept Visa, MasterCard and American Express.</p>\r\n            </div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-truck2\"></i>\r\n              </div>\r\n              <h3>Free Shipping</h3>\r\n              <p class=\"notopmargin\">Free Delivery to 100+ Locations on orders above $40.</p>\r\n            </div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-undo\"></i>\r\n              </div>\r\n              <h3>30-Days Returns</h3>\r\n              <p class=\"notopmargin\">Return or exchange items purchased within 30 days.</p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"col_full nobottommargin\">\r\n            <mat-tab-group>\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">format_align_justify</mat-icon>\r\n                  Description\r\n                </ng-template>\r\n                <div class=\"tab-content clearfix\">\r\n                  <p>Pink printed dress,  woven, round neck with a keyhole and buttoned closure at the back, sleeveless, concealed zip up at left side seam, belt loops along waist with slight gathers beneath, brand appliqu?? above left front hem, has an attached lining.</p>\r\n                  Comes with a white, slim synthetic belt that has a tang clasp.\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n                  Additional Information\r\n                </ng-template>\r\n                <div class=\"tab-content clearfix\" >\r\n\r\n                  <table class=\"table table-striped table-bordered\">\r\n                    <tbody>\r\n                    <tr>\r\n                      <td>Size</td>\r\n                      <td>Small, Medium &amp; Large</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Color</td>\r\n                      <td>Pink &amp; White</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Waist</td>\r\n                      <td>26 cm</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Length</td>\r\n                      <td>40 cm</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Chest</td>\r\n                      <td>33 inches</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Fabric</td>\r\n                      <td>Cotton, Silk &amp; Synthetic</td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Warranty</td>\r\n                      <td>3 Months</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab>\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">rate_review</mat-icon>\r\n                  Reviews ({{reviewsCount}})\r\n                </ng-template>\r\n\r\n                <div class=\"tab-content clearfix\" >\r\n\r\n                  <div id=\"reviews\" class=\"clearfix\">\r\n\r\n                    <ol class=\"commentlist clearfix\">\r\n\r\n                      <li class=\"comment even thread-even depth-1\" id=\"li-comment-1\">\r\n                        <div id=\"comment-1\" class=\"comment-wrap clearfix\">\r\n\r\n                          <div class=\"comment-meta\">\r\n                            <div class=\"comment-author vcard\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"comment-avatar clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt='' src='http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"comment-content clearfix\">\r\n                            <div class=\"comment-author\">John Doe<span><a href=\"#\" title=\"Permalink to this comment\">April 24, 2014 at 10:46AM</a></span></div>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo perferendis aliquid tenetur. Aliquid, tempora, sit aliquam officiis nihil autem eum at repellendus facilis quaerat consequatur commodi laborum saepe non nemo nam maxime quis error tempore possimus est quasi reprehenderit fuga!</p>\r\n                            <div class=\"review-comment-ratings\">\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star-half-full\"></i>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"clear\"></div>\r\n\r\n                        </div>\r\n                      </li>\r\n\r\n                      <li class=\"comment even thread-even depth-1\" id=\"li-comment-1\">\r\n                        <div id=\"comment-1\" class=\"comment-wrap clearfix\">\r\n\r\n                          <div class=\"comment-meta\">\r\n                            <div class=\"comment-author vcard\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"comment-avatar clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt='' src='http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"comment-content clearfix\">\r\n                            <div class=\"comment-author\">Mary Jane<span><a href=\"#\" title=\"Permalink to this comment\">June 16, 2014 at 6:00PM</a></span></div>\r\n                            <p>Quasi, blanditiis, neque ipsum numquam odit asperiores hic dolor necessitatibus libero sequi amet voluptatibus ipsam velit qui harum temporibus cum nemo iste aperiam explicabo fuga odio ratione sint fugiat consequuntur vitae adipisci delectus eum incidunt possimus tenetur excepturi at accusantium quod doloremque reprehenderit aut expedita labore error atque?</p>\r\n                            <div class=\"review-comment-ratings\">\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star-empty\"></i>\r\n                              <i class=\"icon-star-empty\"></i>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"clear\"></div>\r\n\r\n                        </div>\r\n                      </li>\r\n\r\n                    </ol>\r\n\r\n                    <!-- Modal Reviews\r\n                                            ============================================= -->\r\n                    <a href=\"#\" data-toggle=\"modal\" data-target=\"#reviewFormModal\" class=\"button button-3d nomargin fright\">Add a Review</a>\r\n\r\n                    <!-- Modal Reviews End -->\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"clear\"></div><div class=\"line\"></div>\r\n\r\n      <div class=\"col_full nobottommargin\">\r\n\r\n        <h4>Related Products</h4>\r\n\r\n        <div id=\"oc-product\" class=\"owl-carousel product-carousel carousel-widget\" data-margin=\"30\" data-pagi=\"false\" data-items-xs=\"1\" data-items-sm=\"2\" data-items-md=\"3\" data-items-xl=\"4\">\r\n\r\n          <div class=\"oc-item\">\r\n            <div class=\"product iproduct clearfix\">\r\n              <div class=\"product-image\">\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/dress/1.jpg\" alt=\"Checked Short Dress\"></a>\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/dress/1-1.jpg\" alt=\"Checked Short Dress\"></a>\r\n                <div class=\"sale-flash\">50% Off*</div>\r\n                <div class=\"product-overlay\">\r\n                  <a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>\r\n                  <a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i class=\"icon-zoom-in2\"></i><span> Quick View</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-desc center\">\r\n                <div class=\"product-title\"><h3><a href=\"#\">Checked Short Dress</a></h3></div>\r\n                <div class=\"product-price\"><del>$24.99</del> <ins>$12.49</ins></div>\r\n                <div class=\"product-rating\">\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star-half-full\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"oc-item\">\r\n            <div class=\"product iproduct clearfix\">\r\n              <div class=\"product-image\">\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/pants/1-1.jpg\" alt=\"Slim Fit Chinos\"></a>\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/pants/1.jpg\" alt=\"Slim Fit Chinos\"></a>\r\n                <div class=\"product-overlay\">\r\n                  <a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>\r\n                  <a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i class=\"icon-zoom-in2\"></i><span> Quick View</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-desc center\">\r\n                <div class=\"product-title\"><h3><a href=\"#\">Slim Fit Chinos</a></h3></div>\r\n                <div class=\"product-price\">$39.99</div>\r\n                <div class=\"product-rating\">\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star-half-full\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"oc-item\">\r\n            <div class=\"product iproduct clearfix\">\r\n              <div class=\"product-image\">\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/shoes/1-1.jpg\" alt=\"Dark Brown Boots\"></a>\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/shoes/1.jpg\" alt=\"Dark Brown Boots\"></a>\r\n                <div class=\"product-overlay\">\r\n                  <a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>\r\n                  <a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i class=\"icon-zoom-in2\"></i><span> Quick View</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-desc center\">\r\n                <div class=\"product-title\"><h3><a href=\"#\">Dark Brown Boots</a></h3></div>\r\n                <div class=\"product-price\">$49</div>\r\n                <div class=\"product-rating\">\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"oc-item\">\r\n            <div class=\"product iproduct clearfix\">\r\n              <div class=\"product-image\">\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/dress/2.jpg\" alt=\"Light Blue Denim Dress\"></a>\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/dress/2-2.jpg\" alt=\"Light Blue Denim Dress\"></a>\r\n                <div class=\"product-overlay\">\r\n                  <a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>\r\n                  <a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i class=\"icon-zoom-in2\"></i><span> Quick View</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-desc center\">\r\n                <div class=\"product-title\"><h3><a href=\"#\">Light Blue Denim Dress</a></h3></div>\r\n                <div class=\"product-price\">$19.95</div>\r\n                <div class=\"product-rating\">\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"oc-item\">\r\n            <div class=\"product iproduct clearfix\">\r\n              <div class=\"product-image\">\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/sunglasses/1.jpg\" alt=\"Unisex Sunglasses\"></a>\r\n                <a href=\"#\"><img src=\"../../../assets/images/shop/sunglasses/1-1.jpg\" alt=\"Unisex Sunglasses\"></a>\r\n                <div class=\"sale-flash\">Sale!</div>\r\n                <div class=\"product-overlay\">\r\n                  <a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>\r\n                  <a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i class=\"icon-zoom-in2\"></i><span> Quick View</span></a>\r\n                </div>\r\n              </div>\r\n              <div class=\"product-desc center\">\r\n                <div class=\"product-title\"><h3><a href=\"#\">Unisex Sunglasses</a></h3></div>\r\n                <div class=\"product-price\"><del>$19.99</del> <ins>$11.99</ins></div>\r\n                <div class=\"product-rating\">\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star3\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                  <i class=\"icon-star-empty\"></i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n<div class=\"modal fade\" id=\"reviewFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"reviewFormModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"reviewFormModalLabel\">Submit a Review</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"nobottommargin\" id=\"template-reviewform\" name=\"template-reviewform\" action=\"#\" method=\"post\">\r\n\r\n          <div class=\"col_half\">\r\n            <label for=\"template-reviewform-name\">Name <small>*</small></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"icon-user\"></i></div>\r\n              </div>\r\n              <input type=\"text\" id=\"template-reviewform-name\" name=\"template-reviewform-name\" value=\"\" class=\"form-control required\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col_half col_last\">\r\n            <label for=\"template-reviewform-email\">Email <small>*</small></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\"><div class=\"input-group-text\">@</div></div>\r\n              <input type=\"email\" id=\"template-reviewform-email\" name=\"template-reviewform-email\" value=\"\" class=\"required email form-control\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"clear\"></div>\r\n\r\n          <div class=\"col_full col_last\">\r\n            <label for=\"template-reviewform-rating\">Rating</label>\r\n            <select id=\"template-reviewform-rating\" name=\"template-reviewform-rating\" class=\"form-control\">\r\n              <option value=\"\">-- Select One --</option>\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"clear\"></div>\r\n\r\n          <div class=\"col_full\">\r\n            <label for=\"template-reviewform-comment\">Comment <small>*</small></label>\r\n            <textarea class=\"required form-control\" id=\"template-reviewform-comment\" name=\"template-reviewform-comment\" rows=\"6\" cols=\"30\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"col_full nobottommargin\">\r\n            <button class=\"button button-3d nomargin\" type=\"submit\" id=\"template-reviewform-submit\" name=\"template-reviewform-submit\" value=\"submit\">Submit Review</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

/***/ }),

/***/ "./src/app/pages/rental-item/rental-item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/rental-item/rental-item.component.ts ***!
  \************************************************************/
/*! exports provided: RentalItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalItemComponent", function() { return RentalItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");







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
            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (res.url === "/home" || res.url === "/" || res.url === "" || res.url.indexOf("/rental/") > -1) {
                    _this.initGallery();
                }
            }
        });
    };
    RentalItemComponent.prototype.getRouteParams = function () {
        var _this = this;
        this.title$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (params) {
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
    RentalItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental-item',
            template: __webpack_require__(/*! ./rental-item.component.html */ "./src/app/pages/rental-item/rental-item.component.html"),
            styles: [__webpack_require__(/*! ./rental-item.component.css */ "./src/app/pages/rental-item/rental-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_5__["LocationDateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_6__["RoutingService"]])
    ], RentalItemComponent);
    return RentalItemComponent;
}());



/***/ }),

/***/ "./src/app/pages/rentals/rentals.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/rentals/rentals.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlbnRhbHMvcmVudGFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/rentals/rentals.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/rentals/rentals.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Rental Categories</h1>\r\n    <span>Find A Rental</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Rentals</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <!-- Post Content\r\n                ============================================= -->\r\n      <div class=\"postcontent nobottommargin col_last\" *ngIf=\"activeCategory\">\r\n\r\n        <!-- Shop\r\n                    ============================================= -->\r\n        <div id=\"shop\" class=\"shop product-3 grid-container clearfix\">\r\n\r\n          <div *ngFor=\"let product of activeCategory?.items\" class=\"product sf-tshirt clearfix\">\r\n            <div class=\"product-image\">\r\n              <a [routerLink]=\"['/rental', product.pathParam]\" *ngFor=\"let imageUrl of product.images\"><img src=\"{{imageUrl}}\" alt=\"{{product.title}}\"></a>\r\n              <div class=\"sale-flash\" *ngIf=\"product.isHotDeal\"> Hot Deal</div>\r\n              <div class=\"sale-flash\" *ngIf=\"product.isNew\">New</div>\r\n              <!--<div class=\"product-overlay\">-->\r\n                <!--<a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>-->\r\n                <!--<a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i-->\r\n                  <!--class=\"icon-zoom-in2\"></i><span> Quick View</span></a>-->\r\n              <!--</div>-->\r\n            </div>\r\n            <div class=\"product-desc center\">\r\n              <div class=\"product-title\"><h3><a href=\"#\">{{product.title}}</a></h3></div>\r\n              <div class=\"product-price\">\r\n                <!--<del>$45.99</del>-->\r\n                <ins>${{product.price}}</ins>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div><!-- #shop end -->\r\n\r\n      </div><!-- .postcontent end -->\r\n\r\n      <!-- Sidebar\r\n                ============================================= -->\r\n      <div class=\"sidebar nobottommargin\">\r\n        <div class=\"sidebar-widgets-wrap\">\r\n\r\n          <div class=\"widget widget-filter-links clearfix\">\r\n\r\n            <h4>Select Category</h4>\r\n            <ul class=\"custom-filter\" data-container=\"#shop\" data-active-class=\"active-filter\">\r\n              <!--<li class=\"widget-filter-reset active-filter\"><a routerLink=\"#\" data-filter=\"*\">Clear</a></li>-->\r\n              <ng-container *ngFor=\"let category of categories\">\r\n                <li [ngClass]=\"activeCategoryStyle(category)\"><a (click)=\"categoryOnClick(category)\"\r\n                                                                 style=\"cursor:pointer\">{{category.title}}</a><span>{{category.items?.length}}</span>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n\r\n          </div>\r\n\r\n          <!--<div class=\"widget widget-filter-links clearfix\">-->\r\n\r\n          <!--<h4>Sort By</h4>-->\r\n          <!--<ul class=\"shop-sorting\">-->\r\n          <!--<li class=\"widget-filter-reset active-filter\"><a href=\"#\" data-sort-by=\"original-order\">Clear</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"name\">Name</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"price_lh\">Price: Low to High</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"price_hl\">Price: High to Low</a></li>-->\r\n          <!--</ul>-->\r\n\r\n          <!--</div>-->\r\n\r\n        </div>\r\n      </div><!-- .sidebar end -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n"

/***/ }),

/***/ "./src/app/pages/rentals/rentals.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/rentals/rentals.component.ts ***!
  \****************************************************/
/*! exports provided: RentalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalsComponent", function() { return RentalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");





var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(router, routingService, route, categoryService) {
        this.router = router;
        this.routingService = routingService;
        this.route = route;
        this.categoryService = categoryService;
        this.categories = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().subscribe(function (res) {
            _this.categories = res;
            _this.activeCategory = res[0];
            _this.subscribeAndInit();
        });
    };
    RentalsComponent.prototype.categoryOnClick = function (category) {
        this.activeCategory = category;
    };
    RentalsComponent.prototype.activeCategoryStyle = function (category) {
        if (category === this.activeCategory) {
            return 'active-filter';
        }
        return '';
    };
    RentalsComponent.prototype.ngAfterViewInit = function () {
    };
    RentalsComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rental', title]);
        this.routingService.itemIdSubject.next(id);
    };
    RentalsComponent.prototype.subscribeAndInit = function () {
        var _this = this;
        this.initCategory();
        this.router.events.subscribe(function (res) {
            if (res instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["ResolveEnd"] && res.url.indexOf('/rentals/') > -1) {
                _this.initCategory(res);
            }
        });
    };
    RentalsComponent.prototype.initCategory = function (routs) {
        var _this = this;
        var categoryId = routs ? routs.urlAfterRedirects.replace("/rentals/", "") : this.route.snapshot.params['id'];
        this.categories.forEach(function (value) {
            if (value.id === categoryId) {
                _this.activeCategory = value;
            }
        });
    };
    RentalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rentals',
            template: __webpack_require__(/*! ./rentals.component.html */ "./src/app/pages/rentals/rentals.component.html"),
            styles: [__webpack_require__(/*! ./rentals.component.css */ "./src/app/pages/rentals/rentals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_3__["RoutingService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]])
    ], RentalsComponent);
    return RentalsComponent;
}());



/***/ }),

/***/ "./src/app/pages/verification/verification.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlcmlmaWNhdGlvbi92ZXJpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/verification/verification.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Title\r\n\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Verification Page</h1>\r\n    <!--<span>Everything you need to know about our Company</span>-->\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Verification Page</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"col_full\">\r\n        Please check your email for verification.\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/pages/verification/verification.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/verification/verification.component.ts ***!
  \**************************************************************/
/*! exports provided: VerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationComponent", function() { return VerificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var VerificationComponent = /** @class */ (function () {
    function VerificationComponent() {
    }
    VerificationComponent.prototype.ngOnInit = function () {
    };
    VerificationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verification',
            template: __webpack_require__(/*! ./verification.component.html */ "./src/app/pages/verification/verification.component.html"),
            styles: [__webpack_require__(/*! ./verification.component.css */ "./src/app/pages/verification/verification.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VerificationComponent);
    return VerificationComponent;
}());



/***/ }),

/***/ "./src/app/shared/model/category.model.ts":
/*!************************************************!*\
  !*** ./src/app/shared/model/category.model.ts ***!
  \************************************************/
/*! exports provided: CategoryModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryModel", function() { return CategoryModel; });
var CategoryModel = /** @class */ (function () {
    function CategoryModel(id, title, description, imageUrl, $items, items) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._items = items;
        this._$items = $items;
    }
    Object.defineProperty(CategoryModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "$items", {
        get: function () {
            return this._$items;
        },
        set: function (value) {
            this._$items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (value) {
            this._items = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryModel.prototype, "imageUrl", {
        get: function () {
            return this._imageUrl;
        },
        enumerable: true,
        configurable: true
    });
    return CategoryModel;
}());



/***/ }),

/***/ "./src/app/shared/model/delivery-chart.model.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/model/delivery-chart.model.ts ***!
  \******************************************************/
/*! exports provided: DeliveryChartModel, ZipCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartModel", function() { return DeliveryChartModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipCode", function() { return ZipCode; });
var DeliveryChartModel = /** @class */ (function () {
    function DeliveryChartModel(id, city, price, $zipCodes, zipCodes, locationId) {
        this._id = id;
        this._city = city;
        this._zipCodes = zipCodes;
        this._price = price;
        this._locationId = locationId;
        this._$zipCodes = $zipCodes;
    }
    Object.defineProperty(DeliveryChartModel.prototype, "$zipCodes", {
        get: function () {
            return this._$zipCodes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "city", {
        get: function () {
            return this._city;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "zipCodes", {
        get: function () {
            return this._zipCodes;
        },
        set: function (value) {
            this._zipCodes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DeliveryChartModel.prototype, "locationId", {
        get: function () {
            return this._locationId;
        },
        enumerable: true,
        configurable: true
    });
    return DeliveryChartModel;
}());

var ZipCode = /** @class */ (function () {
    function ZipCode(id, zipCode) {
        this._id = id;
        this._zipCode = zipCode;
    }
    Object.defineProperty(ZipCode.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZipCode.prototype, "zipCode", {
        get: function () {
            return this._zipCode;
        },
        enumerable: true,
        configurable: true
    });
    return ZipCode;
}());



/***/ }),

/***/ "./src/app/shared/model/product-view.model.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/model/product-view.model.ts ***!
  \****************************************************/
/*! exports provided: ProductViewModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductViewModel", function() { return ProductViewModel; });
/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
var ProductViewModel = /** @class */ (function () {
    function ProductViewModel(id, title, price, images, isNew, isHotDeal, itemSize, pathParam) {
        this._id = id;
        this._title = title;
        this._price = price;
        this._images = images;
        this._isNew = isNew;
        this._isHotDeal = isHotDeal;
        this._itemSize = itemSize;
        this._pathParam = pathParam;
    }
    Object.defineProperty(ProductViewModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "price", {
        get: function () {
            return this._price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "images", {
        get: function () {
            return this._images;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "isNew", {
        get: function () {
            return this._isNew;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "isHotDeal", {
        get: function () {
            return this._isHotDeal;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "itemSize", {
        get: function () {
            return this._itemSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductViewModel.prototype, "pathParam", {
        get: function () {
            return this._pathParam;
        },
        enumerable: true,
        configurable: true
    });
    return ProductViewModel;
}());



/***/ }),

/***/ "./src/app/shared/model/user.model.ts":
/*!********************************************!*\
  !*** ./src/app/shared/model/user.model.ts ***!
  \********************************************/
/*! exports provided: UserModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModel", function() { return UserModel; });
var UserModel = /** @class */ (function () {
    function UserModel(name, email, username, phone, password) {
        this._name = name;
        this._email = email;
        this._username = username;
        this._phone = phone;
        this._password = password;
    }
    Object.defineProperty(UserModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "username", {
        get: function () {
            return this._username;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "phone", {
        get: function () {
            return this._phone;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "rePassword", {
        get: function () {
            return this._rePassword;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());



/***/ }),

/***/ "./src/app/shared/services/auth-guard.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/auth-guard.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthGuardService, AuthGuardLoginService, AuthGuardVerificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardLoginService", function() { return AuthGuardLoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardVerificationService", function() { return AuthGuardVerificationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");

// src/app/auth/auth-guard.service.ts





var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        if (this.parse.isAuth()) {
            return this.parse.isAdmin().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
                if (res) {
                    return true;
                }
                else {
                    _this.router.navigate(['home']);
                    return false;
                }
            }));
        }
        else {
            this.router.navigate(['home']);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
    };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_3__["ParseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());

var AuthGuardLoginService = /** @class */ (function () {
    function AuthGuardLoginService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardLoginService.prototype.canActivate = function (route, state) {
        if (this.parse.isAuth()) {
            this.router.navigate(['home']);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        else {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
    };
    AuthGuardLoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_3__["ParseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardLoginService);
    return AuthGuardLoginService;
}());

var AuthGuardVerificationService = /** @class */ (function () {
    function AuthGuardVerificationService(parse, router) {
        this.parse = parse;
        this.router = router;
    }
    AuthGuardVerificationService.prototype.canActivate = function (route, state) {
        if (!this.parse.parse.User.current() || (this.parse.parse.User.current() && this.parse.parse.User.current().authenticated())) {
            this.router.navigate(['home']);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(false);
        }
        else {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(true);
        }
    };
    AuthGuardVerificationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_3__["ParseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuardVerificationService);
    return AuthGuardVerificationService;
}());



/***/ }),

/***/ "./src/app/shared/services/category-http.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/category-http.service.ts ***!
  \**********************************************************/
/*! exports provided: CategoryHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryHttpService", function() { return CategoryHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _model_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/category.model */ "./src/app/shared/model/category.model.ts");
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _model_product_view_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/product-view.model */ "./src/app/shared/model/product-view.model.ts");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_9__);

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */









var CategoryHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryHttpService, _super);
    function CategoryHttpService(parse) {
        var _this = _super.call(this) || this;
        _this.parse = parse;
        _this._categories = [];
        return _this;
    }
    CategoryHttpService_1 = CategoryHttpService;
    Object.defineProperty(CategoryHttpService.prototype, "categories", {
        get: function () {
            var _this = this;
            if (this._categories.length === 0) {
                this.getCategories().subscribe(function (res) {
                    _this._categories = res;
                });
            }
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    CategoryHttpService.prototype.getCategories = function () {
        var category = this.parse.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parse.parse.Query(category);
        var promise = query.find().then(function (res) {
            var categories = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                categories.push(CategoryHttpService_1.convertToCategoryModel(item));
            }
            return categories;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    CategoryHttpService.convertToCategoryModel = function (item, products) {
        if (products) {
            return new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], products);
        }
        return new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl']);
    };
    CategoryHttpService.prototype.getCategoryItems = function (categoryId) {
        return undefined;
    };
    CategoryHttpService.prototype.getCategoriesWithDependency = function () {
        var category = this.parse.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parse.parse.Query(category);
        var promise = query.find().then(function (res) {
            return res;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (res) {
            var categories = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var category_1 = res_2[_i];
                var products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(category_1.relation('products').query().find().then(function (product) {
                    return CategoryHttpService_1.forOne(product);
                }));
                var deliveryLocation = CategoryHttpService_1.convertToCategoryModel(category_1, products$);
                categories.push(deliveryLocation);
            }
            return categories;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_9__["flatMap"])(function (categories) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(categories.map(function (categoryFork) {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(categoryFork.$items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (products) {
                categoryFork.items = products[0];
                return categoryFork;
            }));
        })); }));
    };
    CategoryHttpService.parseObjectToProductView = function (parseObject) {
        return new _model_product_view_model__WEBPACK_IMPORTED_MODULE_6__["ProductViewModel"](parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'], parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'], parseObject.attributes['pathParam']);
    };
    CategoryHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(CategoryHttpService_1.parseObjectToProductView(item));
        }
        return items;
    };
    var CategoryHttpService_1;
    CategoryHttpService.CATEGORY = "Category";
    CategoryHttpService = CategoryHttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_4__["ParseService"]])
    ], CategoryHttpService);
    return CategoryHttpService;
}(_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]));



/***/ }),

/***/ "./src/app/shared/services/category.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/category.service.ts ***!
  \*****************************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
var CategoryService = /** @class */ (function () {
    function CategoryService() {
    }
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/shared/services/delivery-chart-http.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/services/delivery-chart-http.service.ts ***!
  \****************************************************************/
/*! exports provided: DeliveryChartHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartHttpService", function() { return DeliveryChartHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _delivery_chart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/delivery-chart.model */ "./src/app/shared/model/delivery-chart.model.ts");
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/from */ "./node_modules/rxjs/internal/observable/from.js");
/* harmony import */ var rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */







var DeliveryChartHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeliveryChartHttpService, _super);
    function DeliveryChartHttpService(parse) {
        var _this = _super.call(this) || this;
        _this.parse = parse;
        _this._deliveryLocations = [];
        return _this;
    }
    DeliveryChartHttpService_1 = DeliveryChartHttpService;
    DeliveryChartHttpService.prototype.getDeliveryLocationById = function (id) {
        return undefined;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationByZipCode = function (zipCode) {
        return undefined;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocationsFromCash = function () {
        return null;
    };
    DeliveryChartHttpService.prototype.getDeliveryLocations = function () {
        var delivery = this.parse.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var query = new this.parse.parse.Query(delivery);
        var promise = query.find().then(function (res) {
            return res;
        });
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            var deliveryLocations = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var delivery_1 = res_1[_i];
                var zip_1 = Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(delivery_1.relation('zipCode').query().find().then(function (zip) {
                    return DeliveryChartHttpService_1.forOne(zip);
                }));
                var deliveryLocation = new _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["DeliveryChartModel"](delivery_1['id'], delivery_1.attributes['city'], delivery_1.attributes['price'], zip_1);
                deliveryLocations.push(deliveryLocation);
            }
            return deliveryLocations;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["flatMap"])(function (deliveries) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(deliveries.map(function (deliveryFork) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["forkJoin"])(deliveryFork.$zipCodes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (zipCodes) {
                deliveryFork.zipCodes = zipCodes[0];
                return deliveryFork;
            }));
        })); }));
    };
    //   let promise = delivery.relation('zipCode').query().find().then((zip: any[])=>{
    //     return zip;
    //   });
    //   let $zips: Observable<any>[]= [];
    //   $zips.push(from(promise));
    //   for (let $zip of $zips) {
    //   $zip.pipe()
    // }
    // from(promise).pipe(map((zips: any[])=>{
    //   for (let zip of zips) {
    //     deliveryLocation.zipCodes.push(...DeliveryChartHttpService.forOne(zip))
    //   }
    //   return deliveryLocations;
    // }));
    DeliveryChartHttpService.prototype.getDeliveryLocationByCity = function (city) {
        return undefined;
    };
    DeliveryChartHttpService.parseObjectToZipCode = function (parseObject) {
        return new _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["ZipCode"](parseObject.id, parseObject.attributes['zipCode']);
    };
    DeliveryChartHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(DeliveryChartHttpService_1.parseObjectToZipCode(item));
        }
        return items;
    };
    var DeliveryChartHttpService_1;
    DeliveryChartHttpService.DELIVERY_CHART = "DeliveryChart";
    DeliveryChartHttpService.ZIP_CODE = "ZipCode";
    DeliveryChartHttpService = DeliveryChartHttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_4__["ParseService"]])
    ], DeliveryChartHttpService);
    return DeliveryChartHttpService;
}(_delivery_chart_service__WEBPACK_IMPORTED_MODULE_1__["DeliveryChartService"]));



/***/ }),

/***/ "./src/app/shared/services/delivery-chart.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/delivery-chart.service.ts ***!
  \***********************************************************/
/*! exports provided: DeliveryChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartService", function() { return DeliveryChartService; });
var DeliveryChartService = /** @class */ (function () {
    function DeliveryChartService() {
    }
    return DeliveryChartService;
}());



/***/ }),

/***/ "./src/app/shared/services/location-date.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/location-date.service.ts ***!
  \**********************************************************/
/*! exports provided: LocationDateService, LocationDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDateService", function() { return LocationDateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDate", function() { return LocationDate; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LocationDateService = /** @class */ (function () {
    function LocationDateService() {
        this._isSpecified = false;
        this._locationDate = new LocationDate(null, null, null);
    }
    LocationDateService.prototype.setLocationDate = function (start, end, location) {
        if (start && end && location) {
            this._locationDate = new LocationDate(start, end, location);
            this._isSpecified = true;
        }
    };
    LocationDateService.prototype.reset = function () {
        this._locationDate = null;
        this._isSpecified = false;
    };
    Object.defineProperty(LocationDateService.prototype, "locationDate", {
        get: function () {
            return this._locationDate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDateService.prototype, "isSpecified", {
        get: function () {
            return this._isSpecified;
        },
        set: function (value) {
            this._isSpecified = value;
        },
        enumerable: true,
        configurable: true
    });
    LocationDateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LocationDateService);
    return LocationDateService;
}());

var LocationDate = /** @class */ (function () {
    function LocationDate(startDateTime, endDateTime, location) {
        this._startDateTime = startDateTime;
        this._endDateTime = endDateTime;
        this._location = location;
    }
    Object.defineProperty(LocationDate.prototype, "startDateTime", {
        get: function () {
            return this._startDateTime;
        },
        set: function (value) {
            this._startDateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDate.prototype, "endDateTime", {
        get: function () {
            return this._endDateTime;
        },
        set: function (value) {
            this._endDateTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocationDate.prototype, "location", {
        get: function () {
            return this._location;
        },
        set: function (value) {
            this._location = value;
        },
        enumerable: true,
        configurable: true
    });
    return LocationDate;
}());



/***/ }),

/***/ "./src/app/shared/services/parse.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/parse.service.ts ***!
  \**************************************************/
/*! exports provided: ParseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParseService", function() { return ParseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse */ "./node_modules/parse/index.js");
/* harmony import */ var parse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




parse__WEBPACK_IMPORTED_MODULE_2__["initialize"]('myAppId', 'javascriptkey'); // use your appID & your js key
parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = 'http://138.68.251.183:1337/parse'; // use your server url
var ParseService = /** @class */ (function () {
    function ParseService() {
        this.$loginSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"](); // true - login, false - logout.
        this.parse = parse__WEBPACK_IMPORTED_MODULE_2__;
    }
    ParseService.prototype.isAuth = function () {
        return !!(this.parse.User.current() && this.parse.User.current().authenticated());
    };
    ParseService.prototype.getCurrentUser = function () {
        if (this.parse.User.current() && this.parse.User.current().authenticated()) {
            return this.parse.User.current();
        }
        return null;
    };
    ParseService.prototype.isAdmin = function () {
        if (parse__WEBPACK_IMPORTED_MODULE_2__["User"].current() && this.parse.User.current().authenticated()) {
            var that = this;
            var queryRole = new parse__WEBPACK_IMPORTED_MODULE_2__["Query"](parse__WEBPACK_IMPORTED_MODULE_2__["Role"]);
            queryRole.equalTo('name', 'admin');
            var promise = queryRole.find().then(function (res) {
                var adminRelation = new parse__WEBPACK_IMPORTED_MODULE_2__["Relation"](res[0], 'users');
                var queryAdmins = adminRelation.query();
                queryAdmins.equalTo('objectId', parse__WEBPACK_IMPORTED_MODULE_2__["User"].current().id);
                return queryAdmins.find().then(function (result) {
                    return result.length > 0;
                });
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(promise);
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
        }
    };
    ParseService.prototype.login = function (username, password) {
        var promise = this.parse.User.logIn(username, password);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(promise);
    };
    ParseService.prototype.logOut = function () {
        this.$loginSubject.next(false);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.parse.User.logOut());
    };
    ParseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ParseService);
    return ParseService;
}());



/***/ }),

/***/ "./src/app/shared/services/routing.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/routing.service.ts ***!
  \****************************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

/**
 * @author Gevorg Avetisyan on 4/20/2019.
 */


var RoutingService = /** @class */ (function () {
    function RoutingService() {
        this.itemIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.categoryIdSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    RoutingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], RoutingService);
    return RoutingService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\angular\epr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map