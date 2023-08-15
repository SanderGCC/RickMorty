import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { DetalleEpisodioComponent } from './components/detalle-episodio/detalle-episodio.component';
import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './episodios.component';
import { EpisodiosModel } from './model/episodios.model';
import { EpisodiosService } from './service/episodios.service';
import { EpisodiosEffects } from './store/effects/episodios.effects';


@NgModule({
  declarations: [
    EpisodiosComponent,
    DetalleEpisodioComponent
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MaterialModule,
    InfiniteScrollModule,
    EffectsModule.forFeature([EpisodiosEffects]),
  ],
  providers: [
    EpisodiosService,
    EpisodiosModel
  ]
})
export class EpisodiosModule { }
