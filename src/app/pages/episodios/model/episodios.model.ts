import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Param } from "src/app/interfaces/param.interface";
import { EpisodiosService } from "../service/episodios.service";

@Injectable()
export class EpisodiosModel {

  /**
   * Método constructor de la clase
   * @param _episodiosService inyección del servicio de episodios
   */
  constructor(private _episodiosService: EpisodiosService) { }
  
  /**
   * Método utilizado para obtener los episodios
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerEpisodios(param: Array<Param>): Observable<any> {
    return this._episodiosService.obtenerEpisodios(param);
  }

  /**
   * Método utilizado para obtener un lugar por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerEpisodioPorId(id: number): Observable<any> {
    return this._episodiosService.obtenerEpisodioPorId(id);
  }
}
