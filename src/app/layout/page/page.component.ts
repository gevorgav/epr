import {AfterViewInit, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'assets/js/functions.js';
    document.body.appendChild(script);
  }

}
