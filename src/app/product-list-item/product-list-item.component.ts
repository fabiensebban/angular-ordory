import { Component, OnInit } from '@angular/core';
import { ProductListItemService } from './product-list-item.service';
import { Category } from '../model/category';
import 'rxjs/add/operator/toPromise';
import { ShopsDetailService } from '../shops-detail/shops-detail.service';
import { Shop } from '../model/shop';
import { Product } from '../model/product';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
  providers: [ProductListItemService, ShopsDetailService, CartService]
})
export class ProductListItemComponent implements OnInit {
  shop: Shop;
  categories: Category[];

  constructor(
    private productListItemService: ProductListItemService,
    private shopsDetailService: ShopsDetailService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    //this.productListItemService.getProducts().then(categories => console.log("HHHHH : ",categories));
    cartId = localStorage.getItem("cartId");

    this.shopsDetailService.getShopDetails().then(data => this.categories = data.categories);
    this.cartService.getCart(+cartId)
      .subscribe((cart) => {
        localStorage.setItem("cartCountItems", cart.lenght)
      });

  }

  onSelectProduct(product: Product): void{
    this.productListItemService.addProductToCart(product.id).then(data => localStorage.setItem("cartId",data.data.id));

    //console.log("Product selected : ",product.name);
  }

}
