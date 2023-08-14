import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/interfaces/param.interface';
import { BaseService } from '../../../services/base.service';

@Injectable()
export class PersonajesService {

  /**
   * Método constructor de la clase 
   * @param _base inyección de la configuración base HttpClient 
   */
  constructor(private _base: BaseService) { }

  /**
   * Método utilizado para obtener los personajes
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerPersonajes(param: Array<Param>): Observable<any> {
    return this._base.get('character', param);
  }

  /**
   * Método utilizado para obtener un personaje por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerPersonajePorId(id: number): Observable<any> {
    return this._base.get(`character/${id}`);
  }
}
