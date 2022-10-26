import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponents } from './product/product.component';
import { ProductsComponents } from './products/products.component';
import { TabComponent } from './tab/tab.component';
import { Tab2Component } from './tab2/tab2.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponents,
    ProductsComponents,
    TabComponent,
    Tab2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
