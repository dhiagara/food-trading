import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgwWowModule } from 'ngx-wow';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProductsComponent } from './products/products.component';
import { AllComponent } from './products/all/all.component';
import { ReactionsComponent } from './reactions/reactions.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ProductsComponent,
    AllComponent,
    ReactionsComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    
    NgwWowModule.forRoot(),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
