import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, catchError, map, mergeMap, of } from "rxjs";
import { PersonajesService } from "../../service/personajes.service";
import * as personajesActions from "../actions/personajes.actions";

@Injectable()
export class PersonajesEffects {

  constructor(
    private _actions$: Actions,
    private _PersonajesService: PersonajesService
  ) { }

  loadPersonajes$: Observable<Action> = createEffect(
    (): any => this._actions$.pipe(
      ofType(personajesActions.loadPersonajes),
      mergeMap(({ criterios }) => this._PersonajesService.obtenerPersonajes(criterios)
        .pipe(
          map((res: any) => {
            if (!res.status) {
            }
            return personajesActions.loadPersonajesSuccess({ payload: res });
          }),
          catchError(err => {
            return of(personajesActions.loadPersonajesError({ payload: err }))
          })
        )
      )
    )
  );


}