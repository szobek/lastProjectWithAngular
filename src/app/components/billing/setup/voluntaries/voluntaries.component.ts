import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voluntaries',
  templateUrl: './voluntaries.component.html',
  styleUrls: ['./voluntaries.component.scss']
})
export class VoluntariesComponent {
  router = inject(Router)
  handleBackButtonToBilling() {
    this.router.navigateByUrl("billing")
  }
}
