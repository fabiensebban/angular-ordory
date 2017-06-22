import { Address } from '../model/address';
import { Product } from '../model/product';

export class Shop {
  id: int;
  name: string;
  address: Address;
  products: Product[];
}
