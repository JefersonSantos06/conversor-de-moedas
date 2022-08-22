import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ConversorModule} from "./conversor/conversor.module";
import {NgApexchartsModule} from "ng-apexcharts";
import {TokenInterceptor} from "./core/token.interceptor";
import {CURRENCY_MASK_CONFIG} from "ngx-currency";
import {CustomCurrencyMaskConfig} from "./core/config/CustomCurrencyMaskConfig";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ConversorModule,
        NgApexchartsModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
