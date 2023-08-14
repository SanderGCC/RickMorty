import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleEpisodioComponent } from './components/detalle-episodio/detalle-episodio.component';
import { EpisodiosComponent } from './episodios.component';

const routes: Routes = [
  {
    path: '',
    component: EpisodiosComponent,
  },
  {
    path: ':id', 
    component: DetalleEpisodioComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodiosRoutingModule { }
