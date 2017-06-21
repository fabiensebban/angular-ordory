import { Injectable, OnInit } from '@angular/core';
import { Shop } from '../model/shop';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ShopsDetailService {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  //ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      */
  //}

  goBack(): void {
    this.location.back();
  }
}
