import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Lugar } from 'src/app/interfaces/lugar.interface';
import { LugaresModel } from '../../model/lugares.model';

@Component({
  selector: 'app-detalle-lugares',
  templateUrl: './detalle-lugares.component.html',
  styleUrls: ['./detalle-lugares.component.scss']
})
export class DetalleLugaresComponent {

  /**
   * Variable en la que se almacena la información del lugar 
   */
  public lugar!: Lugar;

  /**
   * Método constructor
   * @param _lugaresModel inyección del modelo de lugares 
   * @param _route Permite obtener información de la ruta actual 
   */
  constructor(private _lugaresModel: LugaresModel,
    private _route: ActivatedRoute
  ) { }

  /**
   * Método del ciclo de vida de angular que se ejecuta al inicializar el componente
   */
  ngOnInit(): void {
    this._obtenerParametrosRuta();
  }

  /**
   * Método utilizado para obtener los parametros por ruta
   */
  private _obtenerParametrosRuta(): void {
    this._route.params.subscribe((routeParams: any) => {
      if (!!routeParams.id) {
        this._obtenerLugarPorId(routeParams.id);
      }

    })
  }

  /**
   * Método utilizado para obtener un lugar por Id
   * @param id Id del lugar
   */
  private _obtenerLugarPorId(id: number) {
    this._lugaresModel.obtenerLugarPorId(id).pipe(take(1)).subscribe(data => {
      if (!!data) {
        this.lugar = data
      }
    })
  }
}
