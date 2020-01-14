import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  public fixHeader: boolean = false;

  public top: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let pos = window.pageYOffset;
    this.fixHeader = pos > 100;
    this.top = pos > 400;
  }

  ngOnInit() {
  }

}
