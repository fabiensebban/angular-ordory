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
  providers: [ShopsDetailService]
})
export class ShopsDetailComponent implements OnInit {

  shop: Shop;
  address: Address;
  shopTmp =  {};

  constructor(
    private shopsDetailService: ShopsDetailService
  ) { }

  getShopDetails(): void {
    this.shopsDetailService.getShopDetails().then(shop => this.setShopData(shop));
    //this.shopsDetailService.getShopDetails().then(shop => this.shop = shop);

  }

  ngOnInit(): void {
    /*this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
      */
      this.getShopDetails();
      console.log("this.shop :", this.shop);
  }

  setShopData(shop: Shop): void{
    this.shopTmp = shop;
    console.log("shopTmp : ",this.shopTmp);
  }

}
