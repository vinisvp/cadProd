import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = "http://localhost:3000/product";

  constructor(private http:HttpClient) { }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url);
  }
}
