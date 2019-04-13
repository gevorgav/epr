import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {map, switchMap} from 'rxjs/operators';
declare var SEMICOLON:any;
declare var $: any;

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.css']
})
export class RentalItemComponent implements OnInit , AfterViewInit{

  public reviewsCount: number = 4;
  private title$: Observable<any>;
  private itemId: number;

  constructor(private titleService: Title,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.getRouteParams();
    this.title$.subscribe();
    this.route.queryParams.subscribe(res=>{
      this.itemId = (+res['id'] || 0);
    })
  }

  ngAfterViewInit(): void {
    this.initGallery();
  }
  
  private getRouteParams() {
    this.title$ = this.route.paramMap.pipe(
      map((params: ParamMap) =>
        this.titleService.setTitle(params.get('title')))
    );
  }
  
  public navigate(id: number, title: string){
    this.router.navigate(['/rental', title], { queryParams: { id: id }} );
  }
  
  private initGallery() {
    setTimeout(()=>{
      SEMICOLON.widget.init();
    },1000);
    $('#linked-to-gallery a').click(function() {
      var imageLink = $(this).attr('data-image');
      $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
      return false;
    });
  }
}
