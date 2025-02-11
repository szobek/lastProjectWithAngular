import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from 'src/app/components/movies/movie-list/movie-list.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieDetailsComponent } from 'src/app/components/movies/movie-details/movie-details.component';

const routes:Routes = [
  {path: '', component: MovieListComponent,title:"Movies"},
  {path: ':id', component: MovieDetailsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
