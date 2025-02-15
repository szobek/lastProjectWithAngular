import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/Movie';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {
  id!: number
  activateRoute = inject(ActivatedRoute)
  dataService=inject(DataService)
  router=inject(Router)
  allMovie:Movie[]|null=null
  singleMovie:Movie|undefined

  ngOnInit(){
    this.id=Number(this.activateRoute.snapshot.paramMap.get("id"))
    this.dataService.$config.subscribe((res:any)=>{
      if(res){
        this.allMovie=JSON.parse(res[0]["movies"])
        this.singleMovie=this.allMovie?.filter((movie:Movie)=>movie.id===this.id)[0]
        document.title=(this.singleMovie)?this.singleMovie.title:""
        if(this.singleMovie===undefined) this.router.navigateByUrl('/')
      }
    
    })
  }

}
