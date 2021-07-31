import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  login(data): Observable<any>{
    const returnurl = this.route.snapshot.queryParams.returnurl || '/';
    localStorage.setItem('returnurl', returnurl);
    return this.http.post(`https://localhost:44300/auth/login`, data);
  }
  register(data): Observable<any>{
    return this.http.post(`https://localhost:44300/auth/register`, data);
  }
  loggedIn(): any{
    return !!localStorage.getItem('token');
  }
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  }
  getToken(): any{
    return localStorage.getItem('token');
  }
  getUserInfo(): any{
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(this.getToken());
    return decodedToken;
  }
  isAdmin(): boolean{
    const role = this.getUserInfo().role;
    if (role === 'Customer'){
      return false;
    }
    return true;
  }
}
