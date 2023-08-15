import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { EpisodiosService } from "../../service/episodios.service";
import * as episodiosActions from '../actions/episodios.actions';

@Injectable()
export class EpisodiosEffects {

  constructor(
    private _actions$: Actions,
    private _episodioService: EpisodiosService
  ) { }

  loadEpisodios$: Observable<Action> = createEffect(
    (): any => this._actions$.pipe(
      ofType(episodiosActions.loadEpisodios),
      mergeMap(({ criterios }) => this._episodioService.obtenerEpisodios(criterios)
        .pipe(
          map((res: any) => {
            if (!res.status) {
            }
            return episodiosActions.loadEpisodiosSuccess({ payload: res });
          }),
          catchError(err => {
            return of(episodiosActions.loadEpisodiosError({ payload: err }))
          })
        )
      )
    )
  );


}