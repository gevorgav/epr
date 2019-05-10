import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: DashboardItem[] = [
    {routerLink: 'product', name: 'Product', isActive: true},
    {routerLink: 'delivery-chart', name: 'Delivery Chart', isActive: false},
    {routerLink: 'category', name: 'Category', isActive: false},
    {routerLink: 'user', name: 'User', isActive: false},
  ];

  searchValue: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectTab(this.items[0])
  }

  selectTab(item: DashboardItem): void {
    this.items.forEach(item => item.isActive = false);
    item.isActive = true;
    this.router.navigate([item.routerLink],{relativeTo: this.activatedRoute});
  }
}

interface DashboardItem {
  routerLink: string;
  name: string;
  isActive: boolean;
}
