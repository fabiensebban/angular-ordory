import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductListItemService {

  constructor() { }

  products: Product[];
  categories: Category[];

  getProducts(categories: any): void{
    this.categories = categories;
    /*for(let category of categories){
    	console.log("category : ",category.name);
    };*/
    console.log("categories name : ",this.categories[0].name);
  }

}
