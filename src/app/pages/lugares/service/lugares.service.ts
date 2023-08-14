import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/interfaces/param.interface';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  /**
   * Método constructor de la clase 
   * @param _base inyección de la configuración base HttpClient 
   */
  constructor(private _base: BaseService) { }

  /**
   * Método utilizado para obtener los lugares
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerLugares(param: Array<Param>): Observable<any> {
    return this._base.get('location', param);
  }

  /**
   * Método utilizado para obtener un lugar por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerLugarPorId(id: number): Observable<any> {
    return this._base.get(`location/${id}`);
  }
}
