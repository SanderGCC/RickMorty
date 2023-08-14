import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/interfaces/param.interface';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  /**
   * Método constructor de la clase 
   * @param _base inyección de la configuración base HttpClient 
   */
  constructor(private _base: BaseService) { }

  /**
   * Método utilizado para obtener los episodios
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerEpisodios(param: Array<Param>): Observable<any> {
    return this._base.get('episode', param);
  }

  /**
   * Método utilizado para obtener un lugar por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerEpisodioPorId(id: number): Observable<any> {
    return this._base.get(`episode/${id}`);
  }
}
