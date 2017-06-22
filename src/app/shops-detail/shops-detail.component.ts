import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Shop } from '../model/shop';
import { Address } from '../model/address'
import { ShopsDetailService } from './shops-detail.service';
import { ProductListItemService } from '../product-list-item/product-list-item.service';
import 'rxjs/add/operator/switchMap';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-shops-detail',
  templateUrl: './shops-detail.component.html',
  styleUrls: ['./shops-detail.component.css'],
  providers: [ShopsDetailService, ProductListItemService]
})
export class ShopsDetailComponent implements OnInit {

  shop: Shop;
  address: Address;
  shopTmp =  {};

  constructor(
    private shopsDetailService: ShopsDetailService,
    private productListItemService: ProductListItemService
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

  setShopData(shop: any): void{
    this.shopTmp = shop;
    this.setShopAddress(shop.address);
    //this.productListItemService.getProducts(shop.categories);
  }

  setShopAddress(address: Address): void {
    this.address = address;
    console.log("address : ",this.address.city);
  }

}
