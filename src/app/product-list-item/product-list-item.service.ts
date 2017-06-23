import { Injectable } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ProductListItemService {

  private cartUrl = 'http://api.ordory.ml/cart';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(
    private http: Http,
    private route: ActivatedRoute
  ) { }

  products: Product[];
  categories: Category[];

  setProducts(categories: any){
    this.categories = categories;
  }

  getProducts(): Promise<Category[]> {
    return Promise.resolve(this.categories);
  }

  addProductToCart(product_id: number, shop_id: number): Promise<any>{
    //If session ID exxists, use it to add products to existing cart
    var sessionID = localStorage.getItem("sessionID");

    let jsonObj = {
                    "cart": {
                      "sessionID": sessionID === "undefined"? null : sessionID ,
                      "shop_id": shop_id,
                      "user_id": null,
                      "product_id": product_id,
                      "menu_id": null
                    }
                  };

    return this.http.post(this.cartUrl, jsonObj, {headers:this.headers})
               .toPromise()
               .then(this.showDataHttp)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private showDataHttp(data: any): Promise<any>{
    console.log("Data Received in -- add product to cart -- : ",JSON.parse(data._body).data.sessionID);
    let sessionID = localStorage.getItem("sessionID");

    if(sessionID === "undefined")
    {
      localStorage.setItem("sessionID", JSON.parse(data._body).data.sessionID);
      localStorage.setItem("cartId", JSON.parse(data._body).data.id);  
    }
    return Promise.resolve(JSON.parse(data._body));
  }
}
