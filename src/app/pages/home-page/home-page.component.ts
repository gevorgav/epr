import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryModel} from '../../shared/model/category.model';

declare var SEMICOLON: any;
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor(private router: Router,
              private categoryService: CategoryService) {
  }

  public categories: CategoryModel[] = [];

  ngOnInit() {
    this.initCategories();
  }
  
  ngAfterViewInit(): void {
    this.initGallery();
  }
  
  locationDateSubmitted(){
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
      , 1000);
    $('#linked-to-gallery a').click(function () {
      var imageLink = $(this).attr('data-image');
      $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
      return false;
    });
  }

  private initCategories() {
    this.categoryService.getCategories().subscribe(res=>{
      this.categories = res;
    })
  }

  public navigate(id: string, title: string){
    this.router.navigate(['/rentals', title], { queryParams: { id: id }} );
  }

  getClass(index: number) {
    if (index === 0 || index === 1 || index === 11 || index === 12) {
      return "col-lg-6";
    }

    return "col-lg-4";
  }
}
