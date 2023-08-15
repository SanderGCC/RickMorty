import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estado } from 'src/app/Enums/estado.enum';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesModel } from './model/personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
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
   * Variable que controla cuando se debe detener la paginación
   */
  public consultar: boolean = true

  /**
   * Variable que contiene el valor de la última pagina seleccionada
   */
  public ultimaPagina: number = 0;

  /**
   * Variable que contiene los personajes
   */
  public personajes: Array<Personaje> = []

  /**
   * Variable que contiene el enumerable de los estados
   */
  public eestado = Estado

  /**
   * total de personajes
   */
  public totalPersonajes: number = 1

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _personajesModel: PersonajesModel,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this._inicializarSuscripciones();
  }

  /**
   * Mètodo que inicializa las suscripciones
   */
  private _inicializarSuscripciones(): void {
    this._cargarMasPersonajes(1);

    this._personajesModel.totalpersonajes$.subscribe(info => {
      this.consultar = !!info?.next
      this.totalPersonajes = info?.count
    })

    this._personajesModel.personajes$.subscribe(personajes => {
      if (!!personajes) this.personajes = [...personajes]
      const element = document.body;
      if (element.scrollHeight <= element.clientHeight) this.cargarMasPersonajes()
    })
  }

  /**
   * Método utilizado para personajes paginados
   * @param pagina 
   */
  private _cargarMasPersonajes(pagina: number): void {
    if (this.consultar) this._personajesModel.loadPersonajes([{ campo: 'page', valor: pagina }])
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
   * Método activado por el scroll para cargar más personajes paginados
   */
  public cargarMasPersonajes(): void {
    this.ultimaPagina++;
    if (!!this.consultar) this._cargarMasPersonajes(this.ultimaPagina);
  }

  /**
   * Método utilizado para ir al inicio de la pagina
   */
  public irInicioPagina(): void {
    this._document.documentElement.scrollTop = 0;
  }

  /**
   * Método utilizado para redireccionar a la vista de Personajes
   */
  public irPersonajePorId(id: number): void {
    this._router.navigateByUrl(`pages/personajes/${id}`)
  }
}
