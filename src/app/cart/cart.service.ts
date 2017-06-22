import { Injectable, OnInit } from '@angular/core';
import { Cart } from '../model/cart';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CartService {
  private cartUrl = 'http://api.ordory.ml/cart/';  // URL to web api
  // Allowing CORS
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: Http) { }

  getCart(id: number): Promise<Cart> {
    // requestURL = http://api.ordory.ml/cart/[Cart ID]
    var requestURL = this.cartUrl + id;
    return this.http.get(requestURL, {headers:this.headers})
             .toPromise()
             .then(this.cartDataHttp)
             .catch(this.handleError);
  }

  private cartDataHttp(data: any): any{
    console.log("Data received from Cart Web Service ", JSON.parse(data._body).data);
    return Promise.resolve(JSON.parse(data._body).data);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
