import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
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
export class RentalsComponent implements OnInit, AfterViewInit{

  public categories : CategoryModel[] = [];
  private activeCategory: CategoryModel;
  
  constructor(private router: Router,
              private routingService: RoutingService,
              private categoryService: CategoryService) { }

  ngOnInit() {
    this.categoryService.getCategoriesWithDependency().subscribe(res=>{
      this.categories = res;
      this.activeCategory = res[0];
    })
  }
  
  categoryOnClick(category: CategoryModel){
    this.activeCategory = category;
  }
  
  activeCategoryStyle(category: CategoryModel){
    if (category === this.activeCategory){
      return 'active-filter';
    }
    return '';
  }
  
  ngAfterViewInit(): void {
    this.initGallery();
  }
  
  private initGallery() {
  
  }
  
  public navigate(id: string, title: string){
    this.router.navigate(['/rental', title] );
    this.routingService.itemIdSubject.next(id);
  }

}
