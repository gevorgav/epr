import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, NavigationStart, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {map, switchMap} from 'rxjs/operators';
import {LocationDateService} from '../../shared/services/location-date.service';
import {RoutingService} from '../../shared/services/routing.service';
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
              private locationService: LocationDateService,
              private route: ActivatedRoute,
              private router: Router,
              private routingService: RoutingService) { }

  ngOnInit() {
    this.getRouteParams();
    this.title$.subscribe();
    this.route.queryParams.subscribe(res=>{
      this.itemId = (+res['id'] || 0);
    });
    this.routingService.itemIdSubject.subscribe(res=>{
      console.log(res);
    });
  }

  ngAfterViewInit(): void {
    this.router.events.subscribe(res=>{
      if (res instanceof NavigationEnd){
        if (res.url === "/home" || res.url === "/" || res.url === "" || res.url.indexOf("/rental/") > -1){
          this.initGallery();
        }
      }
    })
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
    setTimeout(() => {
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
                  $('#linked-to-gallery a').click(function() {
                    var imageLink = $(this).attr('data-image');
                    $('#oc-images').trigger('to.owl.carousel', [Number(imageLink) - 1, 300, true]);
                    return false;
                  });
                }, 10);
              }, 10);
            }, 10);
          }, 10);
        }
        , 10);
    }, 100);

  }
}
