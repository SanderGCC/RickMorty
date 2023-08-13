import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LugaresRoutingModule } from './lugares-routing.module';
import { LugaresComponent } from './lugares.component';


@NgModule({
  declarations: [
    LugaresComponent
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule
  ]
})
export class LugaresModule { }
