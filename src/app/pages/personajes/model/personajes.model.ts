import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Param } from "src/app/interfaces/param.interface";
import { PersonajesService } from "../service/personajes.service";

@Injectable()
export class PersonajesModel {

  /**
   * Método constructor de la clase
   * @param _personajesService inyección del servicio de personajes 
   */
  constructor(private _personajesService: PersonajesService) { }
  
  /**
   * Método utilizado para obtener los personajes
   * @param param parametros de busqueda
   * @returns Observable con la respuesta
   */
  public obtenerPersonajes(param: Array<Param>): Observable<any> {
    return this._personajesService.obtenerPersonajes(param);
  }

  /**
   * Método utilizado para obtener un personaje por id
   * @param id id del personaje a buscar
   * @returns Observable con la respuesta
   */
  public obtenerPersonajePorId(id: number): Observable<any> {
    return this._personajesService.obtenerPersonajePorId(id);
  }
}
