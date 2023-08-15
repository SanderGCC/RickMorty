import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { DetallePersonajeComponent } from './components/detalle-personaje/detalle-personaje.component';
import { PersonajesModel } from './model/personajes.model';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { PersonajesService } from './service/personajes.service';
import { PersonajesEffects } from './store/effects/personajes.effects';


@NgModule({
  declarations: [
    PersonajesComponent,
    DetallePersonajeComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,
    InfiniteScrollModule,
    EffectsModule.forFeature([PersonajesEffects]),
  ],
  providers: [
    PersonajesModel,
    PersonajesService
  ]
})
export class PersonajesModule { }
