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
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductIdName, ShippingInfoModel} from '../../shared/model/shipping-info.model';
import {ShippingHttpService} from '../../shared/services/shipping-http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private _productsInCart : ProductModel[] = [];
  
  public shippingPrice: number;
  
  public orderData = new Map<string, ProductInCartCalculation>();
  
  public shippingInformationForm: FormGroup;
  
  constructor(private orderService: OrderService,
              private locationService: LocationDateService,
              private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router,
              private parseService: ParseService,
              private checkoutService: CheckoutService,
              private shippingService: ShippingHttpService,
              private initializerService: InitializerService) { }

  ngOnInit() {
    this.initOrderDataSelectedProducts();
    this.initShippingForm();
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
  
  checkout() {
    document.getElementById("shipping-submit").click();
  }
  
  public redirect(){
    this.checkoutService.getToken().subscribe(res=>{
      document.getElementById("payTok")['value'] = res;
      document.getElementById("btnContinue").click();
    })
  }
  
  private setNewPrices() {
    CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.amount = this.getTotalPrice().toString();
    CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.transactionRequest.billTo.zip = this.locationService.locationDate.location.zipCode;
  }
  
  onSubmitShippingForm() {
    if (this.shippingInformationForm.valid){
      let shippingModel = new ShippingInfoModel(null,this.shippingInformationForm.get('name').value, this.shippingInformationForm.get('address').value,
        this.shippingInformationForm.get('phone').value, this.shippingInformationForm.get('instruction').value, this.locationService.locationDate.location.id,
        this.getProductsIds(this.productsInCart), false, false, this.parseService.isAuth()? this.parseService.getCurrentUser(): null,
        null, this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime, this.getTotalPrice(), this.getProductCount());
      this.shippingService.saveShipping(shippingModel).subscribe(res=>{
        CheckoutService.PAYMENT_OBJ.getHostedPaymentPageRequest.hostedPaymentSettings.setting[0].settingValue =
          "{\"showReceipt\": true, \"url\": \"https://entertainmentpartyrentals.com/profile/" + res.id + "\", \"urlText\": \"Continue\", \"cancelUrl\": \"https://entertainmentpartyrentals.com/cart\", \"cancelUrlText\": \"Cancel\"}";
        this.redirect();
      });
    }
  }
  
  private initShippingForm() {
    this.shippingInformationForm = new FormGroup({
      'name': new FormControl('',[
        Validators.required
      ]),
      'address': new FormControl('',[
        Validators.required
      ]),
      'phone': new FormControl('',[
        Validators.required
      ]),
      'instruction': new FormControl('',[
        Validators.required
      ])
    })
  }
  
  private getProductsIds(productsInCart: ProductModel[]): ProductIdName[] {
    let ids = [];
    productsInCart.forEach(value=>{
      ids.push({id: value.id, title: value.title })
    });
    return ids;
  }
  
  private getProductCount(): ProductCount[] {
    let productCount: ProductCount[] = [];
    this.orderData.forEach((value: ProductInCartCalculation, key: string)=>{
      productCount.push({productId: key, count: value.count})
    });
    return productCount;
  }
}

export interface ProductInCartCalculation {
  available: number[];
  count: number;
  price: number;
}

export interface ProductCount {
  productId: string;
  count: number;
}
