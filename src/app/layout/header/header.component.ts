import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ParseService} from '../../shared/services/parse.service';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , AfterViewInit{

  public isAdmin: boolean = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private parseService: ParseService) { }

  ngOnInit() {
    this.parseService.isAdmin().subscribe(isAdmin => {
      this.isAdmin = isAdmin;
    })
    this.parseService.$loginSubject.subscribe(res=>{
      if (res === false){
        this.isAdmin = res;
      } else {
        this.parseService.isAdmin().subscribe(isAdmin => {
          this.isAdmin = isAdmin;
        })
      }
    })
  }

  ngAfterViewInit(): void {}
  
  isLogin(): boolean{
    return this.parseService.isAuth();
  }
  
  getCurrentUser(){
    return this.parseService.getCurrentUser().getUsername();
  }
  
  logout(){
    this.parseService.logOut().subscribe(res=>{
      this.router.navigate(["login"]);
    })
  }

}
