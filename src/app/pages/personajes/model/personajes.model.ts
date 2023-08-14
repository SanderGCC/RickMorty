import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersonajesService } from "../service/personajes.service";

@Injectable()
export class PersonajesModel {
    constructor(private _personajesService: PersonajesService) {}

    public obtenerPersonajes(): Observable<any> {
        return this._personajesService.obtenerPersonajes();
      }
}
