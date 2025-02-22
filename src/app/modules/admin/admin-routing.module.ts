import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminWrapperComponent } from 'src/app/components/admin/admin-wrapper/admin-wrapper.component';
import { adminGuard } from 'src/app/guards/admin-guard.guard';

const routes:Routes=[
  {path:'',component:AdminWrapperComponent,canActivate:[adminGuard]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AdminRoutingModule { }
