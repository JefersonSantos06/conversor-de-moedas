import { Injectable } from '@angular/core';
import {Conversao} from "../models/conversao.model";
import {map, Observable} from "rxjs";
import {ConversaoResponse} from "../models/conversao-response.model";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConversorService {

  private readonly BASE_URL = "https://api.apilayer.com/fixer/convert";

  constructor(private http: HttpClient) {}

  converter(conversao: Conversao): Observable<ConversaoResponse> {

    const params = new HttpParams()
      .set("from", conversao.moedaDe)
      .set("to", conversao.moedaPara)
      .set("amount", conversao.valor)

    return this.http.get(this.BASE_URL, {params}).pipe(
      map(
        (res:any)=>{
          return res as ConversaoResponse;
        },
      )
    )
  }

  getTimeSeries(conversao: Conversao): Observable<ConversaoResponse>{
    const params = new HttpParams()
      .set("base", conversao.moedaDe)
      .set("symbols", conversao.moedaPara)
      .set("start_date", "")
      .set("end_date", "");

    return this.http.get(this.BASE_URL, {params}).pipe(
      map(
        (res:any)=>{
          return res as ConversaoResponse;
        }
      )
    )
  }

}
