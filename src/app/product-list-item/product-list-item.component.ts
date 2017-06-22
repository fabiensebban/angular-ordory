import { Component, OnInit } from '@angular/core';
import { ProductListItemService } from './product-list-item.service';
import { Category } from '../model/category';
import 'rxjs/add/operator/toPromise';
import { ShopsDetailService } from '../shops-detail/shops-detail.service';
import { Shop } from '../model/shop';

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
    private shopsDetailService: ShopsDetailService
  ) { }

  ngOnInit(): void {
    //this.productListItemService.getProducts().then(categories => console.log("HHHHH : ",categories));
    this.shopsDetailService.getShopDetails().then(data => this.categories = data.categories);
  }

}
