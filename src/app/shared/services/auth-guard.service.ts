// src/app/auth/auth-guard.service.ts
import {Injectable} from '@angular/core';
import {Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {ParseService} from './parse.service';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public parse: ParseService, public router: Router) {
  }
  
  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.parse.isAuth()) {
      this.parse.$isAdmin.asObservable().subscribe((res) => {
        if (res) {
          return true;
        } else {
          this.router.navigate(['home']);
          return false;
        }
      });
    }else {
      return false;
    }
  }
  
}
