import { Injectable } from '@angular/core';
import { Shop } from '../model/shop';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopDetailService {

  private heroesUrl = 'http://api.ordory.ml/shop/364378377';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: Http) { }

  getShopDetails(): Promise<Shop[]> {
    //return Promise.resolve(HEROES);
   return this.http.get(this.heroesUrl, {headers:this.headers})
             .toPromise()
             //.then(response => response.json().data as Shop[])
             .then(this.showDataHttp)
             .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private showDataHttp(data: any): Promise<any>{
    console.log("Data Received : ",data);
    return Promise.resolve(data);
  }

}
