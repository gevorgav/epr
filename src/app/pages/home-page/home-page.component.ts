import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/model/category.model';
import {ProductService} from '../../shared/services/product.service';
import {ProductModel} from '../../shared/model/product.model';
import {map} from 'rxjs/operators';
import {LocationDateService} from '../../shared/services/location-date.service';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {SettingsService} from '../../shared/services/settings.service';
import {SettingsModel} from '../../shared/model/settings.model';
import {Meta, Title} from '@angular/platform-browser';
import { of } from 'rxjs';
import {SeoTagHttpService} from '../../shared/services/seo-tag-http.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor(private router: Router,
              private titleService: Title,
              private metaService: Meta,
              private locationDateService: LocationDateService,
              private categoryService: CategoryService,
              private productService: ProductService,
              private settingsService: SettingsService,
              private seoService: SeoTagHttpService) {
    this.seoService.getHomePageSeo().subscribe(res => {
      this.titleService.setTitle(res.title);
      this.metaService.updateTag({name: 'description', content: res.description});
    });
  }

  public customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    merge: true,
    lazyLoad: true,
    autoWidth: true,
    margin: 5,
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
        items: 4
      }
    },
    nav: true
  };

  settings: SettingsModel;

  public categories: CategoryModel[] = [];

  public screenHeight: number;

  public featuredRentalProducts: ProductModel[] = [];
  public sliderIndex = 0;
  public sliderReady: boolean = false;
  public showLocationDate: boolean = false;
  public isMobile: boolean = false;

  private maxImages = 0;

  ngOnInit() {
    this.initCategories();
    this.initProducts();
    this.initSettings();
    if (window.innerWidth && window.innerWidth < 990) {
      this.isMobile = true;
    }
  }

  ngAfterViewInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
  }

  locationDateSubmitted() {
    this.router.navigate(['rentals']);
  }

  private initCategories() {
    this.categoryService.getCategoriesWithDependency().pipe(
      map((arr: CategoryModel[]) => arr.sort((a, b) => {
        return a.order - b.order;
      }))
    ).subscribe(res => {
      this.categories = res;
    });
  }

  private initFeaturedRentalProducts(res: ProductModel[]) {
    res.forEach((product: ProductModel) => {
      if (product.isNew || product.isHotDeal) {
        this.featuredRentalProducts.push(product);
      }
    });
  }

  public navigate(id: string, title: string) {
    this.router.navigate(['/rentals', title], {queryParams: {id: id}});
  }

  getClass(index: number) {
    if ((index === 0 || index === 1 || index === 11 || index === 12)
      && this.categories.length % 3 !== 0) {
      return 'col-lg-6';
    }

    return 'col-lg-4';
  }

  getProductLabel(product: ProductModel): string {
    if(product.isNew){
      return 'New !';
    } else if(product.isHotDeal){
      return 'Hot Deal !';
    }
    return '';
  }

  private initProducts() {
    this.productService.getAllProducts().then((res: ProductModel[]) => {
      this.initFeaturedRentalProducts(res);
    });
  }

  public isSpecified(){
    return this.locationDateService.isSpecified;
  }

  getPrice(nightPrice: number, minPrice: number, minTime: number, price: number){
    this.isSpecified().pipe(
      map(res => {
        if (res) {
          return '$ ' +this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
        } else{
          return of('')
        }
      })
    )
  }

  public getScreenHeight() {
    return this.screenHeight - 80;
  }

  private initImage() {
    this.sliderIndex++;
    if (this.sliderIndex > this.maxImages)
      this.sliderIndex = 1;
    setTimeout(()=>this.initImage(), 7000);
  }


  private initSettings() {
    this.settingsService.getSettings().then(res=>{
      this.settings = res;
      this.initImage();
      let i = 1;
      while (this.settings['imageUrl'+i]){
        this.maxImages ++;
        i++;
      }
      this.sliderReady = true;
    });
  }
}
