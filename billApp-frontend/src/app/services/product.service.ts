import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get(this.apiUrl + 'PRODUCT-SERVICE/products', {
      headers: headers,
    });
  }

  getById(id: number) {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get<Product>(
      this.apiUrl + 'PRODUCT-SERVICE/products/' + id,
      {
        headers: headers,
      }
    );
  }
}
