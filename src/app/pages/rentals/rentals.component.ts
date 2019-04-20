import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RoutingService} from '../../shared/services/routing.service';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent implements OnInit {

  constructor(private router: Router,
              private routingService: RoutingService) { }

  ngOnInit() {
  }
  
  public navigate(id: string, title: string){
    this.router.navigate(['/rental', title] );
    this.routingService.itemIdSubject.next(id);
  }

}
