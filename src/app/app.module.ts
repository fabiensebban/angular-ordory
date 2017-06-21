import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopsDetailComponent } from './shops-detail/shops-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ShopsDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
