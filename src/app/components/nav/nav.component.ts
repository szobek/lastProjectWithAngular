import { Component, inject } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { settings } from 'src/app/settings';

interface Navitem {
  name:string;
  path:string;
  icon:string;
  ariaLabel:string
}
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  dataService = inject(DataService)
  navItems:Navitem[]=[]
  constructor(){
   this.dataService.$settings.subscribe({
    next:(data:any)=>{
      if(data) {
        this.navItems=JSON.parse(data[0]["navItems"]).map((item:any)=>{
          return {name:item.name,path:item.path,icon:item.icon,ariaLabel:item.ariaLabel}
        }
      )
      }
    }
   })
    
  }
  
}
