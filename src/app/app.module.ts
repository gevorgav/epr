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
import {PageComponent} from './layout/page/page.component';

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
    PageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
