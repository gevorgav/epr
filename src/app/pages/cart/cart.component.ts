import { Component, OnInit } from '@angular/core';
import {InitializerService} from '../../shared/services/initializer.service';
import {OrderService} from '../../shared/services/order.service';
import {ProductModel} from '../../shared/model/product.model';
import {LocationDateService} from '../../shared/services/location-date.service';
import {ProductService} from '../../shared/services/product.service';
import {Observable} from 'rxjs/internal/Observable';
import {OrderItemModel} from '../../shared/model/order-item.model';
import {forkJoin} from 'rxjs/internal/observable/forkJoin';
import {ActivatedRoute, Router} from '@angular/router';
import {ParseService} from '../../shared/services/parse.service';
import {CheckoutService} from '../../shared/services/checkout.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private _productsInCart : ProductModel[] = [];
  
  public shippingPrice: number;
  
  public orderData = new Map<string, ProductInCartCalculation>();
  
  constructor(private orderService: OrderService,
              private locationService: LocationDateService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private parseService: ParseService,
              private initializerService: InitializerService) { }

  ngOnInit() {
    this.initOrderDataSelectedProducts();
    this.locationService.isSpecified.subscribe(res=>{
      if (res) {
        this.getShippingPrice();
      }
    })
  }
  
  get productsInCart(): ProductModel[] {
    return this._productsInCart;
  }
  
  set productsInCart(value: ProductModel[]) {
    this._productsInCart = value;
  }
  
  private initOrderDataSelectedProducts() {
    let products$: Observable<ProductModel>[] = [];
    this.initializerService.orderModel.orderItems.forEach((item: OrderItemModel)=>{
      products$.push(this.productService.getProduct(item.productId))
    });
    forkJoin(...products$).subscribe(res =>{
      this.productsInCart = res;
      this.initOrderData();
    });
  }
  
  getQuantities(product: ProductModel): number[] {
    let quantities = [];
    if (product && product.count > 0) {
      let i = 1;
      while (i <= product.count) {
        quantities.push(i);
        i++;
      }
    }
    return quantities;
  }
  
  isSpecified() {
    return this.locationService.isSpecified;
  }
  
  getPrice(product: ProductModel) {
    return this.locationService.getCalculation(product.nightPrice, product.minPrice, product.minTime, product.price);
  }
  
  private initOrderData() {
    this.initializerService.orderModel.orderItems.forEach((value: OrderItemModel)=>{
      let product: ProductModel = this.getProductById(value.productId);
      this.orderData.set(value.productId, {count: value.count,
                                           available: this.getQuantities(product),
                                           price: 0
      });
      this.getPrice(product).subscribe(res=>{
        this.orderData.get(value.productId).price = res;
      })
    });
  }
  
  getProductById(id: string): ProductModel{
    for (let product of this.productsInCart){
      if (product.id === id) {
        return product;
      }
    }
  }
  
  private getShippingPrice() {
    this.locationService.getShippingPrice().subscribe(res=>{
      this.shippingPrice = res;
      this.setNewPrices();
    })
  }
  
  countChange(value: number, productId: string) {
    this.getSubtotalPrice();
    this.setNewPrices();
    if (this.parseService.isAuth()){
      this.orderService.saveCount(value, productId);
    }
  }
  
  getTotalPrice() {
    return this.getSubtotalPrice() + this.shippingPrice;
  }
  
  getSubtotalPrice() {
    let subtotal: number = 0;
    this.orderData.forEach((value: ProductInCartCalculation, key: string) => {
      subtotal += value.price * value.count;
    });
    return subtotal;
  }
  
  removeOrderItem(productId: string) {
    this.orderService.removeOrderItem(productId).subscribe(res=>{
      if (res){
        this.productsInCart = this.productsInCart.filter(value=> value.id !== productId);
        this.initializerService.orderModel.orderItems = this.initializerService.orderModel.orderItems.filter(value=> value.productId !== productId)
      }
    })
  }
  
  continueShopping() {
    this.router.navigate(['/rentals']);
  }
  
  private setNewPrices() {
    CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.amount = this.getTotalPrice().toString();
    CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.billTo.zip = this.locationService.locationDate.location.zipCode;
  }
}

export interface ProductInCartCalculation {
  available: number[];
  count: number;
  price: number;
}
