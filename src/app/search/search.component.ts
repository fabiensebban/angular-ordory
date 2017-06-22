import { Component, OnInit } from '@angular/core';
import { SHOPS } from './mock-shops';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  searchShops(searchInput: string) {
    if (searchInput.length > 2) {
      console.log(searchInput);
    }
  }

  getShops(): Promise<Shop[]> {
    return Promise.resolve(SHOPS);
  }
}
