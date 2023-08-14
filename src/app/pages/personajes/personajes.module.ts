import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { PersonajesModel } from './model/personajes.model';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { PersonajesComponent } from './personajes.component';
import { PersonajesService } from './service/personajes.service';


@NgModule({
  declarations: [
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [
    PersonajesModel,
    PersonajesService
  ]
})
export class PersonajesModule { }
