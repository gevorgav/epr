import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {LocationDateService} from '../../shared/services/location-date.service';
import {RoutingService} from '../../shared/services/routing.service';
import {ProductModel} from '../../shared/model/product.model';
import {ProductService} from '../../shared/services/product.service';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/model/category.model';
import {NgxGalleryAnimation} from 'ngx-gallery';
import {OwlOptions} from 'ngx-owl-carousel-o';
declare var SEMICOLON: any;
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
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    merge: true,
    autoWidth: true,
    margin:10,
    navSpeed: 700,
    navText: ['', ''],
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
  private title$ = this.route.paramMap;
  
  constructor(private titleService: Title,
              private locationService: LocationDateService,
              private route: ActivatedRoute,
              private router: Router,
              private routingService: RoutingService,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }
  
  ngOnInit() {
    this.getRouteParams();
    this.routingService.itemIdSubject.subscribe(res => {
      // console.log(res);
    });
  }
  
  private getSelectedProduct(productPatch: string) {
    this.productService.getProductByPatch(productPatch).subscribe((res: ProductModel) => {
      if (!res) {
        this.router.navigate(['/404']);
      }
      this.selectedProduct = res;
      this.titleService.setTitle(res.title);
      this.categoryService.getCategoryByProductId(this.selectedProduct.id).subscribe((res: CategoryModel) => {
        this.itemCategory = res;
        this.categoryService.getCategoryItems(res.id).subscribe((res: ProductModel[]) => {
          this.relatedProducts = res.filter(product => product.id !== this.selectedProduct.id);
        });
      });
      this.initGallery();
    });
  }
  
  ngAfterViewInit(): void {
    setTimeout(() => {
      $('.css3-spinner').remove();
    } , 1500);
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
  
  getSetupPolicy(){
    return Array.from( this.selectedProduct.setupPolicy.keys() );
  }
  
  getPrice(nightPrice: number, minPrice: number, minTime: number, price: number){
    return this.locationService.getCalculation(nightPrice, minPrice, minTime, price);
  }
  
}
