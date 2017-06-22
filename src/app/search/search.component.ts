import { Component, OnInit } from '@angular/core';
import { Shop } from '../model/shop';
import { SHOPS } from '../mock-shops';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  shopsList: Shop[];

  searchShops(searchInput: string) {
      this.getShops().then(shops => this.shopsList = shops);
  }

  getShops(): Promise<Shop[]> {
    return Promise.resolve(SHOPS);
  }
}
