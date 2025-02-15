import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent {
  dataService=inject(DataService)
  showLoader:boolean=true
  constructor() {
this.dataService.$config.subscribe(config=>{
  if(config) this.showLoader=false
})
  }
}
