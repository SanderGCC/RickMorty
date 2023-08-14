import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from '../../../services/base.service';

@Injectable()
export class PersonajesService {

  constructor(private _base: BaseService) { }

  public obtenerPersonajes(): Observable<any> {
    return this._base.get('character');
  }
}
