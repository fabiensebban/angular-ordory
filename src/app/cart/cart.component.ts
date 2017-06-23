import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from './cart.service';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }     from '@angular/common';

import 'rxjs/add/operator/switchMap';
import * as _ from "lodash";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, Cart]
})

export class CartComponent implements OnInit {
products:any;
  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private cart: Cart,
    private location: Location
  ) { }

  valuesToArray (table) {
    return Object.keys(table).map(function (key) {
      return table[key];
    });
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.cartService.getCart(+params['id']))
      .subscribe((cart) => {
        //this.cart.products = cart.products;
        this.cart.sessionID = cart.sessionID;
        this.cart.userID = cart.userID;
        this.cart.products = _.mapValues(_.groupBy(cart.products, 'id'));
        //cart = this.cart;
        this.products = this.valuesToArray(this.cart.products);
        console.log('Cart in component: ', this.products, this.cart.products.length);
      });
  }

  goBack():void {
    this.location.back();
  }

}
