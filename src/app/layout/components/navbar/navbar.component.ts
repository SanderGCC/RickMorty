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

  public irPersonajes(): void {
    this._router.navigateByUrl('pages/personajes')
  }
  public irLugares(): void {
    this._router.navigateByUrl('pages/lugares')
  }
  public irEpisodios(): void {
    this._router.navigateByUrl('pages/episodios')
  }
}
