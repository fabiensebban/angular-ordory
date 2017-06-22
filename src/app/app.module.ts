import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

import { RouterModule }   from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListItemComponent } from './product-list-item/product-list-item.component';
import { CartIconComponent } from './cart-icon/cart-icon.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';

import { HttpModule }    from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ShopsDetailComponent,
    ProductComponent,
    ProductListComponent,
    ProductListItemComponent,
    CartIconComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'shops-detail/:id',
        component: ShopsDetailComponent
      },
      {
        path: 'cart/:id',
        component: CartComponent
      }
    ])
  ],
  providers: [CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
