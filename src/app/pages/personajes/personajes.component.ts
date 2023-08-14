import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Estado } from 'src/app/Enums/estado.enum';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesModel } from './model/personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffSet = window.pageYOffset;
    const scrollTop = this._document.documentElement.scrollTop;
    this.mostrarBoton = (yOffSet || scrollTop ) > 500
  }

  public mostrarBoton: boolean = false;

  /**
   * Variable que contiene los personajes
   */
  public personajes: Array<Personaje> = []

  /**
   * Variable que contiene el enumerable de los estados
   */
  public eestado = Estado

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _personajesModel: PersonajesModel
  ) { }
  ngOnInit(): void {
    this._personajesModel.obtenerPersonajes().subscribe(data => {
      console.log("sc ~ data:", data)
      if (!!data?.results) {
        this.personajes = data.results
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

  public irInicioPagina():void {
    this._document.documentElement.scrollTop = 0;
  }
}
