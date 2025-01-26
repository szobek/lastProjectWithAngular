import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coffee } from 'src/app/models/Coffee';
import { CallService } from 'src/app/services/call.service';

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
  callService=inject(CallService)
  router=inject(Router)

  ngOnInit(){
    this.id=Number(this.activateRoute.snapshot.paramMap.get("id"))
    this.callService.$coffees.subscribe((coffees:Coffee[]|null)=>{
      if(coffees){
        this.allCoffee=coffees
        this.singleCoffee=this.allCoffee.filter((coffee:any)=>coffee.id===this.id)[0]
        if(this.singleCoffee===undefined) this.router.navigateByUrl('/coffees')
      }
    })
  }
}
