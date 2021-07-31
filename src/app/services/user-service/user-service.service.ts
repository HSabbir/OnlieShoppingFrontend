import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const baseurl = 'https://localhost:44300/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }
  getAllUser(): Observable<any>{
    return this.httpClient.get(baseurl);
  }
  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseurl}/${id}`);
  }
  changeRole(data): Observable<any> {
    if (data.role === 'Customer'){
      data.role = 'Admin';
    }else{
      data.role = 'Customer';
    }
    return this.httpClient.put(baseurl, data, this.httpOptions);
  }
}
