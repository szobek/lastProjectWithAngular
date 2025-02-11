import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movies/movie-list/movie-list.component';
import { MoviesRoutingModule } from './movies-routing.module';
import { SharedModule } from '../shared/shared.module';

import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MovieDetailsComponent } from 'src/app/components/movies/movie-details/movie-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MoviesRoutingModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MoviesModule { 
  
}
