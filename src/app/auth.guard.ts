import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthServiceService} from './services/auth-service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthServiceService,
              private router: Router) {
  }
  canActivate(route, state: RouterStateSnapshot): boolean {
    if (this.authservice.loggedIn()){
      return true;
    }else {
      this.router.navigate(['/login'], {queryParams: {returnurl: state.url}});
      return false;
    }
  }

}
