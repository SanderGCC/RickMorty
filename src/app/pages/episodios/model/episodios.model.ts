import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Episodio } from "src/app/interfaces/episodio.interface";
import { Param } from "src/app/interfaces/param.interface";
import { AppState } from "src/app/store/app.interface";
import { EpisodiosService } from "../service/episodios.service";
import * as episodiosActions from '../store/actions/episodios.actions';
import { getAllEpisodios, getTotalEpisodios } from '../store/selectors/episodios.selectors';

@Injectable()
export class EpisodiosModel {

  /**
   * Variable que define el observable a las entidades
   */
  public episodios$: Observable<Array<Episodio>> = this._store.select(getAllEpisodios);
  
  /**
   * Variable que define el observable al total de informaciòn
   */
  public totalEpisodios$: Observable<any> = this._store.select(getTotalEpisodios);

  /**
   * Método constructor de la clase
   * @param _episodiosService inyección del servicio de episodios
   */
  constructor(private _episodiosService: EpisodiosService,
    private _store: Store<AppState>) { }

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

  /**
   * Método utilizado para disparar la acción encargada de obtener los episodios
   * @param criterios parametros de busqueda
   */
  public loadEpisodios(criterios: Array<Param>): void {
    this._store.dispatch(episodiosActions.loadEpisodios({criterios}));
  }
}
