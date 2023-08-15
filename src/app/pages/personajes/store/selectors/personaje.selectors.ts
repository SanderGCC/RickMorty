import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interface";
import { Utils } from "src/app/utils/sort-utils";

export const getPersonajes = (state: AppState) => state.personaje.entities;
export const getTotalPersonajes = (state: AppState) => state.personaje.metadata;
export const getPersonajesEntities = createSelector(
  getPersonajes,
  (personaje) => personaje
);
export const getAllPersonajes = createSelector(getPersonajesEntities, entities => {
  return Utils.sortKeyMaxToMin(entities);
});
