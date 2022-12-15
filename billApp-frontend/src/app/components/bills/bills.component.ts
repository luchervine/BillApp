import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterStateSnapshot } from '@angular/router';
import { SecurityService } from 'src/app/help/guards/security.service';
import { Bill } from 'src/app/models/bill';
import { Customer } from 'src/app/models/customer';
import { ProductItem } from 'src/app/models/productItem';
import { BillService } from 'src/app/services/bill.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css'],
})
export class BillsComponent implements OnInit {
  //Listes
  products: ProductItem[] = [];

  //Objets
  customer?: Customer;

  //Variables
  customer_id!: number;

  constructor(
    private securityService: SecurityService,
    private billService: BillService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customer_id = this.route.snapshot.params['customer_id'];
    console.log('paramID : ', this.customer_id);
    this.getBills();
  }

  getBills() {
    this.billService.getAll().subscribe(
      (response: any) => {
        response.forEach((b: Bill) => {
          if (b.customer_id == this.customer_id) {
            this.products = b.productItems;
            this.customer = b.customer;
          }
        });
        console.log('response : ', response);
        console.log('bills : ', this.products);
      },
      (err) => {
        console.log('errgetBills : ', err);
      }
    );
  }

  gotoBilling() {
    localStorage.setItem('customer_id', this.customer_id.toString());
    if (this.securityService.hasRoleIn(['ADMIN']))
      this.router.navigate(['billing']);
    else this.showAlerte();
  }

  logout() {
    this.securityService.kcService.logout(window.location.origin);
  }

  showAlerte() {
    alert("Vous n'êtes pas habileté à effectuer cette action!");
  }
}
