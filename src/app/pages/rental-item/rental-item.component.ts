import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LocationDateService} from '../../shared/services/location-date.service';
import {RoutingService} from '../../shared/services/routing.service';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/services/product.service';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/model/category.model';
import {NgxGalleryAnimation} from 'ngx-gallery';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {OrderService} from '../../shared/services/order.service';
import {OrderModel} from '../../shared/model/order.model';
import {ParseService} from '../../shared/services/parse.service';
import {OrderItemModel} from '../../shared/model/order-item.model';
import {InitializerService} from '../../shared/services/initializer.service';
import {AdditionCategoryModel} from '../../shared/model/addition-category.model';
import {AdditionCategoryService} from '../../shared/services/addition-category.service';
import {Observable, zip} from 'rxjs';
import {AdditionModel} from '../../shared/model/addition.model';
import {forEach} from '@angular/router/src/utils/collection';
declare var $: any;

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.css']
})
export class RentalItemComponent implements OnInit, AfterViewInit {

  public galleryOptions = [
    {'imageSize': 'contain'},
    {
      width: '450px',
      height: '400px',
      thumbnailsColumns: 4,
      imageAnimation: NgxGalleryAnimation.Slide
    },
    {
      breakpoint: 800,
      width: '100%',
      height: '600px',
      imagePercent: 80,
      thumbnailsPercent: 20,
      thumbnailsMargin: 20,
      thumbnailMargin: 20
    },
    {'breakpoint': 500, 'width': '300px', 'height': '300px', 'thumbnailsColumns': 3},
    {'breakpoint': 300, 'width': '100%', 'height': '200px', 'thumbnailsColumns': 2},
  ];

  public customOptions: OwlOptions = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    merge: true,
    lazyLoad: true,
    autoWidth: true,
    margin: 10,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      400: {
        items: 1
      },
      940: {
        items: 2
      },
      1100: {
        items: 3
      }
    },
    nav: true
  };

  public galleryImages = [];
  public reviewsCount: number = 0;
  public selectedProduct: ProductModel;
  public relatedProducts: ProductModel[] = [];
  public itemCategory: CategoryModel;
  public quantity: number = 0;
  private title$ = this.route.paramMap;
  public additionCategories: AdditionCategoryModel[] = [];
  private selectedAdditions: Map<string, AdditionModel[]> = new Map<string, AdditionModel[]>();

  constructor(private titleService: Title,
              private metaService: Meta,
              private locationService: LocationDateService,
              private route: ActivatedRoute,
              private router: Router,
              private routingService: RoutingService,
              private productService: ProductService,
              private categoryService: CategoryService,
              private orderService: OrderService,
              private initializerService: InitializerService,
              private parseService: ParseService,
              private additionCategoryService: AdditionCategoryService) {
  }

  ngOnInit() {
    this.getRouteParams();
    this.routingService.itemIdSubject.subscribe(res => {
      // console.log(res);
    });
  }

  private getSelectedProduct(productPatch: string) {
    this.productService.getProductByPatch(productPatch)
      .subscribe((res: ProductModel) => {
        if (!res) {
          this.router.navigate(['page-not-found']);
        }
        this.initAdditions(res);
        this.selectedProduct = res;
        this.titleService.setTitle(res.title);
        this.metaService.addTag({ name: 'description', content: res.metaDescription });
        this.categoryService.getCategoryByProductId(this.selectedProduct.id).subscribe((res: CategoryModel) => {
          this.itemCategory = res;
        });
        if (this.selectedProduct.relation && this.selectedProduct.relation.length > 0){
          this.initRelatedProducts();
        }

        this.initGallery();
      });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $('.css3-spinner').remove();
    }, 1500);
  }

  private getRouteParams() {
    this.title$.subscribe((params: ParamMap) => {
      this.getSelectedProduct(params.get('title'));
    });
  }

  public navigate(id: number, title: string) {
    this.router.navigate(['/rental', title], {queryParams: {id: id}});
  }

  private initGallery() {
    this.galleryImages = [];
    for (let image of this.selectedProduct.images) {
      this.galleryImages.push({
        small: image,
        medium: image,
        big: image
      });
    }
  }

  isSpecified() {
    return this.locationService.isSpecified;
  }

  getSetupPolicy() {
    return Array.from(this.selectedProduct.setupPolicy.keys());
  }

  getPrice(nightPrice: number, minPrice: number, minTime: number, price: number) {
    return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
  }

  getQuantities(): number[] {
    let quantities = [];
    if (this.selectedProduct && this.selectedProduct.count > 0) {
      let i = 1;
      while (i <= this.selectedProduct.count) {
        quantities.push(i);
        i++;
      }
    }
    return quantities;
  }

  addToCart() {
    let selectedAdditions = this.getSelectedValues();
    let orderItem = new OrderItemModel(this.selectedProduct.id, this.quantity, selectedAdditions.map(value => value.id));
    let items = [];
    items.push(orderItem);
    let order = new OrderModel(this.locationService.locationDate.startDateTime, this.locationService.locationDate.endDateTime,
      this.parseService.getCurrentUser() ? this.parseService.getCurrentUser().id : null, this.locationService.locationDate.location, items);
    this.orderService.setOrder(order).subscribe(res => {
      if (!this.initializerService.orderModel.orderItems) {
        this.initializerService.orderModel.orderItems = [];
      }
      this.initializerService.orderModel.orderItems.push(...order.orderItems);
    });
  }

  public productInCart(): boolean {
    if (this.initializerService.orderModel && this.initializerService.orderModel.orderItems) {
      for (let item of this.initializerService.orderModel.orderItems) {
        if (this.selectedProduct.id === item.productId) {
          return true;
        }
      }
    }
    return false;
  }

  continueShopping() {
    this.router.navigate(['/rentals']);
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  private initAdditions(productModel: ProductModel) {
    let $obs = [];
    productModel.additionalCategories.forEach(value => {
      $obs.push(this.additionCategoryService.getAdditionalCategoryById(value));
    });
    zip(...$obs).subscribe((res: AdditionCategoryModel[]) => {
      res.forEach(value => {
        this.selectedAdditions.set(value.id, []);
      });
      this.additionCategories = res;
    });
  }

  selectAddition(itemId: string | string[], category: AdditionCategoryModel) {
    if (Array.isArray(itemId)){
      this.selectedAdditions.set(category.id, []);
      itemId.forEach(valueId => {
        this.setSelectedAdditions(valueId, category);
      })
    }else {
      if (!this.selectedAdditions.has(category.id)) {
        this.selectedAdditions.set(category.id, []);
      }
      this.setSelectedAdditions(itemId, category);
    }
  }

  private getSelectedValues() {
    let selected = [];
    this.selectedAdditions.forEach(value => {

      selected.push(...value)
    });
    return selected;
  }

  private setSelectedAdditions(itemId: string, category: AdditionCategoryModel) {
    let item = category.additions.find(value => itemId == value.id);

    category.multiSelect ?
      this.selectedAdditions.get(category.id).indexOf(item)==-1?
        this.selectedAdditions.get(category.id).push(item) :
        this.selectedAdditions.set(category.id, this.selectedAdditions.get(category.id).filter(value => value.id != item.id))
      :this.selectedAdditions.set(category.id, [item]);
  }

  private initRelatedProducts() {
    let relatedProducts$: Observable<ProductModel>[] = [];
    this.selectedProduct.relation.forEach(value => {
      relatedProducts$.push(this.productService.getProduct(value));
    });
    zip(...relatedProducts$).subscribe(res=>{
      this.relatedProducts.push(...res);
    });
  }

}
