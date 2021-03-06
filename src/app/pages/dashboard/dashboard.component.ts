import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: DashboardItem[] = [
    {routerLink: 'shipping', name: 'Rental requests', isActive: true},
    {routerLink: 'shipped', name: 'Shipped Rentals', isActive: false},
    {routerLink: 'product', name: 'Product', isActive: false},
    {routerLink: 'delivery-chart', name: 'Delivery Chart', isActive: false},
    {routerLink: 'category', name: 'Category', isActive: false},
    {routerLink: 'settings', name: 'Settings', isActive: false},
    {routerLink: 'user', name: 'User', isActive: false},
    {routerLink: 'additional', name: 'Additional', isActive: false},
    {routerLink: 'additional-category', name: 'Additional Category', isActive: false},
  ];

  searchValue: string;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectTab(this.items[0])
  }

  selectTab(item: DashboardItem): void {
    this.setFalse();
    item.isActive = true;
    this.router.navigateByUrl('dashboard/'+item.routerLink);
  }

  private setFalse() {
    this.items.forEach(value => value.isActive = false)
  }
}

interface DashboardItem {
  routerLink: string;
  name: string;
  isActive: boolean;
}
