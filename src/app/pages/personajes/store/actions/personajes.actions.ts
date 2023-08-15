import { createAction, props } from "@ngrx/store";
import { Param } from "src/app/interfaces/param.interface";

export enum PersonajesActionsTypes {
  LoadPersonajes = '[PERSONAJES] Load Personajes ',
  LoadPersonajesSuccess = '[PERSONAJES] Load Personajes Success',
  LoadPersonajesError = '[PERSONAJES] Load Personajes Error',
}

// All
export const loadPersonajes = createAction(
  PersonajesActionsTypes.LoadPersonajes,
  props<{ criterios: Array<Param> }>()
);

export const loadPersonajesSuccess = createAction(
  PersonajesActionsTypes.LoadPersonajesSuccess,
  props<{ payload: any }>()
);

export const loadPersonajesError = createAction(
  PersonajesActionsTypes.LoadPersonajesError,
  props<{ payload: any }>()
);
