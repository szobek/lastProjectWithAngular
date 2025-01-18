import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { CallService } from 'src/app/services/call.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent {
  addressForm=new FormGroup({
    zip:new FormControl(),
    city:new FormControl(),
  })
  activeModal = inject(NgbActiveModal);
  callService = inject(CallService);
  formBuilder=inject(FormBuilder)
  userdata: User | null = null;
  constructor() {
    this.callService.$userData.subscribe({
      next: (data: User|null) => {
        if (data != null) {

          this.userdata = data
          this.addressForm.patchValue({
            zip:data.address.zipcode,
            city:data.address.city
          })
        }
      }
    })
    
  }
  handleUpdateUserAddress(e:any){
    e.preventDefault()
    if(this.userdata!=null){
      this.userdata.address.zipcode=this.addressForm.get("zip")?.value
      this.userdata.address.city=this.addressForm.get("city")?.value
      this.callService.$userData.next(this.userdata)
      this.activeModal.close()
    }
  }
}
