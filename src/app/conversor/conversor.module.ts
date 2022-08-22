import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversorComponent } from './component/conversor.component';
import {HttpClientModule} from "@angular/common/http";
import {ConversorService} from "./services/conversor.service";
import {MoedaService} from "./services/moeda.service";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {NgApexchartsModule} from "ng-apexcharts";
import {BrowserModule} from "@angular/platform-browser";
import {NgxCurrencyModule} from "ngx-currency";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";



@NgModule({
  declarations: [
    ConversorComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    BrowserModule,
    NgApexchartsModule,
    NgxCurrencyModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,

  ],
  exports:[
    ConversorComponent,
  ],
  providers:[
    ConversorService,
    MoedaService
  ]
})
export class ConversorModule { }
