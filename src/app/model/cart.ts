import { Product } from '../model/product';

export class Cart {
  id: number;
  sessionID: string;
  userID: string;
  products: Product[];
}
