
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { Action, createReducer, on } from "@ngrx/store";
import { Episodio } from "src/app/interfaces/episodio.interface";
import * as EpisodiosActionsTypes from '../actions/episodios.actions';

export interface EpisodioState extends EntityState<Episodio> {
  ids: Array<number>,
  metadata: any;
}

export const defaultEpisodio: EpisodioState = {
  ids: [],
  entities: {},
  metadata: null,
}

export const episodioAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const episodioInitialState = episodioAdapter.getInitialState(defaultEpisodio);

const reducer = createReducer(episodioInitialState, 
  on(EpisodiosActionsTypes.loadEpisodiosSuccess, (state, { payload }) => (
    episodioAdapter.addMany(payload.results, {
      ...state,
      loaded: true,
      loading: false,
      selectedId: null,
      metadata: payload?.info
    })
  )),
  on(EpisodiosActionsTypes.loadEpisodiosError, (state, { payload }) => ({
    ...state,
    entities: {},
    loaded: false,
    loading: false,
    error: payload
  })),
);

export function episodiosReducer(state: (EntityState<any> & EpisodioState) | undefined, action: Action) {
  return reducer(state, action);
}