import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {DeliveryChartComponent} from './pages/delivery-chart/delivery-chart.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import {RentalsComponent} from './pages/rentals/rentals.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RentalItemComponent} from './pages/rental-item/rental-item.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {LocationDateComponent} from './pages/location-date/location-date.component';
import {LocationDateService} from './shared/services/location-date.service';
import {PageComponent} from './layout/page/page.component';
import {ParseService} from './shared/services/parse.service';
import {AuthGuardLoginService, AuthGuardService as AuthGuard, AuthGuardVerificationService} from './shared/services/auth-guard.service';
import {CartComponent} from './pages/cart/cart.component';
import {DeliveryChartHttpService} from './shared/services/delivery-chart-http.service';
import {DeliveryChartService} from './shared/services/delivery-chart.service';
import {CategoryService} from './shared/services/category.service';
import {CategoryHttpService} from './shared/services/category-http.service';
import {RoutingService} from './shared/services/routing.service';
import {MaterialModule} from './mat/material.module';
import {ProductService} from './shared/services/product.service';
import {ProductHttpService} from './shared/services/product-http.service';
import {VerificationComponent} from './pages/verification/verification.component';
import {UserService} from './shared/services/user.service';
import {UserHttpService} from './shared/services/user-http.service';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {OrderService} from './shared/services/order.service';
import {InitializerService} from './shared/services/initializer.service';
import {HttpClientModule} from '@angular/common/http';
import {CheckoutService} from './shared/services/checkout.service';
import {ShippingHttpService} from './shared/services/shipping-http.service';
import {ResetPasswordComponent} from './pages/reset-password/reset-password.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {SettingsService} from './shared/services/settings.service';
import {SettingsHttpService} from './shared/services/settings-http.service';
import {AdditionCategoryHttp} from './shared/services/addition-category-http.service';
import {AdditionCategoryService} from './shared/services/addition-category.service';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MailService} from './shared/services/mail.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {PrivacyComponent} from "./pages/privacy/privacy.component";
import {NgxGalleryModule} from "@kolkov/ngx-gallery";
import {MatDatepickerModule} from "@angular/material/datepicker";

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: {title: 'Entertainment Party Rentals.'}
  },
  {
    path: 'home',
    component: HomePageComponent,
    redirectTo: ''
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'privacy-statement',
    component: PrivacyComponent
  },
  {
    path: 'contact-info',
    loadChildren: () => import('./pages/contact-info/contact-info.module').then(m => m.ContactInfoModule),
  },
  {
    path: 'search/:searchText',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchModule),
  },
  {
    path: 'delivery-chart',
    component: DeliveryChartComponent
  },
  {
    path: 'rentals',
    component: RentalsComponent
  },
  {
    path: 'rentals/:title',
    component: RentalsComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
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
    data: {title: 'EPR login page.'}
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
    path: 'profile/:id/:promoCodeId',
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
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    redirectTo: 'page-not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsComponent,
    PrivacyComponent,
    DeliveryChartComponent,
    HeaderComponent,
    FooterComponent,
    RentalsComponent,
    RentalItemComponent,
    CheckoutComponent,
    LoginPageComponent,
    LocationDateComponent,
    PageComponent,
    CartComponent,
    VerificationComponent,
    ResetPasswordComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false, initialNavigation: 'enabled' } // <-- debugging purposes only
),
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxGalleryModule,
    NgxMaterialTimepickerModule,
    MatDatepickerModule,
    CarouselModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    ParseService,
    LocationDateService,
    AuthGuard,
    AuthGuardLoginService,
    AuthGuardVerificationService,
    RoutingService,
    MailService,
    OrderService,
    InitializerService,
    CheckoutService,
    ShippingHttpService,
    {provide: DeliveryChartService, useClass: DeliveryChartHttpService},
    {provide: CategoryService, useClass: CategoryHttpService},
    {provide: ProductService, useClass: ProductHttpService},
    {provide: UserService, useClass: UserHttpService},
    {provide: SettingsService, useClass: SettingsHttpService},
    {provide: AdditionCategoryService, useClass: AdditionCategoryHttp},
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}


