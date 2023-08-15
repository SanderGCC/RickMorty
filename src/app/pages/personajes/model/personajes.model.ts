import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Param } from "src/app/interfaces/param.interface";
import { Personaje } from "src/app/interfaces/personaje.interface";
import { AppState } from "src/app/store/app.interface";
import { PersonajesService } from "../service/personajes.service";
import * as personajesActions from '../store/actions/personajes.actions';
import { getAllPersonajes, getTotalPersonajes } from "../store/selectors/personaje.selectors";

@Injectable()
export class PersonajesModel {

  /**
   * Variable que define el observable a las entidades
   */
  public personajes$: Observable<Array<Personaje>> = this._store.select(getAllPersonajes);

  /**
   * Variable que define el observable al total de informaciòn
   */
  public totalpersonajes$: Observable<any> = this._store.select(getTotalPersonajes);

  /**
   * Método constructor de la clase
   * @param _personajesService inyección del servicio de personajes 
   */
  constructor(private _personajesService: PersonajesService,
    private _store: Store<AppState>) { }

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

  /**
   * Método utilizado para disparar la acción encargada de obtener los personajes
   * @param criterios parametros de busqueda
   */
  public loadPersonajes(criterios: Array<Param>): void {
    this._store.dispatch(personajesActions.loadPersonajes({ criterios }));
  }
}
