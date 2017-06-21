import { Component, OnInit } from '@angular/core';

import { ProductListItemComponent } from '../product-list-item/product-list-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(
    private productListItemComponent: ProductListItemComponent
  ) { }

  ngOnInit() {
  }

}
