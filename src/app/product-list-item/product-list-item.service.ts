import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductListItemService {

  constructor() { }

  products: Product[];
  categories: Category[];

  setProducts(categories: any){
    this.categories = categories;
    console.log("categories name : ",this.categories[0].name);
  }

  getProducts(): Promise<Category[]> {
    /*for(let category of categories){
    	console.log("category : ",category.name);
    };*/
    return Promise.resolve(this.categories);
  }

}
