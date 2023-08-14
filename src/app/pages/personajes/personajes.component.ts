import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
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
  public ultimaPagina: number = 1;

  /**
   * Variable que contiene los personajes
   */
  public personajes: Array<Personaje> = []

  /**
   * Variable que contiene el enumerable de los estados
   */
  public eestado = Estado

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _personajesModel: PersonajesModel,
    private _router: Router
  ) { }
  ngOnInit(): void {
    this._cargarMasPersonajes(0);
  }

  /**
   * Método utilizado para personajes paginados
   * @param pagina 
   */
  private _cargarMasPersonajes(pagina: number): void {
    this._personajesModel.obtenerPersonajes([{ campo: 'page', valor: pagina }]).pipe(take(1)).subscribe(data => {
      if (!!data?.results){
        this.personajes = [...this.personajes, ...data.results]
        const element = document.body;
        if (element.scrollHeight <= element.clientHeight) this.cargarMasPersonajes();
        

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
