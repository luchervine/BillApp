import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Bill } from '../models/bill';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll() {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get(this.apiUrl + 'BILLING-SERVICE/fullbill', {
      headers: headers,
    });
  }

  getById(id: number) {
    const headers = { 'Content-type': 'application/json' };
    return this.http.get<Bill>(this.apiUrl + 'BILLING-SERVICE/fullbill/' + id, {
      headers: headers,
    });
  }
}
