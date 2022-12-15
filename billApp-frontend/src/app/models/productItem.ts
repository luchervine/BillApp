import { Bill } from './bill';
import { Product } from './product';

export class ProductItem {
  id!: number;
  quantity!: number;
  price!: number;
  product_id?: number;
  product_name?: string;
  bill?: Bill;
  product?: Product;
}
