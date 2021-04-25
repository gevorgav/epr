import {RouterModule, Routes} from '@angular/router';
import {ShippedRentalsComponent} from './shipped-rentals/shipped-rentals.component';
import {ShippingComponent} from './shipping/shipping.component';
import {DeliveryChartComponent as DashboardDeliveryChartComponent} from './delivery-chart/delivery-chart.component';
import {ProductComponent} from './product/product.component';
import {CategoryComponent} from './category/category.component';
import {UserComponent} from './user/user.component';
import {SettingsComponent} from './settings/settings.component';
import {AdditionalComponent} from './additional/additional.component';
import {AdditionalCategoryComponent} from './additional-cotegory/additional-category.component';
import {DashboardComponent} from './dashboard.component';
import {NgModule} from '@angular/core';
import {AdditionalPopupComponent} from './additional/additional-popup/additional-popup.component';
import {AdditionalCategoryPopupComponent} from './additional-cotegory/additional-category-popup/additional-category-popup.component';
import {ShippingPopupComponent} from './shipping/shipping-popup/shipping-popup.component';
import {CategoryPopupComponent} from './category/category-popup/category-popup.component';
import {ProductPopupComponent} from './product/product-popup/product-popup.component';
import {DeliveryChartPopupComponent} from './delivery-chart/delivery-chart-popup/delivery-chart-popup.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../mat/material.module';
import {CommonModule} from '@angular/common';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { PromoCodeListComponent } from './promo-code-list/promo-code-list.component';
import { PromoCodeService } from '../../shared/services/promo-coed.service';
import {MatButtonModule} from '@angular/material/button';

const dashboardRoutes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: 'shipped', component: ShippedRentalsComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'delivery-chart', component: DashboardDeliveryChartComponent},
      {path: 'product', component: ProductComponent},
      {path: 'category', component: CategoryComponent},
      {path: 'user', component: UserComponent},
      {path: 'promo-code', component: PromoCodeListComponent},
      {path: 'settings', component: SettingsComponent},
      {path: 'additional', component: AdditionalComponent},
      {path: 'additional-category', component: AdditionalCategoryComponent},
      {path: '**', redirectTo: 'page-not-found', pathMatch: 'full'}
    ]
  },

];

@NgModule({
  declarations: [
    DashboardComponent,
    SettingsComponent,
    AdditionalComponent,
    AdditionalCategoryComponent,
    AdditionalPopupComponent,
    AdditionalCategoryPopupComponent,
    ShippingPopupComponent,
    CategoryComponent,
    CategoryPopupComponent,
    UserComponent,
    ShippingComponent,
    ShippedRentalsComponent,
    ProductComponent,
    DashboardDeliveryChartComponent,
    ProductPopupComponent,
    DeliveryChartPopupComponent,
    PromoCodeListComponent,
  ],
  imports: [
    RouterModule.forChild(
      dashboardRoutes
    ),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    MatDatepickerModule,
    CKEditorModule,
    MatButtonModule
  ],
  providers: [PromoCodeService],
  entryComponents: [
    ProductPopupComponent,
    DeliveryChartPopupComponent,
    CategoryPopupComponent,
    AdditionalPopupComponent,
    AdditionalCategoryPopupComponent,
    ShippingPopupComponent
  ]
})
export class DashboardModule {

}
