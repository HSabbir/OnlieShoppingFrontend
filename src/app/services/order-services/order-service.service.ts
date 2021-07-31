import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const baseURL = 'https://localhost:44300/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }
  addOrder(data): Observable<any>{
    data.totalprice = parseFloat(data.totalprice);
    console.log(data);
    return this.httpClient.post(baseURL, data, this.httpOptions);
  }
  getAllOrder(): Observable<any>{
    return this.httpClient.get(baseURL);
  }
  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }
  getSingleOrder(): Observable<any>{
    return this.httpClient.get(`${baseURL}/${1}`);
  }
}
