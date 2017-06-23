import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../model/cart'

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.css'],
  providers: [CartService]
})
export class CartIconComponent implements OnInit {

  cartId = localStorage.getItem("cartId");
  cartCountItems = localStorage.getItem("cartCountItems");
  cart: Cart[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    if (this.cartId == null)
    {
      this.cartId = "0";
      this.cartCountItems = "0";
    }
    else
    {
      this.cartService.getCart(+this.cartId)
                      .then((cart) => {
                        console.log("this is the CART", cart);
                        //localStorage.setItem("cartCountItems", this.cart)
                      });
    }
  }

}
