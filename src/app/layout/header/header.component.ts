import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ParseService} from '../../shared/services/parse.service';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private parseService: ParseService) { }

  ngOnInit() {
  
  }
  
  isLogin(): boolean{
    return this.parseService.isAuth();
  }
  
  getIsAdmin(){
    return this.parseService.$isAdmin;
  }
  
  getCurrentUser(){
    return this.parseService.getCurrentUser().getUsername();
  }
  
  

}
