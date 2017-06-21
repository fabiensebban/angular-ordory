import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ShopsService {

  private heroesUrl = 'http://api.ordory.ml/shops?lat=latitude&long=longitude&radius=5&address=17, rue de charenton, Paris 12';  // URL to web api
  private headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
  });

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl, {headers:this.headers})
             .toPromise()
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
