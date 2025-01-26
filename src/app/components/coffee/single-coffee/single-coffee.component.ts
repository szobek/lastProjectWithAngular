import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/Coffee';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-single-coffee',
  templateUrl: './single-coffee.component.html',
  styleUrls: ['./single-coffee.component.scss']
})
export class SingleCoffeeComponent {
  allCoffee!:Coffee[]
  singleCoffee: Coffee | null = null
  id!: number
  activateRoute = inject(ActivatedRoute)
  private dataService=inject(DataService)
  router=inject(Router)

  ngOnInit(){
    this.id=Number(this.activateRoute.snapshot.paramMap.get("id"))
    this.dataService.$coffees.subscribe((coffees:Coffee[]|null)=>{
      if(coffees){
        this.allCoffee=coffees
        this.singleCoffee=this.allCoffee.filter((coffee:any)=>coffee.id===this.id)[0]
        if(this.singleCoffee===undefined) this.router.navigateByUrl('/coffees')
      }
    })
  }
}
