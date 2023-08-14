import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Param } from "src/app/interfaces/param.interface";
import { PersonajesService } from "../service/personajes.service";

@Injectable()
export class PersonajesModel {
    constructor(private _personajesService: PersonajesService) {}

    public obtenerPersonajes(param: Array<Param>): Observable<any> {
        return this._personajesService.obtenerPersonajes(param);
      }
}
