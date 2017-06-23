import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Shop } from './model/shop';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopService {

  baseUrl = 'http://api.ordory.ml/shops';  //API url

  //headers params
  headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: Http) {}

  getShopsByAddress(address): Promise<Shop[]> {
    let fullUrl = this.baseUrl.concat('?radius=5&address=').concat(address);//radius == 5km TODO implement radius
    return this.http.get(fullUrl, {headers:this.headers})
                    .toPromise()
                    .then(this.setData)
                    .catch(this.handleError);
  }

  private setData(shops): Promise<Shop[]> {
    return Promise.resolve(JSON.parse(shops._body).data);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERREUR SHOPS : ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
