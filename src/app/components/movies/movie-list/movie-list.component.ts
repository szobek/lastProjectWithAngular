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
  filteredMovies!:Movie[]
 constructor(){
  this.dataService.$settings.subscribe(res=>{
    if(res)   {
      this.filteredMovies=JSON.parse(res[0]["movies"])
    }
  })  
 }
}
