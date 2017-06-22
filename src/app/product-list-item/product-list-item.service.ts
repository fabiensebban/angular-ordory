import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductListItemService {

  private heroesUrl = 'http://api.ordory.ml/cart';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: Http) { }

  products: Product[];
  categories: Category[];

  setProducts(categories: any){
    this.categories = categories;
  }

  getProducts(): Promise<Category[]> {
    /*for(let category of categories){
    	console.log("category : ",category.name);
    };*/
    return Promise.resolve(this.categories);
  }

  addProductToCart(id: number): Promise<any>{
    let jsonObj = {
                    "cart": {
                      "sessionID": "S003890X",
                      "shop_id": 733787468,
                      "user_id": null,
                      "product_id": id,
                      "menu": null
                    }
                  };

    return this.http.post(this.heroesUrl, jsonObj, {headers:this.headers})
               .toPromise()
               //.then(response => response.json().data as Hero[])
               .then(this.showDataHttp)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private showDataHttp(data: any): Promise<any>{
    console.log("Data Received : ",JSON.parse(data._body));
    return Promise.resolve(JSON.parse(data._body));
  }

}
