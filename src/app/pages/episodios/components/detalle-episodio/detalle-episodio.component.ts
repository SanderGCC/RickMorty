import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Episodio } from 'src/app/interfaces/episodio.interface';
import { EpisodiosModel } from '../../model/episodios.model';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.scss']
})
export class DetalleEpisodioComponent {
  /**
   * Variable en la que se almacena la información del episodio 
   */
  public episodio!: Episodio;

  /**
   * Método constructor
   * @param _episodiosModel inyección del modelo de episodios 
   * @param _route Permite obtener información de la ruta actual 
   */
  constructor(private _episodiosModel: EpisodiosModel,
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
        this._obtenerEpisodioPorId(routeParams.id);
      }

    })
  }

  /**
   * Método utilizado para obtener un episodio por Id
   * @param id Id del episodio
   */
  private _obtenerEpisodioPorId(id: number) {
    this._episodiosModel.obtenerEpisodioPorId(id).pipe(take(1)).subscribe(data => {
      if (!!data) {
        this.episodio = data
      }
    })
  }
}
