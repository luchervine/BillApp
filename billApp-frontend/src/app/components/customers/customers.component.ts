import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from 'src/app/models/bill';
import { Customer } from 'src/app/models/customer';
import { BillService } from 'src/app/services/bill.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  //Listes
  customers: Customer[] = [];

  constructor(
    private customerService: CustomerService,
    private billService: BillService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getAllCustomers();
  }

  getAllCustomers() {
    this.customerService.getAll().subscribe(
      (data: any) => {
        this.customers = data._embedded.customers;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBills(c: Customer) {
    this.router.navigate(['/customer/' + c.id]);
  }
}
