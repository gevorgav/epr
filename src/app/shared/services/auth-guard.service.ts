// src/app/auth/auth-guard.service.ts
import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree} from '@angular/router';
import {ParseService} from './parse.service';
import {Observable} from 'rxjs/internal/Observable';
import {of} from 'rxjs/internal/observable/of';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private parse: ParseService, public router: Router) {
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.parse.isAuth()) {
      return this.parse.initAdmin()
    }else {
      this.router.navigate(['home']);
      return of(false);
    }
  }
}

@Injectable()
export class AuthGuardLoginService implements CanActivate {
  constructor(private parse: ParseService, public router: Router) {
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.parse.isAuth()) {
      this.router.navigate(['home']);
      return of(false)
    }else {
      return of(true);
    }
  }
}
