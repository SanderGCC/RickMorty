import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  /**
   * Método constructor de la clase
   * @param _router inyección del servicio utilzado para navegación URL
   */
  constructor(private _router: Router) { }
  
  /**
   * Método utilizado para redireccionar a la vista de Personajes
   */
  public irPersonajes(): void {
    this._router.navigateByUrl('pages/personajes')
  }
  
  /**
   * Método utilizado para redireccionar a la vista de Lugares
   */
  public irLugares(): void {
    this._router.navigateByUrl('pages/lugares')
  }
  
  /**
   * Método utilizado para redireccionar a la vista de Episodios
   */
  public irEpisodios(): void {
    this._router.navigateByUrl('pages/episodios')
  }
  
}
