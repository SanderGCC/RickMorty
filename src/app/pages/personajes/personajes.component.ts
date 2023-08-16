import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, Subscription, debounceTime, distinctUntilChanged } from 'rxjs';
import { Estado } from 'src/app/Enums/estado.enum';
import { Param } from 'src/app/interfaces/param.interface';
import { Personaje } from 'src/app/interfaces/personaje.interface';
import { PersonajesModel } from './model/personajes.model';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit, OnDestroy {
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
   * subject encargado disparar el debouncer 
   */
  public debounce = new Subject<string>();

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
   * variable que contiene la referencia al formulario
   */
  public formGroupTexto!: FormGroup;

  /**
   * total de personajes
   */
  public totalPersonajes: number = 1

  /**
   * Nombre Filtrado
   */
  public nombreFiltrado: string = ''

  /**
   * Variable que contiene las suscripciones
   */
  private _suscripciones!: Subscription

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _personajesModel: PersonajesModel,
    private _router: Router,
    private _formBuilder: FormBuilder,
  ) { }

  ngOnDestroy(): void {
    this._suscripciones.unsubscribe()
  }

  ngOnInit(): void {
    this.formGroupTexto = this._formBuilder.group({
      name: [""]
    })

    this._inicializarSuscripciones();
  }


  /**
   * Método utilizado para lanzar la consulta de filtrado
   */
  public filtrarTexto(): void {
    this.nombreFiltrado = this.formGroupTexto.get('name')?.value
    this.personajes = []
    this.ultimaPagina = 1
    this.consultar = true
    this._cargarMasPersonajes(this.ultimaPagina);
  }

  /**
   * Mètodo que inicializa las suscripciones
   */
  private _inicializarSuscripciones(): void {
    this._cargarMasPersonajes(1);

    const totalPersonajes$ = this._personajesModel.totalpersonajes$.subscribe(info => {
      this.consultar = !!info?.next
      this.totalPersonajes = info?.count
    })

    const personajes$ = this._personajesModel.personajes$.subscribe(personajes => {
      this.personajes = [...this.personajes, ...personajes]
      console.log("sc ~ this.personajes:", this.personajes)
      const element = document.body;
      if (element.scrollHeight - element.clientHeight <= 5) this.cargarMasPersonajes()
    })

    const debouncer$ = this.debounce.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => this.filtrarTexto()
      );

    this._suscripciones?.add(debouncer$)
    this._suscripciones?.add(personajes$)
    this._suscripciones?.add(totalPersonajes$)
  }

  /**
   * Método utilizado para personajes paginados
   * @param pagina 
   */
  private _cargarMasPersonajes(pagina: number): void {
    let filtros: Array<Param> = []
    if (!!this.nombreFiltrado) filtros.push({ 'campo': 'name', valor: this.nombreFiltrado })
    if (this.consultar) this._personajesModel.loadPersonajes([{ campo: 'page', valor: pagina }, ...filtros])
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
