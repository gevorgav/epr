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

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
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
    path: 'login',
    component: LoginPageComponent,
    pathMatch: 'full'
  },
  {
    path: 'rental/:id',
    component: RentalItemComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
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
    LocationDateComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
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
  providers: [LocationDateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}


