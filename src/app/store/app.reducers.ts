import { ActionReducerMap } from "@ngrx/store";
import { episodiosReducer } from "../pages/episodios/store/reducers/episodios.reducers";
import { AppState } from "./app.interface";

export const appReducers: ActionReducerMap<AppState | any> = {
  episodio: episodiosReducer
}