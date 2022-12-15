import { Component, OnInit } from '@angular/core';
import { NombreEnLettre } from 'src/app/help/nombre_en_lettre';
import { Bill } from 'src/app/models/bill';
import { Customer } from 'src/app/models/customer';
import { Product } from 'src/app/models/product';
import { ProductItem } from 'src/app/models/productItem';
import { BillService } from 'src/app/services/bill.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-bill-details',
  templateUrl: './bill-details.component.html',
  styleUrls: ['./bill-details.component.css'],
})
export class BillDetailsComponent implements OnInit {
  //Listes
  clients: Customer[] = [];
  products: ProductItem[] = [];

  //Objets
  bill: Bill = new Bill();
  customer?: Customer;
  //inscription: Inscription;
  letter: NombreEnLettre = new NombreEnLettre();

  //Variables
  customer_id!: number;
  tht!: number;
  ttc!: number;
  tva!: any;
  nbr!: number;
  num_facture!: number;
  type: string = '';
  montant_en_lettre!: string;

  constructor(
    private customerService: CustomerService,
    private billService: BillService
  ) {}

  ngOnInit(): void {
    this.customer_id = Number(localStorage.getItem('customer_id'));
    this.getBills();
    //this.somme();
  }

  somme() {
    let prix = 0;
    let prixtaxe = 0;
    this.products.forEach((p) => {
      prixtaxe += p.price * p.quantity;
      p.price = p.price - p.price * 0.2;
      prix += p.price * p.quantity;
    });
    this.tht = prix;
    this.ttc = prixtaxe;
    this.tva = this.ttc * 0.2;
    this.montant_en_lettre = this.letter.numberToLetter(~~this.ttc);
    console.log('montant en lettre: ', this.montant_en_lettre);
  }

  inscrire() {}

  getBills() {
    this.billService.getAll().subscribe(
      (response: any) => {
        response.forEach((b: Bill) => {
          if (b.customer_id == this.customer_id) {
            this.products = b.productItems;
            this.customer = b.customer;
            this.bill = b;
          }
          this.somme();
        });
        console.log('response : ', response);
        console.log('bills : ', this.products);
      },
      (err) => {
        console.log('errgetBills : ', err);
      }
    );
  }
}
