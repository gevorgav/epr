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
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RentalItemComponent} from './pages/rental-item/rental-item.component';
import {CheckoutComponent} from './pages/checkout/checkout.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { LocationDateComponent } from './pages/location-date/location-date.component';
import {LocationDateService} from './shared/services/location-date.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { PageComponent } from './layout/page/page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import {ParseService} from './shared/services/parse.service';
import {AuthGuardLoginService, AuthGuardService as AuthGuard} from './shared/services/auth-guard.service';
import { CartComponent } from './pages/cart/cart.component';
import {DeliveryChartHttpService} from './shared/services/delivery-chart-http.service';
import {DeliveryChartService} from './shared/services/delivery-chart.service';

const appRoutes: Routes = [
  {
    path: 'home',
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
    path: 'rentals',
    component: RentalsComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
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
    path: '**',
    redirectTo: 'home'
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
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false} // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatInputModule
  ],
  providers: [
    LocationDateService,
    ParseService,
    AuthGuard,
    AuthGuardLoginService,
    {provide: DeliveryChartService, useClass: DeliveryChartHttpService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


