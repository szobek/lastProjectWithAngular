import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/User';
import { DataService } from 'src/app/services/data.service';

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
  formBuilder=inject(FormBuilder)
  private dataService=inject(DataService)
  userdata: User | null = null;
  constructor() {
    this.dataService.$userData.subscribe({
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
      this.dataService.$userData.next(this.userdata)
      this.activeModal.close()
    }
  }
}
