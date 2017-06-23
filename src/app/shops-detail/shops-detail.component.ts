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

  constructor(
    private shopsDetailService: ShopsDetailService,
    private productListItemService: ProductListItemService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.shopsDetailService.getShopDetails(+params['id']))
      .subscribe((shop) => {
          this.shop = shop;
          this.setShopData(shop);
      });
  }

  setShopData(shop: any): void{
    this.setShopAddress(shop.address);
  }

  setShopAddress(address: Address): void {
    this.address = address;
  }

}
