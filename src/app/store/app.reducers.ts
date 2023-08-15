import { ActionReducerMap } from "@ngrx/store";
import { episodiosReducer } from "../pages/episodios/store/reducers/episodios.reducers";
import { personajesReducer } from "../pages/personajes/store/reducers/personaje.reducers";
import { AppState } from "./app.interface";

export const appReducers: ActionReducerMap<AppState | any> = {
  episodio: episodiosReducer,
  personaje: personajesReducer
}