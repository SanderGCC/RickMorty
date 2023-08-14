import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Param } from 'src/app/interfaces/param.interface';
import { BaseService } from '../../../services/base.service';

@Injectable()
export class PersonajesService {

  constructor(private _base: BaseService) { }

  public obtenerPersonajes(param: Array<Param>): Observable<any> {
    return this._base.get('character', param);
  }
}
