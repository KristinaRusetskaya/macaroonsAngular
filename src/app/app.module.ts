import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {ProductsService} from "./services/products.service";
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { ProductsComponent } from './components/products/products.component';
import { ButtonBgDirective } from './directives/button-bg.directive';
import { SplitDescriptionPipe } from './pipes/split-description.pipe';
import { NumberPhonePipe } from './pipes/number-phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AdvantagesComponent,
    ProductsComponent,
    ButtonBgDirective,
    SplitDescriptionPipe,
    NumberPhonePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
