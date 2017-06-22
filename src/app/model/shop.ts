import { Address } from '../model/address';
import { Type } from '../model/type';
import { Product } from '../model/product';

export class Shop {
  id: number;
  name: string;
  address: Address;
  type: Type;
}
