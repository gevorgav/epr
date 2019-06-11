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

module.exports = "<app-page></app-page>\r\n\r\n"

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






parse__WEBPACK_IMPORTED_MODULE_2__["initialize"]('myAppId', 'javascriptkey'); // use your appID & your js key
parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = 'https://entertainmentpartyrentals.com/parse'; // use your server url
var AppComponent = /** @class */ (function () {
    function AppComponent(router, activatedRoute, titleService) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        this.title = 'app';
        this.isReady = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.setTitles();
        this.init();
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
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
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
/* harmony import */ var _pages_location_date_location_date_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/location-date/location-date.component */ "./src/app/pages/location-date/location-date.component.ts");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");
/* harmony import */ var _layout_page_page_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./layout/page/page.component */ "./src/app/layout/page/page.component.ts");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "./src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/services/auth-guard.service */ "./src/app/shared/services/auth-guard.service.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _shared_services_delivery_chart_http_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/services/delivery-chart-http.service */ "./src/app/shared/services/delivery-chart-http.service.ts");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_services_category_http_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/services/category-http.service */ "./src/app/shared/services/category-http.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _mat_material_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./mat/material.module */ "./src/app/mat/material.module.ts");
/* harmony import */ var _pages_dashboard_product_product_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/dashboard/product/product.component */ "./src/app/pages/dashboard/product/product.component.ts");
/* harmony import */ var _pages_dashboard_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/dashboard/delivery-chart/delivery-chart.component */ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_product_http_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./shared/services/product-http.service */ "./src/app/shared/services/product-http.service.ts");
/* harmony import */ var _pages_dashboard_product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/dashboard/product/product-popup/product-popup.component */ "./src/app/pages/dashboard/product/product-popup/product-popup.component.ts");
/* harmony import */ var _pages_dashboard_delivery_chart_delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component */ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.ts");
/* harmony import */ var _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/verification/verification.component */ "./src/app/pages/verification/verification.component.ts");
/* harmony import */ var _pages_dashboard_category_category_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/dashboard/category/category.component */ "./src/app/pages/dashboard/category/category.component.ts");
/* harmony import */ var _pages_dashboard_category_category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pages/dashboard/category/category-popup/category-popup.component */ "./src/app/pages/dashboard/category/category-popup/category-popup.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _shared_services_user_http_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./shared/services/user-http.service */ "./src/app/shared/services/user-http.service.ts");
/* harmony import */ var _pages_dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/dashboard/user/user.component */ "./src/app/pages/dashboard/user/user.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm5/ngx-owl-carousel-o.js");















































var appRoutes = [
    {
        path: '',
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
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"]],
        children: [
            { path: 'delivery-chart', component: _pages_dashboard_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryChartComponent"] },
            { path: 'product', component: _pages_dashboard_product_product_component__WEBPACK_IMPORTED_MODULE_33__["ProductComponent"] },
            { path: 'category', component: _pages_dashboard_category_category_component__WEBPACK_IMPORTED_MODULE_40__["CategoryComponent"] },
            { path: 'user', component: _pages_dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_45__["UserComponent"] },
        ]
    },
    {
        path: 'login',
        component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_19__["LoginPageComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardLoginService"]],
        data: { title: 'EPR login page.' }
    },
    {
        path: 'rental/:title',
        component: _pages_rental_item_rental_item_component__WEBPACK_IMPORTED_MODULE_17__["RentalItemComponent"]
    },
    {
        path: 'cart',
        component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
    },
    {
        path: 'verification-page',
        component: _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_39__["VerificationComponent"],
        canActivate: [_shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardVerificationService"]]
    },
    {
        path: '**',
        redirectTo: ''
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
                _pages_location_date_location_date_component__WEBPACK_IMPORTED_MODULE_20__["LocationDateComponent"],
                _layout_page_page_component__WEBPACK_IMPORTED_MODULE_22__["PageComponent"],
                _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _pages_dashboard_product_product_component__WEBPACK_IMPORTED_MODULE_33__["ProductComponent"],
                _pages_dashboard_delivery_chart_delivery_chart_component__WEBPACK_IMPORTED_MODULE_34__["DeliveryChartComponent"],
                _pages_dashboard_product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_37__["ProductPopupComponent"],
                _pages_dashboard_delivery_chart_delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_38__["DeliveryChartPopupComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_26__["CartComponent"],
                _pages_verification_verification_component__WEBPACK_IMPORTED_MODULE_39__["VerificationComponent"],
                _pages_dashboard_category_category_component__WEBPACK_IMPORTED_MODULE_40__["CategoryComponent"],
                _pages_dashboard_category_category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_41__["CategoryPopupComponent"],
                _pages_dashboard_user_user_component__WEBPACK_IMPORTED_MODULE_45__["UserComponent"]
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
                _mat_material_module__WEBPACK_IMPORTED_MODULE_32__["MaterialModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_42__["NgxGalleryModule"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_46__["CarouselModule"]
            ],
            providers: [
                _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_21__["LocationDateService"],
                _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_24__["ParseService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardLoginService"],
                _shared_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_25__["AuthGuardVerificationService"],
                _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_31__["RoutingService"],
                { provide: _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_28__["DeliveryChartService"], useClass: _shared_services_delivery_chart_http_service__WEBPACK_IMPORTED_MODULE_27__["DeliveryChartHttpService"] },
                { provide: _shared_services_category_service__WEBPACK_IMPORTED_MODULE_29__["CategoryService"], useClass: _shared_services_category_http_service__WEBPACK_IMPORTED_MODULE_30__["CategoryHttpService"] },
                { provide: _shared_services_product_service__WEBPACK_IMPORTED_MODULE_35__["ProductService"], useClass: _shared_services_product_http_service__WEBPACK_IMPORTED_MODULE_36__["ProductHttpService"] },
                { provide: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_43__["UserService"], useClass: _shared_services_user_http_service__WEBPACK_IMPORTED_MODULE_44__["UserHttpService"] },
            ],
            entryComponents: [
                _pages_dashboard_product_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_37__["ProductPopupComponent"],
                _pages_dashboard_delivery_chart_delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_38__["DeliveryChartPopupComponent"],
                _pages_dashboard_category_category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_41__["CategoryPopupComponent"],
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

module.exports = "<!-- Footer\r\n\t\t============================================= -->\r\n<footer id=\"footer\" class=\"footer-light\"\r\n        style=\"background: url('../../../assets/images/footer-1.jpg') right top / cover no-repeat\">\r\n\r\n  <div class=\"container\">\r\n\r\n    <!-- Footer Widgets\r\n            ============================================= -->\r\n    <div class=\"footer-widgets-wrap clearfix\">\r\n\r\n      <div class=\"col_two_fifth\">\r\n\r\n        <div class=\"widget clearfix\">\r\n\r\n          <img src=\"../../../assets/images/logo/logo-footer.png\"\r\n               style=\"position: relative; opacity: 0.85; left: -10px; max-height: 80px; margin-bottom: 20px;\"\r\n               alt=\"Footer Logo\">\r\n\r\n          <p>We’re not only an amazing party rental service in Los Angeles County, California but we also provide a\r\n            great mood in all occasions such as birthday parties, carnivals, anniversaries, business, city or park\r\n            events, weddings, etc.</p>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_three_fifth col_last\">\r\n\r\n        <div class=\"col_half\">\r\n          <h4 class=\"ls1 t400 uppercase\">Contact Info</h4>\r\n          <div class=\"row\">\r\n            <div class=\"col-12 bottommargin-sm widget_links widget_real_estate_popular\">\r\n              <address>\r\n                <strong>Headquarters:</strong><br>\r\n                600 Glenwood rd C.Glendale<br>\r\n                California 91202<br>\r\n              </address>\r\n              <abbr title=\"Phone Number\"><strong>Phone:</strong></abbr> +1 626 766 4440<br>\r\n              <abbr title=\"Fax\"><strong>Fax:</strong></abbr> +1 626 766 4440<br>\r\n              <abbr title=\"Email Address\"><strong>Email:</strong></abbr> entertainmentpartyrentals@gmail.com\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col_half col_last\">\r\n\r\n          <h4 class=\"ls1 t400 uppercase\">Connect Socially</h4>\r\n\r\n          <div class=\"bottommargin-sm clearfix\">\r\n            <a href=\"https://www.facebook.com/Entertainment-Party-Rentals-351209225522037\" target=\"_blank\"\r\n               class=\"social-icon si-colored si-small si-rounded si-facebook\" title=\"Facebook\">\r\n              <i class=\"icon-facebook\"></i>\r\n              <i class=\"icon-facebook\"></i>\r\n            </a>\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-twitter\" title=\"Twitter\">\r\n              <i class=\"icon-twitter\"></i>\r\n              <i class=\"icon-twitter\"></i>\r\n            </a>\r\n\r\n            <a href=\"https://www.instagram.com/entertainmentpartyrentals/\" target=\"_blank\"\r\n               class=\"social-icon si-colored si-small si-rounded si-instagram\" title=\"Instagram\">\r\n              <i class=\"icon-instagram\"></i>\r\n              <i class=\"icon-instagram\"></i>\r\n            </a>\r\n\r\n            <!--<a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-apple\" title=\"App Store\">-->\r\n            <!--<i class=\"icon-apple\"></i>-->\r\n            <!--<i class=\"icon-apple\"></i>-->\r\n            <!--</a>-->\r\n\r\n            <!--<a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-android\" title=\"Play Store\">-->\r\n            <!--<i class=\"icon-android\"></i>-->\r\n            <!--<i class=\"icon-android\"></i>-->\r\n            <!--</a>-->\r\n\r\n            <a href=\"#\" class=\"social-icon si-colored si-small si-rounded si-skype\" title=\"Skype\">\r\n              <i class=\"icon-skype\"></i>\r\n              <i class=\"icon-skype\"></i>\r\n            </a>\r\n          </div>\r\n          <div class=\"line\" style=\"margin: 30px 0;\"></div>\r\n\r\n          <p class=\"ls1 t300\" style=\"font-size: 13px;\">Copyrights &copy; {{currentYear.getFullYear()}} Entertainment\r\n            Party Rentals</p>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </div><!-- .footer-widgets-wrap end -->\r\n\r\n  </div>\r\n\r\n</footer><!-- #footer end -->\r\n"

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

module.exports = "<!-- Header\r\n\t\t============================================= -->\r\n<header id=\"header\" class=\"full-header\"  style=\"z-index: 1999;\">\r\n\r\n  <div id=\"header-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div id=\"primary-menu-trigger\"><i class=\"icon-reorder\"></i></div>\r\n\r\n      <!-- Logo\r\n                ============================================= -->\r\n      <div id=\"logo\">\r\n        <a routerLink=\"home\" class=\"standard-logo\" data-dark-logo=\"images/logo-dark.png\"><img\r\n          src=\"../../../assets/images/logo/lrg-epr-logo.png\" alt=\"Canvas Logo\"></a>\r\n        <a routerLink=\"home\" class=\"retina-logo\" data-dark-logo=\"images/logo-dark@2x.png\"><img\r\n          src=\"../../../assets/images/logo/lrg-epr-logo.png\" alt=\"Canvas Logo\"></a>\r\n      </div><!-- #logo end -->\r\n\r\n      <!-- Primary Navigation\r\n                ============================================= -->\r\n      <nav id=\"primary-menu\">\r\n        <ul>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"home\">\r\n            <div>Home</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/rentals\">\r\n            <div>Rentals</div>\r\n          </a>\r\n            <ul>\r\n              <li *ngFor=\"let category of categories\"><a [routerLink]=\"['/rentals', category.id]\">\r\n                <div>{{category.title}}</div>\r\n              </a></li>\r\n            </ul>\r\n          </li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/delivery-chart\">\r\n            <div>Delivery Chart</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/about-us\">\r\n            <div>About Us</div>\r\n          </a></li>\r\n          <li routerLinkActive=\"current\"><a routerLink=\"/contact-info\">\r\n            <div>Contact Info</div>\r\n          </a></li>\r\n          <li *ngIf=\"isAdmin\" routerLinkActive=\"current\"><a routerLink=\"/dashboard\">\r\n            <div>Dashboard</div>\r\n          </a></li>\r\n          <!--<li><a routerLink=\"demos/real-estate/listing.html\"><div>Listing</div></a></li>-->\r\n          <!--<li><a routerLink=\"demos/real-estate/contact.html\"><div>Contact</div></a></li>-->\r\n        </ul>\r\n\r\n        <!-- Top Cart\r\n                    ============================================= -->\r\n        <div class=\"top-links\">\r\n          <ul>\r\n            <li class=\"d-md-none d-lg-block\"><a routerLink=\"\"><i class=\"icon-call\"></i> +1 626 766 4440</a></li>\r\n            <li *ngIf=\"isLogin()\" routerLinkActive=\"current\"><a routerLink=\"#\" class=\"side-panel-trigger\">{{getCurrentUser()}}</a></li>\r\n            <li *ngIf=\"isLogin()\"><a href=\"#\" (click)=\"logout()\" data-lightbox=\"inline\" class=\"header-login-trigger\"><i class=\"icon-line2-login\"></i></a></li>\r\n            <li *ngIf=\"!isLogin()\" routerLinkActive=\"current\"><a routerLink=\"login\" class=\"side-panel-trigger\">Login/Register</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <div id=\"top-cart\">\r\n          <a routerLink=\"\" id=\"top-cart-trigger\"><i class=\"icon-shopping-cart\"></i><span>5</span></a>\r\n          <!--<div class=\"top-cart-content\">-->\r\n            <!--<div class=\"top-cart-title\">-->\r\n              <!--<h4>Shopping Cart</h4>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"top-cart-items\">-->\r\n              <!--<div class=\"top-cart-item clearfix\">-->\r\n                <!--<div class=\"top-cart-item-image\">-->\r\n                  <!--<a href=\"#\"><img src=\"../../../assets/images/shop/small/1.jpg\" alt=\"Blue Round-Neck Tshirt\"/></a>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"top-cart-item-desc\">-->\r\n                  <!--<a href=\"#\">Blue Round-Neck Tshirt</a>-->\r\n                  <!--<span class=\"top-cart-item-price\">$19.99</span>-->\r\n                  <!--<span class=\"top-cart-item-quantity\">x 2</span>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n              <!--<div class=\"top-cart-item clearfix\">-->\r\n                <!--<div class=\"top-cart-item-image\">-->\r\n                  <!--<a href=\"#\"><img src=\"../../../assets/images/shop/small/6.jpg\" alt=\"Light Blue Denim Dress\"/></a>-->\r\n                <!--</div>-->\r\n                <!--<div class=\"top-cart-item-desc\">-->\r\n                  <!--<a href=\"#\">Light Blue Denim Dress</a>-->\r\n                  <!--<span class=\"top-cart-item-price\">$24.99</span>-->\r\n                  <!--<span class=\"top-cart-item-quantity\">x 3</span>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"top-cart-action clearfix\">-->\r\n              <!--<span class=\"fleft top-checkout-price\">$114.95</span>-->\r\n              <!--<button class=\"button button-3d button-small nomargin fright\">View Cart</button>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        </div><!-- #top-cart end -->\r\n\r\n\r\n      </nav><!-- #primary-menu end -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</header><!-- #header end -->\r\n\r\n<div id=\"gotoTop\" class=\"icon-angle-up\"></div>\r\n"

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

/***/ "./src/app/mat/material.module.ts":
/*!****************************************!*\
  !*** ./src/app/mat/material.module.ts ***!
  \****************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/accordion */ "./node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









// import {FlexLayoutModule} from '@angular/flex-layout';


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["BidiModule"],
                _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_2__["CdkAccordionModule"],
                _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_4__["ObserversModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["PlatformModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_7__["PortalModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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

module.exports = "<!-- Page Title\r\n\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>About Us</h1>\r\n    <span>Everything you need to know about our Company</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">About Us</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"col_full\">\r\n        <p>It’s very cool and important for kids' activities to teach them to be a smart, fast and communicative person.\r\n          Not only does our service bring them joy but we also want them to learn while they enjoy their childhood\r\n          parties!! Interactive games are what can make your children learn literally everything fast and easily! Stay\r\n          tuned for our virtual reality headset which is coming very soon! This is designed for kids to learn with\r\n          different interesting and funny video games and to develop their imagination! Additionally, we’re not only\r\n          focused on children’s parties but also on adults' events! We prepared for you the highly interesting table and\r\n          sports games, a photo booth, tables, chairs, tents, party machines and much more!</p>\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>Why choose <span>Us</span>.</h4>\r\n        </div>\r\n\r\n        <p>The answer is that you can rely on us undoubtedly cause we’re a team who loves punctuality, perfectionism in\r\n          everything, and of course parties! We’re a team of optimists who can’t tolerate sadness especially when it’s\r\n          relating to children. Choose us to share happiness and joy with other people to make this world a better place\r\n          to live in. Your every celebration will be at the highest level with our party rentals company.</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>Our <span>Mission</span>.</h4>\r\n        </div>\r\n\r\n        <p>Our mission is simple. We just aim to make your life happier when you’re using our rental service, and this\r\n          is why all our equipment is safe for our customers, cleaned each time before and after usage, delivered on\r\n          time and bringing fun to all of you! We also aim to bring joy to those children who unfortunately don’t have\r\n          families cause we think that giving to those who really need it is our obligation, and not an act of\r\n          charity.</p>\r\n\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n\r\n        <div class=\"heading-block fancy-title nobottomborder title-bottom-border\">\r\n          <h4>What we <span>Do</span>.</h4>\r\n        </div>\r\n\r\n        <p>We’re not only an amazing party rental service in Los Angeles County, California but we also provide a great\r\n          mood in all occasions such as birthday parties, carnivals, anniversaries, business, city or park events,\r\n          weddings, etc. Find on our website different range of party rentals with affordable price and high-quality\r\n          equipment such as bounce houses, combos, food machines, mechanical rides, interactive games and so much\r\n          more!</p>\r\n\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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

module.exports = "\r\n<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Contact</h1>\r\n    <span>Get in Touch with Us</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Contact Info</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n    <div class=\"container clearfix\">\r\n\r\n      <!-- Postcontent\r\n          ============================================= -->\r\n      <div class=\"col_half\">\r\n\r\n      </div><!-- .postcontent end -->\r\n\r\n      <!-- Sidebar\r\n          ============================================= -->\r\n      <div class=\"sidebar col_last nobottommargin\">\r\n\r\n        <address>\r\n          <strong>Headquarters:</strong><br>\r\n          600 Glenwood rd C.Glendale<br>\r\n          California 91202<br>\r\n        </address>\r\n        <abbr title=\"Phone Number\"><strong>Phone:</strong></abbr>  +1 626 766 4440<br>\r\n        <abbr title=\"Fax\"><strong>Fax:</strong></abbr> +1 626 766 4440<br>\r\n        <abbr title=\"Email Address\"><strong>Email:</strong></abbr> entertainmentpartyrentals@gmail.com\r\n\r\n        <div class=\"widget noborder notoppadding\">\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"widget noborder notoppadding\">\r\n\r\n          <a href=\"https://www.facebook.com/Entertainment-Party-Rentals-351209225522037\" target=\"_blank\" class=\"social-icon si-small si-dark si-facebook\">\r\n            <i class=\"icon-facebook\"></i>\r\n            <i class=\"icon-facebook\"></i>\r\n          </a>\r\n\r\n          <a href=\"#\" class=\"social-icon si-small si-dark si-twitter\">\r\n            <i class=\"icon-twitter\"></i>\r\n            <i class=\"icon-twitter\"></i>\r\n          </a>\r\n\r\n          <a href=\"https://www.instagram.com/entertainmentpartyrentals/\" target=\"_blank\"\r\n             class=\"social-icon si-small si-dark si-instagram\" title=\"Instagram\">\r\n            <i class=\"icon-instagram\"></i>\r\n            <i class=\"icon-instagram\"></i>\r\n          </a>\r\n\r\n          <!--<a href=\"#\" class=\"social-icon si-small si-dark si-dribbble\">-->\r\n            <!--<i class=\"icon-dribbble\"></i>-->\r\n            <!--<i class=\"icon-dribbble\"></i>-->\r\n          <!--</a>-->\r\n\r\n          <!--<a href=\"#\" class=\"social-icon si-small si-dark si-forrst\">-->\r\n            <!--<i class=\"icon-forrst\"></i>-->\r\n            <!--<i class=\"icon-forrst\"></i>-->\r\n          <!--</a>-->\r\n\r\n          <!--<a href=\"#\" class=\"social-icon si-small si-dark si-pinterest\">-->\r\n            <!--<i class=\"icon-pinterest\"></i>-->\r\n            <!--<i class=\"icon-pinterest\"></i>-->\r\n          <!--</a>-->\r\n\r\n          <!--<a href=\"#\" class=\"social-icon si-small si-dark si-gplus\">-->\r\n            <!--<i class=\"icon-gplus\"></i>-->\r\n            <!--<i class=\"icon-gplus\"></i>-->\r\n          <!--</a>-->\r\n\r\n        </div>\r\n\r\n      </div><!-- .sidebar end -->\r\n\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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

/***/ "./src/app/pages/dashboard/category/category-popup/category-popup.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category-popup/category-popup.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LXBvcHVwL2NhdGVnb3J5LXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9jYXRlZ29yeS9jYXRlZ29yeS1wb3B1cC9jYXRlZ29yeS1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/category/category-popup/category-popup.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category-popup/category-popup.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"card-body\" style=\"padding: 40px;\">\r\n      <form id=\"form\" name=\"form\" class=\"nobottommargin\" [formGroup]=\"form\" >\r\n\r\n        <div class=\" col col_full\">\r\n          <label for=\"title\">Title:</label>\r\n          <input formControlName=\"title\" type=\"text\" id=\"title\" name=\"title\" value=\"\" class=\"form-control\"/>\r\n          <div\r\n            *ngIf=\"form.controls['title'].invalid && (form.controls['title'].dirty || form.controls['title'].touched)\"\r\n            class=\"alert alert-danger\">\r\n            <div *ngIf=\"form.controls['title'].errors.required\">\r\n              Title is required.\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\" col col_full\">\r\n          <label for=\"description\">Description:</label>\r\n          <textarea formControlName=\"description\"  id=\"description\" name=\"description\" value=\"\" class=\"form-control\"></textarea>\r\n        </div>\r\n\r\n        <div class=\"col col_full\">\r\n          <div\r\n            *ngIf=\"fileMaxSizeErrorMessage\"\r\n            class=\"alert alert-danger\">\r\n            <div>\r\n              {{fileMaxSizeErrorMessage}}\r\n            </div>\r\n          </div>\r\n          <div class=\" col col_one_third\">\r\n            <input type=\"file\" (change)=\"onFileUpload($event)\" #input style=\"display: none;\">\r\n            <button color=\"primary\" mat-raised-button (click)=\"triggerClick()\"><i class=\"material-icons left\">backup</i>Attach picture</button>\r\n            <button *ngIf=\"form.get('imageUrl').value\"  mat-raised-button (click)=\"deleteImage()\"><i class=\"material-icons left\">delete</i>Delete Picture</button>\r\n          </div>\r\n          <div class=\"col col_one_third\">\r\n            <img [src]=\"form.get('imageUrl').value\" alt=\"\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col_full nobottommargin\">\r\n          <button type=\"submit\" class=\"button button-3d \" id=\"submit\" name=\"submit\"\r\n                  value=\"submit\" (click)=\"submit()\">Save\r\n          </button>\r\n          <button (click)=\"cancel()\" class=\"button button-white button-3d \" id=\"cancel\" name=\"cancel\" value=\"cancel\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/category/category-popup/category-popup.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category-popup/category-popup.component.ts ***!
  \*************************************************************************************/
/*! exports provided: CategoryPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPopupComponent", function() { return CategoryPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_model_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/model/category.model */ "./src/app/shared/model/category.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_upload_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/upload.service */ "./src/app/shared/services/upload.service.ts");






var CategoryPopupComponent = /** @class */ (function () {
    function CategoryPopupComponent(dialogRef, data, uploadService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.uploadService = uploadService;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]();
        this.category = this.data.category;
    }
    CategoryPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    CategoryPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                category: new _shared_model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](this.category.id, this.form.get('title').value, this.form.get('description').value, this.form.get('imageUrl').value)
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    CategoryPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    CategoryPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    CategoryPopupComponent.prototype.deleteImage = function () {
        this.form.get('imageUrl').setValue('');
    };
    CategoryPopupComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    CategoryPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                _this.form.get('imageUrl').setValue(res.fileName);
            }, function (error) {
                if (error.fileMaxSize) {
                    _this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    };
    CategoryPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.category.title, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            description: this.formBuilder.control(this.category.description, []),
            imageUrl: this.formBuilder.control(this.category.imageUrl || '', []),
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CategoryPopupComponent.prototype, "inputRef", void 0);
    CategoryPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-popup',
            template: __webpack_require__(/*! ./category-popup.component.html */ "./src/app/pages/dashboard/category/category-popup/category-popup.component.html"),
            styles: [__webpack_require__(/*! ./category-popup.component.css */ "./src/app/pages/dashboard/category/category-popup/category-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_services_upload_service__WEBPACK_IMPORTED_MODULE_5__["UploadService"]])
    ], CategoryPopupComponent);
    return CategoryPopupComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/category/category.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n.full-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnVsbC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/dashboard/category/category.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-form-field\">\r\n  <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event)\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"title\">\r\n    <th mat-header-cell *matHeaderCellDef> Title</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"description\">\r\n    <th mat-header-cell *matHeaderCellDef> Description</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.description}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"edit\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Edit\" (click)=\"edit(element)\">edit</mat-icon></td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"delete\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Delete\"\r\n                                                     (click)=\"remove(element.id)\">delete</mat-icon></td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"addCategory()\"> Add Category</button>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/category/category.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/category/category.component.ts ***!
  \****************************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_model_category_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/model/category.model */ "./src/app/shared/model/category.model.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./category-popup/category-popup.component */ "./src/app/pages/dashboard/category/category-popup/category-popup.component.ts");
/* harmony import */ var _shared_util_error_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/util/error-handler */ "./src/app/shared/util/error-handler.ts");







var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, dialog) {
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.categories);
        this.displayedColumns = ['title', 'edit', 'delete'];
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.initCategories();
    };
    CategoryComponent.prototype.addCategory = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_5__["CategoryPopupComponent"], {
            data: {
                category: new _shared_model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](null, null, null, null, null, null)
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error); });
            }
        });
    };
    CategoryComponent.prototype.edit = function (category) {
        var _this = this;
        var dialogRef = this.dialog.open(_category_popup_category_popup_component__WEBPACK_IMPORTED_MODULE_5__["CategoryPopupComponent"], {
            data: {
                category: category
            },
            width: '80%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.category) {
                _this.categoryService.saveCategory(data.category)
                    .subscribe(function (res) {
                    _this.initCategories();
                }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error); });
            }
        });
    };
    CategoryComponent.prototype.remove = function (id) {
        var _this = this;
        this.categoryService.deleteCategory(id)
            .subscribe(function (res) {
            _this.initCategories();
        }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_6__["handleError"])(error); });
    };
    CategoryComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.categories);
        });
    };
    CategoryComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category',
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/pages/dashboard/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.css */ "./src/app/pages/dashboard/category/category.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item.is-active {\r\n  background-color: #CCCCCC;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWxpc3QtaXRlbS5pcy1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0NDQ0M7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/dashboard.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\r\n  <div class=\"row\">\r\n    <div >\r\n      <mat-list role=\"list\" class=\"mat-elevation-z8 col\">\r\n        <mat-list-item *ngFor=\"let item of items\" role=\"listitem\" (click)=\"selectTab(item)\"\r\n                       [ngClass]=\"{'is-active': item.isActive}\">{{item.name}}\r\n        </mat-list-item>\r\n      </mat-list>\r\n    </div>\r\n    <div class=\"col col_five_sixth \">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</section>\r\n"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.items = [
            { routerLink: 'product', name: 'Product', isActive: true },
            { routerLink: 'delivery-chart', name: 'Delivery Chart', isActive: false },
            { routerLink: 'category', name: 'Category', isActive: false },
            { routerLink: 'user', name: 'User', isActive: false },
        ];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.selectTab(this.items[0]);
    };
    DashboardComponent.prototype.selectTab = function (item) {
        this.items.forEach(function (item) { return item.isActive = false; });
        item.isActive = true;
        this.router.navigate([item.routerLink], { relativeTo: this.activatedRoute });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/pages/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/pages/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2RlbGl2ZXJ5LWNoYXJ0L2RlbGl2ZXJ5LWNoYXJ0LXBvcHVwL2RlbGl2ZXJ5LWNoYXJ0LXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC9kZWxpdmVyeS1jaGFydC9kZWxpdmVyeS1jaGFydC1wb3B1cC9kZWxpdmVyeS1jaGFydC1wb3B1cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"card-body\" style=\"padding: 40px;\">\r\n      <form id=\"form\" name=\"form\" class=\"nobottommargin\" [formGroup]=\"form\">\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label for=\"city\">City:</label>\r\n            <input formControlName=\"city\" type=\"text\" id=\"city\" name=\"city\" value=\"\" class=\"form-control\"/>\r\n            <div\r\n              *ngIf=\"form.controls['city'].invalid && (form.controls['city'].dirty || form.controls['city'].touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"form.controls['city'].errors.required\">\r\n                City is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label for=\"price\">Price:</label>\r\n            <input formControlName=\"price\" type=\"number\" id=\"price\" name=\"price\" value=\"\" class=\"form-control\"/>\r\n            <div\r\n              *ngIf=\"form.controls['price'].invalid && (form.controls['price'].dirty || form.controls['price'].touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"form.controls['price'].errors.required\">\r\n                Price is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label>Zip Codes:</label>\r\n            <ng-container formArrayName=\"zipCodes\" *ngFor=\"let zipCode of getZipCodesControls(); let i = index;\">\r\n              <ng-container [formGroupName]=\"i\">\r\n                <input formControlName=\"code\" placeholder=\"\" type=\"text\" [id]=\"'zipCode_' + i\" name=\"zipCode\" value=\"\"\r\n                       class=\"form-control col col_five_sixth\"/>\r\n              </ng-container>\r\n              <div\r\n                *ngIf=\"form.get('zipCodes').controls[i].invalid && (form.get('zipCodes').controls[i].dirty || form.get('zipCodes').controls[i].touched)\"\r\n                class=\"alert alert-danger col_five_sixth\">\r\n                <div *ngIf=\"form.get('zipCodes').controls[i].controls.code.errors.required\">\r\n                  Zip code can't be empty\r\n                </div>\r\n              </div>\r\n              <mat-icon (click)=\"removeZipCode(i)\" class=\"col col_five_sixth\">delete</mat-icon>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\"col col_full\">\r\n            <button mat-button color=\"primary\" (click)=\"addZipCode()\">Add Zip Code</button>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col_full nobottommargin\">\r\n          <button type=\"submit\" class=\"button button-3d \" id=\"submit\" name=\"submit\"\r\n                  value=\"submit\" (click)=\"submit()\">Save\r\n          </button>\r\n          <button (click)=\"cancel()\" class=\"button button-white button-3d \" id=\"cancel\" name=\"cancel\" value=\"cancel\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: DeliveryChartPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartPopupComponent", function() { return DeliveryChartPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/model/delivery-chart.model */ "./src/app/shared/model/delivery-chart.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var DeliveryChartPopupComponent = /** @class */ (function () {
    function DeliveryChartPopupComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]();
        this.deliveryChart = this.data.deliveryChart;
    }
    DeliveryChartPopupComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    DeliveryChartPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            city: this.formBuilder.control(this.deliveryChart.city, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            zipCodes: this.formBuilder.array(this.initZipCodes().slice()),
            price: this.formBuilder.control(this.deliveryChart.price, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            locationId: this.formBuilder.control(this.deliveryChart.locationId, []),
        });
    };
    DeliveryChartPopupComponent.prototype.initZipCodes = function () {
        var res = [];
        if (this.deliveryChart.zipCodes) {
            for (var _i = 0, _a = this.deliveryChart.zipCodes; _i < _a.length; _i++) {
                var code = _a[_i];
                res.push(this.createZipCode(code.zipCode, code.id));
            }
        }
        return res;
    };
    DeliveryChartPopupComponent.prototype.createZipCode = function (code, id) {
        return this.formBuilder.group({
            code: this.formBuilder.control(code || '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            id: this.formBuilder.control(id || '', []),
        });
    };
    DeliveryChartPopupComponent.prototype.removeZipCode = function (index) {
        this.form.get('zipCodes').removeAt(index);
    };
    DeliveryChartPopupComponent.prototype.addZipCode = function () {
        var items = this.form.get('zipCodes');
        items.push(this.createZipCode());
    };
    DeliveryChartPopupComponent.prototype.submit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                deliveryChart: new _shared_model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["DeliveryChartModel"](this.deliveryChart.id, this.form.get('city').value, this.form.get('price').value, null, this.getZipCodes(), null)
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    DeliveryChartPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    DeliveryChartPopupComponent.prototype.cancel = function () {
        this.dialogRef.close(null);
    };
    DeliveryChartPopupComponent.prototype.getZipCodes = function () {
        var res = [];
        for (var _i = 0, _a = this.form.get('zipCodes').controls; _i < _a.length; _i++) {
            var control = _a[_i];
            res.push(new _shared_model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["ZipCode"](control.get('id').value, control.get('code').value));
        }
        return res;
    };
    DeliveryChartPopupComponent.prototype.getZipCodesControls = function () {
        return this.form.get('zipCodes').controls;
    };
    DeliveryChartPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-chart-popup',
            template: __webpack_require__(/*! ./delivery-chart-popup.component.html */ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.html"),
            styles: [__webpack_require__(/*! ./delivery-chart-popup.component.css */ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DeliveryChartPopupComponent);
    return DeliveryChartPopupComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n.full-form-field {\r\n  width: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2RlbGl2ZXJ5LWNoYXJ0L2RlbGl2ZXJ5LWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2RlbGl2ZXJ5LWNoYXJ0L2RlbGl2ZXJ5LWNoYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29ucyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZnVsbC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-form-field\">\r\n  <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event)\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"city\">\r\n    <th mat-header-cell *matHeaderCellDef> City</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.city}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"edit\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Edit\" (click)=\"edit(element)\">edit</mat-icon></td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"delete\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Delete\"\r\n                                                     (click)=\"remove(element.id)\">delete</mat-icon></td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"addDeliveryChart()\"> Add Delivery Chart</button>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/dashboard/delivery-chart/delivery-chart.component.ts ***!
  \****************************************************************************/
/*! exports provided: DeliveryChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryChartComponent", function() { return DeliveryChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/delivery-chart.service */ "./src/app/shared/services/delivery-chart.service.ts");
/* harmony import */ var _shared_model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/model/delivery-chart.model */ "./src/app/shared/model/delivery-chart.model.ts");
/* harmony import */ var _shared_util_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/util/error-handler */ "./src/app/shared/util/error-handler.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./delivery-chart-popup/delivery-chart-popup.component */ "./src/app/pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component.ts");







var DeliveryChartComponent = /** @class */ (function () {
    function DeliveryChartComponent(deliveryChartService, dialog) {
        this.deliveryChartService = deliveryChartService;
        this.dialog = dialog;
        this.deliveryCharts = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.deliveryCharts);
        this.displayedColumns = ['city', 'price', 'edit', 'delete'];
    }
    DeliveryChartComponent.prototype.ngOnInit = function () {
        this.initDeliveryCharts();
    };
    DeliveryChartComponent.prototype.addDeliveryChart = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryChartPopupComponent"], {
            data: {
                deliveryChart: new _shared_model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["DeliveryChartModel"](null, '', null, null, null, null)
            },
            width: '50%',
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .subscribe(function (res) {
                    _this.initDeliveryCharts();
                }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_4__["handleError"])(error); });
            }
        });
    };
    DeliveryChartComponent.prototype.edit = function (element) {
        var _this = this;
        var dialogRef = this.dialog.open(_delivery_chart_popup_delivery_chart_popup_component__WEBPACK_IMPORTED_MODULE_6__["DeliveryChartPopupComponent"], {
            data: {
                deliveryChart: element
            },
            width: '50%',
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data) {
                _this.deliveryChartService.saveDeliveryChart(data.deliveryChart)
                    .subscribe(function (res) {
                    _this.initDeliveryCharts();
                }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_4__["handleError"])(error); });
            }
        });
    };
    DeliveryChartComponent.prototype.remove = function (id) {
        this.deliveryChartService.deleteDeliveryChart(id)
            .subscribe(function (res) {
            //
        }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_4__["handleError"])(error); });
    };
    DeliveryChartComponent.prototype.initDeliveryCharts = function () {
        var _this = this;
        this.deliveryChartService.getDeliveryLocations()
            .subscribe(function (res) {
            _this.deliveryCharts = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.deliveryCharts);
        }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_4__["handleError"])(error); });
    };
    DeliveryChartComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    DeliveryChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-delivery-chart',
            template: __webpack_require__(/*! ./delivery-chart.component.html */ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.html"),
            styles: [__webpack_require__(/*! ./delivery-chart.component.css */ "./src/app/pages/dashboard/delivery-chart/delivery-chart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_delivery_chart_service__WEBPACK_IMPORTED_MODULE_2__["DeliveryChartService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], DeliveryChartComponent);
    return DeliveryChartComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/product/product-popup/product-popup.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product-popup/product-popup.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n.del-row {\r\n  height: 38px\r\n}\r\n\r\n.setup-policy-row {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3Byb2R1Y3QvcHJvZHVjdC1wb3B1cC9wcm9kdWN0LXBvcHVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdC9wcm9kdWN0LXBvcHVwL3Byb2R1Y3QtcG9wdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmRlbC1yb3cge1xyXG4gIGhlaWdodDogMzhweFxyXG59XHJcblxyXG4uc2V0dXAtcG9saWN5LXJvdyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/dashboard/product/product-popup/product-popup.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product-popup/product-popup.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrap\">\r\n  <div class=\"clearfix\">\r\n    <div class=\"card-body\" style=\"padding: 40px;\">\r\n      <h3>{{product?.title}}</h3>\r\n\r\n      <form id=\"product-form\" name=\"product-form\" class=\"nobottommargin\" [formGroup]=\"form\">\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\"col col_half\">\r\n            <label for=\"title\">Title:</label>\r\n            <input formControlName=\"title\" type=\"text\" id=\"title\" name=\"title\" value=\"\" class=\"form-control\"/>\r\n            <div\r\n              *ngIf=\"form.controls['title'].invalid && (form.controls['title'].dirty || form.controls['title'].touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"form.controls['title'].errors.required\">\r\n                Title is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col col_half\">\r\n            <label for=\"price\">Price:</label>\r\n            <input formControlName=\"price\" type=\"number\" id=\"price\" name=\"price\" value=\"\" class=\"form-control\"/>\r\n            <div\r\n              *ngIf=\"form.controls['price'].invalid && (form.controls['price'].dirty || form.controls['price'].touched)\"\r\n              class=\"alert alert-danger\">\r\n              <div *ngIf=\"form.controls['price'].errors.required\">\r\n                Price is required.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_half\">\r\n            <mat-form-field class=\" col_full\">\r\n              <mat-select placeholder=\"Category\" id=\"category\" formControlName=\"category\" [compareWith]=\"compareFn\">\r\n                <mat-option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n                  {{category.title}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\" col col_one_fourth\">\r\n            <mat-checkbox\r\n              class=\"\"\r\n              [formControlName]=\"'isNew'\"\r\n              labelPosition=\"before\">\r\n              Is new\r\n            </mat-checkbox>\r\n          </div>\r\n\r\n          <div class=\" col col_one_fourth\">\r\n            <mat-checkbox\r\n              class=\"\"\r\n              [formControlName]=\"'isHotDeal'\"\r\n              labelPosition=\"before\">\r\n              Hot deal:\r\n            </mat-checkbox>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label for=\"description\">Description:</label>\r\n            <textarea formControlName=\"description\" id=\"description\" name=\"description\" value=\"\"\r\n                      class=\"form-control\"></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label for=\"instructions\">Instructions:</label>\r\n            <textarea formControlName=\"instructions\" type=\"text\" id=\"instructions\" name=\"instructions\" value=\"\"\r\n                      class=\"form-control\"></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_one_third\">\r\n            <label for=\"itemSize\">Item size:</label>\r\n            <input formControlName=\"itemSize\" type=\"text\" id=\"itemSize\" name=\"itemSize\" value=\"\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n\r\n          <div class=\" col col_one_third\">\r\n            <label for=\"spaceRequired\">Space Required:</label>\r\n            <input formControlName=\"spaceRequired\" type=\"text\" id=\"spaceRequired\" name=\"spaceRequired\" value=\"\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_half\">\r\n            <label for=\"safetyRules\">Safety rules:</label>\r\n            <textarea formControlName=\"safetyRules\" type=\"text\" id=\"safetyRules\" name=\"safetyRules\" value=\"\"\r\n                      class=\"form-control\"></textarea>\r\n          </div>\r\n\r\n          <div class=\" col col_half\">\r\n            <label for=\"rentalTerms\">Rental terms:</label>\r\n            <textarea formControlName=\"rentalTerms\" type=\"text\" id=\"rentalTerms\" name=\"rentalTerms\" value=\"\"\r\n                      class=\"form-control\"></textarea>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_half\">\r\n            <label for=\"count\">Count:</label>\r\n            <input formControlName=\"count\" type=\"number\" id=\"count\" name=\"count\" value=\"\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n\r\n          <div class=\" col col_half\">\r\n            <label for=\"nightPrice\">Night price:</label>\r\n            <input formControlName=\"nightPrice\" type=\"number\" id=\"nightPrice\" name=\"nightPrice\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_half\">\r\n            <label for=\"minTime\">Min Time:</label>\r\n            <input formControlName=\"minTime\" type=\"number\" id=\"minTime\" name=\"minTime\" value=\"\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n\r\n          <div class=\" col col_half\">\r\n            <label for=\"minPrice\">Min price:</label>\r\n            <input formControlName=\"minPrice\" type=\"number\" id=\"minPrice\" name=\"minPrice\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col col_five_sixth\">\r\n                <label>Setup Policy:</label>\r\n              </div>\r\n              <div class=\"col col_one_sixth\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"addSetupPolicy()\">Add Setup Policy</button>\r\n              </div>\r\n            </div>\r\n            <div  *ngIf=\"form.hasError('setupPolicyUniqueKey')\" class=\"row clearfix\">\r\n              <div class=\"col col_full\">\r\n                <div\r\n                  class=\"alert alert-danger\">\r\n                  <div >\r\n                    Duplicate key of setup policy detected\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row clearfix\" >\r\n              <div class=\"col col_one_third\">\r\n                <ng-container formArrayName=\"setupPolicyKeys\"\r\n                              *ngFor=\"let key of getSetupPolicyKeysControls(); let i = index;\">\r\n                  <ng-container [formGroupName]=\"i\">\r\n                    <div class=\"row setup-policy-row\">\r\n                      <input formControlName=\"name\" placeholder=\"\" type=\"text\" [id]=\"'key_' + i\" name=\"key\" value=\"\"\r\n                             class=\"form-control\"/>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div\r\n                    *ngIf=\"form.get('setupPolicyKeys').controls[i].invalid && (form.get('setupPolicyKeys').controls[i].dirty || form.get('setupPolicyKeys').controls[i].touched)\"\r\n                    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"form.get('setupPolicyKeys').controls[i].controls.name.errors.required\">\r\n                      Setup Policy key can't be empty\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col col_half setup-policy-row\">\r\n                <ng-container formArrayName=\"setupPolicyValues\"\r\n                              *ngFor=\"let key of getSetupPolicyValuesControls(); let i = index;\">\r\n                  <ng-container [formGroupName]=\"i\">\r\n                    <div class=\"row setup-policy-row\">\r\n                    <input formControlName=\"name\" placeholder=\"\" type=\"text\" [id]=\"'value_' + i\" name=\"value\" value=\"\"\r\n                           class=\"form-control\"/>\r\n                    </div>\r\n                  </ng-container>\r\n                  <div\r\n                    *ngIf=\"form.get('setupPolicyValues').controls[i].invalid && (form.get('setupPolicyValues').controls[i].dirty || form.get('setupPolicyValues').controls[i].touched)\"\r\n                    class=\"alert alert-danger\">\r\n                    <div *ngIf=\"form.get('setupPolicyValues').controls[i].controls.name.errors.required\">\r\n                      Setup Policy value can't be empty\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"col col_one_sixth\" >\r\n                <div class=\"row clearfix del-row setup-policy-row\"  *ngFor=\"let key of getSetupPolicyValuesControls(); let i = index;\">\r\n                  <mat-icon (click)=\"removeSetupPolicy(i)\">delete</mat-icon>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\"col col_full\">\r\n            <div\r\n            *ngIf=\"fileMaxSizeErrorMessage\"\r\n            class=\"alert alert-danger\">\r\n            <div>\r\n              {{fileMaxSizeErrorMessage}}\r\n            </div>\r\n          </div>\r\n            <div class=\" col col_one_third\">\r\n              <input type=\"file\" (change)=\"onFileUpload($event)\" #input style=\"display: none;\">\r\n              <button color=\"primary\" mat-button (click)=\"triggerClick()\"><i class=\"material-icons left\">backup</i>Attach\r\n                picture\r\n              </button>\r\n            </div>\r\n            <div *ngFor=\"let imageSrc of form.controls['images'].value\" class=\"col col_one_sixth\">\r\n              <mat-icon (click)=\"filterImages(imageSrc)\">delete</mat-icon>\r\n              <img [src]=\"imageSrc\" alt=\"\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row clearfix\">\r\n          <div class=\" col col_full\">\r\n            <label for=\"video\">Video URL:</label>\r\n            <input formControlName=\"video\" type=\"text\" id=\"video\" name=\"video\" value=\"\"\r\n                   class=\"form-control\"/>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col_full nobottommargin\">\r\n          <button type=\"submit\" class=\"button button-3d \" id=\"submit\" name=\"submit\"\r\n                  value=\"submit\" (click)=\"onSubmit()\">Save\r\n          </button>\r\n          <button (click)=\"close()\" class=\"button button-white button-3d \" id=\"cancel\" name=\"cancel\" value=\"cancel\">\r\n            Cancel\r\n          </button>\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/product/product-popup/product-popup.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product-popup/product-popup.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPopupComponent", function() { return ProductPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_model_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/model/product.model */ "./src/app/shared/model/product.model.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/services/parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var _shared_util_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/util/error-handler */ "./src/app/shared/util/error-handler.ts");
/* harmony import */ var _shared_services_upload_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/services/upload.service */ "./src/app/shared/services/upload.service.ts");









var ProductPopupComponent = /** @class */ (function () {
    function ProductPopupComponent(dialogRef, data, parseService, uploadService, categoryService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.parseService = parseService;
        this.uploadService = uploadService;
        this.categoryService = categoryService;
        this.formBuilder = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]();
        this.setupPolicyKeys = [];
        this.setupPolicyValues = [];
        this.fileMaxSizeErrorMessage = '';
        this.compareFn = this.compare;
        this.product = this.data.product;
    }
    Object.defineProperty(ProductPopupComponent.prototype, "categoryId", {
        get: function () {
            return this.data.category ? this.data.category.id : '';
        },
        enumerable: true,
        configurable: true
    });
    ProductPopupComponent.prototype.ngOnInit = function () {
        this.initSafetyRules();
        this.initForm();
        this.getCategories();
    };
    ProductPopupComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            this.dialogRef.close({
                product: new _shared_model_product_model__WEBPACK_IMPORTED_MODULE_3__["ProductModel"](this.product.id, this.form.get('title').value, this.form.get('price').value, this.form.get('images').value, this.form.get('isNew').value, this.form.get('isHotDeal').value, this.form.get('itemSize').value, null, this.form.get('description').value, this.form.get('rentalTerms').value, this.form.get('spaceRequired').value, this.getSetupPolicy(), this.form.get('instructions').value, this.form.get('video').value, this.form.get('safetyRules').value, this.form.get('minTime').value, this.form.get('minPrice').value, this.form.get('nightPrice').value, this.form.get('count').value),
                newCategoryId: this.form.get('category').value,
                oldCategoryId: this.categoryId
            });
        }
        else {
            this.markFormGroupTouched(this.form);
        }
    };
    ProductPopupComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ProductPopupComponent.prototype.close = function () {
        this.dialogRef.close(null);
    };
    ProductPopupComponent.prototype.triggerClick = function () {
        this.inputRef.nativeElement.click();
    };
    ProductPopupComponent.prototype.filterImages = function (src) {
        this.form.get('images').setValue(this.form.get('images').value.filter(function (item) { return item !== src; }));
    };
    ProductPopupComponent.prototype.onFileUpload = function (event) {
        var _this = this;
        this.fileMaxSizeErrorMessage = '';
        if (event.target.files.length > 0) {
            this.uploadService.uploadFile(event.target.files[0])
                .subscribe(function (res) {
                _this.form.get('images').value.push(res.fileName);
            }, function (error) {
                if (error.fileMaxSize) {
                    _this.fileMaxSizeErrorMessage = error.message;
                }
            });
        }
    };
    ProductPopupComponent.prototype.initForm = function () {
        this.form = this.formBuilder.group({
            title: this.formBuilder.control(this.product.title, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            price: this.formBuilder.control(this.product.price, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            description: this.formBuilder.control(this.product.description, []),
            category: this.formBuilder.control(this.categoryId, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
            itemSize: this.formBuilder.control(this.product.itemSize, []),
            isHotDeal: this.formBuilder.control(this.product.isHotDeal, []),
            isNew: this.formBuilder.control(this.product.isNew, []),
            rentalTerms: this.formBuilder.control(this.product.rentalTerms, []),
            spaceRequired: this.formBuilder.control(this.product.spaceRequired, []),
            setupPolicyKeys: this.formBuilder.array(this.initSetupPolicyKeys()),
            setupPolicyValues: this.formBuilder.array(this.initSetupPolicyValues()),
            instructions: this.formBuilder.control(this.product.instructions, []),
            safetyRules: this.formBuilder.control(this.product.safetyRules, []),
            images: this.formBuilder.control(this.product.images, []),
            video: this.formBuilder.control(this.product.video, []),
            minTime: this.formBuilder.control(this.product.minTime, []),
            minPrice: this.formBuilder.control(this.product.minPrice, []),
            nightPrice: this.formBuilder.control(this.product.nightPrice, []),
            count: this.formBuilder.control(this.product.count, []),
        }, { validators: setupPolicyUniqueKeyValidator });
    };
    ProductPopupComponent.prototype.initSafetyRules = function () {
        var _this = this;
        this.product.setupPolicy.forEach(function (value, key) {
            _this.setupPolicyKeys.push(key);
            _this.setupPolicyValues.push(value);
        });
    };
    ProductPopupComponent.prototype.initSetupPolicyKeys = function () {
        var _this = this;
        var res = [];
        this.setupPolicyKeys.forEach(function (item) { return res.push(_this.createGroup(item)); });
        return res;
    };
    ProductPopupComponent.prototype.initSetupPolicyValues = function () {
        var _this = this;
        var res = [];
        this.setupPolicyValues.forEach(function (item) { return res.push(_this.createGroup(item)); });
        return res;
    };
    ProductPopupComponent.prototype.createGroup = function (name) {
        return this.formBuilder.group({
            name: this.formBuilder.control(name || '', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required
            ]),
        });
    };
    ProductPopupComponent.prototype.addSetupPolicy = function () {
        // debugger;
        this.form.get('setupPolicyKeys').push(this.createGroup());
        this.form.get('setupPolicyValues').push(this.createGroup());
    };
    ProductPopupComponent.prototype.removeSetupPolicy = function (index) {
        this.form.get('setupPolicyKeys').removeAt(index);
        this.form.get('setupPolicyValues').removeAt(index);
    };
    ProductPopupComponent.prototype.getSetupPolicy = function () {
        var res = new Map();
        for (var i = 0; i < this.form.get('setupPolicyKeys').controls.length; ++i) {
            res.set(this.form.get('setupPolicyKeys').controls[i].get('name').value, this.form.get('setupPolicyValues').controls[i].get('name').value);
        }
        return res;
    };
    ProductPopupComponent.prototype.getSetupPolicyValuesControls = function () {
        return this.form.get('setupPolicyValues').controls;
    };
    ProductPopupComponent.prototype.getSetupPolicyKeysControls = function () {
        return this.form.get('setupPolicyKeys').controls;
    };
    ProductPopupComponent.prototype.getCategories = function () {
        var _this = this;
        this.categoryService.getCategories()
            .subscribe(function (res) {
            _this.categories = res;
        }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_7__["handleError"])(error); });
    };
    ProductPopupComponent.prototype.compare = function (f1, f2) {
        return f1 === f2;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('input'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProductPopupComponent.prototype, "inputRef", void 0);
    ProductPopupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-popup',
            template: __webpack_require__(/*! ./product-popup.component.html */ "./src/app/pages/dashboard/product/product-popup/product-popup.component.html"),
            styles: [__webpack_require__(/*! ./product-popup.component.css */ "./src/app/pages/dashboard/product/product-popup/product-popup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _shared_services_parse_service__WEBPACK_IMPORTED_MODULE_5__["ParseService"],
            _shared_services_upload_service__WEBPACK_IMPORTED_MODULE_8__["UploadService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_6__["CategoryService"]])
    ], ProductPopupComponent);
    return ProductPopupComponent;
}());

var setupPolicyUniqueKeyValidator = function (control) {
    for (var i = 0; i < control.get('setupPolicyKeys').controls.length; ++i) {
        for (var j = 0; j < control.get('setupPolicyKeys').controls.length; ++j) {
            if (i == j)
                continue;
            if (control.get('setupPolicyKeys').controls[i].get('name').value == control.get('setupPolicyKeys').controls[j].get('name').value) {
                return { 'setupPolicyUniqueKey': true };
            }
        }
    }
    return null;
};


/***/ }),

/***/ "./src/app/pages/dashboard/product/product.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n.full-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mdWxsLWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/product/product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-form-field\">\r\n  <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event)\">\r\n</mat-form-field>\r\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n  <ng-container matColumnDef=\"title\">\r\n    <th mat-header-cell *matHeaderCellDef> Title</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.title}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"price\">\r\n    <th mat-header-cell *matHeaderCellDef> Price</th>\r\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}}</td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"isHotDeal\">\r\n    <th mat-header-cell *matHeaderCellDef> Hot Deal</th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-checkbox [checked]=\"element.isHotDeal\" disabled ></mat-checkbox></td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"edit\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Edit\" (click)=\"edit(element.id)\">edit</mat-icon></td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"delete\">\r\n    <th mat-header-cell *matHeaderCellDef> </th>\r\n    <td mat-cell *matCellDef=\"let element\"><mat-icon aria-label=\"Delete\"\r\n                                              (click)=\"remove(element.id)\">delete</mat-icon></td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n</table>\r\n\r\n<button mat-raised-button color=\"primary\" (click)=\"addProduct()\"> Add Product</button>\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard/product/product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/dashboard/product/product.component.ts ***!
  \**************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_util_error_handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/util/error-handler */ "./src/app/shared/util/error-handler.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-popup/product-popup.component */ "./src/app/pages/dashboard/product/product-popup/product-popup.component.ts");
/* harmony import */ var _shared_model_product_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/model/product.model */ "./src/app/shared/model/product.model.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");









var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, categoryService, dialog) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.dialog = dialog;
        this.products = [];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.products);
        this.displayedColumns = ['title', 'price', /*'isHotDeal',*/ 'edit', 'delete'];
    }
    ProductComponent.prototype.ngOnInit = function () {
        this.initProducts();
    };
    ProductComponent.prototype.remove = function (id) {
        var _this = this;
        this.productService.deleteProduct(id)
            .subscribe(function (res) {
            if (res.id) {
                _this.initProducts();
            }
        }, function (error) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(error); });
    };
    ProductComponent.prototype.edit = function (id) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["zip"])(this.productService.getProduct(id), // 0
        this.categoryService.getCategoryByProductId(id)).subscribe(function (_a) {
            var product = _a[0], category = _a[1];
            var dialogRef = _this.dialog.open(_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_5__["ProductPopupComponent"], {
                data: {
                    product: product,
                    category: category
                },
                width: '80%',
                height: '95%'
            });
            dialogRef.afterClosed().subscribe(function (data) {
                if (data && data.product) {
                    _this.productService.saveProduct(data.product, data.newCategoryId, data.oldCategoryId)
                        .subscribe(function (res) {
                        _this.initProducts();
                    }, function (erorr) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(erorr); });
                }
            });
        });
    };
    ProductComponent.prototype.addProduct = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_product_popup_product_popup_component__WEBPACK_IMPORTED_MODULE_5__["ProductPopupComponent"], {
            data: {
                product: new _shared_model_product_model__WEBPACK_IMPORTED_MODULE_6__["ProductModel"](null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null)
            },
            width: '80%',
            height: '95%'
        });
        dialogRef.afterClosed().subscribe(function (data) {
            if (data && data.product) {
                _this.productService.saveProduct(data.product, data.newCategoryId)
                    .subscribe(function (res) {
                    _this.initProducts();
                }, function (erorr) { return Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(erorr); });
            }
        });
    };
    ProductComponent.prototype.initProducts = function () {
        var _this = this;
        this.productService.getAllProducts()
            .subscribe(function (products) {
            _this.products = products;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.products);
        }, function (error) {
            Object(_shared_util_error_handler__WEBPACK_IMPORTED_MODULE_3__["handleError"])(error);
        });
    };
    ProductComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/dashboard/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/pages/dashboard/product/product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard/user/user.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboard/user/user.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n  width: 100%;\r\n}\r\n\r\n.material-icons {\r\n  cursor: pointer;\r\n}\r\n\r\n.full-form-field {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL3VzZXIvdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Rhc2hib2FyZC91c2VyL3VzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1hdGVyaWFsLWljb25zIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5mdWxsLWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/dashboard/user/user.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/dashboard/user/user.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-form-field\">\n  <input matInput placeholder=\"Search\" (keyup)=\"applyFilter($event)\">\n</mat-form-field>\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"email\">\n    <th mat-header-cell *matHeaderCellDef> E-mail</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.email}}</td>\n  </ng-container>\n  <ng-container matColumnDef=\"phone\">\n    <th mat-header-cell *matHeaderCellDef> Phone</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.phone}}</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n"

/***/ }),

/***/ "./src/app/pages/dashboard/user/user.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/user/user.component.ts ***!
  \********************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");




var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.users);
        this.displayedColumns = ['name', 'email', 'phone'];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.initUsers();
    };
    UserComponent.prototype.initUsers = function () {
        var _this = this;
        this.userService.getAuthUsers()
            .subscribe(function (res) {
            _this.users = res;
            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.users);
        });
    };
    UserComponent.prototype.applyFilter = function ($event) {
        this.dataSource.filter = $event.path[0].value.trim().toLowerCase();
    };
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/pages/dashboard/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/pages/dashboard/user/user.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
    ], UserComponent);
    return UserComponent;
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

module.exports = "<!-- Slider\r\n\t\t============================================= -->\r\n<section id=\"slider\" class=\"slider-element full-screen clearfix\"\r\n         style=\"background: url(../../../assets/images/party-at-home-new.jpg) top right no-repeat; background-size: cover;\"\r\n         data-height-md=\"550\">\r\n\r\n  <div class=\"full-screen\">\r\n    <div class=\"real-estate-tabs-slider\">\r\n      <div class=\"container clearfix\">\r\n        <div class=\"tabs advanced-real-estate-tabs nomargin clearfix\" style=\"max-width: 500px;\">\r\n\r\n          <ul class=\"tab-nav clearfix\">\r\n            <li class=\"noleftmargin\"><a routerLink=\"\">Instant Price & Availability</a></li>\r\n          </ul>\r\n          <app-location-date (emitSubmit)=\"locationDateSubmitted()\"></app-location-date>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section><!-- #slider end -->\r\n\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-my-house\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Hassle Free</h3>\r\n          <p>Our goal is to make your kids' childhood totally hassle-free. We want them to have fun and enjoy each\r\n            moment of their childhood with family and friends.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third \">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-doc\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Rich Assortment </h3>\r\n          <p>We present a large range of rentals you’ll need to have a great birthday party! Inflatables, party\r\n            decorations, interactive games and more to have fun!</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-garage\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Affordable Price</h3>\r\n          <p>Don’t waste your time looking for party rentals, cause you have already found the company with high-quality\r\n            service and affordable price!</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-rent\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Clean Equipment</h3>\r\n          <p>Our ALL inflatables, party packages, (water) slides and other equipment are cleaned before and after each\r\n            use also inspected and certified each year.\r\n          </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-credit\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Safety</h3>\r\n          <p>We guarantee that you and your children will be in safety from all injuries during the parties with our\r\n            rentals. We know that kids' joy is happiness for parents.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col_one_third col_last\">\r\n        <div class=\"feature-box fbox-plain\">\r\n          <div class=\"fbox-icon\">\r\n            <a routerLink=\"#\"><i class=\"icon-realestate-hammer\"></i></a>\r\n          </div>\r\n          <h3 class=\"t400\">Well Constructed</h3>\r\n          <p>Both the service and equipment are flawless so feel free to use our service to make your party be the best\r\n            of all the time.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n      <div class=\"line topmargin-sm bottommargin-lg\"></div>\r\n\r\n      <div style=\"position: relative;\" *ngIf=\"featuredRentalProducts?.length > 0\">\r\n        <div class=\"heading-block nobottomborder\">\r\n          <h3>Featured Rental Products</h3>\r\n        </div>\r\n\r\n        <!--<a routerLink=\"#\" class=\"button button-small button-rounded button-border button-border-thin t500 nomargin\"-->\r\n        <!--style=\"position: absolute; top: 7px; right: 0;\">Check All</a>-->\r\n\r\n        <div class=\"real-estate owl-carousel image-carousel carousel-widget bottommargin-lg\" data-margin=\"10\"\r\n             data-nav=\"true\" data-loop=\"true\" data-pagi=\"false\" data-items-xs=\"1\" data-items-sm=\"1\" data-items-md=\"2\"\r\n             data-items-lg=\"3\" data-items-xl=\"3\">\r\n\r\n          <div class=\"oc-item\" *ngFor=\"let product of featuredRentalProducts\">\r\n            <div class=\"real-estate-item\">\r\n              <div class=\"real-estate-item-image\">\r\n                <div class=\"badge badge-success\" *ngIf=\"product.isHotDeal\">Hot Deal</div>\r\n                <div class=\"badge badge-danger\" *ngIf=\"product.isNew && !product.isHotDeal\">New!</div>\r\n                <a [routerLink]=\"['/rental', product.pathParam]\">\r\n                  <img style=\"height: 260px !important;\" src=\"{{product.images[0]}}\" alt=\"{{product.title}}\">\r\n                </a>\r\n                <div class=\"real-estate-item-price\" *ngIf=\"isSpecified()\">\r\n                  ${{getPrice(product.nightPrice, product.minPrice, product.minTime, product.price)}}\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"real-estate-item-desc\">\r\n                <h3 style=\"white-space: nowrap;overflow: hidden;\"><a [routerLink]=\"['/rental', product.pathParam]\">{{product.title}}</a>\r\n                </h3>\r\n\r\n                <div class=\"line\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n\r\n      <div class=\"promo promo-dark promo-flat bottommargin-lg\">\r\n        <h3 class=\"t400 ls1\">Special Offers on Long Term Rentals &amp; Lease Agreements</h3>\r\n        <a href=\"#\" class=\"button button-dark button-large button-rounded\">Contact Now</a>\r\n      </div>\r\n\r\n      <div class=\"clear\"></div>\r\n      <div class=\"line topmargin-sm bottommargin-lg\"></div>\r\n\r\n      <div class=\"heading-block nobottomborder\">\r\n        <h3>Party Rentals, Interactive Games, and Inflatable Jumpers</h3>\r\n      </div>\r\n      <div class=\"row real-estate-properties clearfix bottommargin-lg\">\r\n        <ng-container *ngFor=\"let category of categories; let i = index\">\r\n          <div [ngClass]=\"getClass(i)\">\r\n            <a [routerLink]=\"['/rentals', category.id]\"\r\n               [ngStyle]=\"{'background': 'url('+(category.imageUrl? category.imageUrl : category.items[0]?.images[0])+') no-repeat bottom center', 'background-size': 'cover'}\">\r\n              <div class=\"vertical-middle dark center\">\r\n                <div class=\"heading-block nomargin noborder\">\r\n                  <h3 class=\"capitalize t500\">{{category.title}}</h3>\r\n                  <span style=\"margin-top: 5px; font-size: 17px;\">23 Properties</span>\r\n                </div>\r\n              </div>\r\n            </a>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"col_full nobottommargin\">\r\n        <div class=\"tabs tabs-justify tabs-tb tabs-alt nobottommargin clearfix\">\r\n          <mat-tab-group>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">format_align_justify</mat-icon>\r\n                Why Us?\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-1\" style=\"margin: 15px;\">\r\n                <p>We believe that each child on this planet deserves a loving family, freedom, and happiness. That’s\r\n                  why we created a company able to bring lots of fun, unforgettable memories and precious childhood\r\n                  moments with family and friends. We love bringing joy to the children of the world and that’s why the\r\n                  company has the future goal to be engaged in charity. Let’s help to make children of the world happier\r\n                  together!\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n                Advantages\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-2\" style=\"margin: 15px;\">\r\n                <p>High-quality service is what we’re working on every single day! You’ll be satisfied with the safety,\r\n                  cleanliness and fast work we do for you to make your every event be on a high level so that you can\r\n                  give a magical and carefree childhood to your kids. Check the large variety of our rentals to find\r\n                  what you and your kids would love most to have at the parties. We would love to help you make the\r\n                  fabulous party which will surely be the best of all the time!</p>\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n            <mat-tab>\r\n              <ng-template mat-tab-label>\r\n                <mat-icon class=\"example-tab-icon\">rate_review</mat-icon>\r\n                Who We Are\r\n              </ng-template>\r\n              <div class=\"tab-content clearfix\" id=\"realestate-tab-2\" style=\"margin: 15px;\">\r\n                <p>We’re a team of kind people who adore children and life. We’re dedicated to providing the best rental\r\n                  service with the highest quality products for our lovely customers. Each of us is a hard-working\r\n                  person and it helps to make service without any disadvantages. We are working every single day on each\r\n                  aspect of our job so that you can totally enjoy events using our service.</p>\r\n                <div class=\"col_one_fourth nobottommargin center\"></div>\r\n              </div>\r\n            </mat-tab>\r\n          </mat-tab-group>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!--<div class=\"col_one_third col_last\">-->\r\n\r\n    <!--<h4 class=\"center\">Top Builders</h4>-->\r\n\r\n    <!--<ul class=\"clients-grid grid-2 nobottommargin clearfix\">-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/1.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/2.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/3.png\" alt=\"Clients\"></a></li>-->\r\n    <!--<li style=\"padding: 20px;\"><a href=\"#\" style=\"opacity: 0.9\"><img-->\r\n    <!--src=\"../../../assets/real-estate/images/builders/4.png\" alt=\"Clients\"></a></li>-->\r\n    <!--</ul>-->\r\n\r\n    <!--</div>-->\r\n\r\n    <div class=\"clear\"></div>\r\n\r\n  </div>\r\n\r\n</section>\r\n\r\n"

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
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");







var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(router, locationDateService, categoryService, productService) {
        this.router = router;
        this.locationDateService = locationDateService;
        this.categoryService = categoryService;
        this.productService = productService;
        this.categories = [];
        this.featuredRentalProducts = [];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.initCategories();
        this.initProducts();
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
        }, 1500);
        $('#linked-to-gallery a').click(function () {
            var imageLink = $(this).attr('data-image');
            $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
            return false;
        });
    };
    HomePageComponent.prototype.initCategories = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (arr) { return arr.sort(function (a, b) {
            return a.order - b.order;
        }); })).subscribe(function (res) {
            _this.categories = res;
        });
    };
    HomePageComponent.prototype.initFeaturedRentalProducts = function (res) {
        var _this = this;
        res.forEach(function (product) {
            if (product.isNew || product.isHotDeal) {
                _this.featuredRentalProducts.push(product);
            }
        });
    };
    HomePageComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rentals', title], { queryParams: { id: id } });
    };
    HomePageComponent.prototype.getClass = function (index) {
        if (index === 0 || index === 1 || index === 11 || index === 12) {
            return 'col-lg-6';
        }
        return 'col-lg-4';
    };
    HomePageComponent.prototype.initProducts = function () {
        var _this = this;
        this.productService.getAllProducts().subscribe(function (res) {
            _this.initFeaturedRentalProducts(res);
        });
    };
    HomePageComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
    };
    HomePageComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/pages/home-page/home-page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_6__["LocationDateService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"]])
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

module.exports = "<div class=\"tab-container\">\r\n        <form [formGroup]=\"locationDateForm\" *ngIf=\"!isSpecified()\" novalidate>\r\n          <div class=\"tab-content clearfix\" id=\"tab-rent\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <label for=\"zipCode\" style=\"margin-bottom: 20px !important;\">Event Location</label>\r\n                <mat-form-field style=\"width: 100%;\" >\r\n                  <input type=\"text\"  matInput placeholder=\"Enter Zip Code or City\" required formControlName=\"zipCode\" [matAutocomplete]=\"autoGroup\"  id=\"zipCode\">\r\n                  <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n                    <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n                      <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n                        {{name}}\r\n                      </mat-option>\r\n                    </mat-optgroup>\r\n                  </mat-autocomplete>\r\n                </mat-form-field>\r\n                <div *ngIf=\"locationDateForm.errors?.incorrectZipLocation && (locationDateForm.touched || locationDateForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                  Sorry, there is no branch that currently provides service for {{locationDateForm.get('zipCode')?.value}} .\r\n                </div>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"start\" style=\"margin-bottom: 20px !important;\">Date Time Range From:</label>\r\n                <input class=\"required sm-form-control input-block-level not-dark\" id=\"start\" [owlDateTimeTrigger]=\"dt12\" [owlDateTime]=\"dt12\" formControlName=\"startDate\">\r\n                <div *ngIf=\"locationDateForm.controls['startDate'].invalid && (locationDateForm.controls['startDate'].dirty || locationDateForm.controls['startDate'].touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"locationDateForm.controls['startDate'].errors.required\">\r\n                    Start date is required.\r\n                  </div>\r\n                </div>\r\n                <owl-date-time #dt12></owl-date-time>\r\n              </div>\r\n              <div class=\"w-100 d-block d-md-none bottommargin-sm\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"end\" style=\"margin-bottom: 20px !important;\"> Date Time Range To:</label>\r\n                <input id=\"end\" class=\"required sm-form-control input-block-level not-dark\"  [owlDateTimeTrigger]=\"dt13\" [owlDateTime]=\"dt13\" formControlName=\"endDate\">\r\n                <div *ngIf=\"locationDateForm.controls['endDate'].invalid && (locationDateForm.controls['endDate'].dirty || locationDateForm.controls['endDate'].touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"locationDateForm.controls['endDate'].errors.required\">\r\n                    End date is required.\r\n                  </div>\r\n                </div>\r\n                <owl-date-time #dt13></owl-date-time>\r\n              </div>\r\n              <div class=\"col-md-12 clearfix\">\r\n                <div *ngIf=\"locationDateForm.errors?.identityRevealed && (locationDateForm.touched || locationDateForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                  Start date con't be after end date.\r\n                </div>\r\n                <div *ngIf=\"locationDateForm.errors?.identityTime && (locationDateForm.touched || locationDateForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                  Online bookings must be completed 15 hours prior to the requested date & time\r\n                </div>\r\n                <button type=\"button\" (click)=\"onSubmit()\" class=\"button button-3d button-rounded btn-block nomargin\"\r\n                        style=\"margin-top: 35px !important;\">Submit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <ng-container *ngIf=\"isSpecified()\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-rent-view\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-12 col-12\">\r\n                <label for=\"zipCodeView\" style=\"margin-bottom: 20px !important;\">Event Location</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"zipCodeView\">{{locationDateService.locationDate.location}}</span>\r\n              </div>\r\n              <div class=\"w-100\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"startDateView\" style=\"margin-bottom: 20px !important;\">Date Time Range From:</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"startDateView\">{{locationDateService.locationDate.startDateTime.toLocaleString()}}</span>\r\n              </div>\r\n              <div class=\"w-100 d-block d-md-none bottommargin-sm\"></div>\r\n              <div class=\"col-md-6 col-12\">\r\n                <label for=\"endDateView\" style=\"margin-bottom: 20px !important;\">Date Time Range To:</label>\r\n                <span class=\"required sm-form-control input-block-level not-dark\" id=\"endDateView\">{{locationDateService.locationDate.endDateTime.toLocaleString()}}</span>\r\n              </div>\r\n              <div class=\"col-md-12 clearfix\">\r\n                <button class=\"button button-3d button-rounded btn-block button-white button-light nomargin\" (click)=\"edit()\" style=\"margin-top: 35px !important;\">Change</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/pages/location-date/location-date.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/location-date/location-date.component.ts ***!
  \****************************************************************/
/*! exports provided: LocationDateComponent, identityRevealedValidator, identityTimeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationDateComponent", function() { return LocationDateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityRevealedValidator", function() { return identityRevealedValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identityTimeValidator", function() { return identityTimeValidator; });
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
        }, { validators: [identityRevealedValidator, identityTimeValidator] });
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
    LocationDateComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
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
    var startDate = control.get('startDate');
    var endDate = control.get('endDate');
    return startDate.value && endDate.value && (endDate.value.getTime() - startDate.value.getTime() < 0) ? { 'identityRevealed': true } : null;
};
var identityTimeValidator = function (control) {
    var startDate = control.get('startDate');
    var now = new Date();
    return startDate.value && (startDate.value.getTime() - now.getTime() < 54000000) ? { 'identityTime': true } : null;
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

module.exports = "<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>My Account</h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Login - Registration</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n    ============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n      <mat-tab-group animationDuration=\"0ms\" style=\"max-width: 500px;\" class=\"nobottommargin clearfix divcenter\">\r\n        <mat-tab label=\"Login\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-login\">\r\n            <div class=\"card nobottommargin\">\r\n              <div class=\"card-body\" style=\"padding: 40px;\">\r\n                <form id=\"login-form\" [formGroup]=\"userLoginForm\" (ngSubmit)=\"onSubmitLogin()\">\r\n\r\n                  <h3>Login to your Account</h3>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"login-form-username\">Username:</label>\r\n                    <input formControlName=\"username\" type=\"text\" id=\"login-form-username\" name=\"login-form-username\" value=\"\" class=\"form-control\" />\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"login-form-password\">Password:</label>\r\n                    <input formControlName=\"password\" type=\"password\" id=\"login-form-password\" name=\"login-form-password\" value=\"\" class=\"form-control\" />\r\n                  </div>\r\n\r\n                  <div class=\"col_full nobottommargin\">\r\n                    <div *ngIf=\"loginErrorMessage\" class=\"cross-validation-error-message alert alert-danger\">\r\n                      {{loginErrorMessage}}\r\n                    </div>\r\n                    <button class=\"button button-3d button-black nomargin\" id=\"login-form-submit\" name=\"login-form-submit\" value=\"login\" type=\"submit\">Login</button>\r\n                    <!--<a href=\"#\" class=\"fright\">Forgot Password?</a>-->\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n        <mat-tab label=\"Register\">\r\n          <div class=\"tab-content clearfix\" id=\"tab-register\">\r\n            <div class=\"card nobottommargin\">\r\n              <div class=\"card-body\" style=\"padding: 40px;\">\r\n                <h3>Register for an Account</h3>\r\n\r\n                <form id=\"register-form\" name=\"register-form\" class=\"nobottommargin\" [formGroup]=\"userRegisterForm\" (ngSubmit)=\"onSubmitRegistration()\">\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-name\">Name:</label>\r\n                    <input formControlName=\"name\" type=\"text\" id=\"register-form-name\" name=\"register-form-name\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['name'].invalid && (userRegisterForm.controls['name'].dirty || userRegisterForm.controls['name'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['name'].errors.required\">\r\n                        Name is required.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-email\">Email Address:</label>\r\n                    <input formControlName=\"email\" type=\"text\" id=\"register-form-email\" name=\"register-form-email\" value=\"\" class=\"form-control\"  [email]=\"true\"/>\r\n                    <div *ngIf=\"userRegisterForm.controls['email'].invalid && (userRegisterForm.controls['email'].dirty || userRegisterForm.controls['email'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.required\">\r\n                        Email Address is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.email\">\r\n                        Email Address is invalid.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['email'].errors.emailTaken\">\r\n                        Email Address is already registered.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-username\">Choose a Username:</label>\r\n                    <input formControlName=\"username\" type=\"text\" id=\"register-form-username\" name=\"register-form-username\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['username'].invalid && (userRegisterForm.controls['username'].dirty || userRegisterForm.controls['username'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['username'].errors.required\">\r\n                        Username is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['username'].errors.usernameTaken\">\r\n                        Username is already registered.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-phone\">Phone:</label>\r\n                    <input formControlName=\"phone\" type=\"text\" id=\"register-form-phone\" name=\"register-form-phone\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['phone'].invalid && (userRegisterForm.controls['phone'].dirty || userRegisterForm.controls['phone'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['phone'].errors.required\">\r\n                        Phone is required.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-password\">Choose Password:</label>\r\n                    <input formControlName=\"password\" type=\"password\" id=\"register-form-password\" name=\"register-form-password\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['password'].invalid && (userRegisterForm.controls['password'].dirty || userRegisterForm.controls['password'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['password'].errors.required\">\r\n                        Password is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['password'].errors?.minlength\">\r\n                        Password min length is 6.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full\">\r\n                    <label for=\"register-form-repassword\">Re-enter Password:</label>\r\n                    <input formControlName=\"repassword\" type=\"password\" id=\"register-form-repassword\" name=\"register-form-repassword\" value=\"\" class=\"form-control\" />\r\n                    <div *ngIf=\"userRegisterForm.controls['repassword'].invalid && (userRegisterForm.controls['repassword'].dirty || userRegisterForm.controls['repassword'].touched)\" class=\"alert alert-danger\">\r\n                      <div *ngIf=\"userRegisterForm.controls['repassword'].errors.required\">\r\n                        Password is required.\r\n                      </div>\r\n                      <div *ngIf=\"userRegisterForm.controls['repassword'].errors?.minlength\">\r\n                        Password min length is 6.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col_full nobottommargin\">\r\n                    <div *ngIf=\"userRegisterForm.errors?.userRevealedValidator && (userRegisterForm.touched || userRegisterForm.dirty)\" class=\"cross-validation-error-message alert alert-danger\">\r\n                      Incorrect password.\r\n                    </div>\r\n                    <button type=\"submit\" class=\"button button-3d button-black nomargin\" id=\"register-form-submit\" name=\"register-form-submit\" value=\"register\">Register Now</button>\r\n                  </div>\r\n\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-tab>\r\n      </mat-tab-group>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n"

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
parse__WEBPACK_IMPORTED_MODULE_5__["serverURL"] = 'https://entertainmentpartyrentals.com/parse'; // use your server url
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

module.exports = "<!-- Page Title\r\n    ============================================= -->\r\n<section id=\"page-title\">\r\n  <div class=\"container clearfix\">\r\n    <h1>{{selectedProduct?.title}}</h1>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['']\">Home</a></li>\r\n      <li class=\"breadcrumb-item\"><a [routerLink]=\"['/rentals']\">Rentals</a></li>\r\n      <li class=\"breadcrumb-item\" *ngIf=\"itemCategory\"><a [routerLink]=\"['/rentals', itemCategory.id]\">{{itemCategory.title}}</a></li>\r\n    </ol>\r\n  </div>\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n    ============================================= -->\r\n<section id=\"content\" >\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <div class=\"single-product\">\r\n\r\n        <div class=\"product\" *ngIf=\"selectedProduct\">\r\n\r\n          <div class=\"col_two_fifth\">\r\n\r\n            <!-- Product Single - Gallery\r\n                            ============================================= -->\r\n            <div class=\"product-image\" style=\"overflow: visible;\">\r\n              <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\r\n              <div class=\"sale-flash\" style=\"z-index: 1000;\" *ngIf=\"selectedProduct.isNew\">New !</div>\r\n              <div class=\"sale-flash\" style=\"z-index: 1000;\" *ngIf=\"selectedProduct.isHotDeal\">Hot Deal !</div>\r\n            </div><!-- Product Single - Gallery End -->\r\n\r\n          </div>\r\n\r\n          <div class=\"col_two_fifth product-desc\">\r\n\r\n            <!-- Product Single - Price\r\n                            ============================================= -->\r\n            <div class=\"product-price\" *ngIf=\"isSpecified()\"> <ins>${{getPrice(selectedProduct.nightPrice, selectedProduct.minPrice, selectedProduct.minTime, selectedProduct.price)}}</ins></div><!-- Product Single - Price End -->\r\n            <!-- Product Single - Rating\r\n                            ============================================= -->\r\n            <div class=\"product-rating\">\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n              <i class=\"icon-star3\"></i>\r\n            </div><!-- Product Single - Rating End -->\r\n\r\n            <div class=\"clear\"></div>\r\n\r\n            <ul class=\"tab-nav clearfix\">\r\n              <li class=\"noleftmargin\"><a routerLink=\"#\">Instant Price & Availability</a></li>\r\n            </ul>\r\n            <app-location-date></app-location-date>\r\n\r\n\r\n            <!-- Product Single - Quantity & Cart Button\r\n\t\t\t\t\t\t\t\t============================================= -->\r\n            <form *ngIf=\"isSpecified()\" class=\"cart nobottommargin clearfix\" method=\"post\" enctype='multipart/form-data'>\r\n              <div class=\"line\"></div>\r\n              <div class=\"quantity clearfix\">\r\n                <input type=\"button\" value=\"-\" class=\"minus\">\r\n                <input type=\"text\" step=\"1\" min=\"1\"  name=\"quantity\" value=\"1\" title=\"Qty\" class=\"qty\" size=\"4\" />\r\n                <input type=\"button\" value=\"+\" class=\"plus\">\r\n              </div>\r\n              <button disabled type=\"submit\" class=\"add-to-cart button nomargin\">Add to cart</button>\r\n            </form><!-- Product Single - Quantity & Cart Button End -->\r\n\r\n            <div class=\"clear\"></div>\r\n            <div class=\"line\"></div>\r\n\r\n            <!-- Product Single - Short Description\r\n                            ============================================= -->\r\n            <p>{{selectedProduct.description}}</p>\r\n            <!--<p>Perspiciatis ad eveniet ea quasi debitis quos laborum eum reprehenderit eaque explicabo assumenda rem modi.</p>-->\r\n            <ul class=\"iconlist\">\r\n              <li><i class=\"icon-caret-right\"></i> Size : {{selectedProduct.itemSize}}</li>\r\n              <li><i class=\"icon-caret-right\"></i> Space Required : {{selectedProduct.spaceRequired}}</li>\r\n            </ul><!-- Product Single - Short Description End -->\r\n\r\n            <!--&lt;!&ndash; Product Single - Meta-->\r\n                            <!--============================================= &ndash;&gt;-->\r\n            <!--<div class=\"card product-meta\">-->\r\n              <!--<div class=\"card-body\">-->\r\n                <!--<span itemprop=\"productID\" class=\"sku_wrapper\">SKU: <span class=\"sku\">8465415</span></span>-->\r\n                <!--<span class=\"posted_in\">Category: <a href=\"#\" rel=\"tag\">Dress</a>.</span>-->\r\n                <!--<span class=\"tagged_as\">Tags: <a href=\"#\" rel=\"tag\">Pink</a>, <a href=\"#\" rel=\"tag\">Short</a>, <a href=\"#\" rel=\"tag\">Dress</a>, <a href=\"#\" rel=\"tag\">Printed</a>.</span>-->\r\n              <!--</div>-->\r\n            <!--</div>&lt;!&ndash; Product Single - Meta End &ndash;&gt;-->\r\n\r\n            <!-- Product Single - Share\r\n                            ============================================= -->\r\n            <!--<div class=\"si-share noborder clearfix\">-->\r\n              <!--<span>Share:</span>-->\r\n              <!--<div>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-facebook\">-->\r\n                  <!--<i class=\"icon-facebook\"></i>-->\r\n                  <!--<i class=\"icon-facebook\"></i>-->\r\n                <!--</a>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-twitter\">-->\r\n                  <!--<i class=\"icon-twitter\"></i>-->\r\n                  <!--<i class=\"icon-twitter\"></i>-->\r\n                <!--</a>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-pinterest\">-->\r\n                  <!--<i class=\"icon-pinterest\"></i>-->\r\n                  <!--<i class=\"icon-pinterest\"></i>-->\r\n                <!--</a>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-gplus\">-->\r\n                  <!--<i class=\"icon-gplus\"></i>-->\r\n                  <!--<i class=\"icon-gplus\"></i>-->\r\n                <!--</a>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-rss\">-->\r\n                  <!--<i class=\"icon-rss\"></i>-->\r\n                  <!--<i class=\"icon-rss\"></i>-->\r\n                <!--</a>-->\r\n                <!--<a href=\"#\" class=\"social-icon si-borderless si-email3\">-->\r\n                  <!--<i class=\"icon-email3\"></i>-->\r\n                  <!--<i class=\"icon-email3\"></i>-->\r\n                <!--</a>-->\r\n              <!--</div>-->\r\n            <!--</div>&lt;!&ndash; Product Single - Share End &ndash;&gt;-->\r\n\r\n          </div>\r\n\r\n          <div class=\"col_one_fifth col_last\">\r\n            <div class=\"divider divider-center\"><i class=\"icon-circle-blank\"></i></div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-thumbs-up2\"></i>\r\n              </div>\r\n              <h3>100% Original</h3>\r\n              <p class=\"notopmargin\">We guarantee you the Original Brands.</p>\r\n            </div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-credit-cards\"></i>\r\n              </div>\r\n              <h3>Payment Options</h3>\r\n              <p class=\"notopmargin\">We accept Visa, MasterCard and American Express.</p>\r\n            </div>\r\n\r\n            <div class=\"feature-box fbox-plain fbox-dark fbox-small\">\r\n              <div class=\"fbox-icon\">\r\n                <i class=\"icon-truck2\"></i>\r\n              </div>\r\n              <h3>Free Shipping</h3>\r\n              <p class=\"notopmargin\">Free Delivery to 100+ Locations.</p>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"col_full nobottommargin\">\r\n            <mat-tab-group>\r\n              <mat-tab *ngIf=\"selectedProduct.instructions\">\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">format_align_justify</mat-icon>\r\n                  Instruction\r\n                </ng-template>\r\n                <div class=\"tab-content clearfix\">\r\n                  <p>{{selectedProduct.instructions}}</p>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab *ngIf=\"getSetupPolicy()?.length > 0\">\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">info</mat-icon>\r\n                   Additional Info\r\n                </ng-template>\r\n                <div class=\"tab-content clearfix\" >\r\n\r\n                  <table class=\"table table-striped table-bordered\">\r\n                    <tbody>\r\n                    <tr *ngFor=\"let key of getSetupPolicy()\">\r\n                      <td>{{key}}</td>\r\n                      <td>{{selectedProduct.setupPolicy.get(key)}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                  </table>\r\n\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab *ngIf=\"selectedProduct.rentalTerms\">\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">assignment_turned_in</mat-icon>\r\n                  Rental Terms\r\n                </ng-template>\r\n                <div class=\"tab-content clearfix\" >\r\n                  <p>{{selectedProduct.rentalTerms}}</p>\r\n                </div>\r\n              </mat-tab>\r\n\r\n              <mat-tab *ngIf=\"reviewsCount>0\">\r\n                <ng-template mat-tab-label>\r\n                  <mat-icon class=\"example-tab-icon\">rate_review</mat-icon>\r\n                  Reviews ({{reviewsCount}})\r\n                </ng-template>\r\n\r\n                <div class=\"tab-content clearfix\" >\r\n\r\n                  <div id=\"reviews\" class=\"clearfix\">\r\n\r\n                    <ol class=\"commentlist clearfix\">\r\n\r\n                      <li class=\"comment even thread-even depth-1\" id=\"li-comment-4\">\r\n                        <div id=\"comment-4\" class=\"comment-wrap clearfix\">\r\n\r\n                          <div class=\"comment-meta\">\r\n                            <div class=\"comment-author vcard\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"comment-avatar clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt='' src='http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"comment-content clearfix\">\r\n                            <div class=\"comment-author\">John Doe<span><a href=\"#\" title=\"Permalink to this comment\">April 24, 2014 at 10:46AM</a></span></div>\r\n                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo perferendis aliquid tenetur. Aliquid, tempora, sit aliquam officiis nihil autem eum at repellendus facilis quaerat consequatur commodi laborum saepe non nemo nam maxime quis error tempore possimus est quasi reprehenderit fuga!</p>\r\n                            <div class=\"review-comment-ratings\">\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star-half-full\"></i>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"clear\"></div>\r\n\r\n                        </div>\r\n                      </li>\r\n\r\n                      <li class=\"comment even thread-even depth-1\" id=\"li-comment-1\">\r\n                        <div id=\"comment-1\" class=\"comment-wrap clearfix\">\r\n\r\n                          <div class=\"comment-meta\">\r\n                            <div class=\"comment-author vcard\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"comment-avatar clearfix\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<img alt='' src='http://0.gravatar.com/avatar/ad516503a11cd5ca435acc9bb6523536?s=60' height='60' width='60' /></span>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"comment-content clearfix\">\r\n                            <div class=\"comment-author\">Mary Jane<span><a href=\"#\" title=\"Permalink to this comment\">June 16, 2014 at 6:00PM</a></span></div>\r\n                            <p>Quasi, blanditiis, neque ipsum numquam odit asperiores hic dolor necessitatibus libero sequi amet voluptatibus ipsam velit qui harum temporibus cum nemo iste aperiam explicabo fuga odio ratione sint fugiat consequuntur vitae adipisci delectus eum incidunt possimus tenetur excepturi at accusantium quod doloremque reprehenderit aut expedita labore error atque?</p>\r\n                            <div class=\"review-comment-ratings\">\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star3\"></i>\r\n                              <i class=\"icon-star-empty\"></i>\r\n                              <i class=\"icon-star-empty\"></i>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"clear\"></div>\r\n\r\n                        </div>\r\n                      </li>\r\n\r\n                    </ol>\r\n\r\n                    <!-- Modal Reviews\r\n                                            ============================================= -->\r\n                    <a href=\"#\" data-toggle=\"modal\" data-target=\"#reviewFormModal\" class=\"button button-3d nomargin fright\">Add a Review</a>\r\n\r\n                    <!-- Modal Reviews End -->\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </mat-tab>\r\n            </mat-tab-group>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"clear\"></div><div class=\"line\"></div>\r\n\r\n      <div style=\"position: relative;\" *ngIf=\"relatedProducts?.length > 0\">\r\n        <div class=\"heading-block nobottomborder\">\r\n          <h3>Related Products</h3>\r\n        </div>\r\n        <owl-carousel-o [options]=\"customOptions\">\r\n\r\n          <ng-container *ngFor=\"let product of relatedProducts\">\r\n            <ng-template carouselSlide  [width]=\"300\" [id]=\"product.id\">\r\n              <div class=\"sale-flash\" style=\"z-index: 1000;\" *ngIf=\"product.isNew\">New !</div>\r\n              <div class=\"sale-flash\" style=\"z-index: 1000;\" *ngIf=\"product.isHotDeal\">Hot Deal !</div>\r\n              <a [routerLink]=\"['/rental', product.pathParam]\" *ngIf=\"product.images[0]\"><img [src]=\"product.images[0]\" [alt]=\"product.title\" [title]=\"product.title\"></a>\r\n              <div class=\"real-estate-item-price\" *ngIf=\"isSpecified()\">\r\n              ${{getPrice(product.nightPrice, product.minPrice, product.minTime, product.price)}}\r\n              </div>\r\n              <div class=\"real-estate-item-desc\">\r\n                <h3 style=\"white-space: nowrap;overflow: hidden;\"><a [routerLink]=\"['/rental', product.pathParam]\">{{product.title}}</a>\r\n                </h3>\r\n\r\n                <div class=\"line\" style=\"margin-top: 15px; margin-bottom: 15px;\"></div>\r\n\r\n              </div>\r\n            </ng-template>\r\n          </ng-container>\r\n\r\n        </owl-carousel-o>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n<div class=\"modal fade\" id=\"reviewFormModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"reviewFormModalLabel\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h4 class=\"modal-title\" id=\"reviewFormModalLabel\">Submit a Review</h4>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"nobottommargin\" id=\"template-reviewform\" name=\"template-reviewform\" action=\"#\" method=\"post\">\r\n\r\n          <div class=\"col_half\">\r\n            <label for=\"template-reviewform-name\">Name <small>*</small></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\">\r\n                <div class=\"input-group-text\"><i class=\"icon-user\"></i></div>\r\n              </div>\r\n              <input type=\"text\" id=\"template-reviewform-name\" name=\"template-reviewform-name\" value=\"\" class=\"form-control required\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col_half col_last\">\r\n            <label for=\"template-reviewform-email\">Email <small>*</small></label>\r\n            <div class=\"input-group\">\r\n              <div class=\"input-group-prepend\"><div class=\"input-group-text\">@</div></div>\r\n              <input type=\"email\" id=\"template-reviewform-email\" name=\"template-reviewform-email\" value=\"\" class=\"required email form-control\" />\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"clear\"></div>\r\n\r\n          <div class=\"col_full col_last\">\r\n            <label for=\"template-reviewform-rating\">Rating</label>\r\n            <select id=\"template-reviewform-rating\" name=\"template-reviewform-rating\" class=\"form-control\">\r\n              <option value=\"\">-- Select One --</option>\r\n              <option value=\"1\">1</option>\r\n              <option value=\"2\">2</option>\r\n              <option value=\"3\">3</option>\r\n              <option value=\"4\">4</option>\r\n              <option value=\"5\">5</option>\r\n            </select>\r\n          </div>\r\n\r\n          <div class=\"clear\"></div>\r\n\r\n          <div class=\"col_full\">\r\n            <label for=\"template-reviewform-comment\">Comment <small>*</small></label>\r\n            <textarea class=\"required form-control\" id=\"template-reviewform-comment\" name=\"template-reviewform-comment\" rows=\"6\" cols=\"30\"></textarea>\r\n          </div>\r\n\r\n          <div class=\"col_full nobottommargin\">\r\n            <button class=\"button button-3d nomargin\" type=\"submit\" id=\"template-reviewform-submit\" name=\"template-reviewform-submit\" value=\"submit\">Submit Review</button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div><!-- /.modal-content -->\r\n  </div><!-- /.modal-dialog -->\r\n</div><!-- /.modal -->\r\n"

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
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");
/* harmony import */ var _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/routing.service */ "./src/app/shared/services/routing.service.ts");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/services/category.service */ "./src/app/shared/services/category.service.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_8__);









var RentalItemComponent = /** @class */ (function () {
    function RentalItemComponent(titleService, locationService, route, router, routingService, productService, categoryService) {
        this.titleService = titleService;
        this.locationService = locationService;
        this.route = route;
        this.router = router;
        this.routingService = routingService;
        this.productService = productService;
        this.categoryService = categoryService;
        this.galleryOptions = [
            { 'imageSize': 'contain' },
            {
                width: '450px',
                height: '400px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_8__["NgxGalleryAnimation"].Slide
            },
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            { 'breakpoint': 500, 'width': '300px', 'height': '300px', 'thumbnailsColumns': 3 },
            { 'breakpoint': 300, 'width': '100%', 'height': '200px', 'thumbnailsColumns': 2 },
        ];
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            merge: true,
            autoWidth: true,
            margin: 10,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                400: {
                    items: 1
                },
                940: {
                    items: 2
                },
                1100: {
                    items: 3
                }
            },
            nav: true
        };
        this.galleryImages = [];
        this.reviewsCount = 0;
        this.relatedProducts = [];
        this.title$ = this.route.paramMap;
    }
    RentalItemComponent.prototype.ngOnInit = function () {
        this.getRouteParams();
        this.routingService.itemIdSubject.subscribe(function (res) {
            // console.log(res);
        });
    };
    RentalItemComponent.prototype.getSelectedProduct = function (productPatch) {
        var _this = this;
        this.productService.getProductByPatch(productPatch).subscribe(function (res) {
            if (!res) {
                _this.router.navigate(['/404']);
            }
            _this.selectedProduct = res;
            _this.titleService.setTitle(res.title);
            _this.categoryService.getCategoryByProductId(_this.selectedProduct.id).subscribe(function (res) {
                _this.itemCategory = res;
                _this.categoryService.getCategoryItems(res.id).subscribe(function (res) {
                    _this.relatedProducts = res.filter(function (product) { return product.id !== _this.selectedProduct.id; });
                });
            });
            _this.initGallery();
        });
    };
    RentalItemComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            $('.css3-spinner').remove();
        }, 1500);
    };
    RentalItemComponent.prototype.getRouteParams = function () {
        var _this = this;
        this.title$.subscribe(function (params) {
            _this.getSelectedProduct(params.get('title'));
        });
    };
    RentalItemComponent.prototype.navigate = function (id, title) {
        this.router.navigate(['/rental', title], { queryParams: { id: id } });
    };
    RentalItemComponent.prototype.initGallery = function () {
        this.galleryImages = [];
        for (var _i = 0, _a = this.selectedProduct.images; _i < _a.length; _i++) {
            var image = _a[_i];
            this.galleryImages.push({
                small: image,
                medium: image,
                big: image
            });
        }
    };
    RentalItemComponent.prototype.isSpecified = function () {
        return this.locationService.isSpecified;
    };
    RentalItemComponent.prototype.getSetupPolicy = function () {
        return Array.from(this.selectedProduct.setupPolicy.keys());
    };
    RentalItemComponent.prototype.getPrice = function (nightPrice, minPrice, minTime, price) {
        return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
    };
    RentalItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rental-item',
            template: __webpack_require__(/*! ./rental-item.component.html */ "./src/app/pages/rental-item/rental-item.component.html"),
            styles: [__webpack_require__(/*! ./rental-item.component.css */ "./src/app/pages/rental-item/rental-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_4__["LocationDateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _shared_services_routing_service__WEBPACK_IMPORTED_MODULE_5__["RoutingService"],
            _shared_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"],
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_7__["CategoryService"]])
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

module.exports = "<!-- Page Title\r\n\t\t============================================= -->\r\n<section id=\"page-title\">\r\n\r\n  <div class=\"container clearfix\">\r\n    <h1>Rental Categories</h1>\r\n    <span>Find A Rental</span>\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\"><a routerLink=\"/home\">Home</a></li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Rentals</li>\r\n    </ol>\r\n  </div>\r\n\r\n</section><!-- #page-title end -->\r\n\r\n<!-- Content\r\n\t\t============================================= -->\r\n<section id=\"content\">\r\n\r\n  <div class=\"content-wrap\">\r\n\r\n    <div class=\"container clearfix\">\r\n\r\n      <!-- Post Content\r\n                ============================================= -->\r\n      <div class=\"postcontent nobottommargin col_last\" *ngIf=\"activeCategory\">\r\n\r\n        <!-- Shop\r\n                    ============================================= -->\r\n        <div id=\"shop\" class=\"shop product-3 grid-container clearfix\">\r\n\r\n          <div *ngFor=\"let product of activeCategory?.items\" class=\"product sf-tshirt clearfix\">\r\n            <div class=\"product-image\">\r\n              <a style=\"height: 230px !important;\" [routerLink]=\"['/rental', product.pathParam]\" *ngIf=\"product.images[0]\"><img\r\n                src=\"{{product.images[0]}}\" alt=\"{{product.title}}\"></a>\r\n              <a style=\"height: 230px !important;\" [routerLink]=\"['/rental', product.pathParam]\" *ngIf=\"product.images[1]\"><img\r\n                src=\"{{product.images[1]}}\" alt=\"{{product.title}}\"></a>\r\n              <div class=\"sale-flash\" *ngIf=\"product.isHotDeal\"> Hot Deal</div>\r\n              <div class=\"sale-flash\" *ngIf=\"product.isNew\">New</div>\r\n              <!--<div class=\"product-overlay\">-->\r\n              <!--<a href=\"#\" class=\"add-to-cart\"><i class=\"icon-shopping-cart\"></i><span> Add to Cart</span></a>-->\r\n              <!--<a href=\"include/ajax/shop-item.html\" class=\"item-quick-view\" data-lightbox=\"ajax\"><i-->\r\n              <!--class=\"icon-zoom-in2\"></i><span> Quick View</span></a>-->\r\n              <!--</div>-->\r\n            </div>\r\n            <div class=\"product-desc center\">\r\n              <div class=\"product-title\"><h3 style=\"white-space: nowrap;overflow: hidden;\">\r\n                <a [routerLink]=\"['/rental', product.pathParam]\">{{product.title}}</a></h3></div>\r\n              <div class=\"product-price\" *ngIf=\"isSpecified()\">\r\n                <!--<del>$45.99</del>-->\r\n                <ins>${{product.price}}</ins>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div><!-- #shop end -->\r\n\r\n      </div><!-- .postcontent end -->\r\n\r\n      <!-- Sidebar\r\n                ============================================= -->\r\n      <div class=\"sidebar nobottommargin\">\r\n        <div class=\"sidebar-widgets-wrap\">\r\n\r\n          <div class=\"widget widget-filter-links clearfix\">\r\n\r\n            <h4>Select Category</h4>\r\n            <ul class=\"custom-filter\" data-container=\"#shop\" data-active-class=\"active-filter\">\r\n              <!--<li class=\"widget-filter-reset active-filter\"><a routerLink=\"#\" data-filter=\"*\">Clear</a></li>-->\r\n              <ng-container *ngFor=\"let category of categories\">\r\n                <li [ngClass]=\"activeCategoryStyle(category)\"><a (click)=\"categoryOnClick(category)\"\r\n                                                                 style=\"cursor:pointer\">{{category.title}}</a><span>{{category.items?.length}}</span>\r\n                </li>\r\n              </ng-container>\r\n            </ul>\r\n\r\n          </div>\r\n\r\n          <!--<div class=\"widget widget-filter-links clearfix\">-->\r\n\r\n          <!--<h4>Sort By</h4>-->\r\n          <!--<ul class=\"shop-sorting\">-->\r\n          <!--<li class=\"widget-filter-reset active-filter\"><a href=\"#\" data-sort-by=\"original-order\">Clear</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"name\">Name</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"price_lh\">Price: Low to High</a></li>-->\r\n          <!--<li><a href=\"#\" data-sort-by=\"price_hl\">Price: High to Low</a></li>-->\r\n          <!--</ul>-->\r\n\r\n          <!--</div>-->\r\n\r\n        </div>\r\n      </div><!-- .sidebar end -->\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</section><!-- #content end -->\r\n"

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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/services/location-date.service */ "./src/app/shared/services/location-date.service.ts");







var RentalsComponent = /** @class */ (function () {
    function RentalsComponent(router, routingService, route, categoryService, locationDateService) {
        this.router = router;
        this.routingService = routingService;
        this.route = route;
        this.categoryService = categoryService;
        this.locationDateService = locationDateService;
        this.categories = [];
    }
    RentalsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategoriesWithDependency().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (arr) { return arr.sort(function (a, b) {
            return a.order - b.order;
        }); })).subscribe(function (res) {
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
        var categoryId = routs ? routs.urlAfterRedirects.replace('/rentals/', '') : this.route.snapshot.params['id'];
        this.categories.forEach(function (value) {
            if (value.id === categoryId) {
                _this.activeCategory = value;
            }
        });
    };
    RentalsComponent.prototype.isSpecified = function () {
        return this.locationDateService.isSpecified;
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
            _shared_services_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"],
            _shared_services_location_date_service__WEBPACK_IMPORTED_MODULE_6__["LocationDateService"]])
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
    function CategoryModel(id, title, description, imageUrl, order, $items, items) {
        this._id = id;
        this._title = title;
        this._description = description;
        this._imageUrl = imageUrl;
        this._items = items;
        this._$items = $items;
        this._order = order;
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
    Object.defineProperty(CategoryModel.prototype, "order", {
        get: function () {
            return this._order;
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
        this._images = images || [];
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

/***/ "./src/app/shared/model/product.model.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/model/product.model.ts ***!
  \***********************************************/
/*! exports provided: ProductModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModel", function() { return ProductModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_view_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-view.model */ "./src/app/shared/model/product-view.model.ts");

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */

var ProductModel = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductModel, _super);
    function ProductModel(id, title, price, images, isNew, isHotDeal, itemSize, pathParam, description, rentalTerms, spaceRequired, setupPolicy, instructions, video, safetyRules, minTime, minPrice, nightPrice, count) {
        var _this = _super.call(this, id, title, price, images, isNew, isHotDeal, itemSize, pathParam) || this;
        _this._description = description;
        _this._rentalTerms = rentalTerms;
        _this._spaceRequired = spaceRequired;
        _this._setupPolicy = setupPolicy || new Map();
        _this._instructions = instructions;
        _this._video = video;
        _this._safetyRules = safetyRules;
        _this._minTime = minTime;
        _this._minPrice = minPrice;
        _this._nightPrice = nightPrice;
        _this._count = count;
        return _this;
    }
    Object.defineProperty(ProductModel.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "rentalTerms", {
        get: function () {
            return this._rentalTerms;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "spaceRequired", {
        get: function () {
            return this._spaceRequired;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "setupPolicy", {
        get: function () {
            return this._setupPolicy;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "instructions", {
        get: function () {
            return this._instructions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "video", {
        get: function () {
            return this._video;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "safetyRules", {
        get: function () {
            return this._safetyRules;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "minTime", {
        get: function () {
            return this._minTime;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "minPrice", {
        get: function () {
            return this._minPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "nightPrice", {
        get: function () {
            return this._nightPrice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProductModel.prototype, "calculatedPrice", {
        get: function () {
            return this._calculatedPrice;
        },
        set: function (value) {
            this._calculatedPrice = value;
        },
        enumerable: true,
        configurable: true
    });
    return ProductModel;
}(_product_view_model__WEBPACK_IMPORTED_MODULE_1__["ProductViewModel"]));



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
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/product.model */ "./src/app/shared/model/product.model.ts");

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */









var CategoryHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CategoryHttpService, _super);
    function CategoryHttpService(parseService) {
        var _this = _super.call(this) || this;
        _this.parseService = parseService;
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
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
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
            return new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['order'], products);
        }
        return new _model_category_model__WEBPACK_IMPORTED_MODULE_3__["CategoryModel"](item.id, item.attributes['title'], item.attributes['description'], item.attributes['imageUrl'], item.attributes['order']);
    };
    CategoryHttpService.prototype.getCategoryItems = function (categoryId) {
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category).equalTo('objectId', categoryId);
        var promise = query.first().then(function (res) {
            return res.relation('products').query().find().then(function (res) {
                return CategoryHttpService_1.forOne(res);
            });
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    CategoryHttpService.prototype.getCategoriesWithDependency = function () {
        var category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(category);
        var promise = query.find().then(function (res) {
            return res;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) {
            var categories = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var category_1 = res_2[_i];
                var products$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(category_1.relation('products').query().find().then(function (product) {
                    return CategoryHttpService_1.forOne(product);
                }));
                var categoryModel = CategoryHttpService_1.convertToCategoryModel(category_1, products$);
                categories.push(categoryModel);
            }
            return categories;
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["flatMap"])(function (categories) { return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(categories.map(function (categoryFork) {
            return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_6__["forkJoin"])(categoryFork.$items).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (products) {
                categoryFork.items = products[0];
                return categoryFork;
            }));
        })); }));
    };
    CategoryHttpService.parseObjectToProductModel = function (parseObject) {
        return new _model_product_model__WEBPACK_IMPORTED_MODULE_9__["ProductModel"](parseObject.id, parseObject.attributes['title'], parseObject.attributes['price'], parseObject.attributes['images'], parseObject.attributes['isNew'], parseObject.attributes['isHotDeal'], parseObject.attributes['itemSize'], parseObject.attributes['pathParam'], parseObject.attributes['description'], parseObject.attributes['rentalTerms'], parseObject.attributes['spaceRequired'], parseObject.attributes['setupPolicy'] ? new Map(Object.entries(parseObject.attributes['setupPolicy'])) : null, parseObject.attributes['instructions'], parseObject.attributes['video'], parseObject.attributes['safetyRules'], parseObject.attributes['minTime'], parseObject.attributes['minPrice'], parseObject.attributes['nightPrice'], parseObject.attributes['count']);
    };
    CategoryHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(CategoryHttpService_1.parseObjectToProductModel(item));
        }
        return items;
    };
    CategoryHttpService.prototype.getCategoryByProductId = function (productId) {
        var productQuery = new this.parseService.parse.Query('Product');
        productQuery.contains('objectId', productId);
        var categoryQuery = new this.parseService.parse.Query(CategoryHttpService_1.CATEGORY);
        categoryQuery.matchesQuery('products', productQuery);
        var promise = categoryQuery.first().then(function (list) {
            return CategoryHttpService_1.convertToCategoryModel(list);
        }, function (error) {
            console.log(error);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    CategoryHttpService.prototype.deleteCategory = function (id) {
        var Product = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo('objectId', id);
        var promise = query.first().then(function (result) {
            result.relation('products').query().find().then(function (items) {
                items.forEach(function (item) { return item.destroy(); });
            });
            return result.destroy({});
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    CategoryHttpService.prototype.saveCategory = function (model) {
        var _this = this;
        var Category = this.parseService.parse.Object.extend(CategoryHttpService_1.CATEGORY);
        var category = new Category();
        this.setFields(category, model);
        var promise;
        if (model.id) {
            var query = new this.parseService.parse.Query(Category);
            query.equalTo('objectId', model.id);
            promise = query.first().then(function (res) {
                _this.setFields(res, model);
                return res.save();
            });
        }
        else {
            promise = category.save().then(function (category) {
                return category.save();
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    CategoryHttpService.prototype.setFields = function (category, model) {
        category.set('title', model.title);
        category.set('description', model.description);
        category.set('imageUrl', model.imageUrl);
    };
    var CategoryHttpService_1;
    CategoryHttpService.CATEGORY = 'Category';
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
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__);

/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */








var DeliveryChartHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](DeliveryChartHttpService, _super);
    function DeliveryChartHttpService(parseService) {
        var _this_1 = _super.call(this) || this;
        _this_1.parseService = parseService;
        _this_1._deliveryLocations = [];
        return _this_1;
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
        var delivery = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var query = new this.parseService.parse.Query(delivery);
        var promise = query.find().then(function (res) {
            return res;
        });
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(promise).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (res) {
            var deliveryLocations = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var delivery_1 = res_1[_i];
                var zip = Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(delivery_1.relation('zipCode').query().find().then(function (zip) {
                    return DeliveryChartHttpService_1.forOne(zip);
                }));
                var deliveryLocation = new _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["DeliveryChartModel"](delivery_1['id'], delivery_1.attributes['city'], delivery_1.attributes['price'], zip);
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
    DeliveryChartHttpService.prototype.deleteDeliveryChart = function (id) {
        var DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var query = new this.parseService.parse.Query(DeliveryChart);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            result.relation('zipCode').query().find().then(function (items) {
                items.forEach(function (item) { return item.destroy(); });
            });
            return result.destroy();
        });
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    DeliveryChartHttpService.prototype.saveDeliveryChart = function (model) {
        var _this_1 = this;
        var DeliveryChart = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.DELIVERY_CHART);
        var delivery = new DeliveryChart();
        var zipCodes = this.setZipCodeFields(model.zipCodes);
        // zipCode.set('zipCode', model.zipCodes[0].zipCode);
        this.setDeliveryChartFields(delivery, model);
        var promise;
        var _this = this;
        if (model.id) {
            var query = new this.parseService.parse.Query(DeliveryChart);
            query.equalTo("objectId", model.id);
            promise = query.first().then(function (res) {
                _this_1.setDeliveryChartFields(res, model);
                res.relation('zipCode').query().find().then(function (relatedItems) {
                    relatedItems.forEach(function (item) { return item.destroy(); });
                });
                return _this_1.parseService.parse.Object.saveAll(zipCodes).then(function () {
                    zipCodes.forEach(function (item) { return res.relation('zipCode').add(item); });
                    return res.save();
                });
            });
        }
        else {
            promise = this.parseService.parse.Object.saveAll(zipCodes).then(function () {
                zipCodes.forEach(function (item) { return delivery.relation('zipCode').add(item); });
                return delivery.save();
            });
        }
        return Object(rxjs_internal_observable_from__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    DeliveryChartHttpService.prototype.setDeliveryChartFields = function (deliveryChart, model) {
        deliveryChart.set('id', model.id);
        deliveryChart.set('city', model.city);
        deliveryChart.set('price', model.price);
        deliveryChart.set('locationId', model.locationId);
    };
    DeliveryChartHttpService.prototype.setZipCodeFields = function (zipCodes) {
        var ZipCode = this.parseService.parse.Object.extend(DeliveryChartHttpService_1.ZIP_CODE);
        var res = [];
        // zipCodes = zipCodes.filter(item => !item.id);
        for (var _i = 0, zipCodes_1 = zipCodes; _i < zipCodes_1.length; _i++) {
            var code = zipCodes_1[_i];
            var zipCode = new ZipCode();
            zipCode.set('zipCode', code.zipCode);
            res.push(zipCode);
        }
        return res;
    };
    DeliveryChartHttpService.prototype.syncDeliveryChart = function () {
        var _this_1 = this;
        var deliveries = [];
        var cities = new Map();
        for (var _i = 0, ss_1 = ss; _i < ss_1.length; _i++) {
            var item = ss_1[_i];
            if (!cities.has(item.City)) {
                cities.set(item.City, item.price ? item.price : 0);
            }
        }
        var citiesArray = Array.from(cities.keys());
        for (var _a = 0, citiesArray_1 = citiesArray; _a < citiesArray_1.length; _a++) {
            var city = citiesArray_1[_a];
            var zipCodes = [];
            for (var _b = 0, ss_2 = ss; _b < ss_2.length; _b++) {
                var item = ss_2[_b];
                if (item.City === city) {
                    zipCodes.push(new _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["ZipCode"](null, item['ZIP Code'].toString()));
                }
            }
            deliveries.push(new _model_delivery_chart_model__WEBPACK_IMPORTED_MODULE_3__["DeliveryChartModel"](null, city, cities.get(city), null, zipCodes));
        }
        deliveries.forEach(function (res) {
            _this_1.saveDeliveryChart(res);
        });
        return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_8__["of"])(deliveries);
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

var ss = [];


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
    LocationDateService.prototype.getCalculation = function (nightPrice, minPrice, minTime, price) {
        var night = 0;
        var hours = 0;
        var calculatedPrice = 0;
        if (this.isSpecified) {
            var days = this.getDates();
            for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
                var day = days_1[_i];
                if (days.indexOf(day) !== 0 && days.indexOf(day) !== days.length - 1) {
                    hours += this.getFutureHours(9).length;
                    night += 1;
                }
                else if (days.indexOf(day) === 0) {
                    hours += this.getFutureHours(day.getHours()).length;
                }
                else if (days.indexOf(day) === days.length - 1) {
                    hours += this.getLastDayHours(this._locationDate.endDateTime.getHours()).length;
                }
            }
        }
        if (hours > minTime) {
            hours = hours - minTime;
            calculatedPrice = nightPrice * night + price * hours + minPrice;
            return calculatedPrice;
        }
        return minPrice;
    };
    LocationDateService.prototype.getFutureHours = function (hour) {
        var futureHours = [];
        for (var i = hour; i <= 21; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    };
    LocationDateService.prototype.getLastDayHours = function (hour) {
        var futureHours = [];
        for (var i = 9; i < hour; i++) {
            futureHours.push(i + ":" + ("00"));
        }
        return futureHours;
    };
    LocationDateService.prototype.getDates = function () {
        var dates = [], currentDate = this._locationDate.startDateTime, addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setHours(0, 0, 0, 0);
            date.setDate(date.getDate() + days);
            return date;
        };
        while (currentDate <= this._locationDate.endDateTime) {
            dates.push(currentDate);
            currentDate = addDays.call(currentDate, 1);
        }
        return dates;
    };
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
parse__WEBPACK_IMPORTED_MODULE_2__["serverURL"] = 'https://entertainmentpartyrentals.com/parse'; // use your server url
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

/***/ "./src/app/shared/services/product-http.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/product-http.service.ts ***!
  \*********************************************************/
/*! exports provided: ProductHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductHttpService", function() { return ProductHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product.service */ "./src/app/shared/services/product.service.ts");
/* harmony import */ var _model_product_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/product.model */ "./src/app/shared/model/product.model.ts");
/* harmony import */ var _model_product_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/product-view.model */ "./src/app/shared/model/product-view.model.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var _category_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./category-http.service */ "./src/app/shared/services/category-http.service.ts");








/**
 * @author Gevorg Avetisyan on 3/16/2019.
 */
var ProductHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProductHttpService, _super);
    function ProductHttpService(parseService) {
        var _this_1 = _super.call(this) || this;
        _this_1.parseService = parseService;
        return _this_1;
    }
    ProductHttpService_1 = ProductHttpService;
    ProductHttpService.prototype.getAllProducts = function () {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        var promise = query.find().then(function (res) {
            var products = [];
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var item = res_1[_i];
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.getProduct = function (id) {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            return ProductHttpService_1.convertToProductModel(result);
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.deleteProduct = function (id) {
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(Product);
        query.equalTo("objectId", id);
        var promise = query.first().then(function (result) {
            return result.destroy({});
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.saveProduct = function (productToSave, newCategoryId, oldCategoryId) {
        var _this_1 = this;
        var Product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var product = new Product();
        this.setFields(product, productToSave);
        var promise;
        var _this = this;
        if (productToSave.id) {
            var query = new this.parseService.parse.Query(Product);
            query.equalTo("objectId", productToSave.id);
            promise = query.first().then(function (res) {
                _this_1.setFields(res, productToSave);
                return res.save().then(function (savedProduct) {
                    if (newCategoryId !== oldCategoryId) {
                        var Category = _this.parseService.parse.Object.extend(_category_http_service__WEBPACK_IMPORTED_MODULE_7__["CategoryHttpService"].CATEGORY);
                        var query_1 = new _this.parseService.parse.Query(Category);
                        query_1.equalTo("objectId", oldCategoryId);
                        return query_1.first().then(function (category) {
                            category.relation('products').remove(savedProduct);
                            return category.save();
                        }).then(function (res) {
                            var Category = _this.parseService.parse.Object.extend(_category_http_service__WEBPACK_IMPORTED_MODULE_7__["CategoryHttpService"].CATEGORY);
                            var query = new _this.parseService.parse.Query(Category);
                            query.equalTo("objectId", newCategoryId);
                            return query.first().then(function (category) {
                                category.relation('products').add(savedProduct);
                                return category.save();
                            });
                        });
                    }
                    else {
                        return savedProduct.save();
                    }
                });
            });
        }
        else {
            promise = product.save().then(function (product) {
                var Category = _this.parseService.parse.Object.extend(_category_http_service__WEBPACK_IMPORTED_MODULE_7__["CategoryHttpService"].CATEGORY);
                var query = new _this.parseService.parse.Query(Category);
                query.equalTo("objectId", newCategoryId);
                return query.first().then(function (category) {
                    category.relation('products').add(product);
                    return category.save();
                });
            });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.getBestDealProducts = function (count) {
        return undefined;
    };
    ProductHttpService.prototype.getProductQuestions = function (id) {
        return undefined;
    };
    ProductHttpService.prototype.getSimilarProducts = function (id) {
        return undefined;
    };
    ProductHttpService.prototype.getProductByCategoryId = function (categoryId) {
    };
    // conversions
    ProductHttpService.convertToProductViewModel = function (item) {
        return new _model_product_view_model__WEBPACK_IMPORTED_MODULE_4__["ProductViewModel"](item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam']);
    };
    ProductHttpService.convertToProductModel = function (item) {
        return new _model_product_model__WEBPACK_IMPORTED_MODULE_3__["ProductModel"](item.id, item.attributes['title'], item.attributes['price'], item.attributes['images'], item.attributes['isNew'], item.attributes['isHotDeal'], item.attributes['itemSize'], item.attributes['pathParam'], item.attributes['description'], item.attributes['rentalTerms'], item.attributes['spaceRequired'], item.attributes['setupPolicy'] ? new Map(Object.entries(item.attributes['setupPolicy'])) : null, item.attributes['instructions'], item.attributes['video'], item.attributes['safetyRules'], item.attributes['minTime'], item.attributes['minPrice'], item.attributes['nightPrice'], item.attributes['count']);
    };
    ProductHttpService.prototype.getProducts = function (count) {
        var product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(product);
        var promise = query.find().then(function (res) {
            var products = [];
            for (var _i = 0, res_2 = res; _i < res_2.length; _i++) {
                var item = res_2[_i];
                products.push(ProductHttpService_1.convertToProductModel(item));
            }
            return products;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.setFields = function (product, productToSave) {
        product.set('title', productToSave.title);
        product.set('price', productToSave.price);
        product.set('images', productToSave.images);
        product.set('isNew', productToSave.isNew);
        product.set('isHotDeal', productToSave.isHotDeal);
        product.set('itemSize', productToSave.itemSize);
        product.set('description', productToSave.description);
        product.set('rentalTerms', productToSave.rentalTerms);
        product.set('spaceRequired', productToSave.spaceRequired);
        product.set('setupPolicy', this.mapToObject(productToSave.setupPolicy));
        product.set('instructions', productToSave.instructions);
        product.set('video', productToSave.video);
        product.set('safetyRules', productToSave.safetyRules);
        product.set('minTime', productToSave.minTime);
        product.set('minPrice', productToSave.minPrice);
        product.set('nightPrice', productToSave.nightPrice);
        product.set('count', productToSave.count);
        product.set('pathParam', this.pathParamFromName(productToSave.title));
    };
    ProductHttpService.prototype.pathParamFromName = function (name) {
        return new Date().getTime() + '-' + name.replace(/[^a-zA-Z0-9- ]/g, "").trim().replace(/\s/g, '-');
    };
    ProductHttpService.prototype.getProductByPatch = function (patch) {
        var product = this.parseService.parse.Object.extend(ProductHttpService_1.PRODUCT);
        var query = new this.parseService.parse.Query(product);
        query.equalTo('pathParam', patch);
        var promise = query.first().then(function (res) {
            return res ? ProductHttpService_1.convertToProductModel(res) : null;
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(promise);
    };
    ProductHttpService.prototype.mapToObject = function (map) {
        var obj = {};
        map.forEach(function (v, k) { obj[k] = v; });
        return obj;
    };
    var ProductHttpService_1;
    ProductHttpService.PRODUCT = "Product";
    ProductHttpService = ProductHttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_6__["ParseService"]])
    ], ProductHttpService);
    return ProductHttpService;
}(_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]));



/***/ }),

/***/ "./src/app/shared/services/product.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    return ProductService;
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

/***/ "./src/app/shared/services/upload.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/upload.service.ts ***!
  \***************************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var UploadService = /** @class */ (function () {
    function UploadService(parseService) {
        this.parseService = parseService;
    }
    UploadService_1 = UploadService;
    UploadService.prototype.uploadFile = function (file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            var parseFile = new this.parseService.parse.File(this.genarateFileName(), file);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(parseFile.save().then(function (result) {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ fileMaxSize: true, message: "File size should be less that " + UploadService_1.FILE_MAX_SIZE_NAME });
        }
    };
    UploadService.prototype.uploadFileWithCustomName = function (name, file) {
        if (file.size < UploadService_1.FILE_MAX_SIZE) {
            var parseFile = new this.parseService.parse.File(name, file);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(parseFile.save().then(function (result) {
                return {
                    fileName: UploadService_1.DOMAIN_NAME + result.url().substring(result.url().indexOf('parse')),
                    file: result
                };
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ fileMaxSize: true, message: "File size should be less that " + UploadService_1.FILE_MAX_SIZE_NAME });
        }
    };
    UploadService.prototype.genarateFileName = function () {
        return new Date().getTime() + Math.random().toString(36).substring(2, 15);
    };
    var UploadService_1;
    UploadService.DOMAIN_NAME = 'https://entertainmentpartyrentals.com/';
    UploadService.FILE_MAX_SIZE = 1024 * 1024;
    UploadService.FILE_MAX_SIZE_NAME = '1 MB';
    UploadService = UploadService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_2__["ParseService"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/app/shared/services/user-http.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user-http.service.ts ***!
  \******************************************************/
/*! exports provided: UserHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHttpService", function() { return UserHttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var _model_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/user.model */ "./src/app/shared/model/user.model.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/index */ "./node_modules/rxjs/index.js");
/* harmony import */ var rxjs_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _parse_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parse.service */ "./src/app/shared/services/parse.service.ts");






var UserHttpService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserHttpService, _super);
    function UserHttpService(parseService) {
        var _this = _super.call(this) || this;
        _this.parseService = parseService;
        return _this;
    }
    UserHttpService_1 = UserHttpService;
    UserHttpService.prototype.getAuthUsers = function () {
        var user = this.parseService.parse.Object.extend(UserHttpService_1.USER);
        var query = new this.parseService.parse.Query(user).equalTo('emailVerified', true);
        var promise = query.find().then(function (res) {
            return UserHttpService_1.forOne(res);
        });
        return Object(rxjs_index__WEBPACK_IMPORTED_MODULE_4__["from"])(promise);
    };
    UserHttpService.forOne = function (parseObject) {
        var items = [];
        for (var _i = 0, parseObject_1 = parseObject; _i < parseObject_1.length; _i++) {
            var item = parseObject_1[_i];
            items.push(UserHttpService_1.parseObjectToUserModel(item));
        }
        return items;
    };
    UserHttpService.parseObjectToUserModel = function (parseObject) {
        return new _model_user_model__WEBPACK_IMPORTED_MODULE_2__["UserModel"](parseObject.attributes['name'], parseObject.attributes['email'], parseObject.attributes['username'], parseObject.attributes['phone']);
    };
    var UserHttpService_1;
    UserHttpService.USER = 'User';
    UserHttpService = UserHttpService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_parse_service__WEBPACK_IMPORTED_MODULE_5__["ParseService"]])
    ], UserHttpService);
    return UserHttpService;
}(_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]));



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
var UserService = /** @class */ (function () {
    function UserService() {
    }
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/util/error-handler.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/util/error-handler.ts ***!
  \**********************************************/
/*! exports provided: handleError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleError", function() { return handleError; });
function handleError(error) {
    console.error(error);
}


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