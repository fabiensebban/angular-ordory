import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

import { RouterModule }   from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';


import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SearchComponent } from './search/search.component';

import { HttpModule }    from '@angular/http';
import { ShopsComponent } from './shops/shops.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopsDetailComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    MapComponent,
    SearchComponent,
    ShopsComponent,
    CartIconComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'shop-details/:id',
        component: ShopsDetailComponent
      },
      {
        path: '',
        component: MapComponent
      },
      {
        path: 'cart/:id',
        component: CartComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASuJA9GSUWiLy8y_SMiitucXKHp60IXLY'
    })
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
