import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

import { RouterModule }   from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartComponent } from './cart/cart.component';
import { HttpModule }    from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ShopsDetailComponent,
    ProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'shops-detail/:id',
        component: ShopsDetailComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
