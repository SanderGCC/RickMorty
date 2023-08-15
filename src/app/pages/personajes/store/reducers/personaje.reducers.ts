
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from "@ngrx/store";
import { Personaje } from 'src/app/interfaces/personaje.interface';
import * as PersonjaesActionsTypes from '../actions/personajes.actions';

export interface PersonajeState extends EntityState<Personaje> {
  ids: Array<number>,
  metadata: any;
}

export const defaultPersonaje: PersonajeState = {
  ids: [],
  entities: {},
  metadata: null,
}

export const personajeAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const personajeInitialState = personajeAdapter.getInitialState(defaultPersonaje);

const reducer = createReducer(personajeInitialState, 
  on(PersonjaesActionsTypes.loadPersonajesSuccess, (state, { payload }) => (
    personajeAdapter.addMany(payload.results, {
      ...state,
      loaded: true,
      loading: false,
      selectedId: null,
      metadata: payload?.info
    })
  )),
  on(PersonjaesActionsTypes.loadPersonajesError, (state, { payload }) => ({
    ...state,
    entities: {},
    loaded: false,
    loading: false,
    error: payload
  })),
);

export function personajesReducer(state: (EntityState<any> & PersonajeState) | undefined, action: Action) {
  return reducer(state, action);
}