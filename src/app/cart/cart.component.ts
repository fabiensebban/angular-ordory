import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart';
import { CartService } from './cart.service';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [CartService, Cart]
})

export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private cart: Cart
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.cartService.getCart(+params['id']))
      .subscribe((cart) => {
        this.cart = cart;
        this.cart.id = this.getRandomNumber();
        //console.log('ici cart', this.cart);
      });
  }

  private getRandomNumber(): number{
    return Math.floor(Math.random() * 999999999);
  }

}
