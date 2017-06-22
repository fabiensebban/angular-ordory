import { Injectable } from '@angular/core';
import { Product } from '../model/product';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductListItemService {

  constructor() { }

  products: Product[];

  getProducts(data: any): void{
    console.log(data[0].name);
  }

}
