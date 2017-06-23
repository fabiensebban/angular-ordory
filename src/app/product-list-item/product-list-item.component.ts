import { Component, OnInit } from '@angular/core';
import { ProductListItemService } from './product-list-item.service';
import { Category } from '../model/category';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Params }   from '@angular/router';
import { ShopsDetailService } from '../shops-detail/shops-detail.service';
import { Shop } from '../model/shop';
import { Product } from '../model/product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
  providers: [ProductListItemService, ShopsDetailService, CartService]
})
export class ProductListItemComponent implements OnInit {
  shop: Shop;
  categories: Category[];
  cartId = localStorage.getItem("cartId");
  constructor(
    private productListItemService: ProductListItemService,
    private shopsDetailService: ShopsDetailService,
    private cartService: CartService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.shopsDetailService.getShopDetails(+params['id']))
      .subscribe((shop) => {
          this.shop = shop;
          this.categories = shop.categories;
      });
  }

  onSelectProduct(product: Product): void{
    this.productListItemService.addProductToCart(product.id, this.shop.id)
                               .then(data => localStorage.setItem("cartId",data.data.id));
    console.log("This is de cartID in local storage",localStorage.getItem("cartId"));
    this.cartService.getCart(+localStorage.getItem("cartId"))
                    .then((cart) => {
                      localStorage.setItem("cartCountItems", cart.products.length.toString())
                    });
  }

}
