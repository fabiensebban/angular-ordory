import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

import { RouterModule }   from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartComponent } from './cart/cart.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsDetailComponent,
    ProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent,
    MapComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'shops-detail/:id',
        component: ShopsDetailComponent
      },
      {
        path: '',
        component: MapComponent
      }
    ]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyASuJA9GSUWiLy8y_SMiitucXKHp60IXLY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
