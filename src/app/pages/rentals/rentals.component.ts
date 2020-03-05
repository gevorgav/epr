import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, ResolveEnd, Router} from '@angular/router';
import {RoutingService} from '../../shared/services/routing.service';
import {CategoryModel} from '../../shared/model/category.model';
import {CategoryService} from '../../shared/services/category.service';
import {map} from 'rxjs/operators';
import {LocationDateService} from '../../shared/services/location-date.service';
import {Meta, Title} from '@angular/platform-browser';
import {zip} from 'rxjs';


@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit, AfterViewInit {

  public categories: CategoryModel[] = [];
  public activeCategory: CategoryModel;
  private title$ = this.route.paramMap;

  constructor(private router: Router,
              private routingService: RoutingService,
              private route: ActivatedRoute,
              private titleService: Title,
              private metaService: Meta,
              private categoryService: CategoryService,
              private locationDateService: LocationDateService) {
  }

  ngOnInit() {
    zip(this.categoryService.getCategoriesWithDependency().pipe(
      map(arr => arr.sort((a, b) => {
        return a.order - b.order;
      }))
    ), this.getPathParam()).subscribe(res => {
      this.categories = res[0];
      if (res[1]){
        this.categories.forEach(value => {
          if (value.pathParam === res[1])
            this.activeCategory = value;
        })
      }else {
        this.navigate(res[0][0].id, res[0][0].pathParam);
      }
      this.subscribeAndInit();
    });
  }

  private getPathParam() {
    return this.title$.pipe(map((params: ParamMap) => {
      return params.get('title');
    }));
  }

  categoryOnClick(category: CategoryModel) {
    this.navigate(category.id, category.pathParam);
    this.activeCategory = category;
  }

  activeCategoryStyle(category: CategoryModel) {
    if (category === this.activeCategory) {
      return 'active-filter';
    }
    return '';
  }

  ngAfterViewInit(): void {
  }

  public navigate(id: string, title: string) {
    this.router.navigate(['/rentals', title]);
    this.routingService.itemIdSubject.next(id);
  }

  subscribeAndInit() {
    this.initCategory();
    this.router.events.subscribe(res => {
      if (res instanceof ResolveEnd && res.url.indexOf('/rentals/') > -1) {
        this.initCategory(res);
      }
    });
  }

  private initCategory(routs?: ResolveEnd) {
    let pathParam = routs ? routs.urlAfterRedirects.replace('/rentals/', '') : this.route.snapshot.params['id'];

    this.categories.forEach((value: CategoryModel) => {
      if (value.pathParam === pathParam) {
        this.activeCategory = value;
        this.titleService.setTitle(value.title);
        this.metaService.addTag({ name: 'description', content: value.metaDescription });
      }
    });
  }

  getPrice(nightPrice: number, minPrice: number, minTime: number, price: number){
    return this.locationDateService.getCalculation(nightPrice, minPrice, minTime, price);
  }

  public isSpecified(){
    return this.locationDateService.isSpecified;
  }

}
