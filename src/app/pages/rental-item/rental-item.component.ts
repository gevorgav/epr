import {AfterViewInit, Component, OnInit} from '@angular/core';
declare var SEMICOLON:any;
declare var $: any;

@Component({
  selector: 'app-rental-item',
  templateUrl: './rental-item.component.html',
  styleUrls: ['./rental-item.component.css']
})
export class RentalItemComponent implements OnInit , AfterViewInit{

  public reviewsCount: number = 4;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
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
