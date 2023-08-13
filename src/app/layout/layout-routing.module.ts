import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [
    //   {
    //     path: 'seguridad', loadChildren: () => import('../seguridad/dashboard-seguridad/dashboard-seguridad.module').then(m => m.DashboardSeguridadModule)
    //   },
    //   {
    //     path: 'dashboard', loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
    //   },
    //   {
    //     path: 'personas', loadChildren: () => import('../procesos/personas/personas.module').then(m => m.PersonasModule)
    //   },
    //   {
    //     path: 'divipol', loadChildren: () => import('../procesos/divipol/divipol.module').then(m => m.DivipolModule)
    //   },
    //   {
    //     path: 'notificaciones', loadChildren: () => import('../procesos/notificaciones/notificaciones.module').then(m => m.NotificacionesModule)
    //   },
    //   {
    //     path: 'informes', loadChildren: () => import('../procesos/informes/informes.module').then(m => m.InformesModule)
    //   },
    //   {
    //     path: 'escrutinio', loadChildren: () => import('../procesos/escrutinio/escrutinio.module').then(m => m.EscrutinioModule)
    //   }
    // ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
