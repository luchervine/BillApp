import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Bill } from 'src/app/models/bill';
import { Customer } from 'src/app/models/customer';
import { BillService } from 'src/app/services/bill.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css'],
})
export class AddBillComponent implements OnInit {
  //Listes
  customers: Customer[] = [];

  //Objets
  customer: Customer = new Customer();
  bill: Bill = new Bill();
  selectedValue?: string;

  constructor(
    private customerService: CustomerService,
    private billService: BillService
  ) {}

  ngOnInit(): void {
    this.getCustomers();
  }

  onSubmit(form: NgForm) {
    this.addBill();
    console.log(this.bill);
  }

  getCustomers() {
    this.customerService.getAll().subscribe((resp: any) => {
      console.log('resp: ', resp);
      console.log('RespCusto: ', resp._embedded.customers);
      this.customers = resp._embedded.customers;
      console.log('Customers: ', this.customers);
    });
  }

  addBill() {
    this.billService.add(this.bill).subscribe((resp: Bill) => {
      if (resp) {
        console.log('Bill ajouté: ', resp);
        this.getCustomers();
      }
    });
  }

  customerSelected(customer: Customer) {}
}
