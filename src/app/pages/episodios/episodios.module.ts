import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MaterialModule } from 'src/app/modules/material.module';
import { EpisodiosRoutingModule } from './episodios-routing.module';
import { EpisodiosComponent } from './episodios.component';
import { EpisodiosModel } from './model/episodios.model';
import { EpisodiosService } from './service/episodios.service';


@NgModule({
  declarations: [
    EpisodiosComponent
  ],
  imports: [
    CommonModule,
    EpisodiosRoutingModule,
    MaterialModule,
    InfiniteScrollModule
  ],
  providers: [
    EpisodiosService,
    EpisodiosModel
  ]
})
export class EpisodiosModule { }
