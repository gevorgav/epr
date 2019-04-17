import {AfterViewInit, Component, OnInit} from '@angular/core';

declare var SEMICOLON: any;
declare var $: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  constructor() {
  }
  
  ngOnInit() {
  }
  
  ngAfterViewInit(): void {
    this.initGallery();
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
}
