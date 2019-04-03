import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductComponent } from './product/product.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductListComponent } from './product-list/product-list.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {ContactInfoComponent} from './pages/contact-info/contact-info.component';
import {DeliveryChartComponent} from './pages/delivery-chart/delivery-chart.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {RouterModule, Routes} from '@angular/router';
import { RentalsComponent } from './pages/rentals/rentals.component';
import {FormsModule} from '@angular/forms';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

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
    path: '**',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CategoriesComponent,
    ProductComponent,
    CalculatorComponent,
    ProductListComponent,
    AboutUsComponent,
    ContactInfoComponent,
    DeliveryChartComponent,
    HeaderComponent,
    FooterComponent,
    RentalsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


