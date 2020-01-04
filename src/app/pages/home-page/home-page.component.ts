import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/model/category.model';
import {ProductService} from '../../shared/services/product.service';
import {ProductModel} from '../../shared/model/product.model';
import {map} from 'rxjs/operators';
import {LocationDateService} from '../../shared/services/location-date.service';

declare var SEMICOLON: any;
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor(private router: Router,
              private locationDateService: LocationDateService,
              private categoryService: CategoryService,
              private productService: ProductService) {
  }

  public categories: CategoryModel[] = [];

  public featuredRentalProducts: ProductModel[] = [];

  ngOnInit() {
    this.initCategories();
    this.initProducts();
  }

  ngAfterViewInit(): void {
    this.initGallery();
  }

  locationDateSubmitted() {
    this.router.navigate(['rentals']);
  }

  private initGallery() {
    setTimeout(() => {
        SEMICOLON.documentOnReady.init();
        setTimeout(() => {
          SEMICOLON.documentOnLoad.init();
          setTimeout(() => {
            SEMICOLON.documentOnResize.init();
            setTimeout(() => {
              SEMICOLON.widget.init();
              setTimeout(() => {
                $('.css3-spinner').remove();
              }, 10);
            }, 10);
          }, 10);
        }, 10);
      }
      , 1500);
    $('#linked-to-gallery a').click(function () {
      var imageLink = $(this).attr('data-image');
      $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
      return false;
    });
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

  private initProducts() {
    this.productService.getAllProducts().subscribe((res: ProductModel[]) => {
      this.initFeaturedRentalProducts(res);
    });
  }

  public isSpecified(){
    return this.locationDateService.isSpecified;
  }

  getPrice(nightPrice: number, minPrice: number, minTime: number, price: number){
    return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
  }

}
