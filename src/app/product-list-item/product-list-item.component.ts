import { Component, OnInit } from '@angular/core';
import { ProductListItemService } from './product-list-item.service';
import { Category } from '../model/category';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Params }   from '@angular/router';
import { ShopsDetailService } from '../shops-detail/shops-detail.service';
import { Shop } from '../model/shop';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.css'],
  providers: [ProductListItemService, ShopsDetailService]
})
export class ProductListItemComponent implements OnInit {
  shop: Shop;
  categories: Category[];

  constructor(
    private productListItemService: ProductListItemService,
    private shopsDetailService: ShopsDetailService,
    private route: ActivatedRoute
  ) { }

  //ngOnInit(): void {
    //this.shopsDetailService.getShopDetails().then(data => this.categories = data.categories);

  //}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.shopsDetailService.getShopDetails(+params['id']))
      .subscribe((shop) => {
          this.shop = shop;
          this.categories = shop.categories;
          console.log("this.categories : ",shop.categories);
      });
  }

  onSelectProduct(product: Product): void{
    console.log("Product selected : ",product.name);
  }

}
