import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/store/app.interface";
import { Utils } from "src/app/utils/sort-utils";

export const getEpisodios = (state: AppState) => state.episodio.entities;
export const getTotalEpisodios = (state: AppState) => state.episodio.metadata;
export const getEpisodiosEntities = createSelector(
  getEpisodios,
  (episodio) => episodio
);
export const getAllEpisodios = createSelector(getEpisodiosEntities, entities => {
  return Utils.sortKeyMaxToMin(entities);
});
