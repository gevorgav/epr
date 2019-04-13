import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  public navigate(id: number, title: string){
    this.router.navigate(['/rental', title], { queryParams: { id: id }} );
  }

}
