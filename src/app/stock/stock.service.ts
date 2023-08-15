import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Stock} from "../interfaces/stock";
import {config} from "../../../config/config";

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private readonly api_url: string = environment.apiUrl;
  private readonly api_token: string = config.apiToken;
  constructor(private readonly _http: HttpClient) { }

  getStockData(offset: number, last: number): Observable<Stock[]> {
    return this._http.get<Stock[]>(`${this.api_url}?last=${last}&offset=${offset}&token=${this.api_token}`);
  }

}
