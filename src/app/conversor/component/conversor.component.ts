import {Component, OnInit, ViewChild} from '@angular/core';
import {Moeda} from "../models/moeda.model";
import {Conversao} from "../models/conversao.model";
import {ConversaoResponse} from "../models/conversao-response.model";
import {NgForm} from "@angular/forms";
import {MoedaService} from "../services/moeda.service";
import {ConversorService} from "../services/conversor.service";
import {LineBasicChart} from "../../shared/models/charts/LineBasicChart";


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {

  moedas: Moeda[] = [];
  conversao: Conversao = new Conversao();
  conversaoResponse: ConversaoResponse = new ConversaoResponse();
  chartOptions: LineBasicChart = new LineBasicChart;

  prefix: string = "";
  prefixPara: string = "";
  errorApi: boolean = false;
  errorMsg: string = '';

  @ViewChild("conversaoForm") conversaoForm!: NgForm;

  constructor( private moedaService: MoedaService,  private conversorService: ConversorService ) {
    this.moedas = this.moedaService.listarTodas();
  }

  ngOnInit() {
    this.conversao.moedaDe = 'BRL';
    this.conversao.moedaPara = 'USD';
    this.alteraPrefix();
    this.converter();
  }

  converter(): void {
      if (this.conversao.valor === 0){
        this.conversao.valor = 1;
      }

      this.conversorService.converter(this.conversao).subscribe(
          response => {
            this.conversaoResponse = response;
            this.prefixPara = this.conversao.moedaPara + ' ';
            this.errorApi = false;
          },
        error => {
            this.errorMsg = error.error.message;
            this.errorApi = true;
        });
  }

  alteraPrefix(){
    this.prefix = this.conversao.moedaDe + ' '
  }

}
