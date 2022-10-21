import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponents } from './product/product.component';
import { ProductsComponents } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponents,
    ProductsComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
