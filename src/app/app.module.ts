import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DiscountComponent } from './discount/discount.component';
import { XchangeRateComponent } from './xchange-rate/xchange-rate.component';
import { ListOfProductsComponent } from './list-of-products/list-of-products.component';
import { FormsModule } from '@angular/forms';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DiscountComponent,
    XchangeRateComponent,
    ListOfProductsComponent,
    CartSummaryComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
