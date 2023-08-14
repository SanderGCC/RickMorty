import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { LugaresRoutingModule } from './lugares-routing.module';
import { LugaresComponent } from './lugares.component';
import { LugaresModel } from './model/lugares.model';
import { LugaresService } from './service/lugares.service';


@NgModule({
  declarations: [
    LugaresComponent
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
