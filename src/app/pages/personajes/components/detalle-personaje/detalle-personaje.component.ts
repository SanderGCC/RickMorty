import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Estado } from 'src/app/Enums/estado.enum';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesModel } from '../../model/personajes.model';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.scss']
})
export class DetallePersonajeComponent implements OnInit {

  /**
   * Variable en la que se almacena la información del personaje 
   */
  public personaje!: Personaje;

  /**
   * Variable que contiene el enumerable de los estados
   */
  public eestado = Estado;

  /**
   * Método constructor
   * @param _personajesModel inyección del modelo de personajes 
   * @param _route Permite obtener información de la ruta actual 
   */
  constructor(private _personajesModel: PersonajesModel,
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
        this._obtenerPersonajePorId(routeParams.id);
      }

    })
  }

  /**
   * Método utilizado para deteminar el estado del personaje
   * @param estado estado del personaje
   * @returns estado del personaje
   */
  public obtenerEstado(estado: string): string {
    switch (estado) {
      case Estado.vivo.nombreApi:
        return Estado.vivo.nombre
      case Estado.muerto.nombreApi:
        return Estado.muerto.nombre
      default:
        return Estado.desconocido.nombre
    }
  }

  /**
   * Método utilizado para obtener un personaje por Id
   * @param id Id del personaje
   */
  private _obtenerPersonajePorId(id: number) {
    this._personajesModel.obtenerPersonajePorId(id).pipe(take(1)).subscribe(data => {
      if (!!data) {
        this.personaje = data
      }
    })
  }

}
