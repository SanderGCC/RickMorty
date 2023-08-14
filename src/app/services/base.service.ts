import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from '../interfaces/param.interface';

@Injectable({ providedIn: 'root' })
export class BaseService {

  private urlBase = 'https://rickandmortyapi.com/api/'

  /**
   * Método constructor de la clase
   * @param _httpClient Inyección de httpClient
   */
  constructor(private _httpClient: HttpClient) { }

  public get<T>(url: string, httpParams: Array<Param> = []): Observable<T> {
    const urlApiResource = (this.urlBase) + url;
    let params = new HttpParams();
    if (httpParams) httpParams.forEach(param => params = params.append(param?.campo ? param.campo : '', param.valor));
    return this._httpClient.get<T>(urlApiResource, { params });
  }
}
