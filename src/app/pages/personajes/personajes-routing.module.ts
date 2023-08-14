import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { PersonajesComponent } from './personajes.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent,

  },
  {
    path: ':id', 
    component: DetallePersonajeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
