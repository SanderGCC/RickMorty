import { createAction, props } from "@ngrx/store";
import { Param } from "src/app/interfaces/param.interface";

export enum EpisodiosActionsTypes {
  LoadEpisodios = '[EPISODIOS] Load Episodios ',
  LoadEpisodiosSuccess = '[EPISODIOS] Load Episodios Success',
  LoadEpisodiosError = '[EPISODIOS] Load Episodios Error',
}

// All
export const loadEpisodios = createAction(
  EpisodiosActionsTypes.LoadEpisodios,
  props<{ criterios: Array<Param> }>()
);

export const loadEpisodiosSuccess = createAction(
  EpisodiosActionsTypes.LoadEpisodiosSuccess,
  props<{ payload: any }>()
);

export const loadEpisodiosError = createAction(
  EpisodiosActionsTypes.LoadEpisodiosError,
  props<{ payload: any }>()
);
