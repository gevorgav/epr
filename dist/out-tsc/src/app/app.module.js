import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactInfoComponent } from './pages/contact-info/contact-info.component';
import { DeliveryChartComponent } from './pages/delivery-chart/delivery-chart.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { RentalsComponent } from './pages/rentals/rentals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RentalItemComponent } from './pages/rental-item/rental-item.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LocationDateComponent } from './pages/location-date/location-date.component';
import { LocationDateService } from './shared/services/location-date.service';
import { PageComponent } from './layout/page/page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ParseService } from './shared/services/parse.service';
import { AuthGuardLoginService, AuthGuardService as AuthGuard, AuthGuardVerificationService } from './shared/services/auth-guard.service';
import { CartComponent } from './pages/cart/cart.component';
import { DeliveryChartHttpService } from './shared/services/delivery-chart-http.service';
import { DeliveryChartService } from './shared/services/delivery-chart.service';
import { CategoryService } from './shared/services/category.service';
import { CategoryHttpService } from './shared/services/category-http.service';
import { RoutingService } from './shared/services/routing.service';
import { MaterialModule } from "./mat/material.module";
import { ProductComponent } from './pages/dashboard/product/product.component';
import { DeliveryChartComponent as DashboardDeliveryChartComponent } from './pages/dashboard/delivery-chart/delivery-chart.component';
import { ProductService } from "./shared/services/product.service";
import { ProductHttpService } from "./shared/services/product-http.service";
import { ProductPopupComponent } from './pages/dashboard/product/product-popup/product-popup.component';
import { DeliveryChartPopupComponent } from './pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { CategoryPopupComponent } from './pages/dashboard/category/category-popup/category-popup.component';
var appRoutes = [
    {
        path: '',
        component: HomePageComponent,
        data: { title: 'Entertainment Party Rentals.' }
    },
    {
        path: 'about-us',
        component: AboutUsComponent
    },
    {
        path: 'contact-info',
        component: ContactInfoComponent
    },
    {
        path: 'delivery-chart',
        component: DeliveryChartComponent
    },
    {
        path: 'rentals/:id',
        component: RentalsComponent
    },
    {
        path: 'rentals',
        component: RentalsComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'delivery-chart', component: DashboardDeliveryChartComponent },
            { path: 'product', component: ProductComponent },
            { path: 'category', component: CategoryComponent },
        ]
    },
    {
        path: 'login',
        component: LoginPageComponent,
        canActivate: [AuthGuardLoginService],
        data: { title: 'EPR login page.' }
    },
    {
        path: 'rental/:title',
        component: RentalItemComponent,
    },
    {
        path: 'cart',
        component: CartComponent,
    },
    {
        path: 'verification-page',
        component: VerificationComponent,
        canActivate: [AuthGuardVerificationService]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomePageComponent,
                CategoriesComponent,
                CalculatorComponent,
                AboutUsComponent,
                ContactInfoComponent,
                DeliveryChartComponent,
                HeaderComponent,
                FooterComponent,
                RentalsComponent,
                RentalItemComponent,
                CheckoutComponent,
                LoginPageComponent,
                LocationDateComponent,
                PageComponent,
                DashboardComponent,
                CartComponent,
                ProductComponent,
                DashboardDeliveryChartComponent,
                ProductPopupComponent,
                DeliveryChartPopupComponent,
                CartComponent,
                VerificationComponent,
                CategoryComponent,
                CategoryPopupComponent
            ],
            imports: [
                RouterModule.forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                ),
                BrowserModule,
                FormsModule,
                ReactiveFormsModule,
                BrowserAnimationsModule,
                OwlDateTimeModule,
                OwlNativeDateTimeModule,
                MaterialModule
            ],
            providers: [
                LocationDateService,
                ParseService,
                AuthGuard,
                AuthGuardLoginService,
                AuthGuardVerificationService,
                RoutingService,
                { provide: DeliveryChartService, useClass: DeliveryChartHttpService },
                { provide: CategoryService, useClass: CategoryHttpService },
                { provide: ProductService, useClass: ProductHttpService },
            ],
            entryComponents: [
                ProductPopupComponent,
                DeliveryChartPopupComponent,
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map