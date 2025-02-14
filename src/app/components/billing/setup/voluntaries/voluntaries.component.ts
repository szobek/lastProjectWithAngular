import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { Voluntary } from 'src/app/models/Voluntary';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-voluntaries',
  templateUrl: './voluntaries.component.html',
  styleUrls: ['./voluntaries.component.scss']
})
export class VoluntariesComponent {
  router = inject(Router)
  private dataService = inject(DataService)
  voluntaries: Voluntary[] = []
  userData: User | null = null
  constructor() {
    this.voluntaries = JSON.parse(this.dataService.$settings.value[0].voluntaries)

    this.dataService.$userData.subscribe({
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
  handleClickOnCardToUseAnOption(voluntary: any) {
    if (this.userData != null) {
      this.userData.voluntary = voluntary
      this.dataService.$userData.next(this.userData)
      this.router.navigateByUrl("billing")
    }


  }
}
