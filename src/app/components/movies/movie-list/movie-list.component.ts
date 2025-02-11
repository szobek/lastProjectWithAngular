import { Component, inject } from '@angular/core';
import { Movie } from 'src/app/models/Movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  dataService=inject(DataService)
  movies!:Movie[]
  filteredMovies!:Movie[]
 constructor(){
  this.dataService.$movies.subscribe(res=>{
    if(res)   {

      this.movies=res
      this.filteredMovies=res
    }
  })  
 }
}
