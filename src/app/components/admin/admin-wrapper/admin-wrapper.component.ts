import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CallService } from 'src/app/services/call.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-admin-wrapper',
  templateUrl: './admin-wrapper.component.html',
  styleUrls: ['./admin-wrapper.component.scss']
})
export class AdminWrapperComponent {
  adminForm = new FormGroup({
    dummy_zip_url: new FormControl(),
    user_id: new FormControl(),
    invoices_limit: new FormControl(),
    dummy_pdf_url: new FormControl(),
  })
  dataService = inject(DataService)
  callService = inject(CallService)
  formBuilder = inject(FormBuilder)
  constructor() {
    this.adminForm.patchValue({
      dummy_zip_url: this.dataService.$config.value["dummy_zip_url"],
      user_id: this.dataService.$config.value["user_id"],
      invoices_limit: this.dataService.$config.value["invoices_limit"],
      dummy_pdf_url: this.dataService.$config.value["dummy_pdf_url"],
    })
  }
  onSubmit() {
    this.callService.saveConfigInDB(this.adminForm.value)
  }
  
}


