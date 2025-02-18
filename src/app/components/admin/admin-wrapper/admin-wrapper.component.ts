import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-wrapper',
  templateUrl: './admin-wrapper.component.html',
  styleUrls: ['./admin-wrapper.component.scss']
})
export class AdminWrapperComponent {
  adminForm = new FormGroup({
    dummy_zip_url: new FormControl(),
    userId: new FormControl(),
  })
  dataService = inject(DataService)
  formBuilder = inject(FormBuilder)
  constructor() {
    this.adminForm.patchValue({
      dummy_zip_url: this.dataService.$config.value["dummy_zip_url"],
      userId: this.dataService.$config.value["userId"]
    })
  }
}
