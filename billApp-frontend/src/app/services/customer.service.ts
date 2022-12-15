import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get(this.apiUrl + 'CUSTOMER-SERVICE/customers', {
      headers: headers,
    });
  }

  getById(id: number) {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get<Customer>(
      this.apiUrl + 'CUSTOMER-SERVICE/customers/' + id,
      {
        headers: headers,
      }
    );
  }
}
