import { Component, OnInit } from '@angular/core';
import { Shop } from '../model/shop';
import {Router} from '@angular/router';
import { ShopsService } from './shops.service';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css'],
  providers: [ShopsService]
})
export class ShopsComponent implements OnInit {
  title = "Liste des Shops !";
  shops: Shop[];
  selectedShop: Shop;

  constructor(
    private shopsService: ShopsService,
    private router : Router
  ) { }

  ngOnInit() {
    this.getShopDetails();
  }

  getShopDetails(): void {
    this.shopsService.getShops().then(shops => this.shops = shops);
  }


}
