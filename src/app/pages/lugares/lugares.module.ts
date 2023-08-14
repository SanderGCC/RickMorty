import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { LugaresRoutingModule } from './lugares-routing.module';
import { LugaresComponent } from './lugares.component';
import { LugaresModel } from './model/lugares.model';
import { LugaresService } from './service/lugares.service';
import { DetalleLugaresComponent } from './components/detalle-lugares/detalle-lugares.component';


@NgModule({
  declarations: [
    LugaresComponent,
    DetalleLugaresComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [
    LugaresModel,
    LugaresService
  ]
})
export class LugaresModule { }
