import { Injectable } from '@angular/core';
import { Product } from '../model/product';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductListItemService {

  constructor() { }

  products: Product[];

  getProducts(categories: any): void{
    for(let category of categories){
    	console.log("category : ",category.name);
    };
    console.log(categories[0].name);
  }

}
