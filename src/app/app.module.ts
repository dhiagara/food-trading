import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProductsComponent } from './products/products.component';
import { AllComponent } from './products/all/all.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ProductsComponent,
    AllComponent,
    ReactionsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
