import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, ResolveEnd, Router} from '@angular/router';
import {RoutingService} from '../../shared/services/routing.service';
import {CategoryModel} from '../../shared/model/category.model';
import {CategoryService} from '../../shared/services/category.service';

declare var SEMICOLON: any;
declare var $: any;

declare var priceNum: any;
declare var parseFloat: any;
declare var elementFilterCount: any;


@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit, AfterViewInit {

  public categories: CategoryModel[] = [];
  public activeCategory: CategoryModel;

  constructor(private router: Router,
              private routingService: RoutingService,
              private route: ActivatedRoute,
              private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.categoryService.getCategoriesWithDependency().subscribe(res => {
      this.categories = res;
      this.activeCategory = res[0];
      this.subscribeAndInit();
    });
  }

  categoryOnClick(category: CategoryModel) {
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
    this.router.navigate(['/rental', title]);
    this.routingService.itemIdSubject.next(id);
  }

  subscribeAndInit(){
    this.initCategory();
    this.router.events.subscribe(res => {
      if (res instanceof ResolveEnd && res.url.indexOf('/rentals/') > -1) {
        this.initCategory(res);
      }
    });
  }

  private initCategory(routs?: ResolveEnd) {
    let categoryId = routs ? routs.urlAfterRedirects.replace("/rentals/","") :this.route.snapshot.params['id'];

    this.categories.forEach((value: CategoryModel) => {
      if (value.id === categoryId) {
        this.activeCategory = value;
      }
    });
  }

}
