import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Voluntary } from 'src/app/models/Voluntary';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-voluntaries',
  templateUrl: './voluntaries.component.html',
  styleUrls: ['./voluntaries.component.scss']
})
export class VoluntariesComponent {
  router = inject(Router)
callService=inject(CallService)
voluntaries:Voluntary[]=[]
userData: User | null = null
  constructor(){
    this.callService.$voluntaries.subscribe({
      next:(data:Voluntary[])=>{
        this.voluntaries=data
      }
    })

    this.callService.$userData.subscribe({
      next: (data: User | null) => {
        if (data != null) {
          this.userData = data
        }
      }
    })
  }

  handleBackButtonToBilling() {
    this.router.navigateByUrl("billing")
  }
  handleClickOnCardToUseAnOption(voluntary:any){
    if(this.userData!=null) {
      this.userData.voluntary=voluntary
      this.callService.$userData.next(this.userData)
      this.router.navigateByUrl("billing")
    }
    

  }
}
