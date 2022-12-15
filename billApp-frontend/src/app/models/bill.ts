import { Customer } from './customer';
import { ProductItem } from './productItem';

export class Bill {
  id!: number;
  billingDate?: Date;
  productItems!: ProductItem[];
  customer_id?: number;
  customer?: Customer;
}
