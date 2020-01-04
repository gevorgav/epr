import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {CategoriesComponent} from './categories/categories.component';
import {CalculatorComponent} from './calculator/calculator.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactInfoComponent} from './pages/contact-info/contact-info.component';
import {DeliveryChartComponent} from './pages/delivery-chart/delivery-chart.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {RentalsComponent} from './pages/rentals/rentals.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RentalItemComponent} from './pages/rental-item/rental-item.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import { LocationDateComponent } from './pages/location-date/location-date.component';
import {LocationDateService} from './shared/services/location-date.service';
import { PageComponent } from './layout/page/page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ParseService} from './shared/services/parse.service';
import {AuthGuardLoginService, AuthGuardService as AuthGuard, AuthGuardVerificationService} from './shared/services/auth-guard.service';
import { CartComponent } from './pages/cart/cart.component';
import {DeliveryChartHttpService} from './shared/services/delivery-chart-http.service';
import {DeliveryChartService} from './shared/services/delivery-chart.service';
import {CategoryService} from './shared/services/category.service';
import {CategoryHttpService} from './shared/services/category-http.service';
import {RoutingService} from './shared/services/routing.service';
import {MaterialModule} from "./mat/material.module";
import { ProductComponent } from './pages/dashboard/product/product.component';
import { DeliveryChartComponent as DashboardDeliveryChartComponent } from './pages/dashboard/delivery-chart/delivery-chart.component';
import {ProductService} from "./shared/services/product.service";
import {ProductHttpService} from "./shared/services/product-http.service";
import { ProductPopupComponent } from './pages/dashboard/product/product-popup/product-popup.component';
import { DeliveryChartPopupComponent } from './pages/dashboard/delivery-chart/delivery-chart-popup/delivery-chart-popup.component';
import { VerificationComponent } from './pages/verification/verification.component';
import { CategoryComponent } from './pages/dashboard/category/category.component';
import { CategoryPopupComponent } from './pages/dashboard/category/category-popup/category-popup.component';
import { NgxGalleryModule } from 'ngx-gallery';
import {UserService} from './shared/services/user.service';
import {UserHttpService} from './shared/services/user-http.service';
import { UserComponent } from './pages/dashboard/user/user.component';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {PaymentFormComponent} from './pages/payement-form/payment-form.component';
import {OrderService} from './shared/services/order.service';
import {InitializerService} from './shared/services/initializer.service';
import {HttpClientModule} from '@angular/common/http';
import {CheckoutService} from './shared/services/checkout.service';
import {ShippingHttpService} from './shared/services/shipping-http.service';
import { ShippingComponent } from './pages/dashboard/shipping/shipping.component';
import { ShippedRentalsComponent } from './pages/dashboard/shipped-rentals/shipped-rentals.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

const appRoutes: Routes = [
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
      {path: 'shipped', component: ShippedRentalsComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'delivery-chart', component: DashboardDeliveryChartComponent},
      {path: 'product', component: ProductComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'user', component: UserComponent},
    ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    canActivate: [AuthGuardLoginService]
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuardLoginService],
    data: { title: 'EPR login page.' }
  },
  {
    path: 'rental/:title',
    component: RentalItemComponent
  },
  {
    path: 'profile/:id',
    component: CheckoutComponent
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

@NgModule({
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
    VerificationComponent,
    CategoryComponent,
    CategoryPopupComponent,
    PaymentFormComponent,
    UserComponent,
    ShippingComponent,
    ShippedRentalsComponent,
    ResetPasswordComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MaterialModule,
    NgxGalleryModule,
    CarouselModule
  ],
  providers: [
    LocationDateService,
    ParseService,
    AuthGuard,
    AuthGuardLoginService,
    AuthGuardVerificationService,
    RoutingService,
    OrderService,
    InitializerService,
    CheckoutService,
    ShippingHttpService,
    {provide: DeliveryChartService, useClass: DeliveryChartHttpService},
    {provide: CategoryService, useClass: CategoryHttpService},
    {provide: ProductService, useClass: ProductHttpService},
    {provide: UserService, useClass: UserHttpService},
  ],
  entryComponents: [
    ProductPopupComponent,
    DeliveryChartPopupComponent,
    CategoryPopupComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


