import { Component, OnInit } from '@angular/core';

import { ProductListItemComponent } from '../product-list-item/product-list-item.component';
import { ProductListItemService } from '../product-list-item/product-list-item.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductListItemService]
})
export class ProductListComponent implements OnInit {

  constructor(
  //  private productListItemComponent: ProductListItemComponent
  ) { }

  ngOnInit() {
  }

}
