import { Component, OnInit, OnChanges } from '@angular/core';
import { ShopService } from '../shop.service';
import { Shop } from '../model/shop';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [ShopService]
})

export class MapComponent implements OnInit {
  lat: number = 48.866667;//lat & lng of paris (center)
  lng: number = 2.333333;
  zoom: number = 10;//zoom of the map

  constructor(private shopService: ShopService) { }

  list: Shop[];

  ngOnInit(): void { }

  searchShops(searchInput: string): void {
    if(searchInput.length > 2)
      this.shopService.getShopsByAddress(searchInput).then(shops => {this.list = shops});
  }
}
