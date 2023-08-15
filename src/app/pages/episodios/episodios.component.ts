import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Episodio } from 'src/app/interfaces/episodio.interface';
import { EpisodiosModel } from './model/episodios.model';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.scss']
})
export class EpisodiosComponent implements OnInit {

  /**
    * listener del evento scroll
    */
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this._document.documentElement.scrollTop;
    this.mostrarBoton = (yOffSet || scrollTop) > 800
  }

  /**
   * Variable que controla si se muestra el boton o no
   */
  public mostrarBoton: boolean = false;

  /**
   * Variable que contiene el valor de la última pagina seleccionada
   */
  public ultimaPagina: number = 0;

  /**
   * Variable que contiene los lugares
   */
  public episodios: Array<Episodio> = []

  /**
   * total de episodios totales
   */
  public totalEpisodios: number = 1

  /**
   * Variable que controla cuando se debe detener la paginación
   */
  public consultar: boolean = true

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _episodiosModel: EpisodiosModel,
    private _router: Router
  ) { }

  /**
   * Mètodo del ciclo de vida de angular
   */
  ngOnInit(): void {
    this._inicializarSuscripciones();
  }

  /**
   * Mètodo que inicializa las suscripciones
   */
  private _inicializarSuscripciones(): void {
    this._cargarMasEpisodios(1);

    this._episodiosModel.totalEpisodios$.subscribe(info => {
      this.consultar = !!info?.next
      this.totalEpisodios = info?.count
    })

    this._episodiosModel.episodios$.subscribe(episodios => {
      if (!!episodios) this.episodios = [...episodios]
      const element = document.body;
      if (element.scrollHeight <= element.clientHeight) this.cargarMasEpisodios()
    })
  }

  /**
   * Método utilizado para cargar lugares paginados
   * @param pagina 
   */
  private _cargarMasEpisodios(pagina: number): void {
    console.log("sc ~ this.totalEpisodios >  this.episodios.length:", this.consultar,  this.episodios.length)
    if(this.consultar) this._episodiosModel.loadEpisodios([{ campo: 'page', valor: pagina }])
  }

  /**
   * Método activado por el scroll para cargar más lugares paginados
   */
  public cargarMasEpisodios(): void {
    this.ultimaPagina++;
    if (!!this.consultar) this._cargarMasEpisodios(this.ultimaPagina);
  }

  /**
   * Método utilizado para ir al inicio de la pagina
   */
  public irInicioPagina(): void {
    this._document.documentElement.scrollTop = 0;
  }

  /**
   * Método utilizado para redireccionar a la vista de lugares
   */
  public irEpisodioPorId(id: number): void {
    this._router.navigateByUrl(`pages/episodios/${id}`)
  }
}
