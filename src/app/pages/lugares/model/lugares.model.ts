import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Param } from "src/app/interfaces/param.interface";
import { LugaresService } from "../service/lugares.service";

@Injectable()
export class LugaresModel {

  /**
   * Método constructor de la clase
   * @param _lugaresService inyección del servicio de lugares 
   */
  constructor(private _lugaresService: LugaresService) { }
  
  /**
   * Método utilizado para obtener los lugares
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerLugares(param: Array<Param>): Observable<any> {
    return this._lugaresService.obtenerLugares(param);
  }

  /**
   * Método utilizado para obtener un lugar por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerLugarPorId(id: number): Observable<any> {
    return this._lugaresService.obtenerLugarPorId(id);
  }
}
