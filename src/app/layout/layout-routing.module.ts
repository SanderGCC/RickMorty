import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'personajes', loadChildren: () => import('../pages/personajes/personajes.module').then(m => m.PersonajesModule)
      },
      {
        path: 'episodios', loadChildren: () => import('../pages/episodios/episodios.module').then(m => m.EpisodiosModule)
      },
      {
        path: 'lugares', loadChildren: () => import('../pages/lugares/lugares.module').then(m => m.LugaresModule)
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
