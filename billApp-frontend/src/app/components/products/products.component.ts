import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  //Listes
  products: Product[] = [];

  //Objets
  product: Product = new Product();

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAll().subscribe({
      next: (data: any) => {
        this.products = data._embedded.products;
        console.log('products: ', this.products);
      },
      error: (err) => {
        console.warn('erre: ', err);
      },
    });
  }
  getOne(id: number) {
    this.productService.getById(id).subscribe((data: any) => {
      this.product = data;
    });
  }
}
