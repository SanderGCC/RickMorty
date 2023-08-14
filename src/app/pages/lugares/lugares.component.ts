import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
import { Estado } from 'src/app/Enums/estado.enum';
import { Lugar } from 'src/app/interfaces/lugar.interface';
import { LugaresModel } from './model/lugares.model';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.scss']
})
export class LugaresComponent {
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
  public ultimaPagina: number = 1;

  /**
   * Variable que contiene los lugares
   */
  public lugares: Array<Lugar> = []

  /**
   * Variable que controla cuando se debe detener la paginación
   */
  public consultar: boolean = true

  /**
   * Variable que contiene el enumerable de los estados
   */
  public eestado = Estado

  constructor(@Inject(DOCUMENT) private _document: Document,
    private _lugaresModel: LugaresModel,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._cargarMasLugares(0);
  }

  /**
   * Método utilizado para cargar lugares paginados
   * @param pagina 
   */
  private _cargarMasLugares(pagina: number): void {
    this._lugaresModel.obtenerLugares([{ campo: 'page', valor: pagina }]).pipe(take(1)).subscribe(data => {
      if (!!data?.results) {
        this.consultar = !!data?.info?.next
        this.lugares = [...this.lugares, ...data.results]
        const element = document.body;
        if (element.scrollHeight <= element.clientHeight) this.cargarMasLugares()

      }
    })
  }

  /**
   * Método activado por el scroll para cargar más lugares paginados
   */
  public cargarMasLugares(): void {
    this.ultimaPagina++;
    if (!!this.consultar) this._cargarMasLugares(this.ultimaPagina);
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
  public irLugaresPorId(id: number): void {
    this._router.navigateByUrl(`pages/lugares/${id}`)
  }
}
