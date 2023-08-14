import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleLugaresComponent } from './components/detalle-lugares/detalle-lugares.component';
import { LugaresComponent } from './lugares.component';

const routes: Routes = [
  {
    path: '',
    component: LugaresComponent,
  },
  {
    path: ':id', 
    component: DetalleLugaresComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LugaresRoutingModule { }
