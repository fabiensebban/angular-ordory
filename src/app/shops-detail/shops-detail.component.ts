import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Shop } from '../model/shop';
import { ShopsDetailService } from './shops-detail.service';
import 'rxjs/add/operator/switchMap';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-shops-detail',
  templateUrl: './shops-detail.component.html',
  styleUrls: ['./shops-detail.component.css'],

})
export class ShopsDetailComponent implements OnInit {

  shops: Shop[];

  ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      */
  }

}
