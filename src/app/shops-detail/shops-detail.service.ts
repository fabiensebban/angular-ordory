import { Injectable, OnInit } from '@angular/core';
import { Shop } from '../model/shop';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopsDetailService {

  private shopDetailsURL = 'http://api.ordory.ml/shop/364378377';  // URL to web api

  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private http: Http
  ) { }

  //ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      */
  //}

  getShopDetails(): Promise<any> {
  console.log("entree method service");
    return this.http.get(this.shopDetailsURL, {headers:this.headers})
              .toPromise()
              .then(this.showDataHttp)
              .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('ERREUR SHOPS : ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private showDataHttp(shops: any): Promise<any>{
    console.log("Data Shops : ",JSON.parse(shops._body).data);
    return Promise.resolve(JSON.parse(shops._body).data);
  }

  goBack(): void {
    this.location.back();
  }
}
