import { EpisodioState } from "../pages/episodios/store/reducers/episodios.reducers";
import { PersonajeState } from "../pages/personajes/store/reducers/personaje.reducers";

export interface AppState {
    episodio: EpisodioState,
    personaje: PersonajeState
}